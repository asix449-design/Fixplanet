/**
 * Write public/data/hazards.json from public hazard feeds.
 * Run: node scripts/fetch-hazards.mjs
 *
 * NASA FIRMS VIIRS has no CORS header, so this script thins the public CSV
 * (nominal and high confidence, one point per 0.05 degree cell) into compact
 * [lat, lon, frp] points. The browser reads that snapshot.
 * The file is left untouched when the hazard payload matches the previous snapshot.
 */
import { readFile, writeFile } from 'node:fs/promises';
import {
  EONET_EVENTS_URL,
  FIRMS_URL,
  GDACS_URL,
  USGS_VOLCANO_URL,
  USGS_WEEK_URL,
  dedupeCyclones,
  emptySnapshot,
  eonetCategoryUrl,
  gdacsTypedUrl,
  loadNhcSnapshot,
  parseEonetCategory,
  parseGdacs,
  parseUsgs,
  parseUsgsVolcanoes,
  thinFirmsCsv,
} from '../src/lib/hazards.mjs';

const headers = {
  Accept: 'application/json,text/csv,text/plain,*/*',
  'User-Agent': 'FixPlanetHazards/1.0 (https://fixplanet.org; public hazard globe)',
};

const out = new URL('../public/data/hazards.json', import.meta.url);

async function readPrevious() {
  try {
    return JSON.parse(await readFile(out, 'utf8'));
  } catch {
    return null;
  }
}

async function getResponse(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response;
}

async function getText(url) {
  const response = await getResponse(url);
  return { text: await response.text(), response };
}

async function getJson(url) {
  const { text } = await getText(url);
  return JSON.parse(text);
}

async function tryStep(label, fn) {
  try {
    return await fn();
  } catch (error) {
    console.error(`${label} failed: ${error.message}`);
    return null;
  }
}

function payloadOf(snapshot) {
  if (!snapshot) return '';
  const layers = {};
  for (const [id, layer] of Object.entries(snapshot.layers || {})) {
    if (id === 'fires' && Array.isArray(layer.points)) {
      layers[id] = layer.points;
    } else {
      layers[id] = layer.events || [];
    }
  }
  return JSON.stringify({
    layers,
    nhc: {
      events: snapshot.nhc?.events || [],
      cones: snapshot.nhc?.cones?.features || [],
      tracks: snapshot.nhc?.tracks?.features || [],
    },
  });
}

const previous = await readPrevious();
const fetchedAt = new Date().toISOString();
const snapshot = emptySnapshot(fetchedAt);

const today = fetchedAt.slice(0, 10);
const floodFrom = new Date(Date.parse(fetchedAt) - 28 * 86400000).toISOString().slice(0, 10);
const [usgs, gdacs, gdacsFloods, gdacsDroughts, storms, volcanoes, wildfires, floods, droughts, firmsRaw, usgsVolcanoes, nhc] =
  await Promise.all([
    tryStep('USGS', () => getJson(USGS_WEEK_URL)),
    tryStep('GDACS', () => getJson(GDACS_URL)),
    tryStep('GDACS floods', () => getJson(gdacsTypedUrl('FL', floodFrom, today))),
    tryStep('GDACS droughts', () => getJson(gdacsTypedUrl('DR', `${today.slice(0, 4)}-01-01`, today))),
    tryStep('EONET storms', () => getJson(eonetCategoryUrl('severeStorms'))),
    tryStep('EONET volcanoes', () => getJson(eonetCategoryUrl('volcanoes'))),
    tryStep('EONET wildfires', () => getJson(eonetCategoryUrl('wildfires'))),
    tryStep('EONET floods', () => getJson(eonetCategoryUrl('floods'))),
    tryStep('EONET droughts', () => getJson(eonetCategoryUrl('drought'))),
    tryStep('FIRMS', () => getText(FIRMS_URL)),
    tryStep('USGS volcanoes', () => getJson(USGS_VOLCANO_URL)),
    tryStep('NHC', () => loadNhcSnapshot(fetchedAt, getJson)),
  ]);

if (usgs) snapshot.layers.earthquakes = parseUsgs(usgs, fetchedAt);
else if (previous?.layers?.earthquakes) snapshot.layers.earthquakes = previous.layers.earthquakes;

const gdacsLayers = gdacs ? parseGdacs(gdacs, fetchedAt) : null;
const eonetStorms = storms
  ? parseEonetCategory(storms.events, 'cyclones', Date.now(), fetchedAt)
  : { events: previous?.layers?.cyclones?.events?.filter((event) => event.source === 'EONET') || [] };
