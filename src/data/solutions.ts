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
