import {
  getMapMeta,
  mapCategoryKeys,
  mapMeta,
  type MapCategory,
  type MapCopy,
  type MapEntry,
} from '../data/maps';
import type { Locale } from './config';
import { lv as lvEntries } from './maps-lv';
import { pl as plEntries } from './maps-pl';
import { ru as ruEntries } from './maps-ru';

export type MapsPage = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  filterAria: string;
  chooseCategory: string;
  tiles: Record<MapCategory, string>;
  centuryBadge: string;
  categoryEyebrows: Partial<Record<MapCategory, string>>;
  cardCta: string;
  openSource: string;
  yearLabel: string;
  sourceLabel: string;
  licenseLabel: string;
  howToRead: string;
  caveats: string;
  related: string;
  back: string;
  schematicNote: string;
  schematicBadge: string;
  heroAlt: string;
  hubHeroAlt: string;
  photoCredit: string;
  empty: string;
  categories: Record<MapCategory, string>;
};

const pageEn: MapsPage = {
  metaTitle: 'Maps — Fix Planet',
  metaDescription:
    'Public maps of conflict, languages, religion, resources, forests, water, and the political world — each with a named source.',
  eyebrow: 'Map room',
  title: 'Maps',
  lead:
    'Public maps of conflict, languages, religion, resources, forests, water, and the political world. Each card names who made the map, for which years, and how to read it. History of borders is a century timeline from 1 CE to now. The Religion century atlas is not published yet.',
  filterAria: 'Filter maps by category',
  chooseCategory: 'Choose a shelf',
  tiles: {
    'history-of-borders': 'Century frames from 1 CE to now.',
    religious: 'A century atlas of sourced religion maps — not published yet.',
    conflicts: 'Armed events and battle deaths from named datasets.',
    ethnic: 'Language families as public cartography, not a census.',
    crime: 'Homicide and related rates where a public map exists.',
    pollution: 'Air, waste, and emissions with a named source.',
    subsurface: 'Oil, gas, and minerals — fossil fuel and fossil gold.',
    political: 'States, disputed areas, and administrative lines.',
    forests: 'Canopy, loss, and protected areas from named sources.',
    water: 'Rivers, basins, and freshwater stress.',
    population: 'Where people live, at the vintage we can source.',
  },
  centuryBadge: 'Century atlas',
  categoryEyebrows: {
    subsurface: 'oil, gas, minerals',
    forests: 'canopy, loss, and parks',
    religious: 'coming soon',
    'history-of-borders': '1 CE to now',
  },
  cardCta: 'Read the card →',
  openSource: 'Open source map →',
  yearLabel: 'Vintage',
  sourceLabel: 'Source',
  licenseLabel: 'License',
  howToRead: 'How to read it',
  caveats: 'Caveats',
  related: 'Related maps',
  back: '← Maps',
  schematicNote:
    'A Fix Planet overview after the named source — not that publisher’s official graphic. Open the source map for the current layer.',
  schematicBadge: 'Fix Planet overview',
  heroAlt:
    'Cloud-free NASA Blue Marble: natural land colors, deep blue oceans, and ice caps, with no political borders or labels',
  hubHeroAlt:
    'Earth at night from space, Africa-centered, city lights on the continents and faint lines across dark oceans',
  photoCredit: 'Photo: founder-supplied Earth at night from space.',
  empty: 'No maps in this category yet.',
  categories: {
    'history-of-borders': 'History of borders',
    religious: 'Religion',
    conflicts: 'Conflicts',
    ethnic: 'Ethnolinguistic',
    crime: 'Crime',
    pollution: 'Pollution',
    subsurface: 'Subsurface',
    political: 'Political',
    forests: 'Forests',
    water: 'Water',
    population: 'Population',
  },
};

