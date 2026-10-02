import type { HubIconName } from './hub';

export const lawCategoryKeys = ['ecology', 'ai', 'animals'] as const;

export type LawCategory = (typeof lawCategoryKeys)[number];

export const lawHub = [
  { key: 'ecology', icon: 'leaf' },
  { key: 'ai', icon: 'circuit' },
  { key: 'animals', icon: 'paw' },
] as const satisfies ReadonlyArray<{ key: LawCategory; icon: HubIconName }>;

export const lawStatusKeys = ['existing', 'pending', 'ideas'] as const;

export type LawStatus = (typeof lawStatusKeys)[number];

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
  width?: number;
  height?: number;
};

export type LawSource = {
  label: string;
  url: string;
};

export type LawMeta = {
  slug: string;
  category: LawCategory;
  status: LawStatus;
  year: string;
  image: ImageCredit;
  sources: LawSource[];
};

export type LawCopy = {
  title: string;
  hook: string;
  imageAlt: string;
  /** Visible caption. When set, the detail figure uses natural aspect. */
  caption?: string;
  /** Localized credit sentence before the licence phrase. */
  figureCredit?: string;
  /** Licence phrase, linked when figureLicenseUrl is set. */
  figureLicense?: string;
  figureLicenseUrl?: string;
  jurisdiction: string;
  officialName: string;
  citation: string;
  yearStatus: string;
  what: string;
  where: string;
  effects: string;
  caveats: string;
  sourcesNote: string;
  /** Localized source titles. Falls back to the shared English labels. */
  sources?: LawSource[];
};

export type LawEntry = LawMeta & LawCopy;

function img(
  file: string,
  credit: string,
  license: string,
  sourceUrl: string,
  width?: number,
  height?: number,
): ImageCredit {
  return { file, credit, license, sourceUrl, width, height };
}

/**
 * Curated first Law catalog. To add an entry:
 * 1. Add a row here (English slug, category, status, year, image credit, source URLs).
 * 2. Add the same slug to en / ru / pl / lv in `src/i18n/law-en.ts` (and the locale files).
 * 3. Drop a licensed image in `public/images/law/{file}` and record `credits.json`.
 * 4. `npm run build`.
 *
 * Slugs stay English in every language. Do not invent statutes, dates, or impact stats.
 * Ideas must stay on the Ideas shelf and must not read as enacted law.
 */
