import * as maplibregl from 'maplibre-gl';
import {
  DRAW_ORDER,
  FEED_LIMIT,
  FIRMS_FEED_LIMIT,
  FIRMS_URL,
  GDACS_URL,
  LAYER_COLOR,
  LAYER_IDS,
  LAYER_SOURCES,
  USGS_WEEK_URL,
  dedupeCyclones,
  emptySnapshot,
  eonetCategoryUrl,
  parseEonetCategory,
  parseFirmsCsv,
  parseGdacs,
  parseUsgs,
  replaceSource,
} from './hazards.mjs';

const LOCALE_TAG = { en: 'en-GB', ru: 'ru-RU', pl: 'pl-PL', lv: 'lv-LV' };

const OPENFREEMAP_STYLE = 'https://tiles.openfreemap.org/styles/dark';

maplibregl.setWorkerUrl('/vendor/maplibre/maplibre-gl-worker.mjs');

const FALLBACK_STYLE = {
  version: 8,
  sources: {
    carto: {
      type: 'raster',
      tiles: [
        'https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
        'https://b.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
        'https://c.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
        'https://d.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
      ],
      tileSize: 256,
      attribution: '© OpenStreetMap contributors © CARTO',
    },
  },
  layers: [
    { id: 'background', type: 'background', paint: { 'background-color': '#050505' } },
    { id: 'carto', type: 'raster', source: 'carto' },
  ],
};

const EONET_LAYERS = [
  ['severeStorms', 'cyclones'],
  ['volcanoes', 'volcanoes'],
  ['wildfires', 'wildfires'],
  ['floods', 'floods'],
  ['drought', 'droughts'],
];

function fill(template, vars) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    if (char === '&') return '&amp;';
    if (char === '<') return '&lt;';
    if (char === '>') return '&gt;';
    if (char === '"') return '&quot;';
    return '&#39;';
  });
}

async function okJson(response) {
  if (!response.ok) throw new Error(String(response.status));
  return response.json();
}

async function okText(response) {
  if (!response.ok) throw new Error(String(response.status));
  return response.text();
}

function radiusPaint(id) {
  if (id === 'earthquakes') {
    return ['interpolate', ['linear'], ['get', 'mag'], 4.5, 5, 6, 10, 8, 18];
  }
  if (id === 'fires') {
    return ['interpolate', ['linear'], ['get', 'frp'], 0, 3.2, 30, 5, 120, 8, 500, 13];
  }
  return ['interpolate', ['linear'], ['get', 'alertRank'], 1, 6, 2, 8, 3, 12];
}

function featureOf(event) {
  return {
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [event.lon, event.lat] },
    properties: {
      id: event.id,
      mag: event.mag ?? 0,
      alertRank: event.alert === 'Red' ? 3 : event.alert === 'Orange' ? 2 : 1,
      frp: event.frp ?? 0,
    },
  };
}

function collectionOf(events) {
  return { type: 'FeatureCollection', features: events.map(featureOf) };
}

