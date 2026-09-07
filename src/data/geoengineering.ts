import type { HubIconName } from './hub';

export const geoShelfKeys = ['water', 'desert', 'climate'] as const;

export type GeoShelf = (typeof geoShelfKeys)[number];

export const geoHub = [
  { key: 'water', icon: 'droplet' },
  { key: 'desert', icon: 'trees' },
  { key: 'climate', icon: 'wave' },
] as const satisfies ReadonlyArray<{ key: GeoShelf; icon: HubIconName }>;

export const geoStatusKeys = [
  'proposed',
  'partial',
  'built-struggling',
  'failed',
  'ongoing',
  'research',
] as const;

export type GeoStatus = (typeof geoStatusKeys)[number];

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
};

export type GeoSource = {
  label: string;
  url: string;
};

export type GeoMeta = {
  slug: string;
  shelf: GeoShelf;
  status: GeoStatus;
  years: string;
  image: ImageCredit;
  sources: GeoSource[];
};

export type GeoCopy = {
  title: string;
  hook: string;
  imageAlt: string;
  jurisdiction: string;
  yearStatus: string;
  plan: string;
  construction: string;
  outcome: string;
  lessons: string;
  sourcesNote: string;
};

export type GeoProject = GeoMeta & GeoCopy;

function img(
  file: string,
  credit: string,
  license: string,
  sourceUrl: string,
): ImageCredit {
  return { file, credit, license, sourceUrl };
}

/**
 * Curated first Geoengineering catalog. To add a project:
 * 1. Add a row here (English slug, shelf, status, years, image credit, source URLs).
 * 2. Add the same slug to en / ru / pl / lv in `src/i18n/geoengineering-en.ts`
 *    (and the locale files beside it).
 * 3. Drop a licensed image in `public/images/geoengineering/{file}` and record `credits.json`.
 * 4. `npm run build`.
 *
 * Slugs stay English in every language. Do not invent hectare counts, collapse dates,
 * or “all the trees died on DATE.” Prefer “partial success with costs” when evidence is mixed.
 * Climate-intervention cards stay on the climate shelf and must read as research/proposal,
 * not as a ready planetary fix.
 */
