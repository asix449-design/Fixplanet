import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { realMapCredit } from './real-map-credits';

const heads = {
  what: 'Kas tas ir',
  why: 'Kāpēc tas ir svarīgi',
  how: 'Kā to lasīt',
  limits: 'Ierobežojumi',
};

const prison = '#8c2f39';
const teal = '#1a6b7a';

export const lv: Record<string, MapCopy> = {
  'prison-population-rate': {
    title: 'Ieslodzījuma līmenis',
    cardMeta: '“Pasaules cietumu pārskata” dati, ieslodzītie uz 100 000 cilvēku.',
    hook: 'Cik cilvēku katrā valstī atrodas cietumā uz katriem 100 000 iedzīvotāju, ieskaitot apcietinātos pirms tiesas, pēc datubāzes “Pasaules cietumu pārskats” (World Prison Brief).',
    description:
      '“Pasaules cietumu pārskats” (World Prison Brief) ir bezmaksas tiešsaistes datubāze par pasaules ieslodzījuma sistēmām. To uztur Noziedzības un tieslietu politikas pētniecības institūts (ICPR) Birkbeck koledžā, Londonas Universitātē. Datubāze sarindo valstis pēc ieslodzījuma līmeņa: visu ieslodzīto skaita, ieskaitot apcietinātos pirms tiesas, uz 100 000 iedzīvotāju. Bezpeļņas statistikas vietne Our World in Data (“Mūsu pasaule datos”) šo pašu datu rindu rāda pasaules kartē (dati par 1993.–2026. gadu).',
    whyOnShelf:
      'Rādītājs parāda, cik plaši valsts izmanto brīvības atņemšanu. Sarakstā, kurā ir 224 ieslodzījuma sistēmas, augstākais līmenis ir Salvadorā: 1659 uz 100 000 cilvēku, tālāk seko Kuba (794), Turkmenistāna (aptuveni 576) un ASV (542).',
    howToRead:
      'Dati galvenokārt nāk no valdībām un citiem oficiāliem avotiem, un valstu lapas tiek atjauninātas katru mēnesi, tāpēc jaunākais gads katrai valstij ir atšķirīgs. Līmeni ietekmē sodu likumi, pirmstiesas apcietinājuma prakse un tiesu kapacitāte, kā arī noziedzības līmenis. Jo tumšāka krāsa kartē, jo vairāk ieslodzīto uz 100 000 cilvēku; ja 2026. gada datu nav, parādīts tuvākais gads laikā no 2018. līdz 2025. gadam.',
    caveats:
      'Pirmstiesas apcietināto, sieviešu un ārvalstnieku īpatsvaru ieslodzīto vidū, kā arī cietumu noslodzi “Pasaules cietumu pārskats” publicē kā atsevišķus sarakstus; kartē redzams tikai kopējais līmenis. Valstis dažādi nosaka, kurš tiek uzskatīts par ieslodzīto.',
    licenseNote: realMapCredit('lv', 'prison-population-rate') ?? '',
    imageAlt:
      'Pasaules karte: ieslodzītie uz 100 000 cilvēku, gaiša sauszeme pie zemāka līmeņa un tumši violeta pie augstāka, bez virsraksta un leģendas attēlā',
    caption:
      'Ieslodzītie uz 100 000 cilvēku pa valstīm 2026. gadā vai pēdējā pieejamajā gadā, ieskaitot apcietinātos pirms tiesas.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Ieslodzītie uz 100 000 cilvēku',
        items: [
          { swatch: '#e7e7e7', label: 'Nav datu' },
          { swatch: '#feebe2', label: 'no 0 līdz 100' },
          { swatch: '#fcc5c0', label: 'no 100 līdz 200' },
          { swatch: '#fa9fb5', label: 'no 200 līdz 300' },
          { swatch: '#f768a1', label: 'no 300 līdz 400' },
          { swatch: '#dd3497', label: 'no 400 līdz 500' },
          { swatch: '#ac027d', label: 'no 500 līdz 600' },
          { swatch: '#7a0177', label: '600 un vairāk' },
        ],
      },
    ],
    gridSource: cite(
      '“Pasaules cietumu pārskats”, ieslodzījuma līmenis',
      'https://www.prisonstudies.org/highest-to-lowest/prison_population_rate',
    ),
    sources: [
      cite(
        '“Pasaules cietumu pārskats” (World Prison Brief), ICPR: sākumlapa',
        'https://www.prisonstudies.org/',
      ),
      cite(
        '“Pasaules cietumu pārskats”: valstis pēc ieslodzījuma līmeņa, no augstākā līdz zemākajam (Highest to Lowest: Prison population rate)',
        'https://www.prisonstudies.org/highest-to-lowest/prison_population_rate',
      ),
      cite(
        '“Pasaules cietumu pārskats”: datu pārskats (World Prison Brief data)',
        'https://www.prisonstudies.org/world-prison-brief-data',
      ),
      cite(
        'Noziedzības un tieslietu politikas pētniecības institūts: projekta lapa (World Prison Brief)',
        'https://icpr.org.uk/theme/prisons-and-use-imprisonment/world-prison-brief',
      ),
      cite(
        'Our World in Data: ieslodzījuma līmenis, interaktīvā karte un dati (Prison population rate)',
        'https://ourworldindata.org/grapher/prison-population-rate',
      ),
      cite(
        'Our World in Data: ieslodzījuma līmenis, kartes attēls PNG formātā',
        'https://ourworldindata.org/grapher/prison-population-rate.png',
      ),
    ],
  },
  'drug-trafficking-flows': {
    title: 'Narkotiku kontrabandas plūsmas',
    cardMeta:
      'ANO Narkotiku un noziedzības biroja “Pasaules narkotiku ziņojums” 2026, maršrutu kartes pēc ziņotajiem narkotiku izņemšanas gadījumiem.',
    hook: 'Galvenie kokaīna, heroīna un metamfetamīna kontrabandas ceļi starp pasaules reģioniem ANO Narkotiku un noziedzības biroja kartēs, kas sastādītas pēc 2021.–2024. gadā ziņotajiem izņemšanas gadījumiem.',
    description:
      'ANO Narkotiku un noziedzības biroja (UNODC) “Pasaules narkotiku ziņojumam” 2026 (World Drug Report) ir statistiskais pielikums ar trim pasaules kartēm, kurās parādītas galvenās metamfetamīna, kokaīna un heroīna kontrabandas plūsmas. Katra karte apkopo narkotiku izņemšanas gadījumus, par kuriem ziņots 2021.–2024. gadā. Papildu kartes rāda galvenās izbraukšanas vai tranzīta valstis un galvenās galamērķa valstis katrai narkotikai, bet pielikuma tabulās ir dati par audzēšanu, ražošanu, izņemšanu, cenām un tīrību.',
    whyOnShelf:
      'Kartes rāda, kā narkotikas ceļo no ražošanas reģioniem caur tranzīta mezgliem uz patēriņa tirgiem. Piemērs ir Eiropa: Eiropas Savienības Narkotiku aģentūra (EUDA) ziņo, ka ES valstis 2024. gadā izņēma 330 tonnas kokaīna pēc rekordlielajām 419 tonnām 2023. gadā; visvairāk izņēma Spānija (124 tonnas) un Francija (53,5 tonnas).',
    howToRead:
      'Katra maršruta platums atbilst kopējam tajā izņemto narkotiku daudzumam skalā no ļoti zema līdz ļoti augstam. Maršruti balstās uz ziņām, ko ANO dalībvalstis sniedz ikgadējās anketās, ziņojumos par atsevišķiem izņemšanas gadījumiem un citos oficiālos dokumentos. Bultiņas rāda kontrabandas virzienu: maršruts sākas tur, no kurienes sūtījums izbrauca vai kur tas pēdējo reizi manīts, un beidzas tur, kur to patērē vai uz kurieni tas dodas tālāk, tāpēc bultiņas sākums var atrasties citā valstī nekā narkotikas ražošanas vieta. UNODC maršrutus raksturo kā aptuvenus; mazāki blakus maršruti var būt izlaisti.',
    caveats:
      'Izņemšanas gadījumi ir atkarīgi no tā, kur un cik aktīvi meklē tiesībsargājošās iestādes, tāpēc stingri kontrolēti maršruti var izskatīties lielāki. Ilustrācija aptver 27 ES valstis, Norvēģiju un Turciju; UNODC kartes aptver visu pasauli.',
    licenseNote: realMapCredit('lv', 'drug-trafficking-flows') ?? '',
    imageAlt:
      'Kolonnas ar izņemto kokaīnu no 2014. līdz 2024. gadam, astoņas krāsu joslas un gadi, bez valstu nosaukumiem attēlā',
    caption: 'Izņemtais kokaīns 27 ES valstīs, Norvēģijā un Turcijā 2014.–2024. gadā, tonnās, pa valstīm.',
    figureTitle: 'Izņemtais kokaīns Eiropā, 2014.–2024.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Tonnas, no katras kolonnas apakšas',
        items: [
          { swatch: '#1b4f72', label: 'Spānija' },
          { swatch: '#148f77', label: 'Francija' },
          { swatch: '#b9770e', label: 'Beļģija' },
          { swatch: '#6c3483', label: 'Nīderlande' },
          { swatch: '#1a5276', label: 'Portugāle' },
          { swatch: '#c0392b', label: 'Itālija' },
          { swatch: '#d4ac0d', label: 'Turcija' },
          { swatch: '#7f8c8d', label: 'Citas valstis' },
        ],
      },
    ],
    gridSource: cite(
      'ANO Narkotiku un noziedzības birojs, “Pasaules narkotiku ziņojuma” 2026 statistiskais pielikums',
      'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026-annex.html',
    ),
    sources: [
      cite(
        'UNODC: “Pasaules narkotiku ziņojums” 2026 (World Drug Report 2026)',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026.html',
      ),
      cite(
        'UNODC: “Pasaules narkotiku ziņojums” 2026, statistiskais pielikums (Statistical Annex)',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026-annex.html',
      ),
      cite(
        'UNODC: galvenās kokaīna kontrabandas plūsmas pēc ziņotajiem izņemšanas gadījumiem, 2021–2024, karte PDF formātā (Main cocaine trafficking flows as described in reported seizures)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/04_Main_cocaine_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: galvenās heroīna kontrabandas plūsmas pēc ziņotajiem izņemšanas gadījumiem, 2021–2024, karte PDF formātā (Main heroin trafficking flows)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/07_Main_heroin_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: galvenās metamfetamīna kontrabandas plūsmas pēc ziņotajiem izņemšanas gadījumiem, 2021–2024, karte PDF formātā (Main methamphetamine trafficking flows)',
        'https://www.unodc.org/documents/data-and-analysis/WDR_2026/Annex/01_Main_methamphetamine_trafficking_flows_as_described_in_reported_seizures_2021-2024.pdf',
      ),
      cite(
        'UNODC: “Pasaules narkotiku ziņojums” 2025, kartes (iepriekšējais izdevums, World Drug Report 2025 Maps)',
        'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2025-maps.html',
      ),
      cite(
        'EUDA: kokaīns, pašreizējā situācija Eiropā (“Eiropas narkotiku ziņojums” 2026, European Drug Report 2026)',
        'https://www.euda.europa.eu/publications/european-drug-report/2026/cocaine_en',
      ),
      cite(
        'EUDA: izņemtā kokaīna daudzuma tendences tonnās, 2014–2024 (tabula EDR26-Cocaine-6, CSV)',
        'https://www.euda.europa.eu/sites/default/files/data/data-nodes/33313/versions/56/edr2026-cocaine-table-8_en.csv',
      ),
    ],
  },
  'modern-slavery': {
    title: 'Mūsdienu verdzība',
    cardMeta:
      'Walk Free “Globālais verdzības indekss” 2023 un Starptautiskās Darba organizācijas, Walk Free un Starptautiskās Migrācijas organizācijas globālās aplēses par 2021. gadu.',
    hook: 'Mūsdienu verdzības, proti, piespiedu darba un piespiedu laulību, aplēstā izplatība 160 valstīs pēc organizācijas Walk Free “Globālā verdzības indeksa” (Global Slavery Index), kas balstās uz globālajām aplēsēm: aptuveni 50 miljoni cilvēku mūsdienu verdzībā 2021. gadā.',
    description:
      'Starptautiskā cilvēktiesību organizācija Walk Free publicē “Globālo verdzības indeksu”. Tā 2023. gada izdevums aplēš, cik cilvēku dzīvo mūsdienu verdzībā 160 valstīs, izmantojot reprezentatīvas mājsaimniecību aptaujas un katras valsts ievainojamības statistisko modeli. Indekss balstās uz Starptautiskās Darba organizācijas (SDO), Walk Free un Starptautiskās Migrācijas organizācijas (IOM) “Mūsdienu verdzības globālajām aplēsēm”: 2021. gadā jebkurā dienā mūsdienu verdzībā bija aptuveni 50 miljoni cilvēku (49,6 miljoni), no tiem aptuveni 28 miljoni piespiedu darbā un 22 miljoni piespiedu laulībā, par aptuveni 10 miljoniem vairāk nekā 2016. gada aplēsēs.',
    whyOnShelf:
      'Aplēses ietver arī cilvēkus, kuri policijas un tiesu statistikā neparādās. Indekss augstāko izplatību konstatē Ziemeļkorejā (104,6 uz 1000 cilvēkiem), Eritrejā (90,3) un Mauritānijā (32,0), bet stingrāko valdību rīcību Apvienotajā Karalistē, Austrālijā un Nīderlandē. Pa reģioniem globālās aplēses rāda augstāko izplatību arābu valstīs (10,1 uz 1000 cilvēkiem) un lielāko cilvēku skaitu Āzijas un Klusā okeāna reģionā (29,3 miljoni).',
    howToRead:
      'Valstu dati ir aplēstā izplatība uz 1000 cilvēkiem, kas balstīta uz aptaujām un modelēšanu, tāpēc katram skaitlim ir nenoteiktības robeža. Walk Free interaktīvajā kartē katrai valstij redzama aplēstā izplatība, ievainojamība un valdības rīcība. Ilustrācijā parādītas globālās aplēses pēc dzimuma, vecuma, reģiona un ienākumu grupas, miljonos cilvēku un uz 1000 iedzīvotājiem.',
    caveats:
      'Globālās aplēses neaptver dažus ekspluatācijas veidus, piemēram, orgānu tirdzniecību un bērnu vervēšanu bruņotajos spēkos, un aptaujas valstīs ar dziļu, ilgstošu konfliktu ir grūti un bīstami veikt. Walk Free savu aplēsi raksturo kā piesardzīgu.',
    licenseNote: realMapCredit('lv', 'modern-slavery') ?? '',
    imageAlt:
      'Stabiņi ar cilvēku skaitu mūsdienu verdzībā 2021. gadā, skaitļi 27.6, 22.0, 49.6 un 1. attēla sadalījums, bez kategoriju nosaukumiem attēlā',
    caption:
      'Cilvēki mūsdienu verdzībā 2021. gadā, miljonos un uz 1000 iedzīvotājiem, pēc dzimuma, vecuma, reģiona un ienākumu grupas.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Piespiedu darbs un piespiedu laulība, miljoni cilvēku',
        items: [
          { swatch: prison, label: 'Piespiedu darbs, 27.6' },
          { swatch: teal, label: 'Piespiedu laulība, 22.0' },
        ],
      },
      {
        title: 'Cilvēku skaits, miljoni (kreisās joslas, tie paši rindu numuri)',
        items: [
          { swatch: prison, label: '1 Pasaule, 49.6' },
          { swatch: prison, label: '2 Vīrieši, 22.8' },
          { swatch: prison, label: '3 Sievietes, 26.7' },
          { swatch: prison, label: '4 Pieaugušie, 37.3' },
          { swatch: prison, label: '5 Bērni, 12.3' },
          { swatch: prison, label: '6 Āfrika, 7.0' },
          { swatch: prison, label: '7 Amerika, 5.1' },
          { swatch: prison, label: '8 Arābu valstis, 1.7' },
          { swatch: prison, label: '9 Āzija un Klusais okeāns, 29.3' },
          { swatch: prison, label: '10 Eiropa un Centrālāzija, 6.4' },
          { swatch: prison, label: '11 Augsti ienākumi, 7.2' },
          { swatch: prison, label: '12 Ienākumi virs vidējā, 12.7' },
          { swatch: prison, label: '13 Ienākumi zem vidējā, 23.0' },
          { swatch: prison, label: '14 Zemi ienākumi, 6.6' },
        ],
      },
      {
        title: 'Izplatība uz 1000 iedzīvotājiem (labās joslas)',
        items: [
          { swatch: teal, label: '1 Pasaule, 6.4' },
          { swatch: teal, label: '2 Vīrieši, 5.8' },
          { swatch: teal, label: '3 Sievietes, 6.9' },
          { swatch: teal, label: '4 Pieaugušie, 6.9' },
          { swatch: teal, label: '5 Bērni, 5.2' },
          { swatch: teal, label: '6 Āfrika, 5.2' },
          { swatch: teal, label: '7 Amerika, 5.0' },
          { swatch: teal, label: '8 Arābu valstis, 10.1' },
          { swatch: teal, label: '9 Āzija un Klusais okeāns, 6.8' },
          { swatch: teal, label: '10 Eiropa un Centrālāzija, 6.9' },
          { swatch: teal, label: '11 Augsti ienākumi, 5.9' },
          { swatch: teal, label: '12 Ienākumi virs vidējā, 4.4' },
          { swatch: teal, label: '13 Ienākumi zem vidējā, 7.8' },
          { swatch: teal, label: '14 Zemi ienākumi, 9.6' },
        ],
      },
    ],
    gridSource: cite(
      'Walk Free, “Globālais verdzības indekss” 2023',
      'https://www.walkfree.org/global-slavery-index/',
    ),
    sources: [
      cite(
        'Walk Free: “Globālais verdzības indekss” (Global Slavery Index)',
        'https://www.walkfree.org/global-slavery-index/',
      ),
      cite(
        'Walk Free: “Globālā verdzības indeksa” karte (Global Slavery Index map)',
        'https://www.walkfree.org/global-slavery-index/map/',
      ),
      cite(
        'Walk Free: galvenie globālie secinājumi (Global findings)',
        'https://www.walkfree.org/global-slavery-index/findings/global-findings/',
      ),
      cite(
        'Walk Free: lejupielādes (Downloads)',
        'https://www.walkfree.org/global-slavery-index/downloads/',
      ),
      cite(
        'Walk Free: “Globālais verdzības indekss” 2023, PDF (The Global Slavery Index 2023)',
        'https://cdn.walkfree.org/content/uploads/2023/05/17114737/Global-Slavery-Index-2023.pdf',
      ),
      cite(
        'SDO: “Mūsdienu verdzības globālās aplēses: piespiedu darbs un piespiedu laulības” (Global Estimates of Modern Slavery: Forced Labour and Forced Marriage)',
        'https://www.ilo.org/publications/major-publications/global-estimates-modern-slavery-forced-labour-and-forced-marriage',
      ),
      cite(
        'SDO, Walk Free un IOM: “Mūsdienu verdzības globālās aplēses”, 2022. gada septembris, ziņojums PDF formātā',
        'https://www.ilo.org/sites/default/files/2025-09/ILO_GEMS-2022_Report_EN_Web.pdf',
      ),
      cite(
        'SDO: 50 miljoni cilvēku pasaulē mūsdienu verdzībā, ziņa (50 million people worldwide in modern slavery)',
        'https://www.ilo.org/resource/news/50-million-people-worldwide-modern-slavery-0',
      ),
    ],
  },
  'basel-aml-index': {
    title: 'Naudas atmazgāšanas risks',
    cardMeta: 'Bāzeles naudas atmazgāšanas riska indekss 2025, publiskais izdevums, 177 jurisdikcijas.',
    hook: 'Riska vērtējumi no 0 līdz 10, kas rāda, cik lielā mērā valsts ir pakļauta naudas atmazgāšanai un saistītiem finanšu noziegumiem un cik labi tā spēj tiem pretoties, pēc Bāzeles Pārvaldības institūta vērtējuma.',
    description:
      'Bāzeles naudas atmazgāšanas riska indekss (Basel AML Index, kur AML nozīmē cīņu pret naudas atmazgāšanu) ir neatkarīgs reitings, ko kopš 2012. gada uztur Starptautiskais aktīvu atgūšanas centrs pie Bāzeles Pārvaldības institūta (Basel Institute on Governance). Tā 14. publiskais izdevums, kas iznāca 2025. gada decembrī, vērtē 177 valstis un jurisdikcijas skalā no 0 līdz 10, kur 10 nozīmē augstāko risku. Vērtējums apvieno 17 rādītājus no publiski pieejamiem avotiem piecās jomās: noteikumu kvalitāte pret naudas atmazgāšanu, terorisma finansēšanu un masu iznīcināšanas ieroču finansēšanu; korupcija un krāpšana; finanšu pārredzamība un standarti; valsts pārredzamība un atbildība; tiesiskie un politiskie riski.',
    whyOnShelf:
      'Bāzeles institūts naudas atmazgāšanu saista ar tādiem noziegumiem kā korupcija, krāpšana, vides noziegumi un narkotiku tirdzniecība. 2025. gadā augstākie riska vērtējumi ir Mjanmai (8,18), Haiti (8,12) un Kongo Demokrātiskajai Republikai (7,63), zemākie Somijai (3,03), Islandei (3,04) un Sanmarīno (3,08). Pasaules vidējais vērtējums nedaudz samazinājās no 5,30 līdz 5,28; vairāk nekā puse jurisdikciju uzlaboja rezultātu, bet 43% tas pasliktinājās.',
    howToRead:
      'Augstāks vērtējums nozīmē lielāku novērtēto ievainojamību un vājāku spēju pretoties naudas atmazgāšanai. Vērtējums ir salikts riska novērtējums, kas balstīts uz citu organizāciju datiem; vislielākais svars (35%) ir Finanšu darījumu darba grupas (FATF), starpvaldību institūcijas, kas nosaka pasaules standartus šajā jomā, novērtējumiem. Reitingā iekļautas tikai jurisdikcijas ar pietiekamiem datiem. Ilustrācijas kartē parādīta 81 jurisdikcija, ko ASV Valsts departaments nosaucis par galvenajām naudas atmazgāšanas jurisdikcijām 2024. gadā; departamenta ziņojums ir viens no indeksa publiskajiem avotiem.',
    caveats:
      'Datu vākšana 2025. gada izdevumam noslēdzās 2025. gada 10. novembrī. Krievija ir izslēgta no publiskā izdevuma saistībā ar tās dalības apturēšanu FATF. Atsevišķs ekspertu izdevums, ko atjaunina reizi ceturksnī, aptver 203 jurisdikcijas un sniedz vērtējumu katram rādītājam. ASV saraksts iezīmē valstis, kuru finanšu iestādes apgroza ievērojamas summas no starptautiskās narkotiku tirdzniecības, un sankcijas tam nav piesaistītas.',
    licenseNote: realMapCredit('lv', 'basel-aml-index') ?? '',
    imageAlt:
      'Pasaules karte: ASV Valsts departamenta 2024. gada galvenās naudas atmazgāšanas jurisdikcijas violetā krāsā, pārējās valstis bēšas, mazas teritorijas kā punkti',
    caption:
      '81 jurisdikcija, ko ASV Valsts departaments nosaucis par galvenajām naudas atmazgāšanas jurisdikcijām 2024. gadā. Šī karte rāda ASV Valsts departamenta sarakstu, nevis Bāzeles naudas atmazgāšanas riska indeksa vērtējumus.',
    figureTitle: 'Galvenās naudas atmazgāšanas jurisdikcijas, ko nosaucis ASV Valsts departaments, 2024',
    sectionHeads: heads,
    legend: [
      {
        title: 'ASV Valsts departamenta saraksts 2024. gadam. Mazas teritorijas attēlotas kā punkti.',
        items: [
          { swatch: '#6c2c5a', label: 'Nosaukta galvenā naudas atmazgāšanas jurisdikcija' },
          { swatch: '#e7e2d8', label: 'Nav šajā sarakstā' },
        ],
      },
    ],
    gridSource: cite(
      'Bāzeles Pārvaldības institūts, Bāzeles naudas atmazgāšanas riska indekss 2025',
      'https://index.baselgovernance.org/',
    ),
    sources: [
      cite(
        'Bāzeles naudas atmazgāšanas riska indekss: interaktīvā karte (Basel AML Index)',
        'https://index.baselgovernance.org/',
      ),
      cite(
        'Bāzeles naudas atmazgāšanas riska indekss: publiskais reitings (Public Ranking)',
        'https://index.baselgovernance.org/ranking',
      ),
      cite(
        'Bāzeles Pārvaldības institūts: indeksa apraksts (Basel AML Index)',
        'https://baselgovernance.org/basel-aml-index',
      ),
      cite(
        'Bāzeles Pārvaldības institūts: 2025. gada indekss rāda nevienmērīgu progresu cīņā pret finanšu noziegumiem, ziņa 2025. gada 8. decembrī (Basel AML Index 2025 reveals uneven progress in the global fight against financial crime)',
        'https://baselgovernance.org/resources/news/basel-aml-index-2025-reveals-uneven-progress-global-fight-against-financial-crime',
      ),
      cite(
        'Bāzeles Pārvaldības institūts: 2025. gada indekss, 14. publiskais izdevums, ziņojums PDF formātā (Basel AML Index 2025: 14th Public Edition)',
        'https://index.baselgovernance.org/api/assets/1cdb5e5f-f4c2-4738-918b-f2c4271c6313/Basel%20AML%20Index%202025.pdf',
      ),
      cite(
        'ASV Valsts departaments: “Starptautiskās narkotiku kontroles stratēģijas ziņojums” 2025 (2025 International Narcotics Control Strategy Report)',
        'https://www.state.gov/2025-international-narcotics-control-strategy-report',
      ),
      cite(
        'ASV Valsts departaments: “Starptautiskās narkotiku kontroles stratēģijas ziņojums” 2025, 2. sējums: naudas atmazgāšana, PDF (Volume 2: Money Laundering)',
        'https://www.state.gov/wp-content/uploads/2025/03/2025-International-Narcotics-Control-Strategy-Volume-2-Accessible.pdf',
      ),
    ],
  },
  'rule-of-law-index': {
    title: 'Tiesiskuma indekss',
    cardMeta: 'World Justice Project (Pasaules tiesiskuma projekts), Tiesiskuma indekss 2025, 143 valstis un jurisdikcijas.',
    hook: 'Kā iedzīvotāji un juristi 143 valstīs vērtē varas ierobežojumus, korupciju, valdības atklātību, pamattiesības, kārtību un drošību, regulējuma izpildi, kā arī civilo un krimināltiesību sistēmu; vērtējumi no 0 līdz 1 pēc World Justice Project datiem.',
    description:
      'Bezpeļņas organizācija World Justice Project (Pasaules tiesiskuma projekts) kopš 2009. gada katru gadu publicē Tiesiskuma indeksu. 2025. gada izdevums aptver 143 valstis un jurisdikcijas, kurās dzīvo 95% pasaules iedzīvotāju, un balstās uz vairāk nekā 215 000 mājsaimniecību aptaujām un 4100 praktizējošu juristu un ekspertu aptaujām. Valstis saņem vērtējumu no 0 līdz 1, kur 1 nozīmē vispilnīgāko tiesiskuma ievērošanu, astoņos faktoros: valdības pilnvaru ierobežojumi, korupcijas neesamība, atklāta pārvaldība, pamattiesības, kārtība un drošība, regulējuma izpilde, civilā justīcija un krimināljustīcija.',
    whyOnShelf:
      'Indekss mēra, kā tiesiskums izpaužas ikdienas dzīvē, no drošības un tiesām līdz ierēdņu kontrolei. 2025. gadā tiesiskums pasliktinājās 68% valstu, salīdzinot ar 57% gadu iepriekš; tas ir astotais gads pēc kārtas, kad pasliktinājumu ir vairāk nekā uzlabojumu. Visaugstāk ierindotas Dānija, Norvēģija, Somija, Zviedrija un Jaunzēlande; viszemāk Venecuēla, Afganistāna, Kambodža, Haiti un Nikaragva. Katara indeksā iekļauta pirmo reizi.',
    howToRead:
      'Katrs vērtējums apkopo attiecīgās valsts iedzīvotāju un juristu atbildes. Kritums nozīmē, ka valsts vērtējums no 2024. līdz 2025. gadam samazinājās; valstis ar kritumu vidēji zaudēja 1,07% vērtējuma, bet valstis ar uzlabojumu ieguva 0,52%. Faktoru vērtējumi un valstu profili pieejami indeksa vietnē. Ilustrācijas karte izmanto atsevišķu atvērtu datu kopu, Pasaules Bankas “Pasaules pārvaldības rādītājus” (Worldwide Governance Indicators): tiesiskuma vērtējumu no 0 līdz 100 par 215 ekonomikām 2025. gadā, kas aprēķināts no 35 starptautiskiem avotiem, tostarp mājsaimniecību un uzņēmumu aptaujām un ekspertu vērtējumiem.',
    caveats:
      'Dažiem rādītājiem dati pieejami tikai daļai no 143 valstīm. Pasaules Bankas vērtējums kartē atspoguļo uztveri par līgumu izpildi, īpašuma tiesībām, policijas un tiesu darbu, kā arī noziegumu un vardarbības iespējamību; tam ir sava skala un savs reitings.',
    licenseNote: realMapCredit('lv', 'rule-of-law-index') ?? '',
    imageAlt:
      'Pasaules karte ar Pasaules Bankas tiesiskuma vērtējumu 2025. gadā, gaiši zila pie zemākiem vērtējumiem un tumši zila pie augstākiem, mazas ekonomikas kā punkti',
    caption:
      'Tiesiskuma vērtējums no 0 līdz 100 Pasaules Bankas “Pasaules pārvaldības rādītājos”, 2025. gads, 215 ekonomikas.',
    figureTitle: 'Pasaules Banka, “Pasaules pārvaldības rādītāji”: tiesiskums, 2025',
    sectionHeads: heads,
    legend: [
      {
        title: 'Pasaules Bankas vērtējums, no 0 līdz 100',
        items: [
          { swatch: '#d5d0c8', label: 'Nav datu' },
          { swatch: '#c6dbef', label: 'zem 30' },
          { swatch: '#9ecae1', label: 'no 30 līdz 45' },
          { swatch: '#6baed6', label: 'no 45 līdz 60' },
          { swatch: '#3182bd', label: 'no 60 līdz 75' },
          { swatch: '#08519c', label: 'no 75 līdz 90' },
          { swatch: '#08306b', label: 'no 90 līdz 100' },
        ],
      },
    ],
    gridSource: cite(
      'Pasaules tiesiskuma projekts, Tiesiskuma indekss 2025',
      'https://worldjusticeproject.org/news/wjp-rule-law-index-2025-global-press-release',
    ),
    sources: [
      cite(
        'World Justice Project: Tiesiskuma indekss, interaktīvā versija (WJP Rule of Law Index)',
        'https://worldjusticeproject.org/index/',
      ),
      cite(
        'World Justice Project: paziņojums presei par 2025. gada indeksu (WJP Rule of Law Index 2025 Global Press Release)',
        'https://worldjusticeproject.org/news/wjp-rule-law-index-2025-global-press-release',
      ),
      cite(
        'World Justice Project: paziņojums presei PDF formātā (Global Press Release)',
        'https://worldjusticeproject.org/sites/default/files/documents/Global%20Press%20Release_EN.pdf',
      ),
      cite(
        'World Justice Project: Tiesiskuma indekss 2025, ziņojums PDF formātā (WJP Rule of Law Index 2025)',
        'https://worldjusticeproject.org/rule-of-law-index/downloads/WJPIndex2025.pdf',
      ),
      cite(
        'Pasaules Banka: “Pasaules pārvaldības rādītāji” (Worldwide Governance Indicators)',
        'https://www.worldbank.org/en/publication/worldwide-governance-indicators',
      ),
      cite(
        'Pasaules Bankas datu katalogs: “Pasaules pārvaldības rādītāji”, datu kopa (Worldwide Governance Indicators)',
        'https://datacatalog.worldbank.org/search/dataset/0038026/worldwide-governance-indicators',
      ),
      cite(
        'Pasaules Banka: pārvaldības aplēses un vērtējumi, 1996–2025, Excel fails (WGI 2026 Governance Estimates and Scores)',
        'https://datacatalogfiles.worldbank.org/ddh-published/0038026/DR0095947/WGI%202026%20Governance%20Estimates%20and%20Scores%20%281996-2025%29.xlsx',
      ),
    ],
  },
};