const pageRu: MapsPage = {
  metaTitle: 'Карты — Fix Planet',
  metaDescription:
    'Открытые карты конфликтов, языков, религий, ресурсов, лесов, воды и политического мира — у каждой названный источник.',
  eyebrow: 'Картографическая',
  title: 'Карты',
  lead:
    'Открытые карты конфликтов, языков, религий, ресурсов, лесов, воды и политического мира. На каждой карточке — кто сделал карту, за какие годы и как её читать. «История границ» — лента столетий от 1 года н. э. до сегодня. Атлас религий по столетиям пока не опубликован.',
  filterAria: 'Фильтр карт по теме',
  chooseCategory: 'Выберите полку',
  tiles: {
    'history-of-borders': 'Кадры по столетиям от 1 года н. э. до сейчас.',
    religious: 'Атлас религиозных карт по столетиям — пока не опубликован.',
    conflicts: 'Вооружённые события и боевые потери по названным данным.',
    ethnic: 'Языковые семьи как открытая картография, не перепись.',
    crime: 'Убийства и смежные показатели, где есть открытая карта.',
    pollution: 'Воздух, отходы и выбросы с названным источником.',
    subsurface: 'Нефть, газ и ископаемые — топливо и золото недр.',
    political: 'Государства, спорные зоны и административные линии.',
    forests: 'Полог, потери и ООПТ по названным источникам.',
    water: 'Реки, бассейны и нехватка пресной воды.',
    population: 'Где живут люди — на тот год, который можем указать.',
  },
  centuryBadge: 'Атлас столетий',
  categoryEyebrows: {
    subsurface: 'нефть, газ, ископаемые',
    forests: 'полог, потери и парки',
    religious: 'скоро',
    'history-of-borders': 'от 1 н. э. до сейчас',
  },
  cardCta: 'Читать карточку →',
  openSource: 'Открыть исходную карту →',
  yearLabel: 'Годы данных',
  sourceLabel: 'Источник',
  licenseLabel: 'Лицензия',
  howToRead: 'Как читать',
  caveats: 'Оговорки',
  related: 'Связанные карты',
  back: '← Карты',
  schematicNote:
    'Обзор Fix Planet по названному источнику — не официальная графика издателя. Актуальный слой — на исходной карте.',
  schematicBadge: 'Обзор Fix Planet',
  heroAlt:
    'Безоблачный NASA Blue Marble: естественные цвета суши, тёмно-синие океаны и ледники, без политических границ и подписей',
  hubHeroAlt:
    'Земля ночью из космоса, в центре Африка: огни городов на материках и тонкие линии над тёмными океанами',
  photoCredit: 'Фото: снимок основателя — Земля ночью из космоса.',
  empty: 'В этой категории пока нет карт.',
  categories: {
    'history-of-borders': 'История границ',
    religious: 'Религии',
    conflicts: 'Конфликты',
    ethnic: 'Этнолингвистика',
    crime: 'Преступность',
    pollution: 'Загрязнение',
    subsurface: 'Недра',
    political: 'Политические',
    forests: 'Леса',
    water: 'Вода',
    population: 'Население',
  },
};

