import { CardMeta, LOCALES, Registry } from '../../src/lib/wildlife-catalog/schema.mjs';
import { composeScaleCaption, formatMeasure, splitGroup } from '../../src/lib/wildlife-catalog/format.mjs';
import { compilePatterns, scanText } from '../../src/lib/wildlife-catalog/c17.mjs';
import { c16Issues, checkDuplicateSlugs, checkLabelPlaceholders, duplicateSourceUrls, normalizeSourceUrl } from '../../src/lib/wildlife-catalog/checks.mjs';
import { s14Names } from '../../src/lib/wildlife-catalog/refine.mjs';
import { toSpecies } from '../../src/lib/wildlife-catalog/adapter.mjs';

function assert(ok, message) {
  if (!ok) throw new Error(message);
}

const lab = () => Object.fromEntries(LOCALES.map((l) => [l, { name: 'x', status: 'x', tile: 'x', lead: 'x' }]));

/**
 * Schema and rule fixtures ported from the v3.4 prototype, plus a round trip of the live catalogue cards.
 * Candidate CSVs are not in this repo; the C16 branches are exercised with inline cards.
 */
export function runSelfTests(catalog, live) {
  const { rules, registry } = catalog;
  const reg = {
    version: 1,
    hub: { labels: { en: { name: 'Wildlife' }, ru: { name: 'Природа' }, pl: { name: 'Przyroda' }, lv: { name: 'Savvaļa' } } },
    scaleLabels: Object.fromEntries(LOCALES.map((l) => [l, { small: 'S', medium: 'M', large: 'L', subgroup: '{group} {i}' }])),
    options: { breeds: 'variants', flagsOnExtinct: ['EW', 'PE'] },
    shelves: [{ id: 'archived', kind: 'status', order: 8, icon: 'gone', enabled: false, labels: lab() }],
  };
  assert(!Registry.safeParse(reg).success, 'disabled card shelf without mergeInto must fail');
  reg.shelves[0].mergeInto = 'extinct';
  assert(Registry.safeParse(reg).success, 'disabled shelf with mergeInto must parse');
  assert(!Registry.safeParse({ ...reg, shelves: [{ ...reg.shelves[0], id: 'prehistoric', mergeInto: 'extinct' }] }).success, 'prehistoric shelf is rejected');
  assert(!registry.shelves.some((s) => s.id === 'prehistoric'), 'live registry has no prehistoric shelf');
  for (const sample of ['...', '…', 'TBD', 'tbd', '   ']) {
    const hit = checkLabelPlaceholders({ hub: { labels: { en: { name: sample } } }, shelves: [] });
    assert(hit.length === 1 && hit[0].rule === 'C20', `placeholder label must fail: ${JSON.stringify(sample)}`);
  }
  assert(checkLabelPlaceholders({ hub: { labels: { en: { name: 'Wildlife' } } }, shelves: [] }).length === 0, 'real hub label passes');
  const dupShelves = {
    surviving: { meta: { shelf: 'surviving', cards: [{ slug: 'gray-wolf' }] } },
    extinct: { meta: { shelf: 'extinct', cards: [{ slug: 'gray-wolf' }] } },
  };
  const dup = checkDuplicateSlugs(dupShelves);
  assert(dup.length === 1 && dup[0].rule === 'C21' && dup[0].slug === 'gray-wolf', 'duplicate slug across shelf files fails');
  assert(checkDuplicateSlugs({
    surviving: { meta: { shelf: 'surviving', cards: [{ slug: 'gray-wolf' }, { slug: 'gray-wolf' }] } },
  }).length === 1, 'duplicate slug inside one shelf file fails');
  assert(checkDuplicateSlugs({
    surviving: { meta: { shelf: 'surviving', cards: [{ slug: 'gray-wolf' }] } },
    extinct: { meta: { shelf: 'extinct', cards: [{ slug: 'dodo' }] } },
  }).length === 0, 'distinct slugs across shelf files pass');

  const base = {
    value: 0.7, unit: 'm', basis: 'bill tip to tail tip', confidence: 'single_source', approx: false, kind: 'measured',
    sources: [{ id: 'a', url: 'https://example.org/x', title: 't', use: 'estimate', value: 70, unit: 'cm' }],
    suppliedBy: 'bob', checked: '2026-10-06',
  };
  const cardShape = CardMeta.innerType().shape;
  const SV = cardShape.size.unwrap().shape.length.unwrap();
  assert(!SV.safeParse(base).success, 'single_source must be approx');
  assert(SV.safeParse({ ...base, approx: true }).success, 'approx single_source must parse');
  const derived = {
    ...base, approx: true, confidence: 'estimate', kind: 'derived',
    derivation: { method: 'body-proportion', from: 'height', ratio: 2, note: 'published proportion from source X' },
    sources: [{ id: 'p', url: 'https://example.org/p', title: 'pub', use: 'derived', unit: 'cm' }],
  };
  assert(SV.safeParse(derived).success, 'published derived figure must parse');
  assert(!SV.safeParse({ ...derived, derivation: { ...derived.derivation, method: 'image-ratio' } }).success, 'image-ratio is rejected');
  assert(!SV.safeParse({ ...derived, derivation: { ...derived.derivation, note: '   ' } }).success, 'blank derivation note is rejected');

  const scale = {
    enabled: true, unit: 'm', decimals: 1, horizontal: 'length',
    groups: [{ id: 'small', maxSortKey: 1 }, { id: 'medium', maxSortKey: 3 }, { id: 'large' }],
    maxPerGroup: 20, split: 'auto',
  };
  const reg2 = { ...reg, shelves: [{ id: 'surviving', kind: 'status', order: 1, icon: 'paw', labels: lab(), scale }] };
  assert(Registry.safeParse(reg2).success, 'registry scale parses');
  assert(!Registry.safeParse({ ...reg2, shelves: [{ ...reg2.shelves[0], scale: { ...scale, maxPerGroup: 25 } }] }).success, 'maxPerGroup is 20');
  assert(splitGroup(Array.from({ length: 47 }, (_, i) => i)).map((a) => a.length).join() === '16,16,15', 'split 47');
  assert(splitGroup(Array(20).fill(0)).map((a) => a.length).join() === '20', 'split 20');
  assert(splitGroup(Array(41).fill(0)).map((a) => a.length).join() === '14,14,13', 'split 41');

  const NF = rules.numberFormat;
  assert(formatMeasure(0.67, 'en', NF) === '67 cm', 'format 0.67 m');
  assert(formatMeasure(1.14, 'en', NF) === '1.1 m', 'format 1.14 m');
  assert(formatMeasure(0.996, 'en', NF) === '1.0 m', 'promote 0.996 m');
  assert(formatMeasure(0.00004, 'en', NF) === '0.04 mm', 'mm fallback 2 decimals');
  assert(formatMeasure(0.000001, 'en', NF) == null, 'still zero fails');
  assert(formatMeasure(1.14, 'ru', NF) === '1,1 м', 'RU decimal comma');
  assert(formatMeasure(0.67, 'pl', NF) === '67 cm', 'PL centimetres');

  const cardShelves = Object.values(catalog.fileShelves).some((shelf) => shelf.meta.cards.length)
    ? catalog.fileShelves
    : catalog.legacyShelves;
  const mega = cardShelves.extinct.copy.lv.cards.megatherium;
  assert(mega, 'LV megatherium is in the adapted catalogue');
  const fixes = [
    { field: 'commonName', old: 'slinkis', new: 'sliņķis', count: 1 },
    { field: 'hook', old: 'slinkis', new: 'sliņķis', count: 1 },
    { field: 'what', old: 'slinkis', new: 'sliņķis', count: 2 },
  ];
  const applyFix = (copy, f) => {
    const v = f.field.split('.').reduce((o, k) => o?.[k], copy);
    const n = v.split(f.old).length - 1;
    if (n !== f.count) throw new Error(`count mismatch ${f.field}: expected ${f.count}, found ${n}`);
    return v.replaceAll(f.old, f.new);
  };
  let lvMega = { ...mega };
  // The vernacular title may already be the scientific name. The spelling fix is still counted on a restored title.
  if (!lvMega.commonName.includes('sliņķis')) lvMega.commonName = 'Milzu sliņķis';
  for (const key of ['commonName', 'hook', 'what']) lvMega[key] = lvMega[key].replaceAll('sliņķis', 'slinkis');
  for (const f of fixes) lvMega = { ...lvMega, [f.field]: applyFix(lvMega, f) };
  assert(lvMega.commonName.includes('sliņķis'), 'card.fix renames LV megatherium');
  let reapplied = false;
  try { applyFix(lvMega, fixes[0]); } catch { reapplied = true; }
  assert(reapplied, 'card.fix refuses to reapply');

  const IU = cardShape.iucn.unwrap();
  const dodo = { category: 'EX', verifiedVia: 'gbif', checkedAt: '2026-10-08', iucnTaxonId: '22690059', assessedYear: 2024, assessmentUrl: 'https://www.iucnredlist.org/species/22690059/261916273' };
  assert(IU.safeParse(dodo).success, 'verified IUCN parses');
  assert(!IU.safeParse({ ...dodo, verifiedVia: 'wikipedia' }).success, 'wikipedia is not a verification source');
  const ne = {
    category: 'NE', verifiedVia: 'gbif', checkedAt: '2026-10-08',
    evidence: {
      matchUrl: 'https://api.gbif.org/v1/species/match?name=Dytiscus%20latissimus', usageKey: 4470292,
      matchType: 'EXACT', rank: 'SPECIES', taxonomicStatus: 'ACCEPTED',
      categoryUrl: 'https://api.gbif.org/v1/species/4470292/iucnRedListCategory', categoryResponse: 'NE',
    },
  };
  assert(IU.safeParse(ne).success && IU.parse(ne).scope === 'global', 'NE evidence parses');
  assert(!IU.safeParse({ ...ne, evidence: undefined }).success, 'NE without evidence is rejected');

  const OS = cardShape.otherStatus.unwrap();
  const ospar = {
    system: 'OSPAR', value: 'Threatened and/or declining', regions: ['II', 'III'],
    recordUrl: 'https://www.ospar.org/work-areas/bdc/species-habitats/list-of-threatened-declining-species-habitats/invertebrates/flat-oyster',
    checkedAt: '2026-10-08',
  };
  assert(OS.safeParse([ospar]).success, 'OSPAR otherStatus parses');
  assert(!OS.safeParse([{ ...ospar, regions: [] }]).success, 'OSPAR needs regions');

  const shelves = Object.fromEntries(registry.shelves.map((s) => [s.id, s]));
  const prov = { added: '2026-10-08', suppliedBy: [] };
  assert(c16Issues({ primaryShelf: 'insects', provenance: prov, flags: {}, tags: [] }, shelves).length === 0, 'insects are not blocked by status');
  assert(c16Issues({ primaryShelf: 'endangered', provenance: prov, flags: {}, tags: [] }, shelves).length === 1, 'endangered needs a status');
  assert(c16Issues({ primaryShelf: 'domesticates', provenance: prov, flags: {}, tags: [] }, shelves).length === 0, 'domesticates are not blocked by status');
  assert(c16Issues({
    primaryShelf: 'surviving', provenance: prov, flags: {}, tags: [],
    otherStatus: [{ system: 'OSPAR', value: 'Threatened and/or declining', recordUrl: ospar.recordUrl, checkedAt: '2026-10-08', regions: ['II'] }],
  }, shelves).length === 0, 'verified otherStatus stands in for IUCN');
  assert(c16Issues({ primaryShelf: 'endangered', provenance: { ...prov, migratedFrom: 'speciesMeta' }, flags: {}, tags: [] }, shelves).length === 0, 'legacy cards skip C16');

  const patterns = compilePatterns(rules.statusAbbreviations);
  const iu = (t) => scanText(t, patterns).some((h) => h.id === 'iucn');
  for (const text of ['МСОП: CR', 'статус EX.', '(Panthera leo, VU)', 'IUCN EW joprojām', 'CR_PE', 'z CR do EN', 'Globalnie LC;', 'DD i NE']) {
    assert(iu(text), `C17 should hit ${text}`);
  }
  for (const text of ['Ne, tas nav', 'nie wiadomo', 'en route', 'NMFS-NE-338', 'ENERĢIJA', 'NEW', 'LCD', 'Crex crex', 'Nyctea', 'ЕН ЕХ', 'Endangered', 'EXPO 2020', 'Lex', 'CR2']) {
    assert(!iu(text), `C17 should ignore ${text}`);
  }

  const s14 = s14Names(rules);
  assert(s14.filter((x) => x.level === 'fail').length === 0, 'S14 names are filled');
  const expectedReview = [];
  for (const loc of LOCALES) {
    const pending = new Set(rules.iucnCategoryNames[loc]?.needsNativeReview || []);
    for (const cat of ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'NE']) {
      if (pending.has(cat)) expectedReview.push(`${loc}:${cat}`);
    }
  }
  const warned = s14.filter((x) => x.level === 'warn').map((x) => `${x.loc}:${x.cat}`);
  assert(JSON.stringify(warned) === JSON.stringify(expectedReview), `S14 warnings follow needsNativeReview (${warned.join(', ')})`);
  assert(!expectedReview.includes('lv:EX'), 'LV EX category name is reviewed');
  const wiki = 'https://en.wikipedia.org/wiki/Cave_bear';
  assert(normalizeSourceUrl('http://EN.WIKIPEDIA.ORG/wiki/Cave%20bear#History/') === normalizeSourceUrl(wiki), 'wiki space, case, scheme, slash, and fragment match');
  assert(duplicateSourceUrls([wiki, 'https://en.wikipedia.org/wiki/Cave%20bear']).length === 1, 'duplicate wiki urls are caught');
  assert(duplicateSourceUrls(['https://example.org/a_b', 'https://example.org/a%20b']).length === 0, 'non-wiki space and underscore stay distinct');
  assert(duplicateSourceUrls(['https://example.org/a', 'https://example.org/b']).length === 0, 'distinct urls pass');
  assert(!('methodLabels' in registry), 'registry has no methodLabels');
  assert(registry.shelves.find((s) => s.id === 'domesticates').statusDisplay === 'none', 'domesticates hide the status pill');
  assert(registry.options.breeds === 'variants', 'breeds are variants');

  const mammothOk = { size: { length: { basis: 'body length without the trunk and tusks' } }, scale: { show: true, basis: 'height' } };
  const method = rules.measureMethods.proboscideanBodyLength;
  assert(method.scaleBasisRequired === 'height', 'C19 requires height');
  assert(method.bodyType === 'proboscidean', 'proboscidean bodyType');
  assert(mammothOk.scale.basis === method.scaleBasisRequired, 'height scaling satisfies C19');
  const headBody = rules.measureMethods.headBodyLength;
  assert(headBody.scaleBasisRequired === 'height', 'head-and-body length scales by height');
  assert(headBody.lengthLabel.en === 'Body length without the tail', 'EN body length label');
  assert(headBody.lengthLabel.ru === 'Длина тела без хвоста', 'RU body length label');
  assert(headBody.lengthLabel.pl === 'Długość ciała bez ogona', 'PL body length label');
  assert(headBody.lengthLabel.lv === 'Ķermeņa garums bez astes', 'LV body length label');
  const cap = composeScaleCaption('Shoulder height', formatMeasure(1.03, 'en', NF), 'Nose to tail tip', formatMeasure(3, 'en', NF), undefined);
  assert(cap === 'Shoulder height 1.0 m, Nose to tail tip 3.0 m', 'caption is composed at display time');

  if (live) {
    let cards = 0;
    for (const loc of LOCALES) {
      for (const original of live[loc]) {
        let card;
        let copy;
        for (const shelf of Object.values(cardShelves)) {
          const found = shelf.meta.cards.find((c) => c.slug === original.slug);
          if (found) { card = found; copy = shelf.copy[loc].cards[original.slug]; break; }
        }
        const view = toSpecies(card, copy);
        for (const field of ['slug', 'scientificName', 'status', 'commonName', 'hook', 'imageAlt', 'what', 'range', 'story', 'when', 'humanRole', 'sources']) {
          assert((original[field] ?? '') === (view[field] ?? ''), `round trip ${loc} ${original.slug} ${field}`);
        }
        assert((original.iucn || null) === (view.iucn || null), `round trip iucn ${original.slug}`);
        assert(JSON.stringify(original.image) === JSON.stringify(view.image), `round trip image ${original.slug}`);
        cards += 1;
      }
    }
    const catalogueCards = Object.values(cardShelves).reduce((sum, shelf) => sum + shelf.meta.cards.length, 0);
    assert(cards === catalogueCards * LOCALES.length, `round trip covered ${cards} locale cards`);
  }
}
