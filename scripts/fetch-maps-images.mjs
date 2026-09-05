/**
 * Re-download public-domain Earth rasters for the Maps catalog and Wildlife base.
 * Run: node scripts/fetch-maps-images.mjs
 */
import { mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const UA = 'FixPlanetMapsBot/1.0 (https://fixplanet.org; public-domain NASA asset fetch)';
const outDir = new URL('../public/images/maps/', import.meta.url);

const files = [
  {
    file: 'blue-marble.jpg',
    url: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg',
  },
  {
    file: 'blue-marble-sm.jpg',
    url: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/land_shallow_topo_2048.jpg',
  },
  {
    file: 'earth-at-night.jpg',
    url: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/79000/79765/dnb_land_ocean_ice.2012.3600x1800.jpg',
  },
];

await mkdir(outDir, { recursive: true });

for (const item of files) {
  const res = await fetch(item.url, { headers: { 'User-Agent': UA } });
  if (!res.ok || !res.body) {
    throw new Error(`Failed ${item.url}: ${res.status}`);
  }
  const dest = new URL(item.file, outDir);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(dest));
  console.log('wrote', item.file);
}
