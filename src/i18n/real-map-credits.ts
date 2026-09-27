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
    en: 'Map: Fix Planet from Hansen Global Forest Change lossyear, version 2024 v1.12. Colour is the share of 30 m pixels lost from 2001 to 2024, counted on a 0.02° grid. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по слою lossyear Hansen Global Forest Change, версия 2024 v1.12. Цвет — доля пикселей 30 м с потерей покрова с 2001 по 2024 год на сетке 0,02°. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie warstwy lossyear Hansen Global Forest Change, wersja 2024 v1.12. Kolor to udział pikseli 30 m z utratą pokrywy od 2001 do 2024 na siatce 0,02°. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Hansen Global Forest Change lossyear slāņa, versija 2024 v1.12. Krāsa ir 30 m pikseļu daļa ar segas zudumu no 2001. līdz 2024. gadam 0,02° tīklā. Robežas: Natural Earth.',
  },
  'nitrogen-dioxide-no2': {
    en: 'Map: Fix Planet from Copernicus Sentinel-5P TROPOMI, annual mean tropospheric NO₂ for 2024, KNMI/TEMIS monthly grids. Colour is a log scale of the column, from 1×10¹⁵ molecules/cm². Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным Copernicus Sentinel-5P TROPOMI, среднегодовая тропосферная колонка NO₂ за 2024 год, месячные сетки KNMI/TEMIS. Цвет — логарифмическая шкала колонки от 1×10¹⁵ молекул/см². Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie Copernicus Sentinel-5P TROPOMI, średnia roczna troposferycznej kolumny NO₂ za 2024, miesięczne siatki KNMI/TEMIS. Kolor to skala logarytmiczna kolumny od 1×10¹⁵ cząsteczek/cm². Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Copernicus Sentinel-5P TROPOMI, 2024. gada troposfēras NO₂ kolonnas gada vidējais, KNMI/TEMIS mēneša režģi. Krāsa ir kolonnas logaritmiskā skala no 1×10¹⁵ molekulām/cm². Robežas: Natural Earth.',
  },
  'mineral-resources': {
    en: 'Map: Fix Planet from USGS Mineral Resources Data System locations. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по точкам USGS Mineral Resources Data System. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie lokalizacji USGS Mineral Resources Data System. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no USGS Mineral Resources Data System atrašanās vietām. Robežas: Natural Earth.',
  },
  'mangrove-extent': {
    en: 'Map: Fix Planet from Global Mangrove Watch version 3, 2020 extent. Colour is the share of about 25 m pixels classed as mangrove, counted on a 0.02° grid. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по Global Mangrove Watch версии 3, распространение 2020 года. Цвет — доля пикселей около 25 м, отнесённых к манграм, на сетке 0,02°. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie Global Mangrove Watch wersja 3, zasięg 2020. Kolor to udział pikseli około 25 m zaliczonych do mangrowców, na siatce 0,02°. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Global Mangrove Watch 3. versijas, 2020. gada izplatība. Krāsa ir aptuveni 25 m pikseļu daļa, kas klasificēta kā mangroves, 0,02° tīklā. CC BY 4.0. Robežas: Natural Earth.',
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
    en: 'Map: Fix Planet from the NSIDC Sea Ice Index (G02135 v4) monthly concentration. Left: Arctic, March 2026. Right: Antarctic, September 2025. The number is percent ice concentration. Land is the NSIDC mask.',
    ru: 'Карта: Fix Planet по месячной концентрации NSIDC Sea Ice Index (G02135 v4). Слева: Арктика, март 2026. Справа: Антарктика, сентябрь 2025. Число — концентрация льда в процентах. Суша — маска NSIDC.',
    pl: 'Mapa: Fix Planet na podstawie miesięcznej koncentracji NSIDC Sea Ice Index (G02135 v4). Po lewej: Arktyka, marzec 2026. Po prawej: Antarktyka, wrzesień 2025. Liczba to koncentracja lodu w procentach. Ląd to maska NSIDC.',
    lv: 'Karte: Fix Planet no NSIDC Sea Ice Index (G02135 v4) mēneša koncentrācijas. Pa kreisi: Arktika, 2026. gada marts. Pa labi: Antarktika, 2025. gada septembris. Skaitlis ir ledus koncentrācija procentos. Zeme ir NSIDC maska.',
  },
  'sea-level': {
    en: 'Map: Fix Planet from the NOAA Laboratory for Satellite Altimetry regional sea-level trend, 1992.96–2025.10, from the TOPEX/Jason/Sentinel-6 reference series. The number is millimetres per year. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по региональному тренду уровня моря NOAA Laboratory for Satellite Altimetry, 1992,96–2025,10, опорный ряд TOPEX/Jason/Sentinel-6. Число — миллиметры в год. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie regionalnego trendu poziomu morza NOAA Laboratory for Satellite Altimetry, 1992,96–2025,10, seria referencyjna TOPEX/Jason/Sentinel-6. Liczba to milimetry na rok. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NOAA Laboratory for Satellite Altimetry reģionālā jūras līmeņa trenda, 1992,96–2025,10, TOPEX/Jason/Sentinel-6 atsauces sērija. Skaitlis ir milimetri gadā. Robežas: Natural Earth.',
  },
  'marine-heatwaves': {
    en: 'Map: Fix Planet from NOAA Coral Reef Watch 5 km sea-surface temperature anomaly, 25 September 2026. The number is degrees Celsius. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по аномалии температуры поверхности моря NOAA Coral Reef Watch, 5 км, 25 сентября 2026. Число — градусы Цельсия. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie anomalii temperatury powierzchni morza NOAA Coral Reef Watch, 5 km, 25 września 2026. Liczba to stopnie Celsjusza. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NOAA Coral Reef Watch 5 km jūras virsmas temperatūras anomālijas, 2026. gada 25. septembris. Skaitlis ir Celsija grādi. Robežas: Natural Earth.',
  },
  'ocean-heat-content': {
    en: 'Map: Fix Planet from NOAA NCEI yearly ocean heat content anomaly, 0–700 m, 2025. The number is 10¹⁸ joules in each 1° cell. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по годовой аномалии теплосодержания океана NOAA NCEI, 0–700 м, 2025. Число — 10¹⁸ джоулей в ячейке 1°. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie rocznej anomalii zawartości ciepła oceanu NOAA NCEI, 0–700 m, 2025. Liczba to 10¹⁸ dżuli w komórce 1°. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NOAA NCEI gada okeāna siltuma satura anomālijas, 0–700 m, 2025. Skaitlis ir 10¹⁸ džouli katrā 1° šūnā. Robežas: Natural Earth.',
  },
  'ocean-acidification': {
    en: 'Map: Fix Planet from OceanSODA-ETHZ v2025 surface pH (total scale). The number is the change from the 1985–1989 mean to the 2020–2024 mean. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по поверхностному pH OceanSODA-ETHZ v2025 (общая шкала). Число — изменение от среднего за 1985–1989 к среднему за 2020–2024. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie powierzchniowego pH OceanSODA-ETHZ v2025 (skala całkowita). Liczba to zmiana od średniej z lat 1985–1989 do średniej z lat 2020–2024. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no OceanSODA-ETHZ v2025 virsmas pH (kopējā skala). Skaitlis ir izmaiņa no 1985.–1989. gada vidējā uz 2020.–2024. gada vidējo. Robežas: Natural Earth.',
  },
  'burned-area': {
    en: 'Map: Fix Planet from MODIS MCD64CMQ Collection 6.1 monthly burned area (University of Maryland fuoco distribution of MCD64A1). The number is the 2023 sum of burned area divided by the area of each 0.25° cell. Values above one cell-area are drawn as 1. Ocean and unmapped land stay grey. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по месячной площади гарей MODIS MCD64CMQ, коллекция 6.1 (распространение MCD64A1 Университетом Мэриленда, fuoco). Число — сумма гарей за 2023 год, делённая на площадь ячейки 0,25°. Значения больше одной площади ячейки показаны как 1. Океан и некартированная суша серые. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie miesięcznego areału spalenisk MODIS MCD64CMQ, kolekcja 6.1 (dystrybucja MCD64A1 Uniwersytetu Maryland, fuoco). Liczba to suma spalenisk z 2023 roku podzielona przez powierzchnię komórki 0,25°. Wartości powyżej jednej powierzchni komórki są rysowane jako 1. Ocean i niezmapowany ląd zostają szare. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no MODIS MCD64CMQ 6.1 kolekcijas mēneša izdegumu platības (Mērilendas Universitātes fuoco MCD64A1 izplatījums). Skaitlis ir 2023. gada izdegumu summa, dalīta ar katras 0,25° šūnas platību. Vērtības virs vienas šūnas platības ir zīmētas kā 1. Okeāns un nekartēta zeme paliek pelēki. Robežas: Natural Earth.',
  },
  'ecological-zones': {
    en: 'Map: Fix Planet from FAO Global Ecological Zones, 2010 edition. Colours are the published zone classes. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по глобальным экологическим зонам FAO, издание 2010 года. Цвета — опубликованные классы зон. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie globalnych stref ekologicznych FAO, wydanie 2010. Kolory to opublikowane klasy stref. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no FAO globālajām ekoloģiskajām zonām, 2010. gada izdevums. Krāsas ir publicētās zonu klases. Robežas: Natural Earth.',
  },
  'water-stress': {
    en: 'Map: Fix Planet from WRI Aqueduct 4.0 baseline water stress, 2023. The number is the indicator score from 0 to 5. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по базовому водному стрессу WRI Aqueduct 4.0, 2023. Число — балл показателя от 0 до 5. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie bazowego stresu wodnego WRI Aqueduct 4.0, 2023. Liczba to wynik wskaźnika od 0 do 5. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no WRI Aqueduct 4.0 bāzes ūdens stresa, 2023. Skaitlis ir rādītāja vērtējums no 0 līdz 5. CC BY 4.0. Robežas: Natural Earth.',
  },
  'groundwater-whymap': {
    en: 'Map: Fix Planet from WRI Aqueduct 4.0 baseline groundwater table decline, 2023. The number is the indicator score from 0 to 5. Basins without a score stay grey. CC BY 4.0. Boundaries: Natural Earth. This is not the WHYMAP aquifer map.',
    ru: 'Карта: Fix Planet по базовому снижению уровня грунтовых вод WRI Aqueduct 4.0, 2023. Число — балл показателя от 0 до 5. Бассейны без балла остаются серыми. CC BY 4.0. Границы: Natural Earth. Это не карта водоносных горизонтов WHYMAP.',
    pl: 'Mapa: Fix Planet na podstawie bazowego spadku zwierciadła wód podziemnych WRI Aqueduct 4.0, 2023. Liczba to wynik wskaźnika od 0 do 5. Zlewnie bez wyniku zostają szare. CC BY 4.0. Granice: Natural Earth. To nie jest mapa warstw wodonośnych WHYMAP.',
    lv: 'Karte: Fix Planet no WRI Aqueduct 4.0 bāzes gruntsūdens līmeņa pazemināšanās, 2023. Skaitlis ir rādītāja vērtējums no 0 līdz 5. Baseini bez vērtējuma paliek pelēki. CC BY 4.0. Robežas: Natural Earth. Šī nav WHYMAP ūdensnesēju karte.',
  },
  'flood-hazard-aqueduct': {
    en: 'Map: Fix Planet from WRI Aqueduct 4.0 baseline riverine flood risk, 2023. The number is the indicator score from 0 to 5. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по базовому речному паводковому риску WRI Aqueduct 4.0, 2023. Число — балл показателя от 0 до 5. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie bazowego ryzyka powodzi rzecznych WRI Aqueduct 4.0, 2023. Liczba to wynik wskaźnika od 0 do 5. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no WRI Aqueduct 4.0 bāzes upju plūdu riska, 2023. Skaitlis ir rādītāja vērtējums no 0 līdz 5. CC BY 4.0. Robežas: Natural Earth.',
  },
  'intact-forest-landscapes': {
    en: 'Map: Fix Planet from Intact Forest Landscapes, 2020 extent (IFL Mapping Team). CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по Intact Forest Landscapes, распространение 2020 года (IFL Mapping Team). CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie Intact Forest Landscapes, zasięg 2020 (IFL Mapping Team). CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Intact Forest Landscapes, 2020. gada izplatība (IFL Mapping Team). CC BY 4.0. Robežas: Natural Earth.',
  },
  'world-population': {
    en: 'Map: Fix Planet from UN World Population Prospects 2024, medium variant, population on 1 July 2024. The number is people, on a log scale. Boundaries: Natural Earth 1:50m.',
    ru: 'Карта: Fix Planet по данным ООН World Population Prospects 2024, средний вариант, население на 1 июля 2024 года. Число — люди, логарифмическая шкала. Границы: Natural Earth 1:50m.',
    pl: 'Mapa: Fix Planet na podstawie ONZ World Population Prospects 2024, wariant średni, ludność 1 lipca 2024 r. Liczba to ludzie, skala logarytmiczna. Granice: Natural Earth 1:50m.',
    lv: 'Karte: Fix Planet no ANO World Population Prospects 2024, vidējais variants, iedzīvotāju skaits 2024. gada 1. jūlijā. Skaitlis ir cilvēki, logaritmiskā skala. Robežas: Natural Earth 1:50m.',
  },
  'population-growth': {
    en: 'Map: Fix Planet from UN World Population Prospects 2024, medium variant, 2024 population growth rate. The number is percent per year, centered at zero. Boundaries: Natural Earth 1:50m.',
    ru: 'Карта: Fix Planet по данным ООН World Population Prospects 2024, средний вариант, темп роста населения в 2024 году. Число — проценты в год, шкала с центром в нуле. Границы: Natural Earth 1:50m.',
    pl: 'Mapa: Fix Planet na podstawie ONZ World Population Prospects 2024, wariant średni, tempo wzrostu ludności w 2024 r. Liczba to procenty na rok, skala wyśrodkowana na zerze. Granice: Natural Earth 1:50m.',
    lv: 'Karte: Fix Planet no ANO World Population Prospects 2024, vidējais variants, 2024. gada iedzīvotāju skaita pieauguma temps. Skaitlis ir procenti gadā, skala ar centru nullē. Robežas: Natural Earth 1:50m.',
  },
  'cities-and-towns': {
    en: 'Map: Fix Planet from the European Commission GHSL GHS-SMOD R2023A, 2030 epoch. Red is an urban centre (class 30), orange is a town or semi-dense cluster (classes 21 to 23), olive is rural (classes 11 to 13), counted on a 0.02° grid. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным GHSL GHS-SMOD R2023A Еврокомиссии, эпоха 2030 года. Красный — городской центр (класс 30), оранжевый — посёлок или полуплотное скопление (классы 21–23), оливковый — сельские ячейки (классы 11–13), на сетке 0,02°. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie GHSL GHS-SMOD R2023A Komisji Europejskiej, epoka 2030. Czerwień to ośrodek miejski (klasa 30), pomarańcz to miasteczko lub skupisko półgęste (klasy 21–23), oliwkowy to komórki wiejskie (klasy 11–13), na siatce 0,02°. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Eiropas Komisijas GHSL GHS-SMOD R2023A, 2030. gada epoha. Sarkans ir pilsētas centrs (30. klase), oranžs ir pilsētciemats vai pusblīvs sakopojums (21.–23. klase), olīvzaļš ir lauku šūnas (11.–13. klase), 0,02° tīklā. CC BY 4.0. Robežas: Natural Earth.',
  },
  'built-up-surface': {
    en: 'Map: Fix Planet from the European Commission GHSL GHS-BUILT-S R2023A, 2030 epoch. The number is the percent of each 0.02° cell that is built-up surface, on a log scale from 0.1. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным GHSL GHS-BUILT-S R2023A Еврокомиссии, эпоха 2030 года. Число — процент застроенной поверхности в каждой ячейке 0,02°, логарифмическая шкала от 0,1. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie GHSL GHS-BUILT-S R2023A Komisji Europejskiej, epoka 2030. Liczba to procent powierzchni zabudowanej w każdej komórce 0,02°, skala logarytmiczna od 0,1. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Eiropas Komisijas GHSL GHS-BUILT-S R2023A, 2030. gada epoha. Skaitlis ir apbūvētās virsmas procents katrā 0,02° šūnā, logaritmiskā skala no 0,1. CC BY 4.0. Robežas: Natural Earth.',
  },
};

export function realMapCredit(locale: Locale, slug: string): string | undefined {
  return credits[slug]?.[locale] ?? credits[slug]?.en;
}

export function hasRealMap(slug: string): boolean {
  return slug in credits;
}
