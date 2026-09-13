import type { ReligionLegendId } from '../data/religion-legend';
import type { Locale } from './config';

export type ReligionContinentKey = 'europe' | 'africa' | 'asia' | 'americas' | 'oceania';

export type ReligionContinentBlock = {
  heading: string;
  text: string;
};

export type ReligionPilotFrameCopy = {
  title: string;
  caption: string;
  imageAlt: string;
  eraByContinent?: Record<ReligionContinentKey, string>;
  continentBlocks?: ReligionContinentBlock[];
  honestyPills?: string[];
  sources: string;
};

export const religionPilotCopy: Record<Locale, Record<number, ReligionPilotFrameCopy>> = {
  en: {
    1: {
      title: '1 CE — schematic reconstruction',
      caption:
        'A Fix Planet schematic of named traditions at the start of the Common Era. Rome’s official civic cults colour the Mediterranean; Christianity is four urban dots — Palestine, Antioch, Rome, Alexandria — not an empire fill. There is no aourednik world_1 sheet; the underlay is world_100, marked nearest.',
      imageAlt:
        'Schematic world religion map for 1 CE: Roman pagan Mediterranean, tiny Christian dots, Parthian zoroastrian wash, Indic and Han umbrellas, Americas unmapped gray',
      eraByContinent: {
        europe:
          'Imperial and civic paganism from Britain and Gaul through Italy, the Balkans, and Anatolia. Jewish communities sit as spots in Rome and the eastern cities. Christian presence is a handful of house-churches, too small to paint a province. North of the limes, local traditions stay a coarse wash. Do not read the terracotta as “everyone believed the same thing.”',
        africa:
          'Egypt and the Maghreb sit in the Roman civic-cult layer, with a Jewish and a tiny Christian mark at Alexandria. South of the Sahara the sheet uses one african_trad wash — a label of ignorance, not a census of cults. Aksum is not painted Christian.',
        asia:
          'Parthia is zoroastrian-leaning, not a sealed state church. Judea and the eastern diaspora are jewish spots. India is a hindu wash with buddhist corridors along the Ganges, Sri Lanka, and Gandhara. Han China is chinese_imperial; dao_folk is merged with that fill. Steppe and Arabia stay local_trad.',
        americas:
          'Unmapped gray. We do not invent a religion layer for the Americas in year 1.',
        oceania:
          'Unmapped gray. Australia and the Pacific are not filled as religions on this plate.',
      },
      sources:
        'Religion polygons © Fix Planet schematic reconstruction — not a census, not Paradox. Basemap: aourednik historical-basemaps world_100 (nearest; no world_1), GPL-3.0; Corresponding Source at github.com/aourednik/historical-basemaps. No © Fix Planet on GPL geometry. Optional museum companion: Élisée Reclus, L’Homme et la Terre (1905), public domain. Not traced from EU4, CK, GeaCron, Euratlas, Omniatlas, Maps of War, Hammond, Faruqi, or Reddit state-religion maps.',
    },
    100: {
      title: '100 CE — Trajan still pagan',
      caption:
        'Same Old-World umbrellas as year 1. Trajan’s Rome is still officially pagan; we do not paint the empire Christian. A few more urban Christian dots (Ephesus, Corinth, Carthage, Smyrna) join the first four. The Kushan world is an Indic–Buddhist mix, not a single state colour.',
      imageAlt:
        'Schematic world religion map for 100 CE: pagan Mediterranean, slightly more Christian urban dots, Kushan Buddhist mix, Americas unmapped',
      eraByContinent: {
        europe:
          'The high empire is still civic pagan on this sheet. Extra Christian dots mark named cities, not provinces. Jewish spots remain. Northern and forest Europe stay local_trad. No Christian empire colour.',
        africa:
          'North Africa remains in the Roman pagan wash, with a Christian dot at Carthage and Alexandria. The Sahara-south african_trad wash is unchanged — still not a village survey.',
        asia:
          'Parthia stays zoroastrian-leaning. Kushan lands take a buddhist/Indic mix over the hindu umbrella. Han China remains chinese_imperial. Silk-road Buddhist corridors are still thin.',
        americas: 'Still unmapped. We do not invent fills because a century has passed.',
        oceania: 'Still unmapped gray.',
      },
      sources:
        'Religion polygons © Fix Planet schematic reconstruction. Basemap: aourednik historical-basemaps world_100, GPL-3.0; Corresponding Source at github.com/aourednik/historical-basemaps. Not a census. Not Paradox.',
    },
    200: {
      title: '200 CE — official pagan, denser Christian cities',
      caption:
        'Rome is still officially pagan. Christianity shows as denser urban hatch across Syria, Asia Minor, Egypt, Rome, and Carthage — not a Mediterranean fill. A thin manichaean hatch appears in Mesopotamia. Sasanian Iran is a stronger zoroastrian wash. Buddhist corridors thicken on the Silk Road; China stays imperial with Buddhist inroads.',
      imageAlt:
        'Schematic world religion map for 200 CE: pagan Rome, Christian urban hatch, Sasanian zoroastrian, Silk Road Buddhist, Americas unmapped',
      eraByContinent: {
        europe:
          'The official colour is still roman_pagan. Christian hatch sits on Rome and a few western cities. Rural West is not a church map. Local traditions north of the limes stay coarse.',
        africa:
          'Carthage and Egypt carry Christian urban hatch over a pagan official layer. Sub-Saharan africa_trad is unchanged. No invented Christian Nubia on this step.',
        asia:
          'Sasanian Iran is a stronger zoroastrian umbrella. Manichaean hatch is minority only, in Mesopotamia and southwest Iran. Buddhist washes follow Gandhara, Bactria, and the Tarim. Han/successor China is imperial, with a Buddhist hatch in the interior — not a Buddhist empire.',
        americas: 'Unmapped gray. Americas are not invented.',
        oceania: 'Unmapped gray.',
      },
      sources:
        'Religion polygons © Fix Planet schematic reconstruction. Basemap: aourednik historical-basemaps world_200, GPL-3.0; Corresponding Source at github.com/aourednik/historical-basemaps. Manichaean is hatch/minority only from about 200. Not a census. Not Paradox.',
    },
    300: {
      title: '300 CE — eve of Constantine, majority pagan',
      caption:
        'On the eve of Constantine the Mediterranean is still majority pagan on this sheet. Christianity is a large urban minority in the East — hatch and partial colour, not a whole-empire Christian fill. Armenia is an optional Christian edge. Iran stays zoroastrian; India and China keep their umbrellas.',
      imageAlt:
        'Schematic world religion map for 300 CE: pagan majority around Rome, Christian urban minority in the East, Armenia edge, Americas unmapped',
      eraByContinent: {
        europe:
          'West and much of the Balkans stay roman_pagan. Eastern cities (Greece, Anatolia) take a Christian hatch. This is not “the empire is Christian.” Rural pagan practice is the default outside those hatches.',
        africa:
          'Egypt and Carthage show Christian urban hatch over a pagan official layer. Sub-Saharan africa_trad is still one coarse wash. No Aksum Christian fill yet.',
        asia:
          'Armenia is a cautious Christian edge. Iran is zoroastrian. India remains a hindu umbrella with buddhist corridors. China is chinese_imperial with Buddhist inroads. Manichaean hatch stays minority.',
        americas: 'Unmapped gray. Americas are not invented.',
        oceania: 'Unmapped gray.',
      },
      sources:
        'Religion polygons © Fix Planet schematic reconstruction. Basemap: aourednik historical-basemaps world_300, GPL-3.0; Corresponding Source at github.com/aourednik/historical-basemaps. Process companion (not this plate): spread of Christianity to AD 600, CC BY-SA 3.0. Not a census. Not Paradox.',
    },
    400: {
      title: '400 CE — post-Theodosius, not all Europe Christian',
      caption:
        'After Theodosius, Christianity expands among eastern and western elites and cities. Rural pagan hatch remains in Gaul, Britain, and interior Balkans — we do not paint all Europe solid Christian. Iran stays zoroastrian. Nubia and Aksum are optional cautious Christian edges. Americas stay unmapped.',
      imageAlt:
        'Schematic world religion map for 400 CE: Christian East and western urban belts, rural pagan hatch, zoroastrian Iran, Americas unmapped',
      eraByContinent: {
        europe:
          'East (Greece, Anatolia) reads more Christian. Italy, southern Gaul, and coastal Iberia show urban/elite Christian hatch over a still-pagan countryside. Germania and Scandinavia stay local_trad. This is not a solid Christian Europe.',
        africa:
          'Egypt and Roman Africa carry a stronger Christian urban mark. A cautious Christian edge is allowed at Nubia and Aksum — optional, not a painted kingdom. The rest of the continent stays african_trad.',
        asia:
          'Iran remains zoroastrian. Armenia keeps a Christian edge. India and China keep hindu and imperial umbrellas, with Buddhist corridors and inroads. No Islamic layer: it does not belong on a 400 plate.',
        americas: 'Still unmapped gray. We do not invent an American religion choropleth.',
        oceania: 'Still unmapped gray.',
      },
      sources:
        'Religion polygons © Fix Planet schematic reconstruction. Basemap: aourednik historical-basemaps world_400, GPL-3.0; Corresponding Source at github.com/aourednik/historical-basemaps. Process companion: Christianity spread to AD 600 (CC BY-SA 3.0). Not a census. Not Paradox.',
    },
    500: {
      title: '500 CE — former Roman world, rural pagan still showing',
      caption:
        'Around 500 CE Christianity has widened across much of the former Roman world, while rural pagan practice still shows in places. Sasanian Iran stays Zoroastrian; India and China keep their own major belts; Aksum and Nubia appear only as a light Christian edge. Americas and Oceania stay unmapped — we do not invent fills. Islam is not on this sheet.',
      imageAlt:
        'Schematic world religion map for 500 CE: Christian fill across much of the former Roman world, rural pagan hatch, Zoroastrian Iran, Indic and Chinese belts, Americas unmapped',
      honestyPills: [
        'Schematic reconstruction',
        'Not a census',
        'Old World focus',
        'Americas not shown',
      ],
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Expanding Christian fill in East and much of the West; rural pagan hatch where the plate shows it; Jewish communities as spots; northern fringe still local traditions.',
        },
        {
          heading: 'Southwest Asia / Iran',
          text: 'Zoroastrian Sasanian core; Jewish spots in the Near East.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu umbrella on India; Buddhist corridors; Chinese imperial.',
        },
        {
          heading: 'Africa',
          text: 'North Africa tied to the Mediterranean Christian/pagan mix; Sahel–south = coarse African traditional wash; Aksum/Nubia = optional Christian edge.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Not mapped.',
        },
      ],
      sources:
        'Religion polygons © Fix Planet schematic reconstruction — not a census. Basemap: aourednik/historical-basemaps (GPL-3.0) and Natural Earth land clip.',
    },
    600: {
      title: '600 CE — stronger Christian belt, Iran still Zoroastrian',
      caption:
        'By 600 CE the Christian belt across Afro-Eurasia’s Mediterranean world is stronger, but this sheet still shows Zoroastrian Iran, Hindu India, Buddhist corridors, and China’s imperial cult. Islam has not expanded as an empire colour here. Americas stay unmapped. For the one-tradition process map of Christianity to 600, see the companion plate.',
      imageAlt:
        'Schematic world religion map for 600 CE: wider Christian Mediterranean belt, Zoroastrian Iran, Hindu India, Buddhist corridors, Chinese imperial cult, Americas unmapped',
      honestyPills: [
        'Schematic reconstruction',
        'Not a census',
        'Old World focus',
        'Americas not shown',
      ],
      continentBlocks: [
        {
          heading: 'Europe',
          text: 'Wider Christian presence East and West; rural pagan remnants where shown; Jewish spots; far north still local traditions.',
        },
        {
          heading: 'SW Asia / Iran',
          text: 'Zoroastrian Iran still the main colour; Arabia without an Islamic empire wash.',
        },
        {
          heading: 'S/C/E Asia',
          text: 'Hindu India; Buddhist corridors; Chinese imperial / folk.',
        },
        {
          heading: 'Africa',
          text: 'Stronger Christian mark on Egypt and Roman Africa; Aksum/Nubia edge; south of Sahara = traditional wash.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Not mapped.',
        },
      ],
      sources:
        'Religion polygons © Fix Planet schematic reconstruction — not a census. Basemap: aourednik/historical-basemaps (GPL-3.0) and Natural Earth land clip. Process companion: Christianity spread to 600 (CC BY-SA 3.0).',
    },
  },
  ru: {
    1: {
      title: '1 н. э. — схематическая реконструкция',
      caption:
        'Схема Fix Planet названных традиций на начало нашей эры. Официальные гражданские культы Рима красят Средиземноморье; христианство — четыре городские точки (Палестина, Антиохия, Рим, Александрия), не заливка империи. Листа world_1 у aourednik нет; подложка — world_100, помечена как ближайшая.',
      imageAlt:
        'Схематическая карта религий мира на 1 год н. э.: языческое Средиземноморье, крошечные христианские точки, парфянский зороастрийский слой, зонтики Индии и Хань, Америка серым без заливки',
      eraByContinent: {
        europe:
          'Имперское и гражданское язычество от Британии и Галлии через Италию, Балканы и Анатолию. Еврейские общины — пятна в Риме и восточных городах. Христианство — горстка домашних церквей, слишком малая, чтобы красить провинцию. Севернее лимеса — грубый слой local_trad. Терракота — не «все верили одинаково».',
        africa:
          'Египет и Магриб в римском гражданском слое; в Александрии — еврейская и крошечная христианская метка. Южнее Сахары — одна заливка african_trad: ярлык незнания, не перепись культов. Аксум не красим как христианский.',
        asia:
          'Парфия — зороастрийский наклон, не закрытая государственная церковь. Иудея и восточная диаспора — еврейские пятна. Индия — индуистская заливка с буддийскими коридорами (Ганг, Шри-Ланка, Гандхара). Хань — chinese_imperial; dao_folk слит с этой заливкой. Степь и Аравия — local_trad.',
        americas: 'Серый unmapped. Слой религий Америк для 1 года мы не выдумываем.',
        oceania: 'Серый unmapped. Австралию и Тихий океан на этом листе религиями не заливаем.',
      },
      sources:
        'Полигоны религий © Fix Planet, схематическая реконструкция — не перепись, не Paradox. Подложка: aourednik historical-basemaps world_100 (ближайшая; нет world_1), GPL-3.0; Corresponding Source — github.com/aourednik/historical-basemaps. На геометрию GPL нет © Fix Planet. Музейный компаньон: Элизе Реклю, L’Homme et la Terre (1905), общественное достояние. Не обводили EU4, CK, GeaCron, Euratlas, Omniatlas, Maps of War, Hammond, Faruqi и reddit-карты государственных религий.',
    },
    100: {
      title: '100 н. э. — Траян всё ещё язычник',
      caption:
        'Те же зонтики Старого Света, что в 1 году. Рим Траяна официально языческий; империю христианской не красим. К первым четырём точкам добавляются Эфес, Коринф, Карфаген, Смирна. Кушанский мир — индо-буддийская смесь, не один государственный цвет.',
      imageAlt:
        'Схематическая карта религий на 100 год н. э.: языческое Средиземноморье, чуть больше христианских городских точек, кушанская буддийская смесь, Америка без заливки',
      eraByContinent: {
        europe:
          'Высокая империя на листе всё ещё граждански языческая. Дополнительные христианские точки — названные города, не провинции. Еврейские пятна остаются. Север и лесная Европа — local_trad. Христианского цвета империи нет.',
        africa:
          'Северная Африка в римской языческой заливке; христианские точки в Карфагене и Александрии. Южнее Сахары african_trad без перемен — это не деревенское обследование.',
        asia:
          'Парфия зороастрийски наклонена. Кушанские земли — буддийско-индийская смесь поверх индуистского зонта. Хань — китайский имперский слой. Буддийские коридоры Шёлкового пути ещё тонкие.',
        americas: 'По-прежнему без заливки. Прошедший век — не повод выдумывать Америку.',
        oceania: 'По-прежнему серый unmapped.',
      },
      sources:
        'Полигоны религий © Fix Planet, схема. Подложка: aourednik historical-basemaps world_100, GPL-3.0; Corresponding Source — github.com/aourednik/historical-basemaps. Не перепись. Не Paradox.',
    },
    200: {
      title: '200 н. э. — официально языческий Рим, гуще христианские города',
      caption:
        'Рим всё ещё официально языческий. Христианство — более густая городская штриховка в Сирии, Малой Азии, Египте, Риме и Карфагене, не заливка Средиземноморья. Тонкая манихейская штриховка в Месопотамии. Сасанидский Иран — сильнее зороастрийский. Буддийские коридоры Шёлкового пути гуще; Китай имперский с буддийскими вкраплениями.',
      imageAlt:
        'Схематическая карта религий на 200 год: языческий Рим, городская христианская штриховка, сасанидский зороастризм, буддизм Шёлкового пути, Америка без заливки',
      eraByContinent: {
        europe:
          'Официальный цвет — roman_pagan. Христианская штриховка на Риме и немногих западных городах. Сельский Запад — не карта церкви. Севернее лимеса — грубые местные традиции.',
        africa:
          'Карфаген и Египет несут городскую христианскую штриховку поверх языческого официального слоя. К югу от Сахары african_trad без перемен. Христианскую Нубию на этом шаге не выдумываем.',
        asia:
          'Сасанидский Иран — более сильный зороастрийский зонт. Манихейская штриховка — только меньшинство, Месопотамия и юго-запад Ирана. Буддийские смывы — Гандхара, Бактрия, Тарим. Китай имперский, с буддийской штриховкой внутри — не буддийская империя.',
        americas: 'Серый unmapped. Америку не выдумываем.',
        oceania: 'Серый unmapped.',
      },
      sources:
        'Полигоны религий © Fix Planet, схема. Подложка: aourednik historical-basemaps world_200, GPL-3.0; Corresponding Source — github.com/aourednik/historical-basemaps. Манихейство — только штрих/меньшинство примерно с 200 года. Не перепись. Не Paradox.',
    },
    300: {
      title: '300 н. э. — канун Константина, большинство языческое',
      caption:
        'Накануне Константина Средиземноморье на этом листе всё ещё в большинстве языческое. Христианство — крупное городское меньшинство на Востоке: штрих и частичный цвет, не христианская заливка всей империи. Армения — необязательный христианский край. Иран зороастрийский; Индия и Китай сохраняют зонты.',
      imageAlt:
        'Схематическая карта религий на 300 год: языческое большинство вокруг Рима, городское христианское меньшинство на Востоке, край Армении, Америка без заливки',
      eraByContinent: {
        europe:
          'Запад и большая часть Балкан — roman_pagan. Восточные города (Греция, Анатолия) — христианская штриховка. Это не «империя христианская». Сельская языческая практика — правило вне штрихов.',
        africa:
          'Египет и Карфаген — городская христианская штриховка поверх языческого официального слоя. К югу от Сахары — всё тот же грубый african_trad. Аксум ещё не залит как христианский.',
        asia:
          'Армения — осторожный христианский край. Иран зороастрийский. Индия — индуистский зонт с буддийскими коридорами. Китай — имперский слой с буддийскими вкраплениями. Манихейская штриховка остаётся меньшинством.',
        americas: 'Серый unmapped. Америку не выдумываем.',
        oceania: 'Серый unmapped.',
      },
      sources:
        'Полигоны религий © Fix Planet, схема. Подложка: aourednik historical-basemaps world_300, GPL-3.0; Corresponding Source — github.com/aourednik/historical-basemaps. Компаньон процесса (не этот лист): распространение христианства до 600, CC BY-SA 3.0. Не перепись. Не Paradox.',
    },
    400: {
      title: '400 н. э. — после Феодосия, не вся Европа христианская',
      caption:
        'После Феодосия христианство растёт среди элит и городов Востока и Запада. Сельская языческая штриховка остаётся в Галлии, Британии и внутренних Балканах — всю Европу сплошным христианством не красим. Иран зороастрийский. Нубия и Аксум — осторожные необязательные христианские края. Америка без заливки.',
      imageAlt:
        'Схематическая карта религий на 400 год: христианский Восток и западные городские пояса, сельская языческая штриховка, зороастрийский Иран, Америка без заливки',
      eraByContinent: {
        europe:
          'Восток (Греция, Анатолия) читается более христианским. Италия, южная Галлия и побережье Иберии — городская/элитная христианская штриховка поверх всё ещё языческой деревни. Германия и Скандинавия — local_trad. Это не сплошная христианская Европа.',
        africa:
          'Египет и римская Африка — сильнее городская христианская метка. Осторожный христианский край у Нубии и Аксума — по желанию, не закрашенное царство. Остальной континент — african_trad.',
        asia:
          'Иран зороастрийский. Армения сохраняет христианский край. Индия и Китай — индуистский и имперский зонты, буддийские коридоры и вкрапления. Исламского слоя нет: ему не место на листе 400 года.',
        americas: 'По-прежнему серый unmapped. Американский хороплет религий не выдумываем.',
        oceania: 'По-прежнему серый unmapped.',
      },
      sources:
        'Полигоны религий © Fix Planet, схема. Подложка: aourednik historical-basemaps world_400, GPL-3.0; Corresponding Source — github.com/aourednik/historical-basemaps. Компаньон процесса: распространение христианства до 600 (CC BY-SA 3.0). Не перепись. Не Paradox.',
    },
    500: {
      title: '500 н. э. — бывший римский мир, сельское язычество ещё видно',
      caption:
        'Около 500 г. н. э. христианство шире по бывшему римскому миру, но сельское язычество ещё видно местами. Сасанидский Иран остаётся зороастрийским; Индия и Китай держат свои крупные пояса; Аксум и Нубия — лишь лёгкий христианский край. Америка и Океания не наносятся. Ислама на этом листе нет.',
      imageAlt:
        'Схематическая карта религий на 500 год н. э.: христианская заливка бывшего римского мира, сельская языческая штриховка, зороастрийский Иран, пояса Индии и Китая, Америка без заливки',
      honestyPills: [
        'Схематическая реконструкция',
        'Не перепись',
        'Фокус: Старый Свет',
        'Америка не нанесена',
      ],
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'растущая христианская заливка на Востоке и большей части Запада; сельская языческая штриховка где видно на листе; иудейские общины точечно; северный край — местные традиции.',
        },
        {
          heading: 'Юго-Западная Азия / Иран',
          text: 'зороастрийское сасанидское ядро; иудейские пятна на Ближнем Востоке.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'индуистский зонт в Индии; буддийские коридоры; китайский имперский слой.',
        },
        {
          heading: 'Африка',
          text: 'север связан со средиземноморским христианско-языческим миксом; Сахель и юг — грубый традиционный фон; Аксум/Нубия — осторожный христианский край.',
        },
        {
          heading: 'Америка / Океания',
          text: 'не нанесено.',
        },
      ],
      sources:
        'Полигоны религий © Fix Planet, схематическая реконструкция — не перепись. Подложка: aourednik/historical-basemaps (GPL-3.0) и обрезка суши Natural Earth.',
    },
    600: {
      title: '600 н. э. — сильнее христианский пояс, Иран зороастрийский',
      caption:
        'К 600 г. н. э. христианский пояс средиземноморского Старого Света сильнее, но на листе по-прежнему зороастрийский Иран, индуистская Индия, буддийские коридоры и имперский культ Китая. Ислам здесь ещё не цвет империи. Америка не нанесена. Карта процесса «христианство → 600» — отдельный компаньон.',
      imageAlt:
        'Схематическая карта религий на 600 год н. э.: шире христианский средиземноморский пояс, зороастрийский Иран, индуистская Индия, буддийские коридоры, имперский культ Китая, Америка без заливки',
      honestyPills: [
        'Схематическая реконструкция',
        'Не перепись',
        'Фокус: Старый Свет',
        'Америка не нанесена',
      ],
      continentBlocks: [
        {
          heading: 'Европа',
          text: 'более широкое христианское присутствие на Востоке и Западе; сельские языческие остатки где видно; иудейские пятна; дальний север — местные традиции.',
        },
        {
          heading: 'Юго-Западная Азия / Иран',
          text: 'зороастрийский Иран по-прежнему основной цвет; Аравия без заливки исламской империи.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'индуистская Индия; буддийские коридоры; китайский имперский / народный слой.',
        },
        {
          heading: 'Африка',
          text: 'сильнее христианская метка на Египте и римской Африке; край Аксума/Нубии; южнее Сахары — традиционный фон.',
        },
        {
          heading: 'Америка / Океания',
          text: 'не нанесено.',
        },
      ],
      sources:
        'Полигоны религий © Fix Planet, схематическая реконструкция — не перепись. Подложка: aourednik/historical-basemaps (GPL-3.0) и обрезка суши Natural Earth. Компаньон процесса: распространение христианства до 600 (CC BY-SA 3.0).',
    },
  },
  pl: {
    1: {
      title: '1 n.e. — rekonstrukcja schematyczna',
      caption:
        'Schemat Fix Planet nazwanych tradycji na początek naszej ery. Oficjalne kulty obywatelskie Rzymu barwią Śródziemnomorze; chrześcijaństwo to cztery miejskie kropki — Palestyna, Antiochia, Rzym, Aleksandria — nie wypełnienie cesarstwa. Nie ma arkusza world_1; podkład to world_100, oznaczony jako najbliższy.',
      imageAlt:
        'Schematyczna mapa religii świata na rok 1 n.e.: pogańskie Śródziemnomorze, maleńkie kropki chrześcijańskie, partyjska plama zoroastryjska, parasole Indii i Han, Ameryki szare bez wypełnienia',
      eraByContinent: {
        europe:
          'Pogaństwo cesarskie i obywatelskie od Brytanii i Galii przez Italię, Bałkany i Anatolię. Wspólnoty żydowskie to plamy w Rzymie i miastach wschodu. Chrześcijaństwo to garść kościołów domowych, za mała, by malować prowincję. Na północ od limes — gruba plama local_trad. Terakota to nie „wszyscy wierzyli tak samo”.',
        africa:
          'Egipt i Maghreb w rzymskiej warstwie kultu obywatelskiego; w Aleksandrii plama żydowska i maleńka chrześcijańska. Na południe od Sahary jedna plama african_trad — etykieta niewiedzy, nie spis kultów. Aksum nie malujemy jako chrześcijańskiego.',
        asia:
          'Partia jest zoroastryjsko nachylona, nie zamkniętym kościołem państwowym. Judea i wschodnia diaspora to plamy żydowskie. Indie to plama hindu z korytarzami buddyjskimi (Ganges, Sri Lanka, Gandhara). Han to chinese_imperial; dao_folk jest zlane z tym wypełnieniem. Step i Arabia zostają local_trad.',
        americas: 'Szary unmapped. Warstwy religii Ameryk dla roku 1 nie wymyślamy.',
        oceania: 'Szary unmapped. Australii i Pacyfiku nie zalewamy tu jako religii.',
      },
      sources:
        'Wielokąty religii © Fix Planet, rekonstrukcja schematyczna — nie spis, nie Paradox. Podkład: aourednik historical-basemaps world_100 (najbliższy; brak world_1), GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Brak © Fix Planet na geometrii GPL. Towarzysz muzealny: Élisée Reclus, L’Homme et la Terre (1905), domena publiczna. Nie obrysowane z EU4, CK, GeaCron, Euratlas, Omniatlas, Maps of War, Hammond, Faruqi ani redditowych map religii państwowych.',
    },
    100: {
      title: '100 n.e. — Trajan wciąż pogański',
      caption:
        'Te same parasole Starego Świata co w roku 1. Rzym Trajana jest wciąż oficjalnie pogański; cesarstwa nie malujemy jako chrześcijańskiego. Do pierwszych czterech kropek dołączają Efez, Korynt, Kartagina, Smyrna. Świat kuszański to mieszanka indyjsko-buddyjska, nie jeden kolor państwa.',
      imageAlt:
        'Schematyczna mapa religii na rok 100 n.e.: pogańskie Śródziemnomorze, nieco więcej chrześcijańskich kropek miejskich, mieszanka kuszańska, Ameryki bez wypełnienia',
      eraByContinent: {
        europe:
          'Wysokie cesarstwo jest na arkuszu wciąż obywatelsko pogańskie. Dodatkowe kropki chrześcijańskie to nazwane miasta, nie prowincje. Plamy żydowskie zostają. Północ i leśna Europa — local_trad. Nie ma chrześcijańskiego koloru cesarstwa.',
        africa:
          'Afryka Północna w rzymskiej plamie pogańskiej; kropki chrześcijańskie w Kartaginie i Aleksandrii. Na południe od Sahary african_trad bez zmian — to nie badanie wsi.',
        asia:
          'Partia pozostaje zoroastryjsko nachylona. Ziemie kuszańskie biorą mieszankę buddyjsko-indyjską na parasolu hindu. Han zostaje chinese_imperial. Korytarze buddyjskie Jedwabnego Szlaku są jeszcze cienkie.',
        americas: 'Nadal bez wypełnienia. Upływ stulecia nie jest powodem, by wymyślać Ameryki.',
        oceania: 'Nadal szary unmapped.',
      },
      sources:
        'Wielokąty religii © Fix Planet, schemat. Podkład: aourednik historical-basemaps world_100, GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Nie spis. Nie Paradox.',
    },
    200: {
      title: '200 n.e. — oficjalnie pogański, gęstsze miasta chrześcijańskie',
      caption:
        'Rzym jest wciąż oficjalnie pogański. Chrześcijaństwo to gęstsze miejskie kreskowanie w Syrii, Azji Mniejszej, Egipcie, Rzymie i Kartaginie — nie wypełnienie Śródziemnomorza. Cienkie kreskowanie manichejskie w Mezopotamii. Sasanidzki Iran to silniejsza plama zoroastryjska. Korytarze buddyjskie gęstnieją na Jedwabnym Szlaku; Chiny zostają imperialne z wcięciami buddyjskimi.',
      imageAlt:
        'Schematyczna mapa religii na rok 200: pogański Rzym, miejskie kreskowanie chrześcijańskie, sasanidzki zoroastryzm, buddyzm Jedwabnego Szlaku, Ameryki bez wypełnienia',
      eraByContinent: {
        europe:
          'Oficjalny kolor to nadal roman_pagan. Kreskowanie chrześcijańskie siada na Rzymie i kilku miastach zachodu. Wieś zachodnia to nie mapa Kościoła. Na północ od limes — grube tradycje lokalne.',
        africa:
          'Kartagina i Egipt niosą miejskie kreskowanie chrześcijańskie na pogańskiej warstwie oficjalnej. Na południe od Sahary african_trad bez zmian. Chrześcijańskiej Nubii na tym kroku nie wymyślamy.',
        asia:
          'Sasanidzki Iran to silniejszy parasol zoroastryjski. Kreskowanie manichejskie jest tylko mniejszością, w Mezopotamii i południowo-zachodnim Iranie. Plamy buddyjskie idą przez Gandharę, Baktrię i Tarim. Chiny są imperialne, z kreskowaniem buddyjskim wewnątrz — nie cesarstwo buddyjskie.',
        americas: 'Szary unmapped. Ameryk nie wymyślamy.',
        oceania: 'Szary unmapped.',
      },
      sources:
        'Wielokąty religii © Fix Planet, schemat. Podkład: aourednik historical-basemaps world_200, GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Manicheizm to tylko kreska/mniejszość od ok. 200. Nie spis. Nie Paradox.',
    },
    300: {
      title: '300 n.e. — przeddzień Konstantyna, większość pogańska',
      caption:
        'W przeddzień Konstantyna Śródziemnomorze jest na tym arkuszu wciąż w większości pogańskie. Chrześcijaństwo to duża miejska mniejszość na Wschodzie — kreska i częściowy kolor, nie chrześcijańskie wypełnienie całego cesarstwa. Armenia to opcjonalna krawędź chrześcijańska. Iran zostaje zoroastryjski; Indie i Chiny trzymają parasole.',
      imageAlt:
        'Schematyczna mapa religii na rok 300: pogańska większość wokół Rzymu, miejska mniejszość chrześcijańska na Wschodzie, krawędź Armenii, Ameryki bez wypełnienia',
      eraByContinent: {
        europe:
          'Zachód i większość Bałkanów zostają roman_pagan. Miasta wschodu (Grecja, Anatolia) biorą kreskowanie chrześcijańskie. To nie „cesarstwo jest chrześcijańskie”. Wiejska praktyka pogańska jest regułą poza kreskami.',
        africa:
          'Egipt i Kartagina pokazują miejskie kreskowanie chrześcijańskie na pogańskiej warstwie oficjalnej. Na południe od Sahary nadal jedna gruba plama african_trad. Aksum jeszcze nie jest wypełnione jako chrześcijańskie.',
        asia:
          'Armenia to ostrożna krawędź chrześcijańska. Iran jest zoroastryjski. Indie pozostają parasolem hindu z korytarzami buddyjskimi. Chiny to chinese_imperial z wcięciami buddyjskimi. Kreskowanie manichejskie zostaje mniejszością.',
        americas: 'Szary unmapped. Ameryk nie wymyślamy.',
        oceania: 'Szary unmapped.',
      },
      sources:
        'Wielokąty religii © Fix Planet, schemat. Podkład: aourednik historical-basemaps world_300, GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Towarzysz procesu (nie ta płyta): rozprzestrzenianie chrześcijaństwa do 600, CC BY-SA 3.0. Nie spis. Nie Paradox.',
    },
    400: {
      title: '400 n.e. — po Teodozjuszu, nie cała Europa chrześcijańska',
      caption:
        'Po Teodozjuszu chrześcijaństwo rozszerza się wśród elit i miast Wschodu i Zachodu. Wiejskie kreskowanie pogańskie zostaje w Galii, Brytanii i na wewnętrznych Bałkanach — nie malujemy całej Europy na solidne chrześcijaństwo. Iran zostaje zoroastryjski. Nubia i Aksum to ostrożne, opcjonalne krawędzie chrześcijańskie. Ameryki bez wypełnienia.',
      imageAlt:
        'Schematyczna mapa religii na rok 400: chrześcijański Wschód i zachodnie pasy miejskie, wiejskie kreskowanie pogańskie, zoroastryjski Iran, Ameryki bez wypełnienia',
      eraByContinent: {
        europe:
          'Wschód (Grecja, Anatolia) czyta się bardziej chrześcijańsko. Italia, południowa Galia i wybrzeże Iberii pokazują miejskie/elitowe kreskowanie chrześcijańskie na wciąż pogańskiej wsi. Germania i Skandynawia zostają local_trad. To nie jest lita chrześcijańska Europa.',
        africa:
          'Egipt i Afryka rzymska niosą silniejszy miejski znak chrześcijański. Ostrożna krawędź chrześcijańska przy Nubii i Aksum — opcjonalna, nie zamalowane królestwo. Reszta kontynentu zostaje african_trad.',
        asia:
          'Iran pozostaje zoroastryjski. Armenia trzyma krawędź chrześcijańską. Indie i Chiny trzymają parasole hindu i imperialny, z korytarzami i wcięciami buddyjskimi. Nie ma warstwy islamu: nie należy do płyty z roku 400.',
        americas: 'Nadal szary unmapped. Nie wymyślamy amerykańskiego choroplethu religii.',
        oceania: 'Nadal szary unmapped.',
      },
      sources:
        'Wielokąty religii © Fix Planet, schemat. Podkład: aourednik historical-basemaps world_400, GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Towarzysz procesu: rozprzestrzenianie chrześcijaństwa do 600 (CC BY-SA 3.0). Nie spis. Nie Paradox.',
    },
    500: {
      title: '500 n.e. — dawny świat rzymski, wiejskie pogaństwo wciąż widoczne',
      caption:
        'Około 500 n.e. chrześcijaństwo rozszerzyło się na dużą część dawnego świata rzymskiego, ale wiejska praktyka pogańska wciąż widać w niektórych miejscach. Sasanidzki Iran zostaje zoroastryjski; Indie i Chiny trzymają własne wielkie pasy; Aksum i Nubia pojawiają się tylko jako lekka krawędź chrześcijańska. Ameryk i Oceanii nie naniesiono — wypełnień nie wymyślamy. Islamu nie ma na tym arkuszu.',
      imageAlt:
        'Schematyczna mapa religii na rok 500 n.e.: chrześcijańskie wypełnienie dawnego świata rzymskiego, wiejskie kreskowanie pogańskie, zoroastryjski Iran, pasy Indii i Chin, Ameryki bez wypełnienia',
      honestyPills: [
        'Rekonstrukcja schematyczna',
        'Nie spis',
        'Stary Świat',
        'Ameryk nie pokazano',
      ],
      continentBlocks: [
        {
          heading: 'Europa / Śródziemnomorze',
          text: 'Rosnące wypełnienie chrześcijańskie na Wschodzie i większej części Zachodu; wiejskie kreskowanie pogańskie tam, gdzie widać je na płycie; wspólnoty żydowskie jako plamy; północny skraj nadal tradycje lokalne.',
        },
        {
          heading: 'Azja Południowo-Zachodnia / Iran',
          text: 'Zoroastryjski rdzeń sasanidzki; plamy żydowskie na Bliskim Wschodzie.',
        },
        {
          heading: 'Azja Południowa / Środkowa / Wschodnia',
          text: 'Parasol hindu w Indiach; korytarze buddyjskie; chińska warstwa imperialna.',
        },
        {
          heading: 'Afryka',
          text: 'Afryka Północna związana ze śródziemnomorską mieszanką chrześcijańsko-pogańską; Sahel i południe = grube tradycyjne tło afrykańskie; Aksum/Nubia = ostrożna krawędź chrześcijańska.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Nie naniesione.',
        },
      ],
      sources:
        'Wielokąty religii © Fix Planet, rekonstrukcja schematyczna — nie spis. Podkład: aourednik/historical-basemaps (GPL-3.0) oraz przycięcie lądu Natural Earth.',
    },
    600: {
      title: '600 n.e. — silniejszy pas chrześcijański, Iran zoroastryjski',
      caption:
        'Do 600 n.e. chrześcijański pas śródziemnomorskiego świata Afroeuroazji jest silniejszy, ale arkusz nadal pokazuje zoroastryjski Iran, hinduistyczne Indie, korytarze buddyjskie i chiński kult imperialny. Islam nie rozszerzył się tu jako kolor cesarstwa. Ameryk nie naniesiono. Jednotradycyjna mapa procesu chrześcijaństwa do 600 jest na płycie towarzyszącej.',
      imageAlt:
        'Schematyczna mapa religii na rok 600 n.e.: szerszy chrześcijański pas śródziemnomorski, zoroastryjski Iran, hinduistyczne Indie, korytarze buddyjskie, chiński kult imperialny, Ameryki bez wypełnienia',
      honestyPills: [
        'Rekonstrukcja schematyczna',
        'Nie spis',
        'Stary Świat',
        'Ameryk nie pokazano',
      ],
      continentBlocks: [
        {
          heading: 'Europa',
          text: 'Szersza obecność chrześcijańska na Wschodzie i Zachodzie; wiejskie resztki pogańskie tam, gdzie pokazane; plamy żydowskie; daleka północ nadal tradycje lokalne.',
        },
        {
          heading: 'Azja Pd.-Zach. / Iran',
          text: 'Zoroastryjski Iran nadal głównym kolorem; Arabia bez wypełnienia islamskiego cesarstwa.',
        },
        {
          heading: 'Azja Pd. / Środkowa / Wsch.',
          text: 'Hinduistyczne Indie; korytarze buddyjskie; chiński imperialny / ludowy.',
        },
        {
          heading: 'Afryka',
          text: 'Silniejszy znak chrześcijański na Egipcie i Afryce rzymskiej; krawędź Aksum/Nubii; na południe od Sahary = tło tradycyjne.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Nie naniesione.',
        },
      ],
      sources:
        'Wielokąty religii © Fix Planet, rekonstrukcja schematyczna — nie spis. Podkład: aourednik/historical-basemaps (GPL-3.0) oraz przycięcie lądu Natural Earth. Towarzysz procesu: rozprzestrzenianie chrześcijaństwa do 600 (CC BY-SA 3.0).',
    },
  },
  lv: {
    1: {
      title: '1. m.ē. — shēmatiska rekonstrukcija',
      caption:
        'Fix Planet shēma par nosauktām tradīcijām mūsu ēras sākumā. Romas oficiālie pilsoniskie kulti krāso Vidusjūru; kristietība ir četri pilsētu punkti — Palestīna, Antiohija, Roma, Aleksandrija — ne impērijas aizpilde. aourednik world_1 lapas nav; apakšslānis ir world_100, atzīmēts kā tuvākais.',
      imageAlt:
        'Shēmatiska pasaules reliģiju karte 1. gadam m.ē.: romiešu pagāniskā Vidusjūra, sīki kristiešu punkti, partiešu zoroastriskā josla, Indijas un Haņu lietussargi, Amerika pelēka bez aizpildes',
      eraByContinent: {
        europe:
          'Impērijas un pilsoniskais pagānisms no Britānijas un Gallijas caur Itāliju, Balkāniem un Anatoliju. Ebreju kopienas ir plankumi Romā un austrumu pilsētās. Kristietība ir saujiņa mājas baznīcu, par mazu, lai krāsotu provinci. Uz ziemeļiem no limes — rupjš local_trad slānis. Terakota nav „visi ticēja vienādi”.',
        africa:
          'Ēģipte un Magriba romiešu pilsoniskajā slānī; Aleksandrijā ebreju un sīka kristiešu zība. Uz dienvidiem no Sahāras viena african_trad aizpilde — nezināšanas etiķete, ne kultu tautas skaitīšana. Aksumu kā kristīgu nekrāsojam.',
        asia:
          'Partija ir zoroastriski sliecoša, ne slēgta valsts baznīca. Jūdeja un austrumu diaspora — ebreju plankumi. Indija ir hindu aizpilde ar budistu koridoriem (Ganga, Šrilanka, Gandhāra). Haņu Ķīna ir chinese_imperial; dao_folk sapludināts ar šo aizpildi. Stepe un Arābija paliek local_trad.',
        americas: 'Pelēks unmapped. Amerikas reliģiju slāni 1. gadam neizdomājam.',
        oceania: 'Pelēks unmapped. Austrāliju un Kluso okeānu šajā plāksnē kā reliģijas neaizpildām.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet shēmatiska rekonstrukcija — ne tautas skaitīšana, ne Paradox. Apakšslānis: aourednik historical-basemaps world_100 (tuvākais; nav world_1), GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Uz GPL ģeometriju nav © Fix Planet. Muzeja pavadonis: Élisée Reclus, L’Homme et la Terre (1905), sabiedriskais īpašums. Nav pārzīmēts no EU4, CK, GeaCron, Euratlas, Omniatlas, Maps of War, Hammond, Faruqi vai Reddit valsts reliģiju kartēm.',
    },
    100: {
      title: '100. m.ē. — Trajāns joprojām pagāns',
      caption:
        'Tie paši Vecās pasaules lietussargi kā 1. gadā. Trajāna Roma joprojām oficiāli pagāniska; impēriju kā kristīgu nekrāsojam. Pirmajiem četriem punktiem pievienojas Efesa, Korinta, Kartāga, Smirna. Kušanu pasaule ir indiski–budistu sajaukums, ne viena valsts krāsa.',
      imageAlt:
        'Shēmatiska reliģiju karte 100. gadam m.ē.: pagāniska Vidusjūra, nedaudz vairāk kristiešu pilsētu punktu, kušanu budistu sajaukums, Amerika bez aizpildes',
      eraByContinent: {
        europe:
          'Augstā impērija lapā joprojām ir pilsoniski pagāniska. Papildu kristiešu punkti ir nosauktas pilsētas, ne provinces. Ebreju plankumi paliek. Ziemeļi un mežu Eiropa — local_trad. Impērijas kristīgās krāsas nav.',
        africa:
          'Ziemeļāfrika paliek romiešu pagāniskajā aizpildē; kristiešu punkti Kartāgā un Aleksandrijā. Uz dienvidiem no Sahāras african_trad bez izmaiņām — tā nav ciemu aptauja.',
        asia:
          'Partija paliek zoroastriski sliecoša. Kušanu zemes ņem budistu/indisku sajaukumu virs hindu lietussarga. Haņu Ķīna paliek chinese_imperial. Zīda ceļa budistu koridori vēl plāni.',
        americas: 'Joprojām bez aizpildes. Gadsimta paišana nav iemesls izdomāt Ameriku.',
        oceania: 'Joprojām pelēks unmapped.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet shēma. Apakšslānis: aourednik historical-basemaps world_100, GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Ne tautas skaitīšana. Ne Paradox.',
    },
    200: {
      title: '200. m.ē. — oficiāli pagāniska, blīvākas kristiešu pilsētas',
      caption:
        'Roma joprojām oficiāli pagāniska. Kristietība rādās kā blīvāks pilsētu šrafējums Sīrijā, Mazāzijā, Ēģiptē, Romā un Kartāgā — ne Vidusjūras aizpilde. Plāns maniheiešu šrafējums Mezopotāmijā. Sasānīdu Irāna ir stiprāka zoroastriskā josla. Budistu koridori biezāki uz Zīda ceļa; Ķīna paliek impērijas ar budistu ieplūdēm.',
      imageAlt:
        'Shēmatiska reliģiju karte 200. gadam: pagāniskā Roma, kristiešu pilsētu šrafējums, sasānīdu zoroastrisms, Zīda ceļa budisms, Amerika bez aizpildes',
      eraByContinent: {
        europe:
          'Oficiālā krāsa joprojām ir roman_pagan. Kristiešu šrafējums sēž uz Romas un dažām rietumu pilsētām. Lauku Rietumi nav baznīcas karte. Uz ziemeļiem no limes — rupjas vietējās tradīcijas.',
        africa:
          'Kartāga un Ēģipte nes kristiešu pilsētu šrafējumu virs pagāniska oficiālā slāņa. Uz dienvidiem no Sahāras african_trad bez izmaiņām. Kristīgu Nūbiju šajā solī neizdomājam.',
        asia:
          'Sasānīdu Irāna ir stiprāks zoroastriskais lietussargs. Maniheiešu šrafējums ir tikai minoritāte, Mezopotāmijā un dienvidrietumu Irānā. Budistu joslas iet caur Gandhāru, Baktriju un Tarimu. Ķīna ir impērijas, ar budistu šrafējumu iekšienē — ne budistu impērija.',
        americas: 'Pelēks unmapped. Ameriku neizdomājam.',
        oceania: 'Pelēks unmapped.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet shēma. Apakšslānis: aourednik historical-basemaps world_200, GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Maniheisms ir tikai šrafējums/minoritāte no apmēram 200. gada. Ne tautas skaitīšana. Ne Paradox.',
    },
    300: {
      title: '300. m.ē. — Konstantīna priekšvakarā, vairākums pagānisks',
      caption:
        'Konstantīna priekšvakarā Vidusjūra šajā lapā joprojām ir vairākumā pagāniska. Kristietība ir liela pilsētu minoritāte Austrumos — šrafējums un daļēja krāsa, ne visas impērijas kristīga aizpilde. Armēnija ir izvēles kristīga mala. Irāna paliek zoroastriska; Indija un Ķīna patur lietussargus.',
      imageAlt:
        'Shēmatiska reliģiju karte 300. gadam: pagānisks vairākums ap Romu, kristiešu pilsētu minoritāte Austrumos, Armēnijas mala, Amerika bez aizpildes',
      eraByContinent: {
        europe:
          'Rietumi un liela daļa Balkānu paliek roman_pagan. Austrumu pilsētas (Grieķija, Anatolija) ņem kristiešu šrafējumu. Tas nav „impērija ir kristīga”. Lauku pagāniskā prakse ir noklusējums ārpus šrafējumiem.',
        africa:
          'Ēģipte un Kartāga rāda kristiešu pilsētu šrafējumu virs pagāniska oficiālā slāņa. Uz dienvidiem no Sahāras joprojām viena rupja african_trad josla. Aksumu vēl neaizpildām kā kristīgu.',
        asia:
          'Armēnija ir piesardzīga kristīga mala. Irāna ir zoroastriska. Indija paliek hindu lietussargs ar budistu koridoriem. Ķīna ir chinese_imperial ar budistu ieplūdēm. Maniheiešu šrafējums paliek minoritāte.',
        americas: 'Pelēks unmapped. Ameriku neizdomājam.',
        oceania: 'Pelēks unmapped.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet shēma. Apakšslānis: aourednik historical-basemaps world_300, GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Procesa pavadonis (ne šī plāksne): kristietības izplatība līdz 600., CC BY-SA 3.0. Ne tautas skaitīšana. Ne Paradox.',
    },
    400: {
      title: '400. m.ē. — pēc Teodosija, ne visa Eiropa kristīga',
      caption:
        'Pēc Teodosija kristietība izplešas austrumu un rietumu elitei un pilsētām. Lauku pagāniskais šrafējums paliek Gallijā, Britānijā un iekšējos Balkānos — mēs nekrāsojam visu Eiropu kā vienlaidu kristīgu. Irāna paliek zoroastriska. Nūbija un Aksums ir izvēles piesardzīgas kristīgas malas. Amerika paliek bez aizpildes.',
      imageAlt:
        'Shēmatiska reliģiju karte 400. gadam: kristīgie Austrumi un rietumu pilsētu joslas, lauku pagāniskais šrafējums, zoroastriskā Irāna, Amerika bez aizpildes',
      eraByContinent: {
        europe:
          'Austrumi (Grieķija, Anatolija) lasās kristīgāki. Itālija, dienvidu Gallija un Ibērijas piekraste rāda pilsētu/elites kristiešu šrafējumu virs joprojām pagāniskiem laukiem. Ģermānija un Skandināvija paliek local_trad. Tā nav vienlaidu kristīga Eiropa.',
        africa:
          'Ēģipte un romiešu Āfrika nes stiprāku kristiešu pilsētu zīmi. Piesardzīga kristīga mala Nūbijā un Aksumā — izvēles, ne aizkrāsota karaliste. Pārējais kontinents paliek african_trad.',
        asia:
          'Irāna paliek zoroastriska. Armēnija patur kristīgu malu. Indija un Ķīna patur hindu un impērijas lietussargus, ar budistu koridoriem un ieplūdēm. Islāma slāņa nav: tas nepieder 400. gada plāksnei.',
        americas: 'Joprojām pelēks unmapped. Amerikas reliģiju horoplētu neizdomājam.',
        oceania: 'Joprojām pelēks unmapped.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet shēma. Apakšslānis: aourednik historical-basemaps world_400, GPL-3.0; Corresponding Source: github.com/aourednik/historical-basemaps. Procesa pavadonis: kristietības izplatība līdz 600. (CC BY-SA 3.0). Ne tautas skaitīšana. Ne Paradox.',
    },
    500: {
      title: '500. m.ē. — bijusī romiešu pasaule, lauku pagānisms joprojām redzams',
      caption:
        'Ap 500. gadu m.ē. kristietība ir paplašinājusies lielā daļā bijušās romiešu pasaules, bet lauku pagāniskā prakse joprojām vietām redzama. Sasānīdu Irāna paliek zoroastriska; Indija un Ķīna patur savas lielās joslas; Aksums un Nūbija parādās tikai kā viegla kristīga mala. Amerika un Okeānija paliek bez aizpildes — mēs tās neizdomājam. Islāma uz šīs lapas nav.',
      imageAlt:
        'Shēmatiska reliģiju karte 500. gadam m.ē.: kristīga aizpilde bijušajā romiešu pasaulē, lauku pagāniskais šrafējums, zoroastriskā Irāna, Indijas un Ķīnas joslas, Amerika bez aizpildes',
      honestyPills: [
        'Shēmatiska rekonstrukcija',
        'Ne tautas skaitīšana',
        'Vecā pasaule',
        'Amerika nav rādīta',
      ],
      continentBlocks: [
        {
          heading: 'Eiropa / Vidusjūra',
          text: 'Augoša kristīga aizpilde Austrumos un lielā daļā Rietumu; lauku pagāniskais šrafējums tur, kur tas redzams plāksnē; ebreju kopienas kā plankumi; ziemeļu mala joprojām vietējās tradīcijas.',
        },
        {
          heading: 'Dienvidrietumāzija / Irāna',
          text: 'Zoroastriskais sasānīdu kodols; ebreju plankumi Tuvajos Austrumos.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hindu lietussargs Indijā; budistu koridori; Ķīnas impērijas slānis.',
        },
        {
          heading: 'Āfrika',
          text: 'Ziemeļāfrika saistīta ar Vidusjūras kristiešu/pagānu sajaukumu; Sahela un dienvidi = rupjš Āfrikas tradicionālais fons; Aksums/Nūbija = piesardzīga kristīga mala.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Nav kartēts.',
        },
      ],
      sources:
        'Reliģiju daudzstūri © Fix Planet shēmatiska rekonstrukcija — ne tautas skaitīšana. Apakšslānis: aourednik/historical-basemaps (GPL-3.0) un Natural Earth sauszemes izgriezums.',
    },
    600: {
      title: '600. m.ē. — stiprāka kristiešu josla, Irāna zoroastriska',
      caption:
        'Līdz 600. gadam m.ē. kristiešu josla Āfroeiropāzijas Vidusjūras pasaulē ir stiprāka, bet lapā joprojām ir zoroastriskā Irāna, hindu Indija, budistu koridori un Ķīnas impērijas kults. Islāms šeit nav izpleties kā impērijas krāsa. Amerika paliek bez aizpildes. Vienas tradīcijas procesa karte „kristietība → 600” ir atsevišķs pavadonis.',
      imageAlt:
        'Shēmatiska reliģiju karte 600. gadam m.ē.: platāka kristiešu Vidusjūras josla, zoroastriskā Irāna, hindu Indija, budistu koridori, Ķīnas impērijas kults, Amerika bez aizpildes',
      honestyPills: [
        'Shēmatiska rekonstrukcija',
        'Ne tautas skaitīšana',
        'Vecā pasaule',
        'Amerika nav rādīta',
      ],
      continentBlocks: [
        {
          heading: 'Eiropa',
          text: 'Platāka kristiešu klātbūtne Austrumos un Rietumos; lauku pagāniskās paliekas tur, kur rādīts; ebreju plankumi; tālākie ziemeļi joprojām vietējās tradīcijas.',
        },
        {
          heading: 'Dienvidrietumāzija / Irāna',
          text: 'Zoroastriskā Irāna joprojām galvenā krāsa; Arābija bez islāma impērijas aizpildes.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hindu Indija; budistu koridori; Ķīnas impērijas / tautas slānis.',
        },
        {
          heading: 'Āfrika',
          text: 'Stipāka kristiešu zīme Ēģiptē un romiešu Āfrikā; Aksuma/Nūbijas mala; uz dienvidiem no Sahāras = tradicionālais fons.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Nav kartēts.',
        },
      ],
      sources:
        'Reliģiju daudzstūri © Fix Planet shēmatiska rekonstrukcija — ne tautas skaitīšana. Apakšslānis: aourednik/historical-basemaps (GPL-3.0) un Natural Earth sauszemes izgriezums. Procesa pavadonis: kristietības izplatība līdz 600. (CC BY-SA 3.0).',
    },
  },
};

export const religionLegendLabels: Record<Locale, Record<ReligionLegendId, string>> = {
  en: {
    roman_pagan: 'Roman civic / pagan',
    christian: 'Christian (dot / hatch)',
    jewish: 'Jewish communities',
    zoroastrian: 'Zoroastrian-leaning',
    hindu: 'Hindu umbrella',
    buddhist: 'Buddhist corridors',
    chinese_imperial: 'Chinese imperial',
    dao_folk: 'Dao / folk (merged)',
    manichaean: 'Manichaean (hatch)',
    african_trad: 'African traditions',
    local_trad: 'Local traditions',
    unmapped: 'Unmapped (not invented)',
  },
  ru: {
    roman_pagan: 'Римский гражданский / языческий',
    christian: 'Христианство (точка / штрих)',
    jewish: 'Еврейские общины',
    zoroastrian: 'Зороастрийский наклон',
    hindu: 'Индуистский зонт',
    buddhist: 'Буддийские коридоры',
    chinese_imperial: 'Китайский имперский',
    dao_folk: 'Дао / народный (слит)',
    manichaean: 'Манихейство (штрих)',
    african_trad: 'Африканские традиции',
    local_trad: 'Местные традиции',
    unmapped: 'Без заливки (не выдумано)',
  },
  pl: {
    roman_pagan: 'Rzymski obywatelski / pogański',
    christian: 'Chrześcijaństwo (kropka / kreska)',
    jewish: 'Wspólnoty żydowskie',
    zoroastrian: 'Nachylenie zoroastryjskie',
    hindu: 'Parasol hindu',
    buddhist: 'Korytarze buddyjskie',
    chinese_imperial: 'Chiński imperialny',
    dao_folk: 'Dao / ludowy (zlany)',
    manichaean: 'Manicheizm (kreska)',
    african_trad: 'Tradycje afrykańskie',
    local_trad: 'Tradycje lokalne',
    unmapped: 'Bez wypełnienia (nie wymyślone)',
  },
  lv: {
    roman_pagan: 'Romiešu pilsoniskais / pagāniskais',
    christian: 'Kristietība (punkts / šrafējums)',
    jewish: 'Ebreju kopienas',
    zoroastrian: 'Zoroastrisks slīpums',
    hindu: 'Hindu lietussargs',
    buddhist: 'Budistu koridori',
    chinese_imperial: 'Ķīnas impērijas',
    dao_folk: 'Dao / tautas (sapludināts)',
    manichaean: 'Maniheisms (šrafējums)',
    african_trad: 'Āfrikas tradīcijas',
    local_trad: 'Vietējās tradīcijas',
    unmapped: 'Bez aizpildes (nav izdomāts)',
  },
};

export const religionContinentLabels: Record<Locale, Record<ReligionContinentKey, string>> = {
  en: {
    europe: 'Europe',
    africa: 'Africa',
    asia: 'Asia',
    americas: 'Americas',
    oceania: 'Oceania',
  },
  ru: {
    europe: 'Европа',
    africa: 'Африка',
    asia: 'Азия',
    americas: 'Америка',
    oceania: 'Океания',
  },
  pl: {
    europe: 'Europa',
    africa: 'Afryka',
    asia: 'Azja',
    americas: 'Ameryki',
    oceania: 'Oceania',
  },
  lv: {
    europe: 'Eiropa',
    africa: 'Āfrika',
    asia: 'Āzija',
    americas: 'Amerika',
    oceania: 'Okeānija',
  },
};
