// @ts-check
import { defineConfig } from "astro/config";

function resolveSiteUrl() {
  const siteUrl = process.env.SITE_URL;
  if (siteUrl) return siteUrl;

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:4321";
}

// https://astro.build/config
export default defineConfig({
  site: resolveSiteUrl(),
});
