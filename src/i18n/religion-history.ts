import {
  religionHistoryFrames,
  type ReligionCoverage,
  type ReligionFrameMeta,
} from '../data/religion-history';
import type { Locale } from './config';

export type ReligionHistoryPage = {
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
  shelfHeading: string;
  coverage: Record<ReligionCoverage, string>;
  catalogTitle: string;
  catalogHook: string;
  catalogCta: string;
  catalogAlt: string;
  heroAlt: string;
  soonNotice: string;
};

export type ReligionFrameCopy = {
  title: string;
  caption: string;
  imageAlt: string;
};

const pageEn: ReligionHistoryPage = {
  metaTitle: 'Religion — coming soon — Fix Planet',
  metaDescription:
    'A century atlas of sourced religion maps is not published yet. Unfinished plates are not shown as a finished timeline.',
  eyebrow: 'Map room · coming soon',
  title: 'Religion',
  lead:
    'Religion maps, century by century, are not published yet. Fix Planet will not show unfinished plates as a working atlas.',
  honesty:
    'There is no single “true” world religion map for antiquity. Belief, practice, and state cult overlap; most people were never counted. Sourced plates sit at antiquity (a 1905 Old-World reconstruction), the spread of Christianity to 600, state religions about 820, Shepherd’s Europe–Mediterranean religions about 1097, a cumulative spread-to-1500 plate, Woodbridge 1821, Dobbins 1883, the U.S. Army 1943 world sheet, and a 2000s majority-region map. Other century steps reuse the nearest plate and say so. We do not draw missing centuries.',
  back: '← Maps',
  scrubberAria: 'Jump to a century',
  sourceLabel: 'Source',
  licenseLabel: 'License',
  yearLabel: 'Century step',
  mapYearLabel: 'Map dated',
  nearestNote: 'Nearest openly licensed plate — not an exact year sheet.',
  shelfHeading: 'Also on this shelf',
  coverage: {
    'old-world': 'Old World reconstruction — the Americas and Oceania are not mapped as religions here',
    'christianity-expansion':
      'Spread of one tradition (Christianity) in Afro-Eurasia — not a census of all faiths',
    'state-religion': 'Official or court religions of named states — not popular practice',
    'europe-mediterranean': 'Europe and the Mediterranean only — a regional gap for the rest of the world',
    'spread-to-year': 'Cumulative “until this year” spread — not a snapshot of every year in the gap',
    'colonial-atlas': 'Nineteenth-century atlas categories — missionary and colonial labels, not a census',
    'intelligence-atlas': 'Wartime world sheet — a 1943 intelligence atlas, not a 2000 survey',
    'majority-modern': 'Modern majority-religion regions — affiliation, not piety, and not Pew artwork',
  },
  catalogTitle: 'Religion',
  catalogHook: 'A century atlas of sourced religion maps — not published yet.',
  catalogCta: 'Open the timeline →',
  catalogAlt: 'Majority-religion world map used as the catalog card for the Religion century atlas',
  heroAlt:
    'Cloud-free NASA Blue Marble: natural land colors and oceans, used as a physical backdrop, not a religion map',
  soonNotice:
    'Religion maps, century by century, are not published yet. The plates on hand are unfinished — some centuries reuse the same small raster — and Fix Planet will not present that as a working timeline.',
};

const pageRu: ReligionHistoryPage = {
  metaTitle: 'Религии — скоро — Fix Planet',
  metaDescription:
    'Атлас религиозных карт по столетиям пока не опубликован. Незаконченные листы не показываем как готовую ленту.',
  eyebrow: 'Картографическая · скоро',
  title: 'Религии',
  lead:
    'Карты религий по столетиям пока не опубликованы. Fix Planet не показывает незаконченные листы как рабочий атлас.',
  honesty:
    'Для древности нет одной «верной» мировой карты религий. Вера, практика и государственный культ пересекаются; большинство людей никогда не считали. Есть листы: древность (реконструкция Старого Света 1905 года), распространение христианства до 600, государственные религии около 820, религии Европы и Средиземноморья у Shepherd около 1097, накопленное распространение до 1500, Woodbridge 1821, Dobbins 1883, армейский лист США 1943 и карта регионов большинства 2000-х. Остальные шаги — ближайший лист с пометкой. Недостающие века мы не рисуем.',
  back: '← Карты',
  scrubberAria: 'Перейти к столетию',
  sourceLabel: 'Источник',
  licenseLabel: 'Лицензия',
  yearLabel: 'Шаг века',
  mapYearLabel: 'Дата карты',
  nearestNote: 'Ближайший открытый лист — не точная карта на круглый год.',
  shelfHeading: 'Также на этой полке',
  coverage: {
    'old-world': 'Реконструкция Старого Света — Америка и Океания здесь не залиты как религии',
    'christianity-expansion':
      'Распространение одной традиции (христианства) в Афроевразии — не перепись всех вер',
    'state-religion': 'Официальные или придворные религии названных государств — не народная практика',
    'europe-mediterranean': 'Только Европа и Средиземноморье — для остального мира это пробел',
    'spread-to-year': 'Накопительное «до этого года» — не снимок каждого года в промежутке',
    'colonial-atlas': 'Категории атласа XIX века — миссионерские и колониальные ярлыки, не перепись',
    'intelligence-atlas': 'Военный мировой лист — разведывательный атлас 1943 года, не обследование 2000-го',
    'majority-modern': 'Современные регионы большинства — принадлежность, не благочестие и не графика Pew',
  },
  catalogTitle: 'Религии',
  catalogHook: 'Атлас религиозных карт по столетиям — пока не опубликован.',
  catalogCta: 'Открыть ленту →',
  catalogAlt: 'Карта регионов большинства религий — карточка атласа столетий «Религии»',
  heroAlt:
    'Безоблачный NASA Blue Marble: естественные цвета суши и океанов, физический фон, не карта религий',
  soonNotice:
    'Карты религий по столетиям пока не опубликованы. Листы, которые есть, не закончены — часть веков повторяет один и тот же мелкий растр — и Fix Planet не показывает это как рабочую ленту.',
};

