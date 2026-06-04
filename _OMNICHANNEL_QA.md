# Omnichannel QA — Chandra Kanojia Executive Site

Build source: latest language-only site archive plus omnichannel hardening pass.

## Progress ledger

- 10% — Source archive selected: `chandra-kanojia-final-language-only-update.tar.gz`.
- 20% — Typography decision applied: Inter for system UI; Source Serif 4 for Field Notes article body and pull quotes.
- 35% — Removed legacy display/mono typography residue: no Inter Tight, no IBM Plex Mono, no `font-mono` references remain.
- 45% — Social preview assets created for key pages and insight articles.
- 55% — Page-level Open Graph / Twitter image metadata connected.
- 65% — Enterprise AI Workbench added as a modular noindex placeholder, excluded from primary nav and sitemap.
- 75% — `llms.txt`, README, and schema posture reviewed for agent-readable consistency.
- 85% — Build executed successfully: `npm run build` generated 13 pages.
- 95% — Verification searches completed for old terms, public metrics, and unfinished-demo exposure.
- 100% — Final archive packaged.

## Channel readiness

| Gate | Status | Evidence |
|---|---|---|
| Human 30-second test | PASS | Homepage remains short and focused on enterprise AI, data, CRM/Salesforce, workflow, controls, and regulated work. |
| Board / CXO test | PASS | Enterprise AI and Field Notes emphasize work, data, autonomy, controls, value, and management confidence. |
| Executive recruiter test | PASS | Executive Profile, homepage, and briefings page make the role lane clear without credential-wall presentation. |
| Speaker / briefing buyer test | PASS | `src/pages/executive-briefings.astro` exists with themes, audience fit, formats, and CTA. |
| Google structure test | PASS | Canonicals, meta descriptions, sitemap, robots, page-specific titles, JSON-LD schema, and article pages are present. |
| AI agent / LLM discovery test | PASS | `public/llms.txt` provides preferred summary, topic clusters, public-safe proof categories, key pages, and guardrails. |
| Social preview test | PASS | Page-specific 1200x630 Open Graph images exist for Home, Profile, Enterprise AI, Field Notes, Briefings, Workbench, and each article. |
| Typography test | PASS | Inter is the site system; Source Serif 4 is reserved for article body and pull quotes; no Inter Tight / IBM Plex Mono remains. |
| Workbench modularity test | PASS | `/enterprise-ai-workbench` exists as a noindex placeholder; it is excluded from navigation and sitemap. |
| Public-risk test | PASS | No exact public metrics, no tenure-led positioning, no unfinished AI-demo promise in primary navigation. |

## Files materially changed in this pass

- `src/layouts/BaseLayout.astro`
- `src/layouts/ArticleLayout.astro`
- `src/styles/global.css`
- `public/styles/global.css`
- `src/pages/enterprise-ai-workbench.astro`
- `public/llms.txt`
- `README.md`
- `public/images/og-home.png`
- `public/images/og-profile.png`
- `public/images/og-enterprise-ai.png`
- `public/images/og-field-notes.png`
- `public/images/og-briefings.png`
- `public/images/og-workbench.png`
- article-specific Open Graph images under `public/images/`

## Build result

Command run:

```bash
npm install
npm run build
```

Result:

- Build completed successfully.
- Astro generated 13 pages.
- `npm install` reported 4 dependency vulnerabilities from installed packages. No `npm audit fix --force` was run because that could introduce breaking dependency changes unrelated to the site update.

## Verification searches

No hits remained in `src`, `public`, `dist`, or `README.md` for:

- `15+ years`
- `15 years`
- `more than 15 years`
- `Fifteen years`
- `AI-Readable`
- `Quiet Operating Thesis`
- `MVP`
- `Inter Tight`
- `IBM Plex`
- `font-mono`
- exact public metrics previously removed

## Workbench module note

The Workbench route is present only as a modular placeholder. It is noindexed, excluded from primary navigation, and excluded from the sitemap. The core site remains complete without it. The future AI demo can be developed in a separate branch by replacing `src/pages/enterprise-ai-workbench.astro` and adding any required serverless/API files.
