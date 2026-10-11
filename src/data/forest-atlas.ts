import { cite, type PrimarySource } from './sources';

/** Forests atlas thematic layers, then the Numbers doorway pages. */
export const forestAtlasMapSlugs = [
  'canopy-height',
  'aboveground-biomass',
  'burned-area',
  'ecological-zones',
  'planted-forests',
  'forest-carbon-stock',
  'tree-cover',
  'peatlands',
] as const;

/** Pages behind the Numbers tiles. Photographs, not map plates. */
export const forestNumberSlugs = [
  'forest-remaining',
  'primary-forest',
  'net-forest-loss',
  'tropical-primary-loss',
  'trees-living',
  'deforestation-since-1990',
  'gross-deforestation',
  'tropical-primary-loss-2024',
  'trees-since-civilization',
  'intact-forest-landscapes',
] as const;

export const forestAtlasSlugs = [...forestAtlasMapSlugs, ...forestNumberSlugs] as const;

export type ForestAtlasSlug = (typeof forestAtlasSlugs)[number];
export type ForestNumberSlug = (typeof forestNumberSlugs)[number];

export type ForestAtlasMeta = {
  slug: ForestAtlasSlug;
  preview: string;
  /** 7200×3600 frame when the layer is drawn from the source data. */
  detail?: string;
  sourceOrg: string;
  /** Grid “Source:” link text. Locale copy may replace this. */
  sourceLabel: string;
  sourceUrl: string;
  sources: PrimarySource[];
  /** Natural Earth coastline under a schematic field. */
  usesCoastline: boolean;
  /** Hosted photograph. Detail art uses object-fit: contain. */
  photo?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  /** Show the whole frame in the card thumbnail (wide photographs). */
  cardContain?: boolean;
};

export const forestAtlasLandCredit =
  'Coastline: Natural Earth 110m land, public domain.';

