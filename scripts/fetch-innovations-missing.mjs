/**
 * Second-pass Commons fetch for slugs that missed on the first title list.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createWriteStream, existsSync } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA =
  'FixPlanetInnovationsBot/1.0 (https://fixplanet.org; innovations encyclopedia; contact: asix449@gmail.com)';

const outDir = new URL('../public/images/innovations/', import.meta.url);

const candidates = {
  'climeworks-dac': [
    'HellisheidiPowerStation01.jpg',
    'Hellisheidi Geothermal Power Station.jpg',
    'Reykjanes power station, taken from the hiking trail Reykjavegur, Iceland 19.jpg',
  ],
  'carbfix-mineralization': [
    'Svartifoss July 2014.JPG',
    'Basalt columns - Svartifoss - Iceland - panoramio.jpg',
    'HellisheidiPowerStation01.jpg',
  ],
  'iter-fusion': [
    'ITER site 2018 aerial view (41809720041).jpg',
    'ITER Tokamak mockup.jpg',
    'ITER Polodial Field Coils Construction (10).jpg',
  ],
  'nif-inertial-fusion': [
    "National Ignition Facility's target chamber.jpg",
    'National Ignition Facility target.jpg',
    'Worker inside the target chamber of the National Ignition Facility.jpg',
  ],
  'fervo-geothermal': [
    'Sonoma Plant at The Geysers 4778.png',
    'Hellisheidi Geothermal Power Station.jpg',
    'Reykjanes power station, taken from the hiking trail Reykjavegur, Iceland 19.jpg',
  ],
  'long-duration-storage': [
    '1 MW 4 MWh Turner Energy Storage Project in Pullman, WA.jpg',
    'Tesvolt battery energy storage system Rheineck.jpg',
    'BESS Rens.jpg',
  ],
  'green-hydrogen': [
    'Liquid hydrogen storage tank at Launch Pad 39B.jpg',
    'Compressed hydrogen tube trailer.jpg',
    'Liquid Hydrogen Tank at NASA\'s Kennedy Space Center.png',
  ],
  'smr-nuclear': [
    'Nuclear Power Plant Cattenom.jpg',
    'Cattenom-Kernkraftwerk-10-2013-gje.jpg',
    'Atomkraftwerk Cattenom und Kühlwasserstausee Lac du Mirgenbach.JPG',
  ],
  'perpetual-motion': [
    'WaterScrewPerpetualMotion.png',
    'Clocks; James Cox\'s "perpetual motion" self-winding clock. E Wellcome V0023851.jpg',
    'Fotothek df tg 0006004 Mechanik ^ Mühle ^ Rad.jpg',
  ],
  'graphcast-ai-weather': [
    'GOES-16 ABI Full Disk (32440453126).jpg',
    'First Full Disk Image from GOES-17 as GOES West (40118037553).jpg',
    'GOES 12 Full Disk view March 16, 2010 (4437745391).jpg',
  ],
  'amp-recycling-robots': [
    'Plastic bottles before processing.jpg',
    'Bales of PET bottles stacked.jpg',
    'Plastic bottles Gathered for recycling.jpg',
  ],
  'quantum-computing': [
    'IBM Q system (Fraunhofer 2).jpg',
    'IBM Q System One (Fraunhofer) installation.jpg',
    'IBM Q system (27274387309).jpg',
  ],
  'climate-trace': [
    'Sunset at Coryton Oil Refinery - geograph.org.uk - 1052273.jpg',
    'Permian Flaring 2012-2016.jpg',
    '1 North Sea oil platform 240918.jpg',
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

await mkdir(outDir, { recursive: true });

const creditPath = new URL('credits.json', outDir);
const credits = existsSync(creditPath)
  ? JSON.parse(await readFile(creditPath, 'utf8'))
  : [];

for (const [slug, files] of Object.entries(candidates)) {
  if (credits.some((row) => row.slug === slug)) {
    console.log(`skip ${slug} (already credited)`);
    continue;
  }
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
  await download(picked.thumb, new URL(destName, outDir));
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

await writeFile(creditPath, JSON.stringify(credits, null, 2) + '\n');
console.log(`\nCredits now ${credits.length} rows.`);
