# Fix Planet

Public site for **Fix Planet** — a living atlas of technologies that repair the planet. Domain: [fixplanet.org](https://fixplanet.org). Languages: English (default), Russian, Polish, Latvian.

This is a static [Astro](https://astro.build) site, ready for [Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Pages

Unprefixed routes are English. Other locales use `/ru/`, `/pl/`, `/lv/` plus the same path.

| Route | Status |
| --- | --- |
| `/` | Home — portal hub of large section tiles on a full-page solarpunk city backdrop (fixed, light scrim). Latest solutions and a short feature strip sit quieter below |
| `/solutions` | Topic hub (All + Water, Forests, Waste, Cities, Materials, Oceans, Energy) then problem → technology cards. Topic URLs at `/solutions/water` and `?tag=` |
| `/about` | Curator: Aigars Abramovics |
| `/book` | *New World* (Amazon) |
| `/wildlife` | Hub tiles first (Surviving / Endangered / Extinct), then *Homo sapiens* hero and dispersal map, then the status list. Detail pages at `/wildlife/[slug]`. Themed South-American wildlife collage backdrop (scrimmed for type; map sits on a solid panel) |
| `/maps` | Sourced map catalog (conflict, languages, religion, crime, pollution, energy, minerals, borders, forests, water, people). Detail pages at `/maps/[slug]` show the preview full-width with source text below; category filters at `/maps/conflicts` and `?category=` |
| `/innovations` | Hub tiles first (Ecology, Energy, AI), then that area’s cards. Detail pages at `/innovations/[slug]`; area URLs at `/innovations/ecology`, `/energy`, `/ai` and `?area=`. Themed Earth+circuits backdrop (scrimmed cream/dark panels) |
| `/forests` | Monitoring hub: NASA July NDVI scrubber (2001–2025), five reconstruction plates, sourced FAO/GFW/Crowther numbers, trend + scenarios. Deep links `/forests/satellite`, `/history`, `/numbers`, `/outlook`. Themed redwood-fog backdrop. Not a fake Holocene movie |
| `/law` | Placeholder — coming soon |

## Languages

Astro i18n routing (`prefixDefaultLocale: false`) keeps English URLs unchanged. The header switcher (EN / RU / PL / LV) stays on the equivalent page.

Copy lives in `src/i18n/messages.ts` (UI), `src/i18n/solutions.ts` (the eight solution cards), `src/i18n/wildlife.ts` (species entries; Polish and Latvian files sit beside it), `src/i18n/maps.ts` (map catalog chrome plus entries; Russian, Polish, and Latvian files sit beside it), `src/i18n/innovations.ts` (Innovations chrome plus entries; `innovations-en.ts` / `-ru.ts` / `-pl.ts` / `-lv.ts` sit beside it), and `src/i18n/forests.ts` (Forests chrome; `forests-en.ts` / `-ru.ts` / `-pl.ts` / `-lv.ts` sit beside it). To add a string: add the key to `en`, then the same key to `ru`, `pl`, and `lv`, and read it with `getUi(locale)`, `getMapsPage(locale)`, `getInnovationsPage(locale)`, or `getForestsPage(locale)`. New pages need the English file under `src/pages/` and a thin `src/pages/[locale]/` wrapper that reuses the same view.

To add a wildlife species: add metadata in `src/data/wildlife.ts` (English slug, Latin name, tab, IUCN code, image credit), the same slug in all four language objects, and a photo in `public/images/wildlife/`. Status hub tiles are deep-linked as `/wildlife`, `/wildlife/endangered`, and `/wildlife/extinct` (`?status=` also works).

To add a map: add a row in `src/data/maps.ts` (English slug, category, vintage, named source, URLs, unique preview file), the same slug in `en` / `ru` / `pl` / `lv` under `src/i18n/maps.ts`, and a licensed preview in `public/images/maps/` recorded in `credits.json`. Do not reuse Blue Marble as a stand-in. Category chips are real links (`/maps/conflicts`, `/ru/maps/conflicts`, …). Do not invent country-level crime or conflict numbers. Prefer a hosted open map, or a labeled Fix Planet overview, plus an “Open source map” link.

To add a Forests satellite year frame: export a NASA Worldview Snapshot (`MODIS_Terra_L3_NDVI_Monthly`, 1 July, 2400×1200, coastlines), save as `public/images/forests/ndvi-YYYY.jpg`, append a row in `src/data/forests.ts`, add the same id under `frames` in all four `forests-*.ts` files, and record `public/images/forests/credits.json`. Do not invent a continuous map from 10,000 BCE. Reconstruction plates stay labeled reconstruction / estimate. Do not invent hectare counts.

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
- Home atmosphere: `public/images/home/green-city-future-bg.jpg` is a fixed full-page backdrop on `/` and locale homes (`theme="home"`). A light dark vignette keeps the city visible; dark glass hub tiles (nav destinations) are the primary entry. Latest-solution cards stay on a quieter translucent band. Meadow assets remain in `public/images/` but are not the Home page atmosphere.
- Section themes: Maps uses NASA Blue Marble; Wildlife uses `public/images/wildlife/wildlife-section-bg.jpg` with a cream/dark scrim; Innovations uses `public/images/innovations/innovations-section-bg.jpg` (Earth + circuits, generated site theme) with a stronger cream/dark scrim; Forests uses `public/images/forests/forests-section-bg.jpg` (fogged redwoods, CC BY-SA) with a deep green/black scrim. Other sections keep their own themes.
- Typeface: Inter

## License

Site content © Fix Planet. Home city and meadow images are included as site assets.
