import { getCollection } from 'astro:content';
import { getHomePath, getProjectPath, getWritingPath, locales } from '@/i18n/config';

const fallbackSite = 'https://example.com';

export async function GET({ site }) {
  const projects = await getCollection('projects');
  const writing = await getCollection('writing');
  const urls = new Set<string>();
  const origin = new URL(site?.toString() ?? fallbackSite);

  locales.forEach((locale) => {
    urls.add(new URL(getHomePath(locale), origin).toString());
  });

  projects.forEach((project) => {
    urls.add(new URL(getProjectPath(project.data.locale, project.data.path), origin).toString());
  });

  locales.forEach((locale) => {
    urls.add(new URL(getWritingPath(locale), origin).toString());
  });

  writing.forEach((article) => {
    urls.add(new URL(getWritingPath(article.data.locale, article.data.path), origin).toString());
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls]
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
