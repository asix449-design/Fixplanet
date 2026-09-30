import type { ForestEncyclopediaCopy, FigureCreditPart } from '../data/solutions-forests';
import type { SolutionCopy } from '../data/solutions';
import type { ForestPackSlug } from './solutions-forests-pack-en';

function credit(lead: string, licence: string, href: string, tail = ''): FigureCreditPart[] {
  return [{ text: lead }, { text: licence, href }, ...(tail ? [{ text: tail }] : [])];
}

const bysa2 = 'https://creativecommons.org/licenses/by-sa/2.0/';
const bysa3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const bysa4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const cc0 = 'https://creativecommons.org/publicdomain/zero/1.0/';
const commonsTimber =
  'https://commons.wikimedia.org/wiki/File:Timber_Stack,_Sinkside_Hill_Near_Trowupburn_-_geograph.org.uk_-_6552952.jpg';
const commonsBorneo = 'https://commons.wikimedia.org/wiki/File:Borneo_rainforest.jpg';
const commonsPlenter = 'https://commons.wikimedia.org/wiki/File:Plenterwald_April_2004.jpg';
const commonsApache = 'https://commons.wikimedia.org/wiki/File:White_Mountain_Apache_Arizona-105.jpg';
const commonsClt = 'https://commons.wikimedia.org/wiki/File:Brettsperrholzkonstruktion.jpg';

export const grid: Record<ForestPackSlug, SolutionCopy> = {
  'forest-certification': {
    problemTitle: 'Koksne un papīrs bez uzticama ceļa atpakaļ uz mežu',
    fixTitle: 'Mežu sertifikācija',
    problem: 'Koksne un papīrs bez uzticama ceļa atpakaļ uz mežu',
    fix: 'Neatkarīgi auditori pārbauda, kā mežs tiek apsaimniekots, un marķējums pavada koksni cauri pārstrādei līdz gatavajam izstrādājumam. Meža uzraudzības padome un Meža sertifikācijas sistēmu novērtēšanas programma ir divas starptautiskas sistēmas, kas to dara, un katra publicē savus datus par sertificētajiem mežiem.',
    imageAlt: 'Nozāģēti baļķi, kas sakrauti pakalnos pie Trowupburn Nortumberlendā, Anglijā.',
    sourceLabel: 'Meža uzraudzības padome',
  },
  'redd-plus': {
    problemTitle: 'Oglekļa emisijas no izcirstiem un degradētiem mežiem',
    fixTitle: 'REDD+ maksājumi',
    problem: 'Oglekļa emisijas no izcirstiem un degradētiem mežiem',
    fix: 'Emisiju samazināšanas no atmežošanas un mežu degradācijas (REDD+) shēmā valsts saņem samaksu pēc tam, kad ar pārbaudītiem mērījumiem parāda, ka tās meži ir izmetuši mazāk oglekļa. Pasaules Bankas Meža oglekļa partnerības fonds maksā par šādiem rezultātiem. 2024. gadā tā maksājumi par rezultātiem pieauga no 53,2 miljoniem līdz 164,5 miljoniem ASV dolāru.',
    imageAlt: 'Lietus mežs Kinabalu nacionālajā parkā Borneo salā.',
    sourceLabel: 'Meža oglekļa partnerības fonds',
  },
  'closer-to-nature-forestry': {
    problemTitle: 'Meži pēc kailcirtēm, kas zaudē dzīvotņu daudzveidību',
    fixTitle: 'Dabai tuvāka mežsaimniecība',
    problem: 'Meži pēc kailcirtēm, kas zaudē dzīvotņu daudzveidību',
    fix: 'Dabai tuvāka mežsaimniecība iegūst kokmateriālus, atdarinot to, kā mežs atjaunojas pats: jaukti sugu un vecuma sastāvi, nelielas lauces lielu kailciršu vietā un saudzīga ciršana, kas atstāj vietā dzīvotnes, augsni un meža mikroklimatu. Eiropas Komisija 2023. gadā publicēja vadlīnijas par to mežiem, ko izmanto saimnieciski un kas neatrodas aizsargājamās teritorijās.',
    imageAlt: 'Dižskābaržu izlases mežs Mühlhausen pilsētas mežā Tīringenē, Vācijā, pavasarī.',
    sourceLabel: 'Eiropas Komisija',
  },
  'enrichment-planting': {
    problemTitle: 'Izcirsts mežs, kurā vēlamās sugas atjaunojas pārāk vāji',
    fixTitle: 'Bagātināšanas stādījumi',
    problem: 'Izcirsts mežs, kurā vēlamās sugas atjaunojas pārāk vāji',
    fix: 'Bagātināšanas stādījumi ievieto audzētavā izaudzētus stādus lauces vai stādīšanas joslās esošā meža iekšienē, kur vēlamo sugu dabiskā atjaunošanās ir pārāk vāja. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija (FAO) norāda, ka tos bieži izmantojuši, lai atjaunotu izcirstu pirmatnējo mežu un palielinātu sekundārā meža koksnes vērtību.',
    imageAlt: 'Balto kalnu apaču cilts meža nozares darbinieks ar rokas darbarīku Arizonā stāda dzeltenās priedes stādu.',
    sourceLabel: 'FAO',
  },
  'mass-timber': {
    problemTitle: 'Būvprojekti ar nedaudziem inženierkoksnes piegādātājiem',
    fixTitle: 'Masīvkoka būvkonstrukcijas',
    problem: 'Būvprojekti ar nedaudziem inženierkoksnes piegādātājiem',
    fix: 'Masīvkoka būvkonstrukcijas veido grīdas, sienas un jumtus no biezām inženierkoksnes plāksnēm un sijām, piemēram, krusteniski līmētās koksnes un līmētās koksnes. ASV Lauksaimniecības departamenta Meža dienests šos izstrādājumus dēvē par atjaunojamu alternatīvu parastajiem būvmateriāliem, kas uzkrāj oglekli, un atbalsta ražotājus ar dotācijām.',
    imageAlt: 'Ēkas interjers, kas celta no krusteniski līmētās koksnes plāksnēm.',
    sourceLabel: 'ASV Meža dienests',
  },
};

