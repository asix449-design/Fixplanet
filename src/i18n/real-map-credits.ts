import type { Locale } from './config';

/**
 * Localized credit for maps drawn from open data.
 * Dataset names stay as published. Units are translated.
 */
const credits: Record<string, Record<Locale, string>> = {
  'consumption-co2-emissions': {
    en: 'Map: Fix Planet from Global Carbon Project consumption-based carbon dioxide data, 2023. Units: tonnes per year. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным Global Carbon Project о выбросах углекислого газа по потреблению, 2023. Единицы: тонны в год. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych Global Carbon Project o emisjach dwutlenku węgla według konsumpcji, 2023. Jednostki: tony rocznie. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Global Carbon Project datiem par oglekļa dioksīda emisijām pēc patēriņa, 2023. Mērvienība: tonnas gadā. Robežas: Natural Earth.',
  },
  'methane-emissions': {
    en: 'Map: Fix Planet from EDGAR methane emissions data, 2024. Units: tonnes per year. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным EDGAR о выбросах метана, 2024. Единицы: тонны в год. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych EDGAR o emisjach metanu, 2024. Jednostki: tony rocznie. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no EDGAR datiem par metāna emisijām, 2024. Mērvienība: tonnas gadā. Robežas: Natural Earth.',
  },
  'mismanaged-plastic-waste': {
    en: 'Map: Fix Planet from Meijer and co-authors, mismanaged plastic waste, 2019. Units: tonnes per year. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным Meijer и соавторов о пластиковых отходах вне нормального обращения, 2019. Единицы: тонны в год. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych Meijer i współautorów o źle zagospodarowanych odpadach z tworzyw sztucznych, 2019. Jednostki: tony rocznie. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Meijer un līdzautoru datiem par nepareizi apsaimniekotiem plastmasas atkritumiem, 2019. Mērvienība: tonnas gadā. Robežas: Natural Earth.',
  },
  'military-expenditure-sipri': {
    en: 'Map: Fix Planet from SIPRI Military Expenditure Database, 2024. Units: US dollars per year. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным SIPRI Military Expenditure Database, 2024. Единицы: доллары США в год. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych SIPRI Military Expenditure Database, 2024. Jednostki: dolary amerykańskie rocznie. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no SIPRI Military Expenditure Database datiem, 2024. Mērvienība: ASV dolāri gadā. Robežas: Natural Earth.',
  },
  'forest-cover-loss': {
    en: 'Map: Fix Planet from Hansen Global Forest Change tree-cover loss, 2001–2024. Units: hectares. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным Hansen Global Forest Change о потере древесного покрова, 2001–2024. Единицы: гектары. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych Hansen Global Forest Change o utracie pokrywy drzew, 2001–2024. Jednostki: hektary. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Hansen Global Forest Change datiem par koku segas zudumu, 2001–2024. Mērvienība: hektāri. Robežas: Natural Earth.',
  },
  'nitrogen-dioxide-no2': {
    en: 'Map: Fix Planet from Copernicus Sentinel-5P TROPOMI data via NASA GIBS, 1–16 June 2024. Color follows the NASA scale for tropospheric nitrogen dioxide. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным Copernicus Sentinel-5P TROPOMI через NASA GIBS, 1–16 июня 2024. Цвет — шкала NASA для тропосферного диоксида азота. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych Copernicus Sentinel-5P TROPOMI przez NASA GIBS, 1–16 czerwca 2024. Kolor odpowiada skali NASA dla dwutlenku azotu w troposferze. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Copernicus Sentinel-5P TROPOMI datiem caur NASA GIBS, 1.–16. jūnijā 2024. Krāsa atbilst NASA skalai troposfēras slāpekļa dioksīdam. Robežas: Natural Earth.',
  },
  'mineral-resources': {
    en: 'Map: Fix Planet from USGS Mineral Resources Data System locations. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по точкам USGS Mineral Resources Data System. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie lokalizacji USGS Mineral Resources Data System. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no USGS Mineral Resources Data System atrašanās vietām. Robežas: Natural Earth.',
  },
  'mangrove-extent': {
    en: 'Map: Fix Planet from the NASA mangrove forest distribution, 2000. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NASA о распространении мангровых лесов, 2000. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych NASA o rozmieszczeniu lasów namorzynowych, 2000. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NASA datiem par mangrovju mežu izplatību, 2000. Robežas: Natural Earth.',
  },
  'canopy-height': {
    en: 'Map: Fix Planet from NASA GEDI L3 data, 2019–2023. Color follows the NASA scale for mean canopy height in meters. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NASA GEDI L3, 2019–2023. Цвет — шкала NASA для средней высоты полога в метрах. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych NASA GEDI L3, 2019–2023. Kolor odpowiada skali NASA dla średniej wysokości koron w metrach. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NASA GEDI L3 datiem, 2019–2023. Krāsa atbilst NASA skalai vidējam vainagu augstumam metros. Robežas: Natural Earth.',
  },
  'aboveground-biomass': {
    en: 'Map: Fix Planet from NASA GEDI L4B data, 2019–2023. Color follows the NASA scale for aboveground biomass density in megagrams per hectare. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NASA GEDI L4B, 2019–2023. Цвет — шкала NASA для плотности надземной биомассы в мегаграммах на гектар. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych NASA GEDI L4B, 2019–2023. Kolor odpowiada skali NASA dla gęstości biomasy nadziemnej w megagramach na hektar. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NASA GEDI L4B datiem, 2019–2023. Krāsa atbilst NASA skalai virszemes biomasas blīvumam megagramos uz hektāru. Robežas: Natural Earth.',
  },
  'dissolved-oxygen': {
    en: 'Map: Fix Planet from NOAA World Ocean Atlas 2023 dissolved-oxygen data, 1965–2022. The colour is the minimum between 100 and 1000 metres, in micromoles per kilogram. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NOAA World Ocean Atlas 2023 о растворённом кислороде, 1965–2022. Цвет — минимум на глубинах от 100 до 1000 метров, в микромолях на килограмм. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych NOAA World Ocean Atlas 2023 o tlenie rozpuszczonym, 1965–2022. Kolor to minimum między 100 a 1000 metrów, w mikromolach na kilogram. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NOAA World Ocean Atlas 2023 izšķīdušā skābekļa datiem, 1965–2022. Krāsa ir minimums no 100 līdz 1000 metriem, mikromolos uz kilogramu. Robežas: Natural Earth.',
  },
  'sea-ice-extent': {
    en: 'Map: Fix Planet from NSIDC AMSR2 sea-ice concentration data, 15 March 2024. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NSIDC AMSR2 о концентрации морского льда, 15 марта 2024. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych NSIDC AMSR2 o koncentracji lodu morskiego, 15 marca 2024. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NSIDC AMSR2 datiem par jūras ledus koncentrāciju, 2024. gada 15. martā. Robežas: Natural Earth.',
  },
  'sea-level': {
    en: 'Map: Fix Planet from NASA JPL MEaSUREs sea-surface height anomaly data, 15 June 2018. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NASA JPL MEaSUREs об аномалии высоты морской поверхности, 15 июня 2018. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych NASA JPL MEaSUREs o anomalii wysokości powierzchni morza, 15 czerwca 2018. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NASA JPL MEaSUREs datiem par jūras virsmas augstuma anomāliju, 2018. gada 15. jūnijā. Robežas: Natural Earth.',
  },
  'marine-heatwaves': {
    en: 'Map: Fix Planet from NASA GHRSST MUR sea-surface temperature anomaly data, 15 August 2024. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NASA GHRSST MUR об аномалии температуры поверхности моря, 15 августа 2024. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych NASA GHRSST MUR o anomalii temperatury powierzchni morza, 15 sierpnia 2024. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NASA GHRSST MUR datiem par jūras virsmas temperatūras anomāliju, 2024. gada 15. augustā. Robežas: Natural Earth.',
  },
};

export function realMapCredit(locale: Locale, slug: string): string | undefined {
  return credits[slug]?.[locale] ?? credits[slug]?.en;
}

export function hasRealMap(slug: string): boolean {
  return slug in credits;
}