export const lawMeta: LawMeta[] = [
  {
    slug: 'paris-agreement',
    category: 'ecology',
    status: 'existing',
    year: '2015',
    image: img(
      'paris-agreement.jpg',
      'U.S. Department of State',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:French_President_Hollande,_Foreign_Minister_Fabius,_and_UN_Secretary-General_Ki-moon_Applaud_Delegates_to_the_COP21_Climate_Change_Conference_(23696822225).jpg',
    ),
    sources: [
      {
        label: 'UNFCCC — The Paris Agreement',
        url: 'https://unfccc.int/process-and-meetings/the-paris-agreement',
      },
      {
        label: 'UNFCCC — Paris Agreement (English PDF)',
        url: 'https://unfccc.int/sites/default/files/english_paris_agreement.pdf',
      },
      {
        label: 'UN Treaty Depositary — Paris Agreement',
        url: 'https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XXVII-7-d&chapter=27&clang=_en',
      },
    ],
  },
  {
    slug: 'montreal-protocol',
    category: 'ecology',
    status: 'existing',
    year: '1987',
    image: img(
      'montreal-protocol.jpg',
      'NASA Scientific Visualization Studio',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:2023_Ozone_Hole_Update_(SVS14449_-_ozone_geos5_2023264_print).jpg',
    ),
    sources: [
      {
        label: 'Ozone Secretariat — Montreal Protocol',
        url: 'https://ozone.unep.org/treaties/montreal-protocol',
      },
      {
        label: 'Ozone Secretariat — Amendments (incl. Kigali)',
        url: 'https://ozone.unep.org/treaties/montreal-protocol/amendments',
      },
      {
        label: 'UN Treaty Depositary — Kigali Amendment',
        url: 'https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XXVII-2-f&chapter=27&clang=_en',
      },
    ],
  },
  {
    slug: 'eu-deforestation-regulation',
    category: 'ecology',
    status: 'existing',
    year: '2023',
    image: img(
      'eu-deforestation-regulation.jpg',
      'T. R. Shankar Raman',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Oil_palm_and_rainforest_fragment_Borneo.JPG',
    ),
    sources: [
      {
        label: 'EUR-Lex — Regulation (EU) 2023/1115',
        url: 'https://eur-lex.europa.eu/eli/reg/2023/1115/oj',
      },
      {
        label: 'European Commission — Deforestation-free products',
        url: 'https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en',
      },
    ],
  },
  {
    slug: 'eu-ets',
    category: 'ecology',
    status: 'existing',
    year: '2003',
    image: img(
      'eu-ets.jpg',
      'Vogone',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Kohlekraftwerk_Niederaußem_edit.JPG',
    ),
    sources: [
      {
        label: 'European Commission — EU ETS hub',
        url: 'https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets_en',
      },
      {
        label: 'European Commission — What is the EU ETS',
        url: 'https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets/what-eu-ets_en',
      },
      {
        label: 'EUR-Lex — Directive 2003/87/EC',
        url: 'https://eur-lex.europa.eu/eli/dir/2003/87/oj',
      },
    ],
  },
  {
    slug: 'nature-restoration',
    category: 'ecology',
    status: 'existing',
    year: '2024',
    image: img(
      'nature-restoration.jpg',
      'Skippy',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Chalupsk%C3%A1_sla%C5%A5_1_(10).jpg',
    ),
    sources: [
      {
        label: 'EUR-Lex — Regulation (EU) 2024/1991',
        url: 'https://eur-lex.europa.eu/eli/reg/2024/1991/oj',
      },
      {
        label: 'European Commission — Nature Restoration Law',
        url: 'https://environment.ec.europa.eu/topics/nature-and-biodiversity/nature-restoration-law_en',
      },
      {
        label: 'Commission news — entry into force, 15 August 2024',
        url: 'https://environment.ec.europa.eu/news/nature-restoration-law-enters-force-2024-08-15_en',
      },
      {
        label: 'Commission news — draft national plans, 1 September 2026',
        url: 'https://environment.ec.europa.eu/news/eu-countries-submit-draft-plans-restoring-nature-2026-09-01_en',
      },
    ],
  },
  {
    slug: 'clean-air-act',
    category: 'ecology',
    status: 'existing',
    year: '1970',
    image: img(
      'clean-air-act.jpg',
      'Architect of the Capitol',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:United_States_Capitol_-_west_front.jpg',
    ),
    sources: [
      {
        label: 'EPA — Clean Air Act overview',
        url: 'https://www.epa.gov/clean-air-act-overview',
      },
      {
        label: 'EPA — Benefits and Costs of the Clean Air Act 1990–2020 (Second Prospective)',
        url: 'https://www.epa.gov/clean-air-act-overview/benefits-and-costs-clean-air-act-1990-2020-second-prospective-study',
      },
      {
        label: 'U.S. Code — 42 U.S.C. § 7401 et seq.',
        url: 'https://www.law.cornell.edu/uscode/text/42/chapter-85',
      },
    ],
  },
  {
    slug: 'single-use-plastics',
    category: 'ecology',
    status: 'existing',
    year: '2019',
    image: img(
      'single-use-plastics.jpg',
      'SusuGeo',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:PET_bottles.jpg',
    ),
    sources: [
      {
        label: 'EUR-Lex — Directive (EU) 2019/904',
        url: 'https://eur-lex.europa.eu/eli/dir/2019/904/oj',
      },
      {
        label: 'European Commission — single-use plastics',
        url: 'https://environment.ec.europa.eu/topics/plastics/single-use-plastics_en',
      },
    ],
  },
  {
    slug: 'costa-rica-pes',
    category: 'ecology',
    status: 'existing',
    year: '1996',
    image: img(
      'costa-rica-pes.jpg',
      'Haakon S. Krohn',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Monteverde_bosque.jpg',
    ),
    sources: [
      {
        label: 'FONAFIFO — Payment for Environmental Services',
        url: 'https://www.fonafifo.go.cr/en/servicios/pago-de-servicios-ambientales',
      },
      {
        label: 'UNFCCC — Costa Rica PES programme',
        url: 'https://unfccc.int/climate-action/momentum-for-change/financing-for-climate-friendly-investment/payments-for-environmental-services-program',
      },
      {
        label: 'FAOLEX — Forestry Law No. 7575',
        url: 'https://www.fao.org/faolex/results/details/en/c/LEX-FAOC012074/',
      },
    ],
  },
  {
    slug: 'turkmenistan-two-trees',
    category: 'ecology',
    status: 'existing',
    year: '1992',
    image: img(
      'turkmenistan-two-trees.jpg',
      'Bjørn Christian Tørrissen',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Neutrality-Road-Ashgabat-2015.JPG',
    ),
    sources: [
      {
        label: 'FAOLEX PDF — Постановление президента Туркменистана, 9 ноября 1992 г.',
        url: 'http://faolex.fao.org/docs/pdf/tuk80588.pdf',
      },
      {
        label: 'UNEP LEAP / FAOLEX catalogue entry',
        url: 'https://leap.unep.org/en/countries/tm/national-legislation/presidential-decree-promotion-gardening-and-planting-greenery',
      },
    ],
  },
  {
    slug: 'uzbekistan-compensatory-planting',
    category: 'ecology',
    status: 'existing',
    year: '2024',
    image: img(
      'uzbekistan-compensatory-planting.jpg',
      'Zahro designer',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:O%27rik_daraxti_gullagan_xolati.jpg',
    ),
    sources: [
      {
        label: 'lex.uz — ЗРУ-916 of 29 February 2024 (Russian)',
        url: 'https://lex.uz/ru/docs/6822342',
      },
      {
        label: 'lex.uz — O‘RQ-916 of 29 February 2024 (Uzbek)',
        url: 'https://lex.uz/docs/-6822348',
      },
      {
        label: 'lex.uz — Law on the protection and use of flora, Article 49¹ (as amended)',
        url: 'https://lex.uz/docs/3030360',
      },
      {
        label: 'UzDaily — Senate consideration of the same amending law',
        url: 'https://www.uzdaily.uz/en/uzbekistan-increases-penalties-for-illegal-tree-cutting/',
      },
    ],
  },
  {
    slug: 'convention-on-biological-diversity',
    category: 'ecology',
    status: 'existing',
    year: '1992',
    image: img(
      'convention-on-biological-diversity.jpg',
      'Vyacheslav Argenberg',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:Taman_Negara,_Malaysia,_Primary_tropical_rainforest.jpg',
    ),
    sources: [
      {
        label: 'Convention on Biological Diversity — text of the Convention',
        url: 'https://www.cbd.int/convention/text',
      },
      {
        label: 'Convention on Biological Diversity — English text (PDF)',
        url: 'https://www.cbd.int/doc/legal/cbd-en.pdf',
      },
      {
        label: 'Convention on Biological Diversity — convention page',
        url: 'https://www.cbd.int/convention/',
      },
      {
        label: 'Convention on Biological Diversity — secretariat',
        url: 'https://www.cbd.int/',
      },
    ],
  },
  {
    slug: 'kunming-montreal-gbf',
    category: 'ecology',
    status: 'existing',
    year: '2022',
    image: img(
      'kunming-montreal-gbf.jpg',
      'Jerry Reid, U.S. Fish and Wildlife Service',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Coral_Reef.jpg',
    ),
    sources: [
      {
        label: 'Convention on Biological Diversity — Kunming-Montreal Global Biodiversity Framework',
        url: 'https://www.cbd.int/gbf',
      },
      {
        label: 'Convention on Biological Diversity — Decision 15/4 (English PDF)',
        url: 'https://www.cbd.int/doc/decisions/cop-15/cop-15-dec-04-en.pdf',
      },
      {
        label: 'Convention on Biological Diversity — 2030 targets',
        url: 'https://www.cbd.int/gbf/targets',
      },
      {
        label:
          'Convention on Biological Diversity — text adopted at the 15th Conference of the Parties',
        url: 'https://www.cbd.int/article/cop15-final-text-kunming-montreal-gbf-221222',
      },
    ],
  },
  {
    slug: 'ramsar-convention',
    category: 'ecology',
    status: 'existing',
    year: '1971',
    image: img(
      'ramsar-convention.jpg',
      'Jonathan D. Mallory, Bureau of Land Management',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Waterfowl_at_the_Pariette_Wetlands_(53658929539).jpg',
    ),
    sources: [
      {
        label: 'UNESCO — Convention on Wetlands (depositary)',
        url: 'https://www.unesco.org/en/legal-affairs/convention-wetlands-international-importance-especially-waterfowl-habitat',
      },
      {
        label: 'UN Treaty Series — Ramsar Convention, English text (Volume 996, I-14583)',
        url: 'https://treaties.un.org/doc/Publication/UNTS/Volume%20996/volume-996-I-14583-English.pdf',
      },
      {
        label: 'UN Treaty Collection — Ramsar Convention',
        url: 'https://treaties.un.org/Pages/showDetails.aspx?objid=0800000280104c20',
      },
      {
        label: 'InforMEA — Ramsar Convention',
        url: 'https://www.informea.org/en/treaties/ramsar',
      },
    ],
  },
  {
    slug: 'aarhus-convention',
    category: 'ecology',
    status: 'existing',
    year: '1998',
    image: img(
      'aarhus-convention.jpg',
      'City of Toronto',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Toronto_City_Hall_Council_Chamber_(30461915762).jpg',
    ),
    sources: [
      {
        label: 'UN Treaty Collection — Aarhus Convention (XXVII-13)',
        url: 'https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XXVII-13&chapter=27&clang=_en',
      },
      {
        label: 'UN Treaty Collection — Aarhus Convention text (No. 37770)',
        url: 'https://treaties.un.org/doc/Treaties/1998/06/19980625%2008-35%20AM/37770-En.pdf',
      },
      {
        label: 'InforMEA — Aarhus Convention',
        url: 'https://www.informea.org/en/treaties/aarhus-convention',
      },
    ],
  },
  {
    slug: 'bbnj-agreement',
    category: 'ecology',
    status: 'existing',
    year: '2023',
    image: img(
      'bbnj-agreement.jpg',
      'Samson Ng',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:North_Atlantic_Ocean.jpg',
    ),
    sources: [
      {
        label: 'United Nations — Agreement on biodiversity beyond national jurisdiction',
        url: 'https://www.un.org/bbnjagreement/en',
      },
      {
        label: 'United Nations — Agreement on biodiversity beyond national jurisdiction, English text',
        url: 'https://www.un.org/bbnjagreement/sites/default/files/2024-08/Text%20of%20the%20Agreement%20in%20English.pdf',
      },
      {
        label: 'UN Treaty Collection — Agreement on biodiversity beyond national jurisdiction (XXI-10)',
        url: 'https://treaties.un.org/pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XXI-10&chapter=21&clang=_en',
      },
      {
        label: 'International Maritime Organization — the high seas biodiversity agreement enters into force',
        url: 'https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-welcomes-entry-into-force-bbnj.aspx',
      },
    ],
  },
  {
    slug: 'minamata-convention',
    category: 'ecology',
    status: 'existing',
    year: '2013',
    image: img(
      'minamata-convention-preview.jpg',
      'Ministry of Land, Infrastructure, Transport and Tourism of Japan',
      'Ministry terms of use (compatible with CC BY 4.0)',
      'https://commons.wikimedia.org/wiki/File:Minamata_Bay_1974.jpg',
      1920,
      1080,
    ),
    sources: [
      {
        label:
          'United Nations Treaty Collection: Minamata Convention on Mercury (Chapter XXVII, No. 17)',
        url: 'https://treaties.un.org/pages/ViewDetails.aspx?chapter=27&clang=_en&mtdsg_no=XXVII-17&src=TREATY',
      },
      {
        label:
          'United Nations depositary notification C.N.260.2026.TREATIES-XXVII.17 (Trinidad and Tobago accession, 26 June 2026)',
        url: 'https://treaties.un.org/doc/Publication/CN/2026/CN.260.2026-Eng.pdf',
      },
      {
        label: 'Wikimedia Commons: Minamata Bay 1974 (aerial photograph)',
        url: 'https://commons.wikimedia.org/wiki/File:Minamata_Bay_1974.jpg',
      },
      {
        label:
          'Ministry of Land, Infrastructure, Transport and Tourism of Japan: terms of use of the Land Information Web Mapping System (in Japanese)',
        url: 'https://nlftp.mlit.go.jp/ksj/other/agreement_05.html',
      },
    ],
  },
  {
    slug: 'basel-convention',
    category: 'ecology',
    status: 'existing',
    year: '1989',
    image: img(
      'basel-convention-preview.jpg',
      'Taxiarchos228',
      'Free Art License 1.3',
      'https://commons.wikimedia.org/wiki/File:Basel_-_Sonnenuntergang_am_Rheinufer.jpg',
      1920,
      1080,
    ),
    sources: [
      {
        label:
          'United Nations Treaty Collection: Basel Convention on the Control of Transboundary Movements of Hazardous Wastes and their Disposal (Chapter XXVII, No. 3)',
        url: 'https://treaties.un.org/pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XXVII-3&chapter=27&clang=_en',
      },
      {
        label: 'Secretariat of the Basel Convention: Overview',
        url: 'https://www.basel.int/TheConvention/Overview/tabid/1271/Default.aspx',
      },
      {
        label: 'Secretariat of the Basel Convention: Ban Amendment',
        url: 'https://www.basel.int/Implementation/LegalMatters/BanAmendment/tabid/1484/Default.aspx',
      },
      {
        label: 'Secretariat of the Basel Convention: Plastic waste amendments',
        url: 'https://www.basel.int/Implementation/Plasticwaste/Amendments/Overview/tabid/8426/Default.aspx',
      },
      {
        label: 'Wikimedia Commons: Basel - Sonnenuntergang am Rheinufer (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:Basel_-_Sonnenuntergang_am_Rheinufer.jpg',
      },
    ],
  },
  {
    slug: 'stockholm-convention',
    category: 'ecology',
    status: 'existing',
    year: '2001',
    image: img(
      'stockholm-convention-preview.jpg',
      'Kim Hansen',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Stockholm_city_hall_2008-07-15-1_filtered.jpg',
      1920,
      1080,
    ),
    sources: [
      {
        label:
          'United Nations Treaty Collection: Stockholm Convention on Persistent Organic Pollutants (Chapter XXVII, No. 15)',
        url: 'https://treaties.un.org/pages/ViewDetails.aspx?chapter=27&clang=_en&mtdsg_no=XXVII-15&src=TREATY',
      },
      {
        label: 'Secretariat of the Stockholm Convention: Overview',
        url: 'https://www.pops.int/TheConvention/Overview/tabid/3351/Default.aspx',
      },
      {
        label: 'Wikimedia Commons: Stockholm city hall 2008-07-15-1 filtered (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:Stockholm_city_hall_2008-07-15-1_filtered.jpg',
      },
    ],
  },
  {
    slug: 'rotterdam-convention',
    category: 'ecology',
    status: 'existing',
    year: '1998',
    image: img(
      'rotterdam-convention-preview.jpg',
      'Olivier Cleynen',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:Aerial_photograph_of_the_port_of_Rotterdam_in_2017_(1).jpg',
      1920,
      1080,
    ),
    sources: [
      {
        label: 'Secretariat of the Rotterdam Convention: Overview',
        url: 'https://www.pic.int/TheConvention/Overview',
      },
      {
        label: 'United Nations Treaty Collection: Rotterdam Convention (Chapter XXVII, No. 14)',
        url: 'https://treaties.un.org/pages/ViewDetails.aspx?chapter=27&clang=_en&mtdsg_no=XXVII-14&src=TREATY',
      },
      {
        label:
          'Wikimedia Commons: Aerial photograph of the port of Rotterdam in 2017 (1) (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:Aerial_photograph_of_the_port_of_Rotterdam_in_2017_(1).jpg',
      },
    ],
  },
  {
    slug: 'escazu-agreement',
    category: 'ecology',
    status: 'existing',
    year: '2018',
    image: img(
      'escazu-agreement-preview.jpg',
      'Warko2006',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:CEPAL_building.jpg',
      1920,
      1080,
    ),
    sources: [
      {
        label:
          'Economic Commission for Latin America and the Caribbean: Regional Agreement on Access to Information, Public Participation and Justice in Environmental Matters in Latin America and the Caribbean (Escazú Agreement)',
        url: 'https://www.cepal.org/en/escazuagreement',
      },
      {
        label: 'United Nations Treaty Collection: Escazú Agreement (Chapter XXVII, No. 18)',
        url: 'https://treaties.un.org/pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XXVII-18&chapter=27&clang=_en',
      },
      {
        label: 'Wikimedia Commons: CEPAL building (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:CEPAL_building.jpg',
      },
    ],
  },
  {
    slug: 'un-plastics-treaty',
    category: 'ecology',
    status: 'pending',
    year: '2022–',
    image: img(
      'un-plastics-treaty.jpg',
      'Ville Oksanen',
      'CC BY-SA 2.0',
      'https://commons.wikimedia.org/wiki/File:Palace_of_Nations.jpg',
    ),
    sources: [
      {
        label: 'UNEP — INC on plastic pollution',
        url: 'https://www.unep.org/inc-plastic-pollution',
      },
      {
        label: 'UNEA resolution 5/14 mandate (2022)',
        url: 'https://wedocs.unep.org/bitstream/handle/20.500.11822/39812/OEWG_PP_1_INF_1_UNEA%20resolution.pdf',
      },
      {
        label: 'UN News — INC-5.2 Geneva adjourned without consensus (August 2025)',
        url: 'https://www.ungeneva.org/en/news-media/news/2025/08/109610/plastic-pollution-treaty-talks-adjourn-countries-want-remain-table',
      },
    ],
  },
  {
    slug: 'rome-statute-ecocide',
    category: 'ecology',
    status: 'ideas',
    year: '2021–',
    image: img(
      'rome-statute-ecocide.jpg',
      'OSeveno',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:International_Criminal_Court_building_(2016)_in_The_Hague.png',
    ),
    sources: [
      {
        label: 'Stop Ecocide Foundation — Independent Expert Panel definition (June 2021)',
        url: 'https://www.stopecocide.earth/legal-definition',
      },
      {
        label: 'ICC Assembly of States Parties — Working Group on Amendments report (2025)',
        url: 'https://asp.icc-cpi.int/sites/default/files/asp_docs/ICC-ASP-24-26-ENG.pdf',
      },
      {
        label: 'Rome Statute of the International Criminal Court (current crimes)',
        url: 'https://www.icc-cpi.int/sites/default/files/2024-05/Rome-Statute-eng.pdf',
      },
    ],
  },
  {
    slug: 'eu-ai-act',
    category: 'ai',
    status: 'existing',
    year: '2024',
    image: img(
      'eu-ai-act.jpg',
      'Diliff',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg',
    ),
    sources: [
      {
        label: 'EUR-Lex: Regulation (EU) 2024/1689 (Artificial Intelligence Act)',
        url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
      },
      {
        label: 'European Commission: Artificial Intelligence Act overview',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
      },
      {
        label: 'European Commission: Artificial Intelligence Act enforcement timeline (updated 2026)',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act',
      },
    ],
  },
  {
    slug: 'korea-ai-basic-act',
    category: 'ai',
    status: 'existing',
    year: '2025',
    image: img(
      'korea-ai-basic-act.jpg',
      'Cjb8293',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Republic_of_Korea_capitol.jpg',
    ),
    sources: [
      {
        label: 'Korea Law Translation Center: Framework Act on Artificial Intelligence (Act No. 20676)',
        url: 'https://elaw.klri.re.kr/eng_service/lawView.do?hseq=73499&lang=ENG',
      },
      {
        label: 'Korean statutes portal: English text of the Framework Act',
        url: 'https://www.law.go.kr/LSW/lsInfoP.do?chrClsCd=010203&lsiSeq=268543&urlMode=engLsInfoR&viewCls=engLsInfoR',
      },
      {
        label: 'Ministry of Science and Information and Communication Technology: entry into force (22 January 2026)',
        url: 'https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&pageIndex=&bbsSeqNo=42&nttSeqNo=1214&searchOpt=ALL&searchTxt=',
      },
    ],
  },
  {
    slug: 'china-generative-ai',
    category: 'ai',
    status: 'existing',
    year: '2023',
    image: img(
      'china-generative-ai.jpg',
      'Victorgrigas',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Wikimedia_Foundation_Servers-8055_13.jpg',
    ),
    sources: [
      {
        label: 'Cyberspace Administration of China: Interim Measures (13 July 2023)',
        url: 'https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm',
      },
      {
        label: 'Future of Privacy Forum: comparison of the draft and the final Measures',
        url: 'https://fpf.org/blog/chinas-interim-measures-for-the-management-of-generative-ai-services-a-comparison-between-the-final-and-draft-versions-of-the-text/',
      },
    ],
  },
  {
    slug: 'california-sb-53',
    category: 'ai',
    status: 'existing',
    year: '2025',
    image: img(
      'california-sb-53.jpg',
      'Frank Schulenburg',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:California_State_Capitol,_June_2019.jpg',
    ),
    sources: [
      {
        label: 'California Legislature: Senate Bill 53 status (chaptered 29 September 2025)',
        url: 'https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260SB53',
      },
      {
        label: 'California Legislature: Senate Bill 53 text',
        url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53',
      },
      {
        label: 'Office of the Governor: signing statement, 29 September 2025',
        url: 'https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/',
      },
    ],
  },
  {
    slug: 'canada-c-36',
    category: 'ai',
    status: 'pending',
    year: '2026',
    image: img(
      'canada-c-36.jpg',
      'Arctic.gnome',
      'CC BY 2.5',
      'https://commons.wikimedia.org/wiki/File:Parliament-Ottawa.jpg',
    ),
    sources: [
      {
        label: 'Parliament of Canada: bill information for C-36 (45th Parliament, 1st session)',
        url: 'https://www.parl.ca/LegisInfo/en/bill/45-1/C-36',
      },
      {
        label: 'House of Commons: first-reading text of Bill C-36',
        url: 'https://www.parl.ca/DocumentViewer/en/45-1/bill/C-36/first-reading',
      },
    ],
  },
  {
    slug: 'ai-civil-liability',
    category: 'ai',
    status: 'ideas',
    year: '2022–2025',
    image: img(
      'ai-civil-liability.jpg',
      'David Hillas',
      'CC BY-SA 2.0',
      'https://commons.wikimedia.org/wiki/File:Statue_of_the_Lady_of_Justice,_Old_Bailey_-_geograph.org.uk_-_5417053.jpg',
    ),
    sources: [
      {
        label: 'European Parliament Legislative Observatory: procedure 2022/0303 (withdrawn)',
        url: 'https://oeil.secure.europarl.europa.eu/oeil/popups/ficheprocedure.do?lang=en&reference=2022/0303(COD)',
      },
      {
        label: 'European Commission proposal of 2022, document 496 (historical)',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52022PC0496',
      },
      {
        label: 'EUR-Lex: Product Liability Directive (EU) 2024/2853 (enacted product-liability instrument)',
        url: 'https://eur-lex.europa.eu/eli/dir/2024/2853/oj',
      },
    ],
  },
  {
    slug: 'coe-ai-framework-convention',
    category: 'ai',
    status: 'pending',
    year: '2024',
    image: img(
      'coe-ai-framework-convention-preview.jpg',
      'Council of Europe',
      'CC BY 3.0',
      'https://commons.wikimedia.org/wiki/File:Council_of_Europe_Palais_de_l%27Europe_aerial_view.JPG',
      1520,
      855,
    ),
    sources: [
      {
        label: 'Council of Europe: The Framework Convention on Artificial Intelligence',
        url: 'https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence',
      },
      {
        label:
          'Council of Europe: Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law (Treaty Series No. 225)',
        url: 'https://rm.coe.int/1680afae3c',
      },
      {
        label: 'Council of Europe Treaty Office: Chart of signatures and ratifications of Treaty 225',
        url: 'https://www.coe.int/en/web/conventions/full-list?module=signatures-by-treaty&treatynum=225',
      },
      {
        label:
          'Council of Europe: European Union ratifies the Framework Convention on Artificial Intelligence',
        url: 'https://www.coe.int/en/web/artificial-intelligence/-/european-union-ratifies-the-council-of-europe-framework-convention-on-artificial-intelligence',
      },
      {
        label: 'Wikimedia Commons: Council of Europe Palais de l\'Europe aerial view (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:Council_of_Europe_Palais_de_l%27Europe_aerial_view.JPG',
      },
    ],
  },
  {
    slug: 'unesco-ai-ethics',
    category: 'ai',
    status: 'existing',
    year: '2021',
    image: img(
      'unesco-ai-ethics-preview.jpg',
      'Dominique Roger, UNESCO',
      'CC BY-SA 3.0 IGO',
      'https://commons.wikimedia.org/wiki/File:Architecture,_Paris_-_UNESCO_-_PHOTO0000002781_0001.tiff',
      1864,
      1423,
    ),
    sources: [
      {
        label:
          'UNESCO: Ethics of Artificial Intelligence (Recommendation on the Ethics of Artificial Intelligence)',
        url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics',
      },
      {
        label: 'UNESCO Digital Library: Recommendation on the Ethics of Artificial Intelligence',
        url: 'https://unesdoc.unesco.org/ark:/48223/pf0000381137',
      },
      {
        label: 'Wikimedia Commons: Architecture, Paris - UNESCO - PHOTO0000002781 0001 (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:Architecture,_Paris_-_UNESCO_-_PHOTO0000002781_0001.tiff',
      },
    ],
  },
  {
    slug: 'oecd-ai-principles',
    category: 'ai',
    status: 'existing',
    year: '2019',
    image: img(
      'oecd-ai-principles-preview.jpg',
      'mySociety',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_la_Muette,_Paris_19_March_2019_002.jpg',
      1920,
      1280,
    ),
    sources: [
      {
        label:
          'OECD Legal Instruments: Recommendation of the Council on Artificial Intelligence (OECD/LEGAL/0449)',
        url: 'https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449',
      },
      {
        label: 'OECD.AI Policy Observatory: AI Principles Overview',
        url: 'https://oecd.ai/en/ai-principles',
      },
      {
        label: 'Wikimedia Commons: Château de la Muette, Paris 19 March 2019 002 (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_la_Muette,_Paris_19_March_2019_002.jpg',
      },
    ],
  },
  {
    slug: 'nist-ai-rmf',
    category: 'ai',
    status: 'existing',
    year: '2023',
    image: img(
      'nist-ai-rmf-preview.jpg',
      'Stoughton, U.S. National Institute of Standards and Technology',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:NIST_Gaithersburg_Newton_Apple_Tree_Dsc_9822-hdr-edit_processed_16x9_web.jpg',
      1920,
      1080,
    ),
    sources: [
      {
        label: 'U.S. National Institute of Standards and Technology: AI Risk Management Framework',
        url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      },
      {
        label:
          'U.S. National Institute of Standards and Technology: Artificial Intelligence Risk Management Framework, version 1.0 (NIST AI 100-1)',
        url: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
      },
      {
        label:
          'U.S. National Institute of Standards and Technology: Generative Artificial Intelligence Profile (NIST AI 600-1)',
        url: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf',
      },
      {
        label: 'Wikimedia Commons: NIST Gaithersburg Newton Apple Tree (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:NIST_Gaithersburg_Newton_Apple_Tree_Dsc_9822-hdr-edit_processed_16x9_web.jpg',
      },
    ],
  },
  {
    slug: 'uk-ai-regulation',
    category: 'ai',
    status: 'existing',
    year: '2023',
    image: img(
      'uk-ai-regulation-preview.jpg',
      'Janine and Jim Eden',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Whitehall_from_London_Eye_2014.jpg',
      1920,
      1440,
    ),
    sources: [
      {
        label:
          'GOV.UK, Department for Science, Innovation and Technology and Office for Artificial Intelligence: AI regulation: a pro-innovation approach',
        url: 'https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach',
      },
      {
        label: 'GOV.UK: A pro-innovation approach to AI regulation (web-ready PDF)',
        url: 'https://assets.publishing.service.gov.uk/media/64cb71a547915a00142a91c4/a-pro-innovation-approach-to-ai-regulation-amended-web-ready.pdf',
      },
      {
        label:
          'GOV.UK, Department for Science, Innovation and Technology: A pro-innovation approach to AI regulation: government response',
        url: 'https://www.gov.uk/government/consultations/ai-regulation-a-pro-innovation-approach-policy-proposals/outcome/a-pro-innovation-approach-to-ai-regulation-government-response',
      },
      {
        label: 'Wikimedia Commons: Whitehall from London Eye 2014 (photo)',
        url: 'https://commons.wikimedia.org/wiki/File:Whitehall_from_London_Eye_2014.jpg',
      },
    ],
  },
  {
    slug: 'cites',
    category: 'animals',
    status: 'existing',
    year: '1973',
    image: img(
      'cites.jpg',
      'Bernard DUPONT',
      'CC BY-SA 2.0',
      'https://commons.wikimedia.org/wiki/File:African_Elephant_(Loxodonta_africana)_big_tusker_coming_to_drink.jpg',
    ),
    sources: [
      {
        label: 'CITES — text of the Convention',
        url: 'https://cites.org/eng/disc/text.php',
      },
      {
        label: 'CITES — what is CITES',
        url: 'https://cites.org/eng/disc/what.php',
      },
      {
        label: 'UN Treaty Collection — CITES',
        url: 'https://treaties.un.org/pages/showDetails.aspx?objid=08000002800f5ead',
      },
    ],
  },
  {
    slug: 'endangered-species-act',
    category: 'animals',
    status: 'existing',
    year: '1973',
    image: img(
      'endangered-species-act.jpg',
      'David Menke',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Haliaeetus_leucocephalus2.jpg',
    ),
    sources: [
      {
        label: 'U.S. Fish and Wildlife Service — Endangered Species Act',
        url: 'https://www.fws.gov/law/endangered-species-act',
      },
      {
        label: 'FWS — endangered species program',
        url: 'https://www.fws.gov/program/endangered-species',
      },
      {
        label: 'U.S. Code — 16 U.S.C. § 1531 et seq.',
        url: 'https://www.law.cornell.edu/uscode/text/16/chapter-35',
      },
    ],
  },
  {
    slug: 'habitats-directive',
    category: 'animals',
    status: 'existing',
    year: '1992',
    image: img(
      'habitats-directive.jpg',
      'Jacek Karczmarz',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Bialowieza_National_Park_in_Poland0029.JPG',
    ),
    sources: [
      {
        label: 'EUR-Lex — Council Directive 92/43/EEC',
        url: 'https://eur-lex.europa.eu/eli/dir/1992/43/oj',
      },
      {
        label: 'European Commission — Habitats Directive',
        url: 'https://environment.ec.europa.eu/topics/nature-and-biodiversity/habitats-directive_en',
      },
      {
        label: 'EUR-Lex — Birds Directive 2009/147/EC',
        url: 'https://eur-lex.europa.eu/eli/dir/2009/147/oj',
      },
    ],
  },
  {
    slug: 'kenya-wildlife-act',
    category: 'animals',
    status: 'existing',
    year: '2013',
    image: img(
      'kenya-wildlife-act.jpg',
      'Diego Delso',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Elefante_africano_de_sabana_(Loxodonta_africana),_parque_nacional_de_Amboseli,_Kenia,_2024-05-22,_DD_07.jpg',
    ),
    sources: [
      {
        label: 'Kenya Law — Wildlife Conservation and Management Act, Cap. 376',
        url: 'https://new.kenyalaw.org/akn/ke/act/2013/47/eng@2022-12-31',
      },
      {
        label: 'FAOLEX — Act No. 47 of 2013',
        url: 'https://www.fao.org/faolex/results/details/en/c/LEX-FAOC134375/',
      },
    ],
  },
  {
    slug: 'cms-bonn-convention',
    category: 'animals',
    status: 'existing',
    year: '1979',
    image: img(
      'cms-bonn-convention.jpg',
      'Wolves201',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Serengeti_wildebeest_migration_JF2.jpg',
    ),
    sources: [
      {
        label: 'CMS — Convention text',
        url: 'https://www.cms.int/en/convention-text',
      },
      {
        label: 'CMS — home',
        url: 'https://www.cms.int/',
      },
      {
        label: 'CMS — Convention text',
        url: 'https://www.cms.int/en/page/convention-text',
      },
    ],
  },
  {
    slug: 'birds-directive',
    category: 'animals',
    status: 'existing',
    year: '2009',
    image: img(
      'birds-directive.jpg',
      'Yathin S Krishnappa',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Haliaeetus_albicilla_(Svolvær,_2012).jpg',
    ),
    sources: [
      {
        label: 'European Commission — Birds Directive',
        url: 'https://environment.ec.europa.eu/topics/nature-and-biodiversity/birds-directive_en',
      },
      {
        label: 'EUR-Lex — Directive 2009/147/EC',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0147',
      },
      {
        label: 'EUR-Lex — HTML text',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32009L0147',
      },
    ],
  },
  {
    slug: 'bern-convention',
    category: 'animals',
    status: 'existing',
    year: '1979',
    image: img(
      'bern-convention.jpg',
      'Giles Laurent',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:002_Wild_Alpine_Ibex_Swiss_Alps_and_Creux_du_Van_Photo_by_Giles_Laurent.jpg',
    ),
    sources: [
      {
        label: 'Council of Europe — Bern Convention hub',
        url: 'https://www.coe.int/en/web/bern-convention',
      },
      {
        label: 'CoE — Treaty 104 detail',
        url: 'https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=104',
      },
      {
        label: 'CoE — Treaty 104',
        url: 'https://www.coe.int/en/web/conventions/full-list/-/conventions/treaty/104',
      },
      {
        label: 'CoE — Convention text PDF',
        url: 'https://rm.coe.int/1680078aff',
      },
    ],
  },
  {
    slug: 'marine-mammal-protection-act',
    category: 'animals',
    status: 'existing',
    year: '1972',
    image: img(
      'marine-mammal-protection-act.jpg',
      'Ed Lyman, NOAA Hawaiian Islands Humpback Whale National Marine Sanctuary',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Humpback_Whale_Underwater_(37209287981).jpg',
    ),
    sources: [
      {
        label: 'NOAA Fisheries — MMPA',
        url: 'https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-protection-act',
      },
      {
        label: 'U.S. FWS — MMPA',
        url: 'https://www.fws.gov/law/marine-mammal-protection-act',
      },
      {
        label: 'Marine Mammal Commission — MMPA',
        url: 'https://www.mmc.gov/about-the-commission/our-mission/marine-mammal-protection-act/',
      },
      {
        label: 'GovInfo — MMPA compiled PDF',
        url: 'https://www.govinfo.gov/content/pkg/COMPS-1675/pdf/COMPS-1675.pdf',
      },
    ],
  },
  {
    slug: 'lacey-act',
    category: 'animals',
    status: 'existing',
    year: '1900',
    image: img(
      'lacey-act.jpg',
      'USFWS Mountain-Prairie',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Seized_ivory_slated_for_destruction_in_the_crush._(10843354356).jpg',
    ),
    sources: [
      {
        label: 'U.S. FWS — Lacey Act',
        url: 'https://www.fws.gov/law/lacey-act',
      },
      {
        label: 'NOAA Fisheries — laws and policies',
        url: 'https://www.fisheries.noaa.gov/topic/laws-policies/marine-mammal-protection-act',
      },
    ],
  },
  {
    slug: 'wildlife-corridors-act',
    category: 'animals',
    status: 'pending',
    year: '2026',
    image: img(
      'wildlife-corridors-act.jpg',
      'Coolcaesar',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Wildlife_Crossing_in_Banff_National_Park.jpg',
    ),
    sources: [
      {
        label: 'Congress.gov — H.R. 8438, 119th Congress',
        url: 'https://www.congress.gov/bill/119th-congress/house-bill/8438',
      },
      {
        label: 'GovInfo — introduced text',
        url: 'https://www.govinfo.gov/app/details/BILLS-119hr8438ih',
      },
    ],
  },
  {
    slug: 'recovering-americas-wildlife',
    category: 'animals',
    status: 'ideas',
    year: '2021–',
    image: img(
      'recovering-americas-wildlife.jpg',
      'Jack Dykinga',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:American_bison_k5680-1.jpg',
    ),
    sources: [
      {
        label: 'Congress.gov — H.R. 2773, 117th Congress (passed House, not enacted)',
        url: 'https://www.congress.gov/bill/117th-congress/house-bill/2773',
      },
      {
        label: 'Congress.gov — S.1149, 118th Congress (introduced, not enacted)',
        url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1149',
      },
      {
        label: 'National Wildlife Federation — 2026 RAWA briefing',
        url: 'https://www.nwf.org/Home/Educational-Resources/Reports/2026/Recovering-Americas-Wildlife-Unleashing-State-and-Tribal-Conservation-Solutions',
      },
    ],
  },
  {
    slug: 'companion-animal-homicide-parity',
    category: 'animals',
    status: 'ideas',
    year: 'idea',
    image: img(
      'companion-animal-homicide-parity.jpg',
      'Jules Verne Times Two',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Cat_and_dog_companions,_Mosteiros,_S%C3%A3o_Miguel_Island,_Azores,_Portugal_(PPL1-Corrected).jpg',
    ),
    sources: [
      {
        label: 'U.S. Code — 18 U.S.C. § 48 (PACT Act; animal crushing, not human assault or homicide)',
        url: 'https://www.law.cornell.edu/uscode/text/18/48',
      },
      {
        label: 'Diário da República — Lei n.º 8/2017 (Portugal civil-status reform)',
        url: 'https://files.diariodarepublica.pt/1s/2017/03/04500/0114501149.pdf',
      },
      {
        label: 'gesetze-im-internet — BGB § 90a Tiere',
        url: 'https://www.gesetze-im-internet.de/bgb/__90a.html',
      },
      {
        label: 'Corte Constitucional del Ecuador — Sentencia 253-20-JH/22 (Estrellita)',
        url: 'https://www.corteconstitucional.gob.ec/sentencia-253-20-jh-22/',
      },
    ],
  },
];

