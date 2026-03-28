# Health Forum — Data Visualizations

Charts for the Forum for Health Equality in East Jerusalem homepage.

## Files

- **`data.json`** — All extracted data from the Forum 2025 report (Clalit FOI data, 2018–2022). Rates are per 10,000 insured.
- **`charts-all.html`** — Combined page with all 6 charts. Open in a browser to preview.
- **`chart-er-referrals.html`** — ER referral rates (adults + children), line charts over time.
- **`chart-speech-funnel.html`** — Speech delay care funnel (referral → diagnosis → treatment), 2022 snapshot.
- **`chart-gap-summary.html`** — Horizontal bar chart showing the gap multiplier across all indicators. Best candidate for hero section.
- **`chart-screening.html`** — Bone density screening + motor delay physiotherapy, line charts over time.

## Design Tokens

All charts use the site's existing CSS custom properties:

```
--sand-1: oklch(0.97 0.015 80)    /* warm sand background */
--ink: oklch(0.26 0.035 220)       /* dark text */
--ink-soft: oklch(0.45 0.03 220)   /* muted text */
--teal: oklch(0.56 0.12 200)       /* accent */
--teal-dark: oklch(0.42 0.1 208)   /* dark accent */
```

Chart-specific colors:
- **Direct (West Jerusalem):** `#d4563a` (warm red-orange)
- **Franchise (East Jerusalem):** `#2978b5` (blue)

## Data Source

Forum for Health Equality in East Jerusalem, July 2025.
Data collected by Dr. Yael Essor (Hebrew University) via FOI requests to Clalit Health Services.
Analysis by Prof. Guy Ron (Hebrew University) and Ophir Gonen (Ben Gurion University / Taub Center).
