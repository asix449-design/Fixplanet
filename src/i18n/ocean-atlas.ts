import {
  oceanAtlasMeta,
  type OceanAtlasMeta,
  type OceanAtlasSlug,
} from '../data/ocean-atlas';
import type { Locale } from './config';

export type OceanAtlasCopy = {
  title: string;
  meta: string;
  blurb: string;
  what?: string;
  why?: string;
  /** Reader heading for `why`. Falls back to the shared atlas label. */
  whyHeading?: string;
  howToRead?: string;
  detailShort?: string;
};

export type OceanAtlasEntry = OceanAtlasMeta & OceanAtlasCopy;

/** English section headings from the pack. Other locales use detail short only. */
export const oceanAtlasSectionLabels = {
  what: 'What it is',
  why: 'Why it is on this shelf',
  how: 'How to read it',
} as const;

/** Optional hub lede (pack section E). EN and RU are not given there. */
export const oceanAtlasHubLede: Partial<Record<Locale, string>> = {
  pl: 'Prądy, zasolenie, temperatura powierzchni, zanieczyszczenia — oraz chemia pH, tlen otwartego oceanu, lód morski i poziom morza. Na każdej karcie wydawca i to, co warstwa mierzy (i czego nie).',
  lv: 'Straumes, sāļums, virsmas temperatūra, piesārņojums — kā arī pH ķīmija, atklātā okeāna skābeklis, jūras ledus un jūras līmenis. Katrā kartītē izdevējs un tas, ko slānis mēra (un ko ne).',
};

