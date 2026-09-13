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

/** Empty Pack C slots — wait for verbatim COPY YEAR 1300 / 1400 / 1500. */
const packCHonesty: Record<Locale, string[]> = {
  en: [
    'Schematic reconstruction',
    'Not a census',
    'Americas indigenous fill',
    'Colonial edge 1500',
  ],
  ru: [
    'Схематическая реконструкция',
    'Не перепись',
    'Америка: местные традиции',
    'Колониальный край 1500',
  ],
  pl: [
    'Rekonstrukcja schematyczna',
    'Nie spis',
    'Ameryki: tradycje lokalne',
    'Krawędź kolonialna 1500',
  ],
  lv: [
    'Shēmatiska rekonstrukcija',
    'Ne tautas skaitīšana',
    'Amerika: vietējās tradīcijas',
    'Koloniālā mala 1500',
  ],
};

const packCTitle: Record<Locale, (year: number) => string> = {
  en: (year) => `${year} CE — schematic reconstruction`,
  ru: (year) => `${year} н. э. — схематическая реконструкция`,
  pl: (year) => `${year} n.e. — rekonstrukcja schematyczna`,
  lv: (year) => `${year}. g. m.ē. — shēmatiska rekonstrukcija`,
};

const emptyPackCCopy = (locale: Locale, year: number): ReligionPilotFrameCopy => ({
  title: packCTitle[locale](year),
  caption: '',
  imageAlt: '',
  continentBlocks: [],
  honestyPills: packCHonesty[locale],
  sources: '',
});

