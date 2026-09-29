/**
 * Write public/data/hazards.json from USGS, GDACS, NASA EONET, and NASA FIRMS.
 * Run: node scripts/fetch-hazards.mjs
 *
 * FIRMS uses the public MODIS 24h CSV (no MAP_KEY). The keyed area API is not called.
 * GDACS and that FIRMS file do not send Access-Control-Allow-Origin, so the page
 * keeps this snapshot for them and refreshes USGS and EONET in the browser.
 */
import { writeFile } from 'node:fs/promises';
import {
  EONET_EVENTS_URL,
  FIRMS_URL,
  GDACS_URL,
  USGS_WEEK_URL,
  dedupeCyclones,
  emptySnapshot,
  eonetCategoryUrl,
  parseEonetCategory,
  parseFirmsCsv,
  parseGdacs,
  parseUsgs,
} from '../src/lib/hazards.mjs';

const headers = {
  Accept: 'application/json,text/csv,text/plain,*/*',
  'User-Agent': 'FixPlanetHazards/1.0 (https://fixplanet.org; public hazard globe)',
};

async function getText(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function getJson(url) {
  const text = await getText(url);
  return JSON.parse(text);
}

const fetchedAt = new Date().toISOString();
const snapshot = emptySnapshot(fetchedAt);

const [usgs, gdacs, storms, volcanoes, wildfires, floods, droughts, firms] =
  await Promise.all([
    getJson(USGS_WEEK_URL),
    getJson(GDACS_URL),
    getJson(eonetCategoryUrl('severeStorms')),
    getJson(eonetCategoryUrl('volcanoes')),
    getJson(eonetCategoryUrl('wildfires')),
    getJson(eonetCategoryUrl('floods')),
    getJson(eonetCategoryUrl('drought')),
    getText(FIRMS_URL),
  ]);

snapshot.layers.earthquakes = parseUsgs(usgs, fetchedAt);
const gdacsLayers = parseGdacs(gdacs, fetchedAt);
const eonetStorms = parseEonetCategory(storms.events, 'cyclones', Date.now(), fetchedAt);
const eonetVolcanoes = parseEonetCategory(volcanoes.events, 'volcanoes', Date.now(), fetchedAt);
const eonetFires = parseEonetCategory(wildfires.events, 'wildfires', Date.now(), fetchedAt);
const eonetFloods = parseEonetCategory(floods.events, 'floods', Date.now(), fetchedAt);
const eonetDroughts = parseEonetCategory(droughts.events, 'droughts', Date.now(), fetchedAt);

snapshot.layers.cyclones = {
  fetchedAt,
  events: dedupeCyclones([...gdacsLayers.cyclones, ...eonetStorms.events]),
};
snapshot.layers.floods = {
  fetchedAt,
  events: [...gdacsLayers.floods, ...eonetFloods.events],
};
snapshot.layers.volcanoes = {
  fetchedAt,
  events: [...gdacsLayers.volcanoes, ...eonetVolcanoes.events],
};
snapshot.layers.droughts = {
  fetchedAt,
  events: [...gdacsLayers.droughts, ...eonetDroughts.events],
};
snapshot.layers.wildfires = {
  fetchedAt,
  events: [...gdacsLayers.wildfires, ...eonetFires.events],
};
snapshot.layers.fires = parseFirmsCsv(firms, fetchedAt);

const out = new URL('../public/data/hazards.json', import.meta.url);
await writeFile(out, JSON.stringify(snapshot));

const counts = Object.fromEntries(
  Object.entries(snapshot.layers).map(([id, layer]) => [id, layer.events.length]),
);
console.log(
  JSON.stringify(
    {
      fetchedAt,
      counts,
      eonetOpenFloods: (floods.events || []).length,
      eonetOpenDroughts: (droughts.events || []).length,
      bytes: JSON.stringify(snapshot).length,
      eonet: EONET_EVENTS_URL,
    },
    null,
    2,
  ),
);
