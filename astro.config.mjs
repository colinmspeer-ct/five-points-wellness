// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://fivepointswellness.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    {
      name: 'sitemap-xml',
      hooks: {
        'astro:build:done': async ({ dir, pages }) => {
          const locs = pages
            .map((page) => {
              let pathname = typeof page.pathname === 'string' ? page.pathname : '';
              if (pathname === '' || pathname === '/' || pathname === 'index') pathname = '/';
              if (!pathname.startsWith('/')) pathname = `/${pathname}`;
              if (pathname.endsWith('/index')) pathname = pathname.slice(0, -'index'.length);
              if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
              if (pathname.includes('404')) return '';
              return SITE + (pathname === '/' ? '/' : pathname);
            })
            .filter(Boolean);
          const unique = [...new Set(locs)].sort((a, b) => a.localeCompare(b));
          const xml = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            ...unique.map((loc) => `  <url><loc>${loc}</loc><lastmod>2026-11-14</lastmod></url>`),
            '</urlset>',
            '',
          ].join('\n');
          const outDir = dir.pathname;
          fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
          const htmlRedirects = unique
            .map((loc) => {
              const route = loc.slice(SITE.length) || '/';
              const file = route === '/' ? '/index.html' : `${route}.html`;
              return `${file} ${route} 301`;
            })
            .join('\n');
          fs.appendFileSync(path.join(outDir, '_redirects'), `\n${htmlRedirects}\n`);
          console.log(`Wrote sitemap.xml with ${unique.length} URLs`);
        },
      },
    },
  ],
});
