import type { OceansPage } from './oceans';

export const lv: OceansPage = {
  metaTitle: 'Okeāni — Fix Planet',
  metaDescription:
    'Okeāna monitorings ar avotiem: NASA SST, Aquarius sāļums, straumes shēma un atsevišķas plastmasas, naftas, hlorofila un hipoksijas kartes — ne viltots «dzīvais okeāns».',
  choosePanel: 'Izvēlies plauktu',
  filterAria: 'Okeānu sadaļas',
  tiles: {
    currents: 'Nosauktie riņķojumi kā shēma. Dzīvais OSCAR ir modelis — Copernicus / ESR.',
    salinity: 'NASA Aquarius pirmā globālā karte. SMAP ir Worldview, ne kā filma pie mums.',
    sst: 'GHRSST MUR, absolūtā SST 2003–2025 un anomālijas gadiem, ko GIBS tiešām atdod.',
    pollution: 'Plastmasa, nafta, hlorofils, mirušās zonas — četri kopumi, ne viens viltots rastrs.',
    numbers: 'Okeāna siltums, pH, plastmasas vērtējumi, hipoksija — ar citātu un gadu.',
  },
  panels: {
    currents: 'Straumes',
    salinity: 'Sāļums',
    sst: 'Jūras virsmas temperatūra',
    pollution: 'Piesārņojums',
    numbers: 'Skaitļi',
  },
  leads: {
    currents:
      'Mēs nehostējam nepārtrauktu globālu straumes animāciju. OSCAR ir NASA finansēts modelis no jūras virsmas augstuma, vēja un SST — ne nofilmēta straume. Zemāk ir 1943. gada ASV armijas shēma ar nosauktiem riņķojumiem. Dzīvais skatītājs: Copernicus Marine vai ESR OSCAR.',
    salinity:
      'Hostētie kadri ir NASA Aquarius (misija 2011–2015). Tas ir novērots virsmas sāļums, sāls grami uz kilogramu ūdens. SMAP turpina rindu; dzīvais slānis ir Worldview. World Ocean Atlas ir klimatoloģija, ne diena.',
    sst: 'Galvenā vadība: NASA GHRSST MUR L4, absolūtā jūras virsmas temperatūra 1. jūlijā, 2003–2025. Tas ir jauktu satelīta SST analīzes produkts, ne viens sensors. Anomālija rāda novirzi no MUR klimatoloģijas — citādi varavīksne ekvators–pols slēpj sasilšanu.',
    pollution:
      'Godīga viena «okeāna piesārņojuma» rastra nav. Plastmasa šeit ir modelēta koncentrācija ziemeļu Klusajā okeānā (Lebreton 2018). Nafta ir viens NASA MODIS notikums (Deepwater Horizon), ne globāla plankumu klimatoloģija. Hlorofils-a ir ziedēšanas aizstājējs, ne nitrātu karte. Mirušās zonas ir hipoksijas apkopojums, ne šīs nedēļas skābeklis.',
    numbers:
      'Tikai publicēti skaitļi. Siltums, skābums, plastmasa un hipoksija ir dažādi reģistri. Nesaskaiti tos vienā viltotā okeāna veselības indeksā.',
  },
  honestyCurrents:
    'Nepārtrauktu globālu straumes animāciju godīgi nevar hostēt. OSCAR GIBS slāņi ir zonālā un meridiānā komponente; mūsu snapshot nezīmē ātruma karti. 1943. gada plate ir shēma ar nosauktām straumēm un ledus robežām — ne OSCAR, ne 2025, ne drifteri.',
  honestySalinity:
    'Aquarius beidzās 2015. Šie kadri nav SMAP un nav World Ocean Atlas. SMAP mēneša sāļums ir NASA Worldview; mēs nehostējam tukšu GIBS plati un nesaucam to par sāļumu.',
  honestySst:
    'Absolūtā SST galvenokārt ir stāvošais gradients ekvators–pols. Gads pret gadu šajā mērogā gandrīz nav redzams. Anomālija (2020–2024, gadi, ko GIBS tiešām atdod) ir sasilšanas un El Ninjo aina. MUR ir analīzes produkts, jaukta SST ~1 km, ne jēls MODIS granuls.',
  honestyPollution:
    'Nelasiet šos četrus kadrus kā vienu slāni. Atkritumu plankuma modelis nav naftas noplūde. Hlorofils nav mēslojums. 2008. gada mirušo zonu apkopojums nav dzīva hipoksija.',
  modeSst: 'Absolūtā SST',
  modeAnomaly: 'SST anomālija',
  fidelitySst: 'Analīze · absolūtā SST',
  fidelityAnomaly: 'Analīze · SST anomālija',
  fidelitySalinity: 'Satelīts · Aquarius SSS',
  fidelityCurrents: 'Shēma · nosaukti riņķojumi',
  scrubberAria: 'Jūras virsmas temperatūras gads',
  salinityAria: 'Sāļuma kadri',
  yearLabel: 'Gads',
  sourceLabel: 'Avots',
  licenseLabel: 'Licence',
  vintageLabel: 'Datējums',
  howToReadSst:
    'Absolūtajās platēs: sarkans/oranžs ir silts, violets ir auksts. Sauszeme ir melna. Salīdzini baseinus un rietumu robežas straumes (Golfa straume, Kurošio), ne vienu pikseļu. Anomālijās: sarkani siltāki par MUR klimatoloģiju, zili vēsāki. Sarkans ekvatoriālais Klusais okeāns bieži ir El Ninjo, ne «viss okeāns vārījās».',
  caveatsSst:
    '1. jūlijs ir viena diena dienas analīzē. Mākoņu spraugas aizpilda MUR maisījums. Hostējam 1. jūliju, lai gadi būtu salīdzināmi. Anomālijas pirms 2020 GIBS snapshotos neuzzīmējās — mēs tās neizdomājam.',
  howToReadSalinity:
    '2011. gada globālajā platē: violets/zils ir saldāks (Amazone, Bengālijas līcis, augstie platumi); dzeltens/sarkans ir sāļāks (subtropu Atlantija, Arābu jūra). Vienības g/kg, tuvu praktiskajam sāļumam. Otrais kadrs ir tās pašas misijas Atlantijas 3D skats — ne vēlāks gads.',
  openWorldviewSst: 'Atvērt NASA Worldview SST →',
  openWorldviewAnom: 'Atvērt NASA Worldview, SST anomālija →',
  openWorldviewSmap: 'Atvērt NASA Worldview, SMAP sāļums →',
  openOscar: 'Atvērt ESR OSCAR (modelētās straumes) →',
  openCopernicus: 'Atvērt Copernicus Marine →',
  openNoaaPollution: 'Atvērt NOAA jūras piesārņojuma uzraudzību →',
  openOceanColor: 'Atvērt NASA Ocean Color →',
  gfwStyleNote:
    'Tā pati godīgums kā Mežiem → Global Forest Watch: daži likumīgi kadri pie mums, dzīvais skatītājs pie avota, ko nemirrorējam.',
  oscarNote:
    'OSCAR jauktā slāņa ātrumi rēķināti no satelīta SSH, vektora vēja un SST (geostrofija, Ekman, termiskais vējš). Dienas lauki 0,25°, no 1993. Tā nav straumes mērītājs katrā okeāna rūtiņā.',
  smapNote:
    'SMAP virsmas sāļums (RSS mēnesis / 8 dienas) turpinās pēc Aquarius. World Ocean Atlas 2023 ir in situ klimatoloģija (desmitgades, pudeles un pludiņi) — cits produkts.',
  numbersNote:
    'Nokopēts no nosauktajām publikācijām. Mēs neinterpolējām holocēna pH filmu un ne 2026. gada plastmasas tautas skaitīšanu.',
  distinguishTitle: 'Siltums nav pH. Hlorofils nav plastmasa. Riņķojums nav atkritumu sala.',
  distinguish:
    'IPCC AR6: okeāns uzņēmis ap 90 procentiem klimata sistēmas liekā siltuma. Cheng et al. 2024: 0–2000 m okeāna siltuma saturs 2023. (un 2024. atjauninājums) ir instrumentālā rindas virsotnē — tas ir siltuma inventārs, ne SST šajā kartē. Virsmas pH krities par ap 0,1 kopš ~1750 (aptuveni +30 procenti ūdeņraža jonu koncentrācijas); tā ir ķīmija, ne temperatūra. Jambeck 2015: 4,8–12,7 miljoni tonnu plastmasas no sauszemes okeānā 2010. gadā — plūsma, ne krājums Lielajā Klusā okeāna atkritumu plankumā. Eriksen 2014: vismaz 5,25 triljoni peldošu daļiņu. Breitburg 2018: vairāk nekā 500 piekrastes vietas ar antropogēnu hipoksiju un paplašinošās skābekļa minimuma zonas. Nekas no tā nav viens «piesārņojuma indekss».',
  pollutionKinds: {
    plastics: {
      title: 'Plastmasa — modelēta koncentrācija ziemeļu Klusajā okeānā',
      lead: 'Ne satelīta foto ar atkritumiem. Ne globāls plastmasas rastrs. Lebreton et al. 2018: modelēta masas koncentrācija (kg/km²) 2015. gada augustam Lielajā Klusā okeāna atkritumu plankumā. «Plankums» ir augstas koncentrācijas zona riņķojumā, ne sala, pa kuru var staigāt.',
      caption:
        'Lebreton et al. 2018, Scientific Reports. Modelēta masas koncentrācija, ziemeļu Klusais okeāns, 2015. gada augusts. CC BY 4.0.',
      imageAlt:
        'Izolīniju karte ar modelētu plastmasas masas koncentrāciju starp Havajām un Kaliforniju, sarkans kodols GPGP',
    },
    oil: {
      title: 'Nafta — viens novērots izlijums, ne globāla naftas karte',
      lead: 'NASA Terra MODIS, 2010. gada 24. maijs: Deepwater Horizon plankums Meksikas līcī. Tas ir notikuma kadrs. Godīgas globālas «naftas piesārņojuma» klimatoloģijas šajā lapā nav. Pašreizējie SAR/VIIRS ziņojumi: NOAA NESDIS.',
      caption: 'NASA Terra MODIS. Deepwater Horizon naftas plankums, 2010. gada 24. maijs. Sabiedriskais īpašums.',
      imageAlt:
        'Satelīta skats uz Meksikas līci ar tumšu naftas plankumu uz dienvidiem no Misisipi deltas, 2010. gada maijs',
    },
    nutrient: {
      title: 'Barības vielu aizstājējs — hlorofils-a, ne nitrātu rastrs',
      lead: 'NASA okeāna krāsas hlorofils-a, 2019. gada oktobris. Zaļš ir vairāk fitoplanktona pigments. Bieži seko barības vielu pieplūdei (apvele, notece, ziedēšana), bet tā nav slāpekļa vai fosfora karte un nav mirusī zona.',
      caption:
        'NASA ocean color, hlorofila-a koncentrācija, 2019. gada oktobris. Sabiedriskais īpašums. Vienības mg/m³.',
      imageAlt:
        'Mollveides okeāna hlorofila karte: zili riņķojumi, zaļi krasti un augstie platumi, pelēka sauszeme',
    },
    deadzones: {
      title: 'Mirušās zonas — hipoksijas vietu apkopojums',
      lead: 'NASA Earth Observatory pēc Roberta Diasa (VIMS): sarkani punkti ir piekrastes eitrofikācijas saistītās hipoksijas zonas, 2008. gada apkopojums. Tas nav šā gada Meksikas līča prognoze un nav tas pats, kas hlorofila plate.',
      caption:
        'NASA Earth Observatory, Aquatic Dead Zones, pēc Diasa. Sabiedriskais īpašums. Datējums: 2008. gada apkopojums.',
      imageAlt:
        'Pasaules karte ar sarkaniem punktiem piekrastes jūrās — dokumentētas hipoksiskas mirušās zonas',
    },
  },
  units: {
    percent: '% liekā siltuma',
    pH: 'pH vienības kopš ~1750',
    millionTonnes: 'milj. tonnu / gadā',
    trillion: 'trilj. daļiņu',
    sites: 'piekrastes vietas',
    ohc: 'rekords OHC 0–2000 m',
  },
  frames: {
    'sst-2003': {
      label: '2003',
      title: 'Absolūtā SST, 2003. gada 1. jūlijs',
      caption:
        'Agrīnā MUR analīzes ēra. Sarkana ekvatoriāla josla un violets polārais ūdens ir stāvošais gradients. Tā nav anomāliju karte.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2003. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2010': {
      label: '2010',
      title: 'Absolūtā SST, 2010. gada 1. jūlijs',
      caption:
        'Tas pats MUR absolūtais lauks. Rietumu robežas straumes (Golfa straume, Kurošio) kā silti pavedieni. Gada jūras karstuma vilni labāk redz anomāliju plauktā.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2010. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2015': {
      label: '2015',
      title: 'Absolūtā SST, 2015. gada 1. jūlijs',
      caption:
        '2015.–16. bija spēcīgs El Ninjo klimata ierakstā. Absolūtajā platē ekvatoriālais Klusais okeāns vienmēr ir silts; notikumu rāda anomālija.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2015. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2020': {
      label: '2020',
      title: 'Absolūtā SST, 2020. gada 1. jūlijs',
      caption:
        'Satelīta ēras vidus šajā skruberī. Salīdzini ar 2020. anomāliju plauktā — tur redzams 2020. gadu siltums.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2020. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2024': {
      label: '2024',
      title: 'Absolūtā SST, 2024. gada 1. jūlijs',
      caption:
        '2023.–24. okeāna siltuma ieraksta virsotnē (Cheng et al. 2024). Absolūtā varavīksne joprojām izskatās pēc «tropi ir silti». Atver anomālijas režīmu.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2024. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2025': {
      label: '2025',
      title: 'Absolūtā SST, 2025. gada 1. jūlijs',
      caption:
        'Jaunākā 1. jūlija absolūtā plate, ko hostējam. Citas dienas — dzīvais MUR NASA Worldview.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2025. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-anom-2020': {
      label: '2020',
      title: 'SST anomālija, 2020. gada 1. jūlijs',
      caption:
        'MUR SST mīnus MUR klimatoloģija. Sarkani siltāki par normu, zili vēsāki. Šis slānis rāda jūras karstuma viļņus.',
      imageAlt: 'Ekvirektangulāra SST anomālijas karte, 2020. gada 1. jūlijs: sarkani un zili uz melnas sauszemes',
    },
    'sst-anom-2022': {
      label: '2022',
      title: 'SST anomālija, 2022. gada 1. jūlijs',
      caption: 'Tas pats anomālijas slānis, 2022. Salīdzini Ziemeļatlantiju un ekvatoriālo Kluso okeānu ar 2023.–24.',
      imageAlt: 'Ekvirektangulāra SST anomālijas karte, 2022. gada 1. jūlijs: sarkani un zili uz melnas sauszemes',
    },
    'sst-anom-2023': {
      label: '2023',
      title: 'SST anomālija, 2023. gada 1. jūlijs',
      caption:
        '2023: attīstās El Ninjo ekvatoriālajā Klusajā okeānā un ļoti silta Ziemeļatlantija. Anomālija, ne absolūtā SST.',
      imageAlt:
        'Ekvirektangulāra SST anomālijas karte, 2023. gada 1. jūlijs: spēcīgi sarkani ekvatoriālajā Klusajā okeānā un Ziemeļatlantijā',
    },
    'sst-anom-2024': {
      label: '2024',
      title: 'SST anomālija, 2024. gada 1. jūlijs',
      caption:
        'Jaunākā jūlija anomālija, ko hostējam. Joprojām analīzes produkts. Citas dienas — Worldview.',
      imageAlt: 'Ekvirektangulāra SST anomālijas karte, 2024. gada 1. jūlijs: sarkani un zili uz melnas sauszemes',
    },
    'sal-2011': {
      label: '2011',
      title: 'Aquarius pirmā globālā sāļuma karte',
      caption:
        'NASA Aquarius, 2011. gada 25. aug. – 11. sept.: pirmā globālā virsmas sāļuma karte no šīs misijas. Novērota mikroviļņu SSS, ne WOA klimatoloģija. Saldāki Amazonas un Gangas plūsmas; sāļāka subtropu Atlantija.',
      imageAlt:
        'Mollveides okeāna virsmas sāļuma karte no Aquarius, 2011, no violeta salda līdz sarkanam sāļam',
    },
    'sal-atlantic': {
      label: 'Atlantija',
      title: 'Atlantijas sāls plankums, Aquarius (3D)',
      caption:
        'NASA Aquarius vizualizācija Ziemeļatlantijas augsta sāļuma reģionam. Tā pati misija, cita grafika — ne vēlāks gads un ne SMAP.',
      imageAlt:
        '3D globuss ar centru uz Atlantiju, Aquarius sāļuma krāsas no zila līdz sarkanam',
    },
    'currents-1943': {
      label: '1943',
      title: 'Nosauktie riņķojumi (shēma)',
      caption:
        'ASV armijas atlants, 1943: siltās un aukstās virsmas straumes, ledus robežas, nosauktie dreifi (Golfa straume, Kurošio, Humboldts, Agulhas). Mācību shēma. Ne OSCAR, ne satelīta altimetrija, ne 2025.',
      imageAlt:
        'Vintage pasaules karte ar nosauktām okeāna straumēm oranžā un zaļā ar ledus šrafējumu pie poliem',
    },
  },
  stats: {
    heatShare: {
      label: 'Liekais siltums okeānā',
      text: 'Ap 90 procentiem klimata sistēmas liekā siltuma glabājas okeānā (IPCC AR6 WG1). Tas ir enerģijas inventārs, ne SST varavīksne karšu plauktā.',
    },
    ohcRecord: {
      label: 'Okeāna siltuma saturs, nesenais maksimums',
      text: 'Cheng et al. 2024 (Adv. Atmos. Sci.): 0–2000 m okeāna siltuma saturs 2023. gadā sasniedza jaunu instrumentālo maksimumu, 2024. atjauninājumi paliek rindas virsotnē. Siltuma saturs, ne viena SST diena.',
    },
    phDrop: {
      label: 'Virsmas pH kritums',
      text: 'Atklātā okeāna virsmas pH kritis par ap 0,1 kopš ~1750 — aptuveni 26–30 procentu ūdeņraža jonu koncentrācijas pieaugums (IPCC AR6; NOAA PMEL). Ķīmija, ne temperatūra, un ne karte šajā lapā.',
    },
    plasticLand: {
      label: 'Plastmasa no sauszemes okeānā',
      text: 'Jambeck et al. 2015, Science: 4,8–12,7 miljoni metrisko tonnu plastmasas atkritumu no sauszemes okeānā 2010. gadā. 2010. gada plūsmas vērtējums, ne masa Lielajā Klusā okeāna plankumā.',
    },
    plasticFloat: {
      label: 'Peldošas plastmasas daļiņas',
      text: 'Eriksen et al. 2014: vismaz 5,25 triljoni daļiņu (268 940 tonnas) uz virsmas. Krājuma vērtējums no tīklu vilcieniem un modeļa — ne Lebreton 2018 koncentrācijas plate.',
    },
    deadZones: {
      label: 'Piekrastes hipoksijas vietas',
      text: 'Breitburg et al. 2018, Science: vairāk nekā 500 piekrastes vietas ar antropogēnu hipoksiju plus paplašinošās atklātā okeāna skābekļa minimuma zonas (~4,5 miljoni km²). Diasa agrākais apkopojums jau bija >400. Ne hlorofila plate.',
    },
  },
};
