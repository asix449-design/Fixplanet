/**
 * Download resized Wikimedia Commons photos for founder-curated Innovations cards.
 * Run: node scripts/fetch-innovations-pack.mjs
 */
import { mkdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { createWriteStream, existsSync } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { spawn } from 'node:child_process';

const UA =
  'FixPlanetInnovationsBot/1.0 (https://fixplanet.org; innovations encyclopedia; contact: asix449@gmail.com)';

const outDir = new URL('../public/images/innovations/', import.meta.url);

/** slug → candidate Commons file titles (without File: prefix), first hit wins */
const candidates = {
  'deep-sky-alpha': [
    'Carbon Engineering Direct Air Capture plant in Squamish.jpg',
    'Carbon Engineering DAC Squamish.jpg',
    'Direct Air Capture plant.jpg',
    'Climeworks Orca plant.jpg',
    'HellisheidiPowerStation01.jpg',
    'Alberta prairie landscape.jpg',
  ],
  'avnos-project-brighton': [
    'Cooling towers of a power plant.jpg',
    'Water cooling tower.jpg',
    'Industrial cooling towers.jpg',
    'Water treatment plant.jpg',
    'Reverse osmosis desalination plant.JPG',
    'Air handling unit.jpg',
  ],
  'yara-sluiskil-ccs': [
    'Yara Porsgrunn.jpg',
    'Yara Slutskil.jpg',
    'Fertilizer plant.jpg',
    'Ammonia production plant.jpg',
    'Chemical plant Terneuzen.jpg',
    'Dow Terneuzen.jpg',
    'Industry Sluiskil.jpg',
    'Kanal Gent-Terneuzen Sluiskil.jpg',
    'Brug sluiskil 01.JPG',
    'North Sea oil platform.jpg',
  ],
  'samsara-eco': [
    'Bales of PET bottles closeup.jpg',
    'PET-Flaschen-Recycling in Frauenfeld (2021).jpg',
    'Plastic bottles for recycling.jpg',
    'Used PET bottles.jpg',
    'Textile Recycling Container and Waste Containers.jpg',
    'Nylon yarn.jpg',
  ],
  'quaise-mmwave-drilling': [
    'Oil drilling rig in Texas.jpg',
    'Drilling rig Texas.jpg',
    'Land drilling rig.jpg',
    'Oil well drilling rig.jpg',
    'Geothermal drilling Iceland.jpg',
    'Drill rig.jpg',
  ],
  'cfs-sparc': [
    'ITER Tokamak mockup.jpg',
    'ITER tokamak pit.jpg',
    'Alcator C-Mod tokamak.jpg',
    'Joint European Torus.jpg',
    'Fusion reactor tokamak.jpg',
    'Superconducting magnet.jpg',
  ],
  'form-energy-ireland': [
    'Hornsdale Power Reserve.jpg',
    'Battery energy storage system.jpg',
    'Tesvolt battery energy storage system Rheineck.jpg',
    '1 MW 4 MWh Turner Energy Storage Project in Pullman, WA.jpg',
    'BESS Rens.jpg',
    'Wind turbines Ireland.jpg',
  ],
  'weathernext-3': [
    'First Full Disk Image from GOES-17 as GOES West (40118037553).jpg',
    'GOES 12 Full Disk view March 16, 2010 (4437745391).jpg',
    'Meteosat-8 First Image.jpg',
    'Hurricane from space.jpg',
    'Earth weather satellite.jpg',
  ],
  'ecmwf-aifs': [
    'ECMWF.jpg',
    'European Centre for Medium-Range Weather Forecasts.jpg',
    'Weather map.jpg',
    'Synoptic weather chart.jpg',
    'Surface weather analysis.jpg',
    'GOES-16 ABI Full Disk (32440453126).jpg',
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

function convertToJpeg(srcPath, destPath) {
  return new Promise((resolve, reject) => {
    const proc = spawn('ffmpeg', ['-y', '-i', srcPath, '-q:v', '3', destPath], {
      stdio: 'inherit',
    });
    proc.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`convert ${code}`))));
  });
}

async function searchCommons(query) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.searchParams.set('action', 'query');
  url.searchParams.set('list', 'search');
  url.searchParams.set('srsearch', query);
  url.searchParams.set('srnamespace', '6');
  url.searchParams.set('srlimit', '8');
  url.searchParams.set('format', 'json');
  url.searchParams.set('origin', '*');
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.query?.search ?? []).map((row) => row.title.replace(/^File:/, ''));
}

const searchFallback = {
  'deep-sky-alpha': 'direct air capture OR "carbon capture" plant Alberta',
  'avnos-project-brighton': 'industrial cooling tower water',
  'yara-sluiskil-ccs': 'Yara fertilizer ammonia plant',
  'samsara-eco': 'PET bottle recycling bales',
  'quaise-mmwave-drilling': 'land oil drilling rig',
  'cfs-sparc': 'tokamak fusion',
  'form-energy-ireland': 'battery energy storage containers',
  'weathernext-3': 'GOES full disk Earth',
  'ecmwf-aifs': 'weather forecast map synoptic',
};

await mkdir(outDir, { recursive: true });

const creditPath = new URL('credits.json', outDir);
const credits = existsSync(creditPath) ? JSON.parse(await readFile(creditPath, 'utf8')) : [];
const only = new Set(process.argv.slice(2));

for (const [slug, files] of Object.entries(candidates)) {
  if (only.size && !only.has(slug)) continue;
  const existing = credits.find((row) => row.slug === slug);
  if (existing && existsSync(new URL(existing.file, outDir))) {
    console.log(`skip ${slug} (already credited)`);
    continue;
  }

  let titles = [...files];
  try {
    const extra = await searchCommons(searchFallback[slug]);
    titles = [...titles, ...extra];
  } catch (err) {
    console.log(`  search fail ${slug}: ${err.message}`);
  }

  let picked = null;
  for (const file of titles) {
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
  const destName = `${slug}.jpg`;
  const dest = new URL(destName, outDir);
  const needsConvert = !picked.mime?.includes('jpeg');
  if (needsConvert) {
    const tmp = new URL(`${slug}.src`, outDir);
    await download(picked.thumb, tmp);
    await convertToJpeg(tmp.pathname, dest.pathname);
    await unlink(tmp).catch(() => {});
  } else {
    await download(picked.thumb, dest);
  }
  const row = {
    slug,
    file: destName,
    commonsTitle: picked.title,
    sourceUrl: picked.pageUrl,
    artist: picked.artist,
    license: picked.license,
  };
  const idx = credits.findIndex((c) => c.slug === slug);
  if (idx >= 0) credits[idx] = row;
  else credits.push(row);
  console.log(`OK ${slug} ← ${picked.title} (${picked.license})`);
}

await writeFile(creditPath, JSON.stringify(credits, null, 2) + '\n');
console.log(`\nCredits now ${credits.length} rows.`);
