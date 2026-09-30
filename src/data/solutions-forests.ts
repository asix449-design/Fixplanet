import { cite, type PrimarySource } from './sources';

export type { PrimarySource } from './sources';

export const forestEncyclopediaSlugs = [
  'sustainable-forestry',
  'assisted-natural-regeneration',
  'fire-smart-forestry',
  'shade-agroforestry',
  'agroforestry',
  'windbreaks',
  'reduced-impact-logging',
  'riparian-forest-restoration',
  'community-forestry',
  'forest-certification',
  'redd-plus',
  'closer-to-nature-forestry',
  'enrichment-planting',
  'mass-timber',
] as const;

export type ForestEncyclopediaSlug = (typeof forestEncyclopediaSlugs)[number];

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
  licenseUrl?: string;
  width?: number;
  height?: number;
};

export type FigureCreditPart = {
  text: string;
  href?: string;
};

export type ForestEncyclopediaCopy = {
  title: string;
  hook: string;
  imageAlt: string;
  caption?: string;
  /** Linked credit line. When set, the detail page uses this instead of image.credit. */
  figureCredit?: readonly FigureCreditPart[];
  what: string[];
  how?: string[];
  where?: string[];
  why?: string[];
  read?: string[];
  limits: string[];
  sources?: readonly PrimarySource[];
};

export type ForestEncyclopediaMeta = {
  slug: ForestEncyclopediaSlug;
  image: ImageCredit;
  sources: readonly PrimarySource[];
};

export type ForestEncyclopedia = ForestEncyclopediaMeta & ForestEncyclopediaCopy;

function img(
  file: string,
  credit: string,
  license: string,
  sourceUrl: string,
  extra?: Pick<ImageCredit, 'licenseUrl' | 'width' | 'height'>,
): ImageCredit {
  return { file, credit, license, sourceUrl, ...extra };
}

/**
 * Nested Forests encyclopedia. Detail routes are
 * `/solutions/forests/{slug}` — the shelf stays `/solutions/forests`.
 * Sources are verification links, not the card href.
 */
