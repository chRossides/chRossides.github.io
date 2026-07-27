# chrossides.com

Website of Charalambos Rossides LTD — handmade flags, parade banners and embroidery in Nicosia, Cyprus, since 1938.

Built with [Astro](https://astro.build), served on GitHub Pages at https://www.chrossides.com. Bilingual: Greek at `/`, English at `/en/`.

## Development

Requires Node.js ≥ 22.12 (see `.nvmrc`).

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve dist/ locally
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

One-time repo setting: **Settings → Pages → Source** must be set to **GitHub Actions** (not "Deploy from a branch").

## Quotes

The site is phone-first: all quote CTAs are click-to-call `tel:` links to the shop and factory numbers (no form backend, no JavaScript).

## Content

All copy for both languages lives in `src/i18n/ui.ts`. Images live in `src/assets/` and are optimized at build time; favicons and other static files are in `public/`.

## Research and plans

Internal working documents — company research, the competitor teardown, and the ranking, off-site, reviews and social plans — live in [`docs/`](docs/README.md). They are not published by the site build.
