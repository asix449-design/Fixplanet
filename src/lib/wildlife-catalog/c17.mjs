/**
 * C17: no raw status abbreviations in RU / PL / LV.
 * Patterns come from rules.json statusAbbreviations (unicode, case-sensitive).
 */

export function compilePatterns(statusAbbreviations) {
  return statusAbbreviations.map((p) => ({
    id: p.id,
    level: p.level === 'warn' ? 'warn' : 'fail',
    re: new RegExp(p.pattern, 'gu'),
  }));
}

/** @param {string} text @param {ReturnType<typeof compilePatterns>} patterns */
export function scanText(text, patterns) {
  if (!text) return [];
  const hits = [];
  for (const p of patterns) {
    p.re.lastIndex = 0;
    const matches = String(text).match(p.re) || [];
    if (matches.length) hits.push({ id: p.id, level: p.level, count: matches.length });
  }
  return hits;
}

export function violationKey(v) {
  return [v.rule, v.slug, v.locale, v.field, v.pattern || ''].join('\t');
}

/**
 * Subtract a shrink-only baseline.
 * A higher count than the baseline is a FAIL. A lower count, or a baseline
 * entry with no remaining finding, is stale (also a FAIL until the entry is removed).
 */
export function subtract(findings, baseline) {
  const base = new Map();
  for (const v of baseline.violations || []) base.set(violationKey(v), v);
  const seen = new Map();
  for (const f of findings) {
    if (f.level === 'warn') continue;
    const k = violationKey(f);
    const prev = seen.get(k);
    if (!prev) seen.set(k, { ...f, count: f.count ?? 1 });
    else prev.count += f.count ?? 1;
  }
  const fail = [];
  const covered = [];
  for (const f of seen.values()) {
    const b = base.get(violationKey(f));
    if (!b) {
      fail.push(f);
      continue;
    }
    const bc = b.count ?? 1;
    const fc = f.count ?? 1;
    if (fc > bc) fail.push({ ...f, message: `count ${fc} exceeds baseline ${bc}` });
    else covered.push(f);
  }
  const stale = [];
  for (const v of baseline.violations || []) {
    const f = seen.get(violationKey(v));
    if (!f) stale.push(v);
    else if ((f.count ?? 1) < (v.count ?? 1)) stale.push(v);
  }
  const warn = findings.filter((f) => f.level === 'warn');
  return { fail, warn, stale, covered };
}
