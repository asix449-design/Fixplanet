import type { CitiesDetailCopy, CitiesEncyclopediaSlug, CitiesMobilitySlug } from '../data/solutions-cities';
import type { SolutionCopy } from '../data/solutions';

const brtPdf =
  'https://itdp.org/wp-content/uploads/2024/03/ITDP_BRTSTANDARD_APR2024_SINGLE-compressed.pdf';
const walkPdf =
  'https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/12/improving-the-quality-of-walking-and-cycling-in-cities_2fd6b6ec/cdeb3fe8-en.pdf';
const roadPdf =
  'https://documents1.worldbank.org/curated/en/099031724120560318/pdf/P1766281e0163d01218640121bea8238a86.pdf';

export const grid: Record<CitiesMobilitySlug, SolutionCopy> = {
  'bus-rapid-transit': {
    problemTitle: 'Autobusi stāv tajos pašos sastrēgumos kā auto',
    fixTitle: 'Ātrais autobusu transports',
    problem: 'Autobusi stāv tajos pašos sastrēgumos kā auto',
    fix: 'Ātrais autobusu transports dod autobusiem savas joslas, iekāpšanu platformas līmenī un biežus reisus. Parasts maršruts tad kursē gandrīz kā metro līnija, bet izmaksā daudz mazāk nekā sliežu transports. Starptautiskais vērtēšanas standarts katram koridoram piešķir pamata, bronzas, sudraba vai zelta līmeni.',
    imageAlt:
      'Posta stacija ātrā autobusu transporta līnijā Dāresalāmā: platformas pie joslām, kas atstātas autobusiem',
    sourceLabel: 'Transporta un attīstības politikas institūts',
  },
  'walking-and-cycling-networks': {
    problemTitle: 'Pilsētas, kur gājējiem un riteņbraucējiem paliek tikai no auto atlikusī vieta',
    fixTitle: 'Gājēju un riteņbraucēju tīkli',
    problem: 'Pilsētas, kur gājējiem un riteņbraucējiem paliek tikai no auto atlikusī vieta',
    fix: 'Nepārtraukti, droši maršruti gājējiem un riteņbraucējiem, savienoti katrā krustojumā, lai īsiem braucieniem nevajadzētu auto. Starptautiskā transporta foruma ieteikumi iešanas un braukšanas ar velosipēdu kvalitāti un drošību liek augstāk par vienkāršu braucienu skaitu.',
    imageAlt:
      'Riteņbraucēji šķērso krustojumu pie Holmens Kanal Kopenhāgenā pa zilu velosipēdu pārbrauktuves marķējumu',
    sourceLabel: 'Ekonomiskās sadarbības un attīstības organizācija un Starptautiskais transporta forums',
  },
  'congestion-charging': {
    problemTitle: 'Bezmaksas iebraukšana pārpildītās ielās palēnina katru braucienu',
    fixTitle: 'Maksa par iebraukšanu sastrēgumu zonās',
    problem: 'Bezmaksas iebraukšana pārpildītās ielās palēnina katru braucienu',
    fix: 'Autovadītāji maksā par braukšanu pa noslogotākajām ielām visnoslogotākajās stundās. Rindas saīsinās, un iekasētā nauda nonāk sabiedriskajā transportā. Londona, Stokholma un Singapūra šādu maksu izmanto jau gadiem. Pasaules Bankas pārskats to uzskata gan par veidu, kā pārvaldīt cilvēku pārvietošanos, gan par ienākumu avotu.',
    imageAlt:
      'Stabiņu diagramma par sešu piesārņotāju procentu izmaiņu Stokholmā maksas izmēģinājuma laikā, trīs teritorijas, Pasaules Bankas 4.7. tabula',
    sourceLabel: 'Pasaules Banka',
  },
  'low-emission-zones': {
    problemTitle: 'Visvairāk piesārņojošie transportlīdzekļi brīvi iebrauc blīvākajās ielās',
    fixTitle: 'Zemas emisijas zonas',
    problem: 'Visvairāk piesārņojošie transportlīdzekļi brīvi iebrauc blīvākajās ielās',
    fix: 'Kartē iezīmētas pilsētas zonas, kurās visvairāk piesārņojošajiem transportlīdzekļiem iebraukt aizliegts vai par to jāmaksā. Tā samazinās slāpekļa dioksīda un sīko daļiņu daudzums tur, kur cilvēki dzīvo un staigā. Eiropas pilsētās jau darbojas vairāk nekā 320 šādu zonu, un pilsētas citur pasaulē ievieš tos pašus noteikumus, lai veicinātu tīrākus transportlīdzekļus, sabiedrisko transportu, iešanu kājām un braukšanu ar velosipēdu.',
    imageAlt:
      'Novērojumu staciju karte Eiropā: slāpekļa dioksīda gada vidējā koncentrācija 2022. un 2023. gadā',
    sourceLabel: 'Starptautiskā tīrā transporta padome',
  },
  'electric-buses': {
    problemTitle: 'Dīzeļautobusi visu dienu kursē pa noslogotākajiem maršrutiem',
    fixTitle: 'Elektroautobusi',
    problem: 'Dīzeļautobusi visu dienu kursē pa noslogotākajiem maršrutiem',
    fix: 'Bateriju autobusi pilsētas līnijās novērš izplūdes gāzes pie pieturām un noslogotās ielās, un pilsētas tos jau iepērk lielā skaitā. Starptautiskā enerģētikas aģentūra saskaitīja gandrīz 70 tūkstošus pasaulē pārdotu elektroautobusu 2025. gadā, par 12% vairāk nekā gadu iepriekš, bet ANO Vides programma palīdz valstīm un pilsētām plānot tīrākus autobusu parkus.',
    imageAlt:
      'Sakrātie stabiņi elektroautobusu pārdošanai pa reģioniem, tūkstošos autobusu, katram gadam no 2020. līdz 2025.',
    sourceLabel: 'Starptautiskā enerģētikas aģentūra, „Pasaules elektrotransportlīdzekļu pārskats 2026”',
  },
};

