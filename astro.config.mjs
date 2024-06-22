import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://themelone2.github.io',
    base: 'portfolio',
    output: 'server',
    adapter: node({
      mode: 'standalone',
    }),
})
