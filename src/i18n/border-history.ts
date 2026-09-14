import {
  borderHistoryFrames,
  type BorderCoverage,
  type BorderFrameMeta,
} from '../data/border-history';
import type { Locale } from './config';
import year1En from './border-essays/year-1-en.md?raw';
import year1Lv from './border-essays/year-1-lv.md?raw';
import year1Pl from './border-essays/year-1-pl.md?raw';
import year1Ru from './border-essays/year-1-ru.md?raw';
import year100En from './border-essays/year-100-en.md?raw';
import year100Lv from './border-essays/year-100-lv.md?raw';
import year100Pl from './border-essays/year-100-pl.md?raw';
import year100Ru from './border-essays/year-100-ru.md?raw';
import year200En from './border-essays/year-200-en.md?raw';
import year200Lv from './border-essays/year-200-lv.md?raw';
import year200Pl from './border-essays/year-200-pl.md?raw';
import year200Ru from './border-essays/year-200-ru.md?raw';
import year300En from './border-essays/year-300-en.md?raw';
import year300Lv from './border-essays/year-300-lv.md?raw';
import year300Pl from './border-essays/year-300-pl.md?raw';
import year300Ru from './border-essays/year-300-ru.md?raw';
import year400En from './border-essays/year-400-en.md?raw';
import year400Lv from './border-essays/year-400-lv.md?raw';
import year400Pl from './border-essays/year-400-pl.md?raw';
import year400Ru from './border-essays/year-400-ru.md?raw';
import year500En from './border-essays/year-500-en.md?raw';
import year500Lv from './border-essays/year-500-lv.md?raw';
import year500Pl from './border-essays/year-500-pl.md?raw';
import year500Ru from './border-essays/year-500-ru.md?raw';
import year600En from './border-essays/year-600-en.md?raw';
import year600Lv from './border-essays/year-600-lv.md?raw';
import year600Pl from './border-essays/year-600-pl.md?raw';
import year600Ru from './border-essays/year-600-ru.md?raw';
import year700En from './border-essays/year-700-en.md?raw';
import year700Lv from './border-essays/year-700-lv.md?raw';
import year700Pl from './border-essays/year-700-pl.md?raw';
import year700Ru from './border-essays/year-700-ru.md?raw';
import year800En from './border-essays/year-800-en.md?raw';
import year800Lv from './border-essays/year-800-lv.md?raw';
import year800Pl from './border-essays/year-800-pl.md?raw';
import year800Ru from './border-essays/year-800-ru.md?raw';
import year900En from './border-essays/year-900-en.md?raw';
import year900Lv from './border-essays/year-900-lv.md?raw';
import year900Pl from './border-essays/year-900-pl.md?raw';
import year900Ru from './border-essays/year-900-ru.md?raw';
import year1000En from './border-essays/year-1000-en.md?raw';
import year1000Lv from './border-essays/year-1000-lv.md?raw';
import year1000Pl from './border-essays/year-1000-pl.md?raw';
import year1000Ru from './border-essays/year-1000-ru.md?raw';
import year1100En from './border-essays/year-1100-en.md?raw';
import year1100Lv from './border-essays/year-1100-lv.md?raw';
import year1100Pl from './border-essays/year-1100-pl.md?raw';
import year1100Ru from './border-essays/year-1100-ru.md?raw';
import year1200En from './border-essays/year-1200-en.md?raw';
import year1200Lv from './border-essays/year-1200-lv.md?raw';
import year1200Pl from './border-essays/year-1200-pl.md?raw';
import year1200Ru from './border-essays/year-1200-ru.md?raw';
import year1300En from './border-essays/year-1300-en.md?raw';
import year1300Lv from './border-essays/year-1300-lv.md?raw';
import year1300Pl from './border-essays/year-1300-pl.md?raw';
import year1300Ru from './border-essays/year-1300-ru.md?raw';
import year1400En from './border-essays/year-1400-en.md?raw';
import year1400Lv from './border-essays/year-1400-lv.md?raw';
import year1400Pl from './border-essays/year-1400-pl.md?raw';
import year1400Ru from './border-essays/year-1400-ru.md?raw';
import year1500En from './border-essays/year-1500-en.md?raw';
import year1500Lv from './border-essays/year-1500-lv.md?raw';
import year1500Pl from './border-essays/year-1500-pl.md?raw';
import year1500Ru from './border-essays/year-1500-ru.md?raw';
import year1600En from './border-essays/year-1600-en.md?raw';
import year1600Lv from './border-essays/year-1600-lv.md?raw';
import year1600Pl from './border-essays/year-1600-pl.md?raw';
import year1600Ru from './border-essays/year-1600-ru.md?raw';
import year1700En from './border-essays/year-1700-en.md?raw';
import year1700Lv from './border-essays/year-1700-lv.md?raw';
import year1700Pl from './border-essays/year-1700-pl.md?raw';
import year1700Ru from './border-essays/year-1700-ru.md?raw';
import year1800En from './border-essays/year-1800-en.md?raw';
import year1800Lv from './border-essays/year-1800-lv.md?raw';
import year1800Pl from './border-essays/year-1800-pl.md?raw';
import year1800Ru from './border-essays/year-1800-ru.md?raw';
import year1900En from './border-essays/year-1900-en.md?raw';
import year1900Lv from './border-essays/year-1900-lv.md?raw';
import year1900Pl from './border-essays/year-1900-pl.md?raw';
import year1900Ru from './border-essays/year-1900-ru.md?raw';

export type BorderHistoryPage = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  honesty: string;
  back: string;
  scrubberAria: string;
  sourceLabel: string;
  licenseLabel: string;
  yearLabel: string;
  mapYearLabel: string;
  nearestNote: string;
  coverage: Record<BorderCoverage, string>;
  catalogTitle: string;
  catalogHook: string;
  catalogCta: string;
  catalogAlt: string;
  heroAlt: string;
};

export type BorderFrameCopy = {
  title: string;
  caption: string;
  imageAlt: string;
  /** Optional long-form markdown (paragraphs, ### headings, bold/italic). */
  essay?: string;
  sourceShort?: string;
  sourceOrg?: string;
  license?: string;
};