const en: Record<OceanAtlasSlug, OceanAtlasCopy> = {
  'ocean-acidification': {
    title: 'Ocean acidification',
    meta: 'OceanSODA-ETHZ · surface pH change · 1985–1989 to 2020–2024',
    blurb:
      'How much surface-ocean pH changed from the late 1980s to the early 2020s. A carbonate-chemistry trend, not temperature and not a pollution map.',
    what: 'The map is the change in OceanSODA-ETHZ v2025 surface pH on the total scale, from the 1985–1989 mean to the 2020–2024 mean, published through NOAA NCEI OCADS. A negative number is acidification. The longer figure used on this site, about 0.1 pH units of open-ocean decline since about 1750, still comes from IPCC AR6 and the NOAA PMEL Carbon Program. The NOAA Ocean Acidification Program describes the observing network behind that longer record.',
    why: 'Currents, salinity, surface temperature, and pollution answer other questions. This card is the recent change in surface pH. It is not a sea-surface temperature map and not a map of plastic, oil, or coastal hypoxia.',
    howToRead:
      'The colour is the change in pH, not the pH itself. The open ocean is still alkaline; the shift matters for calcifying organisms and for carbonate minerals. Coastal water can add local nutrient and upwelling signals on top of the global uptake of carbon dioxide. NOAA’s Ocean Acidification Program and the PMEL Carbon Program explain the observations behind the long-term figure.',
  },
  'dissolved-oxygen': {
    title: 'Dissolved oxygen',
    meta: 'NOAA WOA23 · minimum dissolved oxygen · 100–1000 m',
    blurb:
      'The lowest dissolved oxygen between 100 and 1000 metres in the World Ocean Atlas 2023 climatology. Open-ocean oxygen, not the coastal dead-zone pins on Pollution.',
    what: 'The map is the minimum of the World Ocean Atlas 2023 dissolved-oxygen field between 100 m and 1000 m, in micromoles per kilogram. WOA23, from NOAA NCEI, is an objectively analysed climatology for 1965–2022. IPCC SROCC reports that open-ocean oxygen in the upper 1000 m fell about 0.5–3.3% over 1970–2010, and that oxygen-minimum zones expanded about 3–8%.',
    why: 'Pollution’s “Dead zones” figure is a coastal hypoxia compilation (after Diaz / Breitburg context). Chlorophyll stays on Pollution as a biomass proxy. This card answers a different question: where is the open-ocean oxygen field low, and what does the WOA climatology show? Do not merge the two.',
    howToRead:
      'Darker colour is a lower minimum in that depth range. The field is a long-term mean, not a single cruise and not a forecast. Oxygen-minimum zones are mid-depth layers in the open ocean. Coastal dead zones, often driven by nutrients, sit on the Pollution page. The WOA23 oxygen documentation describes the climatology. IPCC SROCC is the assessment of the multi-decadal decline.',
  },
  'sea-ice-extent': {
    title: 'Sea ice extent',
    meta: 'NSIDC G02135 · concentration · Arctic March 2026 · Antarctic September 2025',
    blurb:
      'Sea-ice concentration for a recent Arctic March and Antarctic September, side by side. Frozen ocean cover, not surface temperature and not land ice.',
    what: 'The map is monthly sea-ice concentration from the NSIDC Sea Ice Index, dataset G02135 version 4. The left panel is the Arctic in March 2026. The right panel is the Antarctic in September 2025. The number is percent concentration. Sea Ice Today remains the public discussion of extent, which is the ocean area with at least 15 percent ice, set against a 1981–2010 median.',
    why: 'Surface temperature is a different measurement. Sea ice is frozen seawater. It reflects sunlight and follows its own calendar: the Arctic is near its maximum in March and its minimum in September, and the Antarctic is roughly the other way around. It is not glacier or ice-sheet mass on land.',
    howToRead:
      'Lighter colour is higher concentration. Dark blue is open water or very little ice. Land is the NSIDC mask. Extent, the area above 15 percent, is a separate summary in the Sea Ice Index time series. Read the Arctic and Antarctic panels as two seasons, not as one global average.',
  },
  'sea-level': {
    title: 'Sea level',
    meta: 'NOAA LSA · regional trend · millimetres per year',
    blurb:
      'Where the ocean surface is rising faster or more slowly, in millimetres per year. The global average cited on this site comes from the NASA Sea Level Change Portal.',
    what: 'The map is the NOAA Laboratory for Satellite Altimetry regional sea-level trend for 1992.96–2025.10, from the TOPEX, Jason, and Sentinel-6 reference series. The colour is millimetres per year. The global mean used on this site, about 3.7 millimetres per year in 2006–2018, is the IPCC AR6 figure. The NASA Sea Level Change Portal publishes that global mean as a time series, with the Sea Level Explorer and the AR6 projection tool.',
    why: 'One global number hides the places where the surface is rising faster or falling. Sea level is separate from surface temperature, salinity, and pollution.',
    howToRead:
      'Red is a faster rise. Blue is a slower rise or a fall. Currents, winds, and the vertical motion of the land make regional rates differ from the global mean. The NASA time series is the global average. This map is the regional rate over the altimeter record, not a single tide-gauge day and not a map of a future coastline.',
  },
  'marine-heatwaves': {
    title: 'Marine heatwaves',
    meta: 'NOAA CRW · 5 km sea-surface temperature anomaly',
    blurb:
      'Where the sea surface was warmer or cooler than usual on 25 September 2026. A temperature anomaly from NOAA Coral Reef Watch, not a classified heatwave category.',
    what: 'The map is the NOAA Coral Reef Watch daily 5 km sea-surface temperature anomaly for 25 September 2026, in degrees Celsius. A marine heatwave is a longer event: a region that stays much warmer than its seasonal norm. Coral Reef Watch also publishes heat-stress products, and the NOAA Physical Sciences Laboratory explains category definitions. Those category maps are not this plate. marineheatwaves.org keeps a separate tracker.',
    whyHeading: 'Why it matters',
    why: 'Average sea-surface temperature describes the usual state of the ocean. This map shows where that day was unusually warm or cool. Sustained warmth is what stresses coral reefs. A single anomaly day is the field those heatwave definitions start from.',
    howToRead:
      'The colour is degrees Celsius above or below the usual temperature for that place. It is one day, not a count of heatwave days. It is also different from ocean heat content, which measures heat stored through the depth of the water. The Physical Sciences Laboratory and marineheatwaves.org pages define the event.',
  },
  'ocean-heat-content': {
    title: 'Ocean heat content',
    meta: 'NOAA NCEI · 0–700 m anomaly · 2025',
    blurb:
      'Heat stored in the upper 700 metres in 2025, as an anomaly in each 1° cell, from NOAA NCEI.',
    what: 'The map is the NOAA NCEI yearly ocean heat content anomaly for 0–700 m in 2025. The number is 10¹⁸ joules in each 1° cell, calculated from temperature profiles. NCEI also publishes a 0–2000 m series. NASA and Climate.gov explain the global total over time. Mercator Ocean offers a European view of the same idea.',
    whyHeading: 'Why it matters',
    why: 'About 90 percent of the excess heat in the climate system is stored in the ocean (IPCC AR6). Sea-surface temperature describes only the top. This map shows where the upper 700 metres held more or less heat than the long-term reference in 2025.',
    howToRead:
      'The colour is the 2025 anomaly in the upper 700 metres. It is not sea-surface temperature and not the 0–2000 m layer. Deeper layers have been measured well for a shorter time, with the strongest coverage since the Argo float era. NASA and Climate.gov show the global total as a time series.',
  },
  'coral-reefs': {
    title: 'Coral reefs',
    meta: 'GCRMN 2020 · NOAA Coral Reef Watch · hard-coral status',
    blurb:
      'Where hard coral cover stands today and how heat stress bleaches reefs, based on global monitoring and satellite observations.',
    what: 'The Global Coral Reef Monitoring Network (GCRMN) report Status of Coral Reefs of the World: 2020 is the main quantitative global report on reef status. About 14 percent of the world’s hard coral was lost from coral reefs between 2009 and 2018 (GCRMN Status of Coral Reefs of the World: 2020). The report is available from GCRMN, the International Coral Reef Initiative (ICRI), and UNEP. For heat stress and bleaching, NOAA’s Coral Reef Watch provides 5 km satellite products, and NOAA’s Ocean Service explains how bleaching works.',
    whyHeading: 'Why it matters',
    why: 'The GCRMN report shows how reefs are doing worldwide, based on measurements. Coral restoration is a management practice; the status report tracks the condition of the reefs themselves.',
    howToRead:
      'GCRMN combines in-water surveys of hard-coral and algae cover across reef regions. Coral Reef Watch uses satellites to track heat stress, which can come before bleaching. Long-term status trends and near-real-time heat stress are related but different, so it helps to look at both. Announcements of global bleaching events, such as NOAA’s, add useful context, while the GCRMN data remain the reference for reef status.',
  },
  'marine-fisheries': {
    title: 'Marine fisheries',
    meta: 'FAO SOFIA · marine stock status · capture fisheries',
    blurb:
      'How assessed marine fish stocks are doing worldwide, according to FAO’s global stock-status figures.',
    what: 'FAO’s State of World Fisheries and Aquaculture (SOFIA) is the flagship global assessment of fisheries and aquaculture. 35.5 percent of assessed marine fishery stocks were classified as overfished (FAO Review of the State of World Marine Fishery Resources 2025; status year 2021). The reports are published on FAO’s website and in its Open Knowledge repository. FAO’s FishStat database adds detailed catch statistics.',
    whyHeading: 'Why it matters',
    why: 'The overfished share is a simple global measure of how fish stocks are doing. Selective fishing gear, marine protected areas, and similar measures are ways to respond; FAO’s figures track the state of the stocks themselves.',
    howToRead:
      'FAO’s stock-status shares cover assessed marine stocks only. SOFIA defines the categories and the year each figure refers to, so check the current report for the latest figures. Catch statistics from FishStat are useful context, but they measure something different from the overfished share.',
  },
};

