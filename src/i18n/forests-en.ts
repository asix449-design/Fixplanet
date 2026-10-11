import type { ForestsPage } from './forests';

export const en: ForestsPage = {
  metaTitle: 'Forests · Fix Planet',
  metaDescription:
    'Forests: what they are, how satellites see the canopy, reconstructions of older landscapes, and published figures from FAO and Global Forest Watch.',
  eyebrow: 'Earth’s forests',
  title: 'Forests',
  hubLead: [
    'A forest is an ecosystem dominated by trees. FAO treats forest as a land-use class: about 4.14 billion hectares, roughly a third of the world’s land.',
    'Forests store carbon, cycle water, and hold most terrestrial species. The shelves below show canopy greenness from space, a few reconstructions of older landscapes, and three paths ahead. Each map has a named dataset and a date.',
  ],
  choosePanel: 'Choose a shelf',
  heroNote:
    'Sourced figures for forest area, primary forest, planted forest, carbon, net loss, tropical primary loss, and the number of trees.',
  heroSources: 'Sources and definitions',
  filterAria: 'Forests sections',
  back: 'Forests',
  tiles: {
    satellite: 'July canopy greenness from space, 2001–2025.',
    history: 'Ice-age vegetation, biomes, and land after people.',
    numbers: 'Definitions, sources, and the rest of the published set.',
    outlook: 'The long view, the years we can measure, and three possible paths.',
  },
  panels: {
    satellite: 'Satellite era',
    history: 'Reconstructions',
    numbers: 'Numbers',
    outlook: 'Trend and futures',
  },
  leads: {
    satellite: [
      'The forest canopy is the closed layer of leaves and needles. Satellites do not count FAO hectares; they measure how green the surface is. NDVI is that greenness, derived from reflected light.',
      'On a world map the tropical and boreal belts stand out. A single year of clearing is almost invisible at this scale. Tree-cover loss at about 30 metres is on Global Forest Watch.',
      'The maps are NASA MODIS Terra NDVI for July, 2001–2025.',
    ],
    history: [
      'Before the satellite era, forest extent is reconstructed: pollen, climate models, and maps of how people used land. There is no continuous hectare census from 10,000 BCE.',
      'Five plates: vegetation at the last glacial maximum, a map of biomes under a recent climate, and Ellis anthromes — human-shaped biomes — for 1700, 1900, and 2000.',
    ],
    numbers: [
      'Published figures, each with a named source and year. The Food and Agriculture Organization of the United Nations reports forest as land use. The University of Maryland laboratory and Global Forest Watch map canopy at about 30 metres. Intact forest landscapes are a mapped class of large forest patches. A 2015 paper in Nature estimates the number of trees. Each figure keeps the definition used by its publisher.',
    ],
    outlook: [
      'Wild woodland has shrunk over the Holocene as cropland, pasture, and settlements grew. After 2000 the satellite record is tighter. Tropical primary conversion is not the same as boreal fire, and neither is a calendar date when “the forests end.”',
    ],
  },
  honestySatellite:
    'NASA MODIS Terra NDVI, July. Canopy greenness, not Hansen tree-cover-loss pixels. Live 30 m explorer: Global Forest Watch.',
  honestyReconstruction:
    'Reconstructions and estimates, not satellite canopy. Pollen, models, and anthromes — each plate has its own legend.',
  modeSatellite: 'Satellite',
  modeReconstruction: 'Reconstruction',
  fidelitySatellite: 'Satellite · canopy greenness',
  fidelityReconstruction: 'Reconstruction / estimate',
  scrubberAria: 'Forest map year',
  yearLabel: 'Year',
  eraLabel: 'Era',
  openGfw: 'Open Global Forest Watch →',
  gfwNote:
    'Hansen / University of Maryland GLAD tree-cover loss, about 30 m, 2001–present, on Global Forest Watch. Loss includes fire, forestry, and conversion — not only permanent deforestation.',
  sourceLabel: 'Source',
  licenseLabel: 'License',
  vintageLabel: 'Vintage',
  howToRead:
    'Green is more vegetation in July. Black is water. Tan is dry or bare. Compare belts — Amazon, Congo, Sundaland, boreal — not a single pixel. Reconstruction plates use their own legends: anthromes are classes of people and land use, not “percent trees.”',
  caveats:
    'NDVI is not forest area and not primary forest. Crops and wet years also look green. July favors the northern summer, so year-to-year change at this resolution is small. The last glacial maximum is about 18,000 years ago, older and colder than 10,000 BCE. The biome plate is a recent-climate analogue; the mid-Holocene Sahara was often greener than it shows.',
  distinguishTitle: 'Boreal forest, tropical forest, and planted forest',
  distinguish:
    'About 45 percent of reported forest is tropical. The rest is mostly boreal and temperate, in the 2025 assessment. Boreal loss is often fire, insects, or logging, and the land can return to forest in the land-use sense. Tropical primary loss is usually conversion: a soy field or an oil-palm stand takes the place of the old forest. Secondary forest and plantations can raise the forest-area total while primary area falls. Planted forest is 312 million hectares, 8 percent of the total, alongside 1.18 billion hectares of primary forest. Net loss of 4.12 million hectares a year from 2015 to 2025 is deforestation of 10.9 million hectares a year minus expansion. Intact forest landscapes cover 1,086 million hectares in 2025, on their own map. Tropical primary loss was 6.7 million hectares in 2024 and 4.3 million hectares in 2025, on the Global Forest Watch record.',
  numbersNote:
    'Each figure is copied from the cited publication, with that publication year. Forest area, canopy, and tree counts come from their own publishers.',
  trendTitle: 'Long view, then the years we can measure',
  trendLead:
    'The Ellis 12K chart reconstructs anthromes — wild, cultured, and intensive land — from 10,000 BCE to 2017. It is not FAO hectares. After 2000 the satellite figures are tighter.',
  longViewCaption:
    'Erle Ellis, Anthromes 12K DGG v1, after Ellis et al. 2021, PNAS. CC BY 2.0. Map face is ~2017; the stacked strip is the long reconstruction. Wild woodland shrinks; cropland, rangeland, and settlements grow. Coarse on purpose.',
  longViewAlt:
    'World anthrome map for 2017 above a stacked timeline of wild, cultured, and intensive land from 10,000 BCE to 2017',
  scenarioTitle: 'Paths, not fate',
  scenarioLead:
    'If the recent rate of tropical primary loss continues, that forest keeps shrinking. A quieter fire year or a real moratorium can bend the line the other way — 2025 already did, once. Neither path is a date when forest disappears.',
  scenarios: {
    continued: {
      title: 'If the recent tropical-primary band holds',
      text: 'UMD/GFW humid-tropical primary loss was 6.7 million ha in 2024 (a fire-heavy record) and 4.3 million ha in 2025 (36 percent lower, still about 46 percent above a decade earlier). If a 4–7 million ha/year band persists, remaining primary humid tropics keep shrinking. Remaining primary area is not a single published GFW stock on this page; boreal FAO forest is a different ledger.',
    },
    slower: {
      title: 'If policy and fire management hold',
      text: 'FRA 2025 already shows slower net loss than the 1990s (4.12 vs 10.7 million ha/year). Brazil’s 2025 share of the tropical-primary drop is the usual reminder that enforcement and commodity rules can move a global total in one year. The same WRI note says fire is a new normal — a lull is not a lock.',
    },
    restore: {
      title: 'If restoration is real forest, not a pledge',
      text: 'FAO forest expansion (6.78 million ha/year, 2015–2025) already offsets part of deforestation. Plantations and young secondary stands can grow that number without restoring primary structure or species. A better path is less conversion plus restoration that is measured as ecosystem, not as a press-release hectare.',
    },
  },
  worksTitle: 'What has moved the line',
  worksLead:
    'Loss is not only weather. Commodity rules, fire enforcement, tenure, and parks have shifted the totals in named years.',
  works: {
    soy: {
      title: 'Amazon soy moratorium',
      text: 'After 2006, soy-linked clearing in the Brazilian Amazon fell sharply in the peer-reviewed record (Gibbs et al. 2015, Science). Leakage into the Cerrado is the honest caveat. Rules on who buys the crop changed the frontier. They can be undone.',
    },
    indonesia: {
      title: 'Indonesia forest and peat rules',
      text: 'Primary-forest and peat moratoria, plus fire enforcement after 2015, show up in GFW year notes as years when Indonesia’s loss cooled. El Niño and plantation demand can heat it again. Policy is a switch, not a vaccine.',
    },
    indigenous: {
      title: 'Indigenous and local territories',
      text: 'Across several tropical basins, titled Indigenous lands often show lower conversion than nearby undesignated forest in GFW/WRI compilations. That is governance and presence, not a romantic “untouched” myth. Tenure still needs defending.',
    },
    protected: {
      title: 'Protected forest (FAO)',
      text: 'FRA 2025: about 813 million ha of forest — 20 percent — sits in legally established protected areas (+251 million ha since 1990). Paper parks exist. So do parks that hold. Protection is one tool next to commodity rules and fire crews.',
    },
  },
  mapsLink: 'The Maps room also keeps a Hansen / Global Forest Watch schematic of well-known loss frontiers.',
  mapsLinkCta: 'Open the forest-cover-loss card →',
  units: {
    billionHa: 'billion hectares',
    millionHa: 'million hectares',
    millionHaYear: 'million hectares a year',
    percent: 'percent',
    ofLand: 'percent of land',
    gigatonnesC: 'gigatonnes of carbon',
    trillionTrees: 'trillion trees',
  },
  numberSources: [
    {
      label:
        'Food and Agriculture Organization of the United Nations, Global Forest Resources Assessment 2025',
      url: 'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
    },
    {
      label:
        'Food and Agriculture Organization of the United Nations, news release on the 2025 forest assessment',
      url: 'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
    },
    {
      label: 'Hansen and colleagues, High-resolution global maps of 21st-century forest cover change (2013)',
      url: 'https://doi.org/10.1126/science.1244693',
    },
    {
      label: 'World Resources Institute, Global Forest Review, forest loss in 2024',
      url: 'https://gfr.wri.org/global-tree-cover-loss-data-2024',
    },
    {
      label: 'World Resources Institute, Global Forest Review, tropical forest loss in 2025',
      url: 'https://gfr.wri.org/latest-analysis-deforestation-trends',
    },
    {
      label: 'Nature, Mapping tree density at a global scale (2015)',
      url: 'https://www.nature.com/articles/nature14967',
    },
    {
      label: 'Intact forest landscapes mapping team, 2025',
      url: 'https://doi.org/10.5281/zenodo.18011599',
    },
  ],
  frames: {
    'sat-2001': {
      label: '2001',
      title: 'July 2001 canopy greenness',
      caption:
        'First full northern-summer MODIS Terra NDVI month on this page. Green belts are vegetation, not a forest-area census. Hansen/UMD annual loss starts in 2001 — those pixels are on Global Forest Watch.',
      imageAlt:
        'Equirectangular world map, July 2001: green vegetation on black oceans, tan deserts',
    },
    'sat-2005': {
      label: '2005',
      title: 'July 2005 canopy greenness',
      caption:
        'Same NASA layer, four years on. Global NDVI at this resolution will not show a year’s Amazon arc. It does show the standing tropical and boreal belts.',
      imageAlt:
        'Equirectangular world map, July 2005: green vegetation on black oceans, tan deserts',
    },
    'sat-2010': {
      label: '2010',
      title: 'July 2010 canopy greenness',
      caption:
        '2010 included a severe Amazon drought in the climate record. A global July plate is still a greenness snapshot, not a drought atlas.',
      imageAlt:
        'Equirectangular world map, July 2010: green vegetation on black oceans, tan deserts',
    },
    'sat-2015': {
      label: '2015',
      title: 'July 2015 canopy greenness',
      caption:
        'Mid-2010s satellite era. FAO FRA 2025 later puts 2015–2025 net forest-area loss at 4.12 million ha/year — a different, land-use number.',
      imageAlt:
        'Equirectangular world map, July 2015: green vegetation on black oceans, tan deserts',
    },
    'sat-2020': {
      label: '2020',
      title: 'July 2020 canopy greenness',
      caption:
        'Late Landsat/MODIS era. Tree-cover loss and FAO deforestation both continued through this decade; this frame does not plot either series.',
      imageAlt:
        'Equirectangular world map, July 2020: green vegetation on black oceans, tan deserts',
    },
    'sat-2024': {
      label: '2024',
      title: 'July 2024 canopy greenness',
      caption:
        'GFW/UMD: 6.7 million ha of tropical primary forest lost in 2024, a fire-heavy record, and about 30 million ha of global tree-cover loss. This NDVI plate does not draw those scars.',
      imageAlt:
        'Equirectangular world map, July 2024: green vegetation on black oceans, tan deserts',
    },
    'sat-2025': {
      label: '2025',
      title: 'July 2025 canopy greenness',
      caption:
        'Latest July frame on this page. GFW/UMD: tropical primary loss fell to 4.3 million ha in 2025; global tree-cover loss about 25.5 million ha (42 percent fire). A quieter year after a spike, not a “saved” planet.',
      imageAlt:
        'Equirectangular world map, July 2025: green vegetation on black oceans, tan deserts',
    },
    'recon-lgm': {
      label: '~18 ka',
      title: 'Last Glacial Maximum vegetation',
      caption:
        'Reconstruction, not satellite. Ray & Adams 2001 GIS vegetation, ~25,000–15,000 BP (~18,000 years ago). Ice sheets, more desert, less closed forest than now. This is older and colder than 10,000 BCE. Early Holocene forests were already expanding off this minimum.',
      imageAlt:
        'Mollweide reconstruction of Ice Age vegetation: ice sheets, tundra, reduced tropical forest, patterned legend',
    },
    'recon-midholocene': {
      label: 'Biome plate',
      title: 'Potential biomes (recent climate)',
      caption:
        'Estimate / analogue — not a dated mid-Holocene pollen map. Ville Koistinen’s compiled biome plate (CC BY-SA). Useful for where forest can live under a recent climate. Mid-Holocene (~6,000 years ago) often had a greener Sahara and shifted forest limits; this drawing does not show that.',
      imageAlt:
        'Color-coded world biome map: taiga, temperate forest, tropical rainforest, deserts and savannas',
    },
    'recon-1700': {
      label: '1700',
      title: 'Anthromes, 1700',
      caption:
        'Reconstruction of human-shaped biomes, Ellis / SEDAC v2. Wild and remote woodlands still dominate much of the Americas, Africa, and boreal Eurasia. Cropland and villages already heavy in Europe, India, and eastern China. Not a tree-cover percent map.',
      imageAlt:
        'Robinson map of 1700 anthropogenic biomes: pale wild woodlands, yellow croplands, blue villages',
    },
    'recon-1900': {
      label: '1900',
      title: 'Anthromes, 1900',
      caption:
        'Same Ellis / SEDAC series, industrial-era step. Cropland, rangeland, and settlements have spread. Still a model of population and land use, not Landsat.',
      imageAlt:
        'Robinson map of 1900 anthropogenic biomes with more cropland and rangeland than 1700',
    },
    'recon-2000': {
      label: '2000',
      title: 'Anthromes, 2000',
      caption:
        'Ellis / SEDAC v2 at the door of the satellite era. Intensive anthromes cover much of the habitable land. Compare with the NASA NDVI shelf: different legend, different quantity.',
      imageAlt:
        'Robinson map of 2000 anthropogenic biomes: widespread cropland, rangeland, and settlements',
    },
  },
  stats: {
    remaining: {
      label: 'Forest remaining',
      text: '4.14 billion hectares, about 0.50 hectares per person. Nearly half of that forest is tropical. The figure is a land-use total from national reports.',
      sourceLine:
        'Food and Agriculture Organization of the United Nations, Global Forest Resources Assessment 2025',
    },
    landShare: {
      label: 'Share of land',
      text: '32 percent of the world land is reported as forest in 2025. It is the same land-use total as the 4.14 billion hectares.',
      sourceLine:
        'Food and Agriculture Organization of the United Nations, Global Forest Resources Assessment 2025',
    },
    plantedForest: {
      label: 'Planted forest',
      text: '312 million hectares, 8 percent of forest in 2025. The area is up 120 million hectares since 1990, and the rate of increase slowed in the last decade. The figure covers plantations and planted stands.',
      sourceLine:
        'Food and Agriculture Organization of the United Nations, Global Forest Resources Assessment 2025',
    },
    carbonStock: {
      label: 'Forest carbon stock',
      text: '714 gigatonnes of carbon across all pools (172 tonnes per hectare): soil 46 percent, living biomass 44 percent, litter and dead wood 10 percent.',
      sourceLine:
        'Food and Agriculture Organization of the United Nations, Global Forest Resources Assessment 2025',
    },
    deforestationSince1990: {
      label: 'Deforestation since 1990',
      text: '489 million hectares cleared from 1990 to 2025. The figure is the gross loss of forest land use. The rate slowed, and clearing continues.',
      sourceLine:
        'Food and Agriculture Organization of the United Nations, Global Forest Resources Assessment 2025, main report',
    },
    netLossRecent: {
      label: 'Net forest-area loss',
      text: '4.12 million hectares a year from 2015 to 2025, down from 10.7 million hectares a year from 1990 to 2000. Net change is deforestation minus expansion from regrowth, planting, and other gain.',
      sourceLine:
        'Food and Agriculture Organization of the United Nations, news release on the 2025 forest assessment',
    },
    grossDeforestation: {
      label: 'Gross deforestation rate',
      text: '10.9 million hectares a year from 2015 to 2025, down from 17.6 million hectares a year from 1990 to 2000. Expansion also slowed, to 6.78 million hectares a year in the latest decade. Deforestation is the conversion of forest to other land use.',
      sourceLine:
        'Food and Agriculture Organization of the United Nations, news release on the 2025 forest assessment',
    },
    primaryRemaining: {
      label: 'Primary forest',
      text: 'At least 1.18 billion hectares, 29 percent of reported forest. The area is down 110 million hectares since 1990. Recent primary loss is 1.61 million hectares a year from 2015 to 2025, less than half the rate of 2000 to 2015. The total includes boreal primary forest as well as rainforest.',
      sourceLine: 'Global Forest Resources Assessment 2025, primary forests',
    },
    tropicalPrimary2024: {
      label: 'Tropical primary lost, 2024',
      text: '6.7 million hectares of humid tropical primary forest in a fire-driven record year, about 18 football pitches a minute.',
      sourceLine: 'World Resources Institute, Global Forest Review, forest loss in 2024',
    },
    tropicalPrimary2025: {
      label: 'Tropical primary lost, 2025',
      text: '4.3 million hectares, 36 percent below 2024 and still about 46 percent above a decade earlier. The World Resources Institute describes this as 11 football fields a minute. Brazil cut non-fire primary loss by 41 percent from 2024. Global tree cover loss was about 25.5 million hectares, and fires accounted for 42 percent.',
      sourceLine: 'World Resources Institute, Global Forest Review, tropical forest loss in 2025',
    },
    treeCount: {
      label: 'Trees living',
      text: 'A 2015 paper in Nature estimates about 3.04 trillion trees. The figure is a modelled stem count from ground plots and remote sensing.',
      sourceLine: 'Nature, Mapping tree density at a global scale (2015)',
    },
    holoceneTrees: {
      label: 'Trees since the start of civilization',
      text: 'The same 2015 paper estimates about 46 percent fewer trees than at the start of human civilization.',
      sourceLine: 'Nature, Mapping tree density at a global scale (2015)',
    },
    intactLandscapes: {
      label: 'Intact forest landscapes',
      text: '1,086 million hectares remaining in 2025, 8.4 percent of ice-free land. The patches are about 50,000 hectares or larger and lack an industrial footprint.',
      sourceLine: 'Intact forest landscapes mapping team, 2025',
    },
  },
};
