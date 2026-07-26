# chrossides.com

Website of Charalambos Rossides LTD — handmade flags, parade banners and embroidery in Nicosia, Cyprus, since 1938.

Built with [Astro](https://astro.build), served on GitHub Pages at https://www.chrossides.com. Bilingual: Greek at `/`, English at `/en/`.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve dist/ locally
```

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

One-time repo setting: **Settings → Pages → Source** must be set to **GitHub Actions** (not "Deploy from a branch").

## Quote form

The quote form posts to Formspree. The endpoint lives in `src/config.ts` — replace `YOUR_FORM_ID` with the real form ID from https://formspree.io (free tier is sufficient). Until then, submissions fail gracefully with the error message shown to the visitor.

## Content

All copy for both languages lives in `src/i18n/ui.ts`. Images live in `src/assets/` and are optimized at build time; favicons and other static files are in `public/`.
