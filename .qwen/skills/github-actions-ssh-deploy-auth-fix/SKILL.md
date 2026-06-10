---
name: github-actions-ssh-deploy-auth-fix
description: Full VPS deploy setup — SSH auth fix, appleboy action pitfalls, direct SSH commands, nvm path resolution, and remote command debugging
source: auto-skill
extracted_at: '2026-06-10T18:58:37.021Z'
---

# Fix GitHub Actions SSH Deploy: from auth failure to successful build

## Problem

GitHub Actions deploy workflow fails — can be authentication errors or remote command failures after auth succeeds.

## Authentication error patterns

### Pattern A — `ssh: handshake failed: ssh: unable to authenticate`

The appleboy/ssh-action Docker container (`appleboy/ssh-action@v1.0.3`) uses a Go-based SSH client. This can fail when:

| Cause | Symptom / Diagnosis |
|---|---|
| **User mismatch** | Changed `username` from `root` to `deployer` but key not authorized for deployer |
| **Key format — OpenSSH vs PEM** | `ssh.ParsePrivateKey: ssh: no key found` — Go crypto library cannot parse the new OpenSSH private key format (`-----BEGIN OPENSSH PRIVATE KEY-----`). Solution: use RSA 4096-bit PEM format (`ssh-keygen -t rsa -b 4096 -m PEM`) OR switch to direct SSH commands (see below) |
| **Multi-line secret corruption** | GitHub Actions truncates or corrupts multi-line secrets passed as env vars. Solution: base64-encode the key and decode at runtime |
| **Server permissions** | `~/.ssh/` not `700`, `~/.ssh/authorized_keys` not `600`, wrong owner |
| **No public key on server** | Private key in GitHub has no matching public key on the server |

### Pattern B — `ssh.ParsePrivateKey: ssh: no key found` (appleboy-specific)

This means the Go crypto library in the Docker container can't parse your key format. **This is the core reason to avoid appleboy/ssh-action** — it's a black box with limited key format support.

## Fix: replace appleboy/ssh-action with direct SSH commands

The most reliable approach: use the `run:` step directly with `ssh` + `base64`-encoded key, bypassing the Docker container entirely.

### Step 1 — Generate deploy key (RSA 4096 PEM format for best compatibility)

```bash
ssh-keygen -t rsa -b 4096 -m PEM -f deployer_rsa_key -N "" -C "deployer@github-actions"
```

> Note: ED25519 keys are smaller/faster but some SSH implementations have issues. RSA 4096 PEM is safest for cross-platform CI.

### Step 2 — Set up deployer user on VPS

```bash
# Create deployer user
id deployer 2>/dev/null || useradd -m -s /bin/bash deployer

# Set up SSH key
mkdir -p ~deployer/.ssh
echo '<PUBLIC_KEY_CONTENT>' >> ~deployer/.ssh/authorized_keys
chmod 600 ~deployer/.ssh/authorized_keys
chmod 700 ~deployer/.ssh
chown -R deployer:deployer ~deployer/.ssh

# Ensure deploy directory exists
mkdir -p /var/www/<project>
chown -R deployer:deployer /var/www/<project>
```

### Step 3 — Install nvm for deployer (critical!)

**Problem**: The deployer user cannot access `/root/` (default 700 permissions). If nvm is only installed for root, deployer can't use it.

**Fix**: Install nvm for the deployer user:

```bash
su - deployer
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# Exit back to root, then install Node:
sudo -u deployer bash -c '. /home/deployer/.nvm/nvm.sh && nvm install 24.15.0 && nvm alias default 24.15.0'
```

**Important**: Node is installed at `/home/deployer/.nvm/versions/node/v24.15.0/bin/node`. You can reference it directly with absolute paths if needed.

### Step 4 — Base64-encode the private key

On Windows (PowerShell):
```powershell
$key = Get-Content -Raw ".\deployer_rsa_key"
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($key))
Write-Host $b64  # Copy this value
```

On Linux/macOS:
```bash
base64 -w0 deployer_rsa_key  # Copy this value
```

### Step 5 — Store the GitHub Secret

Go to **GitHub → Settings → Secrets and variables → Actions**, find `VPS_SSH_KEY` (or whatever your workflow uses), paste the base64 value.

### Step 6 — Write the workflow

