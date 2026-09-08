/**
 * Download openly licensed era plates for the Migration → Humans atlas.
 * Run: node scripts/fetch-human-era-maps.mjs
 */
import { mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA =
  'FixPlanetMigrationBot/1.0 (https://fixplanet.org; sourced human-migration era plates)';
const outDir = new URL('../public/images/migration/eras/', import.meta.url);

const files = [
  {
    file: 'holocene-agriculture.png',
    commons: 'Centres_of_origin_and_spread_of_agriculture_labelled.svg',
    width: 1920,
  },
  {
    file: 'migration-period.jpg',
    commons: 'Invasions_of_the_Roman_Empire_1.png',
    width: 1600,
  },
  {
    file: 'austronesian.png',
    commons: 'Chronological_dispersal_of_Austronesian_people_across_the_Pacific.svg',
    width: 1920,
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
