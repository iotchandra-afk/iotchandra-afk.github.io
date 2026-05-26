# Privacy and Contact Review
## Chandra Kanojia Executive Site — chandrakanojia.com
Last reviewed: May 2025

---

## Status: PASS — LinkedIn-only contact path confirmed

---

## Email Exposure Audit

| Check | Result |
|---|---|
| `mailto:` links in any page | ✅ NONE |
| Email address in contact form | ✅ NONE — contact form removed entirely |
| Email in JSON-LD / structured data | ✅ NONE — no contactPoint or email field in Person schema |
| Email in Open Graph / meta tags | ✅ NONE |
| Email in footer | ✅ NONE |
| Email in header | ✅ NONE |
| Email in page copy | ✅ NONE |
| Email in comments or source code | ✅ NONE |
| Email in astro.config.mjs | ✅ NONE |
| Email in README | ✅ NONE — mailto references removed |
| kanojiachandra or personal email handle | ✅ NONE |
| Any @domain.com email string | ✅ NONE |

---

## Contact Path Confirmation

**Single public contact path: LinkedIn only.**

LinkedIn URL used throughout: `https://www.linkedin.com/in/chandra-kanojia/`

| Location | LinkedIn URL present | Correct URL |
|---|---|---|
| Person schema `sameAs` (BaseLayout.astro) | ✅ Yes | `https://www.linkedin.com/in/chandra-kanojia/` |
| Footer (Footer.astro) | ✅ Yes | `https://www.linkedin.com/in/chandra-kanojia/` |
| Contact page primary CTA (contact.astro) | ✅ Yes | `https://www.linkedin.com/in/chandra-kanojia/` |
| Insights index follow CTA (insights/index.astro) | ✅ Yes | `https://www.linkedin.com/in/chandra-kanojia/` |

---

## Contact Page Language

The contact page (`/contact`) reads:

> "For executive search, CXO, board, speaking, or strategic conversations,
> connect through LinkedIn."

No form fields. No email field. No submit button. LinkedIn button only.

---

## JSON-LD / Structured Data

Person schema in `BaseLayout.astro` contains:
- `sameAs`: `["https://www.linkedin.com/in/chandra-kanojia/"]`
- No `email` field
- No `contactPoint` field
- No `telephone` field

ContactPage schema on `/contact` contains:
- `description` referencing LinkedIn only
- No `email` field

---

## Privacy Page

`/privacy` confirms:
- No personal information is collected by this site
- No contact form exists
- All inquiries via LinkedIn
- Only external service: Google Fonts (for typography)

---

## Verification Command

Run before any future deployment:
```bash
grep -rn "mailto:\|@gmail\|@outlook\|@yahoo\|kanojiachandra\|chandra@" src/ public/ .github/ astro.config.mjs
```
Expected result: no matches.
