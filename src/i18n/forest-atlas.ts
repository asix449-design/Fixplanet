import {
  forestAtlasMeta,
  type ForestAtlasMeta,
  type ForestAtlasSlug,
} from '../data/forest-atlas';
import type { PrimarySource } from '../data/sources';
import type { Locale } from './config';
import { forestNumberCopy } from './forest-numbers';

export type ForestAtlasCopy = {
  title: string;
  meta: string;
  blurb: string;
  what?: string;
  why?: string;
  howToRead?: string;
  limits?: string;
  detailShort?: string;
  caption?: string;
  credit?: string;
  licenseUrl?: string;
  imageAlt?: string;
  /** Localized grid source line. Falls back to the English meta label. */
  sourceLabel?: string;
  /** Localized numbered sources. Falls back to the English meta list. */
  sources?: PrimarySource[];
  /** Commons file page. Shown when it is not already the licence link. */
  imagePageUrl?: string;
};

export type ForestAtlasEntry = ForestAtlasMeta & ForestAtlasCopy;

export type ForestAtlasChrome = {
  badge: string;
  readMore: string;
  openSource: string;
  schematic: string;
  layersAria: string;
  imagePage: string;
};

/** Section headings. Map plates in RU, PL and LV still use the short detail only. */
export const forestAtlasSectionLabels = {
  what: 'What it is',
  why: 'Why it matters',
  how: 'How to read it',
  limits: 'Limits',
} as const;

const forestAtlasSectionsByLocale = {
  en: forestAtlasSectionLabels,
  ru: {
    what: 'Что это',
    why: 'Почему это важно',
    how: 'Как это читать',
    limits: 'Ограничения',
  },
  pl: {
    what: 'Czym to jest',
    why: 'Dlaczego to ważne',
    how: 'Jak to czytać',
    limits: 'Ograniczenia',
  },
  lv: {
    what: 'Kas tas ir',
    why: 'Kāpēc tas ir svarīgi',
    how: 'Kā to lasīt',
    limits: 'Ierobežojumi',
  },
} as const;

export function forestAtlasSections(locale: Locale) {
  return forestAtlasSectionsByLocale[locale] ?? forestAtlasSectionLabels;
}

/** Hub lede. The last sentence is the Numbers doorway line. */
export const forestAtlasHubLede: Record<Locale, string> = {
  en: 'Figures from the Food and Agriculture Organization of the United Nations, satellite greenness, reconstructions, and outlooks, plus planted forests, forest carbon stock, tree cover, peatlands, canopy height, aboveground biomass density, burned area, and ecological zones. Each layer names its publisher and what the layer measures. Five headline figures now open their own pages: forest remaining, primary forest, net forest-area loss, tropical primary forest loss and the number of trees alive.',
  ru: 'Цифры Продовольственной и сельскохозяйственной организации Объединённых Наций, спутниковая зелень, реконструкции и перспективы, а также посаженные леса, запас углерода в лесах, древесный покров, торфяники, высота полога, плотность надземной биомассы, площадь гарей и экологические зоны. У каждого слоя указаны издатель и то, что слой измеряет. Пять главных показателей теперь открываются на отдельных страницах: лес, который остался, первичные леса, чистая потеря площади леса, потеря тропического первичного леса и число живых деревьев.',
  pl: 'Liczby Organizacji Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, zieleń z satelity, rekonstrukcje i perspektywy, oraz lasy sadzone, zapas węgla w lasach, pokrycie drzewami, torfowiska, wysokość koron, gęstość biomasy nadziemnej, areał spalenisk i strefy ekologiczne. Przy każdej warstwie podany jest wydawca i to, co warstwa mierzy. Pięć głównych wskaźników ma teraz własne strony: las, który został, lasy pierwotne, strata netto powierzchni lasu, utrata tropikalnego lasu pierwotnego i liczba żywych drzew.',
  lv: 'Skaitļi no Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācijas, satelītu zaļums, rekonstrukcijas un nākotnes skati, kā arī stādītie meži, meža oglekļa krājums, koku segums, kūdrāji, vainagu augstums, virszemes biomasas blīvums, izdegušās platības un ekoloģiskās zonas. Katram slānim norādīts izdevējs un tas, ko slānis mēra. Piecus galvenos rādītājus tagad var atvērt atsevišķās lapās: mežs, kas palicis, primārie meži, neto meža platības zudums, tropu primārā meža zudums un dzīvo koku skaits.',
};