const pagePl: ReligionHistoryPage = {
  metaTitle: 'Religie — wkrótce — Fix Planet',
  metaDescription:
    'Atlas map religii po stuleciach nie jest jeszcze opublikowany. Niedokończonych płyt nie pokazujemy jako gotowej osi czasu.',
  eyebrow: 'Mapownia · wkrótce',
  title: 'Religie',
  lead:
    'Mapy religii stulecie po stuleciu nie są jeszcze opublikowane. Fix Planet nie pokazuje niedokończonych płyt jako działającego atlasu.',
  honesty:
    'W starożytności nie ma jednej „prawdziwej” mapy religii świata. Wiara, praktyka i kult państwowy nachodzą na siebie; większości ludzi nigdy nie policzono. Są arkusze: starożytność (rekonstrukcja Starego Świata z 1905), rozprzestrzenianie chrześcijaństwa do 600, religie państwowe około 820, religie Europy i Śródziemnomorza Shepherda około 1097, skumulowane rozprzestrzenienie do 1500, Woodbridge 1821, Dobbins 1883, arkusz armii USA z 1943 i mapa regionów większości z lat 2000. Pozostałe kroki to najbliższy arkusz z adnotacją. Brakujących stuleci nie rysujemy.',
  back: '← Mapy',
  scrubberAria: 'Skocz do stulecia',
  sourceLabel: 'Źródło',
  licenseLabel: 'Licencja',
  yearLabel: 'Krok stulecia',
  mapYearLabel: 'Data mapy',
  nearestNote: 'Najbliższy arkusz na otwartej licencji — nie dokładna mapa z okrągłego roku.',
  shelfHeading: 'Także na tej półce',
  coverage: {
    'old-world': 'Rekonstrukcja Starego Świata — Ameryki i Oceania nie są tu zalane jako religie',
    'christianity-expansion':
      'Rozprzestrzenianie jednej tradycji (chrześcijaństwa) w Afroeuroazji — nie spis wszystkich wiar',
    'state-religion': 'Religie oficjalne lub dworskie nazwanych państw — nie praktyka ludowa',
    'europe-mediterranean': 'Tylko Europa i Śródziemnomorze — luka regionalna dla reszty świata',
    'spread-to-year': 'Skumulowane „do tego roku” — nie migawka każdego roku w luce',
    'colonial-atlas': 'Kategorie atlasu XIX wieku — etykiety misyjne i kolonialne, nie spis',
    'intelligence-atlas': 'Wojenny arkusz świata — atlas wywiadowczy z 1943, nie badanie z 2000',
    'majority-modern': 'Współczesne regiony większości — przynależność, nie pobożność i nie grafika Pew',
  },
  catalogTitle: 'Religie',
  catalogHook: 'Atlas map religii po stuleciach — jeszcze nie opublikowany.',
  catalogCta: 'Otwórz oś czasu →',
  catalogAlt: 'Mapa regionów większości religijnej — karta atlasu stuleci Religii',
  heroAlt:
    'Bezachmurny NASA Blue Marble: naturalne barwy lądów i oceanów, tło fizyczne, nie mapa religii',
  soonNotice:
    'Mapy religii stulecie po stuleciu nie są jeszcze opublikowane. Płyty, które mamy, są niedokończone — niektóre wieki powtarzają ten sam mały raster — i Fix Planet nie pokazuje tego jako działającej osi czasu.',
};

const pageLv: ReligionHistoryPage = {
  metaTitle: 'Reliģijas — drīzumā — Fix Planet',
  metaDescription:
    'Reliģiju karšu gadsimtu atlants vēl nav publicēts. Nepabeigtas plāksnes netiek rādītas kā gatava laika līnija.',
  eyebrow: 'Karšu zāle · drīzumā',
  title: 'Reliģijas',
  lead:
    'Reliģiju kartes pa gadsimtiem vēl nav publicētas. Fix Planet nerāda nepabeigtas plāksnes kā strādājošu atlantu.',
  honesty:
    'Senatnei nav vienas „īstās” pasaules reliģiju kartes. Ticība, prakse un valsts kults pārklājas; lielāko daļu cilvēku nekad neskaitīja. Ir lapas: senatne (1905. gada Vecās pasaules rekonstrukcija), kristietības izplatība līdz 600., valstu reliģijas ap 820., Shepherd Eiropas–Vidusjūras reliģijas ap 1097., kumulatīva izplatība līdz 1500., Woodbridge 1821, Dobbins 1883, ASV armijas 1943. gada lapa un 2000. gadu vairākuma reģionu karte. Pārējie soļi ir tuvākā lapa ar atzīmi. Trūkstošos gadsimtus mēs nezīmējam.',
  back: '← Kartes',
  scrubberAria: 'Pāriet uz gadsimtu',
  sourceLabel: 'Avots',
  licenseLabel: 'Licence',
  yearLabel: 'Gadsimta solis',
  mapYearLabel: 'Kartes datums',
  nearestNote: 'Tuvākā atklāti licencētā lapa — ne precīza karte uz apaļu gadu.',
  shelfHeading: 'Arī šajā plauktā',
  coverage: {
    'old-world': 'Vecās pasaules rekonstrukcija — Amerika un Okeānija šeit nav iekrāsotas kā reliģijas',
    'christianity-expansion':
      'Vienas tradīcijas (kristietības) izplatība Āfroeiropāzijā — ne visu ticību uzskaite',
    'state-religion': 'Nosaukto valstu oficiālās vai galma reliģijas — ne tautas prakse',
    'europe-mediterranean': 'Tikai Eiropa un Vidusjūra — reģionāls iztrūkums pārējai pasaulei',
    'spread-to-year': 'Kumulatīva „līdz šim gadam” izplatība — ne katra gada momentuzņēmums spraugā',
    'colonial-atlas': '19. gadsimta atlanta kategorijas — misionāru un koloniālās etiķetes, ne tautas skaitīšana',
    'intelligence-atlas': 'Kara laika pasaules lapa — 1943. gada izlūkošanas atlants, ne 2000. gada aptauja',
    'majority-modern': 'Mūsdienu vairākuma reliģiju reģioni — piederība, ne dievbijība un ne Pew grafika',
  },
  catalogTitle: 'Reliģijas',
  catalogHook: 'Reliģiju karšu gadsimtu atlants — vēl nav publicēts.',
  catalogCta: 'Atvērt laika līniju →',
  catalogAlt: 'Vairākuma reliģiju pasaules karte — Reliģiju gadsimtu atlanta kartīte',
  heroAlt:
    'Bez mākoņiem NASA Blue Marble: dabiskas sauszemes un okeānu krāsas, fizisks fons, ne reliģiju karte',
  soonNotice:
    'Reliģiju kartes pa gadsimtiem vēl nav publicētas. Plāksnes, kas ir rokā, nav pabeigtas — daži gadsimti atkārto to pašu mazo rastru — un Fix Planet to nerāda kā strādājošu laika līniju.',
};

