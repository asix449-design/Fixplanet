import type { ForestsPage } from './forests';

export const lv: ForestsPage = {
  metaTitle: 'Meži · Fix Planet',
  metaDescription:
    'Meži: kas tie ir, kā satelīts redz vainagu, senāku ainavu rekonstrukcijas un publicēti FAO un Global Forest Watch skaitļi.',
  eyebrow: 'Zemes meži',
  title: 'Meži',
  hubLead: [
    'Mežs ir ekosistēma, kurā valda koki. FAO mežu uzskata par zemes lietojuma klasi: ap 4,14 miljardiem hektāru, aptuveni trešdaļa sauszemes.',
    'Meži uzkrāj oglekli, piedalās ūdens apritē un dod mājvietu lielākajai daļai sauszemes sugu. Zemāk — vainaga zaļums no kosmosa, dažas senāku ainavu rekonstrukcijas un trīs ceļi tālāk. Katrai kartei ir nosaukts datu kopums un datums.',
  ],
  choosePanel: 'Izvēlies plauktu',
  heroNote:
    'Skaitļi ar avotiem: meža platība, primārie meži, stādītais mežs, ogleklis, neto zudums, tropu primārā meža zudums un koku skaits.',
  heroSources: 'Avoti un definīcijas',
  filterAria: 'Mežu sadaļas',
  back: 'Meži',
  tiles: {
    satellite: 'Jūlija vainaga zaļums no kosmosa, 2001–2025.',
    history: 'Leduslaikmeta veģetācija, biomi un zeme pēc cilvēkiem.',
    numbers: 'Definīcijas, avoti un pārējais publicētais kopums.',
    outlook: 'Garais skats, gadi, ko var izmērīt, un trīs iespējami ceļi.',
  },
  panels: {
    satellite: 'Satelīta laikmets',
    history: 'Rekonstrukcijas',
    numbers: 'Skaitļi',
    outlook: 'Tendence un nākotnes',
  },
  leads: {
    satellite: [
      'Meža vainags ir slēgts lapu un skuju slānis. Satelīti neskaita FAO hektārus: tie mēra, cik zaļa ir virsma. NDVI ir šis zaļuma indekss no atstarotās gaismas.',
      'Pasaules kartē redzamas lietusmežu un taigas joslas. Ciršanas gads šajā mērogā gandrīz nav pamanāms. Koku seguma zudums ap 30 metru soli ir Global Forest Watch.',
      'Kartes ir NASA MODIS Terra NDVI jūlijam, 2001–2025.',
    ],
    history: [
      'Pirms satelīta laikmeta meža platību atjauno no putekšņiem, klimata modeļiem un zemes lietojuma kartēm. Nepārtrauktas hektāru skaitīšanas no 10 000 p.m.ē. nav.',
      'Piecas plates: pēdējā ledāja maksimuma veģetācija, biomu karte pie nesenā klimata un Ellis antromi — cilvēku veidoti biomi — 1700., 1900. un 2000. gadam.',
    ],
    numbers: [
      'Publicēti lielumi, katram nosaukts avots un gads. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija ziņo par mežu kā zemes izmantošanu. Merilendas universitātes laboratorija un Global Forest Watch kartē vainagu ar aptuveni 30 metru soli. Neskartas meža ainavas ir kartēta lielu meža puduru klase. 2015. gada raksts žurnālā Nature novērtē koku skaitu. Katrs skaitlis patur sava izdevēja definīciju.',
    ],
    outlook: [
      'Holocēnā savvaļas mežs saruka: auga tīrumi, ganības un apmetnes. Pēc 2000. gada satelīta rinda ir blīvāka. Tropu primārā meža pārvēršana nav tas pats, kas boreālais ugunsgrēks, un neviens no tiem nav kalendāra datums, kad «meži beigsies».',
    ],
  },
  honestySatellite:
    'NASA MODIS Terra NDVI, jūlijs. Vainaga zaļums, ne Hansen pikseļi. Dzīvais 30 m pārlūks: Global Forest Watch.',
  honestyReconstruction:
    'Rekonstrukcijas un aplēses, ne satelīta vainags. Putekšņi, modeļi un antromi — katrai platei sava leģenda.',
  modeSatellite: 'Satelīts',
  modeReconstruction: 'Rekonstrukcija',
  fidelitySatellite: 'Satelīts · vainaga zaļums',
  fidelityReconstruction: 'Rekonstrukcija / aplēse',
  scrubberAria: 'Mežu kartes gads',
  yearLabel: 'Gads',
  eraLabel: 'Laikmets',
  openGfw: 'Atvērt Global Forest Watch →',
  gfwNote:
    'Hansen / Merilendas universitātes GLAD koku seguma zudums, ap 30 m, no 2001. gada, Global Forest Watch. Zudumā ietilpst uguns, mežsaimniecība un pārvēršana — ne tikai pastāvīga atmežošana.',
  sourceLabel: 'Avots',
  licenseLabel: 'Licence',
  vintageLabel: 'Gads',
  howToRead:
    'Zaļš ir vairāk veģetācijas jūlijā. Melns ir ūdens. Bēšs ir sauss vai kails. Salīdzini joslas — Amazoni, Kongo, Sundalendu, taigu — ne vienu pikselīti. Rekonstrukcijām ir savas leģendas: antromi ir cilvēku un zemes lietojuma klases, ne „koku procenti”.',
  caveats:
    'NDVI nav meža platība un nav primārais mežs. Kultūras un mitri gadi arī zaļo. Jūlijs labvēlīgs ziemeļu vasarai, tāpēc starpība gadu no gada šajā izšķirtspējā ir maza. Pēdējais ledāja maksimums ir ap 18 000 gadu sen, senāks un aukstāks nekā 10 000 p.m.ē. Biomu plate ir nesena klimata analogs; vidējā holocēnā Sahara bieži bija zaļāka.',
  distinguishTitle: 'Boreālais mežs, tropu mežs un stādītais mežs',
  distinguish:
    'Aptuveni 45 procenti uzrādītā meža ir tropos. Pārējais galvenokārt ir boreāls un mērens mežs, pēc 2025. gada novērtējuma. Boreālie zudumi bieži saistīti ar uguni, kukaiņiem vai ciršanu, un zeme atkal var tikt uzskatīta par mežu zemes izmantošanas izpratnē. Tropu primārā meža zudums parasti ir pārveide: vecā meža vietā nonāk soja vai eļļas palma. Sekundārais mežs un plantācijas var palielināt kopējo meža platību, kamēr primārā meža platība sarūk. Stādītais mežs aizņem 312 miljonus hektāru, 8 procentus kopsummas, līdzās 1,18 miljardiem hektāru primārā meža. Neto zudums 4,12 miljoni hektāru gadā no 2015. līdz 2025. gadam ir mežu izciršana 10,9 miljoni hektāru gadā mīnus paplašināšanās. Neskartas meža ainavas 2025. gadā aizņem 1086 miljonus hektāru savā kartē. Tropu primārā meža zudums bija 6,7 miljoni hektāru 2024. gadā un 4,3 miljoni hektāru 2025. gadā pēc Global Forest Watch datiem.',
  numbersNote:
    'Katrs skaitlis ir pārrakstīts no citētās publikācijas kopā ar šīs publikācijas gadu. Meža platība, vainags un koku skaits nāk no saviem izdevējiem.',
  trendTitle: 'Garais skats, tad gadi, ko var izmērīt',
  trendLead:
    'Ellis 12K grafiks rekonstruē antromus — savvaļas, kultūras un intensīvo zemi — no 10 000 p.m.ē. līdz 2017. Tas nav FAO hektāri. Pēc 2000. satelīta skaitļi ir ciešāki.',
  longViewCaption:
    'Erle Ellis, Anthromes 12K DGG v1, pēc Ellis et al. 2021, PNAS. CC BY 2.0. Kartes seja ir ~2017; stabiņi ir garā rekonstrukcija. Savvaļas mežs sašaurinās; tīrumi, ganības un apdzīvotās vietas aug. Tīši rupji.',
  longViewAlt:
    'Pasaules antromu karte 2017. gadam virs stabiņu joslas ar savvaļas, kultūras un intensīvo zemi no 10 000 p.m.ē. līdz 2017',
  scenarioTitle: 'Ceļi, ne liktenis',
  scenarioLead:
    'Ja turas nesenais tropu primārā zuduma temps, šis mežs turpina sarukt. Klusāks uguns gads vai īsts moratorijs var pavērst tendenci — 2025. jau reiz pavērsa. Neviens ceļš nav datums, kad mežs pazūd.',
  scenarios: {
    continued: {
      title: 'Ja turas nesenā tropu primārā josla',
      text: 'UMD/GFW mitro tropu primārais zudums: 6,7 milj. ha 2024. (uguns rekords) un 4,3 milj. ha 2025. (par 36 procentiem zemāks, joprojām ap 46 procentiem virs dekādes iepriekš). Ja josla 4–7 milj. ha/gadā paliek, atlikušie primārie mitrie tropi turpina sarukt. GFW primārais atlikums šeit nav publicēts; boreālais FAO mežs ir cita grāmata.',
    },
    slower: {
      title: 'Ja politika un uguns pārvaldība turas',
      text: 'FRA 2025 jau rāda lēnāku neto zudumu nekā 1990. gados (4,12 pret 10,7 milj. ha/gadā). Brazīlijas daļa 2025. kritumā ir parastā atgādinājums: izpilde un preču noteikumi var pakustināt pasaules summu vienā gadā. Tā pati WRI piezīme saka: uguns ir jaunā norma. Klusums nav slēdzene.',
    },
    restore: {
      title: 'Ja atjaunošana ir mežs, ne solījums',
      text: 'FAO meža pieaugums (6,78 milj. ha/gadā, 2015–2025) jau daļēji sedz atmežošanu. Plantācijas un jauns sekundārais mežs var celt šo skaitli bez primārās struktūras un sugām. Labāks ceļš ir mazāk pārvēršanas plus atjaunošana, ko mēra kā ekosistēmu, ne kā paziņojuma hektāru.',
    },
  },
  worksTitle: 'Kas ir kustinājis līniju',
  worksLead:
    'Zudums nav tikai laikapstākļi. Preču noteikumi, uguns izpilde, zemes tituli un parki jau ir pakustinājuši summas nosauktos gados.',
  works: {
    soy: {
      title: 'Amazones sojas moratorijs',
      text: 'Pēc 2006. sojas ciršana Brazīlijas Amazonē recenzētajā ierakstā strauji krita (Gibbs et al. 2015, Science). Noplūde uz Serradu ir godīga atruna. Ražas pircēju noteikumi mainīja fronti. Tos var atcelt.',
    },
    indonesia: {
      title: 'Indonēzijas meža un kūdras noteikumi',
      text: 'Primārā meža un kūdras moratoriji plus uguns izpilde pēc 2015. GFW gada piezīmēs rādās kā gadi, kad Indonēzijas zudums atdzisa. El Ninjo un plantāciju pieprasījums var atkal sakarsēt. Politika ir slēdzis, ne vakcīna.',
    },
    indigenous: {
      title: 'Pirmiedzīvotāju un vietējās teritorijas',
      text: 'Vairākos tropu baseinos titulētas pirmiedzīvotāju zemes bieži rāda mazāku pārvēršanu nekā blakus mežs bez titula (GFW/WRI apkopojumi). Tā ir pārvaldība un klātbūtne, ne romantisks „neskartā” mīts. Tituls joprojām jāaizstāv.',
    },
    protected: {
      title: 'Aizsargātais mežs (FAO)',
      text: 'FRA 2025: ap 813 milj. ha meža — 20 procenti — juridiski noteiktās aizsargājamās teritorijās (+251 milj. ha kopš 1990.). Papīra parki pastāv. Un parki, kas turas, arī. Aizsardzība ir viens rīks blakus preču noteikumiem un ugunsdzēsējiem.',
    },
  },
  mapsLink: 'Karšu zālē ir arī Hansen / Global Forest Watch shēma par zināmajām zuduma frontēm.',
  mapsLinkCta: 'Atvērt meža seguma zuduma kartīti →',
  units: {
    billionHa: 'miljardi hektāru',
    millionHa: 'miljoni hektāru',
    millionHaYear: 'miljoni hektāru gadā',
    percent: 'procenti',
    ofLand: 'procenti sauszemes',
    gigatonnesC: 'gigatonnas oglekļa',
    trillionTrees: 'triljoni koku',
  },
  numberSources: [
    {
      label:
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, Globālais meža resursu novērtējums 2025',
      url: 'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en',
    },
    {
      label:
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, ziņu izlaidums par meža novērtējumu 2025',
      url: 'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
    },
    {
      label: 'Hansens un līdzautori, augstas izšķirtspējas globālās meža seguma izmaiņu kartes (2013)',
      url: 'https://doi.org/10.1126/science.1244693',
    },
    {
      label: 'Pasaules resursu institūts, Pasaules mežu pārskats, meža zudums 2024. gadā',
      url: 'https://gfr.wri.org/global-tree-cover-loss-data-2024',
    },
    {
      label: 'Pasaules resursu institūts, Pasaules mežu pārskats, tropu mežu zudums 2025. gadā',
      url: 'https://gfr.wri.org/latest-analysis-deforestation-trends',
    },
    {
      label: 'Nature, «Koku blīvuma kartēšana globālā mērogā» (2015)',
      url: 'https://www.nature.com/articles/nature14967',
    },
    {
      label: 'Neskarto meža ainavu kartēšanas grupa, 2025',
      url: 'https://doi.org/10.5281/zenodo.18011599',
    },
  ],
  frames: {
    'sat-2001': {
      label: '2001',
      title: 'Vainaga zaļums, 2001. gada jūlijs',
      caption:
        'Pirmais pilnais ziemeļu vasaras MODIS Terra NDVI mēnesis šajā lapā. Zaļās joslas ir veģetācija, ne meža platības skaitīšana. Hansen/UMD gada zudums sākas 2001. — pikseļi Global Forest Watch.',
      imageAlt:
        'Taisnstūra pasaules karte, 2001. gada jūlijs: zaļa veģetācija uz melniem okeāniem, bēšas tuksneši',
    },
    'sat-2005': {
      label: '2005',
      title: 'Vainaga zaļums, 2005. gada jūlijs',
      caption:
        'Tas pats NASA slānis četrus gadus vēlāk. Globālais NDVI šajā izšķirtspējā neparādīs Amazones loka gadu. Tropu un taigas joslas redzamas.',
      imageAlt:
        'Taisnstūra pasaules karte, 2005. gada jūlijs: zaļa veģetācija uz melniem okeāniem, bēšas tuksneši',
    },
    'sat-2010': {
      label: '2010',
      title: 'Vainaga zaļums, 2010. gada jūlijs',
      caption:
        'Klimata ierakstā 2010. ir smaga Amazones sausuma. Globālā jūlija plate joprojām ir zaļuma momentuzņēmums, ne sausuma atlants.',
      imageAlt:
        'Taisnstūra pasaules karte, 2010. gada jūlijs: zaļa veģetācija uz melniem okeāniem, bēšas tuksneši',
    },
    'sat-2015': {
      label: '2015',
      title: 'Vainaga zaļums, 2015. gada jūlijs',
      caption:
        'Satelīta 2010. gadu vidus. FRA 2025 vēlāk liek 2015.–2025. neto meža platības zudumu 4,12 milj. ha/gadā — cits, zemes lietojuma skaitlis.',
      imageAlt:
        'Taisnstūra pasaules karte, 2015. gada jūlijs: zaļa veģetācija uz melniem okeāniem, bēšas tuksneši',
    },
    'sat-2020': {
      label: '2020',
      title: 'Vainaga zaļums, 2020. gada jūlijs',
      caption:
        'Vēlais Landsat/MODIS laikmets. Koku seguma zudums un FAO atmežošana gāja arī šajā desmitgadē; šis kadrs nevienu rindu nezīmē.',
      imageAlt:
        'Taisnstūra pasaules karte, 2020. gada jūlijs: zaļa veģetācija uz melniem okeāniem, bēšas tuksneši',
    },
    'sat-2024': {
      label: '2024',
      title: 'Vainaga zaļums, 2024. gada jūlijs',
      caption:
        'GFW/UMD: 6,7 milj. ha tropu primārā meža 2024. — uguns rekords; ap 30 milj. ha globālā koku seguma zuduma. Šī NDVI plate rētas nezīmē.',
      imageAlt:
        'Taisnstūra pasaules karte, 2024. gada jūlijs: zaļa veģetācija uz melniem okeāniem, bēšas tuksneši',
    },
    'sat-2025': {
      label: '2025',
      title: 'Vainaga zaļums, 2025. gada jūlijs',
      caption:
        'Jaunākais jūlija kadrs šajā lapā. GFW/UMD: tropu primārais zudums krita līdz 4,3 milj. ha; globālais koku seguma zudums ap 25,5 milj. ha (42 procenti uguns). Klusāks gads pēc lēciena, ne „planēta glābta”.',
      imageAlt:
        'Taisnstūra pasaules karte, 2025. gada jūlijs: zaļa veģetācija uz melniem okeāniem, bēšas tuksneši',
    },
    'recon-lgm': {
      label: '~18 tūkst. gadu',
      title: 'Pēdējā ledus maksimuma veģetācija',
      caption:
        'Rekonstrukcija, ne satelīts. Ray & Adams 2001 GIS veģetācija, ~25 000–15 000 BP (~18 000 gadu sen). Ledāji, vairāk tuksneša, mazāk slēgta meža. Tas ir vecāks un aukstāks par 10 000 p.m.ē. Agrā holocēna meži jau paplašinājās no šī minimuma.',
      imageAlt:
        'Mollveides rekonstrukcija leduslaikmeta veģetācijai: ledāji, tundra, mazāks tropu mežs, leģenda',
    },
    'recon-midholocene': {
      label: 'Biomu plate',
      title: 'Potenciālie biomi (nesens klimats)',
      caption:
        'Aplēse / analogs — ne datēta vidējā holocēna putekšņu karte. Ville Koistinena apkopotā biomu plate (CC BY-SA). Derīga kā „kur mežs var dzīvot nesenā klimatā”. Vidējā holocēnā (~6000 gadu sen) Sahara bieži bija zaļāka; šis zīmējums to nerāda.',
      imageAlt:
        'Krāsaina pasaules biomu karte: taiga, platlapju mežs, tropu lietusmežs, tuksneši un savannas',
    },
    'recon-1700': {
      label: '1700',
      title: 'Antromi, 1700',
      caption:
        'Cilvēku veidotu biomu rekonstrukcija, Ellis / SEDAC v2. Savvaļas un attālie meži vēl aizņem daudz Amerikas, Āfrikas un boreālās Eirāzijas. Tīrumi un ciemi jau blīvi Eiropā, Indijā un Austrumķīnā. Nav koku procentu karte.',
      imageAlt:
        'Robinsona karte 1700. gada antromiem: bāli savvaļas meži, dzelteni tīrumi, zili ciemi',
    },
    'recon-1900': {
      label: '1900',
      title: 'Antromi, 1900',
      caption:
        'Tā pati Ellis / SEDAC sērija, industriālā soļa. Tīrumi, ganības un apdzīvotās vietas ir izpletušās. Joprojām iedzīvotāju un zemes lietojuma modelis, ne Landsat.',
      imageAlt:
        'Robinsona karte 1900. gada antromiem ar lielāku tīrumu un ganību platību nekā 1700.',
    },
    'recon-2000': {
      label: '2000',
      title: 'Antromi, 2000',
      caption:
        'Ellis / SEDAC v2 satelīta laikmeta sliekšņa. Intensīvie antromi sedz lielu daļu apdzīvojamās sauszemes. Salīdzini ar NASA NDVI plauktu: cita leģenda, cits lielums.',
      imageAlt:
        'Robinsona karte 2000. gada antromiem: plaši tīrumi, ganības un apdzīvotās vietas',
    },
  },
  stats: {
    remaining: {
      label: 'Mežs, kas palicis',
      text: '4,14 miljardi hektāru, ap 0,50 hektāriem uz cilvēku. Gandrīz puse šī meža ir tropos. Skaitlis ir zemes izmantošanas kopsumma no valstu ziņojumiem.',
      sourceLine: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, Globālais meža resursu novērtējums 2025',
    },
    landShare: {
      label: 'Sauszemes daļa',
      text: '32 procenti pasaules sauszemes 2025. gadā ir uzrādīti kā mežs. Tā ir tā pati zemes izmantošanas kopsumma kā 4,14 miljardi hektāru.',
      sourceLine: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, Globālais meža resursu novērtējums 2025',
    },
    plantedForest: {
      label: 'Stādītais mežs',
      text: '312 miljoni hektāru, 8 procenti meža 2025. gadā. Platība ir pieaugusi par 120 miljoniem hektāru kopš 1990. gada, un pieauguma temps pēdējā desmitgadē palēninājās. Skaitlis aptver plantācijas un stādījumus.',
      sourceLine: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, Globālais meža resursu novērtējums 2025',
    },
    carbonStock: {
      label: 'Meža oglekļa krājums',
      text: '714 gigatonnas oglekļa visos baseinos (172 tonnas uz hektāru): augsne 46 procenti, dzīvā biomasa 44 procenti, nobiras un sausokņi 10 procenti.',
      sourceLine: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, Globālais meža resursu novērtējums 2025',
    },
    deforestationSince1990: {
      label: 'Mežu izciršana kopš 1990. gada',
      text: '489 miljoni hektāru izcirsti no 1990. līdz 2025. gadam. Skaitlis ir bruto meža zemes izmantošanas zudums. Temps palēninājās, un izciršana turpinās.',
      sourceLine: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, Globālais meža resursu novērtējums 2025, galvenais ziņojums',
    },
    netLossRecent: {
      label: 'Neto meža platības zudums',
      text: '4,12 miljoni hektāru gadā no 2015. līdz 2025. gadam, salīdzinot ar 10,7 miljoniem hektāru gadā no 1990. līdz 2000. gadam. Neto izmaiņas ir mežu izciršana mīnus paplašināšanās no atjaunošanās, stādīšanas un cita pieauguma.',
      sourceLine: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, ziņu izlaidums par meža novērtējumu 2025',
    },
    grossDeforestation: {
      value: '10,9',
      label: 'Bruto mežu izciršanas temps',
      text: '10,9 miljoni hektāru gadā no 2015. līdz 2025. gadam, salīdzinot ar 17,6 miljoniem hektāru gadā no 1990. līdz 2000. gadam. Paplašināšanās arī palēninājās, līdz 6,78 miljoniem hektāru gadā pēdējā desmitgadē. Izciršana nozīmē meža pārveidi citā zemes izmantošanā.',
      sourceLine: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, ziņu izlaidums par meža novērtējumu 2025',
    },
    primaryRemaining: {
      label: 'Primārie meži',
      text: 'Vismaz 1,18 miljardi hektāru, 29 procenti uzrādītā meža. Platība ir samazinājusies par 110 miljoniem hektāru kopš 1990. gada. Nesenais primārā meža zudums ir 1,61 miljons hektāru gadā no 2015. līdz 2025. gadam, mazāk par pusi no 2000. līdz 2015. gada tempa. Kopsumma ietver boreālo primāro mežu un lietusmežu.',
      sourceLine: 'Globālais meža resursu novērtējums 2025, primārie meži',
    },
    tropicalPrimary2024: {
      value: '6,7',
      label: 'Tropu primārais mežs, 2024',
      text: '6,7 miljoni hektāru mitro tropu primārā meža rekordgadā, galvenokārt ugunsgrēku dēļ, ap 18 futbola laukumiem minūtē.',
      sourceLine: 'Pasaules resursu institūts, Pasaules mežu pārskats, meža zudums 2024. gadā',
    },
    tropicalPrimary2025: {
      label: 'Tropu primārais mežs, 2025',
      text: '4,3 miljoni hektāru, par 36 procentiem mazāk nekā 2024. gadā un joprojām ap 46 procentiem vairāk nekā pirms desmit gadiem. Pasaules resursu institūts to raksturo kā 11 futbola laukumus minūtē. Brazīlija samazināja ar ugunsgrēkiem nesaistīto primārā meža zudumu par 41 procentu salīdzinājumā ar 2024. gadu. Visiem pasaules mežiem koku seguma zudums bija ap 25,5 miljoniem hektāru, un ugunsgrēki izraisīja 42 procentus.',
      sourceLine: 'Pasaules resursu institūts, Pasaules mežu pārskats, tropu mežu zudums 2025. gadā',
    },
    treeCount: {
      label: 'Dzīvie koki',
      text: '2015. gada raksts žurnālā Nature novērtē koku skaitu ap 3,04 triljoniem. Skaitlis ir modelēts stumbru skaits no parauglaukumiem un attālās izpētes.',
      sourceLine: 'Nature, «Koku blīvuma kartēšana globālā mērogā» (2015)',
    },
    holoceneTrees: {
      label: 'Koki kopš civilizācijas sākuma',
      text: 'Tas pats 2015. gada raksts novērtē aptuveni par 46 procentiem mazāk koku nekā cilvēku civilizācijas sākumā.',
      sourceLine: 'Žurnāls «Neičers», «Koku blīvuma kartēšana globālā mērogā» (2015)',
    },
    intactLandscapes: {
      label: 'Neskartas meža ainavas',
      text: '1086 miljoni hektāru 2025. gadā, 8,4 procenti sauszemes bez ledus. Gabali ir ap 50 000 hektāru vai lielāki un bez rūpnieciskas pēdas.',
      sourceLine: 'Neskarto meža ainavu kartēšanas grupa, 2025',
    },
  },

};
