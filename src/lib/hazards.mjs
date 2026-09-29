/**
 * Normalize public hazard feeds into one snapshot shape.
 * Used by scripts/fetch-hazards.mjs and the globe page.
 * Event titles are kept as the source wrote them.
 */

export const USGS_WEEK_URL =
  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
export const GDACS_URL =
  'https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH';
export const EONET_EVENTS_URL = 'https://eonet.gsfc.nasa.gov/api/v3/events';
export const FIRMS_URL =
  'https://firms.modaps.eosdis.nasa.gov/data/active_fire/modis-c6.1/csv/MODIS_C6_1_Global_24h.csv';

export const LAYER_IDS = [
  'earthquakes',
  'cyclones',
  'floods',
  'volcanoes',
  'droughts',
  'wildfires',
  'fires',
];

/** Draw order is bottom to top. Earthquakes stay readable above fire dots. */
export const DRAW_ORDER = [
  'fires',
  'wildfires',
  'droughts',
  'floods',
  'volcanoes',
  'cyclones',
  'earthquakes',
];

export const LAYER_COLOR = {
  earthquakes: '#c0ff00',
  cyclones: '#7ad7ff',
  floods: '#4c8dff',
  volcanoes: '#ff6a2a',
  droughts: '#e6c15a',
  wildfires: '#ff4a12',
  fires: '#ffb020',
};

export const LAYER_SOURCES = {
  earthquakes: ['USGS'],
  cyclones: ['GDACS', 'EONET'],
  floods: ['GDACS', 'EONET'],
  volcanoes: ['GDACS', 'EONET'],
  droughts: ['GDACS', 'EONET'],
  wildfires: ['GDACS', 'EONET'],
  fires: ['FIRMS'],
};

/** EONET wildfires older than this are left off the live globe. */
export const WILDFIRE_MAX_AGE_DAYS = 30;
/** MODIS confidence is 0-100. Low values are weak detections. */
export const FIRMS_MIN_CONFIDENCE = 80;
/** Cap so a heavy fire day cannot bloat the snapshot. */
export const FIRMS_MAP_CAP = 6000;
/** Strongest detections listed beside the map. The map still shows the rest. */
export const FIRMS_FEED_LIMIT = 30;
export const FEED_LIMIT = 100;

const GDACS_LAYER = {
  TC: 'cyclones',
  FL: 'floods',
  VO: 'volcanoes',
  DR: 'droughts',
  WF: 'wildfires',
};

const ALERTS = new Set(['Red', 'Orange', 'Green']);

export function emptySnapshot(fetchedAt = new Date().toISOString()) {
  const layers = {};
  for (const id of LAYER_IDS) layers[id] = { fetchedAt, events: [] };
  return { fetchedAt, layers };
}

export function eonetCategoryUrl(category) {
  const url = new URL(EONET_EVENTS_URL);
  url.searchParams.set('category', category);
  url.searchParams.set('status', 'open');
  url.searchParams.set('limit', category === 'wildfires' ? '2000' : '200');
  return url.href;
}

export function httpsUrl(value) {
  if (!value) return '';
  try {
    const url = new URL(String(value));
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return '';
    return url.href;
  } catch {
    return '';
  }
}

function toIso(value) {
  if (value == null || value === '') return null;
  if (typeof value === 'number') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date.toISOString();
  }
  const raw = String(value).trim();
  const withZone = /[zZ]|[+-]\d{2}:?\d{2}$/.test(raw) ? raw : `${raw}Z`;
  const date = new Date(withZone);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function pair(coordinates) {
  if (!Array.isArray(coordinates) || coordinates.length < 2) return null;
  const lon = Number(coordinates[0]);
  const lat = Number(coordinates[1]);
  if (!Number.isFinite(lon) || !Number.isFinite(lat)) return null;
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) return null;
  return { lon, lat };
}

