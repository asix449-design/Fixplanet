import type { Locale } from './config';

export type HazardLayerId =
  | 'earthquakes'
  | 'cyclones'
  | 'floods'
  | 'volcanoes'
  | 'droughts'
  | 'wildfires'
  | 'fires';

export type HazardCredit = {
  name: string;
  href: string;
  license: string;
  licenseHref: string;
  text: string;
};

export type LiveHazardsPage = {
  tab: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  hubText: string;
  back: string;
  layersTitle: string;
  layersAria: string;
  showLayers: string;
  hideLayers: string;
  feedTitle: string;
  feedAria: string;
  feedEmpty: string;
  feedMore: string;
  live: string;
  loading: string;
  asOf: string;
  snapshotNote: string;
  mapLabel: string;
  mapFailed: string;
  dataFailed: string;
  magnitude: string;
  alert: string;
  depth: string;
  wind: string;
  frp: string;
  confidence: string;
  source: string;
  openSource: string;
  hotspot: string;
  close: string;
  km: string;
  kmh: string;
  knots: string;
  mw: string;
  layers: Record<HazardLayerId, string>;
  captions: Record<HazardLayerId, string>;
  droughtEurope: string;
  droughtEuropeCaption: string;
  rasterNote: string;
  rasterEuropeNote: string;
  alerts: { Red: string; Orange: string; Yellow: string; Green: string };
  sources: Record<'USGS' | 'GDACS' | 'EONET' | 'FIRMS' | 'NHC', string>;
  creditsTitle: string;
  creditsLead: string;
  credits: HazardCredit[];
};

const href = {
  usgs: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',
  usgsLicense: 'https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits',
  gdacs: 'https://www.gdacs.org/',
  gdacsLicense: 'https://www.gdacs.org/About/termofuse.aspx',
  firms: 'https://firms.modaps.eosdis.nasa.gov/',
  firmsLicense: 'https://www.earthdata.nasa.gov/data/instruments/lance-firms',
  eonet: 'https://eonet.gsfc.nasa.gov/',
  nhc: 'https://www.nhc.noaa.gov/',
  nhcLicense: 'https://www.weather.gov/disclaimer',
  drought: 'https://drought.emergency.copernicus.eu/',
  copernicusLicense: 'https://drought.emergency.copernicus.eu/terms&conditions',
  volcano: 'https://volcano.si.edu/',
  openfreemap: 'https://openfreemap.org/',
  odbl: 'https://www.openstreetmap.org/copyright',
  carto: 'https://carto.com/attributions',
  maplibre: 'https://maplibre.org/',
  maplibreLicense: 'https://github.com/maplibre/maplibre-gl-js/blob/main/LICENSE.txt',
};

const firmsAck =
  "We acknowledge the use of data and/or imagery from NASA's Fire Information for Resource Management System (FIRMS) (https://earthdata.nasa.gov/firms), part of NASA's Land, Atmosphere Near real-time Capability for Earth observations (LANCE) (https://earthdata.nasa.gov/lance) and NASA's Earth Science Data and Information System (ESDIS).";

const creditsEn: HazardCredit[] = [
  {
    name: 'U.S. Geological Survey',
    href: href.usgs,
    license: 'Public domain',
    licenseHref: href.usgsLicense,
    text: 'Earthquake data: U.S. Geological Survey, public domain.',
  },
  {
    name: 'Fire Information for Resource Management System',
    href: href.firms,
    license: 'Open data',
    licenseHref: href.firmsLicense,
    text: `Fire data: National Aeronautics and Space Administration, Fire Information for Resource Management System, open data. ${firmsAck}`,
  },
  {
    name: 'Global Disaster Alert and Coordination System',
    href: href.gdacs,
    license: 'Public domain',
    licenseHref: href.nhcLicense,
    text: 'Storm data: Global Disaster Alert and Coordination System; National Hurricane Center, National Oceanic and Atmospheric Administration, public domain.',
  },
  {
    name: 'Global Flood Awareness System',
    href: href.gdacs,
    license: 'Copernicus notice',
    licenseHref: href.copernicusLicense,
    text: 'Flood data: Global Disaster Alert and Coordination System. Generated using Copernicus Emergency Management Service information, 2026.',
  },
  {
    name: 'Global Volcanism Program',
    href: href.volcano,
    license: 'Public domain',
    licenseHref: href.usgsLicense,
    text: 'Volcano data: Global Volcanism Program, Smithsonian Institution; National Aeronautics and Space Administration; U.S. Geological Survey.',
  },
  {
    name: 'Global Drought Observatory',
    href: href.drought,
    license: 'Copernicus notice',
    licenseHref: href.copernicusLicense,
    text: 'Drought data: Generated using Copernicus Emergency Management Service information, 2026. Drought points: Global Disaster Alert and Coordination System, based on the Global Drought Observatory.',
  },
  {
    name: 'Global Wildfire Information System',
    href: href.gdacs,
    license: 'Copernicus notice',
    licenseHref: href.copernicusLicense,
    text: 'Named fire data: Global Disaster Alert and Coordination System, based on the Global Wildfire Information System, and the National Aeronautics and Space Administration Earth Observatory Natural Event Tracker. Generated using Copernicus Emergency Management Service information, 2026.',
  },
  {
    name: 'OpenFreeMap',
    href: 'https://openfreemap.org/',
    license: 'ODbL',
    licenseHref: 'https://www.openstreetmap.org/copyright',
    text: 'Dark vector base map. Place names are hidden. Map data © OpenStreetMap contributors, ODbL. Style and tiles © OpenFreeMap and OpenMapTiles (BSD-3-Clause).',
  },
  {
    name: 'CARTO Dark Matter',
    href: 'https://carto.com/attributions',
    license: 'ODbL',
    licenseHref: 'https://www.openstreetmap.org/copyright',
    text: 'Used only if the OpenFreeMap style does not load: dark tiles without labels. © OpenStreetMap contributors © CARTO.',
  },
  {
    name: 'MapLibre GL JS',
    href: 'https://maplibre.org/',
    license: 'BSD-3-Clause',
    licenseHref: 'https://github.com/maplibre/maplibre-gl-js/blob/main/LICENSE.txt',
    text: 'The globe is drawn in the browser with MapLibre GL JS. No map key.',
  },
];

