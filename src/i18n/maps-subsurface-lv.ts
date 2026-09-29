import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { realMapCredit } from './real-map-credits';

const heads = {
  what: 'Kas tas ir',
  why: 'Kāpēc tas ir svarīgi',
  how: 'Kā lasīt karti',
  limits: 'Ierobežojumi',
};

const mine = {
  operating: '#b2182b',
  proposed: '#0072b2',
  paused: '#8c8c8c',
  closed: '#e69f00',
};

const reserve = ['#fef0d9', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#990000', '#d9d9d9'];

const critical = ['#dadaeb', '#bcbddc', '#9e9ac8', '#6a51a3', '#3f007d', '#f4f3f0'];

const rare = ['#b2e2cc', '#66c2a4', '#238b45', '#00441b', '#f4f3f0'];

const lithium = ['#c6dbef', '#6baed6', '#2171b5', '#08306b', '#bdbdbd', '#f4f3f0'];

const eia = 'Amerikas Savienoto Valstu Enerģētikas informācijas pārvalde';
const usgs = 'Amerikas Savienoto Valstu Ģeoloģijas dienests';

export const lv: Record<string, MapCopy> = {
  'coal-mines': {
    title: 'Ogļu raktuves',
    cardMeta: 'Global Energy Monitor · apmēram 7 000 raktuvju · 2026. gada augusta izlaidums',
    hook: 'Darbojošās, plānotās un nesen slēgtās ogļu raktuves visā pasaulē, ar to statusu, īpašniekiem un ieguvi.',
    description:
      'Pasaules ogļu raktuvju reģistrs, ko uztur pētniecības organizācija Global Energy Monitor, apraksta ogļu raktuves visā pasaulē. Tā lapā norādītas apmēram 7 000 raktuves 70 valstīs un apmēram 5 300 raktuvju īpašnieki. Pēc 2025. gada datiem par katru raktuvi ogļu ieguve darbojošās raktuvēs sasniedza apmēram 9,1 miljardu tonnu. 2026. gada augusta izlaidums ir otrā versija datu kopai, kas pirmo reizi publicēta 2026. gada maijā; dati tiek atjaunināti katra gada otrajā ceturksnī.',
    whyOnShelf:
      'Ogļu raktuves nosaka ieguvi gadu desmitiem uz priekšu. Global Energy Monitor saskaita 835 plānotas jaunas raktuves ar kopējo jaudu 2 521 miljons tonnu gadā, apmēram par 11% vairāk nekā 2024. gadā. No šīs jaudas 781 miljons tonnu gadā jau tiek būvēts vai darbojas izmēģinājuma režīmā. Plānotās raktuves vien varētu izmest 16,8 miljonus tonnu metāna gadā, papildus oglekļa dioksīdam, kas rodas, sadedzinot ogles.',
    howToRead:
      'Katrs punkts ir raktuve, un krāsa rāda tās statusu: darbojas, plānota, atlikta vai iekonservēta, slēgta vai atcelta. Reģistrā ir darbojošās, neaktīvās un plānotās raktuves ar jaudu no 1 miljona tonnu gadā, kā arī kopš 2015. gada slēgtās raktuves; Ķīnā slieksnis ir 0,45 miljoni tonnu gadā. Ķīnai, Indijai, Austrālijai, Krievijai un Dienvidāfrikai pieder vairāk nekā 90% plānotās jaudas, un Ķīnai vien 1 321 miljons tonnu gadā, vairāk nekā visai pārējai pasaulei kopā. Enerģētiskās ogles elektrostacijām veido apmēram 70% plānotās jaudas; lielākā daļa pārējā ir ogles tērauda ražošanai.',
    caveats:
      'Mazās raktuves reģistrā parādās tikai tad, ja pētnieki ir paspējuši tās pievienot. Ieguve pēc iespējas norādīta tirgojamām oglēm, bet, ja jaunāku ieguves datu nav, tās vietā izmantota raktuves jauda. Ja raktuves precīza atrašanās vieta nav zināma, punkts atrodas tuvākajā aptuvenajā vietā. Plānota raktuve var arī nekad netikt atvērta.',
    licenseNote: realMapCredit('lv', 'coal-mines') ?? '',
    imageAlt:
      'Pasaules karte ar ogļu raktuvēm kā krāsainiem punktiem uz gaišas zemes: sarkanie darbojas, zilie ir plānoti, pelēkie atlikti vai iekonservēti, oranžie slēgti vai atcelti',
    caption: 'Ogļu raktuves pasaulē pēc statusa, 2026. gada augusta izlaidums.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Kartes leģenda',
        items: [
          { swatch: mine.operating, label: 'Sarkanā krāsa apzīmē darbojošās raktuves' },
          { swatch: mine.proposed, label: 'Zilā apzīmē plānotās' },
          { swatch: mine.paused, label: 'Pelēkā apzīmē atliktās vai iekonservētās' },
          { swatch: mine.closed, label: 'Oranžā apzīmē slēgtās vai atceltās' },
        ],
      },
    ],
    gridSource: cite(
      'Global Energy Monitor, Pasaules ogļu raktuvju reģistrs',
      'https://globalenergymonitor.org/projects/global-coal-mine-tracker',
    ),
    sources: [
      cite(
        'Global Energy Monitor: Pasaules ogļu raktuvju reģistrs (Global Coal Mine Tracker)',
        'https://globalenergymonitor.org/projects/global-coal-mine-tracker',
      ),
      cite(
        'Global Energy Monitor: Creative Commons publiskā licence „Atsauce 4.0 Starptautiskā” (Creative Commons Attribution 4.0 International Public License)',
        'https://globalenergymonitor.org/creative-commons-license',
      ),
    ],
  },
  'coal-reserves': {
    title: 'Ogļu rezerves',
    cardMeta: `${eia} · pierādītās rezerves · 2023`,
    hook: 'Cik daudz ogļu katra valsts pieskaita pierādītajām rezervēm, proti, ogles, ko zināmās atradnes var dot pie šodienas cenām un tehnoloģijām.',
    description:
      `${eia}, Amerikas Savienoto Valstu Enerģētikas ministrijas statistikas iestāde, publicē starptautiskus enerģētikas datus, tostarp katras valsts pierādītās ogļu rezerves tonnās. Our World in Data publicē šo datu rindu par 2008.–2023. gadu, pēdējo reizi atjauninātu 2026. gada 30. jūnijā. Pierādītās rezerves ir daudzumi, ko saskaņā ar ģeoloģisko un inženiertehnisko informāciju nākotnē var iegūt no zināmām atradnēm pie esošajiem ekonomiskajiem un ekspluatācijas apstākļiem.`,
    whyOnShelf:
      'Rezerves rāda, cik daudz ogļu valsts vēl var iegūt un sadedzināt. 2023. gadā lielākās pierādītās rezerves bija Amerikas Savienotajās Valstīs (apmēram 248 miljardi tonnu), Krievijā (apmēram 162 miljardi), Ķīnā (apmēram 157 miljardi), Austrālijā (apmēram 150 miljardi) un Indijā (apmēram 128 miljardi). Kopā šīm piecām valstīm piederēja apmēram 72% no pasaules kopsummas, kas bija apmēram 1 166 miljardi tonnu.',
    howToRead:
      'Katra valsts ir iekrāsota pēc tās pierādītajām ogļu rezervēm pēdējā pieejamajā gadā, tonnās. Jo tumšāka krāsa, jo lielākas rezerves. Valstīm, kas nav ziņojušas par rezervēm, ir gaišākais tonis.',
    caveats:
      'Valstis pašas novērtē savas rezerves, tāpēc novērtējumu kvalitāte un pārskatīšanas biežums atšķiras. Rezervju skaitļi mainās līdz ar cenām, ieguves tehnoloģijām un valstu ziņošanas noteikumiem. Ogļu resursi, kuros ieskaitītas arī atradnes, kuru izstrāde vēl nav izdevīga, ir lielāki par pierādītajām rezervēm.',
    licenseNote: realMapCredit('lv', 'coal-reserves') ?? '',
    imageAlt:
      'Pasaules karte ar pierādītajām ogļu rezervēm 2023. gadā: gaiši bēšs mazām rezervēm vai bez tām, tumši sarkans lielākajām, pelēks tur, kur datu nav',
    caption: 'Pierādītās ogļu rezerves pa valstīm, 2023. gads.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Pierādītās ogļu rezerves',
        items: [
          { swatch: reserve[0], label: 'Mazāk par 2 miljardiem tonnu vai rezervju nav' },
          { swatch: reserve[1], label: 'No 2 līdz 5 miljardiem' },
          { swatch: reserve[2], label: 'No 5 līdz 10 miljardiem' },
          { swatch: reserve[3], label: 'No 10 līdz 20 miljardiem' },
          { swatch: reserve[4], label: 'No 20 līdz 50 miljardiem' },
          { swatch: reserve[5], label: 'No 50 līdz 100 miljardiem' },
          { swatch: reserve[6], label: '100 miljardi tonnu un vairāk' },
          { swatch: reserve[7], label: 'Pelēks: nav datu' },
        ],
      },
    ],
    gridSource: cite(
      `${eia}, ar Our World in Data starpniecību`,
      'https://ourworldindata.org/grapher/fossil-fuels?fuel=coal&metric=reserves&per_capita=total',
    ),
    sources: [
      cite(
        `Our World in Data: ogļu rezerves pēc ${eia} datiem (Coal reserves)`,
        'https://ourworldindata.org/grapher/fossil-fuels?fuel=coal&metric=reserves&per_capita=total',
      ),
      cite(
        `${eia}: starptautiskie enerģētikas dati, ogļu un koksa rezerves (International energy data: coal and coke reserves)`,
        'https://www.eia.gov/international/data/world/coal-and-coke/coal-and-coke-reserves',
      ),
      cite(
        `${eia}: autortiesības un atkalizmantošana (Copyrights and reuse)`,
        'https://www.eia.gov/about/copyrights_reuse.php',
      ),
    ],
  },
  'critical-mineral-production': {
    title: 'Kritiski svarīgo minerālu ieguve',
    cardMeta: `${usgs} · ieguve un pārstrāde · 2023`,
    hook: 'Valstis, kas 2023. gadā deva vismaz 5% no pasaules galveno minerālu produkcijas, raktuvēs un pārstrādes rūpnīcās.',
    description:
      `2025. gada augustā ${usgs}, Amerikas Savienoto Valstu Iekšlietu departamenta zinātnes iestāde, publicēja pasaules kartes par kritiski svarīgo minerālu ieguvi 2023. gadā. Tajās parādīta katra valsts, kas deva 5% vai vairāk no kāda minerāla pasaules produkcijas, vispirms ieguves posmā, 29 minerāliem, un pēc tam pārstrādes posmā, 18 minerāliem, kur rūdas attīra un izkausē oksīdos, metālos vai sakausējumos. Produkcijas skaitļi ņemti no dienesta gadagrāmatas „Minerālo izejvielu pārskats 2025”.`,
    whyOnShelf:
      'Dominē dažas valstis. Ķīna ieguva vismaz 5% no pasaules apjoma 18 no 29 minerāliem, tai seko Dienvidāfrika (10), Austrālija (8), Krievija (8), Amerikas Savienotās Valstis (8) un Brazīlija (7). Pārstrādē vadībā ir Ķīna ar 14 no 18, tai seko Japāna (7), Krievija (6), Kanāda (4) un Korejas Republika (4). Ķīnas daļa aug no raktuves līdz rūpnīcai: kobaltam tā pieaug no 1% ieguves līdz 80% pārstrādes, alumīnijam no 21% līdz 59%.',
    howToRead:
      'Karte rāda ieguves posmu. Jo tumšāka valsts, jo vairāk minerālu, kuriem tā ieguva vismaz 5% no pasaules apjoma. Tirdzniecība rāda, kurp rūda nonāk tālāk: 2023. gadā Austrālija deva 33% no pasaules metālu rūdu un koncentrātu eksporta pēc vērtības, tai sekoja Brazīlija (11%), Čīle un Peru (katra 9%) un Dienvidāfrika (5%), bet Ķīna iepirka 64% no importa.',
    caveats:
      'Dažus retos metālus, piemēram, galliju, germāniju un indiju, iegūst kā blakusproduktus, pārstrādājot vara un svina-cinka rūdas, tāpēc tie parādās tikai pārstrādes posmā. Daļa 2023. gada pārstrādes datu novērtēta pēc iepriekšējo gadu datiem. Gaiša valsts var iegūt minerālu mazākos apjomos. Kartes sagatavotas, kad oficiālajā Amerikas Savienoto Valstu kritiski svarīgo minerālu sarakstā, kas pieņemts 2022. gadā, bija 50 pozīcijas; galīgajā 2025. gada sarakstā, kas publicēts 2025. gada 7. novembrī, ir 60. Kartēs iekļauts arī kadmijs, varš, zelts un molibdēns.',
    licenseNote: realMapCredit('lv', 'critical-mineral-production') ?? '',
    imageAlt:
      'Pasaules karte ar valstīm, kas 2023. gadā ieguva vismaz 5% no izvēlēto minerālu pasaules apjoma: gaiši ceriņkrāsas vienam minerālam un tumši violetas lielākajam skaitam',
    caption:
      'Valstis, kas ieguva vismaz 5% no pasaules apjoma vienam vai vairākiem izvēlētajiem minerāliem, 2023. gads.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Minerālu skaits, kuriem valsts ieguva vismaz 5% no pasaules apjoma',
        items: [
          { swatch: critical[0], label: '1' },
          { swatch: critical[1], label: 'No 2 līdz 3' },
          { swatch: critical[2], label: 'No 4 līdz 5' },
          { swatch: critical[3], label: 'No 6 līdz 10' },
          { swatch: critical[4], label: 'No 11 līdz 18' },
          { swatch: critical[5], label: 'Gaiši pelēks: neviena' },
        ],
      },
    ],
    gridSource: cite(
      `${usgs}, pasaules kartes par kritiski svarīgo minerālu ieguvi 2023. gadā`,
      'https://pubs.usgs.gov/publication/fs20253038',
    ),
    sources: [
      cite(
        `${usgs}: pasaules kartes par kritiski svarīgo minerālu ieguvi 2023. gadā, informatīvā lapa, 2025. gada augusts (Global Maps of Critical Mineral Production in 2023, Fact Sheet 2025–3038)`,
        'https://pubs.usgs.gov/publication/fs20253038',
      ),
      cite(
        `${usgs}: „Minerālo izejvielu pārskats 2025” (Mineral Commodity Summaries 2025)`,
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        'Amerikas Savienoto Valstu Federālais reģistrs: galīgais 2025. gada kritiski svarīgo minerālu saraksts, 2025. gada 7. novembris (Federal Register: Final 2025 List of Critical Minerals)',
        'https://www.federalregister.gov/documents/2025/11/07/2025-19813/final-2025-list-of-critical-minerals',
      ),
    ],
  },
  'rare-earths': {
    title: 'Retzemju metāli',
    cardMeta: `${usgs} · ieguve un rezerves · 2024`,
    hook: 'Kur iegūst retzemju metālus, no kuriem ražo pastāvīgos magnētus un katalizatorus, un cik lielas ir zināmās rezerves.',
    description:
      `Retzemju metālu nodaļa izdevumā „Minerālo izejvielu pārskats 2025”, ${usgs} gadagrāmatā, lēš pasaules ieguvi apmēram 376 000 tonnu retzemju oksīdu ekvivalentā 2023. gadā un apmēram 390 000 tonnu 2024. gadā. Retzemju oksīdu ekvivalents ir kopīga mērvienība, lai saskaitītu dažādus retzemju elementus. Pasaules rezerves pārsniedz 90 miljonus tonnu. Uzskaitē ietilpst lantanīdi un itrijs, bet lielākā daļa skandija nav iekļauta.`,
    whyOnShelf:
      'Retzemju metālus izmanto pastāvīgajos magnētos, katalizatoros, keramikā un stiklā, sakausējumos un pulēšanas pulveros. Ķīnas ieguves kvota pieauga no 255 000 līdz 270 000 tonnām, apmēram 69% no pasaules kopapjoma 2024. gadā, un Ķīnai ir arī lielākās rezerves, 44 miljoni tonnu. Amerikas Savienotās Valstis 2024. gadā saražoja apmēram 45 000 tonnu minerālu koncentrātos, taču apmēram 80% izmantoto retzemju savienojumu un metālu importēja. No 2020. līdz 2023. gadam 70% šī importa nāca no Ķīnas, 13% no Malaizijas, 6% no Japānas un 5% no Igaunijas.',
    howToRead:
      'Karte rāda aplēsto ieguvi 2024. gadā, tonnās retzemju oksīdu ekvivalentā. Jo tumšāka krāsa, jo lielāka ieguve. Aiz Ķīnas lielākās ražotājas bija Amerikas Savienotās Valstis, Mjanma (31 000 tonnu), kā arī Austrālija, Nigērija un Taizeme (katra 13 000 tonnu). Brazīlijai ir otrās lielākās rezerves, 21 miljons tonnu, bet 2024. gadā tā ieguva tikai 20 tonnas.',
    caveats:
      'Ķīnas skaitlis ir oficiālā ieguves kvota, tāpēc nedokumentētā ieguve tajā neparādās. Austrālijas, Mjanmas, Madagaskaras, Malaizijas, Nigērijas, Taizemes un Vjetnamas ieguve aplēsta pēc Ķīnas importa datiem. Amerikas Savienotās Valstis no baterijām, pastāvīgajiem magnētiem un luminiscences spuldzēm pārstrādē atguva tikai ierobežotu daudzumu retzemju metālu.',
    licenseNote: realMapCredit('lv', 'rare-earths') ?? '',
    imageAlt:
      'Pasaules karte ar aplēsto retzemju metālu ieguvi 2024. gadā: gaiši zaļas valstis mazai ieguvei un tumši zaļas lielākajai, Ķīna vistumšākā',
    caption: 'Aplēstā retzemju metālu ieguve pa valstīm, 2024. gads.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Ieguve 2024. gadā, tonnas retzemju oksīdu ekvivalentā',
        items: [
          { swatch: rare[0], label: 'No 1 līdz 999' },
          { swatch: rare[1], label: 'No 1 000 līdz 9 999' },
          { swatch: rare[2], label: 'No 10 000 līdz 49 999' },
          { swatch: rare[3], label: '50 000 un vairāk' },
          { swatch: rare[4], label: 'Gaiši pelēks: ieguve nav ziņota' },
        ],
      },
    ],
    gridSource: cite(
      `${usgs}, retzemju metālu statistika un informācija`,
      'https://www.usgs.gov/centers/national-minerals-information-center/rare-earths-statistics-and-information',
    ),
    sources: [
      cite(
        `${usgs}: retzemju metālu statistika un informācija (Rare Earths Statistics and Information)`,
        'https://www.usgs.gov/centers/national-minerals-information-center/rare-earths-statistics-and-information',
      ),
      cite(
        `${usgs}: „Minerālo izejvielu pārskats 2025”, retzemju metālu nodaļa (Mineral Commodity Summaries 2025, Rare Earths)`,
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        `${usgs}: izdevuma „Minerālo izejvielu pārskats 2025” datu kopa (Mineral Commodity Summaries 2025 Data Release)`,
        'https://www.sciencebase.gov/catalog/item/677eaf95d34e760b392c4970',
      ),
    ],
  },
  lithium: {
    title: 'Litijs',
    cardMeta: `${usgs} · ieguve un rezerves · 2024`,
    hook: 'Kur iegūst litiju, vieglo metālu uzlādējamās baterijās, un cik lielas ir zināmās rezerves.',
    description:
      `Litija nodaļa izdevumā „Minerālo izejvielu pārskats 2025”, ${usgs} gadagrāmatā, lēš, ka pasaules litija ražošana, neskaitot Amerikas Savienotās Valstis, 2024. gadā pieauga par 18% līdz apmēram 240 000 tonnu litija satura, no 204 000 tonnām 2023. gadā. Pasaules rezerves ir apmēram 30 miljoni tonnu, bet izmērītie un norādītie resursi kopā apmēram 115 miljoni tonnu.`,
    whyOnShelf:
      'Baterijām, pēc aplēsēm, tika 87% no pasaules litija patēriņa: elektroauto, pārnēsājamai elektronikai, elektroinstrumentiem un enerģijas uzkrāšanai tīklos. Pasaules patēriņš 2024. gadā aplēsts 220 000 tonnu apmērā, par 29% vairāk nekā 2023. gadā.',
    howToRead:
      'Karte rāda aplēsto ieguvi 2024. gadā, tonnās litija satura. Jo tumšāka krāsa, jo lielāka ieguve. Vadībā bija Austrālija ar apmēram 88 000 tonnu, tai sekoja Čīle (49 000), Ķīna (41 000), Zimbabve (22 000) un Argentīna (18 000). Amerikas Savienoto Valstu ieguves dati ir slēpti, lai aizsargātu uzņēmumu datus. Lielākās rezerves ir Čīlei, 9,3 miljoni tonnu.',
    caveats:
      'Cenas stipri svārstās. Pēc augstajām cenām no 2021. gada līdz 2023. gada sākumam vidējā litija karbonāta cena Amerikas Savienotajās Valstīs fiksētas cenas līgumos 2024. gadā kritās līdz 14 000 dolāru par tonnu, par 66% zemāk nekā 2023. gadā. Resursu aplēses aug līdz ar izpēti, un rezervju skaitļus pārskata pēc uzņēmumu un valdību ziņojumiem.',
    licenseNote: realMapCredit('lv', 'lithium') ?? '',
    imageAlt:
      'Pasaules karte ar aplēsto litija ieguvi 2024. gadā: gaiši zilas valstis mazākai ieguvei un tumši zilas lielākajai, Amerikas Savienotās Valstis vidēji pelēkas',
    caption: 'Aplēstā litija ieguve pa valstīm, 2024. gads.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Ieguve 2024. gadā, tonnas litija satura',
        items: [
          { swatch: lithium[0], label: 'Mazāk par 5 000' },
          { swatch: lithium[1], label: 'No 5 000 līdz 19 999' },
          { swatch: lithium[2], label: 'No 20 000 līdz 49 999' },
          { swatch: lithium[3], label: '50 000 un vairāk' },
          { swatch: lithium[4], label: 'Vidēji pelēks: dati slēpti (Amerikas Savienotās Valstis)' },
          { swatch: lithium[5], label: 'Gaiši pelēks: ieguve nav ziņota' },
        ],
      },
    ],
    gridSource: cite(
      `${usgs}, litija statistika un informācija`,
      'https://www.usgs.gov/centers/national-minerals-information-center/lithium-statistics-and-information',
    ),
    sources: [
      cite(
        `${usgs}: litija statistika un informācija (Lithium Statistics and Information)`,
        'https://www.usgs.gov/centers/national-minerals-information-center/lithium-statistics-and-information',
      ),
      cite(
        `${usgs}: „Minerālo izejvielu pārskats 2025”, litija nodaļa (Mineral Commodity Summaries 2025, Lithium)`,
        'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf',
      ),
      cite(
        `${usgs}: izdevuma „Minerālo izejvielu pārskats 2025” datu kopa (Mineral Commodity Summaries 2025 Data Release)`,
        'https://www.sciencebase.gov/catalog/item/677eaf95d34e760b392c4970',
      ),
    ],
  },
};
