/**
 * Pure window, sparkline and change math for Economy boards.
 * No file access: the page, the period script and the tests all import this module.
 */

export const PERIODS = ['month', 'year', '5y', 'all'];
export const CHART_W = 800;
export const CHART_H = 240;
export const SPARK_W = 120;
export const SPARK_H = 32;

const TAGS = { en: 'en-GB', ru: 'ru-RU', pl: 'pl-PL', lv: 'lv-LV' };

export function lastIndex(values) {
  for (let i = values.length - 1; i >= 0; i -= 1) if (values[i] != null) return i;
  return -1;
}

export function firstIndex(values) {
  for (let i = 0; i < values.length; i += 1) if (values[i] != null) return i;
  return -1;
}

export function storedDecimals(value) {
  const text = String(value);
  const dot = text.indexOf('.');
  return dot < 0 ? 0 : text.length - dot - 1;
}

export function formatExact(value, decimals, locale) {
  return new Intl.NumberFormat(TAGS[locale] || TAGS.en, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: false,
  }).format(value);
}

export function formatSigned(value, decimals, locale) {
  const text = formatExact(Math.abs(value), decimals, locale);
  if (value > 0) return `+${text}`;
  if (value < 0) return `-${text}`;
  return text;
}

/** Absolute and percent change from the first point of the comparison window to the last. */
export function changeOf(points) {
  if (!points || points.length < 2) return { abs: 0, pct: 0 };
  const first = points[0];
  const last = points[points.length - 1];
  const abs = last - first;
  const pct = first === 0 ? 0 : (abs / Math.abs(first)) * 100;
  return { abs, pct };
}

export function direction(abs) {
  if (abs > 0) return 'up';
  if (abs < 0) return 'down';
  return 'flat';
}

export function formatChange(abs, pct, decimals, locale) {
  const body = formatSigned(abs, decimals, locale);
  return `${body} (${formatSigned(pct, 1, locale)}%)`;
}

/**
 * Indices to keep, at most `max`, always including the first index, the last index,
 * and the min and max of every series. Extra slots are spread evenly.
 */
export function downsampleIndices(length, valuesList, max = 120) {
  if (length <= 0) return [];
  if (length <= max) return Array.from({ length }, (_, i) => i);
  const must = new Set([0, length - 1]);
  for (const values of valuesList) {
    let minI = -1;
    let maxI = -1;
    for (let i = 0; i < length; i += 1) {
      const v = values[i];
      if (v == null) continue;
      if (minI < 0 || v < values[minI]) minI = i;
      if (maxI < 0 || v > values[maxI]) maxI = i;
    }
    if (minI >= 0) must.add(minI);
    if (maxI >= 0) must.add(maxI);
  }
  const keep = new Set(must);
  const room = max - keep.size;
  if (room > 0) {
    const stride = (length - 1) / (max - 1);
    const extra = [];
    const seen = new Set(keep);
    for (let k = 0; k < max; k += 1) {
      const i = Math.round(k * stride);
      if (!seen.has(i)) {
        seen.add(i);
        extra.push(i);
      }
    }
    if (extra.length <= room) extra.forEach((i) => keep.add(i));
    else {
      const step = (extra.length - 1) / Math.max(1, room - 1);
      for (let k = 0; k < room; k += 1) keep.add(extra[Math.round(k * step)]);
    }
  }
  return [...keep].sort((a, b) => a - b);
}

function gapBetween(values, from, to) {
  for (let k = from + 1; k < to; k += 1) if (values[k] == null) return true;
  return false;
}

/**
 * Downsample aligned series. `breaks[s][i]` is true when series s must not connect
 * to the previous kept point (a null sat between them, or this point itself is null).
 */
export function downsampleAligned(times, seriesValues, max = 120) {
  const idx = downsampleIndices(times.length, seriesValues, max);
  const outTimes = idx.map((i) => times[i]);
  const values = seriesValues.map((series) => idx.map((i) => series[i]));
  const breaks = seriesValues.map((series) =>
    idx.map((i, position) => {
      if (series[i] == null) return true;
      if (position === 0) return false;
      return gapBetween(series, idx[position - 1], i);
    }),
  );
  return { times: outTimes, values, breaks };
}

/** How many slots a period covers, counting back from the latest point. `all` uses the whole series. */
export function periodSpan(period) {
  if (period === '5y') return 60;
  if (period === 'month' || period === 'year') return 12;
  return null;
}

/** Working-day spans. Month is 23 points, Year is 260. */
export function dailySpan(period) {
  if (period === 'month') return 22;
  if (period === 'year') return 259;
  return null;
}

