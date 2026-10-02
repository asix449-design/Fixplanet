import type { SpeciesCopy } from '../data/wildlife';
import { cite } from '../data/sources';

const condorSpecies =
  'https://www.fws.gov/species/california-condor-gymnogyps-californianus';
const condorProgram = 'https://www.fws.gov/program/california-condor-recovery';
const condorPdf =
  'https://www.fws.gov/sites/default/files/documents/2026-02/2025-california-condor-population-status_508-compliant.pdf';
const craneSpecies = 'https://www.fws.gov/species/whooping-crane-grus-americana';
const cranePress =
  'https://www.fws.gov/press-release/2025-06/2025-wintering-whooping-crane-count';
const cranePdf =
  'https://www.fws.gov/sites/default/files/documents/2026-03/2024-2025-whcr-recovery-activities-report-w-appendices.pdf';
const puffinSheet =
  'https://datazone.birdlife.org/species/factsheet/atlantic-puffin-fratercula-arctica';
const puffinNews =
  'https://www.birdlife.org/news/2022/04/06/seabird-of-the-month-atlantic-puffin-fratercula-arctica/';
const puffinPdf =
  'https://www.unep-aewa.org/sites/default/files/document/aewa_mop8_inf_16_guidance_atlantic_puffin.pdf';
const penguinSheet =
  'https://datazone.birdlife.org/species/factsheet/african-penguin-spheniscus-demersus';
const penguinNews =
  'https://www.birdlife.org/news/2024/11/20/african-penguin-on-the-brink-of-extinction/';
const penguinZa = 'https://www.birdlife.org.za/red-list/african-penguin/';
const sanccob = 'https://sanccob.co.za/about-sanccob/';
const albatrossPdf = 'https://www.acap.aq/resources/acap-species/304-wandering-albatross/file';
const albatrossHub = 'https://www.acap.aq/resources/acap-species';
const albatrossSheet =
  'https://datazone.birdlife.org/species/factsheet/snowy-albatross-diomedea-exulans';
const cc25 = 'https://creativecommons.org/licenses/by-sa/2.5/';
const cc30 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const cc40 = 'https://creativecommons.org/licenses/by-sa/4.0/';

