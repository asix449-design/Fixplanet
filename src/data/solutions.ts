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
  { key: 'water', icon: 'droplet' },
  { key: 'forests', icon: 'trees' },
  { key: 'waste', icon: 'recycle' },
  { key: 'cities', icon: 'city' },
  { key: 'materials', icon: 'hex' },
  { key: 'oceans', icon: 'wave' },
  { key: 'energy', icon: 'bolt' },
] as const satisfies ReadonlyArray<{
  key: TagKey;
  icon: HubIconName;
}>;

/** Hub-only hero. Shelf catalogs keep their own cards; `/solutions/all` stays a shelf. */
export const solutionsHubBackdrop = {
  file: 'solutions-hub-bg.jpg',
  credit: 'Founder-supplied laboratory reagent bottles',
  license: 'Site asset',
  width: 1280,
  height: 720,
} as const;

export const solutionsHubSrc = `/images/solutions/${solutionsHubBackdrop.file}`;

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
 * not blogs. Hub tiles stay on `/solutions` (no All tile). Cards live on
 * `/solutions/{tag}` and `/solutions/all`. Water encyclopedia articles
 * live at `/solutions/water/{slug}` — the shelf stays `/solutions/water`.
 * Forests encyclopedia articles live at `/solutions/forests/{slug}`.
 */
