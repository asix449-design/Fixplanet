/**
 * Normalize public hazard feeds into one snapshot shape.
 * Used by scripts/fetch-hazards.mjs and the globe page.
 * Event titles are kept as the source wrote them.
 */

export const USGS_WEEK_URL =
  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
export const GDACS_URL =
  'https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH';

export function gdacsTypedUrl(eventlist, fromdate, todate) {
  const url = new URL(GDACS_URL);
  url.searchParams.set('eventlist', eventlist);
  url.searchParams.set('alertlevel', 'Green;Orange;Red');
  url.searchParams.set('fromdate', fromdate);
  url.searchParams.set('todate', todate);
  return url.href;
}
export const EONET_EVENTS_URL = 'https://eonet.gsfc.nasa.gov/api/v3/events';
/** Public VIIRS 24h file. No key. No CORS, so only the fetch script reads it. */
export const FIRMS_URL =
  'https://firms.modaps.eosdis.nasa.gov/data/active_fire/suomi-npp-viirs-c2/csv/SUOMI_VIIRS_C2_Global_24h.csv';
export const NHC_MAPSERVER =
  'https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer';
export const USGS_VOLCANO_URL =
  'https://volcanoes.usgs.gov/hans-public/api/volcano/getCapElevated';
export const DROUGHT_WMS = 'https://drought.emergency.copernicus.eu/api/wms';

export const LAYER_IDS = [
  'earthquakes',
  'cyclones',
  'floods',
  'volcanoes',
  'droughts',
  'wildfires',
  'fires',
];

/** Panel order. `fires` is the satellite hot-spot layer and stays last. */
export const PANEL_IDS = [
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
/** VIIRS confidence words kept in the snapshot. */
export const FIRMS_CONFIDENCE = new Set(['nominal', 'high']);
/** One kept hot spot per cell of this size, in degrees. */
export const FIRMS_CELL_DEG = 0.05;
/** Strongest cells listed beside the map. The map still shows the rest. */
export const FIRMS_FEED_LIMIT = 30;
export const FEED_LIMIT = 100;

export function droughtTileUrl(layer) {
  return (
    `${DROUGHT_WMS}?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap` +
    `&LAYERS=${layer}&SRS=EPSG:3857&BBOX={bbox-epsg-3857}` +
    '&WIDTH=512&HEIGHT=512&STYLE=&FORMAT=image/png&TRANSPARENT=true'
  );
}

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
    if (
      layer !== 'droughts' &&
      props.iscurrent != null &&
      String(props.iscurrent) !== 'true'
    ) {
      continue;
    }
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

function snapCell(index) {
  return Math.round(index * 5) / 100;
}

/**
 * Keep nominal and high confidence, one point per 0.05 degree cell,
 * highest fire radiative power in the cell. Compact [lat, lon, frp].
 */
export function thinFirmsCsv(text, fetchedAt = new Date().toISOString()) {
  const lines = String(text || '').split(/\r?\n/);
  if (lines.length < 2) return { fetchedAt, count: 0, points: [] };
  const header = lines[0].split(',').map((cell) => cell.trim());
  const index = Object.fromEntries(header.map((name, i) => [name, i]));
  const need = ['latitude', 'longitude', 'confidence', 'frp'];
  if (need.some((name) => index[name] == null)) return { fetchedAt, count: 0, points: [] };

  const cells = new Map();
  for (let i = 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line) continue;
    const cols = line.split(',');
    const confidence = String(cols[index.confidence] || '').trim().toLowerCase();
    if (!FIRMS_CONFIDENCE.has(confidence)) continue;
    const lat = num(cols[index.latitude]);
    const lon = num(cols[index.longitude]);
    if (lat == null || lon == null || lat < -90 || lat > 90 || lon < -180 || lon > 180) continue;
    const frp = num(cols[index.frp]) ?? 0;
    const latIndex = Math.floor(lat / FIRMS_CELL_DEG);
    const lonIndex = Math.floor(lon / FIRMS_CELL_DEG);
    const key = `${latIndex}:${lonIndex}`;
    const prev = cells.get(key);
    if (!prev || frp > prev[2] || (frp === prev[2] && confidence === 'high')) {
      cells.set(key, [snapCell(latIndex), snapCell(lonIndex), frp, confidence === 'high' ? 1 : 0]);
    }
  }

  let points = [...cells.values()].map(([lat, lon, frp]) => [
    lat,
    lon,
    Math.round(frp * 10) / 10,
  ]);
  let encoded = JSON.stringify(points);
  if (encoded.length > 700000) {
    points = points.map(([lat, lon, frp]) => [lat, lon, Math.max(0, Math.round(frp))]);
    encoded = JSON.stringify(points);
  }
  points.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
  return { fetchedAt, count: points.length, points, bytes: encoded.length };
}

