/**
 * Download openly licensed plates for the Migration → Humans event atlas.
 * Run: node scripts/fetch-human-era-maps.mjs
 */
import { mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA =
  'FixPlanetMigrationBot/1.0 (https://fixplanet.org; sourced human-migration event plates)';
const outDir = new URL('../public/images/migration/eras/', import.meta.url);

const files = [
  {
    file: 'neolithic-europe.png',
    commons: 'Expansion_of_farming_in_western_Eurasia,_9600\u20134000_BCE.png',
    width: 1920,
  },
  {
    file: 'austronesian.png',
    commons: 'Chronological_dispersal_of_Austronesian_people_across_the_Pacific.svg',
    width: 1920,
  },
  {
    file: 'yamnaya-horizon.jpg',
    commons: 'Yamnaya_culture.jpg',
    width: 1600,
  },
  {
    file: 'migration-period.jpg',
    commons: 'Invasions_of_the_Roman_Empire_1.png',
    width: 1600,
  },
  {
    file: 'caliphate-expansion.png',
    commons: 'Map_of_expansion_of_Caliphate.svg',
    width: 1600,
  },
  {
    file: 'mongol-empire.png',
    commons: 'Mongol_Empire_(greatest_extent).svg',
    width: 1200,
  },
  {
    file: 'atlantic-slave-trade.png',
    commons: 'African_Slave_Trade.png',
    width: 1600,
  },
  {
    file: 'minard-emigrants-1858.jpg',
    commons: 'Charles_Joseph_Minard_-_\u00c9migrants_du_Globe.jpg',
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
  console.log('wrote', item.file, dest.pathname);
}