```yaml
name: Deploy to VPS

on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy via SSH
        env:
          SSH_HOST: ${{ secrets.VPS_HOST }}
          SSH_PORT: ${{ secrets.VPS_PORT }}
          SSH_USER: deployer
          SSH_KEY_B64: ${{ secrets.VPS_SSH_KEY }}
        run: |
          mkdir -p ~/.ssh
          echo "$SSH_KEY_B64" | base64 -d > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh-keyscan -p "$SSH_PORT" "$SSH_HOST" >> ~/.ssh/known_hosts

          ssh -i ~/.ssh/deploy_key \
            -p "$SSH_PORT" \
            -o StrictHostKeyChecking=no \
            "$SSH_USER@$SSH_HOST" \
            '. /home/deployer/.nvm/nvm.sh && \
             cd /var/www/kzelman && \
             git pull origin master && \
             npm install && \
             npm run build'
```

**Key points in this workflow:**
- Uses `base64 -d` to decode the SSH key from the secret (avoids multi-line secret corruption)
- Sources nvm with **absolute path** `. /home/deployer/.nvm/nvm.sh` (NOT `$HOME/.nvm/nvm.sh` — see quoting caveat below)
- Runs `npm install` before `npm run build` (VPS may have stale node_modules)
- `ssh-keyscan` avoids interactive host key prompt

## The quoting problem: why absolute paths matter

When you write the `run:` block in GitHub Actions, the command is executed on the GitHub runner (Linux). The runner processes the YAML and passes the `run:` content to a shell. For multi-line SSH commands in single quotes:

```yaml
run: |
  ssh ... "$SSH_USER@$SSH_HOST" \
    'export NVM_DIR="$HOME/.nvm" && \
     . "$NVM_DIR/nvm.sh" && ...'
```

The problem: on **Windows runners** or when cmd.exe processes the command, `\$` may be passed literally to the remote shell, causing `$HOME` to not expand. Even on Linux runners, the nested quoting can misbehave.

**Always use absolute paths inside SSH commands** to avoid quoting issues:
- ✅ `. /home/deployer/.nvm/nvm.sh` (source with absolute path)
- ❌ `export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"` (variable may not expand)

## Debugging: test the full deploy command chain

When SSH auth succeeds but the remote command fails (exit code 1):

1. **SSH as root** to test: `ssh -p <port> root@<host> "sudo -u deployer bash -c '. /home/deployer/.nvm/nvm.sh && cd /var/www/<project> && git pull origin master && npm install && npm run build'"`
2. **Test in isolation**: run each command separately (nvm, git pull, npm install, npm run build)
3. **Check node_modules**: if build fails with missing imports, `npm install` wasn't run after git pull
4. **Check nvm path**: if `nvm.sh: Permission denied`, the path is wrong or the user can't traverse to it

## Common remote command failures

| Error | Cause | Fix |
|---|---|---|
| `$NVM_DIR/nvm.sh: Permission denied` | Can't access /root/; nvm installed for wrong user | Install nvm for deployer: `. /home/deployer/.nvm/nvm.sh` |
| `node: command not found` | nvm not loaded | Source nvm before using node: `. /home/deployer/.nvm/nvm.sh` |
| `npm: command not found` | nvm not loaded (npm is bundled with node) | Same fix as above |
| `Build failed with 1 error: Failed to resolve import "react-helmet-async"` | npm install not run after git pull | Add `npm install` before `npm run build` |
| `git pull` fails | Permission denied, deploy key not set up | Check VPS git remote, deployer has write access |

## Server-side setup checklist

```bash
# 1. Create deployer user (skip if exists)
id deployer || useradd -m -s /bin/bash deployer

# 2. Install nvm for deployer
su - deployer
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# 3. Install Node
sudo -u deployer bash -c '. /home/deployer/.nvm/nvm.sh && nvm install 24 && nvm alias default 24'

# 4. Set up SSH access
mkdir -p ~deployer/.ssh
# Add public key
chmod 600 ~deployer/.ssh/authorized_keys
chmod 700 ~deployer/.ssh
chown -R deployer:deployer ~deployer/.ssh

# 5. Clone project
cd /var/www
git clone <repo-url> <project>
chown -R deployer:deployer /var/www/<project>
```

## When to use this skill

- Setting up a new VPS deploy from scratch via GitHub Actions
- appleboy/ssh-action fails with `ssh.ParsePrivateKey: ssh: no key found`
- Remote commands succeed in local SSH test but fail in GitHub Actions
- Need to debug nvm path/Node resolution in deploy commands
- Migrating from root-based deploys to a dedicated deployer user
