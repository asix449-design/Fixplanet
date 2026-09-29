import * as maplibregl from 'maplibre-gl';
import { causeColor } from './displacement-colors.mjs';

const LOCALE_TAG = { en: 'en-GB', ru: 'ru-RU', pl: 'pl-PL', lv: 'lv-LV' };
const OPENFREEMAP_STYLE = 'https://tiles.openfreemap.org/styles/dark';

maplibregl.setWorkerUrl('/vendor/maplibre/maplibre-gl-worker.mjs');

const HIDDEN_SOURCES = new Set([
  'iom_dtm_sudan',
  'ocha_opt_snapshot',
  'ocha_opt_sitrep',
  'ocha_opt',
  'unrwa_api',
  'unhcr_web_southsudan',
]);

const GAZA_CUT = {
  en: 'On 23 September 2026, the United Nations Office for the Coordination of Humanitarian Affairs',
  ru: 'По оценке Управления Организации Объединённых Наций по координации гуманитарных вопросов',
  pl: 'Według szacunków Biura Narodów Zjednoczonych do spraw Koordynacji Pomocy Humanitarnej',
  lv: 'Pēc Apvienoto Nāciju Organizācijas Humānās palīdzības koordinācijas biroja aplēsēm',
};

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

const MOVEMENT_KINDS = new Set(['internal_new_displacements']);

function fill(template, vars) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
}

async function okJson(response) {
  if (!response.ok) throw new Error(String(response.status));
  return response.json();
}

function toRad(deg) {
  return (deg * Math.PI) / 180;
}

function toDeg(rad) {
  return (rad * 180) / Math.PI;
}

function lngLatToVec(lon, lat) {
  const φ = toRad(lat);
  const λ = toRad(lon);
  const cosφ = Math.cos(φ);
  return [cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ)];
}

function vecToLngLat(v) {
  const lon = toDeg(Math.atan2(v[1], v[0]));
  const hyp = Math.hypot(v[0], v[1]);
  const lat = toDeg(Math.atan2(v[2], hyp));
  return [lon, lat];
}

function vAdd(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function vScale(v, s) {
  return [v[0] * s, v[1] * s, v[2] * s];
}

function vCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

function vNorm(v) {
  const len = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / len, v[1] / len, v[2] / len];
}

function slerp(a, b, t) {
  let dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  dot = Math.min(1, Math.max(-1, dot));
  const omega = Math.acos(dot);
  if (omega < 1e-6) return a.slice();
  const s = Math.sin(omega);
  const s0 = Math.sin((1 - t) * omega) / s;
  const s1 = Math.sin(t * omega) / s;
  return [a[0] * s0 + b[0] * s1, a[1] * s0 + b[1] * s1, a[2] * s0 + b[2] * s1];
}

function haversineKm(lon1, lat1, lon2, lat2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
}

function destination(lon, lat, bearingDeg, distKm) {
  const R = 6371;
  const δ = distKm / R;
  const θ = toRad(bearingDeg);
  const φ1 = toRad(lat);
  const λ1 = toRad(lon);
  const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
  const λ2 =
    λ1 +
    Math.atan2(
      Math.sin(θ) * Math.sin(δ) * Math.cos(φ1),
      Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2),
    );
  return [toDeg(λ2), toDeg(φ2)];
}

function bearingDeg(lon1, lat1, lon2, lat2) {
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δλ = toRad(lon2 - lon1);
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function curvedArc(from, to, bend) {
  const start = lngLatToVec(from[0], from[1]);
  const end = lngLatToVec(to[0], to[1]);
  const axis = vNorm(vCross(start, end));
  const dist = haversineKm(from[0], from[1], to[0], to[1]);
  const steps = dist > 2500 ? 72 : 48;
  const coords = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const p = slerp(start, end, t);
    const side = vNorm(vCross(p, axis));
    const lifted = vNorm(vAdd(p, vScale(side, Math.sin(Math.PI * t) * bend)));
    coords.push(vecToLngLat(lifted));
  }
  return { coords, dist };
}

function splitAntimeridian(coords) {
  const parts = [];
  let current = [coords[0]];
  for (let i = 1; i < coords.length; i += 1) {
    const prev = current[current.length - 1];
    const next = coords[i];
    if (Math.abs(next[0] - prev[0]) > 180) {
      parts.push(current);
      current = [next];
    } else {
      current.push(next);
    }
  }
  parts.push(current);
  return parts;
}

function arrowImage() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 32, 32);
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(16, 2);
  ctx.lineTo(30, 28);
  ctx.lineTo(16, 21);
  ctx.lineTo(2, 28);
  ctx.closePath();
  ctx.fill();
  return ctx.getImageData(0, 0, 32, 32);
}

