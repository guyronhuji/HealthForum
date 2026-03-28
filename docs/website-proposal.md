# Website Proposal: Forum for Health Equality in East Jerusalem

## 1) Verified context (research snapshot)

As of **March 28, 2026**, the following points are supported by public sources:

- The forum appears in Hebrew as **"הפורום לשוויון בבריאות במזרח ירושלים"** in partner publications.
- JICC describes the forum as active since **2014**, initiated by **Dr. Yael Assor**, and working as a coalition of **8 organizations/activists**.
- Public summaries (ACRI and forum-linked publications) highlight service and quality gaps in East Jerusalem, including:
  - child-health infrastructure gaps,
  - oversight weaknesses in franchise clinics,
  - language accessibility barriers,
  - and large disparities in preventative care indicators.

## 2) Strategic website goals

1. Create one official multilingual reference point for the forum.
2. Make core indicators and policy asks understandable to residents, media, and decision-makers.
3. Publish updates in a way that is easy for non-technical staff to maintain.
4. Support advocacy with transparent sourcing and consistent data framing.

## 3) Recommended information architecture

- **Home**: mission, latest indicators, key calls to action.
- **About**: timeline, coalition model, governance and partners.
- **Data and Advocacy**: reports, letters, recommendations, campaign updates.
- **Affiliate Links**: member organizations and direct links to their websites.

Languages:

- English (`/en/`)
- Hebrew (`/he/`, RTL)
- Arabic (`/ar/`, RTL)

## 4) Visual design direction

A civic-editorial style designed for policy credibility and public readability:

- Warm neutral background with teal accents (trust + public-service tone).
- Strong typographic hierarchy with script-specific font stacks.
- Asymmetric but clean layout for emphasis without visual noise.
- Visible source notes near every metric-heavy section.

## 5) Technical stack

- **Framework**: Astro (static output)
- **CMS**: Pages CMS via `.pages.yml`
- **Hosting**: GitHub Pages via GitHub Actions workflow
- **Content source**: Markdown + structured frontmatter in `src/content/pages/*`

## 6) Editorial workflow

1. Edit content in Pages CMS (or markdown in repo).
2. Keep KPI values in page frontmatter so homepage can stay current.
3. Link every new metric to a source on the Reports page.
4. Use `lastUpdated` in each language to track freshness.

## 7) Sources used

- https://wac-maan.org.il/east-jerusalem-35/
- https://wac-maan.org.il/wp-content/uploads/2025/10/%D7%A4%D7%95%D7%A8%D7%95%D7%9D-%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-%D7%91%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-%D7%94%D7%9E%D7%96%D7%A8%D7%97%D7%99%D7%AA-%D7%A0%D7%AA%D7%95%D7%A0%D7%99-%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA-20102025.pdf
- https://www.english.acri.org.il/post/more-supervision-needed-for-health-clinics-in-east-jerusalem
- https://jicc.org.il/projects/public-health/
- https://jicc.org.il/he/project-health-hebrew/

Note: the Arabic forum name used in this scaffold is a direct translation for usability; confirm preferred institutional wording with the forum team before launch.