/**
 * Slice one series for a period.
 * Monthly: Month compares the latest point with the one before it, and the sparkline still shows 13 points.
 * Year shows 13 points, 5 years shows 61, All starts at the first non-null value.
 * Daily: Month is the last 23 working days and Year the last 260. The change uses the whole window.
 */
export function seriesWindow(times, values, period, mode = 'monthly') {
  const last = lastIndex(values);
  const first = firstIndex(values);
  if (last < 0 || first < 0) throw new Error('series is empty');
  const span = mode === 'daily' ? dailySpan(period) : periodSpan(period);
  const from = span == null ? first : Math.max(first, last - span);
  let compareFrom = from;
  const highlight = mode === 'monthly' && period === 'month';
  if (highlight) {
    compareFrom = last;
    for (let i = last - 1; i >= first; i -= 1) {
      if (values[i] != null) {
        compareFrom = i;
        break;
      }
    }
  }
  const sliceTimes = [];
  const sliceValues = [];
  for (let i = from; i <= last; i += 1) {
    sliceTimes.push(times[i]);
    sliceValues.push(values[i]);
  }
  const compare = [values[compareFrom], values[last]];
  return {
    times: sliceTimes,
    values: sliceValues,
    compare,
    since: times[compareFrom],
    latest: values[last],
    latestAt: times[last],
    highlight,
  };
}

export function windowsFor(times, values, max = 120, mode = 'monthly') {
  const out = {};
  for (const period of PERIODS) {
    const window = seriesWindow(times, values, period, mode);
    const sampled = downsampleAligned(window.times, [window.values], max);
    out[period] = {
      times: sampled.times,
      values: sampled.values[0],
      breaks: sampled.breaks[0],
      compare: window.compare,
      since: window.since,
      latest: window.latest,
      latestAt: window.latestAt,
      highlight: window.highlight,
    };
  }
  return out;
}

/** Several series on one chart, sharing the same kept indices. */
export function chartWindows(times, seriesValues, max = 120) {
  const out = {};
  for (const period of PERIODS) {
    const span = periodSpan(period);
    const bounds = seriesValues.map((values) => ({ first: firstIndex(values), last: lastIndex(values) }));
    const last = Math.max(...bounds.map((item) => item.last));
    const first = Math.min(...bounds.map((item) => (item.first < 0 ? Infinity : item.first)));
    const from = span == null ? first : Math.max(0, last - span);
    const sliceTimes = times.slice(from, last + 1);
    const sliceValues = seriesValues.map((values) => values.slice(from, last + 1));
    const sampled = downsampleAligned(sliceTimes, sliceValues, max);
    out[period] = sampled;
  }
  return out;
}

function scaledPoint(i, v, length, min, span, w, h) {
  const step = length <= 1 ? 0 : w / (length - 1);
  const x = (i * step).toFixed(1);
  const y = (h - ((v - min) / span) * (h - 2) - 1).toFixed(1);
  return `${x} ${y}`;
}

/** Min-max sparkline. A null, or a true break flag, lifts the pen. */
export function sparkPath(values, breaks, w = 120, h = 32) {
  const nums = values.filter((v) => v != null);
  if (nums.length === 0) return '';
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const span = max - min || 1;
  let d = '';
  let pen = false;
  values.forEach((v, i) => {
    if (v == null) {
      pen = false;
      return;
    }
    const cmd = !pen || breaks?.[i] ? 'M' : 'L';
    d += `${cmd}${scaledPoint(i, v, values.length, min, span, w, h)}`;
    pen = true;
  });
  return d;
}

/** The last segment, on the same scale as the full sparkline. */
export function sparkTail(values, w = 120, h = 32) {
  let prev = -1;
  let last = -1;
  values.forEach((v, i) => {
    if (v != null) {
      prev = last;
      last = i;
    }
  });
  if (prev < 0 || last < 0) return '';
  const nums = values.filter((v) => v != null);
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const span = max - min || 1;
  return `M${scaledPoint(prev, values[prev], values.length, min, span, w, h)}L${scaledPoint(last, values[last], values.length, min, span, w, h)}`;
}

/** Zero-based chart path. `top` is the highest value in the window. */
export function chartPath(values, breaks, w, h, top) {
  const scale = top || 1;
  const step = values.length <= 1 ? 0 : w / (values.length - 1);
  let d = '';
  let pen = false;
  values.forEach((v, i) => {
    if (v == null) {
      pen = false;
      return;
    }
    const x = (i * step).toFixed(1);
    const y = (h - (v / scale) * h).toFixed(1);
    const cmd = !pen || breaks?.[i] ? 'M' : 'L';
    d += `${cmd}${x} ${y}`;
    pen = true;
  });
  return d;
}