/** Map compact fire cells, or an older event list, into globe events. */
export function fireEvents(layer) {
  if (!layer) return [];
  if (Array.isArray(layer.points)) {
    const time = layer.fetchedAt || new Date(0).toISOString();
    return layer.points.map((point, index) => ({
      id: `firms-${index}`,
      layer: 'fires',
      title: '',
      lat: point[0],
      lon: point[1],
      time,
      frp: point[2],
      url: 'https://firms.modaps.eosdis.nasa.gov/map/',
      source: 'FIRMS',
    }));
  }
  return layer.events || [];
}

const USGS_VOLCANO_ALERT = { RED: 'Red', ORANGE: 'Orange', YELLOW: 'Yellow', GREEN: 'Green' };

export function parseUsgsVolcanoes(rows, fetchedAt = new Date().toISOString()) {
  const events = [];
  for (const row of rows || []) {
    const lat = num(row?.latitude);
    const lon = num(row?.longitude);
    if (lat == null || lon == null) continue;
    const time = toIso(row.sent_date_cap) || fetchedAt;
    events.push({
      id: `usgs-volcano-${row.vnum || events.length}`,
      layer: 'volcanoes',
      title: String(row.volcano_name_appended || 'USGS').replace(/\s+/g, ' ').trim(),
      lat,
      lon,
      time,
      alert: USGS_VOLCANO_ALERT[String(row.color_code || '').toUpperCase()],
      url: 'https://volcanoes.usgs.gov/vhp/updates.html',
      source: 'USGS',
    });
  }
  events.sort((a, b) => Date.parse(b.time) - Date.parse(a.time));
  return events;
}

function roundPair(pair) {
  if (!Array.isArray(pair) || pair.length < 2) return null;
  const lon = Number(pair[0]);
  const lat = Number(pair[1]);
  if (!Number.isFinite(lon) || !Number.isFinite(lat)) return null;
  return [Math.round(lon * 100) / 100, Math.round(lat * 100) / 100];
}

function simplifyPositions(coordinates) {
  const out = [];
  for (const pair of coordinates || []) {
    const next = roundPair(pair);
    if (!next) continue;
    const prev = out[out.length - 1];
    if (prev && prev[0] === next[0] && prev[1] === next[1]) continue;
    out.push(next);
  }
  return out;
}

function simplifyGeometry(geometry) {
  if (!geometry) return null;
  if (geometry.type === 'LineString') {
    const coordinates = simplifyPositions(geometry.coordinates);
    return coordinates.length > 1 ? { type: 'LineString', coordinates } : null;
  }
  if (geometry.type === 'Polygon') {
    const coordinates = (geometry.coordinates || [])
      .map((ring) => simplifyPositions(ring))
      .filter((ring) => ring.length > 3);
    return coordinates.length ? { type: 'Polygon', coordinates } : null;
  }
  if (geometry.type === 'MultiLineString') {
    const coordinates = (geometry.coordinates || [])
      .map((line) => simplifyPositions(line))
      .filter((line) => line.length > 1);
    return coordinates.length ? { type: 'MultiLineString', coordinates } : null;
  }
  if (geometry.type === 'MultiPolygon') {
    const coordinates = [];
    for (const polygon of geometry.coordinates || []) {
      const rings = (polygon || [])
        .map((ring) => simplifyPositions(ring))
        .filter((ring) => ring.length > 3);
      if (rings.length) coordinates.push(rings);
    }
    return coordinates.length ? { type: 'MultiPolygon', coordinates } : null;
  }
  return null;
}

export function nhcPlan(listing) {
  const layers = listing?.layers || [];
  const pick = (suffix) =>
    layers
      .filter((layer) => layer.geometryType && String(layer.name || '').endsWith(suffix))
      .map((layer) => layer.id);
  return {
    points: pick('Forecast Points'),
    cones: pick('Forecast Cone'),
    tracks: pick('Forecast Track'),
    past: pick('Past Track'),
  };
}

export function nhcQueryUrl(id) {
  return `${NHC_MAPSERVER}/${id}/query?where=1%3D1&outFields=*&returnGeometry=true&outSR=4326&f=geojson`;
}

