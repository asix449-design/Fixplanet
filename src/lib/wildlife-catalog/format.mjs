/**
 * Display formatting shared by the site loader and scripts/wildlife-catalog/check.mjs.
 * Display unit follows rules.json numberFormat (value in metres), not per-group overrides.
 */

export function halfUp(x) {
  return Math.floor(x + 0.5 + 1e-12);
}

/**
 * @param {number} metres
 * @param {string} loc
 * @param {object} numberFormat
 * @returns {string | null} null when the figure is still 0 after the millimetre guards
 */
export function formatMeasure(metres, loc, numberFormat) {
  const NF = numberFormat;
  if (!(metres > 0)) return null;
  if (NF.rounding !== 'half-up') throw new Error('C6: numberFormat.rounding must be half-up');
  if (NF.promoteAfterRounding !== true) throw new Error('C6: numberFormat.promoteAfterRounding must be true');
  const sep = NF.decimalSeparator[loc];
  const U = { m: 1, cm: 0.01, mm: 0.001 };
  let m = metres;
  for (let i = 0; i < 4; i++) {
    if (m >= NF.thresholdsM.cmMaxExclusive) {
      const n = halfUp(m / U.m * 10) / 10;
      return `${n.toFixed(1).replace('.', sep)} ${NF.units[loc].m}`;
    }
    if (m >= NF.thresholdsM.mmMaxExclusive) {
      const n = halfUp(m / U.cm);
      if (NF.promoteAfterRounding && n * U.cm >= NF.thresholdsM.cmMaxExclusive - 1e-12) {
        m = n * U.cm;
        continue;
      }
      return `${n} ${NF.units[loc].cm}`;
    }
    const tryDecs = [NF.decimals.mm, NF.decimals.mmFallback, NF.decimals.mmFallbackMax];
    let n = 0;
    let dec = tryDecs[0];
    for (const d of tryDecs) {
      dec = d;
      n = halfUp(m / U.mm * 10 ** dec) / 10 ** dec;
      if (n !== 0) break;
    }
    if (n === 0) return null;
    if (NF.promoteAfterRounding && n * U.mm >= NF.thresholdsM.mmMaxExclusive - 1e-12) {
      m = n * U.mm;
      continue;
    }
    const s = dec ? n.toFixed(dec).replace('.', sep) : String(n);
    return `${s} ${NF.units[loc].mm}`;
  }
  return null;
}

/** Even chunks: earlier groups take the extra card. k = ceil(n / maxPerGroup). */
export function splitGroup(cards, maxPerGroup = 20) {
  const k = Math.ceil(cards.length / maxPerGroup);
  if (k <= 1) return [cards];
  const base = Math.floor(cards.length / k);
  const extra = cards.length % k;
  const out = [];
  let i = 0;
  for (let c = 0; c < k; c++) {
    const n = base + (c < extra ? 1 : 0);
    out.push(cards.slice(i, i + n));
    i += n;
  }
  return out;
}

/**
 * Multiset of numeric tokens. Thousand separators (space, NBSP, thin space, comma
 * before three digits) are removed, a decimal comma becomes a dot, and a trailing
 * ordinal dot (Latvian "1.") is dropped.
 * @param {string} text
 */
export function numberMultiset(text) {
  let t = String(text).replace(/[\u00A0\u202F\u2009]/g, ' ');
  t = t.replace(/(\d)[ ](\d{3})(?!\d)/g, '$1$2');
  t = t.replace(/(\d),(\d{3})(?!\d)/g, '$1$2');
  t = t.replace(/(\d),(\d)/g, '$1.$2');
  t = t.replace(/(\d+)\.(?=\s|$|[,;:])/g, '$1');
  const found = t.match(/\d+(?:\.\d+)?/g) || [];
  found.sort();
  return found;
}

export function sameMultiset(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

/** Stored SizeValue to metres. `m` is already metres; `mm` is converted. */
export function measureMetres(metric) {
  if (!metric) return null;
  const n = metric.mean ?? metric.value;
  if (!(typeof n === 'number') || !(n > 0)) return null;
  if (metric.unit === 'mm') return n / 1000;
  return n;
}

/**
 * Caption assembled at display time. The numbers are not stored on the card.
 * Shape: "{heightLabel} {heightText}, {lengthLabel} {lengthText} {captionExtra}".
 */
export function composeScaleCaption(heightLabel, heightText, lengthLabel, lengthText, captionExtra) {
  return [`${heightLabel} ${heightText ?? ''},`, `${lengthLabel} ${lengthText ?? ''}`, captionExtra]
    .filter(Boolean)
    .join(' ');
}
