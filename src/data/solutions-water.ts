import { cite, type PrimarySource } from './sources';

export type { PrimarySource } from './sources';

export const waterEncyclopediaSlugs = [
  'drip-irrigation',
  'constructed-wetlands',
  'membrane-desalination',
  'managed-aquifer-recharge',
  'rainwater-harvesting',
  'newater-reclaimed-wastewater',
  'fog-harvesting',
  'constructed-floating-wetlands',
  'solar-still',
] as const;

export type WaterEncyclopediaSlug = (typeof waterEncyclopediaSlugs)[number];

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
};

export type WaterEncyclopediaCopy = {
  title: string;
  hook: string;
  imageAlt: string;
  what: string[];
  how: string[];
  where: string[];
  limits: string[];
};

export type WaterEncyclopediaMeta = {
  slug: WaterEncyclopediaSlug;
  image: ImageCredit;
  sources: readonly PrimarySource[];
};

export type WaterEncyclopedia = WaterEncyclopediaMeta & WaterEncyclopediaCopy;

function img(
  file: string,
  credit: string,
  license: string,
  sourceUrl: string,
): ImageCredit {
  return { file, credit, license, sourceUrl };
}

/**
 * Nested Water encyclopedia. Detail routes are
 * `/solutions/water/{slug}` — the shelf stays `/solutions/water`.
 * Sources are verification links, not the card href.
 */
export const waterEncyclopediaMeta: WaterEncyclopediaMeta[] = [
  {
    slug: 'drip-irrigation',
    image: img('drip-irrigation.jpg', 'Fix Planet generated documentary still — drip line on a young crop, not a named farm', 'Site asset', ''),
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
    image: img(
      'constructed-wetlands.jpg',
      'Fix Planet generated documentary still — reed wetland and boardwalk, not a named project',
      'Site asset',
      '',
    ),
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
    image: img(
      'membrane-desalination.jpg',
      'Calistemon — Perth Seawater Desalination Plant, September 2020',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Perth_Seawater_Desalination_Plant,_September_2020_02.jpg',
    ),
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
    image: img(
      'managed-aquifer-recharge.jpg',
      'Bob Schuster, CSIRO — Bolivar recycled-water aquifer storage and recovery trial, 2002',
      'CC BY 3.0',
      'https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_3711_Bolivar_Recycled_Water_Aquifer_Storage_Recovery_Trial_site_on_the_Adelaide_Plains_SA_2002.jpg',
    ),
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
      cite(
        'USGS Circular 1405 — Artificial recharge / MAR',
        'https://pubs.usgs.gov/circ/1405/',
      ),
    ],
  },
  {
    slug: 'rainwater-harvesting',
    image: img(
      'rainwater-harvesting.jpg',
      'Spiritualfade — rainwater harvesting tank, India',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Rainwater_harvesting_tank,_India.jpg',
    ),
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
    image: img(
      'newater-reclaimed-wastewater.jpg',
      'Z22 — microfiltration system at Bedok NEWater Factory',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Microfiltration_system_at_Bedok_NEWater_Factory.jpg',
    ),
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
    image: img(
      'fog-harvesting.jpg',
      'Pontificia Universidad Católica de Chile — fog collector at Alto Patache',
      'CC BY-SA 2.0',
      'https://commons.wikimedia.org/wiki/File:Atrapanieblas_en_Alto_Patache.jpg',
    ),
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
    image: img(
      'constructed-floating-wetlands.jpg',
      'Nigos — Sengkang Floating Wetland from Anchorvale Bridge',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Sengkang_Floating_Wetland_from_Anchorvale_Bridge.jpg',
    ),
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
    image: img(
      'solar-still.jpg',
      'Z. S. Abdel-Rehim, A. Lashine — rooftop solar still, Cairo',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:Photograph-picture-of-the-solar-still-combined-with-air-conditioning-system-in-side-view-Cairo-Egypt.jpg',
    ),
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
];

export function isWaterEncyclopediaSlug(
  value: string | undefined,
): value is WaterEncyclopediaSlug {
  return !!value && (waterEncyclopediaSlugs as readonly string[]).includes(value);
}

export function waterEncyclopediaPath(slug: WaterEncyclopediaSlug): string {
  return `/solutions/water/${slug}`;
}

export function waterEncyclopediaImageSrc(image: ImageCredit): string {
  return `/images/solutions/${image.file}`;
}

export function getWaterEncyclopediaMeta(
  slug: string,
): WaterEncyclopediaMeta | undefined {
  return waterEncyclopediaMeta.find((item) => item.slug === slug);
}