const chrome: Record<Locale, ForestAtlasChrome> = {
  en: {
    badge: 'Schematic',
    readMore: 'Open the layer',
    openSource: 'Open the source',
    schematic: 'Schematic after the named source. Open the source for the current layer.',
    layersAria: 'Forest measurements',
    imagePage: 'Image page',
  },
  ru: {
    badge: 'Схема',
    readMore: 'Открыть слой',
    openSource: 'Открыть источник',
    schematic: 'Схема по названному источнику. Актуальный слой есть в источнике.',
    layersAria: 'Измерения лесов',
    imagePage: 'Страница изображения',
  },
  pl: {
    badge: 'Schemat',
    readMore: 'Otwórz warstwę',
    openSource: 'Otwórz źródło',
    schematic: 'Schemat według nazwanego źródła. Aktualna warstwa jest w źródle.',
    layersAria: 'Pomiary lasów',
    imagePage: 'Strona obrazu',
  },
  lv: {
    badge: 'Shēma',
    readMore: 'Atvērt slāni',
    openSource: 'Atvērt avotu',
    schematic: 'Shēma pēc nosauktā avota. Aktuālais slānis ir avotā.',
    layersAria: 'Meža mērījumi',
    imagePage: 'Attēla lapa',
  },
};

const en = {
  'canopy-height': {
    title: 'Canopy height',
    meta: 'NASA GEDI L3 · RH100 mean canopy height · ~1 km',
    blurb:
      'How tall the forest canopy is, measured by spaceborne lidar as a mean top height on a grid of about 1 kilometre.',
    what: 'NASA GEDI L3 Gridded Land Surface Metrics v2 (Oak Ridge dataset 10.3334/ORNLDAAC/1952) publishes gridded land-surface metrics from the Global Ecosystem Dynamics Investigation lidar on the International Space Station, including mean canopy height at about 1 km resolution within roughly 52 degrees north and south. Data and documentation are on NASA Earthdata, the Oak Ridge dataset viewer for dataset 1952, and the mission pages at the University of Maryland. Further reading includes Potapov and colleagues, Nature Ecology and Evolution (2021). The layer shows how tall the stands are.',
    why: 'Canopy height is a structure measurement: how tall the canopy is.',
    howToRead:
      'The height metric is a relative height near the top of the lidar waveform, a proxy for canopy top height. Coverage stops near 52 degrees north and south, so polar and some high-latitude forests are outside this grid. Product documentation is on the Earthdata catalog and the Oak Ridge dataset viewer. The mission pages describe the instrument.',
  },
  'aboveground-biomass': {
    title: 'Aboveground biomass',
    meta: 'NASA GEDI L4B · gridded AGBD v2.1 · Mg/ha',
    blurb:
      'Aboveground biomass density from spaceborne lidar, mapped in tonnes per hectare.',
    what: 'NASA GEDI L4B Gridded Aboveground Biomass Density v2.1 (ORNL DAAC DOI 10.3334/ORNLDAAC/2299) estimates aboveground biomass density (AGBD) on a regular grid from GEDI lidar samples. Data and documentation are published on NASA Earthdata, the ORNL DAAC dataset viewer for dataset 2299, and the ORNL GEDI L4B user guide. The layer is a biomass-density map.',
    why: 'Forest statistics may report a carbon stock total of about 714 gigatonnes of carbon. This plate is a mapped density in tonnes per hectare from the same lidar.',
    howToRead:
      'The field is living aboveground biomass density, typically megagrams per hectare. Coverage follows the lidar sampling geography, and the product documentation includes uncertainty layers. The Earthdata catalog, the Oak Ridge dataset viewer for 2299, and the user guide describe the field.',
  },
  'burned-area': {
    title: 'Burned area',
    meta: 'MODIS MCD64CMQ · 2023 · share of each 0.25° cell',
    blurb:
      'Where fire burned in 2023, as the annual burned fraction on a quarter-degree grid.',
    what: 'MODIS MCD64A1 (Collection 6.1) is NASA’s global monthly burned-area product. This plate uses the University of Maryland climate-modeling grid of that product: monthly burned area in hectares on a quarter-degree grid, summed for 2023 and divided by the area of each cell. Further reading includes the Global Fire Emissions Database and the Earth Observatory fire map.',
    why: 'This layer answers where fire burned in 2023. Prescribed fire is a management practice. Agricultural burning, savanna fire, and forest wildfire can all appear in the annual total.',
    howToRead:
      'The colour is the share of each 0.25° cell that burned in 2023. Ocean and land the product left unmapped stay grey. A few cells that burned more than their own area are drawn as 1. FIRMS hotspot points are a different layer. Agricultural burning, savanna fire, and forest wildfire all appear. The LP DAAC MCD64A1 page describes the source product.',
  },
  'ecological-zones': {
    title: 'Ecological zones',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · FRA reporting',
    blurb:
      'Climatic and ecological zones used for forest reporting: a zoning of land by climate and ecology.',
    what: 'The Global Ecological Zones, second edition, the 2010 update used in Forest Resources Assessment reporting, classify the world’s land into ecological zones for consistent forest statistics. Data and documentation are in the Food and Agriculture Organization catalog, the zones PDF, the Open Knowledge record, and on the assessment site. The layer is that climatic and ecological zoning.',
    why: 'The zones place forest statistics in a climate and ecology frame.',
    howToRead:
      'The classes include tropical rainforest, boreal coniferous, temperate oceanic, and others. They place the assessment tables and national forest statistics in climatic context. The catalog dataset and the zones PDF describe the classes.',
  },
  'planted-forests': {
    title: 'Planted forests',
    meta: 'Lesiv 2015 · planted share · FRA ~312 Mha',
    blurb:
      'Where the 2015 forest-management map marks planted forest and short-rotation timber plantation, with the reported total of about 312 million hectares.',
    what: 'The plate is the Lesiv and colleagues (2022) global forest-management raster for 2015, 100 metre classes, counted as the share of each 0.02 degree cell in planted forest (rotation longer than 15 years) or short-rotation timber plantation. Oil palm is a separate class in that raster and stays off this plate. The 2025 forest assessment still reports planted forests at about 312 million hectares, roughly 8 percent of total forest area. That hectare total is a national land-use statistic. The colour on this plate is the 2015 map share.',
    why: 'Planted area can rise while primary forest falls. A planted stand and an old naturally regenerating forest are different ecosystems.',
    howToRead:
      'Colour is the share of the cell in those two planted classes. Empty land falls outside those classes. The pattern is for 2015. The oil-palm class stays out of the forest-area total unless the definitions are checked first.',
  },
  'forest-carbon-stock': {
    title: 'Forest carbon stock',
    meta: 'FAO FRA 2025 · living biomass · million tonnes',
    blurb:
      'Country totals of living-biomass carbon in 2025, aboveground plus belowground, from the forest assessment, with the five-pool global total alongside.',
    what: 'The plate is a country choropleth of living-biomass carbon from the 2025 forest assessment tables: aboveground plus belowground, year 2025, in million tonnes. Countries that did not report both pools stay grey. The same assessment estimates total forest carbon, all five pools, at about 714 gigatonnes (roughly 172 tonnes of carbon per hectare): about 46 percent in soil, 44 percent in living biomass, and the rest in litter and dead wood. Soil, litter and dead wood stay off the plate, because far fewer countries report them.',
    why: 'A national carbon-stock total and a mapped aboveground biomass density in tonnes per hectare answer different questions. The 714 gigatonne figure comes from pool-by-pool accounting, which includes soil, litter and dead wood as well as trees.',
    howToRead:
      'The number on the scale is million tonnes of living-biomass carbon in 2025. Grey land has no paired aboveground and belowground report. Soil is the largest pool in the global 714 gigatonne figure and is absent from this plate.',
  },
  'tree-cover': {
    title: 'Tree cover',
    meta: 'ESA WorldCover 2021 · class 10 · 10 m',
    blurb:
      'Where the 2021 land-cover map assigns the tree-cover class, counted as the share of each cell.',
    what: 'The plate is ESA WorldCover 10 m 2021 v200 (CC BY 4.0). Colour is the share of 10 metre pixels in each 0.02 degree cell labelled class 10, tree cover. In that legend a pixel is tree cover when trees are the mapped class and cover at least 10 percent of it. Plantations, including oil palm, are inside class 10. Mangroves are class 95 and stay off this plate. The product maps land seen by Sentinel-2 and stops near 82.75 degrees north. Antarctica is outside it.',
    why: 'A land-cover class shows where the map calls the pixel trees. This layer is the 2021 class, counted as a share of the cell.',
    howToRead:
      'The number on the scale is the share of the 0.02° cell in class 10. Empty land was classed as something else. A high share can include plantations. Grey land is outside the WorldCover land mask. Use a loss product when the question is where canopy was removed.',
  },
  peatlands: {
    title: 'Peatlands',
    meta: 'PEATMAP · Xu et al. 2018 · peat extent',
    blurb:
      'Where the peat map records peat: a global extent of organic soils.',
    what: 'The plate is PEATMAP (Xu and colleagues 2018, University of Leeds, CC BY 4.0): published peat polygons, drawn wherever a polygon touches a 0.02 degree cell. The UN Environment Programme Global Peatlands Assessment 2022 is the status report on condition, carbon and pressures. The Food and Agriculture Organization peatland pages and the Greifswald Mire Centre database are further context.',
    why: 'Peatlands cover only a few percent of the land surface but hold a large share of soil carbon. Drained or burned peat releases carbon that forests and climate accounts must treat carefully. FAO’s forest assessment finds that soil is the largest forest carbon pool, and peatlands hold much of that soil carbon.',
    howToRead:
      'A coloured cell is touched by a PEATMAP peat polygon. The colour records presence. Use the UN Environment Programme assessment for global status and a national peat map when the question is a single country. Some peatlands carry forest, and some forest soils are mineral soils.',
  },
};

