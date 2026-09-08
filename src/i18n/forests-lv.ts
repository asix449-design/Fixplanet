import type { ForestsPage } from './forests';

export const lv: ForestsPage = {
  metaTitle: 'Meži — Fix Planet',
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
    'Skaitļi ar avotiem. FAO mežs ir zemes lietojums; GFW tropu primārais vainags ir cits reģistrs. Tos nesaskaita vienā summā.',
  heroSources: 'Avoti un definīcijas →',
  filterAria: 'Mežu sadaļas',
  back: '← Meži',
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
      'Daži publicēti lielumi, katram nosaukts avots un gads. FAO mežs ir zemes lietojums. Hansen / Global Forest Watch ir 30 metru vainags. Crowther 2015 ir koku skaits. Tie ir dažādi mērījumi; tos nesaskaita vienā summā.',
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
  distinguishTitle: 'Boreālais mežs nav tropiskais. Primārais mežs nav plantācija.',
  distinguish:
    'Apmēram 45 procenti FAO meža ir tropiski; pārējais galvenokārt boreāls un mērens (FRA 2025). Boreālie zudumi bieži ir uguns, kukaiņi vai ciršana, pēc kuriem mežs FAO zemes lietojuma izpratnē var atgriezties. Tropu primārā zudums parasti ir pārvēršana — vecais mežs neatgriežas kā tā pati ekosistēma, ja to nomaina soja vai eļļas palma. Sekundārais mežs un plantācijas var celt „meža platību”, kamēr primārā krīt. FAO neto zudums (4,12 milj. ha/gadā, 2015–2025) atņem pieaugumu no atmežošanas (10,9 milj. ha/gadā). GFW 2024. (6,7 milj. ha) un 2025. (4,3 milj. ha) skaitļi stāv uz citu definīciju. Neviens rindas saka „visi meži pazudīs kalendāra datumā”.',
  numbersNote:
    'Nokopēts no citētajām publikācijām, ar gadu. FAO meža platība nav Hansen vainags; Crowther 2015 ir koku skaits, ne hektāri.',
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
    billionHa: 'mljrd. ha',
    millionHa: 'milj. ha',
    millionHaYear: 'milj. ha / gadā',
    percent: '%',
  },
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
      label: 'Mežs, kas palicis (FAO)',
      text: '4,14 mljrd. ha — 32 procenti sauszemes, ap 0,50 ha uz cilvēku. Gandrīz puse šī meža ir tropiska. Zemes lietojuma mežs, ne Hansen vainags.',
    },
    deforestationSince1990: {
      label: 'Atmežošana kopš 1990.',
      text: '489 milj. ha nocirsti (FAO atmežošana, 1990–2025). Tas ir bruto meža zemes lietojuma zudums, ne neto un ne GFW koku seguma zudums. Temps palēninājās; tas neapstājās.',
    },
    netLossRecent: {
      label: 'Neto meža platības zudums',
      text: '4,12 milj. ha/gadā 2015.–2025., pret 10,7 milj. ha/gadā 1990.–2000. Neto = atmežošana mīnus pieaugums (ataugšana, stādīšana, cits ieguvums).',
    },
    grossDeforestation: {
      label: 'Bruto atmežošanas temps',
      text: '10,9 milj. ha/gadā 2015.–2025., pret 17,6 milj. ha/gadā 1990. gados. Pieaugums arī palēninājās (6,78 milj. ha/gadā pēdējā desmitgadē).',
    },
    primaryRemaining: {
      label: 'Primārais mežs (FAO)',
      text: 'Vismaz 1,18 mljrd. ha (29 procenti uzrādītā meža). Mīnus 110 milj. ha kopš 1990. Nesenais primārais zudums 1,61 milj. ha/gadā (2015–2025), mazāk par pusi no 2000.–2015. tempa. Ietver boreālo primāro, ne tikai lietusmežu.',
    },
    tropicalPrimary2024: {
      label: 'Tropu primārais, 2024',
      text: '6,7 milj. ha mitro tropu primārā meža — GFW/UMD rekords, uguns, ap 18 futbola laukumiem minūtē. Cita definīcija nekā FAO primārais.',
    },
    tropicalPrimary2025: {
      label: 'Tropu primārais, 2025',
      text: '4,3 milj. ha — par 36 procentiem zem 2024., joprojām ap 46 procentiem virs dekādes iepriekš (WRI / UMD, 2026. gada 29. aprīlis). Globālais koku seguma zudums ap 25,5 milj. ha; 42 procenti uguns.',
    },
    holoceneTrees: {
      label: 'Koki kopš lauksaimniecības (aplēse)',
      text: 'Crowther et al. 2015: tagad ap 3,04 triljoniem koku un aptuveni par 46 procentiem mazāk nekā UNEP vēsturiskā seguma projekcija kopš civilizācijas/lauksaimniecības. Koku skaits, ne FAO hektāri. Tīši rupji.',
    },
  },
};
