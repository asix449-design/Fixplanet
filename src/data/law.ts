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
  jurisdiction: string;
  officialName: string;
  citation: string;
  yearStatus: string;
  what: string;
  where: string;
  effects: string;
  caveats: string;
  sourcesNote: string;
};

export type LawEntry = LawMeta & LawCopy;

function img(
  file: string,
  credit: string,
  license: string,
  sourceUrl: string,
): ImageCredit {
  return { file, credit, license, sourceUrl };
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
        label: 'EUR-Lex — Regulation (EU) 2024/1689 (AI Act)',
        url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
      },
      {
        label: 'European Commission — AI Act overview',
        url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
      },
      {
        label: 'Commission — AI Act enforcement timeline (updated 2026)',
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
        label: 'Korea Law Translation Center — Framework Act on AI (Act No. 20676)',
        url: 'https://elaw.klri.re.kr/eng_service/lawView.do?hseq=73499&lang=ENG',
      },
      {
        label: 'Korean statutes portal — English text',
        url: 'https://www.law.go.kr/LSW/lsInfoP.do?chrClsCd=010203&lsiSeq=268543&urlMode=engLsInfoR&viewCls=engLsInfoR',
      },
      {
        label: 'MSIT — AI Basic Act comes into force (22 January 2026)',
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
        label: 'Cyberspace Administration of China — Interim Measures (13 July 2023)',
        url: 'https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm',
      },
      {
        label: 'Future of Privacy Forum — comparison of draft and final Measures',
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
        label: 'California Legislature — SB 53 bill status (chaptered 29 September 2025)',
        url: 'https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260SB53',
      },
      {
        label: 'California Legislature — SB 53 text',
        url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53',
      },
      {
        label: 'Office of the Governor — signing statement, 29 September 2025',
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
        label: 'Parliament of Canada — LEGISinfo C-36 (45-1)',
        url: 'https://www.parl.ca/LegisInfo/en/bill/45-1/C-36',
      },
      {
        label: 'House of Commons — first-reading text',
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
        label: 'European Parliament Legislative Observatory — 2022/0303(COD) (withdrawn)',
        url: 'https://oeil.secure.europarl.europa.eu/oeil/popups/ficheprocedure.do?lang=en&reference=2022/0303(COD)',
      },
      {
        label: 'Commission proposal COM(2022) 496 (historical)',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52022PC0496',
      },
      {
        label: 'EUR-Lex — Product Liability Directive (EU) 2024/2853 (a different, enacted instrument)',
        url: 'https://eur-lex.europa.eu/eli/dir/2024/2853/oj',
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
