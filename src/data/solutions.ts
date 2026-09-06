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

export const solutionMeta: SolutionMeta[] = [
  { slug: 'drip-irrigation', tag: 'water', latest: true },
  { slug: 'constructed-wetlands', tag: 'water', latest: true },
  { slug: 'sustainable-forestry', tag: 'forests', latest: true },
  { slug: 'anaerobic-digesters', tag: 'waste' },
  { slug: 'cool-roofs', tag: 'cities' },
  { slug: 'lower-clinker-cement', tag: 'materials' },
  { slug: 'river-interceptors', tag: 'oceans' },
  { slug: 'solar-microgrids', tag: 'energy', latest: true },
];

export function isSolutionTag(value: string | undefined): value is TagKey {
  return !!value && (tagKeys as readonly string[]).includes(value);
}

export function solutionTagPath(tag: TagKey | 'all'): string {
  return tag === 'all' ? '/solutions' : `/solutions/${tag}`;
}
