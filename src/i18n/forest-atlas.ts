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
  en: 'FAO figures, satellite greenness, reconstructions, and outlooks — plus canopy height, aboveground biomass density, burned area, and FAO ecological zones. Each layer names its publisher and what the layer measures (and what it does not).',
  ru: 'Цифры FAO, спутниковая зелень, реконструкции и перспективы — а также высота полога, плотность надземной биомассы, площадь гарей и экологические зоны FAO. У каждого слоя указаны издатель и то, что слой измеряет (и чего не измеряет).',
  pl: 'Liczby FAO, zieleń z satelity, rekonstrukcje i perspektywy — oraz wysokość koron, gęstość biomasy nadziemnej, areał spalenisk i strefy ekologiczne FAO. Przy każdej warstwie podany jest wydawca i to, co warstwa mierzy (i czego nie).',
  lv: 'FAO skaitļi, satelītu zaļums, rekonstrukcijas un nākotnes skati — kā arī vainagu augstums, virszemes biomasas blīvums, izdegušās platības un FAO ekoloģiskās zonas. Katram slānim norādīts izdevējs un tas, ko slānis mēra (un ko ne).',
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
    meta: 'MODIS MCD64A1 · FIRMS · burned area and active fire',
    blurb:
      'Where fire has burned the land surface — MODIS burned-area mapping plus FIRMS active-fire context, not tree-cover loss alone and not prescribed-fire policy.',
    what: 'MODIS MCD64A1 (Collection 6.1) is NASA’s global monthly burned-area product (LP DAAC / LAADS). FIRMS (Fire Information for Resource Management System) is the near-real-time active-fire service (a map and an Earthdata learn page). Together they show where fire has burned and where it is active. Further reading includes the GFED (Global Fire Emissions Database) site and data page, and the Earth Observatory MOD14A1 fire map.',
    why: 'Annual tree-cover loss can include fire but is not a dedicated burned-area product. Prescribed fire is a management practice, not a global burned-area map. This layer answers where fire burned.',
    howToRead:
      'Burned-area products map fire scars and the date of burn. FIRMS active-fire detections are near-real-time hotspot points — related, but not the same layer. Agricultural burning, savanna fire, and forest wildfire all appear; quality-assurance and confidence fields in the product documentation explain how to read them. The LP DAAC MCD64A1 page, the LAADS product page, and the FIRMS map and learn pages describe the layers. GFED is further reading on emissions.',
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
    meta: 'MODIS MCD64A1 · FIRMS · гари / активные пожары',
    blurb:
      'Где огонь выжег поверхность — картирование гарей MODIS плюс контекст FIRMS, не одна лишь потеря древесного покрова и не политика контролируемых палов.',
    detailShort:
      'MCD64A1 — глобальный месячный продукт гарей; FIRMS — почти реальное время активных очагов. Продукт гарей показывает следы и даты пожаров, а FIRMS — активные очаги почти в реальном времени; это связанные, но разные слои.',
  },
  'ecological-zones': {
    title: 'Экологические зоны',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · отчётность FRA',
    blurb:
      'Глобальные экологические зоны FAO для оценки лесных ресурсов — климатико-экологическая рамка лесных земель, не потеря покрова и не реконструкция биомов.',
    detailShort:
      'GEZ (второе издание / 2010) — классы для FRA. Данные и документация опубликованы в каталоге FAO, в PDF ap861e, в Open Knowledge и на сайте FRA. GEZ задаёт климатико-экологическую рамку для статистики лесов; её классы отличаются от реконструкций биомов и карт состояния лесов.',
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
    meta: 'MODIS MCD64A1 · FIRMS · spaleniska / aktywne pożary',
    blurb:
      'Gdzie ogień spalił powierzchnię — mapowanie spalenisk MODIS plus kontekst FIRMS, nie sama utrata pokrywy drzewnej i nie polityka wypaleń kontrolowanych.',
    detailShort:
      'MCD64A1 — globalny miesięczny produkt spalenisk; FIRMS — aktywne ogniska niemal w czasie rzeczywistym. Produkt spalenisk pokazuje ślady i daty pożarów, a FIRMS — aktywne ogniska; to powiązane, lecz różne warstwy.',
  },
  'ecological-zones': {
    title: 'Strefy ekologiczne',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · sprawozdawczość FRA',
    blurb:
      'Globalne strefy ekologiczne FAO dla oceny zasobów leśnych — klimatyczno-ekologiczna rama gruntów leśnych, nie utrata pokrywy i nie rekonstrukcja biomów.',
    detailShort:
      'GEZ (drugie wydanie / 2010) — klasy dla FRA. Dane i dokumentacja są publikowane w katalogu FAO, w PDF ap861e, w Open Knowledge i na stronie FRA. GEZ tworzy klimatyczno-ekologiczne ramy dla statystyk leśnych; jej klasy różnią się od rekonstrukcji biomów oraz warstw stanu lasów.',
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
    meta: 'MODIS MCD64A1 · FIRMS · izdegumi / aktīvie ugunsgrēki',
    blurb:
      'Kur uguns nodedzinājusi virsmu — MODIS izdegumu kartēšana plus FIRMS konteksts, ne tikai koku seguma zudums un ne kontrolētās dedzināšanas politika.',
    detailShort:
      'MCD64A1 — globāls mēneša izdegumu produkts; FIRMS — gandrīz reāllaika aktīvie perēkļi. Izdegumu produkts rāda uguns pēdas un datumus, bet FIRMS — aktīvos perēkļus; tie ir saistīti, taču atšķirīgi slāņi.',
  },
  'ecological-zones': {
    title: 'Ekoloģiskās zonas',
    meta: 'FAO Global Ecological Zones · GEZ 2010 · FRA ziņošana',
    blurb:
      'FAO globālās ekoloģiskās zonas meža resursu novērtējumam — klimatiski ekoloģiskais meža zemju ietvars, ne seguma zudums un ne biomu rekonstrukcija.',
    detailShort:
      'GEZ (otrais izdevums / 2010) — klases FRA vajadzībām. Dati un dokumentācija ir publicēti FAO katalogā, PDF ap861e, Open Knowledge un FRA vietnē. GEZ veido klimatiski ekoloģisku ietvaru mežu statistikai; tās klases atšķiras no biomu rekonstrukcijām un mežu stāvokļa slāņiem.',
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
