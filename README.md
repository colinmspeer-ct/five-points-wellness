# Five Points Wellness

Static website for Five Points Wellness LLC, the Fishtown acupuncture practice of Cara Speer, M.Ac., L.Ac. It replaces the previous React single-page app with server-rendered HTML, almost no JavaScript, and one URL per service, condition, and nearby neighborhood.

Canonical host: `https://fivepointswellness.com` (no www). This repo does not change DNS.

## Develop

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4317
```

`npm run build` writes the site to `dist/`. Node 22 or newer.

## Cloudflare Pages

Do not change DNS from this project. When you are ready to attach the domain:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22
- The `dist/_redirects` file sends `www` to the apex host, maps a few alias URLs onto the real pages, and redirects `*.html` file URLs to the clean paths.
- `dist/_headers` sets basic security headers and long cache times for fonts and images.
- `robots.txt` points at `https://fivepointswellness.com/sitemap.xml`.

The booking calendar (AcuBliss) and the Google Map stay unloaded until a visitor asks for them.

## Confirm before launch

These items are intentionally unresolved. The site does not invent them.

- Friday hours follow the Google Business Profile (9 AM–3 PM). The previous website said Friday until 4 PM.
- The previous privacy policy listed 1124 E Berks St. Every page now uses 2137 E Huntingdon St. Confirm that Berks is no longer a public address.
- Map coordinates are a public geocode of that street address, not an export from the Google listing. The footer map is a Google search embed. Replace it with the Business Profile embed if you have one.
- A 5.0 rating from 17 reviews is not marked up. Add `AggregateRating` only after the live listing is checked.
- No Instagram, Facebook, or Google profile URL is in the schema. A LinkedIn profile that names this practice was found and left out until Cara confirms it.
- School, license number, and year of licensure are not on the current site, so they are not on this one. The published credentials are M.Ac., L.Ac., more than 2,000 graduate hours, and two national board exams.
- An unused philosophy block in the old source was labeled as placeholder copy and was not on the live homepage. Those lines are not presented as Cara's words.
- A general acupuncture fee, insurance, and a cancellation rule are not published. Published fees are microneedling ($350 / $1,200 for four) and the race-day package ($325).
- Microneedling copy says both 50 minutes and 30–60 minutes, and both a series of 4–6 and a package of 4.
- Moxibustion, gua sha, cupping, facial cupping, liniments, tuina, nutrition, and qigong are described as included in an acupuncture visit at Cara's discretion. Confirm if any of them should be booked alone.
- No qigong class schedule is published. Confirm whether a class exists.
- Liniment ingredients and whether bottles are sold are not published. Moxa method (on the skin or held near it) is not published. How long cupping marks last is not published.
- The new terms page has not been reviewed by an attorney.
- Neighborhood distances are approximate straight-line figures from a named intersection to the office. Philadelphia neighborhood borders overlap, especially Fishtown and East Kensington.
- Rittenhouse has its own page, separate from Center City, because the trip from the square is different. Bala Cynwyd and Lower Merion are not included.
- Patient photos were already public on the previous site. Confirm they should stay up.
