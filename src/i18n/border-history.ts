import {
  borderHistoryFrames,
  type BorderCoverage,
  type BorderFrameMeta,
} from '../data/border-history';
import type { Locale } from './config';

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
      'Rome in the Mediterranean, Han China in East Asia, Parthia between them. The Americas and much of Oceania are not drawn as states. This is a reconstruction of known polities, not a survey of every people.',
    imageAlt: 'Reconstructed world political map for 1 CE, public-domain Wikimedia sheet',
  },
  100: {
    title: '100 CE',
    caption:
      'The high Roman Empire, Kushan and Han worlds, and a still-open Afro-Eurasian interior. Lines are scholarly guesses about control, not fences on the ground.',
    imageAlt: 'Reconstructed world political map for 100 CE',
  },
  200: {
    title: '200 CE',
    caption:
      'Rome, Parthia/Sasanian prelude, and Han China after a century of strain. Blank land is not empty — it is unmapped as a state on this sheet.',
    imageAlt: 'Reconstructed world political map for 200 CE',
  },
  300: {
    title: '300 CE',
    caption:
      'A late-antique Afro-Eurasia: a divided Roman world taking shape, Sasanian Iran, and successor states in China. Treat colours as claims, not censuses.',
    imageAlt: 'Reconstructed world political map for 300 CE',
  },
  400: {
    title: '400 CE',
    caption:
      'After 376 and before 476: migration-era Europe, a Sasanian plateau, Gupta India, and a fragmented China. Many “borders” here are war fronts.',
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
    title: '1100 CE — nearest map: 1200',
    caption:
      'No matching-style 1100 world plate. The 1200 OER teaching map is the nearest full-world reconstruction in this series. Seljuk/Song-era lines are not invented here.',
    imageAlt: 'OER 1200 world map standing in for the 1100 century step',
  },
  1200: {
    title: '1200 CE',
    caption:
      'On the eve of the Mongol explosion: a full-world political teaching map from OER / World History Project. Still a classroom reconstruction, not a cadastral survey.',
    imageAlt: 'OER World History Project political map of the world in 1200',
  },
  1300: {
    title: '1300 CE — nearest map: 1200',
    caption:
      'No openly licensed full-world political map for 1300 that we can host. The 1200 OER sheet is the nearest world reconstruction. The Mongol century is therefore a labeled gap, not a drawn empire we invented.',
    imageAlt: 'OER 1200 world map standing in for the 1300 century step',
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
      'An illustrative early-colonial world: Mughal high-water mark, Qing consolidation, and Atlantic empires. Schematic, not a field survey of every frontier.',
    imageAlt: 'Illustrative world political map for 1700 CE',
  },
  1800: {
    title: '1800 CE — nearest map: 1815',
    caption:
      'Congress of Vienna world (1815), the nearest detailed free political sheet to 1800. Napoleonic redraws are already in; 1800 itself is the labeled gap.',
    imageAlt: 'Political world map for 1815 after the Congress of Vienna',
  },
  1900: {
    title: '1900 CE — nearest map: 1914',
    caption:
      'OER political world on the eve of the First World War (1914). Closer than inventing a 1900 choropleth. Empires still colour most of Africa and much of Asia.',
    imageAlt: 'OER political map of the world in 1914, used for the 1900 step',
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
      'Рим у Средиземного моря, Хань в Восточной Азии, Парфия между ними. Америка и большая часть Океании не нарисованы как государства. Это реконструкция известных политий, не перепись всех народов.',
    imageAlt: 'Реконструированная политическая карта мира на 1 год н. э.',
  },
  100: {
    title: '100 н. э.',
    caption:
      'Высокая Римская империя, кушанский и ханьский миры, ещё открытая внутренность Афроевразии. Линии — учёные оценки контроля, не заборы на земле.',
    imageAlt: 'Реконструированная политическая карта мира на 100 год н. э.',
  },
  200: {
    title: '200 н. э.',
    caption:
      'Рим, Парфия / канун Сасанидов и Хань после века напряжения. Пустая суша — не пустота, а отсутствие государственной заливки на этом листе.',
    imageAlt: 'Реконструированная политическая карта мира на 200 год н. э.',
  },
  300: {
    title: '300 н. э.',
    caption:
      'Поздняя античность: делится римский мир, Сасанидский Иран, государства-преемники в Китае. Цвета — притязания, не переписи.',
    imageAlt: 'Реконструированная политическая карта мира на 300 год н. э.',
  },
  400: {
    title: '400 н. э.',
    caption:
      'После 376-го и до 476-го: эпоха переселений в Европе, Сасаниды, Гупты, раздробленный Китай. Многие «границы» здесь — линии фронта.',
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
    title: '1100 н. э. — ближайшая карта: 1200',
    caption:
      'Нет мирового листа на 1100 год в том же стиле. Учебная карта OER 1200 года — ближайшая мировая реконструкция в этой серии. Линии эпохи сельджуков и Сун здесь не выдуманы.',
    imageAlt: 'Карта мира OER 1200 года вместо шага 1100',
  },
  1200: {
    title: '1200 н. э.',
    caption:
      'Накануне монгольского взрыва: мировая учебная карта OER / World History Project. Всё ещё реконструкция для класса, не кадастр.',
    imageAlt: 'Политическая карта мира 1200 года, World History Project / OER',
  },
  1300: {
    title: '1300 н. э. — ближайшая карта: 1200',
    caption:
      'Нет открытой мировой политической карты на 1300 год, которую мы можем разместить. Лист OER 1200 — ближайшая мировая реконструкция. Монгольский век помечен как пробел, не как нарисованная нами империя.',
    imageAlt: 'Карта мира OER 1200 года вместо шага 1300',
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
      'Иллюстративный раннеколониальный мир: пик Моголов, укрепление Цин, атлантические империи. Схема, не полевая съёмка каждой границы.',
    imageAlt: 'Иллюстративная политическая карта мира на 1700 год',
  },
  1800: {
    title: '1800 н. э. — ближайшая карта: 1815',
    caption:
      'Мир Венского конгресса (1815) — ближайший подробный свободный политический лист к 1800 году. Наполеоновские переделы уже на карте; сам 1800-й — помеченный пробел.',
    imageAlt: 'Политическая карта мира 1815 года после Венского конгресса',
  },
  1900: {
    title: '1900 н. э. — ближайшая карта: 1914',
    caption:
      'Политический мир OER накануне Первой мировой (1914). Честнее, чем выдумывать хороплет 1900 года. Империи всё ещё красят большую часть Африки и много Азии.',
    imageAlt: 'Политическая карта мира OER 1914 года для шага 1900',
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
      'Rzym nad Morzem Śródziemnym, Han we wschodniej Azji, Partia między nimi. Ameryki i większość Oceanii nie są narysowane jako państwa. To rekonstrukcja znanych organizmów, nie spis wszystkich ludów.',
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 1 n.e.',
  },
  100: {
    title: '100 n.e.',
    caption:
      'Wysokie cesarstwo rzymskie, świat Kuszanów i Han oraz wciąż otwarte wnętrze Afroeuroazji. Linie to naukowe zgadywanie kontroli, nie płoty w terenie.',
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 100 n.e.',
  },
  200: {
    title: '200 n.e.',
    caption:
      'Rzym, Partia / przedświt Sasanidów i Han po stuleciu napięcia. Pusty ląd to nie pustka — to brak warstwy państwowej na tym arkuszu.',
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 200 n.e.',
  },
  300: {
    title: '300 n.e.',
    caption:
      'Późny antyk: dzielący się świat rzymski, sasanidzki Iran, państwa sukcesyjne w Chinach. Kolory to roszczenia, nie spisy.',
    imageAlt: 'Zrekonstruowana mapa polityczna świata na rok 300 n.e.',
  },
  400: {
    title: '400 n.e.',
    caption:
      'Po 376 i przed 476: Europa wędrówek ludów, Sasanidzi, Guptowie, rozbita Chiny. Wiele „granic” to tu linie frontu.',
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
    title: '1100 n.e. — najbliższa mapa: 1200',
    caption:
      'Brak arkusza światowego na 1100 w tym stylu. Mapa dydaktyczna OER z 1200 to najbliższa rekonstrukcja świata w tej serii. Linii epoki Seldżuków i Song tu nie wymyślamy.',
    imageAlt: 'Mapa świata OER z 1200 jako zastępstwo kroku 1100',
  },
  1200: {
    title: '1200 n.e.',
    caption:
      'W przededniu wybuchu mongolskiego: światowa mapa dydaktyczna OER / World History Project. Nadal rekonstrukcja szkolna, nie kataster.',
    imageAlt: 'Polityczna mapa świata OER z roku 1200',
  },
  1300: {
    title: '1300 n.e. — najbliższa mapa: 1200',
    caption:
      'Nie mamy otwartej światowej mapy politycznej na 1300, którą możemy hostować. Arkusz OER 1200 to najbliższa rekonstrukcja świata. Wiek mongolski jest więc oznaczoną luką, nie narysowanym przez nas imperium.',
    imageAlt: 'Mapa świata OER z 1200 jako zastępstwo kroku 1300',
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
      'Ilustracyjny wczesnokolonialny świat: szczyt Mogołów, konsolidacja Qing, imperia atlantyckie. Schemat, nie pomiar każdej granicy.',
    imageAlt: 'Ilustracyjna mapa polityczna świata na rok 1700',
  },
  1800: {
    title: '1800 n.e. — najbliższa mapa: 1815',
    caption:
      'Świat Kongresu Wiedeńskiego (1815), najbliższy szczegółowy wolny arkusz polityczny do 1800. Przesunięcia napoleońskie już są; sam 1800 to oznaczona luka.',
    imageAlt: 'Polityczna mapa świata z 1815 po Kongresie Wiedeńskim',
  },
  1900: {
    title: '1900 n.e. — najbliższa mapa: 1914',
    caption:
      'Polityczny świat OER w przededniu I wojny (1914). Uczciwsze niż wymyślanie choroplethu 1900. Imperia wciąż kolorują większość Afryki i sporo Azji.',
    imageAlt: 'Polityczna mapa świata OER z 1914 dla kroku 1900',
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
      'Roma pie Vidusjūras, Haņu Ķīna Austrumāzijā, Partija pa vidu. Amerika un lielā daļa Okeānijas nav zīmētas kā valstis. Tā ir zināmo politiju rekonstrukcija, ne visu tautu uzskaite.',
    imageAlt: 'Rekonstruēta pasaules politiskā karte 1. gadam m.ē.',
  },
  100: {
    title: '100. m.ē.',
    caption:
      'Augstā Romas impērija, kušānu un Haņu pasaules, joprojām atvērtais Āfroeiropas iekšiene. Līnijas ir zinātniski minējumi par kontroli, ne žogi uz zemes.',
    imageAlt: 'Rekonstruēta pasaules politiskā karte 100. gadam m.ē.',
  },
  200: {
    title: '200. m.ē.',
    caption:
      'Roma, Partija / sasanīdu priekšvakars un Haņu Ķīna pēc gadsimta spriedzes. Tukšā sauszeme nav tukšums — tā ir valsts slāņa neesamība šajā lapā.',
    imageAlt: 'Rekonstruēta pasaules politiskā karte 200. gadam m.ē.',
  },
  300: {
    title: '300. m.ē.',
    caption:
      'Vēlā antīkā pasaule: dalās Romas pasaule, sasanīdu Irāna, pēcteču valstis Ķīnā. Krāsas ir pretenzijas, ne tautas skaitīšana.',
    imageAlt: 'Rekonstruēta pasaules politiskā karte 300. gadam m.ē.',
  },
  400: {
    title: '400. m.ē.',
    caption:
      'Pēc 376. un pirms 476.: tautu staigāšanas Eiropa, sasanīdi, Guptas, sašķelta Ķīna. Daudzas „robežas” šeit ir frontes.',
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
    title: '1100. m.ē. — tuvākā karte: 1200',
    caption:
      'Nav 1100. gada pasaules lapas tajā pašā stilā. OER 1200. gada mācību karte ir tuvākā pasaules rekonstrukcija šajā sērijā. Seldžuku un Sun laikmeta līnijas šeit nav izdomātas.',
    imageAlt: 'OER 1200. gada karte 1100. soļa vietā',
  },
  1200: {
    title: '1200. m.ē.',
    caption:
      'Pirms mongoļu sprādziena: OER / World History Project mācību karte visai pasaulei. Joprojām klases rekonstrukcija, ne kadastrs.',
    imageAlt: 'OER politiskā pasaules karte 1200. gadam',
  },
  1300: {
    title: '1300. m.ē. — tuvākā karte: 1200',
    caption:
      'Nav atklāti licencētas 1300. gada pasaules politiskās kartes, ko varam izvietot. OER 1200. lapa ir tuvākā pasaules rekonstrukcija. Mongoļu gadsimts tātad ir marķēts iztrūkums, ne mūsu zīmēta impērija.',
    imageAlt: 'OER 1200. gada karte 1300. soļa vietā',
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
      'Ilustratīva agrīnā koloniālā pasaule: Mogolu augstākais punkts, Cjinu nostiprināšanās, Atlantijas impērijas. Shēma, ne katras robežas uzmērījums.',
    imageAlt: 'Ilustratīva pasaules politiskā karte 1700. gadam',
  },
  1800: {
    title: '1800. m.ē. — tuvākā karte: 1815',
    caption:
      'Vīnes kongresa pasaule (1815), tuvākā detalizētā brīvā politiskā lapa 1800. gadam. Napoleona pārdales jau ir; pats 1800. ir marķēts iztrūkums.',
    imageAlt: 'Politiskā pasaules karte 1815. gadā pēc Vīnes kongresa',
  },
  1900: {
    title: '1900. m.ē. — tuvākā karte: 1914',
    caption:
      'OER politiskā pasaule Pirmā pasaules kara priekšvakarā (1914). Godīgāk nekā izdomāt 1900. gada horoplētu. Impērijas joprojām krāso lielāko daļu Āfrikas un daudz Āzijas.',
    imageAlt: 'OER politiskā karte 1914. gadam 1900. soļa vietā',
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
    return { ...meta, ...copy };
  });
}