const pageEn: LiveHazardsPage = {
  tab: 'Live world',
  metaTitle: 'Live world · Maps · Fix Planet',
  metaDescription:
    'Public globe of recent earthquakes, tropical cyclones, floods, volcanoes, droughts, and fires. Each point links to its public source.',
  eyebrow: 'Map room',
  title: 'Live world',
  lead: 'A dark globe of public hazard feeds. Turn layers on or off, open a marker, and read the latest events beside the map.',
  hubText: 'Earthquakes, storms, floods, volcanoes, droughts, and fires on a dark globe.',
  back: '← Maps',
  layersTitle: 'Layers',
  layersAria: 'Hazard layers',
  showLayers: 'Show layers',
  hideLayers: 'Hide layers',
  feedTitle: 'Latest events',
  feedAria: 'Latest hazard events',
  feedEmpty: 'No events in the selected layers.',
  feedMore: 'Showing the latest {count}.',
  live: 'Live',
  loading: 'Loading public feeds.',
  asOf: 'Data as of {time}',
  snapshotNote: 'Some layers stay on the saved snapshot when the browser cannot reach that feed.',
  mapLabel: 'Dark globe of current hazards',
  mapFailed: 'This browser could not draw the globe. The event list still uses the public feeds.',
  dataFailed: 'The data file did not load.',
  magnitude: 'Magnitude',
  alert: 'Alert',
  depth: 'Depth',
  wind: 'Wind',
  frp: 'Radiative power',
  confidence: 'Confidence',
  source: 'Source',
  openSource: 'Open the source',
  hotspot: 'Active fire',
  close: 'Close',
  km: 'km',
  kmh: 'km/h',
  knots: 'knots',
  mw: 'MW',
  layers: {
    earthquakes: 'Earthquakes: strong earthquakes of the last day, week or month',
    fires: 'Wildfires: fires burning right now, seen from space',
    cyclones: 'Cyclones: tropical storms, hurricanes and typhoons',
    floods: 'Floods: rivers that have burst their banks',
    volcanoes: 'Volcanoes: those erupting now or on alert',
    droughts: 'Droughts: where the soil is drier than usual',
    wildfires: 'Large fires',
  },
  captions: {
    earthquakes: 'Each dot is one earthquake, sized by its strength, reported by the U.S. Geological Survey.',
    fires:
      'Each dot is a hot spot that a satellite detected in the last day, reported by the National Aeronautics and Space Administration.',
    cyclones:
      'Each dot is a tropical storm, hurricane or typhoon with its wind speed, reported by the Global Disaster Alert and Coordination System and the U.S. National Hurricane Center.',
    floods:
      'Each dot is a flood reported by the Global Disaster Alert and Coordination System, based on the Global Flood Awareness System of the Copernicus programme.',
    volcanoes:
      'Each dot is a volcano, and bright dots are erupting or on alert, from the Smithsonian Global Volcanism Program, the National Aeronautics and Space Administration and the U.S. Geological Survey.',
    droughts:
      'The coloured shading shows how much drier than normal the soil is, from the Global Drought Observatory of the Copernicus programme.',
    wildfires:
      'Each dot is a named fire reported by the Global Disaster Alert and Coordination System or the NASA Earth Observatory Natural Event Tracker.',
  },
  droughtEurope: 'Europe drought indicator',
  droughtEuropeCaption:
    'Extra shading for Europe and the Mediterranean only. It is the Combined Drought Indicator from the Global Drought Observatory of the Copernicus programme.',
  rasterNote: 'The soil moisture shading did not load. Drought points stay on the globe.',
  rasterEuropeNote: 'The Europe drought shading did not load.',
  alerts: { Red: 'Red', Orange: 'Orange', Yellow: 'Yellow', Green: 'Green' },
  sources: {
    USGS: 'U.S. Geological Survey',
    GDACS: 'Global Disaster Alert and Coordination System',
    EONET: 'NASA Earth Observatory Natural Event Tracker',
    FIRMS: 'Fire Information for Resource Management System',
    NHC: 'National Hurricane Center',
  },
  creditsTitle: 'Sources and licences',
  creditsLead:
    'Event names are copied from the source and can stay in its language. Figures are reports and model output, not a warning to the public.',
  credits: creditsEn,
};

