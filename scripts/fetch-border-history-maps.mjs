/**
 * Download openly licensed historical political maps for History of borders.
 * Run: node scripts/fetch-border-history-maps.mjs
 */
import { mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA =
  'FixPlanetMapsBot/1.0 (https://fixplanet.org; historical map fetch for attribution pages)';
const outDir = new URL('../public/images/maps/borders/', import.meta.url);

const files = [
  { file: 'y0001.png', commons: 'World_in_1_CE.png', width: 1600 },
  { file: 'y0100.png', commons: 'World_in_100_CE.PNG', width: 1600 },
  { file: 'y0200.png', commons: 'World_in_200_CE.PNG', width: 1600 },
  { file: 'y0300.png', commons: 'World_in_300_CE.PNG', width: 1600 },
  { file: 'y0400.png', commons: 'World_in_400_CE.png', width: 1600 },
  { file: 'y0500.png', commons: 'World_in_500_CE.png', width: 1600 },
  { file: 'y0600.jpg', commons: 'East-Hem_600ad.jpg', width: 1600 },
  { file: 'y0700.png', commons: 'World_in_700_CE.png', width: 1600 },
  { file: 'y0800.jpg', commons: 'East-Hem_800ad.jpg', width: 1600 },
  { file: 'y0900.png', commons: 'World_in_900_CE.png', width: 1600 },
  { file: 'y1025.jpg', commons: 'East-Hem_1025ad.jpg', width: 1600 },
  { file: 'y1100.jpg', commons: 'East-Hem_1100ad.jpg', width: 1600 },
  { file: 'y1200.jpg', commons: 'World_map_1200.jpg', width: 1600 },
  { file: 'y1500.png', commons: 'World_map_1500.png', width: 1600 },
  { file: 'y1600.png', commons: 'Colonisation_1600.png', width: 1600 },
  { file: 'y1700.png', commons: '1700_CE_world_map.PNG', width: 1600 },
  { file: 'y1815.jpg', commons: 'World_map_1815_(COV).jpg', width: 1600 },
  { file: 'y1914.jpg', commons: 'World_map_1914.jpg', width: 1600 },
  { file: 'y2000.jpg', commons: '(Political_map_of_the_world)._LOC_2001620596.jpg', width: 1600 },
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
