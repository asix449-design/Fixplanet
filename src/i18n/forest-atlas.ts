import {
  forestAtlasMeta,
  type ForestAtlasMeta,
  type ForestAtlasSlug,
} from '../data/forest-atlas';
import type { Locale } from './config';

export type ForestAtlasCopy = {
  title: string;
  meta: string;
  blurb: string;
  what?: string;
  why?: string;
  howToRead?: string;
  detailShort?: string;
};

export type ForestAtlasEntry = ForestAtlasMeta & ForestAtlasCopy;

export type ForestAtlasChrome = {
  badge: string;
  readMore: string;
  schematic: string;
  layersAria: string;
};

/** English section headings. Other locales use the short detail only. */
export const forestAtlasSectionLabels = {
  what: 'What it is',
  why: 'Why it matters',
  how: 'How to read it',
} as const;

/** Hub lede. PL/LV follow the pack’s meaning; EN/RU say the same thing. */
export const forestAtlasHubLede: Record<Locale, string> = {
  en: 'FAO figures, satellite greenness, reconstructions, and outlooks — plus planted forests, forest carbon stock, percent tree cover, peatlands, canopy height, aboveground biomass density, burned area, and FAO ecological zones. Each layer names its publisher and what the layer measures (and what it does not).',
  ru: 'Цифры FAO, спутниковая зелень, реконструкции и перспективы — а также посаженные леса, запас углерода в лесах, древесный покров, торфяники, высота полога, плотность надземной биомассы, площадь гарей и экологические зоны FAO. У каждого слоя указаны издатель и то, что слой измеряет (и чего не измеряет).',
  pl: 'Liczby FAO, zieleń z satelity, rekonstrukcje i perspektywy — oraz lasy sadzone, zapas węgla w lasach, pokrycie drzewami, torfowiska, wysokość koron, gęstość biomasy nadziemnej, areał spalenisk i strefy ekologiczne FAO. Przy każdej warstwie podany jest wydawca i to, co warstwa mierzy (i czego nie).',
  lv: 'FAO skaitļi, satelītu zaļums, rekonstrukcijas un nākotnes skati — kā arī stādītie meži, meža oglekļa krājums, koku segums, kūdrāji, vainagu augstums, virszemes biomasas blīvums, izdegušās platības un FAO ekoloģiskās zonas. Katram slānim norādīts izdevējs un tas, ko slānis mēra (un ko ne).',
};

const chrome: Record<Locale, ForestAtlasChrome> = {
  en: {
    badge: 'Schematic',
    readMore: 'Open the layer →',
    schematic: 'Schematic after the named source. Open the source for the current layer.',
    layersAria: 'Forest measurements',
  },
  ru: {
    badge: 'Схема',
    readMore: 'Открыть слой →',
    schematic: 'Схема по названному источнику. Актуальный слой — в источнике.',
    layersAria: 'Измерения лесов',
  },
  pl: {
    badge: 'Schemat',
    readMore: 'Otwórz warstwę →',
    schematic: 'Schemat według nazwanego źródła. Aktualna warstwa jest w źródle.',
    layersAria: 'Pomiary lasów',
  },
  lv: {
    badge: 'Shēma',
    readMore: 'Atvērt slāni →',
    schematic: 'Shēma pēc nosauktā avota. Aktuālais slānis ir avotā.',
    layersAria: 'Meža mērījumi',
  },
};

