import type { ForestsPage } from './forests';

export const lv: ForestsPage = {
  metaTitle: 'Meži — Fix Planet',
  metaDescription:
    'Mežu monitoringa lapa ar avotiem: NASA vainaga kadri no 2001. gada, dažas rekonstrukcijas, FAO un GFW skaitļi un scenāriji — ne viltota 12 000 gadu filma.',
  choosePanel: 'Izvēlies plauktu',
  filterAria: 'Mežu sadaļas',
  tiles: {
    satellite: 'Jūlija vainaga zaļums, 2001–2025. Dzīvie zuduma pikseļi — GFW.',
    history: 'Dažas rekonstrukcijas. Rupji. Nav satelīts. Robežas parakstītas.',
    numbers: 'FAO platība, GFW tropu primārais, Crowther koki — ar datumu.',
    outlook: 'Garais skats, trīs ceļi, ja politika turas vai krīt, un kas ir strādājis.',
  },
  panels: {
    satellite: 'Satelīta laikmets',
    history: 'Rekonstrukcijas',
    numbers: 'Skaitļi',
    outlook: 'Tendence un nākotnes',
  },
  leads: {
    satellite:
      'Galvenā vadība: izmitināts NASA MODIS NDVI jūlijam, 2001–2025. Tas ir vainaga zaļums, ne Hansen pikseļi. Šajā mērogā ciršanas gads gandrīz nav redzams. Global Forest Watch ir dzīvais 30 m pārlūks.',
    history:
      'Otrais plaukts: piecas rekonstrukcijas / aplēses — leduslaikmeta veģetācija, mūsdienu klimata biomu plate, tad Ellis antromi 1700., 1900. un 2000. gadam. Zinātnei nav nepārtrauktas hektāru kartes no 10 000 p.m.ē.',
    numbers:
      'Aptuveni skaitļi ar nosauktu avotu un gadu. FAO mežs ir zemes lietojuma klase. GFW/Hansen ir 30 m vainags. Nesaskaiti tos vienā viltotā summā.',
    outlook:
      'Rupja holocēna josla, precīzāks satelīta skats un trīs ceļi — ne viens „meži pazudīs DATUMĀ”. Boreālais ugunsgrēks nav tas pats, kas tropu pārvēršana tīrumā.',
  },
  honesty:
    'Godīgas nepārtrauktas ikgadējas pasaules mežu kartes no 10 000 p.m.ē. nav. Putekšņi, modeļi un antromi ir rekonstrukcijas. Landsat klases vainaga zudums sākas ap 2000. Mēs turam dažus likumīgus kadrus un sūtām uz Global Forest Watch pēc dzīvā Hansen/UMD slāņa.',
  modeSatellite: 'Satelīts',
  modeReconstruction: 'Rekonstrukcija',
  fidelitySatellite: 'Satelīts · vainaga zaļums',
  fidelityReconstruction: 'Rekonstrukcija / aplēse',
  scrubberAria: 'Mežu kartes gads',
  yearLabel: 'Gads',
  eraLabel: 'Laikmets',
  openGfw: 'Atvērt Global Forest Watch →',
  gfwNote:
    'Hansen / Merilendas universitātes GLAD koku seguma zudums, ~30 m, 2001–tagad. Šos pikseļus mēs nehostējam. Zudumā ietilpst uguns, mežsaimniecība un pārvēršana — ne tikai pastāvīga atmežošana.',
  sourceLabel: 'Avots',
  licenseLabel: 'Licence',
  vintageLabel: 'Gads',
  howToRead:
    'Zaļš ir vairāk veģetācijas jūlijā. Melns ir ūdens. Bēšs ir sauss vai kails. Salīdzini joslas (Amazone, Kongo, Sundalenda, taiga), ne vienu pikselīti. Rekonstrukcijām ir savas leģendas — antromi ir cilvēku un zemes lietojuma klases, ne „koku procenti”.',
  caveats:
    'NDVI nav meža platība un nav primārais mežs. Kultūras un mitri gadi arī zaļo. Jūlijs labvēlīgs ziemeļu vasarai. Starpība gadu no gada pie 2400 px ir sīka: tas ir kadra limits, ne pierādījums, ka nekas nav cirsts. LGM ir ~18 000 gadu sen, ne 10 000 p.m.ē. Biomu plate ir nesena klimata analogs — vidējā holocēnā Sahara bieži bija zaļāka.',
  distinguishTitle: 'Boreālais nav tropiskais. Primārais nav plantācija.',
  distinguish:
    'Apmēram 45 procenti FAO meža ir tropiski; pārējais galvenokārt boreāls un mērens (FRA 2025). Boreālie zudumi bieži ir uguns, kukaiņi vai ciršana, pēc kuriem mežs FAO zemes lietojuma izpratnē var atgriezties. Tropu primārā zudums parasti ir pārvēršana — vecais mežs neatgriežas kā tā pati ekosistēma, ja to nomaina soja vai eļļas palma. Sekundārais mežs un plantācijas var celt „meža platību”, kamēr primārā krīt. FAO neto zudums (4,12 milj. ha/gadā, 2015–2025) atņem pieaugumu no atmežošanas (10,9 milj. ha/gadā). GFW 2024. (6,7 milj. ha) un 2025. (4,3 milj. ha) skaitļi stāv uz citu definīciju. Neviens rindas saka „visi meži pazudīs kalendāra datumā”.',
  numbersNote:
    'Skaitļi zemāk ir nokopēti no nosauktajām publikācijām. Mēs neinterpolējām holocēna hektāru tautas skaitīšanu. Crowther 2015 ir koku skaita aplēse (apmēram par 46 procentiem mazāk koku nekā UNEP vēsturiskā seguma projekcija), ne FAO meža platība.',
  trendTitle: 'Garais skats, tad gadi, ko tiešām protam mērīt',
  trendLead:
    'Ellis 12K grafiks ir antromu rekonstrukcija — savvaļas, kultūras un intensīvā zeme — no 10 000 p.m.ē. līdz 2017. Tas nav FAO hektāri. Pēc 2000. satelīta skaitļi ir ciešāki un joprojām nav viens liktenis.',
  longViewCaption:
    'Erle Ellis, Anthromes 12K DGG v1, pēc Ellis et al. 2021, PNAS. CC BY 2.0. Kartes seja ir ~2017; stabiņi ir garā rekonstrukcija. Savvaļas mežs sašaurinās; tīrumi, ganības un apdzīvotās vietas aug. Tīši rupji.',
  longViewAlt:
    'Pasaules antromu karte 2017. gadam virs stabiņu joslas ar savvaļas, kultūras un intensīvo zemi no 10 000 p.m.ē. līdz 2017',
  scenarioTitle: 'Ceļi, ne liktenis',
  scenarioLead:
    'Ja turas pērnā gada temps, tropu primārais mežs turpina sarukt. Tas ir ceļš, ne pravietojums, un ne „nulle meža DATUMĀ”. Klusāks uguns gads vai īsts moratorijs var locīt līniju otrādi — 2025. jau reiz locīja.',
  scenarios: {
    continued: {
      title: 'Ja turas nesenā tropu primārā josla',
      text: 'UMD/GFW mitro tropu primārais zudums: 6,7 milj. ha 2024. (uguns rekords) un 4,3 milj. ha 2025. (par 36 procentiem zemāks, joprojām ap 46 procentiem virs dekādes iepriekš). Ja josla 4–7 milj. ha/gadā paliek, atlikušie primārie mitrie tropi turpina irties. Mēs to nepārvēršam par bojāejas datumu: GFW primārais atlikums šeit nav publicēts, un boreālais FAO mežs ir cita grāmata.',
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
    'Ne saukļi. Īsi, avototi atgādinājumi: zudums ir izvēle, ne laikapstākļi.',
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
  mapsLink: 'Karšu zālē ir arī Hansen/GFW shēma par zināmajām zuduma frontēm.',
  mapsLinkCta: 'Atvērt meža seguma zuduma kartīti →',
  addFrame:
    'Lai pievienotu gadu: ieliec NASA Worldview NDVI jūlija JPEG mapē public/images/forests/, pievieno rindu src/data/forests.ts, to pašu id visos četros mežu locale failos un credits.json. Komentārs ir src/data/forests.ts sākumā.',
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
        'Pirmais pilnais ziemeļu vasaras MODIS Terra NDVI mēnesis, ko hostējam. Zaļās joslas ir veģetācija, ne meža platības skaitīšana. Hansen/UMD gada zudums sākas 2001. — pikseļi GFW.',
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
        'Jaunākais jūlija kadrs, ko hostējam. GFW/UMD: tropu primārais zudums krita līdz 4,3 milj. ha; globālais koku seguma zudums ap 25,5 milj. ha (42 procenti uguns). Tas nav „planēta glābta” — klusāks gads pēc lēciena.',
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
        'Aplēse / analogs — ne datēta vidējā holocēna putekšņu karte. Ville Koistinena apkopotā biomu plate (CC BY-SA). Derīga kā „kur mežs var dzīvot nesenā klimatā”. Vidējā holocēnā (~6000 gadu sen) Sahara bieži bija zaļāka; šis zīmējums to nerāda. BIOME 6000 rastru mēs nehostējam.',
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
        'Ellis / SEDAC v2 satelīta laikmeta sliekšņa. Intensīvie antromi sedz lielu daļu apdzīvojamās sauszemes. Salīdzini ar NASA NDVI plauktu — cita leģenda, cita godīgums.',
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