export const detail: Record<ForestPackSlug, ForestEncyclopediaCopy> = {
  'forest-certification': {
    title: 'Mežu sertifikācija',
    hook: 'Mežu sertifikācija ir sistēma, kurā neatkarīgi auditori pārbauda mežus un koksnes uzņēmumus pēc publicētiem standartiem.',
    imageAlt: grid['forest-certification'].imageAlt,
    caption: 'Nozāģēti baļķi, kas sakrauti pakalnos pie Trowupburn Nortumberlendā, Anglijā.',
    figureCredit: credit(
      'Foto: Džefs Holands (Geoff Holland), geograph.org.uk, ar Wikimedia Commons starpniecību, ',
      'Creative Commons licence „Atsauce, līdzīga koplietošana 2.0 Vispārējā”',
      bysa2,
      '.',
    ),
    what: [
      'Mežu sertifikācija ir sistēma, kurā neatkarīgi auditori pārbauda mežus un koksnes uzņēmumus pēc publicētiem standartiem. Meža uzraudzības padome (Forest Stewardship Council) ir starptautiska bezpeļņas organizācija, kas nosaka atbildīgas mežsaimniecības un meža produktu piegādes ķēžu standartus. Tās sistēmai ir divu veidu savstarpēji saistīti sertifikāti. Meža apsaimniekošanas sertifikāts apliecina, ka mežs tiek apsaimniekots atbildīgi pēc padomes principiem un kritērijiem. Piegādes ķēdes sertifikāts izseko sertificēto materiālu visos apstrādes, ražošanas un izplatīšanas posmos. Meža sertifikācijas sistēmu novērtēšanas programma (Programme for the Endorsement of Forest Certification) ir valstu sertifikācijas sistēmu globāla apvienība. Tā atzīst sistēmas, ko valstu organizācijas izstrādā, iesaistot daudzas ieinteresētās puses, un pielāgo vietējām prioritātēm un apstākļiem. Programma radās 1999. gadā, kad mazie un ģimenes meža īpašnieki Eiropā izveidoja sistēmu, lai parādītu savu ilgtspējīgo mežsaimniecību, un tagad tajā ir vairāk nekā 80 dalībnieku.',
    ],
    why: [
      'Bez pārbaudāma ceļa apgalvojums par ilgtspējīgu koksni ir tikai uzdrukāts teikums. Meža uzraudzības padome ziņo, ka pēc tās standartiem ir sertificēti vairāk nekā 160 miljoni hektāru meža un vairāk nekā 70 000 organizāciju. Meža sertifikācijas sistēmu novērtēšanas programma ziņo par 297 miljoniem hektāru sertificēta meža un 29 800 uzņēmumiem ar piegādes ķēdes sertifikātu. Abi skaitļu kopumi ņemti no pašu organizāciju tīmekļa vietnēm. Meža uzraudzības padomi pārvalda trīs kameras ar vienādām balsstiesībām: vides, sociālā un ekonomiskā. Tajās balso vairāk nekā 1200 dalībnieku, sākot no pamatiedzīvotājiem līdz globāliem uzņēmumiem.',
    ],
    read: [
      'Auditus veic neatkarīgas trešo pušu sertifikācijas institūcijas. Uzņēmums vēršas pie šādas institūcijas, saņem pārbaudi uz vietas un, ja prasības izpildītas, iegūst sertifikātu uz pieciem gadiem, bet pēc tam katru gadu tiek auditēts. Meža uzraudzības padomes marķējumu un apgalvojumus par produktiem drīkst izmantot tikai sertifikāta turētāji, tāpēc koksni var izsekot no meža līdz tirgum. Ieraugot marķējumu, jautājiet, kura sistēma to izsniegusi un vai sertifikāts attiecas uz mežu, piegādes ķēdi vai abiem.',
    ],
    limits: [
      'Skaitļi mēra dalību: sertificēta meža hektārus un sertificēto organizāciju skaitu. Katra organizācija ziņo savus datus par savu sistēmu. Meža apsaimniekošanas sertifikāts attiecas uz pārbaudīto mežu, bet piegādes ķēdes sertifikāts attiecas uz koksnes apriti pēc tās izvešanas no meža, tāpēc marķējums uz izstrādājuma atspoguļo to, ko aptver tā sertifikāts. Meža uzraudzības padome norāda, ka publicē sarakstu ar aktīvām izmeklēšanām pret organizācijām, kas var apdraudēt tās sistēmas uzticamību.',
    ],
    sources: [
      { label: 'Meža uzraudzības padome: kā darbojas padomes sistēma (How the FSC System Works)', url: 'https://fsc.org/en/how-the-fsc-system-works' },
      { label: 'Meža uzraudzības padome: par mums (About us)', url: 'https://fsc.org/en/about-us' },
      { label: 'Meža sertifikācijas sistēmu novērtēšanas programma: kas ir šī programma (What is PEFC?)', url: 'https://pefc.org/discover-pefc/what-is-pefc' },
      { label: 'Vikikrātuve: baļķu kaudze Sinkside Hill pie Trowupburn, foto (Timber Stack, Sinkside Hill Near Trowupburn)', url: commonsTimber },
    ],
  },
  'redd-plus': {
    title: 'REDD+ maksājumi',
    hook: 'Emisiju samazināšana no atmežošanas un mežu degradācijas (REDD+) aptver darbības jaunattīstības valstīs, kas samazina emisijas no atmežošanas un mežu degradācijas, saglabā meža oglekļa krājumus, nodrošina ilgtspējīgu mežu apsaimniekošanu un palielina meža oglekļa krājumus.',
    imageAlt: grid['redd-plus'].imageAlt,
    caption: 'Lietus mežs Kinabalu nacionālajā parkā Borneo salā.',
    figureCredit: credit(
      'Foto: Dukeabruzzi, ar Wikimedia Commons starpniecību, ',
      'Creative Commons licence „Atsauce, līdzīga koplietošana 4.0 Starptautiskā”',
      bysa4,
      '.',
    ),
    what: [
      'Emisiju samazināšana no atmežošanas un mežu degradācijas (REDD+) aptver darbības jaunattīstības valstīs, kas samazina emisijas no atmežošanas un mežu degradācijas, saglabā meža oglekļa krājumus, nodrošina ilgtspējīgu mežu apsaimniekošanu un palielina meža oglekļa krājumus. Pasaules Bankas Meža oglekļa partnerības fonds (Forest Carbon Partnership Facility) ir valdību, uzņēmumu, pilsoniskās sabiedrības un pamatiedzīvotāju organizāciju globāla partnerība, kas nodarbojas ar šīm darbībām. Tas strādā ar 47 jaunattīstības valstīm Āfrikā, Āzijā, Latīņamerikā un Karību jūras reģionā un ar 17 donoriem, kuru iemaksas un apņemšanās kopā sasniedz 1,3 miljardus ASV dolāru. Partnerība vada divus fondus. Sagatavotības fonds darbojās no 2008. līdz 2022. gadam ar kopējo finansējumu 472 miljoni ASV dolāru un palīdzēja valstīm sagatavoties: izstrādāt valstu REDD+ stratēģijas, noteikt atsauces emisiju līmeņus, izveidot emisiju mērīšanas, ziņošanas un pārbaudes sistēmas un ieviest valstu pārvaldības kārtību ar vides un sociālajām garantijām. Oglekļa fonds izmēģina maksājumus par rezultātiem valstīm, kas ir izgājušas sagatavotības posmu un sasniegušas pārbaudāmu emisiju samazinājumu meža nozarē un plašākā zemes izmantošanā. Tā pašreizējais finansējums ir 900 miljoni ASV dolāru.',
    ],
    why: [
      'Maksājums par rezultātu sasaista naudu ar izmērītiem iznākumiem: tas tiek izmaksāts tikai pēc tam, kad emisiju samazinājums ir sasniegts un pārbaudīts. Partnerības fonds ziņo, ka 2024. gadā tas vairāk nekā trīskāršoja maksājumus par rezultātiem, no 53,2 miljoniem ASV dolāru 2023. gadā līdz 164,5 miljoniem, un ka tas bija ceļā uz samaksu par vairāk nekā 35 miljoniem emisiju samazinājumu vienību, kas, pēc tā teiktā, ir vairāk nekā 10 procenti no visiem emisiju samazinājumu darījumiem pasaules oglekļa tirgos 2023. gadā. Visas 15 Oglekļa fonda valstis jau ir ziņojušas par emisiju samazinājumu.',
    ],
    read: [
      'Maksājums ir ķēdes pēdējais posms. Vispirms valsts sagatavo stratēģijas, atsauces emisiju līmeņus un mērīšanas sistēmas. Pēc tam tā samazina emisijas no mežiem un zemes izmantošanas. Tad samazinājumus pārbauda, un tikai pēc tam notiek maksājums. Oglekļa fonda valstis ievieš arī ieguvumu sadales mehānismus, lai ieņēmumi nonāktu pie cilvēkiem uz vietas. Mozambikā, piemēram, Meža oglekļa partnerības fonds un partnerprogramma cenšas panākt, lai sievietes veidotu vismaz 50 procentus no emisiju samazināšanas programmas labuma guvējiem.',
    ],
    limits: [
      'Datus par maksājumiem un samazinājumiem ziņo pats Meža oglekļa partnerības fonds. Sagatavotības fonds darbojās līdz 2022. gadam, bet Oglekļa fonds pagarināts līdz 2028. gada decembrim. Meža oglekļa partnerības fonds norāda, ka ir būtiski saglabāt tempu un emisiju samazināšanas programmu ilgtermiņa ilgtspēju pēc tā darbības beigām, un ka Pasaules Banka ir apliecinājusi emisiju samazināšanas pieejas dzīvotspēju, tāpēc tagad jāpaplašina uzlabots modelis.',
    ],
    sources: [
      { label: 'Pasaules Bankas Meža oglekļa partnerības fonds: par fondu (About the FCPF)', url: 'https://www.forestcarbonpartnership.org/about' },
      { label: 'Pasaules Bankas Meža oglekļa partnerības fonds: dinamika meža oglekļa jomā, 2024. gads un turpmāk (Momentum in Forest Carbon Progress, 2024 and Beyond)', url: 'https://www.forestcarbonpartnership.org/results-story/momentum-forest-carbon-progress-2024-and-beyond' },
      { label: 'Vikikrātuve: Borneo lietus mežs, foto (Borneo rainforest)', url: commonsBorneo },
    ],
  },
  'closer-to-nature-forestry': {
    title: 'Dabai tuvāka mežsaimniecība',
    hook: 'Eiropas Savienības meža stratēģija līdz 2030. gadam definē dabai tuvāku mežu apsaimniekošanu kā praksi, kas nodrošina daudzfunkcionālus mežus, apvienojot bioloģiskās daudzveidības mērķus, oglekļa krājumu saglabāšanu un ienākumus no kokmateriāliem.',
    imageAlt: grid['closer-to-nature-forestry'].imageAlt,
    caption: 'Dižskābaržu izlases mežs Mühlhausen pilsētas mežā Tīringenē, Vācijā, pavasarī.',
    figureCredit: credit(
      'Foto: Mihaels Fīgle (Michael Fiegle), ar Wikimedia Commons starpniecību, ',
      'Creative Commons licence „Atsauce, līdzīga koplietošana 3.0 Neadaptētā”',
      bysa3,
      '.',
    ),
    what: [
      'Eiropas Savienības meža stratēģija līdz 2030. gadam definē dabai tuvāku mežu apsaimniekošanu kā praksi, kas nodrošina daudzfunkcionālus mežus, apvienojot bioloģiskās daudzveidības mērķus, oglekļa krājumu saglabāšanu un ienākumus no kokmateriāliem. 2023. gada 27. jūlijā Eiropas Komisija publicēja vadlīnijas par šo pieeju savu dienestu darba dokumentā, ko tā nosūtīja arī Eiropas Savienības Padomei. Vadlīnijas paredzētas mežiem, kurus izmanto saimnieciski kokmateriālu un citu meža produktu ieguvei, ārpus noteiktajām aizsargājamām teritorijām. To vispārīgie principi ir mācīties no dabas procesiem un ļaut tiem attīstīties, uzturēt meža struktūru daudzveidību un sarežģītību, apvienot meža funkcijas dažādos mērogos, izmantot dažādas mežkopības sistēmas, kuru pamatā ir reģiona dabisko traucējumu modeļi, un veikt ciršanu ar mazu ietekmi, vienādu uzmanību pievēršot tam, kas paliek mežā, un tam, kas tiek izvests.',
    ],
    why: [
      'Vadlīnijas min divus galvenos mērķus: strukturālās sarežģītības palielināšanu un dabiskās meža dinamikas veicināšanu. Tās apraksta mežus, kas kļuvuši daudzveidīgāki pēc augstuma, diametra, vecuma un sugām. Audzes ar daudzveidīgu sugu struktūru ir izturīgākas un labāk pielāgojas klimata pārmaiņām un traucējumiem, un, ja viena suga cieš no kaitēkļa, citas sugas var izdzīvot un nest ienākumus. Vadlīnijās teikts, ka kailcirtes samazina vides sarežģītību, maina dabiskos ekosistēmu procesus un samazina dzīvotņu daudzveidību. Interese par mežsaimniecību ar nepārtrauktu meža klājumu, kurā pēc ciršanas paliek koku vainagu klājs, pieaug Dānijā, Vācijā, Īrijā un Nīderlandē, un dažas dalībvalstis ir ieviesušas radniecīgus principus vai obligātus tiesību aktus.',
    ],
    read: [
      'Ciršanas paņēmiens, ko piedāvā vadlīnijas, ir daļēja ciršana: atsevišķu koku izlases cirte, grupu izlases cirte vai lauču cirtes ne lielākas par 0,2 līdz 0,5 hektāriem, kas atdarina dabiskos traucējumus un aizstāj kailcirtes lielās platībās. Prakse Eiropā atšķiras. Vadlīnijas ziņo, ka Rietumeiropā visbiežāk izmanto mežsaimniecību ar nepārtrauktu meža klājumu, ka Centrāleiropā un Austrumeiropā dominē Pro Silva pieeja un citas, bet ziemeļaustrumos ievērojama ir ideja atdarināt dabiskos traucējumus un saglabāt dabiskas struktūras, piemēram, atmirušo koksni. Alpos kailcirtes, kas lielākas par 0,5 hektāriem, ir retas, bet dažās valstīs pat aizliegtas augsnes erozijas, zemes nogruvumu un lavīnu riska dēļ. Eiropas Meža institūts 2022. gada ziņojumā piedāvāja jēdziena definīciju, septiņus vadošos principus un kontrolsarakstu.',
    ],
    limits: [
      'Vadlīnijas sevi raksturo kā pilnībā brīvprātīgas un norāda, ka tajās nav saistošu nosacījumu, piemēram, valsts atbalstam vai Eiropas Savienības finansējumam mežu apsaimniekošanai. Kā norāda to autori, galvenais šķērslis, ko minēja aptaujas respondenti, bija ekonomika: uztvere, ka bioloģiskajai daudzveidībai draudzīga prakse samazina ienākumus no meža, vismaz īstermiņā. Vietās, kur dabiskie traucējumi ir samazināti vai novērsti, pēc vadlīniju teiktā mazas kailcirtes var būt vajadzīgas kā daļa no atjaunojošas apsaimniekošanas, lai īslaicīgi atdarinātu dabiskos traucējumus.',
    ],
    sources: [
      { label: 'Eiropas Komisija, Vides ģenerāldirektorāts: vadlīnijas par dabai tuvāku mežu apsaimniekošanu (Guidelines on Closer-to-Nature Forest Management)', url: 'https://environment.ec.europa.eu/publications/guidelines-closer-nature-forest-management_en' },
      { label: 'Eiropas Savienības Padome: Komisijas dienestu darba dokuments, vadlīnijas par dabai tuvāku mežu apsaimniekošanu (Guidelines on Closer-to-Nature Forest Management)', url: 'https://data.consilium.europa.eu/doc/document/ST-12232-2023-INIT/en/pdf' },
      { label: 'Eiropas Meža institūts: dabai tuvāka mežu apsaimniekošana, sērija „No zinātnes uz politiku” Nr. 12 (Closer-to-Nature Forest Management, From Science to Policy 12)', url: 'https://efi.int/publication/closer-to-nature-forest-management' },
      { label: 'Vikikrātuve: dižskābaržu izlases mežs, 2004. gada aprīlis, foto (Plenterwald April 2004)', url: commonsPlenter },
    ],
  },
  'enrichment-planting': {
    title: 'Bagātināšanas stādījumi',
    hook: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija (FAO) apraksta bagātināšanas stādījumus kā audzētavā izaudzētu stādu vai meža sējeņu, tas ir, no meža zemsedzes ņemtu jaunu koku, pārstādīšanu dabiskās meža lauces, ciršanas radītās lauces vai šim nolūkam izcirstās joslās un līnijās.',
    imageAlt: grid['enrichment-planting'].imageAlt,
    caption: 'Balto kalnu apaču cilts meža nozares darbinieks ar rokas darbarīku Arizonā stāda dzeltenās priedes stādu.',
    figureCredit: credit(
      'Foto: Beverlija Mozlija (Beverly Moseley), ASV Lauksaimniecības departamenta Dabas resursu aizsardzības dienests, ',
      'sabiedriskais īpašums',
      commonsApache,
      ', ar Wikimedia Commons starpniecību.',
    ),
    what: [
      'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija (FAO) apraksta bagātināšanas stādījumus kā audzētavā izaudzētu stādu vai meža sējeņu, tas ir, no meža zemsedzes ņemtu jaunu koku, pārstādīšanu dabiskās meža lauces, ciršanas radītās lauces vai šim nolūkam izcirstās joslās un līnijās. Tie var būt piemēroti, ja vēlamo sugu dabiskā atjaunošanās ir nepietiekama vai nevienmērīga, kā arī lai atbalstītu atsevišķas, parasti vērtīgas sugas, kas paša spēkiem slikti atjaunojas. Divi visbiežākie varianti ir stādīšana līnijās un stādīšana lauces. Izvēle galvenokārt atkarīga no audzes stāvokļa, bet stādīšanu lauces parasti iesaka pārmērīgi izcirstos mežos, kur stādīšanas līnijas grūtāk atvērt un uzturēt.',
    ],
    why: [
      'FAO norāda, ka bagātināšanas stādījumus bieži izmantojuši izcirstu pirmatnējo mežu atjaunošanai un sekundāro mežu koksnes krājuma un saimnieciskās vērtības palielināšanai. Degradēti pirmatnējie meži daudzās valstīs kļūst par dominējošo meža tipu, un no tiem arvien biežāk prasa pildīt pirmatnējo mežu ražošanas un vides funkcijas.',
    ],
    read: [
      'FAO uzskaita, kas vajadzīgs panākumiem: pietiekama gaisma, pienācīga uzraudzība un turpmāka kopšana, galvenokārt lai regulētu apgaismojumu un mazinātu citu augu konkurenci. Stādu stāvoklis stādīšanas brīdī ir svarīgs faktors, un FAO uzskata par izšķirošu izmantot kvalitatīvu stādmateriālu. Piemērotas sugas, visticamāk, dod vērtīgu koksni, ātri aug, regulāri zied un ražo augļus, iztur plašu apstākļu diapazonu un mitruma trūkumu un nav pakļautas nopietniem kaitēkļiem. FAO piemērs no Malaizijas rāda metožu dažādību. Sabahā izmēģinājuma bagātināšanas stādījumi aptvēra 10 000 hektāru izcirsta meža: sāka ar kokiem, kas stādīti ik pēc 3 metriem rindās 10 metru attālumā cita no citas, katru rindu izcirta kā 2 metrus platu joslu, un ravēšana var turpināties līdz sešiem gadiem pēc stādīšanas. Malaizijas pussalā, kur palicis vairāk lielu vainaga koku un ēna palēnina stādu augšanu, izmēģinājumā izmanto stādus līdz 2 metru augstumam, kurus stāda bedrēs, ko izrok mazs traktors ar urbi.',
    ],
    limits: [
      'FAO papildu izdevumā par sekundārajiem mežiem teikts, ka bagātināšanas stādījumu ekonomiskie ieguvumi joprojām ir neskaidri, lai gan izmēģinājumu apstākļos gūti daudzsološi rezultāti. Tur arī norādīts, ka nav vienas receptes, kas derētu visām situācijām. Sabahā ekonomiku palīdzēja uzlabot maksājumi par oglekļa piesaisti, kas notiek, mežam atjaunojoties, bet izmēģinājumi Malaizijas pussalā bija agrīnā posmā.',
    ],
    sources: [
      { label: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: mežkopība dabiskajos mežos, Ilgtspējīgas mežsaimniecības rīkkopas modulis (Silviculture in Natural Forests)', url: 'https://www.fao.org/sustainable-forest-management-toolbox/modules/silviculture-in-natural-forests/en' },
      { label: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: mežkopība dabiskajos mežos, pamatzināšanas, PDF (Silviculture in Natural Forests, Basic knowledge)', url: 'https://www.fao.org/sustainable-forest-management/toolbox/modules/silviculture-in-natural-forests/basic-knowledge/en/?type=111' },
      { label: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: kā palīdzēt mežiem atgūt segumu, sekundāro mežu apsaimniekošana, neatzītās iespējas (Helping forests take cover, Secondary forest management: the unrecognised opportunities)', url: 'https://www.fao.org/4/ae945e/ae945e0c.htm' },
      { label: 'Vikikrātuve: dzeltenās priedes stāda stādīšana, Balto kalnu apaču cilts, foto (White Mountain Apache Arizona-105)', url: commonsApache },
    ],
  },
  'mass-timber': {
    title: 'Masīvkoka būvkonstrukcijas',
    hook: 'Masīvkoka būvkonstrukcijas ir inženierkoksnes izstrādājumu saime nesošajām ēku daļām.',
    imageAlt: grid['mass-timber'].imageAlt,
    caption: 'Ēkas interjers, kas celta no krusteniski līmētās koksnes plāksnēm.',
    figureCredit: credit(
      'Foto: RoterRolf, ar Wikimedia Commons starpniecību, ',
      'Creative Commons CC0 1.0 Vispārējā nodošana sabiedriskajā īpašumā',
      cc0,
      '.',
    ),
    what: [
      'Masīvkoka būvkonstrukcijas ir inženierkoksnes izstrādājumu saime nesošajām ēku daļām. Krusteniski līmētās koksnes plāksnes sastāv no vairākiem dēļu slāņiem, kas novietoti šķērsām, parasti 90 grādu leņķī, un salīmēti pa platajām malām. Plāksnei ir vismaz trīs slāņi, parasti nepāra skaits, un bieži sastopami no trim līdz septiņiem slāņiem. Līmētā koksne ir inženierizstrādājums ar noteiktu izturību, kas veidots no diviem vai vairākiem dēļu slāņiem, salīmētiem tā, ka visu slāņu šķiedras iet paralēli garumam. Šīs definīcijas sniedz ASV Lauksaimniecības departamenta Meža dienests krusteniski līmētās koksnes rokasgrāmatas nodaļā un savā koksnes rokasgrāmatā.',
    ],
    why: [
      'ASV Lauksaimniecības departamenta Meža dienests norāda, ka krusteniski līmētā koksne un līmētā koksne ir atjaunojama alternatīva parastajiem būvmateriāliem, kas uzkrāj oglekli, turklāt tām piemīt izturība, ugunsizturība un projektēšanas elastība. Koksnes rokasgrāmata piebilst, ka krusteniski līmētās koksnes plāksnes ir alternatīva daļai būvniecības pielietojumu, kuros pašlaik izmanto betonu, mūri vai tēraudu. Dienests saka, ka iekšzemes ražošanas trūkums ir palēninājis šo izstrādājumu ieviešanu, bet piedāvājuma palielināšana palīdz samazināt izmaksas attīstītājiem. Tā koksnes inovāciju dotāciju programma, kas uzsākta 2015. gadā, min masīvkoka būvkonstrukcijas starp nacionālajām prioritārajām jomām.',
    ],
    read: [
      'Braiens Brašovs (Brian Brashaw), Meža dienesta koksnes inovāciju direktora palīgs, 2025. gadā sacīja, ka kopš 2015. gada Amerikas Savienotajās Valstīs ir parādījušās 13 jaunas masīvkoka rūpnīcas, kas apkalpo komerciālo, sabiedrisko un daudzdzīvokļu ēku tirgus. Šis skaitlis ir viņa paziņojumā Meža dienesta rakstā. Dienests norāda, ka tā dotācijas atbalsta ražotājus, kas iegūst koksni no ilgtspējīgiem avotiem, samazina atkritumus un rada darbvietas lauku kopienās. Sastopoties ar apgalvojumu par masīvkoka ēku, palūkojieties, no kā izstrādājums veidots, kur koksne audzēta un ko avots saka par oglekli.',
    ],
    limits: [
      'Šeit izmantotie Meža dienesta materiāli apraksta oglekļa uzkrāšanu vispārīgi un nesniedz oglekļa skaitli nevienai atsevišķai ēkai. Krusteniski līmētās koksnes rokasgrāmatā teikts, ka tās plāksnēm ir samērā liela spēja uzkrāt mitrumu, bet zema tvaiku caurlaidība, tāpēc plāksnes, kas būvniecības laikā pārmērīgi samirkušas, var uzsūkt daudz mitruma un lēni žūt, un ieteicams papildu gaisa barjers. Skaitlis par 13 jaunām rūpnīcām attiecas tikai uz Amerikas Savienotajām Valstīm.',
    ],
    sources: [
      { label: 'ASV Lauksaimniecības departamenta Meža dienests: masīvkoka ražošanas palielināšana, nepilnību novēršana un inovāciju veicināšana (Scaling up mass timber: Closing gaps, fueling innovation)', url: 'https://www.fs.usda.gov/about-agency/features/scaling-mass-timber-closing-gaps-fueling-innovation' },
      { label: 'ASV Lauksaimniecības departamenta Meža dienests: koksnes inovācijas (Wood Innovations)', url: 'https://www.fs.usda.gov/science-technology/energy-forest-products/wood-innovation' },
      { label: 'ASV Lauksaimniecības departamenta Meža dienesta pētniecības un attīstības nodaļa: 1. nodaļa, ievads krusteniski līmētajā koksnē, no krusteniski līmētās koksnes rokasgrāmatas, 2013. gads (Chapter 1, Introduction to cross-laminated timber, CLT Handbook)', url: 'https://research.fs.usda.gov/treesearch/46203' },
      { label: 'ASV Lauksaimniecības departamenta Meža dienesta pētniecības un attīstības nodaļa: 12. nodaļa, uz koksnes bāzes veidotu kompozītmateriālu mehāniskās īpašības, no koksnes rokasgrāmatas, 2021. gads (Chapter 12, Mechanical properties of wood-based composite materials, Wood Handbook)', url: 'https://research.fs.usda.gov/treesearch/62260' },
      { label: 'Vikikrātuve: krusteniski līmētās koksnes konstrukcija, foto (Brettsperrholzkonstruktion)', url: commonsClt },
    ],
  },
};