export const religionPilotCopy: Record<Locale, Record<number, ReligionPilotFrameCopy>> = {
  en: {
    1: {
      title: '1 CE — schematic reconstruction',
      caption:
        'A Fix Planet schematic of named traditions at the start of the Common Era. Rome’s official civic cults colour the Mediterranean; Christianity is four urban dots — Palestine, Antioch, Rome, Alexandria — not an empire-wide fill. Focus is the Old World; the Americas and Oceania stay unmapped.',
      imageAlt:
        'Schematic world religion map for 1 CE: Roman pagan Mediterranean, tiny Christian dots, Parthian zoroastrian wash, Indic and Han umbrellas, Americas unmapped gray',
      eraByContinent: {
        europe:
          'Imperial and civic paganism from Britain and Gaul through Italy, the Balkans, and Anatolia. Jewish communities sit as spots in Rome and the eastern cities. Christian presence is a handful of house-churches, too small to paint a province. North of the limes, local traditions stay a coarse wash. Do not read the terracotta as “everyone believed the same thing.”',
        africa:
          'Egypt and the Maghreb sit in the Roman civic-cult layer, with a Jewish and a tiny Christian mark at Alexandria. South of the Sahara the sheet uses one African-traditions wash — a label of ignorance, not a census of cults. Aksum is not painted Christian.',
        asia:
          'Parthia is zoroastrian-leaning, not a sealed state church. Judea and the eastern diaspora are jewish spots. India is a hindu wash with buddhist corridors along the Ganges, Sri Lanka, and Gandhara. Han China is Chinese imperial; Dao / folk is merged with that fill. Steppe and Arabia stay local traditions.',
        americas:
          'Unmapped gray. We do not invent a religion layer for the Americas in year 1.',
        oceania:
          'Unmapped gray. Australia and the Pacific are not filled as religions on this plate.',
      },
      sources:
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps. Optional museum companion: Élisée Reclus, L’Homme et la Terre (1905), public domain.',
    },
    100: {
      title: '100 CE — Trajan still pagan',
      caption:
        'Same Old-World umbrellas as year 1. Trajan’s Rome is still officially pagan; we do not paint the empire Christian. A few more urban Christian dots (Ephesus, Corinth, Carthage, Smyrna) join the first four. The Kushan world is an Indic–Buddhist mix, not a single state colour.',
      imageAlt:
        'Schematic world religion map for 100 CE: pagan Mediterranean, slightly more Christian urban dots, Kushan Buddhist mix, Americas unmapped',
      eraByContinent: {
        europe:
          'The high empire is still civic pagan on this sheet. Extra Christian dots mark named cities, not provinces. Jewish spots remain. Northern and forest Europe stay local traditions. No Christian empire colour.',
        africa:
          'North Africa remains in the Roman pagan wash, with a Christian dot at Carthage and Alexandria. The Sahara-south African-traditions wash is unchanged — still not a village survey.',
        asia:
          'Parthia stays zoroastrian-leaning. Kushan lands take a buddhist/Indic mix over the hindu umbrella. Han China remains Chinese imperial. Silk-road Buddhist corridors are still thin.',
        americas: 'Still unmapped. We do not invent fills because a century has passed.',
        oceania: 'Still unmapped gray.',
      },
      sources:
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps.',
    },
    200: {
      title: '200 CE — official pagan, denser Christian cities',
      caption:
        'Rome is still officially pagan. Christianity shows as denser urban hatch across Syria, Asia Minor, Egypt, Rome, and Carthage — not a Mediterranean fill. A thin manichaean hatch appears in Mesopotamia. Sasanian Iran is a stronger zoroastrian wash. Buddhist corridors thicken on the Silk Road; China stays imperial with Buddhist inroads.',
      imageAlt:
        'Schematic world religion map for 200 CE: pagan Rome, Christian urban hatch, Sasanian zoroastrian, Silk Road Buddhist, Americas unmapped',
      eraByContinent: {
        europe:
          'The official colour is still Roman civic / pagan. Christian hatch sits on Rome and a few western cities. Rural West is not a church map. Local traditions north of the limes stay coarse.',
        africa:
          'Carthage and Egypt carry Christian urban hatch over a pagan official layer. Sub-Saharan African traditions are unchanged. No invented Christian Nubia on this step.',
        asia:
          'Sasanian Iran is a stronger zoroastrian umbrella. Manichaean hatch is minority only, in Mesopotamia and southwest Iran. Buddhist washes follow Gandhara, Bactria, and the Tarim. Han/successor China is imperial, with a Buddhist hatch in the interior — not a Buddhist empire.',
        americas: 'Unmapped gray. Americas are not invented.',
        oceania: 'Unmapped gray.',
      },
      sources:
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps.',
    },
    300: {
      title: '300 CE — eve of Constantine, majority pagan',
      caption:
        'On the eve of Constantine the Mediterranean is still majority pagan on this sheet. Christianity is a large urban minority in the East — hatch and partial colour, not a whole-empire Christian fill. Armenia is an optional Christian edge. Iran stays zoroastrian; India and China keep their umbrellas.',
      imageAlt:
        'Schematic world religion map for 300 CE: pagan majority around Rome, Christian urban minority in the East, Armenia edge, Americas unmapped',
      eraByContinent: {
        europe:
          'West and much of the Balkans stay Roman civic / pagan. Eastern cities (Greece, Anatolia) take a Christian hatch. This is not “the empire is Christian.” Rural pagan practice is the default outside those hatches.',
        africa:
          'Egypt and Carthage show Christian urban hatch over a pagan official layer. Sub-Saharan African traditions are still one coarse wash. No Aksum Christian fill yet.',
        asia:
          'Armenia is a cautious Christian edge. Iran is zoroastrian. India remains a hindu umbrella with buddhist corridors. China is Chinese imperial with Buddhist inroads. Manichaean hatch stays minority.',
        americas: 'Unmapped gray. Americas are not invented.',
        oceania: 'Unmapped gray.',
      },
      sources:
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps. Process companion: Christianity spread to AD 600 (CC BY-SA 3.0).',
    },
    400: {
      title: '400 CE — post-Theodosius, not all Europe Christian',
      caption:
        'After Theodosius, Christianity expands among eastern and western elites and cities. Rural pagan hatch remains in Gaul, Britain, and interior Balkans — we do not paint all Europe solid Christian. Iran stays zoroastrian. Nubia and Aksum are optional cautious Christian edges. Americas stay unmapped.',
      imageAlt:
        'Schematic world religion map for 400 CE: Christian East and western urban belts, rural pagan hatch, zoroastrian Iran, Americas unmapped',
      eraByContinent: {
        europe:
          'East (Greece, Anatolia) reads more Christian. Italy, southern Gaul, and coastal Iberia show urban/elite Christian hatch over a still-pagan countryside. Germania and Scandinavia stay local traditions. This is not a solid Christian Europe.',
        africa:
          'Egypt and Roman Africa carry a stronger Christian urban mark. A cautious Christian edge is allowed at Nubia and Aksum — optional, not a painted kingdom. The rest of the continent stays African traditions.',
        asia:
          'Iran remains zoroastrian. Armenia keeps a Christian edge. India and China keep hindu and imperial umbrellas, with Buddhist corridors and inroads. No Islamic layer: it does not belong on a 400 plate.',
        americas: 'Still unmapped gray. We do not invent an American religion choropleth.',
        oceania: 'Still unmapped gray.',
      },
      sources:
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps. Process companion: Christianity spread to AD 600 (CC BY-SA 3.0).',
    },
    500: {
      title: '500 CE — former Roman world, rural pagan still showing',
      caption:
        'Around 500 CE Christianity has widened across much of the former Roman world, while rural pagan practice still shows in places. Sasanian Iran stays Zoroastrian; India and China keep their own major belts; Aksum and Nubia appear only as a light Christian edge. Americas and Oceania stay unmapped — we do not invent fills. Islam is not on this sheet.',
      imageAlt:
        'Schematic world religion map for 500 CE: Christian fill across much of the former Roman world, rural pagan hatch, Zoroastrian Iran, Indic and Chinese belts, Americas unmapped',
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
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps.',
    },
    600: {
      title: '600 CE — stronger Christian belt, Iran still Zoroastrian',
      caption:
        'By 600 CE the Christian belt across Afro-Eurasia’s Mediterranean world is stronger, but this sheet still shows Zoroastrian Iran, Hindu India, Buddhist corridors, and China’s imperial cult. Islam has not expanded as an empire colour here. Americas stay unmapped. For the one-tradition process map of Christianity to 600, see the companion plate.',
      imageAlt:
        'Schematic world religion map for 600 CE: wider Christian Mediterranean belt, Zoroastrian Iran, Hindu India, Buddhist corridors, Chinese imperial cult, Americas unmapped',
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
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps. Process companion: Christianity spread to AD 600 (CC BY-SA 3.0).',
    },
    700: {
      title: '700 CE — first wide Islamic Umayyad belt',
      caption:
        'Around 700 CE the plate first shows a wide **Islamic** Umayyad belt — Iberia and the Maghreb through Egypt and Arabia to Iran, Transoxiana, and Sind. Christianity holds Byzantium, Italy, the Frankish core, and Britain; northern and eastern Europe stay local traditions. India keeps a Hindu umbrella; Buddhist corridors and China keep their belts. Americas and Oceania stay unmapped.',
      imageAlt:
        'Schematic world religion map for 700 CE: first wide Islamic Umayyad belt from Iberia and the Maghreb through Egypt and Arabia to Iran, Transoxiana and Sind, Christian Byzantium Italy Frankish core and Britain, Hindu India, Americas unmapped',
      honestyPills: [
        'Schematic reconstruction',
        'Not a census',
        'Old World focus',
        'Americas unmapped',
      ],
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Christian fill in Byzantium, Italy, the Frankish core, and Britain. Iberia is Islamic. North and east Europe stay local traditions.',
        },
        {
          heading: 'Southwest Asia / Iran',
          text: 'Umayyad Islamic wash from the Levant through Arabia and Iran to Transoxiana and Sind. Thin Zoroastrian remnant hatch in Iran.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu umbrella on India; Buddhist corridors; Chinese imperial / folk.',
        },
        {
          heading: 'Africa',
          text: 'Umayyad Islamic wash on the Maghreb — including Libya — and Egypt. Aksum and Nubia a light Christian edge. South of the Sahara a coarse African traditional wash.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Not mapped.',
        },
      ],
      sources:
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps.',
    },
    800: {
      title: '800 CE — Abbasid belt, stronger Frankish west',
      caption:
        'By 800 CE the Islamic belt is **Abbasid** — same Mediterranean-to-Iran wash, a little fuller in the east; al-Andalus and the Maghreb still on the plate. In the west, Frankish / Carolingian Christianity is stronger; Scandinavia and the Slavic east stay local. India Hindu; Buddhism and the Chinese imperial layer hold the East. Americas unmapped.',
      imageAlt:
        'Schematic world religion map for 800 CE: Abbasid Islamic belt fuller in the east, stronger Frankish Carolingian Christian west, Hindu India, Americas unmapped',
      honestyPills: [
        'Schematic reconstruction',
        'Not a census',
        'Old World focus',
        'Americas unmapped',
      ],
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Stronger Frankish / Carolingian Christian west. Byzantium, Italy, and Britain stay Christian. Iberia remains Islamic. Scandinavia and the Slavic east stay local traditions.',
        },
        {
          heading: 'Southwest Asia / Iran',
          text: 'Abbasid Islamic belt — the same Mediterranean-to-Iran wash, a little fuller in the east. Thin Zoroastrian remnant hatch in Iran. Al-Andalus and the Maghreb stay on the plate.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu India; Buddhist corridors; Chinese imperial / folk.',
        },
        {
          heading: 'Africa',
          text: 'Abbasid-era Islamic wash on the Maghreb and Egypt. Aksum and Nubia a light Christian edge. South of the Sahara a coarse African traditional wash.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Not mapped.',
        },
      ],
      sources:
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps.',
    },
    900: {
      title: '900 CE — Abbasid successors, Christian Europe still open north',
      caption:
        'Around 900 CE the Islamic West and Abbasid-successor belt stay wide — Maghreb, Egypt, Arabia, Iran, Central Asia, Sind; al-Andalus holds. Christian Europe is Byzantium plus the Latin West and the Balkans — still not solid Scandinavia, Baltic, or steppe north. East: Hindu India, stronger Buddhist Southeast Asia, Chinese imperial layer. Americas unmapped.',
      imageAlt:
        'Schematic world religion map for 900 CE: wide Abbasid-successor Islamic belt, Christian Latin West and Balkans, stronger Buddhist Southeast Asia, Americas unmapped',
      honestyPills: [
        'Schematic reconstruction',
        'Not a census',
        'Old World focus',
        'Americas unmapped',
      ],
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Christian Europe is Byzantium plus the Latin West and the Balkans — still not solid Scandinavia, Baltic, or steppe north. Al-Andalus holds as Islamic.',
        },
        {
          heading: 'Southwest Asia / Iran',
          text: 'Abbasid-successor Islamic belt stays wide through Arabia, Iran, Central Asia, and Sind. Thin Zoroastrian remnant hatch in Iran.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu India; stronger Buddhist Southeast Asia; Chinese imperial / folk.',
        },
        {
          heading: 'Africa',
          text: 'Islamic Maghreb and Egypt. Aksum and Nubia a light Christian edge. South of the Sahara a coarse African traditional wash — no deep Sahel Islam yet.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Not mapped.',
        },
      ],
      sources:
        'Religion fills © Fix Planet (schematic reconstruction — not a census). Basemap: André Ourednik et al., historical-basemaps (GPL-3.0); source: github.com/aourednik/historical-basemaps.',
    },
    1000: {
      title: '1000 CE — schematic reconstruction',
      caption:
        'Around 1000 CE a wide **Islamic** belt still holds Maghreb–Libya–Egypt–Near East, Arabia, Iran, Central Asia, and Sind; al-Andalus stays, with a light Sahel edge. Christian Europe pushes further north and east — Saxon / Polish / Kievan fringe — still not solid Scandinavia or the Baltic. India Hindu; Buddhist corridors and the Chinese imperial layer hold the East. Americas unmapped.',
      imageAlt:
        'Schematic world religion map for 1000 CE: wide Islamic Maghreb–Libya–Egypt–Near East belt, Christian Europe expanding north and east, Americas unmapped',
      honestyPills: [
        'Schematic reconstruction',
        'Not a census',
        'Old World focus',
        'Americas unmapped',
      ],
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Wider Christian west and center (Germany / Saxon push, Bohemia and Poland fringe, Kievan Christian edge) plus Byzantine east, Italy, Britain; Iberia Islamic. Far north / Viking lands and Baltic pockets still local traditions. Jewish spots where shown.',
        },
        {
          heading: 'Southwest Asia / North Africa / Iran',
          text: 'Islamic Maghreb–Libya–Egypt–Near East belt through Arabia into Iran, Central Asia, and Sind; al-Andalus held; light Sahel / West Africa trade edge. Thin Zoroastrian remnant hatch; Manichaean minority hatch smaller where shown.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu umbrella on India; Buddhist corridors much as at 900 (Silk Road, SE Asia stronger); Chinese imperial / folk belt. Far north steppe and island fringes stay local wash.',
        },
        {
          heading: 'Africa',
          text: 'Maghreb–Libya–Egypt in the Islamic belt; light Sahel trade edge; Aksum/Nubia Christian edge; south of the Sahara = coarse African traditional wash.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Not mapped.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: medieval Afro-Eurasian religion surveys.',
    },
    1100: {
      title: '1100 CE — schematic reconstruction',
      caption:
        'By 1100 CE (Crusades era) the **Islamic** belt stays wide — Maghreb, Libya, Egypt, Levant, Arabia, Iran, Central Asia, al-Andalus; Sahel edge. Latin Christian West and Byzantium stronger; schematic Crusader Levant foothold. Northern and eastern Europe still partly local. India Hindu; stronger Buddhist Tibet / Southeast Asia / China inroads. Americas unmapped.',
      imageAlt:
        'Schematic world religion map for 1100 CE: wide Islamic belt, Crusader Levant foothold, stronger Buddhist Tibet and Southeast Asia, Americas unmapped',
      honestyPills: [
        'Schematic reconstruction',
        'Not a census',
        'Old World focus',
        'Americas unmapped',
      ],
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Fuller Christian Rhineland / Germany, Bohemia–Poland fringe, Balkans / Byzantine, Italy; schematic Crusader Levant foothold. Iberia still Islamic. Far north residual and Baltic / Finnic pockets = local traditions. Jewish spots.',
        },
        {
          heading: 'Southwest Asia / North Africa / Iran',
          text: 'Islamic Maghreb–Libya–Egypt–Levant–Arabia–Near East–Persia–Central Asia fringe; al-Andalus held; Sahel edge. Thin Zoroastrian remnant hatch only.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu India; Buddhist corridors stronger (Tibet / Himalaya fringe, SE Asia, China inroads); Chinese imperial / folk belt. Northern steppe and island fringes = local wash.',
        },
        {
          heading: 'Africa',
          text: 'Maghreb–Libya–Egypt Islamic; Sahel trade edge; Aksum/Nubia Christian edge; Sahel–south = African traditional wash.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Not mapped.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: high-medieval Afro-Eurasian religion surveys.',
    },
    1200: {
      title: '1200 CE — schematic reconstruction',
      caption:
        'Around 1200 CE (Mongol eve) the same major **Islamic** belt — Maghreb–Libya–Egypt–Near East–Iran–Central Asia, al-Andalus, Indus edge and Sahel edge — no invented new empire wash. Christianity a bit further into the Baltics and Scandinavia; still not all Europe solid. India Hindu; Buddhism and the Chinese imperial layer hold the East. Americas unmapped.',
      imageAlt:
        'Schematic world religion map for 1200 CE: major Islamic belt, Christian Baltics and Scandinavia fringe, Americas unmapped',
      honestyPills: [
        'Schematic reconstruction',
        'Not a census',
        'Old World focus',
        'Americas unmapped',
      ],
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Further Christian Baltic / Scandinavia fringe and east-Elbe / Rus hold; Latin West, Byzantium, Italy solid on the plate. Iberia Islamic. Far Arctic / Finnic residual still local traditions. Jewish spots.',
        },
        {
          heading: 'Southwest Asia / North Africa / Iran',
          text: 'Same major Islamic belt as 1100, plus Indus / Multan hold and a slight Sahel trade edge — Maghreb–Libya–Egypt–Near East–Persia–Central Asia; al-Andalus. Thin Zoroastrian remnant hatch only.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu India; Buddhist corridors as at 1100 (Tibet, SE Asia, China inroads); Chinese imperial / folk belt. Northern steppe and island fringes = local wash.',
        },
        {
          heading: 'Africa',
          text: 'Maghreb–Libya–Egypt Islamic; slight Sahel trade edge; Aksum/Nubia Christian edge; Sahel–south = African traditional wash.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Not mapped.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: high-medieval Afro-Eurasian religion surveys.',
    },
    1300: {
      title: '1300 CE — schematic reconstruction',
      caption:
        'Around 1300 CE the **Islamic** belt is Mamluk Egypt and Syria, Maghreb and Libya, an Anatolia fringe (early Ottoman), a Granada pocket in Iberia, plus Near East–Arabia–Iran–Central Asia and a Delhi fringe. Christian Europe is nearly solid in the west and center; the Balkans stay Christian. India Hindu; Buddhist corridors and the Chinese layer hold the East. In the Americas, local traditions: rising Mesoamerica (Aztec) and the Andes, plus other indigenous zones.',
      imageAlt:
        'Schematic world religion map for 1300 CE: Mamluk Islamic belt, Anatolia fringe, Granada pocket, Americas indigenous fill',
      honestyPills: packCHonesty.en,
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Christian fill across Latin West, Italy, Britain, Scandinavia fringe, east-Elbe / Rus hold, and the Balkans. Iberia mostly Christian except the Granada Islamic pocket. Anatolia only an Islamic fringe — not majority wash. Jewish spots where shown.',
        },
        {
          heading: 'Southwest Asia / North Africa / Iran',
          text: 'Mamluk Islamic Egypt–Syria / Levant; Maghreb–Libya; Arabia–Near East–Iran–Central Asia; Anatolia Islamic fringe (early Ottoman); Delhi / Indus fringe. Thin Zoroastrian remnant hatch only where marked.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu umbrella on India (Delhi fringe Islamic on the northwest edge); Buddhist corridors (Tibet / SE Asia / China inroads); Chinese imperial / folk belt. Northern steppe and island fringes = local wash.',
        },
        {
          heading: 'Africa',
          text: 'Maghreb–Libya–Egypt in the Islamic belt; light Sahel trade edge; Christian Ethiopia/Nubia edge where shown; south of the Sahara = coarse African traditional wash.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Local traditions across the Americas — rising Aztec / Mesoamerica and Andean highland cores, plus Amazon, North American plains, and southern-cone indigenous wash. Antarctica / Oceania unmapped.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: late-medieval Afro-Eurasian surveys (Mamluk / early Ottoman fringe / Granada) plus indigenous Americas (Aztec-rising Mesoamerica / Andes).',
    },
    1400: {
      title: '1400 CE — schematic reconstruction',
      caption:
        'By 1400 CE the **Islamic** belt is wider: Mamluk Egypt–Syria–Levant, Maghreb–Libya, the Timur zone (Central Asia / Iran / Near East), Anatolia already majority Islamic (Ottoman), Granada pocket still held. Christian Europe fuller; the Balkans still mostly Christian demographically. India Hindu; Buddhism and the Chinese layer hold the East. In the Americas, strong local cores: Aztec Mesoamerica and the Inca Andes, plus other indigenous zones.',
      imageAlt:
        'Schematic world religion map for 1400 CE: wider Islamic belt, Ottoman Anatolia, Granada pocket, Aztec and Inca cores',
      honestyPills: packCHonesty.en,
      continentBlocks: [
        {
          heading: 'Europe / Mediterranean',
          text: 'Fuller Christian west, center, Scandinavia, Baltics, and Rus fringe; Balkans still mostly Christian demographically. Iberia Christian except Granada pocket. Anatolia majority Islamic (Ottoman) — not a Byzantine Christian wash. Jewish spots.',
        },
        {
          heading: 'Southwest Asia / North Africa / Iran',
          text: 'Islamic Maghreb–Libya–Egypt–Levant–Arabia plus Timur-zone wash fuller into Iran and Central Asia; Anatolia majority Islamic (Ottoman). Granada pocket remains in Iberia. Thin Zoroastrian remnant hatch only.',
        },
        {
          heading: 'South / Central / East Asia',
          text: 'Hindu India; Buddhist corridors as at 1300 (Tibet / SE Asia / China inroads); Chinese imperial / folk belt (Ming-era plate). Northern steppe and island fringes = local wash.',
        },
        {
          heading: 'Africa',
          text: 'Maghreb–Libya–Egypt Islamic; Sahel trade edge; Christian Ethiopia/Nubia edge where shown; Sahel–south = African traditional wash.',
        },
        {
          heading: 'Americas / Oceania',
          text: 'Strong local traditions — Aztec Mesoamerica and Inca Andes cores, plus Amazon, North American plains, and southern-cone indigenous wash. Antarctica / Oceania unmapped.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: late-medieval Afro-Eurasian surveys (Timur; Ottoman Anatolia majority; Granada; Balkans Christian) plus Aztec Mesoamerica / Inca Andes.',
    },
    1500: emptyPackCCopy('en', 1500),
  },
  ru: {
    1: {
      title: '1 н. э. — схематическая реконструкция',
      caption:
        'Схема Fix Planet названных традиций на начало нашей эры. Официальные гражданские культы Рима красят Средиземноморье; христианство — четыре городские точки (Палестина, Антиохия, Рим, Александрия), не заливка империи. Фокус — Старый Свет; Америка и Океания без заливки.',
      imageAlt:
        'Схематическая карта религий мира на 1 год н. э.: языческое Средиземноморье, крошечные христианские точки, парфянский зороастрийский слой, зонтики Индии и Хань, Америка серым без заливки',
      eraByContinent: {
        europe:
          'Имперское и гражданское язычество от Британии и Галлии через Италию, Балканы и Анатолию. Еврейские общины — пятна в Риме и восточных городах. Христианство — горстка домашних церквей, слишком малая, чтобы красить провинцию. Севернее лимеса — грубый слой местных традиций. Терракота — не «все верили одинаково».',
        africa:
          'Египет и Магриб в римском гражданском слое; в Александрии — еврейская и крошечная христианская метка. Южнее Сахары — одна заливка африканских традиций: ярлык незнания, не перепись культов. Аксум не красим как христианский.',
        asia:
          'Парфия — зороастрийский наклон, не закрытая государственная церковь. Иудея и восточная диаспора — еврейские пятна. Индия — индуистская заливка с буддийскими коридорами (Ганг, Шри-Ланка, Гандхара). Хань — китайский имперский слой; дао / народный слит с этой заливкой. Степь и Аравия — местные традиции.',
        americas: 'Серый: без заливки. Слой религий Америк для 1 года мы не выдумываем.',
        oceania: 'Серый: без заливки. Австралию и Тихий океан на этом листе религиями не заливаем.',
      },
      sources:
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps. Музейный компаньон: Элизе Реклю, L’Homme et la Terre (1905), общественное достояние.',
    },
    100: {
      title: '100 н. э. — Траян всё ещё язычник',
      caption:
        'Те же зонтики Старого Света, что в 1 году. Рим Траяна официально языческий; империю христианской не красим. К первым четырём точкам добавляются Эфес, Коринф, Карфаген, Смирна. Кушанский мир — индо-буддийская смесь, не один государственный цвет.',
      imageAlt:
        'Схематическая карта религий на 100 год н. э.: языческое Средиземноморье, чуть больше христианских городских точек, кушанская буддийская смесь, Америка без заливки',
      eraByContinent: {
        europe:
          'Высокая империя на листе всё ещё граждански языческая. Дополнительные христианские точки — названные города, не провинции. Еврейские пятна остаются. Север и лесная Европа — местные традиции. Христианского цвета империи нет.',
        africa:
          'Северная Африка в римской языческой заливке; христианские точки в Карфагене и Александрии. Южнее Сахары африканские традиции без перемен — это не деревенское обследование.',
        asia:
          'Парфия зороастрийски наклонена. Кушанские земли — буддийско-индийская смесь поверх индуистского зонта. Хань — китайский имперский слой. Буддийские коридоры Шёлкового пути ещё тонкие.',
        americas: 'По-прежнему без заливки. Прошедший век — не повод выдумывать Америку.',
        oceania: 'По-прежнему серый: без заливки.',
      },
      sources:
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps.',
    },
    200: {
      title: '200 н. э. — официально языческий Рим, гуще христианские города',
      caption:
        'Рим всё ещё официально языческий. Христианство — более густая городская штриховка в Сирии, Малой Азии, Египте, Риме и Карфагене, не заливка Средиземноморья. Тонкая манихейская штриховка в Месопотамии. Сасанидский Иран — сильнее зороастрийский. Буддийские коридоры Шёлкового пути гуще; Китай имперский с буддийскими вкраплениями.',
      imageAlt:
        'Схематическая карта религий на 200 год: языческий Рим, городская христианская штриховка, сасанидский зороастризм, буддизм Шёлкового пути, Америка без заливки',
      eraByContinent: {
        europe:
          'Официальный цвет — римское гражданское / языческое. Христианская штриховка на Риме и немногих западных городах. Сельский Запад — не карта церкви. Севернее лимеса — грубые местные традиции.',
        africa:
          'Карфаген и Египет несут городскую христианскую штриховку поверх языческого официального слоя. К югу от Сахары африканские традиции без перемен. Христианскую Нубию на этом шаге не выдумываем.',
        asia:
          'Сасанидский Иран — более сильный зороастрийский зонт. Манихейская штриховка — только меньшинство, Месопотамия и юго-запад Ирана. Буддийские смывы — Гандхара, Бактрия, Тарим. Китай имперский, с буддийской штриховкой внутри — не буддийская империя.',
        americas: 'Серый: без заливки. Америку не выдумываем.',
        oceania: 'Серый: без заливки.',
      },
      sources:
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps.',
    },
    300: {
      title: '300 н. э. — канун Константина, большинство языческое',
      caption:
        'Накануне Константина Средиземноморье на этом листе всё ещё в большинстве языческое. Христианство — крупное городское меньшинство на Востоке: штрих и частичный цвет, не христианская заливка всей империи. Армения — необязательный христианский край. Иран зороастрийский; Индия и Китай сохраняют зонты.',
      imageAlt:
        'Схематическая карта религий на 300 год: языческое большинство вокруг Рима, городское христианское меньшинство на Востоке, край Армении, Америка без заливки',
      eraByContinent: {
        europe:
          'Запад и большая часть Балкан — римское гражданское / языческое. Восточные города (Греция, Анатолия) — христианская штриховка. Это не «империя христианская». Сельская языческая практика — правило вне штрихов.',
        africa:
          'Египет и Карфаген — городская христианская штриховка поверх языческого официального слоя. К югу от Сахары — всё тот же грубый слой африканских традиций. Аксум ещё не залит как христианский.',
        asia:
          'Армения — осторожный христианский край. Иран зороастрийский. Индия — индуистский зонт с буддийскими коридорами. Китай — имперский слой с буддийскими вкраплениями. Манихейская штриховка остаётся меньшинством.',
        americas: 'Серый: без заливки. Америку не выдумываем.',
        oceania: 'Серый: без заливки.',
      },
      sources:
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps. Компаньон процесса: распространение христианства до 600 (CC BY-SA 3.0).',
    },
    400: {
      title: '400 н. э. — после Феодосия, не вся Европа христианская',
      caption:
        'После Феодосия христианство растёт среди элит и городов Востока и Запада. Сельская языческая штриховка остаётся в Галлии, Британии и внутренних Балканах — всю Европу сплошным христианством не красим. Иран зороастрийский. Нубия и Аксум — осторожные необязательные христианские края. Америка без заливки.',
      imageAlt:
        'Схематическая карта религий на 400 год: христианский Восток и западные городские пояса, сельская языческая штриховка, зороастрийский Иран, Америка без заливки',
      eraByContinent: {
        europe:
          'Восток (Греция, Анатолия) читается более христианским. Италия, южная Галлия и побережье Иберии — городская/элитная христианская штриховка поверх всё ещё языческой деревни. Германия и Скандинавия — местные традиции. Это не сплошная христианская Европа.',
        africa:
          'Египет и римская Африка — сильнее городская христианская метка. Осторожный христианский край у Нубии и Аксума — по желанию, не закрашенное царство. Остальной континент — африканские традиции.',
        asia:
          'Иран зороастрийский. Армения сохраняет христианский край. Индия и Китай — индуистский и имперский зонты, буддийские коридоры и вкрапления. Исламского слоя нет: ему не место на листе 400 года.',
        americas: 'По-прежнему серый: без заливки. Американский хороплет религий не выдумываем.',
        oceania: 'По-прежнему серый: без заливки.',
      },
      sources:
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps. Компаньон процесса: распространение христианства до 600 (CC BY-SA 3.0).',
    },
    500: {
      title: '500 н. э. — бывший римский мир, сельское язычество ещё видно',
      caption:
        'Около 500 г. н. э. христианство шире по бывшему римскому миру, но сельское язычество ещё видно местами. Сасанидский Иран остаётся зороастрийским; Индия и Китай держат свои крупные пояса; Аксум и Нубия — лишь лёгкий христианский край. Америка и Океания не наносятся. Ислама на этом листе нет.',
      imageAlt:
        'Схематическая карта религий на 500 год н. э.: христианская заливка бывшего римского мира, сельская языческая штриховка, зороастрийский Иран, пояса Индии и Китая, Америка без заливки',
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
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps.',
    },
    600: {
      title: '600 н. э. — сильнее христианский пояс, Иран зороастрийский',
      caption:
        'К 600 г. н. э. христианский пояс средиземноморского Старого Света сильнее, но на листе по-прежнему зороастрийский Иран, индуистская Индия, буддийские коридоры и имперский культ Китая. Ислам здесь ещё не цвет империи. Америка не нанесена. Карта процесса «христианство → 600» — отдельный компаньон.',
      imageAlt:
        'Схематическая карта религий на 600 год н. э.: шире христианский средиземноморский пояс, зороастрийский Иран, индуистская Индия, буддийские коридоры, имперский культ Китая, Америка без заливки',
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
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps. Компаньон процесса: распространение христианства до 600 (CC BY-SA 3.0).',
    },
    700: {
      title: '700 н. э. — впервые широкий исламский пояс Омейядов',
      caption:
        'Около 700 н. э. на листе впервые широкий **исламский** пояс Омейядов — от Иберии и Магриба через Египет и Аравию к Ирану, Трансоксиане и Синд. Христианство держит Византию, Италию, франкское ядро и Британию; север и восток Европы ещё местные традиции. Индия — индуистский зонт; буддийские коридоры и Китай — свои пояса. Америка и Океания не нанесены.',
      imageAlt:
        'Схематическая карта религий на 700 год н. э.: впервые широкий исламский пояс Омейядов от Иберии и Магриба через Египет и Аравию к Ирану, Трансоксиане и Синд, христианские Византия Италия франкское ядро и Британия, Америка без заливки',
      honestyPills: [
        'Схематическая реконструкция',
        'Не перепись',
        'Фокус: Старый Свет',
        'Америка не нанесена',
      ],
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'Христианская заливка в Византии, Италии, франкском ядре и Британии. Иберия исламская. Север и восток Европы — местные традиции.',
        },
        {
          heading: 'Юго-Западная Азия / Иран',
          text: 'Омейядский исламский смыв от Леванта через Аравию и Иран к Трансоксиане и Синд. Тонкая зороастрийская штриховка-остаток в Иране.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'Индуистский зонт в Индии; буддийские коридоры; китайский имперский / народный слой.',
        },
        {
          heading: 'Африка',
          text: 'Омейядский исламский смыв на Магрибе — включая Ливию — и Египте. Аксум и Нубия — лёгкий христианский край. Южнее Сахары — грубый традиционный африканский фон.',
        },
        {
          heading: 'Америка / Океания',
          text: 'Не нанесено.',
        },
      ],
      sources:
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps.',
    },
    800: {
      title: '800 н. э. — аббасидский пояс, сильнее франкский запад',
      caption:
        'К 800 н. э. исламский пояс уже **аббасидский** — то же Средиземноморье–Иран, чуть полнее на востоке; аль-Андалус и Магриб на месте. На западе сильнее франкское / каролингское христианство; Скандинавия и славянский восток всё ещё местные. Индия индуистская; буддизм и китайский имперский слой держат Восток. Америка не нанесена.',
      imageAlt:
        'Схематическая карта религий на 800 год н. э.: аббасидский исламский пояс полнее на востоке, сильнее франкское каролингское христианство на западе, индуистская Индия, Америка без заливки',
      honestyPills: [
        'Схематическая реконструкция',
        'Не перепись',
        'Фокус: Старый Свет',
        'Америка не нанесена',
      ],
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'Сильнее франкское / каролингское христианство на западе. Византия, Италия и Британия остаются христианскими. Иберия исламская. Скандинавия и славянский восток — местные традиции.',
        },
        {
          heading: 'Юго-Западная Азия / Иран',
          text: 'Аббасидский исламский пояс — то же Средиземноморье–Иран, чуть полнее на востоке. Тонкая зороастрийская штриховка-остаток в Иране. Аль-Андалус и Магриб на месте.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'Индуистская Индия; буддийские коридоры; китайский имперский / народный слой.',
        },
        {
          heading: 'Африка',
          text: 'Аббасидский исламский смыв на Магрибе и Египте. Аксум и Нубия — лёгкий христианский край. Южнее Сахары — грубый традиционный африканский фон.',
        },
        {
          heading: 'Америка / Океания',
          text: 'Не нанесено.',
        },
      ],
      sources:
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps.',
    },
    900: {
      title: '900 н. э. — преемники аббасидов, христианская Европа не сплошь на севере',
      caption:
        'Около 900 н. э. исламский Запад и преемники аббасидского пояса всё ещё широки — Магриб, Египет, Аравия, Иран, Центральная Азия, Синд; аль-Андалус держится. Христианская Европа — Византия плюс латинский Запад и Балканы, но не сплошь Скандинавия, Балтика и степной север. Восток: индуистская Индия, сильнее буддийская ЮВА, китайский имперский слой. Америка не нанесена.',
      imageAlt:
        'Схематическая карта религий на 900 год н. э.: широкий пояс преемников аббасидов, христианские латинский Запад и Балканы, сильнее буддийская Юго-Восточная Азия, Америка без заливки',
      honestyPills: [
        'Схематическая реконструкция',
        'Не перепись',
        'Фокус: Старый Свет',
        'Америка не нанесена',
      ],
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'Христианская Европа — Византия плюс латинский Запад и Балканы, но не сплошь Скандинавия, Балтика и степной север. Аль-Андалус держится как исламский.',
        },
        {
          heading: 'Юго-Западная Азия / Иран',
          text: 'Пояс преемников аббасидов всё ещё широк через Аравию, Иран, Центральную Азию и Синд. Тонкая зороастрийская штриховка-остаток в Иране.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'Индуистская Индия; сильнее буддийская Юго-Восточная Азия; китайский имперский / народный слой.',
        },
        {
          heading: 'Африка',
          text: 'Исламские Магриб и Египет. Аксум и Нубия — лёгкий христианский край. Южнее Сахары — грубый традиционный африканский фон; глубокого ислама Сахеля ещё нет.',
        },
        {
          heading: 'Америка / Океания',
          text: 'Не нанесено.',
        },
      ],
      sources:
        'Полигоны религий © Fix Planet (схематическая реконструкция — не перепись). Подложка: André Ourednik et al., historical-basemaps (GPL-3.0); исходники: github.com/aourednik/historical-basemaps.',
    },
    1000: {
      title: '1000 н. э. — схематическая реконструкция',
      caption:
        'Около 1000 н. э. широкий **исламский** пояс всё ещё держит Магриб–Ливию–Египет–Ближний Восток, Аравию, Иран, Центральную Азию и Синд; аль-Андалус на месте, лёгкий сахельский край. Христианская Европа шире на север и восток — саксонский / польский / киевский край, но не сплошь Скандинавия и Балтика. Индия индуистская; буддийские коридоры и китайский имперский слой на Востоке. Америка не нанесена.',
      imageAlt:
        'Схематическая карта религий на 1000 год н. э.: широкий исламский пояс Магриб–Ливия–Египет–Ближний Восток, христианская Европа шире на север и восток, Америка без заливки',
      honestyPills: [
        'Схематическая реконструкция',
        'Не перепись',
        'Фокус: Старый Свет',
        'Америка не нанесена',
      ],
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'Шире христианский Запад и центр (саксонский толчок в Германию, край Богемии и Польши, киевский христианский край) плюс византийский Восток, Италия, Британия; Иберия исламская. Дальний север / викингские земли и балтийские карманы — ещё местные традиции. Иудейские пятна где видно.',
        },
        {
          heading: 'Юго-Западная Азия / Северная Африка / Иран',
          text: 'Исламский пояс Магриб–Ливия–Египет–Ближний Восток через Аравию в Иран, Центральную Азию и Синд; аль-Андалус держится; лёгкий сахельский / западноафриканский торговый край. Тонкая зороастрийская штриховка-остаток; манихейская меньшинственная штриховка меньше где видно.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'Индуистский зонт в Индии; буддийские коридоры примерно как в 900 (Шёлковый путь, сильнее ЮВА); китайский имперский / народный пояс. Дальняя северная степь и островные края — местный смыв.',
        },
        {
          heading: 'Африка',
          text: 'Магриб–Ливия–Египет в исламском поясе; лёгкий сахельский торговый край; Аксум/Нубия — христианский край; к югу от Сахары — грубый африканский традиционный смыв.',
        },
        {
          heading: 'Америка / Океания',
          text: 'Не нанесено.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: medieval Afro-Eurasian religion surveys.',
    },
    1100: {
      title: '1100 н. э. — схематическая реконструкция',
      caption:
        'К 1100 н. э. (эпоха крестовых походов) **исламский** пояс всё ещё широк — Магриб, Ливия, Египет, Левант, Аравия, Иран, Центральная Азия, аль-Андалус; сахельский край. Христианский латинский Запад и Византия сильнее; схематический крестоносный край в Леванте. Север и восток Европы ещё частично местные. Индия индуистская; сильнее буддийские Тибет / ЮВА / Китай. Америка не нанесена.',
      imageAlt:
        'Схематическая карта религий на 1100 год н. э.: широкий исламский пояс, крестоносный край в Леванте, сильнее буддийские Тибет и ЮВА, Америка без заливки',
      honestyPills: [
        'Схематическая реконструкция',
        'Не перепись',
        'Фокус: Старый Свет',
        'Америка не нанесена',
      ],
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'Полнее христианский Рейнланд / Германия, край Богемии–Польши, Балканы / Византия, Италия; схематический крестоносный край в Леванте. Иберия всё ещё исламская. Дальний северный остаток и балтийско-финские карманы — местные традиции. Иудейские пятна.',
        },
        {
          heading: 'Юго-Западная Азия / Северная Африка / Иран',
          text: 'Исламский Магриб–Ливия–Египет–Левант–Аравия–Ближний Восток–Персия–край Центральной Азии; аль-Андалус держится; сахельский край. Только тонкая зороастрийская штриховка-остаток.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'Индуистская Индия; буддийские коридоры сильнее (край Тибета / Гималаев, ЮВА, проникновение в Китай); китайский имперский / народный пояс. Северная степь и островные края — местный смыв.',
        },
        {
          heading: 'Африка',
          text: 'Магриб–Ливия–Египет исламские; сахельский торговый край; Аксум/Нубия — христианский край; Сахель и юг — африканский традиционный смыв.',
        },
        {
          heading: 'Америка / Океания',
          text: 'Не нанесено.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: high-medieval Afro-Eurasian religion surveys.',
    },
    1200: {
      title: '1200 н. э. — схематическая реконструкция',
      caption:
        'Около 1200 н. э. (канун монгольской эпохи) тот же крупный **исламский** пояс — Магриб–Ливия–Египет–Ближний Восток–Иран–Центральная Азия, аль-Андалус, край Инда и сахельский край; без выдуманной новой империи. Христианство чуть дальше в Балтику и Скандинавию, всё ещё не сплошь Европа. Индия индуистская; буддизм и китайский имперский слой на Востоке. Америка не нанесена.',
      imageAlt:
        'Схематическая карта религий на 1200 год н. э.: крупный исламский пояс, христианский край Балтики и Скандинавии, Америка без заливки',
      honestyPills: [
        'Схематическая реконструкция',
        'Не перепись',
        'Фокус: Старый Свет',
        'Америка не нанесена',
      ],
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'Дальше христианский балтийский / скандинавский край и за Эльбой / русский край; латинский Запад, Византия, Италия на листе. Иберия исламская. Дальний арктический / финский остаток — ещё местные традиции. Иудейские пятна.',
        },
        {
          heading: 'Юго-Западная Азия / Северная Африка / Иран',
          text: 'Тот же крупный исламский пояс, что в 1100, плюс край Инда / Мултана и чуть сахельский торговый край — Магриб–Ливия–Египет–Ближний Восток–Персия–Центральная Азия; аль-Андалус. Только тонкая зороастрийская штриховка-остаток.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'Индуистская Индия; буддийские коридоры как в 1100 (Тибет, ЮВА, проникновение в Китай); китайский имперский / народный пояс. Северная степь и островные края — местный смыв.',
        },
        {
          heading: 'Африка',
          text: 'Магриб–Ливия–Египет исламские; чуть сахельский торговый край; Аксум/Нубия — христианский край; Сахель и юг — африканский традиционный смыв.',
        },
        {
          heading: 'Америка / Океания',
          text: 'Не нанесено.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: high-medieval Afro-Eurasian religion surveys.',
    },
    1300: {
      title: '1300 н. э. — схематическая реконструкция',
      caption:
        'Около 1300 н. э. **исламский** пояс — мамлюкский Египет и Сирия, Магриб и Ливия, край Анатолии (ранние османы), карман Гранады в Иберии, плюс Ближний Восток–Аравия–Иран–Центральная Азия и край Дели. Христианская Европа почти сплошная на Западе и в центре; Балканы христианские. Индия индуистская; буддийские коридоры и китайский слой на Востоке. В Америке — местные традиции: поднимающаяся Мезоамерика (ацтеки) и Анды, плюс другие коренные зоны.',
      imageAlt:
        'Схематическая карта религий на 1300 год н. э.: мамлюкский исламский пояс, край Анатолии, карман Гранады, Америка — местные традиции',
      honestyPills: packCHonesty.ru,
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'Христианская заливка по латинскому Западу, Италии, Британии, скандинавскому краю, за Эльбой / русскому краю и Балканам. Иберия в основном христианская, кроме исламского кармана Гранады. Анатолия — только исламский край, не мажоритарная заливка. Иудейские пятна где видно.',
        },
        {
          heading: 'Юго-Западная Азия / Северная Африка / Иран',
          text: 'Мамлюкский исламский Египет–Сирия / Левант; Магриб–Ливия; Аравия–Ближний Восток–Иран–Центральная Азия; исламский край Анатолии (ранние османы); край Дели / Инда. Только тонкая зороастрийская штриховка-остаток где отмечено.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'Индуистский зонт в Индии (исламский край Дели на северо-западе); буддийские коридоры (Тибет / ЮВА / проникновение в Китай); китайский имперский / народный пояс. Северная степь и островные края — местный смыв.',
        },
        {
          heading: 'Африка',
          text: 'Магриб–Ливия–Египет в исламском поясе; лёгкий сахельский торговый край; христианский край Эфиопии/Нубии где видно; к югу от Сахары — грубый африканский традиционный смыв.',
        },
        {
          heading: 'Америка / Океания',
          text: 'Местные традиции по Америке — поднимающиеся ацтекская / мезоамериканская и андская высокогорные ядра, плюс Амазония, равнины Северной Америки и южный конус. Антарктида / Океания не нанесена.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: late-medieval Afro-Eurasian surveys (Mamluk / early Ottoman fringe / Granada) plus indigenous Americas (Aztec-rising Mesoamerica / Andes).',
    },
    1400: {
      title: '1400 н. э. — схематическая реконструкция',
      caption:
        'К 1400 н. э. **исламский** пояс шире: мамлюкский Египет–Сирия–Левант, Магриб–Ливия, зона Тимура (Центральная Азия / Иран / Ближний Восток), Анатолия уже в основном исламская (османы), карман Гранады ещё на месте. Христианская Европа полнее; Балканы демографически всё ещё в основном христианские. Индия индуистская; буддизм и китайский слой на Востоке. В Америке — сильные местные ядра: ацтекская Мезоамерика и империя инков в Андах, плюс другие коренные зоны.',
      imageAlt:
        'Схематическая карта религий на 1400 год н. э.: шире исламский пояс, османская Анатолия, карман Гранады, ядра ацтеков и инков',
      honestyPills: packCHonesty.ru,
      continentBlocks: [
        {
          heading: 'Европа / Средиземноморье',
          text: 'Полнее христианский Запад, центр, Скандинавия, Балтика и русский край; Балканы демографически всё ещё в основном христианские. Иберия христианская, кроме кармана Гранады. Анатолия в основном исламская (османы) — не византийская христианская заливка. Иудейские пятна.',
        },
        {
          heading: 'Юго-Западная Азия / Северная Африка / Иран',
          text: 'Исламский Магриб–Ливия–Египет–Левант–Аравия плюс тимуровская заливка полнее в Иран и Центральную Азию; Анатолия в основном исламская (османы). Карман Гранады в Иберии остаётся. Только тонкая зороастрийская штриховка-остаток.',
        },
        {
          heading: 'Южная / Центральная / Восточная Азия',
          text: 'Индуистская Индия; буддийские коридоры как в 1300 (Тибет / ЮВА / проникновение в Китай); китайский имперский / народный пояс (минский лист). Северная степь и островные края — местный смыв.',
        },
        {
          heading: 'Африка',
          text: 'Магриб–Ливия–Египет исламские; сахельский торговый край; христианский край Эфиопии/Нубии где видно; Сахель и юг — африканский традиционный смыв.',
        },
        {
          heading: 'Америка / Океания',
          text: 'Сильные местные традиции — ацтекская Мезоамерика и андские ядра инков, плюс Амазония, равнины Северной Америки и южный конус. Антарктида / Океания не нанесена.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: late-medieval Afro-Eurasian surveys (Timur; Ottoman Anatolia majority; Granada; Balkans Christian) plus Aztec Mesoamerica / Inca Andes.',
    },
    1500: emptyPackCCopy('ru', 1500),
  },
  pl: {
    1: {
      title: '1 n.e. — rekonstrukcja schematyczna',
      caption:
        'Schemat Fix Planet nazwanych tradycji na początek naszej ery. Oficjalne kulty obywatelskie Rzymu barwią Śródziemnomorze; chrześcijaństwo to cztery miejskie kropki — Palestyna, Antiochia, Rzym, Aleksandria — nie wypełnienie cesarstwa. Fokus to Stary Świat; Ameryki i Oceania zostają bez wypełnienia.',
      imageAlt:
        'Schematyczna mapa religii świata na rok 1 n.e.: pogańskie Śródziemnomorze, maleńkie kropki chrześcijańskie, partyjska plama zoroastryjska, parasole Indii i Han, Ameryki szare bez wypełnienia',
      eraByContinent: {
        europe:
          'Pogaństwo cesarskie i obywatelskie od Brytanii i Galii przez Italię, Bałkany i Anatolię. Wspólnoty żydowskie to plamy w Rzymie i miastach wschodu. Chrześcijaństwo to garść kościołów domowych, za mała, by malować prowincję. Na północ od limes — gruba plama tradycji lokalnych. Terakota to nie „wszyscy wierzyli tak samo”.',
        africa:
          'Egipt i Maghreb w rzymskiej warstwie kultu obywatelskiego; w Aleksandrii plama żydowska i maleńka chrześcijańska. Na południe od Sahary jedna plama tradycji afrykańskich — etykieta niewiedzy, nie spis kultów. Aksum nie malujemy jako chrześcijańskiego.',
        asia:
          'Partia jest zoroastryjsko nachylona, nie zamkniętym kościołem państwowym. Judea i wschodnia diaspora to plamy żydowskie. Indie to plama hindu z korytarzami buddyjskimi (Ganges, Sri Lanka, Gandhara). Han to chiński imperialny; dao / ludowy jest zlany z tym wypełnieniem. Step i Arabia zostają tradycjami lokalnymi.',
        americas: 'Szary: bez wypełnienia. Warstwy religii Ameryk dla roku 1 nie wymyślamy.',
        oceania: 'Szary: bez wypełnienia. Australii i Pacyfiku nie zalewamy tu jako religii.',
      },
      sources:
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps. Towarzysz muzealny: Élisée Reclus, L’Homme et la Terre (1905), domena publiczna.',
    },
    100: {
      title: '100 n.e. — Trajan wciąż pogański',
      caption:
        'Te same parasole Starego Świata co w roku 1. Rzym Trajana jest wciąż oficjalnie pogański; cesarstwa nie malujemy jako chrześcijańskiego. Do pierwszych czterech kropek dołączają Efez, Korynt, Kartagina, Smyrna. Świat kuszański to mieszanka indyjsko-buddyjska, nie jeden kolor państwa.',
      imageAlt:
        'Schematyczna mapa religii na rok 100 n.e.: pogańskie Śródziemnomorze, nieco więcej chrześcijańskich kropek miejskich, mieszanka kuszańska, Ameryki bez wypełnienia',
      eraByContinent: {
        europe:
          'Wysokie cesarstwo jest na arkuszu wciąż obywatelsko pogańskie. Dodatkowe kropki chrześcijańskie to nazwane miasta, nie prowincje. Plamy żydowskie zostają. Północ i leśna Europa — tradycje lokalne. Nie ma chrześcijańskiego koloru cesarstwa.',
        africa:
          'Afryka Północna w rzymskiej plamie pogańskiej; kropki chrześcijańskie w Kartaginie i Aleksandrii. Na południe od Sahary tradycje afrykańskie bez zmian — to nie badanie wsi.',
        asia:
          'Partia pozostaje zoroastryjsko nachylona. Ziemie kuszańskie biorą mieszankę buddyjsko-indyjską na parasolu hindu. Han zostaje chiński imperialny. Korytarze buddyjskie Jedwabnego Szlaku są jeszcze cienkie.',
        americas: 'Nadal bez wypełnienia. Upływ stulecia nie jest powodem, by wymyślać Ameryki.',
        oceania: 'Nadal szary: bez wypełnienia.',
      },
      sources:
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps.',
    },
    200: {
      title: '200 n.e. — oficjalnie pogański, gęstsze miasta chrześcijańskie',
      caption:
        'Rzym jest wciąż oficjalnie pogański. Chrześcijaństwo to gęstsze miejskie kreskowanie w Syrii, Azji Mniejszej, Egipcie, Rzymie i Kartaginie — nie wypełnienie Śródziemnomorza. Cienkie kreskowanie manichejskie w Mezopotamii. Sasanidzki Iran to silniejsza plama zoroastryjska. Korytarze buddyjskie gęstnieją na Jedwabnym Szlaku; Chiny zostają imperialne z wcięciami buddyjskimi.',
      imageAlt:
        'Schematyczna mapa religii na rok 200: pogański Rzym, miejskie kreskowanie chrześcijańskie, sasanidzki zoroastryzm, buddyzm Jedwabnego Szlaku, Ameryki bez wypełnienia',
      eraByContinent: {
        europe:
          'Oficjalny kolor to nadal rzymski obywatelski / pogański. Kreskowanie chrześcijańskie siada na Rzymie i kilku miastach zachodu. Wieś zachodnia to nie mapa Kościoła. Na północ od limes — grube tradycje lokalne.',
        africa:
          'Kartagina i Egipt niosą miejskie kreskowanie chrześcijańskie na pogańskiej warstwie oficjalnej. Na południe od Sahary tradycje afrykańskie bez zmian. Chrześcijańskiej Nubii na tym kroku nie wymyślamy.',
        asia:
          'Sasanidzki Iran to silniejszy parasol zoroastryjski. Kreskowanie manichejskie jest tylko mniejszością, w Mezopotamii i południowo-zachodnim Iranie. Plamy buddyjskie idą przez Gandharę, Baktrię i Tarim. Chiny są imperialne, z kreskowaniem buddyjskim wewnątrz — nie cesarstwo buddyjskie.',
        americas: 'Szary: bez wypełnienia. Ameryk nie wymyślamy.',
        oceania: 'Szary: bez wypełnienia.',
      },
      sources:
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps.',
    },
    300: {
      title: '300 n.e. — przeddzień Konstantyna, większość pogańska',
      caption:
        'W przeddzień Konstantyna Śródziemnomorze jest na tym arkuszu wciąż w większości pogańskie. Chrześcijaństwo to duża miejska mniejszość na Wschodzie — kreska i częściowy kolor, nie chrześcijańskie wypełnienie całego cesarstwa. Armenia to opcjonalna krawędź chrześcijańska. Iran zostaje zoroastryjski; Indie i Chiny trzymają parasole.',
      imageAlt:
        'Schematyczna mapa religii na rok 300: pogańska większość wokół Rzymu, miejska mniejszość chrześcijańska na Wschodzie, krawędź Armenii, Ameryki bez wypełnienia',
      eraByContinent: {
        europe:
          'Zachód i większość Bałkanów zostają rzymskie obywatelskie / pogańskie. Miasta wschodu (Grecja, Anatolia) biorą kreskowanie chrześcijańskie. To nie „cesarstwo jest chrześcijańskie”. Wiejska praktyka pogańska jest regułą poza kreskami.',
        africa:
          'Egipt i Kartagina pokazują miejskie kreskowanie chrześcijańskie na pogańskiej warstwie oficjalnej. Na południe od Sahary nadal jedna gruba plama tradycji afrykańskich. Aksum jeszcze nie jest wypełnione jako chrześcijańskie.',
        asia:
          'Armenia to ostrożna krawędź chrześcijańska. Iran jest zoroastryjski. Indie pozostają parasolem hindu z korytarzami buddyjskimi. Chiny to chiński imperialny z wcięciami buddyjskimi. Kreskowanie manichejskie zostaje mniejszością.',
        americas: 'Szary: bez wypełnienia. Ameryk nie wymyślamy.',
        oceania: 'Szary: bez wypełnienia.',
      },
      sources:
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps. Towarzysz procesu: rozprzestrzenianie chrześcijaństwa do 600 (CC BY-SA 3.0).',
    },
    400: {
      title: '400 n.e. — po Teodozjuszu, nie cała Europa chrześcijańska',
      caption:
        'Po Teodozjuszu chrześcijaństwo rozszerza się wśród elit i miast Wschodu i Zachodu. Wiejskie kreskowanie pogańskie zostaje w Galii, Brytanii i na wewnętrznych Bałkanach — nie malujemy całej Europy na solidne chrześcijaństwo. Iran zostaje zoroastryjski. Nubia i Aksum to ostrożne, opcjonalne krawędzie chrześcijańskie. Ameryki bez wypełnienia.',
      imageAlt:
        'Schematyczna mapa religii na rok 400: chrześcijański Wschód i zachodnie pasy miejskie, wiejskie kreskowanie pogańskie, zoroastryjski Iran, Ameryki bez wypełnienia',
      eraByContinent: {
        europe:
          'Wschód (Grecja, Anatolia) czyta się bardziej chrześcijańsko. Italia, południowa Galia i wybrzeże Iberii pokazują miejskie/elitowe kreskowanie chrześcijańskie na wciąż pogańskiej wsi. Germania i Skandynawia zostają tradycjami lokalnymi. To nie jest lita chrześcijańska Europa.',
        africa:
          'Egipt i Afryka rzymska niosą silniejszy miejski znak chrześcijański. Ostrożna krawędź chrześcijańska przy Nubii i Aksum — opcjonalna, nie zamalowane królestwo. Reszta kontynentu zostaje tradycjami afrykańskimi.',
        asia:
          'Iran pozostaje zoroastryjski. Armenia trzyma krawędź chrześcijańską. Indie i Chiny trzymają parasole hindu i imperialny, z korytarzami i wcięciami buddyjskimi. Nie ma warstwy islamu: nie należy do płyty z roku 400.',
        americas: 'Nadal szary: bez wypełnienia. Nie wymyślamy amerykańskiego choroplethu religii.',
        oceania: 'Nadal szary: bez wypełnienia.',
      },
      sources:
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps. Towarzysz procesu: rozprzestrzenianie chrześcijaństwa do 600 (CC BY-SA 3.0).',
    },
    500: {
      title: '500 n.e. — dawny świat rzymski, wiejskie pogaństwo wciąż widoczne',
      caption:
        'Około 500 n.e. chrześcijaństwo rozszerzyło się na dużą część dawnego świata rzymskiego, ale wiejska praktyka pogańska wciąż widać w niektórych miejscach. Sasanidzki Iran zostaje zoroastryjski; Indie i Chiny trzymają własne wielkie pasy; Aksum i Nubia pojawiają się tylko jako lekka krawędź chrześcijańska. Ameryk i Oceanii nie naniesiono — wypełnień nie wymyślamy. Islamu nie ma na tym arkuszu.',
      imageAlt:
        'Schematyczna mapa religii na rok 500 n.e.: chrześcijańskie wypełnienie dawnego świata rzymskiego, wiejskie kreskowanie pogańskie, zoroastryjski Iran, pasy Indii i Chin, Ameryki bez wypełnienia',
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
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps.',
    },
    600: {
      title: '600 n.e. — silniejszy pas chrześcijański, Iran zoroastryjski',
      caption:
        'Do 600 n.e. chrześcijański pas śródziemnomorskiego świata Afroeuroazji jest silniejszy, ale arkusz nadal pokazuje zoroastryjski Iran, hinduistyczne Indie, korytarze buddyjskie i chiński kult imperialny. Islam nie rozszerzył się tu jako kolor cesarstwa. Ameryk nie naniesiono. Jednotradycyjna mapa procesu chrześcijaństwa do 600 jest na płycie towarzyszącej.',
      imageAlt:
        'Schematyczna mapa religii na rok 600 n.e.: szerszy chrześcijański pas śródziemnomorski, zoroastryjski Iran, hinduistyczne Indie, korytarze buddyjskie, chiński kult imperialny, Ameryki bez wypełnienia',
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
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps. Towarzysz procesu: rozprzestrzenianie chrześcijaństwa do 600 (CC BY-SA 3.0).',
    },
    700: {
      title: '700 n.e. — pierwszy szeroki pas islamu Umajjadów',
      caption:
        'Około 700 n.e. na arkuszu po raz pierwszy szeroki pas **islamu** Umajjadów — od Iberii i Maghrebu przez Egipt i Arabię po Iran, Transoksjanię i Sind. Chrześcijaństwo trzyma Bizancjum, Włochy, frankijskie jądro i Brytanię; północ i wschód Europy to jeszcze tradycje lokalne. Indie — parasol hinduistyczny; korytarze buddyjskie i Chiny — własne pasy. Ameryki i Oceania bez wypełnienia.',
      imageAlt:
        'Schematyczna mapa religii na rok 700 n.e.: pierwszy szeroki pas islamu Umajjadów od Iberii i Maghrebu przez Egipt i Arabię po Iran, Transoksjanię i Sind, chrześcijańskie Bizancjum Włochy frankijskie jądro i Brytania, Ameryki bez wypełnienia',
      honestyPills: [
        'Rekonstrukcja schematyczna',
        'Nie spis',
        'Stary Świat',
        'Ameryki nie naniesione',
      ],
      continentBlocks: [
        {
          heading: 'Europa / Śródziemnomorze',
          text: 'Wypełnienie chrześcijańskie w Bizancjum, we Włoszech, we frankijskim jądrze i w Brytanii. Iberia jest islamska. Północ i wschód Europy pozostają tradycjami lokalnymi.',
        },
        {
          heading: 'Azja Południowo-Zachodnia / Iran',
          text: 'Umajjadzki pas islamski od Lewantu przez Arabię i Iran po Transoksjanię i Sind. Cienkie kreskowanie pozostałości zoroastryjskiej w Iranie.',
        },
        {
          heading: 'Azja Południowa / Środkowa / Wschodnia',
          text: 'Parasol hindu w Indiach; korytarze buddyjskie; chińska warstwa imperialna / ludowa.',
        },
        {
          heading: 'Afryka',
          text: 'Umajjadzki pas islamski na Maghrebie — w tym Libia — i w Egipcie. Aksum i Nubia to lekka krawędź chrześcijańska. Na południe od Sahary grube tradycyjne tło afrykańskie.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Nie naniesione.',
        },
      ],
      sources:
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps.',
    },
    800: {
      title: '800 n.e. — pas abbasydzki, silniejszy zachód frankijski',
      caption:
        'Do 800 n.e. pas islamski jest już **abbasydzki** — ta sama plama od Śródziemnomorza po Iran, nieco pełniejsza na wschodzie; al-Andalus i Maghreb nadal na arkuszu. Na zachodzie silniejsze chrześcijaństwo frankijskie / karolińskie; Skandynawia i słowiański wschód wciąż lokalne. Indie hinduistyczne; buddyzm i chińska warstwa cesarska trzymają Wschód. Ameryki nie naniesione.',
      imageAlt:
        'Schematyczna mapa religii na rok 800 n.e.: abbasydzki pas islamski pełniejszy na wschodzie, silniejsze chrześcijaństwo frankijskie karolińskie na zachodzie, hinduistyczne Indie, Ameryki bez wypełnienia',
      honestyPills: [
        'Rekonstrukcja schematyczna',
        'Nie spis',
        'Stary Świat',
        'Ameryki nie naniesione',
      ],
      continentBlocks: [
        {
          heading: 'Europa / Śródziemnomorze',
          text: 'Silniejsze chrześcijaństwo frankijskie / karolińskie na zachodzie. Bizancjum, Włochy i Brytania pozostają chrześcijańskie. Iberia pozostaje islamska. Skandynawia i słowiański wschód — tradycje lokalne.',
        },
        {
          heading: 'Azja Południowo-Zachodnia / Iran',
          text: 'Abbasydzki pas islamski — ta sama plama od Śródziemnomorza po Iran, nieco pełniejsza na wschodzie. Cienkie kreskowanie pozostałości zoroastryjskiej w Iranie. Al-Andalus i Maghreb nadal na arkuszu.',
        },
        {
          heading: 'Azja Południowa / Środkowa / Wschodnia',
          text: 'Hinduistyczne Indie; korytarze buddyjskie; chińska warstwa imperialna / ludowa.',
        },
        {
          heading: 'Afryka',
          text: 'Abbasydzki pas islamski na Maghrebie i w Egipcie. Aksum i Nubia to lekka krawędź chrześcijańska. Na południe od Sahary grube tradycyjne tło afrykańskie.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Nie naniesione.',
        },
      ],
      sources:
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps.',
    },
    900: {
      title: '900 n.e. — następcy Abbasydów, chrześcijańska Europa wciąż nie jednolita na północy',
      caption:
        'Około 900 n.e. islamski Zachód i pas następców Abbasydów nadal szeroki — Maghreb, Egipt, Arabia, Iran, Azja Środkowa, Sind; al-Andalus się trzyma. Chrześcijańska Europa to Bizancjum plus łaciński Zachód i Bałkany — wciąż nie jednolita Skandynawia, Bałtyk ani stepowa północ. Wschód: hinduistyczne Indie, silniejsza buddyjska Azja Płd.-Wsch., chińska warstwa cesarska. Ameryki nie naniesione.',
      imageAlt:
        'Schematyczna mapa religii na rok 900 n.e.: szeroki pas następców Abbasydów, chrześcijański łaciński Zachód i Bałkany, silniejsza buddyjska Azja Południowo-Wschodnia, Ameryki bez wypełnienia',
      honestyPills: [
        'Rekonstrukcja schematyczna',
        'Nie spis',
        'Stary Świat',
        'Ameryki nie naniesione',
      ],
      continentBlocks: [
        {
          heading: 'Europa / Śródziemnomorze',
          text: 'Chrześcijańska Europa to Bizancjum plus łaciński Zachód i Bałkany — wciąż nie jednolita Skandynawia, Bałtyk ani stepowa północ. Al-Andalus trzyma się jako islamski.',
        },
        {
          heading: 'Azja Południowo-Zachodnia / Iran',
          text: 'Pas następców Abbasydów nadal szeroki przez Arabię, Iran, Azję Środkową i Sind. Cienkie kreskowanie pozostałości zoroastryjskiej w Iranie.',
        },
        {
          heading: 'Azja Południowa / Środkowa / Wschodnia',
          text: 'Hinduistyczne Indie; silniejsza buddyjska Azja Południowo-Wschodnia; chińska warstwa imperialna / ludowa.',
        },
        {
          heading: 'Afryka',
          text: 'Islamski Maghreb i Egipt. Aksum i Nubia to lekka krawędź chrześcijańska. Na południe od Sahary grube tradycyjne tło afrykańskie — nie ma jeszcze głębokiego islamu Sahelu.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Nie naniesione.',
        },
      ],
      sources:
        'Wielokąty religii © Fix Planet (rekonstrukcja schematyczna — nie spis). Podkład: André Ourednik et al., historical-basemaps (GPL-3.0); źródło: github.com/aourednik/historical-basemaps.',
    },
    1000: {
      title: '1000 n.e. — rekonstrukcja schematyczna',
      caption:
        'Około 1000 n.e. szeroki pas **islamu** nadal trzyma Maghreb–Libię–Egipt–Bliski Wschód, Arabię, Iran, Azję Środkową i Sind; al-Andalus na miejscu, lekka krawędź sahelska. Chrześcijańska Europa szersza na północ i wschód — krawędź saska / polska / kijowska — wciąż nie jednolita Skandynawia ani Bałtyk. Indie hinduistyczne; korytarze buddyjskie i chińska warstwa cesarska na Wschodzie. Ameryki nie naniesione.',
      imageAlt:
        'Schematyczna mapa religii na rok 1000 n.e.: szeroki pas islamu Maghreb–Libia–Egipt–Bliski Wschód, chrześcijańska Europa szersza na północ i wschód, Ameryki bez wypełnienia',
      honestyPills: [
        'Rekonstrukcja schematyczna',
        'Nie spis',
        'Stary Świat',
        'Ameryki nie naniesione',
      ],
      continentBlocks: [
        {
          heading: 'Europa / Śródziemnomorze',
          text: 'Szerszy chrześcijański Zachód i centrum (pchnięcie saskie w Niemczech, krawędź Czech i Polski, kijowska krawędź chrześcijańska) plus bizantyński Wschód, Włochy, Brytania; Iberia islamska. Daleka północ / ziemie wikińskie i kieszenie bałtyckie — wciąż tradycje lokalne. Plamy żydowskie tam, gdzie widać.',
        },
        {
          heading: 'Azja Południowo-Zachodnia / Afryka Północna / Iran',
          text: 'Islamski pas Maghreb–Libia–Egipt–Bliski Wschód przez Arabię do Iranu, Azji Środkowej i Sind; al-Andalus trzymany; lekka krawędź sahelska / zachodnioafrykańskiego handlu. Cienkie kreskowanie zoroastryjskiego pozostałości; manichejska kreska mniejszościowa mniejsza tam, gdzie widać.',
        },
        {
          heading: 'Azja Południowa / Środkowa / Wschodnia',
          text: 'Parasol hinduistyczny w Indiach; korytarze buddyjskie mniej więcej jak w 900 (Jedwabny Szlak, silniejsza Azja Płd.-Wsch.); chiński pas cesarski / ludowy. Daleki północny step i obrzeża wyspiarskie — lokalny zmyw.',
        },
        {
          heading: 'Afryka',
          text: 'Maghreb–Libia–Egipt w pasie islamskim; lekka krawędź handlowa Sahelu; Aksum/Nubia — krawędź chrześcijańska; na południe od Sahary — gruby afrykański zmyw tradycyjny.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Nie naniesione.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: medieval Afro-Eurasian religion surveys.',
    },
    1100: {
      title: '1100 n.e. — rekonstrukcja schematyczna',
      caption:
        'Do 1100 n.e. (epoka wypraw krzyżowych) pas **islamu** nadal szeroki — Maghreb, Libia, Egipt, Lewant, Arabia, Iran, Azja Środkowa, al-Andalus; krawędź Sahelu. Łaciński chrześcijański Zachód i Bizancjum silniejsze; schematyczna krawędź krzyżowców w Lewancie. Północ i wschód Europy wciąż częściowo lokalne. Indie hinduistyczne; silniejsze buddyjskie Tybet / Azja Płd.-Wsch. / Chiny. Ameryki nie naniesione.',
      imageAlt:
        'Schematyczna mapa religii na rok 1100 n.e.: szeroki pas islamu, krawędź krzyżowców w Lewancie, silniejsze buddyjskie Tybet i Azja Płd.-Wsch., Ameryki bez wypełnienia',
      honestyPills: [
        'Rekonstrukcja schematyczna',
        'Nie spis',
        'Stary Świat',
        'Ameryki nie naniesione',
      ],
      continentBlocks: [
        {
          heading: 'Europa / Śródziemnomorze',
          text: 'Pełniejszy chrześcijański Nadrenia / Niemcy, krawędź Czech–Polski, Bałkany / Bizancjum, Włochy; schematyczna krawędź krzyżowców w Lewancie. Iberia nadal islamska. Daleki północny pozostałość i kieszenie bałtycko-fińskie — tradycje lokalne. Plamy żydowskie.',
        },
        {
          heading: 'Azja Południowo-Zachodnia / Afryka Północna / Iran',
          text: 'Islamski Maghreb–Libia–Egipt–Lewant–Arabia–Bliski Wschód–Persja–krawędź Azji Środkowej; al-Andalus trzymany; krawędź Sahelu. Tylko cienkie kreskowanie zoroastryjskiego pozostałości.',
        },
        {
          heading: 'Azja Południowa / Środkowa / Wschodnia',
          text: 'Hinduistyczne Indie; korytarze buddyjskie silniejsze (krawędź Tybetu / Himalajów, Azja Płd.-Wsch., wniknięcie w Chiny); chiński pas cesarski / ludowy. Północny step i obrzeża wyspiarskie — lokalny zmyw.',
        },
        {
          heading: 'Afryka',
          text: 'Maghreb–Libia–Egipt islamskie; krawędź handlowa Sahelu; Aksum/Nubia — krawędź chrześcijańska; Sahel i południe — afrykański zmyw tradycyjny.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Nie naniesione.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: high-medieval Afro-Eurasian religion surveys.',
    },
    1200: {
      title: '1200 n.e. — rekonstrukcja schematyczna',
      caption:
        'Około 1200 n.e. (przededniu ery mongolskiej) ten sam wielki pas **islamu** — Maghreb–Libia–Egipt–Bliski Wschód–Iran–Azja Środkowa, al-Andalus, krawędź Indusu i Sahelu — bez wymyślonego nowego imperium. Chrześcijaństwo nieco dalej w Bałtyk i Skandynawię; wciąż nie cała Europa. Indie hinduistyczne; buddyzm i chińska warstwa cesarska na Wschodzie. Ameryki nie naniesione.',
      imageAlt:
        'Schematyczna mapa religii na rok 1200 n.e.: wielki pas islamu, chrześcijańska krawędź Bałtyku i Skandynawii, Ameryki bez wypełnienia',
      honestyPills: [
        'Rekonstrukcja schematyczna',
        'Nie spis',
        'Stary Świat',
        'Ameryki nie naniesione',
      ],
      continentBlocks: [
        {
          heading: 'Europa / Śródziemnomorze',
          text: 'Dalej chrześcijańska krawędź bałtycka / skandynawska oraz za Łabą / ruska; łaciński Zachód, Bizancjum, Włochy na arkuszu. Iberia islamska. Daleki arktyczny / fiński pozostałość — wciąż tradycje lokalne. Plamy żydowskie.',
        },
        {
          heading: 'Azja Południowo-Zachodnia / Afryka Północna / Iran',
          text: 'Ten sam wielki pas islamski co w 1100, plus krawędź Indusu / Multanu i lekka krawędź handlowa Sahelu — Maghreb–Libia–Egipt–Bliski Wschód–Persja–Azja Środkowa; al-Andalus. Tylko cienkie kreskowanie zoroastryjskiego pozostałości.',
        },
        {
          heading: 'Azja Południowa / Środkowa / Wschodnia',
          text: 'Hinduistyczne Indie; korytarze buddyjskie jak w 1100 (Tybet, Azja Płd.-Wsch., wniknięcie w Chiny); chiński pas cesarski / ludowy. Północny step i obrzeża wyspiarskie — lokalny zmyw.',
        },
        {
          heading: 'Afryka',
          text: 'Maghreb–Libia–Egipt islamskie; lekka krawędź handlowa Sahelu; Aksum/Nubia — krawędź chrześcijańska; Sahel i południe — afrykański zmyw tradycyjny.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Nie naniesione.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: high-medieval Afro-Eurasian religion surveys.',
    },
    1300: {
      title: '1300 n.e. — rekonstrukcja schematyczna',
      caption:
        'Około 1300 n.e. pas **islamu** — mamelucki Egipt i Syria, Maghreb i Libia, krawędź Anatolii (wcześni Osmanowie), kieszeń Granady w Iberii, plus Bliski Wschód–Arabia–Iran–Azja Środkowa i krawędź Delhi. Chrześcijańska Europa niemal jednolita na zachodzie i w centrum; Bałkany chrześcijańskie. Indie hinduistyczne; korytarze buddyjskie i chińska warstwa na Wschodzie. W Amerykach — tradycje lokalne: rosnąca Mezoameryka (Aztekowie) i Andy, plus inne strefy rdzenne.',
      imageAlt:
        'Schematyczna mapa religii na rok 1300 n.e.: mamelucki pas islamu, krawędź Anatolii, kieszeń Granady, Ameryki — tradycje lokalne',
      honestyPills: packCHonesty.pl,
      continentBlocks: [
        {
          heading: 'Europa / Śródziemnomorze',
          text: 'Wypełnienie chrześcijańskie na łacińskim Zachodzie, we Włoszech, Brytanii, krawędzi skandynawskiej, za Łabą / ruskiej i na Bałkanach. Iberia w większości chrześcijańska poza islamską kieszenią Granady. Anatolia — tylko krawędź islamska, nie większość. Plamy żydowskie tam, gdzie widać.',
        },
        {
          heading: 'Azja Południowo-Zachodnia / Afryka Północna / Iran',
          text: 'Mamelucki islamski Egipt–Syria / Lewant; Maghreb–Libia; Arabia–Bliski Wschód–Iran–Azja Środkowa; islamska krawędź Anatolii (wcześni Osmanowie); krawędź Delhi / Indusu. Tylko cienkie kreskowanie zoroastryjskiego pozostałości tam, gdzie zaznaczono.',
        },
        {
          heading: 'Azja Południowa / Środkowa / Wschodnia',
          text: 'Parasol hinduistyczny w Indiach (islamska krawędź Delhi na północnym zachodzie); korytarze buddyjskie (Tybet / Azja Płd.-Wsch. / wniknięcie w Chiny); chiński pas cesarski / ludowy. Północny step i obrzeża wyspiarskie — lokalny zmyw.',
        },
        {
          heading: 'Afryka',
          text: 'Maghreb–Libia–Egipt w pasie islamskim; lekka krawędź handlowa Sahelu; chrześcijańska krawędź Etiopii/Nubii tam, gdzie widać; na południe od Sahary — gruby afrykański zmyw tradycyjny.',
        },
        {
          heading: 'Ameryki / Oceania',
          text: 'Tradycje lokalne w Amerykach — rosnące jądra azteckie / mezoamerykańskie i andyjskie wyżyny, plus Amazonia, równiny Ameryki Północnej i stożek południowy. Antarktyda / Oceania nie naniesione.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: late-medieval Afro-Eurasian surveys (Mamluk / early Ottoman fringe / Granada) plus indigenous Americas (Aztec-rising Mesoamerica / Andes).',
    },
    1400: emptyPackCCopy('pl', 1400),
    1500: emptyPackCCopy('pl', 1500),
  },
  lv: {
    1: {
      title: '1. m.ē. — shēmatiska rekonstrukcija',
      caption:
        'Fix Planet shēma par nosauktām tradīcijām mūsu ēras sākumā. Romas oficiālie pilsoniskie kulti krāso Vidusjūru; kristietība ir četri pilsētu punkti — Palestīna, Antiohija, Roma, Aleksandrija — ne impērijas aizpilde. Fokuss ir Vecā pasaule; Amerika un Okeānija paliek bez aizpildes.',
      imageAlt:
        'Shēmatiska pasaules reliģiju karte 1. gadam m.ē.: romiešu pagāniskā Vidusjūra, sīki kristiešu punkti, partiešu zoroastriskā josla, Indijas un Haņu lietussargi, Amerika pelēka bez aizpildes',
      eraByContinent: {
        europe:
          'Impērijas un pilsoniskais pagānisms no Britānijas un Gallijas caur Itāliju, Balkāniem un Anatoliju. Ebreju kopienas ir plankumi Romā un austrumu pilsētās. Kristietība ir saujiņa mājas baznīcu, par mazu, lai krāsotu provinci. Uz ziemeļiem no limes — rupjš vietējo tradīciju slānis. Terakota nav „visi ticēja vienādi”.',
        africa:
          'Ēģipte un Magriba romiešu pilsoniskajā slānī; Aleksandrijā ebreju un sīka kristiešu zība. Uz dienvidiem no Sahāras viena Āfrikas tradīciju aizpilde — nezināšanas etiķete, ne kultu tautas skaitīšana. Aksumu kā kristīgu nekrāsojam.',
        asia:
          'Partija ir zoroastriski sliecoša, ne slēgta valsts baznīca. Jūdeja un austrumu diaspora — ebreju plankumi. Indija ir hindu aizpilde ar budistu koridoriem (Ganga, Šrilanka, Gandhāra). Haņu Ķīna ir Ķīnas impērijas slānis; dao / tautas sapludināts ar šo aizpildi. Stepe un Arābija paliek vietējās tradīcijas.',
        americas: 'Pelēks: bez aizpildes. Amerikas reliģiju slāni 1. gadam neizdomājam.',
        oceania: 'Pelēks: bez aizpildes. Austrāliju un Kluso okeānu šajā plāksnē kā reliģijas neaizpildām.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps. Muzeja pavadonis: Élisée Reclus, L’Homme et la Terre (1905), sabiedriskais īpašums.',
    },
    100: {
      title: '100. m.ē. — Trajāns joprojām pagāns',
      caption:
        'Tie paši Vecās pasaules lietussargi kā 1. gadā. Trajāna Roma joprojām oficiāli pagāniska; impēriju kā kristīgu nekrāsojam. Pirmajiem četriem punktiem pievienojas Efesa, Korinta, Kartāga, Smirna. Kušanu pasaule ir indiski–budistu sajaukums, ne viena valsts krāsa.',
      imageAlt:
        'Shēmatiska reliģiju karte 100. gadam m.ē.: pagāniska Vidusjūra, nedaudz vairāk kristiešu pilsētu punktu, kušanu budistu sajaukums, Amerika bez aizpildes',
      eraByContinent: {
        europe:
          'Augstā impērija lapā joprojām ir pilsoniski pagāniska. Papildu kristiešu punkti ir nosauktas pilsētas, ne provinces. Ebreju plankumi paliek. Ziemeļi un mežu Eiropa — vietējās tradīcijas. Impērijas kristīgās krāsas nav.',
        africa:
          'Ziemeļāfrika paliek romiešu pagāniskajā aizpildē; kristiešu punkti Kartāgā un Aleksandrijā. Uz dienvidiem no Sahāras Āfrikas tradīcijas bez izmaiņām — tā nav ciemu aptauja.',
        asia:
          'Partija paliek zoroastriski sliecoša. Kušanu zemes ņem budistu/indisku sajaukumu virs hindu lietussarga. Haņu Ķīna paliek Ķīnas impērijas. Zīda ceļa budistu koridori vēl plāni.',
        americas: 'Joprojām bez aizpildes. Gadsimta paišana nav iemesls izdomāt Ameriku.',
        oceania: 'Joprojām pelēks: bez aizpildes.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps.',
    },
    200: {
      title: '200. m.ē. — oficiāli pagāniska, blīvākas kristiešu pilsētas',
      caption:
        'Roma joprojām oficiāli pagāniska. Kristietība rādās kā blīvāks pilsētu šrafējums Sīrijā, Mazāzijā, Ēģiptē, Romā un Kartāgā — ne Vidusjūras aizpilde. Plāns maniheiešu šrafējums Mezopotāmijā. Sasānīdu Irāna ir stiprāka zoroastriskā josla. Budistu koridori biezāki uz Zīda ceļa; Ķīna paliek impērijas ar budistu ieplūdēm.',
      imageAlt:
        'Shēmatiska reliģiju karte 200. gadam: pagāniskā Roma, kristiešu pilsētu šrafējums, sasānīdu zoroastrisms, Zīda ceļa budisms, Amerika bez aizpildes',
      eraByContinent: {
        europe:
          'Oficiālā krāsa joprojām ir romiešu pilsoniskais / pagāniskais. Kristiešu šrafējums sēž uz Romas un dažām rietumu pilsētām. Lauku Rietumi nav baznīcas karte. Uz ziemeļiem no limes — rupjas vietējās tradīcijas.',
        africa:
          'Kartāga un Ēģipte nes kristiešu pilsētu šrafējumu virs pagāniska oficiālā slāņa. Uz dienvidiem no Sahāras Āfrikas tradīcijas bez izmaiņām. Kristīgu Nūbiju šajā solī neizdomājam.',
        asia:
          'Sasānīdu Irāna ir stiprāks zoroastriskais lietussargs. Maniheiešu šrafējums ir tikai minoritāte, Mezopotāmijā un dienvidrietumu Irānā. Budistu joslas iet caur Gandhāru, Baktriju un Tarimu. Ķīna ir impērijas, ar budistu šrafējumu iekšienē — ne budistu impērija.',
        americas: 'Pelēks: bez aizpildes. Ameriku neizdomājam.',
        oceania: 'Pelēks: bez aizpildes.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps.',
    },
    300: {
      title: '300. m.ē. — Konstantīna priekšvakarā, vairākums pagānisks',
      caption:
        'Konstantīna priekšvakarā Vidusjūra šajā lapā joprojām ir vairākumā pagāniska. Kristietība ir liela pilsētu minoritāte Austrumos — šrafējums un daļēja krāsa, ne visas impērijas kristīga aizpilde. Armēnija ir izvēles kristīga mala. Irāna paliek zoroastriska; Indija un Ķīna patur lietussargus.',
      imageAlt:
        'Shēmatiska reliģiju karte 300. gadam: pagānisks vairākums ap Romu, kristiešu pilsētu minoritāte Austrumos, Armēnijas mala, Amerika bez aizpildes',
      eraByContinent: {
        europe:
          'Rietumi un liela daļa Balkānu paliek romiešu pilsoniskais / pagāniskais. Austrumu pilsētas (Grieķija, Anatolija) ņem kristiešu šrafējumu. Tas nav „impērija ir kristīga”. Lauku pagāniskā prakse ir noklusējums ārpus šrafējumiem.',
        africa:
          'Ēģipte un Kartāga rāda kristiešu pilsētu šrafējumu virs pagāniska oficiālā slāņa. Uz dienvidiem no Sahāras joprojām viena rupja Āfrikas tradīciju josla. Aksumu vēl neaizpildām kā kristīgu.',
        asia:
          'Armēnija ir piesardzīga kristīga mala. Irāna ir zoroastriska. Indija paliek hindu lietussargs ar budistu koridoriem. Ķīna ir Ķīnas impērijas ar budistu ieplūdēm. Maniheiešu šrafējums paliek minoritāte.',
        americas: 'Pelēks: bez aizpildes. Ameriku neizdomājam.',
        oceania: 'Pelēks: bez aizpildes.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps. Procesa pavadonis: kristietības izplatība līdz 600. (CC BY-SA 3.0).',
    },
    400: {
      title: '400. m.ē. — pēc Teodosija, ne visa Eiropa kristīga',
      caption:
        'Pēc Teodosija kristietība izplešas austrumu un rietumu elitei un pilsētām. Lauku pagāniskais šrafējums paliek Gallijā, Britānijā un iekšējos Balkānos — mēs nekrāsojam visu Eiropu kā vienlaidu kristīgu. Irāna paliek zoroastriska. Nūbija un Aksums ir izvēles piesardzīgas kristīgas malas. Amerika paliek bez aizpildes.',
      imageAlt:
        'Shēmatiska reliģiju karte 400. gadam: kristīgie Austrumi un rietumu pilsētu joslas, lauku pagāniskais šrafējums, zoroastriskā Irāna, Amerika bez aizpildes',
      eraByContinent: {
        europe:
          'Austrumi (Grieķija, Anatolija) lasās kristīgāki. Itālija, dienvidu Gallija un Ibērijas piekraste rāda pilsētu/elites kristiešu šrafējumu virs joprojām pagāniskiem laukiem. Ģermānija un Skandināvija paliek vietējās tradīcijas. Tā nav vienlaidu kristīga Eiropa.',
        africa:
          'Ēģipte un romiešu Āfrika nes stiprāku kristiešu pilsētu zīmi. Piesardzīga kristīga mala Nūbijā un Aksumā — izvēles, ne aizkrāsota karaliste. Pārējais kontinents paliek Āfrikas tradīcijas.',
        asia:
          'Irāna paliek zoroastriska. Armēnija patur kristīgu malu. Indija un Ķīna patur hindu un impērijas lietussargus, ar budistu koridoriem un ieplūdēm. Islāma slāņa nav: tas nepieder 400. gada plāksnei.',
        americas: 'Joprojām pelēks: bez aizpildes. Amerikas reliģiju horoplētu neizdomājam.',
        oceania: 'Joprojām pelēks: bez aizpildes.',
      },
      sources:
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps. Procesa pavadonis: kristietības izplatība līdz 600. (CC BY-SA 3.0).',
    },
    500: {
      title: '500. m.ē. — bijusī romiešu pasaule, lauku pagānisms joprojām redzams',
      caption:
        'Ap 500. gadu m.ē. kristietība ir paplašinājusies lielā daļā bijušās romiešu pasaules, bet lauku pagāniskā prakse joprojām vietām redzama. Sasānīdu Irāna paliek zoroastriska; Indija un Ķīna patur savas lielās joslas; Aksums un Nūbija parādās tikai kā viegla kristīga mala. Amerika un Okeānija paliek bez aizpildes — mēs tās neizdomājam. Islāma uz šīs lapas nav.',
      imageAlt:
        'Shēmatiska reliģiju karte 500. gadam m.ē.: kristīga aizpilde bijušajā romiešu pasaulē, lauku pagāniskais šrafējums, zoroastriskā Irāna, Indijas un Ķīnas joslas, Amerika bez aizpildes',
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
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps.',
    },
    600: {
      title: '600. m.ē. — stiprāka kristiešu josla, Irāna zoroastriska',
      caption:
        'Līdz 600. gadam m.ē. kristiešu josla Āfroeiropāzijas Vidusjūras pasaulē ir stiprāka, bet lapā joprojām ir zoroastriskā Irāna, hindu Indija, budistu koridori un Ķīnas impērijas kults. Islāms šeit nav izpleties kā impērijas krāsa. Amerika paliek bez aizpildes. Vienas tradīcijas procesa karte „kristietība → 600” ir atsevišķs pavadonis.',
      imageAlt:
        'Shēmatiska reliģiju karte 600. gadam m.ē.: platāka kristiešu Vidusjūras josla, zoroastriskā Irāna, hindu Indija, budistu koridori, Ķīnas impērijas kults, Amerika bez aizpildes',
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
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps. Procesa pavadonis: kristietības izplatība līdz 600. (CC BY-SA 3.0).',
    },
    700: {
      title: '700. g. m.ē. — pirmo reizi plata islāma Omeijadu josla',
      caption:
        'Ap 700. g. m.ē. uz plāksnes pirmo reizi plats **islāma** Omeijadu josla — no Ibērijas un Magribas caur Ēģipti un Arābiju līdz Irānai, Transoksānai un Sindai. Kristietība tur Bizantiju, Itāliju, franku kodolu un Britāniju; Eiropas ziemeļi un austrumi vēl vietējās tradīcijas. Indija — hinduistu lietussargs; budistu koridori un Ķīna — savas joslas. Amerika un Okeānija nav kartētas.',
      imageAlt:
        'Shēmatiska reliģiju karte 700. gadam m.ē.: pirmo reizi plata islāma Omeijadu josla no Ibērijas un Magribas caur Ēģipti un Arābiju līdz Irānai, Transoksānai un Sindai, kristīgā Bizantija Itālija franku kodols un Britānija, Amerika bez aizpildes',
      honestyPills: [
        'Shēmatiska rekonstrukcija',
        'Ne tautas skaitīšana',
        'Vecā pasaule',
        'Amerika nav kartēta',
      ],
      continentBlocks: [
        {
          heading: 'Eiropa / Vidusjūra',
          text: 'Kristīga aizpilde Bizantijā, Itālijā, franku kodolā un Britānijā. Ibērija ir islāma. Eiropas ziemeļi un austrumi paliek vietējās tradīcijas.',
        },
        {
          heading: 'Dienvidrietumāzija / Irāna',
          text: 'Omeijadu islāma josla no Levantes caur Arābiju un Irānu līdz Transoksānai un Sindai. Plāns zoroastriskais palieku šrafējums Irānā.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hindu lietussargs Indijā; budistu koridori; Ķīnas impērijas / tautas slānis.',
        },
        {
          heading: 'Āfrika',
          text: 'Omeijadu islāma josla Magribā — tostarp Lībijā — un Ēģiptē. Aksums un Nūbija ir viegla kristīga mala. Uz dienvidiem no Sahāras rupjš Āfrikas tradicionālais fons.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Nav kartēts.',
        },
      ],
      sources:
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps.',
    },
    800: {
      title: '800. g. m.ē. — abasīdu josla, spēcīgāki franku rietumi',
      caption:
        'Līdz 800. g. m.ē. islāma josla jau ir **abasīdu** — tā pati Vidusjūras–Irānas aizpilde, austrumos nedaudz pilnāka; al-Andalusa un Magriba joprojām uz plāksnes. Rietumos spēcīgāka franku / karolingiskā kristietība; Skandināvija un slāvu austrumi vēl vietējie. Indija hinduistu; budisms un ķīniešu imperiālais slānis tur Austrumus. Amerika nav kartēta.',
      imageAlt:
        'Shēmatiska reliģiju karte 800. gadam m.ē.: abasīdu islāma josla pilnāka austrumos, spēcīgāka franku karolingiskā kristietība rietumos, hinduistu Indija, Amerika bez aizpildes',
      honestyPills: [
        'Shēmatiska rekonstrukcija',
        'Ne tautas skaitīšana',
        'Vecā pasaule',
        'Amerika nav kartēta',
      ],
      continentBlocks: [
        {
          heading: 'Eiropa / Vidusjūra',
          text: 'Spēcīgāka franku / karolingiskā kristietība rietumos. Bizantija, Itālija un Britānija paliek kristīgas. Ibērija paliek islāma. Skandināvija un slāvu austrumi — vietējās tradīcijas.',
        },
        {
          heading: 'Dienvidrietumāzija / Irāna',
          text: 'Abasīdu islāma josla — tā pati Vidusjūras–Irānas aizpilde, austrumos nedaudz pilnāka. Plāns zoroastriskais palieku šrafējums Irānā. Al-Andalusa un Magriba joprojām uz plāksnes.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hinduistu Indija; budistu koridori; Ķīnas impērijas / tautas slānis.',
        },
        {
          heading: 'Āfrika',
          text: 'Abasīdu islāma josla Magribā un Ēģiptē. Aksums un Nūbija ir viegla kristīga mala. Uz dienvidiem no Sahāras rupjš Āfrikas tradicionālais fons.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Nav kartēts.',
        },
      ],
      sources:
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps.',
    },
    900: {
      title: '900. g. m.ē. — abasīdu pēcteči, kristīgā Eiropa joprojām ne vienlaidus ziemeļos',
      caption:
        'Ap 900. g. m.ē. islāma Rietumi un abasīdu pēcteču josla joprojām plata — Magriba, Ēģipte, Arābija, Irāna, Centrālāzija, Sinda; al-Andalusa turas. Kristīgā Eiropa — Bizantija plus latīņu Rietumi un Balkāni — joprojām ne vienlaidus Skandināvija, Baltija vai stepes ziemeļi. Austrumi: hinduistu Indija, spēcīgāka budistu Dienvidaustrumāzija, ķīniešu imperiālais slānis. Amerika nav kartēta.',
      imageAlt:
        'Shēmatiska reliģiju karte 900. gadam m.ē.: plata abasīdu pēcteču josla, kristīgie latīņu Rietumi un Balkāni, spēcīgāka budistu Dienvidaustrumāzija, Amerika bez aizpildes',
      honestyPills: [
        'Shēmatiska rekonstrukcija',
        'Ne tautas skaitīšana',
        'Vecā pasaule',
        'Amerika nav kartēta',
      ],
      continentBlocks: [
        {
          heading: 'Eiropa / Vidusjūra',
          text: 'Kristīgā Eiropa — Bizantija plus latīņu Rietumi un Balkāni — joprojām ne vienlaidus Skandināvija, Baltija vai stepes ziemeļi. Al-Andalusa turas kā islāma.',
        },
        {
          heading: 'Dienvidrietumāzija / Irāna',
          text: 'Abasīdu pēcteču josla joprojām plata caur Arābiju, Irānu, Centrālāziju un Sindu. Plāns zoroastriskais palieku šrafējums Irānā.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hinduistu Indija; spēcīgāka budistu Dienvidaustrumāzija; Ķīnas impērijas / tautas slānis.',
        },
        {
          heading: 'Āfrika',
          text: 'Islāma Magriba un Ēģipte. Aksums un Nūbija ir viegla kristīga mala. Uz dienvidiem no Sahāras rupjš Āfrikas tradicionālais fons — dziļa Sahelas islāma vēl nav.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Nav kartēts.',
        },
      ],
      sources:
        'Reliģiju daudzstūri © Fix Planet (shēmatiska rekonstrukcija — ne tautas skaitīšana). Apakšslānis: André Ourednik et al., historical-basemaps (GPL-3.0); avots: github.com/aourednik/historical-basemaps.',
    },
    1000: {
      title: '1000. g. m.ē. — shēmatiska rekonstrukcija',
      caption:
        'Ap 1000. g. m.ē. plata **islāma** josla joprojām tur Magribu–Lībiju–Ēģipti–Tuvos Austrumus, Arābiju, Irānu, Centrālāziju un Sindu; al-Andalusa vietā, viegla sahēlas mala. Kristīgā Eiropa platāka uz ziemeļiem un austrumiem — sakšu / poļu / Kijivas mala — joprojām ne vienlaidus Skandināvija vai Baltija. Indija hinduistu; budistu koridori un ķīniešu imperiālais slānis Austrumos. Amerika nav kartēta.',
      imageAlt:
        'Shēmatiska reliģiju karte 1000. gadam m.ē.: plata islāma Magribas–Lībijas–Ēģiptes–Tuvo Austrumu josla, kristīgā Eiropa platāka uz ziemeļiem un austrumiem, Amerika bez aizpildes',
      honestyPills: [
        'Shēmatiska rekonstrukcija',
        'Ne tautas skaitīšana',
        'Vecā pasaule',
        'Amerika nav kartēta',
      ],
      continentBlocks: [
        {
          heading: 'Eiropa / Vidusjūra',
          text: 'Platāks kristīgais Rietums un centrs (sakšu grūdiens Vācijā, Bohēmijas un Polijas mala, Kijivas kristīgā mala) plus Bizantijas austrumi, Itālija, Britānija; Ibērija islāmiska. Tālie ziemeļi / vikingu zemes un Baltijas kabatas — vēl vietējās tradīcijas. Jūdu plankumi, kur redzami.',
        },
        {
          heading: 'Dienvidrietumāzija / Ziemeļāfrika / Irāna',
          text: 'Islāma Magribas–Lībijas–Ēģiptes–Tuvo Austrumu josla caur Arābiju uz Irānu, Centrālāziju un Sindu; al-Andalusa turas; viegla sahēlas / Rietumāfrikas tirdzniecības mala. Plāns zoroastrisma atlikuma šrafējums; maniheisma minoritātes šrafējums mazāks, kur redzams.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hinduistu lietussargs Indijā; budistu koridori aptuveni kā 900. gadā (Zīda ceļš, spēcīgāka DA Āzija); ķīniešu imperiālā / tautas josla. Tālā ziemeļu stepe un salu malas — vietējā josla.',
        },
        {
          heading: 'Āfrika',
          text: 'Magriba–Lībija–Ēģipte islāma joslā; viegla sahēlas tirdzniecības mala; Aksūma/Nūbija — kristīgā mala; uz dienvidiem no Sahāras — rupja āfrikāņu tradicionālā josla.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Nav kartēts.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: medieval Afro-Eurasian religion surveys.',
    },
    1100: {
      title: '1100. g. m.ē. — shēmatiska rekonstrukcija',
      caption:
        'Līdz 1100. g. m.ē. (krusta karu laikmets) **islāma** josla joprojām plata — Magriba, Lībija, Ēģipte, Levanta, Arābija, Irāna, Centrālāzija, al-Andalusa; sahēlas mala. Latīņu kristīgais Rietums un Bizantija spēcīgāki; shēmatiska krustnešu mala Levantā. Eiropas ziemeļi un austrumi vēl daļēji vietēji. Indija hinduistu; spēcīgāki budistu Tibeta / DA Āzija / Ķīna. Amerika nav kartēta.',
      imageAlt:
        'Shēmatiska reliģiju karte 1100. gadam m.ē.: plata islāma josla, krustnešu mala Levantā, spēcīgāki budistu Tibeta un DA Āzija, Amerika bez aizpildes',
      honestyPills: [
        'Shēmatiska rekonstrukcija',
        'Ne tautas skaitīšana',
        'Vecā pasaule',
        'Amerika nav kartēta',
      ],
      continentBlocks: [
        {
          heading: 'Eiropa / Vidusjūra',
          text: 'Pilnāks kristīgais Reinzeme / Vācija, Bohēmijas–Polijas mala, Balkāni / Bizantija, Itālija; shēmatiska krustnešu mala Levantā. Ibērija joprojām islāmiska. Tālā ziemeļu atlikums un Baltijas / somu kabatas — vietējās tradīcijas. Jūdu plankumi.',
        },
        {
          heading: 'Dienvidrietumāzija / Ziemeļāfrika / Irāna',
          text: 'Islāma Magriba–Lībija–Ēģipte–Levanta–Arābija–Tuvie Austrumi–Persija–Centrālāzijas mala; al-Andalusa turas; sahēlas mala. Tikai plāns zoroastrisma atlikuma šrafējums.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hinduistu Indija; budistu koridori spēcīgāki (Tibetas / Himalaju mala, DA Āzija, ieplūde Ķīnā); ķīniešu imperiālā / tautas josla. Ziemeļu stepe un salu malas — vietējā josla.',
        },
        {
          heading: 'Āfrika',
          text: 'Magriba–Lībija–Ēģipte islāmiskas; sahēlas tirdzniecības mala; Aksūma/Nūbija — kristīgā mala; Sahēla un dienvidi — āfrikāņu tradicionālā josla.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Nav kartēts.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: high-medieval Afro-Eurasian religion surveys.',
    },
    1200: {
      title: '1200. g. m.ē. — shēmatiska rekonstrukcija',
      caption:
        'Ap 1200. g. m.ē. (mongolu laikmeta priekšvakarā) tā pati lielā **islāma** josla — Magriba–Lībija–Ēģipte–Tuvie Austrumi–Irāna–Centrālāzija, al-Andalusa, Indas un sahēlas mala — bez izdomātas jaunas impērijas. Kristietība nedaudz tālāk Baltijā un Skandināvijā; joprojām ne visa Eiropa. Indija hinduistu; budisms un ķīniešu imperiālais slānis Austrumos. Amerika nav kartēta.',
      imageAlt:
        'Shēmatiska reliģiju karte 1200. gadam m.ē.: lielā islāma josla, kristīgā Baltijas un Skandināvijas mala, Amerika bez aizpildes',
      honestyPills: [
        'Shēmatiska rekonstrukcija',
        'Ne tautas skaitīšana',
        'Vecā pasaule',
        'Amerika nav kartēta',
      ],
      continentBlocks: [
        {
          heading: 'Eiropa / Vidusjūra',
          text: 'Tālāk kristīgā Baltijas / Skandināvijas mala un aiz Elbas / Krievzemes mala; latīņu Rietumi, Bizantija, Itālija uz plāksnes. Ibērija islāmiska. Tālais arktiskais / somu atlikums — vēl vietējās tradīcijas. Jūdu plankumi.',
        },
        {
          heading: 'Dienvidrietumāzija / Ziemeļāfrika / Irāna',
          text: 'Tā pati lielā islāma josla kā 1100. gadā, plus Indas / Multānas mala un viegla sahēlas tirdzniecības mala — Magriba–Lībija–Ēģipte–Tuvie Austrumi–Persija–Centrālāzija; al-Andalusa. Tikai plāns zoroastrisma atlikuma šrafējums.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hinduistu Indija; budistu koridori kā 1100. gadā (Tibeta, DA Āzija, ieplūde Ķīnā); ķīniešu imperiālā / tautas josla. Ziemeļu stepe un salu malas — vietējā josla.',
        },
        {
          heading: 'Āfrika',
          text: 'Magriba–Lībija–Ēģipte islāmiskas; viegla sahēlas tirdzniecības mala; Aksūma/Nūbija — kristīgā mala; Sahēla un dienvidi — āfrikāņu tradicionālā josla.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Nav kartēts.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: high-medieval Afro-Eurasian religion surveys.',
    },
    1300: {
      title: '1300. g. m.ē. — shēmatiska rekonstrukcija',
      caption:
        'Ap 1300. g. m.ē. **islāma** josla — mameluku Ēģipte un Sīrija, Magriba un Lībija, Anatolijas mala (agrie osmaņi), Granadas kabata Ibērijā, plus Tuvie Austrumi–Arābija–Irāna–Centrālāzija un Deli mala. Kristīgā Eiropa gandrīz vienlaidus rietumos un centrā; Balkāni kristīgi. Indija hinduistu; budistu koridori un ķīniešu slānis Austrumos. Amerikā — vietējās tradīcijas: augošā Mezoamerika (acteki) un Andi, plus citas indīgēnās zonas.',
      imageAlt:
        'Shēmatiska reliģiju karte 1300. gadam m.ē.: mameluku islāma josla, Anatolijas mala, Granadas kabata, Amerika — vietējās tradīcijas',
      honestyPills: packCHonesty.lv,
      continentBlocks: [
        {
          heading: 'Eiropa / Vidusjūra',
          text: 'Kristīgā aizpilde latīņu Rietumos, Itālijā, Britānijā, Skandināvijas malā, aiz Elbas / Krievzemes malā un Balkānos. Ibērija pārsvarā kristīga, izņemot islāma Granadas kabatu. Anatolija — tikai islāma mala, ne vairākuma aizpilde. Jūdu plankumi, kur redzami.',
        },
        {
          heading: 'Dienvidrietumāzija / Ziemeļāfrika / Irāna',
          text: 'Mameluku islāma Ēģipte–Sīrija / Levanta; Magriba–Lībija; Arābija–Tuvie Austrumi–Irāna–Centrālāzija; Anatolijas islāma mala (agrie osmaņi); Deli / Indas mala. Tikai plāns zoroastrisma atlikuma šrafējums, kur atzīmēts.',
        },
        {
          heading: 'Dienvidu / Centrālā / Austrumāzija',
          text: 'Hinduistu lietussargs Indijā (islāma Deli mala ziemeļrietumos); budistu koridori (Tibeta / DA Āzija / ieplūde Ķīnā); ķīniešu imperiālā / tautas josla. Ziemeļu stepe un salu malas — vietējā josla.',
        },
        {
          heading: 'Āfrika',
          text: 'Magriba–Lībija–Ēģipte islāma joslā; viegla sahēlas tirdzniecības mala; Etiopijas/Nūbijas kristīgā mala, kur redzama; uz dienvidiem no Sahāras — rupja āfrikāņu tradicionālā josla.',
        },
        {
          heading: 'Amerika / Okeānija',
          text: 'Vietējās tradīcijas Amerikā — augoši acteku / Mezoamerikas un Andu kalnu kodoli, plus Amazone, Ziemeļamerikas līdzenumi un dienvidu konuss. Antarktīda / Okeānija nav kartēta.',
        },
      ],
      sources:
        '1. Religion fills — Fix Planet schematic reconstruction (not a census). 2. Historical basemap underlay — GPL-3.0 (Sources / License only). 3. Land mask — Natural Earth 110m. 4. Orientation only: late-medieval Afro-Eurasian surveys (Mamluk / early Ottoman fringe / Granada) plus indigenous Americas (Aztec-rising Mesoamerica / Andes).',
    },
    1400: emptyPackCCopy('lv', 1400),
    1500: emptyPackCCopy('lv', 1500),
  },
};

export const religionLegendLabels: Record<Locale, Record<ReligionLegendId, string>> = {
  en: {
    roman_pagan: 'Roman civic / pagan',
    christian: 'Christian (dot / hatch)',
    islam: 'Islam',
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
    islam: 'Ислам',
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
    islam: 'Islam',
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
    islam: 'Islāms',
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
