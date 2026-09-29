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
  alerts: { Red: string; Orange: string; Green: string };
  creditsTitle: string;
  creditsLead: string;
  credits: HazardCredit[];
};

const creditsEn: HazardCredit[] = [
  {
    name: 'USGS',
    href: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',
    license: 'Public domain',
    licenseHref: 'https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits',
    text: 'Magnitude 4.5 and above for the past 7 days, from the USGS GeoJSON feed. A U.S. Government work.',
  },
  {
    name: 'GDACS',
    href: 'https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH',
    license: 'GDACS terms',
    licenseHref: 'https://www.gdacs.org/About/termofuse.aspx',
    text: 'Tropical cyclones, floods, volcanoes, droughts, and wildfires from the current GDACS event list. GDACS earthquake notices are not drawn again, because this globe uses USGS for earthquakes. GDACS is a model product of the European Commission and the United Nations, provided as is. It is not a public warning.',
  },
  {
    name: 'NASA EONET',
    href: 'https://eonet.gsfc.nasa.gov/api/v3/events',
    license: 'Public domain',
    licenseHref: 'https://www.nasa.gov/nasa-brand-center/images-and-media/',
    text: 'Open tropical storms and volcanoes, plus wildfires with a location in the last 30 days. The open flood and drought lists were empty, so those layers use GDACS. A U.S. Government work.',
  },
  {
    name: 'NASA FIRMS',
    href: 'https://firms.modaps.eosdis.nasa.gov/',
    license: 'Public domain',
    licenseHref: 'https://www.earthdata.nasa.gov/learn/use-data/data-use-guidance',
    text: 'MODIS Collection 6.1 near real-time active fires for the last 24 hours, confidence 80 or higher, from the public CSV. That file needs no key. The map shows each kept detection. The list shows the 30 strongest. The keyed FIRMS area API was not used.',
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
    'Public globe of recent earthquakes, tropical cyclones, floods, volcanoes, droughts, and fires. Each point links to USGS, GDACS, NASA EONET, or NASA FIRMS.',
  eyebrow: 'Map room',
  title: 'Live world',
  lead: 'A dark globe of public hazard feeds. Turn layers on or off, open a marker, and read the latest events beside the map.',
  hubText: 'Earthquakes, storms, floods, volcanoes, droughts, and fires on a dark globe.',
  back: '← Maps',
  layersTitle: 'Layers',
  layersAria: 'Hazard layers',
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
    earthquakes: 'Earthquakes',
    cyclones: 'Tropical cyclones',
    floods: 'Floods',
    volcanoes: 'Volcanoes',
    droughts: 'Droughts',
    wildfires: 'Wildfires',
    fires: 'Active fires',
  },
  alerts: { Red: 'Red', Orange: 'Orange', Green: 'Green' },
  creditsTitle: 'Sources and licences',
  creditsLead:
    'Event names are copied from the source and can stay in its language. Figures are reports and model output, not a warning to the public.',
  credits: creditsEn,
};