const en: Record<ForestAtlasSlug, ForestAtlasCopy> = {
  'canopy-height': {
    title: 'Canopy height',
    meta: 'NASA GEDI L3 · RH100 mean canopy height · ~1 km',
    blurb:
      'How tall the forest canopy is from spaceborne lidar — mean RH100 height on a ~1 km grid, not tree-cover loss and not carbon stock.',
    what: 'NASA GEDI L3 Gridded Land Surface Metrics v2 (ORNL DAAC DOI 10.3334/ORNLDAAC/1952) publishes gridded land-surface metrics from the Global Ecosystem Dynamics Investigation lidar on the ISS, including mean RH100 canopy height at about 1 km resolution within roughly ±52° latitude (GEDI’s orbital coverage). Data and documentation are published on NASA Earthdata, the ORNL DAAC dataset viewer for dataset 1952, and the GEDI mission and data pages at the University of Maryland. Further reading includes Potapov et al., Nature Ecology & Evolution (2021), a global canopy-height map, and the GLAD GEDI page. The layer shows how tall stands are, not how much area was lost.',
    why: 'Canopy height is a structure measurement: how tall the canopy is. It sits beside biomass density and burned area. It is not a tree-cover loss map.',
    howToRead:
      'RH100 is a relative-height metric near the top of the lidar waveform — a proxy for canopy top height, not stem DBH and not aboveground biomass density. Coverage stops near ±52° latitude; polar and some high-latitude forests are outside the L3 grid. Product documentation is on the Earthdata L3 catalog and the ORNL dataset viewer; the GEDI mission pages describe the instrument.',
  },
  'aboveground-biomass': {
    title: 'Aboveground biomass',
    meta: 'NASA GEDI L4B · gridded AGBD v2.1 · Mg/ha',
    blurb:
      'Aboveground biomass density from spaceborne lidar — a density map in tonnes per hectare, different from national carbon-stock totals and from the ESA Biomass mission.',
    what: 'NASA GEDI L4B Gridded Aboveground Biomass Density v2.1 (ORNL DAAC DOI 10.3334/ORNLDAAC/2299) estimates aboveground biomass density (AGBD) on a regular grid from GEDI lidar samples. Data and documentation are published on NASA Earthdata, the ORNL DAAC dataset viewer for dataset 2299, and the ORNL GEDI L4B user guide. The layer is a biomass-density map.',
    why: 'Forest statistics may report a carbon stock total (~714 Gt C), but that is a stock total in carbon, not a mapped density in tonnes per hectare. A lidar-based density field sits beside canopy height and burned area. It is a density map from GEDI lidar, different from the ESA Biomass mission.',
    howToRead:
      'AGBD is living aboveground biomass density (typically Mg/ha), not soil carbon and not a national carbon-stock total in gigatonnes. Coverage follows GEDI sampling geography; the product documentation includes uncertainty layers. The Earthdata L4B catalog, the ORNL dataset viewer for 2299, and the user guide describe the field.',
  },
  'burned-area': {
    title: 'Burned area',
    meta: 'MODIS MCD64CMQ · 2023 · share of each 0.25° cell',
    blurb:
      'Where fire burned in 2023 — the MODIS MCD64 annual burned fraction on a 0.25° grid, not tree-cover loss and not a FIRMS hotspot map.',
    what: 'MODIS MCD64A1 (Collection 6.1) is NASA’s global monthly burned-area product. This plate uses the University of Maryland MCD64CMQ climate-modeling grid of that product: monthly burned area in hectares on a 0.25° grid, summed for 2023 and divided by the area of each cell. FIRMS is a separate near-real-time active-fire service and is not drawn here. Further reading includes the GFED site and the Earth Observatory MOD14A1 fire map.',
    why: 'Annual tree-cover loss can include fire but is not a dedicated burned-area product. Prescribed fire is a management practice, not a global burned-area map. This layer answers where fire burned.',
    howToRead:
      'The colour is the share of each 0.25° cell that burned in 2023. Ocean and land the product left unmapped stay grey. A few cells that burned more than their own area are drawn as 1. FIRMS hotspot points are a different layer. Agricultural burning, savanna fire, and forest wildfire all appear. The LP DAAC MCD64A1 page describes the source product.',
  },
  'ecological-zones': {
    title: 'Ecological zones',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · FRA reporting',
    blurb:
      'FAO’s Global Ecological Zones frame for Forest Resources Assessment — climatic-ecological zoning of forest land, not tree-cover loss and not a history-biome reconstruction.',
    what: 'FAO Global Ecological Zones (GEZ) — the second edition, the 2010 update used in Forest Resources Assessment (FRA) reporting — classifies the world’s land into ecological zones for consistent forest statistics. Data and documentation are published in the FAO data catalog, the GEZ PDF (ap861e), the Open Knowledge record, and on the FRA site. The layer is the climatic-ecological zoning used for FRA reporting.',
    why: 'GEZ places forest statistics in a climate-ecological frame. Its classes differ from biome reconstructions and from maps of forest condition or intactness.',
    howToRead:
      'GEZ is a reporting frame (tropical rainforest, boreal coniferous, temperate oceanic, and other classes), not a yearly loss map and not a species-range atlas. It places FRA tables and national forest statistics in climatic context. The FAO catalog dataset and the GEZ PDF describe the classes; the FRA site describes the assessment.',
  },
  'planted-forests': {
    title: 'Planted forests',
    meta: 'FAO FRA 2025 · ~312 Mha · planted & plantation',
    blurb:
      'How much of the world’s forest was established by planting, and where mapped forest-management products separate planted stands from naturally regenerating forest.',
    what: 'FAO’s Global Forest Resources Assessment 2025 reports that planted forests cover about 312 million hectares — roughly 8% of total forest area — and distinguishes plantation forests from other planted forests. For a spatial view, Lesiv et al. (2022) published a global forest-management map at 100 m for 2015 that includes planted forest and short-rotation plantation classes. WRI’s Spatial Database of Planted Trees (SDPT) is an optional secondary layer that separates planted forests from tree crops on monitoring platforms.',
    why: 'Planted area can rise while primary forest falls. A planted stand is not the same ecosystem as an old naturally regenerating forest, so it helps to see planted area alongside primary forest and canopy data.',
    howToRead:
      'FRA planted-forest area is a land-use statistic from national reports. The Lesiv map is a remote-sensing classification of management classes for 2015 — useful for pattern, not a substitute for the FRA hectare total. Plantation crops such as oil palm are treated separately in that map and should not be added into FAO forest area without checking definitions.',
  },
  'forest-carbon-stock': {
    title: 'Forest carbon stock',
    meta: 'FAO FRA 2025 · ~714 Gt C · five pools',
    blurb:
      'How much carbon forests hold across living biomass, dead wood, litter and soil, as reported in FAO’s global forest assessment.',
    what: 'FAO’s Global Forest Resources Assessment 2025 estimates total forest carbon stock at about 714 gigatonnes of carbon (roughly 172 t C per hectare). About 46% of that stock is in soil, 44% in living biomass, and the rest in litter and dead wood. The FRA report and FAO’s FRA-2025 hub publish the pool tables and regional breakdowns; the newsroom release summarises the headline figure.',
    why: 'A national carbon-stock total answers a different question from a mapped aboveground biomass density in tonnes per hectare. The 714 Gt C figure comes from FAO’s pool-by-pool accounting, which includes soil, litter and dead wood as well as trees.',
    howToRead:
      'FRA carbon stock is built from country reports under shared pool definitions. It is not the same as satellite aboveground biomass density products, and it is not limited to tree stems — soil is the largest single pool in the 2025 total. The FRA 2025 tables give pool shares and regional totals, which are the right basis for any comparison with map layers.',
  },
  'tree-cover': {
    title: 'Tree cover',
    meta: 'NASA MODIS MOD44B · percent tree cover · ~250 m',
    blurb:
      'How much of each landscape is covered by tree canopy, as a continuous percent — the standing cover layer, not a map of yearly loss.',
    what: 'NASA’s MODIS Vegetation Continuous Fields product (MOD44B, Collection 6.1) maps percent tree cover, percent non-tree vegetation, and percent bare ground each year at about 250 m resolution. The Earthdata catalog entry and the MOD44B user guide describe the product. For related canopy-change context, the GLAD / Hansen Global Forest Change viewer and download pages show tree-cover and loss layers used widely in research — useful companions, not substitutes for the VCF percent field.',
    why: 'Annual tree-cover loss shows where canopy disappeared. Percent tree cover shows how much canopy is there. Both matter, and they answer different questions.',
    howToRead:
      'VCF percent tree cover is a continuous fraction inside each pixel, not a binary forest/non-forest mask and not FAO land-use forest area. Dense canopy can score high even in mosaics that FRA would class differently. Use MOD44B for standing cover; use loss products when the question is where canopy was removed.',
  },
  peatlands: {
    title: 'Peatlands',
    meta: 'UNEP GPA 2022 · organic soils · carbon-dense wetlands',
    blurb:
      'Where waterlogged organic soils store vast amounts of carbon in a small share of the land — peatland extent and status from the global assessment.',
    what: 'The UNEP Global Peatlands Assessment 2022 (The State of the World’s Peatlands) is the main global status report on peatland extent, condition, carbon and pressures. UNEP’s assessment page and the full report PDF set out the evidence; a short press summary is also available. FAO’s Peatlands programme pages and the Greifswald Mire Centre Global Peatland Database add agency and mapping context.',
    why: 'Peatlands cover only a few percent of the land surface but hold a large share of soil carbon. Drained or burned peat releases carbon that forests and climate accounts must treat carefully. FAO’s forest assessment finds that soil is the largest forest carbon pool, and peatlands hold much of that soil carbon.',
    howToRead:
      'The assessment combines mapped peatland extent with regional status. Not all peatlands are forested, and not all forest soils are peat — peatland figures describe organic-soil ecosystems and their carbon, not forest area. Use UNEP GPA for global status; use national peat maps when the question is a single country.',
  },
};

