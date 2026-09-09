import type { HubIconName } from './hub';
import { cite, type PrimarySource } from './sources';

export type { PrimarySource } from './sources';

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
  /** Official project pages and agency briefs — not image credits. */
  sources?: readonly PrimarySource[];
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
 * 1. Add a row here (English slug, tag, optional latest, primary sources).
 * 2. Add the same slug to en / ru / pl / lv in `src/i18n/solutions.ts`.
 * 3. Drop a licensed image at `public/images/solutions/{slug}.jpg`
 *    and record it in `public/images/solutions/credits.json`.
 * 4. `npm run build`.
 *
 * Slugs stay English in every language. Prefer technologies already running
 * at scale or in serious deployment. Label pilots honestly. Do not invent
 * impact statistics. Primary sources are official agency or project pages —
 * not blogs. Hub tiles stay on `/solutions`; cards live on
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
  {
    slug: 'river-interceptors',
    tag: 'oceans',
    sources: [cite('The Ocean Cleanup — Interceptor', 'https://theoceancleanup.com/faq/what-is-an-interceptor/')],
  },
  { slug: 'mangrove-restoration', tag: 'oceans' },
  { slug: 'bycatch-reduction', tag: 'oceans' },
  { slug: 'oyster-reefs', tag: 'oceans' },
  { slug: 'solar-microgrids', tag: 'energy', latest: true },
  { slug: 'onshore-wind', tag: 'energy' },
  { slug: 'heat-pumps', tag: 'energy' },
  {
    slug: 'rainwater-harvesting',
    tag: 'water',
    sources: [
      cite(
        'WHO — rainwater collection and storage',
        'https://www.who.int/docs/default-source/wash-documents/sanitary-inspection-packages/rainwater-collection-storage-management-advice-sheet.pdf',
      ),
    ],
  },
  {
    slug: 'newater-reclaimed-wastewater',
    tag: 'water',
    sources: [cite('PUB Singapore — NEWater', 'https://www.pub.gov.sg/Public/WaterLoop/OurWaterStory/NEWater')],
  },
  {
    slug: 'fog-harvesting',
    tag: 'water',
    sources: [cite('FogQuest — current projects', 'https://fogquest.org/projects/current-projects/')],
  },
  {
    slug: 'constructed-floating-wetlands',
    tag: 'water',
    sources: [
      cite(
        'CSIRO — constructed floating wetlands',
        'https://www.csiro.au/en/research/natural-environment/water/constructed-floating-wetlands',
      ),
    ],
  },
  {
    slug: 'solar-still',
    tag: 'water',
    sources: [
      cite(
        'MIT News — passive solar desalination',
        'https://news.mit.edu/2020/passive-solar-powered-water-desalination-0207',
      ),
    ],
  },
  {
    slug: 'agroforestry',
    tag: 'forests',
    sources: [cite('FAO — agroforestry', 'https://www.fao.org/agroforestry/en')],
  },
  {
    slug: 'windbreaks',
    tag: 'forests',
    sources: [cite('USDA National Agroforestry Center — windbreaks', 'https://research.fs.usda.gov/centers/nac/windbreaks')],
  },
  {
    slug: 'reduced-impact-logging',
    tag: 'forests',
    sources: [cite('FAO — reduced-impact logging', 'https://www.fao.org/4/ac805e/ac805e0n.htm')],
  },
  {
    slug: 'riparian-forest-restoration',
    tag: 'forests',
    sources: [
      cite(
        'USDA Climate Hubs — riparian forest cover',
        'https://www.climatehubs.usda.gov/approach/maintain-or-restore-forest-and-vegetative-cover-riparian-areas',
      ),
    ],
  },
  {
    slug: 'community-forestry',
    tag: 'forests',
    sources: [
      cite(
        'FAO / FECOFUN — community forestry in Nepal',
        'https://www.fao.org/nepal/news/detail/fao-and-fecofun-strengthen-collaboration-for-community-based-forest-management-and-climate-resilience/en',
      ),
    ],
  },
  {
    slug: 'mrf-optical-sorting',
    tag: 'waste',
    sources: [cite('US EPA — recycle', 'https://www.epa.gov/recycle')],
  },
  {
    slug: 'textile-to-textile-recycling',
    tag: 'waste',
    sources: [cite('European Commission — textiles strategy', 'https://environment.ec.europa.eu/strategy/textiles-strategy_en')],
  },
  {
    slug: 'construction-demolition-recycling',
    tag: 'waste',
    sources: [
      cite(
        'European Commission — construction and demolition waste',
        'https://environment.ec.europa.eu/topics/waste-and-recycling/construction-and-demolition-waste_en',
      ),
    ],
  },
  {
    slug: 'black-soldier-fly',
    tag: 'waste',
    sources: [
      cite(
        'FAO — black soldier fly waste processing',
        'https://www.fao.org/newsroom/story/the-harmless-soldier-fighting-mounds-of-harmful-waste/en',
      ),
    ],
  },
  {
    slug: 'waste-to-energy',
    tag: 'waste',
    sources: [
      cite(
        'US EPA — energy recovery from waste',
        'https://archive.epa.gov/epawaste/nonhaz/municipal/web/html/basic.html',
      ),
    ],
  },
  {
    slug: 'ocean-cleanup',
    tag: 'waste',
    sources: [cite('The Ocean Cleanup', 'https://theoceancleanup.com/')],
  },
  {
    slug: 'interceptor',
    tag: 'waste',
    sources: [cite('The Ocean Cleanup — Interceptor', 'https://theoceancleanup.com/faq/what-is-an-interceptor/')],
  },
];

export function solutionPrimarySource(
  sources: readonly PrimarySource[] | undefined,
): PrimarySource | undefined {
  return sources?.[0];
}

export function isSolutionTag(value: string | undefined): value is TagKey {
  return !!value && (tagKeys as readonly string[]).includes(value);
}

export function solutionTagPath(tag: TagKey | 'all'): string {
  return `/solutions/${tag}`;
}
