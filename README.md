# Varadsingh Pardeshi — Portfolio

A responsive, static React + TypeScript portfolio built with Vite. Content is based on the supplied resume; no invented projects, client names, or achievements.

## Local development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

The build checks TypeScript, bundles with Vite, and prerenders the portfolio into `dist/index.html`. React hydrates the static markup to enable the terminal, theme switch, and mobile menu. The server-rendering bundle in `.prerender/` is build-only and is not deployed. No server runtime is needed.

## Cloudflare Pages (GitHub integration)

Connect `Varadsingh/portfoliowebsite` and use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | React (Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Repository root (leave blank) |
| Environment variable | `NODE_VERSION=22` |

Cloudflare installs dependencies before building. No Workers adapter, server, API credentials, or Wrangler deploy command is required. The site uses section anchors, so no client-side route rewrite is necessary. `public/_headers` adds basic response headers.

Reference: https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/

## Content and design

- Edit role descriptions, skills, and awards in `src/data.ts`.
- Edit introductory, education, and contact content in `src/App.tsx`.
- Edit the three resume-based case studies and representative workflow in `src/SelectedWork.tsx`.
- Edit the responsive theme in `src/styles.css` and new section styles in `src/improvements.css`.
- Replace `public/Varadsingh-Pardeshi-Resume.pdf` to update the downloadable PDF. The original Word asset is retained for existing links.
- Terminal commands: `help`, `about`, `skills`, `experience`, `contact`, `clear`.
- Experience entries expand using native accessible disclosure controls.
- Google Fonts are optional external requests; system fallbacks are included.
- Dark is the default theme. The header's Light / Dark button switches themes and remembers a visitor's explicit choice in local storage. Both themes remain usable when storage is blocked.
- Employer logos are local assets in `public/logos/`; provenance is recorded in `public/logos/SOURCES.md`.
- Email and phone links open the visitor's preferred applications; no contact form backend is needed.
- LinkedIn: https://www.linkedin.com/in/varadsingh/
- Canonical domain: https://varadsingh.com/. If the domain changes, update `index.html`, `public/robots.txt`, and `public/sitemap.xml`.
- Social sharing uses the local 1200 × 630 `public/social-preview.png` image, Open Graph metadata, and Twitter card metadata. Structured profile data and a sitemap help search engines discover the portfolio. Indexing and rich results are controlled by search engines.
- Mobile navigation closes with Escape and returns keyboard focus to its menu button.

The repository is public. The resume and contact information are intentionally included for the portfolio requested by its owner.