const ru: Record<ForestAtlasSlug, ForestAtlasCopy> = {
  'canopy-height': {
    title: 'Высота полога',
    meta: 'NASA GEDI L3 · средняя высота RH100 · ~1 км',
    blurb:
      'Насколько высок лесной полог по космическому лидару — средняя RH100 на сетке ~1 км, не потеря покрова и не запас углерода.',
    detailShort:
      'GEDI L3 (ORNL DAAC 1952) — сеточные метрики поверхности, включая среднюю высоту полога RH100 (~1 км, примерно ±52° широты). Данные и документация опубликованы на NASA Earthdata, в просмотрщике ORNL DAAC и на gedi.umd.edu. Слой показывает структуру и высоту полога, а не потерю площади и не надземную биомассу.',
  },
  'aboveground-biomass': {
    title: 'Надземная биомасса',
    meta: 'NASA GEDI L4B · сеточная AGBD v2.1 · т/га',
    blurb:
      'Плотность надземной биомассы по космическому лидару — тонны на гектар на сетке, другая величина, чем национальные запасы углерода и чем миссия ESA Biomass.',
    detailShort:
      'GEDI L4B (ORNL DAAC 2299) — сеточная плотность надземной биомассы (AGBD). Это плотность биомассы на сетке, другая метрика по сравнению с общим запасом углерода в статистике. Открывать Earthdata / dsviewer / user guide.',
  },
  'burned-area': {
    title: 'Площадь гарей',
    meta: 'MODIS MCD64CMQ · 2023 · доля ячейки 0,25°',
    blurb:
      'Где огонь выжег поверхность в 2023 году — годовая доля гарей MODIS MCD64 на сетке 0,25°, не потеря древесного покрова и не карта очагов FIRMS.',
    detailShort:
      'Плита — сумма месячных гарей MCD64CMQ (коллекция 6.1) за 2023 год, делённая на площадь ячейки 0,25°. FIRMS — отдельный слой активных очагов и здесь не нарисован.',
  },
  'ecological-zones': {
    title: 'Экологические зоны',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · отчётность FRA',
    blurb:
      'Глобальные экологические зоны FAO для оценки лесных ресурсов — климатико-экологическая рамка лесных земель, не потеря покрова и не реконструкция биомов.',
    detailShort:
      'GEZ (второе издание / 2010) — классы для FRA. Данные и документация опубликованы в каталоге FAO, в PDF ap861e, в Open Knowledge и на сайте FRA. GEZ задаёт климатико-экологическую рамку для статистики лесов; её классы отличаются от реконструкций биомов и карт состояния лесов.',
  },
  'planted-forests': {
    title: 'Посаженные леса',
    meta: 'FAO FRA 2025 · ~312 млн га · посадки и плантации',
    blurb:
      'Какая доля мировых лесов создана посадкой и где карты лесоуправления отделяют посаженные насаждения от естественно возобновляющихся лесов.',
    detailShort:
      'По оценке Глобальной оценки лесных ресурсов ФАО 2025 года (FRA 2025), посаженные леса занимают около 312 млн га — примерно 8% всей лесной площади; в докладе различают плантационные и прочие посаженные леса. Пространственную картину даёт карта лесоуправления Lesiv и соавторы (2022) с разрешением 100 м на 2015 год, где есть классы посаженного леса и короткоцикловых плантаций. Площадь посадок может расти, пока сокращается первичный лес: посаженный древостой — не та же экосистема, что старый естественно возобновляющийся лес.',
  },
  'forest-carbon-stock': {
    title: 'Запас углерода в лесах',
    meta: 'FAO FRA 2025 · ~714 Гт C · пять пулов',
    blurb:
      'Сколько углерода удерживают леса в живой биомассе, мёртвой древесине, подстилке и почве — по данным глобальной оценки лесных ресурсов ФАО.',
    detailShort:
      'По FRA 2025 общий запас углерода в лесах составляет около 714 гигатонн углерода (примерно 172 т C/га). Около 46% этого запаса приходится на почву, 44% — на живую биомассу, остальное — на подстилку и мёртвую древесину. Это национальный учёт по пулам, а не карта плотности надземной биомассы в тоннах на гектар: цифра 714 Гт C включает почву, подстилку и мёртвую древесину, а не только деревья.',
  },
  'tree-cover': {
    title: 'Древесный покров',
    meta: 'NASA MODIS MOD44B · доля покрова · ~250 м',
    blurb:
      'Какая доля ландшафта закрыта древесным пологом — непрерывная процентная оценка, а не карта ежегодных потерь.',
    detailShort:
      'Продукт NASA MODIS «непрерывные поля растительности» (MOD44B, коллекция 6.1) ежегодно картирует процент древесного покрова, недревесной растительности и открытого грунта с разрешением около 250 м. Описание есть в каталоге Earthdata и в руководстве пользователя MOD44B. Годовая потеря покрова показывает, где полог исчез; процент покрова показывает, сколько полога есть сейчас. Это непрерывная доля в пикселе, а не бинарная маска «лес / не лес» и не площадь леса по определению ФАО.',
  },
  peatlands: {
    title: 'Торфяники',
    meta: 'UNEP GPA 2022 · органические почвы · углеродоёмкие водно-болотные системы',
    blurb:
      'Где переувлажнённые органические почвы хранят огромные запасы углерода на малой доле суши — площадь и состояние торфяников по глобальной оценке.',
    detailShort:
      'Глобальная оценка торфяников ЮНЕП 2022 года («Состояние торфяников мира») — главный обзор площади, состояния, углерода и нагрузок на торфяники. Дополняют её страницы программы ФАО по торфяникам и Всемирная база данных торфяников Грайфсвальдского центра болот. Торфяники занимают лишь несколько процентов суши, но удерживают большую долю почвенного углерода; не все торфяники лесные, и не все лесные почвы — торф.',
  },
};