const pageRu: LiveHazardsPage = {
  tab: 'Мир сейчас',
  metaTitle: 'Мир сейчас · Карты · Fix Planet',
  metaDescription:
    'Открытый глобус недавних землетрясений, циклонов, наводнений, вулканов, засух и пожаров. У каждой точки есть ссылка на открытый источник.',
  eyebrow: 'Картографическая',
  title: 'Мир сейчас',
  lead: 'Тёмный глобус открытых лент об опасностях. Слои можно включить и выключить, открыть точку и прочитать последние события рядом с картой.',
  hubText: 'Землетрясения, циклоны, наводнения, вулканы, засухи и пожары на тёмном глобусе.',
  back: '← Карты',
  layersTitle: 'Слои',
  layersAria: 'Слои опасностей',
  showLayers: 'Показать слои',
  hideLayers: 'Скрыть слои',
  feedTitle: 'Последние события',
  feedAria: 'Последние события об опасностях',
  feedEmpty: 'В выбранных слоях нет событий.',
  feedMore: 'Показаны последние {count}.',
  live: 'Сейчас',
  loading: 'Загрузка открытых лент.',
  asOf: 'Данные на {time}',
  snapshotNote: 'Если браузер не достучался до ленты, слой остаётся на сохранённом снимке.',
  mapLabel: 'Тёмный глобус текущих опасностей',
  mapFailed: 'Браузер не смог нарисовать глобус. Список событий всё равно берёт открытые ленты.',
  dataFailed: 'Файл данных не загрузился.',
  magnitude: 'Магнитуда',
  alert: 'Уровень тревоги',
  depth: 'Глубина',
  wind: 'Ветер',
  frp: 'Мощность излучения',
  confidence: 'Достоверность',
  source: 'Источник',
  openSource: 'Открыть источник',
  hotspot: 'Активный очаг',
  close: 'Закрыть',
  km: 'км',
  kmh: 'км/ч',
  knots: 'узлов',
  mw: 'МВт',
  layers: {
    earthquakes: 'Землетрясения: сильные землетрясения за последние сутки, неделю или месяц',
    fires: 'Пожары: огонь, который горит прямо сейчас и виден из космоса',
    cyclones: 'Циклоны: тропические штормы, ураганы и тайфуны',
    floods: 'Наводнения: реки, вышедшие из берегов',
    volcanoes: 'Вулканы: те, что извергаются сейчас или объявлены опасными',
    droughts: 'Засухи: где почва суше обычного',
    wildfires: 'Крупные пожары',
  },
  captions: {
    earthquakes:
      'Каждая точка показывает одно землетрясение, размер точки зависит от его силы; данные предоставляет Геологическая служба США.',
    fires:
      'Каждая точка показывает очаг жара, замеченный спутником за последние сутки; данные предоставляет Национальное управление по аэронавтике и исследованию космического пространства США.',
    cyclones:
      'Каждая точка показывает тропический шторм, ураган или тайфун и скорость его ветра; данные предоставляют Глобальная система оповещения о бедствиях и координации действий и Национальный центр по ураганам США.',
    floods:
      'Каждая точка показывает наводнение по данным Глобальной системы оповещения о бедствиях и координации действий, которая опирается на Глобальную систему предупреждения о наводнениях программы «Коперник».',
    volcanoes:
      'Каждая точка показывает вулкан, яркие точки означают извержение или тревогу; данные предоставляют Смитсоновская программа по глобальному вулканизму, Национальное управление по аэронавтике и исследованию космического пространства США и Геологическая служба США.',
    droughts:
      'Цветная заливка показывает, насколько почва суше нормы; данные предоставляет Глобальная обсерватория засух программы «Коперник».',
    wildfires:
      'Каждая точка показывает именованный пожар по данным Глобальной системы оповещения о бедствиях и координации действий или обсерватории Земли Национального управления по аэронавтике и исследованию космического пространства США.',
  },
  droughtEurope: 'Индикатор засухи в Европе',
  droughtEuropeCaption:
    'Дополнительная заливка только для Европы и Средиземноморья. Это сводный индикатор засухи Глобальной обсерватории засух программы «Коперник».',
  rasterNote: 'Заливка влажности почвы не загрузилась. Точки засух остаются на глобусе.',
  rasterEuropeNote: 'Европейская заливка засухи не загрузилась.',
  alerts: { Red: 'Красный', Orange: 'Оранжевый', Yellow: 'Жёлтый', Green: 'Зелёный' },
  sources: {
    USGS: 'Геологическая служба США',
    GDACS: 'Глобальная система оповещения о бедствиях и координации действий',
    EONET: 'Обсерватория Земли Национального управления по аэронавтике и исследованию космического пространства США',
    FIRMS: 'Система информации о пожарах для управления ресурсами',
    NHC: 'Национальный центр по ураганам',
  },
  creditsTitle: 'Источники и лицензии',
  creditsLead:
    'Названия событий скопированы из источника и могут остаться на его языке. Цифры: сводки и расчёты моделей, а не предупреждение для населения.',
  credits: [
    {
      name: 'Геологическая служба США',
      href: href.usgs,
      license: 'Общественное достояние',
      licenseHref: href.usgsLicense,
      text: 'Данные о землетрясениях: Геологическая служба США, общественное достояние.',
    },
    {
      name: 'Система информации о пожарах для управления ресурсами',
      href: href.firms,
      license: 'Открытые данные',
      licenseHref: href.firmsLicense,
      text: 'Данные о пожарах: Национальное управление по аэронавтике и исследованию космического пространства США, система информации о пожарах для управления ресурсами, открытые данные.',
    },
    {
      name: 'Глобальная система оповещения о бедствиях и координации действий',
      href: href.gdacs,
      license: 'Общественное достояние',
      licenseHref: href.nhcLicense,
      text: 'Данные о штормах: Глобальная система оповещения о бедствиях и координации действий; Национальный центр по ураганам, Национальное управление океанических и атмосферных исследований США, общественное достояние.',
    },
    {
      name: 'Глобальная система предупреждения о наводнениях',
      href: href.gdacs,
      license: 'Уведомление «Коперник»',
      licenseHref: href.copernicusLicense,
      text: 'Данные о наводнениях: Глобальная система оповещения о бедствиях и координации действий. Создано с использованием информации Службы управления в чрезвычайных ситуациях программы «Коперник», 2026.',
    },
    {
      name: 'Смитсоновская программа по глобальному вулканизму',
      href: href.volcano,
      license: 'Общественное достояние',
      licenseHref: href.usgsLicense,
      text: 'Данные о вулканах: Программа по глобальному вулканизму, Смитсоновский институт; Национальное управление по аэронавтике и исследованию космического пространства США; Геологическая служба США.',
    },
    {
      name: 'Глобальная обсерватория засух',
      href: href.drought,
      license: 'Уведомление «Коперник»',
      licenseHref: href.copernicusLicense,
      text: 'Данные о засухах: создано с использованием информации Службы управления в чрезвычайных ситуациях программы «Коперник», 2026. Точки засух: Глобальная система оповещения о бедствиях и координации действий, на основе Глобальной обсерватории засух.',
    },
    {
      name: 'Глобальная система информации о природных пожарах',
      href: href.gdacs,
      license: 'Уведомление «Коперник»',
      licenseHref: href.copernicusLicense,
      text: 'Данные об именованных пожарах: Глобальная система оповещения о бедствиях и координации действий, на основе Глобальной системы информации о природных пожарах, и обсерватория Земли Национального управления по аэронавтике и исследованию космического пространства США. Создано с использованием информации Службы управления в чрезвычайных ситуациях программы «Коперник», 2026.',
    },
    {
      name: 'OpenFreeMap',
      href: href.openfreemap,
      license: 'ODbL',
      licenseHref: href.odbl,
      text: 'Тёмная векторная подложка. Подписи мест скрыты. Данные карты © OpenStreetMap contributors, ODbL. Стиль и тайлы © OpenFreeMap и OpenMapTiles (BSD-3-Clause).',
    },
    {
      name: 'CARTO Dark Matter',
      href: href.carto,
      license: 'ODbL',
      licenseHref: href.odbl,
      text: 'Только если стиль OpenFreeMap не загрузился: тёмные тайлы без подписей. © OpenStreetMap contributors © CARTO.',
    },
    {
      name: 'MapLibre GL JS',
      href: href.maplibre,
      license: 'BSD-3-Clause',
      licenseHref: href.maplibreLicense,
      text: 'Глобус рисуется в браузере библиотекой MapLibre GL JS. Ключ карты не нужен.',
    },
  ],
};

