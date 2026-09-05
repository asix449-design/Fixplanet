/**
 * Download resized Wikimedia Commons photos for the wildlife encyclopedia.
 * Run: node scripts/fetch-wildlife-images.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA =
  'FixPlanetWildlifeBot/1.0 (https://fixplanet.org; wildlife encyclopedia; contact: asix449@gmail.com)';

const outDir = new URL('../public/images/wildlife/', import.meta.url);

/** slug → candidate Commons file titles (without File: prefix), first hit wins */
const candidates = {
  'gray-wolf': [
    'European grey wolf 2.jpg',
    'Canis lupus lupus Porcupine.jpg',
    'Gray Wolf.jpg',
  ],
  'brown-bear': [
    'Ursus arctos - Finland.jpg',
    'Brown bear (Ursus arctos arctos) Kamchatka.jpg',
    'Ursus arctos 2 (Piotr Kuczynski).jpg',
  ],
  'american-bison': [
    'American bison k5680-1.jpg',
    'Bison bison - Custer State Park.jpg',
    'American Bison (Bison bison).jpg',
  ],
  'african-savanna-elephant': [
    'African bush elephant (Loxodonta africana) 2.jpg',
    'Loxodonta africana - Amboseli.jpg',
    'African Elephant, Kenya.jpg',
  ],
  lion: [
    'Lion waiting in Namibia.jpg',
    'Male lion on savanna (Panthera leo).jpg',
    'Panthera leo, Etosha.jpg',
  ],
  'red-deer': [
    'Cervus elaphus Luc Viatour 1.jpg',
    'Red deer stag 2009 denmark.jpg',
    'Cervus elaphus 1 Luc Viatour.jpg',
  ],
  'wild-boar': [
    'Wild boar (Sus scrofa) 2.jpg',
    'Sus scrofa scrofa.jpg',
    'Wildschwein Sus scrofa.jpg',
  ],
  'european-beaver': [
    'Eurasian beaver (Castor fiber).jpg',
    'Castor fiber - Bavaria.jpg',
    'Biber Castor fiber.jpg',
  ],
  'humpback-whale': [
    'Humpback stellwagen edit.jpg',
    'Humpback Whale Megaptera novaeangliae.jpg',
    'Humpback whale breaching.jpg',
  ],
  vaquita: ['Vaquita.jpg', 'Phocoena sinus.jpg', 'Vaquita porpoise.jpg'],
  'amur-tiger': [
    'Siberian Tiger sf.jpg',
    'Panthera tigris altaica 13 - Buffalo Zoo.jpg',
    'Siberian tiger-001.jpg',
  ],
  'sumatran-orangutan': [
    'Sumatran Orangutan - Pongo abelii.jpg',
    'Pongo abelii (Sumatran orangutan).jpg',
    'Sumatran orangutan.jpg',
  ],
  'black-rhino': [
    'Diceros bicornis (Ngorongoro, 2009).jpg',
    'Diceros bicornis.jpg',
    'Black rhinoceros (Diceros bicornis) 2.jpg',
  ],
  'african-forest-elephant': [
    'African Forest Elephant.jpg',
    'Loxodonta cyclotis.jpg',
    'Forest elephant Ivindo.jpg',
  ],
  'mountain-gorilla': [
    'Mountain gorilla (Gorilla beringei beringei) (2).jpg',
    'Mountain gorilla rwanda.jpg',
    'Gorilla beringei beringei.jpg',
  ],
  'amur-leopard': [
    'Amur leopard 2.jpg',
    'Panthera pardus orientalis.jpg',
    'Amur leopard (Panthera pardus orientalis).jpg',
  ],
  'hawksbill-turtle': [
    'Hawksbill Turtle, Bali.jpg',
    'Eretmochelys imbricata.jpg',
    'Hawksbill turtle swimming.jpg',
  ],
  'woolly-mammoth': [
    'Woolly mammoth.jpg',
    'Mammuthus primigenius.jpg',
    'Woolly mammoth model.jpg',
  ],
  dodo: [
    'Dodo reconstruction MAAS 2018.jpg',
    'Oxford Dodo display.jpg',
    'Dodo (Raphus cucullatus).jpg',
  ],
  'passenger-pigeon': [
    'Ectopistes migratorius (passenger pigeon).jpg',
    'Passenger Pigeon.jpg',
    'Ectopistes migratorius 1.jpg',
  ],
  thylacine: [
    'Thylacinus.jpg',
    'Thylacine-Hobart-1933.jpg',
    'Thylacinus cynocephalus.jpg',
  ],
  'stellers-sea-cow': [
    'Hydrodamalis gigas.jpg',
    "Steller's sea cow.jpg",
    'Stellersche Seekuh.jpg',
  ],
  aurochs: [
    'Aurochs reconstruction.jpg',
    'Aurochs restoration.jpg',
    'Bos primigenius.jpg',
  ],
  'great-auk': [
    'Pinguinus impennis.jpg',
    'Great auk with egg.jpg',
    'Alca impennis Keulemans.jpg',
  ],
  'caribbean-monk-seal': [
    'Caribbean monk seal.jpg',
    'Neomonachus tropicalis.jpg',
    'Monachus tropicalis.jpg',
  ],
  quagga: [
    'Quagga photo.jpg',
    'Quagga (Equus quagga quagga).jpg',
    'Quagga London Zoo.jpg',
  ],
  'western-black-rhinoceros': [
    'Diceros bicornis longipes.jpg',
    'West African Black Rhinoceros.jpg',
    'Western black rhinoceros.jpg',
  ],
  baiji: [
    'Lipotes vexillifer.png',
    'Baiji 2.JPG',
    'Yangtze River Dolphin.jpg',
  ],
  moa: [
    'Dinornis robustus.jpg',
    'Giant moa.jpg',
    'Moa reconstruction.jpg',
  ],
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

const credits = [];

await mkdir(outDir, { recursive: true });

for (const [slug, files] of Object.entries(candidates)) {
  let picked = null;
  for (const file of files) {
    try {
      const info = await commonsInfo(file);
      if (info) {
        picked = info;
        break;
      }
      console.log(`  miss: ${file}`);
    } catch (err) {
      console.log(`  error ${file}: ${err.message}`);
    }
  }
  if (!picked) {
    console.log(`FAIL ${slug}`);
    continue;
  }
  const ext = picked.mime?.includes('png') ? 'png' : 'jpg';
  const destName = `${slug}.${ext}`;
  const dest = new URL(destName, outDir);
  await download(picked.thumb, dest);
  credits.push({
    slug,
    file: destName,
    commonsTitle: picked.title,
    sourceUrl: picked.pageUrl,
    artist: picked.artist,
    license: picked.license,
  });
  console.log(`OK ${slug} ← ${picked.title} (${picked.license})`);
}

await writeFile(
  new URL('credits.json', outDir),
  JSON.stringify(credits, null, 2) + '\n',
);
console.log(`\nSaved ${credits.length} images.`);