const ru: Record<OceanAtlasSlug, OceanAtlasCopy> = {
  'ocean-acidification': {
    title: 'Закисление океана',
    meta: 'OceanSODA-ETHZ · изменение поверхностного pH · 1985–1989 к 2020–2024',
    blurb:
      'Насколько изменился pH поверхности океана от конца 1980-х к началу 2020-х. Тренд карбонатной химии, не температура и не карта загрязнения.',
    detailShort:
      'Карта — изменение поверхностного pH OceanSODA-ETHZ v2025 от среднего за 1985–1989 к среднему за 2020–2024. Отрицательное значение — закисление. Оценка около 0,1 единицы pH с примерно 1750 года по-прежнему из IPCC AR6 и NOAA PMEL. Сеть наблюдений описывает NOAA Ocean Acidification Program.',
  },
  'dissolved-oxygen': {
    title: 'Растворённый кислород',
    meta: 'NOAA WOA23 · минимум растворённого кислорода · 100–1000 м',
    blurb:
      'Самый низкий растворённый кислород между 100 и 1000 метрами в климатологии World Ocean Atlas 2023. Открытый океан, не прибрежные «мёртвые зоны».',
    detailShort:
      'Карта — минимум растворённого кислорода World Ocean Atlas 2023 между 100 и 1000 м, в микромолях на килограмм, климатология 1965–2022. IPCC SROCC оценивает потерю кислорода в верхних 1000 м и расширение зон минимума. Прибрежная гипоксия остаётся на странице загрязнения.',
  },
  'sea-ice-extent': {
    title: 'Площадь морского льда',
    meta: 'NSIDC G02135 · концентрация · Арктика, март 2026 · Антарктика, сентябрь 2025',
    blurb:
      'Концентрация морского льда: недавний март в Арктике и сентябрь в Антарктике, рядом. Ледяной покров океана, не температура поверхности и не материковый лёд.',
    detailShort:
      'Карта — месячная концентрация NSIDC Sea Ice Index (G02135 v4). Слева Арктика в марте 2026, справа Антарктика в сентябре 2025. Число — проценты. Площадь льда при пороге 15 процентов и сравнение с медианой 1981–2010 остаются в обзорах Sea Ice Today.',
  },
  'sea-level': {
    title: 'Уровень моря',
    meta: 'NOAA LSA · региональный тренд · миллиметры в год',
    blurb:
      'Где поверхность океана поднимается быстрее или медленнее, в миллиметрах в год. Среднее по всему океану, которое приводит этот сайт, берётся с портала NASA Sea Level Change.',
    detailShort:
      'Карта — региональный тренд NOAA Laboratory for Satellite Altimetry за 1992,96–2025,10, в миллиметрах в год. Средняя глобальная скорость около 3,7 мм/год за 2006–2018 — оценка IPCC AR6; ряд этого среднего публикует портал NASA Sea Level Change. Это не один день мареографа и не температура поверхности.',
  },
  'marine-heatwaves': {
    title: 'Морские волны тепла',
    meta: 'NOAA CRW · аномалия температуры поверхности · 5 км',
    blurb:
      'Где поверхность моря 25 сентября 2026 года была теплее или холоднее обычного. Аномалия NOAA Coral Reef Watch, не карта категорий волн тепла.',
    detailShort:
      'Карта — суточная аномалия температуры поверхности моря NOAA Coral Reef Watch, 5 км, 25 сентября 2026, в градусах Цельсия. Волна тепла — более долгое событие, когда регион остаётся намного теплее сезонной нормы. Категории таких событий объясняет NOAA Physical Sciences Laboratory; на этой плите их нет. Отдельный трекер ведёт marineheatwaves.org.',
  },
  'ocean-heat-content': {
    title: 'Запас тепла океана',
    meta: 'NOAA NCEI · аномалия 0–700 м · 2025',
    blurb: 'Тепло в верхних 700 метрах в 2025 году: аномалия в каждой ячейке 1°, по данным NOAA NCEI.',
    detailShort:
      'Карта — годовая аномалия запаса тепла NOAA NCEI в слое 0–700 м за 2025 год. Число — 10¹⁸ джоулей в ячейке 1°. NCEI публикует и ряд 0–2000 м. NASA и Climate.gov показывают глобальную сумму во времени. Около 90 процентов избыточного тепла климатической системы хранится в океане (IPCC AR6).',
  },
  'coral-reefs': {
    title: 'Коралловые рифы',
    meta: 'GCRMN 2020 · NOAA Coral Reef Watch · статус твёрдых кораллов',
    blurb:
      'Каково сегодня покрытие твёрдых кораллов и как тепловой стресс вызывает обесцвечивание рифов — по данным глобального мониторинга и спутников.',
    detailShort:
      'Доклад Глобальной сети мониторинга коралловых рифов (GCRMN) Status of Coral Reefs of the World: 2020 — главный количественный обзор состояния рифов в мире. Около 14 процентов мирового твёрдого коралла потеряно с рифов в 2009–2018 (GCRMN, Status of Coral Reefs of the World: 2020). Тепловой стресс, который может предшествовать обесцвечиванию, отслеживает со спутников программа NOAA Coral Reef Watch с разрешением 5 км. Восстановление кораллов — это мера управления, а доклад показывает состояние самих рифов.',
  },
  'marine-fisheries': {
    title: 'Морское рыболовство',
    meta: 'FAO SOFIA · статус морских запасов · промысел',
    blurb:
      'Как обстоят дела с оценёнными морскими рыбными запасами — по глобальным данным ФАО о состоянии запасов.',
    detailShort:
      'Доклад ФАО «Состояние мирового рыболовства и аквакультуры» (SOFIA) — главная глобальная оценка рыболовства и аквакультуры. 35,5 процента оценённых морских промысловых запасов классифицированы как переловленные (обзор ФАО 2025; состояние на 2021). Доклады доступны на сайте ФАО и в репозитории Open Knowledge, а база FishStat дополняет их статистикой уловов. Избирательные орудия лова и морские охраняемые районы — это способы решения проблемы, а данные ФАО показывают состояние самих запасов.',
  },
};