const pagePl: LiveHazardsPage = {
  tab: 'Świat teraz',
  metaTitle: 'Świat teraz · Mapy · Fix Planet',
  metaDescription:
    'Publiczny globus niedawnych trzęsień ziemi, cyklonów, powodzi, wulkanów, susz i pożarów. Każdy punkt prowadzi do otwartego źródła.',
  eyebrow: 'Mapownia',
  title: 'Świat teraz',
  lead: 'Ciemny globus otwartych kanałów o zagrożeniach. Warstwy da się włączyć i wyłączyć, otworzyć punkt i czytać najnowsze zdarzenia obok mapy.',
  hubText: 'Trzęsienia ziemi, cyklony, powodzie, wulkany, susze i pożary na ciemnym globusie.',
  back: '← Mapy',
  layersTitle: 'Warstwy',
  layersAria: 'Warstwy zagrożeń',
  showLayers: 'Pokaż warstwy',
  hideLayers: 'Ukryj warstwy',
  feedTitle: 'Najnowsze zdarzenia',
  feedAria: 'Najnowsze zdarzenia o zagrożeniach',
  feedEmpty: 'Brak zdarzeń w wybranych warstwach.',
  feedMore: 'Pokazano najnowsze {count}.',
  live: 'Na żywo',
  loading: 'Wczytywanie otwartych kanałów.',
  asOf: 'Dane z {time}',
  snapshotNote: 'Jeśli przeglądarka nie dosięgnie kanału, warstwa zostaje na zapisanym zrzucie.',
  mapLabel: 'Ciemny globus bieżących zagrożeń',
  mapFailed: 'Przeglądarka nie narysowała globusa. Lista zdarzeń nadal korzysta z otwartych kanałów.',
  dataFailed: 'Plik danych się nie wczytał.',
  magnitude: 'Magnituda',
  alert: 'Poziom alarmu',
  depth: 'Głębokość',
  wind: 'Wiatr',
  frp: 'Moc promieniowania',
  confidence: 'Pewność',
  source: 'Źródło',
  openSource: 'Otwórz źródło',
  hotspot: 'Aktywne ognisko',
  close: 'Zamknij',
  km: 'km',
  kmh: 'km/h',
  knots: 'węzłów',
  mw: 'MW',
  layers: {
    earthquakes: 'Trzęsienia ziemi: silne trzęsienia ziemi z ostatniej doby, tygodnia lub miesiąca',
    fires: 'Pożary: ogień, który płonie właśnie teraz i jest widoczny z kosmosu',
    cyclones: 'Cyklony: burze tropikalne, huragany i tajfuny',
    floods: 'Powodzie: rzeki, które wystąpiły z brzegów',
    volcanoes: 'Wulkany: te, które wybuchają teraz lub są w stanie alertu',
    droughts: 'Susze: gdzie gleba jest suchsza niż zwykle',
    wildfires: 'Duże pożary',
  },
  captions: {
    earthquakes:
      'Każda kropka to jedno trzęsienie ziemi, a jej wielkość zależy od siły wstrząsu; dane pochodzą z Amerykańskiej Służby Geologicznej.',
    fires:
      'Każda kropka to punkt gorąca wykryty przez satelitę w ciągu ostatniej doby; dane pochodzą z Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej Stanów Zjednoczonych.',
    cyclones:
      'Każda kropka to burza tropikalna, huragan lub tajfun wraz z prędkością wiatru; dane pochodzą z Globalnego Systemu Ostrzegania i Koordynacji w Sprawie Katastrof oraz z Narodowego Centrum Huraganów Stanów Zjednoczonych.',
    floods:
      'Każda kropka to powódź zgłoszona przez Globalny System Ostrzegania i Koordynacji w Sprawie Katastrof, oparty na Globalnym Systemie Ostrzegania przed Powodziami programu Copernicus.',
    volcanoes:
      'Każda kropka to wulkan, a jasne kropki oznaczają erupcję lub alert; dane pochodzą z Globalnego Programu Wulkanologicznego Instytutu Smithsona, Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej oraz Amerykańskiej Służby Geologicznej.',
    droughts:
      'Kolorowe cieniowanie pokazuje, o ile gleba jest suchsza niż normalnie; dane pochodzą z Globalnego Obserwatorium Suszy programu Copernicus.',
    wildfires:
      'Każda kropka to nazwany pożar zgłoszony przez Globalny System Ostrzegania i Koordynacji w Sprawie Katastrof albo obserwatorium Ziemi Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej Stanów Zjednoczonych.',
  },
  droughtEurope: 'Wskaźnik suszy w Europie',
  droughtEuropeCaption:
    'Dodatkowe cieniowanie tylko dla Europy i regionu Morza Śródziemnego. To łączny wskaźnik suszy z Globalnego Obserwatorium Suszy programu Copernicus.',
  rasterNote: 'Cieniowanie wilgotności gleby się nie wczytało. Punkty suszy zostają na globusie.',
  rasterEuropeNote: 'Europejskie cieniowanie suszy się nie wczytało.',
  alerts: { Red: 'Czerwony', Orange: 'Pomarańczowy', Yellow: 'Żółty', Green: 'Zielony' },
  sources: {
    USGS: 'Amerykańska Służba Geologiczna',
    GDACS: 'Globalny System Ostrzegania i Koordynacji w Sprawie Katastrof',
    EONET: 'Obserwatorium Ziemi Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej',
    FIRMS: 'System informacji o pożarach do zarządzania zasobami',
    NHC: 'Narodowe Centrum Huraganów',
  },
  creditsTitle: 'Źródła i licencje',
  creditsLead:
    'Nazwy zdarzeń są skopiowane ze źródła i mogą zostać w jego języku. Liczby to raporty i wynik modeli, nie ostrzeżenie dla ludności.',
  credits: [
    {
      name: 'Amerykańska Służba Geologiczna',
      href: href.usgs,
      license: 'Domena publiczna',
      licenseHref: href.usgsLicense,
      text: 'Dane o trzęsieniach ziemi: Amerykańska Służba Geologiczna, domena publiczna.',
    },
    {
      name: 'System informacji o pożarach do zarządzania zasobami',
      href: href.firms,
      license: 'Dane otwarte',
      licenseHref: href.firmsLicense,
      text: 'Dane o pożarach: Narodowa Agencja Aeronautyki i Przestrzeni Kosmicznej Stanów Zjednoczonych, system informacji o pożarach do zarządzania zasobami, dane otwarte.',
    },
    {
      name: 'Globalny System Ostrzegania i Koordynacji w Sprawie Katastrof',
      href: href.gdacs,
      license: 'Domena publiczna',
      licenseHref: href.nhcLicense,
      text: 'Dane o burzach: Globalny System Ostrzegania i Koordynacji w Sprawie Katastrof; Narodowe Centrum Huraganów, Narodowa Administracja Oceaniczna i Atmosferyczna Stanów Zjednoczonych, domena publiczna.',
    },
    {
      name: 'Globalny System Ostrzegania przed Powodziami',
      href: href.gdacs,
      license: 'Informacja Copernicus',
      licenseHref: href.copernicusLicense,
      text: 'Dane o powodziach: Globalny System Ostrzegania i Koordynacji w Sprawie Katastrof. Wygenerowano z wykorzystaniem informacji Służby Zarządzania Kryzysowego programu Copernicus, 2026.',
    },
    {
      name: 'Globalny Program Wulkanologiczny',
      href: href.volcano,
      license: 'Domena publiczna',
      licenseHref: href.usgsLicense,
      text: 'Dane o wulkanach: Globalny Program Wulkanologiczny, Instytut Smithsona; Narodowa Agencja Aeronautyki i Przestrzeni Kosmicznej; Amerykańska Służba Geologiczna.',
    },
    {
      name: 'Globalne Obserwatorium Suszy',
      href: href.drought,
      license: 'Informacja Copernicus',
      licenseHref: href.copernicusLicense,
      text: 'Dane o suszach: wygenerowano z wykorzystaniem informacji Służby Zarządzania Kryzysowego programu Copernicus, 2026. Punkty suszy: Globalny System Ostrzegania i Koordynacji w Sprawie Katastrof, na podstawie Globalnego Obserwatorium Suszy.',
    },
    {
      name: 'Globalny system informacji o pożarach roślinności',
      href: href.gdacs,
      license: 'Informacja Copernicus',
      licenseHref: href.copernicusLicense,
      text: 'Dane o nazwanych pożarach: Globalny System Ostrzegania i Koordynacji w Sprawie Katastrof, na podstawie Globalnego systemu informacji o pożarach roślinności, oraz obserwatorium Ziemi Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej. Wygenerowano z wykorzystaniem informacji Służby Zarządzania Kryzysowego programu Copernicus, 2026.',
    },
    {
      name: 'OpenFreeMap',
      href: href.openfreemap,
      license: 'ODbL',
      licenseHref: href.odbl,
      text: 'Ciemna wektorowa podkładka. Nazwy miejsc są ukryte. Dane mapy © OpenStreetMap contributors, ODbL. Styl i kafelki © OpenFreeMap i OpenMapTiles (BSD-3-Clause).',
    },
    {
      name: 'CARTO Dark Matter',
      href: href.carto,
      license: 'ODbL',
      licenseHref: href.odbl,
      text: 'Tylko gdy styl OpenFreeMap się nie wczyta: ciemne kafelki bez podpisów. © OpenStreetMap contributors © CARTO.',
    },
    {
      name: 'MapLibre GL JS',
      href: href.maplibre,
      license: 'BSD-3-Clause',
      licenseHref: href.maplibreLicense,
      text: 'Globus jest rysowany w przeglądarce biblioteką MapLibre GL JS. Klucz mapy nie jest potrzebny.',
    },
  ],
};

