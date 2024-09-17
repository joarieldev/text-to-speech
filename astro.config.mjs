// @ts-nocheck
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import astroCompress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroCompress({
      gzip: true,
      brotli: true,
      minify: true
    }),
  ]
});