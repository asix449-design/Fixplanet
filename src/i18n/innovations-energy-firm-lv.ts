import type { InnovationCopy } from '../data/innovations';
import { cite } from '../data/sources';

function card(
  fields: Omit<InnovationCopy, 'players' | 'sourcesNote' | 'shape'>,
): InnovationCopy {
  return { players: '', sourcesNote: '', shape: 'quad', ...fields };
}

const ccBySa20 = 'https://creativecommons.org/licenses/by-sa/2.0/';
const ccBySa40 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const desert =
  'https://commons.wikimedia.org/wiki/File:Desert_Sunlight_Battery_Energy_Storage_System_(52945816430).jpg';
const fftf =
  'https://commons.wikimedia.org/wiki/File:View_of_Fast_Flux_Test_Facility_Looking_NW.jpg';
const hywind =
  'https://commons.wikimedia.org/wiki/File:Hywind_Wind_Farm,_off_Peterhead_-_geograph.org.uk_-_7226685.jpg';
const perovskite = 'https://commons.wikimedia.org/wiki/File:Perovskite_solar_cell.jpg';
const campeda =
  'https://commons.wikimedia.org/wiki/File:Bonorva_-_Parco_eolico_di_Campeda_(01).JPG';

export const energyFirmLv: Record<string, InnovationCopy> = {
  'sodium-ion-storage': card({
    title: 'Nātrija-jonu uzglabāšana elektrotīkliem',
    hook: 'Uzņēmums Contemporary Amperex Technology Co., Limited (CATL) 2026. gada 22. jūnijā Minhenē prezentēja enerģijas uzglabāšanas sistēmu TENER Sodium. CATL norāda, ka sūtījumiem jāsasniedz 1 gigavatstunda līdz 2026. gada beigām, un 2026. gada aprīlī tas vienojās uzņēmumam HyperStrong trīs gadu laikā piegādāt nātrija-jonu baterijas 60 gigavatstundu apjomā.',
    imageAlt:
      'Elektrotīkla akumulatoru laukums blakus Desert Sunlight saules parkam Riversaidas apgabalā Kalifornijā: bateriju bloku rindas, apakšstacija un elektrolīnijas.',
    caption:
      'Elektrotīkla akumulatoru laukums blakus Desert Sunlight saules parkam Riversaidas apgabalā Kalifornijā: bateriju bloku rindas, apakšstacija un elektrolīnijas.',
    figureCredit:
      'Foto: ASV Zemes pārvaldes birojs, Kalifornijas nodaļa, NextEra atļaujot, ar Vikikrātuves starpniecību, publiskais domēns (ASV federālās aģentūras darbs).',
    licenseLabel: 'publiskais domēns',
    licenseUrl: desert,
    what: 'Nātrija-jonu baterija uzkrāj un atdod elektroenerģiju, pārvietojot nātrija jonus starp diviem elektrodiem, tāpat kā litija-jonu baterija pārvieto litija jonus. 2026. gada 22. jūnijā Minhenē Contemporary Amperex Technology Co., Limited (CATL), Ķīnas baterijas ražotājs, prezentēja TENER Sodium, enerģijas uzglabāšanas sistēmu elektrotīkliem uz nātrija-jonu elementu bāzes. CATL to raksturo kā pasaulē pirmo reālos apstākļos pārbaudīto nātrija-jonu enerģijas uzglabāšanas sistēmu un saka, ka tā sasniegusi pilnu komerciālo briedumu tehnoloģijā, ražošanas jaudā un piegādes ķēdes gatavībā. Pēc CATL datiem, TENER Sodium nodrošina vairāk nekā 30 megavatstundu nominālās ietilpības moduļu konstrukcijā, un 1 gigavatstundas objektam pietiek ar 34 moduļiem.',
    problem:
      'CATL saka, ka litija piegādes ir koncentrētas un cenas svārstīgas, savukārt nātrija ir vairāk nekā 1000 reižu vairāk un tas ir plaši izplatīts. CATL saka, ka sistēmu var konfigurēt uzglabāšanas ilgumam 1, 2, 4, 6 vai 8 stundas un ka tā ietilpst tajā pašā platībā kā tās litija dzelzs fosfāta sistēmas, tāpēc projekts var izmantot abas ķīmijas vienos un tajos pašos korpusos. Jūnija prezentācijā CATL paziņoja, ka sāks piegādes klientiem Ķīnā 2026. gada septembrī, gaida kumulatīvos sūtījumus 1 gigavatstundas apjomā līdz 2026. gada beigām un sāks piegādes ārpus Ķīnas 2027. gada jūnijā. 2026. gada aprīlī CATL un HyperStrong, Pekinas uzņēmums, kas piegādā enerģijas uzglabāšanas sistēmas, parakstīja vienošanos par 60 gigavatstundām nātrija-jonu bateriju uz trim gadiem; abi uzņēmumi to dēvē par pasaulē lielāko līdz šim paziņoto nātrija-jonu bateriju vienošanos.',
    how: 'Gandrīz viss šeit ir no paša CATL paziņojuma, tāpēc tas ir uzņēmuma stāstījums par savu produktu un plāniem. Sūtījumu skaitlis 2026. gadam ir prognoze, bet piegāžu sākums Ķīnā 2026. gada septembrī un ārpus tās 2027. gada jūnijā ir grafiki. Vēlākie CATL un HyperStrong ziņojumi parādīs, kuras sistēmas patiešām piegādātas un kur.',
    risks:
      'Visi skaitļi šeit nāk no paša CATL vai paša HyperStrong. Vienīgais darbības rādītājs CATL paziņojumā ir pilna cikla lietderības, tas ir, uzglabātās elektroenerģijas daļas, kas atgriežas, pieaugums gandrīz par 2 procentiem, pateicoties sprieguma regulēšanas sistēmai. Sistēma prezentēta 2026. gada jūnijā, tāpēc tās ilgtermiņa ekspluatācijas pieredze vēl jāuzkrāj. Vienošanās ar HyperStrong ir piegādes apņemšanās uz trim gadiem, un faktiskās piegādes parādīsies vēlākos ziņojumos.',
    sources: [
      cite(
        'Contemporary Amperex Technology Co., Limited: CATL prezentē pasaulē pirmo reālos apstākļos pārbaudīto nātrija-jonu enerģijas uzglabāšanas sistēmu un ceļ nātrija uzglabāšanu komerciālā līmenī (CATL Debuts World’s First Field-Validated Sodium-Ion BESS, Bringing Sodium Storage to Commercial Reality) (2026. g. 22. jūn.)',
        'https://www.catl.com/en/news/6861.html',
      ),
      cite(
        'HyperStrong: HyperStrong un CATL paraksta vienošanos par nātrija-jonu baterijām 60 gigavatstundu apjomā (HyperStrong and CATL Sign 60 GWh Sodium-Ion Battery Agreement to Advance Energy Storage) (2026. g. 29. apr.)',
        'https://www.hyperstrong.com/en/news/company-news/95',
      ),
      cite('Vikikrātuve: Desert Sunlight Battery Energy Storage System (foto)', desert),
    ],
  }),
  'terrapower-natrium': card({
    title: 'TerraPower Natrium',
    hook: 'TerraPower stacija Natrium Kemmererā, Vaiomingā, savieno 345 megavatu ātro reaktoru ar nātrija dzesēšanu un izkausēta sāls enerģijas uzkrāšanas sistēmu, kas var paaugstināt izvadi līdz 500 megavatiem. ASV Kodolregulatīvā komisija būvatļauju izsniedza 2026. gada 9. martā, un TerraPower 2026. gada 23. aprīlī paziņoja par būvniecības sākumu.',
    imageAlt:
      'Eksperimentāls ātrais reaktors ar nātrija dzesēšanu Fast Flux Test Facility Hanfordas objektā Vašingtonas štatā, skats ziemeļrietumu virzienā.',
    caption:
      'Eksperimentāls ātrais reaktors ar nātrija dzesēšanu Fast Flux Test Facility Hanfordas objektā Vašingtonas štatā, skats ziemeļrietumu virzienā.',
    figureCredit:
      'Foto: ASV Enerģētikas departaments, ar Vikikrātuves starpniecību, publiskais domēns (ASV federālās valdības darbs).',
    licenseLabel: 'publiskais domēns',
    licenseUrl: fftf,
    what: 'Natrium ir kodolelektrostacijas projekts no TerraPower, ASV uzņēmuma, kas izstrādā kodoltehnoloģijas. Stacijai ir 345 megavatu ātrais reaktors ar nātrija dzesēšanu, tas ir, siltumu no aktīvās zonas aizvada šķidrs nātrijs, un tam pievienota izkausēta sāls enerģijas uzkrāšanas sistēma. TerraPower saka, ka uzkrāšana var pacelt izvadi līdz 500 megavatiem pieprasījuma maksimumā, ko uzņēmums pielīdzina apmēram 400 000 māju apgādei, un ka tā ir paredzēta, lai uzturētu stabilu bāzes izvadi. Reaktors ir TerraPower un GE Vernova Hitachi Nuclear Energy tehnoloģija. Pirmā stacija, Kemmerer 1. bloks Linkolnas apgabalā Vaiomingā, tiek attīstīta ASV Enerģētikas departamenta Progresīvo reaktoru demonstrācijas programmas ietvaros, kas ir valsts un privātā sektora partnerība.',
    problem:
      '2026. gada 4. martā TerraPower paziņoja, ka ASV Kodolregulatīvās komisijas komisāri nobalsoja par būvatļaujas piešķiršanu Kemmerer 1. blokam, ko uzņēmums raksturo kā pirmo komerciālas mēroga progresīvai kodolelektrostacijai. Federālais reģistrs, ASV valdības oficiālais ikdienas paziņojumu izdevums, fiksē, ka atļauja izsniegta 2026. gada 9. martā uzņēmumam US SFR Owner, LLC, kas to tur, un ka tā ļauj būvēt enerģijas reaktora objektu Linkolnas apgabalā Vaiomingā. Oficiālo būvniecības sākumu TerraPower paziņoja 2026. gada 23. aprīlī: būvlaukumā ierodas aptuveni 1600 strādnieku, un pēc stacijas darbības sākuma gaidāmi apmēram 250 pastāvīgi darbinieki. Uzņēmums saka, ka projekta pabeigšana gaidāma 2030. gadā un ka tad tā būs pirmā komunālā mēroga progresīvā kodolelektrostacija Amerikas Savienotajās Valstīs.',
    how: 'Dokumentos parādās trīs datumi: komisijas balsojums 2026. gada 4. martā, atļaujas izsniegšana 2026. gada 9. martā un būvniecības sākums 2026. gada 23. aprīlī. Būvatļauja ir valsts apstiprinājums reaktora objekta celtniecībai, un paziņojums Federālajā reģistrā ir tās oficiālais ieraksts. Apzīmējumi, piemēram, «pirmā», nāk no paša TerraPower paziņojumiem. Skaitlis 500 megavati ir maksimālā izvade, kamēr uzkrājums izlādējas, bet 345 megavati ir reaktora bāzes izvade.',
    risks:
      'Kemmerer 1. bloks tiek būvēts, un pabeigšanas gads 2030 ir paša TerraPower cerība. TerraPower izpilddirektors staciju sauc par pirmo šāda veida staciju, tāpēc tās galīgās izmaksas un grafiks vēl jāparāda. TerraPower arī saka, ka tai ir vienošanās ar uzņēmumu Meta par līdz astoņām Natrium stacijām līdz 2035. gadam. Tā ir vienošanās starp uzņēmumiem, un pirmā stacija vēl gaida pabeigšanu.',
    sources: [
      cite(
        'TerraPower: ASV Kodolregulatīvā komisija apstiprina Natrium reaktora būvatļauju (NRC Approves the Natrium Reactor Construction Permit) (2026. g. 4. marts)',
        'https://www.terrapower.com/NRC-Approves-Natrium-Reactor-Construction-Permit',
      ),
      cite(
        'TerraPower: TerraPower sāk būvniecību Amerikas pirmajai komunālā mēroga progresīvajai kodolelektrostacijai (TerraPower Commences Construction on America’s First Utility-Scale Advanced Nuclear Power Plant) (2026. g. 23. apr.)',
        'https://www.terrapower.com/terrapower-commences-construction-on-americas-first-utility-scale-advanced-nuclear-power-plant/',
      ),
      cite('TerraPower: Natrium tehnoloģijas lapa (Natrium technology page)', 'https://www.terrapower.com/natrium/'),
      cite(
        'ASV Valdības izdevniecība, Federālais reģistrs: US SFR Owner, LLC; Kemmerer stacija, 1. bloks; būvatļauja un lēmums (US SFR Owner, LLC; Kemmerer Power Station, Unit 1; Construction Permit and Record of Decision) (2026. g. 16. marta paziņojums)',
        'https://www.govinfo.gov/content/pkg/FR-2026-03-16/html/2026-05067.htm',
      ),
      cite('Vikipēdija: Fast Flux Test Facility (Fast Flux Test Facility)', 'https://en.wikipedia.org/wiki/Fast_Flux_Test_Facility'),
      cite(
        'Vikikrātuve: skats uz Fast Flux Test Facility no ziemeļrietumiem (View of Fast Flux Test Facility Looking NW) (foto)',
        fftf,
      ),
    ],
  }),
  'floating-offshore-wind': card({
    title: 'Peldošie vēja parki jūrā',
    hook: 'Jūras vēja parks Goto pie Goto pilsētas Nagasaki prefektūrā komerciālu darbību sāka 2026. gada 5. janvārī. Projekta uzņēmums to dēvē par pirmo komerciālo peldošo vēja parku jūrā Japānā: astoņas turbīnas pa 2,1 megavatam, kopā 16,8 megavati, uz tērauda un betona pludiņiem.',
    imageAlt: 'Divas peldošas vēja turbīnas vēja parkā Hywind Scotland Ziemeļjūrā pie Pīterheidas Skotijā.',
    caption: 'Divas peldošas vēja turbīnas vēja parkā Hywind Scotland Ziemeļjūrā pie Pīterheidas Skotijā.',
    figureCredit:
      'Foto: Maiks Peningtons (Mike Pennington), geograph.org.uk, ar Vikikrātuves starpniecību, Creative Commons licence «Atsauce, līdzīga koplietošana 2.0 Vispārīgā».',
    licenseLabel: 'Creative Commons licence «Atsauce, līdzīga koplietošana 2.0 Vispārīgā»',
    licenseUrl: ccBySa20,
    what: 'Peldoša vēja turbīna jūrā stāv uz peldošas platformas, ko notur enkurtauvas un enkuri, tāpēc to var novietot ūdenī, kas ir pārāk dziļš pamatiem, kuri nostiprināti jūras gultnē. Vēja parku Goto Offshore Wind Farm apsaimnieko uzņēmums Goto Floating Wind Farm LLC, kuram pieder seši uzņēmumi: TODA CORPORATION, Japānas būvniecības uzņēmums, kas vada projekta uzņēmumu, ENEOS Renewable Energy Corporation, Osaka Gas, INPEX CORPORATION un elektroenerģijas uzņēmumi Kansai Electric Power un Chubu Electric Power. Tajā ir astoņas turbīnas pa 2,1 megavatam, kopā 16,8 megavati, ar rotora diametru 80 metri. Katra turbīna stāv uz hibrīda pludiņa «spar» tipa, vertikāla peldoša cilindra ar tērauda augšējo un betona apakšējo daļu, ko izstrādāja un uzbūvēja TODA CORPORATION.',
    problem:
      'ASV Enerģētikas departaments ziņo, ka aptuveni divas trešdaļas ASV jūras vēja potenciāla atrodas virs ūdens, kas ir pārāk dziļš standarta turbīnām uz pamatiem jūras gultnē, pieņemot 60 metru robežu, tāpēc tur vajadzīga peldošā tehnoloģija. Projekta uzņēmums un tā akcionāri 2026. gada 5. janvārī paziņoja, ka Goto vēja parka komerciālā darbība ir sākusies. Viņi to raksturo kā pirmo komerciālo peldošo vēja parku jūrā Japānā un kā pirmo šāda veida objektu Japānā, kas sertificēts saskaņā ar likumu par jūras teritoriju izmantošanas veicināšanu jūras atjaunojamās enerģijas objektu attīstībai. Hibrīda «spar» pludiņu viņi dēvē par pasaulē pirmo šī tipa pludiņa komerciālo pielietojumu. Elektroenerģiju paredzēts piegādāt galvenokārt vietējiem elektroenerģijas mazumtirgotājiem.',
    how: 'Jauda 16,8 megavati, sākuma datums 2026. gada 5. janvāris un pludiņa apraksts nāk no projekta uzņēmuma un tā akcionāriem, kuru paziņojums ir šo ziņu avots. Peldošie vēja parki darbojās arī pirms Goto. Norvēģijas enerģētikas uzņēmums Equinor ziņo, ka tā izmēģinājuma parks Hywind Scotland ar jaudu 30 megavati, ar piecām turbīnām uz «spar» tipa pludiņiem 95 līdz 120 metru dziļumā, ražo elektroenerģiju kopš 2017. gada oktobra; fotogrāfijā redzamas divas no šīm turbīnām. Vārds «pirmais» Goto gadījumā attiecas uz Japānu un komerciālu darbību.',
    risks:
      'Ar 16,8 megavatiem Goto ir neliels vēja parks. ASV Enerģētikas departaments sagaida, ka pirmās paaudzes peldošā vēja objektu izmaksas pārsniegs jūras vēja parku uz pamatiem jūras gultnē izmaksas vairāk nekā par 50 procentiem, un ir izvirzījis mērķi līdz 2035. gadam samazināt peldošā vēja izmaksas vairāk nekā par 70 procentiem. Paziņojumā par Goto nav datu par izmaksām vai izstrādi, tāpēc par to, kā parks darbojas, vēl jāziņo.',
    sources: [
      cite(
        'TODA CORPORATION, Goto Floating Wind Farm LLC un akcionāri: Jūras vēja parks Goto sāk komerciālu darbību, pirmais komerciālais peldošās vēja enerģijas projekts Japānā (Goto Offshore Wind Farm Begins Commercial Operation, Japan’s First Commercial Floating Wind Power Project) (2026. g. 5. janv., PDF)',
        'https://www.toda.co.jp/english/investor_relations/pdf/20260105_Notice_01.pdf',
      ),
      cite(
        'Chubu Electric Power: Jūras vēja parks Goto sāk komerciālu darbību, pirmais komerciālais peldošās vēja enerģijas projekts Japānā (Goto Offshore Wind Farm Begins Commercial Operation, Japan’s First Commercial Floating Wind Power Project) (2026. g. 5. janv.)',
        'https://www.chuden.co.jp/english/corporate/releases/pressreleases/1217247_5163.html',
      ),
      cite(
        'ASV Enerģētikas departaments: programma «Peldošais vējš jūrā», progress un prioritātes (Floating Offshore Wind Shot, Progress and Priorities) (2024. g. maijs, PDF)',
        'https://www.energy.gov/sites/default/files/2024-05/DOE-Wind-Floating-Offshore-WindShot-Report-May2024.pdf',
      ),
      cite(
        'Equinor: Hywind Scotland, pasaulē pirmais peldošais vēja parks (Hywind Scotland, the world’s first floating wind farm)',
        'https://www.equinor.com/energy/hywind-scotland',
      ),
      cite('Vikikrātuve: Hywind Wind Farm, off Peterhead (foto)', hywind),
    ],
  }),
  'perovskite-tandem': card({
    title: 'Perovskīta un silīcija tandēma moduļi',
    hook: '2024. gada 5. septembrī saules enerģijas uzņēmums Oxford PV paziņoja par savu tandēma paneļu «perovskīts uz silīcija» pirmo komerciālo pārdošanu, nosūtot tos klientam Amerikas Savienotajās Valstīs komunālā mēroga uzstādīšanai. Pēc Oxford PV teiktā, 72 elementu paneļiem moduļa lietderība ir 24,5 procenti un tie var ražot līdz 20 procentiem vairāk enerģijas nekā standarta silīcija panelis.',
    imageAlt: 'Cimdota roka tur nelielu perovskīta saules elementu.',
    caption: 'Cimdota roka tur nelielu perovskīta saules elementu.',
    figureCredit:
      'Foto: Deniss Šrēders (Dennis Schroeder), ASV Nacionālā atjaunojamās enerģijas laboratorija, 2025. gada decembrī pārdēvēta par Klinšu kalnu Nacionālo laboratoriju, ar Vikikrātuves starpniecību, publiskais domēns (ASV federālās valdības darbs).',
    licenseLabel: 'publiskais domēns',
    licenseUrl: perovskite,
    what: 'Perovskīta un silīcija tandēma saules elements ir plāns perovskīta slānis uz silīcija elementa. Perovskīti ir materiālu saime, kas ļoti labi absorbē noteiktas gaismas krāsas; ASV Enerģētikas departaments skaidro, ka apakšējais silīcija slānis izmanto gaismas krāsas, kuras perovskīts palaiž cauri, tāpēc tandēma elements teorētiski var būt efektīvāks nekā katrs materiāls atsevišķi. Oxford PV ir saules tehnoloģiju uzņēmums ar birojiem Anglijā un Vācijā, un tas strādā pie šīs tehnoloģijas kopš 2014. gada. Tā pirmie komerciālie paneļi izmanto 72 paša uzņēmuma elementus «perovskīts uz silīcija».',
    problem:
      '2024. gada 5. septembrī Oxford PV paziņoja, ka sākusi savas tandēma tehnoloģijas komercializāciju ar pirmo sūtījumu klientam ASV, komunālā mēroga uzstādīšanai. Uzņēmums to dēvē par pasaulē pirmo perovskīta tandēma saules paneļa komerciālo ieviešanu. Oxford PV saka, ka paneļi var ražot līdz 20 procentiem vairāk enerģijas nekā standarta silīcija panelis, kas var samazināt izlīdzinātās elektroenerģijas izmaksas, tas ir, katras elektroenerģijas vienības vidējās izmaksas stacijas mūža garumā, un ļauj efektīvāk izmantot zemi. Pirmajiem paneļiem tirgū uzņēmums norāda moduļa lietderību 24,5 procenti un min arī nesenu moduļa lietderības rekordu 26,9 procenti. Elementus ražo Oxford PV megavatu mēroga izmēģinājuma līnijā Brandenburgā pie Hāfeles, Vācijā.',
    how: 'Skaitļi par paneļa lietderību, papildu enerģiju un rekordu nāk no paša Oxford PV paziņojuma. Moduļa lietderība ir tā uz visu paneli krītošās saules gaismas daļa, kas pārvēršas elektrībā. ASV Enerģētikas departaments ziņo, ka perovskīta un silīcija tandēma elementi pētījumos sasnieguši lietderību gandrīz 34 procenti. Pārdošana 2024. gada 5. septembrī ir viens sūtījums no izmēģinājuma līnijas, un uzņēmums apraksta plānus attiecībā uz turpmākiem elektroenerģijas uzņēmumu klientiem, speciāliem produktiem un izmēģinājuma lietojumam dzīvojamās ēkās.',
    risks:
      'ASV Enerģētikas departaments saka, ka perovskīta saules tehnoloģijai vēl trūkst ražošanas lielā mērogā. Tas min četrus izaicinājumus komerciālai sekmei: elementu stabilitāte un izturība, lietderība ražošanas mērogā, ražojamība, kā arī tehnoloģijas validācija un banku pieņemamība, tas ir, vai kreditori gatavi finansēt projektus, kuros to izmanto. Oxford PV 2024. gada paziņojumā ražošana gigavatu mērogā aprakstīta kā plāns nākotnes liela apjoma rūpnīcai. Neatkarīgi testi un lauka dati par paneļu novecošanu parādīs, kā tie salīdzināmi ar silīcija paneļiem.',
    sources: [
      cite(
        'Oxford PV: Tandēma saules paneļi ar 20 procentiem lielāku jaudu pirmo reizi nonāk komerciālā lietošanā ASV (20% more powerful tandem solar panels enter commercial use for the first time in the US) (2024. g. 5. septembris)',
        'https://www.oxfordpv.com/press-releases/oxford-pv-solar-technology-patent',
      ),
      cite(
        'ASV Enerģētikas departaments: Perovskīta saules elementi (Perovskite Solar Cells)',
        'https://www.energy.gov/cmei/systems/perovskite-solar-cells',
      ),
      cite(
        'ASV Enerģētikas departaments: Enerģētikas departaments pārdēvē Nacionālo atjaunojamās enerģijas laboratoriju par «Klinšu kalnu Nacionālo laboratoriju» (Energy Department Renames NREL “National Lab of the Rockies”) (2025. g. 1. decembris)',
        'https://www.energy.gov/cmei/articles/energy-department-renames-nrel-national-lab-rockies',
      ),
      cite('Vikikrātuve: Perovskite solar cell (foto)', perovskite),
    ],
  }),
  'energy-dome-co2': card({
    title: 'Energy Dome oglekļa dioksīda akumulators',
    hook: 'Energy Dome stacija Otanā Sardīnijā sāka darboties 2025. gada jūlijā. Tā uzkrāj elektroenerģiju, saspiežot oglekļa dioksīda gāzi šķidrumā un vēlāk izplešot to turbīnā, un pēc IEEE Spectrum datiem tās jauda ir 20 megavati un 200 megavatstundas, tas ir, 10 stundas ar pilnu jaudu.',
    imageAlt: 'Kampedas vēja parka turbīnas pie Bonorvas Sardīnijā, Itālijā, skats no pakalna.',
    caption: 'Kampedas vēja parka turbīnas pie Bonorvas Sardīnijā, Itālijā, skats no pakalna.',
    figureCredit:
      'Foto: Džanni Karedu (Gianni Careddu), ar Vikikrātuves starpniecību, Creative Commons licence «Atsauce, līdzīga koplietošana 4.0 Starptautiskā».',
    licenseLabel: 'Creative Commons licence «Atsauce, līdzīga koplietošana 4.0 Starptautiskā»',
    licenseUrl: ccBySa40,
    what: 'Energy Dome ir uzņēmums no Milānas Itālijā, kas savu uzglabāšanas sistēmu dēvē par «CO2 Battery». Tā darbojas slēgtā ciklā. Kad tīklā ir lieks elektrības daudzums, kompresors saspiež oglekļa dioksīda gāzi no liela kupola līdz spiedienam, kas aptuveni 55 reižu pārsniedz atmosfēras spiedienu, gāzi atdzesē un pārvērš šķidrumā, bet šķidrumu uzglabā spiediena traukos. Kad tīklam vajag jaudu, šķidrumu iztvaicē un uzsilda, gāze izplešas turbīnā, kas dzen ģeneratoru, un atgriežas kupolā. Žurnāls IEEE Spectrum, Elektrotehnikas un elektronikas inženieru institūta izdevums, ziņo, ka kupols Otanā satur 2000 tonnu oglekļa dioksīda, kas nopirkts no gāzes piegādātāja, un ka uzlāde aizņem aptuveni 10 stundas.',
    problem:
      'IEEE Spectrum ziņo, ka Energy Dome sāka ekspluatēt savu 20 megavatu objektu Otanā 2025. gada jūlijā un ka tas ražo 200 megavatstundas elektroenerģijas, tas ir, 20 megavatus 10 stundu laikā. Žurnāls raksta, ka labākās jaunās tīkla baterijas tirgū, galvenokārt litija-jonu, nodrošina tikai no 4 līdz 8 stundu uzglabāšanu, un uzglabāšanu, kas ilgāka par 8 stundām, dēvē par ilgstošu. Tas arī ziņo, ka Indijas enerģētikas uzņēmums NTPC Limited cerēja pabeigt staciju Kudgi Karnatakas štatā 2026. gadā, ka Viskonsinas komunālais uzņēmums Alliant Energy saņēmis atļauju 2026. gadā sākt šādas stacijas būvniecību, lai apgādātu 18 000 mājsaimniecību, un ka Google plāno izvietot šādas stacijas savās galvenajās datu centru atrašanās vietās Eiropā, Amerikas Savienotajās Valstīs un Āzijas un Klusā okeāna reģionā. 2026. gada jūnijā un jūlijā Energy Dome paziņoja par 23 megavatu un 200 megavatstundu projektu kopā ar Google Ofalī grāfistē Īrijā un 20 megavatu un 200 megavatstundu staciju kopā ar SEC, valsts atjaunojamās enerģijas uzņēmumu, Viktorijas štatā Austrālijā.',
    how: 'Otana ir vienīgā pilna izmēra tīklam pieslēgtā stacija, ko apraksta IEEE Spectrum; pārējās stacijas ir projekti ar gaidāmiem vai paziņotiem termiņiem. 200 megavatstundas ir stacijas ietilpība, tas ir, 20 megavati 10 stundu garumā. Energy Dome savā lapā min pilna cikla lietderību 70 procenti vai vairāk neto, tas ir, uzglabātās elektroenerģijas daļu, kas atgriežas, un kalpošanas laiku vairāk nekā 30 gadi. IEEE Spectrum min arī Energy Dome cerību, ka tās sistēmas būs par 30 procentiem lētākas nekā litija-jonu. Šie skaitļi ir paša uzņēmuma.',
    risks:
      'IEEE Spectrum ziņo, ka objekts aizņem aptuveni divreiz vairāk zemes nekā līdzvērtīgas ietilpības litija-jonu baterija, ka pārējai stacijas daļai vajag aptuveni 5 hektārus līdzenas zemes un mazāk nekā divus gadus būvniecībai, bet kupols ir aptuveni sporta stadiona augstumā un var izraisīt kaimiņu iebildumus. Energy Dome izpilddirektors saka, ka kupols iztur vēju līdz 160 kilometriem stundā, un, ja kupols tiktu pārdurts, 2000 tonnu oglekļa dioksīda nonāktu atmosfērā un cilvēkiem vajadzētu turēties 70 metru vai lielākā attālumā, līdz gaiss iztīrās.',
    sources: [
      cite(
        'IEEE Spectrum: Burbuļu baterijas tīkla mērogā drīz būs visur, tiešsaistē ar virsrakstu «Oglekļa dioksīda baterijas, kas uzglabā tīkla enerģiju, izplatās pasaulē» (Grid-Scale Bubble Batteries Will Soon Be Everywhere; CO2 Batteries That Store Grid Energy Take Off Globally) (Emily Waltz, 2025. g. 21. decembris)',
        'https://spectrum.ieee.org/co2-battery-energy-storage',
      ),
      cite(
        'Energy Dome: CO2 Battery tehnoloģijas lapa (CO2 Battery technology page)',
        'https://www.energydome.com/co2-battery/',
      ),
      cite(
        'Energy Dome: Google un Energy Dome virza enerģijas uzglabāšanas būvniecību vairākos kontinentos ar pirmo divpusējo projektu Īrijā (Google and Energy Dome Advance Multi-Continent Energy Storage Buildout with First Bilateral Project in Ireland) (2026. g. 23. jūnijs)',
        'https://energydome.com/google-and-energy-dome-advance-multi-continent-energy-storage-buildout-with-first-bilateral-project-in-ireland/',
      ),
      cite(
        'Energy Dome: Energy Dome piegādās Viktorijas štata pirmo desmit stundu bateriju sadarbībā ar SEC (Energy Dome to Deliver Victoria’s First 10-hour Battery in Partnership with SEC) (2026. g. 10. jūlijs)',
        'https://energydome.com/energy-dome-to-deliver-victorias-first-10-hour-battery-in-partnership-with-sec/',
      ),
      cite('Vikikrātuve: Bonorva - Parco eolico di Campeda (01) (foto)', campeda),
    ],
  }),
};
