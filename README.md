# Chandra Kanojia — chandrakanojia.com

This repository contains the static website for Chandra Kanojia's executive profile and thought leadership presence at chandrakanojia.com. The site is built with Astro and presents Chandra's work across enterprise AI, CRM/Salesforce, workflow transformation, regulated financial services, platform reliability, governance, and operating-model execution.

---

## Tech Stack

| Component | Choice |
|---|---|
| Framework | Astro 4.x (static output) |
| Language | TypeScript |
| CSS | Custom design token system |
| Content | .astro pages |
| Hosting | GitHub Pages (zero cost) |
| CMS | None — edit `.astro` files directly |

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:4321

npm run build
npm run preview
```

---

## Project Structure

```
src/
  layouts/
    BaseLayout.astro       — SEO, JSON-LD, theme, fonts
    PageLayout.astro       — Standard page with Nav + Footer
    ArticleLayout.astro    — Insight article layout
  components/
    Nav.astro              — Navigation + theme toggle
    Footer.astro           — Footer
  pages/
    index.astro            — Home
    executive-profile.astro
    enterprise-ai-transformation.astro
    contact.astro
    privacy.astro
    404.astro
    insights/
      index.astro
      ai-moved-from-assistance-to-execution-operating-model-has-not.astro
      enterprise-ai-fails-when-operating-model-cannot-absorb-it.astro
      crm-trap-systems-of-record-never-become-systems-of-action.astro
  styles/
    global.css             — Design token system

public/
  robots.txt
  sitemap.xml
  favicon.svg
  CNAME.disabled           — Enable when custom domain is ready
  styles/global.css
```

---

## Pages

| Page | URL |
|---|---|
| Home | / |
| Executive Profile | /executive-profile |
| Enterprise AI & Transformation | /enterprise-ai-transformation |
| Insights Index | /insights |
| Insight: AI to Execution | /insights/ai-moved-from-assistance-to-execution-operating-model-has-not |
| Insight: Operating Model | /insights/enterprise-ai-fails-when-operating-model-cannot-absorb-it |
| Insight: CRM Trap | /insights/crm-trap-systems-of-record-never-become-systems-of-action |
| Contact | /contact |
| Privacy | /privacy |
| 404 | /404 |

---

## Required Before Launch

1. **Confirm LinkedIn URL** — `https://www.linkedin.com/in/chandra-kanojia/` used throughout. Verify it is the canonical URL.
2. **Executive portrait** — No portrait in the initial build. Add to `/public/images/` and reference in pages when ready.
3. **OG image** — `/public/images/og-default.png` is a placeholder SVG. Replace with a real 1200×630 PNG.
4. **Proof metrics** — All metrics (7.2M+, 37%, 99.5%, $112M, $500M+, $8M–$12M, $10M–$300M, $15M–$20M) are published. Confirm each is approved for public use before pushing.
5. **BCG Digital Leader** — Listed as a Program under Executive Development. Confirm the program name is accurate.

---

## Contact

Contact path is LinkedIn only. No email is published anywhere on this site.

LinkedIn: `https://www.linkedin.com/in/chandra-kanojia/`

---

## Deployment — GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit: chandrakanojia.com"
git branch -M main
git remote add origin https://github.com/iotchandra-afk/iotchandra-afk.github.io.git
git push -u origin main
```

In GitHub: Settings → Pages → Source → **GitHub Actions** → Save.

Temporary URL: `https://iotchandra-afk.github.io`

Final domain: `https://www.chandrakanojia.com`

See `_GITHUB_PAGES_DEPLOYMENT.md` for full DNS and CNAME instructions.

---

## Adding New Insights

1. Copy an existing article file from `src/pages/insights/`
2. Update the ArticleLayout props: `title`, `lede`, `pillar`, `date`, `slug`
3. Write content in the body
4. Add the URL to `public/sitemap.xml`
5. Add a card to `src/pages/insights/index.astro`
6. Link from `src/pages/index.astro` Featured Insights section
7. Run `npm run build` to verify

---

## Analytics Setup (when ready)

**Plausible (recommended — no cookie consent required):**
```html
<script defer data-domain="chandrakanojia.com" src="https://plausible.io/js/script.js"></script>
```

**GA4:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Add either snippet before `</head>` in `src/layouts/BaseLayout.astro`.