const captionsEn: Record<number, ReligionFrameCopy> = {
  1: {
    title: '1 CE — Old-World religions (1905 reconstruction)',
    caption:
      'Reclus’s 1905 plate of the principal religions of the ancient Old World. It is a scholarly reconstruction published eighteen centuries later, not a survey taken in year 1. The Americas and Oceania are off the sheet. Treat colours as named traditions, not a headcount.',
    imageAlt: 'Élisée Reclus 1905 plate of principal religions of the ancient Old World',
  },
  100: {
    title: '100 CE — nearest plate: ancient Old World',
    caption:
      'No dated world religion map for 100 CE that we can host. The Reclus antiquity plate remains the nearest published Old-World reconstruction. Christianity is still a minority; this sheet does not pretend otherwise.',
    imageAlt: 'Reclus ancient Old-World religions plate standing in for the 100 CE step',
  },
  200: {
    title: '200 CE — nearest plate: ancient Old World',
    caption:
      'Still no honest world choropleth for 200. We keep the Reclus antiquity plate and mark the century as a gap rather than invent Christian or Sasanian majority fills.',
    imageAlt: 'Reclus ancient Old-World religions plate standing in for the 200 CE step',
  },
  300: {
    title: '300 CE — nearest plate: Christianity to 600',
    caption:
      'A process map of one tradition: zones “predominantly Christian by 325” and “by 600” in Europe, Southwest Asia, and North Africa. It is not a map of all religions, and 300 is not the dated end of the sheet.',
    imageAlt: 'Atlas of World History map of the spread of Christianity to 600 CE, used for 300',
  },
  400: {
    title: '400 CE — nearest plate: Christianity to 600',
    caption:
      'The same Christianity-to-600 sheet. After Constantine and before the later empire’s collapse in the west, Christianity spreads — and so do other faiths the plate does not colour. A labeled gap for a full religion map.',
    imageAlt: 'Atlas of World History Christianity-to-600 map used for the 400 step',
  },
  500: {
    title: '500 CE — nearest plate: Christianity to 600',
    caption:
      'Still the Atlas of World History expansion plate, not a 500 world religion census. Judaism, Zoroastrianism, Hindu and Buddhist worlds, and African and American traditions are mostly off-legend.',
    imageAlt: 'Atlas of World History Christianity-to-600 map used for the 500 step',
  },
  600: {
    title: '600 CE — spread of Christianity to this year',
    caption:
      'Dated end of the Atlas of World History plate: Afro-Eurasian zones judged predominantly Christian by 600. Islam has not yet expanded. This is one tradition’s reach, not a map of “the world’s religions” in 600.',
    imageAlt: 'Atlas of World History map of the spread of Christianity to AD 600',
  },
  700: {
    title: '700 CE — nearest plate: state religions, 820',
    caption:
      'No matching world religion sheet for 700. The 820 state-religion schematic is the nearest dated plate: court or official cults of named polities, not village practice. Early Islam is on that later sheet, not invented here for 700.',
    imageAlt: 'Small schematic of state religions about 820 CE, used for the 700 step',
  },
  800: {
    title: '800 CE — nearest plate: state religions, 820',
    caption:
      'The Wikimedia 820 state-religion overlay (after the World in 820 political base). Colours are official religions of states, a coarse schematic at low resolution — not a piety map and not an 800 snapshot we drew.',
    imageAlt: 'State religions about 820 CE standing in for the 800 century step',
  },
  900: {
    title: '900 CE — nearest plate: state religions, 820',
    caption:
      'Same 820 schematic. The tenth century has no free world religion choropleth in this set. We refuse to paint Fatimid, Byzantine, or Song “majority religion” polygons we do not have.',
    imageAlt: 'State religions about 820 CE standing in for the 900 step',
  },
  1000: {
    title: '1000 CE — nearest plate: Shepherd, about 1097',
    caption:
      'William R. Shepherd’s Historical Atlas plate of religions in Europe and the Mediterranean about 1097. A regional sheet: Latin and Greek Christianity, Islam, and other named communities. The rest of the world is a gap.',
    imageAlt: 'Shepherd Historical Atlas religions of Europe and the Mediterranean about 1097, used for 1000',
  },
  1100: {
    title: '1100 CE — Europe and the Mediterranean, about 1097',
    caption:
      'Shepherd’s crusade-eve religion plate, the nearest dated regional atlas we can host. It shows more than state colour — minorities appear — but it is still Europe and the Near East, not a world map.',
    imageAlt: 'Shepherd map of religions in Europe and the Mediterranean about 1097',
  },
  1200: {
    title: '1200 CE — nearest plate: Shepherd, about 1097',
    caption:
      'No 1200 world religion sheet here. Shepherd 1097 remains the nearest published atlas plate. Mongol-era Inner Asia and the Americas are not invented on this step.',
    imageAlt: 'Shepherd 1097 religions plate standing in for the 1200 step',
  },
  1300: {
    title: '1300 CE — nearest plate: spread until 1500',
    caption:
      'Fährtenleser’s CC BY-SA reconstruction of the spread of world religions until 1500. A cumulative process map, not a 1300 snapshot. We show it as the nearest later plate and mark the century as a gap.',
    imageAlt: 'Spread of world religions until 1500, used for the 1300 step',
  },
  1400: {
    title: '1400 CE — nearest plate: spread until 1500',
    caption:
      'Same cumulative-to-1500 plate. Pre-contact Americas and much of Oceania are not a European “religion layer” on this sheet. A labeled gap, not a drawn 1400 choropleth.',
    imageAlt: 'Spread of world religions until 1500, used for the 1400 step',
  },
  1500: {
    title: '1500 CE — spread of world religions until this year',
    caption:
      'A published reconstruction of how major traditions had spread by 1500, just after Atlantic contact begins. It is a process map of named world religions, still silent on most Indigenous cosmologies as equal layers.',
    imageAlt: 'Wikimedia reconstruction of the spread of world religions until 1500',
  },
  1600: {
    title: '1600 CE — nearest plate: spread until 1500',
    caption:
      'No free 1600 world religion choropleth in this atlas. Reformation Europe, the Americas missions, and Safavid or Mughal official religions are not invented here. The 1500 spread plate is the nearest sheet.',
    imageAlt: 'Spread-until-1500 religion map standing in for the 1600 step',
  },
  1700: {
    title: '1700 CE — nearest plate: Woodbridge 1821',
    caption:
      'Woodbridge’s 1821 “moral and political” chart of the inhabited world mixes religion with “civilization” ranks — a missionary-era taxonomy. We use it as the nearest later world sheet, not as a 1700 survey.',
    imageAlt: 'Woodbridge 1821 moral and political chart of religions, used for 1700',
  },
  1800: {
    title: '1800 CE — nearest plate: Woodbridge 1821',
    caption:
      'The same 1821 chart, twenty-one years later than the step. Categories are of their time. Read it as a dated American school atlas, not as a neutral census of belief.',
    imageAlt: 'Woodbridge 1821 civilization and religion chart used for the 1800 step',
  },
  1900: {
    title: '1900 CE — nearest plate: Dobbins 1883',
    caption:
      'Frank Stockton Dobbins’s 1883 world-religions map: pink Christians, grey “Mohammedan,” blue “Hindoos,” yellow Buddhists and East Asian traditions, green “Fetichists.” Colonial labels are part of the source. We do not modernize the legend.',
    imageAlt: 'Dobbins 1883 public-domain map of the world’s religions, used for 1900',
  },
  2000: {
    title: '2000 CE — nearest plate: U.S. Army 1943',
    caption:
      'No matching-style 2000 world religion choropleth we can host. The 1943 U.S. Army Service Forces Atlas of World Maps “Religions” plate is the nearest dated government world sheet — a wartime atlas, not a millennial survey. Pew tables for 2010 sit on the card below.',
    imageAlt: 'U.S. Army 1943 Atlas of World Maps religions plate, used for the 2000 step',
  },
  2020: {
    title: '2020s — majority-religion regions',
    caption:
      'TheGreenEditor’s public-domain majority-religion regions (not Pew cartography). A country’s colour is a majority label, not a measure of practice. Minorities still live there. Pew’s 2010–2050 composition estimates are the named statistical source on the card below.',
    imageAlt: 'Public-domain world map of majority-religion regions for the present-day step',
  },
};

