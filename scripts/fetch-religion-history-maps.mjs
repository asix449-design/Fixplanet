/**
 * Download openly licensed historical religion maps for the Religion century atlas.
 * Run: node scripts/fetch-religion-history-maps.mjs
 */
import { mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA =
  'FixPlanetMapsBot/1.0 (https://fixplanet.org; historical religion map fetch for attribution pages)';
const outDir = new URL('../public/images/maps/religion/', import.meta.url);

const files = [
  {
    file: 'y0001.png',
    commons: "Planche_VI_-_Principales_religions_de_l'ancien_monde_-_liv3-ch09.png",
    width: 1600,
  },
  {
    file: 'y0600.png',
    commons: 'Spread_of_Christianity_to_AD_600_-_Atlas_of_World_History.png',
    width: 1600,
  },
  {
    file: 'y0820.png',
    commons: 'State_Religions_820_AD.png',
    width: 1200,
  },
  {
    file: 'y1097.jpg',
    commons: 'Europe_mediterranean_1097.jpg',
    width: 1600,
  },
  {
    file: 'y1500.png',
    commons: 'Medieval-World-Religions.png',
    width: 1600,
  },
  {
    file: 'y1821.jpg',
    commons: 'Civilization_and_religion_map_1821.jpg',
    width: 1600,
  },
  {
    file: 'y1883.jpg',
    commons: '1883_religions_map.jpg',
    width: 1600,
  },
  {
    file: 'y1943.jpg',
    commons: 'Religions_10.jpg',
    width: 1600,
  },
];

function thumbUrl(commons, width) {
  return `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${encodeURIComponent(commons)}&width=${width}`;
}

await mkdir(outDir, { recursive: true });

for (const item of files) {
  const url = thumbUrl(item.commons, item.width);
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok || !res.body) {
    throw new Error(`Failed ${item.commons}: ${res.status} ${url}`);
  }
  const dest = new URL(item.file, outDir);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(dest));
  console.log('wrote', item.file);
}