const ru = {
  'canopy-height': {
    title: 'Высота полога',
    meta: 'NASA GEDI L3 · средняя высота RH100 · ~1 км',
    blurb:
      'Насколько высок лесной полог по измерению космического лидара: средняя высота верхней части полога на сетке около 1 километра.',
    detailShort:
      'Лидар исследования динамики экосистем на Международной космической станции публикует сеточные метрики поверхности, включая среднюю высоту верхней части полога на сетке около 1 километра, примерно между 52 градусами северной и южной широты. Данные и документация опубликованы в каталоге Earthdata, в просмотрщике архива Ок-Риджа для набора 1952 и на страницах миссии в Мэрилендском университете. Слой показывает высоту полога.',
  },
  'aboveground-biomass': {
    title: 'Надземная биомасса',
    meta: 'NASA GEDI L4B · сеточная AGBD v2.1 · т/га',
    blurb:
      'Плотность надземной биомассы по космическому лидару, в тоннах на гектар на сетке.',
    detailShort:
      'Сеточная плотность надземной биомассы по тому же лидару, набор 2299 архива Ок-Риджа, в тоннах на гектар. Документация есть в каталоге Earthdata и в руководстве к набору.',
  },
  'burned-area': {
    title: 'Площадь гарей',
    meta: 'MODIS MCD64CMQ · 2023 · доля ячейки 0,25°',
    blurb:
      'Где огонь выжег поверхность в 2023 году: годовая доля гарей на сетке в четверть градуса.',
    detailShort:
      'Плита складывает месячные гари продукта MODIS за 2023 год и делит сумму на площадь ячейки в четверть градуса. Цвет показывает долю ячейки, выжженную за год.',
  },
  'ecological-zones': {
    title: 'Экологические зоны',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · отчётность FRA',
    blurb:
      'Климатические и экологические зоны для отчётности о лесах: районирование суши по климату и экологии.',
    detailShort:
      'Глобальные экологические зоны, второе издание 2010 года, задают классы для оценки лесных ресурсов. Данные и документация опубликованы в каталоге Продовольственной и сельскохозяйственной организации Объединённых Наций и в описании зон. Зоны помещают статистику лесов в климатическую и экологическую рамку.',
  },
  'planted-forests': {
    title: 'Посаженные леса',
    meta: 'Lesiv 2015 · доля посаженных · FRA ~312 млн га',
    blurb:
      'Где карта лесоуправления 2015 года отмечает посаженный лес и короткоцикловую древесную плантацию, при оценке около 312 миллионов гектаров.',
    detailShort:
      'Плита показывает долю пикселей 100 метров классов «посаженный лес» (оборот дольше 15 лет) и «короткоцикловая древесная плантация» в ячейке 0,02 градуса по карте Лесив и соавторов (2022) за 2015 год. Масличная пальма является отдельным классом и в эту долю не входит. По оценке 2025 года посаженные леса занимают около 312 миллионов гектаров, примерно 8 процентов лесной площади. Это национальная статистика землепользования. Цвет на плите относится к карте 2015 года. Площадь посадок может расти, пока сокращается первичный лес.',
  },
  'forest-carbon-stock': {
    title: 'Запас углерода в лесах',
    meta: 'FAO FRA 2025 · живая биомасса · млн тонн',
    blurb:
      'Страновые суммы углерода живой биомассы за 2025 год, надземного и подземного, по оценке лесов, вместе с общим итогом по пяти пулам.',
    detailShort:
      'Плита показывает сумму надземного и подземного углерода живой биомассы по странам за 2025 год, в миллионах тонн, по таблицам оценки лесов. Страна без одного из этих двух пулов остаётся серой. Почва, подстилка и мёртвая древесина на рисунок не нанесены, потому что их сообщает меньше стран. Общий запас по всем пяти пулам составляет около 714 гигатонн углерода: около 46 процентов в почве и 44 процента в живой биомассе. Число на шкале выражено в миллионах тонн.',
  },
  'tree-cover': {
    title: 'Древесный покров',
    meta: 'ESA WorldCover 2021 · класс 10 · 10 м',
    blurb:
      'Где карта земного покрова за 2021 год ставит класс древесного покрова, посчитанный как доля ячейки.',
    detailShort:
      'Плита показывает долю пикселей 10 метров класса 10 (древесный покров) карты земного покрова Европейского космического агентства за 2021 год, версия v200 (CC BY 4.0), в ячейке 0,02 градуса. В этой легенде пиксель относится к древесному покрову, когда деревья являются назначенным классом и закрывают не меньше 10 процентов пикселя. Плантации, включая масличную пальму, входят в класс 10. Мангры относятся к классу 95 и на плиту не нанесены. Продукт покрывает сушу, видимую спутником Sentinel-2, и обрывается около 82,75 градуса северной широты. Антарктида в него не входит.',
  },
  peatlands: {
    title: 'Торфяники',
    meta: 'PEATMAP · Xu и соавторы, 2018 · распространение торфа',
    blurb:
      'Где карта торфа отмечает торф: глобальное распространение органических почв.',
    detailShort:
      'Плита закрашивает ячейку 0,02 градуса, если её касается полигон торфа по карте Сюй и соавторов, 2018 год. Цвет означает присутствие торфа. Глобальная оценка торфяников Программы ООН по окружающей среде 2022 года остаётся обзором состояния, углерода и нагрузок. Часть торфяников покрыта лесом, а часть лесных почв является минеральными.',
  },
};

