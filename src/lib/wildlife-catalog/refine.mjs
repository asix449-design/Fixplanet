import { LOCALES } from './schema.mjs';

const fail = (list, rule, message, extra = {}) => {
  list.push({ level: 'fail', rule, slug: extra.slug || '*', locale: extra.locale || '*', field: extra.field || rule, message, count: 1, ...extra });
};
const warn = (list, rule, message, extra = {}) => {
  list.push({ level: 'warn', rule, slug: extra.slug || '*', locale: extra.locale || '*', field: extra.field || rule, message, count: 1, ...extra });
};

function shelfById(registry, id) {
  return registry.shelves.find((s) => s.id === id);
}

function cardsOf(shelf) {
  return shelf?.meta?.cards || [];
}

/**
 * Cross-file rules S1..S15. Shared by load.ts and the checker.
 * `fileShelves` are the JSON folders. `legacyShelves` are the adapted speciesMeta rows (PR 1a).
 */
export function refineCatalog({ registry, fileShelves, legacyShelves = {}, rules, statusLabels }) {
  const findings = [];
  const shelfIds = new Set(registry.shelves.map((s) => s.id));

  const orders = new Map();
  for (const shelf of registry.shelves) {
    if (orders.has(shelf.order)) fail(findings, 'S10', `duplicate shelf order ${shelf.order}`, { field: shelf.id });
    orders.set(shelf.order, shelf.id);
    if (shelf.id === 'prehistoric') {
      fail(findings, 'S10', 'there is no prehistoric shelf', { slug: shelf.id, field: 'id' });
    }
    if (shelf.mergeInto) {
      const target = shelfById(registry, shelf.mergeInto);
      if (!target || !target.enabled || target.cards === false) {
        fail(findings, 'S10', `mergeInto ${shelf.mergeInto} is not an enabled card shelf`, { slug: shelf.id, field: 'mergeInto' });
      }
    }
    if (shelf.scale?.groups?.length) {
      const groups = shelf.scale.groups;
      let prev = -Infinity;
      groups.forEach((g, i) => {
        const last = i === groups.length - 1;
        if (last && g.maxSortKey != null) {
          fail(findings, 'S10', `${shelf.id} last size group must be open`, { slug: shelf.id, field: 'scale.groups' });
        }
        if (!last) {
          if (!(g.maxSortKey > prev)) fail(findings, 'S10', `${shelf.id} size groups must ascend`, { slug: shelf.id, field: 'scale.groups' });
          prev = g.maxSortKey ?? prev;
        }
      });
    }
  }

  const seen = new Map();
  const consider = (origin, shelves) => {
    for (const [dir, shelf] of Object.entries(shelves)) {
      const meta = shelf.meta;
      if (origin === 'file' && dir !== meta.shelf) {
        fail(findings, 'S1', `folder ${dir} != meta.shelf ${meta.shelf}`, { slug: meta.shelf, field: 'shelf' });
      }
      if (!shelfIds.has(meta.shelf)) fail(findings, 'S1', `unknown shelf ${meta.shelf}`, { field: 'shelf' });
      for (const loc of LOCALES) {
        const file = shelf.copy[loc];
        if (!file) continue;
        if (file.locale !== loc) fail(findings, 'S1', `${meta.shelf}/${loc}.json locale is ${file.locale}`, { slug: meta.shelf, locale: loc, field: 'locale' });
        if (file.shelf !== meta.shelf) fail(findings, 'S1', `${meta.shelf}/${loc}.json shelf mismatch`, { slug: meta.shelf, locale: loc, field: 'shelf' });
      }
      const metaSlugs = meta.cards.map((c) => c.slug);
      for (const card of meta.cards) {
        if (card.primaryShelf !== meta.shelf) {
          fail(findings, 'S1', `${card.slug} primaryShelf ${card.primaryShelf} != folder ${meta.shelf}`, { slug: card.slug, field: 'primaryShelf' });
        }
        if (seen.has(card.slug)) fail(findings, 'S2', `duplicate slug ${card.slug}`, { slug: card.slug, field: 'slug' });
        seen.set(card.slug, meta.shelf);
        if (shelfIds.has(card.slug)) fail(findings, 'S2', `slug collides with shelf id ${card.slug}`, { slug: card.slug, field: 'slug' });
        const tags = card.tags || [];
        if (new Set(tags).size !== tags.length) fail(findings, 'S3', `${card.slug} duplicate tags`, { slug: card.slug, field: 'tags' });
        for (const tag of tags) {
          if (tag === card.primaryShelf) fail(findings, 'S3', `${card.slug} tag repeats primary`, { slug: card.slug, field: 'tags' });
          const target = shelfById(registry, tag);
          if (!target || target.cards === false) fail(findings, 'S3', `${card.slug} tag ${tag} is not a card shelf`, { slug: card.slug, field: 'tags' });
        }
        if (card.iucn?.category === 'EW' && !card.flags?.extinctInWild) {
          fail(findings, 'S6', `${card.slug} EW implies extinctInWild`, { slug: card.slug, field: 'flags' });
        }
        const extinctFlag = (card.iucn?.category === 'EW' && registry.options.flagsOnExtinct.includes('EW'))
          || (card.flags?.possiblyExtinct && registry.options.flagsOnExtinct.includes('PE'));
        if (extinctFlag && card.primaryShelf !== 'extinct') {
          fail(findings, 'S6', `${card.slug} EW/PE card must be primary extinct`, { slug: card.slug, field: 'primaryShelf' });
        }
        if (card.era || card.primaryShelf === 'prehistoric' || tags.includes('prehistoric')) {
          fail(findings, 'S12', `${card.slug} there is no prehistoric shelf`, { slug: card.slug, field: 'era' });
        }
        if (card.rank === 'breed' && !card.parentSpecies) {
          fail(findings, 'S5', `${card.slug} breed needs parentSpecies`, { slug: card.slug, field: 'parentSpecies' });
        }
        const shelfCfg = shelfById(registry, card.primaryShelf);
        const unit = shelfCfg?.scale?.unit;
        if (unit && card.size) {
          for (const metric of ['height', 'length', 'wingspan']) {
            if (card.size[metric] && card.size[metric].unit !== unit) {
              fail(findings, 'S9', `${card.slug} ${metric} unit ${card.size[metric].unit} != shelf ${unit}`, { slug: card.slug, field: `size.${metric}` });
            }
          }
        }
        if (card.scale) checkScale(findings, card, shelfCfg);
        const isNew = !card.provenance?.migratedFrom;
        if (isNew) checkNewCard(findings, card, shelf, shelfCfg);
        checkStatusLabels(findings, card, statusLabels, rules, isNew);
        if (isNew) checkS14(findings, card, rules, registry);
      }
      for (const loc of LOCALES) {
        const file = shelf.copy[loc];
        const slugs = file ? Object.keys(file.cards) : [];
        for (const slug of slugs) {
          if (!metaSlugs.includes(slug)) fail(findings, 'S4', `${loc} has ${slug} missing from meta`, { slug, locale: loc, field: 'cards' });
        }
        for (const slug of metaSlugs) {
          if (!file || !file.cards[slug]) {
            const legacy = origin === 'legacy';
            const allowed = legacy && (baselineHasFallback(shelf.baseline, slug, loc));
            if (!allowed) fail(findings, 'S4', `${slug} missing ${loc}`, { slug, locale: loc, field: 'locale' });
          }
        }
      }
    }
  };

  // Attach baseline onto a dummy so S4 can see it without threading every call. Set on each shelf below.
  for (const shelf of Object.values(fileShelves)) shelf.baseline = null;
  consider('file', fileShelves);
  consider('legacy', legacyShelves);

  // parentSpecies after every card is known
  for (const shelf of [...Object.values(fileShelves), ...Object.values(legacyShelves)]) {
    for (const card of cardsOf(shelf)) {
      if (!card.parentSpecies) continue;
      if (!seen.has(card.parentSpecies)) fail(findings, 'S5', `${card.slug} parentSpecies ${card.parentSpecies} missing`, { slug: card.slug, field: 'parentSpecies' });
      if (card.parentSpecies === card.slug) fail(findings, 'S5', `${card.slug} parent cycle`, { slug: card.slug, field: 'parentSpecies' });
    }
  }

  checkS15(findings, statusLabels, rules);
  return findings;
}