const pl: Record<OceanAtlasSlug, OceanAtlasCopy> = {
  'ocean-acidification': {
    title: 'Zakwaszenie oceanu',
    meta: 'OceanSODA-ETHZ · zmiana pH powierzchni · 1985–1989 do 2020–2024',
    blurb:
      'O ile zmieniło się pH powierzchni oceanu od końca lat 80. do początku lat 20. Trend chemii węglanowej, nie temperatura i nie mapa zanieczyszczeń.',
    detailShort:
      'Mapa to zmiana powierzchniowego pH OceanSODA-ETHZ v2025 od średniej z lat 1985–1989 do średniej z lat 2020–2024. Wartość ujemna oznacza zakwaszenie. Szacunek około 0,1 jednostki pH od około 1750 roku nadal pochodzi z IPCC AR6 i NOAA PMEL. Sieć obserwacji opisuje NOAA Ocean Acidification Program.',
  },
  'dissolved-oxygen': {
    title: 'Tlen rozpuszczony',
    meta: 'NOAA WOA23 · minimum tlenu rozpuszczonego · 100–1000 m',
    blurb:
      'Najniższy tlen rozpuszczony między 100 a 1000 metrów w klimatologii World Ocean Atlas 2023. Otwarty ocean, nie przybrzeżne martwe strefy.',
    detailShort:
      'Mapa to minimum tlenu rozpuszczonego World Ocean Atlas 2023 między 100 a 1000 m, w mikromolach na kilogram, klimatologia 1965–2022. IPCC SROCC opisuje ubytek tlenu w górnych 1000 m i ekspansję stref minimum. Hipoksja przybrzeżna zostaje na stronie zanieczyszczeń.',
  },
  'sea-ice-extent': {
    title: 'Zasięg lodu morskiego',
    meta: 'NSIDC G02135 · koncentracja · Arktyka, marzec 2026 · Antarktyka, wrzesień 2025',
    blurb:
      'Koncentracja lodu morskiego: niedawny marzec w Arktyce i wrzesień na Antarktyce, obok siebie. Pokrywa lodowa oceanu, nie temperatura powierzchni i nie lód lądowy.',
    detailShort:
      'Mapa to miesięczna koncentracja NSIDC Sea Ice Index (G02135 v4). Po lewej Arktyka w marcu 2026, po prawej Antarktyka we wrześniu 2025. Liczba to procenty. Zasięg powyżej 15 procent i porównanie z medianą 1981–2010 zostają w omówieniach Sea Ice Today.',
  },
  'sea-level': {
    title: 'Poziom morza',
    meta: 'NOAA LSA · trend regionalny · milimetry na rok',
    blurb:
      'Gdzie powierzchnia oceanu podnosi się szybciej albo wolniej, w milimetrach na rok. Średnia dla całego oceanu, którą podaje ta strona, pochodzi z portalu NASA Sea Level Change.',
    detailShort:
      'Mapa to regionalny trend NOAA Laboratory for Satellite Altimetry z lat 1992,96–2025,10, w milimetrach na rok. Globalne tempo około 3,7 mm/rok za 2006–2018 to ocena IPCC AR6; szereg tej średniej publikuje portal NASA Sea Level Change. To nie jeden dzień mareografu i nie temperatura powierzchni.',
  },
  'marine-heatwaves': {
    title: 'Morskie fale upałów',
    meta: 'NOAA CRW · anomalia temperatury powierzchni · 5 km',
    blurb:
      'Gdzie powierzchnia morza 25 września 2026 była cieplejsza albo chłodniejsza niż zwykle. Anomalia NOAA Coral Reef Watch, nie mapa kategorii fal upałów.',
    detailShort:
      'Mapa to dobowa anomalia temperatury powierzchni morza NOAA Coral Reef Watch, 5 km, 25 września 2026, w stopniach Celsjusza. Fala upałów to dłuższe zdarzenie, gdy region pozostaje znacznie cieplejszy od normy sezonowej. Kategorie takich zdarzeń wyjaśnia NOAA Physical Sciences Laboratory; tej płyty one nie dotyczą. Osobny tracker prowadzi marineheatwaves.org.',
  },
  'ocean-heat-content': {
    title: 'Zawartość ciepła oceanu',
    meta: 'NOAA NCEI · anomalia 0–700 m · 2025',
    blurb: 'Ciepło w górnych 700 metrach w 2025 roku: anomalia w każdej komórce 1°, według NOAA NCEI.',
    detailShort:
      'Mapa to roczna anomalia zawartości ciepła NOAA NCEI w warstwie 0–700 m za 2025 rok. Liczba to 10¹⁸ dżuli w komórce 1°. NCEI publikuje też serię 0–2000 m. NASA i Climate.gov pokazują sumę globalną w czasie. Około 90 procent nadmiaru ciepła w systemie klimatycznym magazynuje ocean (IPCC AR6).',
  },
  'coral-reefs': {
    title: 'Rafy koralowe',
    meta: 'GCRMN 2020 · NOAA Coral Reef Watch · status twardych korali',
    blurb:
      'Jakie jest dziś pokrycie raf twardymi koralami i jak stres cieplny powoduje ich bielenie — na podstawie globalnego monitoringu i obserwacji satelitarnych.',
    detailShort:
      'Raport Globalnej Sieci Monitorowania Raf Koralowych (GCRMN) Status of Coral Reefs of the World: 2020 to główne ilościowe podsumowanie stanu raf na świecie. Około 14 procent światowego twardego korala ubyło z raf w 2009–2018 (GCRMN, Status of Coral Reefs of the World: 2020). Stres cieplny, który może poprzedzać bielenie, śledzi z satelitów program NOAA Coral Reef Watch w rozdzielczości 5 km. Odbudowa korali to działanie z zakresu zarządzania, a raport pokazuje stan samych raf.',
  },
  'marine-fisheries': {
    title: 'Rybołówstwo morskie',
    meta: 'FAO SOFIA · status stad morskich · połowy',
    blurb: 'Jak radzą sobie oceniane stada ryb morskich — według globalnych danych FAO o stanie stad.',
    detailShort:
      'Raport FAO The State of World Fisheries and Aquaculture (SOFIA) to najważniejsza globalna ocena rybołówstwa i akwakultury. 35,5 procent ocenionych stad rybołówstwa morskiego sklasyfikowano jako przełowione (przegląd FAO 2025; stan 2021). Raporty są dostępne na stronie FAO i w repozytorium Open Knowledge, a baza FishStat uzupełnia je statystykami połowów. Selektywne narzędzia połowowe i morskie obszary chronione to sposoby rozwiązywania problemu, a dane FAO pokazują stan samych stad.',
  },
};

