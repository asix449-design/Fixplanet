/**
 * Shared helpers for the economy data pipeline: HTTP with retries, checksums,
 * date helpers, validators and the small schema checker.
 * No dependencies. Used by scripts/fetch-economy.mjs, scripts/check-economy.mjs
 * and the tests in scripts/economy/economy.test.mjs.
 */
import { createHash } from 'node:crypto';

/** Tests set retryDelayMs to 1 so a failing download does not wait. */
export const HTTP_DEFAULTS = { retryDelayMs: 2_000 };

export const USER_AGENT = 'FixPlanetEconomy/1.0 (https://fixplanet.org; public economy data refresh)';

/** A problem with the data or the source. The caller keeps the previous good file. */
export class DataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DataError';
  }
}

export function fail(message) {
  throw new DataError(message);
}

export function sha256(bufferOrString) {
  return createHash('sha256').update(bufferOrString).digest('hex');
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * GET a URL and return the bytes. Retries network errors, 429 and 5xx up to
 * `attempts` times. Any other status stops at once. The body is limited to maxBytes.
 */
export async function httpGet(url, options = {}) {
  const {
    fetchImpl = fetch,
    accept = '*/*',
    maxBytes = 20_000_000,
    timeoutMs = 60_000,
    attempts = 3,
    retryDelayMs = HTTP_DEFAULTS.retryDelayMs,
    allowUrl = null,
  } = options;
  if (allowUrl && !allowUrl(url)) fail(`Address not allowed: ${url}`);
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetchImpl(url, {
        headers: { Accept: accept, 'User-Agent': USER_AGENT },
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (response.status === 429 || response.status >= 500) {
        lastError = new DataError(`HTTP ${response.status} for ${url}`);
      } else if (!response.ok) {
        fail(`HTTP ${response.status} for ${url}`);
      } else if (allowUrl && response.url && !allowUrl(response.url)) {
        fail(`Redirected to an address that is not allowed: ${response.url}`);
      } else {
        const declared = Number(response.headers.get('content-length') || 0);
        if (declared > maxBytes) fail(`Response too large (${declared} bytes) for ${url}`);
        const buffer = Buffer.from(await response.arrayBuffer());
        if (buffer.length > maxBytes) fail(`Response too large (${buffer.length} bytes) for ${url}`);
        if (buffer.length === 0) fail(`Empty response for ${url}`);
        return { buffer, status: response.status, lastModified: response.headers.get('last-modified') || null };
      }
    } catch (error) {
      if (error instanceof DataError) throw error;
      lastError = error;
    }
    if (attempt < attempts) await sleep(retryDelayMs * attempt);
  }
  throw new DataError(`Download failed after ${attempts} tries: ${lastError?.message || 'unknown error'}`);
}

/* ---------- dates ---------- */

export function isIsoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function isIsoMonth(value) {
  return typeof value === 'string' && /^\d{4}-(0[1-9]|1[0-2])$/.test(value);
}

export function isIsoTimestamp(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(value) && !Number.isNaN(Date.parse(value));
}

export function daysBetween(fromIso, toIso) {
  return Math.round((Date.parse(`${toIso}T00:00:00Z`) - Date.parse(`${fromIso}T00:00:00Z`)) / 86_400_000);
}

export function monthIndex(month) {
  return Number(month.slice(0, 4)) * 12 + Number(month.slice(5, 7)) - 1;
}

export function monthAt(index) {
  const year = Math.floor(index / 12);
  return `${year}-${String((index % 12) + 1).padStart(2, '0')}`;
}

/** First day of the month after `month`. Used for the freshness of monthly data. */
export function monthEndDate(month) {
  const index = monthIndex(month) + 1;
  return `${monthAt(index)}-01`;
}

export function todayIso(now) {
  return now.toISOString().slice(0, 10);
}

/* ---------- value checks ---------- */

export function assertFinite(value, label) {
  if (typeof value !== 'number' || !Number.isFinite(value)) fail(`${label}: not a finite number (${String(value)})`);
}

export function assertRange(value, min, max, label) {
  assertFinite(value, label);
  if (value < min || value > max) fail(`${label}: ${value} is outside the sane range ${min} to ${max}`);
}

/** Largest allowed step between two neighbours, as a ratio (newer divided by older). */
export function assertStep(older, newer, minRatio, maxRatio, label) {
  if (older == null || newer == null) return;
  const ratio = newer / older;
  if (ratio < minRatio || ratio > maxRatio) {
    fail(`${label}: jump from ${older} to ${newer} (ratio ${ratio.toFixed(3)}) is outside ${minRatio} to ${maxRatio}`);
  }
}

/* ---------- JSON text ---------- */

/**
 * Two space indent; arrays of plain values stay on one line so a file of
 * 800 months is 5 lines per series, not 800.
 */
export function toJson(value, depth = 0) {
  const pad = '  '.repeat(depth);
  const padIn = '  '.repeat(depth + 1);
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    if (value.every((item) => item === null || typeof item !== 'object')) {
      return `[${value.map((item) => JSON.stringify(item)).join(', ')}]`;
    }
    return `[\n${value.map((item) => padIn + toJson(item, depth + 1)).join(',\n')}\n${pad}]`;
  }
  if (value && typeof value === 'object') {
    const keys = Object.keys(value).filter((key) => value[key] !== undefined);
    if (keys.length === 0) return '{}';
    return `{\n${keys.map((key) => `${padIn}${JSON.stringify(key)}: ${toJson(value[key], depth + 1)}`).join(',\n')}\n${pad}}`;
  }
  return JSON.stringify(value);
}

