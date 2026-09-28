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
  'planted-forests': {
    en: 'Map: Fix Planet from Lesiv and co-authors, global forest management, 2015, 100 m classes. Colour is the share of each 0.02° cell classed as planted forest (rotation longer than 15 years) or short-rotation timber plantation. Oil palm is a separate class and is not included. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по данным Lesiv и соавторов о лесоуправлении, 2015, классы 100 м. Цвет — доля ячейки 0,02°, отнесённая к посаженному лесу (оборот дольше 15 лет) или к короткоцикловой древесной плантации. Масличная пальма — отдельный класс и сюда не входит. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie danych Lesiv i współautorów o gospodarce leśnej, 2015, klasy 100 m. Kolor to udział komórki 0,02° zaliczonej do lasu sadzonego (okres rotacji dłuższy niż 15 lat) albo do krótkocyklicznej plantacji drzewnej. Palma olejowa to osobna klasa i nie wchodzi do tej warstwy. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Lesiv un līdzautoru meža apsaimniekošanas datiem, 2015, 100 m klases. Krāsa ir 0,02° šūnas daļa, kas klasificēta kā stādīts mežs (rotācijas periods ilgāks par 15 gadiem) vai īscikla koksnes plantācija. Eļļas palma ir atsevišķa klase un šeit nav iekļauta. CC BY 4.0. Robežas: Natural Earth.',
  },
  'forest-carbon-stock': {
    en: 'Map: Fix Planet from FAO Global Forest Resources Assessment 2025 country tables. The number is living-biomass carbon in 2025: aboveground plus belowground, in million tonnes. Soil, litter and dead wood are not in this plate. Countries missing either pool stay grey. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по страновым таблицам FAO Global Forest Resources Assessment 2025. Число — углерод живой биомассы в 2025 году: надземный плюс подземный, в миллионах тонн. Почва, подстилка и мёртвая древесина на эту плиту не нанесены. Страны без одного из двух пулов остаются серыми. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie tabel krajowych FAO Global Forest Resources Assessment 2025. Liczba to węgiel żywej biomasy w 2025 roku: nadziemny plus podziemny, w milionach ton. Gleba, ściółka i martwe drewno nie są na tej płycie. Kraje bez jednej z dwóch pul zostają szare. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no FAO Global Forest Resources Assessment 2025 valstu tabulām. Skaitlis ir dzīvās biomasas ogleklis 2025. gadā: virszemes plus pazemes, miljonos tonnu. Augsne, nobiras un mirusī koksne šajā platē nav. Valstis, kurām trūkst viena no diviem baseiniem, paliek pelēkas. Robežas: Natural Earth.',
  },
  'tree-cover': {
    en: 'Map: Fix Planet from ESA WorldCover 10 m 2021 v200. Colour is the share of each 0.02° cell in class 10 (tree cover). A 10 m pixel is that land-cover class, not a canopy-density percent. Mangroves are class 95 and are not included. CC BY 4.0. Contains modified Copernicus Sentinel data (2021). Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по ESA WorldCover 10 м, 2021, версия v200. Цвет — доля ячейки 0,02° в классе 10 (древесный покров). Пиксель 10 м — этот класс земного покрова, а не процент сомкнутости полога. Мангры — класс 95 и сюда не входят. CC BY 4.0. Содержит изменённые данные Copernicus Sentinel (2021). Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie ESA WorldCover 10 m, 2021, wersja v200. Kolor to udział komórki 0,02° w klasie 10 (pokrycie drzewami). Piksel 10 m to ta klasa pokrycia terenu, a nie procent zwarcia koron. Namorzyny to klasa 95 i nie wchodzą do tej warstwy. CC BY 4.0. Zawiera zmodyfikowane dane Copernicus Sentinel (2021). Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no ESA WorldCover 10 m, 2021, versija v200. Krāsa ir 0,02° šūnas daļa 10. klasē (koku segums). 10 m pikselis ir šī zemes seguma klase, nevis vainagu blīvuma procents. Mangrovju meži ir 95. klase un šeit nav iekļauti. CC BY 4.0. Satur pārveidotus Copernicus Sentinel (2021) datus. Robežas: Natural Earth.',
  },
  peatlands: {
    en: 'Map: Fix Planet from PEATMAP (Xu and co-authors, 2018). Colour marks a 0.02° cell that a mapped peat polygon touches. CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по PEATMAP (Xu и соавторы, 2018). Цвет отмечает ячейку 0,02°, которой касается полигон торфа. CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie PEATMAP (Xu i współautorzy, 2018). Kolor oznacza komórkę 0,02°, której dotyka poligon torfu. CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no PEATMAP (Xu un līdzautori, 2018). Krāsa atzīmē 0,02° šūnu, kurai pieskaras kūdras poligons. CC BY 4.0. Robežas: Natural Earth.',
  },
  'prison-population-rate': {
    en: 'Chart: Our World in Data, CC BY 4.0. Data: Institute for Crime & Justice Policy Research, World Prison Brief (2026); population from various sources (2024), with minor processing by Our World in Data. The map was cropped from the Our World in Data chart.',
    ru: 'График: Our World in Data («Наш мир в данных»), лицензия CC BY 4.0. Данные: Институт исследований преступности и политики в сфере правосудия, «Всемирная сводка о тюрьмах» (2026); численность населения по различным источникам (2024), с небольшой обработкой Our World in Data. Карта обрезана из графика Our World in Data.',
    pl: 'Wykres: Our World in Data („Nasz świat w danych”), licencja CC BY 4.0. Dane: Instytut Badań nad Przestępczością i Polityką Wymiaru Sprawiedliwości, „Światowy przegląd więziennictwa” (2026); ludność według różnych źródeł (2024), z niewielkim opracowaniem Our World in Data. Mapa została przycięta z wykresu Our World in Data.',
    lv: 'Grafiks: Our World in Data (“Mūsu pasaule datos”), licence CC BY 4.0. Dati: Noziedzības un tieslietu politikas pētniecības institūts, “Pasaules cietumu pārskats” (2026); iedzīvotāju skaits no dažādiem avotiem (2024), ar nelielu Our World in Data apstrādi. Karte ir izgriezta no Our World in Data grafika.',
  },
  'drug-trafficking-flows': {
    en: 'Chart: Fix Planet, drawn from European Union Drugs Agency (EUDA) data, European Drug Report 2026, table EDR26-Cocaine-6. Reuse permitted with acknowledgement (compatible with CC BY 4.0).',
    ru: 'График: Fix Planet по данным Агентства Европейского союза по наркотикам (EUDA), «Европейский доклад о наркотиках» 2026 года, таблица EDR26-Cocaine-6. Повторное использование разрешено с указанием источника (совместимо с CC BY 4.0).',
    pl: 'Wykres: Fix Planet na podstawie danych Agencji Unii Europejskiej ds. Narkotyków (EUDA), „Europejski raport narkotykowy” 2026, tabela EDR26-Cocaine-6. Ponowne wykorzystanie dozwolone z podaniem źródła (zgodne z CC BY 4.0).',
    lv: 'Grafiks: Fix Planet pēc Eiropas Savienības Narkotiku aģentūras (EUDA) datiem, “Eiropas narkotiku ziņojums” 2026, tabula EDR26-Cocaine-6. Atkārtota izmantošana atļauta, norādot avotu (saderīga ar CC BY 4.0).',
  },
  'modern-slavery': {
    en: 'Chart: Figure 1 of Global Estimates of Modern Slavery: Forced Labour and Forced Marriage (2022), © ILO, Walk Free and IOM, CC BY 4.0. This is an adaptation of an original work by the ILO, Walk Free and IOM. Responsibility for the views and opinions expressed in the adaptation rests solely with the author or authors of the adaptation and are not endorsed by the ILO, Walk Free or IOM.',
    ru: 'График: рисунок 1 из доклада «Глобальные оценки современного рабства: принудительный труд и принудительные браки» (Global Estimates of Modern Slavery, 2022), © МОТ, Walk Free и МОМ, лицензия CC BY 4.0. This is an adaptation of an original work by the ILO, Walk Free and IOM. Responsibility for the views and opinions expressed in the adaptation rests solely with the author or authors of the adaptation and are not endorsed by the ILO, Walk Free or IOM. This translation was not created by the ILO, Walk Free or IOM and should not be considered an official ILO, Walk Free or IOM translation. The ILO, Walk Free and IOM are not responsible for the content or accuracy of this translation.',
    pl: 'Wykres: rysunek 1 z raportu „Globalne szacunki współczesnego niewolnictwa: praca przymusowa i małżeństwa przymusowe” (Global Estimates of Modern Slavery, 2022), © MOP, Walk Free i IOM, licencja CC BY 4.0. This is an adaptation of an original work by the ILO, Walk Free and IOM. Responsibility for the views and opinions expressed in the adaptation rests solely with the author or authors of the adaptation and are not endorsed by the ILO, Walk Free or IOM. This translation was not created by the ILO, Walk Free or IOM and should not be considered an official ILO, Walk Free or IOM translation. The ILO, Walk Free and IOM are not responsible for the content or accuracy of this translation.',
    lv: 'Grafiks: 1. attēls no ziņojuma “Mūsdienu verdzības globālās aplēses: piespiedu darbs un piespiedu laulības” (Global Estimates of Modern Slavery, 2022), © SDO, Walk Free un IOM, licence CC BY 4.0. This is an adaptation of an original work by the ILO, Walk Free and IOM. Responsibility for the views and opinions expressed in the adaptation rests solely with the author or authors of the adaptation and are not endorsed by the ILO, Walk Free or IOM. This translation was not created by the ILO, Walk Free or IOM and should not be considered an official ILO, Walk Free or IOM translation. The ILO, Walk Free and IOM are not responsible for the content or accuracy of this translation.',
  },
  'basel-aml-index': {
    en: 'Map: Fix Planet, drawn from the US Department of State, International Narcotics Control Strategy Report 2025, Volume 2: Money Laundering (public domain).',
    ru: 'Карта: Fix Planet по данным Государственного департамента США, «Доклад о международной стратегии контроля над наркотиками» 2025 года (International Narcotics Control Strategy Report), том 2: отмывание денег (общественное достояние).',
    pl: 'Mapa: Fix Planet na podstawie danych Departamentu Stanu USA, „Raport o międzynarodowej strategii kontroli narkotyków” 2025 (International Narcotics Control Strategy Report), tom 2: pranie pieniędzy (domena publiczna).',
    lv: 'Karte: Fix Planet pēc ASV Valsts departamenta datiem, “Starptautiskās narkotiku kontroles stratēģijas ziņojums” 2025 (International Narcotics Control Strategy Report), 2. sējums: naudas atmazgāšana (publiskais īpašums).',
  },
  'rule-of-law-index': {
    en: 'Map: Fix Planet, drawn from World Bank, Worldwide Governance Indicators, 2026 update (CC BY 4.0).',
    ru: 'Карта: Fix Planet по данным Всемирного банка, «Всемирные показатели качества государственного управления» (Worldwide Governance Indicators), обновление 2026 года (CC BY 4.0).',
    pl: 'Mapa: Fix Planet na podstawie danych Banku Światowego, „Światowe wskaźniki jakości rządzenia” (Worldwide Governance Indicators), aktualizacja 2026 (CC BY 4.0).',
    lv: 'Karte: Fix Planet pēc Pasaules Bankas datiem, “Pasaules pārvaldības rādītāji” (Worldwide Governance Indicators), 2026. gada atjauninājums (CC BY 4.0).',
  },
  'intact-forest-landscapes': {
    en: 'Map: Fix Planet from Intact Forest Landscapes, 2020 extent (IFL Mapping Team). CC BY 4.0. Boundaries: Natural Earth.',
    ru: 'Карта: Fix Planet по Intact Forest Landscapes, распространение 2020 года (IFL Mapping Team). CC BY 4.0. Границы: Natural Earth.',
    pl: 'Mapa: Fix Planet na podstawie Intact Forest Landscapes, zasięg 2020 (IFL Mapping Team). CC BY 4.0. Granice: Natural Earth.',
    lv: 'Karte: Fix Planet no Intact Forest Landscapes, 2020. gada izplatība (IFL Mapping Team). CC BY 4.0. Robežas: Natural Earth.',
  },
};

export function realMapCredit(locale: Locale, slug: string): string | undefined {
  return credits[slug]?.[locale] ?? credits[slug]?.en;
}

export function hasRealMap(slug: string): boolean {
  return slug in credits;
}
