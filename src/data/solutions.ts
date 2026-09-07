import type { HubIconName } from './hub';

export const tagKeys = [
  'water',
  'forests',
  'waste',
  'cities',
  'materials',
  'oceans',
  'energy',
] as const;

export type TagKey = (typeof tagKeys)[number];

export const solutionsHub = [
  { key: 'all', icon: 'grid' },
  { key: 'water', icon: 'droplet' },
  { key: 'forests', icon: 'trees' },
  { key: 'waste', icon: 'recycle' },
  { key: 'cities', icon: 'city' },
  { key: 'materials', icon: 'hex' },
  { key: 'oceans', icon: 'wave' },
  { key: 'energy', icon: 'bolt' },
] as const satisfies ReadonlyArray<{
  key: TagKey | 'all';
  icon: HubIconName;
}>;

export type SolutionMeta = {
  slug: string;
  tag: TagKey;
  latest?: boolean;
};

export type SolutionCopy = {
  problemTitle: string;
  fixTitle: string;
  problem: string;
  fix: string;
  imageAlt: string;
};

export type Solution = SolutionMeta & SolutionCopy;

/**
 * Curated Solutions catalog. To add a card:
 * 1. Add a row here (English slug, tag, optional latest).
 * 2. Add the same slug to en / ru / pl / lv in `src/i18n/solutions.ts`.
 * 3. Drop a licensed image at `public/images/solutions/{slug}.jpg`
 *    and record it in `public/images/solutions/credits.json`.
 * 4. `npm run build`.
 *
 * Slugs stay English in every language. Prefer technologies already running
 * at scale or in serious deployment. Label pilots honestly. Do not invent
 * impact statistics. Hub tiles stay on `/solutions`; cards live on
 * `/solutions/{tag}` and `/solutions/all`.
 */
export const solutionMeta: SolutionMeta[] = [
  { slug: 'drip-irrigation', tag: 'water', latest: true },
  { slug: 'constructed-wetlands', tag: 'water', latest: true },
  { slug: 'membrane-desalination', tag: 'water' },
  { slug: 'managed-aquifer-recharge', tag: 'water' },
  { slug: 'sustainable-forestry', tag: 'forests', latest: true },
  { slug: 'assisted-natural-regeneration', tag: 'forests' },
  { slug: 'fire-smart-forestry', tag: 'forests' },
  { slug: 'shade-agroforestry', tag: 'forests' },
  { slug: 'anaerobic-digesters', tag: 'waste' },
  { slug: 'pet-bottle-recycling', tag: 'waste' },
  { slug: 'municipal-composting', tag: 'waste' },
  { slug: 'landfill-gas-capture', tag: 'waste' },
  { slug: 'cool-roofs', tag: 'cities' },
  { slug: 'permeable-pavement', tag: 'cities' },
  { slug: 'urban-tree-canopy', tag: 'cities' },
  { slug: 'district-heating', tag: 'cities' },
  { slug: 'lower-clinker-cement', tag: 'materials' },
  { slug: 'mass-timber', tag: 'materials' },
  { slug: 'green-steel', tag: 'materials' },
  { slug: 'river-interceptors', tag: 'oceans' },
  { slug: 'mangrove-restoration', tag: 'oceans' },
  { slug: 'bycatch-reduction', tag: 'oceans' },
  { slug: 'oyster-reefs', tag: 'oceans' },
  { slug: 'solar-microgrids', tag: 'energy', latest: true },
  { slug: 'onshore-wind', tag: 'energy' },
  { slug: 'heat-pumps', tag: 'energy' },
];

export function isSolutionTag(value: string | undefined): value is TagKey {
  return !!value && (tagKeys as readonly string[]).includes(value);
}

export function solutionTagPath(tag: TagKey | 'all'): string {
  return `/solutions/${tag}`;
}
