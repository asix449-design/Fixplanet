# Restore the book page

These files are the previous book page. Nothing in this folder is imported by the site.

## Put the files back

1. Move `BookView.astro` to `src/views/BookView.astro`.
2. Move `pages/book.astro` to `src/pages/book.astro`.
3. Move `pages/locale-book.astro` to `src/pages/[locale]/book.astro`.
4. Move `new-world-cover.jpg` to `public/images/new-world-cover.jpg`.

## Put the copy back

In `src/data/site.ts`:

- Add `bookAmazon: 'https://amzn.eu/d/0dZtkBPQ'` on the `site` object (see `book-copy.ts`).
- Insert `{ href: '/book', key: 'book' }` in `nav`, after oceans and before about.
- Insert `{ href: '/book', key: 'book', icon: 'book' }` in `homeHub`, after oceans and before about.

In `src/i18n/messages.ts`, for `en`, `ru`, `pl`, and `lv` (values are in `book-copy.ts`):

- `nav.book`
- `home.tiles.book`
- `about.p3Before`, `about.p3Book`, `about.p3Mid`, `about.p3After`, `about.readBook`
- the whole `book` object (between `about` and `stubs`)
- `donate.thanks` (replace the shorter line that no longer mentions the book)
- `footer.theBook`

In `src/views/AboutView.astro`, restore the book link inside the third paragraph and the “read the book” link under the curator. The live paragraph keeps only the X mention.

In `src/components/Footer.astro`, restore the explore link to `/book` using `ui.footer.theBook`, after oceans and before about.

## Remove the redirects

Delete these lines from `public/_redirects` and the matching `redirects` entries in `astro.config.mjs`:

- `/book` → `/`
- `/ru/book` → `/ru/`
- `/pl/book` → `/pl/`
- `/lv/book` → `/lv/`

Also delete the sitemap `filter` in `astro.config.mjs` that drops paths ending in `/book`.

`src/styles/global.css` still has `.book-layout` and `.book-cover`. Those rules were left in place.
