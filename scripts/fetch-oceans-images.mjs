/**
 * Download sourced NASA / Wikimedia frames for the Oceans monitoring page.
 * Run: node scripts/fetch-oceans-images.mjs
 */
import { mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { spawn } from 'node:child_process';

const UA = 'FixPlanetOceansBot/1.0 (https://fixplanet.org; public NASA/Wikimedia ocean frames)';
const outDir = new URL('../public/images/oceans/', import.meta.url);

const worldview = (layer, time, wrap = 'day,x') =>
  `https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&TIME=${time}&BBOX=-90,-180,90,180&CRS=EPSG:4326&LAYERS=${layer},Coastlines_15m&WRAP=${wrap}&FORMAT=image/jpeg&WIDTH=2400&HEIGHT=1200`;

const MUR = 'GHRSST_L4_MUR_Sea_Surface_Temperature';
const MUR_ANOM = 'GHRSST_L4_MUR_Sea_Surface_Temperature_Anomalies';
const july = (year) => `${year}-07-01T00:00:00Z`;

const files = [
  {
    file: 'sst-2003.jpg',
    url: worldview(MUR, july(2003)),
  },
  {
    file: 'sst-2010.jpg',
    url: worldview(MUR, july(2010)),
  },
  {
    file: 'sst-2015.jpg',
    url: worldview(MUR, july(2015)),
  },
  {
    file: 'sst-2020.jpg',
    url: worldview(MUR, july(2020)),
  },
  {
    file: 'sst-2024.jpg',
    url: worldview(MUR, july(2024)),
  },
  {
    file: 'sst-2025.jpg',
    url: worldview(MUR, july(2025)),
  },
  {
    file: 'sst-anom-2016.jpg',
    url: worldview(MUR_ANOM, july(2016)),
  },
  {
    file: 'sst-anom-2023.jpg',
    url: worldview(MUR_ANOM, july(2023)),
  },
  {
    file: 'sst-anom-2024.jpg',
    url: worldview(MUR_ANOM, july(2024)),
  },
  {
    file: 'salinity-aquarius-2011.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Aquarius_spacecraft_first_global_salinity_map_Aug-Sep_2011.jpg',
  },
  {
    file: 'salinity-aquarius.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Aquarius_Sea_Surface_Salinity.jpg',
  },
  {
    file: 'currents-gyres-1943.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Ocean_currents_1943_%28borderless%293.png',
  },
  {
    file: 'plastic-five-gyres-2014.png',
    url: 'https://journals.plos.org/plosone/article/figure/image?size=large&id=info:doi/10.1371/journal.pone.0111913.g002',
  },
  {
    file: 'plastic-gpgp-2015.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Great_Pacific_Garbage_Patch-Map-2017.jpg',
  },
  {
    file: 'oil-dwh-2010.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Deepwater_Horizon_oil_spill_-_May_24%2C_2010.jpg',
  },
  {
    file: 'chl-2019.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Global_ocean_chlorophyll_concentration_October_2019.png',
  },
  {
    file: 'dead-zones.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Aquatic_Dead_Zones.jpg',
  },
  {
    file: 'oceans-section-bg-src.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/ISS-56_Pacific_Ocean_with_sunglint.jpg',
  },
];

function ffmpegResize(src, dest, width = 1920) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      'ffmpeg',
      ['-y', '-i', src, '-vf', `scale=${width}:-1`, '-q:v', '4', dest],
      { stdio: 'inherit' },
    );
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited ${code}`));
    });
  });
}

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

const srcBg = new URL('oceans-section-bg-src.jpg', outDir).pathname;
const destBg = new URL('oceans-section-bg.jpg', outDir).pathname;
await ffmpegResize(srcBg, destBg, 1920);
console.log('wrote oceans-section-bg.jpg');
