/**
 * Download Commons photos for the insects/domesticates pack + ESA Biomass.
 * Merges into existing credits.json files (does not rewrite the whole catalog).
 * Run: node scripts/fetch-wildlife-pack-images.mjs
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA =
  'FixPlanetWildlifeBot/1.0 (https://fixplanet.org; wildlife encyclopedia; contact: asix449@gmail.com)';

const wildlifeDir = new URL('../public/images/wildlife/', import.meta.url);
const innovationsDir = new URL('../public/images/innovations/', import.meta.url);

const wildlife = {
  'lord-howe-island-stick-insect':
    'Lord Howe Island stick insect Dryococelus australis 10June2011 PalmNursery.jpg',
  'queen-alexandras-birdwing': 'Ornithoptera alexandrae.jpg',
  monarch: 'Monarch butterfly on flower.jpg',
  'franklins-bumble-bee': 'Bombus franklini.jpg',
  'american-burying-beetle': 'American Burying Beetle.jpg',
  'hines-emerald': 'Somatochlora hineana.jpg',
  cattle: 'Hereford cattle.jpg',
  chicken: 'Gallus gallus domesticus.jpg',
  sheep: 'Ovis aries.jpg',
  pig: 'Cochon domestique (Sus scrofa domesticus) (3).jpg',
  'water-buffalo': 'Water buffalo bull, near Mehsana, Gujarat, India, 4.jpg',
  horse: 'Camargue horse.jpg',
  dog: 'Labrador Retriever.jpg',
  camelids: 'Camelus dromedarius.jpg',
};

const innovations = {
  'esa-biomass': 'ESA Biomass Satellite seeing wood through trees.png',
};

async function commonsInfo(title) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.searchParams.set('action', 'query');
  url.searchParams.set('titles', `File:${title}`);
  url.searchParams.set('prop', 'imageinfo');
  url.searchParams.set('iiprop', 'url|extmetadata|size|mime');
  url.searchParams.set('iiurlwidth', '1280');
  url.searchParams.set('format', 'json');
  url.searchParams.set('origin', '*');

  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`API ${res.status} for ${title}`);
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  if (!page || page.missing || !page.imageinfo?.[0]) return null;
  const info = page.imageinfo[0];
  const artist =
    info.extmetadata?.Artist?.value?.replace(/<[^>]+>/g, '').trim() || 'Wikimedia Commons';
  const license =
    info.extmetadata?.LicenseShortName?.value ||
    info.extmetadata?.UsageTerms?.value ||
    '';
  return {
    title,
    thumb: info.thumburl || info.url,
    pageUrl: info.descriptionurl,
    artist,
    license,
    mime: info.mime,
  };
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`download ${res.status} ${url}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(dest));
}

async function mergeCredits(dir, slug, entry) {
  const path = new URL('credits.json', dir);
  let list = [];
  try {
    list = JSON.parse(await readFile(path, 'utf8'));
  } catch {
    list = [];
  }
  const idx = list.findIndex((item) => item.slug === slug);
  if (idx >= 0) list[idx] = { ...list[idx], ...entry };
  else list.push(entry);
  await writeFile(path, JSON.stringify(list, null, 2) + '\n');
}

async function fetchSet(map, dir, forceJpg) {
  await mkdir(dir, { recursive: true });
  for (const [slug, file] of Object.entries(map)) {
    const picked = await commonsInfo(file);
    if (!picked) {
      console.log(`FAIL ${slug} ← ${file}`);
      continue;
    }
    const ext = forceJpg || !picked.mime?.includes('png') ? 'jpg' : 'png';
    const destName = `${slug}.${ext}`;
    await download(picked.thumb, new URL(destName, dir));
    await mergeCredits(dir, slug, {
      slug,
      file: destName,
      commonsTitle: picked.title,
      sourceUrl: picked.pageUrl,
      artist: picked.artist,
      license: picked.license,
    });
    console.log(`OK ${slug} ← ${picked.title} (${picked.license})`);
  }
}

await fetchSet(wildlife, wildlifeDir, true);
await fetchSet(innovations, innovationsDir, true);
console.log('Done.');