export const birdsLv: Record<string, SpeciesCopy> = {
  'california-condor': {
    commonName: 'Kalifornijas kondors',
    tag: 'Atjaunošana · Ziemeļamerikas rietumi',
    statusPill: 'Atjaunošana',
    hook: 'Lielākais sauszemes putns Ziemeļamerikā. 1982. gadā palika tikai 23; vaislošana nebrīvē un izlaišana ir palīdzējusi sugai atgūties, bet savvaļā kondori joprojām iet bojā no svina saindēšanās.',
    imageAlt:
      'Kalifornijas kondors lidojumā virs Bitter Creek nacionālā savvaļas dzīvnieku patvēruma Kalifornijā uz skaidras zilas debess fona.',
    caption:
      'Kalifornijas kondors lidojumā virs Bitter Creek nacionālā savvaļas dzīvnieku patvēruma Kalifornijā uz skaidras zilas debess fona.',
    photoCredit:
      'Foto: ASV Zivju un savvaļas dzīvnieku dienests, Klusā okeāna dienvidrietumu reģions, caur Vikikrātuvi, publiskais domēns.',
    filePageLabel: 'Faila lapa',
    gridSource: cite('ASV Zivju un savvaļas dzīvnieku dienests, Kalifornijas kondors', condorSpecies),
    what: 'Kalifornijas kondors (Gymnogyps californianus) ir lielākais sauszemes putns Ziemeļamerikā. Tā spārnu platums ir aptuveni 2,9 m (9,5 pēdas), bet pieaugušais putns ir no 0,9 līdz 1,1 m (no 3 līdz 3,5 pēdām) augsts un sver no 8 līdz 11 kg (no 17 līdz 25 mārciņām). Kondori barojas ar maitu, piemēram, ar briežu, govju, vaļu un roņu līķiem, un atrod to ar redzi vai sekojot citiem maitēdājiem.',
    range:
      'Brīvi lidojoši kondori dzīvo četros apgabalos: Arizonā un Jūtā, Kalifornijā, Amerikas Savienoto Valstu Klusā okeāna ziemeļrietumos un Meksikas Lejaskalifornijā. No 392 savvaļas putniem 2025. gada beigās 98 dzīvoja Arizonā un Jūtā, 216 Kalifornijā, 25 Klusā okeāna ziemeļrietumos un 53 Lejaskalifornijā. Klusā okeāna ziemeļrietumu grupa tiek uzskatīta par eksperimentālu. Kondori nakšņo uz lieliem kokiem, sausokņiem, klinšu izcilņiem un klintīm, bet ligzdo alās un stāvu klinšaino nogāžu dzegās vai vecu skujkoku dobumos un nolūzušās galotnēs. Tie barojas virs atklātām pļavām, ozolu savannu pakājēm un pludmalēm blakus piekrastes kalniem un dienā var nolidot līdz 400 km (250 jūdžu).',
    story:
      '1982. gadā visā pasaulē bija palikuši tikai 23 kondori, un līdz 1987. gadam visi savvaļas kondori tika ņemti nebrīvē audzēšanas programmā. Sugu federālā valdība iekļāva apdraudēto sugu sarakstā 1967. gadā. Kopš 1992. gada ASV Zivju un savvaļas dzīvnieku dienests izlaiž savvaļā nebrīvē audzētus kondorus. 2004. gadā savvaļā pirmo reizi sekmīgi izšķīlās cālis, bet 2008. gadā savvaļā pirmo reizi lidoja vairāk kondoru, nekā dzīvoja nebrīvē. Svins no izlietotās munīcijas joprojām ir galvenais putnu bojāejas cēlonis savvaļā: no 1992. līdz 2025. gadam ir apstiprināta 161 brīvi lidojoša kondora nāve no svina saindēšanās.',
    when: '2025. gada 31. decembrī pasaulē bija 607 kondori (pirms gada 570): 392 savvaļā un 215 nebrīvē. 1996. gada atjaunošanas plāns izvirza mērķi izveidot divas savvaļas, ģeogrāfiski atdalītas, pašpietiekamas populācijas, katrā ne mazāk kā 150 putnu un 15 vaislas pāru, kā arī trešo populāciju nebrīvē.',
    humanRole:
      'Kalifornijas kondora atjaunošanas programmu vada tas pats dienests kopā ar partneriem, to vidū štatu iestādēm, Meksikas valdību, Yurok cilti, zooloģiskajiem dārziem un bezpeļņas organizācijām. Tie audzē putnus, izlaiž tos un uzrauga dabā. Medniekus un lopkopjus aicina lietot munīciju bez svina, jo svina lauskas dzīvnieku līķos saindē kondorus, kas tos ēd.',
    sources: '',
    sourcesList: [
      cite(
        'ASV Zivju un savvaļas dzīvnieku dienests: Kalifornijas kondors, Gymnogyps californianus (U.S. Fish and Wildlife Service: California Condor)',
        condorSpecies,
      ),
      cite(
        'ASV Zivju un savvaļas dzīvnieku dienests: Kalifornijas kondora atjaunošanas programma (U.S. Fish and Wildlife Service: California Condor Recovery Program)',
        condorProgram,
      ),
      cite(
        'ASV Zivju un savvaļas dzīvnieku dienests: Kalifornijas kondora atjaunošanas programmas 2025. gada populācijas statuss, dokuments (U.S. Fish and Wildlife Service: California Condor Recovery Program 2025 Annual Population Status)',
        condorPdf,
      ),
    ],
  },
  'whooping-crane': {
    commonName: 'Amerikāņu dzērve',
    tag: 'Atjaunošana · no Kanādas līdz Teksasai',
    statusPill: 'Atjaunošana',
    hook: 'Augstākais putns Ziemeļamerikā. 1941. gadā palika 16; vienīgais savvaļas bars, kas pats sevi uztur, tagad tiek lēsts 557 putnu apmērā un joprojām migrē starp Kanādas ziemeļiem un Teksasas piekrasti.',
    imageAlt:
      'Amerikāņu dzērve lidojumā virs Teksasas: balts ķermenis, melni spārnu gali un sarkana galvas virsa uz bālu debesu fona.',
    caption:
      'Amerikāņu dzērve lidojumā virs Teksasas: balts ķermenis, melni spārnu gali un sarkana galvas virsa uz bālu debesu fona.',
    photoCredit:
      'Foto: Džons Nols, ASV Lauksaimniecības departaments, caur Vikikrātuvi, publiskais domēns.',
    filePageLabel: 'Faila lapa',
    gridSource: cite(
      'ASV Zivju un savvaļas dzīvnieku dienests, 2025. gada ziemas amerikāņu dzērvju uzskaite',
      cranePress,
    ),
    what: 'Amerikāņu dzērve (Grus americana) ir augstākais putns Ziemeļamerikā. Tās apspalvojums ir gandrīz pilnībā sniegbalts, spārnu gali melni, galvas virsa sarkana, bet uz vaigiem ir retas melnas spalvas. Pieaugušais putns ir apmēram 1,5 m (5 pēdas) augsts, tā spārnu platums pārsniedz 2,1 m (7 pēdas), bet svars ir no 6,0 līdz 7,8 kg (no 13,2 līdz 17,2 mārciņām). Nosaukums, iespējams, cēlies no skaļā vienskaņas kliedziena, ko putni atkārto, kad ir satraukti.',
    range:
      'Vienīgā saglabājusies savvaļas pašpietiekamā populācija, Aransas un Wood Buffalo populācija, ligzdo Wood Buffalo nacionālajā parkā un ap to Kanādas provincēs Albertā un Ziemeļrietumu teritorijās. Katru gadu tā nolido vairāk nekā 4000 km (2500 jūdžu) pāri Kanādas prērijām un ASV Lielajiem līdzenumiem līdz Teksasas vidusdaļas piekrastei, kur ziemo Aransas nacionālajā savvaļas dzīvnieku patvērumā un tā tuvumā. Reintrodukcijas bari dzīvo Viskonsinā un Luiziānā, un Floridā pārtrauktā reintrodukcijas programma joprojām tur putnus.',
    story:
      'Medības un prēriju pārvēršana lauksaimniecības zemēs sašaurināja vēsturisko populāciju no vairāk nekā 10 000 putniem līdz tikai 16 1941. gadā: 14 pieaugušiem un 2 jaunajiem. Stingra tiesiskā aizsardzība, dzīvotņu saglabāšana, audzēšana nebrīvē un Kanādas un ASV sadarbība atjaunoja Aransas un Wood Buffalo populāciju, kas ilgtermiņā aug aptuveni par 4 procentiem gadā. 2024. un 2025. gada ziemā ASV Zivju un savvaļas dzīvnieku dienesta uzskaite lēsa skaitu 557 amerikāņu dzērves: tas ir rekords un pirmais novērtējums virs 550.',
    when: 'Amerikāņu dzērve joprojām ir iekļauta apdraudēto sugu sarakstos abās valstīs. 2025. gada janvārī reintrodukcijas baros bija 149 dzērves, gadu agrāk 162. Savvaļā izaugušie jaunie putni šiem bariem pievienojas lēni, tāpēc to skaits ir atkarīgs no jauniem izlaidumiem, un pieaugušo putnu mirstība tur ir augstāka nekā Aransas un Wood Buffalo populācijā. Draudi joprojām ir mitrāju nosusināšana, ar klimata pārmaiņām saistīti sausumi, kā arī vēja parki un elektrolīnijas migrācijas ceļā.',
    humanRole:
      'Abu valstu iestādes un to partneri skaita putnus, uzrauga ligzdas, aizsargā dzīvotnes un audzē dzērves nebrīvē, lai izlaistu tās reintrodukcijas baros. Uzskaites Teksasas piekrastē un ligzdošanas vietās Kanādā rāda, kā savvaļas populācija mainās no gada uz gadu.',
    sources: '',
    sourcesList: [
      cite(
        'ASV Zivju un savvaļas dzīvnieku dienests: amerikāņu dzērve, Grus americana (U.S. Fish and Wildlife Service: Whooping Crane)',
        craneSpecies,
      ),
      cite(
        'ASV Zivju un savvaļas dzīvnieku dienests: 2025. gada ziemas amerikāņu dzērvju uzskaite, paziņojums presei (U.S. Fish and Wildlife Service: 2025 Wintering Whooping Crane Count)',
        cranePress,
      ),
      cite(
        'ASV Zivju un savvaļas dzīvnieku dienests un Kanādas Vides un klimata pārmaiņu ministrija: amerikāņu dzērves stāvoklis, no 2024. gada ligzdošanas sezonas līdz 2025. gada pavasara migrācijai, dokuments, 2026. gada februāris (U.S. Fish and Wildlife Service and Environment and Climate Change Canada: Whooping Crane Status, 2024 Breeding Season to 2025 Spring Migration)',
        cranePdf,
      ),
    ],
  },
  'atlantic-puffin': {
    commonName: 'Atlantijas lunis',
    tag: 'Jūras putns · Atlantijas okeāna ziemeļi',
    statusPill: 'Ievainojams',
    hook: 'Neliels jūras putns aukstajā Atlantijas okeāna ziemeļu daļā. Palikuši miljoniem putnu, bet Eiropā to skaits pēc aplēsēm 50 gados samazinājies par 68 procentiem jūru sasilšanas un zivju krājumu izmaiņu dēļ.',
    imageAlt: 'Atlantijas lunis profilā: oranžs, dzeltens un zilpelēks knābis un balta seja.',
    caption: 'Atlantijas lunis profilā: oranžs, dzeltens un zilpelēks knābis un balta seja.',
    photoCredit: 'Foto: Andreas Trepte, caur Vikikrātuvi, licence',
    licenseLabel: 'Creative Commons Atsauce, tādi paši noteikumi 2.5',
    licenseUrl: cc25,
    filePageLabel: 'Faila lapa',
    gridSource: cite('BirdLife International, Atlantijas lunis', puffinNews),
    what: 'Atlantijas lunis (Fratercula arctica) ir jūras putns, kas dzīvo aukstākos Atlantijas okeāna ziemeļu ūdeņos, ar spārnu platumu no 47 līdz 63 cm. Tā latīniskais nosaukums nozīmē „ziemeļu mazais brālis”. Tas ligzdo uz zālainām stāvu jūras klinšu nogāzēm, alās, kas izraktas zemē vai starp akmeņiem, un dēj vienu olu. Medījot lunis var palikt zem ūdens līdz vienai minūtei un nirt līdz 40 m dziļumam. Vienā niršanas reizē tas var turēt knābī vairākas mazas zivis, un vidējais loms vienā lidojumā ir apmēram 10 zivis.',
    range:
      'Luņi ligzdo galvenokārt Eiropā: Bretaņas piekrastē Francijā, Īrijā, Apvienotajā Karalistē, Islandē, Grenlandē, Norvēģijā, Fēru salās un Krievijas ziemeļos. Islandē mīt aptuveni 60 procenti populācijas. Prom no kolonijām tie no augusta līdz agram pavasarim uzturas atklātā okeānā tālu no krasta, un daži aizlido uz dienvidiem līdz pat Vidusjūrai. Tie medī 100 km vai vairāk no ligzdošanas vietas, bet, barojot cāļus, parasti tuvāk.',
    story:
      'Starptautiskā putnu aizsardzības organizāciju partnerība norāda pasaules skaitu no 7,4 līdz 8,24 milj. pieaugušo īpatņu un raksturo to kā samazinošos. Eiropā to skaits pēc aplēsēm pēdējos 50 gados samazinājies par 68 procentiem. Galvenie draudi ir klimata pārmaiņas, pārmērīga zveja, jūru piesārņojums un naftas noplūdes, invazīvi plēsēji, jūras enerģētikas objektu būve, nejauša nozveja zvejas rīkos un medības barībai. Sugas vadlīnijās klimata pārmaiņas nosauktas par galveno spiedienu uz populāciju, kuru jau novājina pārmērīga barības zivju izmantošana: smilšu zuša, brētliņu, siļķu un moivu.',
    when: 'Starptautiskā dabas aizsardzības savienība Atlantijas luni uzskata par ievainojamu sugu pasaulē un par apdraudētu sugu Eiropā. Skaits joprojām samazinās.',
    humanRole:
      'Vadlīnijas, kas sagatavotas Afrikas-Eirāzijas gājīgo ūdensputnu aizsardzības nolīgumam, iesaka zveju vadīt tā, lai putniem paliktu pietiekami daudz barības, aizsargāt barības zivju dzīvotnes, piemēram, smilšu sēkļus, un izveidot jaunus jūras aizsargājamos apgabalus, arī starptautiskos ūdeņos. Tās arī iesaka turpināt invazīvo plēsēju izskaušanu no ligzdošanas kolonijām, kur tas iespējams, un skaitīt kolonijas un krastā izskalotos putnus, lai sekotu pieaugušo izdzīvošanai.',
    sources: '',
    sourcesList: [
      cite(
        'BirdLife International DataZone: Atlantijas luņa sugas kartīte, Fratercula arctica (BirdLife International DataZone: Atlantic Puffin Fratercula arctica factsheet)',
        puffinSheet,
      ),
      cite(
        'BirdLife International: mēneša jūras putns, Atlantijas lunis, 2022. gada 6. aprīlis (BirdLife International: Seabird of the month, Atlantic Puffin)',
        puffinNews,
      ),
      cite(
        'Afrikas-Eirāzijas gājīgo ūdensputnu aizsardzības nolīgums: Atlantijas luņa aizsardzības vadlīnijas, dokuments, 2022. gada maijs (Agreement on the Conservation of African-Eurasian Migratory Waterbirds: Species Conservation Guidance for the Atlantic Puffin)',
        puffinPdf,
      ),
    ],
  },
  'african-penguin': {
    commonName: 'Āfrikas pingvīns',
    tag: 'Kritiski apdraudēts · Āfrikas dienvidi',
    statusPill: 'Kritiski apdraudēts',
    hook: 'Neliels pingvīns Dienvidāfrikas un Namībijas piekrastē. Savvaļā palikuši mazāk nekā 32 000 putnu, un 2024. gada novembrī tā statuss tika paaugstināts līdz kritiski apdraudētam.',
    imageAlt:
      'Āfrikas pingvīni atpūšas un staigā pa gaišām smiltīm starp granīta laukakmeņiem Boulders pludmalē Saimonstaunā, Dienvidāfrikā.',
    caption:
      'Āfrikas pingvīni atpūšas un staigā pa gaišām smiltīm starp granīta laukakmeņiem Boulders pludmalē Saimonstaunā, Dienvidāfrikā.',
    photoCredit: 'Foto: Krigore, caur Vikikrātuvi, licence',
    licenseLabel: 'Creative Commons Atsauce, tādi paši noteikumi 4.0',
    licenseUrl: cc40,
    filePageLabel: 'Faila lapa',
    gridSource: cite(
      'BirdLife International, Āfrikas pingvīns uz izmiršanas robežas',
      penguinNews,
    ),
    what: 'Āfrikas pingvīns (Spheniscus demersus) ir neliels, sabiedrisks pingvīns ar melnbaltu apspalvojumu, kas atgādina fraku. Tas dzīvo Āfrikas dienvidu piekrastē un barojas galvenokārt ar sardīnēm un anšoviem.',
    range:
      'Kādreiz šie putni dzīvoja miljoniem gar Dienvidāfrikas un Namībijas krastiem. Šodien kolonijas ir ievērojami mazākas. Apmeklētāji redz pingvīnus lielās grupās tādās vietās kā Boulders pludmale pie Saimonstaunas un Stony Point, bet galvenie draudi putniem ir jūrā, ārpus acīm.',
    story:
      'Zaudēti aptuveni 97 procenti populācijas. Savvaļā palikuši mazāk nekā 32 000 putnu, un perējošo pāru skaits pirmoreiz nokritās zem 10 000. Galvenais cēlonis ir barības trūkums: rūpnieciskā zveja ar riņķvadiem konkurē ar pingvīniem par sardīnēm un anšoviem, bet klimata pārmaiņas pārbīda vietas, kur šīs zivis uzturas. Jaunie pingvīni meklē barību arvien mazāk ražīgos apgabalos, jauno putnu izdzīvošana strauji kritusies, un pieaugušie, kā ziņots, pamet ligzdas. Savu artavu devis arī putnu gripas uzliesmojums, taču galvenie draudi joprojām ir zvejas un klimata pārmaiņu kopējā ietekme.',
    when: '2024. gada novembrī starptautiskā putnu aizsardzības organizāciju partnerība ziņoja, ka Starptautiskā dabas aizsardzības savienība Āfrikas pingvīnu no apdraudētas sugas kategorijas pārcēlusi uz kritiski apdraudētas sugas kategoriju. Partnerība brīdina, ka bez steidzamiem pasākumiem suga savvaļā var izzust mazāk nekā 4000 dienās.',
    humanRole:
      'Šīs partnerības dienvidāfrikāņu dalībnieks un Dienvidāfrikas piekrastes putnu aizsardzības fonds ir cēluši prasību tiesā pret Dienvidāfrikas ministru, kas atbild par zivsaimniecību un vidi. Tās vēlas, lai pašreizējās ūdeņu slēgšanas ap pingvīnu salām riņķvadu zvejai, ko tās dēvē par bioloģiski bezjēdzīgām, aizstātu ar zonām, kas aptver pingvīnu galvenās barošanās vietas pie sešām lielākajām kolonijām un tajā pašā laikā maz ietekmē zvejas nozari.',
    sources: '',
    sourcesList: [
      cite(
        'BirdLife International DataZone: Āfrikas pingvīna sugas kartīte, Spheniscus demersus (BirdLife International DataZone: African Penguin Spheniscus demersus factsheet)',
        penguinSheet,
      ),
      cite(
        'BirdLife International: Āfrikas pingvīns uz izmiršanas robežas, 2024. gada 20. novembris (BirdLife International: African Penguin on the Brink of Extinction)',
        penguinNews,
      ),
      cite(
        'BirdLife South Africa: Āfrikas pingvīns klasificēts kā kritiski apdraudēts, perējošo pāru skaits nokrities zem 10 000 (BirdLife South Africa: African Penguin newly classified as Critically Endangered as breeding pairs fall below 10,000)',
        penguinZa,
      ),
      cite(
        'Dienvidāfrikas piekrastes putnu aizsardzības fonds: par mums (Southern African Foundation for the Conservation of Coastal Birds: About us)',
        sanccob,
      ),
    ],
  },
  'wandering-albatross': {
    commonName: 'Klejojošais albatross',
    tag: 'Ievainojams · Dienvidu okeāns',
    statusPill: 'Ievainojams',
    hook: 'Milzīgs jūras putns, kas ligzdo uz dažām Dienvidu okeāna salām un vairojas tikai ik pēc diviem gadiem. Tā skaits ir samazinājies tur, kur ilgauklu zveja ir saistīta ar pieaugušo putnu zemāku izdzīvošanu.',
    imageAlt:
      'Klejojošais albatross lidojumā zemu virs tumši zilā ūdens uz austrumiem no Tasmana pussalas, Tasmānija, Austrālija.',
    caption:
      'Klejojošais albatross lidojumā zemu virs tumši zilā ūdens uz austrumiem no Tasmana pussalas, Tasmānija, Austrālija.',
    photoCredit: 'Foto: JJ Harrison, caur Vikikrātuvi, licence',
    licenseLabel: 'Creative Commons Atsauce, tādi paši noteikumi 3.0',
    licenseUrl: cc30,
    filePageLabel: 'Faila lapa',
    gridSource: cite(
      'Albatrosu un trulīšu aizsardzības nolīgums, klejojošā albatrosa novērtējums',
      albatrossPdf,
    ),
    what: 'Klejojošais albatross (Diomedea exulans), ko dažkārt dēvē par sniegaino albatrosu, ir ļoti liels Dienvidu okeāna jūras putns. Tas vairojas ik pēc diviem gadiem, un ligzdošanas cikls ir nedaudz garāks par gadu. Olas dēj apmēram piecu nedēļu laikā decembrī un janvārī, un cāļi izšķiļas galvenokārt martā pēc 78 un 79 dienu perēšanas. Dienviddžordžijā lielākā daļa cāļu pamet ligzdu decembrī pēc 278 dienām ligzdā.',
    range:
      'Klejojošie albatrosi ligzdo Francijas Krozē un Kergelēna salās, Dienvidāfrikai piederošajās Princa Edvarda salās (ieskaitot Marionas salu), Austrālijas Makvori salā un Dienviddžordžijā. Pēc 2007. gadā iesniegtajiem datiem tie ir aptuveni 8050 perējošu pāru gadā. Trīs Indijas okeāna salu grupas, Princa Edvarda, Krozē un Kergelēna, satur aptuveni 82 procentus pasaules populācijas, bet vienas pašas Princa Edvarda salas aptuveni 3580 pāru jeb 44 procentus. Makvori salā ir tikai no 5 līdz 10 pāru gadā. Visas ligzdošanas vietas ir likumīgi aizsargātas, un piekļuve tām ir ierobežota.',
    story:
      'Aptuveni 8050 pāru ir par 5 procentiem mazāk nekā 8500 pāru 1998. gadā, kas tika uzskatīti par atbilstošiem aptuveni 28 000 pieaugušo īpatņu un kopējam skaitam 55 000. Visas populācijas kādā brīdī pēdējos 25 gados ir samazinājušās, un Dienviddžordžijas populācija ir samazinājusies nepārtraukti. Pieaugušo putnu izdzīvošana Dienviddžordžijā ir zemākā no visām ligzdošanas vietām, 92,6 procenti, salīdzinot ar 94 procentiem no 1972. līdz 1985. gadam. Novērtējums šo kritumu saista ar ilgauklu zvejas attīstību, kas vērsta uz citām zivju sugām, izņemot tunci, 1990. gadu vidū un beigās. Krozē, Kergelēna un Princa Edvarda salu populācijas pēdējā laikā ir pieaugušas.',
    when: 'Starptautiskā dabas aizsardzības savienība klejojošo albatrosu uzskata par ievainojamu sugu kopš 2000. gada, un suga ir Albatrosu un trulīšu aizsardzības nolīguma 1. pielikumā. Šā nolīguma sugu lapā statuss joprojām norādīts kā ievainojams. Iepriekš minētie skaita dati ir jaunākie novērtējumā, kas balstās uz 2007. gadā iesniegtiem datiem.',
    humanRole:
      'Novērtējums aicina noskaidrot, kuras okeāna daļas pārklājas ar zveju tur, kur vēl nav efektīvu pasākumu pret nejaušu nozveju un novērotāju programmu. Trīs gadu satelītuzraudzības programma jauniem un nepieaugušiem putniem sākās 2007. gadā, lai parādītu, kur tie sastopas ar zvejas flotēm. Putni no Princa Edvarda salām un Krozē, piemēram, pārklājas ar intensīvu tunča ilgauklu zveju uz dienvidiem no Dienvidāfrikas, kur nejaušas nozvejas rādītāji ir augsti.',
    sources: '',
    sourcesList: [
      cite(
        'Albatrosu un trulīšu aizsardzības nolīgums: klejojošā albatrosa sugas novērtējums, Diomedea exulans, dokuments (Agreement on the Conservation of Albatrosses and Petrels: Wandering Albatross Diomedea exulans species assessment)',
        albatrossPdf,
      ),
      cite(
        'Albatrosu un trulīšu aizsardzības nolīgums: sugu novērtējumi (Agreement on the Conservation of Albatrosses and Petrels: ACAP species assessments)',
        albatrossHub,
      ),
      cite(
        'BirdLife International DataZone: sniegainā albatrosa sugas kartīte, Diomedea exulans (BirdLife International DataZone: Snowy Albatross Diomedea exulans factsheet)',
        albatrossSheet,
      ),
    ],
  },
};
