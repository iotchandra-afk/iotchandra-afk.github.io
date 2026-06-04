# Chandra Kanojia Executive Site

Static Astro site for Chandra Kanojia's executive profile and thought leadership presence at `chandrakanojia.com`.

The site is structured around enterprise AI, data readiness, CRM/Salesforce modernization, workflow transformation, AI governance, controlled autonomy, executive briefings, and regulated operating change.

## Architecture

Core public pages:

- `/` — executive landing page
- `/executive-profile` — executive profile and deployment lane
- `/enterprise-ai-transformation` — enterprise AI point of view
- `/insights` — Field Notes and article index
- `/executive-briefings` — speaker / executive briefing page
- `/contact` — LinkedIn contact route

Reserved module:

- `/enterprise-ai-workbench` — noindex modular placeholder for a future interactive AI demonstration. It is intentionally excluded from primary navigation and the public sitemap until activated.

## Design system

Typography:

- Inter for the core site system
- Source Serif 4 only for Field Notes article body and pull quotes

Visual direction:

- White-first executive profile system
- Deep navy authority color
- Electric indigo signal color
- Muted brass control accent
- Minimal labels, no credential-stack presentation, no public metric dump

## Search and agent-readiness

The site includes:

- canonical URLs
- page-specific titles and meta descriptions
- Open Graph / Twitter preview metadata
- page-specific 1200x630 social images for key pages and articles
- sitemap
- robots.txt
- `llms.txt`
- JSON-LD for Person, WebSite, ProfilePage, Article, CreativeWork where appropriate, and BreadcrumbList

## Commands

```bash
npm install
npm run build
```

## Public-risk controls

The public site uses proof categories rather than exact internal metrics. It avoids tenure-led positioning, public credential-wall language, employer-sensitive operating claims, and unfinished AI-demo promises.
