// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://fivepointswellness.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    {
      name: 'sitemap-xml',
      hooks: {
        'astro:build:done': async ({ dir, pages }) => {
          const locs = pages
            .map((page) => {
              let pathname = typeof page.pathname === 'string' ? page.pathname : '';
              if (pathname === '' || pathname === '/' || pathname === 'index' || pathname === '/index.html') pathname = '/';
              if (!pathname.startsWith('/')) pathname = `/${pathname}`;
              if (pathname.endsWith('/index.html')) pathname = pathname.slice(0, -'index.html'.length);
              if (pathname.endsWith('.html')) pathname = pathname.slice(0, -'.html'.length);
              if (pathname.includes('404')) return '';
              if (pathname !== '/' && !pathname.endsWith('/')) pathname = `${pathname}/`;
              return SITE + pathname;
            })
            .filter(Boolean);
          const unique = [...new Set(locs)].sort((a, b) => a.localeCompare(b));
          const lastmod = '2026-11-14';
          const urlset = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            ...unique.map((loc) => `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`),
            '</urlset>',
            '',
          ].join('\n');
          const index = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            `  <sitemap><loc>${SITE}/sitemap-0.xml</loc><lastmod>${lastmod}</lastmod></sitemap>`,
            '</sitemapindex>',
            '',
          ].join('\n');
          const outDir = dir.pathname;
          fs.writeFileSync(path.join(outDir, 'sitemap-0.xml'), urlset);
          fs.writeFileSync(path.join(outDir, 'sitemap.xml'), urlset);
          fs.writeFileSync(path.join(outDir, 'sitemap-index.xml'), index);
          console.log(`Wrote sitemap-index.xml and sitemap-0.xml with ${unique.length} URLs`);
        },
      },
    },
  ],
});