const pageEn: BorderHistoryPage = {
  metaTitle: 'History of borders — Fix Planet',
  metaDescription:
    'A century-by-century atlas of political maps from the start of the Common Era to now, using openly licensed reconstructions — not invented borders.',
  eyebrow: 'Map room',
  title: 'History of borders',
  lead:
    'Political maps, one century at a time: year 1 of the Common Era through the present. Each frame is a published reconstruction or a dated government sheet. Early borders are estimates.',
  honesty:
    'There is no single “true” world border for antiquity. States, tribute zones, and nomadic ranges overlap. Several steps use the nearest openly licensed plate in this atlas family — not an invented year. Contested lines stay contested.',
  back: '← Maps',
  scrubberAria: 'Jump to a century',
  sourceLabel: 'Source',
  licenseLabel: 'License',
  yearLabel: 'Century step',
  mapYearLabel: 'Map dated',
  nearestNote: 'Nearest openly licensed map — not an exact year sheet.',
  coverage: {
    world: 'World reconstruction',
    'eastern-hemisphere': 'Eastern Hemisphere only — the Americas are a gap on this sheet',
    colonial: 'Colonial empires highlighted — not a complete census of every polity',
  },
  catalogTitle: 'History of borders',
  catalogHook: 'Century steps from 1 CE to now: sourced political maps, not invented lines.',
  catalogCta: 'Open the timeline →',
  catalogAlt:
    'Historical political world map used as the catalog card for the History of borders timeline',
  heroAlt:
    'Cloud-free NASA Blue Marble: natural land colors and oceans, used as a physical backdrop, not a political map',
};

const pageRu: BorderHistoryPage = {
  metaTitle: 'История границ — Fix Planet',
  metaDescription:
    'Атлас политических карт по столетиям от начала нашей эры до сегодня: открытые реконструкции, не выдуманные границы.',
  eyebrow: 'Картографическая',
  title: 'История границ',
  lead:
    'Политические карты — по одному столетию: от 1 года н. э. до наших дней. Каждый кадр — опубликованная реконструкция или датированный государственный лист. Ранние границы — оценки.',
  honesty:
    'Для древности нет одной «верной» мировой границы. Государства, данники и кочевые зоны пересекаются. Часть шагов — ближайшая открытая карта из этого семейства атласа, не выдуманный год. Спорные линии остаются спорными.',
  back: '← Карты',
  scrubberAria: 'Перейти к столетию',
  sourceLabel: 'Источник',
  licenseLabel: 'Лицензия',
  yearLabel: 'Шаг века',
  mapYearLabel: 'Дата карты',
  nearestNote: 'Ближайшая открытая карта — не точный лист на круглый год.',
  coverage: {
    world: 'Мировая реконструкция',
    'eastern-hemisphere': 'Только Восточное полушарие — Америка на этом листе отсутствует',
    colonial: 'Выделены колониальные империи — не полный список всех государств',
  },
  catalogTitle: 'История границ',
  catalogHook: 'Столетия от 1 н. э. до сейчас: карты с источниками, не выдуманные линии.',
  catalogCta: 'Открыть ленту →',
  catalogAlt: 'Историческая политическая карта мира — карточка ленты «История границ»',
  heroAlt:
    'Безоблачный NASA Blue Marble: естественные цвета суши и океанов, физический фон, не политическая карта',
};

const pagePl: BorderHistoryPage = {
  metaTitle: 'Historia granic — Fix Planet',
  metaDescription:
    'Atlas map politycznych stulecie po stuleciu od początku naszej ery do dziś: otwarte rekonstrukcje, nie wymyślone granice.',
  eyebrow: 'Mapownia',
  title: 'Historia granic',
  lead:
    'Mapy polityczne, stulecie po stuleciu: od roku 1 n.e. do dziś. Każda klatka to opublikowana rekonstrukcja albo datowany arkusz rządowy. Wczesne granice to szacunki.',
  honesty:
    'W starożytności nie ma jednej „prawdziwej” granicy świata. Państwa, trybutariusze i strefy koczownicze nachodzą na siebie. Część kroków to najbliższa mapa na otwartej licencji z tej rodziny atlasu — nie wymyślony rok. Sporne linie zostają sporne.',
  back: '← Mapy',
  scrubberAria: 'Skocz do stulecia',
  sourceLabel: 'Źródło',
  licenseLabel: 'Licencja',
  yearLabel: 'Krok stulecia',
  mapYearLabel: 'Data mapy',
  nearestNote: 'Najbliższa mapa na otwartej licencji — nie dokładny arkusz z okrągłego roku.',
  coverage: {
    world: 'Rekonstrukcja światowa',
    'eastern-hemisphere': 'Tylko półkula wschodnia — Ameryki są luką na tym arkuszu',
    colonial: 'Wyróżnione imperia kolonialne — nie pełny spis wszystkich organizmów',
  },
  catalogTitle: 'Historia granic',
  catalogHook: 'Kroki stuleci od 1 n.e. do dziś: mapy ze źródłami, nie wymyślone linie.',
  catalogCta: 'Otwórz oś czasu →',
  catalogAlt: 'Historyczna mapa polityczna świata — karta osi czasu Historii granic',
  heroAlt:
    'Bezachmurny NASA Blue Marble: naturalne barwy lądów i oceanów, tło fizyczne, nie mapa polityczna',
};

const pageLv: BorderHistoryPage = {
  metaTitle: 'Robežu vēsture — Fix Planet',
  metaDescription:
    'Politisko karšu atlants pa gadsimtiem no mūsu ēras sākuma līdz šodienai: atklātas rekonstrukcijas, ne izdomātas robežas.',
  eyebrow: 'Karšu zāle',
  title: 'Robežu vēsture',
  lead:
    'Politiskās kartes — pa vienam gadsimtam: no 1. gada m.ē. līdz mūsdienām. Katrs kadrs ir publicēta rekonstrukcija vai datēta valsts lapa. Agrīnās robežas ir vērtējumi.',
  honesty:
    'Senatnei nav vienas „īstās” pasaules robežas. Valstis, meslu zonas un klejotāju areāli pārklājas. Daļa soļu ir tuvākā atklāti licencētā karte no šīs atlanta saimes — ne izdomāts gads. Strīdīgās līnijas paliek strīdīgas.',
  back: '← Kartes',
  scrubberAria: 'Pāriet uz gadsimtu',
  sourceLabel: 'Avots',
  licenseLabel: 'Licence',
  yearLabel: 'Gadsimta solis',
  mapYearLabel: 'Kartes datums',
  nearestNote: 'Tuvākā atklāti licencētā karte — ne precīza lapa uz apaļu gadu.',
  coverage: {
    world: 'Pasaules rekonstrukcija',
    'eastern-hemisphere': 'Tikai Austrumu puslode — Amerika šajā lapā ir iztrūkums',
    colonial: 'Iezīmētas koloniālās impērijas — ne pilns visu politiju saraksts',
  },
  catalogTitle: 'Robežu vēsture',
  catalogHook: 'Gadsimtu soļi no 1. m.ē. līdz šodienai: kartes ar avotiem, ne izdomātas līnijas.',
  catalogCta: 'Atvērt laika līniju →',
  catalogAlt: 'Vēsturiska politiskā pasaules karte — Robežu vēstures laika līnijas kartīte',
  heroAlt:
    'Bez mākoņiem NASA Blue Marble: dabiskas sauszemes un okeānu krāsas, fizisks fons, ne politiskā karte',
};

