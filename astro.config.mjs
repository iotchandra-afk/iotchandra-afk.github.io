import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages user-site repo: iotchandra-afk.github.io
// Temporary URL: https://iotchandra-afk.github.io
// Final domain: https://www.chandrakanojia.com
// No base needed for a user-site repo (deploys to root)

export default defineConfig({
  site: 'https://www.chandrakanojia.com',
  // base is intentionally absent — user-site repos deploy to root
  integrations: [
    mdx(),
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