const captionsRu: Record<number, ReligionFrameCopy> = {
  1: {
    title: '1 н. э. — религии Старого Света (реконструкция 1905)',
    caption:
      'Лист Реклю 1905 года о главных религиях древнего Старого Света. Это учёная реконструкция, изданная через восемнадцать веков, не обследование 1 года. Америки и Океании на листе нет. Цвета — названные традиции, не перепись.',
    imageAlt: 'Лист Элизе Реклю 1905 года о главных религиях древнего Старого Света',
  },
  100: {
    title: '100 н. э. — ближайший лист: древний Старый Свет',
    caption:
      'Нет датированной мировой карты религий на 100 год, которую мы можем разместить. Лист Реклю остаётся ближайшей опубликованной реконструкцией Старого Света. Христианство ещё меньшинство; лист этого не скрывает.',
    imageAlt: 'Лист Реклю о религиях древнего Старого Света вместо шага 100',
  },
  200: {
    title: '200 н. э. — ближайший лист: древний Старый Свет',
    caption:
      'По-прежнему нет честного мирового хороплета на 200 год. Оставляем лист Реклю и помечаем век как пробел — не выдумываем христианские или сасанидские заливки большинства.',
    imageAlt: 'Лист Реклю о религиях древнего Старого Света вместо шага 200',
  },
  300: {
    title: '300 н. э. — ближайший лист: христианство до 600',
    caption:
      'Карта процесса одной традиции: зоны «преимущественно христианские к 325» и «к 600» в Европе, Юго-Западной Азии и Северной Африке. Это не карта всех религий, и 300-й — не датированный край листа.',
    imageAlt: 'Карта Atlas of World History о распространении христианства до 600, для шага 300',
  },
  400: {
    title: '400 н. э. — ближайший лист: христианство до 600',
    caption:
      'Тот же лист «христианство до 600». После Константина и до крушения запада империя меняется — и другие веры, которых лист не красит. Помеченный пробел для полной карты религий.',
    imageAlt: 'Карта распространения христианства до 600 вместо шага 400',
  },
  500: {
    title: '500 н. э. — ближайший лист: христианство до 600',
    caption:
      'Всё ещё лист экспансии Atlas of World History, не перепись религий мира в 500 году. Иудаизм, зороастризм, индуистский и буддийский миры, африканские и американские традиции почти вне легенды.',
    imageAlt: 'Карта распространения христианства до 600 вместо шага 500',
  },
  600: {
    title: '600 н. э. — распространение христианства до этого года',
    caption:
      'Датированный край листа Atlas of World History: зоны Афроевразии, сочтённые преимущественно христианскими к 600 году. Ислам ещё не расширился. Это охват одной традиции, не карта «религий мира» в 600-м.',
    imageAlt: 'Карта Atlas of World History о распространении христианства до 600 года н. э.',
  },
  700: {
    title: '700 н. э. — ближайший лист: государственные религии, 820',
    caption:
      'Нет мировой карты религий на 700 год. Схема государственных религий 820-го — ближайший датированный лист: придворные или официальные культы названных политий, не деревенская практика. Ранний ислам — на том более позднем листе, не выдуман здесь для 700-го.',
    imageAlt: 'Небольшая схема государственных религий около 820 года н. э. для шага 700',
  },
  800: {
    title: '800 н. э. — ближайший лист: государственные религии, 820',
    caption:
      'Оверлей Wikimedia «государственные религии 820» (по политической основе World in 820). Цвета — официальные религии государств, грубая схема малого разрешения — не карта благочестия и не снимок 800-го, который мы нарисовали.',
    imageAlt: 'Государственные религии около 820 года н. э. вместо шага 800',
  },
  900: {
    title: '900 н. э. — ближайший лист: государственные религии, 820',
    caption:
      'Та же схема 820 года. На десятый век в этом наборе нет свободного мирового хороплета религий. Мы не рисуем «религии большинства» Фатимидов, Византии или Сун, которых у нас нет.',
    imageAlt: 'Государственные религии около 820 года н. э. вместо шага 900',
  },
  1000: {
    title: '1000 н. э. — ближайший лист: Shepherd, около 1097',
    caption:
      'Лист Historical Atlas Уильяма Р. Шеферда о религиях Европы и Средиземноморья около 1097 года. Региональный лист: латинское и греческое христианство, ислам и другие названные общины. Остальной мир — пробел.',
    imageAlt: 'Лист Shepherd о религиях Европы и Средиземноморья около 1097 года для шага 1000',
  },
  1100: {
    title: '1100 н. э. — Европа и Средиземноморье, около 1097',
    caption:
      'Лист Шеферда кануна крестовых походов — ближайший датированный региональный атлас, который мы можем разместить. Видны не только государственные цвета, но и меньшинства — и всё же это Европа и Ближний Восток, не карта мира.',
    imageAlt: 'Карта Shepherd религий Европы и Средиземноморья около 1097 года',
  },
  1200: {
    title: '1200 н. э. — ближайший лист: Shepherd, около 1097',
    caption:
      'Мирового листа религий на 1200 год здесь нет. Shepherd 1097 остаётся ближайшим изданным листом атласа. Внутреннюю Азию монгольской эпохи и Америку на этом шаге не выдумываем.',
    imageAlt: 'Лист религий Shepherd 1097 года вместо шага 1200',
  },
  1300: {
    title: '1300 н. э. — ближайший лист: распространение до 1500',
    caption:
      'Реконструкция Fährtenleser (CC BY-SA) распространения мировых религий до 1500 года. Накопительная карта процесса, не снимок 1300-го. Показываем как ближайший более поздний лист и помечаем век как пробел.',
    imageAlt: 'Распространение мировых религий до 1500 года вместо шага 1300',
  },
  1400: {
    title: '1400 н. э. — ближайший лист: распространение до 1500',
    caption:
      'Тот же накопительный лист до 1500 года. Доконтактные Америки и большая часть Океании на этом листе — не европейский «слой религии». Помеченный пробел, не нарисованный хороплет 1400-го.',
    imageAlt: 'Распространение мировых религий до 1500 года вместо шага 1400',
  },
  1500: {
    title: '1500 н. э. — распространение мировых религий до этого года',
    caption:
      'Опубликованная реконструкция того, как к 1500 году разошлись крупные традиции, сразу после начала атлантического контакта. Карта процесса названных мировых религий, всё ещё молчащая о большинстве коренных космологий как равных слоях.',
    imageAlt: 'Реконструкция Wikimedia распространения мировых религий до 1500 года',
  },
  1600: {
    title: '1600 н. э. — ближайший лист: распространение до 1500',
    caption:
      'Свободного хороплета религий мира на 1600 год в этом атласе нет. Реформационную Европу, миссии в Америках, официальные религии Сефевидов или Моголов здесь не выдумываем. Лист распространения до 1500 — ближайший.',
    imageAlt: 'Карта распространения до 1500 года вместо шага 1600',
  },
  1700: {
    title: '1700 н. э. — ближайший лист: Woodbridge 1821',
    caption:
      '«Нравственно-политическая» карта обитаемого мира Вудбриджа 1821 года смешивает религию с рангами «цивилизации» — таксономия миссионерской эпохи. Берём её как ближайший более поздний мировой лист, не как обследование 1700 года.',
    imageAlt: 'Нравственно-политическая карта религий Вудбриджа 1821 года для шага 1700',
  },
  1800: {
    title: '1800 н. э. — ближайший лист: Woodbridge 1821',
    caption:
      'Тот же лист 1821 года, на двадцать один год позже шага. Категории — своего времени. Читайте как датированный американский школьный атлас, не как нейтральную перепись веры.',
    imageAlt: 'Карта цивилизации и религии Вудбриджа 1821 года для шага 1800',
  },
  1900: {
    title: '1900 н. э. — ближайший лист: Dobbins 1883',
    caption:
      'Мировая карта религий Фрэнка Стоктона Доббинса 1883 года: розовые христиане, серые «магометане», синие «индусы», жёлтые буддисты и восточноазиатские традиции, зелёные «фетишисты». Колониальные ярлыки — часть источника. Легенду не осовремениваем.',
    imageAlt: 'Карта религий мира Доббинса 1883 года в общественном достоянии для шага 1900',
  },
  2000: {
    title: '2000 н. э. — ближайший лист: армия США, 1943',
    caption:
      'Нет хороплета религий мира 2000 года в том же стиле, который мы можем разместить. Лист «Religions» Atlas of World Maps Службы тыла армии США 1943 года — ближайший датированный государственный мировой лист: военный атлас, не обследование тысячелетия. Таблицы Pew за 2010 год — на карточке ниже.',
    imageAlt: 'Лист религий Atlas of World Maps армии США 1943 года для шага 2000',
  },
  2020: {
    title: '2020-е — регионы религий большинства',
    caption:
      'Общедоступные регионы религий большинства TheGreenEditor (не картография Pew). Цвет страны — ярлык большинства, не мера практики. Меньшинства там живут. Оценки состава Pew 2010–2050 — названный статистический источник на карточке ниже.',
    imageAlt: 'Общедоступная карта мира регионов религий большинства для современного шага',
  },
};