export function isLawCategory(value: string | undefined): value is LawCategory {
  return !!value && (lawCategoryKeys as readonly string[]).includes(value);
}

export function isLawStatus(value: string | undefined): value is LawStatus {
  return !!value && (lawStatusKeys as readonly string[]).includes(value);
}

export function getLawMeta(slug: string): LawMeta | undefined {
  return lawMeta.find((item) => item.slug === slug);
}

export function lawImageSrc(image: ImageCredit): string {
  return `/images/law/${image.file}`;
}

export function lawCategoryPath(category: LawCategory | 'hub'): string {
  return category === 'hub' ? '/law' : `/law/${category}`;
}

export function lawStatusPath(category: LawCategory, status: LawStatus): string {
  return `/law/${category}/${status}`;
}

export function lawDetailPath(slug: string): string {
  return `/law/${slug}`;
}

export const lawSectionImage = {
  file: 'law-section-bg.jpg',
  credit: 'Diliff — European Parliament hemicycle, Strasbourg',
  license: 'CC BY-SA 3.0',
  sourceUrl:
    'https://commons.wikimedia.org/wiki/File:European_Parliament_Strasbourg_Hemicycle_-_Diliff.jpg',
} as const;

export const lawSectionSrc = `/images/law/${lawSectionImage.file}`;

/** Hub-only hero. Category and article pages keep `lawSectionImage`. */
export const lawHubBackdrop = {
  file: 'law-hub-bg.jpg',
  credit: 'Founder-supplied scales of justice',
  license: 'Site asset',
  width: 1280,
  height: 720,
} as const;

export const lawHubSrc = `/images/law/${lawHubBackdrop.file}`;