const captionsEn: Record<number, BorderFrameCopy> = {
  1: {
    title: '1 CE — start of the Common Era',
    caption:
      'Year 1 CE — for people then, just another year from Rome\'s founding and the year of Emperor Ping; Augustus holds the Mediterranean, Han holds the Middle Kingdom; between them, silk and Parthia.',
    essay: year1En,
    imageAlt: 'Reconstructed world political map for 1 CE, public-domain Wikimedia sheet',
  },
  100: {
    title: '100 CE',
    caption:
      'The 2nd century — Rome\'s "golden age" from Trajan to Marcus Aurelius and the break at Commodus; the Antonine Plague; in China Eastern Han cracks by the end (Yellow Turbans).',
    essay: year100En,
    imageAlt: 'Reconstructed world political map for 100 CE',
  },
  200: {
    title: '200 CE',
    caption:
      'Year 200 — no longer a calm antique noon: the empires still stand, but something creaks inside. Septimius Severus\'s Rome after Parthian campaigns and plague; China on the eve of the Three Kingdoms after Guandu; Parthia living out its days until the Sasanians. Quieter outside than it seems.',
    essay: year200En,
    imageAlt: 'Reconstructed world political map for 200 CE',
  },
  300: {
    title: '300 CE',
    caption:
      'Year 300 — Diocletian\'s tetrarchy; Sasanians in Persia; Jin in China already gnawing itself; Christians numerous — in three years the Great Persecution begins.',
    essay: year300En,
    imageAlt: 'Reconstructed world political map for 300 CE',
  },
  400: {
    title: '400 CE',
    caption:
      'Year 400 — already two empires: Honorius in the West, Arcadius in the East; Goths inside; ten years until Alaric in Rome; Christianity official since 380.',
    essay: year400En,
    imageAlt: 'Reconstructed world political map for 400 CE',
  },
  500: {
    title: '500 CE',
    caption:
      'Year 500 — Theodoric in Ravenna; Clovis\'s Franks already baptized; Constantinople hoards a treasury for Justinian; China is split, the north gathered by Northern Wei.',
    essay: year500En,
    imageAlt: 'Reconstructed world political map for 500 CE',
  },
  600: {
    title: '600 CE — nearest map: 500',
    caption:
      'Year 600 — already a medieval frame: no Western Roman Empire for over a century; in the east Rome still holds (Maurice), but in two years the world will jerk so hard it remaps half the board. Lombards in Italy, Franks in shreds, Sui has just gathered China; in Mecca still a quiet trading year.',
    essay: year600En,
    imageAlt: 'World political reconstruction dated 500 CE, used for the 600 step',
  },
  700: {
    title: '700 CE',
    caption:
      'Year 700 — the Islamic world is already the main power from the Atlantic almost to Central Asia: Umayyads in Damascus, Persia gone, Byzantium shrunk, China under the Tang (and Wu Zetian) on the rise. Europe — kingdoms and mayors of the palace; Gibraltar and Spain are within reach.',
    essay: year700En,
    imageAlt: 'Reconstructed world political map for 700 CE',
  },
  800: {
    title: '800 CE — nearest map: 750',
    caption:
      'Year 800 is remembered for Christmas at Saint Peter’s: Pope Leo III crowns Charlemagne emperor of the West. Byzantium does not recognise it; Baghdad under Harun al-Rashid watches from the side. Three “centres” on one map — Aachen/Rome, Constantinople, Baghdad.',
    essay: year800En,
    imageAlt: 'World political reconstruction dated 750 CE, used for the 800 step',
  },
  900: {
    title: '900 CE',
    caption:
      'Year 900 — the Viking Age is not over yet, but the great empires are crumbling: the Carolingians are gone as a unity, the Tang are dying out, Baghdad rules more in name. On the fringes, Wessex, the Samanids, Oleg’s Rus, and the Magyars are gathering.',
    essay: year900En,
    imageAlt: 'Reconstructed world political map for 900 CE',
  },
  1000: {
    title: '1000 CE — nearest map: 900',
    caption:
      'Year 1000 — Otto III in Gniezno; Stephen king of Hungary; Kiev already baptised; Leif Erikson off the shore of Vinland; the end of the world does not come.',
    essay: year1000En,
    imageAlt: 'World political reconstruction dated 900 CE, used for the 1000 step',
  },
  1100: {
    title: '1100 CE',
    caption:
      'Year 1100 — Baldwin is crowned in Bethlehem; in England an arrow kills William Rufus; in Rus a congress at Uvetichi; in China Huizong takes the throne.',
    essay: year1100En,
    imageAlt: 'Schematic world political reconstruction for 1100 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1200: {
    title: '1200 CE',
    caption:
      'Year 1200 — Innocent III at his peak; the Fourth Crusade still in the preaching; Temüjin has already gathered the Mongols; in Rus, Vsevolod the Big Nest.',
    essay: year1200En,
    imageAlt: 'Founder-supplied political reconstruction of the world in 1200',
    sourceShort: 'Founder reconstruction',
    sourceOrg: 'Founder-supplied political reconstruction',
    license: 'Founder-supplied image',
  },
  1300: {
    title: '1300 CE',
    caption:
      'Year 1300 — the papal jubilee in Rome; Philip the Fair already squeezes the church; Osman bites the Byzantine edge; the Mongol Empire is still huge, but already in shards.',
    essay: year1300En,
    imageAlt: 'Schematic world political reconstruction for 1300 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1400: {
    title: '1400 CE — nearest map: 1500',
    caption:
      'Year 1400 — Timur drives into Syria; in Europe two popes and the Hundred Years\' War; Vasily I\'s Moscow between the Horde and Lithuania; in China Zhu Di fights for the Ming throne.',
    essay: year1400En,
    imageAlt: '1500 world political reconstruction used as the nearest sheet for 1400',
  },
  1500: {
    title: '1500 CE',
    caption:
      'Year 1500 — Cabral "finds" Brazil on the way to India; Ivan III beats Lithuania at Vedrosha; in Italy the French and the dukes cut each other over cities; the Reformation is not yet here.',
    essay: year1500En,
    imageAlt: 'World political reconstruction of main countries in 1500',
  },
  1600: {
    title: '1600 CE — nearest map: 1648',
    caption:
      'Year 1600 — Japan ends the civil wars at Sekigahara; England grants the East India Company its charter; in Rome they burn Bruno; in Moscow Boris Godunov — and the country does not yet know about the famine and the Time of Troubles.',
    essay: year1600En,
    imageAlt: 'World political reconstruction of 1648, used for the 1600 step',
  },
  1700: {
    title: '1700 CE',
    caption:
      'Year 1700 — the Great Northern War begins; at Narva the Swedes beat the Russians; the last Spanish Habsburg dies — Europe prepares to divide an empire; Peter is already aimed at the Baltic.',
    essay: year1700En,
    imageAlt: 'Schematic world political reconstruction for 1700 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1800: {
    title: '1800 CE',
    caption:
      'Year 1800 — Napoleon is still consul: Marengo almost lost and won in a single day; the US capital moves to Washington; Paul I quarrels with his allies and leans toward Bonaparte.',
    essay: year1800En,
    imageAlt: 'Schematic world political reconstruction for 1800 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1900: {
    title: '1900 CE',
    caption:
      'Year 1900 — “Boxers” in China and the siege of the legations; eight powers take Beijing; in South Africa the Anglo-Boer War; in Paris the Métro and a zeppelin, for Planck — the quantum.',
    essay: year1900En,
    imageAlt: 'Schematic world political reconstruction for 1900 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  2000: {
    title: '2000 CE — nearest map: present-day outlines',
    caption:
      'No matching-style 2000 choropleth in this atlas family. Country fills use present-day BlankMap-World / Natural Earth geometry, so post-2000 states (including South Sudan, 2011) appear. A labeled gap vs a June 2000 intelligence sheet.',
    imageAlt: 'Present-day country fills used as the nearest atlas plate for the 2000 step',
  },
  2020: {
    title: '2020s — present outlines',
    caption:
      'Public-domain country polygons (BlankMap-World / Natural Earth), 4-colored in the same tan-land / soft-blue-sea atlas language as the early centuries. A small-scale present-day base, not a live border service. Disputed lines are drawn one way so the map can exist.',
    imageAlt: 'Present-day public-domain country map with atlas-style region colors',
  },
};

