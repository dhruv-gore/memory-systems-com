// @ts-check
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    remarkPlugins: [remarkBreaks]
  },

  integrations: [expressiveCode()]
});