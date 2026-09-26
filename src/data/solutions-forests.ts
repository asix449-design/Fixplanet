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
] as const;

export type ForestEncyclopediaSlug = (typeof forestEncyclopediaSlugs)[number];

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
};

export type ForestEncyclopediaCopy = {
  title: string;
  hook: string;
  imageAlt: string;
  what: string[];
  how: string[];
  where: string[];
  limits: string[];
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
): ImageCredit {
  return { file, credit, license, sourceUrl };
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
      'Fix Planet generated documentary still — plantation track and log stack, not a named concession',
      'Site asset',
      '',
    ),
    sources: [
      cite(
        'FAO — Sustainable forest management overview',
        'https://www.fao.org/forestry/sfm/overview/',
      ),
      cite(
        'FAO — Management of planted forests',
        'https://www.fao.org/sustainable-forest-management-toolbox/modules/management-of-planted-forests/en/',
      ),
      cite(
        'FAO — Global Forest Resources Assessment 2020 (PDF)',
        'https://www.fao.org/3/ca9825en/ca9825en.pdf',
      ),
      cite('FAO — Planted forests', 'https://www.fao.org/4/x6896e/x6896e0e.htm'),
      cite(
        'USDA Forest Service — Forest Inventory and Analysis',
        'https://research.fs.usda.gov/programs/fia',
      ),
    ],
  },
  {
    slug: 'assisted-natural-regeneration',
    image: img(
      'assisted-natural-regeneration.jpg',
      'Davidbena — Faidherbia albida in the Elah valley',
      'CC0',
      'https://commons.wikimedia.org/wiki/File:Faidherbia_albida_(Elah_valley).jpg',
    ),
    sources: [
      cite(
        'FAO — Assisted natural regeneration of forests (PDF)',
        'https://www.fao.org/3/ca4191en/CA4191EN.pdf',
      ),
      cite(
        'Chomba et al., Frontiers in Forests and Global Change 2020 — FMNR review',
        'https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2020.571679/full',
      ),
      cite(
        'Regreening Africa — Farmer-managed natural regeneration',
        'https://regreeningafrica.org/approach/farmer-managed-natural-regeneration/',
      ),
    ],
  },
  {
    slug: 'fire-smart-forestry',
    image: img(
      'fire-smart-forestry.jpg',
      'Forest Service Northern Region — prescribed fire, Lake Como, Bitterroot National Forest',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Conducting_Prescribed_Fire,_Lake_Como,_Darby_Sula_R.D._Bitterroot_N.F.jpg',
    ),
    sources: [
      cite('NWCG — PMS 484', 'https://www.nwcg.gov/publications/pms484'),
      cite(
        'NWCG — Interagency Prescribed Fire Planning and Implementation Procedures Guide, PMS 484 (PDF)',
        'https://fs-prod-nwcg.s3.us-gov-west-1.amazonaws.com/s3fs-public/publication/pms484.pdf',
      ),
      cite(
        'USDA Forest Service — GTR-292, restoring composition and structure in dry mixed-conifer forests (PDF)',
        'https://www.fs.usda.gov/rm/pubs/rmrs_gtr292.pdf',
      ),
    ],
  },
  {
    slug: 'shade-agroforestry',
    image: img(
      'shade-agroforestry.jpg',
      'John Blake — canopy of a traditional shade coffee plantation in Guatemala',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Canopy_of_a_traditional_shade_coffee_plantation_in_Guatemala.jpg',
    ),
    sources: [
      cite(
        'Smithsonian National Zoo — Bird Friendly coffee',
        'https://nationalzoo.si.edu/migratory-birds/bird-friendly-coffee',
      ),
      cite(
        'Smithsonian Bird Friendly — norms (PDF)',
        'https://nationalzoo.si.edu/sites/default/files/documents/bf_norms_english_accessible.pdf',
      ),
      cite(
        'Smithsonian — Bird Friendly celebrates 25 years',
        'https://www.nationalzoo.si.edu/conservation/news/smithsonian-bird-friendlyr-celebrates-25-years',
      ),
    ],
  },
  {
    slug: 'agroforestry',
    image: img(
      'agroforestry.jpg',
      'Savannainstitute — alley cropping beside the Wisconsin River, Savanna Institute farm, 2024',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Agroforestry_alley_cropping_%26_Wisconsin_River,_Savanna_Institute_farm_2024.jpg',
    ),
    sources: [
      cite(
        'FAO — Agroforestry overview',
        'https://www.fao.org/agroforestry/about-agroforestry/overview/en',
      ),
      cite(
        'FAO — Agroforestry FAQs',
        'https://www.fao.org/agroforestry/about-agroforestry/faqs/en',
      ),
      cite(
        'FAO — The Amazonian Chakra, Napo Province, Ecuador',
        'https://www.fao.org/agroforestry/activities/faos-work/article-detail/the-amazonian-chakra--a-traditional-agroforestry-system-managed-by-indigenous-communities-in-napo-province--ecuador/en',
      ),
      cite(
        'FAO SFM toolbox — Agroforestry',
        'https://www.fao.org/sustainable-forest-management-toolbox/modules/agroforestry/2/en?tabInx=0',
      ),
    ],
  },
  {
    slug: 'windbreaks',
    image: img(
      'windbreaks.jpg',
      'Savannainstitute — young three-row windbreak in an Illinois field',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Young_three-row_windbreak_in_an_Illinois_field.jpg',
    ),
    sources: [
      cite(
        'USDA National Agroforestry Center — Windbreaks',
        'https://research.fs.usda.gov/centers/nac/windbreaks',
      ),
      cite(
        'USDA NAC — Agroforestry Notes 25: Windbreaks (PDF)',
        'https://www.fs.usda.gov/nac/assets/documents/agroforestrynotes/an25w01.pdf',
      ),
      cite(
        'USDA NAC — Agroforestry Notes 36: Windbreaks (PDF)',
        'https://www.fs.usda.gov/nac/assets/documents/agroforestrynotes/an36w03.pdf',
      ),
    ],
  },
  {
    slug: 'reduced-impact-logging',
    image: img(
      'reduced-impact-logging.jpg',
      'CEphoto, Uwe Aranas — logging camp, Tawau District, Sabah',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:District-Tawau_Sabah_Logging-Camp-04.jpg',
    ),
    sources: [
      cite(
        'FAO — Jonkers, reduced-impact logging in Sarawak, Guyana and Cameroon',
        'https://www.fao.org/4/ac805e/ac805e0n.htm',
      ),
      cite(
        'FAO — Dykstra, reduced-impact logging: concepts and issues',
        'https://www.fao.org/4/ac805e/ac805e04.htm',
      ),
    ],
  },
  {
    slug: 'riparian-forest-restoration',
    image: img(
      'riparian-forest-restoration.jpg',
      'USDA — riparian buffer on Bear Creek, Story County, Iowa',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Riparian_buffer_on_Bear_Creek_in_Story_County,_Iowa.JPG',
    ),
    sources: [
      cite(
        'USDA Climate Hubs — Maintain or restore forest and vegetative cover in riparian areas',
        'https://www.climatehubs.usda.gov/approach/maintain-or-restore-forest-and-vegetative-cover-riparian-areas',
      ),
      cite(
        'USDA Climate Hubs — Maintain or restore riparian areas',
        'https://www.climatehubs.usda.gov/approach/maintain-or-restore-riparian-areas-0',
      ),
      cite(
        'USDA Forest Service — Riparian restoration handbook (PDF)',
        'https://www.fs.usda.gov/t-d/pubs/pdf/riparian_restoration/lo_res/04231201L.pdf',
      ),
    ],
  },
  {
    slug: 'community-forestry',
    image: img(
      'community-forestry.jpg',
      'Shadow Ayush — Badikhel community forest, Lalitpur',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Badikhel_community_forest,_Lalitpur.jpg',
    ),
    sources: [
      cite(
        'Nepal Forest Act, 1993 (FAOLEX PDF)',
        'https://faolex.fao.org/docs/pdf/nep4527.pdf',
      ),
      cite(
        'FAO / FECOFUN — community-based forest management in Nepal (2025)',
        'https://www.fao.org/nepal/news/detail/fao-and-fecofun-strengthen-collaboration-for-community-based-forest-management-and-climate-resilience/en',
      ),
      cite(
        'FAO — Community forestry',
        'https://www.fao.org/4/XII/0321-C1.htm',
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
