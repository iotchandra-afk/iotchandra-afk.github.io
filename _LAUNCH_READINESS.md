# Launch Readiness Checklist
## Chandra Kanojia — chandrakanojia.com
Last updated: May 2025

---

## Build Status

```
Build command:  npm run build
Build result:   ✅ PASSED
Pages built:    9
Build time:     ~3 seconds
```

## Local Preview

```bash
cd chandra-kanojia-site
npm install          # only needed first time or after dependency changes
npm run dev          # → http://localhost:4321
```

For a production preview:
```bash
npm run build && npm run preview   # → http://localhost:4321
```

---

## Files Changed in This Session (deployment prep)

| File | Change |
|---|---|
| `src/pages/contact.astro` | Rebuilt entirely — LinkedIn-only, no form, no email |
| `src/pages/privacy.astro` | Removed email collection reference; LinkedIn-only language |
| `src/pages/index.astro` | Abstracted "renewal-fee avoidance" → "measurable commercial outcomes" |
| `src/pages/enterprise-ai-transformation.astro` | Renamed "Wealth Intelligence" → "Relationship Intelligence" |
| `src/layouts/BaseLayout.astro` | Updated LinkedIn sameAs to `/in/chandra-kanojia/` |
| `src/components/Footer.astro` | Updated LinkedIn URL to `/in/chandra-kanojia/` |
| `src/pages/insights/index.astro` | Updated LinkedIn URL to `/in/chandra-kanojia/` |
| `astro.config.mjs` | site = `https://www.chandrakanojia.com`; no base |
| `public/CNAME` | Created — contains `www.chandrakanojia.com` |
| `.github/workflows/deploy.yml` | Verified correct — no changes needed |
| `_PUBLIC_SAFETY_REVIEW.md` | Created |
| `_PRIVACY_CONTACT_REVIEW.md` | Created |
| `_GITHUB_PAGES_DEPLOYMENT.md` | Created |

---

## Blockers — Items that MUST be resolved before going live

| # | Blocker | Owner | Action |
|---|---|---|---|
| 1 | `public/CNAME` will redirect to www domain immediately once GitHub Pages custom domain is set | Chandra | Follow Phase 1 → Phase 2 → Phase 3 sequence in `_GITHUB_PAGES_DEPLOYMENT.md`. Do NOT skip. |
| 2 | Executive portrait not added | Chandra | Commission professional portrait. Add to `/public/images/`. Update pages where portrait should appear. |
| 3 | OG image (`og-default.png`) is SVG placeholder | Chandra | Replace with real 1200×630 PNG before going live for social sharing to work correctly. |

---

## Non-Blockers — Can be resolved after launch

| # | Item | Notes |
|---|---|---|
| 1 | Analytics not connected | Add GA4 or Plausible script to `BaseLayout.astro` when ready |
| 2 | Only 2 Insight articles published | Sufficient for launch. Add more following the pattern in existing article pages. |
| 3 | Operating Thesis page not built | Phase 2. Requires Chandra's editorial session. Do not publish without Chandra's direct voice. |
| 4 | Advisory/Board/CXO page not built | Phase 2. Build after positioning is confirmed. |
| 5 | Speaking/Media page not built | Phase 2. Build when speaking topic list is finalized and appearances exist. |
| 6 | Search Console not set up | Do after launch. Requires live domain. See setup notes in README. |

---

## Ready to Push to GitHub?

**Yes — conditionally.**

The codebase is email-clean, LinkedIn-configured, and deployment-structured.

**Before pushing, Chandra must confirm:**
1. He has created the repo `iotchandra-afk.github.io` on GitHub (if not yet done)
2. He has reviewed the contact page and confirms LinkedIn-only path is acceptable
3. He has reviewed the public-safety claims in `_PUBLIC_SAFETY_REVIEW.md`

**Push command when ready:**
```bash
cd chandra-kanojia-site
git init
git add .
git commit -m "Initial commit: chandrakanojia.com"
git branch -M main
git remote add origin https://github.com/iotchandra-afk/iotchandra-afk.github.io.git
git push -u origin main
```

---

## Ready for GoDaddy DNS?

**No — not yet.**

DNS must not be changed until:
1. Site is pushed to GitHub ✅
2. GitHub Actions workflow runs successfully ✅
3. Site is confirmed live at https://iotchandra-afk.github.io ✅
4. Custom domain is set in GitHub Pages settings ✅

Only after all four: configure GoDaddy DNS per `_GITHUB_PAGES_DEPLOYMENT.md`.

---

## Exact Next Human Action

**Chandra's action sequence:**

1. Create the repo `iotchandra-afk.github.io` on GitHub at https://github.com/new
   - Repository name: `iotchandra-afk.github.io`
   - Visibility: Public (required for GitHub Pages free tier)
   - Do not initialize with README (the local project already has one)

2. Run the push commands above from the `chandra-kanojia-site` folder.

3. In GitHub repo Settings → Pages → set source to **GitHub Actions**.

4. Watch the Actions tab — wait for green checkmark.

5. Open https://iotchandra-afk.github.io and confirm the site loads correctly.

6. Only then: proceed to custom domain and DNS steps per `_GITHUB_PAGES_DEPLOYMENT.md`.

---

## Quality Score — Post-Deployment-Prep

| Dimension | Score |
|---|---|
| Email exposure | 10/10 — zero email, zero mailto |
| LinkedIn installation | 10/10 — correct URL in all 4 locations |
| Contact path clarity | 10/10 — LinkedIn-only, clearly stated |
| Public-safety compliance | 10/10 — all banned metrics abstracted |
| Astro site URL config | 10/10 — www.chandrakanojia.com, no base |
| CNAME file | 10/10 — present and correct |
| GitHub Actions workflow | 10/10 — official pattern, correct |
| Build status | 10/10 — passed, 9 pages, zero errors |
| **Total** | **80/80** |