const pageLv: LiveHazardsPage = {
  tab: 'Pasaule tagad',
  metaTitle: 'Pasaule tagad · Kartes · Fix Planet',
  metaDescription:
    'Atvērts globuss ar nesenām zemestrīcēm, cikloniem, plūdiem, vulkāniem, sausumu un ugunsgrēkiem. Katrs punkts ved uz atvērtu avotu.',
  eyebrow: 'Karšu zāle',
  title: 'Pasaule tagad',
  lead: 'Tumšs globuss ar atvērtām bīstamības plūsmām. Slāņus var ieslēgt un izslēgt, atvērt punktu un lasīt jaunākos notikumus blakus kartei.',
  hubText: 'Zemestrīces, cikloni, plūdi, vulkāni, sausums un ugunsgrēki uz tumša globusa.',
  back: '← Kartes',
  layersTitle: 'Slāņi',
  layersAria: 'Bīstamības slāņi',
  showLayers: 'Rādīt slāņus',
  hideLayers: 'Paslēpt slāņus',
  feedTitle: 'Jaunākie notikumi',
  feedAria: 'Jaunākie bīstamības notikumi',
  feedEmpty: 'Izvēlētajos slāņos nav notikumu.',
  feedMore: 'Rāda jaunākos {count}.',
  live: 'Tagad',
  loading: 'Ielādē atvērtās plūsmas.',
  asOf: 'Dati uz {time}',
  snapshotNote: 'Ja pārlūks nevar sasniegt plūsmu, slānis paliek saglabātajā momentuzņēmumā.',
  mapLabel: 'Tumšs globuss ar pašreizējiem apdraudējumiem',
  mapFailed: 'Pārlūks nevarēja uzzīmēt globusu. Notikumu saraksts joprojām izmanto atvērtās plūsmas.',
  dataFailed: 'Datu fails neielādējās.',
  magnitude: 'Magnitūda',
  alert: 'Brīdinājuma līmenis',
  depth: 'Dziļums',
  wind: 'Vējš',
  frp: 'Starojuma jauda',
  confidence: 'Ticamība',
  source: 'Avots',
  openSource: 'Atvērt avotu',
  hotspot: 'Aktīvs perēklis',
  close: 'Aizvērt',
  km: 'km',
  kmh: 'km/h',
  knots: 'mezglu',
  mw: 'MW',
  layers: {
    earthquakes: 'Zemestrīces: spēcīgas zemestrīces pēdējās diennakts, nedēļas vai mēneša laikā',
    fires: 'Ugunsgrēki: uguns, kas deg tieši tagad un ir redzama no kosmosa',
    cyclones: 'Cikloni: tropiskās vētras, viesuļvētras un taifūni',
    floods: 'Plūdi: upes, kas izgājušas no krastiem',
    volcanoes: 'Vulkāni: tie, kas izvirst tagad vai ir trauksmes stāvoklī',
    droughts: 'Sausumi: kur augsne ir sausāka nekā parasti',
    wildfires: 'Lieli ugunsgrēki',
  },
  captions: {
    earthquakes:
      'Katrs punkts ir viena zemestrīce, un tā izmērs atbilst satricinājuma spēkam; dati nāk no ASV Ģeoloģijas dienesta.',
    fires:
      'Katrs punkts ir karstuma vieta, ko pavadonis pamanījis pēdējās diennakts laikā; dati nāk no ASV Nacionālās aeronautikas un kosmosa pārvaldes.',
    cyclones:
      'Katrs punkts ir tropiskā vētra, viesuļvētra vai taifūns ar savu vēja ātrumu; dati nāk no Globālās katastrofu brīdināšanas un koordinācijas sistēmas un ASV Nacionālā viesuļvētru centra.',
    floods:
      'Katrs punkts ir plūdi, ko ziņojusi Globālā katastrofu brīdināšanas un koordinācijas sistēma, balstoties uz programmas Copernicus Globālo plūdu brīdināšanas sistēmu.',
    volcanoes:
      'Katrs punkts ir vulkāns, un spilgti punkti norāda uz izvirdumu vai trauksmi; dati nāk no Smitsona institūta Globālās vulkānisma programmas, ASV Nacionālās aeronautikas un kosmosa pārvaldes un ASV Ģeoloģijas dienesta.',
    droughts:
      'Krāsu pārklājums rāda, cik augsne ir sausāka par normu; dati nāk no programmas Copernicus Globālās sausuma observatorijas.',
    wildfires:
      'Katrs punkts ir nosaukts ugunsgrēks, ko ziņojusi Globālā katastrofu brīdināšanas un koordinācijas sistēma vai ASV Nacionālās aeronautikas un kosmosa pārvaldes Zemes observatorija.',
  },
  droughtEurope: 'Sausuma rādītājs Eiropā',
  droughtEuropeCaption:
    'Papildu pārklājums tikai Eiropai un Vidusjūras reģionam. Tas ir programmas Copernicus Globālās sausuma observatorijas apvienotais sausuma rādītājs.',
  rasterNote: 'Augsnes mitruma pārklājums neielādējās. Sausuma punkti paliek uz globusa.',
  rasterEuropeNote: 'Eiropas sausuma pārklājums neielādējās.',
  alerts: { Red: 'Sarkans', Orange: 'Oranžs', Yellow: 'Dzeltens', Green: 'Zaļš' },
  sources: {
    USGS: 'ASV Ģeoloģijas dienests',
    GDACS: 'Globālā katastrofu brīdināšanas un koordinācijas sistēma',
    EONET: 'ASV Nacionālās aeronautikas un kosmosa pārvaldes Zemes observatorija',
    FIRMS: 'Resursu pārvaldības ugunsgrēku informācijas sistēma',
    NHC: 'Nacionālais viesuļvētru centrs',
  },
  creditsTitle: 'Avoti un licences',
  creditsLead:
    'Notikumu nosaukumi ir ņemti no avota un var palikt avota valodā. Skaitļi ir ziņojumi un modeļu rezultāts, nevis brīdinājums iedzīvotājiem.',
  credits: [
    {
      name: 'ASV Ģeoloģijas dienests',
      href: href.usgs,
      license: 'Publiskais īpašums',
      licenseHref: href.usgsLicense,
      text: 'Zemestrīču dati: ASV Ģeoloģijas dienests, publiskais īpašums.',
    },
    {
      name: 'Resursu pārvaldības ugunsgrēku informācijas sistēma',
      href: href.firms,
      license: 'Atvērtie dati',
      licenseHref: href.firmsLicense,
      text: 'Ugunsgrēku dati: ASV Nacionālā aeronautikas un kosmosa pārvalde, resursu pārvaldības ugunsgrēku informācijas sistēma, atvērtie dati.',
    },
    {
      name: 'Globālā katastrofu brīdināšanas un koordinācijas sistēma',
      href: href.gdacs,
      license: 'Publiskais īpašums',
      licenseHref: href.nhcLicense,
      text: 'Vētru dati: Globālā katastrofu brīdināšanas un koordinācijas sistēma; Nacionālais viesuļvētru centrs, ASV Nacionālā okeānu un atmosfēras pārvalde, publiskais īpašums.',
    },
    {
      name: 'Globālā plūdu brīdināšanas sistēma',
      href: href.gdacs,
      license: 'Copernicus norāde',
      licenseHref: href.copernicusLicense,
      text: 'Plūdu dati: Globālā katastrofu brīdināšanas un koordinācijas sistēma. Radīts, izmantojot programmas Copernicus Ārkārtas situāciju pārvaldības dienesta informāciju, 2026.',
    },
    {
      name: 'Globālā vulkānisma programma',
      href: href.volcano,
      license: 'Publiskais īpašums',
      licenseHref: href.usgsLicense,
      text: 'Vulkānu dati: Globālā vulkānisma programma, Smitsona institūts; ASV Nacionālā aeronautikas un kosmosa pārvalde; ASV Ģeoloģijas dienests.',
    },
    {
      name: 'Globālā sausuma observatorija',
      href: href.drought,
      license: 'Copernicus norāde',
      licenseHref: href.copernicusLicense,
      text: 'Sausuma dati: radīts, izmantojot programmas Copernicus Ārkārtas situāciju pārvaldības dienesta informāciju, 2026. Sausuma punkti: Globālā katastrofu brīdināšanas un koordinācijas sistēma, pamatojoties uz Globālo sausuma observatoriju.',
    },
    {
      name: 'Globālā savvaļas ugunsgrēku informācijas sistēma',
      href: href.gdacs,
      license: 'Copernicus norāde',
      licenseHref: href.copernicusLicense,
      text: 'Nosaukto ugunsgrēku dati: Globālā katastrofu brīdināšanas un koordinācijas sistēma, pamatojoties uz Globālo savvaļas ugunsgrēku informācijas sistēmu, un ASV Nacionālās aeronautikas un kosmosa pārvaldes Zemes observatorija. Radīts, izmantojot programmas Copernicus Ārkārtas situāciju pārvaldības dienesta informāciju, 2026.',
    },
    {
      name: 'OpenFreeMap',
      href: href.openfreemap,
      license: 'ODbL',
      licenseHref: href.odbl,
      text: 'Tumša vektoru pamatkarte. Vietu nosaukumi ir paslēpti. Kartes dati © OpenStreetMap contributors, ODbL. Stils un flīzes © OpenFreeMap un OpenMapTiles (BSD-3-Clause).',
    },
    {
      name: 'CARTO Dark Matter',
      href: href.carto,
      license: 'ODbL',
      licenseHref: href.odbl,
      text: 'Tikai ja OpenFreeMap stils neielādējas: tumšas flīzes bez parakstiem. © OpenStreetMap contributors © CARTO.',
    },
    {
      name: 'MapLibre GL JS',
      href: href.maplibre,
      license: 'BSD-3-Clause',
      licenseHref: href.maplibreLicense,
      text: 'Globusu pārlūkā zīmē MapLibre GL JS. Kartes atslēga nav vajadzīga.',
    },
  ],
};

const page: Record<Locale, LiveHazardsPage> = {
  en: pageEn,
  ru: pageRu,
  pl: pagePl,
  lv: pageLv,
};

export function getLiveHazardsPage(locale: Locale): LiveHazardsPage {
  return page[locale];
}
