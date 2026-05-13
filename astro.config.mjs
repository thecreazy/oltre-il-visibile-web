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
      serialize(item) {
        // URL pairs that differ between locales — auto-linking via i18n won't match them.
        const base = 'https://oltreilvisibile.art';
        const asymmetric = {
          [`${base}/en/exhibitions/milan`]:    { en: `${base}/en/exhibitions/milan`,    it: `${base}/it/exhibitions/milano` },
          [`${base}/it/exhibitions/milano`]:   { en: `${base}/en/exhibitions/milan`,    it: `${base}/it/exhibitions/milano` },
          [`${base}/en/exhibitions/rome`]:     { en: `${base}/en/exhibitions/rome`,     it: `${base}/it/exhibitions/roma` },
          [`${base}/it/exhibitions/roma`]:     { en: `${base}/en/exhibitions/rome`,     it: `${base}/it/exhibitions/roma` },
          [`${base}/en/press`]:                { en: `${base}/en/press`,                it: `${base}/it/rassegna-stampa` },
          [`${base}/it/rassegna-stampa`]:      { en: `${base}/en/press`,                it: `${base}/it/rassegna-stampa` },
        };
        const pair = asymmetric[item.url];
        if (pair) {
          item.links = [
            { lang: 'en-GB', url: pair.en },
            { lang: 'it-IT', url: pair.it },
          ];
        }
        return item;
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