const pageRu: LiveHazardsPage = {
  tab: 'Мир сейчас',
  metaTitle: 'Мир сейчас · Карты · Fix Planet',
  metaDescription:
    'Открытый глобус недавних землетрясений, тропических циклонов, наводнений, вулканов, засух и пожаров. У каждой точки ссылка на USGS, GDACS, NASA EONET или NASA FIRMS.',
  eyebrow: 'Картографическая',
  title: 'Мир сейчас',
  lead: 'Тёмный глобус открытых лент об опасностях. Слои можно включить и выключить, открыть точку и прочитать последние события рядом с картой.',
  hubText: 'Землетрясения, циклоны, наводнения, вулканы, засухи и пожары на тёмном глобусе.',
  back: '← Карты',
  layersTitle: 'Слои',
  layersAria: 'Слои опасностей',
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
    earthquakes: 'Землетрясения',
    cyclones: 'Тропические циклоны',
    floods: 'Наводнения',
    volcanoes: 'Вулканы',
    droughts: 'Засухи',
    wildfires: 'Лесные пожары',
    fires: 'Активные очаги',
  },
  alerts: { Red: 'Красный', Orange: 'Оранжевый', Green: 'Зелёный' },
  creditsTitle: 'Источники и лицензии',
  creditsLead:
    'Названия событий скопированы из источника и могут остаться на его языке. Цифры: сводки и расчёты моделей, а не предупреждение для населения.',
  credits: [
    {
      name: 'USGS',
      href: creditsEn[0].href,
      license: 'Общественное достояние',
      licenseHref: creditsEn[0].licenseHref,
      text: 'Магнитуда 4,5 и выше за последние 7 дней, лента GeoJSON USGS. Работа правительства США.',
    },
    {
      name: 'GDACS',
      href: creditsEn[1].href,
      license: 'Условия GDACS',
      licenseHref: creditsEn[1].licenseHref,
      text: 'Тропические циклоны, наводнения, вулканы, засухи и лесные пожары из текущего списка GDACS. Сообщения GDACS о землетрясениях не рисуются повторно: для землетрясений глобус берёт USGS. GDACS: модельный продукт Европейской комиссии и Организации Объединённых Наций, данные даются как есть. Это не предупреждение для населения.',
    },
    {
      name: 'NASA EONET',
      href: creditsEn[2].href,
      license: 'Общественное достояние',
      licenseHref: creditsEn[2].licenseHref,
      text: 'Открытые тропические штормы и вулканы, а также лесные пожары с точкой за последние 30 дней. Открытые списки наводнений и засух были пусты, поэтому эти слои идут из GDACS. Работа правительства США.',
    },
    {
      name: 'NASA FIRMS',
      href: creditsEn[3].href,
      license: 'Общественное достояние',
      licenseHref: creditsEn[3].licenseHref,
      text: 'Активные пожары MODIS, коллекция 6.1, почти в реальном времени за последние 24 часа, достоверность 80 и выше, из открытого CSV. Ключ для этого файла не нужен. На карте каждая оставленная точка. В списке 30 самых сильных. Закрытый API FIRMS с ключом не использовался.',
    },
    {
      name: 'OpenFreeMap',
      href: creditsEn[4].href,
      license: 'ODbL',
      licenseHref: creditsEn[4].licenseHref,
      text: 'Тёмная векторная подложка. Подписи мест скрыты. Данные карты © OpenStreetMap contributors, ODbL. Стиль и тайлы © OpenFreeMap и OpenMapTiles (BSD-3-Clause).',
    },
    {
      name: 'CARTO Dark Matter',
      href: creditsEn[5].href,
      license: 'ODbL',
      licenseHref: creditsEn[5].licenseHref,
      text: 'Только если стиль OpenFreeMap не загрузился: тёмные тайлы без подписей. © OpenStreetMap contributors © CARTO.',
    },
    {
      name: 'MapLibre GL JS',
      href: creditsEn[6].href,
      license: 'BSD-3-Clause',
      licenseHref: creditsEn[6].licenseHref,
      text: 'Глобус рисуется в браузере библиотекой MapLibre GL JS. Ключ карты не нужен.',
    },
  ],
};