function ringCentroid(ring) {
  if (!Array.isArray(ring) || !ring.length) return null;
  let lon = 0;
  let lat = 0;
  let count = 0;
  for (const coordinates of ring) {
    const point = pair(coordinates);
    if (!point) continue;
    lon += point.lon;
    lat += point.lat;
    count += 1;
  }
  if (!count) return null;
  return { lon: lon / count, lat: lat / count };
}

export function lonLatFromGeometry(geometry) {
  if (!geometry || typeof geometry !== 'object') return null;
  const { type, coordinates } = geometry;
  if (type === 'Point') return pair(coordinates);
  if (type === 'MultiPoint') return pair(coordinates?.[0]);
  if (type === 'Polygon') return ringCentroid(coordinates?.[0]);
  if (type === 'MultiPolygon') return ringCentroid(coordinates?.[0]?.[0]);
  return null;
}

function num(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function alertOf(value) {
  return ALERTS.has(value) ? value : undefined;
}

export function parseUsgs(collection, fetchedAt = new Date().toISOString()) {
  const events = [];
  for (const feature of collection?.features || []) {
    const point = lonLatFromGeometry(feature.geometry);
    const props = feature.properties || {};
    const mag = num(props.mag);
    const time = toIso(props.time);
    if (!point || mag == null || mag < 4.5 || !time) continue;
    const depth = num(feature.geometry?.coordinates?.[2]);
    events.push({
      id: `usgs-${feature.id || events.length}`,
      layer: 'earthquakes',
      title: String(props.title || props.place || 'USGS'),
      lat: point.lat,
      lon: point.lon,
      time,
      mag,
      depthKm: depth == null ? undefined : Math.round(depth),
      url: httpsUrl(props.url),
      source: 'USGS',
    });
  }
  events.sort((a, b) => Date.parse(b.time) - Date.parse(a.time));
  return { fetchedAt, events };
}

export function parseGdacs(collection, fetchedAt = new Date().toISOString()) {
  const buckets = {
    cyclones: [],
    floods: [],
    volcanoes: [],
    droughts: [],
    wildfires: [],
  };
  for (const feature of collection?.features || []) {
    const props = feature.properties || {};
    const layer = GDACS_LAYER[props.eventtype];
    if (!layer) continue;
    const point = lonLatFromGeometry(feature.geometry);
    const time = toIso(props.fromdate) || toIso(props.todate) || toIso(props.datemodified);
    if (!point || !time) continue;
    const severity = props.severitydata || {};
    const wind = num(severity.severity);
    const windKmh =
      wind != null && wind > 0 && /km\/h/i.test(String(severity.severityunit || ''))
        ? Math.round(wind)
        : undefined;
    buckets[layer].push({
      id: `gdacs-${props.eventtype}-${props.eventid}-${props.episodeid}`,
      layer,
      title: String(props.name || props.eventname || props.htmldescription || 'GDACS')
        .replace(/\s+/g, ' ')
        .trim(),
      lat: point.lat,
      lon: point.lon,
      time,
      alert: alertOf(props.alertlevel),
      windKmh,
      url: httpsUrl(props.url?.report || props.url?.details),
      source: 'GDACS',
    });
  }
  for (const list of Object.values(buckets)) {
    list.sort((a, b) => Date.parse(b.time) - Date.parse(a.time));
  }
  return buckets;
}

function latestEonetGeometry(list) {
  if (!Array.isArray(list) || !list.length) return null;
  const sorted = [...list].sort(
    (a, b) => Date.parse(a?.date || 0) - Date.parse(b?.date || 0),
  );
  const last = sorted[sorted.length - 1];
  const point = lonLatFromGeometry(last);
  if (!point) return null;
  return {
    ...point,
    date: last.date,
    magnitudeValue: num(last.magnitudeValue),
    magnitudeUnit: last.magnitudeUnit ? String(last.magnitudeUnit) : '',
  };
}

export function parseEonetCategory(events, layer, now = Date.now(), fetchedAt = new Date(now).toISOString()) {
  const out = [];
  for (const event of events || []) {
    const title = String(event?.title || '').trim();
    if (!title) continue;
    if (layer === 'cyclones' && !/tropical|hurricane|typhoon|cyclone/i.test(title)) continue;
    const geom = latestEonetGeometry(event.geometry);
    if (!geom) continue;
    const time = toIso(geom.date);
    if (!time) continue;
    if (layer === 'wildfires') {
      const age = now - Date.parse(time);
      if (!Number.isFinite(age) || age > WILDFIRE_MAX_AGE_DAYS * 86400000 || age < -86400000) {
        continue;
      }
    }
    const sourceUrl =
      httpsUrl(event.sources?.find((item) => httpsUrl(item?.url))?.url) ||
      httpsUrl(event.link);
    const knots =
      geom.magnitudeUnit === 'kts' && geom.magnitudeValue != null && geom.magnitudeValue > 0
        ? geom.magnitudeValue
        : undefined;
    out.push({
      id: `eonet-${event.id || out.length}`,
      layer,
      title,
      lat: geom.lat,
      lon: geom.lon,
      time,
      knots,
      url: sourceUrl,
      source: 'EONET',
    });
  }
  out.sort((a, b) => Date.parse(b.time) - Date.parse(a.time));
  return { fetchedAt, events: out };
}

export function parseFirmsCsv(text, fetchedAt = new Date().toISOString()) {
  const lines = String(text || '')
    .split(/\r?\n/)
    .filter((line) => line.trim());
  if (lines.length < 2) return { fetchedAt, events: [] };
  const header = lines[0].split(',').map((cell) => cell.trim());
  const index = Object.fromEntries(header.map((name, i) => [name, i]));
  const need = ['latitude', 'longitude', 'acq_date', 'acq_time', 'confidence', 'frp'];
  if (need.some((name) => index[name] == null)) return { fetchedAt, events: [] };

  const events = [];
  for (let i = 1; i < lines.length; i += 1) {
    const cols = lines[i].split(',');
    const confidence = num(cols[index.confidence]);
    if (confidence == null || confidence < FIRMS_MIN_CONFIDENCE) continue;
    const lat = num(cols[index.latitude]);
    const lon = num(cols[index.longitude]);
    if (lat == null || lon == null || lat < -90 || lat > 90 || lon < -180 || lon > 180) continue;
    const clock = String(cols[index.acq_time] || '').padStart(4, '0');
    const time = toIso(`${cols[index.acq_date]}T${clock.slice(0, 2)}:${clock.slice(2, 4)}:00Z`);
    if (!time) continue;
    const frp = num(cols[index.frp]);
    events.push({
      id: `firms-${lat.toFixed(3)}-${lon.toFixed(3)}-${time}`,
      layer: 'fires',
      title: '',
      lat,
      lon,
      time,
      frp: frp == null ? undefined : frp,
      confidence: Math.round(confidence),
      url: 'https://firms.modaps.eosdis.nasa.gov/map/',
      source: 'FIRMS',
    });
  }
  events.sort((a, b) => (b.frp || 0) - (a.frp || 0));
  const capped = events.slice(0, FIRMS_MAP_CAP);
  capped.sort((a, b) => Date.parse(b.time) - Date.parse(a.time));
  return { fetchedAt, events: capped };
}

/** Drop EONET storms whose name is already on a GDACS cyclone. */
export function dedupeCyclones(events) {
  const gdacsNames = events
    .filter((event) => event.source === 'GDACS' && event.layer === 'cyclones')
    .map((event) => event.title.toUpperCase());
  return events.filter((event) => {
    if (event.source !== 'EONET' || event.layer !== 'cyclones') return true;
    const token = (event.title.split(/\s+/).pop() || '').replace(/[^A-Z]/gi, '').toUpperCase();
    if (token.length < 3) return true;
    return !gdacsNames.some((name) => name.includes(token));
  });
}

export function replaceSource(events, source, incoming) {
  return [...events.filter((event) => event.source !== source), ...incoming].sort(
    (a, b) => Date.parse(b.time) - Date.parse(a.time),
  );
}