const captionsPl: Record<number, ReligionFrameCopy> = {
  1: {
    title: '1 n.e. — religie Starego Świata (rekonstrukcja z 1905)',
    caption:
      'Tablica Reclusa z 1905 o głównych religiach starożytnego Starego Świata. To naukowa rekonstrukcja wydana osiemnaście wieków później, nie badanie z roku 1. Ameryk i Oceanii na arkuszu nie ma. Kolory to nazwane tradycje, nie spis głów.',
    imageAlt: 'Tablica Élisée Reclusa z 1905 o głównych religiach starożytnego Starego Świata',
  },
  100: {
    title: '100 n.e. — najbliższy arkusz: starożytny Stary Świat',
    caption:
      'Nie mamy datowanej mapy religii świata na rok 100, którą możemy hostować. Tablica Reclusa zostaje najbliższą opublikowaną rekonstrukcją Starego Świata. Chrześcijaństwo jest jeszcze mniejszością; arkusz tego nie ukrywa.',
    imageAlt: 'Tablica Reclusa o religiach starożytnego Starego Świata zamiast kroku 100',
  },
  200: {
    title: '200 n.e. — najbliższy arkusz: starożytny Stary Świat',
    caption:
      'Nadal nie ma uczciwego światowego choroplethu na rok 200. Zostawiamy tablicę Reclusa i oznaczamy stulecie jako lukę — bez wymyślania chrześcijańskich czy sasanidzkich wypełnień większości.',
    imageAlt: 'Tablica Reclusa o religiach starożytnego Starego Świata zamiast kroku 200',
  },
  300: {
    title: '300 n.e. — najbliższy arkusz: chrześcijaństwo do 600',
    caption:
      'Mapa procesu jednej tradycji: strefy „przeważająco chrześcijańskie do 325” i „do 600” w Europie, Azji Południowo-Zachodniej i Afryce Północnej. To nie mapa wszystkich religii, a 300 nie jest datowanym krańcem arkusza.',
    imageAlt: 'Mapa Atlas of World History rozprzestrzeniania chrześcijaństwa do 600, użyta dla 300',
  },
  400: {
    title: '400 n.e. — najbliższy arkusz: chrześcijaństwo do 600',
    caption:
      'Ten sam arkusz chrześcijaństwa do 600. Po Konstantynie i przed upadkiem zachodu chrześcijaństwo się rozchodzi — i inne wiary, których płyta nie koloruje. Oznaczona luka dla pełnej mapy religii.',
    imageAlt: 'Mapa chrześcijaństwa do 600 zamiast kroku 400',
  },
  500: {
    title: '500 n.e. — najbliższy arkusz: chrześcijaństwo do 600',
    caption:
      'Nadal płyta ekspansji Atlas of World History, nie spis religii świata w roku 500. Judaizm, zaratusztrianizm, światy hinduistyczne i buddyjskie oraz tradycje Afryki i Ameryk są niemal poza legendą.',
    imageAlt: 'Mapa chrześcijaństwa do 600 zamiast kroku 500',
  },
  600: {
    title: '600 n.e. — rozprzestrzenianie chrześcijaństwa do tego roku',
    caption:
      'Datowany kraniec płyty Atlas of World History: strefy Afroeuroazji uznane za przeważająco chrześcijańskie do 600. Islam jeszcze się nie rozszerzył. To zasięg jednej tradycji, nie mapa „religii świata” w 600.',
    imageAlt: 'Mapa Atlas of World History rozprzestrzeniania chrześcijaństwa do roku 600',
  },
  700: {
    title: '700 n.e. — najbliższy arkusz: religie państwowe, 820',
    caption:
      'Brak światowego arkusza religii na rok 700. Schemat religii państwowych z 820 to najbliższa datowana płyta: kult dworski lub oficjalny nazwanych organizmów, nie praktyka wsi. Wczesny islam jest na tamtym późniejszym arkuszu, nie wymyślony tu dla 700.',
    imageAlt: 'Mały schemat religii państwowych około 820 n.e. użyty dla kroku 700',
  },
  800: {
    title: '800 n.e. — najbliższy arkusz: religie państwowe, 820',
    caption:
      'Nakładka Wikimedia religii państwowych 820 (na bazie politycznej World in 820). Kolory to oficjalne religie państw, gruby schemat w niskiej rozdzielczości — nie mapa pobożności i nie migawka 800, którą narysowaliśmy.',
    imageAlt: 'Religie państwowe około 820 n.e. zamiast kroku 800',
  },
  900: {
    title: '900 n.e. — najbliższy arkusz: religie państwowe, 820',
    caption:
      'Ten sam schemat z 820. Na X wiek nie mamy w tym zestawie wolnego światowego choroplethu religii. Nie malujemy „religii większości” Fatymidów, Bizancjum ani Song, których nie mamy.',
    imageAlt: 'Religie państwowe około 820 n.e. zamiast kroku 900',
  },
  1000: {
    title: '1000 n.e. — najbliższy arkusz: Shepherd, około 1097',
    caption:
      'Tablica Historical Atlas Williama R. Shepherda o religiach Europy i Śródziemnomorza około 1097. Arkusz regionalny: chrześcijaństwo łacińskie i greckie, islam i inne nazwane wspólnoty. Reszta świata to luka.',
    imageAlt: 'Tablica Shepherda religii Europy i Śródziemnomorza około 1097, użyta dla 1000',
  },
  1100: {
    title: '1100 n.e. — Europa i Śródziemnomorze, około 1097',
    caption:
      'Tablica Shepherda z przedednia krucjat, najbliższy datowany atlas regionalny, który możemy hostować. Widać więcej niż kolor państwa — są mniejszości — ale to nadal Europa i Bliski Wschód, nie mapa świata.',
    imageAlt: 'Mapa Shepherda religii Europy i Śródziemnomorza około 1097',
  },
  1200: {
    title: '1200 n.e. — najbliższy arkusz: Shepherd, około 1097',
    caption:
      'Nie ma tu światowego arkusza religii na 1200. Shepherd 1097 zostaje najbliższą opublikowaną tablicą atlasu. Wewnętrznej Azji epoki mongolskiej i Ameryk na tym kroku nie wymyślamy.',
    imageAlt: 'Tablica religii Shepherda z 1097 zamiast kroku 1200',
  },
  1300: {
    title: '1300 n.e. — najbliższy arkusz: rozprzestrzenienie do 1500',
    caption:
      'Rekonstrukcja Fährtenlesera (CC BY-SA) rozprzestrzeniania religii świata do 1500. Skumulowana mapa procesu, nie migawka z 1300. Pokazujemy ją jako najbliższy późniejszy arkusz i oznaczamy stulecie jako lukę.',
    imageAlt: 'Rozprzestrzenianie religii świata do 1500 zamiast kroku 1300',
  },
  1400: {
    title: '1400 n.e. — najbliższy arkusz: rozprzestrzenienie do 1500',
    caption:
      'Ta sama płyta skumulowana do 1500. Ameryki przed kontaktem i większość Oceanii nie są tu europejską „warstwą religii”. Oznaczona luka, nie narysowany choropleth z 1400.',
    imageAlt: 'Rozprzestrzenianie religii świata do 1500 zamiast kroku 1400',
  },
  1500: {
    title: '1500 n.e. — rozprzestrzenianie religii świata do tego roku',
    caption:
      'Opublikowana rekonstrukcja tego, jak do 1500 rozeszły się wielkie tradycje, tuż po początku kontaktu atlantyckiego. To mapa procesu nazwanych religii świata, wciąż milcząca o większości rdzennych kosmologii jako równych warstwach.',
    imageAlt: 'Rekonstrukcja Wikimedia rozprzestrzeniania religii świata do 1500',
  },
  1600: {
    title: '1600 n.e. — najbliższy arkusz: rozprzestrzenienie do 1500',
    caption:
      'Nie mamy wolnego choroplethu religii świata na 1600. Reformacyjnej Europy, misji w Amerykach ani oficjalnych religii Safawidów czy Mogołów tu nie wymyślamy. Płyta rozprzestrzenienia do 1500 jest najbliższa.',
    imageAlt: 'Mapa rozprzestrzenienia do 1500 zamiast kroku 1600',
  },
  1700: {
    title: '1700 n.e. — najbliższy arkusz: Woodbridge 1821',
    caption:
      '„Moralna i polityczna” mapa zamieszkałego świata Woodbridge’a z 1821 miesza religię z rangami „cywilizacji” — taksonomia epoki misyjnej. Używamy jej jako najbliższego późniejszego arkusza świata, nie jako badania z 1700.',
    imageAlt: 'Mapa moralna i polityczna religii Woodbridge’a z 1821 użyta dla 1700',
  },
  1800: {
    title: '1800 n.e. — najbliższy arkusz: Woodbridge 1821',
    caption:
      'Ten sam arkusz z 1821, dwadzieścia jeden lat po kroku. Kategorie są swojej epoki. Czytaj to jako datowany amerykański atlas szkolny, nie jako neutralny spis wiary.',
    imageAlt: 'Mapa cywilizacji i religii Woodbridge’a z 1821 użyta dla kroku 1800',
  },
  1900: {
    title: '1900 n.e. — najbliższy arkusz: Dobbins 1883',
    caption:
      'Mapa religii świata Franka Stocktona Dobbinsa z 1883: różowi chrześcijanie, szarzy „Mahometanie”, niebiescy „Hindusi”, żółci buddyści i tradycje wschodnioazjatyckie, zieloni „fetyszyści”. Kolonialne etykiety są częścią źródła. Legendy nie unowocześniamy.',
    imageAlt: 'Mapa religii świata Dobbinsa z 1883 w domenie publicznej, użyta dla 1900',
  },
  2000: {
    title: '2000 n.e. — najbliższy arkusz: armia USA, 1943',
    caption:
      'Nie mamy choroplethu religii świata z 2000 w tym stylu, którego moglibyśmy hostować. Tablica „Religions” Atlas of World Maps U.S. Army Service Forces z 1943 to najbliższy datowany rządowy arkusz świata — atlas wojenny, nie badanie milenijne. Tabele Pew z 2010 są na karcie poniżej.',
    imageAlt: 'Tablica religii Atlas of World Maps armii USA z 1943 użyta dla kroku 2000',
  },
  2020: {
    title: 'Lata 2020. — regiony religii większości',
    caption:
      'Domenowa mapa regionów większości TheGreenEditor (nie kartografia Pew). Kolor kraju to etykieta większości, nie miara praktyki. Mniejszości i tak tam mieszkają. Szacunki składu Pew 2010–2050 to nazwane źródło statystyczne na karcie poniżej.',
    imageAlt: 'Domenowa mapa świata regionów religii większości dla kroku współczesnego',
  },
};