export function mountHazardGlobe(root) {
  const ui = JSON.parse(root.dataset.copy || '{}');
  const locale = root.dataset.locale || 'en';
  const tag = LOCALE_TAG[locale] || 'en-GB';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mapHost = root.querySelector('[data-map]');
  const list = root.querySelector('[data-feed]');
  const empty = root.querySelector('[data-feed-empty]');
  const more = root.querySelector('[data-feed-more]');
  const status = root.querySelector('[data-status]');
  const snapshotNote = root.querySelector('[data-snapshot-note]');
  const mapFailed = root.querySelector('[data-map-failed]');

  const enabled = new Set(LAYER_IDS);
  let snapshot = emptySnapshot();
  let byId = new Map();
  let map = null;
  let popup = null;
  let styleReady = false;
  let dataReady = false;
  let fallbackUsed = false;
  let openId = '';

  function formatNum(value, digits) {
    return new Intl.NumberFormat(tag, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(value);
  }

  function formatTime(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return '';
    const formatted = new Intl.DateTimeFormat(tag, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
      hourCycle: 'h23',
    }).format(date);
    return `${formatted} UTC`;
  }

  function eventTitle(event) {
    if (event.title) return event.title;
    return `${ui.hotspot} ${event.lat.toFixed(2)}°, ${event.lon.toFixed(2)}°`;
  }

  function levelLine(event) {
    const parts = [];
    if (event.layer === 'earthquakes' && event.mag != null) {
      parts.push(`${ui.magnitude} ${formatNum(event.mag, 1)}`);
      if (event.depthKm != null) parts.push(`${ui.depth} ${formatNum(event.depthKm, 0)} ${ui.km}`);
    } else if (event.alert && ui.alerts[event.alert]) {
      parts.push(`${ui.alert} ${ui.alerts[event.alert]}`);
    }
    if (event.windKmh != null) parts.push(`${ui.wind} ${formatNum(event.windKmh, 0)} ${ui.kmh}`);
    if (event.knots != null) parts.push(`${ui.wind} ${formatNum(event.knots, 0)} ${ui.knots}`);
    if (event.frp != null) {
      const digits = event.frp < 10 ? 1 : 0;
      parts.push(`${ui.frp} ${formatNum(event.frp, digits)} ${ui.mw}`);
    }
    if (event.confidence != null) parts.push(`${ui.confidence} ${formatNum(event.confidence, 0)}`);
    return parts.join(' · ');
  }

  function indexEvents() {
    byId = new Map();
    for (const id of LAYER_IDS) {
      for (const event of snapshot.layers[id]?.events || []) byId.set(event.id, event);
    }
  }

  function layerTime(id) {
    const stamps = (LAYER_SOURCES[id] || [])
      .map((source) => Date.parse(snapshot.sourceTimes?.[source] || ''))
      .filter((time) => Number.isFinite(time) && time > 0);
    if (!stamps.length) return snapshot.layers[id]?.fetchedAt || snapshot.fetchedAt;
    return new Date(Math.min(...stamps)).toISOString();
  }

  function renderStatus() {
    const stamps = LAYER_IDS.map((id) => Date.parse(layerTime(id))).filter((time) => time > 0);
    const oldest = stamps.length ? Math.min(...stamps) : Date.parse(snapshot.fetchedAt);
    status.textContent = fill(ui.asOf, { time: formatTime(new Date(oldest).toISOString()) });
    for (const id of LAYER_IDS) {
      const badge = root.querySelector(`[data-live="${id}"]`);
      const count = root.querySelector(`[data-count="${id}"]`);
      if (badge) badge.title = formatTime(layerTime(id));
      if (count) count.textContent = String(snapshot.layers[id]?.events.length || 0);
    }
  }

  function collectFeed() {
    const visible = [];
    for (const id of LAYER_IDS) {
      if (!enabled.has(id)) continue;
      const events = snapshot.layers[id]?.events || [];
      if (id === 'fires') {
        visible.push(
          ...[...events].sort((a, b) => (b.frp || 0) - (a.frp || 0)).slice(0, FIRMS_FEED_LIMIT),
        );
      } else {
        visible.push(...events);
      }
    }
    visible.sort((a, b) => Date.parse(b.time) - Date.parse(a.time));
    return { shown: visible.slice(0, FEED_LIMIT), total: visible.length };
  }

  function renderFeed() {
    const { shown, total } = collectFeed();
    list.replaceChildren();
    empty.hidden = shown.length > 0;
    more.hidden = total <= shown.length;
    if (!more.hidden) more.textContent = fill(ui.feedMore, { count: String(shown.length) });
    for (const event of shown) {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'hz-feed-btn';
      button.dataset.id = event.id;
      if (event.id === openId) button.classList.add('is-active');
      const swatch = document.createElement('span');
      swatch.className = 'hz-swatch';
      swatch.style.setProperty('--hz', LAYER_COLOR[event.layer]);
      swatch.setAttribute('aria-hidden', 'true');
      const body = document.createElement('span');
      body.className = 'hz-feed-copy';
      const title = document.createElement('span');
      title.className = 'hz-feed-title';
      title.textContent = eventTitle(event);
      const meta = document.createElement('span');
      meta.className = 'hz-feed-meta';
      const level = levelLine(event);
      meta.textContent = [ui.layers[event.layer], level, formatTime(event.time)]
        .filter(Boolean)
        .join(' · ');
      body.append(title, meta);
      button.append(swatch, body);
      item.append(button);
      list.append(item);
    }
  }

  function popupHtml(event) {
    const level = levelLine(event);
    const link = event.url
      ? `<p class="hz-popup-link"><a href="${esc(event.url)}" target="_blank" rel="noopener noreferrer">${esc(ui.openSource)}</a></p>`
      : '';
    return `<p class="hz-kicker">${esc(ui.layers[event.layer])} · ${esc(event.source)}</p>
      <p class="hz-popup-title">${esc(eventTitle(event))}</p>
      ${level ? `<p class="hz-popup-level">${esc(level)}</p>` : ''}
      <p class="hz-popup-time">${esc(formatTime(event.time))}</p>
      <p class="hz-popup-source">${esc(ui.source)} ${esc(event.source)}</p>
      ${link}`;
  }

  function openEvent(id) {
    const event = byId.get(id);
    if (!event || !enabled.has(event.layer)) return;
    openId = id;
    if (map && popup) {
      const zoom = Math.max(map.getZoom(), 3.15);
      map.flyTo({
        center: [event.lon, event.lat],
        zoom,
        essential: true,
        duration: reduced ? 0 : 700,
      });
      popup.setLngLat([event.lon, event.lat]).setHTML(popupHtml(event)).addTo(map);
      const close = popup.getElement()?.querySelector('.maplibregl-popup-close-button');
      if (close) close.setAttribute('aria-label', ui.close);
    }
    renderFeed();
    const active = list.querySelector('.is-active');
    active?.scrollIntoView({ block: 'nearest' });
  }

  function setVisible(id, on) {
    if (!map) return;
    const visibility = on ? 'visible' : 'none';
    for (const suffix of ['-halo', '-dot']) {
      const layerId = `${id}${suffix}`;
      if (map.getLayer(layerId)) map.setLayoutProperty(layerId, 'visibility', visibility);
    }
  }

  function syncSources() {
    if (!map || !styleReady) return;
    for (const id of LAYER_IDS) {
      const source = map.getSource(id);
      if (!source) continue;
      source.setData(collectionOf(snapshot.layers[id]?.events || []));
      setVisible(id, enabled.has(id));
    }
    root.dataset.ready = 'true';
  }

  function addLayers() {
    for (const id of DRAW_ORDER) {
      if (map.getSource(id)) continue;
      map.addSource(id, { type: 'geojson', data: collectionOf([]) });
      const color = LAYER_COLOR[id];
      const radius = radiusPaint(id);
      map.addLayer({
        id: `${id}-halo`,
        type: 'circle',
        source: id,
        paint: {
          'circle-radius': ['*', radius, 2.35],
          'circle-color': color,
          'circle-opacity': 0.38,
          'circle-blur': 0.85,
        },
      });
      map.addLayer({
        id: `${id}-dot`,
        type: 'circle',
        source: id,
        paint: {
          'circle-radius': radius,
          'circle-color': color,
          'circle-opacity': 0.95,
          'circle-stroke-width': 1.25,
          'circle-stroke-color': '#f4f4f0',
        },
      });
      map.on('mouseenter', `${id}-dot`, () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', `${id}-dot`, () => {
        map.getCanvas().style.cursor = '';
      });
      map.on('click', `${id}-dot`, (event) => {
        const hit = event.features?.[0]?.properties?.id;
        if (hit) openEvent(String(hit));
      });
    }
  }

  function onStyle() {
    styleReady = true;
    try {
      map.setProjection({ type: 'globe' });
    } catch {
      /* projection stays on the constructor value */
    }
    const style = map.getStyle();
    for (const layer of style?.layers || []) {
      if (layer.type === 'symbol' && !layer.id.endsWith('-dot') && !layer.id.endsWith('-halo')) {
        map.setLayoutProperty(layer.id, 'visibility', 'none');
      }
    }
    try {
      map.setSky({
        'sky-color': '#000000',
        'horizon-color': '#1c240c',
        'fog-color': '#050505',
        'sky-horizon-blend': 0.55,
        'horizon-fog-blend': 0.72,
        'fog-ground-blend': 0.88,
        'atmosphere-blend': 0.85,
      });
    } catch {
      /* sky is optional */
    }
    addLayers();
    map.getCanvas().setAttribute('aria-label', ui.mapLabel);
    syncSources();
    map.resize();
  }

  function stampSources(iso, names) {
    snapshot.sourceTimes = snapshot.sourceTimes || {};
    for (const name of names) snapshot.sourceTimes[name] = iso;
  }

  function applySnapshot(next) {
    snapshot = next;
    snapshot.sourceTimes = snapshot.sourceTimes || {};
    if (!Object.keys(snapshot.sourceTimes).length && snapshot.fetchedAt) {
      stampSources(snapshot.fetchedAt, ['USGS', 'GDACS', 'EONET', 'FIRMS']);
    }
    for (const id of LAYER_IDS) {
      if (!snapshot.layers[id]) snapshot.layers[id] = { fetchedAt: snapshot.fetchedAt, events: [] };
    }
    indexEvents();
    dataReady = true;
    renderStatus();
    renderFeed();
    syncSources();
  }

  async function loadOrFail(url, asText) {
    const response = await fetch(url);
    return asText ? okText(response) : okJson(response);
  }

  async function refreshLive() {
    const failures = [];
    const now = Date.now();
    const fetchedAt = new Date(now).toISOString();
    const [usgs, gdacs, eonetPayloads, firms] = await Promise.all([
      loadOrFail(USGS_WEEK_URL).catch(() => {
        failures.push('USGS');
        return null;
      }),
      loadOrFail(GDACS_URL).catch(() => {
        failures.push('GDACS');
        return null;
      }),
      Promise.all(
        EONET_LAYERS.map(([category]) =>
          loadOrFail(eonetCategoryUrl(category)).then((json) => json.events || []),
        ),
      ).catch(() => {
        failures.push('EONET');
        return null;
      }),
      loadOrFail(FIRMS_URL, true).catch(() => {
        failures.push('FIRMS');
        return null;
      }),
    ]);

    const next = structuredClone(snapshot);
    next.sourceTimes = next.sourceTimes || {};
    if (usgs) {
      next.layers.earthquakes = parseUsgs(usgs, fetchedAt);
      next.sourceTimes.USGS = fetchedAt;
    }
    if (gdacs) {
      const layers = parseGdacs(gdacs, fetchedAt);
      for (const id of ['cyclones', 'floods', 'volcanoes', 'droughts', 'wildfires']) {
        next.layers[id].events = replaceSource(next.layers[id].events, 'GDACS', layers[id]);
      }
      next.sourceTimes.GDACS = fetchedAt;
    }
    if (eonetPayloads) {
      const parsed = {};
      EONET_LAYERS.forEach(([, layer], index) => {
        parsed[layer] = parseEonetCategory(eonetPayloads[index], layer, now, fetchedAt).events;
      });
      for (const id of ['cyclones', 'floods', 'volcanoes', 'droughts', 'wildfires']) {
        next.layers[id].events = replaceSource(next.layers[id].events, 'EONET', parsed[id] || []);
      }
      next.sourceTimes.EONET = fetchedAt;
    }
    if (gdacs || eonetPayloads) {
      next.layers.cyclones.events = dedupeCyclones(next.layers.cyclones.events);
    }
    if (firms) {
      next.layers.fires = parseFirmsCsv(firms, fetchedAt);
      next.sourceTimes.FIRMS = fetchedAt;
    }
    next.fetchedAt = fetchedAt;
    applySnapshot(next);
    if (failures.length) snapshotNote.hidden = false;
  }

  list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-id]');
    if (!button) return;
    openEvent(button.dataset.id);
  });

  root.querySelectorAll('input[data-layer]').forEach((input) => {
    input.addEventListener('change', () => {
      const id = input.dataset.layer;
      if (input.checked) enabled.add(id);
      else enabled.delete(id);
      setVisible(id, input.checked);
      const current = byId.get(openId);
      if (current && !enabled.has(current.layer)) {
        openId = '';
        popup?.remove();
      }
      renderFeed();
    });
  });

  try {
    map = new maplibregl.Map({
      container: mapHost,
      style: OPENFREEMAP_STYLE,
      center: [18, 8],
      zoom: 1.42,
      projection: { type: 'globe' },
      attributionControl: false,
      fadeDuration: 0,
    });
    popup = new maplibregl.Popup({
      closeButton: true,
      closeOnClick: true,
      maxWidth: '300px',
      className: 'hz-popup',
      focusAfterOpen: false,
    });
    popup.on('close', () => {
      openId = '';
      renderFeed();
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');
    map.on('style.load', onStyle);
    map.on('idle', () => {
      if (styleReady && dataReady) root.dataset.tiles = 'true';
    });
    const fallbackTimer = window.setTimeout(() => {
      if (!styleReady && !fallbackUsed) {
        fallbackUsed = true;
        map.setStyle(FALLBACK_STYLE);
      }
    }, 8000);
    map.on('style.load', () => window.clearTimeout(fallbackTimer));
  } catch {
    mapFailed.hidden = false;
  }

  fetch('/data/hazards.json')
    .then(okJson)
    .then((json) => {
      applySnapshot(json);
    })
    .catch(() => {
      status.textContent = ui.dataFailed;
      snapshotNote.hidden = false;
    })
    .finally(() => {
      refreshLive().catch(() => {
        snapshotNote.hidden = false;
      });
    });
}

const root = document.querySelector('[data-hazard-globe]');
if (root) mountHazardGlobe(root);
