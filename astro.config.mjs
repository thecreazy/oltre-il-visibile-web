import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://oltreilvisibile.art',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      // Exclude the bare root (it's a meta-refresh stub to /it).
      filter: (page) =>
        !/^https?:\/\/[^/]+\/?$/.test(page) && !page.endsWith('/index.html'),
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it-IT',
          en: 'en-GB',
        },
      },
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
