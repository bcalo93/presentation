// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: define SITE_URL in the deployment environment so sitemap and SEO metadata use the real production domain.
  site: process.env.SITE_URL,
});