const pagePl: MapsPage = {
  metaTitle: 'Mapy — Fix Planet',
  metaDescription:
    'Publiczne mapy konfliktów, języków, religii, zasobów, lasów, wody i świata politycznego — każda z nazwanym źródłem.',
  eyebrow: 'Mapownia',
  title: 'Mapy',
  lead:
    'Publiczne mapy konfliktów, języków, religii, zasobów, lasów, wody i świata politycznego. Na każdej karcie: kto zrobił mapę, z których lat i jak ją czytać. Historia granic to oś czasu stuleci od 1 n.e. do dziś. Atlas religii po stuleciach nie jest jeszcze opublikowany.',
  filterAria: 'Filtruj mapy według kategorii',
  chooseCategory: 'Wybierz półkę',
  tiles: {
    'history-of-borders': 'Klatki stuleci od 1 n.e. do dziś.',
    religious: 'Atlas map religii po stuleciach — jeszcze nie opublikowany.',
    conflicts: 'Zbrojne zdarzenia i ofiary walk z nazwanych zbiorów.',
    ethnic: 'Rodziny językowe jako kartografia publiczna, nie spis.',
    crime: 'Zabójstwa i pokrewne wskaźniki, gdzie jest publiczna mapa.',
    pollution: 'Powietrze, odpady i emisje z nazwanym źródłem.',
    subsurface: 'Ropa, gaz i minerały — paliwo kopalne i kopalne złoto.',
    political: 'Państwa, spory i linie administracyjne.',
    forests: 'Okap, ubytek i obszary chronione z nazwanych źródeł.',
    water: 'Rzeki, zlewnie i presja na wodę słodką.',
    population: 'Gdzie mieszkają ludzie — w roczniku, który umiemy podać.',
  },
  centuryBadge: 'Atlas stuleci',
  categoryEyebrows: {
    subsurface: 'ropa, gaz, minerały',
    forests: 'okap, ubytek i parki',
    religious: 'wkrótce',
    'history-of-borders': 'od 1 n.e. do dziś',
  },
  cardCta: 'Czytaj kartę →',
  openSource: 'Otwórz mapę źródłową →',
  yearLabel: 'Rocznik',
  sourceLabel: 'Źródło',
  licenseLabel: 'Licencja',
  howToRead: 'Jak czytać',
  caveats: 'Zastrzeżenia',
  related: 'Powiązane mapy',
  back: '← Mapy',
  schematicNote:
    'Przegląd Fix Planet na podstawie wskazanego źródła — to nie oficjalna grafika wydawcy. Aktualna warstwa jest na mapie źródłowej.',
  schematicBadge: 'Przegląd Fix Planet',
  heroAlt:
    'Bezachmurny NASA Blue Marble: naturalne barwy lądów, głęboki błękit oceanów i czapy lodu, bez granic politycznych i etykiet',
  hubHeroAlt:
    'Ziemia nocą z kosmosu, Afryka na środku: światła miast na kontynentach i blade linie nad ciemnymi oceanami',
  photoCredit: 'Zdjęcie: zdjęcie założyciela — Ziemia nocą z kosmosu.',
  empty: 'W tej kategorii nie ma jeszcze map.',
  categories: {
    'history-of-borders': 'Historia granic',
    religious: 'Religie',
    conflicts: 'Konflikty',
    ethnic: 'Etnolingwistyczne',
    crime: 'Przestępczość',
    pollution: 'Zanieczyszczenie',
    subsurface: 'Zasoby podziemne',
    political: 'Polityczne',
    forests: 'Lasy',
    water: 'Woda',
    population: 'Ludność',
  },
};

