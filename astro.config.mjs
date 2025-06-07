// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'preserve'
  },

  server: {
    port: 4320
  },

  vite: {
    plugins: [tailwindcss()]
  }
});