const pl = {
  'canopy-height': {
    title: 'Wysokość koron',
    meta: 'NASA GEDI L3 · średnia wysokość RH100 · ~1 km',
    blurb:
      'Jak wysokie jest piętro koron lasu według lidaru z orbity: średnia wysokość wierzchołka na siatce około 1 kilometra.',
    detailShort:
      'GEDI L3 (ORNL DAAC 1952) — siatkowe metryki powierzchni, w tym średnia wysokość koron RH100 (~1 km, ok. ±52° szerokości). Dane i dokumentacja są publikowane w NASA Earthdata, w przeglądarce ORNL DAAC oraz na gedi.umd.edu. Warstwa pokazuje strukturę i wysokość koron, a nie utratę powierzchni i nie biomasę nadziemną.',
  },
  'aboveground-biomass': {
    title: 'Biomasa nadziemna',
    meta: 'NASA GEDI L4B · siatkowe AGBD v2.1 · Mg/ha',
    blurb:
      'Gęstość biomasy nadziemnej z lidaru, w tonach na hektar na siatce.',
    detailShort:
      'GEDI L4B (ORNL DAAC 2299) — siatkowa gęstość biomasy nadziemnej (AGBD). To gęstość biomasy na siatce, inna metryka niż ogólny zapas węgla w statystykach. Otworzyć Earthdata / dsviewer / przewodnik.',
  },
  'burned-area': {
    title: 'Areał spalenisk',
    meta: 'MODIS MCD64CMQ · 2023 · udział komórki 0,25°',
    blurb:
      'Gdzie ogień spalił powierzchnię w 2023 roku: roczny udział spalenisk na siatce ćwierć stopnia.',
    detailShort:
      'Płyta to suma miesięcznych spalenisk MCD64CMQ (kolekcja 6.1) z 2023 roku podzielona przez powierzchnię komórki 0,25°. FIRMS to osobna warstwa aktywnych ognisk i nie jest tu narysowana.',
  },
  'ecological-zones': {
    title: 'Strefy ekologiczne',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · sprawozdawczość FRA',
    blurb:
      'Strefy klimatyczne i ekologiczne do sprawozdawczości leśnej: podział lądu według klimatu i ekologii.',
    detailShort:
      'GEZ (drugie wydanie / 2010) — klasy dla FRA. Dane i dokumentacja są publikowane w katalogu FAO, w PDF ap861e, w Open Knowledge i na stronie FRA. GEZ tworzy klimatyczno-ekologiczne ramy dla statystyk leśnych; jej klasy różnią się od rekonstrukcji biomów oraz warstw stanu lasów.',
  },
  'planted-forests': {
    title: 'Lasy sadzone',
    meta: 'Lesiv 2015 · udział lasów sadzonych · FRA ~312 mln ha',
    blurb:
      'Gdzie mapa gospodarki leśnej z 2015 roku oznacza las sadzony i krótkocykliczną plantację drzewną, przy sumie około 312 milionów hektarów.',
    detailShort:
      'Płyta to udział pikseli 100 m klas „las sadzony” (okres rotacji dłuższy niż 15 lat) i „krótkocykliczna plantacja drzewna” w komórce 0,02° według mapy Lesiv i współautorzy (2022) za 2015 rok. Palma olejowa to osobna klasa i nie wchodzi do tego udziału. Według FRA 2025 lasy sadzone zajmują około 312 mln ha, mniej więcej 8% powierzchni leśnej: to krajowa statystyka użytkowania ziemi, a nie kolor na płycie. Powierzchnia nasadzeń może rosnąć, gdy kurczy się las pierwotny.',
  },
  'forest-carbon-stock': {
    title: 'Zapas węgla w lasach',
    meta: 'FAO FRA 2025 · żywa biomasa · mln ton',
    blurb:
      'Krajowe sumy węgla żywej biomasy w 2025 roku, nadziemnej i podziemnej, według oceny lasów, wraz z globalną sumą pięciu pul.',
    detailShort:
      'Płyta to suma nadziemnego i podziemnego węgla żywej biomasy według krajów za 2025 rok, w milionach ton, z tabel FRA 2025. Kraj bez jednej z tych dwóch pul zostaje szary. Gleba, ściółka i martwe drewno nie są narysowane. Całkowity zapas we wszystkich pięciu pulach to około 714 gigaton węgla: około 46% w glebie i 44% w żywej biomasie. To nie jest mapa gęstości biomasy w tonach na hektar.',
  },
  'tree-cover': {
    title: 'Pokrycie drzewami',
    meta: 'ESA WorldCover 2021 · klasa 10 · 10 m',
    blurb:
      'Gdzie mapa pokrycia terenu z 2021 roku nadaje klasę pokrycia drzewami, liczoną jako udział komórki.',
    detailShort:
      'Płyta to ESA WorldCover 10 m, 2021, wersja v200 (CC BY 4.0): udział pikseli 10 m klasy 10 (pokrycie drzewami) w komórce 0,02°. W tej legendzie piksel jest pokryciem drzewami, gdy drzewa są przypisaną klasą i zajmują co najmniej 10% piksela. Plantacje, w tym palma olejowa, wchodzą do klasy 10. Namorzyny to klasa 95 i nie są narysowane. Produkt obejmuje ląd widziany przez Sentinel-2 i urywa się około 82,75° szerokości północnej; Antarktyda jest poza nim. To nie jest procent zwarcia koron i nie jest coroczna strata pokrycia.',
  },
  peatlands: {
    title: 'Torfowiska',
    meta: 'PEATMAP · Xu i współautorzy, 2018 · zasięg torfu',
    blurb:
      'Gdzie mapa torfu zapisuje torf: globalny zasięg gleb organicznych.',
    detailShort:
      'Płyta to PEATMAP (Xu i współautorzy, 2018): komórka 0,02° jest zamalowana, gdy dotyka jej poligon torfu. To obecność torfu, a nie tony węgla i nie powierzchnia lasu. Globalna Ocena Torfowisk UNEP 2022 zostaje przeglądem stanu, węgla i presji, a nie tym rysunkiem. Nie wszystkie torfowiska są leśne i nie wszystkie gleby leśne to torf.',
  },
};