export const geoMeta: GeoMeta[] = [
  {
    slug: 'bradfield-scheme',
    shelf: 'water',
    status: 'proposed',
    years: '1938–',
    image: img(
      'bradfield-scheme.jpg',
      'Dicklyon',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Burdekin_River_aerial.jpg',
    ),
    sources: [
      {
        label: 'CSIRO — The Bradfield Scheme Assessment',
        url: 'https://www.csiro.au/en/research/natural-environment/water/water-resource-assessment/the-bradfield-scheme-assessment',
      },
      {
        label: 'CSIRO (2021) — Historic Bradfield scheme summary',
        url: 'https://www.csiro.au/-/media/LWF/Images/Bradfield/20-00418_LW_REPORT_BradfieldSchemeSummary_Historic_WEB_210521_FINAL.pdf',
      },
      {
        label: 'ABC News (2019) — Why Bradfield has been rejected',
        url: 'https://www.abc.net.au/news/2019-06-18/fact-file-bradfield-scheme-drought-relief/11216616',
      },
    ],
  },
  {
    slug: 'toshka-new-valley',
    shelf: 'water',
    status: 'partial',
    years: '1997–',
    image: img(
      'toshka-new-valley.jpg',
      'NASA Johnson Space Center (ISS072-E-574769)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Toshka_Lakes_(iss072e574769).jpg',
    ),
    sources: [
      {
        label: 'Ahram Online (2021) — Toshka revival; original 540,000 feddans; stop 2008',
        url: 'https://english.ahram.org.eg/NewsContent/1/1235/452144/Egypt/Urban--Transport/President-Sisi-inaugurates-land-reclamation-projec.aspx',
      },
      {
        label: 'Water (2023) — Toshka groundwater model and drawdown limits',
        url: 'https://doi.org/10.3390/w15122183',
      },
      {
        label: 'Sultan et al. (2023) — GRACE groundwater depletion over Egypt',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10119068/',
      },
    ],
  },
  {
    slug: 'great-man-made-river',
    shelf: 'water',
    status: 'built-struggling',
    years: '1983–',
    image: img(
      'great-man-made-river.jpg',
      'Victor Korniyenko',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Great_Manmade_River._Libya.jpg',
    ),
    sources: [
      {
        label: 'UNDP (2026) — National Water Security Strategy for Libya',
        url: 'https://www.undp.org/sites/g/files/zskgke326/files/2026-04/undp-ly-national-water-security-2026.pdf',
      },
      {
        label: 'IGRAC — Nubian Sandstone Aquifer System',
        url: 'https://www.un-igrac.org/special-project/nsas',
      },
      {
        label: 'FAO AQUASTAT — country water profiles',
        url: 'https://www.fao.org/aquastat/en/countries-and-basins/country-profiles',
      },
    ],
  },
  {
    slug: 'aral-sea-diversion',
    shelf: 'water',
    status: 'failed',
    years: '1960s–',
    image: img(
      'aral-sea-diversion.jpg',
      'NASA Earth Observatory',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:AralSea1989_2014.jpg',
    ),
    sources: [
      {
        label: 'NASA Earth Observatory — World of Change: Shrinking Aral Sea',
        url: 'https://earthobservatory.nasa.gov/world-of-change/AralSea',
      },
      {
        label: 'World Bank — Syr Darya Control and Northern Aral Sea Project',
        url: 'https://projects.worldbank.org/en/projects-operations/project-detail/P046045',
      },
      {
        label: 'The Diplomat (2026) — North Aral recovery and southern dust',
        url: 'https://thediplomat.com/2026/04/why-the-aral-seas-restoration-matters-beyond-central-asia/',
      },
    ],
  },
  {
    slug: 'qattara-depression',
    shelf: 'water',
    status: 'proposed',
    years: '1916–2026',
    image: img(
      'qattara-depression.jpg',
      'cheesy42',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Qattara_Depression_(March_2007).jpg',
    ),
    sources: [
      {
        label: 'Ahram Online (2026) — Egypt scraps Qattara seawater scheme',
        url: 'https://english.ahram.org.eg/NewsContent/1/1235/567838/Egypt/Urban--Transport/Egypt-deems-Qattara-Depression-seawater-unfeasible.aspx',
      },
      {
        label: 'Nature (1975) — After the dam the depression?',
        url: 'https://doi.org/10.1038/255570a0',
      },
    ],
  },
  {
    slug: 'south-north-water-transfer',
    shelf: 'water',
    status: 'ongoing',
    years: '2002–',
    image: img(
      'south-north-water-transfer.jpg',
      'Windmemories',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:20230331_Central_Line_of_South%E2%80%93North_Water_Transfer_in_Jiaozuo.jpg',
    ),
    sources: [
      {
        label: 'Zhang (2016) — Engineering review of SNWDP routes and start dates',
        url: 'https://doi.org/10.1016/J.ENG.2016.03.022',
      },
      {
        label: 'Water (2025) — Review: costs, displacement, western route unbuilt',
        url: 'https://www.mdpi.com/2073-4441/17/22/3275',
      },
      {
        label: 'China Daily (2023) — Western route still planning',
        url: 'https://www.chinadaily.com.cn/a/202309/12/WS64fff7fea310d2dce4bb54f9.html',
      },
    ],
  },
  {
    slug: 'siberian-river-reversal',
    shelf: 'water',
    status: 'proposed',
    years: '1949–1986',
    image: img(
      'siberian-river-reversal.jpg',
      'Summ',
      'CC BY-SA 2.5',
      'https://commons.wikimedia.org/wiki/File:River_Ob.jpg',
    ),
    sources: [
      {
        label: 'UPI (15 Aug 1986) — Soviets scrap river diversion project',
        url: 'https://www.upi.com/Archives/1986/08/15/Soviets-scrap-river-diversion-project/7500524462400/',
      },
      {
        label: 'Ward (2013) — Birth, death, and rebirth of Sibaral',
        url: 'https://src-h.slav.hokudai.ac.jp/jcrees/2013Osaka/61Ward.pdf',
      },
      {
        label: 'Davydov (1949/1972 translation) — Yenisey–Ob–Aral–Caspian scheme',
        url: 'https://doi.org/10.1080/00385417.1972.10770368',
      },
    ],
  },
  {
    slug: 'jonglei-canal',
    shelf: 'water',
    status: 'failed',
    years: '1978–1984',
    image: img(
      'jonglei-canal.jpg',
      'Karen Conniff / CGIAR Challenge Program on Water and Food',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Fishing_in_Sudd_wetland_-_by_CPWF_Basin_Focal_Project.jpg',
    ),
    sources: [
      {
        label: 'AP (2022) — Opposition to a Jonglei revival; incomplete canal',
        url: 'https://apnews.com/article/climate-floods-sudan-environment-wetlands-f1a327f23d51bb0b8abe0671ddd5f82e',
      },
      {
        label: 'NASA Earth Observatory — The Sudd Swamp',
        url: 'https://earthobservatory.nasa.gov/images/7739/the-sudd-swamp',
      },
      {
        label: 'Howell, Lock & Cobb, eds. (1988) — The Jonglei Canal (Cambridge)',
        url: 'https://doi.org/10.1017/CBO9780511753022',
      },
    ],
  },
  {
    slug: 'three-north-shelterbelt',
    shelf: 'desert',
    status: 'ongoing',
    years: '1978–2050',
    image: img(
      'three-north-shelterbelt.jpg',
      'FreyGruppe',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Reforestaci%C3%B3n_del_desierto_de_Kubuqi,_China.jpg',
    ),
    sources: [
      {
        label: 'Turner et al. (2023) — Great Green Walls: Hype, Myth, and Science',
        url: 'https://doi.org/10.1146/annurev-environ-112321-111102',
      },
      {
        label: 'Zheng et al. (2024) — Three-North Protective Forest Program 1978–2022',
        url: 'https://doi.org/10.1007/s11427-024-2705-4',
      },
      {
        label: 'Sun et al. (2018) — Drought and Populus simonii dieback in TNSF belts',
        url: 'https://doi.org/10.3390/f9090564',
      },
    ],
  },
  {
    slug: 'africa-great-green-wall',
    shelf: 'desert',
    status: 'partial',
    years: '2007–',
    image: img(
      'africa-great-green-wall.jpg',
      'European Space Agency',
      'CC BY-SA 3.0 IGO',
      'https://commons.wikimedia.org/wiki/File:Desert_greenery_ESA19443666.jpeg',
    ),
    sources: [
      {
        label: 'UNCCD (2020) — The Great Green Wall Implementation Status and Trend',
        url: 'https://www.unccd.int/resources/publications/great-green-wall-implementation-status-and-way-ahead-2030',
      },
      {
        label: 'Reuters (12 Jun 2024) — GGW unlikely to meet 2030 goal; ~30 million ha',
        url: 'https://www.reuters.com/business/environment/africas-great-green-wall-miss-2030-goal-says-un-desertification-president-2024-06-12/',
      },
      {
        label: 'African Union / UNCCD — Great Green Wall initiative',
        url: 'https://www.unccd.int/our-work/ggwi',
      },
    ],
  },
  {
    slug: 'saudi-green-initiative',
    shelf: 'desert',
    status: 'ongoing',
    years: '2021–',
    image: img(
      'saudi-green-initiative.jpg',
      'O.V.E.R.V.I.E.W. (Flickr)',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Center_Pivot_Irrigation_Fields,_Saudi_Arabia_(33871937633).jpg',
    ),
    sources: [
      {
        label: 'Saudi Green Initiative — official programme page',
        url: 'https://www.sgi.gov.sa/',
      },
      {
        label: 'SPA / MEWA (2026) — official 1 million ha / 159 million trees claim',
        url: 'https://www.mewa.gov.sa/en/MediaCenter/News/Pages/News14482020.aspx',
      },
      {
        label: 'KAPSARC — water–energy nexus in Saudi agriculture (groundwater history)',
        url: 'https://www.kapsarc.org/research/publications/the-water-energy-nexus-in-the-saudi-agriculture/',
      },
      {
        label: 'FAO AQUASTAT — country water profiles (non-renewable groundwater context)',
        url: 'https://www.fao.org/aquastat/en/countries-and-basins/country-profiles',
      },
    ],
  },
  {
    slug: 'stratospheric-aerosol-injection',
    shelf: 'climate',
    status: 'research',
    years: '1990s–',
    image: img(
      'stratospheric-aerosol-injection.jpg',
      'Dave Harlow, USGS',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Pinatubo91eruption_plume.jpg',
    ),
    sources: [
      {
        label: 'IPCC AR6 WG I — Solar Radiation Modification (Ch. 4 / Cross-Chapter Box)',
        url: 'https://www.ipcc.ch/report/ar6/wg1/',
      },
      {
        label: 'Harvard SCoPEx — project terminated (March 2024)',
        url: 'https://geoengineering.environment.harvard.edu/scopex-announcement',
      },
      {
        label: 'MIT Technology Review (2024) — Harvard halted SCoPEx',
        url: 'https://www.technologyreview.com/2024/03/18/1089879/harvard-halts-its-long-planned-atmospheric-geoengineering-experiment/',
      },
    ],
  },
  {
    slug: 'ocean-fertilization',
    shelf: 'climate',
    status: 'research',
    years: '1993–',
    image: img(
      'ocean-fertilization.jpg',
      'NASA',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:NASA_satellite_view_of_Southern_Ocean_phytoplankton_bloom.jpg',
    ),
    sources: [
      {
        label: 'IMO — Ocean fertilization under the London Convention/Protocol',
        url: 'https://www.imo.org/en/ourwork/environment/pages/oceanfertilization-default.aspx',
      },
      {
        label: 'Martin et al. / IronEx and Southern Ocean iron experiments (reviews)',
        url: 'https://doi.org/10.1038/35037500',
      },
      {
        label: 'Martin et al. (2013) — LOHAFEX: production rose, export flux did not',
        url: 'https://doi.org/10.1002/gbc.20077',
      },
      {
        label: 'London Convention / Protocol parties (2012) — concern over the Haida dump',
        url: 'https://www.imo.org/en/ourwork/environment/pages/oceanfertilization-default.aspx',
      },
    ],
  },
  {
    slug: 'marine-cloud-brightening',
    shelf: 'climate',
    status: 'research',
    years: '1990–',
    image: img(
      'marine-cloud-brightening.jpg',
      'MODIS Land Rapid Response Team, NASA GSFC',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Ship_Tracks_over_the_Pacific_(MODIS_2024-04-03).jpg',
    ),
    sources: [
      {
        label: 'Latham et al. (2012) — Marine cloud brightening review',
        url: 'https://doi.org/10.1098/rsta.2012.0086',
      },
      {
        label: 'University of Washington — Marine Cloud Brightening Research Program',
        url: 'https://atmos.uw.edu/faculty-and-research/marine-cloud-brightening-program/',
      },
      {
        label: 'RRAP / Southern Cross University — reef MCB field campaigns',
        url: 'https://gbrrestoration.org/program/cooling-and-shading/',
      },
    ],
  },
];

export function isGeoShelf(value: string | undefined): value is GeoShelf {
  return !!value && (geoShelfKeys as readonly string[]).includes(value);
}

export function getGeoMeta(slug: string): GeoMeta | undefined {
  return geoMeta.find((item) => item.slug === slug);
}

export function geoImageSrc(image: ImageCredit): string {
  return `/images/geoengineering/${image.file}`;
}

export function geoShelfPath(shelf: GeoShelf | 'all'): string {
  return shelf === 'all' ? '/geoengineering' : `/geoengineering/${shelf}`;
}

export function geoDetailPath(slug: string): string {
  return `/geoengineering/${slug}`;
}

export const geoSectionImage = {
  file: 'geoengineering-section-bg.jpg',
  credit:
    'NASA Johnson Space Center Earth Science and Image Analysis Laboratory — Toshka Lakes, southern Egypt (STS-103)',
  license: 'Public domain',
  sourceUrl:
    'https://commons.wikimedia.org/wiki/File:Toshka_Lakes,_Southern_Egypt_(1008_-_sts103-712-7_lrg).jpg',
} as const;

export const geoSectionSrc = `/images/geoengineering/${geoSectionImage.file}`;