const pagePl: LiveHazardsPage = {
  tab: 'Świat teraz',
  metaTitle: 'Świat teraz · Mapy · Fix Planet',
  metaDescription:
    'Publiczny globus niedawnych trzęsień ziemi, cyklonów tropikalnych, powodzi, wulkanów, susz i pożarów. Każdy punkt prowadzi do USGS, GDACS, NASA EONET lub NASA FIRMS.',
  eyebrow: 'Mapownia',
  title: 'Świat teraz',
  lead: 'Ciemny globus otwartych kanałów o zagrożeniach. Warstwy da się włączyć i wyłączyć, otworzyć punkt i czytać najnowsze zdarzenia obok mapy.',
  hubText: 'Trzęsienia ziemi, cyklony, powodzie, wulkany, susze i pożary na ciemnym globusie.',
  back: '← Mapy',
  layersTitle: 'Warstwy',
  layersAria: 'Warstwy zagrożeń',
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
    earthquakes: 'Trzęsienia ziemi',
    cyclones: 'Cyklony tropikalne',
    floods: 'Powodzie',
    volcanoes: 'Wulkany',
    droughts: 'Susze',
    wildfires: 'Pożary lasów',
    fires: 'Aktywne ogniska',
  },
  alerts: { Red: 'Czerwony', Orange: 'Pomarańczowy', Green: 'Zielony' },
  creditsTitle: 'Źródła i licencje',
  creditsLead:
    'Nazwy zdarzeń są skopiowane ze źródła i mogą zostać w jego języku. Liczby to raporty i wynik modeli, nie ostrzeżenie dla ludności.',
  credits: [
    {
      name: 'USGS',
      href: creditsEn[0].href,
      license: 'Domena publiczna',
      licenseHref: creditsEn[0].licenseHref,
      text: 'Magnituda 4,5 i wyższa z ostatnich 7 dni, z kanału GeoJSON USGS. Dzieło rządu USA.',
    },
    {
      name: 'GDACS',
      href: creditsEn[1].href,
      license: 'Warunki GDACS',
      licenseHref: creditsEn[1].licenseHref,
      text: 'Cyklony tropikalne, powodzie, wulkany, susze i pożary lasów z bieżącej listy GDACS. Komunikaty GDACS o trzęsieniach ziemi nie są rysowane ponownie, bo globus bierze trzęsienia z USGS. GDACS to produkt modelowy Komisji Europejskiej i Organizacji Narodów Zjednoczonych, podawany bez gwarancji. To nie jest ostrzeżenie dla ludności.',
    },
    {
      name: 'NASA EONET',
      href: creditsEn[2].href,
      license: 'Domena publiczna',
      licenseHref: creditsEn[2].licenseHref,
      text: 'Otwarte burze tropikalne i wulkany oraz pożary lasów z położeniem z ostatnich 30 dni. Otwarte listy powodzi i susz były puste, więc te warstwy pochodzą z GDACS. Dzieło rządu USA.',
    },
    {
      name: 'NASA FIRMS',
      href: creditsEn[3].href,
      license: 'Domena publiczna',
      licenseHref: creditsEn[3].licenseHref,
      text: 'Aktywne pożary MODIS, kolekcja 6.1, prawie na żywo z ostatnich 24 godzin, pewność 80 lub wyższa, z publicznego CSV. Ten plik nie wymaga klucza. Mapa pokazuje każde zostawione wykrycie. Lista pokazuje 30 najsilniejszych. Kluczowane API obszaru FIRMS nie było użyte.',
    },
    {
      name: 'OpenFreeMap',
      href: creditsEn[4].href,
      license: 'ODbL',
      licenseHref: creditsEn[4].licenseHref,
      text: 'Ciemna wektorowa podkładka. Nazwy miejsc są ukryte. Dane mapy © OpenStreetMap contributors, ODbL. Styl i kafelki © OpenFreeMap i OpenMapTiles (BSD-3-Clause).',
    },
    {
      name: 'CARTO Dark Matter',
      href: creditsEn[5].href,
      license: 'ODbL',
      licenseHref: creditsEn[5].licenseHref,
      text: 'Tylko gdy styl OpenFreeMap się nie wczyta: ciemne kafelki bez podpisów. © OpenStreetMap contributors © CARTO.',
    },
    {
      name: 'MapLibre GL JS',
      href: creditsEn[6].href,
      license: 'BSD-3-Clause',
      licenseHref: creditsEn[6].licenseHref,
      text: 'Globus jest rysowany w przeglądarce biblioteką MapLibre GL JS. Klucz mapy nie jest potrzebny.',
    },
  ],
};