export const forestAtlasMeta: ForestAtlasMeta[] = [
  {
    slug: 'canopy-height',
    preview: 'canopy-height.jpg',
    detail: 'detail/canopy-height.webp',
    sourceOrg: 'NASA GEDI / ORNL DAAC',
    sourceLabel: 'NASA GEDI L3 / ORNL DAAC',
    sourceUrl:
      'https://www.earthdata.nasa.gov/data/catalog/ornl-cloud-gedi-l3-landsurface-metrics-v2-1952-2',
    usesCoastline: true,
    sources: [
      cite(
        'Earthdata: GEDI L3 Gridded Land Surface Metrics v2',
        'https://www.earthdata.nasa.gov/data/catalog/ornl-cloud-gedi-l3-landsurface-metrics-v2-1952-2',
      ),
      cite('DOI: ORNL DAAC 1952', 'https://doi.org/10.3334/ORNLDAAC/1952'),
      cite(
        'ORNL DAAC: dsviewer 1952',
        'https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1952',
      ),
      cite('GEDI mission hub (UMD)', 'https://gedi.umd.edu/'),
      cite('GEDI data page (UMD)', 'https://gedi.umd.edu/data/'),
      cite(
        'Potapov et al. Nature Ecol Evol 2021 (optional secondary)',
        'https://www.nature.com/articles/s41559-021-01415-1',
      ),
      cite(
        'GLAD: GEDI canopy height (optional secondary)',
        'https://glad.umd.edu/dataset/gedi',
      ),
    ],
  },
  {
    slug: 'aboveground-biomass',
    preview: 'aboveground-biomass.jpg',
    detail: 'detail/aboveground-biomass.webp',
    sourceOrg: 'NASA GEDI / ORNL DAAC',
    sourceLabel: 'NASA GEDI L4B / ORNL DAAC',
    sourceUrl:
      'https://www.earthdata.nasa.gov/data/catalog/ornl-cloud-gedi-l4b-gridded-biomass-v2-1-2299-2.1',
    usesCoastline: true,
    sources: [
      cite(
        'Earthdata: GEDI L4B Gridded Biomass v2.1',
        'https://www.earthdata.nasa.gov/data/catalog/ornl-cloud-gedi-l4b-gridded-biomass-v2-1-2299-2.1',
      ),
      cite('DOI: ORNL DAAC 2299', 'https://doi.org/10.3334/ORNLDAAC/2299'),
      cite(
        'ORNL DAAC: dsviewer 2299',
        'https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=2299',
      ),
      cite(
        'ORNL: GEDI L4B Gridded Biomass user guide',
        'https://daac.ornl.gov/GEDI/guides/GEDI_L4B_Gridded_Biomass.html',
      ),
    ],
  },
  {
    slug: 'burned-area',
    preview: 'burned-area.jpg',
    detail: 'detail/burned-area.webp',
    sourceOrg: 'NASA MODIS MCD64A1',
    sourceLabel: 'MODIS MCD64CMQ',
    sourceUrl: 'https://lpdaac.usgs.gov/products/mcd64a1v061/',
    usesCoastline: true,
    sources: [
      cite(
        'Earthdata: MCD64A1.061 catalog',
        'https://www.earthdata.nasa.gov/data/catalog/lpcloud-mcd64a1-061',
      ),
      cite(
        'LP DAAC: MCD64A1 v061 product',
        'https://lpdaac.usgs.gov/products/mcd64a1v061/',
      ),
      cite(
        'LAADS: MCD64A1 product page',
        'https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/MCD64A1/',
      ),
      cite('FIRMS hub', 'https://firms.modaps.eosdis.nasa.gov/'),
      cite('FIRMS map', 'https://firms.modaps.eosdis.nasa.gov/map/'),
      cite(
        'Earthdata: FIRMS learn page',
        'https://www.earthdata.nasa.gov/learn/find-data/near-real-time/firms',
      ),
      cite('GFED hub (secondary)', 'https://www.globalfiredata.org/'),
      cite('GFED data (secondary)', 'https://www.globalfiredata.org/data.html'),
      cite(
        'Earth Observatory: MOD14A1 fire map (secondary)',
        'https://earthobservatory.nasa.gov/global-maps/MOD14A1_M_FIRE',
      ),
    ],
  },
  {
    slug: 'ecological-zones',
    preview: 'ecological-zones.jpg',
    detail: 'detail/ecological-zones.webp',
    sourceOrg: 'FAO / FRA',
    sourceLabel: 'FAO GEZ 2010',
    sourceUrl: 'https://data.apps.fao.org/catalog/dataset/2fb209d0-fd34-4e5e-a3d8-a13c241eb61b',
    usesCoastline: true,
    sources: [
      cite(
        'FAO data catalog: Global Ecological Zones dataset',
        'https://data.apps.fao.org/catalog/dataset/2fb209d0-fd34-4e5e-a3d8-a13c241eb61b',
      ),
      cite(
        'FAO: GEZ PDF (ap861e00)',
        'https://www.fao.org/4/ap861e/ap861e00.pdf',
      ),
      cite(
        'FAO: GEZ PDF alternate (/3/ap861e)',
        'https://www.fao.org/3/ap861e/ap861e.pdf',
      ),
      cite(
        'Open Knowledge: GEZ handle',
        'https://openknowledge.fao.org/handle/20.500.14283/ap861e',
      ),
      cite(
        'FAO: Forest Resources Assessment hub',
        'https://www.fao.org/forest-resources-assessment/en/',
      ),
    ],
  },
  {
    slug: 'planted-forests',
    preview: 'planted-forests.jpg',
    detail: 'detail/planted-forests.webp',
    sourceOrg: 'Lesiv et al.',
    sourceLabel: 'Lesiv 2022',
    sourceUrl: 'https://www.nature.com/articles/s41597-022-01332-3',
    usesCoastline: true,
    sources: [
      cite(
        'FAO: Global Forest Resources Assessment 2025 (hub)',
        'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
      ),
      cite(
        'FAO: FRA 2025 full PDF (cd6709en)',
        'https://www.fao.org/3/cd6709en/cd6709en.pdf',
      ),
      cite(
        'FAO: FRA 2025 HTML report',
        'https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/cd6709en.html',
      ),
      cite(
        'FAO newsroom: FRA 2025 release (planted 312 Mha)',
        'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
      ),
      cite(
        'Lesiv et al. 2022: Global forest management data (Scientific Data)',
        'https://www.nature.com/articles/s41597-022-01332-3',
      ),
      cite(
        'Zenodo: Lesiv et al. 2022 forest-management raster (CC BY 4.0)',
        'https://zenodo.org/records/5879022',
      ),
      cite(
        'WRI: Spatial Database of Planted Trees (SDPT) PDF (optional secondary)',
        'https://files.wri.org/s3fs-public/spatial-database-planted-trees.pdf',
      ),
    ],
  },
  {
    slug: 'forest-carbon-stock',
    preview: 'forest-carbon-stock.jpg',
    detail: 'detail/forest-carbon-stock.webp',
    sourceOrg: 'FAO FRA',
    sourceLabel: 'FAO FRA 2025',
    sourceUrl: 'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
    usesCoastline: true,
    sources: [
      cite(
        'FAO: Global Forest Resources Assessment 2025 (hub)',
        'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
      ),
      cite(
        'FAO: FRA 2025 full PDF (cd6709en)',
        'https://www.fao.org/3/cd6709en/cd6709en.pdf',
      ),
      cite(
        'FAO: FRA 2025 HTML report',
        'https://openknowledge.fao.org/server/api/core/bitstreams/2dee6e93-1988-4659-aa89-30dd20b43b15/content/cd6709en.html',
      ),
      cite(
        'FAO newsroom: FRA 2025 release (714 Gt C)',
        'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
      ),
      cite(
        'FAO: FRA Platform (country carbon tables)',
        'https://fra-data.fao.org/',
      ),
      cite(
        'FAO: Forest Resources Assessment home',
        'https://www.fao.org/forest-resources-assessment/en/',
      ),
    ],
  },
  {
    slug: 'tree-cover',
    preview: 'tree-cover.jpg',
    detail: 'detail/tree-cover.webp',
    sourceOrg: 'ESA WorldCover',
    sourceLabel: 'ESA WorldCover 2021',
    sourceUrl: 'https://doi.org/10.5281/zenodo.7254221',
    usesCoastline: true,
    sources: [
      cite(
        'Zanaga et al. 2022: ESA WorldCover 10 m 2021 v200 (CC BY 4.0)',
        'https://doi.org/10.5281/zenodo.7254221',
      ),
      cite(
        'ESA WorldCover: data access',
        'https://esa-worldcover.org/en/data-access',
      ),
      cite(
        'ESA WorldCover: Product User Manual v2.0 (PDF)',
        'https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/docs/WorldCover_PUM_V2.0.pdf',
      ),
      cite(
        'AWS Open Data: ESA WorldCover',
        'https://registry.opendata.aws/esa-worldcover/',
      ),
      cite(
        'Earthdata: MOD44B Vegetation Continuous Fields v061 (related dataset)',
        'https://www.earthdata.nasa.gov/data/catalog/lpcloud-mod44b-061',
      ),
    ],
  },
  {
    slug: 'peatlands',
    preview: 'peatlands.jpg',
    detail: 'detail/peatlands.webp',
    sourceOrg: 'Xu et al. / University of Leeds',
    sourceLabel: 'PEATMAP',
    sourceUrl: 'https://doi.org/10.5518/252',
    usesCoastline: true,
    sources: [
      cite(
        'PEATMAP: Xu et al. 2018 (University of Leeds, CC BY 4.0)',
        'https://doi.org/10.5518/252',
      ),
      cite(
        'Xu et al. 2018: Catena (PEATMAP paper)',
        'https://doi.org/10.1016/j.catena.2017.09.010',
      ),
      cite(
        'UNEP: Global Peatlands Assessment 2022',
        'https://www.unep.org/resources/global-peatlands-assessment-2022',
      ),
      cite(
        'UNEP: GPA 2022 full report PDF (wedocs bitstream)',
        'https://wedocs.unep.org/bitstreams/a8e29acd-26e2-4b12-b2a8-2c44a414e5b7/download',
      ),
      cite(
        'UNEP press: peatlands as a climate solution (optional secondary)',
        'https://www.unep.org/news-and-stories/press-release/global-assessment-reveals-huge-potential-peatlands-climate-solution',
      ),
      cite('FAO: Peatlands home', 'https://www.fao.org/peatlands/en/'),
      cite('FAO: Peatlands overview', 'https://www.fao.org/peatlands/overview/en'),
      cite(
        'Greifswald Mire Centre: Global Peatland Database (optional secondary)',
        'https://www.greifswaldmoor.de/global-peatland-database-en.html',
      ),
    ],
  },
  {
    slug: 'forest-remaining',
    preview: 'forest-remaining-preview.jpg',
    photo: true,
    imageWidth: 1280,
    imageHeight: 606,
    sourceOrg: 'Nicholas Thomas, USDA Forest Service Alaska Region',
    sourceLabel:
      'Food and Agriculture Organization of the United Nations, Global Forest Resources Assessment 2025',
    sourceUrl: 'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
    usesCoastline: false,
    sources: [
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025 (assessment page)',
        'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025, main report (2025)',
        'https://www.fao.org/3/cd6709en/cd6709en.pdf',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global deforestation slows, but forests remain under pressure, FAO report shows (21 October 2025)',
        'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment, FRA 2025 Terms and Definitions (2023)',
        'https://openknowledge.fao.org/server/api/core/bitstreams/a6e225da-4a31-4e06-818d-ca3aeadfd635/content',
      ),
      cite(
        'Wikimedia Commons: Old Growth Tongass NRT Photo 12 (photo)',
        'https://commons.wikimedia.org/wiki/File:Old_Growth_Tongass_NRT_Photo_12_(52502991629).jpg',
      ),
    ],
  },
  {
    slug: 'primary-forest',
    preview: 'primary-forest-preview.jpg',
    photo: true,
    imageWidth: 1280,
    imageHeight: 853,
    sourceOrg: 'Bouke ten Cate',
    sourceLabel: 'Global Forest Resources Assessment 2025, primary forests',
    sourceUrl: 'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
    usesCoastline: false,
    sources: [
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025 (assessment page)',
        'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025, main report (2025)',
        'https://www.fao.org/3/cd6709en/cd6709en.pdf',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global deforestation slows, but forests remain under pressure, FAO report shows (21 October 2025)',
        'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment, FRA 2025 Terms and Definitions (2023)',
        'https://openknowledge.fao.org/server/api/core/bitstreams/a6e225da-4a31-4e06-818d-ca3aeadfd635/content',
      ),
      cite(
        'Wikimedia Commons: Old-growth Oak-Linden-Hornbeam forest - Bialowieza forest (photo)',
        'https://commons.wikimedia.org/wiki/File:Old-growth_Oak-Linden-Hornbeam_forest_-_Bialowieza_forest.tif',
      ),
    ],
  },
  {
    slug: 'net-forest-loss',
    preview: 'net-forest-loss-preview.jpg',
    photo: true,
    imageWidth: 1280,
    imageHeight: 893,
    sourceOrg: 'Pedro Biondi, Agência Brasil',
    sourceLabel:
      'Food and Agriculture Organization of the United Nations, news release on the 2025 forest assessment',
    sourceUrl:
      'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
    usesCoastline: false,
    sources: [
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025 (assessment page)',
        'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025, main report (2025)',
        'https://www.fao.org/3/cd6709en/cd6709en.pdf',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global deforestation slows, but forests remain under pressure, FAO report shows (21 October 2025)',
        'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment, FRA 2025 Terms and Definitions (2023)',
        'https://openknowledge.fao.org/server/api/core/bitstreams/a6e225da-4a31-4e06-818d-ca3aeadfd635/content',
      ),
      cite(
        'Wikimedia Commons: Mato Grosso deforestation (Pedro Biondi) 12ago2007 (photo)',
        'https://commons.wikimedia.org/wiki/File:Mato_Grosso_deforestation_(Pedro_Biondi)_12ago2007.jpg',
      ),
    ],
  },
  {
    slug: 'tropical-primary-loss',
    preview: 'tropical-primary-loss-preview.jpg',
    photo: true,
    imageWidth: 1280,
    imageHeight: 854,
    sourceOrg: 'Bruno Kelly, Amazônia Real',
    sourceLabel:
      'World Resources Institute, Global Forest Review analysis of tropical forest loss in 2025',
    sourceUrl: 'https://gfr.wri.org/latest-analysis-deforestation-trends',
    usesCoastline: false,
    sources: [
      cite(
        'World Resources Institute, Global Forest Review: Tropical Rainforest Loss Slowed in 2025, but Fire is a Growing Threat to Forests Worldwide (2026)',
        'https://gfr.wri.org/latest-analysis-deforestation-trends',
      ),
      cite(
        'World Resources Institute: RELEASE: Tropical Rainforest Loss Drops 36% in 2025, but Fires Threaten Global Progress (29 April 2026)',
        'https://www.wri.org/news/release-tropical-rainforest-loss-drops-36-2025-fires-threaten-global-progress',
      ),
      cite(
        'World Resources Institute, Global Forest Review: How much forest was lost in 2024? (2025)',
        'https://gfr.wri.org/global-tree-cover-loss-data-2024',
      ),
      cite(
        'Global Nature Watch: Global Forest Watch’s 2025 Tree Cover Loss Data Explained (2026)',
        'https://www.globalnaturewatch.org/blog/data-and-tools/2025-tree-cover-loss-data-explained/',
      ),
      cite(
        'University of Maryland, Global Land Analysis and Discovery laboratory: Primary Humid Tropical Forests (dataset page)',
        'https://glad.umd.edu/dataset/primary-forest-humid-tropics',
      ),
      cite(
        'Wikimedia Commons: SOBREVVO EM RONDONIA DIA 07-08-2020 (FOTO BRUNO KELLY) (62) (photo)',
        'https://commons.wikimedia.org/wiki/File:SOBREVVO_EM_RONDONIA_DIA_07-08-2020_(FOTO_BRUNO_KELLY)_(62)_(50224604772).jpg',
      ),
    ],
  },
  {
    slug: 'trees-living',
    preview: 'trees-living-preview.jpg',
    photo: true,
    cardContain: true,
    imageWidth: 964,
    imageHeight: 415,
    sourceOrg: 'Phil P Harris',
    sourceLabel: 'Nature, Mapping tree density at a global scale (2015)',
    sourceUrl: 'https://www.nature.com/articles/nature14967',
    usesCoastline: false,
    sources: [
      cite(
        'Nature: Mapping tree density at a global scale, T. W. Crowther and others (2 September 2015)',
        'https://www.nature.com/articles/nature14967',
      ),
      cite(
        'Yale University EliScholar: Global tree density map, dataset (2015)',
        'https://elischolar.library.yale.edu/yale_fes_data/1/',
      ),
      cite(
        'Scientific Data: Spatially-explicit models of global tree density, H. B. Glick and others (16 August 2016)',
        'https://www.nature.com/articles/sdata201669',
      ),
      cite(
        'Wikimedia Commons: Amazon Manaus forest (photo)',
        'https://commons.wikimedia.org/wiki/File:Amazon_Manaus_forest.jpg',
      ),
    ],
  },
  {
    slug: 'deforestation-since-1990',
    preview: 'deforestation-since-1990-preview.jpg',
    photo: true,
    imageWidth: 1280,
    imageHeight: 853,
    sourceOrg: 'Bruno Kelly, Amazônia Real',
    sourceLabel:
      'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025, main report (2025)',
    sourceUrl: 'https://www.fao.org/3/cd6709en/cd6709en.pdf',
    usesCoastline: false,
    sources: [
      cite(
        'Food and Agriculture Organization of the United Nations: Global deforestation slows, but forests remain under pressure, FAO report shows (21 October 2025)',
        'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025, main report (2025)',
        'https://www.fao.org/3/cd6709en/cd6709en.pdf',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025, assessment page (2025)',
        'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
      ),
    ],
  },
  {
    slug: 'gross-deforestation',
    preview: 'gross-deforestation-preview.jpg',
    photo: true,
    imageWidth: 1037,
    imageHeight: 1280,
    sourceOrg: 'National Park Service of the United States',
    sourceLabel:
      'Food and Agriculture Organization of the United Nations: Global deforestation slows, but forests remain under pressure, FAO report shows (21 October 2025)',
    sourceUrl:
      'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
    usesCoastline: false,
    sources: [
      cite(
        'Food and Agriculture Organization of the United Nations: Global deforestation slows, but forests remain under pressure, FAO report shows (21 October 2025)',
        'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025, main report (2025)',
        'https://www.fao.org/3/cd6709en/cd6709en.pdf',
      ),
      cite(
        'Food and Agriculture Organization of the United Nations: Global Forest Resources Assessment 2025, assessment page (2025)',
        'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
      ),
    ],
  },
  {
    slug: 'tropical-primary-loss-2024',
    preview: 'tropical-primary-loss-2024-preview.jpg',
    photo: true,
    imageWidth: 1280,
    imageHeight: 853,
    sourceOrg: 'Biodiego88',
    sourceLabel:
      'World Resources Institute, Global Forest Review: How much forest was lost in 2024? (21 May 2025)',
    sourceUrl: 'https://gfr.wri.org/global-tree-cover-loss-data-2024',
    usesCoastline: false,
    sources: [
      cite(
        'World Resources Institute: RELEASE: Global Forest Loss Shatters Records in 2024, Fueled by Massive Fires (21 May 2025)',
        'https://www.wri.org/news/release-global-forest-loss-shatters-records-2024-fueled-massive-fires',
      ),
      cite(
        'World Resources Institute, Global Forest Review: How much forest was lost in 2024? (21 May 2025)',
        'https://gfr.wri.org/global-tree-cover-loss-data-2024',
      ),
    ],
  },
  {
    slug: 'trees-since-civilization',
    preview: 'trees-since-civilization-preview.jpg',
    photo: true,
    imageWidth: 1280,
    imageHeight: 853,
    sourceOrg: 'Vyacheslav Argenberg',
    sourceLabel:
      'Nature: Mapping tree density at a global scale, T. W. Crowther and others (2 September 2015)',
    sourceUrl: 'https://www.nature.com/articles/nature14967',
    usesCoastline: false,
    sources: [
      cite(
        'Nature: Mapping tree density at a global scale, T. W. Crowther and others (2 September 2015)',
        'https://www.nature.com/articles/nature14967',
      ),
      cite(
        'Scientific Data: Spatially-explicit models of global tree density, H. B. Glick and others (16 August 2016)',
        'https://www.nature.com/articles/sdata201669',
      ),
      cite(
        'Yale University EliScholar: Global tree density map, dataset (2015)',
        'https://elischolar.library.yale.edu/yale_fes_data/1/',
      ),
    ],
  },
  {
    slug: 'intact-forest-landscapes',
    preview: 'intact-forest-landscapes-preview.jpg',
    photo: true,
    imageWidth: 1280,
    imageHeight: 786,
    sourceOrg: 'lubasi',
    sourceLabel:
      'Intact Forest Landscapes mapping team: World’s Intact Forest Landscapes, from 2000 to 2025, key findings (2025)',
    sourceUrl: 'https://intactforests.org/world.map.html',
    usesCoastline: false,
    sources: [
      cite(
        'Intact Forest Landscapes mapping team: World’s Intact Forest Landscapes, from 2000 to 2025, key findings (2025)',
        'https://intactforests.org/world.map.html',
      ),
      cite(
        'Intact Forest Landscapes mapping team: Intact Forest Landscapes concept and definition (2025)',
        'https://intactforests.org/concept.html',
      ),
      cite(
        'Intact Forest Landscapes mapping team: Intact Forest Landscapes data download (2025)',
        'https://intactforests.org/data.ifl.html',
      ),
    ],
  },
];

export const forestAtlasPreviewSrc = (file: string) => `/images/forests/${file}`;

export function isForestAtlas(value: string | undefined): value is ForestAtlasSlug {
  return !!value && (forestAtlasSlugs as readonly string[]).includes(value);
}

export function forestAtlasPath(slug: ForestAtlasSlug): string {
  return `/forests/${slug}`;
}
