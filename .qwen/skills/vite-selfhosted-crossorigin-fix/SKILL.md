---
name: vite-selfhosted-crossorigin-fix
description: Fix blank white page on self-hosted nginx — Vite adds crossorigin attribute that blocks CSS on same-origin deployments
source: auto-skill
extracted_at: '2026-06-10T19:05:59.625Z'
---

# Fix: Vite `crossorigin` attribute blocking CSS on self-hosted nginx

## Symptom

After deploying a Vite-built SPA to a self-hosted nginx server:

- Page loads but is completely blank (white)
- **No console errors** (or occasional `Failed to load module script` / MIME type errors)
- CSS doesn't apply
- Works fine locally (`npm run dev` or `vite preview`)
- Works fine when served via CDN or Vercel/Netlify

## Root cause

Vite adds `crossorigin` to both `<script type="module">` and `<link rel="stylesheet">` tags in the production build:

```html
<script type="module" crossorigin src="/assets/index-abc123.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-abc123.css">
```

On self-hosted nginx (same-origin), the `crossorigin` attribute on `<link rel="stylesheet">` causes browsers to perform a **CORS check** on the stylesheet. Since nginx doesn't send `Access-Control-Allow-Origin` headers by default, the browser blocks the CSS from applying — but crucially, **no error is shown in the console** for blocked stylesheets in most browsers.

For the `<script>` tag with `crossorigin`, the browser expects the response to have CORS headers. If the JS file is served without `Access-Control-Allow-Origin`, the module script may fail with a MIME type error (browser interprets the error page as JavaScript).

## Fix: strip `crossorigin` after build

### Option A — sed in deploy script (recommended)

Add a `sed` command after `npm run build` in your deploy workflow:

```bash
npm run build && \
sed -i 's/ crossorigin//g' dist/index.html
```

This removes ALL `crossorigin` attributes from the built `index.html`:

```html
<script type="module" src="/assets/index-abc123.js"></script>
<link rel="stylesheet" href="/assets/index-abc123.css">
```

### Option B — Vite `renderBuiltUrl` hook

In `vite.config.js/ts`, use `renderBuiltUrl` to omit `crossorigin`:

```js
export default defineConfig({
  // ...
  experimental: {
    renderBuiltUrl() {
      return { relative: true }
    }
  }
})
```

Note: This option depends on your Vite version — check the docs for the exact API.

### Option C — Post-build script

Create a `scripts/strip-crossorigin.js` file:

```js
import { readFileSync, writeFileSync } from 'fs'
const html = readFileSync('dist/index.html', 'utf-8')
writeFileSync('dist/index.html', html.replace(/ crossorigin/g, ''))
```

Add to `package.json`:
```json
"scripts": {
  "build": "vite build && node scripts/strip-crossorigin.js"
}
```

## Nginx config best practices for Vite SPA

Add proper cache headers and an `/assets/` location block:

```nginx
server {
    listen 443 ssl;
    server_name example.com;

    root /var/www/example/dist;
    index index.html;

    # SPA: always serve index.html for unknown routes
    # index.html: no-cache so browser always checks for fresh version
    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, must-revalidate" always;
    }

    # Hashed assets: immutable cache (filename changes = new version)
    # No try_files fallback — missing assets return 404, not index.html
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable" always;
    }

    # API proxy (if needed)
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
    }
}
```

Key points:
- `location /assets/` without `try_files` prevents stale asset requests from silently loading `index.html` (which has wrong MIME type for JS/CSS)
- `Cache-Control: no-cache` on `index.html` ensures browsers always check for a fresh version with correct asset hashes
- `Cache-Control: public, immutable` + `expires 1y` on assets — safe because Vite uses content-hashed filenames

## When to use this skill

- Deploying a Vite-built SPA (React, Vue, Svelte, etc.) to a self-hosted nginx server
- Page loads blank with no console errors after deployment
- CSS not applying on production but works locally
- Browser shows `Failed to load module script` with MIME type `text/html` for JS/CSS assets
