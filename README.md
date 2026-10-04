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

The build first checks TypeScript and then generates static files in `dist/`.

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
- Edit introductory, education, and contact content in `src/main.tsx`.
- Edit the responsive theme in `src/styles.css`.
- Replace `public/Varadsingh-Pardeshi-Resume.docx` to update the downloadable resume.
- Terminal commands: `help`, `about`, `skills`, `experience`, `contact`, `clear`.
- Experience entries expand using native accessible disclosure controls.
- Google Fonts are optional external requests; system fallbacks are included.
- Email and phone links open the visitor's preferred applications; no contact form backend is needed.

The repository is public. The resume and contact information are intentionally included for the portfolio requested by its owner.
