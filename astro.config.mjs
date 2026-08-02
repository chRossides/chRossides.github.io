// @ts-check
import { execSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * `lastmod` for the sitemap, taken from the last commit rather than the build
 * time. The site also rebuilds on a schedule (see the annual rebuild in
 * .github/workflows/deploy.yml), and a build-time value would tell Google every
 * page had changed when nothing had. Falls back to build time if git is
 * unavailable, which should only happen outside CI.
 */
function lastContentChange() {
  try {
    return new Date(execSync('git log -1 --format=%cI', { encoding: 'utf8' }).trim());
  } catch {
    return new Date();
  }
}

export default defineConfig({
  site: 'https://www.chrossides.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'el',
    locales: ['el', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      lastmod: lastContentChange(),
      i18n: {
        defaultLocale: 'el',
        locales: { el: 'el', en: 'en' },
      },
    }),
  ],
});
