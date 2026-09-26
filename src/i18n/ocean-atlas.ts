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
    meta: 'NOAA OAP · PMEL Carbon Program · surface pH / carbonate chemistry',
    blurb:
      'Chemistry of the surface ocean as it takes up CO₂ — pH and carbonate change, not temperature and not a pollution plume map.',
    what: 'Ocean acidification is the change in seawater carbonate chemistry as the ocean absorbs anthropogenic carbon dioxide. Public doorways: the NOAA Ocean Acidification Program hub and the NOAA PMEL Carbon Program “Ocean Acidification” story (observing network, cruises, buoys, consensus trend assessments). Numbers on this site already cite about 0.1 pH units of open-ocean surface decline since ~1750 (IPCC AR6; NOAA PMEL) — roughly a 26–30% rise in hydrogen-ion concentration. This card is the map / observing doorway for that figure, not a second SST plate.',
    why: 'Live Oceans maps cover currents, salinity, SST, and pollution stocks. Acidification answers a different question: how is surface carbonate chemistry changing? It belongs next to Numbers’ pH figure and must not be folded into SST (temperature) or Pollution (plastics, oil, chlorophyll, coastal hypoxia).',
    howToRead:
      'Lower pH means more acidic on the same log scale — the open ocean is still alkaline, but the shift matters for calcifying organisms and carbonate mineral saturation. Coastal acidification can add local nutrient and upwelling signals on top of the global CO₂ sponge. Open NOAA OAP “What is ocean acidification?” and PMEL observations pages for methods; Copernicus Marine products are optional secondary fields. Preview is a Fix Planet overview after the named sources, not proprietary agency artwork.',
  },
  'dissolved-oxygen': {
    title: 'Dissolved oxygen',
    meta: 'NCEI · World Ocean Atlas 2023 · O₂ / OMZ climatology',
    blurb:
      'Open-ocean dissolved oxygen and oxygen-minimum zones from WOA23 — a water-column climatology, not the coastal dead-zone pins on Pollution.',
    what: 'World Ocean Atlas 2023 (WOA23) from NOAA NCEI publishes objectively analysed climatologies of dissolved oxygen, apparent oxygen utilization, and oxygen saturation on standard depth levels (Volume 3; product documentation and oxygen PDF on the WOA23 documentation tree). The interactive WOA23 selector can request the oxygen parameter. Numbers already cites IPCC SROCC: open-ocean oxygen in the upper 1000 m fell about 0.5–3.3% over 1970–2010, with oxygen-minimum zones expanding about 3–8%. This card is the open-ocean O₂ / OMZ climatology doorway.',
    why: 'Pollution’s “Dead zones” figure is a coastal hypoxia compilation (after Diaz / Breitburg context). Chlorophyll stays on Pollution as a biomass proxy. This card answers a different question: where is the open-ocean oxygen field low, and what does the WOA climatology show? Do not merge the two.',
    howToRead:
      'A climatology is a long-term mean field, not a single cruise day and not a forecast. OMZs are mid-depth low-oxygen layers in the open ocean; coastal dead zones are often eutrophication-driven and sit on the Pollution page. Open WOA23 oxygen documentation and the WOA23 access tool; IPCC SROCC Chapter 5 / SPM are secondary context for the trend Numbers already quotes. Preview is a Fix Planet overview after WOA, not a copy of proprietary atlas plate art as a logo paste.',
  },
  'sea-ice-extent': {
    title: 'Sea ice extent',
    meta: 'NSIDC · Sea Ice Index · Sea Ice Today',
    blurb:
      'Daily and monthly sea-ice extent for the Arctic and Antarctic from NSIDC — frozen ocean cover, not SST and not land ice.',
    what: 'The NSIDC Sea Ice Index (dataset G02135) provides consistently processed Arctic and Antarctic sea-ice extent and concentration images and values since 1979, with daily and monthly products. Sea Ice Today is the public analysis front door (daily images, ChArctic interactive graph, monthly analysis posts). Extent here means ocean area with at least 15% ice concentration — the NSIDC convention — compared with a 1981–2010 median outline on many plates.',
    why: 'Oceans already maps SST. Sea ice is a different physical object: frozen seawater cover that reflects sunlight, couples to ocean circulation, and has its own seasonal maximum/minimum calendar (Arctic minimum ~September, maximum ~March; Antarctic roughly inverted). It is not glacier or ice-sheet mass on land.',
    howToRead:
      'Compare the day’s or month’s edge to the median outline and to the time series — one red or blue pixel is not a climate verdict. Antarctic and Arctic series are separate. Some Sea Ice Today interactive tools were reduced after October 2025 funding notes; daily images, ChArctic, and Sea Ice Index data remain the durable doorway (checked live). Preview is a Fix Planet overview after NSIDC, not a pasted agency logo lockup.',
  },
  'sea-level': {
    title: 'Sea level',
    meta: 'NASA Sea Level Change Portal · satellite altimetry',
    blurb:
      'Global mean sea level from satellite altimeters — the map and time-series doorway for the rise rate Numbers already quotes, not one tide-gauge day.',
    what: 'The NASA Sea Level Change Portal (sealevel.nasa.gov) is the public front door for global mean sea level from the satellite altimeter record (TOPEX/Poseidon, Jason series, Sentinel-6 Michael Freilich, and related missions), plus assessment tools: Global Mean Sea Level vital-sign plot, Sea Level Explorer, and the IPCC AR6 Sea Level Projection Tool. Numbers already cites IPCC AR6 WG1: global mean sea level rose about 3.7 [3.2–4.2] mm/year in 2006–2018. This card is the altimetry / portal doorway for that rate.',
    why: 'Sea level is not SST, not salinity, and not a pollution stock. It belongs beside Numbers’ rise-rate figure so readers can open the living NASA series and regional tools without leaving the Oceans atlas for a Solutions card.',
    howToRead:
      'Global mean sea level averages the ocean surface height; regional rates differ with currents, winds, and vertical land motion. The portal’s GMSL plot notes glacial isostatic adjustment treatment — read the portal caption. A projection tool is not an observation of today’s centimetre. Do not use climate.nasa.gov/vital-signs/sea-level/ (checked 404). AVISO altimetry indicator pages did not respond from this check (000) — use Copernicus Marine Ocean Climate Portal / OMI sea-level products as the open secondary European doorway instead.',
  },
  'marine-heatwaves': {
    title: 'Marine heatwaves',
    meta: 'NOAA Coral Reef Watch · PSL · extreme warm events',
    blurb:
      'A marine heatwave is when a patch of ocean stays unusually warm for days or even months. It is a temporary event, separate from long-term average sea temperature.',
    what: 'A marine heatwave is a prolonged period when sea temperatures in a region are much warmer than the local seasonal norm. NOAA’s Coral Reef Watch publishes daily maps of these events, and NOAA’s Physical Sciences Laboratory explains how they are defined. The community site marineheatwaves.org also runs a tracker.',
    whyHeading: 'Why it matters',
    why: 'Average sea surface temperature describes the usual state of the ocean. Marine heatwaves answer a different question: where and when did extreme warm events happen? They are closely linked to the heat stress that affects coral reefs.',
    howToRead:
      'Most definitions compare daily temperatures with the local long-term average for that time of year. A heatwave is counted when temperatures stay above a set threshold for some time. Methods differ between products, so check the Coral Reef Watch and PSL pages for the definition each one uses. A heatwave map shows short-lived extremes. It differs from average sea surface temperature, and from ocean heat content, which measures the heat stored through the depth of the water.',
  },
  'ocean-heat-content': {
    title: 'Ocean heat content',
    meta: 'NOAA NCEI · NASA · heat stored in the water column',
    blurb:
      'How much heat the ocean has absorbed and stored below the surface, measured through the water column rather than at the surface alone.',
    what: 'Ocean heat content (OHC) measures the heat stored in the ocean’s water column, commonly in the 0–700 m and 0–2000 m layers. It is calculated from temperature profiles measured in the water. NOAA’s National Centers for Environmental Information (NCEI) publish the main global data, and NASA and Climate.gov explain the trends for a general audience. Mercator Ocean offers a European view.',
    whyHeading: 'Why it matters',
    why: 'About 90 percent of the excess heat in the climate system is stored in the ocean (IPCC AR6 WG1). Sea surface temperature describes only the top layer, so it cannot show how much heat has built up below. Ocean heat content can.',
    howToRead:
      'OHC anomalies add up temperature change over depth and area. Deeper layers have been measured well for a shorter time, and confidence in the 0–2000 m layer is highest since the Argo float era. NCEI’s pages describe the methods and data, while NASA and Climate.gov show the long-term time series. The IPCC assessment reports (SROCC and AR6) explain how the share of excess heat is estimated.',
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
    meta: 'NOAA OAP · PMEL Carbon Program · поверхностный pH / карбонатная химия',
    blurb:
      'Химия поверхностного океана при поглощении CO₂ — изменение pH и карбонатов, не температура и не карта шлейфов загрязнения.',
    detailShort:
      'Закисление океана — сдвиг карбонатной химии при поглощении антропогенного CO₂. Двери: NOAA OAP и PMEL Carbon Program. Numbers уже даёт ~0.1 единицы pH с ~1750; эта карта — дверь к наблюдениям, не вторая SST и не Pollution. Открывать OAP / PMEL; превью — обзор Fix Planet.',
  },
  'dissolved-oxygen': {
    title: 'Растворённый кислород',
    meta: 'NCEI · World Ocean Atlas 2023 · O₂ / OMZ',
    blurb:
      'Открытоокеанский растворённый кислород и кислородные минимумы по WOA23 — климатология толщи воды, не прибрежные «мёртвые зоны» на Pollution.',
    detailShort:
      'WOA23 (NCEI) — климатологии O₂ / AOU / насыщения. Numbers уже даёт потерю O₂ в верхних 1000 м и расширение OMZ (IPCC SROCC). Pollution держит прибрежную гипоксию и хлорофилл — эта карта другая. Открывать WOA23 oxygen PDF и селектор.',
  },
  'sea-ice-extent': {
    title: 'Площадь морского льда',
    meta: 'NSIDC · Sea Ice Index · Sea Ice Today',
    blurb:
      'Суточная и месячная площадь морского льда Арктики и Антарктики от NSIDC — ледяной покров океана, не SST и не материковый лёд.',
    detailShort:
      'Sea Ice Index (G02135) и Sea Ice Today — протяжённость при концентрации ≥15%, сравнение с медианой 1981–2010. Не температура поверхности и не ледники на суше. Арктика и Антарктика — отдельные ряды. Открывать Sea Ice Today / Index / ChArctic.',
  },
  'sea-level': {
    title: 'Уровень моря',
    meta: 'NASA Sea Level Change Portal · спутниковая альтиметрия',
    blurb:
      'Средний глобальный уровень моря по альтиметрии — дверь к карте и ряду для скорости подъёма из Numbers, не один день мареографа.',
    detailShort:
      'Портал NASA Sea Level Change — GMSL с ~1993, Explorer и проекции IPCC AR6. Numbers уже даёт ~3.7 мм/год (2006–2018). Старый climate.nasa.gov/vital-signs/sea-level/ — 404; AVISO в проверке не ответил — вторично Copernicus Marine. Не SST и не Solutions.',
  },
  'marine-heatwaves': {
    title: 'Морские волны тепла',
    meta: 'NOAA Coral Reef Watch · PSL · экстремальные тёплые события',
    blurb:
      'Морская волна тепла — это когда участок океана дни и даже месяцы остаётся необычно тёплым. Это временное явление, а средняя многолетняя температура моря — другой показатель.',
    detailShort:
      'Морская волна тепла — это длительный период, когда температура моря в регионе заметно выше местной сезонной нормы. Программа NOAA Coral Reef Watch ежедневно публикует карты таких событий, а лаборатория NOAA Physical Sciences Laboratory (PSL) объясняет, как их определяют. Дополнительные сведения собирает сайт marineheatwaves.org. Волна тепла — временное явление: она отличается и от средней температуры поверхности моря, и от запаса тепла во всей толще воды.',
  },
  'ocean-heat-content': {
    title: 'Запас тепла океана',
    meta: 'NOAA NCEI · NASA · тепло в толще воды',
    blurb: 'Сколько тепла океан поглотил и накопил под поверхностью, во всей толще воды.',
    detailShort:
      'Запас тепла океана (OHC) — это тепло, накопленное в толще воды; его рассчитывают по профилям температуры, обычно для слоёв 0–700 м и 0–2000 м. Около 90 процентов избыточного тепла климатической системы хранится в океане (IPCC AR6 WG1). Температура поверхности моря описывает лишь верхний слой. Основные глобальные данные публикует NOAA NCEI, а NASA и Climate.gov объясняют их простым языком. Дополнительный европейский обзор даёт Mercator Ocean.',
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
    meta: 'NOAA OAP · PMEL Carbon Program · pH / chemia węglanowa',
    blurb:
      'Chemia powierzchni oceanu przy pochłanianiu CO₂ — zmiana pH i węglanów, nie temperatura i nie mapa smug zanieczyszczeń.',
    detailShort:
      'Zakwaszenie oceanu to zmiana chemii węglanowej przy pochłanianiu antropogenicznego CO₂. Drzwi: NOAA OAP i PMEL. Numbers już podaje ~0,1 jednostki pH od ~1750; ta karta to drzwi do obserwacji, nie druga SST i nie Pollution.',
  },
  'dissolved-oxygen': {
    title: 'Tlen rozpuszczony',
    meta: 'NCEI · World Ocean Atlas 2023 · O₂ / OMZ',
    blurb:
      'Tlen otwartego oceanu i strefy minimum tlenu z WOA23 — klimatologia słupa wody, nie przybrzeżne martwe strefy z Pollution.',
    detailShort:
      'WOA23 (NCEI) — klimatologie O₂. Numbers już cytuje ubytek O₂ i ekspansję OMZ (IPCC SROCC). Pollution trzyma hipoksję przybrzeżną i chlorofil — ta karta jest inna. Otwierać selektor WOA23 i PDF Volume 3.',
  },
  'sea-ice-extent': {
    title: 'Zasięg lodu morskiego',
    meta: 'NSIDC · Sea Ice Index · Sea Ice Today',
    blurb:
      'Dobowy i miesięczny zasięg lodu Arktyki i Antarktyki od NSIDC — pokrywa lodowa oceanu, nie SST i nie lód lądowy.',
    detailShort:
      'Sea Ice Index / Sea Ice Today — zasięg przy stężeniu ≥15%, porównanie z medianą 1981–2010. Nie temperatura powierzchni i nie lodowce na lądzie. Arktyka i Antarktyka osobno. Otwierać Sea Ice Today / Index / ChArctic.',
  },
  'sea-level': {
    title: 'Poziom morza',
    meta: 'NASA Sea Level Change Portal · altimetria satelitarna',
    blurb:
      'Globalny średni poziom morza z altimetrów — drzwi do mapy i szeregu dla tempa wzrostu z Numbers, nie jeden dzień mareografu.',
    detailShort:
      'Portal NASA Sea Level Change — GMSL od ~1993, Explorer i projekcje IPCC AR6. Numbers już podaje ~3,7 mm/rok. Stary climate.nasa.gov/vital-signs/sea-level/ — 404; AVISO bez odpowiedzi — wtórnie Copernicus Marine. Nie SST i nie Solutions.',
  },
  'marine-heatwaves': {
    title: 'Morskie fale upałów',
    meta: 'NOAA Coral Reef Watch · PSL · ekstremalne ciepłe zdarzenia',
    blurb:
      'Morska fala upałów to sytuacja, gdy fragment oceanu przez dni, a nawet miesiące pozostaje nietypowo ciepły. To zjawisko przejściowe; średnia wieloletnia temperatura morza to inna miara.',
    detailShort:
      'Morska fala upałów to długotrwały okres, w którym temperatura morza w danym regionie jest wyraźnie wyższa od lokalnej normy sezonowej. Program NOAA Coral Reef Watch publikuje codzienne mapy takich zdarzeń, a laboratorium NOAA Physical Sciences Laboratory (PSL) wyjaśnia, jak się je definiuje. Dodatkowe informacje zbiera serwis marineheatwaves.org. Fala upałów jest zjawiskiem przejściowym i różni się zarówno od średniej temperatury powierzchni morza, jak i od zawartości ciepła w całym słupie wody.',
  },
  'ocean-heat-content': {
    title: 'Zawartość ciepła oceanu',
    meta: 'NOAA NCEI · NASA · ciepło w słupie wody',
    blurb: 'Ile ciepła ocean pochłonął i zmagazynował pod powierzchnią, w całym słupie wody.',
    detailShort:
      'Zawartość ciepła oceanu (OHC) to ciepło zgromadzone w słupie wody; oblicza się ją na podstawie profili temperatury, zwykle dla warstw 0–700 m i 0–2000 m. Około 90 procent nadmiaru ciepła w systemie klimatycznym jest magazynowane w oceanie (IPCC AR6 WG1). Temperatura powierzchni morza opisuje tylko najwyższą warstwę. Główne dane globalne publikuje NOAA NCEI, a NASA i Climate.gov przystępnie je objaśniają. Dodatkowy europejski przegląd oferuje Mercator Ocean.',
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
    meta: 'NOAA OAP · PMEL Carbon Program · pH / karbonātu ķīmija',
    blurb:
      'Virsmas okeāna ķīmija, absorbējot CO₂ — pH un karbonātu maiņa, ne temperatūra un ne piesārņojuma plūsmas karte.',
    detailShort:
      'Okeāna paskābināšanās — karbonātu ķīmijas nobīde, absorbējot antropogēno CO₂. Durvis: NOAA OAP un PMEL. Numbers jau rāda ~0,1 pH vienības kopš ~1750; šī karte ir novērojumu durvis, ne otra SST un ne Pollution.',
  },
  'dissolved-oxygen': {
    title: 'Izšķīdušais skābeklis',
    meta: 'NCEI · World Ocean Atlas 2023 · O₂ / OMZ',
    blurb:
      'Atklātā okeāna izšķīdušais skābeklis un skābekļa minimuma zonas no WOA23 — ūdens staba klimatoloģija, ne Pollution piekrastes mirušās zonas.',
    detailShort:
      'WOA23 (NCEI) — O₂ klimatoloģijas. Numbers jau citē O₂ zudumu un OMZ paplašināšanos (IPCC SROCC). Pollution tur piekrastes hipoksiju un hlorofilu — šī karte ir cita. Atvērt WOA23 selektoru un Volume 3 PDF.',
  },
  'sea-ice-extent': {
    title: 'Jūras ledus platība',
    meta: 'NSIDC · Sea Ice Index · Sea Ice Today',
    blurb:
      'Dienas un mēneša Arktikas un Antarktikas jūras ledus platība no NSIDC — okeāna ledus sega, ne SST un ne sauszemes ledus.',
    detailShort:
      'Sea Ice Index / Sea Ice Today — platība pie koncentrācijas ≥15%, salīdzinājums ar 1981–2010 mediānu. Ne virsmas temperatūra un ne ledāji uz sauszemes. Arktika un Antarktika atsevišķi. Atvērt Sea Ice Today / Index / ChArctic.',
  },
  'sea-level': {
    title: 'Jūras līmenis',
    meta: 'NASA Sea Level Change Portal · satelītu altimetrija',
    blurb:
      'Globālais vidējais jūras līmenis no altimetriem — karte un laika rinda Numbers minētajam kāpuma tempam, ne viena mareogrāfa diena.',
    detailShort:
      'NASA Sea Level Change portāls — GMSL kopš ~1993, Explorer un IPCC AR6 projekcijas. Numbers jau rāda ~3,7 mm/gadā. Vecais climate.nasa.gov/vital-signs/sea-level/ — 404; AVISO neatbildēja — sekundāri Copernicus Marine. Ne SST un ne Solutions.',
  },
  'marine-heatwaves': {
    title: 'Jūras siltuma viļņi',
    meta: 'NOAA Coral Reef Watch · PSL · ekstrēmi silie notikumi',
    blurb:
      'Jūras siltuma vilnis ir situācija, kad okeāna apgabals dienām vai pat mēnešiem ilgi paliek neparasti silts. Tas ir īslaicīgs notikums; ilggadējā vidējā jūras temperatūra ir cits rādītājs.',
    detailShort:
      'Jūras siltuma vilnis ir ilgstošs periods, kad jūras temperatūra reģionā ir ievērojami augstāka par vietējo sezonālo normu. Programma NOAA Coral Reef Watch katru dienu publicē šo notikumu kartes, bet laboratorija NOAA Physical Sciences Laboratory (PSL) skaidro, kā tos nosaka. Papildu informāciju apkopo vietne marineheatwaves.org. Siltuma vilnis ir īslaicīgs notikums, un tas atšķiras gan no vidējās jūras virsmas temperatūras, gan no siltuma daudzuma visā ūdens stabiņā.',
  },
  'ocean-heat-content': {
    title: 'Okeāna siltuma saturs',
    meta: 'NOAA NCEI · NASA · siltums ūdens stabiņā',
    blurb: 'Cik daudz siltuma okeāns uzņēmis un uzkrājis zem virsmas visā ūdens stabiņā.',
    detailShort:
      'Okeāna siltuma saturs (OHC) ir ūdens stabiņā uzkrātais siltums; to aprēķina no temperatūras profiliem, parasti 0–700 m un 0–2000 m slāņos. Ap 90 procentiem klimata sistēmas liekā siltuma glabājas okeānā (IPCC AR6 WG1). Jūras virsmas temperatūra raksturo tikai augšējo slāni. Galvenos globālos datus publicē NOAA NCEI, bet NASA un Climate.gov tos skaidro saprotamā valodā. Papildu Eiropas skatījumu piedāvā Mercator Ocean.',
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
