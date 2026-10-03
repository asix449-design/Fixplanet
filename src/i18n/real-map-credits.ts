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
    en: 'Map: Fix Planet, from U.S. Geological Survey Mineral Resources Data System locations, public domain. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по точкам системы данных о минеральных ресурсах Геологической службы США, общественное достояние. Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie lokalizacji w systemie danych o zasobach mineralnych Służby Geologicznej Stanów Zjednoczonych, domena publiczna. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Amerikas Savienoto Valstu Ģeoloģijas dienesta minerālresursu datu sistēmas atrašanās vietām, publiskais īpašums. Robežas: Natural Earth, publiskais domēns.',
  },
  'oil-gas-reserves': {
    en: 'Map: cropped from the U.S. Energy Information Administration public-domain map of assessed shale-gas basins.',
    ru: 'Карта: фрагмент карты оценённых бассейнов сланцевого газа Управления энергетической информации США, общественное достояние.',
    pl: 'Mapa: wycinek mapy ocenionych basenów gazu łupkowego Amerykańskiej Agencji Informacji Energetycznej, domena publiczna.',
    lv: 'Karte: izgriezums no Amerikas Savienoto Valstu Enerģētikas informācijas pārvaldes publiskā īpašuma kartes ar novērtētajiem slānekļa gāzes baseiniem.',
  },
  'coal-mines': {
    en: 'Map: Fix Planet, from Global Energy Monitor, Global Coal Mine Tracker, August 2026 release, Creative Commons Attribution 4.0 International licence. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по данным Global Energy Monitor, Глобальный реестр угольных шахт, выпуск августа 2026 года, лицензия Creative Commons «Атрибуция 4.0 Международная». Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie danych Global Energy Monitor, Globalny rejestr kopalń węgla, wydanie z sierpnia 2026 r., licencja Creative Commons Uznanie autorstwa 4.0 Międzynarodowe. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Global Energy Monitor datiem, Pasaules ogļu raktuvju reģistrs, 2026. gada augusta izlaidums, Creative Commons licence „Atsauce 4.0 Starptautiskā”. Robežas: Natural Earth, publiskais domēns.',
  },
  'coal-reserves': {
    en: 'Map: Fix Planet, from U.S. Energy Information Administration data, public domain, via Our World in Data, Creative Commons Attribution 4.0 International licence. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по данным Управления энергетической информации США, общественное достояние, через Our World in Data, лицензия Creative Commons «Атрибуция 4.0 Международная». Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie danych Amerykańskiej Agencji Informacji Energetycznej, domena publiczna, za pośrednictwem Our World in Data, licencja Creative Commons Uznanie autorstwa 4.0 Międzynarodowe. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Amerikas Savienoto Valstu Enerģētikas informācijas pārvaldes datiem, publiskais domēns, ar Our World in Data starpniecību, Creative Commons licence „Atsauce 4.0 Starptautiskā”. Robežas: Natural Earth, publiskais domēns.',
  },
  'critical-mineral-production': {
    en: 'Map: Fix Planet, redrawn from the U.S. Geological Survey map of leading mining countries in Global Maps of Critical Mineral Production in 2023, public domain. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet, перерисовано с карты ведущих стран добычи Геологической службы США из издания «Глобальные карты добычи критически важных минералов в 2023 году», общественное достояние. Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet, przerysowana z mapy wiodących krajów wydobycia Służby Geologicznej Stanów Zjednoczonych z publikacji „Globalne mapy produkcji minerałów krytycznych w 2023 r.”, domena publiczna. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet, pārzīmēta no Amerikas Savienoto Valstu Ģeoloģijas dienesta vadošo ieguves valstu kartes izdevumā „Pasaules kartes par kritiski svarīgo minerālu ieguvi 2023. gadā”, publiskais domēns. Robežas: Natural Earth, publiskais domēns.',
  },
  'rare-earths': {
    en: 'Map: Fix Planet, from U.S. Geological Survey, Mineral Commodity Summaries 2025 data release, public domain. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по набору данных к «Обзору минерального сырья 2025» Геологической службы США, общественное достояние. Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie zbioru danych do „Przeglądu surowców mineralnych 2025” Służby Geologicznej Stanów Zjednoczonych, domena publiczna. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Amerikas Savienoto Valstu Ģeoloģijas dienesta izdevuma „Minerālo izejvielu pārskats 2025” datu kopas, publiskais domēns. Robežas: Natural Earth, publiskais domēns.',
  },
  'lithium': {
    en: 'Map: Fix Planet, from U.S. Geological Survey, Mineral Commodity Summaries 2025 data release, public domain. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по набору данных к «Обзору минерального сырья 2025» Геологической службы США, общественное достояние. Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie zbioru danych do „Przeglądu surowców mineralnych 2025” Służby Geologicznej Stanów Zjednoczonych, domena publiczna. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Amerikas Savienoto Valstu Ģeoloģijas dienesta izdevuma „Minerālo izejvielu pārskats 2025” datu kopas, publiskais domēns. Robežas: Natural Earth, publiskais domēns.',
  },
  'mangrove-extent': {
    en: 'Map: Fix Planet from Global Mangrove Watch version 3, 2020 extent. Colour is the share of about 25 m pixels classed as mangrove, counted on a 0.02° grid. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по Global Mangrove Watch версии 3, распространение 2020 года. Цвет — доля пикселей около 25 м, отнесённых к манграм, на сетке 0,02°. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie Global Mangrove Watch wersja 3, zasięg 2020. Kolor to udział pikseli około 25 m zaliczonych do mangrowców, na siatce 0,02°. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Global Mangrove Watch 3. versijas, 2020. gada izplatība. Krāsa ir aptuveni 25 m pikseļu daļa, kas klasificēta kā mangroves, 0,02° tīklā. CC BY 4.0. Robežas: Natural Earth.',
  },
  'canopy-height': {
    en: 'Map: Fix Planet from NASA GEDI L3 data, 2019–2023. Color follows the NASA scale for mean canopy height in meters. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NASA GEDI L3, 2019–2023. Цвет следует шкале NASA для средней высоты полога в метрах. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych NASA GEDI L3, 2019–2023. Kolor odpowiada skali NASA dla średniej wysokości koron w metrach. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no NASA GEDI L3 datiem, 2019–2023. Krāsa atbilst NASA skalai vidējam vainagu augstumam metros. Robežas: Natural Earth.',
  },
  'aboveground-biomass': {
    en: 'Map: Fix Planet from NASA GEDI L4B data, 2019–2023. Color follows the NASA scale for aboveground biomass density in megagrams per hectare. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным NASA GEDI L4B, 2019–2023. Цвет следует шкале NASA для плотности надземной биомассы в мегаграммах на гектар. Границы: Natural Earth.',
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
    ru: 'Карта: Fix Planet по месячной площади гарей MODIS MCD64CMQ, коллекция 6.1 (распространение MCD64A1 Университетом Мэриленда, fuoco). Число показывает сумму гарей за 2023 год, делённую на площадь ячейки 0,25°. Значения больше одной площади ячейки показаны как 1. Океан и некартированная суша серые. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie miesięcznego areału spalenisk MODIS MCD64CMQ, kolekcja 6.1 (dystrybucja MCD64A1 Uniwersytetu Maryland, fuoco). Liczba to suma spalenisk z 2023 roku podzielona przez powierzchnię komórki 0,25°. Wartości powyżej jednej powierzchni komórki są rysowane jako 1. Ocean i niezmapowany ląd zostają szare. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no MODIS MCD64CMQ 6.1 kolekcijas mēneša izdegumu platības (Mērilendas Universitātes fuoco MCD64A1 izplatījums). Skaitlis ir 2023. gada izdegumu summa, dalīta ar katras 0,25° šūnas platību. Vērtības virs vienas šūnas platības ir zīmētas kā 1. Okeāns un nekartēta zeme paliek pelēki. Robežas: Natural Earth.',
  },
  'ecological-zones': {
    en: 'Map: Fix Planet from the Food and Agriculture Organization of the United Nations Global Ecological Zones, 2010 edition. Colours follow the published zone classes. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по глобальным экологическим зонам Продовольственной и сельскохозяйственной организации Объединённых Наций, издание 2010 года. Цвета соответствуют опубликованным классам зон. Границы: Natural Earth.',
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
  'planted-forests': {
    en: 'Map: Fix Planet from Lesiv and co-authors, global forest management, 2015, 100 m classes. Colour is the share of each 0.02° cell classed as planted forest (rotation longer than 15 years) or short-rotation timber plantation. Oil palm is a separate class and stays outside this share. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным Lesiv и соавторов о лесоуправлении, 2015, классы 100 м. Цвет показывает долю ячейки 0,02°, отнесённую к посаженному лесу (оборот дольше 15 лет) или к короткоцикловой древесной плантации. Масличная пальма является отдельным классом и остаётся вне этой доли. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych Lesiv i współautorów o gospodarce leśnej, 2015, klasy 100 m. Kolor to udział komórki 0,02° zaliczonej do lasu sadzonego (okres rotacji dłuższy niż 15 lat) albo do krótkocyklicznej plantacji drzewnej. Palma olejowa to osobna klasa i nie wchodzi do tej warstwy. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Lesiv un līdzautoru meža apsaimniekošanas datiem, 2015, 100 m klases. Krāsa ir 0,02° šūnas daļa, kas klasificēta kā stādīts mežs (rotācijas periods ilgāks par 15 gadiem) vai īscikla koksnes plantācija. Eļļas palma ir atsevišķa klase un šeit nav iekļauta. CC BY 4.0. Robežas: Natural Earth.',
  },
  'forest-carbon-stock': {
    en: 'Map: Fix Planet from the Food and Agriculture Organization of the United Nations Global Forest Resources Assessment 2025 country tables. The number is living-biomass carbon in 2025: aboveground plus belowground, in million tonnes. Soil, litter and dead wood stay off this plate. Countries missing either pool stay grey. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по страновым таблицам Глобальной оценки лесных ресурсов 2025 года Продовольственной и сельскохозяйственной организации Объединённых Наций. Число показывает углерод живой биомассы в 2025 году: надземный плюс подземный, в миллионах тонн. Почва, подстилка и мёртвая древесина остаются вне этой плиты. Страны без одного из двух пулов остаются серыми. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie tabel krajowych FAO Global Forest Resources Assessment 2025. Liczba to węgiel żywej biomasy w 2025 roku: nadziemny plus podziemny, w milionach ton. Gleba, ściółka i martwe drewno nie są na tej płycie. Kraje bez jednej z dwóch pul zostają szare. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no FAO Global Forest Resources Assessment 2025 valstu tabulām. Skaitlis ir dzīvās biomasas ogleklis 2025. gadā: virszemes plus pazemes, miljonos tonnu. Augsne, nobiras un mirusī koksne šajā platē nav. Valstis, kurām trūkst viena no diviem baseiniem, paliek pelēkas. Robežas: Natural Earth.',
  },
  'tree-cover': {
    en: 'Map: Fix Planet from ESA WorldCover 10 m 2021 v200. Colour is the share of each 0.02° cell in class 10 (tree cover). A 10 m pixel is that land-cover class when trees are the mapped class and cover at least 10 percent of it. Mangroves are class 95 and stay off this plate. CC BY 4.0. Contains modified Copernicus Sentinel data (2021). Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по ESA WorldCover 10 м, 2021, версия v200. Цвет показывает долю ячейки 0,02° в классе 10 (древесный покров). Пиксель 10 м относится к этому классу земного покрова, когда деревья являются назначенным классом и закрывают не меньше 10 процентов пикселя. Мангры относятся к классу 95 и остаются вне этой плиты. CC BY 4.0. Содержит изменённые данные Copernicus Sentinel (2021). Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie ESA WorldCover 10 m, 2021, wersja v200. Kolor to udział komórki 0,02° w klasie 10 (pokrycie drzewami). Piksel 10 m to ta klasa pokrycia terenu, a nie procent zwarcia koron. Namorzyny to klasa 95 i nie wchodzą do tej warstwy. CC BY 4.0. Zawiera zmodyfikowane dane Copernicus Sentinel (2021). Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no ESA WorldCover 10 m, 2021, versija v200. Krāsa ir 0,02° šūnas daļa 10. klasē (koku segums). 10 m pikselis ir šī zemes seguma klase, nevis vainagu blīvuma procents. Mangrovju meži ir 95. klase un šeit nav iekļauti. CC BY 4.0. Satur pārveidotus Copernicus Sentinel (2021) datus. Robežas: Natural Earth.',
  },
  peatlands: {
    en: 'Map: Fix Planet from PEATMAP (Xu and co-authors, 2018). Colour marks a 0.02° cell that a mapped peat polygon touches. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по PEATMAP (Xu и соавторы, 2018). Цвет отмечает ячейку 0,02°, которой касается полигон торфа. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie PEATMAP (Xu i współautorzy, 2018). Kolor oznacza komórkę 0,02°, której dotyka poligon torfu. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no PEATMAP (Xu un līdzautori, 2018). Krāsa atzīmē 0,02° šūnu, kurai pieskaras kūdras poligons. CC BY 4.0. Robežas: Natural Earth.',
  },
  'homicide-rates': {
    en: 'United Nations Office on Drugs and Crime; Our World in Data. 2019–2023.',
    ru: 'Управление ООН по наркотикам и преступности; Our World in Data. 2019–2023.',
    pl: 'Biuro Narodów Zjednoczonych ds. Narkotyków i Przestępczości; Our World in Data. 2019–2023.',
    lv: 'Apvienoto Nāciju Organizācijas Narkotiku un noziedzības birojs; Our World in Data. 2019.–2023. gads.',
  },
  'organized-crime-index': {
    en: 'Global Initiative against Transnational Organized Crime (GI-TOC). Index 2025 (covers 2024).',
    ru: 'Глобальная инициатива против транснациональной организованной преступности. Индекс 2025 года, оценка за 2024 год.',
    pl: 'Globalna inicjatywa przeciwko transnarodowej przestępczości zorganizowanej. Indeks 2025, ocena za 2024.',
    lv: 'Globālā iniciatīva pret transnacionālo organizēto noziedzību. 2025. gada indekss, novērtējums par 2024. gadu.',
  },
  'corruption-perceptions-index': {
    en: 'Transparency International; Our World in Data. CPI 2025.',
    ru: 'Transparency International; Our World in Data. Индекс 2025 года.',
    pl: 'Transparency International; Our World in Data. Indeks 2025.',
    lv: 'Transparency International; Our World in Data. 2025. gada indekss.',
  },
  'trafficking-in-persons': {
    en: 'United Nations Office on Drugs and Crime — Global Report on Trafficking in Persons. 2024 report.',
    ru: 'Управление ООН по наркотикам и преступности, Глобальный доклад о торговле людьми. Доклад 2024 года.',
    pl: 'Biuro Narodów Zjednoczonych ds. Narkotyków i Przestępczości, Globalny raport o handlu ludźmi. Raport 2024.',
    lv: 'Apvienoto Nāciju Organizācijas Narkotiku un noziedzības birojs, Globālais ziņojums par cilvēku tirdzniecību. 2024. gada ziņojums.',
  },
  'prison-population-rate': {
    en: 'Chart: Our World in Data, CC BY 4.0. Data: Institute for Crime & Justice Policy Research, World Prison Brief (2026); population from various sources (2024), with minor processing by Our World in Data. The map was cropped from the Our World in Data chart.',
    ru: 'График: Our World in Data («Наш мир в данных»), лицензия Creative Commons с указанием авторства 4.0. Данные: Институт исследований преступности и политики в сфере правосудия, «Всемирная сводка о тюрьмах» (2026); численность населения по различным источникам (2024), с небольшой обработкой Our World in Data. Карта обрезана из графика Our World in Data.',
    pl: 'Wykres: Our World in Data („Nasz świat w danych”), licencja Creative Commons – uznanie autorstwa 4.0. Dane: Instytut Badań nad Przestępczością i Polityką Wymiaru Sprawiedliwości, „Światowy przegląd więziennictwa” (2026); ludność według różnych źródeł (2024), z niewielkim opracowaniem Our World in Data. Mapa została przycięta z wykresu Our World in Data.',
    lv: 'Grafiks: Our World in Data (“Mūsu pasaule datos”), licence Creative Commons Atsauce 4.0. Dati: Noziedzības un tieslietu politikas pētniecības institūts, “Pasaules cietumu pārskats” (2026); iedzīvotāju skaits no dažādiem avotiem (2024), ar nelielu Our World in Data apstrādi. Karte ir izgriezta no Our World in Data grafika.',
  },
  'drug-trafficking-flows': {
    en: 'Chart: Fix Planet, drawn from European Union Drugs Agency (EUDA) data, European Drug Report 2026, table EDR26-Cocaine-6. Reuse permitted with acknowledgement (compatible with CC BY 4.0).',
    ru: 'График: Fix Planet по данным Всемирного агентства ЕС по наркотикам, «Европейский доклад о наркотиках» 2026 года, таблица об изъятиях кокаина. Повторное использование разрешено с указанием источника (совместимо с лицензией Creative Commons с указанием авторства 4.0).',
    pl: 'Wykres: Fix Planet na podstawie danych Agencji Unii Europejskiej ds. Narkotyków, „Europejski raport narkotykowy” 2026, tabela przechwycenia kokainy. Ponowne wykorzystanie dozwolone z podaniem źródła (zgodne z licencją Creative Commons – uznanie autorstwa 4.0).',
    lv: 'Grafiks: Fix Planet pēc Eiropas Savienības Narkotiku aģentūras datiem, “Eiropas narkotiku ziņojums” 2026, tabula par izņemto kokaīnu. Atkārtota izmantošana atļauta, norādot avotu (saderīga ar Creative Commons Atsauces licenci 4.0).',
  },
  'modern-slavery': {
    en: 'Chart: Figure 1 of Global Estimates of Modern Slavery: Forced Labour and Forced Marriage (2022), © ILO, Walk Free and IOM, CC BY 4.0. This is an adaptation of an original work by the ILO, Walk Free and IOM. Responsibility for the views and opinions expressed in the adaptation rests solely with the author or authors of the adaptation and are not endorsed by the ILO, Walk Free or IOM.',
    ru: 'График: рисунок 1 из доклада «Глобальные оценки современного рабства: принудительный труд и принудительные браки» (2022), © Международная организация труда, Walk Free и Международная организация по миграции, лицензия Creative Commons с указанием авторства 4.0. Это адаптация оригинальной работы Международной организации труда, Walk Free и Международной организации по миграции. Ответственность за взгляды и мнения, выраженные в адаптации, лежит исключительно на авторе или авторах адаптации, и Международная организация труда, Walk Free и Международная организация по миграции их не поддерживают. Этот перевод создан не Международной организацией труда, не Walk Free и не Международной организацией по миграции, и его не следует считать официальным переводом Международной организации труда, Walk Free или Международной организации по миграции. Международная организация труда, Walk Free и Международная организация по миграции не отвечают за содержание и точность этого перевода.',
    pl: 'Wykres: rysunek 1 z raportu „Globalne szacunki współczesnego niewolnictwa: praca przymusowa i małżeństwa przymusowe” (2022), © Międzynarodowa Organizacja Pracy, Walk Free i Międzynarodowa Organizacja do spraw Migracji, licencja Creative Commons – uznanie autorstwa 4.0. Jest to adaptacja oryginalnego utworu Międzynarodowej Organizacji Pracy, Walk Free i Międzynarodowej Organizacji do spraw Migracji. Odpowiedzialność za poglądy i opinie wyrażone w adaptacji spoczywa wyłącznie na autorze lub autorach adaptacji, a Międzynarodowa Organizacja Pracy, Walk Free i Międzynarodowa Organizacja do spraw Migracji ich nie popierają. Tego tłumaczenia nie sporządziły Międzynarodowa Organizacja Pracy, Walk Free ani Międzynarodowa Organizacja do spraw Migracji i nie należy go uważać za oficjalne tłumaczenie Międzynarodowej Organizacji Pracy, Walk Free ani Międzynarodowej Organizacji do spraw Migracji. Międzynarodowa Organizacja Pracy, Walk Free i Międzynarodowa Organizacja do spraw Migracji nie odpowiadają za treść ani dokładność tego tłumaczenia.',
    lv: 'Grafiks: 1. attēls no ziņojuma “Mūsdienu verdzības globālās aplēses: piespiedu darbs un piespiedu laulības” (2022), © Starptautiskā Darba organizācija, Walk Free un Starptautiskā Migrācijas organizācija, licence Creative Commons Atsauce 4.0. Šis ir pielāgojums Starptautiskās Darba organizācijas, Walk Free un Starptautiskās Migrācijas organizācijas oriģināldarbam. Atbildība par pielāgojumā paustajiem uzskatiem un viedokļiem gulstas vienīgi uz pielāgojuma autoru vai autoriem, un Starptautiskā Darba organizācija, Walk Free un Starptautiskā Migrācijas organizācija tos neapstiprina. Šo tulkojumu nav veidojusi Starptautiskā Darba organizācija, Walk Free vai Starptautiskā Migrācijas organizācija, un to nevajag uzskatīt par oficiālu Starptautiskās Darba organizācijas, Walk Free vai Starptautiskās Migrācijas organizācijas tulkojumu. Starptautiskā Darba organizācija, Walk Free un Starptautiskā Migrācijas organizācija neatbild par šā tulkojuma saturu vai precizitāti.',
  },
  'basel-aml-index': {
    en: 'Map: Fix Planet, drawn from the US Department of State, International Narcotics Control Strategy Report 2025, Volume 2: Money Laundering (public domain).',
    ru: 'Карта: Fix Planet по данным Государственного департамента США, «Доклад о международной стратегии контроля над наркотиками» 2025 года, том 2: отмывание денег (общественное достояние).',
    pl: 'Mapa: Fix Planet na podstawie danych Departamentu Stanu Stanów Zjednoczonych, „Raport o międzynarodowej strategii kontroli narkotyków” 2025, tom 2: pranie pieniędzy (domena publiczna).',
    lv: 'Karte: Fix Planet pēc Amerikas Savienoto Valstu Valsts departamenta datiem, “Starptautiskās narkotiku kontroles stratēģijas ziņojums” 2025, 2. sējums: naudas atmazgāšana (publiskais īpašums).',
  },
  'rule-of-law-index': {
    en: 'Map: Fix Planet, drawn from World Bank, Worldwide Governance Indicators, 2026 update (CC BY 4.0).',
    ru: 'Карта: Fix Planet по данным Всемирного банка, «Всемирные показатели качества государственного управления», обновление 2026 года (лицензия Creative Commons с указанием авторства 4.0).',
    pl: 'Mapa: Fix Planet na podstawie danych Banku Światowego, „Światowe wskaźniki jakości rządzenia”, aktualizacja 2026 (licencja Creative Commons – uznanie autorstwa 4.0).',
    lv: 'Karte: Fix Planet pēc Pasaules Bankas datiem, “Pasaules pārvaldības rādītāji”, 2026. gada atjauninājums (licence Creative Commons Atsauce 4.0).',
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
    en: 'Map: Fix Planet from the European Commission GHSL GHS-SMOD R2023A, 2020 epoch. Red is an urban centre (class 30), orange is a town or semi-dense cluster (classes 21 to 23), olive is rural (classes 11 to 13), counted on a 0.02° grid. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным GHSL GHS-SMOD R2023A Еврокомиссии, эпоха 2020 года. Красный — городской центр (класс 30), оранжевый — посёлок или полуплотное скопление (классы 21–23), оливковый — сельские ячейки (классы 11–13), на сетке 0,02°. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie GHSL GHS-SMOD R2023A Komisji Europejskiej, epoka 2020. Czerwień to ośrodek miejski (klasa 30), pomarańcz to miasteczko lub skupisko półgęste (klasy 21–23), oliwkowy to komórki wiejskie (klasy 11–13), na siatce 0,02°. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Eiropas Komisijas GHSL GHS-SMOD R2023A, 2020. gada epoha. Sarkans ir pilsētas centrs (30. klase), oranžs ir pilsētciemats vai pusblīvs sakopojums (21.–23. klase), olīvzaļš ir lauku šūnas (11.–13. klase), 0,02° tīklā. CC BY 4.0. Robežas: Natural Earth.',
  },
  'built-up-surface': {
    en: 'Map: Fix Planet from the European Commission GHSL GHS-BUILT-S R2023A, 2020 epoch. The number is the percent of each 0.02° cell that is built-up surface, on a log scale from 0.1. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным GHSL GHS-BUILT-S R2023A Еврокомиссии, эпоха 2020 года. Число — процент застроенной поверхности в каждой ячейке 0,02°, логарифмическая шкала от 0,1. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie GHSL GHS-BUILT-S R2023A Komisji Europejskiej, epoka 2020. Liczba to procent powierzchni zabudowanej w każdej komórce 0,02°, skala logarytmiczna od 0,1. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Eiropas Komisijas GHSL GHS-BUILT-S R2023A, 2020. gada epoha. Skaitlis ir apbūvētās virsmas procents katrā 0,02° šūnā, logaritmiskā skala no 0,1. CC BY 4.0. Robežas: Natural Earth.',
  },
  'remittances-global-flows': {
    en: 'Chart: Fix Planet from World Bank Migration and Development Brief 40, Table 1.1, low- and middle-income countries, 2017–2023. The number is billions of US dollars. CC BY 3.0 IGO. This is an adaptation of an original work by The World Bank. Views and opinions expressed in the adaptation are the sole responsibility of the author or authors of the adaptation and are not endorsed by The World Bank.',
    ru: 'График: Fix Planet по докладу Всемирного банка «Миграция и развитие», выпуск 40, таблица 1.1, страны с низким и средним уровнем дохода, 2017–2023. Число — млрд долл. CC BY 3.0 IGO. Это адаптация оригинальной работы Всемирного банка. Взгляды и мнения, выраженные в адаптации, являются исключительной ответственностью автора адаптации и не одобрены Всемирным банком. Этот перевод создан не Всемирным банком и не должен считаться официальным переводом Всемирного банка. Всемирный банк не несёт ответственности за содержание или ошибки этого перевода.',
    pl: 'Wykres: Fix Planet na podstawie raportu Banku Światowego „Migracja i rozwój”, nr 40, tabela 1.1, kraje o niskim i średnim dochodzie, 2017–2023. Liczba to miliardy USD. CC BY 3.0 IGO. To jest adaptacja oryginalnej pracy Banku Światowego. Poglądy i opinie wyrażone w adaptacji są wyłączną odpowiedzialnością autora lub autorów adaptacji i nie są popierane przez Bank Światowy. To tłumaczenie nie zostało przygotowane przez Bank Światowy i nie powinno być uznawane za oficjalne tłumaczenie Banku Światowego. Bank Światowy nie ponosi odpowiedzialności za treść ani błędy tego tłumaczenia.',
    lv: 'Grafiks: Fix Planet no Pasaules Bankas ziņojuma „Migrācija un attīstība”, 40. izdevuma, 1.1. tabula, zemu un vidēju ienākumu valstis, 2017–2023. Skaitlis ir miljardi USD. CC BY 3.0 IGO. Šī ir Pasaules Bankas oriģināldarba adaptācija. Adaptācijā paustie viedokļi un vērtējumi ir tikai adaptācijas autora vai autoru atbildība, un Pasaules Banka tos neatbalsta. Šo tulkojumu nav sagatavojusi Pasaules Banka, un to nevajag uzskatīt par Pasaules Bankas oficiālu tulkojumu. Pasaules Banka neatbild par šī tulkojuma saturu vai kļūdām.',
  },
  'remittances-top-recipients': {
    en: 'Map: Fix Planet from World Bank World Development Indicators, personal remittances received, current US dollars, 2024. The colour bar is US dollars per year on a logarithmic scale. Land without a 2024 figure stays grey. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по базе Всемирного банка «Показатели мирового развития», личные переводы, полученные, в текущих долларах США, 2024. Числа на шкале — доллары США в год, логарифмическая шкала. Суша без цифры за 2024 год остаётся серой. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie bazy Banku Światowego „Wskaźniki rozwoju świata”, przekazy osobiste otrzymane, w bieżących USD, 2024. Liczby na skali to dolary amerykańskie rocznie, skala logarytmiczna. Ląd bez liczby za 2024 r. zostaje szary. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Pasaules Bankas datubāzes „Pasaules attīstības rādītāji”, saņemtie personīgie pārvedumi, faktiskajās cenās, USD, 2024. Skaitļi skalā ir ASV dolāri gadā, logaritmiskā skala. Zeme bez 2024. gada skaitļa paliek pelēka. CC BY 4.0. Robežas: Natural Earth.',
  },
  'remittances-gdp-share': {
    en: 'Map: Fix Planet from World Bank World Development Indicators, personal remittances received as a percentage of GDP, 2024. The colour bar is percent of GDP on a logarithmic scale. Land without a 2024 figure stays grey. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по базе Всемирного банка «Показатели мирового развития», личные полученные переводы как доля ВВП, 2024. Числа на шкале — проценты ВВП, логарифмическая шкала. Суша без цифры за 2024 год остаётся серой. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie bazy Banku Światowego „Wskaźniki rozwoju świata”, przekazy osobiste otrzymane jako udział w PKB, 2024. Liczby na skali to procent PKB, skala logarytmiczna. Ląd bez liczby za 2024 r. zostaje szary. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Pasaules Bankas datubāzes „Pasaules attīstības rādītāji”, saņemtie personīgie pārvedumi kā IKP daļa, 2024. Skaitļi skalā ir procenti no IKP, logaritmiskā skala. Zeme bez 2024. gada skaitļa paliek pelēka. CC BY 4.0. Robežas: Natural Earth.',
  },
  'remittances-sending-cost': {
    en: 'Map: Fix Planet from World Bank World Development Indicators, average cost of sending remittances to a country, as a percentage of the amount, 2023. The colour bar is percent on a logarithmic scale. Land without a positive 2023 figure stays grey. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по базе Всемирного банка «Показатели мирового развития», средняя стоимость отправки перевода в страну, в процентах от суммы, 2023. Числа на шкале — проценты, логарифмическая шкала. Суша без положительной цифры за 2023 год остаётся серой. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie bazy Banku Światowego „Wskaźniki rozwoju świata”, średni koszt wysłania przekazu do kraju, jako procent kwoty, 2023. Liczby na skali to procent, skala logarytmiczna. Ląd bez dodatniej liczby za 2023 r. zostaje szary. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Pasaules Bankas datubāzes „Pasaules attīstības rādītāji”, vidējās izmaksas, sūtot pārvedumu uz valsti, procentos no summas, 2023. Skaitļi skalā ir procenti, logaritmiskā skala. Zeme bez pozitīva 2023. gada skaitļa paliek pelēka. CC BY 4.0. Robežas: Natural Earth.',
  },
  'surface-temperature-anomalies': {
    en: 'Map: Fix Planet, from the surface temperature analysis of the Goddard Institute for Space Studies of the National Aeronautics and Space Administration (monthly 2 by 2 degree grid, 1200 kilometre smoothing), as distributed by the Physical Sciences Laboratory of the National Oceanic and Atmospheric Administration. The agency\'s data are released under Creative Commons Zero; citation is requested. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по анализу температуры поверхности Института космических исследований имени Годдарда Национального управления по аэронавтике и исследованию космического пространства США (месячная сетка 2 на 2 градуса, сглаживание 1200 километров) в версии Лаборатории физических наук Национального управления океанических и атмосферных исследований США. Данные космического агентства открыты по лицензии Creative Commons Zero, цитирование рекомендуется. Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie analizy temperatury powierzchni Instytutu Badań Kosmicznych imienia Goddarda Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej USA (miesięczna siatka 2 na 2 stopnie, wygładzanie 1200 kilometrów), udostępnionej przez Laboratorium Nauk Fizycznych Narodowej Administracji Oceanicznej i Atmosferycznej USA. Dane agencji kosmicznej są udostępnione na licencji Creative Commons Zero, zalecane jest cytowanie. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Nacionālās aeronautikas un kosmosa administrācijas Godarda Kosmosa pētījumu institūta virsmas temperatūras analīzes (mēneša režģis 2 reiz 2 grādi, izlīdzināšana 1200 kilometru rādiusā), kā to izplata Nacionālās okeānu un atmosfēras pārvaldes Fizikālo zinātņu laboratorija. Kosmosa aģentūras dati ir atvērti ar Creative Commons Zero licenci, ieteicama atsauce. Robežas: Natural Earth, publiskais domēns.',
  },
  'land-precipitation': {
    en: 'Map: Fix Planet, from the monthly precipitation analysis of the Global Precipitation Climatology Centre at the Deutscher Wetterdienst (German Weather Service), 0.5 degree grid, 2024. Product users are kindly asked to refer to the Global Precipitation Climatology Centre and to quote the citation (https://doi.org/10.5676/DWD_GPCC/MONTHLY_V2025_050). Terms of use: https://www.dwd.de/EN/ourservices/gpcc/editorial/userterms_gpcc.html. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по месячному анализу осадков Глобального центра климатологии осадков при Немецкой службе погоды (Deutscher Wetterdienst), сетка 0,5 градуса, 2024 год. Пользователей продукта просят ссылаться на Глобальный центр климатологии осадков и приводить цитату (https://doi.org/10.5676/DWD_GPCC/MONTHLY_V2025_050). Условия использования: https://www.dwd.de/EN/ourservices/gpcc/editorial/userterms_gpcc.html. Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie miesięcznej analizy opadów Światowego Centrum Klimatologii Opadów przy Niemieckiej Służbie Pogodowej (Deutscher Wetterdienst), siatka 0,5 stopnia, rok 2024. Użytkowników produktu uprzejmie prosi się o odniesienie do Światowego Centrum Klimatologii Opadów i o podanie cytowania (https://doi.org/10.5676/DWD_GPCC/MONTHLY_V2025_050). Warunki użytkowania: https://www.dwd.de/EN/ourservices/gpcc/editorial/userterms_gpcc.html. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Globālā nokrišņu klimatoloģijas centra mēneša nokrišņu analīzes Vācijas laikapstākļu dienestā (Deutscher Wetterdienst), 0,5 grāda režģis, 2024. gads. Produkta lietotājiem laipni lūdz atsaukties uz Globālo nokrišņu klimatoloģijas centru un citēt avotu (https://doi.org/10.5676/DWD_GPCC/MONTHLY_V2025_050). Lietošanas noteikumi: https://www.dwd.de/EN/ourservices/gpcc/editorial/userterms_gpcc.html. Robežas: Natural Earth, publiskais domēns.',
  },
  'drought-index': {
    en: 'Map: Fix Planet, from the global 0.5 degree drought index database of the Spanish National Research Council, 12-month scale, December 2024. The database is licensed under the Open Database Licence 1.0 and its contents under the Database Contents Licence. Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по глобальной базе данных индекса засухи с сеткой 0,5 градуса Высшего совета по научным исследованиям Испании, шкала 12 месяцев, декабрь 2024 года. База данных распространяется по Открытой лицензии на базы данных 1.0, а её содержимое по Лицензии на содержимое баз данных. Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie globalnej bazy danych wskaźnika suszy o siatce 0,5 stopnia Hiszpańskiej Narodowej Rady Badań Naukowych, skala 12 miesięcy, grudzień 2024 roku. Baza danych jest udostępniona na Otwartej licencji baz danych 1.0, a jej zawartość na Licencji zawartości baz danych. Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Spānijas Nacionālās pētniecības padomes globālās sausuma indeksa datu bāzes ar 0,5 grāda režģi, 12 mēnešu skala, 2024. gada decembris. Datu bāze licencēta ar Atvērto datu bāzu licenci 1.0, bet tās saturs ar Datu bāzu satura licenci. Robežas: Natural Earth, publiskais domēns.',
  },
  'outdoor-heat-stress': {
    en: 'Map: Fix Planet, from the map of the Copernicus Climate Change Service and the European Centre for Medium-Range Weather Forecasts in the Global Climate Highlights 2025 report, based on the Universal Thermal Climate Index from the reanalysis of the European Centre for Medium-Range Weather Forecasts. Contains modified Copernicus Climate Change Service information 2026. Neither the European Commission nor the European Centre for Medium-Range Weather Forecasts is responsible for any use of the information. Licence: Copernicus.',
    ru: 'Карта: Fix Planet по карте Службы по изменению климата «Коперник» и Европейского центра среднесрочных прогнозов погоды из доклада «Основные климатические показатели мира за 2025 год», основанной на универсальном индексе теплового климата по реанализу Европейского центра среднесрочных прогнозов погоды. Содержит изменённую информацию Службы по изменению климата «Коперник» за 2026 год. Ни Европейская комиссия, ни Европейский центр среднесрочных прогнозов погоды не несут ответственности за какое-либо использование этой информации. Лицензия: «Коперник».',
    pl: 'Mapa: Fix Planet na podstawie mapy Usługi Copernicus ds. zmian klimatu i Europejskiego Centrum Prognoz Średnioterminowych z raportu „Główne wskaźniki klimatu świata 2025”, opartej na Uniwersalnym Wskaźniku Klimatu Termicznego z reanalizy Europejskiego Centrum Prognoz Średnioterminowych. Zawiera zmodyfikowane informacje Usługi Copernicus ds. zmian klimatu za rok 2026. Ani Komisja Europejska, ani Europejskie Centrum Prognoz Średnioterminowych nie ponoszą odpowiedzialności za jakiekolwiek wykorzystanie tych informacji. Licencja: Copernicus.',
    lv: 'Karte: Fix Planet pēc Copernicus klimata pārmaiņu dienesta un Eiropas Vidēja termiņa laika prognožu centra kartes ziņojumā „Pasaules klimata galvenie rādītāji 2025. gadā”, kas balstīta uz Universālo termiskā klimata indeksu no Eiropas Vidēja termiņa laika prognožu centra reanalīzes. Satur modificētu Copernicus klimata pārmaiņu dienesta informāciju 2026. gadam. Ne Eiropas Komisija, ne Eiropas Vidēja termiņa laika prognožu centrs nav atbildīgi par jebkādu šīs informācijas izmantošanu. Licence: Copernicus.',
  },
  'land-snow-cover': {
    en: 'Map: Fix Planet, from the monthly snow cover product of the Terra satellite (Moderate Resolution Imaging Spectroradiometer) of the National Snow and Ice Data Center, March 2026. Data provided from a National Aeronautics and Space Administration led mission are licensed as Creative Commons Zero (CC0) (https://creativecommons.org/publicdomain/zero/1.0/). Citation is required: Hall, D. K. and Riggs, G. A. (2021) (https://doi.org/10.5067/MODIS/MOD10CM.061). Boundaries: Natural Earth, public domain.',
    ru: 'Карта: Fix Planet по месячному продукту о снежном покрове со спутника Terra (спектрорадиометр среднего разрешения) Национального центра данных по снегу и льду, март 2026 года. Данные миссии под руководством Национального управления по аэронавтике и исследованию космического пространства США лицензированы как Creative Commons Zero (CC0) (https://creativecommons.org/publicdomain/zero/1.0/). Цитирование обязательно: Hall, D. K. and Riggs, G. A. (2021) (https://doi.org/10.5067/MODIS/MOD10CM.061). Границы: Natural Earth, общественное достояние.',
    pl: 'Mapa: Fix Planet na podstawie miesięcznego produktu o pokrywie śnieżnej z satelity Terra (spektroradiometr o średniej rozdzielczości) Narodowego Centrum Danych o Śniegu i Lodzie, marzec 2026 roku. Dane misji prowadzonej przez Narodową Agencję Aeronautyki i Przestrzeni Kosmicznej USA są licencjonowane jako Creative Commons Zero (CC0) (https://creativecommons.org/publicdomain/zero/1.0/). Cytowanie jest wymagane: Hall, D. K. and Riggs, G. A. (2021) (https://doi.org/10.5067/MODIS/MOD10CM.061). Granice: Natural Earth, domena publiczna.',
    lv: 'Karte: Fix Planet pēc Terra pavadoņa ikmēneša sniega segas produkta (vidējas izšķirtspējas spektroradiometrs) no Nacionālā sniega un ledus datu centra, 2026. gada marts. Nacionālās aeronautikas un kosmosa administrācijas vadītas misijas dati ir licencēti kā Creative Commons Zero (CC0) (https://creativecommons.org/publicdomain/zero/1.0/). Atsauce ir obligāta: Hall, D. K. and Riggs, G. A. (2021) (https://doi.org/10.5067/MODIS/MOD10CM.061). Robežas: Natural Earth, publiskais domēns.',
  },
};

export function realMapCredit(locale: Locale, slug: string): string | undefined {
  return credits[slug]?.[locale] ?? credits[slug]?.en;
}

export function hasRealMap(slug: string): boolean {
  return slug in credits;
}
