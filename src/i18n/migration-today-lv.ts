import type { TodayShelfCopy } from './migration';

export const lvToday: TodayShelfCopy = {
  mapTitle: 'Neto migrācija, 2023',
  mapAria:
    'Melna pasaules karte ar laima krāsas valstu kontūrām un plāksnītēm sešiem ANO galvenajiem reģioniem ar 2023. gada neto migrāciju',
  lead:
    'Plāksnītes rāda neto migrāciju 2023. kalendārajam gadam — imigranti mīnus emigranti — sešiem UN M49 galvenajiem reģioniem. Tas ir atlikums, ne saraksts, kas atbrauca un kas aizbrauca. Noklikšķini plāksnīti: kas jau tur dzīvo pēc 2024. gada migrantu krājuma un daži dokumentēti koridori.',
  honesty:
    'Mēs neizdomājam gada ierašanās un izbraukšanas. Pilnas globālas plūsmu matricas nav. Godīgais «iekšā pret ārā» skaitlis ir neto migrācija (ANO, World Population Prospects 2024, 2023. gada aplēses). Saraksti, no kurienes cilvēki, ir krājums: citur dzimuši, kas reģionā dzīvoja 2024. gada 1. jūlijā (UN DESA, International Migrant Stock 2024). Krājums nav «ierašanās šogad». Bultas ir shēma nosauktiem koridoriem, ne uzzīmēti apjomi.',
  tabletHint: 'Atver ANO reģionu. Uz plāksnītēm ir neto migrācija, ne ierašanās.',
  netLabel: 'Neto migrācija, UN WPP 2024',
  netUnitMillion: 'milj. cilvēku, 2023',
  netUnitPeople: 'cilvēki, 2023',
  stockLabel: 'Starptautisko migrantu krājums, 2024. gada vidus',
  stockUnitMillion: 'milj. iedzīvotāju, kas dzimuši ārpus valsts vai citā reģiona valstī',
  originsTitle: 'Kas tur dzīvo, pēc dzimšanas reģiona',
  originsHint:
    'Migrantu krājums, 2024. gada vidus. Atzīme «apm.» atkārto IOM formulējumu. Atlikums ir citi reģioni un nezināma izcelsme — spraugu mēs neaizpildām.',
  corridorsTitle: 'Dokumentēti koridori',
  corridorsNote:
    'Valstu pāri ir krājuma koridori (IOM Pasaules migrācijas ziņojums 2026, citējot UN DESA 2025). Tie uzkrāj kustības gadus. Tie nav 2023. gada plūsmas un nav bultu mērogs.',
  close: 'Aizvērt',
  openTablet: 'Rādīt izcelsmi un koridorus reģionam',
  million: 'milj.',
  approx: 'apm.',
  intraCaption:
    'Bieži dominē iekšreģionu migrācija. 2024. gadā 74% Eiropā dzimušo starptautisko migrantu dzīvoja citā Eiropas valstī; 64% uz dienvidiem no Sahāras dzimušo — tajā pašā reģionā; 45% visu starptautisko migrantu — dzimšanas reģionā. Āfrika → Eiropa ir īsts koridors. Tas nav galvenais globālais stāsts.',
  remainderNote: 'Citi reģioni un nezināma izcelsme nav uzskaitīti — publicētais dalījums nesasniedz 100%.',
  stockNotFlow: 'Krājums, ne šā gada ierašanās',
  arrowLegend: 'Shēmātisks koridors — ne apjoms',
  mapCredit:
    'Sauszemes kontūras: Wikimedia Commons BlankMap-World (publiskais īpašums), pārkrāsotas laima krāsā uz melna. Robežas ir kartogrāfisks kompromiss, ne juridisks spriedums. Tā nav iedzīvotāju koroplēta.',
  emptyPanel: 'Izvēlies plāksnīti. Karte nestāda «Āfrika → Eiropa» par pasaules galveno kustību.',
  layersLabel: 'Kartes slāņi',
  layerCamps: 'Bēgļu nometnes',
  layerDetections: 'ES robežu konstatējumi',
  layerIdp: 'Iekšējā pārvietošana',
  campsTitle: 'Lielākās UNHCR nometnes un apmetnes',
  campsLead:
    'Nosauktas UNHCR vietas ar publicētu skaitu un datumu. Tie ir cilvēki, kas jau dzīvo nometnē vai apmetnē — ne 2023. gada neto migrācija un ne «šogad iebraukušie».',
  campsHonesty:
    'Skaitļi ir operatīvie dati uz katras rindas datumu. Saraksts ir atlasīts, ne pilna pasaules tautas skaitīšana visām vietām. Noklikšķini marķieri, lai redzētu avotu.',
  campsUnrwa:
    'UNRWA palestīniešu bēgļus reģistrē atsevišķi. Nometnes skaits nav tas pats reģistrs. Skaitļi par Gazas joslu pēc 2023. gada ir nestabili; šī karte nesajauc UNHCR un UNRWA vienā rangā.',
  campOpen: 'Atvērt nometni vai apmetni',
  campAsOf: 'Skaitlis uz',
  campPeople: 'cilvēki',
  detectionsTitle: 'ES ārējo robežu konstatējumi (Frontex)',
  detectionsLead:
    'Neregulāru šķērsojumu konstatējumi pie Eiropas Savienības ārējām robežām. Vienu un to pašu cilvēku var saskaitīt vairāk nekā vienreiz. Tas nav cilvēku skaits un nav globāla «izrāviena» karte.',
  detectionsHonesty:
    'Frontex provizoriskie skaitļi. 2024: nedaudz virs 239 000 konstatējumu (−38% pret 2023). 2025: gandrīz 178 000 (−26%), zemākais kopš 2021. Maršrutu marķieriem ir avota gads; kur Frontex devis tikai izmaiņu virzienu, izdomāta skaitļa nav.',
  detectionsMetric: 'Konstatējumi, ne unikāli cilvēki',
  detectionsNoGlobal:
    'Salīdzināmas globālas «robežu izrāvienu» sērijas nav. Āfrika → Eiropa nav zīmēta kā pasaules galvenais stāsts.',
  detectionsChange: 'pret iepriekšējo gadu',
  detectionsOpen: 'Atvērt ES maršruta piezīmi',
  detectionsNationalities: '2025. gadā visbiežāk konstatētās valstspiederības: Bangladeša, Ēģipte, Afganistāna — tas nav apgalvojums par to, kas «visbiežāk iebrauc» pasaulē.',
  noHeadcount: 'Bez izdomāta skaitļa',
  idpTitle: 'Iekšējā pārvietošana (IDMC)',
  idpLead:
    'Vairāk nekā 62,2 milj. iekšējo pārvietošanu 2025. gadā (−6% pret 2024): 32,3 milj. no konflikta un vardarbības (rekords) un 29,9 milj. no katastrofām. Konflikts pirmo reizi apsteidza katastrofas; 42 valstīs bija abi.',
  idpDefinition:
    'IDMC skaita cilvēkus, kas spiesti pamest mājas konflikta, vardarbības vai katastrofu dēļ un nav šķērsojuši starptautisku robežu. Tas nav UN DESA starptautiskais migrant stock, ne Frontex konstatējumi un ne UNHCR nometņu headcount. Kustības gada laikā (jaunas vai atkārtotas) nav tas pats, kas krājums gada beigās; viens cilvēks var pārvietoties vairāk nekā vienreiz.',
  idpHonesty:
    'GRID 2026 aptver 2025. kalendāra gadu (ziņojums publicēts 2026. gada 12. maijā). Krājums ir cilvēki, kas gada beigās joprojām dzīvo iekšējā pārvietošanā. Gada skaitļi ir saskaitītas kustības, ne unikāli cilvēki. 32,3 milj. nedrīkst parakstīt kā 32,3 milj. unikālu cilvēku.',
  idpNoChoropleth:
    'Nosauktās krīzes zemāk ir piezīmes ar avotu, ne pasaules karte, kas krāsota pēc skaita. IDMC pārklājums ir nepilnīgs; lapa nezīmē globālu koroplētu un ne «izrāviena bultiņu» slāni no šīm summām.',
  idpMillion: 'milj.',
  idpMovementsUnit: 'kustības, 2025',
  idpStockUnit: 'cilvēki, 2025. gada beigas',
  idpConflictLabel: 'Konflikts un vardarbība',
  idpDisasterLabel: 'Katastrofas',
  idpCountriesLabel: 'valstis un teritorijas',
  idpBothLabel: 'valstis ar abiem cēloņiem',
  idpCrisesTitle: 'Nosauktas krīzes — piezīmes ar avotu, ne karte',
  idpCards: {
    'idp-stock-2025': {
      tag: 'Krājums · 2025. gada beigas',
      title: 'Cilvēki iekšējā pārvietošanā',
      hook: 'Vairāk nekā 82,2 milj. cilvēku dzīvoja iekšējā pārvietošanā 104 valstīs un teritorijās 2025. gada beigās — pirmais vieglais kritums desmitgadē, skaitļi joprojām pie rekorda.',
      detail: [
        'IDMC krājums: cilvēki, kas spiesti pamest mājas konflikta, vardarbības vai katastrofu dēļ un nav šķērsojuši starptautisku robežu. Vairāk nekā 68,6 milj. — konflikts/vardarbība; gandrīz 13,6 milj. — katastrofas (uz 2025. gada 31. decembri). Tas nav starptautiskais migrant stock un ne UNHCR nometņu headcount.',
      ],
    },
    'idp-conflict-displacements-2025': {
      tag: 'Kustības · 2025',
      title: 'Pārvietošanas konflikta un vardarbības dēļ',
      hook: 'Konflikts un vardarbība izraisīja rekordlielas 32,3 milj. iekšējās pārvietošanas 48 valstīs 2025. gadā — aptuveni 60% virs 2024 un pirmo reizi vairāk nekā katastrofas.',
      detail: [
        'Tās ir kustības gada laikā (jaunas vai atkārtotas), ne unikāli cilvēki. Irāna un DRC — aptuveni trešdaļa globālā iznākuma katrai. Starptautiskie bruņotie konflikti — aptuveni 46%. Sudānā gada beigās iekšējā pārvietošanā palika aptuveni 9,1 milj. cilvēku.',
      ],
    },
    'idp-disaster-displacements-2025': {
      tag: 'Kustības · 2025',
      title: 'Pārvietošanas katastrofu dēļ',
      hook: 'Katastrofas izraisīja 29,9 milj. iekšējās pārvietošanas 140 valstīs 2025. gadā — 35% zem 2024. gada maksimuma, joprojām aptuveni 13% virs desmitgades vidējā.',
      detail: [
        'Vētras ~17,9 milj.; plūdi <7,9 milj.; ugunsgrēki >694 tūkst.; ģeofizika ~2,5 milj. Filipīnās — aptuveni 10,7 milj. katastrofu pārvietošanu (~36% globālā disaster iznākuma). Tā nav «klimata migrantu» karte un ne starptautiskais net migration.',
      ],
    },
    'idp-movements-2025-overview': {
      tag: 'Pārskats · 2025',
      title: 'Iekšējās pārvietošanas 2025. gadā',
      hook: 'Vairāk nekā 62,2 milj. iekšējo pārvietošanu 2025. gadā (−6% pret 2024): 32,3 milj. no konflikta un vardarbības (rekords) un 29,9 milj. no katastrofām. Konflikts pirmo reizi apsteidza katastrofas; 42 valstīs bija abi.',
      detail: [
        'Slāņa ievada flīze. Vienreiz: kustības ≠ krājums ≠ pārrobežu migrācija. A–C detalizācija. Nedrīkst zīmēt globālu «izrāviena bultiņu» no šīm summām.',
      ],
    },
  },
  idpCrisisCopy: {
    'sudan-stock': {
      place: 'Sudāna',
      note: 'Lielākā krīze pēc cilvēkiem iekšējā pārvietošanā 2025. gada beigās. Aptuveni 9,1 milj. cilvēku joprojām dzīvoja iekšējā pārvietošanā Sudānā. Tas ir gada beigu krājums, ne 2025. gada kustības un ne UNHCR nometņu headcount.',
    },
    'philippines-disaster-2025': {
      place: 'Filipīnas',
      note: 'Aptuveni 10,7 milj. katastrofu pārvietošanu 2025. gadā — ap 36% globālā disaster iznākuma GRID kartes kopsavilkumā. Galvenokārt laikapstākļu apdraudējumu kustība un evakuāciju uzskaite, ne «klimata migrantu» pasaules karte.',
    },
  },
  regions: {
    africa: {
      name: 'Āfrika',
      shortName: 'Āfrika',
      caption:
        'Āfrikai 2023. gadā bija neto aizplūde. Lielākā daļa Āfrikā dzimušo starptautisko migrantu joprojām dzīvo citā Āfrikas valstī — ap 25 miljoniem 2024. gadā, vairāk nekā 11 miljoni Eiropā. Lielākie koridori, ko IOM nosauc kontinentā, ir iekšāfrikas darba un pārvietošanās ceļi, ne Vidusjūra.',
      originsIntro:
        'No 29,2 milj. starptautisko migrantu, kas 2024. gada vidū dzīvoja Āfrikā, IOM (UN DESA) skaita ap 25 milj. dzimušu citur Āfrikā. Ārpus Āfrikas dzimušo ir maz: ap 1,3 milj. no Āzijas un ap 583 tūkst. no Eiropas.',
      corridorsIntro:
        'Lielākie nosauktie Āfrikas koridori: Burkinafaso → Kotdivuāra (darbs), Dienvidsudāna → Sudāna, Sudāna → Čada, Dienvidsudāna → Uganda (pārvietošana). Ārpusreģiona krājums ietver Ēģipti → Saūda Arābiju un Ziemeļāfriku → Franciju / Spāniju. Šie pēdējie ir īsti; tie nav Āfrikas vidējais.',
    },
    asia: {
      name: 'Āzija',
      shortName: 'Āzija',
      caption:
        'Āzijai 2023. gadā bija lielākā reģionālā neto aizplūde. Tas nenozīmē «Āzija tukšojas uz Eiropu». Ap 74 milj. Āzijā dzimušo starptautisko migrantu 2024. gadā dzīvoja citā Āzijas valstī — darbs Līcī, darbs Dienvidaustrumāzijā un gari pārvietošanās koridori, piemēram, Afganistāna → Irāna un Sīrija → Turcija.',
      originsIntro:
        '2024. gada vidū Āzijā dzīvoja 92,2 milj. starptautisko migrantu. IOM skaita ap 74 milj. no tiem kā dzimušus Āzijā, ap 6,7 milj. Āfrikā un ap 5 milj. Eiropā (ieskaitot eiropiešus Centrālāzijā pēc PSRS sabrukuma).',
      corridorsIntro:
        'IMS 2024 lielākais starp-reģionu koridors plašajā Āzijas–Rietumāzijas grupā ir Centrālā un Dienvidāzija → Ziemeļāfrika un Rietumāzija (20 milj.) — darbs Līcī, ne Eiropa. Valstu krājums: Afganistāna → Irāna ap 3,7 milj.; Sīrija → Turcija ap 3,6 milj.',
    },
    europe: {
      name: 'Eiropa',
      shortName: 'Eiropa',
      caption:
        'Eiropa 2023. gadā bija neto saņēmēja. Gandrīz puse no 94 milj. starptautisko migrantu, kas 2024. gadā dzīvoja Eiropā, bija dzimuši Eiropā (ap 45 milj.), tostarp ukraiņi, kas pārvietoti kopš 2022. gada. Āzijā dzimušo (20 milj.) ir vairāk nekā Āfrikā dzimušo (ap 10,6 milj.).',
      originsIntro:
        'Galamērķa krājums, 2024. gada vidus: ap 45 milj. dzimuši Eiropā, 20 milj. Āzijā, ap 10,6 milj. Āfrikā, ap 6 milj. Latīņamerikā un Karību reģionā. Pārējais ir Ziemeļamerika, Okeānija un nezināma izcelsme. IOM arī atzīmē: 74% visu Eiropā dzimušo migrantu dzīvo citā Eiropas valstī.',
      corridorsIntro:
        'Puse IOM lielāko Eiropas valstu koridoru ir iekšreģionu; vairāki beidzas Vācijā. Ukraina → Vācija pieauga no ap 270 tūkst. iedzīvotāju 2020. gadā līdz vairāk nekā 1,4 milj. 2024. gadā. Krievijā dzimušie bijušajās padomju valstīs ir krājums, kas radās, kad 1991. gadā pārvietojās robežas — ne 2023. gada vilnis.',
    },
    'latin-america-caribbean': {
      name: 'Latīņamerika un Karību reģions',
      shortName: 'Lat. Am. un Karības',
      caption:
        'Reģionam 2023. gadā bija neto aizplūde. Ārpusreģiona krājums ir liels: 27 milj. Latīņamerikā un Karību reģionā dzimušo 2024. gadā dzīvoja Ziemeļamerikā, ap 6 milj. — Eiropā. Reģiona iekšienē ap 14 milj. starptautisko migrantu ir iekšreģionu — liela daļa nesenā pieauguma ir Venecuēlas pārvietošana uz Kolumbiju, Peru un kaimiņiem.',
      originsIntro:
        '2024. gada vidū reģionā dzīvoja 17,5 milj. starptautisko migrantu. IOM skaita ap 14 milj. dzimušu citur reģionā, ap 1,3 milj. Ziemeļamerikā un ap 1,2 milj. Eiropā.',
      corridorsIntro:
        'Meksika → Amerikas Savienotās Valstis, ap 11 milj. iedzīvotāju 2024. gadā, ir pasaules lielākais valstu koridors (zemāk par 2015. gada maksimumu ap 12 milj.). Astoņi no reģiona desmit lielākajiem valstu koridoriem beidzas ASV. Divi iekšreģionu izņēmumi, ko nosauc IOM, ir Venecuēla → Kolumbija un Venecuēla → Peru.',
    },
    'northern-america': {
      name: 'Ziemeļamerika',
      shortName: 'Ziem. Amerika',
      caption:
        'Ziemeļamerikai (ASV, Kanāda un dažas Ziemeļatlantijas teritorijas — ne Meksika) 2023. gadā bija lielākā reģionālā neto ieplūde. Dzīvajā krājumā vada Latīņamerikā un Karību reģionā dzimušie (27 milj.) un Āzijā dzimušie (ap 20 milj.), tad Eiropa (ap 6,6 milj.) un Āfrika (ap 2,7 milj.).',
      originsIntro:
        '2024. gada vidū Ziemeļamerikā dzīvoja 61,2 milj. starptautisko migrantu. 27 milj. no Latīņamerikas un Karību reģiona ir lielākais starp-reģionu krājuma koridors IMS 2024 galvenajos faktos. Kanāda–ASV kustība pastāv; IOM to nepadara par galveno stāstu.',
      corridorsIntro:
        'Meksika → Amerikas Savienotās Valstis paliek lielākais valstu pāris. Āzijā dzimušie Ziemeļamerikas iedzīvotāji ir ap 20 milj. Tie ir daudzu desmitgažu krājumi, ne 2023. gada ierašanās saraksts.',
    },
    oceania: {
      name: 'Okeānija',
      shortName: 'Okeānija',
      caption:
        'Okeānija 2023. gadā bija neliels neto saņēmējs. Starptautiskie migranti ir 21% iedzīvotāju — augstākā reģionālā daļa — gandrīz visi Austrālijā un Jaunzēlandē. IOM skaita vairāk nekā 8,6 milj. migrantu no ārpus reģiona; Āzijā dzimušo ir ap 5 milj., Eiropā dzimušo ap 2,5 milj.',
      originsIntro:
        '2024. gada vidū Okeānijā dzīvoja 9,9 milj. starptautisko migrantu. Summa no ārpus reģiona ir ap 8,6 milj. Iekšokeānijas krājums ir atlikums, tostarp Jaunzēlande → Austrālija.',
      corridorsIntro:
        'IOM pieci lielākie koridori ar Okeānijas dalību beidzas Austrālijā: Apvienotā Karaliste (ap 1 milj.), Indija (ap 876 tūkst.), Ķīna (ap 656 tūkst.), tad Jaunzēlande (ap 588 tūkst.). Pēdējais ir iekšreģionu.',
    },
  },
  originNames: {
    africa: 'Āfrika',
    asia: 'Āzija',
    europe: 'Eiropa',
    'latin-america-caribbean': 'Latīņamerika un Karību reģions',
    'northern-america': 'Ziemeļamerika',
    oceania: 'Okeānija',
  },
  campCopy: {
    'coxs-bazar': {
      name: 'Koksasbazāra nometnes',
      country: 'Bangladeša',
      note: 'Bangladešas valdība / UNHCR: 33 nometnes Koksasbazāra apgabalā, tostarp Kutupalonga. Rohindžu bēgļi no Mjanmas. Vēl ap 33 659 cilvēkiem Bhasančaras salā šajā marķierī nav iekļauti.',
    },
    dadaab: {
      name: 'Dadaaba',
      country: 'Kenija',
      note: 'Dadaabas nometņu komplekss Kenijas austrumos. Skaitlis uz 2025. gada 31. decembri. Komplekss, ne viena telšu pilsēta.',
    },
    'kakuma-kalobeyei': {
      name: 'Kakuma un Kalobejei',
      country: 'Kenija',
      note: 'Kakuma 225 701; Kalobejei 82 629; Eldoreta 2 425 — trīs vietas, ko UNHCR Kenija apvienoja 2025. gada 31. decembra atjauninājumā. Viens marķieris, jo tā ir viena operācija.',
    },
    bidibidi: {
      name: 'Bidibidi',
      country: 'Uganda',
      note: 'Bidibidi apmetne, Jumbes apgabals. Galvenais kontingents ir pārvietotie no Dienvidsudānas. Apmetne, ne nocietināta nometne.',
    },
    zaatari: {
      name: 'Zaatari',
      country: 'Jordānija',
      note: 'Zaatari nometne. Galvenais kontingents ir pārvietotie no Sīrijas. UNHCR operatīvais skaitlis uz 2026. gada 31. augustu.',
    },
  },
  routeCopy: {
    'central-mediterranean': {
      name: 'Centrālā Vidusjūra',
      note: 'Ap 67 000 konstatējumu 2024. gadā (−59% pret 2023), otrais ES maršruts tajā gadā. 2025. gadā Frontex joprojām sauca to par visnoslogotāko, aptuveni 2024. gada līmenī. Izbraukšana no Lībijas ir nosauktais faktors Itālijas virzienā. Nav unikālu cilvēku skaits.',
    },
    'eastern-mediterranean': {
      name: 'Austrumu Vidusjūra',
      note: '69 400 konstatējumu 2024. gadā (+14%). 2025. gadā maršruts kopumā kritās; Lībija–Krēta koridors pieauga vairāk nekā trīskārt. Nelasi kā visu Āfriku → Eiropu.',
    },
    'western-africa': {
      name: 'Rietumāfrika (Kanāriju salas)',
      note: 'Gandrīz 47 000 ierašanās Kanāriju salās 2024. gadā — augstākais kopš Frontex uzskaites sākuma 2009. gadā. 2025. gadā konstatējumi šajā maršrutā kritās apmēram par divām trešdaļām (Mauritānija, Maroka, Senegāla).',
    },
    'western-mediterranean': {
      name: 'Rietumu Vidusjūra',
      note: 'Frontex ziņo par pieaugumu 2025. gadā, galvenokārt no Alžīrijas. Uz marķiera nav izdomāta 2025. gada skaitļa.',
    },
    'western-balkans': {
      name: 'Rietumbalkāni',
      note: 'Konstatējumi kritās par 78% 2024. gadā un atkal 2025. gadā. Frontex neatkārtoja 2025. gada skaitli, ko varētu citēt bez izdomājuma.',
    },
  },
};
