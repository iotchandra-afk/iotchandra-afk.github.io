# GitHub Pages Deployment Guide
## Chandra Kanojia — chandrakanojia.com
Last updated: May 2025

---

## Repo and URL Reference

| Item | Value |
|---|---|
| GitHub username | iotchandra-afk |
| Repo name | iotchandra-afk.github.io |
| GitHub Pages source | GitHub Actions |
| Temporary live URL | https://iotchandra-afk.github.io |
| Final custom domain | https://www.chandrakanojia.com |
| Apex domain | https://chandrakanojia.com |
| Apex behavior | Redirect → www.chandrakanojia.com |
| CNAME file contents | `www.chandrakanojia.com` |

---

## Deployment Sequence

### Phase 1 — Push to GitHub and verify at iotchandra-afk.github.io

**Step 1: Initialize the repo locally (first time only)**
```bash
cd chandra-kanojia-site
git init
git add .
git commit -m "Initial commit: chandrakanojia.com"
git branch -M main
git remote add origin https://github.com/iotchandra-afk/iotchandra-afk.github.io.git
git push -u origin main
```

**Step 2: Configure GitHub Pages source**
1. Go to: https://github.com/iotchandra-afk/iotchandra-afk.github.io/settings/pages
2. Under "Build and deployment":
   - Source: **GitHub Actions** (not "Deploy from a branch")
3. Save.

**Step 3: Watch the Actions tab**
- Go to: https://github.com/iotchandra-afk/iotchandra-afk.github.io/actions
- The "Deploy to GitHub Pages" workflow should trigger automatically.
- Wait for green checkmark (typically 2–4 minutes).

**Step 4: Verify at temporary URL**
- Open: https://iotchandra-afk.github.io
- Verify: Home page loads with "Enterprise Transformation at Scale."
- Check: Navigation works, dark mode toggle works, Insights articles load.
- Check: Contact page shows LinkedIn-only path — no form, no email.

⚠️ **Do not proceed to Phase 2 until Phase 1 is confirmed working.**

---

### Phase 2 — Add custom domain in GitHub (AFTER Phase 1 works)

**Step 5: Set custom domain in GitHub Pages settings**
1. Go to: https://github.com/iotchandra-afk/iotchandra-afk.github.io/settings/pages
2. Under "Custom domain": enter `www.chandrakanojia.com`
3. Click Save.
4. GitHub will attempt to verify DNS — this will fail until Step 6 is done.
   That is expected. GitHub will display a DNS check warning.

⚠️ **Do not change GoDaddy DNS until you have confirmed Phase 1 is working.**

---

### Phase 3 — Configure GoDaddy DNS (ONLY after Phase 2)

**Step 6: GoDaddy DNS changes**

Log into GoDaddy → Manage DNS for chandrakanojia.com.

**Add these records:**

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | www | iotchandra-afk.github.io | 600 |
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

The four A records point the apex domain (chandrakanojia.com) to GitHub Pages.
GitHub Pages will then redirect apex → www automatically.

The CNAME record points www.chandrakanojia.com to the GitHub Pages user site.

**DNS propagation:** Allow 15–60 minutes. GitHub's DNS verification may take up to 24 hours in rare cases.

**Step 7: Enable HTTPS in GitHub Pages settings**
1. Go back to: Settings → Pages
2. Wait for DNS verification to show green.
3. Check "Enforce HTTPS" once available.

---

### Phase 4 — Verify final domain

**Step 8: Final verification**
- https://www.chandrakanojia.com → loads site ✅
- https://chandrakanojia.com → redirects to www ✅
- https://www.chandrakanojia.com/executive-profile → loads ✅
- https://www.chandrakanojia.com/insights → loads ✅
- https://www.chandrakanojia.com/contact → LinkedIn-only, no form ✅
- HTTPS padlock visible ✅

---

## CNAME File

**Current state for Phase 1:** `public/CNAME` is disabled for initial GitHub Pages validation.
The file exists as `public/CNAME.disabled` and contains `www.chandrakanojia.com`.

**Do not re-enable until Phase 1 is confirmed working at https://iotchandra-afk.github.io.**

**To re-enable before Phase 2 (custom domain setup):**
```bash
cd chandra-kanojia-site
mv public/CNAME.disabled public/CNAME
git add public/CNAME
git rm public/CNAME.disabled
git commit -m "Enable CNAME for custom domain: www.chandrakanojia.com"
git push origin main
```
After this commit deploys, set the custom domain in GitHub Pages Settings → Pages.

---

## GitHub Actions Workflow

File: `.github/workflows/deploy.yml`

Triggers on:
- Push to `main` branch
- Manual trigger via GitHub Actions tab (workflow_dispatch)

Build steps:
1. Checkout code
2. Setup Node 20
3. `npm ci`
4. `npm run build`
5. Upload `dist/` as Pages artifact
6. Deploy to GitHub Pages

---

## Future Deployments (after initial setup)

For every future update:
```bash
git add .
git commit -m "Update: [brief description]"
git push origin main
```
GitHub Actions deploys automatically. No manual steps needed.

---

## Troubleshooting

**Build fails in GitHub Actions:**
- Check Actions tab for error detail
- Most common cause: `npm ci` fails because `package-lock.json` is missing
- Fix: run `npm install` locally, commit `package-lock.json`

**Custom domain shows "not secure" warning:**
- Wait for GitHub DNS verification to complete
- Then enable "Enforce HTTPS" in Pages settings

**Site shows 404 at custom domain:**
- Verify DNS has propagated: `dig www.chandrakanojia.com CNAME`
- Verify CNAME in GitHub Pages settings matches `public/CNAME`
- Verify Pages source is set to "GitHub Actions" not "Deploy from branch"