const pageLv: LiveHazardsPage = {
  tab: 'Pasaule tagad',
  metaTitle: 'Pasaule tagad · Kartes · Fix Planet',
  metaDescription:
    'Atvērts globuss ar nesenām zemestrīcēm, tropiskajiem cikloniem, plūdiem, vulkāniem, sausumu un ugunsgrēkiem. Katrs punkts ved uz USGS, GDACS, NASA EONET vai NASA FIRMS.',
  eyebrow: 'Karšu zāle',
  title: 'Pasaule tagad',
  lead: 'Tumšs globuss ar atvērtām bīstamības plūsmām. Slāņus var ieslēgt un izslēgt, atvērt punktu un lasīt jaunākos notikumus blakus kartei.',
  hubText: 'Zemestrīces, cikloni, plūdi, vulkāni, sausums un ugunsgrēki uz tumša globusa.',
  back: '← Kartes',
  layersTitle: 'Slāņi',
  layersAria: 'Bīstamības slāņi',
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
    earthquakes: 'Zemestrīces',
    cyclones: 'Tropiskie cikloni',
    floods: 'Plūdi',
    volcanoes: 'Vulkāni',
    droughts: 'Sausums',
    wildfires: 'Meža ugunsgrēki',
    fires: 'Aktīvie perēkļi',
  },
  alerts: { Red: 'Sarkans', Orange: 'Oranžs', Green: 'Zaļš' },
  creditsTitle: 'Avoti un licences',
  creditsLead:
    'Notikumu nosaukumi ir ņemti no avota un var palikt avota valodā. Skaitļi ir ziņojumi un modeļu rezultāts, nevis brīdinājums iedzīvotājiem.',
  credits: [
    {
      name: 'USGS',
      href: creditsEn[0].href,
      license: 'Publiskais īpašums',
      licenseHref: creditsEn[0].licenseHref,
      text: 'Magnitūda 4,5 un augstāka pēdējās 7 dienās, no USGS GeoJSON plūsmas. ASV valdības darbs.',
    },
    {
      name: 'GDACS',
      href: creditsEn[1].href,
      license: 'GDACS noteikumi',
      licenseHref: creditsEn[1].licenseHref,
      text: 'Tropiskie cikloni, plūdi, vulkāni, sausums un meža ugunsgrēki no pašreizējā GDACS notikumu saraksta. GDACS ziņas par zemestrīcēm netiek zīmētas vēlreiz, jo šis globuss zemestrīcēm izmanto USGS. GDACS ir Eiropas Komisijas un Apvienoto Nāciju modeļa produkts, sniegts tāds, kāds tas ir. Tas nav brīdinājums iedzīvotājiem.',
    },
    {
      name: 'NASA EONET',
      href: creditsEn[2].href,
      license: 'Publiskais īpašums',
      licenseHref: creditsEn[2].licenseHref,
      text: 'Atvērtas tropiskās vētras un vulkāni, kā arī meža ugunsgrēki ar punktu pēdējās 30 dienās. Atvērtie plūdu un sausuma saraksti bija tukši, tāpēc šie slāņi nāk no GDACS. ASV valdības darbs.',
    },
    {
      name: 'NASA FIRMS',
      href: creditsEn[3].href,
      license: 'Publiskais īpašums',
      licenseHref: creditsEn[3].licenseHref,
      text: 'MODIS kolekcija 6.1, gandrīz reāllaika aktīvie ugunsgrēki pēdējās 24 stundās, ticamība 80 vai augstāka, no publiskā CSV. Šim failam atslēga nav vajadzīga. Karte rāda katru paturēto noteikšanu. Saraksts rāda 30 spēcīgākos. FIRMS zonas API ar atslēgu netika izmantots.',
    },
    {
      name: 'OpenFreeMap',
      href: creditsEn[4].href,
      license: 'ODbL',
      licenseHref: creditsEn[4].licenseHref,
      text: 'Tumša vektoru pamatkarte. Vietu nosaukumi ir paslēpti. Kartes dati © OpenStreetMap contributors, ODbL. Stils un flīzes © OpenFreeMap un OpenMapTiles (BSD-3-Clause).',
    },
    {
      name: 'CARTO Dark Matter',
      href: creditsEn[5].href,
      license: 'ODbL',
      licenseHref: creditsEn[5].licenseHref,
      text: 'Tikai ja OpenFreeMap stils neielādējas: tumšas flīzes bez parakstiem. © OpenStreetMap contributors © CARTO.',
    },
    {
      name: 'MapLibre GL JS',
      href: creditsEn[6].href,
      license: 'BSD-3-Clause',
      licenseHref: creditsEn[6].licenseHref,
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
