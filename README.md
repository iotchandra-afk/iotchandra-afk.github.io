# Chandra Kanojia — Executive Website

This repository contains the static website for Chandra Kanojia’s executive profile and thought leadership presence at chandrakanojia.com.

The site presents Chandra’s work across enterprise AI, data readiness, CRM/Salesforce, workflow transformation, regulated financial services, platform reliability, governance, and operating-model execution.

## Current site architecture

- Home: executive positioning, operating proof categories, three mandate lanes, executive briefing preview, selected Field Notes, and mandate CTA.
- Executive Profile: mandate fit, public-safe proof categories, career arc, compact education and development, and engagement path.
- Enterprise AI Point of View: practical thesis on AI moving from demo to real work, including data, controls, evidence, and operating change.
- Field Notes: short executive notes on work, data, autonomy, and systems of action.
- Executive Briefings: topics, audience fit, and formats for board, CXO, executive search, consulting, and enterprise AI conversations.

## Public-content rules

- No exact internal operating metrics.
- No tenure-led positioning.
- No employer-confidential examples.
- No badge-wall credential presentation.
- No generated-site language such as MVP, reputation platform, score, or internal build grading.
- Public proof should remain category-based and defensible.

## Key pages

| Page | Path |
|---|---|
| Home | `/` |
| Executive Profile | `/executive-profile` |
| Enterprise AI Point of View | `/enterprise-ai-transformation` |
| Field Notes | `/insights` |
| Executive Briefings | `/executive-briefings` |
| Contact | `/contact` |

## Tech stack

- Astro static site
- CSS in `src/styles/global.css`
- GitHub Pages-compatible static output
- JSON-LD schema embedded through layouts and pages

## Development

```bash
npm install
npm run dev
npm run build
```

## Deployment

The build output is generated into `dist/`.

Do not publish without reviewing:

- public-facing language
- navigation
- mobile layout
- schema and metadata
- robots and sitemap
- no sensitive metrics or employer-specific claims

## SEO and agent-readability intent

The site is structured around the following durable topic clusters:

- enterprise AI transformation
- data readiness for AI
- AI governance
- CRM/Salesforce modernization
- workflow transformation
- controlled autonomy
- systems of action
- regulated financial services transformation
- executive briefings on enterprise AI

