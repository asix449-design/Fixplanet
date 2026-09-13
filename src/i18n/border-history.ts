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
      'Successor kingdoms in the west, Sasanian Iran, and Northern/Southern China. The map is a published reconstruction (CC BY-SA), not a treaty atlas.',
    imageAlt: 'Reconstructed world political map for 500 CE',
  },
  600: {
    title: '600 CE — nearest map: 500',
    caption:
      'No matching-style full-world political sheet for 600 in this atlas family. We show the 500 reconstruction and mark the century as a gap rather than paste a terrain map or invent Sui/Byzantine outlines.',
    imageAlt: 'World political reconstruction dated 500 CE, used for the 600 step',
  },
  700: {
    title: '700 CE',
    caption:
      'Umayyad expansion, Tang China, and a post-Roman west. A world reconstruction of major states — still silent on most Indigenous polities.',
    imageAlt: 'Reconstructed world political map for 700 CE',
  },
  800: {
    title: '800 CE — nearest map: 750',
    caption:
      'No 800 CE world plate in the same flat atlas family. FamilyPedia’s 750 reconstruction (Umayyad, Tang, Frankish west) is the nearest matching-style sheet. A labeled gap, not an invented 800.',
    imageAlt: 'World political reconstruction dated 750 CE, used for the 800 step',
  },
  900: {
    title: '900 CE',
    caption:
      'Fragmented caliphates, a new Byzantine recovery, and Five Dynasties China. Colours mark large named states, not every duchy or steppe confederation.',
    imageAlt: 'Reconstructed world political map for 900 CE',
  },
  1000: {
    title: '1000 CE — nearest map: 900',
    caption:
      'No free 1000 CE world sheet in this atlas family. We show the 900 reconstruction and say so. Do not read it as a millennial snapshot.',
    imageAlt: 'World political reconstruction dated 900 CE, used for the 1000 step',
  },
  1100: {
    title: '1100 CE',
    caption:
      'Exact year 1100, reconstructed by Fix Planet from open GeoJSON (aourednik historical-basemaps, GPL-3.0). Not the OER 1200 teaching map and not an engraving. Modern coastlines; schematic / WIP borders.',
    imageAlt: 'Schematic world political reconstruction for 1100 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1200: {
    title: '1200 CE',
    caption:
      'On the eve of the Mongol explosion: a founder-supplied political reconstruction of the world in 1200. A reconstruction, not a cadastral survey.',
    imageAlt: 'Founder-supplied political reconstruction of the world in 1200',
    sourceShort: 'Founder reconstruction',
    sourceOrg: 'Founder-supplied political reconstruction',
    license: 'Founder-supplied image',
  },
  1300: {
    title: '1300 CE',
    caption:
      'Exact year 1300, reconstructed by Fix Planet from open GeoJSON (aourednik historical-basemaps, GPL-3.0). Not the OER 1200 teaching map and not an engraving. Modern coastlines; schematic / WIP borders.',
    imageAlt: 'Schematic world political reconstruction for 1300 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1400: {
    title: '1400 CE — nearest map: 1500',
    caption:
      'No free 1400 world political sheet in this set. We show the 1500 reconstruction and mark the century as a gap. Timur, Ming, and late medieval Europe are not invented here.',
    imageAlt: '1500 world political reconstruction used as the nearest sheet for 1400',
  },
  1500: {
    title: '1500 CE',
    caption:
      'Just after 1492 contact: Iberian footholds, a still-sovereign Americas interior, Ming China, and Ottoman expansion. Main countries only — not every kingdom.',
    imageAlt: 'World political reconstruction of main countries in 1500',
  },
  1600: {
    title: '1600 CE — nearest map: 1648',
    caption:
      'No matching-style 1600 world plate. Babelia’s 1648 reconstruction (Peace of Westphalia year) is the nearest full-world political sheet — not a colonial-claims overlay on modern borders.',
    imageAlt: 'World political reconstruction of 1648, used for the 1600 step',
  },
  1700: {
    title: '1700 CE',
    caption:
      'Reconstructed by Fix Planet from aourednik GPL GeoJSON — not a copy of the Reddit plate. Exact year 1700. Large labels mark Russia, Qing, Safavid, Mughal and other major polities. Modern coastlines; schematic / WIP borders.',
    imageAlt: 'Schematic world political reconstruction for 1700 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1800: {
    title: '1800 CE',
    caption:
      'Exact year 1800, reconstructed by Fix Planet from open GeoJSON (aourednik historical-basemaps, GPL-3.0). Not the 1815 Congress of Vienna sheet. Modern coastlines; schematic / WIP borders.',
    imageAlt: 'Schematic world political reconstruction for 1800 from aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1900: {
    title: '1900 CE',
    caption:
      'Exact year 1900, reconstructed by Fix Planet from open GeoJSON (aourednik historical-basemaps, GPL-3.0). Not the OER 1914 teaching map. Modern coastlines; schematic / WIP borders.',
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
      'Королевства-преемники на западе, Сасаниды, Северный и Южный Китай. Опубликованная реконструкция (CC BY-SA), не атлас договоров.',
    imageAlt: 'Реконструированная политическая карта мира на 500 год н. э.',
  },
  600: {
    title: '600 н. э. — ближайшая карта: 500',
    caption:
      'Нет мирового политического листа на 600 год в этом семействе атласа. Показываем реконструкцию 500 и помечаем век как пробел — не вставляем карту рельефа и не выдумываем контуры Суй и Византии.',
    imageAlt: 'Политическая реконструкция мира 500 года н. э. для шага 600',
  },
  700: {
    title: '700 н. э.',
    caption:
      'Омейядская экспансия, Тан и пост-римский запад. Мировая реконструкция крупных государств — без большинства коренных политий.',
    imageAlt: 'Реконструированная политическая карта мира на 700 год н. э.',
  },
  800: {
    title: '800 н. э. — ближайшая карта: 750',
    caption:
      'Нет мирового листа на 800 год в том же плоском семействе атласа. Реконструкция FamilyPedia 750 года (Омейяды, Тан, франкский запад) — ближайший лист того же стиля. Помеченный пробел, не выдуманный 800-й.',
    imageAlt: 'Политическая реконструкция мира 750 года н. э. для шага 800',
  },
  900: {
    title: '900 н. э.',
    caption:
      'Расколотые халифаты, византийское оживление, эпоха пяти династий. Цвета — крупные названные государства, не каждое герцогство.',
    imageAlt: 'Реконструированная политическая карта мира на 900 год н. э.',
  },
  1000: {
    title: '1000 н. э. — ближайшая карта: 900',
    caption:
      'Нет свободного мирового листа на 1000 год в этом семействе атласа. Показываем реконструкцию 900 и прямо об этом говорим. Это не снимок тысячного года.',
    imageAlt: 'Политическая реконструкция мира 900 года н. э. для шага 1000',
  },
  1100: {
    title: '1100 н. э.',
    caption:
      'Точный 1100 год: реконструкция Fix Planet по открытому GeoJSON (aourednik historical-basemaps, GPL-3.0). Не учебная карта OER 1200 и не гравюра. Современные берега; схема / границы WIP.',
    imageAlt: 'Схематическая политическая реконструкция мира на 1100 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1200: {
    title: '1200 н. э.',
    caption:
      'Накануне монгольского взрыва: политическая реконструкция мира 1200 года, предоставленная основателем. Реконструкция, не кадастр.',
    imageAlt: 'Политическая реконструкция мира 1200 года, предоставленная основателем',
    sourceShort: 'Реконструкция основателя',
    sourceOrg: 'Политическая реконструкция, предоставленная основателем',
    license: 'Изображение основателя',
  },
  1300: {
    title: '1300 н. э.',
    caption:
      'Точный 1300 год: реконструкция Fix Planet по открытому GeoJSON (aourednik historical-basemaps, GPL-3.0). Не учебная карта OER 1200 и не гравюра. Современные берега; схема / границы WIP.',
    imageAlt: 'Схематическая политическая реконструкция мира на 1300 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1400: {
    title: '1400 н. э. — ближайшая карта: 1500',
    caption:
      'В этом наборе нет свободного мирового листа на 1400 год. Показываем реконструкцию 1500 и помечаем век как пробел. Тимур, Мин и позднесредневековая Европа здесь не выдуманы.',
    imageAlt: 'Реконструкция мира 1500 года как ближайший лист для 1400',
  },
  1500: {
    title: '1500 н. э.',
    caption:
      'Сразу после контакта 1492 года: иберийские плацдармы, ещё суверенная внутренность Америк, Мин, османская экспансия. Только главные страны.',
    imageAlt: 'Политическая реконструкция главных стран мира в 1500 году',
  },
  1600: {
    title: '1600 н. э. — ближайшая карта: 1648',
    caption:
      'Нет мирового листа на 1600 год в том же стиле. Реконструкция Babelia 1648 года (год Вестфальского мира) — ближайший полный политический лист, не колониальная заливка по современным границам.',
    imageAlt: 'Политическая реконструкция мира 1648 года для шага 1600',
  },
  1700: {
    title: '1700 н. э.',
    caption:
      'Реконструкция Fix Planet по GPL GeoJSON aourednik — не копия reddit-листа. Точный 1700 год. Крупные подписи: Россия, Цин, Сефевиды, Моголы и другие крупные политии. Современные берега; схема / границы WIP.',
    imageAlt: 'Схематическая политическая реконструкция мира на 1700 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1800: {
    title: '1800 н. э.',
    caption:
      'Точный 1800 год: реконструкция Fix Planet по открытому GeoJSON (aourednik historical-basemaps, GPL-3.0). Не лист Венского конгресса 1815 года. Современные берега; схема / границы WIP.',
    imageAlt: 'Схематическая политическая реконструкция мира на 1800 год по GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1900: {
    title: '1900 н. э.',
    caption:
      'Точный 1900 год: реконструкция Fix Planet по открытому GeoJSON (aourednik historical-basemaps, GPL-3.0). Не учебная карта OER 1914 года. Современные берега; схема / границы WIP.',
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
      'Królestwa sukcesyjne na zachodzie, Sasanidzi, Chiny Północne i Południowe. Opublikowana rekonstrukcja (CC BY-SA), nie atlas traktatów.',
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 500 n.e.',
  },
  600: {
    title: '600 n.e. — najbliższa mapa: 500',
    caption:
      'Brak światowego arkusza politycznego na 600 w tej rodzinie atlasu. Pokazujemy rekonstrukcję z 500 i oznaczamy stulecie jako lukę — bez mapy terenu i bez wymyślania konturów Sui i Bizancjum.',
    imageAlt: 'Rekonstrukcja polityczna świata z 500 n.e. użyta dla kroku 600',
  },
  700: {
    title: '700 n.e.',
    caption:
      'Ekspansja Umajjadów, Tang i post-rzymski zachód. Światowa rekonstrukcja dużych państw — wciąż milcząca o większości organizmów rdzennych.',
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 700 n.e.',
  },
  800: {
    title: '800 n.e. — najbliższa mapa: 750',
    caption:
      'Brak arkusza światowego na 800 w tej samej płaskiej rodzinie atlasu. Rekonstrukcja FamilyPedia z 750 (Umajjadzi, Tang, zachodni Frankowie) to najbliższy arkusz w tym stylu. Oznaczona luka, nie wymyślony rok 800.',
    imageAlt: 'Rekonstrukcja polityczna świata z 750 n.e. użyta dla kroku 800',
  },
  900: {
    title: '900 n.e.',
    caption:
      'Rozbite kalifaty, bizantyjskie odbicie, Pięć Dynastii. Kolory to duże nazwane państwa, nie każde księstwo.',
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 900 n.e.',
  },
  1000: {
    title: '1000 n.e. — najbliższa mapa: 900',
    caption:
      'Brak wolnego arkusza światowego na rok 1000 w tej rodzinie atlasu. Pokazujemy rekonstrukcję z 900 i mówimy o tym wprost. To nie migawka roku tysięcznego.',
    imageAlt: 'Rekonstrukcja polityczna świata z 900 n.e. użyta dla kroku 1000',
  },
  1100: {
    title: '1100 n.e.',
    caption:
      'Dokładny rok 1100, rekonstrukcja Fix Planet z otwartego GeoJSON (aourednik historical-basemaps, GPL-3.0). To nie mapa OER z 1200 i nie rycina. Współczesne wybrzeża; schemat / granice WIP.',
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1100 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1200: {
    title: '1200 n.e.',
    caption:
      'W przededniu wybuchu mongolskiego: dostarczona przez założyciela rekonstrukcja polityczna świata w roku 1200. Rekonstrukcja, nie kataster.',
    imageAlt: 'Dostarczona przez założyciela rekonstrukcja polityczna świata w roku 1200',
    sourceShort: 'Rekonstrukcja założyciela',
    sourceOrg: 'Rekonstrukcja polityczna dostarczona przez założyciela',
    license: 'Obraz dostarczony przez założyciela',
  },
  1300: {
    title: '1300 n.e.',
    caption:
      'Dokładny rok 1300, rekonstrukcja Fix Planet z otwartego GeoJSON (aourednik historical-basemaps, GPL-3.0). To nie mapa OER z 1200 i nie rycina. Współczesne wybrzeża; schemat / granice WIP.',
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1300 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1400: {
    title: '1400 n.e. — najbliższa mapa: 1500',
    caption:
      'W tym zestawie nie ma wolnego światowego arkusza na 1400. Pokazujemy rekonstrukcję 1500 i oznaczamy stulecie jako lukę. Timur, Ming i późnośredniowieczna Europa nie są tu wymyślone.',
    imageAlt: 'Rekonstrukcja świata z 1500 jako najbliższy arkusz dla 1400',
  },
  1500: {
    title: '1500 n.e.',
    caption:
      'Tuż po kontakcie 1492: przyczółki iberyjskie, wciąż suwerenne wnętrze Ameryk, Ming, ekspansja osmańska. Tylko główne kraje.',
    imageAlt: 'Rekonstrukcja polityczna głównych krajów świata w 1500',
  },
  1600: {
    title: '1600 n.e. — najbliższa mapa: 1648',
    caption:
      'Brak arkusza światowego na 1600 w tym stylu. Rekonstrukcja Babelii z 1648 (rok pokoju westfalskiego) to najbliższy pełny arkusz polityczny — nie warstwa roszczeń kolonialnych na współczesnych granicach.',
    imageAlt: 'Rekonstrukcja polityczna świata z 1648 użyta dla kroku 1600',
  },
  1700: {
    title: '1700 n.e.',
    caption:
      'Rekonstrukcja Fix Planet z GeoJSON aourednik (GPL) — nie kopia płyty z Reddita. Dokładny rok 1700. Duże podpisy: Rosja, Qing, Safawidzi, Mogołowie i inne wielkie organizmy. Współczesne wybrzeża; schemat / granice WIP.',
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1700 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1800: {
    title: '1800 n.e.',
    caption:
      'Dokładny rok 1800, rekonstrukcja Fix Planet z otwartego GeoJSON (aourednik historical-basemaps, GPL-3.0). To nie arkusz Kongresu Wiedeńskiego z 1815. Współczesne wybrzeża; schemat / granice WIP.',
    imageAlt: 'Schematyczna rekonstrukcja polityczna świata na rok 1800 z GeoJSON aourednik',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1900: {
    title: '1900 n.e.',
    caption:
      'Dokładny rok 1900, rekonstrukcja Fix Planet z otwartego GeoJSON (aourednik historical-basemaps, GPL-3.0). To nie mapa OER z 1914. Współczesne wybrzeża; schemat / granice WIP.',
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
      'Pēcteču karaļvalstis rietumos, sasanīdi, Ziemeļu un Dienvidu Ķīna. Publicēta rekonstrukcija (CC BY-SA), ne līgumu atlants.',
    imageAlt: 'Rekonstruēta pasaules politiskā karte 500. gadam m.ē.',
  },
  600: {
    title: '600. m.ē. — tuvākā karte: 500',
    caption:
      'Nav pasaules politiskās lapas 600. gadam šajā atlanta saimē. Rādām 500. gada rekonstrukciju un gadsimtu atzīmējam kā iztrūkumu — bez reljefa kartes un bez izdomātām Sui un Bizantijas kontūrām.',
    imageAlt: 'Pasaules politiskā rekonstrukcija no 500. gada m.ē. 600. soļa vietā',
  },
  700: {
    title: '700. m.ē.',
    caption:
      'Omeijādu ekspansija, Tan un pēcrimas rietumi. Lielo valstu pasaules rekonstrukcija — joprojām klusa par lielāko daļu pirmiedzīvotāju politiju.',
    imageAlt: 'Rekonstruēta pasaules politiskā karte 700. gadam m.ē.',
  },
  800: {
    title: '800. m.ē. — tuvākā karte: 750',
    caption:
      'Nav 800. gada pasaules lapas tajā pašā plakanajā atlanta saimē. FamilyPedia 750. gada rekonstrukcija (Omeijādi, Tan, franku rietumi) ir tuvākā tā paša stila lapa. Marķēts iztrūkums, ne izdomāts 800. gads.',
    imageAlt: 'Pasaules politiskā rekonstrukcija no 750. gada m.ē. 800. soļa vietā',
  },
  900: {
    title: '900. m.ē.',
    caption:
      'Sadrumstalotie kalifāti, bizantiešu atveseļošanās, Piecu dinastiju Ķīna. Krāsas ir lielas nosauktas valstis, ne katra hercogiste.',
    imageAlt: 'Rekonstruēta pasaules politiskā karte 900. gadam m.ē.',
  },
  1000: {
    title: '1000. m.ē. — tuvākā karte: 900',
    caption:
      'Nav brīvas 1000. gada pasaules lapas šajā atlanta saimē. Rādām 900. gada rekonstrukciju un to sakām. Tā nav tūkstošgades momentuzņēmums.',
    imageAlt: 'Pasaules politiskā rekonstrukcija no 900. gada m.ē. 1000. soļa vietā',
  },
  1100: {
    title: '1100. m.ē.',
    caption:
      'Precīzs 1100. gads, Fix Planet rekonstrukcija no atvērta GeoJSON (aourednik historical-basemaps, GPL-3.0). Tā nav OER 1200. mācību karte un nav gravīra. Mūsdienu krasti; shēma / robežas WIP.',
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1100. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1200: {
    title: '1200. m.ē.',
    caption:
      'Pirms mongoļu sprādziena: dibinātāja piegādāta politiskā rekonstrukcija pasaulei 1200. gadā. Rekonstrukcija, ne kadastrs.',
    imageAlt: 'Dibinātāja piegādāta politiskā rekonstrukcija pasaulei 1200. gadā',
    sourceShort: 'Dibinātāja rekonstrukcija',
    sourceOrg: 'Dibinātāja piegādāta politiskā rekonstrukcija',
    license: 'Dibinātāja piegādāts attēls',
  },
  1300: {
    title: '1300. m.ē.',
    caption:
      'Precīzs 1300. gads, Fix Planet rekonstrukcija no atvērta GeoJSON (aourednik historical-basemaps, GPL-3.0). Tā nav OER 1200. mācību karte un nav gravīra. Mūsdienu krasti; shēma / robežas WIP.',
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1300. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1400: {
    title: '1400. m.ē. — tuvākā karte: 1500',
    caption:
      'Šajā komplektā nav brīvas 1400. gada pasaules lapas. Rādām 1500. rekonstrukciju un gadsimtu atzīmējam kā iztrūkumu. Timurs, Min un vēlie viduslaiki šeit nav izdomāti.',
    imageAlt: '1500. gada pasaules rekonstrukcija kā tuvākā lapa 1400. gadam',
  },
  1500: {
    title: '1500. m.ē.',
    caption:
      'Tūlīt pēc 1492. kontakta: ibēriešu placdarmi, joprojām suverēna Amerikas iekšiene, Min, osmaņu ekspansija. Tikai galvenās valstis.',
    imageAlt: 'Galveno pasaules valstu politiskā rekonstrukcija 1500. gadā',
  },
  1600: {
    title: '1600. m.ē. — tuvākā karte: 1648',
    caption:
      'Nav 1600. gada pasaules lapas tajā pašā stilā. Babelia 1648. gada rekonstrukcija (Vestfālenes miera gads) ir tuvākā pilnā politiskā lapa — ne koloniālo pretenziju slānis uz mūsdienu robežām.',
    imageAlt: 'Pasaules politiskā rekonstrukcija no 1648. gada 1600. soļa vietā',
  },
  1700: {
    title: '1700. m.ē.',
    caption:
      'Fix Planet rekonstrukcija no aourednik GPL GeoJSON — ne Reddit plates kopija. Precīzs 1700. gads. Lieli paraksti: Krievija, Cjinu, Sefevīdi, Mogoli un citas lielās politijas. Mūsdienu krasti; shēma / robežas WIP.',
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1700. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1800: {
    title: '1800. m.ē.',
    caption:
      'Precīzs 1800. gads, Fix Planet rekonstrukcija no atvērta GeoJSON (aourednik historical-basemaps, GPL-3.0). Tā nav 1815. gada Vīnes kongresa lapa. Mūsdienu krasti; shēma / robežas WIP.',
    imageAlt: 'Shēmātiska politiskā rekonstrukcija pasaulei 1800. gadā no aourednik GeoJSON',
    sourceShort: 'Ourednik',
    sourceOrg: 'Historical basemaps © André Ourednik et al.',
    license: 'GPL-3.0',
  },
  1900: {
    title: '1900. m.ē.',
    caption:
      'Precīzs 1900. gads, Fix Planet rekonstrukcija no atvērta GeoJSON (aourednik historical-basemaps, GPL-3.0). Tā nav OER 1914. mācību karte. Mūsdienu krasti; shēma / robežas WIP.',
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