export function jsonFile(value) {
  return `${toJson(value)}\n`;
}

/* ---------- a small JSON Schema subset ---------- */

/**
 * Supports type (string, number, integer, boolean, null, array, object, or a list),
 * required, properties, additionalProperties false, enum, const, pattern, minItems,
 * items, minimum, maximum. Returns a list of problems (empty when valid).
 */
export function validateSchema(value, schema, path = '$') {
  const problems = [];
  const types = schema.type ? [].concat(schema.type) : null;
  const kindOf = (item) => {
    if (item === null) return 'null';
    if (Array.isArray(item)) return 'array';
    if (typeof item === 'number') return Number.isInteger(item) ? 'integer' : 'number';
    return typeof item;
  };
  const kind = kindOf(value);
  if (types && !types.some((type) => type === kind || (type === 'number' && kind === 'integer'))) {
    problems.push(`${path}: expected ${types.join(' or ')}, got ${kind}`);
    return problems;
  }
  if (schema.const !== undefined && value !== schema.const) problems.push(`${path}: expected ${JSON.stringify(schema.const)}`);
  if (schema.enum && !schema.enum.includes(value)) problems.push(`${path}: ${JSON.stringify(value)} is not one of ${schema.enum.join(', ')}`);
  if (typeof value === 'string' && schema.pattern && !new RegExp(schema.pattern).test(value)) {
    problems.push(`${path}: ${JSON.stringify(value)} does not match ${schema.pattern}`);
  }
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) problems.push(`${path}: not finite`);
    if (schema.minimum !== undefined && value < schema.minimum) problems.push(`${path}: ${value} is below ${schema.minimum}`);
    if (schema.maximum !== undefined && value > schema.maximum) problems.push(`${path}: ${value} is above ${schema.maximum}`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined && value.length < schema.minItems) problems.push(`${path}: fewer than ${schema.minItems} items`);
    if (schema.items) value.forEach((item, index) => problems.push(...validateSchema(item, schema.items, `${path}[${index}]`)));
  }
  if (kind === 'object') {
    for (const key of schema.required || []) if (!(key in value)) problems.push(`${path}: missing ${key}`);
    for (const [key, sub] of Object.entries(schema.properties || {})) {
      if (key in value) problems.push(...validateSchema(value[key], sub, `${path}.${key}`));
    }
    if (schema.additionalProperties === false) {
      for (const key of Object.keys(value)) if (!(key in (schema.properties || {}))) problems.push(`${path}: unexpected ${key}`);
    }
  }
  return problems;
}

const DATE = '^\\d{4}-\\d{2}-\\d{2}$';
const MONTH = '^\\d{4}-(0[1-9]|1[0-2])$';
const STAMP = '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$';
const HEX = '^[0-9a-f]{64}$';
const numberOrNull = { type: ['number', 'null'] };