const pageLv: MapsPage = {
  metaTitle: 'Kartes — Fix Planet',
  metaDescription:
    'Publiskas kartes par konfliktiem, valodām, reliģijām, resursiem, mežiem, ūdeni un politisko pasauli — katrai ir nosaukts avots.',
  eyebrow: 'Karšu zāle',
  title: 'Kartes',
  lead:
    'Publiskas kartes par konfliktiem, valodām, reliģijām, resursiem, mežiem, ūdeni un politisko pasauli. Katrā kartītē: kas karti veidojis, par kuriem gadiem un kā to lasīt. Robežu vēsture ir gadsimtu laika līnija no 1. m.ē. līdz šodienai. Reliģiju gadsimtu atlants vēl nav publicēts.',
  filterAria: 'Filtrēt kartes pēc kategorijas',
  chooseCategory: 'Izvēlies plauktu',
  tiles: {
    'history-of-borders': 'Gadsimtu kadri no 1. m.ē. līdz šodienai.',
    religious: 'Reliģiju karšu gadsimtu atlants — vēl nav publicēts.',
    conflicts: 'Bruņoti notikumi un kauju nāves no nosauktām datu kopām.',
    ethnic: 'Valodu saimes kā publiska kartogrāfija, ne tautas skaitīšana.',
    crime: 'Slepkavības un radniecīgi rādītāji, kur ir publiska karte.',
    pollution: 'Gaiss, atkritumi un emisijas ar nosauktu avotu.',
    subsurface: 'Nafta, gāze un izrakteņi — fosilā degviela un fosilais zelts.',
    political: 'Valstis, strīdi un administratīvās līnijas.',
    forests: 'Vainags, zudums un aizsargājamās teritorijas no nosauktiem avotiem.',
    water: 'Upes, baseini un saldūdens spiediens.',
    population: 'Kur dzīvo cilvēki — tajā gadā, ko varam norādīt.',
  },
  centuryBadge: 'Gadsimtu atlants',
  categoryEyebrows: {
    subsurface: 'nafta, gāze, izrakteņi',
    forests: 'vainags, zudums un parki',
    religious: 'drīzumā',
    'history-of-borders': 'no 1. m.ē. līdz šodienai',
  },
  cardCta: 'Lasīt kartīti →',
  openSource: 'Atvērt avota karti →',
  yearLabel: 'Datu gadi',
  sourceLabel: 'Avots',
  licenseLabel: 'Licence',
  howToRead: 'Kā lasīt',
  caveats: 'Atrunas',
  related: 'Saistītās kartes',
  back: '← Kartes',
  schematicNote:
    'Fix Planet pārskats pēc nosauktā avota — ne izdevēja oficiālā grafika. Aktuālais slānis ir avota kartē.',
  schematicBadge: 'Fix Planet pārskats',
  heroAlt:
    'Bez mākoņiem NASA Blue Marble: dabiskas sauszemes krāsas, tumši zili okeāni un ledus cepures, bez politiskām robežām un uzrakstiem',
  hubHeroAlt:
    'Zeme naktī no kosmosa, Āfrika centrā: pilsētu gaismas uz kontinentiem un vājas līnijas pāri tumšiem okeāniem',
  photoCredit: 'Foto: dibinātāja piegādāts Zemes nakts skats no kosmosa.',
  empty: 'Šajā kategorijā vēl nav karšu.',
  categories: {
    'history-of-borders': 'Robežu vēsture',
    religious: 'Reliģijas',
    conflicts: 'Konflikti',
    ethnic: 'Etnolingvistika',
    crime: 'Noziedzība',
    pollution: 'Piesārņojums',
    subsurface: 'Zemes dzīles',
    political: 'Politiskās',
    forests: 'Meži',
    water: 'Ūdens',
    population: 'Iedzīvotāji',
  },
};

const page: Record<Locale, MapsPage> = {
  en: pageEn,
  ru: pageRu,
  pl: pagePl,
  lv: pageLv,
};

