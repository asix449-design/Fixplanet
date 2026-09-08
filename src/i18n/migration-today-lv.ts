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
};