function baselineHasFallback(baseline, slug, loc) {
  if (!baseline) return false;
  return (baseline.localeFallback || []).some((row) => row.slug === slug && row.locale === loc);
}

export function attachBaseline(legacyShelves, baseline) {
  for (const shelf of Object.values(legacyShelves)) shelf.baseline = baseline;
  return legacyShelves;
}

/** reconstruction when height or the shelf horizontal measure is a reconstruction; otherwise exact. */
export function sizeTrack(card, shelfCfg) {
  const horizontal = shelfCfg?.scale?.horizontal || 'length';
  if (card.size?.height?.kind === 'reconstruction' || card.size?.[horizontal]?.kind === 'reconstruction') return 'reconstruction';
  return 'exact';
}

export function scaleTrackFindings(card, shelfCfg) {
  const findings = [];
  if (card?.scale) checkScale(findings, card, shelfCfg);
  return findings;
}

function checkScale(findings, card, shelfCfg) {
  const horizontal = shelfCfg?.scale?.horizontal || 'length';
  const eligible = !!(card.size?.height && card.size?.[horizontal] && card.scale?.image);
  if (card.scale.show === true) {
    if (!card.size?.height) fail(findings, 'S7', `${card.slug} scale.show needs size.height`, { slug: card.slug, field: 'size.height' });
    if (!card.size?.[horizontal]) fail(findings, 'S7', `${card.slug} scale.show needs size.${horizontal}`, { slug: card.slug, field: `size.${horizontal}` });
    if (!card.size?.[card.scale.basis]) fail(findings, 'S7', `${card.slug} scale.show needs size.${card.scale.basis}`, { slug: card.slug, field: 'scale.basis' });
    if (!card.scale.image) fail(findings, 'S7', `${card.slug} scale.show needs scale.image`, { slug: card.slug, field: 'scale.image' });
  }
  if (card.scale.show === false && eligible) {
    fail(findings, 'S8', `${card.slug} show:false while scale data is complete`, { slug: card.slug, field: 'scale.show' });
  }
  const declared = card.scale.track || 'exact';
  const computed = sizeTrack(card, shelfCfg);
  if (card.scale.show && declared !== computed) {
    fail(findings, 'R3', `${card.slug} scale.track ${declared} != ${computed}`, { slug: card.slug, field: 'scale.track' });
  }
  if (declared === 'reconstruction' && computed !== 'reconstruction') {
    fail(findings, 'R4', `${card.slug} reconstruction track needs a reconstruction measure`, { slug: card.slug, field: 'scale.track' });
  }
}