const lv = {
  'canopy-height': {
    title: 'Vainagu augstums',
    meta: 'NASA GEDI L3 · vidējais RH100 vainagu augstums · ~1 km',
    blurb:
      'Cik augsts ir meža vainagu stāvs pēc kosmiskā lidara mērījuma: vidējais vainaga augšas augstums uz režģa apmēram 1 kilometra.',
    detailShort:
      'GEDI L3 (ORNL DAAC 1952) — režģa virsmas metriki, tostarp vidējais vainagu augstums RH100 (~1 km, aptuveni ±52° platuma). Dati un dokumentācija ir publicēti NASA Earthdata, ORNL DAAC datu skatītājā un vietnē gedi.umd.edu. Slānis rāda vainagu struktūru un augstumu, ne platības zudumu un ne virszemes biomasu.',
  },
  'aboveground-biomass': {
    title: 'Virszemes biomasa',
    meta: 'NASA GEDI L4B · režģa AGBD v2.1 · Mg/ha',
    blurb:
      'Virszemes biomasas blīvums no lidara, tonnās uz hektāru uz režģa.',
    detailShort:
      'GEDI L4B (ORNL DAAC 2299) — režģa virszemes biomasas blīvums (AGBD). Tas ir biomasas blīvums uz režģa, cita metrika nekā kopējais oglekļa krājums statistikā. Atvērt Earthdata / dsviewer / ceļvedi.',
  },
  'burned-area': {
    title: 'Izdegušās platības',
    meta: 'MODIS MCD64CMQ · 2023 · 0,25° šūnas daļa',
    blurb:
      'Kur uguns 2023. gadā nodedzinājusi virsmu: gada izdegumu daļa uz ceturtdaļgrāda režģa.',
    detailShort:
      'Plate ir MCD64CMQ (6.1 kolekcija) 2023. gada mēneša izdegumu summa, dalīta ar 0,25° šūnas platību. FIRMS ir atsevišķs aktīvo perēkļu slānis, un tas šeit nav uzzīmēts.',
  },
  'ecological-zones': {
    title: 'Ekoloģiskās zonas',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · FRA ziņošana',
    blurb:
      'Klimata un ekoloģiskās zonas meža ziņošanai: sauszemes iedalījums pēc klimata un ekoloģijas.',
    detailShort:
      'GEZ (otrais izdevums / 2010) — klases FRA vajadzībām. Dati un dokumentācija ir publicēti FAO katalogā, PDF ap861e, Open Knowledge un FRA vietnē. GEZ veido klimatiski ekoloģisku ietvaru mežu statistikai; tās klases atšķiras no biomu rekonstrukcijām un mežu stāvokļa slāņiem.',
  },
  'planted-forests': {
    title: 'Stādītie meži',
    meta: 'Lesiv 2015 · stādīto daļa · FRA ~312 milj. ha',
    blurb:
      'Kur 2015. gada meža apsaimniekošanas karte atzīmē stādītu mežu un īscikla koksnes plantāciju, pie kopsummas aptuveni 312 miljoni hektāru.',
    detailShort:
      'Plate ir 100 m pikseļu daļa klasēs «stādīts mežs» (rotācijas periods ilgāks par 15 gadiem) un «īscikla koksnes plantācija» 0,02° šūnā pēc Lesiv un līdzautoru (2022) kartes 2015. gadam. Eļļas palma ir atsevišķa klase un šajā daļā nav. Pēc FRA 2025 stādītie meži aizņem aptuveni 312 milj. ha, apmēram 8% meža platības: tā ir valstu zemes lietojuma statistika, nevis krāsa uz plates. Stādījumu platība var pieaugt, kamēr sarūk pirmreizējais mežs.',
  },
  'forest-carbon-stock': {
    title: 'Meža oglekļa krājums',
    meta: 'FAO FRA 2025 · dzīvā biomasa · milj. tonnu',
    blurb:
      'Valstu dzīvās biomasas oglekļa summas 2025. gadā, virszemes un pazemes, pēc meža novērtējuma, kopā ar piecu baseinu kopsummu.',
    detailShort:
      'Plate ir virszemes un pazemes dzīvās biomasas oglekļa summa pa valstīm 2025. gadā, miljonos tonnu, no FRA 2025 tabulām. Valsts bez viena no šiem diviem baseiniem paliek pelēka. Augsne, nobiras un mirusī koksne nav uzzīmētas. Kopējais krājums visos piecos baseinos ir aptuveni 714 gigatonnas oglekļa: aptuveni 46% augsnē un 44% dzīvajā biomasā. Tā nav biomasas blīvuma karte tonnās uz hektāru.',
  },
  'tree-cover': {
    title: 'Koku segums',
    meta: 'ESA WorldCover 2021 · 10. klase · 10 m',
    blurb:
      'Kur 2021. gada zemes seguma karte piešķir koku seguma klasi, skaitītu kā šūnas daļu.',
    detailShort:
      'Plate ir ESA WorldCover 10 m, 2021, versija v200 (CC BY 4.0): 10 m pikseļu daļa 10. klasē (koku segums) 0,02° šūnā. Šajā leģendā pikselis ir koku segums, kad koki ir piešķirtā klase un aizņem vismaz 10% pikseļa. Plantācijas, tostarp eļļas palma, ir 10. klasē. Mangrovju meži ir 95. klase un nav uzzīmēti. Produkts aptver zemi, ko redz Sentinel-2, un apraujas aptuveni 82,75° ziemeļu platuma; Antarktīda tajā nav. Tā nav vainagu blīvuma procentu karte un nav ikgadējs seguma zudums.',
  },
  peatlands: {
    title: 'Kūdrāji',
    meta: 'PEATMAP · Xu un līdzautori, 2018 · kūdras izplatība',
    blurb:
      'Kur kūdras karte atzīmē kūdru: organisko augšņu globālā izplatība.',
    detailShort:
      'Plate ir PEATMAP (Xu un līdzautori, 2018): 0,02° šūna ir iekrāsota, ja tai pieskaras kūdras poligons. Tā ir kūdras klātbūtne, ne oglekļa tonnas un ne meža platība. UNEP Globālais kūdrāju novērtējums 2022 paliek stāvokļa, oglekļa un slodžu pārskats, nevis šis zīmējums. Ne visi kūdrāji ir mežaini, un ne visas meža augsnes ir kūdra.',
  },
};

const copy: Record<Locale, Record<ForestAtlasSlug, ForestAtlasCopy>> = {
  en: { ...en, ...forestNumberCopy.en },
  ru: { ...ru, ...forestNumberCopy.ru },
  pl: { ...pl, ...forestNumberCopy.pl },
  lv: { ...lv, ...forestNumberCopy.lv },
};

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