const captionsRu: Record<number, BorderFrameCopy> = {
  1: {
    title: '1 н. э. — начало нашей эры',
    caption:
      'Год 1 н. э. — для современников просто год от основания Рима и год императора Пина; Август держит Средиземноморье, Хань — Поднебесную; между ними шёлк и Парфия.',
    essay: year1Ru,
    imageAlt: 'Реконструированная политическая карта мира на 1 год н. э.',
  },
  100: {
    title: '100 н. э.',
    caption:
      'II век — римский «золотой век» от Траяна до Марка Аврелия и слом на Коммоде; Антонинова чума; в Китае Восточная Хань к концу трескается (Жёлтые повязки).',
    essay: year100Ru,
    imageAlt: 'Реконструированная политическая карта мира на 100 год н. э.',
  },
  200: {
    title: '200 н. э.',
    caption:
      'Год 200 — уже не спокойный античный полдень: империи ещё стоят, но внутри скрипит. Рим Септимия Севера после парфянских походов и чумы; Китай накануне Троецарствия после Гуаньду; Парфия доживает до Сасанидов. Снаружи тише, чем кажется.',
    essay: year200Ru,
    imageAlt: 'Реконструированная политическая карта мира на 200 год н. э.',
  },
  300: {
    title: '300 н. э.',
    caption:
      'Год 300 — тетрархия Диоклетиана; Сасаниды в Персии; Цзинь в Китае уже грызёт себя; христиане многочисленны — через три года начнётся Великое гонение.',
    essay: year300Ru,
    imageAlt: 'Реконструированная политическая карта мира на 300 год н. э.',
  },
  400: {
    title: '400 н. э.',
    caption:
      'Год 400 — империя уже две: Гонорий на Западе, Аркадий на Востоке; готы внутри; до Алариха в Риме десять лет; христианство официально с 380-го.',
    essay: year400Ru,
    imageAlt: 'Реконструированная политическая карта мира на 400 год н. э.',
  },
  500: {
    title: '500 н. э.',
    caption:
      'Год 500 — Теодорих в Равенне; франки Хлодвига уже крещены; Константинополь копит казну для Юстиниана; Китай разрезан, север собирает Северная Вэй.',
    essay: year500Ru,
    imageAlt: 'Реконструированная политическая карта мира на 500 год н. э.',
  },
  600: {
    title: '600 н. э. — ближайшая карта: 500',
    caption:
      'Год 600 — уже средневековый кадр: Запада Римской империи нет больше века; на востоке Рим ещё держится (Маврикий), но через два года мир дёрнет так, что перекроит полкарты. Лангобарды в Италии, франки в клочьях, Суй только что собрала Китай; в Мекке ещё тихий торговый год.',
    essay: year600Ru,
    imageAlt: 'Политическая реконструкция мира 500 года н. э. для шага 600',
  },
  700: {
    title: '700 н. э.',
    caption:
      'Год 700 — исламский мир уже главная сила от Атлантики почти до Центральной Азии: Омейяды в Дамаске, Персии нет, Византия сжалась, Китай при Тан (и У Цзэтянь) на подъёме. Европа — королевства и майордомы; до Гибралтара и Испании рукой подать.',
    essay: year700Ru,
    imageAlt: 'Реконструированная политическая карта мира на 700 год н. э.',
  },
  800: {
    title: '800 н. э. — ближайшая карта: 750',
    caption:
      'Год 800 запоминают по Рождеству в Святом Петре: папа Лев III коронует Карла Великого императором Запада. Византия не признаёт; Багдад Харуна ар-Рашида смотрит со стороны. Три «центра» на одной карте — Ахен/Рим, Константинополь, Багдад.',
    essay: year800Ru,
    imageAlt: 'Политическая реконструкция мира 750 года н. э. для шага 800',
  },
  900: {
    title: '900 н. э.',
    caption:
      'Год 900 — век викингов ещё не кончился, но большие империи сыплются: Каролингов нет как единства, Тан доживает, Багдад правит больше по имени. На окраинах собираются Уэссекс, Саманиды, русь Олега, мадьяры.',
    essay: year900Ru,
    imageAlt: 'Реконструированная политическая карта мира на 900 год н. э.',
  },
  1000: {
    title: '1000 н. э. — ближайшая карта: 900',
    caption:
      'Год 1000 — Оттон III в Гнезно; Иштван король Венгрии; Киев уже крещёный; Лейф Эрикссон у берега Винланда; конец света не наступает.',
    essay: year1000Ru,
    imageAlt: 'Политическая реконструкция мира 900 года н. э. для шага 1000',
  },
  1100: {
    title: '1100 н. э.',
    caption:
      'Год 1100 — Балдуина коронуют в Вифлееме; в Англии стрела убивает Вильгельма Рыжего; на Руси съезд в Уветичах; в Китае на престол садится Хуэй-цзун.',
    essay: year1100Ru,
    imageAlt: 'Схематическая политическая реконструкция мира на 1100 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1200: {
    title: '1200 н. э.',
    caption:
      'Год 1200 — Иннокентий III на пике; Четвёртый крестовый поход ещё в проповеди; Тэмуджин уже собрал монголов; на Руси Всеволод Большое Гнездо.',
    essay: year1200Ru,
    imageAlt: 'Политическая реконструкция мира 1200 года, предоставленная основателем',
    sourceShort: 'Реконструкция основателя',
    sourceOrg: 'Политическая реконструкция, предоставленная основателем',
    license: 'Изображение основателя',
  },
  1300: {
    title: '1300 н. э.',
    caption:
      'Год 1300 — папский юбилей в Риме; Филипп Красивый уже давит церковь; Осман кусает византийский край; Монгольская империя ещё огромная, но уже осколки.',
    essay: year1300Ru,
    imageAlt: 'Схематическая политическая реконструкция мира на 1300 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1400: {
    title: '1400 н. э. — ближайшая карта: 1500',
    caption:
      'Год 1400 — Тимур прёт на Сирию; в Европе два папы и Столетняя война; Москва Василия I между Ордой и Литвой; в Китае Чжу Ди бьётся за престол Мин.',
    essay: year1400Ru,
    imageAlt: 'Реконструкция мира 1500 года как ближайший лист для 1400',
  },
  1500: {
    title: '1500 н. э.',
    caption:
      'Год 1500 — Кабрал «находит» Бразилию по пути в Индию; Иван III бьёт Литву на Ведроши; в Италии французы и герцоги режутся за города; Реформации ещё нет.',
    essay: year1500Ru,
    imageAlt: 'Политическая реконструкция главных стран мира в 1500 году',
  },
  1600: {
    title: '1600 н. э. — ближайшая карта: 1648',
    caption:
      'Год 1600 — Япония заканчивает гражданские войны при Сэкигахаре; Англия выдаёт хартию Ост-Индской компании; в Риме жгут Бруно; в Москве Борис Годунов — и страна ещё не знает про голод и Смуту.',
    essay: year1600Ru,
    imageAlt: 'Политическая реконструкция мира 1648 года для шага 1600',
  },
  1700: {
    title: '1700 н. э.',
    caption:
      'Год 1700 — начинается Северная война; под Нарвой шведы бьют русских; умирает последний испанский Габсбург — Европа готовится делить империю; Пётр уже нацелен на Балтику.',
    essay: year1700Ru,
    imageAlt: 'Схематическая политическая реконструкция мира на 1700 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1800: {
    title: '1800 н. э.',
    caption:
      'Год 1800 — Наполеон ещё консул: Маренго почти проигран и выигран в один день; столица США переезжает в Вашингтон; Павел I ссорится с союзниками и тянется к Бонапарту.',
    essay: year1800Ru,
    imageAlt: 'Схематическая политическая реконструкция мира на 1800 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1900: {
    title: '1900 н. э.',
    caption:
      'Год 1900 — «боксёры» в Китае и осада посольств; восемь держав берут Пекин; в Южной Африке англо-бурская война; в Париже метро и цеппелин, у Планка — квант.',
    essay: year1900Ru,
    imageAlt: 'Схематическая политическая реконструкция мира на 1900 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  2000: {
    title: '2000 н. э. — ближайшая карта: современные контуры',
    caption:
      'Нет хороплета 2000 года в этом семействе атласа. Заливка стран — современная геометрия BlankMap-World / Natural Earth, поэтому видны государства после 2000 года (включая Южный Судан, 2011). Помеченный пробел относительно разведывательного листа июня 2000-го.',
    imageAlt: 'Современная заливка стран как ближайший лист атласа для шага 2000',
  },
  2020: {
    title: '2020-е — современные контуры',
    caption:
      'Полигоны стран в общественном достоянии (BlankMap-World / Natural Earth), раскрашенные в том же языке атласа: бежевая суша, мягкое море. Мелкомасштабная современная основа, не живой сервис границ. Спорные линии нарисованы одним способом, чтобы карту вообще можно было нарисовать.',
    imageAlt: 'Современная карта стран в общественном достоянии с цветами регионов в стиле атласа',
  },
};