function publicCaption(crisis, locale) {
  let text = crisis.captions?.[locale] || crisis.captions?.en || '';
  if (crisis.id === 'gaza-palestine') {
    const cut = GAZA_CUT[locale] || GAZA_CUT.en;
    const index = text.indexOf(cut);
    if (index > 0) text = text.slice(0, index).trim();
  }
  return text;
}

function shownFlow(flow) {
  if (!flow || flow.kind === 'needs_estimate') return false;
  if (HIDDEN_SOURCES.has(flow.source_id)) return false;
  return true;
}

function contextKind(fig) {
  if (!fig || HIDDEN_SOURCES.has(fig.source_id)) return '';
  const label = String(fig.label || '').toLowerCase();
  if (label.startsWith('new displacements')) return 'movements';
  if (label.startsWith('sum of the three')) return 'droughtSum';
  if (label.startsWith('returned') || label.startsWith('approximate returns')) return 'returns';
  if (label.startsWith('worldwide total')) return 'worldwide';
  if (label.startsWith('registered rohingya')) return 'rohingya';
  return '';
}

export function mountDisplacementGlobe(root) {
  const ui = JSON.parse(root.dataset.copy || '{}');
  const locale = root.dataset.locale || 'en';
  const tag = LOCALE_TAG[locale] || 'en-GB';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mapHost = root.querySelector('[data-map]');
  const list = root.querySelector('[data-feed]');
  const card = root.querySelector('[data-card]');
  const status = root.querySelector('[data-status]');
  const mapFailed = root.querySelector('[data-map-failed]');
  const labels = root.querySelector('[data-labels]');
  const thickMin = root.querySelector('[data-thick="min"]');
  const thickMid = root.querySelector('[data-thick="mid"]');
  const thickMax = root.querySelector('[data-thick="max"]');

  const hiddenCauses = new Set();
  let pack = null;
  let selected = '';
  let hovered = '';
  let map = null;
  let styleReady = false;
  let dataReady = false;
  let fallbackUsed = false;
  let linesToken = 0;
  let labelItems = [];
  let hoverArrows = [];
  let hoverCauses = [];
  let arrowScale = { min: 1, max: 1 };

  function narrowScreen() {
    return window.matchMedia('(max-width: 980px)').matches;
  }

  function siteLime() {
    const value = getComputedStyle(document.documentElement).getPropertyValue('--lime').trim();
    return value || '#c0ff00';
  }

  function globeCamera() {
    const narrow = narrowScreen();
    return {
      center: [22, 14],
      zoom: narrow ? 1.05 : 1.15,
      pitch: narrow ? 8 : 18,
      bearing: -8,
    };
  }

  function outlineStyle() {
    const lime = siteLime();
    const narrow = narrowScreen();
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 3));
    if (!narrow) {
      return {
        lime,
        coastGlow: { width: ['interpolate', ['linear'], ['zoom'], 0, 5.2, 3, 7, 6, 9], blur: 3, opacity: 0.48 },
        coast: { width: ['interpolate', ['linear'], ['zoom'], 0, 1.35, 3, 1.7, 6, 2.1], blur: 0.15, opacity: 0.95 },
        borderGlow: { width: ['interpolate', ['linear'], ['zoom'], 0, 3.6, 3, 4.8, 6, 6.5], blur: 2.2, opacity: 0.38 },
        border: { width: ['interpolate', ['linear'], ['zoom'], 0, 0.95, 3, 1.2, 6, 1.55], blur: 0.1, opacity: 0.9 },
      };
    }
    const glowBlur = 0.9 / dpr;
    return {
      lime,
      coastGlow: { width: 6.4, blur: glowBlur, opacity: 0.82 },
      coast: { width: 3.2, blur: 0, opacity: 1 },
      borderGlow: { width: 4.8, blur: glowBlur, opacity: 0.72 },
      border: { width: 2.4, blur: 0, opacity: 1 },
    };
  }

  function widthLimits() {
    return narrowScreen() ? { min: 2.6, max: 10.5 } : { min: 1.6, max: 8 };
  }

  function formatNum(value) {
    return new Intl.NumberFormat(tag, { maximumFractionDigits: 0 }).format(value);
  }

  function formatAsOf(value) {
    const text = String(value || '');
    if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
      return new Intl.DateTimeFormat(tag, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(`${text}T00:00:00Z`));
    }
    if (/^\d{4}-\d{2}$/.test(text)) {
      return new Intl.DateTimeFormat(tag, {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(`${text}-01T00:00:00Z`));
    }
    return text;
  }

  function place(key) {
    return ui.places?.[key] || { name: key, from: key, to: key };
  }

  function groupLabel(key) {
    return ui.groups?.[key] || key;
  }

  function sourceLabel(id) {
    return ui.sourceNames?.[id] || id;
  }

  function crisisName(crisis) {
    return ui.crises?.[crisis.id] || crisis.name;
  }

  function causeLabel(type) {
    const fromData = pack?.cause_types?.[type]?.[locale];
    return fromData || type;
  }

  function visibleCrises() {
    return (pack?.crises || []).filter((crisis) => !hiddenCauses.has(crisis.cause_type));
  }

  function hashId() {
    const raw = (location.hash || '').replace('#', '');
    if (raw.startsWith('crisis-')) return raw.slice('crisis-'.length);
    return '';
  }

  function setStatus(text) {
    if (status) status.textContent = text;
  }

  function applyCauseLabels() {
    root.querySelectorAll('[data-cause-label]').forEach((node) => {
      const type = node.getAttribute('data-cause-label');
      if (type) node.textContent = causeLabel(type);
    });
  }

  function arrowCounts() {
    const counts = [];
    for (const crisis of visibleCrises()) {
      for (const flow of crisis.flows || []) {
        if (shownFlow(flow) && flow.draw_arrow) counts.push(flow.count);
      }
    }
    counts.sort((a, b) => a - b);
    return counts;
  }

  function widthFor(count) {
    const { min, max } = widthLimits();
    const span = Math.sqrt(arrowScale.max) - Math.sqrt(arrowScale.min);
    const t = span === 0 ? 1 : (Math.sqrt(count) - Math.sqrt(arrowScale.min)) / span;
    return min + Math.max(0, Math.min(1, t)) * (max - min);
  }

  function renderThickness() {
    const counts = arrowCounts();
    if (!counts.length) return;
    arrowScale = { min: counts[0], max: counts[counts.length - 1] };
    const mid = counts[Math.floor(counts.length / 2)];
    if (thickMin) thickMin.textContent = formatNum(counts[0]);
    if (thickMid) thickMid.textContent = formatNum(mid);
    if (thickMax) thickMax.textContent = formatNum(counts[counts.length - 1]);
    const samples = root.querySelectorAll('[data-sample]');
    const widths = [widthFor(counts[0]), widthFor(mid), widthFor(counts[counts.length - 1])];
    samples.forEach((node, index) => {
      node.style.height = `${Math.max(2, widths[index] || 2)}px`;
    });
  }

  function renderList() {
    list.replaceChildren();
    for (const crisis of pack.crises) {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'dg-feed-btn';
      button.id = `crisis-${crisis.id}`;
      button.dataset.id = crisis.id;
      button.setAttribute('aria-pressed', crisis.id === selected ? 'true' : 'false');
      if (crisis.id === selected) button.classList.add('is-active');
      if (hiddenCauses.has(crisis.cause_type)) button.hidden = true;

      const swatch = document.createElement('span');
      swatch.className = 'dg-swatch';
      swatch.style.setProperty('--dg', causeColor(crisis.cause_type));
      swatch.setAttribute('aria-hidden', 'true');

      const copy = document.createElement('span');
      copy.className = 'dg-feed-copy';
      const name = document.createElement('span');
      name.className = 'dg-feed-name';
      name.textContent = crisisName(crisis);
      const meta = document.createElement('span');
      meta.className = 'dg-feed-meta';
      meta.textContent = causeLabel(crisis.cause_type);
      copy.append(name, meta);
      button.append(swatch, copy);
      button.addEventListener('click', () => select(crisis.id, { fly: true }));
      button.addEventListener('mouseenter', () => setHover(crisis.id));
      button.addEventListener('mouseleave', () => setHover(''));
      button.addEventListener('focus', () => setHover(crisis.id));
      button.addEventListener('blur', () => setHover(''));
      item.append(button);
      list.append(item);
    }
  }

  function addText(parent, className, text) {
    const node = document.createElement('p');
    node.className = className;
    node.textContent = text;
    parent.append(node);
    return node;
  }

  function renderCard() {
    const crisis = pack.crises.find((item) => item.id === selected) || visibleCrises()[0];
    card.replaceChildren();
    if (!crisis) return;
    const title = document.createElement('h3');
    title.className = 'dg-card-title';
    title.textContent = crisisName(crisis);
    card.append(title);

    const cause = document.createElement('p');
    cause.className = 'dg-card-line';
    const causeKey = document.createElement('span');
    causeKey.className = 'dg-kicker';
    causeKey.textContent = ui.cause;
    const causeVal = document.createElement('span');
    causeVal.textContent = causeLabel(crisis.cause_type);
    const dot = document.createElement('span');
    dot.className = 'dg-swatch dg-swatch-inline';
    dot.style.setProperty('--dg', causeColor(crisis.cause_type));
    dot.setAttribute('aria-hidden', 'true');
    cause.append(dot, causeKey, causeVal);
    card.append(cause);

    const started = document.createElement('p');
    started.className = 'dg-card-line';
    const startedKey = document.createElement('span');
    startedKey.className = 'dg-kicker';
    startedKey.textContent = ui.started;
    const startedVal = document.createElement('span');
    if (crisis.start_date && crisis.start_date_verified) {
      startedVal.textContent = formatAsOf(crisis.start_date);
    } else {
      startedVal.textContent = ui.startUnverified;
    }
    started.append(startedKey, startedVal);
    card.append(started);

    addText(card, 'dg-caption', publicCaption(crisis, locale));

    const flows = (crisis.flows || []).filter(shownFlow);
    if (flows.length) {
      const heading = document.createElement('h4');
      heading.textContent = ui.flows;
      card.append(heading);
      const ul = document.createElement('ul');
      ul.className = 'dg-figures';
      for (const flow of flows) ul.append(flowItem(flow));
      card.append(ul);
    }

    const extras = (crisis.context_figures || [])
      .map((fig) => ({ fig, kind: contextKind(fig) }))
      .filter((row) => row.kind);
    if (extras.length) {
      const heading = document.createElement('h4');
      heading.textContent = ui.otherFigures;
      card.append(heading);
      const ul = document.createElement('ul');
      ul.className = 'dg-figures';
      for (const row of extras) ul.append(contextItem(row.fig, row.kind));
      card.append(ul);
    }
  }

  function flowItem(flow) {
    const li = document.createElement('li');
    addText(li, 'dg-fig-group', groupLabel(flow.group));
    const inside = ui.inside?.[flow.to];
    const originName = place(flow.from).name;
    let line;
    if (flow.draw_arrow) {
      line = fill(ui.fromTo, {
        count: formatNum(flow.count),
        from: place(flow.from).from,
        to: place(flow.to).to,
      });
    } else if (inside && originName && !inside.toLowerCase().includes(originName.toLowerCase())) {
      line = fill(ui.insideOrigin, {
        count: formatNum(flow.count),
        origin: originName,
        place: inside,
      });
    } else {
      line = fill(ui.insideCount, {
        count: formatNum(flow.count),
        place: inside || place(flow.to).name,
      });
    }
    addText(li, 'dg-fig-count', line);
    if (flow.draw_arrow) addText(li, 'dg-fig-note', ui.approximate);
    if (MOVEMENT_KINDS.has(flow.kind)) addText(li, 'dg-fig-note', ui.movementsNote);
    addText(li, 'dg-fig-note', fill(ui.asOf, { date: formatAsOf(flow.as_of) }));
    const source = document.createElement('p');
    source.className = 'dg-fig-note';
    const link = document.createElement('a');
    link.href = flow.request_url;
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    link.textContent = `${ui.source}: ${sourceLabel(flow.source_id)}`;
    source.append(link);
    li.append(source);
    appendBreakdown(li, flow.breakdown);
    for (const alt of flow.alternatives || []) {
      if (HIDDEN_SOURCES.has(alt.source_id)) continue;
      addText(
        li,
        'dg-fig-alt',
        fill(ui.anotherSource, {
          source: sourceLabel(alt.source_id),
          date: formatAsOf(alt.as_of),
          count: formatNum(alt.count),
        }),
      );
    }
    return li;
  }

  function appendBreakdown(li, breakdown) {
    if (!breakdown) return;
    const ul = document.createElement('ul');
    ul.className = 'dg-parts';
    const rows = [
      ['refugees', ui.partRefugees],
      ['asylum_seekers', ui.partAsylum],
      ['other_people_in_need_of_international_protection', ui.partOther],
      ['others_of_concern_excluded_from_count', ui.partSeparate],
    ];
    for (const [key, label] of rows) {
      if (breakdown[key] == null) continue;
      const part = document.createElement('li');
      part.textContent = `${label}: ${formatNum(breakdown[key])}`;
      ul.append(part);
    }
    if (ul.childElementCount) li.append(ul);
  }

  function contextItem(fig, kind) {
    const li = document.createElement('li');
    const year = String(fig.as_of || '').slice(0, 4);
    const labels = {
      movements: ui.contextMovements,
      returns: ui.contextReturns,
      worldwide: ui.contextWorldwide,
      droughtSum: ui.contextDroughtSum,
      rohingya: ui.contextRohingya,
    };
    const title = labels[kind] || '';
    addText(li, 'dg-fig-group', title.includes('{year}') ? fill(title, { year }) : title);
    addText(li, 'dg-fig-count', formatNum(fig.count));
    if (kind === 'movements' || kind === 'droughtSum') addText(li, 'dg-fig-note', ui.movementsNote);
    addText(li, 'dg-fig-note', fill(ui.asOf, { date: formatAsOf(fig.as_of) }));
    const source = document.createElement('p');
    source.className = 'dg-fig-note';
    const link = document.createElement('a');
    link.href = fig.request_url;
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    link.textContent = `${ui.source}: ${sourceLabel(fig.source_id)}`;
    source.append(link);
    li.append(source);
    return li;
  }

  function select(id, options = {}) {
    if (!pack?.crises.some((crisis) => crisis.id === id)) return;
    selected = id;
    root.dataset.selected = id;
    const url = new URL(location.href);
    url.hash = `crisis-${id}`;
    history.replaceState(null, '', url);
    const restoreFocus =
      options.focus ||
      (document.activeElement instanceof HTMLElement && document.activeElement.dataset.id === id);
    renderList();
    renderCard();
    const button = list.querySelector(`[data-id="${id}"]`);
    if (restoreFocus && button instanceof HTMLElement) button.focus({ preventScroll: true });
    revealInList(button);
    drawFlows();
    if (options.fly) flyTo(id);
    positionLabels();
  }

  function revealInList(button) {
    if (!(button instanceof HTMLElement)) return;
    const listRect = list.getBoundingClientRect();
    const rect = button.getBoundingClientRect();
    if (rect.top < listRect.top) list.scrollTop -= listRect.top - rect.top;
    if (rect.bottom > listRect.bottom) list.scrollTop += rect.bottom - listRect.bottom;
    if (rect.left < listRect.left) list.scrollLeft -= listRect.left - rect.left;
    if (rect.right > listRect.right) list.scrollLeft += rect.right - listRect.right;
  }

  function setHover(id) {
    if (hovered === id) return;
    hovered = id;
    paintHoverState();
  }

  function paintHoverState() {
    if (!map?.getSource('dg-arrows')) return;
    for (const row of hoverArrows) {
      try {
        map.setFeatureState({ source: 'dg-arrows', id: row.id }, { hover: row.crisisId === hovered });
      } catch {
        /* feature state waits until the source is ready */
      }
    }
    if (!map.getSource('dg-causes')) return;
    for (const row of hoverCauses) {
      try {
        map.setFeatureState({ source: 'dg-causes', id: row.id }, { hover: row.crisisId === hovered });
      } catch {
        /* feature state waits until the source is ready */
      }
    }
  }

  function flyTo(id) {
    if (!map || !styleReady) return;
    const crisis = pack.crises.find((item) => item.id === id);
    if (!crisis) return;
    const points = [[crisis.cause_point.lon, crisis.cause_point.lat]];
    for (const flow of (crisis.flows || []).filter(shownFlow)) {
      points.push([flow.to_point.lon, flow.to_point.lat]);
      if (flow.from_point) points.push([flow.from_point.lon, flow.from_point.lat]);
    }
    let minLon = 180;
    let maxLon = -180;
    let minLat = 90;
    let maxLat = -90;
    for (const [lon, lat] of points) {
      minLon = Math.min(minLon, lon);
      maxLon = Math.max(maxLon, lon);
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
    }
    const pad = 4;
    map.fitBounds(
      [
        [minLon - pad, minLat - pad],
        [maxLon + pad, maxLat + pad],
      ],
      {
        padding: narrowScreen() ? 28 : 56,
        maxZoom: narrowScreen() ? 2.6 : 3.15,
        duration: reduced ? 0 : 900,
      },
    );
  }

  function buildCollections() {
    const lines = [];
    const heads = [];
    const rings = [];
    const causes = [];
    labelItems = [];
    const ringBuckets = new Map();
    hoverArrows = [];
    hoverCauses = [];
    let arrowIndex = 0;

    for (const crisis of visibleCrises()) {
      const color = causeColor(crisis.cause_type);
      const active = crisis.id === selected ? 1 : 0;
      hoverCauses.push({ id: `cause-${crisis.id}`, crisisId: crisis.id });
      causes.push({
        type: 'Feature',
        id: `cause-${crisis.id}`,
        properties: { crisisId: crisis.id, color, active },
        geometry: {
          type: 'Point',
          coordinates: [crisis.cause_point.lon, crisis.cause_point.lat],
        },
      });

      const flows = (crisis.flows || []).filter(shownFlow);
      flows.forEach((flow, flowIndex) => {
        if (flow.draw_arrow) {
          const from = [crisis.cause_point.lon, crisis.cause_point.lat];
          const to = [flow.to_point.lon, flow.to_point.lat];
          const dist = haversineKm(from[0], from[1], to[0], to[1]);
          if (dist < 30) return;
          const bend = (arrowIndex % 2 === 0 ? 1 : -1) * (0.07 + (arrowIndex % 3) * 0.03);
          const arc = curvedArc(from, to, bend);
          const headKm = Math.min(420, Math.max(50, dist * 0.16));
          const endT = Math.max(0.72, 1 - headKm / dist);
          const keep = Math.max(2, Math.round(arc.coords.length * endT));
          const lineCoords = arc.coords.slice(0, keep);
          const parts = splitAntimeridian(lineCoords);
          const width = widthFor(flow.count);
          const fid = `arrow-${crisis.id}-${flowIndex}`;
          hoverArrows.push({ id: fid, crisisId: crisis.id });
          lines.push({
            type: 'Feature',
            id: fid,
            properties: { crisisId: crisis.id, active, w: width, color },
            geometry:
              parts.length === 1
                ? { type: 'LineString', coordinates: parts[0] }
                : { type: 'MultiLineString', coordinates: parts },
          });
          const tip = arc.coords[arc.coords.length - 1];
          const prev = arc.coords[Math.max(0, arc.coords.length - 4)];
          heads.push({
            type: 'Feature',
            id: `head-${crisis.id}-${flowIndex}`,
            properties: {
              crisisId: crisis.id,
              active,
              bearing: bearingDeg(prev[0], prev[1], tip[0], tip[1]),
              color,
              size: Math.max(0.42, Math.min(1.15, width / 7)),
            },
            geometry: { type: 'Point', coordinates: tip },
          });
          if (active) {
            const mid = lineCoords[Math.min(lineCoords.length - 1, Math.round(lineCoords.length * (0.46 + (flowIndex % 3) * 0.08)))];
            labelItems.push({
              crisisId: crisis.id,
              coord: mid,
              text: fill(ui.fromTo, {
                count: formatNum(flow.count),
                from: place(flow.from).from,
                to: place(flow.to).to,
              }),
              note: ui.approximate,
              date: fill(ui.asOf, { date: formatAsOf(flow.as_of) }),
            });
          }
          arrowIndex += 1;
          return;
        }

        const key = `${flow.to_point.lat.toFixed(2)},${flow.to_point.lon.toFixed(2)}`;
        const slot = ringBuckets.get(key) || 0;
        ringBuckets.set(key, slot + 1);
        const shifted =
          slot === 0
            ? [flow.to_point.lon, flow.to_point.lat]
            : destination(flow.to_point.lon, flow.to_point.lat, slot * 48, 80 + slot * 36);
        rings.push({
          type: 'Feature',
          id: `ring-${crisis.id}-${flowIndex}`,
          properties: {
            crisisId: crisis.id,
            active,
            color,
            movement: MOVEMENT_KINDS.has(flow.kind) ? 1 : 0,
          },
          geometry: {
            type: 'Point',
            coordinates: shifted,
          },
        });
      });
    }

    return {
      lines: { type: 'FeatureCollection', features: lines },
      heads: { type: 'FeatureCollection', features: heads },
      rings: { type: 'FeatureCollection', features: rings },
      causes: { type: 'FeatureCollection', features: causes },
    };
  }

  function ensureArrowImage() {
    if (map.hasImage('dg-arrow')) return;
    map.addImage('dg-arrow', arrowImage(), { sdf: true });
  }

  function drawFlows() {
    if (!map || !styleReady || !dataReady) return;
    renderThickness();
    const data = buildCollections();
    ensureArrowImage();
    upsert('dg-arrows', data.lines, addArrowLayer);
    upsert('dg-heads', data.heads, addHeadLayer);
    upsert('dg-rings', data.rings, addRingLayer);
    upsert('dg-causes', data.causes, addCauseLayer);
    paintHoverState();
    positionLabels();
  }

  function upsert(id, data, add) {
    const source = map.getSource(id);
    if (source) {
      source.setData(data);
      return;
    }
    map.addSource(id, { type: 'geojson', data });
    add();
  }

  function addArrowLayer() {
    map.addLayer({
      id: 'dg-arrows',
      type: 'line',
      source: 'dg-arrows',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': ['get', 'color'],
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          ['*', ['get', 'w'], 0.85],
          3,
          ['*', ['get', 'w'], ['case', ['==', ['get', 'active'], 1], 1.35, 1]],
        ],
        'line-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          ['==', ['get', 'active'], 1],
          0.95,
          0.28,
        ],
      },
    });
  }

  function addHeadLayer() {
    map.addLayer({
      id: 'dg-heads',
      type: 'symbol',
      source: 'dg-heads',
      layout: {
        'icon-image': 'dg-arrow',
        'icon-size': ['get', 'size'],
        'icon-rotate': ['get', 'bearing'],
        'icon-rotation-alignment': 'map',
        'icon-pitch-alignment': 'map',
        'icon-anchor': 'top',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true,
      },
      paint: {
        'icon-color': ['get', 'color'],
        'icon-opacity': ['case', ['==', ['get', 'active'], 1], 0.98, 0.35],
      },
    });
  }

  function addRingLayer() {
    map.addLayer({
      id: 'dg-rings',
      type: 'circle',
      source: 'dg-rings',
      paint: {
        'circle-radius': ['case', ['==', ['get', 'movement'], 1], 8, 11],
        'circle-color': 'rgba(0,0,0,0)',
        'circle-stroke-color': ['get', 'color'],
        'circle-stroke-width': ['case', ['==', ['get', 'active'], 1], 2.6, 1.6],
        'circle-stroke-opacity': ['case', ['==', ['get', 'active'], 1], 0.95, 0.45],
      },
    });
    map.addLayer({
      id: 'dg-ring-dot',
      type: 'circle',
      source: 'dg-rings',
      filter: ['==', ['get', 'movement'], 1],
      paint: {
        'circle-radius': 2.5,
        'circle-color': ['get', 'color'],
        'circle-opacity': ['case', ['==', ['get', 'active'], 1], 0.95, 0.45],
      },
    });
  }

  function addCauseLayer() {
    map.addLayer({
      id: 'dg-cause-halo',
      type: 'circle',
      source: 'dg-causes',
      paint: {
        'circle-radius': ['case', ['==', ['get', 'active'], 1], 16, 11],
        'circle-color': ['get', 'color'],
        'circle-opacity': ['case', ['==', ['get', 'active'], 1], 0.28, 0.12],
        'circle-blur': 0.4,
      },
    });
    map.addLayer({
      id: 'dg-causes',
      type: 'circle',
      source: 'dg-causes',
      paint: {
        'circle-radius': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          9,
          ['==', ['get', 'active'], 1],
          8,
          6.5,
        ],
        'circle-color': ['get', 'color'],
        'circle-stroke-color': '#140806',
        'circle-stroke-width': 1.4,
        'circle-opacity': 0.98,
      },
    });
  }

  function positionLabels() {
    if (!labels) return;
    labels.replaceChildren();
    if (!map || !styleReady) return;
    for (const item of labelItems) {
      if (!pointVisible(item.coord)) continue;
      const pos = map.project(item.coord);
      const node = document.createElement('div');
      node.className = 'dg-label';
      node.style.left = `${pos.x}px`;
      node.style.top = `${pos.y}px`;
      const strong = document.createElement('p');
      strong.textContent = item.text;
      const note = document.createElement('p');
      note.textContent = item.note;
      const date = document.createElement('p');
      date.textContent = item.date;
      node.append(strong, note, date);
      labels.append(node);
    }
  }

  function pointVisible(coord) {
    const pos = map.project(coord);
    const canvas = map.getCanvas();
    if (pos.x < 8 || pos.y < 8 || pos.x > canvas.clientWidth - 8 || pos.y > canvas.clientHeight - 8) {
      return false;
    }
    const back = map.unproject(pos);
    const dLon = Math.abs(back.lng - coord[0]);
    const dLat = Math.abs(back.lat - coord[1]);
    return Math.min(dLon, 360 - dLon) < 12 && dLat < 12;
  }

  function setPaint(id, prop, value) {
    if (!map.getLayer(id)) return;
    try {
      map.setPaintProperty(id, prop, value);
    } catch {
      /* layer does not use this paint property */
    }
  }

  function paintEarth() {
    const land = '#24301c';
    const ocean = '#050608';
    setPaint('background', 'background-color', land);
    setPaint('water', 'fill-color', ocean);
    setPaint('waterway', 'line-color', ocean);
    for (const id of ['landcover_ice_shelf', 'landcover_glacier', 'landuse_residential', 'landuse_park']) {
      setPaint(id, 'fill-color', land);
    }
    for (const id of ['boundary_country_z0-4', 'boundary_country_z5-', 'boundary_state']) {
      if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', 'none');
    }
  }

  function addGlobeLines() {
    const token = ++linesToken;
    fetch('/data/globe-lines.json')
      .then(okJson)
      .then((data) => {
        if (token !== linesToken || !map.getStyle() || map.getSource('globe-lines')) return;
        map.addSource('globe-lines', { type: 'geojson', data, attribution: 'Natural Earth' });
        const strokes = outlineStyle();
        const addLine = (id, kind, stroke) => {
const before = map.getLayer('dg-arrows') ? 'dg-arrows' : undefined;
        map.addLayer(
          {
            id,
            type: 'line',
            source: 'globe-lines',
            filter: ['==', ['get', 'kind'], kind],
            layout: { 'line-cap': 'round', 'line-join': 'round' },
            paint: {
              'line-color': strokes.lime,
              'line-width': stroke.width,
              'line-blur': stroke.blur,
              'line-opacity': stroke.opacity,
            },
          },
          before,
        );
        };
        addLine('coast-glow', 'coast', strokes.coastGlow);
        addLine('coast-line', 'coast', strokes.coast);
        addLine('border-glow', 'border', strokes.borderGlow);
        addLine('border-line', 'border', strokes.border);
        root.dataset.outlines = 'true';
        drawFlows();
      })
      .catch(() => {
        /* coast lines stay on the vector style when this file is missing */
      });
  }

  function refreshOutlines() {
    if (!map?.getLayer('coast-line')) return;
    const strokes = outlineStyle();
    const apply = (id, stroke) => {
      setPaint(id, 'line-color', strokes.lime);
      setPaint(id, 'line-width', stroke.width);
      setPaint(id, 'line-blur', stroke.blur);
      setPaint(id, 'line-opacity', stroke.opacity);
    };
    apply('coast-glow', strokes.coastGlow);
    apply('coast-line', strokes.coast);
    apply('border-glow', strokes.borderGlow);
    apply('border-line', strokes.border);
  }

  function onStyle() {
    styleReady = true;
    linesToken += 1;
    try {
      map.setProjection({ type: 'globe' });
    } catch {
      /* projection stays on the constructor value */
    }
    const style = map.getStyle();
    for (const layer of style?.layers || []) {
      if (layer.type === 'symbol') map.setLayoutProperty(layer.id, 'visibility', 'none');
    }
    paintEarth();
    try {
      map.setSky({
        'sky-color': '#000000',
        'horizon-color': '#1a2610',
        'fog-color': '#050608',
        'sky-horizon-blend': 0.42,
        'horizon-fog-blend': 0.5,
        'fog-ground-blend': 0.38,
        'atmosphere-blend': 0.62,
      });
    } catch {
      /* sky is optional */
    }
    addGlobeLines();
    map.getCanvas().setAttribute('aria-label', ui.mapLabel);
    drawFlows();
    if (selected) flyTo(selected);
    map.resize();
  }

  function wirePointer() {
    const layers = () =>
      ['dg-causes', 'dg-cause-halo', 'dg-arrows', 'dg-heads', 'dg-rings', 'dg-ring-dot'].filter((id) =>
        map.getLayer(id),
      );
    map.on('click', (event) => {
      const hits = map.queryRenderedFeatures(event.point, { layers: layers() });
      const id = hits[0]?.properties?.crisisId;
      if (id) select(id, { fly: true });
    });
    map.on('mousemove', (event) => {
      const hits = map.queryRenderedFeatures(event.point, { layers: layers() });
      const id = hits[0]?.properties?.crisisId || '';
      map.getCanvas().style.cursor = id ? 'pointer' : '';
      if (id !== hovered) setHover(id);
    });
    map.on('mouseleave', () => {
      map.getCanvas().style.cursor = '';
      setHover('');
    });
    map.on('move', positionLabels);
  }

  list.addEventListener('keydown', (event) => {
    const buttons = [...list.querySelectorAll('button')].filter((button) => !button.hidden);
    const index = buttons.indexOf(document.activeElement);
    if (index < 0) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      buttons[(index + 1) % buttons.length]?.focus();
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      buttons[(index - 1 + buttons.length) % buttons.length]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      buttons[0]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      buttons[buttons.length - 1]?.focus();
    }
  });

  root.querySelectorAll('input[data-cause]').forEach((input) => {
    input.addEventListener('change', () => {
      const type = input.dataset.cause;
      if (input.checked) hiddenCauses.delete(type);
      else hiddenCauses.add(type);
      if (hiddenCauses.has(pack?.crises.find((crisis) => crisis.id === selected)?.cause_type)) {
        const next = visibleCrises()[0];
        if (next) select(next.id, { fly: true });
        else {
          renderList();
          drawFlows();
        }
        return;
      }
      renderList();
      renderThickness();
      drawFlows();
    });
  });

  const layersToggle = root.querySelector('[data-layers-toggle]');
  layersToggle?.addEventListener('click', () => {
    const open = root.classList.toggle('is-layers-open');
    layersToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    layersToggle.textContent = open ? ui.hideLegend : ui.showLegend;
    map?.resize();
  });

  window.addEventListener('resize', () => {
    refreshOutlines();
    drawFlows();
    map?.resize();
  });

  try {
    map = new maplibregl.Map({
      container: mapHost,
      style: OPENFREEMAP_STYLE,
      ...globeCamera(),
      projection: { type: 'globe' },
      attributionControl: false,
      fadeDuration: 0,
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');
    map.on('style.load', onStyle);
    map.on('idle', () => {
      if (styleReady && dataReady) root.dataset.tiles = 'true';
    });
    wirePointer();
    const fallbackTimer = window.setTimeout(() => {
      if (!styleReady && !fallbackUsed) {
        fallbackUsed = true;
        map.setStyle(FALLBACK_STYLE);
      }
    }, 8000);
    map.on('style.load', () => window.clearTimeout(fallbackTimer));
  } catch {
    if (mapFailed) mapFailed.hidden = false;
  }

  fetch('/data/migration-crises.json')
    .then(okJson)
    .then((json) => {
      pack = json;
      dataReady = true;
      applyCauseLabels();
      const requested = hashId();
      const initial = pack.crises.some((crisis) => crisis.id === requested) ? requested : 'sudan';
      select(initial, { fly: true });
      setStatus('');
      root.dataset.ready = 'true';
    })
    .catch(() => {
      setStatus(ui.dataFailed);
      if (mapFailed) mapFailed.hidden = false;
    });
}

const root = document.querySelector('[data-displacement-globe]');
if (root && root.dataset.booted !== 'true') {
  root.dataset.booted = 'true';
  mountDisplacementGlobe(root);
}
