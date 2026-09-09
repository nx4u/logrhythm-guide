# LogRhythm Reference Guide

Static bilingual Arabic/English website for LogRhythm SIEM operations, inspired by a SOC reference-guide style.

## Included pages

- `index.html` — main dashboard and LogRhythm architecture overview
- `use-cases.html` — AIE use-case library with detection logic
- `queries.html` — LogRhythm search/query patterns
- `troubleshooting.html` — common errors and component troubleshooting
- `checklists.html` — daily SOC health checks and documentation templates
- `style.css`
- `script.js`

## GitHub Pages deployment

1. Create a GitHub repository.
2. Upload all files to the repository root.
3. Go to **Settings > Pages**.
4. Select **Deploy from branch**.
5. Choose `main` and `/root`.
6. Save and open your Pages URL.

## Customization ideas

- Add screenshots from your LogRhythm lab.
- Add organization-specific thresholds, critical log source list, and escalation matrix.
- Convert each playbook into its own Markdown page if the guide grows.
- Add links to your internal SOC ticket templates and response procedures.

## Source basis

Content is based on the LogRhythm training/source files available in this workspace:
- AI Engine Product Training Student Guide
- LogRhythm 321 SIEM Support Engineer exercises
- LRSE notes
