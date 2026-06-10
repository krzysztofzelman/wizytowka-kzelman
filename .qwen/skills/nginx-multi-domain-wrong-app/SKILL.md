---
name: nginx-multi-domain-wrong-app
description: Debug and fix when one nginx virtual host loads another domain's content — check root paths, app type, and port mappings
source: auto-skill
extracted_at: '2026-06-10T19:22:07.398Z'
---

# Fix: nginx multi-domain serving wrong app

## Symptom

Multiple domains point to the same server (IP), but one domain loads another domain's app instead of its own.

Example: `magazyn.example.com` loads `example.com`'s frontend instead of the correct app.

## Root cause

nginx server block for the affected domain has `root` pointing to the same directory as another domain's server block. This happens when:
- The nginx config was copied/templated but the `root` path wasn't updated
- Or the server block is configured for a static SPA (`try_files /index.html`) when it should be a reverse proxy to a backend

## Debugging checklist (SSH into server)

### 1. Check the nginx config

```bash
cat /etc/nginx/sites-enabled/your-site
```

Look for the `server_name` matching the problematic domain and check its `root` directive.

### 2. Check what directories exist

```bash
ls -la /var/www/
```

Find the actual deployment directory for the affected app.

### 3. Identify the app type

Check what kind of app lives in the directory:

```bash
# Static frontend?
ls /var/www/your-app/dist/

# Java/Spring Boot?
ls /var/www/your-app/pom.xml

# Node.js?
cat /var/www/your-app/package.json

# Python?
ls /var/www/your-app/requirements.txt

# Docker?
cat /var/www/your-app/docker-compose.yml
ls /var/www/your-app/Dockerfile
```

### 4. Check what's already running

```bash
docker ps
ss -tlnp | grep -E '3000|8080|5000|8000'
```

This tells you what backend is already running and on which port.

### 5. Compare static vs dynamic serving

Based on app type, determine the correct nginx config:

| App type | nginx config |
|---|---|
| Static SPA (React/Vue dist/) | `root /var/www/xyz/dist` + `try_files $uri $uri/ /index.html` |
| Backend on port X | `proxy_pass http://localhost:X` |
| Backend with embedded frontend (Spring Boot, etc.) | `proxy_pass http://localhost:X` for everything |

## Fix: update the nginx server block

### Case A: Wrong static root

```nginx
# Before (serves other app's files)
server {
    server_name wrong-app.example.com;
    root /var/www/other-app/dist;   # <-- BUG: same as other domain
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# After (serves correct app's files)
server {
    server_name wrong-app.example.com;
    root /var/www/correct-app/dist;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Case B: Should be reverse proxy instead of static

```nginx
# Before (static SPA config, but app is backend)
server {
    server_name api.example.com;
    root /var/www/some/dist;
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# After (proxy to backend)
server {
    server_name api.example.com;
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Apply the fix

```bash
# Always backup first
cp /etc/nginx/sites-enabled/your-site /etc/nginx/sites-enabled/your-site.bak.$(date +%s)

# Edit the config (vim/nano or upload new file)
vim /etc/nginx/sites-enabled/your-site

# Test and reload
nginx -t && nginx -s reload
```

### Verify

```bash
curl -s -o /dev/null -w 'HTTP %{http_code}\n' https://your-domain.com/
curl -s https://your-domain.com/ | head -20
```

## Key insight

When multiple domains share an nginx config file, it's easy for one server block to accidentally inherit another's `root` directive. Always verify the `root` or `proxy_pass` for **each** server block independently — don't assume they're different because the `server_name` is different.
