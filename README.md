# Fix Planet

Public site for **Fix Planet** — a living atlas of technologies that repair the planet. Domain: [fixplanet.org](https://fixplanet.org). Languages: English (default), Russian, Polish, Latvian.

This is a static [Astro](https://astro.build) site, ready for [Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Pages

Unprefixed routes are English. Other locales use `/ru/`, `/pl/`, `/lv/` plus the same path.

| Route | Status |
| --- | --- |
| `/` | Home — portal hub of large section tiles on a full-page solarpunk city backdrop (fixed, light scrim). A short feature strip sits quieter below |
| `/solutions` | Topic hub tiles only (All + Water, Forests, Waste, Cities, Materials, Oceans, Energy). Cards live on `/solutions/all` and `/solutions/water` (etc.). `?tag=` redirects to those shelves |
| `/about` | Curator: Aigars Abramovics |
| `/book` | *New World* (Amazon) |
| `/wildlife` | Hub tiles only (Surviving / Endangered / Extinct). The *Homo sapiens* hero, dispersal map, and species cards live on `/wildlife/surviving`, `/endangered`, `/extinct`. Detail pages at `/wildlife/[slug]` |
| `/maps` | Hub tiles only (plus All). Cards live on `/maps/all` and `/maps/conflicts` (etc.). History of borders opens the century timeline. Detail pages at `/maps/[slug]` |
| `/innovations` | Hub tiles only (Ecology, Energy, AI). Cards live on `/innovations/ecology`, `/energy`, `/ai`. Detail pages at `/innovations/[slug]` |
| `/forests` | Hub tiles only. Satellite scrubber, reconstructions, numbers, and outlook live on `/forests/satellite`, `/history`, `/numbers`, `/outlook` |
| `/oceans` | Hub tiles only. Currents, salinity, SST, pollution, and numbers live on `/oceans/currents`, `/salinity`, `/sst`, `/pollution`, `/numbers` |
| `/law` | Hub tiles only (Ecology / AI / Animals). Category pages show three status shelves. Detail articles at `/law/[slug]`; shelf deep links at `/law/ecology/existing`, `/law/ai/ideas`, … |
| `/terraforming` | Hub tiles only. Cards live on `/terraforming/water`, `/desert`, `/climate`. Detail pages at `/terraforming/[slug]`. Old `/geoengineering` URLs redirect here |

## Languages

Astro i18n routing (`prefixDefaultLocale: false`) keeps English URLs unchanged. The header switcher (EN / RU / PL / LV) stays on the equivalent page.

Copy lives in `src/i18n/messages.ts` (UI), `src/i18n/solutions.ts` (the eight solution cards), `src/i18n/wildlife.ts` (species entries; Polish and Latvian files sit beside it), `src/i18n/maps.ts` (map catalog chrome plus entries; Russian, Polish, and Latvian files sit beside it), `src/i18n/innovations.ts` (Innovations chrome plus entries; `innovations-en.ts` / `-ru.ts` / `-pl.ts` / `-lv.ts` sit beside it), `src/i18n/forests.ts` (Forests chrome; `forests-en.ts` / `-ru.ts` / `-pl.ts` / `-lv.ts` sit beside it), `src/i18n/oceans.ts` (Oceans chrome; `oceans-en.ts` / `-ru.ts` / `-pl.ts` / `-lv.ts` sit beside it), `src/i18n/law.ts` (Law chrome plus entries; `law-en.ts` / `-ru.ts` / `-pl.ts` / `-lv.ts` sit beside it), and `src/i18n/terraforming.ts` (Terraforming chrome plus entries; `terraforming-en.ts` / `-ru.ts` / `-pl.ts` / `-lv.ts` sit beside it). To add a string: add the key to `en`, then the same key to `ru`, `pl`, and `lv`, and read it with `getUi(locale)`, `getMapsPage(locale)`, `getInnovationsPage(locale)`, `getForestsPage(locale)`, `getOceansPage(locale)`, `getLawPage(locale)`, or `getGeoPage(locale)`. New pages need the English file under `src/pages/` and a thin `src/pages/[locale]/` wrapper that reuses the same view.

To add a wildlife species: add metadata in `src/data/wildlife.ts` (English slug, Latin name, tab, IUCN code, image credit), the same slug in all four language objects, and a photo in `public/images/wildlife/`. Status shelves are `/wildlife/surviving`, `/wildlife/endangered`, and `/wildlife/extinct` (`?status=` on the hub redirects).

To add a map: add a row in `src/data/maps.ts` (English slug, category, vintage, named source, URLs, unique preview file), the same slug in `en` / `ru` / `pl` / `lv` under `src/i18n/maps.ts`, and a licensed preview in `public/images/maps/` recorded in `credits.json`. Do not reuse Blue Marble as a stand-in. Category shelves are `/maps/conflicts`, `/ru/maps/conflicts`, …; the full list is `/maps/all`.

To add a Forests satellite year frame: export a NASA Worldview Snapshot (`MODIS_Terra_L3_NDVI_Monthly`, 1 July, 2400×1200, coastlines), save as `public/images/forests/ndvi-YYYY.jpg`, append a row in `src/data/forests.ts`, add the same id under `frames` in all four `forests-*.ts` files, and record `public/images/forests/credits.json`. Do not invent a continuous map from 10,000 BCE. Reconstruction plates stay labeled reconstruction / estimate. Do not invent hectare counts.

To add an Oceans SST year frame: export a NASA Worldview Snapshot (`GHRSST_L4_MUR_Sea_Surface_Temperature` or `_Anomalies`, 1 July, 2400×1200, coastlines), save as `public/images/oceans/sst-YYYY.jpg` (or `sst-anom-YYYY.jpg`), append a row in `src/data/oceans.ts`, add the same id under `frames` in all four `oceans-*.ts` files, and record `public/images/oceans/credits.json`. Do not invent a live global current animation. Do not invent a single “pollution” raster: plastics, oil, chlorophyll, and hypoxia stay separate, labeled datasets. Do not invent heat / pH / plastic / dead-zone numbers.

To add a law entry: add a row in `src/data/law.ts` (English slug, category `ecology` | `ai` | `animals`, status `existing` | `pending` | `ideas`, year, image credit, primary source URLs), the same slug in all four language objects under `src/i18n/law-en.ts` (and `-ru` / `-pl` / `-lv`), and a Wikimedia/PD image in `public/images/law/` recorded in `credits.json`. Category hub tiles are `/law/ecology`, `/law/ai`, `/law/animals`; shelves are `/law/ecology/existing`, `/law/ai/pending`, `/law/animals/ideas`. Do not invent statutes, adoption dates, or impact stats. Ideas must stay on the Ideas shelf and must not read as enacted law. Prefer “intended effect” unless a named official evaluation exists.

To add a Terraforming project: add a row in `src/data/terraforming.ts` (English slug, shelf `water` | `desert` | `climate`, status `proposed` | `partial` | `built-struggling` | `failed` | `ongoing` | `research`, years, image credit, primary source URLs), the same slug in all four language objects under `src/i18n/terraforming-en.ts` (and `-ru` / `-pl` / `-lv`), and a Wikimedia/PD image in `public/images/geoengineering/` recorded in `credits.json`. Shelf tiles are `/terraforming/water`, `/terraforming/desert`, `/terraforming/climate`; `?shelf=` on the hub redirects. `/geoengineering` and locale twins redirect to the new paths. Do not invent hectare counts, collapse dates, or failure stories. Prefer “partial success with costs” when evidence is mixed. Climate-intervention cards stay on the climate shelf and must read as research/proposal, not a ready planetary fix. Keep Saudi Green Initiative, historical groundwater wheat, and NEOM as separate programmes.

To add an innovation card: add a row in `src/data/innovations.ts` (English slug, area `ecology` | `energy` | `ai`, status `research` | `pilot` | `deployed` | `myth-busted`, image credit), the same slug in all four language objects under `src/i18n/innovations-en.ts` (and `-ru` / `-pl` / `-lv`), and a Wikimedia/PD or generated image in `public/images/innovations/`. Record the credit in `public/images/innovations/credits.json`. Area hub tiles are real links (`/innovations/ecology`, `/ru/innovations/energy`, …); `?area=` also works. Do not invent breakthroughs. Perpetual-motion / “free energy” devices belong only as myth-busted cards. Do not claim fusion is commercial unlimited power.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build     # output in dist/
npm run preview   # serve the production build
```

## Cloudflare Pages deploy

1. Push this repository to GitHub (already the source of truth).
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/) go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the `Fixplanet` repo and use these build settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node.js version | `20` (set `NODE_VERSION=20` under **Environment variables**, or rely on `.nvmrc`) |

4. Production branch: `main`. Preview deployments are created automatically for pull requests.
5. After the first successful build, add the custom domain (below).

The Worker name is `fixplanet`. `wrangler.jsonc` points static assets at `dist/` after `npm run build`. You can also publish a local build with [Wrangler](https://developers.cloudflare.com/workers/static-assets/):

```bash
npm run build
npx wrangler deploy
```

Pages-style upload still works if that is how the project is connected:

```bash
npm run build
npx wrangler pages deploy dist --project-name=fixplanet
```

## DNS for fixplanet.org

The domain is already on Cloudflare. After the Pages project exists:

1. Open the Pages project → **Custom domains** → **Set up a custom domain**.
2. Add `fixplanet.org` and `www.fixplanet.org`.
3. Because the zone is on Cloudflare, DNS records are created for you:

   - Apex `fixplanet.org` — CNAME flattening to `<project>.pages.dev`
   - `www` — CNAME to `<project>.pages.dev`

4. SSL is issued automatically (Universal SSL). Wait until the custom domain status is **Active**.
5. Optional: in **Custom domains**, pick whether apex or `www` is canonical. Astro’s `site` is set to `https://fixplanet.org`.

If you manage DNS by hand instead of the Pages wizard:

```
fixplanet.org     CNAME  <project>.pages.dev   (proxied, orange cloud)
www               CNAME  <project>.pages.dev   (proxied, orange cloud)
```

Do not point the apex at GitHub Pages or a third-party host while Cloudflare Pages is serving the site.

## Design notes

- Brand greens: primary `#1B7A4E`, leaf `#3FA36A`, cream `#F4F7F2`
- Home atmosphere: `public/images/home/green-city-future-bg.jpg` is a fixed full-page backdrop on `/` and locale homes (`theme="home"`). A light dark vignette keeps the city visible; dark glass hub tiles (nav destinations) are the primary entry. Meadow assets remain in `public/images/` but are not the Home page atmosphere.
- Section themes: Maps uses NASA Blue Marble; Wildlife uses `public/images/wildlife/wildlife-section-bg.jpg` with a cream/dark scrim; Innovations uses `public/images/innovations/innovations-section-bg.jpg` (Earth + circuits, generated site theme) with a stronger cream/dark scrim; Forests uses `public/images/forests/forests-section-bg.jpg` (fogged redwoods, CC BY-SA) with a deep green/black scrim; Oceans uses `public/images/oceans/oceans-section-bg.jpg` (ISS Pacific sunglint, public domain) with a deep navy/black scrim; Law uses a courthouse/parchment institutional backdrop; Terraforming uses NASA Toshka Lakes with an ochre / carved-earth scrim, distinct from forests green and innovations circuits. Other sections keep their own themes.
- Typeface: Inter

## License

Site content © Fix Planet. Home city and meadow images are included as site assets.
