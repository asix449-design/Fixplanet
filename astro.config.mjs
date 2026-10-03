import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fixplanet.org',
  integrations: [
    sitemap({
      filter: (page) => !/\/book\/?$/.test(new URL(page).pathname),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          ru: 'ru-RU',
          pl: 'pl-PL',
          lv: 'lv-LV',
        },
      },
    }),
  ],
  redirects: {
    '/book': '/',
    '/ru/book': '/ru/',
    '/pl/book': '/pl/',
    '/lv/book': '/lv/',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'pl', 'lv'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