export const SCHEMAS = {
  monthly: {
    type: 'object',
    additionalProperties: false,
    required: ['schema', 'id', 'kind', 'retrievedAt', 'publisherDate', 'dataAsOf', 'start', 'months', 'series'],
    properties: {
      schema: { const: 'fixplanet.economy.dataset/1' },
      id: { type: 'string', pattern: '^[a-z_]+$' },
      kind: { const: 'monthly-series' },
      retrievedAt: { type: 'string', pattern: STAMP },
      publisherDate: { type: 'string', pattern: DATE },
      dataAsOf: { type: 'string', pattern: MONTH },
      start: { type: 'string', pattern: MONTH },
      months: { type: 'integer', minimum: 12 },
      series: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'object',
          additionalProperties: false,
          required: ['id', 'name', 'unit', 'first', 'last', 'values'],
          properties: {
            id: { type: 'string', pattern: '^[a-z_]+$' },
            name: { type: 'string' },
            unit: { type: 'string' },
            note: { type: 'string' },
            first: { type: 'string', pattern: MONTH },
            last: { type: 'string', pattern: MONTH },
            values: { type: 'array', minItems: 12, items: numberOrNull },
          },
        },
      },
    },
  },
  daily: {
    type: 'object',
    additionalProperties: false,
    required: ['schema', 'id', 'kind', 'base', 'retrievedAt', 'publisherDate', 'dataAsOf', 'dates', 'series'],
    properties: {
      schema: { const: 'fixplanet.economy.dataset/1' },
      id: { type: 'string', pattern: '^[a-z_]+$' },
      kind: { const: 'daily-rates' },
      base: { type: 'string', pattern: '^[A-Z]{3}$' },
      retrievedAt: { type: 'string', pattern: STAMP },
      publisherDate: { type: 'string', pattern: DATE },
      dataAsOf: { type: 'string', pattern: DATE },
      dates: { type: 'array', minItems: 5, items: { type: 'string', pattern: DATE } },
      series: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'object',
          additionalProperties: false,
          required: ['id', 'key', 'name', 'unit', 'decimals', 'values'],
          properties: {
            id: { type: 'string', pattern: '^[A-Z]{3}$' },
            key: { type: 'string', pattern: '^EXR\\.D\\.[A-Z]{3}\\.EUR\\.SP00\\.A$' },
            name: { type: 'string' },
            unit: { type: 'string', pattern: '^[A-Z]{3}$' },
            decimals: { type: 'integer', minimum: 0, maximum: 8 },
            values: { type: 'array', minItems: 5, items: { type: 'number', minimum: 0 } },
          },
        },
      },
    },
  },
  manifest: {
    type: 'object',
    additionalProperties: false,
    required: ['schema', 'datasets'],
    properties: {
      schema: { const: 'fixplanet.economy.manifest/1' },
      datasets: { type: 'object' },
    },
  },
  manifestEntry: {
    type: 'object',
    additionalProperties: false,
    required: [
      'file', 'title', 'frequency', 'staleAfterDays', 'source', 'licence', 'attribution', 'modified', 'changes',
      'publisherDate', 'dataAsOf', 'retrievedAt', 'status', 'consecutiveFailures', 'lastError', 'lastFailureAt', 'checksums', 'series',
    ],
    properties: {
      file: { type: 'string', pattern: '^[a-z0-9-]+\\.json$' },
      title: { type: 'string' },
      frequency: { enum: ['daily', 'monthly'] },
      staleAfterDays: { type: 'integer', minimum: 1, maximum: 400 },
      source: {
        type: 'object',
        additionalProperties: false,
        required: ['organisation', 'name', 'page', 'downloadUrl', 'termsUrls'],
        properties: {
          organisation: { type: 'string' },
          name: { type: 'string' },
          page: { type: 'string', pattern: '^https://' },
          downloadUrl: { type: 'string', pattern: '^https://' },
          termsUrls: { type: 'array', minItems: 1, items: { type: 'string', pattern: '^https://' } },
        },
      },
      licence: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'url', 'terms'],
        properties: {
          name: { type: 'string' },
          url: { type: 'string', pattern: '^https://' },
          terms: { type: 'string' },
        },
      },
      attribution: {
        type: 'object',
        additionalProperties: false,
        required: ['credit', 'edition'],
        properties: { credit: { type: 'string' }, edition: { type: ['string', 'null'] } },
      },
      modified: { type: 'boolean' },
      changes: { type: 'array', minItems: 1, items: { type: 'string' } },
      publisherDate: { type: 'string', pattern: DATE },
      dataAsOf: { type: 'string', pattern: '^\\d{4}-\\d{2}(-\\d{2})?$' },
      retrievedAt: { type: 'string', pattern: STAMP },
      status: { enum: ['ok', 'failed'] },
      consecutiveFailures: { type: 'integer', minimum: 0 },
      lastError: { type: ['string', 'null'] },
      lastFailureAt: { type: ['string', 'null'] },
      checksums: {
        type: 'object',
        additionalProperties: false,
        required: ['algorithm', 'output', 'outputBytes', 'source', 'sourceBytes'],
        properties: {
          algorithm: { const: 'sha256' },
          output: { type: 'string', pattern: HEX },
          outputBytes: { type: 'integer', minimum: 1 },
          source: { type: 'string', pattern: HEX },
          sourceBytes: { type: 'integer', minimum: 1 },
        },
      },
      series: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'object',
          additionalProperties: false,
          required: ['id', 'name', 'unit', 'first', 'last', 'count'],
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            unit: { type: 'string' },
            first: { type: 'string' },
            last: { type: 'string' },
            count: { type: 'integer', minimum: 1 },
          },
        },
      },
    },
  },
};
