export const RELIGION_LEGEND_IDS = [
  'roman_pagan',
  'christian',
  'islam',
  'jewish',
  'zoroastrian',
  'hindu',
  'buddhist',
  'chinese_imperial',
  'dao_folk',
  'manichaean',
  'african_trad',
  'local_trad',
  'unmapped',
] as const;

export type ReligionLegendId = (typeof RELIGION_LEGEND_IDS)[number];

export const RELIGION_LEGEND_COLORS: Record<ReligionLegendId, string> = {
  roman_pagan: '#C4784A',
  christian: '#6B3A7A',
  islam: '#2F7A40',
  jewish: '#D4A017',
  zoroastrian: '#2E8B6E',
  hindu: '#E07A2F',
  buddhist: '#E8C547',
  chinese_imperial: '#B33A3A',
  dao_folk: '#B33A3A',
  manichaean: '#5C4A8A',
  african_trad: '#6B7A3A',
  local_trad: '#9A8B68',
  unmapped: '#B8B3A8',
};

/** Years published in this schematic shelf. Later centuries stay unpublished. */
export const RELIGION_PILOT_YEARS = [1, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
export const RELIGION_PUBLISHED_YEARS = [1, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