const en: Record<string, MapCopy> = {
  'armed-conflict-events': {
    title: 'Political violence events',
    hook: 'Where armed conflict and protest events were recorded — not a verdict on who is right.',
    description:
      'ACLED compiles geolocated reports of battles, explosions, violence against civilians, riots, and protests. The public dashboard and Conflict Watchlist show recent patterns. This card is a doorway to that living dataset, not a copy of every point.',
    howToRead:
      'Read it as a map of reported events. Dense clusters mean more recorded incidents, not automatically “the worst country” or a moral ranking. Time sliders matter: last month is not the last decade.',
    caveats:
      'Coverage depends on local reporting, language, and access. Some wars are under-counted; some protests are over-visible. ACLED does not decide which side is legitimate. Do not treat a pin as a census of every death.',
    licenseNote:
      'ACLED data may be used with attribution under their terms. The live event database is on their dashboard. The preview is a Fix Planet overview of well-known reporting theatres, not ACLED counts or their artwork.',
    imageAlt:
      'Dark world map with red and orange dots clustered in well-known conflict-reporting regions, labeled as a Fix Planet overview',
  },
  'battle-related-deaths': {
    title: 'Battle-related deaths',
    hook: 'UCDP counts of people killed in organized armed conflict, compiled for comparison over time.',
    description:
      'The Uppsala Conflict Data Program records state-based conflicts, non-state conflicts, and one-sided violence, then estimates battle-related deaths. Our World in Data republishes the series as charts and maps with documentation.',
    howToRead:
      'A country year is an estimate of deaths that meet UCDP’s definitions, not “all people harmed by war.” Compare trends more than single-year ranks. OWID’s war-and-peace page is the readable front door.',
    caveats:
      'Definitions exclude many civilian harms (displacement, hunger, disease). Early years and closed information environments are uncertain. Numbers are revised. This is not a map of who started a war.',
    licenseNote:
      'UCDP allows non-commercial use with citation. We host a cropped Our World in Data map export (CC BY) of deaths in armed conflicts. Open the OWID war-and-peace page for the live layer.',
    imageAlt:
      'Our World in Data world map of deaths in armed conflicts: pale land with Ukraine and several African and Asian countries in orange and red',
  },
  'language-families': {
    title: 'Language families of the world',
    hook: 'A linguistic map of related languages — an approximation of ethnolinguistic geography, not a census of peoples.',
    description:
      'Glottolog, from the Max Planck Institute for Evolutionary Anthropology, classifies the world’s languages and shows them on a map. WALS (the World Atlas of Language Structures) is a related scholarly atlas of structural features. Both are about languages, not political ethnicity.',
    howToRead:
      'Colors and points stand for language families or languages, usually at a reference location. A large area of one color does not mean one “ethnic group,” one opinion, or one state. Many people are multilingual; many identities are not linguistic.',
    caveats:
      'Ethnolinguistic maps are contested. Colonial borders, forced assimilation, and self-identification all cut across language trees. Treat this as a scholarly sketch of speech communities, never as a claim about blood, loyalty, or territory.',
    licenseNote:
      'Glottolog content is typically CC BY. The preview is Wikimedia’s Primary Human Language Families Map (PiMaster3, CC BY-SA 3.0). The interactive Glottolog map is theirs.',
    imageAlt:
      'Color-coded world map of primary language families: teal Indo-European areas, orange Afro-Asiatic, green Niger-Congo, magenta Sino-Tibetan, maroon Austronesian',
  },
  'world-religions': {
    title: 'Religious composition by country',
    hook: 'Pew estimates of how people identify religiously — affiliation, not piety, and not a map of “civilizations.”',
    description:
      'Pew Research Center publishes country-level estimates of religious composition (Christians, Muslims, Hindus, Buddhists, Jews, folk religions, the religiously unaffiliated, and others), including a 2010–2050 feature. These are survey- and census-based estimates of identification.',
    howToRead:
      'A country’s majority label is a statistical estimate. Minorities still live there. “Unaffiliated” is not one culture. National borders are a poor container for belief. Use Pew’s tables and maps, not a slogan.',
    caveats:
      'Religion maps are politically sensitive. States sometimes punish or inflate affiliation. Household surveys miss hidden practice. This is not a ranking of virtue or a forecast of conflict.',
    licenseNote:
      'Pew allows citation of findings with a link. Their maps and graphics remain theirs. The preview is a public-domain Wikimedia majority-religion map (TheGreenEditor), not Pew artwork.',
    imageAlt:
      'Color-coded world map of majority-religion regions: purple Christian areas, green Muslim, orange Hindu, yellow Buddhist, grey unaffiliated',
  },
  'homicide-rates': {
    title: 'Intentional homicide rates',
    hook: 'UNODC comparable rates of intentional homicide — one violent-crime measure, not “all crime.”',
    description:
      'The UN Office on Drugs and Crime compiles intentional homicide statistics from criminal-justice and public-health sources. Our World in Data turns the comparable series into a map and chart. Homicide is more consistently defined than robbery or “crime” in general.',
    howToRead:
      'The usual unit is intentional homicides per 100,000 people per year. High rates often cluster in specific cities or corridors, not uniformly across a country. Compare like years; recording changes.',
    caveats:
      'Under-reporting, legal definitions, and missing years differ by state. Conflict deaths are a different series (see UCDP). A thumbnail is not a “most dangerous country” list.',
    licenseNote:
      'UNODC statistical products are generally reusable with attribution. We host a cropped Our World in Data map export (CC BY) of UNODC homicide rates. Open their map for the current layer.',
    imageAlt:
      'Our World in Data choropleth of intentional homicide rates: yellow-orange land with darker red in parts of Latin America and southern Africa',
  },
  'air-quality-pm25': {
    title: 'Fine particle air pollution (PM2.5)',
    hook: 'Outdoor fine particles that damage lungs and hearts — from satellites, models, and monitors, not a smell test.',
    description:
      'WHO publishes air-quality guidelines and a database of exposures. Our World in Data maps population-weighted PM2.5. NASA instruments (MODIS, VIIRS, and related missions) observe aerosols that help build those estimates. This card points to those public layers.',
    howToRead:
      'Darker or higher values usually mean more annual average PM2.5. Cities can be far worse than a country mean. Indoor smoke and ozone are separate problems. WHO’s guideline (5 µg/m³ annual PM2.5) is a health benchmark, not a legal limit everywhere.',
    caveats:
      'Satellite-model blends smooth local peaks. Ground monitors are uneven. Dust storms and fire seasons spike short periods. This page does not rank countries.',
    licenseNote:
      'NASA imagery is public domain. We host a cropped Our World in Data map export (CC BY) of population-weighted PM2.5. Open the OWID air-pollution map for the interactive layer.',
    imageAlt:
      'Our World in Data choropleth of outdoor PM2.5: pale countries with a dark brown band across North Africa, the Middle East, and South and East Asia',
  },
  'co2-emissions': {
    title: 'Territorial CO₂ emissions',
    hook: 'Carbon dioxide from fossil fuels and industry, by country of production — the Global Carbon Project series.',
    description:
      'The Global Carbon Project estimates territorial CO₂ from coal, oil, gas, and cement. Our World in Data maps production-based totals and per-capita rates, and also discusses consumption-based (trade-adjusted) accounts.',
    howToRead:
      'A large country with heavy industry will dominate a “total emissions” map. Per-capita and consumption-based views change the picture. Bunker fuels and land-use change are often separate lines.',
    caveats:
      'Territorial inventories miss emissions embodied in imports. Year-to-year jumps can be methodology or recession, not virtue. This is not a map of local smog.',
    licenseNote:
      'GCP data are published for reuse with citation. We host a cropped Our World in Data map export (CC BY) of territorial CO₂. Open their emissions map for the interactive layer.',
    imageAlt:
      'Our World in Data choropleth of territorial CO₂: China and the United States in the darkest red, other large economies in medium red',
  },
  'oil-gas-reserves': {
    title: 'Oil and gas around the world',
    hook: 'A U.S. government view of petroleum and natural-gas resources and flows — deposits, reserves, and trade.',
    description:
      'The U.S. Energy Information Administration publishes international energy statistics, country analysis, and maps of oil and gas. USGS world petroleum assessments estimate undiscovered technically recoverable resources. Neither is a trading screen.',
    howToRead:
      'Reserves are amounts judged economic with today’s prices and technology; resources are larger and less certain. A colored basin is not a permission to drill. Pipelines and LNG change who uses whose gas.',
    caveats:
      'National reserve reports can be political. EIA figures are still among the most transparent public series. We do not list field-by-field barrels here.',
    licenseNote:
      'EIA and USGS works of the U.S. government are generally public domain. The preview is EIA’s public-domain assessed shale-gas basin map. Open EIA’s international pages for current oil and gas maps and tables.',
    imageAlt:
      'EIA world map of assessed shale-gas basins: white and grey countries with maroon and yellow basin polygons',
  },
  'mineral-resources': {
    title: 'Mineral deposits and commodities',
    hook: 'USGS maps of where metals and industrial minerals are known — gold included — not a treasure map.',
    description:
      'The USGS Mineral Resources Program and MRDATA compile deposits, prospects, and commodity summaries (gold, copper, iron, lithium, and others). The Mineral Commodity Summaries are the annual public ledger of production and reserves.',
    howToRead:
      'A point is a known deposit or district, not a mine you can visit. “Reserve” is an economic quantity; “resource” is geologic. Gold often sits with other metals. Artisanal sites may be missing.',
    caveats:
      'Completeness varies by country and by secrecy. A blank area can mean no survey, not no rock. Environmental harm of extraction is not in the geology layer.',
    licenseNote:
      'USGS information is generally public domain. The preview is a Fix Planet overview of well-known districts (gold, copper, iron, lithium, rare earths), not a copy of a USGS poster and not reserve tonnages. Open MRDATA for the database.',
    imageAlt:
      'Tan world map with colored dots for well-known mineral districts: gold, copper, iron, lithium, and rare earths',
  },
  'world-countries': {
    title: 'World countries and borders',
    hook: 'A public-domain political base: who administers which polygon, with the usual disputed-border caveats.',
    description:
      'Natural Earth publishes public-domain cultural and physical vectors at several scales, including admin-0 countries. Cartographers use it because the license is clear and the generalization is designed for small-scale world maps.',
    howToRead:
      'This is a reference outline, not a court. Disputed areas are drawn one way so the map can be drawn at all. For a legal claim, read a treaty or a court, not a 1:110 million shapefile.',
    caveats:
      'Borders move, names change, and some lines are violently contested. Natural Earth documents its disputed-boundary choices. A blank political map is still a political act.',
    licenseNote:
      'Natural Earth is public domain. The preview is a recolored render of Wikimedia’s public-domain BlankMap-World, a similar small-scale country outline.',
    imageAlt: 'Public-domain outline map of the world’s countries in cream on light blue, without labels',
  },
  'forest-cover-loss': {
    title: 'Tree-cover loss',
    hook: 'Hansen / Global Forest Watch: where tree cover was lost, including clearing, fire, and harvest — not only “deforestation.”',
    description:
      'Hansen and colleagues at the University of Maryland map annual tree-cover loss from Landsat. Global Forest Watch (World Resources Institute) serves the layer. NASA Earth observations sit behind the same satellites. Loss is a change in canopy, not automatically a conversion of primary forest.',
    howToRead:
      'Pink or red loss pixels are canopy gone that year. Plantations, fire, and storm blowdown count as loss. “Gain” is slower and easier to miss. Zoom in; a country total hides the frontier.',
    caveats:
      'Tree cover ≠ primary forest. Some loss is legal harvest. Some intact forest is already degraded. GFW documents the definitions. The preview is a Fix Planet overview of well-known loss frontiers, not a recolored Hansen tile set.',
    licenseNote:
      'Hansen / GFW data are typically available under CC BY 4.0 with citation. The preview is a Fix Planet schematic of known frontiers. Open the GFW map for the interactive loss layer.',
    imageAlt:
      'Dark green world map with magenta patches over well-known tree-cover loss frontiers in the Amazon, Congo basin, Southeast Asia, and boreal belts',
  },
  'protected-areas': {
    title: 'Protected areas',
    hook: 'WDPA / Protected Planet: parks, reserves, and other protected polygons — coverage on paper, not always protection on the ground.',
    description:
      'The World Database on Protected Areas, maintained by UNEP-WCMC and IUCN and shown on Protected Planet, is the global inventory of terrestrial and marine protected areas. It is the standard layer governments and researchers cite.',
    howToRead:
      'A green polygon is a reported designation (IUCN categories I–VI and other measures). Overlaps, paper parks, and missing indigenous territories are common. Area protected is not the same as intact habitat.',
    caveats:
      'Reporting lags. Some countries list almost everything; others list little. Hunting, roads, and mining still happen inside lines. Complementary layers (OECM, indigenous lands) are incomplete.',
    licenseNote:
      'WDPA has specific terms: you may view and cite; full redistribution of the database has restrictions. We host a cropped Our World in Data map export (CC BY) of terrestrial protected-area share and link to Protected Planet rather than shipping WDPA polygons.',
    imageAlt:
      'Our World in Data green choropleth of the share of each country’s land that is reported as protected',
  },
  'water-stress': {
    title: 'Water stress',
    hook: 'WRI Aqueduct: where demand for water is high relative to available supply — a model, not a well log.',
    description:
      'The World Resources Institute Aqueduct Water Risk Atlas models baseline water stress and related risks (depletion, flood, drought) at basin scale. Version 4 (2023) is the current public atlas.',
    howToRead:
      'High stress means withdrawals are large compared with renewable supply. Cities can import water; farms may still run dry. Climate scenarios on the atlas are projections, not weather forecasts.',
    caveats:
      'Models smooth local rights, illegal wells, and seasonal pulses. Political control of rivers is not in the hydrology alone. A red basin is not a prophecy of war.',
    licenseNote:
      'Aqueduct data are typically CC BY with attribution to WRI. The preview is a Fix Planet overview of arid versus water-rich regions, not Aqueduct basin scores. Open the Water Risk Atlas for the interactive basins.',
    imageAlt:
      'World map colored from teal water-rich regions to red arid belts across North Africa, the Middle East, and other drylands',
  },
  'population-density': {
    title: 'Population density',
    hook: 'Where people live, gridded: NASA SEDAC GPW and WorldPop — models fitted to censuses, not a headcount of every street.',
    description:
      'Gridded Population of the World (SEDAC / CIESIN) and WorldPop spread census counts onto a grid with satellite covariates. UN World Population Prospects give the national totals those grids are often aligned to. Night lights (see Earth at night) are a related brightness proxy, not a census.',
    howToRead:
      'Bright or dark cells are estimated people per square kilometre. Rural sparsity can hide large absolute populations. City cores saturate any color scale.',
    caveats:
      'Censuses are uneven and sometimes old. Conflict zones and informal settlements are hard to count. A grid is an estimate. The preview is a Wikimedia country-and-region density map, not the SEDAC grid itself.',
    licenseNote:
      'SEDAC GPW has academic-use terms; WorldPop is typically CC BY. The preview is Wikimedia’s Countries and regions by population density (Junuxx, CC BY-SA 3.0). Open SEDAC’s map viewer for the population grid.',
    imageAlt:
      'Brown choropleth of population density by country and selected regions, darkest over South and East Asia and parts of Europe',
  },
  'earth-at-night': {
    title: 'Earth at night',
    hook: 'NASA Black Marble: city lights and gas flares as seen from orbit — a picture of electrified settlement.',
    description:
      'The 2012 VIIRS “night lights” flat map composites cloud-free observations from Suomi NPP. Later Black Marble products refine that view. Lights mark cities, roads, and some industrial flares; dark land can still hold many people.',
    howToRead:
      'White is upward light. Oceans stay black. Compare with the population-density card: brightness follows electricity and wealth as much as headcount. Rural Africa and parts of South Asia are darker than their populations.',
    caveats:
      'LED streetlights, moonlight algorithms, and gas flares all change the picture. A dark pixel is not “empty.” This 2012 mosaic is a vintage, not tonight’s Earth.',
    licenseNote:
      'NASA Earth Observatory imagery is public domain. We host the 2012 flat-map JPEG. Later annual Black Marble products are on NASA Visible Earth.',
    imageAlt:
      'NASA 2012 night-lights map of Earth: city lights on dark land and black oceans, no borders or labels',
  },
};

