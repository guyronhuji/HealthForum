# Forum for Health Equality in East Jerusalem

Multilingual Astro website scaffold for **הפורום לשוויון בבריאות במזרח ירושלים** with:

- Astro static site architecture
- Trilingual content (`en`, `he`, `ar`)
- Pages CMS configuration (`.pages.yml`)
- GitHub Pages deployment workflow (`.github/workflows/deploy.yml`)

## Local development

```bash
npm install
npm run dev
```

Build test:

```bash
npm run build
```

## Content model

Content is stored in markdown files under:

- `src/content/pages/en/*.md`
- `src/content/pages/he/*.md`
- `src/content/pages/ar/*.md`

Each entry uses shared frontmatter fields (hero, CTA, stats, highlights, source note) and markdown body.

Routes:

- `/` auto-detects browser language and redirects to `/he/`, `/ar/`, or `/en/` (fallback)
- `/{lang}/` homepage
- `/{lang}/about/`
- `/{lang}/reports/`
- `/{lang}/affiliate-links/`

## Pages CMS

This repo includes `.pages.yml` for Pages CMS. After connecting the GitHub repo to Pages CMS, editors can update structured frontmatter and rich-text body for all languages.

Media uploads are configured to:

- input: `public/media`
- output: `/media`

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds on pushes to `main` and deploys `dist/` to GitHub Pages.

`astro.config.mjs` auto-sets `site` and `base` during GitHub Actions using repository environment variables.

## Design direction in this scaffold

- Editorial, civic visual language with warm neutrals and teal accents.
- Distinct typography per script (Latin, Hebrew, Arabic).
- Content-first layout with clear indicators, advocacy highlights, and source visibility.
- Full RTL support for Hebrew and Arabic.

## Source references used for initial content

- [Forum 2025 data report (Hebrew PDF)](https://wac-maan.org.il/wp-content/uploads/2025/10/%D7%A4%D7%95%D7%A8%D7%95%D7%9D-%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%91%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-%D7%94%D7%9E%D7%96%D7%A8%D7%97%D7%99%D7%AA-%D7%A0%D7%AA%D7%95%D7%A0%D7%99-%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-20102025.pdf)
- [ACRI English summary](https://www.english.acri.org.il/post/more-supervision-needed-for-health-clinics-in-east-jerusalem)
- [JICC Public Health (English)](https://jicc.org.il/projects/public-health/)
- [JICC Public Health (Hebrew)](https://jicc.org.il/he/project-health-hebrew/)
- [WAC-MAAN update page (Hebrew)](https://wac-maan.org.il/east-jerusalem-35/)