const captionsLv: Record<number, ReligionFrameCopy> = {
  1: {
    title: '1. m.ē. — Vecās pasaules reliģijas (1905. gada rekonstrukcija)',
    caption:
      'Reclus 1905. gada plāksne par senās Vecās pasaules galvenajām reliģijām. Tā ir zinātniska rekonstrukcija, izdota astoņpadsmit gadsimtus vēlāk, ne 1. gada aptauja. Amerika un Okeānija lapā nav. Krāsas ir nosauktas tradīcijas, ne galvu skaitīšana.',
    imageAlt: 'Élisée Reclus 1905. gada plāksne par senās Vecās pasaules galvenajām reliģijām',
  },
  100: {
    title: '100. m.ē. — tuvākā lapa: senā Vecā pasaule',
    caption:
      'Nav datētas pasaules reliģiju kartes 100. gadam, ko varam izvietot. Reclus senatnes plāksne paliek tuvākā publicētā Vecās pasaules rekonstrukcija. Kristietība joprojām ir minoritāte; lapa to neslēpj.',
    imageAlt: 'Reclus senās Vecās pasaules reliģiju plāksne 100. soļa vietā',
  },
  200: {
    title: '200. m.ē. — tuvākā lapa: senā Vecā pasaule',
    caption:
      'Joprojām nav godīga pasaules horoplēta 200. gadam. Atstājam Reclus senatnes plāksni un gadsimtu atzīmējam kā iztrūkumu — bez izdomātām kristiešu vai sasanīdu vairākuma aizpildēm.',
    imageAlt: 'Reclus senās Vecās pasaules reliģiju plāksne 200. soļa vietā',
  },
  300: {
    title: '300. m.ē. — tuvākā lapa: kristietība līdz 600.',
    caption:
      'Vienas tradīcijas procesa karte: zonas „pārsvarā kristīgas līdz 325.” un „līdz 600.” Eiropā, Dienvidrietumāzijā un Ziemeļāfrikā. Tā nav visu reliģiju karte, un 300. nav lapas datētais gals.',
    imageAlt: 'Atlas of World History karte par kristietības izplatību līdz 600., izmantota 300. solim',
  },
  400: {
    title: '400. m.ē. — tuvākā lapa: kristietība līdz 600.',
    caption:
      'Tā pati kristietības-līdz-600. lapa. Pēc Konstantīna un pirms rietumu sabrukuma kristietība izplatās — un tāpat citas ticības, ko plāksne nekrāso. Marķēts iztrūkums pilnai reliģiju kartei.',
    imageAlt: 'Kristietības izplatības karte līdz 600. gadam 400. soļa vietā',
  },
  500: {
    title: '500. m.ē. — tuvākā lapa: kristietība līdz 600.',
    caption:
      'Joprojām Atlas of World History ekspansijas plāksne, ne 500. gada pasaules reliģiju tautas skaitīšana. Jūdaisms, zoroastrisms, hindu un budistu pasaules, Āfrikas un Amerikas tradīcijas gandrīz ārpus leģendas.',
    imageAlt: 'Kristietības izplatības karte līdz 600. gadam 500. soļa vietā',
  },
  600: {
    title: '600. m.ē. — kristietības izplatība līdz šim gadam',
    caption:
      'Atlas of World History plāksnes datētais gals: Āfroeiropas zonas, kas uzskatītas par pārsvarā kristīgām līdz 600. gadam. Islāms vēl nav izpleties. Tā ir vienas tradīcijas sasniedzamība, ne „pasaules reliģiju” karte 600. gadā.',
    imageAlt: 'Atlas of World History karte par kristietības izplatību līdz 600. gadam m.ē.',
  },
  700: {
    title: '700. m.ē. — tuvākā lapa: valstu reliģijas, 820.',
    caption:
      'Nav pasaules reliģiju lapas 700. gadam. 820. gada valstu reliģiju shēma ir tuvākā datētā plāksne: nosaukto politiju galma vai oficiālie kulti, ne ciema prakse. Agrīnais islāms ir tajā vēlākajā lapā, ne izdomāts šeit 700. gadam.',
    imageAlt: 'Maza shēma par valstu reliģijām ap 820. gadu m.ē., izmantota 700. solim',
  },
  800: {
    title: '800. m.ē. — tuvākā lapa: valstu reliģijas, 820.',
    caption:
      'Wikimedia 820. gada valstu reliģiju pārklājums (pēc World in 820 politiskās bāzes). Krāsas ir valstu oficiālās reliģijas, rupja shēma zemā izšķirtspējā — ne dievbijības karte un ne 800. gada momentuzņēmums, ko mēs uzzīmējām.',
    imageAlt: 'Valstu reliģijas ap 820. gadu m.ē. 800. soļa vietā',
  },
  900: {
    title: '900. m.ē. — tuvākā lapa: valstu reliģijas, 820.',
    caption:
      'Tā pati 820. gada shēma. Desmitajam gadsimtam šajā komplektā nav brīva pasaules reliģiju horoplēta. Mēs nezīmējam Fatimīdu, Bizantijas vai Sun „vairākuma reliģiju” daudzstūrus, kuru mums nav.',
    imageAlt: 'Valstu reliģijas ap 820. gadu m.ē. 900. soļa vietā',
  },
  1000: {
    title: '1000. m.ē. — tuvākā lapa: Shepherd, ap 1097.',
    caption:
      'William R. Shepherd Historical Atlas plāksne par Eiropas un Vidusjūras reliģijām ap 1097. gadu. Reģionāla lapa: latīņu un grieķu kristietība, islāms un citas nosauktas kopienas. Pārējā pasaule ir iztrūkums.',
    imageAlt: 'Shepherd Historical Atlas reliģijas Eiropā un Vidusjūrā ap 1097. gadu, 1000. solim',
  },
  1100: {
    title: '1100. m.ē. — Eiropa un Vidusjūra, ap 1097.',
    caption:
      'Shepherd krusta karu priekšvakara reliģiju plāksne, tuvākais datētais reģionālais atlants, ko varam izvietot. Redzams vairāk nekā valsts krāsa — ir minoritātes —, bet tā joprojām ir Eiropa un Tuvie Austrumi, ne pasaules karte.',
    imageAlt: 'Shepherd karte par reliģijām Eiropā un Vidusjūrā ap 1097. gadu',
  },
  1200: {
    title: '1200. m.ē. — tuvākā lapa: Shepherd, ap 1097.',
    caption:
      'Šeit nav 1200. gada pasaules reliģiju lapas. Shepherd 1097. paliek tuvākā publicētā atlanta plāksne. Mongoļu laikmeta Iekšējo Āziju un Ameriku šajā solī neizdomājam.',
    imageAlt: 'Shepherd 1097. gada reliģiju plāksne 1200. soļa vietā',
  },
  1300: {
    title: '1300. m.ē. — tuvākā lapa: izplatība līdz 1500.',
    caption:
      'Fährtenleser CC BY-SA rekonstrukcija par pasaules reliģiju izplatību līdz 1500. gadam. Kumulatīva procesa karte, ne 1300. gada momentuzņēmums. Rādām to kā tuvāko vēlāko lapu un gadsimtu atzīmējam kā iztrūkumu.',
    imageAlt: 'Pasaules reliģiju izplatība līdz 1500. gadam 1300. soļa vietā',
  },
  1400: {
    title: '1400. m.ē. — tuvākā lapa: izplatība līdz 1500.',
    caption:
      'Tā pati kumulatīvā plāksne līdz 1500. gadam. Pirmkontakta Amerika un liela daļa Okeānijas šajā lapā nav Eiropas „reliģiju slānis”. Marķēts iztrūkums, ne uzzīmēts 1400. gada horoplēts.',
    imageAlt: 'Pasaules reliģiju izplatība līdz 1500. gadam 1400. soļa vietā',
  },
  1500: {
    title: '1500. m.ē. — pasaules reliģiju izplatība līdz šim gadam',
    caption:
      'Publicēta rekonstrukcija, kā līdz 1500. gadam bija izplatījušās lielās tradīcijas, tūlīt pēc Atlantijas kontakta sākuma. Tā ir nosaukto pasaules reliģiju procesa karte, joprojām klusa par lielāko daļu pirmiedzīvotāju kosmoloģiju kā līdzvērtīgiem slāņiem.',
    imageAlt: 'Wikimedia rekonstrukcija par pasaules reliģiju izplatību līdz 1500. gadam',
  },
  1600: {
    title: '1600. m.ē. — tuvākā lapa: izplatība līdz 1500.',
    caption:
      'Šajā atlantā nav brīva 1600. gada pasaules reliģiju horoplēta. Reformācijas Eiropu, Amerikas misijas un sefevīdu vai mogolu oficiālās reliģijas šeit neizdomājam. 1500. gada izplatības plāksne ir tuvākā.',
    imageAlt: 'Izplatības līdz 1500. gadam karte 1600. soļa vietā',
  },
  1700: {
    title: '1700. m.ē. — tuvākā lapa: Woodbridge 1821',
    caption:
      'Woodbridge 1821. gada „morālā un politiskā” apdzīvotās pasaules karte sajauc reliģiju ar „civilizācijas” rangiem — misionāru laikmeta taksonomija. Lietojam to kā tuvāko vēlāko pasaules lapu, ne kā 1700. gada aptauju.',
    imageAlt: 'Woodbridge 1821. gada morālā un politiskā reliģiju karte 1700. solim',
  },
  1800: {
    title: '1800. m.ē. — tuvākā lapa: Woodbridge 1821',
    caption:
      'Tā pati 1821. gada karte, divdesmit viens gads pēc soļa. Kategorijas ir sava laika. Lasi to kā datētu Amerikas skolas atlantu, ne kā neitrālu ticības tautas skaitīšanu.',
    imageAlt: 'Woodbridge 1821. gada civilizācijas un reliģijas karte 1800. solim',
  },
  1900: {
    title: '1900. m.ē. — tuvākā lapa: Dobbins 1883',
    caption:
      'Frank Stockton Dobbins 1883. gada pasaules reliģiju karte: rozā kristieši, pelēki „mahometāņi”, zili „hindū”, dzelteni budisti un Austrumāzijas tradīcijas, zaļi „fetišisti”. Koloniālās etiķetes ir avota daļa. Leģendu nepadarām mūsdienīgu.',
    imageAlt: 'Dobbins 1883. gada sabiedriskā īpašuma karte par pasaules reliģijām 1900. solim',
  },
  2000: {
    title: '2000. m.ē. — tuvākā lapa: ASV armija, 1943.',
    caption:
      'Nav 2000. gada pasaules reliģiju horoplēta šajā stilā, ko varam izvietot. 1943. gada ASV armijas aizmugures dienesta Atlas of World Maps lapa „Religions” ir tuvākā datētā valsts pasaules lapa — kara atlants, ne tūkstošgades aptauja. Pew 2010. gada tabulas ir kartītē zemāk.',
    imageAlt: 'ASV armijas 1943. gada Atlas of World Maps reliģiju plāksne 2000. solim',
  },
  2020: {
    title: '2020. gadi — vairākuma reliģiju reģioni',
    caption:
      'TheGreenEditor sabiedriskā īpašuma vairākuma reliģiju reģioni (ne Pew kartogrāfija). Valsts krāsa ir vairākuma etiķete, ne prakses mērs. Minoritātes tur tik un tā dzīvo. Pew 2010.–2050. gada sastāva aplēses ir nosauktais statistiskais avots kartītē zemāk.',
    imageAlt: 'Sabiedriskā īpašuma pasaules karte ar vairākuma reliģiju reģioniem mūsdienu solim',
  },
};

const page: Record<Locale, ReligionHistoryPage> = {
  en: pageEn,
  ru: pageRu,
  pl: pagePl,
  lv: pageLv,
};

const captions: Record<Locale, Record<number, ReligionFrameCopy>> = {
  en: captionsEn,
  ru: captionsRu,
  pl: captionsPl,
  lv: captionsLv,
};

export type ReligionFrame = ReligionFrameMeta & ReligionFrameCopy;

export function getReligionHistoryPage(locale: Locale): ReligionHistoryPage {
  return page[locale];
}

export function getReligionHistoryFrames(locale: Locale): ReligionFrame[] {
  return religionHistoryFrames.map((meta) => {
    const copy = captions[locale][meta.year] ?? captions.en[meta.year];
    return { ...meta, ...copy };
  });
}
