# Fix Planet

Public English site for **Fix Planet** — a living atlas of technologies that repair the planet. Domain: [fixplanet.org](https://fixplanet.org).

This is a static [Astro](https://astro.build) site, ready for [Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Pages

| Route | Status |
| --- | --- |
| `/` | Home — meadow hero, latest solutions, feature strip |
| `/solutions` | All problem → technology cards, with topic filters |
| `/about` | Curator: Aigars Abramovics |
| `/book` | *New World* (Amazon) |
| `/maps`, `/law`, `/wildlife`, `/forests` | Placeholders — coming soon |

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

You can also publish a local build with [Wrangler](https://developers.cloudflare.com/pages/get-started/direct-upload/):

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
- Typeface: Inter

## License

Site content © Fix Planet. Meadow hero image is included as a site asset.
