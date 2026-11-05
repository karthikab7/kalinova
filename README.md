# Kalinova website

A lightweight, dependency-free static site for **Kalinova Private Limited** — ready for GitHub Pages
(or any static host). No build step, no framework, no tracking, no server-side form.

## Structure
```
website/
  index.html          single-page site: Home, Services, Research, Founder, Work, Contact
  404.html            friendly not-found page (used by GitHub Pages)
  css/styles.css      all styles (brand tokens, responsive, a11y, reduced-motion)
  js/main.js          ~30 lines: mobile nav toggle + footer year (no dependencies)
  site.webmanifest    PWA/app manifest
  robots.txt          crawler hints (edit the domain)
  assets/             logo SVGs, favicon set, og-image.png
```

## Local preview
No build needed. From this folder:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
Or just open `index.html` in a browser (some features like the manifest need a server).

## Deploy to GitHub Pages
1. Put the contents of `website/` at the root of a repo (e.g. `kalinova-site`) — or in `/docs`.
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → branch `main`, folder `/` (or `/docs`).
3. Wait for the Pages build; your site appears at `https://<user>.github.io/<repo>/`.
4. (Optional) Custom domain: add a `CNAME` file with the domain and configure DNS.

## Before you publish — deployment blockers
These are intentionally left as placeholders (see `../notes/facts-and-open-questions.md` §4):
- [ ] **Business email** — replace `contact@kalinova.example` in `index.html` (Contact section) and
      remove the yellow pre-launch note.
- [ ] **Domain** — replace `REPLACE-WITH-DOMAIN.example` in `index.html` (`<link rel="canonical">`,
      `og:url`) and in `robots.txt`.
- [ ] **Phone** — intentionally not shown; add only if you want it public.
- [ ] Confirm you're happy showing "Bengaluru 560054" (city + PIN; the full registered address is
      **not** on the site by design).

## What this site deliberately does NOT contain
No fabricated clients, logos, testimonials or team members. No analytics/tracking. No fake working
contact form (email link only — add a backend such as Formspree/Netlify Forms later if you want one).
No private documents, addresses or correspondence.

## Accessibility & SEO (built in)
Semantic landmarks, a skip link, visible keyboard focus, labelled nav with `aria-expanded`, colour
contrast per the brand guide, `prefers-reduced-motion` support, descriptive `<title>`/meta
description, Open Graph + Twitter card, favicon set and web manifest.

## Checks performed (2026-11-05)
See `../notes/facts-and-open-questions.md` and the completion report. HTML structure validated (one
`<h1>`, ordered headings, all nav anchors resolve, all local asset paths exist), links reviewed, and
a mobile/desktop layout review done. External arXiv/ORCID/GitHub/LinkedIn links verified as
well-formed (not auto-opened).