const captionsPl: Record<number, BorderFrameCopy> = {
  1: {
    title: '1 n.e. — początek naszej ery',
    caption:
      'Rok 1 n.e. — dla ówczesnych po prostu rok od założenia Rzymu i rok cesarza Pinga; August trzyma Morze Śródziemne, Han — Państwo Środka; między nimi jedwab i Partia.',
    essay: year1Pl,
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 1 n.e.',
  },
  100: {
    title: '100 n.e.',
    caption:
      'II wiek — rzymski „złoty wiek” od Trajana do Marka Aureliusza i załamanie na Kommodusie; dżuma antonińska; w Chinach Wschodnia Han pod koniec pęka (Żółte Turbany).',
    essay: year100Pl,
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 100 n.e.',
  },
  200: {
    title: '200 n.e.',
    caption:
      'Rok 200 — już nie spokojne antyczne południe: imperia jeszcze stoją, ale wewnątrz skrzypi. Rzym Septymiusza Sewera po partyjskich wyprawach i dżumie; Chiny w przededniu Trójkrólestwa po Guandu; Partia dogorywa do Sasanidów. Na zewnątrz ciszej, niż się wydaje.',
    essay: year200Pl,
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 200 n.e.',
  },
  300: {
    title: '300 n.e.',
    caption:
      'Rok 300 — tetrarchia Dioklecjana; Sasanidzi w Persji; Jin w Chinach już gryzie sama siebie; chrześcijan wielu — za trzy lata zacznie się Wielkie Prześladowanie.',
    essay: year300Pl,
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 300 n.e.',
  },
  400: {
    title: '400 n.e.',
    caption:
      'Rok 400 — imperium już dwa: Honoriusz na Zachodzie, Arkadiusz na Wschodzie; Goci wewnątrz; do Alaryka w Rzymie dziesięć lat; chrześcijaństwo oficjalnie od 380.',
    essay: year400Pl,
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 400 n.e.',
  },
  500: {
    title: '500 n.e.',
    caption:
      'Rok 500 — Teodoryk w Rawennie; Frankowie Chlodwiga już ochrzczeni; Konstantynopol gromadzi skarbiec dla Justyniana; Chiny przecięte, północ zbiera Północna Wei.',
    essay: year500Pl,
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 500 n.e.',
  },
  600: {
    title: '600 n.e. — najbliższa mapa: 500',
    caption:
      'Rok 600 — już średniowieczny kadr: Zachodniego Cesarstwa Rzymskiego nie ma ponad wiek; na wschodzie Rzym jeszcze się trzyma (Maurycjusz), ale za dwa lata świat szarpnie tak, że przerysuje pół mapy. Longobardowie we Włoszech, Frankowie w strzępach, Sui dopiero co zebrała Chiny; w Mekce jeszcze cichy rok handlowy.',
    essay: year600Pl,
    imageAlt: 'Rekonstrukcja polityczna świata z 500 n.e. użyta dla kroku 600',
  },
  700: {
    title: '700 n.e.',
    caption:
      'Rok 700 — świat islamski jest już główną siłą od Atlantyku niemal po Azję Środkową: Umajjadzi w Damaszku, Persji nie ma, Bizancjum się skurczyło, Chiny za Tangów (i Wu Zetian) w rozkwicie. Europa — królestwa i majordomowie; do Gibraltaru i Hiszpanii rzut beretem.',
    essay: year700Pl,
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 700 n.e.',
  },
  800: {
    title: '800 n.e. — najbliższa mapa: 750',
    caption:
      'Rok 800 zapamiętano po Bożym Narodzeniu w Świętym Piotrze: papież Leon III koronuje Karola Wielkiego cesarzem Zachodu. Bizancjum nie uznaje; Bagdad Haruna ar-Raszida patrzy z boku. Trzy „centra” na jednej mapie — Akwizgran/Rzym, Konstantynopol, Bagdad.',
    essay: year800Pl,
    imageAlt: 'Rekonstrukcja polityczna świata z 750 n.e. użyta dla kroku 800',
  },
  900: {
    title: '900 n.e.',
    caption:
      'Rok 900 — wiek wikingów jeszcze się nie skończył, ale wielkie imperia sypią się: Karolingów nie ma jako jedności, Tang dogorywa, Bagdad rządzi bardziej z nazwy. Na obrzeżach zbierają się Wessex, Samanidzi, Ruś Olega, Madziarzy.',
    essay: year900Pl,
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 900 n.e.',
  },
  1000: {
    title: '1000 n.e. — najbliższa mapa: 900',
    caption:
      'Rok 1000 — Otton III w Gnieźnie; Stefan król Węgier; Kijów już ochrzczony; Leif Eriksson u brzegu Winlandii; koniec świata nie nadchodzi.',
    essay: year1000Pl,
    imageAlt: 'Rekonstrukcja polityczna świata z 900 n.e. użyta dla kroku 1000',
  },
  1100: {
    title: '1100 n.e.',
    caption:
      'Rok 1100 — Baldwina koronują w Betlejem; w Anglii strzała zabija Wilhelma Rudego; na Rusi zjazd w Uwieticzach; w Chinach na tron wstępuje Huizong.',
    essay: year1100Pl,
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1100 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1200: {
    title: '1200 n.e.',
    caption:
      'Rok 1200 — Innocenty III na szczycie; Czwarta krucjata jeszcze w kazaniu; Temudżyn już zebrał Mongołów; na Rusi Wsiewołod Wielkie Gniazdo.',
    essay: year1200Pl,
    imageAlt: 'Dostarczona przez założyciela rekonstrukcja polityczna świata w roku 1200',
    sourceShort: 'Rekonstrukcja założyciela',
    sourceOrg: 'Rekonstrukcja polityczna dostarczona przez założyciela',
    license: 'Obraz dostarczony przez założyciela',
  },
  1300: {
    title: '1300 n.e.',
    caption:
      'Rok 1300 — papieski jubileusz w Rzymie; Filip Piękny już ugniata kościół; Osman gryzie bizantyński skraj; Imperium Mongolskie jeszcze ogromne, ale już odłamki.',
    essay: year1300Pl,
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1300 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1400: {
    title: '1400 n.e. — najbliższa mapa: 1500',
    caption:
      'Rok 1400 — Timur pcha się na Syrię; w Europie dwóch papieży i wojna stuletnia; Moskwa Wasyla I między Ordą a Litwą; w Chinach Zhu Di bije się o tron Mingów.',
    essay: year1400Pl,
    imageAlt: 'Rekonstrukcja świata z 1500 jako najbliższy arkusz dla 1400',
  },
  1500: {
    title: '1500 n.e.',
    caption:
      'Rok 1500 — Cabral «znajduje» Brazylię w drodze do Indii; Iwan III bije Litwę nad Wiedroszą; we Włoszech Francuzi i książęta tną się o miasta; Reformacji jeszcze nie ma.',
    essay: year1500Pl,
    imageAlt: 'Rekonstrukcja polityczna głównych krajów świata w 1500',
  },
  1600: {
    title: '1600 n.e. — najbliższa mapa: 1648',
    caption:
      'Rok 1600 — Japonia kończy wojny domowe pod Sekigaharą; Anglia wydaje kartę Kompanii Wschodnioindyjskiej; w Rzymie palą Bruno; w Moskwie Borys Godunow — a kraj jeszcze nie wie o głodzie i Smutcie.',
    essay: year1600Pl,
    imageAlt: 'Rekonstrukcja polityczna świata z 1648 użyta dla kroku 1600',
  },
  1700: {
    title: '1700 n.e.',
    caption:
      'Rok 1700 — zaczyna się wojna północna; pod Narwą Szwedzi biją Rosjan; umiera ostatni hiszpański Habsburg — Europa szykuje się dzielić imperium; Piotr już wycelowany w Bałtyk.',
    essay: year1700Pl,
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1700 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1800: {
    title: '1800 n.e.',
    caption:
      'Rok 1800 — Napoleon wciąż konsul: Marengo prawie przegrane i wygrane w jeden dzień; stolica USA przenosi się do Waszyngtonu; Paweł I kłóci się z sojusznikami i ciągnie ku Bonaparteemu.',
    essay: year1800Pl,
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1800 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1900: {
    title: '1900 n.e.',
    caption:
      'Rok 1900 — „bokserzy” w Chinach i oblężenie poselstw; osiem mocarstw bierze Pekin; w Afryce Południowej wojna burska; w Paryżu metro i zeppelin, u Plancka — kwant.',
    essay: year1900Pl,
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1900 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  2000: {
    title: '2000 n.e. — najbliższa mapa: współczesne kontury',
    caption:
      'Brak choroplethu 2000 w tej rodzinie atlasu. Wypełnienia państw to współczesna geometria BlankMap-World / Natural Earth, więc widać państwa po 2000 (w tym Sudan Południowy, 2011). Oznaczona luka wobec arkusza wywiadowczego z czerwca 2000.',
    imageAlt: 'Współczesne wypełnienia państw jako najbliższy arkusz atlasu dla kroku 2000',
  },
  2020: {
    title: 'Lata 2020. — współczesne kontury',
    caption:
      'Poligony państw w domenie publicznej (BlankMap-World / Natural Earth), pokolorowane w tym samym języku atlasu: płowa ziemia, miękkie morze. Współczesna podstawa w małej skali, nie żywy serwis granic. Sporne linie narysowano jednym sposobem, żeby mapę w ogóle dało się narysować.',
    imageAlt: 'Współczesna mapa państw w domenie publicznej z kolorami regionów w stylu atlasu',
  },
};

const captionsLv: Record<number, BorderFrameCopy> = {
  1: {
    title: '1. m.ē. — mūsu ēras sākums',
    caption:
      '1. gads m.ē. — laikabiedriem vienkārši gads no Romas dibināšanas un imperatora Pina gads; Augusts tur Vidusjūru, Haņi — Debesu valstību; starp tiem zīds un Partija.',
    essay: year1Lv,
    imageAlt: 'Rekonstruēta pasaules politiskā karte 1. gadam m.ē.',
  },
  100: {
    title: '100. m.ē.',
    caption:
      'II gadsimts — romiešu „zelta laikmets” no Trajāna līdz Markam Aurēlijam un lūzums pie Komoda; Antonīnu mēris; Ķīnā Austrumu Haņi līdz beigām plīst (Dzeltenie lakati).',
    essay: year100Lv,
    imageAlt: 'Rekonstruēta pasaules politiskā karte 100. gadam m.ē.',
  },
  200: {
    title: '200. m.ē.',
    caption:
      '200. gads — vairs ne mierīgs antīkais pusdienlaiks: impērijas vēl stāv, bet iekšā čīkst. Septīmija Sevēra Roma pēc partiešu karagājieniem un mēra; Ķīna Trīs valstību priekšvakarā pēc Guandu; Partija nodzīvo līdz Sasānīdiem. Ārpusē klusāk, nekā šķiet.',
    essay: year200Lv,
    imageAlt: 'Rekonstruēta pasaules politiskā karte 200. gadam m.ē.',
  },
  300: {
    title: '300. m.ē.',
    caption:
      '300. gads — Diokletiāna tetrarhija; Sasānīdi Persijā; Dzjiņ Ķīnā jau grauž sevi; kristiešu daudz — pēc trim gadiem sāksies Lielā vajāšana.',
    essay: year300Lv,
    imageAlt: 'Rekonstruēta pasaules politiskā karte 300. gadam m.ē.',
  },
  400: {
    title: '400. m.ē.',
    caption:
      '400. gads — impērija jau divas: Honorijs Rietumos, Arkādijs Austrumos; goti iekšā; līdz Alariham Romā desmit gadi; kristietība oficiāli no 380.',
    essay: year400Lv,
    imageAlt: 'Rekonstruēta pasaules politiskā karte 400. gadam m.ē.',
  },
  500: {
    title: '500. m.ē.',
    caption:
      '500. gads — Teodorihs Ravennā; Hlodviga franki jau kristīti; Konstantinopole krāj kasi Justiniānam; Ķīna pārdalīta, ziemeļus savāc Ziemeļu Vei.',
    essay: year500Lv,
    imageAlt: 'Rekonstruēta pasaules politiskā karte 500. gadam m.ē.',
  },
  600: {
    title: '600. m.ē. — tuvākā karte: 500',
    caption:
      '600. gads — jau viduslaiku kadrs: Rietumu Romas impērijas nav vairāk nekā gadsimtu; austrumos Roma vēl turas (Maurīcijs), bet pēc diviem gadiem pasaule rāvsies tā, ka pārzīmēs pusi kartes. Longobardi Itālijā, franki gabalos, Sui tikko savākusi Ķīnu; Mekā vēl kluss tirdzniecības gads.',
    essay: year600Lv,
    imageAlt: 'Pasaules politiskā rekonstrukcija no 500. gada m.ē. 600. soļa vietā',
  },
  700: {
    title: '700. m.ē.',
    caption:
      'Gads 700 — islāma pasaule jau ir galvenais spēks no Atlantijas gandrīz līdz Centrālāzijai: Omeijadi Damaskā, Persijas vairs nav, Bizantija sarukusi, Ķīna Tanu dinastijas (un Vu Dzetiaņas) uzplaukumā. Eiropa — karaļvalstis un majordomi; līdz Gibraltāram un Spānijai — rokas stiepiena attālumā.',
    essay: year700Lv,
    imageAlt: 'Rekonstruēta pasaules politiskā karte 700. gadam m.ē.',
  },
  800: {
    title: '800. m.ē. — tuvākā karte: 750',
    caption:
      'Gadu 800 atceras pēc Ziemassvētkiem Svētajā Pēterī: pāvests Leons III kronē Kārli Lielo par Rietumu imperatoru. Bizantija neatzīst; Bagdāde Haruna ar-Rašīda laikā skatās no malas. Trīs «centri» vienā kartē — Āhene/Roma, Konstantinopole, Bagdāde.',
    essay: year800Lv,
    imageAlt: 'Pasaules politiskā rekonstrukcija no 750. gada m.ē. 800. soļa vietā',
  },
  900: {
    title: '900. m.ē.',
    caption:
      'Gads 900 — vikingu laikmets vēl nav beidzies, bet lielās impērijas irt: Karolingi vairs nav vienība, Tanu dinastija nīkst, Bagdāde valda vairāk pēc vārda. Malās sapulcējas Veseksa, Sāmānīdi, Oļega Krievzeme, madjari.',
    essay: year900Lv,
    imageAlt: 'Rekonstruēta pasaules politiskā karte 900. gadam m.ē.',
  },
  1000: {
    title: '1000. m.ē. — tuvākā karte: 900',
    caption:
      'Gads 1000 — Oto III Gņezno; Ištvanas Ungārijas karalis; Kijeva jau kristīta; Leifs Eriksons pie Vinlandes krasta; pasaules gals neiestājas.',
    essay: year1000Lv,
    imageAlt: 'Pasaules politiskā rekonstrukcija no 900. gada m.ē. 1000. soļa vietā',
  },
  1100: {
    title: '1100. m.ē.',
    caption:
      'Gads 1100 — Baldvinu kronē Betlēmē; Anglijā bulta nogalina Vilhelmu Sarkano; Krievzemē sapulce Uvetičos; Ķīnā tronī kāpj Hueidzuns.',
    essay: year1100Lv,
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1100. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1200: {
    title: '1200. m.ē.',
    caption:
      'Gads 1200 — Inokentijs III virsotnē; Ceturtais krusta karš vēl sludināšanā; Temudžins jau savācis mongoļus; Krievzemē Vsevolods Lielā Ligzda.',
    essay: year1200Lv,
    imageAlt: 'Dibinātāja piegādāta politiskā rekonstrukcija pasaulei 1200. gadā',
    sourceShort: 'Dibinātāja rekonstrukcija',
    sourceOrg: 'Dibinātāja piegādāta politiskā rekonstrukcija',
    license: 'Dibinātāja piegādāts attēls',
  },
  1300: {
    title: '1300. m.ē.',
    caption:
      'Gads 1300 — pāvesta jubileja Romā; Filips Skaistais jau spiež baznīcu; Osmans kož bizantiešu malu; Mongoļu impērija vēl milzīga, bet jau lauskas.',
    essay: year1300Lv,
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1300. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1400: {
    title: '1400. m.ē. — tuvākā karte: 1500',
    caption:
      'Gads 1400 — Timurs spiežas uz Sīriju; Eiropā divi pāvesti un Simtgadu karš; Vasilija I Maskava starp Ordu un Lietuvu; Ķīnā Džu Di cīnās par Minu troni.',
    essay: year1400Lv,
    imageAlt: '1500. gada pasaules rekonstrukcija kā tuvākā lapa 1400. gadam',
  },
  1500: {
    title: '1500. m.ē.',
    caption:
      'Gads 1500 — Kabrals «atrod» Brazīliju ceļā uz Indiju; Ivans III sit Lietuvu pie Vedrošas; Itālijā franči un hercogi griežas par pilsētām; Reformācijas vēl nav.',
    essay: year1500Lv,
    imageAlt: 'Galveno pasaules valstu politiskā rekonstrukcija 1500. gadā',
  },
  1600: {
    title: '1600. m.ē. — tuvākā karte: 1648',
    caption:
      'Gads 1600 — Japāna beidz pilsoņu karus pie Sekigaharas; Anglija izsniedz Austrumindijas kompānijas hartu; Romā dedzina Bruno; Maskavā Boriss Godunovs — un zeme vēl nezina par badu un Juku laiku.',
    essay: year1600Lv,
    imageAlt: 'Pasaules politiskā rekonstrukcija no 1648. gada 1600. soļa vietā',
  },
  1700: {
    title: '1700. m.ē.',
    caption:
      'Gads 1700 — sākas Ziemeļu karš; pie Narvas zviedri sit krievus; mirst pēdējais spāņu Habsburgs — Eiropa gatavojas dalīt impēriju; Pēteris jau mērķēts uz Baltiju.',
    essay: year1700Lv,
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1700. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1800: {
    title: '1800. m.ē.',
    caption:
      'Gads 1800 — Napoleons vēl konsuls: Marengo gandrīz zaudēta un uzvarēta vienā dienā; ASV galvaspilsēta pārcelās uz Vašingtonu; Pāvils I strīdas ar sabiedrotajiem un tiecas pie Bonaparta.',
    essay: year1800Lv,
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1800. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1900: {
    title: '1900. m.ē.',
    caption:
      'Gads 1900 — «bokseri» Ķīnā un sūtniecību aplenkums; astoņas lielvalstis ņem Pekinu; Dienvidāfrikā angļu–būru karš; Parīzē metro un cepelīns, Plankam — kvants.',
    essay: year1900Lv,
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1900. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  2000: {
    title: '2000. m.ē. — tuvākā karte: mūsdienu kontūras',
    caption:
      'Nav 2000. gada horoplēta šajā atlanta saimē. Valstu aizpildījums ir mūsdienu BlankMap-World / Natural Earth ģeometrija, tāpēc redzamas valstis pēc 2000. gada (tostarp Dienvidsudāna, 2011). Marķēts iztrūkums pret 2000. gada jūnija izlūkošanas lapu.',
    imageAlt: 'Mūsdienu valstu aizpildījums kā tuvākā atlanta lapa 2000. solim',
  },
  2020: {
    title: '2020. gadi — mūsdienu kontūras',
    caption:
      'Valstu daudzstūri sabiedriskajā īpašumā (BlankMap-World / Natural Earth), iekrāsoti tajā pašā atlanta valodā: dzeltenīgi brūna sauszeme, maiga jūra. Maza mēroga mūsdienu pamats, ne dzīvs robežu serviss. Strīdīgās līnijas uzzīmētas vienā veidā, lai karti vispār varētu uzzīmēt.',
    imageAlt: 'Mūsdienu sabiedriskā īpašuma valstu karte ar atlanta stila reģionu krāsām',
  },
};

const page: Record<Locale, BorderHistoryPage> = {
  en: pageEn,
  ru: pageRu,
  pl: pagePl,
  lv: pageLv,
};

const captions: Record<Locale, Record<number, BorderFrameCopy>> = {
  en: captionsEn,
  ru: captionsRu,
  pl: captionsPl,
  lv: captionsLv,
};

export type BorderFrame = BorderFrameMeta & BorderFrameCopy;

export function getBorderHistoryPage(locale: Locale): BorderHistoryPage {
  return page[locale];
}

export function getBorderHistoryFrames(locale: Locale): BorderFrame[] {
  return borderHistoryFrames.map((meta) => {
    const copy = captions[locale][meta.year] ?? captions.en[meta.year];
    return {
      ...meta,
      ...copy,
      sourceShort: copy.sourceShort ?? meta.sourceShort,
      sourceOrg: copy.sourceOrg ?? meta.sourceOrg,
      license: copy.license ?? meta.license,
    };
  });
}
