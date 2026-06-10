---
name: github-actions-ssh-deploy-auth-fix
description: Diagnose and fix GitHub Actions SSH authentication failures (appleboy/ssh-action) on VPS — key mismatch after user change, server-side setup, and secret update
source: auto-skill
extracted_at: '2026-06-10T18:32:10.119Z'
---

# Fix GitHub Actions SSH deploy authentication failures

## Problem

GitHub Actions workflow using `appleboy/ssh-action` fails with:

```
ssh: handshake failed: ssh: unable to authenticate, attempted methods [none publickey], no supported methods remain
```

## Common root causes

| Cause | Symptom |
|---|---|
| **User mismatch** | Changed `username` from `root` to `deployer` (or vice versa) but SSH key in GitHub Secrets is only authorized for the old user |
| **Key format wrong** | GitHub Secret has extra whitespace, missing newlines, or wrong format (`-----BEGIN RSA PRIVATE KEY-----` vs `-----BEGIN OPENSSH PRIVATE KEY-----`) |
| **Server permissions** | `~/.ssh/` not `700`, `~/.ssh/authorized_keys` not `600`, or wrong owner |
| **No public key on server** | The private key in GitHub has no matching public key in the target user's `authorized_keys` |
| **SSH port wrong** | Custom port (e.g. `2022`) not set in workflow, or firewall blocks it |
| **Root SSH disabled** | `PermitRootLogin no` in `/etc/ssh/sshd_config` but workflow uses `username: root` |

## Diagnosis process

### 1. Gather information

- Read the workflow file: `.github/workflows/deploy.yml`
- Identify: `host`, `port`, `username`, `key` (which secret name), `script`
- Check if repos exist on GitHub: `curl -s "https://api.github.com/users/<owner>/repos?per_page=100" | jq '.[].name'`
- If repos don't exist on GitHub → no pipeline can run (push them first)

### 2. Check existing SSH connection manually (from local machine)

```bash
# Test as the user the workflow uses
ssh -p <port> -i <path-to-private-key> <username>@<host> "echo OK && whoami"
```

If this works but GitHub Actions doesn't → the key in the GitHub Secret is different from your local key.

### 3. Check GitHub Secrets format

Secrets must contain the **entire** private key file content, including `-----BEGIN ...-----` and `-----END ...-----` lines, with proper line breaks. A single-line key will fail.

## Fix procedure

### Option A — Generate new key pair and set up server user (recommended)

Use this when the existing key was set up for one user but you're switching to another user (e.g. `root` → `deployer`).

#### Step 1 — Generate a new key pair locally

```bash
ssh-keygen -t ed25519 -f deployer_key -N "" -C "deployer@github-actions"
```

Two files created: `deployer_key` (private) and `deployer_key.pub` (public).

#### Step 2 — SSH into server as a user with sudo (e.g. root)

```bash
# Using password auth (if available):
sshpass -p "<password>" ssh -p <port> root@<host>

# Or using an existing key:
ssh -p <port> -i <existing-key> root@<host>
```

#### Step 3 — Create/setup the deploy user on the server

```bash
# Create user if not exists
id deployer 2>/dev/null || useradd -m -s /bin/bash deployer
usermod -aG sudo deployer

# Set up SSH key
mkdir -p ~deployer/.ssh
echo '<PUBLIC_KEY_CONTENT>' >> ~deployer/.ssh/authorized_keys
chmod 600 ~deployer/.ssh/authorized_keys
chmod 700 ~deployer/.ssh
chown -R deployer:deployer ~deployer/.ssh

# Grant limited sudo for deployment commands
echo 'deployer ALL=(ALL) NOPASSWD: /usr/bin/git, /usr/bin/npm, /usr/bin/docker, /usr/bin/systemctl' > /etc/sudoers.d/deployer
chmod 440 /etc/sudoers.d/deployer

# Ensure deploy directory exists with correct ownership
mkdir -p /var/www/<project>
chown -R deployer:deployer /var/www/<project>
```

#### Step 4 — Update GitHub Secret

Go to **GitHub → Settings → Secrets and variables → Actions**, find the secret name used in the workflow (e.g. `VPS_SSH_KEY`), and replace its value with the **entire content** of the private key file (`deployer_key`), including the `-----BEGIN` and `-----END` lines.

#### Step 5 — Verify

Re-run the failed workflow. Or test locally:

```bash
ssh -p <port> -i deployer_key deployer@<host> "echo OK && whoami"
```

### Option B — Add existing key to the new user (if key already works for root)

```bash
ssh root@<host> -p <port>
mkdir -p ~deployer/.ssh
cat ~/.ssh/authorized_keys >> ~deployer/.ssh/authorized_keys
chmod 600 ~deployer/.ssh/authorized_keys
chmod 700 ~deployer/.ssh
chown -R deployer:deployer ~deployer/.ssh
```

This copies root's authorized keys to deployer. No need to update GitHub Secrets.

## Using sshpass on Windows (via WSL)

On Windows, use WSL for non-interactive password SSH:

1. Check sshpass availability: `wsl sh -c "which sshpass"` (install with `sudo apt-get install sshpass` if missing)
2. Find the correct mount path: WSL mounts Windows drives at `/mnt/host/` (not `/mnt/c/`)
3. Run: `wsl sshpass -p "<password>" ssh -o StrictHostKeyChecking=accept-new -p <port> root@<host> "<commands>"`
4. For complex multi-line scripts, use: `wsl sshpass -p "<password>" ssh -p <port> root@<host> "bash -s" < script.sh`

## Security notes

- Never deploy as `root` — create a dedicated `deployer` user with limited sudo
- Use ED25519 keys instead of RSA (smaller, faster, equally secure)
- Use `ssh-keygen -t ed25519` not `-t rsa`
- Store the SSH private key **only** in GitHub Secrets, never in the repository
- Consider adding a passphrase to the key (not supported by appleboy/ssh-action without extra config)

## When to use this skill

- GitHub Actions SSH deploy fails with authentication error
- Changing the SSH user in the deploy workflow
- Setting up a new VPS for GitHub Actions deployments from scratch
- Moving from root-based to deployer-based deployment
