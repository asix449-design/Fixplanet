/**
 * Download resized Wikimedia Commons photos for the Innovations catalog.
 * Run: node scripts/fetch-innovations-images.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA =
  'FixPlanetInnovationsBot/1.0 (https://fixplanet.org; innovations encyclopedia; contact: asix449@gmail.com)';

const outDir = new URL('../public/images/innovations/', import.meta.url);

/** slug → candidate Commons file titles (without File: prefix), first hit wins */
const candidates = {
  'climeworks-dac': [
    'Hellisheiði Power Station 2014.JPG',
    'Hellisheidi Power Station.jpg',
    'Hellisheiði geothermal power plant.jpg',
  ],
  'northern-lights-ccs': [
    'Sleipner A.jpg',
    'Sleipner platform.jpg',
    'Statfjord A.jpg',
    'North Sea oil platform.jpg',
  ],
  'carbfix-mineralization': [
    'Hellisheiði Power Station 2014.JPG',
    'Basalt columns Iceland.jpg',
    'Reykjavik Energy Hellisheidi.jpg',
  ],
  'precision-fermentation': [
    'Bioreactors in a laboratory.jpg',
    'Industrial bioreactor.jpg',
    'Stainless steel fermenters.jpg',
    'Bioreactor.jpg',
  ],
  'coral-restoration': [
    'Acropora pulchra in situ.jpg',
    'Staghorn coral.jpg',
    'Acropora coral reef.jpg',
    'Coral reef.jpg',
  ],
  'nano-water-membranes': [
    'Graphene.jpg',
    'Graphene AFM.jpg',
    'Reverse osmosis membrane.jpg',
  ],
  'carbios-enzymes': [
    'PET bottles.jpg',
    'Plastic bottles for recycling.jpg',
    'Used PET bottles.jpg',
    'Plastic recycling.jpg',
  ],
  'methane-feed-additive': [
    'Holstein dairy cows.jpg',
    'Dairy cattle in pasture.jpg',
    'Holstein Friesian cattle.jpg',
  ],
  'iter-fusion': [
    'ITER site October 2018.jpg',
    'ITER construction site.jpg',
    'ITER tokamak pit.jpg',
    'ITER 2018.jpg',
  ],
  'nif-inertial-fusion': [
    'National Ignition Facility.jpg',
    'NIF target chamber.jpg',
    'National Ignition Facility target chamber.jpg',
  ],
  'fervo-geothermal': [
    'The Geysers geothermal.jpg',
    'Geothermal power plant Iceland.jpg',
    'Nesjavellir Geothermal Power Station.jpg',
  ],
  'long-duration-storage': [
    'Battery energy storage system.jpg',
    'Grid battery storage.jpg',
    'Hornsdale Power Reserve.jpg',
    'Tesla Megapack.jpg',
  ],
  'green-hydrogen': [
    'Hydrogen storage tanks.jpg',
    'Hydrogen fueling station.jpg',
    'Liquid hydrogen tanks.jpg',
  ],
  'smr-nuclear': [
    'Cattenom Nuclear Power Plant.jpg',
    'Nuclear power plant.jpg',
    'Civaux nuclear power plant.jpg',
  ],
  'space-solar-power': [
    'ISS solar arrays.jpg',
    'International Space Station solar arrays.jpg',
    'ISS solar panels.jpg',
  ],
  'nano-electrolyzer-catalysts': [
    'PEM fuel cell.jpg',
    'Proton exchange membrane fuel cell.jpg',
    'Fuel cell stack.jpg',
  ],
  'perpetual-motion': [
    'Perpetual motion machine.jpg',
    'Overbalanced wheel.jpg',
    'Bhaskara wheel.jpg',
    'Perpetuum mobile.jpg',
  ],
  'graphcast-ai-weather': [
    'GOES-16.jpg',
    'Hurricane from space.jpg',
    'Earth weather satellite.jpg',
    'GOES East Full Disk.jpg',
  ],
  'gnome-materials': [
    'Quartz crystal.jpg',
    'Mineral crystals.jpg',
    'Bismuth crystal.jpg',
  ],
  'ai-grid-optimization': [
    'Electricity pylons.jpg',
    'High voltage power lines.jpg',
    'Transmission towers.jpg',
  ],
  'alphafold-proteins': [
    'Protein structure.jpg',
    'Hemoglobin.jpg',
    'Ribbon diagram of a protein.jpg',
    'Myoglobin.png',
  ],
  'amp-recycling-robots': [
    'Recycling plant conveyor.jpg',
    'Material recovery facility.jpg',
    'Recycling sorting.jpg',
    'Waste sorting plant.jpg',
  ],
  'quantum-computing': [
    'IBM Q System One.jpg',
    'IBM Q.jpg',
    'Dilution refrigerator.jpg',
    'Google quantum computer.jpg',
  ],
  'climate-trace': [
    'Gas flare.jpg',
    'Gas flaring.jpg',
    'Oil field flare.jpg',
  ],
  'prithvi-earth-ai': [
    'The Blue Marble.jpg',
    'NASA Blue Marble.jpg',
    'Earth from DSCOVR.jpg',
  ],
  'esa-biomass': [
    'ESA Biomass Satellite seeing wood through trees.png',
    'Rolling Biomass to the cleanroom ESA507406.jpg',
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

credits.push({
  slug: 'innovations-section-bg',
  file: 'innovations-section-bg.jpg',
  commonsTitle: '',
  sourceUrl: '',
  artist:
    'Fix Planet section theme — photoreal Earth with circuit overlay, generated site asset',
  license: 'Site theme asset',
});

await writeFile(new URL('credits.json', outDir), JSON.stringify(credits, null, 2) + '\n');
console.log(`\nSaved ${credits.length} credit rows.`);
