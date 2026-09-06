# Fix Planet

Public site for **Fix Planet** — a living atlas of technologies that repair the planet. Domain: [fixplanet.org](https://fixplanet.org). Languages: English (default), Russian, Polish, Latvian.

This is a static [Astro](https://astro.build) site, ready for [Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Pages

Unprefixed routes are English. Other locales use `/ru/`, `/pl/`, `/lv/` plus the same path.

| Route | Status |
| --- | --- |
| `/` | Home — meadow hero, latest solutions, feature strip |
| `/solutions` | All problem → technology cards, with topic filters |
| `/about` | Curator: Aigars Abramovics |
| `/book` | *New World* (Amazon) |
| `/wildlife` | Encyclopedia: *Homo sapiens* hero and dispersal map, plus surviving / endangered / extinct species. Detail pages at `/wildlife/[slug]`. Themed South-American wildlife collage backdrop (scrimmed for type; map sits on a solid panel) |
| `/maps` | Sourced map catalog (conflict, languages, religion, crime, pollution, energy, minerals, borders, forests, water, people). Detail pages at `/maps/[slug]`; category filters at `/maps/conflicts` and `?category=` |
| `/innovations` | Frontier catalog: ecology, energy, and AI. Detail pages at `/innovations/[slug]`; area filters at `/innovations/ecology`, `/energy`, `/ai` and `?area=`. Themed Earth+circuits backdrop (scrimmed cream/dark panels) |
| `/law`, `/forests` | Placeholders — coming soon |

## Languages

Astro i18n routing (`prefixDefaultLocale: false`) keeps English URLs unchanged. The header switcher (EN / RU / PL / LV) stays on the equivalent page.

Copy lives in `src/i18n/messages.ts` (UI), `src/i18n/solutions.ts` (the eight solution cards), `src/i18n/wildlife.ts` (species entries; Polish and Latvian files sit beside it), `src/i18n/maps.ts` (map catalog chrome plus entries; Russian, Polish, and Latvian files sit beside it), and `src/i18n/innovations.ts` (Innovations chrome plus entries; `innovations-en.ts` / `-ru.ts` / `-pl.ts` / `-lv.ts` sit beside it). To add a string: add the key to `en`, then the same key to `ru`, `pl`, and `lv`, and read it with `getUi(locale)`, `getMapsPage(locale)`, or `getInnovationsPage(locale)`. New pages need the English file under `src/pages/` and a thin `src/pages/[locale]/` wrapper that reuses the same view.

To add a wildlife species: add metadata in `src/data/wildlife.ts` (English slug, Latin name, tab, IUCN code, image credit), the same slug in all four language objects, and a photo in `public/images/wildlife/`. Status tabs are deep-linked as `/wildlife`, `/wildlife/endangered`, and `/wildlife/extinct` (`?status=` also works).

To add a map: add a row in `src/data/maps.ts` (English slug, category, vintage, named source, URLs, preview file), the same slug in `en` / `ru` / `pl` / `lv` under `src/i18n/maps.ts`, and a licensed preview in `public/images/maps/` (or reuse `blue-marble-sm.jpg` as a schematic). Category chips are real links (`/maps/conflicts`, `/ru/maps/conflicts`, …). Do not invent numbers; prefer an “Open source map” link over a fake choropleth.

To add an innovation card: add a row in `src/data/innovations.ts` (English slug, area `ecology` | `energy` | `ai`, status `research` | `pilot` | `deployed` | `myth-busted`, image credit), the same slug in all four language objects under `src/i18n/innovations-en.ts` (and `-ru` / `-pl` / `-lv`), and a Wikimedia/PD or generated image in `public/images/innovations/`. Record the credit in `public/images/innovations/credits.json`. Area tabs are real links (`/innovations/ecology`, `/ru/innovations/energy`, …); `?area=` also works. Do not invent breakthroughs. Perpetual-motion / “free energy” devices belong only as myth-busted cards. Do not claim fusion is commercial unlimited power.

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
- Hero photograph: `public/images/hero-meadow.png` (source) and `.webp` (served). Left cream gradient keeps the headline readable.
- Section themes: Maps uses NASA Blue Marble; Wildlife uses `public/images/wildlife/wildlife-section-bg.jpg` with a cream/dark scrim; Innovations uses `public/images/innovations/innovations-section-bg.jpg` (Earth + circuits, generated site theme) with a stronger cream/dark scrim. Other sections will get their own backdrops later.
- Typeface: Inter

## License

Site content © Fix Planet. Meadow hero image is included as a site asset.