export const solutionMeta: SolutionMeta[] = [
  {
    slug: 'drip-irrigation',
    tag: 'water',
    latest: true,
    sources: [
      cite(
        'USGS Water Science School — Irrigation: drip or microirrigation',
        'https://www.usgs.gov/water-science-school/science/irrigation-drip-or-microirrigation',
      ),
      cite(
        'FAO — Irrigation water management: drip irrigation',
        'https://www.fao.org/4/s8684e/s8684e07.htm',
      ),
    ],
  },
  {
    slug: 'constructed-wetlands',
    tag: 'water',
    latest: true,
    sources: [
      cite('U.S. EPA — Constructed wetlands', 'https://www.epa.gov/wetlands/constructed-wetlands'),
      cite(
        'U.S. EPA — Constructed Wetlands Handbook (PDF)',
        'https://www.epa.gov/sites/default/files/2015-10/documents/constructed-wetlands-handbook.pdf',
      ),
    ],
  },
  {
    slug: 'membrane-desalination',
    tag: 'water',
    sources: [
      cite(
        'Water Corporation (WA) — Desalination',
        'https://www.watercorporation.com.au/Our-water/Desalination',
      ),
      cite(
        'Water Corporation (WA) — Perth Seawater Desalination Plant',
        'https://www.watercorporation.com.au/Our-water/Desalination/Perth-Seawater-Desalination-Plant',
      ),
      cite(
        'USGS Water Science School — Desalination',
        'https://www.usgs.gov/special-topics/water-science-school/science/desalination',
      ),
    ],
  },
  {
    slug: 'managed-aquifer-recharge',
    tag: 'water',
    sources: [
      cite('Orange County Water District — GWRS', 'https://www.ocwd.com/gwrs/'),
      cite(
        'Water Corporation (WA) — Groundwater replenishment',
        'https://www.watercorporation.com.au/Our-water/Groundwater/Groundwater-replenishment',
      ),
      cite(
        'Central Arizona Project — Recharge',
        'https://www.cap-az.com/water/water-supply/future-water-supplies/recharge/',
      ),
      cite(
        'NGWA — Orange County Water District case study',
        'https://www.ngwa.org/what-is-groundwater/groundwater-issues/managed-aquifer-recharge/case-studies/orange-county-water-district-california',
      ),
      cite('USGS Circular 1405 — Artificial recharge / MAR', 'https://pubs.usgs.gov/circ/1405/'),
    ],
  },
  {
    slug: 'sustainable-forestry',
    tag: 'forests',
    latest: true,
    sources: [
      cite(
        'FAO — Sustainable forest management overview',
        'https://www.fao.org/forestry/sfm/overview/',
      ),
    ],
  },
  {
    slug: 'assisted-natural-regeneration',
    tag: 'forests',
    sources: [
      cite(
        'Regreening Africa — FMNR',
        'https://regreeningafrica.org/approach/farmer-managed-natural-regeneration/',
      ),
    ],
  },
  {
    slug: 'fire-smart-forestry',
    tag: 'forests',
    sources: [cite('NWCG — PMS 484', 'https://www.nwcg.gov/publications/pms484')],
  },
  {
    slug: 'shade-agroforestry',
    tag: 'forests',
    sources: [
      cite(
        'Smithsonian National Zoo — Bird Friendly coffee',
        'https://nationalzoo.si.edu/migratory-birds/bird-friendly-coffee',
      ),
    ],
  },
  {
    slug: 'anaerobic-digesters',
    tag: 'waste',
    sources: [cite('U.S. EPA — AgSTAR', 'https://www.epa.gov/agstar')],
  },
  {
    slug: 'pet-bottle-recycling',
    tag: 'waste',
    sources: [
      cite(
        'Ellen MacArthur Foundation — Plastics',
        'https://ellenmacarthurfoundation.org/topics/plastics/overview',
      ),
    ],
  },
  {
    slug: 'municipal-composting',
    tag: 'waste',
    sources: [
      cite(
        'U.S. EPA — Composting wasted food',
        'https://www.epa.gov/sustainable-management-food/reducing-impact-wasted-food-feeding-soil-and-composting',
      ),
    ],
  },
  {
    slug: 'landfill-gas-capture',
    tag: 'waste',
    sources: [cite('U.S. EPA — LMOP', 'https://www.epa.gov/lmop')],
  },
  {
    slug: 'cool-roofs',
    tag: 'cities',
    sources: [
      cite(
        'U.S. EPA — Cool roofs',
        'https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands',
      ),
    ],
  },
  {
    slug: 'permeable-pavement',
    tag: 'cities',
    sources: [
      cite(
        'U.S. EPA — Permeable pavement',
        'https://www.epa.gov/soakuptherain/soak-rain-permeable-pavement',
      ),
    ],
  },
  {
    slug: 'urban-tree-canopy',
    tag: 'cities',
    sources: [
      cite(
        'U.S. EPA — Trees and vegetation',
        'https://www.epa.gov/heatislands/using-trees-and-vegetation-reduce-heat-islands',
      ),
    ],
  },
  {
    slug: 'district-heating',
    tag: 'cities',
    sources: [
      cite(
        'IEA — District heating',
        'https://www.iea.org/energy-system/buildings/district-heating',
      ),
    ],
  },
  {
    slug: 'lower-clinker-cement',
    tag: 'materials',
    sources: [cite('IEA — Cement', 'https://www.iea.org/energy-system/industry/cement')],
  },
  {
    slug: 'mass-timber',
    tag: 'materials',
    sources: [cite('WoodWorks — mass timber', 'https://www.woodworks.org/')],
  },
  {
    slug: 'green-steel',
    tag: 'materials',
    sources: [cite('HYBRIT', 'https://www.hybritdevelopment.se/')],
  },
  {
    slug: 'river-interceptors',
    tag: 'oceans',
    sources: [cite('The Ocean Cleanup — Rivers', 'https://theoceancleanup.com/rivers/')],
  },
  {
    slug: 'mangrove-restoration',
    tag: 'oceans',
    sources: [cite('Global Mangrove Watch', 'https://www.globalmangrovewatch.org/')],
  },
  {
    slug: 'bycatch-reduction',
    tag: 'oceans',
    sources: [cite('NOAA Fisheries — Bycatch', 'https://www.fisheries.noaa.gov/insight/bycatch')],
  },
  {
    slug: 'oyster-reefs',
    tag: 'oceans',
    sources: [
      cite('NOAA — Living shorelines', 'https://oceanservice.noaa.gov/facts/living-shoreline.html'),
    ],
  },
  {
    slug: 'solar-microgrids',
    tag: 'energy',
    latest: true,
    sources: [cite('IEA — Solar PV', 'https://www.iea.org/energy-system/renewables/solar-pv')],
  },
  {
    slug: 'onshore-wind',
    tag: 'energy',
    sources: [cite('IEA — Wind', 'https://www.iea.org/energy-system/renewables/wind')],
  },
  {
    slug: 'heat-pumps',
    tag: 'energy',
    sources: [cite('IEA — Heat pumps', 'https://www.iea.org/energy-system/buildings/heat-pumps')],
  },
  {
    slug: 'rainwater-harvesting',
    tag: 'water',
    sources: [
      cite(
        'WHO — Rainwater collection, storage and management advice sheet (PDF)',
        'https://www.who.int/docs/default-source/wash-documents/sanitary-inspection-packages/rainwater-collection-storage-management-advice-sheet.pdf',
      ),
      cite(
        'WHO — Guidelines for drinking-water quality',
        'https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/water-safety-and-quality/drinking-water-quality-guidelines',
      ),
      cite(
        'WHO — Guidelines for drinking-water quality, 4th edition',
        'https://www.who.int/publications/i/item/9789241548151',
      ),
    ],
  },
  {
    slug: 'newater-reclaimed-wastewater',
    tag: 'water',
    sources: [
      cite(
        'PUB Singapore — NEWater',
        'https://www.pub.gov.sg/Public/WaterLoop/OurWaterStory/NEWater',
      ),
      cite(
        'PUB Singapore — Our Water Story',
        'https://www.pub.gov.sg/Public/WaterLoop/OurWaterStory',
      ),
    ],
  },
  {
    slug: 'fog-harvesting',
    tag: 'water',
    sources: [
      cite('FogQuest — current projects', 'https://fogquest.org/projects/current-projects/'),
      cite(
        'Klemm et al., AMBIO 2012 — Fog as a fresh-water resource (PDF)',
        'https://www.fogquest.org/wp-content/uploads/2012/11/AMBIO-2012-Fog-Review-10.1007_s13280-012-0247-8.pdf',
      ),
      cite(
        'Frontiers in Water — fog harvesting review (2021)',
        'https://www.frontiersin.org/journals/water/articles/10.3389/frwa.2021.675269/full',
      ),
    ],
  },
  {
    slug: 'constructed-floating-wetlands',
    tag: 'water',
    sources: [
      cite(
        'CSIRO — Constructed floating wetlands',
        'https://www.csiro.au/en/research/natural-environment/water/constructed-floating-wetlands',
      ),
      cite(
        'WetlandInfo (Queensland) — floating wetlands design summary',
        'https://www.wetlandinfo.detsi.qld.gov.au/wetlands/management/treatment-systems/for-agriculture/treatment-sys-nav-page/floating-wetlands/design-summary.html',
      ),
    ],
  },
  {
    slug: 'solar-still',
    tag: 'water',
    sources: [
      cite(
        'MIT News — passive solar-powered water desalination (2020)',
        'https://news.mit.edu/2020/passive-solar-powered-water-desalination-0207',
      ),
      cite(
        'USGS Water Science School — Desalination',
        'https://www.usgs.gov/special-topics/water-science-school/science/desalination',
      ),
    ],
  },
  {
    slug: 'agroforestry',
    tag: 'forests',
    sources: [
      cite(
        'FAO — Agroforestry overview',
        'https://www.fao.org/agroforestry/about-agroforestry/overview/en',
      ),
    ],
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
  {
    slug: 'green-roofs',
    tag: 'cities',
    sources: [
      cite(
        'GSA — planted roof case studies',
        'https://www.gsa.gov/governmentwide-initiatives/federal-highperformance-buildings/highperformance-building-clearinghouse/water/planted-roof/case-studies',
      ),
    ],
  },
  {
    slug: 'rain-gardens-bioswales',
    tag: 'cities',
    sources: [cite('US EPA — types of green infrastructure', 'https://www.epa.gov/green-infrastructure/types-green-infrastructure')],
  },
  {
    slug: 'cool-pavements',
    tag: 'cities',
    sources: [cite('US EPA — cool pavements', 'https://www.epa.gov/heatislands/using-cool-pavements-reduce-heat-islands')],
  },
  {
    slug: 'district-cooling',
    tag: 'cities',
    sources: [
      cite(
        'SP Group — district cooling and heating',
        'https://www.spgroup.com.sg/sustainable-energy-solutions/district-cooling-and-heating',
      ),
    ],
  },
  {
    slug: 'building-renovation-epbd',
    tag: 'cities',
    sources: [
      cite(
        'European Commission — energy renovation of buildings',
        'https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive/energy-renovation-buildings_en',
      ),
    ],
  },
  {
    slug: 'recycled-aggregate-concrete',
    tag: 'materials',
    sources: [
      cite(
        'Ireland EPA — national criteria for recycled aggregates',
        'https://www.epa.ie/news-releases/news-releases-2023/epa-publishes-national-criteria-for-recycled-aggregates-.php',
      ),
    ],
  },
  {
    slug: 'geopolymer-binders',
    tag: 'materials',
    sources: [
      cite(
        'Journal of the American Ceramic Society — geopolymers and alkali-activated materials',
        'https://ceramics.onlinelibrary.wiley.com/doi/10.1111/jace.19828',
      ),
    ],
  },
  {
    slug: 'recycled-aluminium',
    tag: 'materials',
    sources: [cite('International Aluminium Institute — aluminium facts', 'https://international-aluminium.org/landing/aluminium-facts/')],
  },
  {
    slug: 'hempcrete-bio-insulation',
    tag: 'materials',
    sources: [cite('ISO 24260:2022 — hemp fibre mat and board', 'https://www.iso.org/standard/78231.html')],
  },
  {
    slug: 'cement-ccus',
    tag: 'materials',
    sources: [
      cite(
        'Heidelberg Materials — DREAM CCUS',
        'https://www.heidelbergmaterials.com/en/sustainability/we-decarbonize-the-construction-industry/ccus/dream',
      ),
    ],
  },
  {
    slug: 'seagrass-restoration',
    tag: 'oceans',
    sources: [
      cite(
        'NOAA Fisheries — Indian River Lagoon seagrass and wetlands',
        'https://www.fisheries.noaa.gov/feature-story/restoring-indian-river-lagoons-seagrass-meadows-and-wetlands',
      ),
    ],
  },
  {
    slug: 'coral-restoration',
    tag: 'oceans',
    sources: [cite('NOAA Fisheries — restoring coral reefs', 'https://www.fisheries.noaa.gov/national/habitat-conservation/restoring-coral-reefs')],
  },
  {
    slug: 'ghost-gear',
    tag: 'oceans',
    sources: [cite('Global Ghost Gear Initiative', 'https://www.ghostgear.org/')],
  },
  {
    slug: 'kelp-farming',
    tag: 'oceans',
    sources: [
      cite(
        'UNEP — Into the Blue: kelp forests',
        'https://www.unep.org/resources/report/blue-securing-sustainable-future-kelp-forests',
      ),
    ],
  },
  {
    slug: 'salt-marsh-restoration',
    tag: 'oceans',
    sources: [
      cite(
        'U.S. Fish and Wildlife Service — salt marsh keystone',
        'https://www.fws.gov/story/2024-02/salt-marsh-keystone-coastal-conservation',
      ),
    ],
  },
  {
    slug: 'utility-scale-solar',
    tag: 'energy',
    sources: [cite('IEA — solar PV', 'https://www.iea.org/energy-system/renewables/solar-pv')],
  },
  {
    slug: 'offshore-wind',
    tag: 'energy',
    sources: [cite('IEA — Offshore Wind Outlook 2019', 'https://www.iea.org/reports/offshore-wind-outlook-2019')],
  },
  {
    slug: 'grid-scale-batteries',
    tag: 'energy',
    sources: [cite('IEA — grid-scale storage', 'https://www.iea.org/energy-system/electricity/grid-scale-storage')],
  },
  {
    slug: 'geothermal',
    tag: 'energy',
    sources: [
      cite(
        'IEA — geothermal technology breakthroughs',
        'https://www.iea.org/news/technology-breakthroughs-are-unlocking-geothermal-energys-vast-potential-in-countries-across-the-globe',
      ),
    ],
  },
  {
    slug: 'pumped-hydro',
    tag: 'energy',
    sources: [
      cite(
        'IEA — Hydropower Special Market Report (executive summary)',
        'https://www.iea.org/reports/hydropower-special-market-report/executive-summary',
      ),
    ],
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
