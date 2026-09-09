/**
 * Download resized Wikimedia Commons photos for new Solutions cards.
 * Run: node scripts/fetch-solutions-images.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { spawn } from 'node:child_process';

const UA =
  'FixPlanetSolutionsBot/1.0 (https://fixplanet.org; solutions encyclopedia; contact: asix449@gmail.com)';

const outDir = new URL('../public/images/solutions/', import.meta.url);

/** slug → candidate Commons file titles (without File: prefix), first hit wins */
const candidates = {
  'membrane-desalination': [
    'Perth Seawater Desalination Plant, September 2020 02.jpg',
    'Perth Seawater Desalination Plant, September 2020 01.jpg',
    'Reverse osmosis desalination plant.JPG',
  ],
  'managed-aquifer-recharge': [
    'CSIRO ScienceImage 3711 Bolivar Recycled Water Aquifer Storage Recovery Trial site on the Adelaide Plains SA 2002.jpg',
    'Liverpool Water Recycling Plant 01.jpg',
    'Bassin à retenue permanente.jpg',
  ],
  'assisted-natural-regeneration': [
    'Faidherbia albida (Elah valley).jpg',
    'KaffrineAgroforestry.jpg',
    'KedougouAgroforestry.jpg',
  ],
  'fire-smart-forestry': [
    'Conducting Prescribed Fire, Lake Como, Darby Sula R.D. Bitterroot N.F.jpg',
    'Cottonwood prescribed burn Boise National Forest.jpg',
    'Controlled burn.jpg',
  ],
  'shade-agroforestry': [
    'Canopy of a traditional shade coffee plantation in Guatemala.jpg',
    'Shade grown coffee in Guatemala.jpg',
    'A shade-grown coffee plot helps protect water quality, provides higher yields, reduces irrigation, and even provides wildlife habitat.jpg',
  ],
  'pet-bottle-recycling': [
    'PET-Flaschen-Recycling in Frauenfeld (2021).jpg',
    'Bales of PET bottles closeup.jpg',
    'Bales of PET bottles 3.jpg',
  ],
  'municipal-composting': [
    'Finished Municipal Compost for Resale at Recology\'s Facility.jpg',
    'Windrow co-composting, Devanahalli, Bengaluru, India.jpg',
    'Windrow Compost Turning Machine.jpg',
  ],
  'landfill-gas-capture': [
    'Landfill gas collection from capped landfill area.jpg',
    'Landfill gas collection system.JPG',
    'Methane from landfill generation plant - geograph.org.uk - 4874901.jpg',
  ],
  'permeable-pavement': [
    'Permeable pavement Rolling Hills Park.jpg',
    'Milwaukee Public Museum permeable pavement - 52197510064.jpg',
    'Permeable paving for pavement in Taipei.jpg',
  ],
  'urban-tree-canopy': [
    'Midtown Sacramento Tree Canopy.jpg',
    'Scenic Rizal Boulevard Tree Canopy.jpg',
  ],
  'district-heating': [
    'Power plant with ski slope Amager Bakke 05.jpg',
    'Amager Bakke Copenhagen 2.jpg',
    'Müllverbrennungsanlage Spittelau Ansicht.JPG',
    'District heating pipes in Leeds - geograph.org.uk - 7479855.jpg',
  ],
  'mass-timber': [
    '20230630 Structure of Katajanokan Laituri - Helsinki, Suomi, Finland.jpg',
    'Katajanokan Laituri September 5 2025.jpg',
    'Cross-laminated timber (detail).jpg',
  ],
  'green-steel': [
    'Electric Arc Furnace at Magna - geograph.org.uk - 7507.jpg',
    'Secretary Blinken Tours Hybrit Steel Plant.jpg',
    'ECSC Financial report 1996 ProfilARBED Differdange Electric arc furnace 2.jpg',
  ],
  'mangrove-restoration': [
    'Mangrove Planting Restoration Project in Changkat Keruing.jpg',
    'Mangrove Planting Restoration Project in Changkat Keruing 2.jpg',
    'Detail of mangrove roots.jpg',
  ],
  'bycatch-reduction': [
    'Loggerhead turtle escapes turtle exclusion device.jpg',
    'Turtle excluder device.jpg',
    'Sea turtle escaping a shrimp net.jpg',
  ],
  'oyster-reefs': [
    'Oyster reef Hunting Island SC.jpg',
    'Citizen Day Oyster Reef Restoration.jpg',
    'Oyster Restoration Great Wicomico (080216-A-5177B-021) (3293648234).jpg',
  ],
  'onshore-wind': [
    'Rows of wind turbines at wind farm at hills.jpg',
    'Inauguración de Central Eólica Sureste I, Fase II.jpg',
  ],
  'heat-pumps': [
    'Ecodan outdoor unit in the snow.jpg',
    'Carrier Outdoor Split Air Conditioner Heat Pump System (55005181522).jpg',
  ],
  'rainwater-harvesting': [
    'Rainwater harvesting tank, India.jpg',
    'Rainwater harvesting (South Africa) (2873512324).jpg',
    'Variety of water storage tanks and rainwater harvesting equipment (4481563848).jpg',
  ],
  'newater-reclaimed-wastewater': [
    'Microfiltration system at Bedok NEWater Factory.jpg',
    'Reverse osmosis system at Bedok NEWater Factory.jpg',
    'NEWater Bedok plant.jpg',
  ],
  'fog-harvesting': [
    'Atrapanieblas en Alto Patache.jpg',
    'Fog collector.jpg',
    'Atrapaniebla en parque Pan de Azúcar.jpg',
  ],
  'constructed-floating-wetlands': [
    'Sengkang Floating Wetland from Anchorvale Bridge.jpg',
    'Sengkang Floating Wetland from Sengkang South Bridge.jpg',
    'New floating wetland - geograph.org.uk - 8376040.jpg',
  ],
  'solar-still': [
    'Photograph-picture-of-the-solar-still-combined-with-air-conditioning-system-in-side-view-Cairo-Egypt.jpg',
    'Puits solaire de Kanyenkoko.jpg',
    'Boite de distillation solaire.jpg',
  ],
  agroforestry: [
    'Agroforestry alley cropping & Wisconsin River, Savanna Institute farm 2024.jpg',
    'Alley cropping (26311855315).jpg',
    'KaffrineAgroforestry.jpg',
  ],
  windbreaks: [
    'Young three-row windbreak in an Illinois field.jpg',
    'Rapeseed windbreak RM of Enniskillen Sk.jpg',
    'Shelterbelt Project planting areas.JPG',
  ],
  'reduced-impact-logging': [
    'District-Tawau Sabah Logging-Camp-04.jpg',
    'Tawau-District Sabah Logging-Camp-11.jpg',
    'Pensiangan Sabah Logging-Helicopter-01.jpg',
  ],
  'riparian-forest-restoration': [
    'Riparian buffer on Bear Creek in Story County, Iowa.JPG',
    'Riparian buffer augusta county va.jpg',
    'A variety of plants make up a Riparian Buffer. (24482270284).jpg',
  ],
  'community-forestry': [
    'Badikhel community forest, Lalitpur.jpg',
    'Blue-throated Barbet, at Ranibari Community Forest, Nepal.jpg',
  ],
  'mrf-optical-sorting': [
    'Materials recovery facility.jpg',
    'Materials recovery facility 2.jpg',
    'Sunset Park Material Recovery Facility (42856p).jpg',
  ],
  'textile-to-textile-recycling': [
    'Textile Recycling Container and Waste Containers.jpg',
    'Recycling Container for Used Clothes and Shoes in Malaga.jpg',
    'Old Rags Into New Cloth- Salvage in Britain, April 1942 D7439.jpg',
  ],
  'construction-demolition-recycling': [
    'Crushed Concrete Granular Fill.jpg',
    'Recycling an airfield N01 - geograph.org.uk - 379748.jpg',
  ],
  'black-soldier-fly': [
    'Black soldier fly larvae eating voraciously (9 days old).jpg',
    'Black soldier fly larvae eating shrimp waste.jpg',
    'Hermetia illucens.jpg',
  ],
  'waste-to-energy': [
    'Dublin Waste-to-Energy Facility.jpg',
    'Industry park Höchst - waste-to-energy plant - Industriepark Höchst - Müllverbrennungsanlage - 04.jpg',
    'The Energy From Waste incinerator at Greatmoor - geograph.org.uk - 6874047.jpg',
  ],
  'ocean-cleanup': [
    'How TOC works.png',
    'Garbagepatch1.jpg',
    'Interceptor Original 007.jpg',
  ],
  interceptor: [
    'Interceptor Original 007.jpg',
    'How TOC works.png',
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
    const proc = spawn(
      'ffmpeg',
      ['-y', '-i', srcPath, '-q:v', '3', destPath],
      { stdio: 'inherit' },
    );
    proc.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`convert ${code}`))));
  });
}

const credits = [];
const only = new Set(process.argv.slice(2));

await mkdir(outDir, { recursive: true });

for (const [slug, files] of Object.entries(candidates)) {
  if (only.size && !only.has(slug)) continue;
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
  const destName = `${slug}.jpg`;
  const dest = new URL(destName, outDir);
  const needsConvert = !picked.mime?.includes('jpeg');
  if (needsConvert) {
    const tmp = new URL(`${slug}.src`, outDir);
    await download(picked.thumb, tmp);
    await convertToJpeg(tmp.pathname, dest.pathname);
    await writeFile(tmp, ''); // placeholder so unlink isn't required if convert wrote dest
    const { unlink } = await import('node:fs/promises');
    await unlink(tmp).catch(() => {});
  } else {
    await download(picked.thumb, dest);
  }
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

await writeFile(new URL('new-credits.json', outDir), JSON.stringify(credits, null, 2) + '\n');
console.log(`\nSaved ${credits.length} new credit rows.`);