const pl: Record<ForestAtlasSlug, ForestAtlasCopy> = {
  'canopy-height': {
    title: 'Wysokość koron',
    meta: 'NASA GEDI L3 · średnia wysokość RH100 · ~1 km',
    blurb:
      'Jak wysoki jest koronowy piętro lasu z lidarowego satelity — średnia RH100 na siatce ~1 km, nie utrata pokrywy i nie zapas węgla.',
    detailShort:
      'GEDI L3 (ORNL DAAC 1952) — siatkowe metryki powierzchni, w tym średnia wysokość koron RH100 (~1 km, ok. ±52° szerokości). Dane i dokumentacja są publikowane w NASA Earthdata, w przeglądarce ORNL DAAC oraz na gedi.umd.edu. Warstwa pokazuje strukturę i wysokość koron, a nie utratę powierzchni i nie biomasę nadziemną.',
  },
  'aboveground-biomass': {
    title: 'Biomasa nadziemna',
    meta: 'NASA GEDI L4B · siatkowe AGBD v2.1 · Mg/ha',
    blurb:
      'Gęstość biomasy nadziemnej z lidaru — tony na hektar na siatce, inna wielkość niż krajowe zapasy węgla i niż misja ESA Biomass.',
    detailShort:
      'GEDI L4B (ORNL DAAC 2299) — siatkowa gęstość biomasy nadziemnej (AGBD). To gęstość biomasy na siatce, inna metryka niż ogólny zapas węgla w statystykach. Otworzyć Earthdata / dsviewer / przewodnik.',
  },
  'burned-area': {
    title: 'Areał spalenisk',
    meta: 'MODIS MCD64CMQ · 2023 · udział komórki 0,25°',
    blurb:
      'Gdzie ogień spalił powierzchnię w 2023 roku — roczny udział spalenisk MODIS MCD64 na siatce 0,25°, nie sama utrata pokrywy drzewnej i nie mapa ognisk FIRMS.',
    detailShort:
      'Płyta to suma miesięcznych spalenisk MCD64CMQ (kolekcja 6.1) z 2023 roku podzielona przez powierzchnię komórki 0,25°. FIRMS to osobna warstwa aktywnych ognisk i nie jest tu narysowana.',
  },
  'ecological-zones': {
    title: 'Strefy ekologiczne',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · sprawozdawczość FRA',
    blurb:
      'Globalne strefy ekologiczne FAO dla oceny zasobów leśnych — klimatyczno-ekologiczna rama gruntów leśnych, nie utrata pokrywy i nie rekonstrukcja biomów.',
    detailShort:
      'GEZ (drugie wydanie / 2010) — klasy dla FRA. Dane i dokumentacja są publikowane w katalogu FAO, w PDF ap861e, w Open Knowledge i na stronie FRA. GEZ tworzy klimatyczno-ekologiczne ramy dla statystyk leśnych; jej klasy różnią się od rekonstrukcji biomów oraz warstw stanu lasów.',
  },
  'planted-forests': {
    title: 'Lasy sadzone',
    meta: 'FAO FRA 2025 · ~312 mln ha · nasadzenia i plantacje',
    blurb:
      'Jaką część światowych lasów założono przez sadzenie i gdzie mapy gospodarki leśnej odróżniają drzewostany sadzone od lasów odnawiających się naturalnie.',
    detailShort:
      'Według Globalnej Oceny Zasobów Leśnych FAO 2025 (FRA 2025) lasy sadzone zajmują około 312 mln ha — mniej więcej 8% całkowitej powierzchni leśnej; raport rozróżnia lasy plantacyjne i inne lasy sadzone. Widok przestrzenny daje mapa gospodarki leśnej Lesiv i współautorzy (2022) w rozdzielczości 100 m dla 2015 roku, z klasami lasu sadzonego i krótkocyklicznych plantacji. Powierzchnia nasadzeń może rosnąć, gdy kurczy się las pierwotny: drzewostan sadzony to nie ten sam ekosystem co stary las odnawiający się naturalnie.',
  },
  'forest-carbon-stock': {
    title: 'Zapas węgla w lasach',
    meta: 'FAO FRA 2025 · ~714 Gt C · pięć pul',
    blurb:
      'Ile węgla lasy magazynują w żywej biomasie, martwym drewnie, ściółce i glebie — według globalnej oceny zasobów leśnych FAO.',
    detailShort:
      'Według FRA 2025 całkowity zapas węgla w lasach wynosi około 714 gigaton węgla (ok. 172 t C/ha). Około 46% tego zapasu jest w glebie, 44% w żywej biomasie, a reszta w ściółce i martwym drewnie. To krajowa księgowość pul, a nie mapa gęstości biomasy nadziemnej w tonach na hektar: liczba 714 Gt C obejmuje glebę, ściółkę i martwe drewno, a nie tylko drzewa.',
  },
  'tree-cover': {
    title: 'Pokrycie drzewami',
    meta: 'NASA MODIS MOD44B · procent pokrycia · ~250 m',
    blurb:
      'Jaka część krajobrazu jest pokryta koronami drzew — ciągła miara procentowa, a nie mapa corocznych strat.',
    detailShort:
      'Produkt NASA MODIS ciągłych pól roślinności (MOD44B, kolekcja 6.1) co roku mapuje procent pokrycia drzewami, roślinnością niedrzewną i gołą glebą w rozdzielczości około 250 m. Opis jest w katalogu Earthdata i w przewodniku użytkownika MOD44B. Coroczna strata pokrycia pokazuje, gdzie korony zniknęły; procent pokrycia pokazuje, ile koron jest teraz. To ciągła frakcja w pikselu, a nie binarna maska „las / nie-las” i nie powierzchnia lasu w sensie FAO.',
  },
  peatlands: {
    title: 'Torfowiska',
    meta: 'UNEP GPA 2022 · gleby organiczne · węglowe mokradła',
    blurb:
      'Gdzie podmokłe gleby organiczne magazynują ogromne ilości węgla na małym ułamku lądu — zasięg i stan torfowisk według globalnej oceny.',
    detailShort:
      'Globalna Ocena Torfowisk UNEP 2022 („Stan torfowisk świata”) to główny przegląd zasięgu, stanu, węgla i presji na torfowiska. Uzupełniają ją strony programu FAO ds. torfowisk oraz Światowa baza torfowisk Centrum Greifswald. Torfowiska zajmują tylko kilka procent lądu, ale trzymają dużą część węgla glebowego; nie wszystkie torfowiska są leśne i nie wszystkie gleby leśne to torf.',
  },
};

