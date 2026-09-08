import type { OceansPage } from './oceans';

export const lv: OceansPage = {
  metaTitle: 'Okeāni — Fix Planet',
  metaDescription:
    'Jūras straumes, sāļums, jūras virsmas temperatūra un piesārņojums: kas tas ir, kāpēc tas svarīgi planētai, kartes un skaitļi ar nosauktiem avotiem.',
  eyebrow: 'Pasaules okeāns',
  title: 'Okeāni',
  hubLead: [
    'Pasaules okeāns sedz ap 71 procentu Zemes virsmas. Tajā uzkrāta lielākā daļa klimata sistēmas liekā siltuma; straumes pārnes ūdeni un sāli starp baseiniem, un virsma uzņem ievērojamu daļu oglekļa dioksīda no gaisa.',
    'Zemāk — straumes, sāļums, jūras virsmas temperatūra un piesārņojums. Katrai kartei ir nosaukts datu kopums un datums.',
  ],
  choosePanel: 'Izvēlies plauktu',
  heroNote:
    'Skaitļi ar avotiem. Okeāna siltums nav SST; pH ir ķīmija; plastmasas plūsma nav krājums riņķojumā.',
  heroSources: 'Avoti un definīcijas →',
  filterAria: 'Okeānu sadaļas',
  back: '← Okeāni',
  tiles: {
    currents: 'Virsmas straumes un lielie riņķojumi, kas nes siltumu, sāli un dzīvību.',
    salinity: 'Cik sāļa ir jūra un kāpēc blīvums palīdz dzīt dziļo cirkulāciju.',
    sst: 'Jūras virsmas temperatūra — parastais klimats un gadi siltāki vai vēsāki par normu.',
    pollution: 'Pieci subtropu atkritumu plankumi, nafta, fitoplanktona ziedēšana un piekrastes mirušās zonas.',
    numbers: 'Siltums, skābums, plastmasa un hipoksija — katrs lielums no nosauktas publikācijas.',
  },
  panels: {
    currents: 'Straumes',
    salinity: 'Sāļums',
    sst: 'Jūras virsmas temperatūra',
    pollution: 'Piesārņojums',
    numbers: 'Skaitļi',
  },
  leads: {
    currents: [
      'Jūras straumes ir pastāvīgas vai periodiskas ūdens plūsmas Pasaules okeānā un jūrās. Tās iedala pastāvīgās (subtropu riņķojumi), periodiskās (paisuma) un neregulārās (vēja dzītas plūsmas pēc vētras).',
      'Virsmas straumes nosaka vējš, Zemes griešanās (Koriolisa spēks) un baseinu aprises. Tās pārnes siltumu no tropiem uz augstajiem platuma grādiem, nes sāli, barības vielas un kāpurus, iezīmē ledus un dreifējošu atkritumu ceļus.',
      'Kartē — 1943. gada mācību shēma: nosauktas virsmas straumes un ledus robežas. Modelētie mūsdienu straumes lauki ir Copernicus Marine un ESR OSCAR.',
    ],
    salinity: [
      'Sāļums ir izšķīdušo sāļu daudzums jūras ūdenī. Atklātā okeāna virsmā tas parasti ir ap 32–37 gramiem sāls uz kilogramu ūdens: praktiskais sāļums, skaitliski tuvu PSU skalai.',
      'Sāļāks ūdens ir blīvāks. Kopā ar temperatūru sāļums nosaka blīvumu, kas dzen termohalīno cirkulāciju — lēno apgriezienu, kas saista virsmas straumes ar dziļumu. Upes, lietus un kūstošs ledus virsmu padara saldāku; iztvaikošana un jūras ledus veidošanās — sāļāku.',
      'Attēli ir NASA Aquarius misijas (2011–2015) novērojumi: jūras virsmas sāļums.',
    ],
    sst: [
      'Jūras virsmas temperatūra (SST) ir okeāna augšējā slāņa temperatūra — no milimetra daļām līdz dažiem metriem, atkarībā no mērītāja. Tā ietekmē iztvaikošanu, vētras, jūras karstuma viļņus un siltuma un oglekļa apmaiņu ar gaisu.',
      'Parastā aina ir silti tropi un aukstas polārās jūras; rietumu robežas straumes (Golfa straume, Kurošio) redzamas kā silti pavedieni. Gadu pret gadu izmaiņas vieglāk lasīt kā anomāliju — novirzi no daudzgadu klimatoloģijas — nekā absolūtajā varavīksnē ekvators–pols.',
      'Kartes ir NASA GHRSST MUR analīze uz 1. jūliju, 2003–2025. Anomālijas šajā lapā ir 2020.–2024. gads.',
    ],
    pollution: [
      'Okeānu piesārņo dažādi: noturīga plastmasa, nafta no urbumiem un kuģiem, barības vielu pārbagātība, kas dzen aļģu ziedēšanu, un hipoksija, kad šī organiskā masa sadalās.',
      'Vienas kartes visam tam nav. Zemāk atsevišķi datu kopumi. Pirmais atbild uz parasto jautājumu: lielo subtropu atkritumu plankumu ir pieci — paaugstinātas plastmasas koncentrācijas zonas lielajos riņķojumos, ne peldošas salas. Tad tuvāks ziemeļu Klusā okeāna modelis, viens novērots naftas izlijums, hlorofila-a apkopojums un piekrastes mirušo zonu saraksts.',
    ],
    numbers: [
      'Publicēti lielumi, katrs no nosaukta avota. Okeāna platība, siltums, jūras līmeņa kāpums, skābums, skābeklis, plastmasa, zveja, koraļļi, hipoksija un aizsargājamās akvatorijas ir dažādi mērījumi; tos nesaskaita vienā rādītājā.',
    ],
  },
  honestyCurrents:
    'ASV armijas atlants, 1943: nosauktas virsmas straumes un ledus robežas. Mācību shēma, ne satelīta straumes lauks.',
  honestySalinity:
    'NASA Aquarius, 2011–2015. Novērots virsmas sāļums, g/kg. Vēlākie mēneši: SMAP NASA Worldview.',
  honestySst:
    'NASA GHRSST MUR L4, 1. jūlijs. Absolūtā SST ir lauks ekvators–pols; anomālija ir novirze no MUR klimatoloģijas.',
  honestyPollution:
    'Pieci attēli: piecu riņķojumu plastmasa (Eriksen 2014), ziemeļu Klusā okeāna modelis (Lebreton 2018), viens naftas izlijums, hlorofils-a, hipoksijas apkopojums.',
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
    'Absolūtajās kartēs: sarkans un oranžs ir silts, violets ir auksts, sauszeme ir melna. Salīdzini baseinus un rietumu robežas straumes, ne vienu pikseļu. Anomālijās: sarkani siltāki par MUR klimatoloģiju, zili vēsāki. Sarkans ekvatoriālais Klusais okeāns bieži ir El Ninjo.',
  caveatsSst:
    'Katra karte ir 1. jūlijs dienas analīzē, lai gadus varētu salīdzināt. Mākoņu spraugas aizpilda MUR maisījums. Anomāliju pirms 2020. gada šajā lapā nav.',
  howToReadSalinity:
    '2011. gada globālajā kartē violets un zils apzīmē saldāku ūdeni (Amazonas un Gangas plūsmas, augstie platumi); dzeltens un sarkans — sāļākas subtropu jūras, it īpaši Ziemeļatlantiju un Arābu jūru. Vienības: g/kg. Otrais attēls ir tās pašas misijas Atlantijas telpisks skats.',
  openWorldviewSst: 'Atvērt NASA Worldview SST →',
  openWorldviewAnom: 'Atvērt NASA Worldview, SST anomālija →',
  openWorldviewSmap: 'Atvērt NASA Worldview, SMAP sāļums →',
  openOscar: 'Atvērt ESR OSCAR (modelētās straumes) →',
  openCopernicus: 'Atvērt Copernicus Marine →',
  openNoaaPollution: 'Atvērt NOAA jūras piesārņojuma uzraudzību →',
  openNoaaPatches: 'Atvērt NOAA: atkritumu plankumi →',
  openOceanColor: 'Atvērt NASA Ocean Color →',
  oscarNote:
    'OSCAR (Ocean Surface Current Analyses Real-time) novērtē jauktā slāņa ātrumu no satelīta jūras virsmas augstuma, vektora vēja un SST — geostrofija, Ekmana dreifs, termiskais vējš. Dienas lauki 0,25°, no 1993. gada.',
  smapNote:
    'SMAP misija turpina mikroviļņu virsmas sāļuma mērījumus pēc Aquarius. World Ocean Atlas 2023 ir atsevišķa in situ klimatoloģija: pudeles, CTD un pludiņi, vidējots daudzu gadu gaitā.',
  numbersNote:
    'Nokopēts no citētajām publikācijām, ar gadu. Siltuma saturs nav SST; pH ir ķīmija, ne temperatūra; plastmasas plūsma nav krājums riņķojumā; noteikta MPA nav pilnībā aizsargāts okeāns.',
  distinguishTitle: 'Ko šie skaitļi īsti mēra',
  distinguish:
    'IPCC SROCC: okeāns sedz ap 71 procentu Zemes virsmas. IPCC AR6: tas uzņēmis ap 90 procentiem klimata sistēmas liekā siltuma; vidējais jūras līmenis auga par 3,7 mm/gadā 2006.–2018. Cheng et al. 2024: 0–2000 m okeāna siltuma saturs 2023. gadā (un 2024. atjauninājums) ir instrumentālā rindas virsotnē — siltuma krājums ūdens stabiņā, ne SST karte augstāk. Virsmas pH kritis par ap 0,1 kopš ~1750 (IPCC AR6; NOAA PMEL). Atklātā okeāna skābeklis augšējos 1000 m kritis par 0,5–3,3 procentiem 1970.–2010. (IPCC SROCC) — saistīts ar, bet nav tas pats, kas piekrastes hipoksijas vietas (Breitburg et al. 2018: >500). Jambeck et al. 2015: 4,8–12,7 miljoni tonnu plastmasas no sauszemes okeānā 2010. gadā — plūsma, ne masa riņķojumā. FAO 2025: 35,5 procenti vērtēto jūras krājumu ir pārzvejoti (stāvoklis 2021). GCRMN 2020: ap 14 procentiem cieto koraļļu zuduši no rifiem 2009.–2018. Protected Planet Report 2024: 8,4 procenti jūras un piekrastes platību aizsargājamās teritorijās un OECM — noteiktais pārklājums, ne pilnībā aizsargāta daļa.',
  pollutionKinds: {
    patches: {
      title: 'Pieci atkritumu plankumi',
      lead: 'Piecos lielajos subtropu riņķojumos ir paaugstināta peldošās plastmasas koncentrācija: ziemeļu Klusais okeāns, dienvidu Klusais okeāns, Ziemeļatlantija, Dienvidatlantija un Indijas okeāns. Atkritumu plankums ir paaugstinātas koncentrācijas zona — galvenokārt sīki fragmenti, ne cieta peldoša sala. Kartes ir Eriksen et al. 2014: modelēts daļiņu skaita blīvums (gab./km²) pēc izmēra klases, no tīklu vilcieniem un vizuāliem uzskaites braucieniem visos piecos riņķojumos. Ziemeļu Klusā okeāna plankums ir vislabāk pētītais; rietumu sakopojums pie Japānas pieder tam pašam riņķojumam, ne sestajam subtropu plankumam. Arktikas un Barenca jūras koncentrācijas mēdz aplūkot atsevišķi, un tās nav viens no šiem pieciem.',
      caption:
        'Eriksen et al. 2014, PLOS ONE. Modelēts daļiņu skaita blīvums (gab./km²) četrās izmēru klasēs. CC0. Paraugi 2007.–2013.; ne satelīta foto ar atkritumu salām. NOAA izglītības materiāli apraksta tos pašus piecus subtropu riņķojumus.',
      imageAlt:
        'Četras pasaules kartes ar modelētu peldošās plastmasas skaita blīvumu četrās izmēru klasēs, oranži sarkani sakopojumi piecos subtropu riņķojumos',
      seeAlso: 'Lielais Klusā okeāna atkritumu plankums — ziemeļu Klusā okeāna modelis ↓',
    },
    plastics: {
      title: 'Lielais Klusā okeāna atkritumu plankums',
      lead: 'Lielais Klusā okeāna atkritumu plankums, starp Havajām un Kaliforniju, ir vislabāk pētītais no pieciem subtropu sakopojumiem — ūdens ar vairāk atkritumu ziemeļu Klusā okeāna riņķojumā, ne sala, pa kuru var staigāt. Rietumu koncentrācija pie Japānas pieder tam pašam riņķojumam. Lielākā daļa plastmasas ir sīki fragmenti. Karte rāda modelētu masas koncentrāciju (kg/km²) 2015. gada augustam.',
      caption:
        'Lebreton et al. 2018, Scientific Reports. Modelēta masas koncentrācija, ziemeļu Klusais okeāns, 2015. gada augusts. CC BY 4.0.',
      imageAlt:
        'Izolīniju karte ar modelētu plastmasas masas koncentrāciju starp Havajām un Kaliforniju, sarkans kodols GPGP',
      seeAlso: 'Pieci subtropu atkritumu plankumi ↑',
    },
    oil: {
      title: 'Nafta',
      lead: 'Nafta uz jūras virsmas izplūst plānā kārtiņā un ir saskatāma no kosmosa. Attēls ir NASA Terra MODIS 2010. gada 24. maijā, Deepwater Horizon izlijums Meksikas līcī — viens liels gadījums. Operatīvie ziņojumi par plankumiem: radars un VIIRS NOAA NESDIS.',
      caption: 'NASA Terra MODIS. Deepwater Horizon naftas plankums, 2010. gada 24. maijs. Sabiedriskais īpašums.',
      imageAlt:
        'Satelīta skats uz Meksikas līci ar tumšu naftas plankumu uz dienvidiem no Misisipi deltas, 2010. gada maijs',
    },
    nutrient: {
      title: 'Hlorofils',
      lead: 'Fitoplanktonam vajag gaismu un barības vielas. Hlorofils-a, šo šūnu zaļais pigments, tiek kartēts no okeāna krāsas. Augstas vērtības bieži iezīmē apveli, upju plūsmas un ziedēšanu; dzidrie subtropu riņķojumi ir nabadzīgi. Hlorofils ir dzīvas biomasas aizstājējs, ne nitrātu vai fosfātu karte un ne mirusī zona.',
      caption:
        'NASA ocean color, hlorofila-a koncentrācija, 2019. gada oktobris. Sabiedriskais īpašums. Vienības mg/m³.',
      imageAlt:
        'Mollveides okeāna hlorofila karte: zili riņķojumi, zaļi krasti un augstie platumi, pelēka sauszeme',
    },
    deadzones: {
      title: 'Mirušās zonas',
      lead: 'Mirusī zona ir ūdens posms, kur izšķīdušā skābekļa ir par maz lielākajai daļai dzīvnieku. Piekrastē tas bieži seko eitrofikācijai: lieks slāpeklis un fosfors, ziedēšana, tad sadalīšanās, kas patērē skābekli. Karte atzīmē apkopotas piekrastes hipoksijas vietas pēc Diasa (2008). Atklātā okeāna skābekļa minimuma zonas ir radniecīga, lielāka mēroga parādība.',
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
    earthSurface: '% Zemes virsmas',
    mmYear: 'mm / gadā',
    oxygen: '% O₂, augšējie 1000 m',
    stocks: '% krājumu',
    coral: '% koraļļu, 2009–18',
    mpa: '% okeāna, 2024',
    millionHa: 'milj. ha',
  },
  frames: {
    'sst-2003': {
      label: '2003',
      title: 'Absolūtā SST, 2003. gada 1. jūlijs',
      caption:
        'Agrīnā MUR analīze. Sarkana ekvatoriāla josla un violets polārais ūdens ir parastais klimats: tropi silti, augstie platumi auksti.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2003. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2010': {
      label: '2010',
      title: 'Absolūtā SST, 2010. gada 1. jūlijs',
      caption:
        'Tas pats MUR absolūtais lauks. Rietumu robežas straumes — Golfa straume, Kurošio — redzamas kā silti pavedieni. Gada jūras karstuma vilnis skaidrāks anomāliju kartēs.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2010. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2015': {
      label: '2015',
      title: 'Absolūtā SST, 2015. gada 1. jūlijs',
      caption:
        '2015.–16. bija spēcīgs El Ninjo. Absolūtajā kartē ekvatoriālais Klusais okeāns vienmēr ir silts; pats notikums ir anomāliju plauktā.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2015. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2020': {
      label: '2020',
      title: 'Absolūtā SST, 2020. gada 1. jūlijs',
      caption:
        'Šīs jūlija sērijas vidus. Salīdzini ar 2020. anomāliju plauktā: tur 2020. gadu siltums redzams labāk.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2020. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2024': {
      label: '2024',
      title: 'Absolūtā SST, 2024. gada 1. jūlijs',
      caption:
        '2023.–24. okeāna siltuma ieraksta virsotnē (Cheng et al. 2024). Absolūtā varavīksne joprojām lasās kā «tropi ir silti»; novirzi rāda anomālijas režīms.',
      imageAlt:
        'Ekvirektangulāra jūras virsmas temperatūras karte, 2024. gada 1. jūlijs: sarkani tropi, violeti polārie okeāni, melna sauszeme',
    },
    'sst-2025': {
      label: '2025',
      title: 'Absolūtā SST, 2025. gada 1. jūlijs',
      caption:
        'Jaunākā 1. jūlija absolūtā karte šajā lapā. Citas dienas — dzīvais MUR NASA Worldview.',
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
        '2023: attīstās El Ninjo ekvatoriālajā Klusajā okeānā un ļoti silta Ziemeļatlantija publiskajā ierakstā.',
      imageAlt:
        'Ekvirektangulāra SST anomālijas karte, 2023. gada 1. jūlijs: spēcīgi sarkani ekvatoriālajā Klusajā okeānā un Ziemeļatlantijā',
    },
    'sst-anom-2024': {
      label: '2024',
      title: 'SST anomālija, 2024. gada 1. jūlijs',
      caption:
        'Jaunākā jūlija anomālija šajā lapā. Joprojām analīzes produkts. Citas dienas — NASA Worldview.',
      imageAlt: 'Ekvirektangulāra SST anomālijas karte, 2024. gada 1. jūlijs: sarkani un zili uz melnas sauszemes',
    },
    'sal-2011': {
      label: '2011',
      title: 'Aquarius pirmā globālā sāļuma karte',
      caption:
        'NASA Aquarius, 2011. gada 25. augusts – 11. septembris: šīs misijas pirmā globālā virsmas sāļuma karte. Mikroviļņu SSS, g/kg. Saldākas Amazonas un Gangas plūsmas; sāļāka subtropu Atlantija.',
      imageAlt:
        'Mollveides okeāna virsmas sāļuma karte no Aquarius, 2011, no violeta salda līdz sarkanam sāļam',
    },
    'sal-atlantic': {
      label: 'Atlantija',
      title: 'Ziemeļatlantijas sāls maksimums (Aquarius, 3D)',
      caption:
        'NASA Aquarius skats uz Ziemeļatlantijas augsta sāļuma reģionu. Tā pati misija, kas globālā karte, cita grafika.',
      imageAlt:
        '3D globuss ar centru uz Atlantiju, Aquarius sāļuma krāsas no zila līdz sarkanam',
    },
    'currents-1943': {
      label: '1943',
      title: 'Nosauktie riņķojumi',
      caption:
        'Siltās virsmas straumes oranžā, aukstās zaļā; pie poliem ledus šrafējums. Golfa straume, Kurošio, Humboldta (Peru) straume, Agulhas un citi nosauktie dreifi.',
      imageAlt:
        'Vecā pasaules karte ar nosauktām okeāna straumēm oranžā un zaļā ar ledus šrafējumu pie poliem',
    },
  },
  stats: {
    oceanCover: {
      label: 'Okeāns Zemes virsmā',
      text: 'Ap 71 procentu Zemes virsmas ir okeāns (IPCC SROCC). Platības daļa, ne siltums, skābums vai piesārņojuma krājums.',
    },
    heatShare: {
      label: 'Liekais siltums okeānā',
      text: 'Ap 90 procentiem klimata sistēmas liekā siltuma glabājas okeānā (IPCC AR6 WG1). Tas ir enerģijas krājums ūdens stabiņā.',
    },
    seaLevel: {
      label: 'Jūras līmeņa kāpuma temps',
      text: 'Vidējais jūras līmenis auga par 3,7 [3,2–4,2] mm/gadā 2006.–2018., pret 2,3 [1,6–3,1] mm/gadā 1971.–2018. (IPCC AR6 WG1). Temps, ne viena mērierīces diena.',
    },
    ohcRecord: {
      label: 'Okeāna siltuma saturs, nesenais maksimums',
      text: 'Cheng et al. 2024 (Adv. Atmos. Sci.): 0–2000 m okeāna siltuma saturs 2023. gadā sasniedza jaunu instrumentālo maksimumu; 2024. atjauninājumi paliek rindas virsotnē. Siltuma saturs, ne viena SST diena.',
    },
    phDrop: {
      label: 'Virsmas pH kritums',
      text: 'Atklātā okeāna virsmas pH kritis par ap 0,1 kopš ~1750 — ūdeņraža jonu koncentrācijas pieaugums par aptuveni 26–30 procentiem (IPCC AR6; NOAA PMEL). Karbonātu ķīmija, ne temperatūra.',
    },
    oxygenLoss: {
      label: 'Atklātā okeāna skābekļa zudums',
      text: 'Atklātais okeāns zaudēja 0,5–3,3 procentus izšķīdušā skābekļa augšējos 1000 m 1970.–2010.; skābekļa minimuma zonas paplašinājās par 3–8 procentiem (IPCC SROCC). Atklātā okeāna deoksigenācija, ne piekrastes mirušo zonu skaits.',
    },
    plasticLand: {
      label: 'Plastmasa no sauszemes okeānā',
      text: 'Jambeck et al. 2015, Science: 4,8–12,7 miljoni metrisko tonnu plastmasas atkritumu no sauszemes okeānā 2010. gadā. 2010. gada plūsmas vērtējums, ne masa Lielajā Klusā okeāna plankumā.',
    },
    plasticFloat: {
      label: 'Peldošas plastmasas daļiņas',
      text: 'Eriksen et al. 2014: vismaz 5,25 triljoni daļiņu (268 940 tonnas) uz virsmas, no paraugiem piecos subtropu riņķojumos. Krājuma vērtējums no tīklu vilcieniem un modeļa.',
    },
    overfished: {
      label: 'Pārzvejoti jūras krājumi',
      text: '35,5 procenti vērtēto jūras zvejas krājumu klasificēti kā pārzvejoti; 64,5 procenti bija bioloģiski ilgtspējīgās robežās (FAO 2025. gada pārskats; stāvoklis 2021). Krājumu daļa, ne loma — 77,2 procenti izkraušanas joprojām nāca no ilgtspējīgiem krājumiem.',
    },
    coralLost: {
      label: 'Cietais korallis zaudēts, 2009–18',
      text: 'Ap 14 procentiem pasaules cieto koraļļu zuduši no rifiem 2009.–2018. (GCRMN, Status of Coral Reefs of the World: 2020). Dzīvais segums, ne rifu kartes platība un ne IPCC 1,5 °C projekcija.',
    },
    deadZones: {
      label: 'Piekrastes hipoksijas vietas',
      text: 'Breitburg et al. 2018, Science: vairāk nekā 500 piekrastes vietas ar antropogēnu hipoksiju plus paplašinošās atklātā okeāna skābekļa minimuma zonas (~4,5 miljoni km²). Diasa agrākais apkopojums jau pārsniedza 400.',
    },
    mpaCover: {
      label: 'Jūras aizsargājamās teritorijas',
      text: '8,4 procenti jūras un piekrastes platību (8,44 procenti attēlā) bija aizsargājamās teritorijās un OECM Protected Planet Report 2024. Noteiktais pārklājums pret 30×30, ne pilnībā aizsargāts okeāns. Dzīvie WDPA summas mainās; šeit paliek 2024. momentuzņēmums.',
    },
    mangroveArea: {
      label: 'Mangroves, kas palikušas (FAO)',
      text: '15,9 milj. ha mangrovju meža 2025. gadā (FAO FRA 2025). Globālā neto platība auga 2015.–2025.; tas nav apgalvojums, ka katrs mangrovju krasts atjaunojas. Zilais ogleklis, skaitīts kā meža zemes lietojums.',
    },
  },
};
