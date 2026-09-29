import type { CitiesDetailCopy, CitiesEncyclopediaSlug } from '../data/solutions-cities';
import type { SolutionCopy } from '../data/solutions';

const brtPdf =
  'https://itdp.org/wp-content/uploads/2024/03/ITDP_BRTSTANDARD_APR2024_SINGLE-compressed.pdf';
const walkPdf =
  'https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/12/improving-the-quality-of-walking-and-cycling-in-cities_2fd6b6ec/cdeb3fe8-en.pdf';
const roadPdf =
  'https://documents1.worldbank.org/curated/en/099031724120560318/pdf/P1766281e0163d01218640121bea8238a86.pdf';

export const grid: Record<CitiesEncyclopediaSlug, SolutionCopy> = {
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
};