export function nhcCountUrl(id) {
  return `${NHC_MAPSERVER}/${id}/query?where=1%3D1&returnCountOnly=true&f=json`;
}

function finiteWind(value) {
  const wind = num(value);
  if (wind == null || wind <= 0 || wind >= 9999) return undefined;
  return wind;
}

export function assembleNhc(groups, fetchedAt = new Date().toISOString()) {
  const names = new Map();
  const current = new Map();
  for (const collection of groups.points || []) {
    for (const feature of collection?.features || []) {
      const props = feature.properties || {};
      const point = pair(feature.geometry?.coordinates);
      if (!point) continue;
      const slot = String(props.binnumber || props.stormnum || '');
      if (props.stormname) names.set(slot, String(props.stormname));
      const tau = num(props.tau);
      const prev = current.get(slot);
      if (prev && tau != null && prev.tau != null && tau >= prev.tau) continue;
      const time = toIso(props.idp_ingestdate) || fetchedAt;
      current.set(slot, {
        tau,
        event: {
          id: `nhc-${slot || current.size}`,
          layer: 'cyclones',
          title: String(props.stormname || 'NHC'),
          lat: point.lat,
          lon: point.lon,
          time,
          knots: finiteWind(props.maxwind),
          url: 'https://www.nhc.noaa.gov/',
          source: 'NHC',
        },
      });
    }
  }

  const cones = [];
  for (const collection of groups.cones || []) {
    for (const feature of collection?.features || []) {
      const geometry = simplifyGeometry(feature.geometry);
      if (!geometry) continue;
      const props = feature.properties || {};
      const slot = String(props.binnumber || '');
      const title = String(props.stormname || names.get(slot) || '');
      cones.push({
        type: 'Feature',
        geometry,
        properties: {
          id: `nhc-${slot || cones.length}`,
          title,
          time: toIso(props.idp_ingestdate) || fetchedAt,
        },
      });
    }
  }

  const tracks = [];
  const pushTracks = (collections, kind) => {
    for (const collection of collections || []) {
      for (const feature of collection?.features || []) {
        const geometry = simplifyGeometry(feature.geometry);
        if (!geometry) continue;
        const props = feature.properties || {};
        const slot = String(props.binnumber || '');
        tracks.push({
          type: 'Feature',
          geometry,
          properties: {
            id: `nhc-${slot || tracks.length}`,
            title: String(props.stormname || names.get(slot) || ''),
            kind,
          },
        });
      }
    }
  };
  pushTracks(groups.tracks, 'forecast');
  pushTracks(groups.past, 'past');

  return {
    fetchedAt,
    events: [...current.values()].map((item) => item.event),
    cones: { type: 'FeatureCollection', features: cones },
    tracks: { type: 'FeatureCollection', features: tracks },
  };
}

export async function loadNhcSnapshot(fetchedAt, fetchJson) {
  const listing = await fetchJson(`${NHC_MAPSERVER}?f=json`);
  const plan = nhcPlan(listing);
  const groups = { points: [], cones: [], tracks: [], past: [] };
  const jobs = [];
  for (const key of Object.keys(groups)) {
    for (const id of plan[key]) {
      jobs.push(
        fetchJson(nhcCountUrl(id)).then(async (countBody) => {
          if (!countBody?.count) return;
          const collection = await fetchJson(nhcQueryUrl(id));
          if (collection?.features?.length) groups[key].push(collection);
        }),
      );
    }
  }
  await Promise.all(jobs);
  return assembleNhc(groups, fetchedAt);
}

/** Drop EONET and NHC storms whose name is already on a GDACS cyclone. */
export function dedupeCyclones(events) {
  const gdacsNames = events
    .filter((event) => event.source === 'GDACS' && event.layer === 'cyclones')
    .map((event) => event.title.toUpperCase());
  return events.filter((event) => {
    if (event.layer !== 'cyclones' || (event.source !== 'EONET' && event.source !== 'NHC')) return true;
    const token = (event.title.split(/\s+/).pop() || '').replace(/[^A-Z0-9]/gi, '').toUpperCase();
    if (token.length < 3) return true;
    return !gdacsNames.some((name) => name.includes(token));
  });
}

export function replaceSource(events, source, incoming) {
  return [...events.filter((event) => event.source !== source), ...incoming].sort(
    (a, b) => Date.parse(b.time) - Date.parse(a.time),
  );
}
