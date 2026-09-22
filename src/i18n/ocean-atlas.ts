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