export const detail: Record<CitiesEncyclopediaSlug, CitiesDetailCopy> = {
  'bus-rapid-transit': {
    title: 'Ātrais autobusu transports',
    hook: grid['bus-rapid-transit'].fix,
    imageAlt: grid['bus-rapid-transit'].imageAlt,
    caption:
      'Posta stacija ātrā autobusu transporta līnijā Dāresalāmā, Tanzānijā. Pa tās autobusu joslām drīkst braukt tikai ātrie autobusi un operatīvie transportlīdzekļi.',
    credit: 'Foto: Grahamcole, Wikimedia Commons',
    what: [
      'Ātrais autobusu transports ir lielas ietilpības autobusu sistēma, kas veidota, lai kursētu ātri un precīzi pēc grafika. Transporta un attīstības politikas institūta vērtēšanas standarts nosauc piecus pamatus: josla tikai autobusiem, autobusu ceļš pēc iespējas ielas vidū, maksa par braucienu pirms iekāpšanas, prioritāte autobusiem krustojumos un platformas autobusa grīdas līmenī. Lai koridoru vispār uzskatītu par ātro autobusu transportu, tajā jābūt vismaz 3 kilometriem atsevišķu joslu.',
    ],
    why: [
      'Ātrais autobusu transports dod pilsētai masveida ātro transportu ātrāk un lētāk nekā sliežu sistēmas. Kuritiba Brazīlijā atklāja savu sistēmu 1974. gadā, bet TransMilenio Bogotā sāka darbu 2000. gadā. Saskaņā ar standarta 2024. gada izdevumu desmit gados pēc tā pirmās publicēšanas 2012. gadā atklāti vairāk nekā 153 koridori 91 pilsētā 24 valstīs.',
    ],
    read: [
      'Standarts vērtē koridoru līdz 100 punktiem. Zelta līmenis nozīmē 85 punktus vai vairāk, sudraba no 70 līdz 84,9, bronzas no 55 līdz 69,9. „Pamata” līmenis atbilst tikai minimālajām prasībām. Galīgo vērtējumu piešķir sešus mēnešus pēc atklāšanas, kad atskaitīti punkti par problēmām ikdienas darbā, piemēram, pārpildītiem autobusiem, ilgu gaidīšanu pie luksoforiem un autobusiem, kas brauc cits aiz cita barā.',
    ],
    limits: [
      'Tikai uzkrāsotas joslas bez kārtīgām pieturām, uzraudzības un biežiem reisiem dod maz. Autobuss ar ātrā autobusu transporta nosaukumu bez šiem pamatiem joprojām stāv sastrēgumā.',
    ],
    sources: [
      {
        label: 'Transporta un attīstības politikas institūts: ātrā autobusu transporta vērtēšanas standarts',
        url: 'https://itdp.org/publication/the-brt-standard/',
      },
      {
        label:
          'Transporta un attīstības politikas institūts: ātrā autobusu transporta vērtēšanas standarts, 2024. gada izdevums',
        url: brtPdf,
      },
    ],
  },
  'walking-and-cycling-networks': {
    title: 'Gājēju un riteņbraucēju tīkli',
    hook: grid['walking-and-cycling-networks'].fix,
    imageAlt: grid['walking-and-cycling-networks'].imageAlt,
    caption:
      'Riteņbraucēji šķērso krustojumu pie Holmens Kanal Kopenhāgenā pa zilu velosipēdu pārbrauktuves marķējumu, kas turpina veloceliņu cauri krustojumam.',
    credit: 'Foto: Tony Webster, Wikimedia Commons',
    what: [
      'Gājēju un riteņbraucēju tīkls ir savienotu ietvju, pāreju un velomaršrutu kopums, pa kuru cilvēki var droši un ar saviem spēkiem nokļūt ikdienas galamērķos. Apaļā galda ziņojumā, ko 2023. gada decembrī publicēja Starptautiskais transporta forums, ar Ekonomiskās sadarbības un attīstības organizāciju saistīta starpvaldību transporta organizācija, pilsētas aicinātas uzlabot šo braucienu kvalitāti: samazināt satiksmes ātrumu, veidot drošas pārejas un labus savienojumus ar autobusiem, tramvajiem un vilcieniem.',
    ],
    why: [
      'Iešana un braukšana ar velosipēdu palīdz sasniegt četrus ziņojumā nosauktos mērķus: efektīvu pārvietošanos, tīrāku vidi, lielāku prieku ikdienā un taisnīgāku ieguvumu sadalījumu. Daudzās pilsētās cilvēki ar saviem spēkiem pārvietojas galvenokārt kājām, īpaši globālajos Dienvidos un valstīs, kur ir maz automašīnu. Ziņojums arī brīdina, ka gadu desmitiem ilgā uz auto vērstā plānošana ir izstūmusi gājējus un riteņbraucējus ielas malā.',
    ],
    read: [
      'Ziņojums vērtē progresu pēc kvalitātes, ko liek augstāk par daudzumu. Tas jautā, vai tie, kas jau iet kājām un brauc ar velosipēdu, var to darīt cienīgi, droši un ērti, un vai viņi jūtas pasargāti no bīstamas satiksmes un uzmākšanās. Gājējiem un riteņbraucējiem ir dažādas vajadzības, tāpēc labs tīkls plāno katrai grupai atsevišķi.',
    ],
    limits: [
      'Ar infrastruktūru vien nepietiek, ja ielas šķiet nedrošas vai ir atrautas no bieža sabiedriskā transporta. Tīkliem vajag nepārtrauktību, zemāku satiksmes ātrumu un īstas pārejas.',
    ],
    sources: [
      {
        label:
          'Ekonomiskās sadarbības un attīstības organizācija un Starptautiskais transporta forums: „Gājēju un velosipēdu satiksmes kvalitātes uzlabošana pilsētās”, apaļā galda ziņojumu sērija, Nr. 193',
        url: 'https://www.oecd.org/en/publications/improving-the-quality-of-walking-and-cycling-in-cities_cdeb3fe8-en.html',
      },
      {
        label:
          'Ekonomiskās sadarbības un attīstības organizācija un Starptautiskais transporta forums: „Gājēju un velosipēdu satiksmes kvalitātes uzlabošana pilsētās”, kopsavilkums un secinājumi',
        url: walkPdf,
      },
    ],
  },
  'congestion-charging': {
    title: 'Maksa par iebraukšanu sastrēgumu zonās',
    hook: grid['congestion-charging'].fix,
    imageAlt: grid['congestion-charging'].imageAlt,
    caption:
      'Emisiju procentuālā izmaiņa Stokholmā maksas izmēģinājuma laikā, pēc 4.7. tabulas. Skaitļi zem nulles nozīmē samazinājumu. Katrā grupā stabiņi iet no tumšā uz gaišo: pilsētas centrs, Stokholmas pašvaldība un 35 kvadrātkilometru teritorija. 1. grupa ir slāpekļa oksīdi (−8,5, −2,7, −1,3), 2. oglekļa monoksīds (−14, −5,1, −2,9), 3. daļiņas līdz 10 mikrometriem (−13, −3,4, −1,5), 4. gaistošie organiskie savienojumi (−14, −5,2, −2,9), 5. benzols (−14, −5,3, −3,0), 6. oglekļa dioksīds (−13, −5,4, −2,7). Ziņojumā pie tabulas avots ir Hugošons un Šēbergs, 2006. gads.',
    credit:
      'Grafiks pārzīmēts no Pasaules Bankas ziņojuma „Ceļu maksas pilsētās un starp pilsētām: mobilitātes pārvaldība un infrastruktūras finansēšana mainīgos apstākļos” (2023. gada augusts) 4.7. tabulas. Šī ir oriģināla Pasaules Bankas darba adaptācija. Adaptācijā paustie viedokļi pieder tikai tās autoram, un Pasaules Banka tos neatbalsta. Šo tulkojumu nav veidojusi Pasaules Banka, un tas nav oficiāls Pasaules Bankas tulkojums. Pasaules Banka neatbild par šā tulkojuma saturu vai kļūdām.',
    legend: ['Pilsētas centrs', 'Stokholmas pašvaldība', '35 kvadrātkilometru teritorija'],
    categories: [
      'Slāpekļa oksīdi',
      'Oglekļa monoksīds',
      'Daļiņas līdz 10 mikrometriem',
      'Gaistošie organiskie savienojumi',
      'Benzols',
      'Oglekļa dioksīds',
    ],
    what: [
      'Maksa par iebraukšanu sastrēgumu zonā ir maksājums par iebraukšanu ar auto pārpildītā zonā vai par gredzena šķērsošanu ap to noteiktās stundās. Kameras nolasa numura zīmes, tāpēc autovadītājiem nav jāapstājas, lai samaksātu. Londona ieviesa maksu 2003. gada 17. februārī: 5 mārciņas dienā darbdienās. Stokholma no 2006. gada janvāra līdz jūlijam izmēģināja maksu, kas atkarīga no diennakts laika, un 2007. gada augustā padarīja to pastāvīgu.',
    ],
    why: [
      'Pasaules Bankas ceļu maksu pārskatā teikts, ka Londonā pirmajā gadā automašīnu skaits ielās samazinājās aptuveni par trešdaļu, bet sastrēgumu radītā kavēšanās par 30%. Stokholmas izmēģinājuma laikā satiksme uz pilsētas centru un no tā samazinājās par 20%, bet sabiedriskā transporta izmantošana pieauga par 7%; nākamajā referendumā maksu atbalstīja 53% balsotāju. Singapūras iebraukšanas atļauju sistēma, kas ieviesta 1975. gadā, samazināja satiksmi maksas zonā par 45%.',
    ],
    read: [
      'Rezultāts atkarīgs no tā, kam tiek tērēta nauda un kāda izvēle ir autovadītājiem. Londonas 2007./2008. finanšu gadā no 137 miljoniem mārciņu tīro ieņēmumu no šīs maksas 112 miljoni tika novirzīti autobusu satiksmes uzlabošanai. Sākotnējie panākumi var mazināties: vidējais ātrums Londonas centrā pēc maksas ieviešanas pieauga no 14,6 līdz 17,6 km/h, bet līdz 2006. gadam atkal nokritās līdz aptuveni 15 km/h. Pēc pārskata aplēsēm bez maksas tas būtu ap 11 km/h.',
    ],
    limits: [
      'Vajag skaidrus atbrīvojumus, strādājošu kontroli un redzamus ieguldījumus sabiedriskajā transportā. Maksa bez alternatīvām tikai pārceļ problēmu uz zonas robežu.',
    ],
    sources: [
      {
        label:
          'Pasaules Banka: „Ceļu maksas pilsētās un starp pilsētām: mobilitātes pārvaldība un infrastruktūras finansēšana mainīgos apstākļos”, 2023. gada augusts',
        url: roadPdf,
      },
      {
        label:
          'Pasaules Banka, katalogs „Dokumenti un ziņojumi”: ziņojuma „Ceļu maksas pilsētās un starp pilsētām” lapa',
        url: 'https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099031724120560318',
      },
    ],
  },
  'low-emission-zones': {
    title: 'Zemas emisijas zonas',
    hook: grid['low-emission-zones'].fix,
    imageAlt: grid['low-emission-zones'].imageAlt,
    caption:
      'Slāpekļa dioksīda gada vidējā koncentrācija stacijās, kas iekļautas ziņojumā. Tie ir 4. kartes dati pārskatā „Gaisa kvalitātes stāvoklis Eiropā 2024”. Panelī ar atzīmi 2022 ir 3 597 stacijas: 833 ar koncentrāciju līdz 10 mikrogramiem uz kubikmetru, 2 659 virs 10 un līdz 40 ieskaitot, 105 virs 40. Panelī ar atzīmi 2023 ir 3 477 stacijas: 952, 2 440 un 85 tajās pašās klasēs. Rāmis ir no 25 grādiem rietumu garuma līdz 45 grādiem austrumu garuma un no 34 līdz 72 grādiem ziemeļu platuma, tāpēc stacijas ārpus šā rāmja nav uzzīmētas. Krasta līnija ir no Natural Earth.',
    credit:
      'Karte pārzīmēta no Eiropas Vides aģentūras gaisa kvalitātes ziņošanas gada statistikas — mērījumiem, kas ir pamatā 4. kartei pārskatā „Gaisa kvalitātes stāvoklis Eiropā 2024”. Krasta līnija: Natural Earth, sabiedriskais īpašums.',
    legend: [
      'Ne vairāk kā 10 mikrogrami uz kubikmetru',
      'Virs 10 un līdz 40 ieskaitot',
      'Virs 40',
    ],
    what: [
      'Zemas emisijas zonā ir ierobežojumi visvairāk piesārņojošajiem transportlīdzekļiem. Parasti transportlīdzekļiem ar lielākām emisijām iebraukt nedrīkst, bet dažās zonās tie par iebraukšanu maksā vairāk. Eiropā iebraukšana ir atkarīga no tā, kuram Euro izmešu standartam transportlīdzeklis atbilst. Lielākā daļa zonu attiecas uz pilsētas un tālsatiksmes autobusiem un smagajām kravas automašīnām, dažas arī uz furgoniem, vieglajiem auto un motocikliem, un lielākā daļa darbojas visu diennakti katru gada dienu.',
    ],
    why: [
      'Pēc Eiropas Vides aģentūras datiem galvenais slāpekļa dioksīda avots ir autotransports, kas to izdala tuvu zemei blīvi apdzīvotās vietās, un 96% Eiropas Savienības pilsētu iedzīvotāju ir pakļauti sīko daļiņu līdz 2,5 mikrometriem koncentrācijai virs Pasaules Veselības organizācijas ieteikumiem. Starptautiskā tīrā transporta padome Eiropas pilsētās saskaita vairāk nekā 320 zemas emisijas zonu un min pētījumus, pēc kuriem šādas zonas samazinājušas autosatiksmes slāpekļa dioksīda izmešus līdz pat 46%.',
    ],
    read: [
      'Zona darbojas tik labi, cik labi ir tās noteikumi un pārbaudes. Pilsētām vajag datus par to, kādi transportlīdzekļi patiešām brauc pa to ielām, un kameras, kas nolasa numura zīmes, lai uzraudzītu iebraukšanas noteikumus. Starptautiskā tīrā transporta padome arī uzsver, ka labs sabiedriskais transports, iešana kājām un braukšana ar velosipēdu palīdz cilvēkiem atteikties no piesārņojošiem transportlīdzekļiem. Arvien vairāk pilsētu stingrina noteikumus līdz nulles emisijas zonām, kurās drīkst iebraukt tikai bateriju elektromobiļi vai ūdeņraža degvielas šūnu transportlīdzekļi.',
    ],
    limits: [
      'Vajag datus par transportlīdzekļiem, taisnīgus atbrīvojumus un kameras vai pārbaudes. Zona, kas pastāv tikai uz papīra bez kontroles, maz dod gaisam ceļa malā.',
    ],
    sources: [
      {
        label:
          'Starptautiskā tīrā transporta padome: „Zemas emisijas zonas kā katalizators sabiedriskā transporta infrastruktūras uzlabošanai pilsētās”, emuārs, 2024. gada 10. jūlijs',
        url: 'https://theicct.org/lez-a-catalyst-for-improving-transit-infrastructure-in-cities-jul24/',
      },
      {
        label: 'Eiropas Vides aģentūra: „Gaisa kvalitātes stāvoklis Eiropā 2024”',
        url: 'https://www.eea.europa.eu/en/analysis/publications/europes-air-quality-status-2024',
      },
    ],
    findZone: {
      label: 'Atrast zonu',
      url: 'https://urbanaccessregulations.eu/low-emission-zones-main',
    },
  },
  'electric-buses': {
    title: 'Elektroautobusi',
    hook: grid['electric-buses'].fix,
    imageAlt: grid['electric-buses'].imageAlt,
    caption:
      'Elektroautobusu pārdošana pa reģioniem, 2020.–2025. gads. Ķīna joprojām pārdod visvairāk, bet tās daļa stabiņā sarūk, jo citi reģioni aug ātrāk. Segmenti no apakšas ir Ķīna, Eiropa, Amerikas Savienotās Valstis, Indija, Latīņamerika un pārējā pasaule. 2025. gadā tie ir 40,1, 12,5, 1,8, 4,3, 3,1 un 6,1 tūkstotis autobusu (kopā 67,9 tūkstoši). Ķīnas daļa stabiņā ir 86,3 procenti 2020. gadā un 59,1 procents 2025. gadā. Vertikālā skala ir tūkstoši autobusu.',
    credit:
      'Grafiks pārzīmēts no Starptautiskās enerģētikas aģentūras (2026) datiem „Elektroautobusu pārdošana pa reģioniem, 2020–2025”. Krāsu atslēga šajā lapā ir tā grafika adaptācija.',
    legend: [
      'Ķīna',
      'Eiropa',
      'Amerikas Savienotās Valstis',
      'Indija',
      'Latīņamerika',
      'Pārējā pasaule',
    ],
    what: [
      'Elektroautobusi brauc ar baterijām, ko uzlādē no elektrotīkla, galvenokārt autobusu parkos. Saskaņā ar Starptautiskās enerģētikas aģentūras ziņojumu „Pasaules elektrotransportlīdzekļu pārskats 2026” 2025. gadā 98% pasaulē pārdoto elektroautobusu bija bateriju modeļi. Bateriju modeļu vidējais nobraukums ar vienu uzlādi sasniedzis 360 km, un ar to pietiek pilsētas autobusiem, kas dienā parasti nobrauc 150–300 km.',
    ],
    why: [
      'Pilsētas autobusi visu dienu kursē pa tiem pašiem noslogotajiem maršrutiem, tāpēc dīzeļmotoru nomaiņa novērš izplūdes gāzes tieši tur, kur daudz cilvēku gaida un staigā. 2025. gadā pārdošana sasniedza gandrīz 70 tūkstošus, par 12% vairāk nekā 2024. gadā. Ķīnai no tiem bija aptuveni 60%, salīdzinot ar gandrīz 100% 2018. gadā, un gandrīz visi tur pārdotie jaunie pilsētas autobusi ir elektriski. Eiropā pārdoti vairāk nekā 12 tūkstoši elektroautobusu, bet Eiropas Savienībā bateriju modeļi veidoja vairāk nekā 55% jauno pilsētas autobusu pārdošanas. Santjago Čīlē tagad ir lielākais elektroautobusu parks starp pilsētām ārpus Ķīnas.',
    ],
    read: [
      'Pārdošanas skaitļi rāda, cik jaunu autobusu nopirkts gadā, ieskaitot pilsētas un starppilsētu autobusus ar 10 vai vairāk sēdvietām, tāpēc tie atšķiras no jau kursējošo elektroautobusu skaita. Starppilsētu autobusus elektrificēt ir grūtāk: Ķīnā nulles emisijas modeļi 2025. gadā veidoja tikai aptuveni 10% to pārdošanas. ANO Vides programma atbalsta 16 valstis un pilsētas Āfrikā, Āzijā, Latīņamerikā un Karību reģionā, kas gatavojas zemu emisiju sabiedriskajam transportam, tostarp elektroautobusiem.',
    ],
    limits: [
      'Vajag uzlādi autobusu parkos, uzticamus ikdienas grafikus un finansētu parka atjaunošanas plānu. Daži izmēģinājuma autobusi bez parku uzlādes stratēģijas iestrēgst, kad pilsēta mēģina paplašināt programmu.',
    ],
    sources: [
      {
        label:
          'Starptautiskā enerģētikas aģentūra: „Pasaules elektrotransportlīdzekļu pārskats 2026”, sadaļa „Tendences citos elektrotransporta veidos”',
        url: 'https://www.iea.org/reports/global-ev-outlook-2026/trends-in-other-ev-modes',
      },
      {
        label: 'ANO Vides programma: „Elektroautobusi”',
        url: 'https://www.unep.org/topics/transport/electric-mobility/electric-buses',
      },
      {
        label: 'Starptautiskā enerģētikas aģentūra: „Pasaules elektrotransportlīdzekļu pārskats 2026”',
        url: 'https://www.iea.org/reports/global-ev-outlook-2026',
      },
    ],
  },
  "cool-roofs": {
    title: "Vēsie jumti",
    hook: "Vēsais jumts atstaro vairāk saules siltuma nekā parasts jumts, tāpēc ēka zem tā paliek vēsāka un gaisa kondicionēšanai tērē mazāk enerģijas, ziņo Amerikas Savienoto Valstu Vides aizsardzības aģentūra.",
    imageAlt: "Balti pakāpjveida jumti mājai Bermudu salu krastā, fotografēti 1994. gada maijā.",
    caption: "Balti pakāpjveida jumti mājai Bermudu salu krastā, fotografēti 1994. gada maijā.",
    credit: "Foto: Acroterion, ar Wikimedia Commons starpniecību, licence «Ar autora norādi, tādos pašos noteikumos» 3.0.",
    what: ["Vēsais jumts uzsūc un ēkai nodod mazāk saules siltuma nekā parasts jumts. Galvenā tā īpašība, augsts saules gaismas atstarošanas koeficients jeb albedo, parāda, cik lielu gaismas daļu jumts sūta atpakaļ. Palīdz arī augsta siltuma izstarošana, tas ir, spēja atdot to siltumu, ko jumts tomēr uzsūcis, īpaši siltā un saulainā klimatā. Materiāli vēsajiem jumtiem pastāv gan plakaniem, gan slīpiem jumtiem, piemēram, atstarojošas membrānas, gaiši pārklājumi, dakstiņi un šindeļi."],
    why: ["Dzīvojamās ēkās bez gaisa kondicionēšanas vēsie jumti var pazemināt augstāko temperatūru telpās par 1,2 līdz 3,3 °C. Dzīvojamās ēkās ar gaisa kondicionēšanu vēsais jumts var samazināt maksimālo dzesēšanas pieprasījumu par 11 līdz 27 procentiem. Vēsie jumti pazemina arī temperatūru ārpus ēkām, kas mīkstina pilsētas siltuma salas efektu. Viens pētījums Apvienotajā Karalistē parādīja, ka vēsie jumti visā pilsētā varētu kompensēt 18 procentus ar karstumu saistīto nāves gadījumu, ko izraisa siltuma salas efekts."],
    read: ["Diapazons no 1,2 līdz 3,3 °C attiecas uz dzīvojamām ēkām bez gaisa kondicionēšanas, un diapazons no 11 līdz 27 procentiem uz dzīvojamām ēkām ar gaisa kondicionēšanu. Vietējie noteikumi un stimuli veicina to izmantošanu. Amerikas Savienotajās Valstīs prasības vēsajiem jumtiem ietilpst būvniecības un enerģijas standartos vai noteikumos vismaz 13 pilsētās un apgabalos, septiņos štatos un Kolumbijas apgabalā saskaņā ar Vēso jumtu vērtēšanas padomes informāciju, kas atjaunināta 2022. gadā."],
    limits: ["Tā kā vēsie jumti atstaro saules gaismu, aukstā klimatā tie ziemā var palielināt enerģijas patēriņu apkurei. Aģentūra raksturo šo efektu kā parasti kompensētu ar ietaupījumu vasaras dzesēšanā, un zemā ziemas saule un īsās dienas to samazina vēl vairāk. Vēsajiem jumtiem var būt vajadzīga periodiska tīrīšana, lai atstarošana paliktu augsta, īpaši plakanajiem jumtiem. Ēku īpašnieki gūst vislielāko labumu, ja vienlaikus uzlabo arī siltumizolāciju un gaisa blīvumu."],
    sources: [
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Vēso jumtu izmantošana pilsētu siltuma salu mazināšanai",
        url: "https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands",
      },
    ],
  },
  "green-roofs": {
    title: "Zaļie jumti",
    hook: "Zaļais jumts ir dzīvu augu slānis uz jumta, un Amerikas Savienoto Valstu Vides aizsardzības aģentūra ziņo, ka tā virsma var būt aptuveni par 31 °C vēsāka nekā parasta jumta virsma.",
    imageAlt: "Čikāgas pilsētas domes apzaļumotais jumts Amerikas Savienotajās Valstīs, skats no augšas, fotografēts 2008. gada 8. jūlijā.",
    caption: "Čikāgas pilsētas domes apzaļumotais jumts Amerikas Savienotajās Valstīs, skats no augšas, fotografēts 2008. gada 8. jūlijā.",
    credit: "Foto: TonyTheTiger, ar Wikimedia Commons starpniecību, licence «Ar autora norādi, tādos pašos noteikumos» 3.0.",
    what: ["Zaļais jumts jeb jumta dārzs ir augu slānis, kas audzēts uz jumta. Tas atrodas uz hidroizolācijas barjeras ar drenāžas slāni un augšņu slāni. Ekstensīvajiem zaļajiem jumtiem aug izturīgi augi 5 līdz 10 centimetru dziļā augsnes slānī, tie ir viegli un pēc iesakņošanās prasa maz kopšanas. Intensīvie zaļie jumti ir sarežģītāki, var atgādināt parku ar kokiem un prasa stiprāku konstrukciju un kopšanu. Zaļais jumts kalpo arī kā ēkas siltuma buferis: siltā laikā to atvēsina, aukstā laikā silda."],
    why: ["Zaļie jumti dod ēnu, atņem siltumu gaisam un pazemina jumta virsmas un apkārtējā gaisa temperatūru. Zaļā jumta virsma var būt aptuveni par 31 °C vēsāka nekā parastam jumtam, un tuvumā esošais gaiss līdz pat par 11 °C vēsāks. Salīdzinājumā ar parastajiem jumtiem zaļie var samazināt ēkas dzesēšanas slodzi par 70 procentiem un pazemināt gaisa temperatūru telpās par 15 °C. Tie arī samazina un palēnina lietus ūdens noteci, pēc aģentūras datiem par 60 līdz 100 procentiem."],
    read: ["Amerikas Savienoto Valstu Vispārējo pakalpojumu administrācija uzskaita vairāk nekā 80 ēku ar zaļajiem jumtiem, kopā aptuveni 20 hektāru. Tajos ietilpst Amerikas Savienoto Valstu Krasta apsardzes štāba jumts Vašingtonā ar aptuveni 5,2 hektāriem stādīta jumta, kas pēc administrācijas domām paildzinās hidroizolācijas membrānas mūžu divas vai trīs reizes. Notekas diapazons ir atkarīgs no nokrišņu rakstura, un zaļais jumts aiztur vairāk ūdens nelielā lietū nekā spēcīgā lietusgāzē."],
    limits: ["Zaļie jumti sākumā bieži maksā vairāk nekā parastie un prasa konstrukciju, kas var izturēt to svaru, drenāžas slāni un regulāru kopšanu, piemēram, laistīšanu, ravēšanu un atkārtotu stādīšanu. Daļu izmaksu īpašnieki var segt ar zemākiem enerģijas izdevumiem, zemākiem lietus ūdens maksājumiem un ilgāku jumta mūžu. Ēku skaits un platības attiecas uz Amerikas Savienoto Valstu federālās valdības ēkām."],
    sources: [
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Zaļo jumtu izmantošana pilsētu siltuma salu mazināšanai",
        url: "https://www.epa.gov/heatislands/using-green-roofs-reduce-heat-islands",
      },
      {
        label: "Amerikas Savienoto Valstu Vispārējo pakalpojumu administrācija: Stādīto jumtu piemēri",
        url: "https://www.gsa.gov/governmentwide-initiatives/federal-highperformance-buildings/highperformance-building-clearinghouse/water/planted-roof/case-studies",
      },
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Labākā lietus ūdens apsaimniekošanas prakse: zaļie jumti, 2021. gada decembris",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-green-roofs.pdf",
      },
    ],
  },
  "permeable-pavement": {
    title: "Caurlaidīgs segums",
    hook: "Caurlaidīgs segums laiž lietu cauri virsmai augsnes un grants slāņos zem tās, un Amerikas Savienoto Valstu Vides aizsardzības aģentūra to iekļauj zaļās infrastruktūras veidos.",
    imageAlt: "Demonstrācija, kurā ūdens, uzliets uz porainā seguma plāksnes, iesūcas tai cauri, fotografēts 2012. gada 7. oktobrī.",
    caption: "Demonstrācija, kurā ūdens, uzliets uz porainā seguma plāksnes, iesūcas tai cauri, fotografēts 2012. gada 7. oktobrī.",
    credit: "Foto: Lombroso, ar Wikimedia Commons starpniecību, licence «Ar autora norādi, tādos pašos noteikumos» 3.0.",
    what: ["Caurlaidīgie segumi uzkrāj vai uzsūc lietus ūdeni tur, kur tas nokritis. Virskārta var būt caurlaidīgs betons, porains asfalts vai caurlaidīgi betona bruģakmeņi ar sakabi. Lietus ūdens iesūcas virsmā un uzkrājas drupināta akmens un augsnes slāņos zemāk. Pēc tam ūdens vai nu iesūcas zemē, vai aizplūst pa drenu. Porains asfalts un caurlaidīgs betons ir parastā asfalta un betona varianti ar mazāk smalku daļiņu, un starp bruģakmeņiem atstāj nelielas šuves, kas aizpildītas ar sīkām drumslām."],
    why: ["Caurlaidīgie segumi parasti var aizstāt tradicionālo segumu vietējās ielās, ietvēs, piebraucamajos ceļos, autostāvvietās un velosipēdu celiņos. Uzņemot lietu uz vietas, tie samazina ūdens uzkrāšanos uz seguma un vietējos applūdumus un var mazināt vajadzību pēc parastajām drenāžas caurulēm un baseiniem. Ziemā tiem parasti vajag mazāk ceļu sāls vai atkausēšanas līdzekļu, jo ātra ūdens novadīšana no virsmas samazina sasalstošas peļķes un melno ledu. Pareizi izbūvēts caurlaidīgais segums var kalpot no 20 līdz 40 gadiem."],
    read: ["Aģentūra raksturo caurlaidīgo segumu kā lietus ūdens kontroles līdzekli: virskārta, caur kuru ūdens iet, un drupināta akmens rezervuārs, kurā tas uzkrājas. Ja vietas slīpums pārsniedz 2 procentus, pamatnei zem seguma var būt vajadzīga terasēšana, lai lietus ūdens neplūstu cauri seguma konstrukcijai. Porainam asfaltam un caurlaidīgam betonam ir nedaudz raupjāka virsma nekā parastajiem, un tie dod transportlīdzekļiem un gājējiem labāku saķeri."],
    limits: ["Galvenā uzturēšanas problēma ir aizsērēšana ar smalkām daļiņām, jo tā samazina ātrumu, ar kādu ūdens iet cauri segumam. Periodiska smalko nogulumu novākšana no virsmas saglabā seguma caurlaidību, un vietas ar lielu nogulumu slodzi labāk apiet. Caurlaidīgie segumi ir vājāki par parasto asfaltu un var būt nepiemēroti ceļiem ar lielu un ātru satiksmi, ārkārtīgām slodzēm un vietām, kur apiet ar bīstamām vielām vai iespējamas noplūdes. Norādījumi apraksta praksi Amerikas Savienotajās Valstīs."],
    sources: [
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Zaļās infrastruktūras veidi",
        url: "https://www.epa.gov/green-infrastructure/types-green-infrastructure",
      },
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Labākā lietus ūdens apsaimniekošanas prakse: caurlaidīgie segumi, 2021. gada decembris",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-permeable-pavements.pdf",
      },
    ],
  },
  "urban-tree-canopy": {
    title: "Pilsētas koku vainags",
    hook: "Koki un citi augi dzesē pilsētas gaisu ar ēnu un iztvaikošanu, un 308 pētījumu apskats parādīja, ka pilsētu meži vidēji bija par 1,6 °C vēsāki nekā pilsētas teritorijas bez zaļuma.",
    imageAlt: "Koki rudens krāsās gar bulvāri Unter den Linden Berlīnē, ceļa malā redzams vēsturisks piemineklis.",
    caption: "Koki rudens krāsās gar bulvāri Unter den Linden Berlīnē, ceļa malā redzams vēsturisks piemineklis.",
    credit: "Foto: Jochen Sievert, ar Wikimedia Commons starpniecību, licence «Ar autora norādi, tādos pašos noteikumos» 4.0.",
    what: ["Koki un augi, piemēram, krūmi, krūmāji un augsti zāļaugi, pazemina virsmu un gaisa temperatūru ar ēnu un evapotranspirāciju. Evapotranspirācijā augi uzņem ūdeni ar saknēm un iztvaicē to ar lapām, un tas patērē gaisa siltumu. Dzesēšana nāk arī no apkārtējās augsnes un lapās aizturētā lietus. Amerikas Savienoto Valstu Vides aizsardzības aģentūra norāda koku un augu kā vienkāršu un efektīvu veidu, kā mazināt siltuma salas."],
    why: ["Koki, kas apēno ēkas, samazina gaisa kondicionēšanas vajadzību, un pilsētas parki un mežsaimniecība var samazināt tuvumā esošo ēku enerģijas pieprasījumu par 10 procentiem. Augsta un blīva ceļmalas veģetācija var mazināt piesārņojumu pa vējam par aptuveni 30 procentiem. Pilsētas koki var samazināt lietus ūdens noteci, uzņemot no 15 līdz 27 procentiem gada nokrišņu. Koku sega saistīta arī ar mazāku ar karstumu saistīto nāves gadījumu skaitu: pēc vienas analīzes koku segas pieaugums par 10 procentiem nozīmētu aptuveni 50 nāves gadījumus gadā mazāk Soltleiksitijā Jūtas štatā un 3 800 mazāk Ņujorkā."],
    read: ["Atdzišana par 1,6 °C ir vidējais rādītājs 308 pētījumos. Aģentūra ziņo, ka pilsētu daļas ar mazāku veģetāciju ir karstākas un ka vienā pētījumā šajās daļās dzīvoja vairāk iedzīvotāju ar zemākiem ienākumiem. Aģentūra uzskaita taisnīguma uzlabošanu starp koku un augu ieguvumiem."],
    limits: ["Mazāka nāves gadījumu skaita aplēses nāk no vienas modelēšanas analīzes par Amerikas Savienoto Valstu pilsētām, tās ir Soltleiksitija un Ņujorka. Lielākā daļa procentu aģentūras formulēti kā tas, ko koki un augi var panākt, piemēram, «var samazināt» vai «aptuveni», tāpēc tie rāda iespējamo efekta apmēru."],
    sources: [
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Koku un augu ieguvumi",
        url: "https://www.epa.gov/heatislands/benefits-trees-and-vegetation",
      },
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Koku un augāja izmantošana pilsētu siltuma salu mazināšanai",
        url: "https://www.epa.gov/heatislands/using-trees-and-vegetation-reduce-heat-islands",
      },
    ],
  },
  "rain-gardens-bioswales": {
    title: "Lietusdārzi un biosvāles",
    hook: "Lietusdārzi un biosvāles ir apstādīti iedobumi un kanāli, kas uzņem noteci no ielām un jumtiem un filtrē to caur augsni, un Amerikas Savienoto Valstu Vides aizsardzības aģentūra tos iekļauj zaļās infrastruktūras veidos.",
    imageAlt: "Divas biosvāles pie mājām, tuvākā vēl tiek būvēta, tālākā jau ir ieaugusi.",
    caption: "Divas biosvāles pie mājām, tuvākā vēl tiek būvēta, tālākā jau ir ieaugusi.",
    credit: "Foto: Duk (angļu Vikipēdija), ar Wikimedia Commons starpniecību, publiskais īpašums.",
    what: ["Bioretencijas zona ir projektēts iedobums, kas savāc lietus ūdeni no jumtiem, ietvēm un ielām. Ūdens tajā uz īsu laiku uzkrājas un tad iesūcas zemē vai aizplūst pa drenu. Lietusdārzs ir mazāks, seklāks un mazāk sarežģīts variants: apstādīts iedobums, kas savāc lietus ūdens noteci un filtrē to caur augsnes, smilts vai grants maisījumu. Biosvāles ir atvērti kanāli, kuros augi vai mulča palēnina, filtrē un attīra lietus ūdeni, kamēr tas plūst pa seklu kanālu vai tranšeju."],
    why: ["Lietusdārzi filtrē lietus ūdeni, samazina maksimālās plūsmas lejup esošajos kanalizācijas tīklos un novērš piesārņojumu ar filtrēšanu un augu uzņemšanu. Tie der nelielām vietām blīvā pilsētas apbūvē un ietilpst autostāvvietu salās, gar ceļiem un krustojumos. Svāles ir lineāras, tāpēc labi piemērotas lietus ūdens attīrīšanai no šosejām un dzīvojamo rajonu ielām."],
    read: ["Bioretencijas zonai parasti vajadzīga platība, kas vienāda ar 5 līdz 10 procentiem no cietā seguma platības, no kuras ūdens uz to plūst. Lietusdārzi filtrē ūdeni no nelielām un vidējām lietusgāzēm, un lielāku lietusgāžu ūdeni parasti novada garām tiem uz lielāku būvi vai lietus kanalizāciju, paredzot pārplūdes ierīci pārāk lielām plūsmām. Svāles vislabāk darbojas uz lēzeniem nogāzēm no 1 līdz 2 procentiem, jo uz stāvākām nogāzēm ūdens paātrinās un izraisa eroziju."],
    limits: ["Lietusdārza augšējie augsnes slāņi laika gaitā var aizsērēt tur, kur nogulumu ir pārāk daudz. Bioretencija prasa apstādījumu kopšanu, piemēram, ieplūdes vietu pārbaudi pēc sezonas pirmā lietus, atkritumu savākšanu un filtra materiāla augšējā slāņa nomaiņu, ja ūdens stāv ilgāk par 48 stundām. Svālēm vajadzīga samērā liela caurlaidīgas virsmas platība, tāpēc tās var būt slikti piemērotas blīvai pilsētas apbūvei. Norādījumi apraksta praksi Amerikas Savienotajās Valstīs."],
    sources: [
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Zaļās infrastruktūras veidi",
        url: "https://www.epa.gov/green-infrastructure/types-green-infrastructure",
      },
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Labākā lietus ūdens apsaimniekošanas prakse: bioretencija (lietusdārzi), 2021. gada decembris",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-bioretention-rain-gardens.pdf",
      },
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Labākā lietus ūdens apsaimniekošanas prakse: zālaini grāvji, 2021. gada decembris",
        url: "https://www.epa.gov/system/files/documents/2021-11/bmp-grassed-swales.pdf",
      },
    ],
  },
};