const copy: Record<Locale, Record<string, MapCopy>> = {
  en,
  ru: ruEntries,
  pl: plEntries,
  lv: lvEntries,
};

export function getMapsPage(locale: Locale): MapsPage {
  return page[locale];
}

export function getMaps(locale: Locale): MapEntry[] {
  return mapMeta.map((meta) => {
    const fields = copy[locale][meta.slug] ?? copy.en[meta.slug];
    return { ...meta, ...fields };
  });
}

export function getMapsByCategory(locale: Locale, category: MapCategory): MapEntry[] {
  return getMaps(locale).filter((item) => item.category === category);
}

export function getMapBySlug(locale: Locale, slug: string): MapEntry | undefined {
  const meta = getMapMeta(slug);
  if (!meta) return undefined;
  const fields = copy[locale][slug] ?? copy.en[slug];
  if (!fields) return undefined;
  return { ...meta, ...fields };
}

export function getRelatedMaps(locale: Locale, slug: string, limit = 3): MapEntry[] {
  const current = getMapBySlug(locale, slug);
  if (!current) return [];
  const same = getMaps(locale).filter(
    (item) => item.slug !== slug && item.category === current.category,
  );
  const rest = getMaps(locale).filter(
    (item) => item.slug !== slug && item.category !== current.category,
  );
  return [...same, ...rest].slice(0, limit);
}

export { mapCategoryKeys };