function checkNewCard(findings, card, shelf, shelfCfg) {
  if (!card.taxon) fail(findings, 'S11', `${card.slug} new card needs taxon`, { slug: card.slug, field: 'taxon' });
  if (!card.range) fail(findings, 'S11', `${card.slug} new card needs range`, { slug: card.slug, field: 'range' });
  if (!card.image?.width || !card.image?.height) fail(findings, 'S11', `${card.slug} new card needs image dimensions`, { slug: card.slug, field: 'image' });
  if (card.image?.noText !== true) fail(findings, 'S11', `${card.slug} new card needs image.noText`, { slug: card.slug, field: 'image.noText' });
  const license = card.image?.license || '';
  if (/^CC /i.test(license) && !card.image?.licenseUrl) {
    fail(findings, 'S11', `${card.slug} CC licence needs licenseUrl`, { slug: card.slug, field: 'image.licenseUrl' });
  }
  if (!card.size || !Object.values(card.size).some(Boolean)) {
    fail(findings, 'S11', `${card.slug} new card needs a size metric`, { slug: card.slug, field: 'size' });
  }
  for (const loc of LOCALES) {
    const copy = shelf.copy[loc]?.cards?.[card.slug];
    if (copy && (!copy.sources || copy.sources.length < 1)) {
      fail(findings, 'S11', `${card.slug} new card needs sources in ${loc}`, { slug: card.slug, locale: loc, field: 'sources' });
    }
    if (card.scale?.show && copy && !copy.scale) {
      fail(findings, 'S7', `${card.slug} scale.show needs copy.scale in ${loc}`, { slug: card.slug, locale: loc, field: 'scale' });
    }
  }
  void shelfCfg;
}

function checkStatusLabels(findings, card, statusLabels, rules, isNew) {
  if (!isNew) return;
  const scopes = new Set();
  if (card.iucn?.scope) scopes.add(card.iucn.scope.startsWith('national-') ? 'national' : card.iucn.scope);
  for (const loc of LOCALES) {
    for (const scope of scopes) {
      const text = statusLabels[loc]?.scope?.[scope];
      if (text == null || text === '') fail(findings, 'S13', `${card.slug} missing scope label ${scope} in ${loc}`, { slug: card.slug, locale: loc, field: `scope.${scope}` });
    }
    for (const other of card.otherStatus || []) {
      const sys = other.system === 'NatureServe' ? 'natureServe' : other.system === 'US ESA' ? 'usEsa' : 'ospar';
      const intro = statusLabels[loc]?.systems?.[sys]?.intro?.text;
      if (!intro) fail(findings, 'S13', `${card.slug} missing ${other.system} intro in ${loc}`, { slug: card.slug, locale: loc, field: `systems.${sys}` });
      if (other.system === 'OSPAR') {
        if (!statusLabels[loc]?.ospar?.threatenedDeclining) {
          fail(findings, 'S13', `${card.slug} missing OSPAR label in ${loc}`, { slug: card.slug, locale: loc, field: 'ospar' });
        }
      } else {
        const key = other.system === 'US ESA' ? (rules.otherStatusValues?.usEsaAliases?.[other.value] || other.value) : other.value.replace(/T.*$/, '').replace(/Q$/, '');
        const table = other.system === 'NatureServe' ? rules.otherStatusValues?.natureserve : rules.otherStatusValues?.usEsa;
        const row = table?.[other.value] || table?.[key];
        if (!row?.[loc]) fail(findings, 'S13', `${card.slug} missing ${other.system} value ${other.value} in ${loc}`, { slug: card.slug, locale: loc, field: 'otherStatus' });
      }
    }
  }
}