const lv: Record<OceanAtlasSlug, OceanAtlasCopy> = {
  'ocean-acidification': {
    title: 'Okeāna paskābināšanās',
    meta: 'OceanSODA-ETHZ · virsmas pH izmaiņa · 1985–1989 līdz 2020–2024',
    blurb:
      'Cik daudz mainījies virsmas okeāna pH no 20. gadsimta 80. gadu beigām līdz 21. gadsimta 20. gadu sākumam. Karbonātu ķīmijas trends, ne temperatūra un ne piesārņojuma karte.',
    detailShort:
      'Karte ir OceanSODA-ETHZ v2025 virsmas pH izmaiņa no 1985.–1989. gada vidējā uz 2020.–2024. gada vidējo. Negatīva vērtība ir paskābināšanās. Aptuveni 0,1 pH vienības kopš aptuveni 1750. gada joprojām nāk no IPCC AR6 un NOAA PMEL. Novērojumu tīklu apraksta NOAA Ocean Acidification Program.',
  },
  'dissolved-oxygen': {
    title: 'Izšķīdušais skābeklis',
    meta: 'NOAA WOA23 · izšķīdušā skābekļa minimums · 100–1000 m',
    blurb:
      'Zemākais izšķīdušais skābeklis starp 100 un 1000 metriem World Ocean Atlas 2023 klimatoloģijā. Atklātais okeāns, ne piekrastes mirušās zonas.',
    detailShort:
      'Karte ir World Ocean Atlas 2023 izšķīdušā skābekļa minimums starp 100 un 1000 m, mikromolos uz kilogramu, 1965.–2022. gada klimatoloģija. IPCC SROCC apraksta skābekļa zudumu augšējos 1000 m un minimuma zonu paplašināšanos. Piekrastes hipoksija paliek piesārņojuma lapā.',
  },
  'sea-ice-extent': {
    title: 'Jūras ledus platība',
    meta: 'NSIDC G02135 · koncentrācija · Arktika, 2026. gada marts · Antarktika, 2025. gada septembris',
    blurb:
      'Jūras ledus koncentrācija: nesenais marts Arktikā un septembris Antarktikā, blakus. Okeāna ledus sega, ne virsmas temperatūra un ne sauszemes ledus.',
    detailShort:
      'Karte ir NSIDC Sea Ice Index (G02135 v4) mēneša koncentrācija. Pa kreisi Arktika 2026. gada martā, pa labi Antarktika 2025. gada septembrī. Skaitlis ir procenti. Platība virs 15 procentiem un salīdzinājums ar 1981.–2010. gada mediānu paliek Sea Ice Today aprakstos.',
  },
  'sea-level': {
    title: 'Jūras līmenis',
    meta: 'NOAA LSA · reģionālais trends · milimetri gadā',
    blurb:
      'Kur okeāna virsma ceļas ātrāk vai lēnāk, milimetros gadā. Vidējais visam okeānam, ko min šī vietne, nāk no NASA Sea Level Change portāla.',
    detailShort:
      'Karte ir NOAA Laboratory for Satellite Altimetry reģionālais trends 1992,96–2025,10, milimetros gadā. Globālais temps aptuveni 3,7 mm gadā 2006.–2018. gadā ir IPCC AR6 novērtējums; šī vidējā rindu publicē NASA Sea Level Change portāls. Tā nav viena mareogrāfa diena un ne virsmas temperatūra.',
  },
  'marine-heatwaves': {
    title: 'Jūras siltuma viļņi',
    meta: 'NOAA CRW · virsmas temperatūras anomālija · 5 km',
    blurb:
      'Kur jūras virsma 2026. gada 25. septembrī bija siltāka vai vēsāka nekā parasti. NOAA Coral Reef Watch anomālija, ne siltuma viļņu kategoriju karte.',
    detailShort:
      'Karte ir NOAA Coral Reef Watch dienas jūras virsmas temperatūras anomālija, 5 km, 2026. gada 25. septembris, Celsija grādos. Siltuma vilnis ir ilgāks notikums, kad reģions paliek krietni siltāks par sezonas normu. Šo notikumu kategorijas skaidro NOAA Physical Sciences Laboratory; šajā platē to nav. Atsevišķu izsekotāju uztur marineheatwaves.org.',
  },
  'ocean-heat-content': {
    title: 'Okeāna siltuma saturs',
    meta: 'NOAA NCEI · 0–700 m anomālija · 2025',
    blurb: 'Siltums augšējos 700 metros 2025. gadā: anomālija katrā 1° šūnā, pēc NOAA NCEI.',
    detailShort:
      'Karte ir NOAA NCEI gada siltuma satura anomālija 0–700 m slānī 2025. gadā. Skaitlis ir 10¹⁸ džouli katrā 1° šūnā. NCEI publicē arī 0–2000 m sēriju. NASA un Climate.gov rāda globālo summu laikā. Ap 90 procentiem klimata sistēmas liekā siltuma glabājas okeānā (IPCC AR6).',
  },
  'coral-reefs': {
    title: 'Koraļļu rifi',
    meta: 'GCRMN 2020 · NOAA Coral Reef Watch · cieto koraļļu statuss',
    blurb:
      'Kāds šobrīd ir cieto koraļļu segums un kā siltuma stress izraisa rifu balēšanu — pēc globālā monitoringa un satelītu novērojumu datiem.',
    detailShort:
      'Globālā koraļļu rifu monitoringa tīkla (GCRMN) ziņojums Status of Coral Reefs of the World: 2020 ir galvenais kvantitatīvais pārskats par rifu stāvokli pasaulē. Ap 14 procentiem pasaules cieto koraļļu zuduši no rifiem 2009.–2018. (GCRMN, Status of Coral Reefs of the World: 2020). Siltuma stresu, kas var būt balēšanas priekšvēstnesis, ar satelītiem uzrauga programma NOAA Coral Reef Watch ar 5 km izšķirtspēju. Koraļļu atjaunošana ir apsaimniekošanas pasākums, bet ziņojums parāda pašu rifu stāvokli.',
  },
  'marine-fisheries': {
    title: 'Jūras zvejniecība',
    meta: 'FAO SOFIA · jūras krājumu statuss · zvejas nozveja',
    blurb:
      'Kā klājas novērtētajiem jūras zivju krājumiem — pēc FAO globālajiem datiem par krājumu stāvokli.',
    detailShort:
      'FAO ziņojums The State of World Fisheries and Aquaculture (SOFIA) ir galvenais globālais zvejniecības un akvakultūras novērtējums. 35,5 procenti vērtēto jūras zvejas krājumu klasificēti kā pārzvejoti (FAO 2025. gada pārskats; stāvoklis 2021). Ziņojumi pieejami FAO tīmekļvietnē un krātuvē Open Knowledge, bet datubāze FishStat tos papildina ar nozvejas statistiku. Selektīvi zvejas rīki un jūras aizsargājamās teritorijas ir problēmas risināšanas veidi, bet FAO dati parāda pašu krājumu stāvokli.',
  },
};

const copy: Record<Locale, Record<OceanAtlasSlug, OceanAtlasCopy>> = { en, ru, pl, lv };

export function getOceanAtlas(locale: Locale): OceanAtlasEntry[] {
  const fields = copy[locale] ?? copy.en;
  return oceanAtlasMeta.map((meta) => ({ ...meta, ...fields[meta.slug] }));
}

export function getOceanAtlasBySlug(
  locale: Locale,
  slug: string,
): OceanAtlasEntry | undefined {
  const meta = oceanAtlasMeta.find((item) => item.slug === slug);
  if (!meta) return undefined;
  const fields = (copy[locale] ?? copy.en)[meta.slug];
  return { ...meta, ...fields };
}