function previousSource(layerId, source) {
  return previous?.layers?.[layerId]?.events?.filter((event) => event.source === source) || [];
}

const eonetVolcanoes = volcanoes
  ? parseEonetCategory(volcanoes.events, 'volcanoes', Date.now(), fetchedAt)
  : { events: previousSource('volcanoes', 'EONET') };
const eonetFires = wildfires
  ? parseEonetCategory(wildfires.events, 'wildfires', Date.now(), fetchedAt)
  : { events: previousSource('wildfires', 'EONET') };
const eonetFloods = floods
  ? parseEonetCategory(floods.events, 'floods', Date.now(), fetchedAt)
  : { events: previousSource('floods', 'EONET') };
const eonetDroughts = droughts
  ? parseEonetCategory(droughts.events, 'droughts', Date.now(), fetchedAt)
  : { events: previousSource('droughts', 'EONET') };
const usgsVolcanoEvents = usgsVolcanoes
  ? parseUsgsVolcanoes(usgsVolcanoes, fetchedAt)
  : previousSource('volcanoes', 'USGS');

const nhcEvents = nhc?.events || previous?.nhc?.events || [];

function kept(layerId, source) {
  if (gdacsLayers && source === 'GDACS') return gdacsLayers[layerId] || [];
  if (!gdacs && previous?.layers?.[layerId]) {
    return previous.layers[layerId].events.filter((event) => event.source === 'GDACS');
  }
  return [];
}

snapshot.layers.cyclones = {
  fetchedAt,
  events: dedupeCyclones([
    ...kept('cyclones', 'GDACS'),
    ...eonetStorms.events,
    ...nhcEvents,
  ]),
};
const floodEvents = gdacsFloods ? parseGdacs(gdacsFloods, fetchedAt).floods : kept('floods', 'GDACS');
const droughtEvents = gdacsDroughts
  ? parseGdacs(gdacsDroughts, fetchedAt).droughts
  : kept('droughts', 'GDACS');

snapshot.layers.floods = {
  fetchedAt,
  events: [...floodEvents, ...eonetFloods.events],
};
snapshot.layers.volcanoes = {
  fetchedAt,
  events: [...kept('volcanoes', 'GDACS'), ...eonetVolcanoes.events, ...usgsVolcanoEvents],
};
snapshot.layers.droughts = {
  fetchedAt,
  events: [...droughtEvents, ...eonetDroughts.events],
};
snapshot.layers.wildfires = {
  fetchedAt,
  events: [...kept('wildfires', 'GDACS'), ...eonetFires.events],
};

if (firmsRaw) {
  const modified = firmsRaw.response.headers.get('last-modified');
  const firmsAt = modified ? new Date(modified).toISOString() : fetchedAt;
  const thinned = thinFirmsCsv(firmsRaw.text, firmsAt);
  snapshot.layers.fires = {
    fetchedAt: firmsAt,
    count: thinned.count,
    points: thinned.points,
  };
  snapshot.firesBytes = thinned.bytes;
} else if (previous?.layers?.fires) {
  snapshot.layers.fires = previous.layers.fires;
}

snapshot.nhc = nhc || previous?.nhc || {
  fetchedAt,
  events: [],
  cones: { type: 'FeatureCollection', features: [] },
  tracks: { type: 'FeatureCollection', features: [] },
};

const nextPayload = payloadOf(snapshot);
const prevPayload = payloadOf(previous);
if (previous && nextPayload === prevPayload) {
  console.log(JSON.stringify({ unchanged: true, path: 'public/data/hazards.json' }));
  process.exit(0);
}

delete snapshot.firesBytes;
const body = JSON.stringify(snapshot);
await writeFile(out, body);

const counts = Object.fromEntries(
  Object.entries(snapshot.layers).map(([id, layer]) => [
    id,
    id === 'fires' ? layer.count ?? layer.points?.length ?? layer.events?.length ?? 0 : layer.events.length,
  ]),
);
console.log(
  JSON.stringify(
    {
      fetchedAt,
      counts,
      firesAt: snapshot.layers.fires.fetchedAt,
      firesBytes: JSON.stringify(snapshot.layers.fires.points || []).length,
      nhcCones: snapshot.nhc.cones.features.length,
      nhcTracks: snapshot.nhc.tracks.features.length,
      bytes: body.length,
      eonet: EONET_EVENTS_URL,
    },
    null,
    2,
  ),
);