function checkS14(findings, card, rules, registry) {
  const shelf = shelfById(registry, card.primaryShelf);
  if (shelf?.statusDisplay === 'none') return;
  if (!card.iucn || card.iucn.category === 'NE' && shelf?.statusDisplay === 'none') return;
  if (!card.iucn) return;
  for (const loc of ['ru', 'pl', 'lv']) {
    const names = rules.iucnCategoryNames?.[loc];
    const cat = card.iucn.category;
    if (!names?.names?.[cat]) {
      fail(findings, 'S14', `${card.slug} no ${loc} name for ${cat}`, { slug: card.slug, locale: loc, field: `iucnCategoryNames.${cat}` });
      continue;
    }
    if (!names.sourceUrl) fail(findings, 'S14', `${loc} names have no sourceUrl`, { slug: card.slug, locale: loc, field: 'iucnCategoryNames' });
    if ((names.needsNativeReview || []).includes(cat)) {
      warn(findings, 'S14', `${card.slug} ${loc} ${cat} needs native review`, { slug: card.slug, locale: loc, field: `iucnCategoryNames.${cat}` });
    }
  }
}

const BAD_COPY = /[\u2010-\u2015\u2212\u00B7\u2022\u2027~\u2190-\u21FF\u27F0-\u27FF\u2900-\u297F*]/u;

function checkS15(findings, statusLabels, rules) {
  const patterns = (rules.statusAbbreviations || []).map((p) => ({ ...p, re: new RegExp(p.pattern, 'gu') }));
  const allow = rules.latinAllowlist || [];
  for (const loc of ['ru', 'pl', 'lv']) {
    const texts = [];
    const names = rules.iucnCategoryNames?.[loc];
    if (names?.names) for (const [code, value] of Object.entries(names.names)) if (value) texts.push([`iucnCategoryNames.${code}`, value]);
    if (names?.officialNames) for (const [code, value] of Object.entries(names.officialNames)) texts.push([`officialNames.${code}`, value]);
    walkStrings(statusLabels[loc], '', texts);
    for (const [field, text] of texts) {
      if (text == null) continue;
      if (BAD_COPY.test(text)) fail(findings, 'S15', `${loc} ${field} has a forbidden character`, { locale: loc, field, slug: '*' });
      for (const p of patterns) {
        p.re.lastIndex = 0;
        if (p.level !== 'warn' && p.re.test(text)) fail(findings, 'S15', `${loc} ${field} contains a status code`, { locale: loc, field, slug: '*' });
      }
      if (loc === 'ru') {
        let u = text;
        for (const a of allow) u = u.split(a).join('');
        u = u.replace(/\{[a-z]+\}/g, '');
        if (/[A-Za-z]/.test(u)) fail(findings, 'S15', `ru ${field} has a Latin word`, { locale: loc, field, slug: '*' });
      } else if (/[\u0400-\u04FF]/.test(text)) {
        fail(findings, 'S15', `${loc} ${field} has Cyrillic`, { locale: loc, field, slug: '*' });
      }
    }
  }
}

function walkStrings(node, path, out) {
  if (typeof node === 'string') {
    if (!/sourceUrl$|yearsPluralRule$|\.note$|\.quote$|\.verified$/.test(path) && !path.endsWith('note') && !path.endsWith('quote') && !path.endsWith('verified') && path !== 'sourceUrl') {
      out.push([path || 'text', node]);
    }
    return;
  }
  if (!node || typeof node !== 'object' || Array.isArray(node)) return;
  for (const [k, v] of Object.entries(node)) {
    if (['sources', 'sourceUrl', 'note', 'quote', 'verified', 'yearsPluralRule'].includes(k)) continue;
    walkStrings(v, path ? `${path}.${k}` : k, out);
  }
}

export function s14Names(rules) {
  const CODES = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'NE'];
  const out = [];
  for (const loc of LOCALES) {
    for (const cat of CODES) {
      const n = rules.iucnCategoryNames[loc];
      if (!n?.names?.[cat]) out.push({ level: 'fail', loc, cat, message: `FAIL S14 ${loc}: no ${cat} name` });
      else if (!n.sourceUrl) out.push({ level: 'fail', loc, cat, message: `FAIL S14 ${loc}: no sourceUrl` });
      else if ((n.needsNativeReview || []).includes(cat)) out.push({ level: 'warn', loc, cat, message: `WARN S14 ${loc}: ${cat} needs native review` });
      else out.push({ level: 'ok', loc, cat, message: 'ok' });
    }
  }
  return out;
}
