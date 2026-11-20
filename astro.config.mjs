// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { LEGACY_PATHS, MOVED_TO_LEGACY, canonicalPath } from './src/lib/legacy.ts';

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
          const outDir = dir.pathname;

          // Original-site URLs are served as files (about.html) so GitHub Pages answers
          // /about with a 200 instead of a 301 to /about/.
          for (const legacy of LEGACY_PATHS) {
            const folder = path.join(outDir, legacy);
            const from = path.join(folder, 'index.html');
            const to = `${folder}.html`;
            if (!fs.existsSync(from)) throw new Error(`Legacy page not built: ${legacy}`);
            fs.renameSync(from, to);
            if (fs.readdirSync(folder).length) throw new Error(`Directory left beside legacy page: ${legacy}/`);
            fs.rmdirSync(folder);
          }

          const locs = pages
            .map((page) => {
              const raw = typeof page.pathname === 'string' ? page.pathname : '';
              if (raw.includes('404')) return '';
              const bare = `/${raw}`.replace(/\/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '');
              if (MOVED_TO_LEGACY[bare]) return '';
              return SITE + canonicalPath(raw);
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
          fs.writeFileSync(path.join(outDir, 'sitemap-0.xml'), urlset);
          fs.writeFileSync(path.join(outDir, 'sitemap.xml'), urlset);
          fs.writeFileSync(path.join(outDir, 'sitemap-index.xml'), index);
          console.log(`Wrote sitemap-index.xml and sitemap-0.xml with ${unique.length} URLs`);
        },
      },
    },
  ],
});