const lv: Record<ForestAtlasSlug, ForestAtlasCopy> = {
  'canopy-height': {
    title: 'Vainagu augstums',
    meta: 'NASA GEDI L3 · vidējais RH100 vainagu augstums · ~1 km',
    blurb:
      'Cik augsts ir meža vainagu stāvs no kosmiskā lidara — vidējais RH100 uz ~1 km režģa, ne seguma zudums un ne oglekļa krājums.',
    detailShort:
      'GEDI L3 (ORNL DAAC 1952) — režģa virsmas metriki, tostarp vidējais vainagu augstums RH100 (~1 km, aptuveni ±52° platuma). Dati un dokumentācija ir publicēti NASA Earthdata, ORNL DAAC datu skatītājā un vietnē gedi.umd.edu. Slānis rāda vainagu struktūru un augstumu, ne platības zudumu un ne virszemes biomasu.',
  },
  'aboveground-biomass': {
    title: 'Virszemes biomasa',
    meta: 'NASA GEDI L4B · režģa AGBD v2.1 · Mg/ha',
    blurb:
      'Virszemes biomasas blīvums no lidara — tonnas uz hektāru uz režģa, cita mērvienība nekā nacionālie oglekļa krājumi un nekā ESA Biomass misija.',
    detailShort:
      'GEDI L4B (ORNL DAAC 2299) — režģa virszemes biomasas blīvums (AGBD). Tas ir biomasas blīvums uz režģa, cita metrika nekā kopējais oglekļa krājums statistikā. Atvērt Earthdata / dsviewer / ceļvedi.',
  },
  'burned-area': {
    title: 'Izdegušās platības',
    meta: 'MODIS MCD64CMQ · 2023 · 0,25° šūnas daļa',
    blurb:
      'Kur uguns 2023. gadā nodedzinājusi virsmu — MODIS MCD64 gada izdegumu daļa uz 0,25° režģa, ne tikai koku seguma zudums un ne FIRMS perēkļu karte.',
    detailShort:
      'Plate ir MCD64CMQ (6.1 kolekcija) 2023. gada mēneša izdegumu summa, dalīta ar 0,25° šūnas platību. FIRMS ir atsevišķs aktīvo perēkļu slānis, un tas šeit nav uzzīmēts.',
  },
  'ecological-zones': {
    title: 'Ekoloģiskās zonas',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · FRA ziņošana',
    blurb:
      'FAO globālās ekoloģiskās zonas meža resursu novērtējumam — klimatiski ekoloģiskais meža zemju ietvars, ne seguma zudums un ne biomu rekonstrukcija.',
    detailShort:
      'GEZ (otrais izdevums / 2010) — klases FRA vajadzībām. Dati un dokumentācija ir publicēti FAO katalogā, PDF ap861e, Open Knowledge un FRA vietnē. GEZ veido klimatiski ekoloģisku ietvaru mežu statistikai; tās klases atšķiras no biomu rekonstrukcijām un mežu stāvokļa slāņiem.',
  },
  'planted-forests': {
    title: 'Stādītie meži',
    meta: 'FAO FRA 2025 · ~312 milj. ha · stādījumi un plantācijas',
    blurb:
      'Cik liela daļa pasaules mežu izveidota, stādot, un kur meža apsaimniekošanas kartes atdala stādītas audzes no dabiski atjaunojošiem mežiem.',
    detailShort:
      'Pēc FAO Globālā meža resursu novērtējuma 2025 (FRA 2025) stādītie meži aizņem aptuveni 312 milj. ha — apmēram 8% no kopējās meža platības; ziņojumā nošķir plantāciju mežus un citus stādītos mežus. Telpisku skatu dod Lesiv un līdzautori (2022) meža apsaimniekošanas karte ar 100 m izšķirtspēju 2015. gadam, kurā ir stādīta meža un īscikla plantāciju klases. Stādījumu platība var pieaugt, kamēr sarūk pirmreizējais mežs: stādīta audze nav tā pati ekosistēma, kas vecs dabiski atjaunojošs mežs.',
  },
  'forest-carbon-stock': {
    title: 'Meža oglekļa krājums',
    meta: 'FAO FRA 2025 · ~714 Gt C · pieci baseini',
    blurb:
      'Cik daudz oglekļa meži uzkrāj dzīvajā biomasā, mirušajā koksnē, nobirās un augsnē — pēc FAO globālā meža resursu novērtējuma.',
    detailShort:
      'Pēc FRA 2025 kopējais meža oglekļa krājums ir aptuveni 714 gigatonnas oglekļa (apmēram 172 t C/ha). Aptuveni 46% no šā krājuma ir augsnē, 44% — dzīvajā biomasā, pārējais — nobirās un mirušajā koksnē. Tā ir valstu uzskaite pa baseiniem, nevis virszemes biomasas blīvuma karte tonnās uz hektāru: skaitlis 714 Gt C ietver augsni, nobiras un mirušo koksni, nevis tikai kokus.',
  },
  'tree-cover': {
    title: 'Koku segums',
    meta: 'NASA MODIS MOD44B · seguma procenti · ~250 m',
    blurb:
      'Cik lielu ainavas daļu aizņem koku vainagi — nepārtraukts procentuālais rādītājs, nevis ikgadējo zudumu karte.',
    detailShort:
      'NASA MODIS nepārtraukto veģetācijas lauku produkts (MOD44B, kolekcija 6.1) katru gadu kartē koku seguma, citu veģetācijas un kailās augsnes procentus aptuveni 250 m izšķirtspējā. Apraksts ir Earthdata katalogā un MOD44B lietotāja ceļvedī. Ikgadējais seguma zudums rāda, kur vainagi pazuduši; seguma procenti rāda, cik vainagu ir tagad. Tā ir nepārtraukta frakcija pikselī, nevis bināra maska «mežs / nav mežs» un nevis FAO izpratnes meža platība.',
  },
  peatlands: {
    title: 'Kūdrāji',
    meta: 'UNEP GPA 2022 · organiskās augsnes · oglekļa bagāti mitrāji',
    blurb:
      'Kur pārmitrās organiskās augsnes uzkrāj milzīgu oglekļa daudzumu nelielā sauszemes daļā — kūdrāju izplatība un stāvoklis pēc globālā novērtējuma.',
    detailShort:
      'UNEP Globālais kūdrāju novērtējums 2022 («Pasaules kūdrāju stāvoklis») ir galvenais pārskats par kūdrāju platību, stāvokli, oglekli un slodzēm. To papildina FAO kūdrāju programmas lapas un Greifswald purvu centra pasaules kūdrāju datubāze. Kūdrāji aizņem tikai dažus procentus sauszemes, bet uzkrāj lielu daļu augsnes oglekļa; ne visi kūdrāji ir mežaini, un ne visas meža augsnes ir kūdra.',
  },
};

const copy: Record<Locale, Record<ForestAtlasSlug, ForestAtlasCopy>> = { en, ru, pl, lv };

export function forestAtlasChrome(locale: Locale): ForestAtlasChrome {
  return chrome[locale] ?? chrome.en;
}

export function getForestAtlas(locale: Locale): ForestAtlasEntry[] {
  const fields = copy[locale] ?? copy.en;
  return forestAtlasMeta.map((meta) => ({ ...meta, ...fields[meta.slug] }));
}

export function getForestAtlasBySlug(
  locale: Locale,
  slug: string,
): ForestAtlasEntry | undefined {
  const meta = forestAtlasMeta.find((item) => item.slug === slug);
  if (!meta) return undefined;
  const fields = (copy[locale] ?? copy.en)[meta.slug];
  return { ...meta, ...fields };
}