export const forestEncyclopediaMeta: ForestEncyclopediaMeta[] = [
  {
    slug: 'sustainable-forestry',
    image: img(
      'sustainable-forestry.jpg',
      'Fix Planet generated documentary still of a plantation track and a log stack',
      'Site asset',
      '',
    ),
    sources: [
      cite(
        'FAO, sustainable forest management overview',
        'https://www.fao.org/forestry/sfm/overview/',
      ),
      cite(
        'FAO, management of planted forests',
        'https://www.fao.org/sustainable-forest-management-toolbox/modules/management-of-planted-forests/en/',
      ),
      cite(
        'FAO, Global Forest Resources Assessment 2020 (PDF)',
        'https://www.fao.org/3/ca9825en/ca9825en.pdf',
      ),
      cite('FAO, planted forests', 'https://www.fao.org/4/x6896e/x6896e0e.htm'),
      cite(
        'U.S. Department of Agriculture Forest Service, Forest Inventory and Analysis',
        'https://research.fs.usda.gov/programs/fia',
      ),
    ],
  },
  {
    slug: 'assisted-natural-regeneration',
    image: img(
      'assisted-natural-regeneration.jpg',
      'Davidbena, winterthorn (Faidherbia albida) in the Elah valley',
      'CC0',
      'https://commons.wikimedia.org/wiki/File:Faidherbia_albida_(Elah_valley).jpg',
    ),
    sources: [
      cite(
        'FAO, assisted natural regeneration of forests (PDF)',
        'https://www.fao.org/3/ca4191en/CA4191EN.pdf',
      ),
      cite(
        'Chomba and colleagues, 2020 review of farmer-managed natural regeneration',
        'https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2020.571679/full',
      ),
      cite(
        'Regreening Africa, farmer-managed natural regeneration',
        'https://regreeningafrica.org/approach/farmer-managed-natural-regeneration/',
      ),
    ],
  },
  {
    slug: 'fire-smart-forestry',
    image: img(
      'fire-smart-forestry.jpg',
      'Forest Service Northern Region, prescribed fire at Lake Como, Bitterroot National Forest',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Conducting_Prescribed_Fire,_Lake_Como,_Darby_Sula_R.D._Bitterroot_N.F.jpg',
    ),
    sources: [
      cite(
        'National Wildfire Coordinating Group, prescribed fire procedures guide',
        'https://www.nwcg.gov/publications/pms484',
      ),
      cite(
        'National Wildfire Coordinating Group, Interagency Prescribed Fire Planning and Implementation Procedures Guide (PDF)',
        'https://fs-prod-nwcg.s3.us-gov-west-1.amazonaws.com/s3fs-public/publication/pms484.pdf',
      ),
      cite(
        'U.S. Department of Agriculture Forest Service, general technical report on dry mixed-conifer forests (PDF)',
        'https://www.fs.usda.gov/rm/pubs/rmrs_gtr292.pdf',
      ),
    ],
  },
  {
    slug: 'shade-agroforestry',
    image: img(
      'shade-agroforestry.jpg',
      'John Blake, canopy of a traditional shade coffee plantation in Guatemala',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Canopy_of_a_traditional_shade_coffee_plantation_in_Guatemala.jpg',
    ),
    sources: [
      cite(
        'Smithsonian National Zoo, Bird Friendly coffee',
        'https://nationalzoo.si.edu/migratory-birds/bird-friendly-coffee',
      ),
      cite(
        'Smithsonian Bird Friendly, norms (PDF)',
        'https://nationalzoo.si.edu/sites/default/files/documents/bf_norms_english_accessible.pdf',
      ),
      cite(
        'Smithsonian, Bird Friendly celebrates 25 years',
        'https://www.nationalzoo.si.edu/conservation/news/smithsonian-bird-friendlyr-celebrates-25-years',
      ),
    ],
  },
  {
    slug: 'agroforestry',
    image: img(
      'agroforestry.jpg',
      'Savanna Institute, alley cropping beside the Wisconsin River, Savanna Institute farm, 2024',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Agroforestry_alley_cropping_%26_Wisconsin_River,_Savanna_Institute_farm_2024.jpg',
    ),
    sources: [
      cite(
        'FAO, agroforestry overview',
        'https://www.fao.org/agroforestry/about-agroforestry/overview/en',
      ),
      cite(
        'FAO, agroforestry FAQs',
        'https://www.fao.org/agroforestry/about-agroforestry/faqs/en',
      ),
      cite(
        'FAO, the Amazonian Chakra, Napo Province, Ecuador',
        'https://www.fao.org/agroforestry/activities/faos-work/article-detail/the-amazonian-chakra--a-traditional-agroforestry-system-managed-by-indigenous-communities-in-napo-province--ecuador/en',
      ),
      cite(
        'FAO sustainable forest management toolbox, agroforestry',
        'https://www.fao.org/sustainable-forest-management-toolbox/modules/agroforestry/2/en?tabInx=0',
      ),
    ],
  },
  {
    slug: 'windbreaks',
    image: img(
      'windbreaks.jpg',
      'Savanna Institute, young three-row windbreak in an Illinois field',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Young_three-row_windbreak_in_an_Illinois_field.jpg',
    ),
    sources: [
      cite(
        'U.S. Department of Agriculture National Agroforestry Center, windbreaks',
        'https://research.fs.usda.gov/centers/nac/windbreaks',
      ),
      cite(
        'U.S. Department of Agriculture National Agroforestry Center, windbreak note 25 (PDF)',
        'https://www.fs.usda.gov/nac/assets/documents/agroforestrynotes/an25w01.pdf',
      ),
      cite(
        'U.S. Department of Agriculture National Agroforestry Center, windbreak note 36 (PDF)',
        'https://www.fs.usda.gov/nac/assets/documents/agroforestrynotes/an36w03.pdf',
      ),
    ],
  },
  {
    slug: 'reduced-impact-logging',
    image: img(
      'reduced-impact-logging.jpg',
      'CEphoto, Uwe Aranas, logging camp, Tawau District, Sabah',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:District-Tawau_Sabah_Logging-Camp-04.jpg',
    ),
    sources: [
      cite(
        'FAO, Jonkers on reduced-impact logging in Sarawak, Guyana and Cameroon',
        'https://www.fao.org/4/ac805e/ac805e0n.htm',
      ),
      cite(
        'FAO, Dykstra on reduced-impact logging, concepts and issues',
        'https://www.fao.org/4/ac805e/ac805e04.htm',
      ),
    ],
  },
  {
    slug: 'riparian-forest-restoration',
    image: img(
      'riparian-forest-restoration.jpg',
      'U.S. Department of Agriculture, riparian buffer on Bear Creek, Story County, Iowa',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Riparian_buffer_on_Bear_Creek_in_Story_County,_Iowa.JPG',
    ),
    sources: [
      cite(
        'U.S. Department of Agriculture Climate Hubs, forest cover in riparian areas',
        'https://www.climatehubs.usda.gov/approach/maintain-or-restore-forest-and-vegetative-cover-riparian-areas',
      ),
      cite(
        'U.S. Department of Agriculture Climate Hubs, maintain or restore riparian areas',
        'https://www.climatehubs.usda.gov/approach/maintain-or-restore-riparian-areas-0',
      ),
      cite(
        'U.S. Department of Agriculture Forest Service, riparian restoration handbook (PDF)',
        'https://www.fs.usda.gov/t-d/pubs/pdf/riparian_restoration/lo_res/04231201L.pdf',
      ),
    ],
  },
  {
    slug: 'community-forestry',
    image: img(
      'community-forestry.jpg',
      'Shadow Ayush, Badikhel community forest, Lalitpur',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Badikhel_community_forest,_Lalitpur.jpg',
    ),
    sources: [
      cite(
        'Nepal Forest Act, 1993 (FAOLEX PDF)',
        'https://faolex.fao.org/docs/pdf/nep4527.pdf',
      ),
      cite(
        'FAO and the Federation of Community Forestry Users Nepal, community forestry (2025)',
        'https://www.fao.org/nepal/news/detail/fao-and-fecofun-strengthen-collaboration-for-community-based-forest-management-and-climate-resilience/en',
      ),
      cite(
        'FAO, community forestry',
        'https://www.fao.org/4/XII/0321-C1.htm',
      ),
    ],
  },
  {
    slug: 'forest-certification',
    image: img(
      'forest-certification.webp',
      'Geoff Holland, timber stack near Trowupburn, Northumberland',
      'CC BY-SA 2.0',
      'https://commons.wikimedia.org/wiki/File:Timber_Stack,_Sinkside_Hill_Near_Trowupburn_-_geograph.org.uk_-_6552952.jpg',
      {
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
        width: 1280,
        height: 960,
      },
    ),
    sources: [
      cite(
        'Forest Stewardship Council, How the FSC System Works',
        'https://fsc.org/en/how-the-fsc-system-works',
      ),
    ],
  },
  {
    slug: 'redd-plus',
    image: img(
      'redd-plus.webp',
      'Dukeabruzzi, rainforest in Kinabalu Park, Borneo',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Borneo_rainforest.jpg',
      {
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
        width: 1600,
        height: 1169,
      },
    ),
    sources: [
      cite(
        'Forest Carbon Partnership Facility, About the FCPF',
        'https://www.forestcarbonpartnership.org/about',
      ),
    ],
  },
  {
    slug: 'closer-to-nature-forestry',
    image: img(
      'closer-to-nature-forestry.webp',
      'Michael Fiegle, beech selection forest, Mühlhausen',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Plenterwald_April_2004.jpg',
      {
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
        width: 1494,
        height: 1036,
      },
    ),
    sources: [
      cite(
        'European Commission, Guidelines on Closer-to-Nature Forest Management',
        'https://environment.ec.europa.eu/publications/guidelines-closer-nature-forest-management_en',
      ),
    ],
  },
  {
    slug: 'enrichment-planting',
    image: img(
      'enrichment-planting.webp',
      'Beverly Moseley, USDA Natural Resources Conservation Service, White Mountain Apache planting',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:White_Mountain_Apache_Arizona-105.jpg',
      {
        licenseUrl: 'https://commons.wikimedia.org/wiki/File:White_Mountain_Apache_Arizona-105.jpg',
        width: 1600,
        height: 1060,
      },
    ),
    sources: [
      cite(
        'FAO, Silviculture in Natural Forests, basic knowledge (PDF)',
        'https://www.fao.org/sustainable-forest-management/toolbox/modules/silviculture-in-natural-forests/basic-knowledge/en/?type=111',
      ),
    ],
  },
  {
    slug: 'mass-timber',
    image: img(
      'mass-timber.webp',
      'RoterRolf, interior built from cross-laminated timber',
      'CC0 1.0',
      'https://commons.wikimedia.org/wiki/File:Brettsperrholzkonstruktion.jpg',
      {
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
        width: 1600,
        height: 1200,
      },
    ),
    sources: [
      cite(
        'U.S. Department of Agriculture Forest Service, Scaling up mass timber',
        'https://www.fs.usda.gov/about-agency/features/scaling-mass-timber-closing-gaps-fueling-innovation',
      ),
    ],
  },
];

export function isForestEncyclopediaSlug(
  value: string | undefined,
): value is ForestEncyclopediaSlug {
  return !!value && (forestEncyclopediaSlugs as readonly string[]).includes(value);
}

export function forestEncyclopediaPath(slug: ForestEncyclopediaSlug): string {
  return `/solutions/forests/${slug}`;
}

export function forestEncyclopediaImageSrc(image: ImageCredit): string {
  return `/images/solutions/${image.file}`;
}

export function getForestEncyclopediaMeta(
  slug: string,
): ForestEncyclopediaMeta | undefined {
  return forestEncyclopediaMeta.find((item) => item.slug === slug);
}
