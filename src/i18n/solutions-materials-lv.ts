import type { MaterialsDetailCopy, MaterialsEncyclopediaSlug } from '../data/solutions-materials';
import type { SolutionCopy } from '../data/solutions';
import { detail as en } from './solutions-materials-en';

const src = (slug: MaterialsEncyclopediaSlug, index: number) => en[slug].sources[index].url;

export const grid: Record<MaterialsEncyclopediaSlug, SolutionCopy> = {
  "wood-fibre-insulation": {
    "problemTitle": "Ēku apvalki zaudē siltumu caur sienām, jumtiem un pārsegumiem",
    "fixTitle": "Koksnes šķiedras siltumizolācija",
    "problem": "Ēku apvalki zaudē siltumu caur sienām, jumtiem un pārsegumiem",
    "fix": "Rūpnīcā gatavoti koksnes šķiedras paklāji un plāksnes ēku siltumizolācijai. Eiropas standarts rūpnīcā gatavotai koksnes šķiedras siltumizolācijai aptver ruļļus, paklājus, filcu, plāksnes un paneļus.",
    "imageAlt": "Koksnes šķiedras siltumizolācijas plāksnes uz ēkas fasādes zem sastatnēm, Lotschen, Blankenhain, Vācija.",
    "sourceLabel": "Intertek, ēku siltumizolācijas izstrādājumi, rūpnīcā gatavoti koksnes šķiedras izstrādājumi, specifikācija"
  },
  "cellulose-insulation": {
    "problemTitle": "Ēku siltumizolācija, ko var ražot no atgūtā papīra",
    "fixTitle": "Celulozes siltumizolācija",
    "problem": "Ēku siltumizolācija, ko var ražot no atgūtā papīra",
    "fix": "Beramā un uzsmidzināmā izolācija no atgūta papīra šķiedras. Amerikas Savienoto Valstu Vides aizsardzības aģentūra iesaka beramajai un uzsmidzināmajai celulozes izolācijai 75 procentus pēcpatēriņa papīra pēc izolācijas serdes masas.",
    "imageAlt": "Uzsmidzināta celulozes siltumizolācija no papīra koka sienas karkasa dobumos.",
    "sourceLabel": "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Visaptverošās iepirkuma vadlīnijas būvizstrādājumiem"
  },
  "engineered-bamboo": {
    "problemTitle": "Bambusa konstrukcijas, kurām vajadzīgas kopīgas pārbaudes metodes un produkta specifikācija",
    "fixTitle": "Inženierbambuss",
    "problem": "Bambusa konstrukcijas, kurām vajadzīgas kopīgas pārbaudes metodes un produkta specifikācija",
    "fix": "Bambusa joslas, kas salīmētas plāksnēs un nesošos elementos. 2024. gada oktobrī Starptautiskā standartizācijas organizācija izdeva pirmo starptautisko produkta specifikāciju konstrukciju līmētajam bambusam pēc tam, kad 2022. gadā bija publicētas inženierbambusa pārbaudes metodes.",
    "imageAlt": "Grīda no bambusa, kas spiesta no sadrumstalotām bambusa šķiedrām, inženierbambusa izstrādājums.",
    "sourceLabel": "Starptautiskā bambusa un rotanga organizācija, konstrukciju līmētā bambusa nākotne"
  },
  "recycled-gypsum": {
    "problemTitle": "Ģipškartona atkritumi no būvniecības un nojaukšanas, kuriem vajadzīgs ceļš atpakaļ uz jaunām plāksnēm",
    "fixTitle": "Pārstrādāts ģipsis",
    "problem": "Ģipškartona atkritumi no būvniecības un nojaukšanas, kuriem vajadzīgs ceļš atpakaļ uz jaunām plāksnēm",
    "fix": "Atkritumu ģipškartonu pārstrādā par pārstrādātu ģipsi jaunām plāksnēm. Eiropas Savienības projektā Gypsum to Gypsum ražoja ģipškartonu ar līdz 30 procentiem pārstrādāta ģipša, un Apvienotās Karalistes Vides aģentūras kvalitātes protokols nosaka, kad pārstrādāts ģipsis pārstāj būt atkritumi.",
    "imageAlt": "Ģipškartona plākšņu kaudze uz koka paletes noliktavā.",
    "sourceLabel": "Eurogypsum: cirkularitāte"
  }
,
  "structural-steel-reuse": {
    "problemTitle": "Konstrukciju tērauds no nojaukšanas, ko parasti pārstrādā ar pārkausēšanu",
    "fixTitle": "Konstrukciju tērauda atkārtota izmantošana",
    "problem": "Konstrukciju tērauds no nojaukšanas, ko parasti pārstrādā ar pārkausēšanu",
    "fix": "Tērauda elementi, kas noņemti no ēkām, piemēram, sijas un kolonnas, tiek atkal uzstādīti jaunās konstrukcijās. Tērauda būvniecības institūts norāda, ka pašlaik apmēram 70 procenti tērauda lūžņu Apvienotajā Karalistē tiek eksportēti pārstrādei.",
    "imageAlt": "Tērauda sijas, kas atgūtas demontāžas projektā Boulderā, Kolorādo, Amerikas Savienotajās Valstīs, uzglabātas atkārtotai izmantošanai.",
    "sourceLabel": "Tērauda būvniecības institūts, konstrukciju tērauda atkārtota izmantošana"
  }
};

export const detail: Record<MaterialsEncyclopediaSlug, MaterialsDetailCopy> = {
  "wood-fibre-insulation": {
    title: "Koksnes šķiedras siltumizolācija",
    hook: "Rūpnīcā gatavoti koksnes šķiedras paklāji un plāksnes ēku siltumizolācijai. Eiropas standarts rūpnīcā gatavotai koksnes šķiedras siltumizolācijai aptver ruļļus, paklājus, filcu, plāksnes un paneļus.",
    imageAlt: "Koksnes šķiedras siltumizolācijas plāksnes uz ēkas fasādes zem sastatnēm, Lotschen, Blankenhain, Vācija.",
    caption: "Koksnes šķiedras siltumizolācijas plāksnes uz ēkas fasādes zem sastatnēm, Lotschen, Blankenhain, Vācija.",
    credit: "Foto: Kai Kemmann, caur Vikikrātuvi, licence Creative Commons Atsauce, tādi paši noteikumi 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Faila lapa: https://commons.wikimedia.org/wiki/File:Fassadend%C3%A4mmung_mit_Pavatex-Holzfaserd%C3%A4mmplatten,_Sockelplatten_zur_Befestigung_von_Balkonen,_Am_Bach_23,_Lotschen,_99444_Blankenhain,_Th%C3%BCringen.jpg",
    what: ["Koksnes šķiedras siltumizolācija ir rūpnīcā gatavots izstrādājums, ko veido no koksnes šķiedras elastīgu ruļļu, paklāju un filca vai stingru plākšņu un paneļu veidā ēku siltumizolācijai. Eiropas standarts rūpnīcā gatavotai koksnes šķiedras siltumizolācijai nosaka prasības šādiem izstrādājumiem, tostarp izstrādājumiem ar apdari vai pārklājumu. Daļu izstrādājumu izmanto arī rūpnieciski gatavās siltumizolācijas sistēmās un kompozītpaneļos."],
    why: ["Šis standarts ir saskaņots standarts saskaņā ar Eiropas Savienības Būvizstrādājumu regulu, un pēc tā izstrādājumi iegūst tiesības uz Eiropas atbilstības zīmi. Tas apraksta izstrādājumu īpašības un ietver pārbaužu, atbilstības novērtēšanas, marķēšanas un etiķetēšanas procedūras, tāpēc dažādu ražotāju koksnes šķiedras siltumizolāciju apraksta un pārbauda vienādi."],
    read: ["Izstrādājumi ar deklarētu siltumpretestību zemāku par 0,20 m²·K/W vai deklarētu siltumvadītspēju lielāku par 0,070 W/(m·K) pie 10 °C ir ārpus standarta darbības jomas. Būvlaukumā uz vietas veidota izolācija un ēku iekārtu un rūpniecisko iekārtu izolācija arī atrodas ārpus šīs jomas."],
    limits: ["Standarts apraksta izstrādājumu īpašības un pārbaužu procedūras. Klases un līmeņus konkrētam lietojumam nosaka būvnormatīvi un citi standarti. Rūpnieciski gatavo siltumizolācijas sistēmu un kompozītpaneļu ar šiem izstrādājumiem ekspluatācijas īpašības atrodas ārpus standarta darbības jomas. Koksnes šķiedras siltumizolācijas tirgus daļa, cena un oglekļa pēdas nospiedums šeit minētajos avotos paliek nenovērtēti."],
    sources: [
      {
        label: "Intertek: EN 13171, ēku siltumizolācijas izstrādājumi, rūpnīcā gatavoti koksnes šķiedras izstrādājumi, specifikācija (Intertek: EN 13171: Thermal insulation products for buildings - Factory made wood fibre (WF) products - Specification)",
        url: src("wood-fibre-insulation", 0),
      },
      {
        label: "Genorma: EN 13171:2012+A1:2015, ēku siltumizolācijas izstrādājumi, rūpnīcā gatavoti koksnes šķiedras izstrādājumi, specifikācija (Genorma: EN 13171:2012+A1:2015 Thermal insulation products for buildings - Factory made wood fibre (WF) products - Specification)",
        url: src("wood-fibre-insulation", 1),
      },
    ],
  },
  "cellulose-insulation": {
    title: "Celulozes siltumizolācija",
    hook: "Beramā un uzsmidzināmā izolācija no atgūta papīra šķiedras. Amerikas Savienoto Valstu Vides aizsardzības aģentūra iesaka beramajai un uzsmidzināmajai celulozes izolācijai 75 procentus pēcpatēriņa papīra pēc izolācijas serdes masas.",
    imageAlt: "Uzsmidzināta celulozes siltumizolācija no papīra koka sienas karkasa dobumos.",
    caption: "Uzsmidzināta celulozes siltumizolācija no papīra koka sienas karkasa dobumos.",
    credit: "Foto: Riisipuuro, caur Vikikrātuvi, apgriezts, licence Creative Commons Atsauce, tādi paši noteikumi 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Faila lapa: https://commons.wikimedia.org/wiki/File:Paper_insulation.jpg",
    what: ["Celulozes siltumizolācija ir šķiedrains materiāls, ko lieto kā beramo pildījumu vai uzsmidzināmu slāni un ko var ražot no vecām avīzēm. Amerikas Savienoto Valstu Vides aizsardzības aģentūra beramo un uzsmidzināmo celulozes izolāciju iekļauj starp ēku izolācijas veidiem, ko var ražot no atgūtiem materiāliem."],
    why: ["Amerikas Savienoto Valstu Vides aizsardzības aģentūras Visaptverošo iepirkuma vadlīniju programma nosaka produktus, kas tiek ražoti vai var tikt ražoti no atgūtiem materiāliem, lai veicinātu no pašvaldību cietajiem atkritumiem atgūtu materiālu izmantošanu. Kad produkts ir noteikts, iepirkuma iestādēm ir pienākums to pirkt ar augstāko praktiski sasniedzamo atgūto materiālu īpatsvaru. Beramajai un uzsmidzināmajai celulozes izolācijai aģentūra iesaka 75 procentus pēcpatēriņa papīra, kas ir arī 75 procenti no kopējā atgūto materiālu īpatsvara."],
    read: ["Ieteiktos līmeņus ēku izolācijai aprēķina pēc masas. Tilpums no aprēķina ir izslēgts, un uzskaitīta tiek tikai izolācijas serde. Tāpēc skaitlis 75 procenti apraksta pēcpatēriņa papīra daļu serdes masā."],
    limits: ["Līmenis 75 procenti ir ieteikums Amerikas Savienoto Valstu valdības iepirkuma iestādēm. Tas apraksta atgūtā materiāla īpatsvaru produktā. Celulozes izolācijas siltuma īpašības, nosēšanās, uzvedība mitrumā un ugunī, kā arī tās tirgus daļa un cena atrodas ārpus citēto avotu apjoma."],
    sources: [
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Visaptverošās iepirkuma vadlīnijas būvizstrādājumiem (United States Environmental Protection Agency: Comprehensive Procurement Guidelines for Construction Products)",
        url: src("cellulose-insulation", 0),
      },
      {
        label: "Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Visaptverošo iepirkuma vadlīniju programma (United States Environmental Protection Agency: Comprehensive Procurement Guideline (CPG) Program)",
        url: src("cellulose-insulation", 1),
      },
    ],
  },
  "engineered-bamboo": {
    title: "Inženierbambuss",
    hook: "Bambusa joslas, kas salīmētas plāksnēs un nesošos elementos. 2024. gada oktobrī Starptautiskā standartizācijas organizācija izdeva pirmo starptautisko produkta specifikāciju konstrukciju līmētajam bambusam pēc tam, kad 2022. gadā bija publicētas inženierbambusa pārbaudes metodes.",
    imageAlt: "Grīda no bambusa, kas spiesta no sadrumstalotām bambusa šķiedrām, inženierbambusa izstrādājums.",
    caption: "Grīda no bambusa, kas spiesta no sadrumstalotām bambusa šķiedrām, inženierbambusa izstrādājums.",
    credit: "Foto: Pazzo4562, caur Vikikrātuvi, licence Creative Commons Atsauce, tādi paši noteikumi 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Faila lapa: https://commons.wikimedia.org/wiki/File:Strand-woven_Bamboo_Flooring.jpg",
    what: ["Inženierbambusu iegūst, salīmējot bambusu plāksnēs un nesošos elementos. Līmētais bambuss un bambusa skrimbers ir divas tā formas, un līmētais bambuss ir viens no visplašāk izmantotajiem inženierbambusa izstrādājumiem pasaulē. Bambusu būvniecībā izmanto jau gadsimtiem Āzijā, Latīņamerikā un Āfrikā, un inženierbambusa izstrādājumus kā ēku nesošos elementus sāka izmantot 1990. gados."],
    why: ["Kopīgi starptautiskie standarti dod projektētājiem, ražotājiem un regulatoriem vienotu atsauces punktu. 2022. gada 22. jūnijā Starptautiskā standartizācijas organizācija publicēja standartu ar inženierbambusa izstrādājumu fizikālo un mehānisko īpašību pārbaudes metodēm, ko izstrādāja Starptautiskās bambusa un rotanga organizācijas Bambusa būvniecības darba grupa. 2024. gada 28. oktobrī tā izdeva pirmo starptautisko standartu konstrukciju līmētajam bambusam, proti, produkta specifikāciju, ko ierosināja Starptautiskā bambusa un rotanga organizācija. Līdz 2024. gada decembrim bambusa konstrukciju lietojuma darba grupa bija publicējusi sešus starptautiskos standartus par bambusa konstrukcijām, trīs par apaļo bambusu un trīs par inženierbambusa izstrādājumiem."],
    read: ["Ir iesaistīti divi dokumenti. 2022. gada standarts sniedz fizikālo un mehānisko īpašību noteikšanas metodes, definē izmērus, mitrumu un blīvumu un attiecas uz līmētā bambusa un bambusa skrimbera prizmatiskām formām. 2024. gada standarts ir produkta specifikācija konstrukciju līmētajam bambusam."],
    limits: ["2022. un 2024. gada standarti aptver inženierbambusa izstrādājumu pārbaudes metodes un produkta specifikāciju līmētajam bambusam. 2024. gada decembrī izstrādes procesā bija vēl divi starptautiskie standarti inženierbambusam. Inženierbambusa tirgus apjoms, izmaksas un oglekļa bilance šeit minētajos avotos paliek nenovērtēti."],
    sources: [
      {
        label: "Starptautiskā bambusa un rotanga organizācija: konstrukciju līmētā bambusa nākotne, par standartu ISO 7567:2024 Bamboo structures, Glued laminated bamboo, Product specification (International Bamboo and Rattan Organization: Defining the future of structural glued laminated bamboo, on ISO 7567:2024 Bamboo structures, Glued laminated bamboo, Product specification)",
        url: src("engineered-bamboo", 0),
      },
      {
        label: "Starptautiskā bambusa un rotanga organizācija: publicēts pirmais starptautiskais standarts inženierbambusam nesošām konstrukcijām, par standartu ISO 23478:2022 Bamboo structures, Engineered bamboo products, Test methods for determination of physical and mechanical properties (International Bamboo and Rattan Organization: First international standard on engineered bamboo for structural use published, on ISO 23478:2022 Bamboo structures, Engineered bamboo products, Test methods for determination of physical and mechanical properties)",
        url: src("engineered-bamboo", 1),
      },
    ],
  },
  "recycled-gypsum": {
    title: "Pārstrādāts ģipsis",
    hook: "Atkritumu ģipškartonu pārstrādā par pārstrādātu ģipsi jaunām plāksnēm. Eiropas Savienības projektā Gypsum to Gypsum ražoja ģipškartonu ar līdz 30 procentiem pārstrādāta ģipša, un Apvienotās Karalistes Vides aģentūras kvalitātes protokols nosaka, kad pārstrādāts ģipsis pārstāj būt atkritumi.",
    imageAlt: "Ģipškartona plākšņu kaudze uz koka paletes noliktavā.",
    caption: "Ģipškartona plākšņu kaudze uz koka paletes noliktavā.",
    credit: "Foto: RossKur, caur Vikikrātuvi, apgriezts, licence Creative Commons Atsauce 4.0 (https://creativecommons.org/licenses/by/4.0/). Faila lapa: https://commons.wikimedia.org/wiki/File:Stapel_Gipskartonplatten.jpg",
    what: ["Pārstrādāts ģipsis ir pulveris, kas iegūts no ģipškartona atkritumiem un atkal tiek izmantots jaunu ģipša izstrādājumu, piemēram, ģipškartona, ražošanai. Ģipša atkritumi rodas ražošanā, būvniecībā un nojaukšanā, ieskaitot renovāciju. Projekts Gypsum to Gypsum, ko atbalstīja Eiropas Savienības vides un klimata rīcības programma un koordinēja Eurogypsum, Eiropas ģipša rūpniecības asociācija, pārbaudīja visu apriti: ģipškartona demontāžu un savākšanu objektos, atkritumu pārstrādi un pārstrādātā ģipša atkārtotu ievadīšanu ģipškartona rūpnīcās."],
    why: ["Eurogypsum raksturo ģipsi kā mūžīgi pārstrādājamu minerālu un ziņo, ka projekts parādīja ģipškartonu ar 30 procentu ģipša atkritumu saturu no ražošanas, būvniecības un nojaukšanas. Projekta ziņojumā norādīts, ka dalībnieki ražotāji izgatavoja ģipškartonu ar 20 līdz 30 procentiem pārstrādāta ģipša (vidēji 25 procenti) un sasniedza 30 procentu mērķi divās no piecām rūpnīcām. Rezultāti iegūti ar dalībrūpnīcu esošajiem procesiem."],
    read: ["Anglijā, Velsā un Ziemeļīrijā Apvienotās Karalistes Vides aģentūras kvalitātes protokols pārstrādātam ģipsim no ģipškartona atkritumiem nosaka trīs nosacījumus, kuriem izpildoties materiāls pārstāj būt atkritumi: atkritumi ir uzglabāti un pārstrādāti saskaņā ar Britu standartu institūcijas publiski pieejamo specifikāciju pārstrādātam ģipsim no ģipškartona atkritumiem; ģipsis ir gatavs izmantošanai kā izejviela ģipša būvizstrādājumiem, piemēram, ģipškartonam un griestu līstēm, vai cementa ražošanai; tas atbilst jebkurām papildu pasūtītāja prasībām."],
    limits: ["Projekta ziņojumā norādīts, ka pārstrādāta ģipša īpatsvara palielināšana no 30 līdz 50 procentiem prasītu ieguldījumus iekārtās. Ģipsis pielīp pie apmetuma, krāsas un grīdas klona, tāpēc nojaukšanas atkritumi ir vissarežģītākā no trim atkritumu plūsmām. Eiropā pārstrādā nelielu daļu ģipša atkritumu, un ziņojums kā galveno šķērsli min nojaukšanu, jo tieši demontāža ļauj atgūt ģipša atkritumus. Eurogypsum norāda, ka piemērotu ģipša atkritumu apjoms tuvākajā un vidējā termiņā, visticamāk, izrādīsies mazāks par augošajām ēku un renovācijas vajadzībām, tāpēc pārstrāde un primāro izejvielu ieguve ir vienlīdz nepieciešamas, un sintētiskā ģipša apjoms no oglēm kurināmām elektrostacijām samazinās."],
    sources: [
      {
        label: "Eurogypsum: cirkularitāte (Eurogypsum: Circularity)",
        url: src("recycled-gypsum", 0),
      },
      {
        label: "Eiropas Komisijas LIFE publiskā datubāze: GtoG, no ražošanas līdz pārstrādei, aprites ekonomika Eiropas ģipša rūpniecībai kopā ar nojaukšanas un pārstrādes nozari, LIFE11 ENV/BE/001039 (European Commission LIFE Public Database: GtoG: From Production to Recycling, a Circular Economy for the European Gypsum Industry with the Demolition and Recycling Industry (LIFE11 ENV/BE/001039))",
        url: src("recycled-gypsum", 1),
      },
      {
        label: "Apvienotās Karalistes Vides aģentūra, GOV.UK: pārstrādāts ģipsis no ģipškartona atkritumiem, kvalitātes protokols (Environment Agency, GOV.UK: Recycled gypsum from waste plasterboard: quality protocol)",
        url: src("recycled-gypsum", 2),
      },
    ],
  },
  "structural-steel-reuse": {
    title: "Konstrukciju tērauda atkārtota izmantošana",
    hook: "Tērauda elementi, kas noņemti no ēkām, piemēram, sijas un kolonnas, tiek atkal uzstādīti jaunās konstrukcijās. Tērauda būvniecības institūts norāda, ka pašlaik apmēram 70 procenti tērauda lūžņu Apvienotajā Karalistē tiek eksportēti pārstrādei.",
    imageAlt: "Tērauda sijas, kas atgūtas demontāžas projektā Boulderā, Kolorādo, Amerikas Savienotajās Valstīs, uzglabātas atkārtotai izmantošanai.",
    caption: "Tērauda sijas, kas atgūtas demontāžas projektā Boulderā, Kolorādo, Amerikas Savienotajās Valstīs, uzglabātas atkārtotai izmantošanai.",
    credit: "Foto: Ian Hill, Amerikas Savienoto Valstu Enerģētikas departaments, caur Vikikrātuvi, apgriezts, sabiedrisks īpašums (Amerikas Savienoto Valstu valdības darbs; licences paziņojums: https://commons.wikimedia.org/wiki/Template:PD-USGov-DOE). Faila lapa: https://commons.wikimedia.org/wiki/File:SlatedForReuse_Hill_Iron_and_Steel_%2854264735079%29.jpg",
    what: ["Konstrukciju tērauda atkārtota izmantošana nozīmē noņemt tērauda profilus no ēkas, kuru nojauc, tos pārbaudīt un atkal uzstādīt kā sijas, kolonnas vai citus jaunas konstrukcijas elementus. Tērauda būvniecības institūts apraksta tērauda profilus kā pēc būtības atkārtoti izmantojamus un atkārtotu izmantošanu raksturo kā alternatīvu pašreizējai izplatītajai tērauda pārstrādes praksei ar pārkausēšanu. Tā 2019. gada publikācija „Konstrukciju tērauda atkārtota izmantošana: novērtējums, pārbaudes un projektēšanas principi” iesaka datu vākšanu, apskati un pārbaudes, lai atgūtās tērauda konstrukcijas varētu izmantot droši."],
    why: ["Tērauda būvniecības institūts norāda, ka atkārtota izmantošana ir saprātīga no vides viedokļa, jo ietaupa gan resursus, gan oglekļa emisijas, un patur vairāk saimnieciskās aktivitātes Apvienotajā Karalistē, jo pašlaik apmēram 70 procenti tās tērauda lūžņu tiek eksportēti pārstrādei. Institūts min vidējo cenu starpību starp jauniem tērauda profiliem un lūžņu profiliem no 2000. līdz 2016. gadam, 313 sterliņu mārciņas par tonnu, un sauc to par peļņas iespēju atkārtotai izmantošanai, pirms ir ņemtas vērā papildu izmaksas par demontāžu, pārbaudēm un sertifikāciju, uzglabāšanu un atkārtotu izgatavošanu. Eiropas Komisijas Kopīgā pētniecības centra 2025. gada vadlīniju ziņojumā teikts, ka būvniecības nozarē elementu atkārtota izmantošana ir galvenā stratēģija oglekļa dioksīda emisiju samazināšanai un ka tērauda konstrukcijas ir īpaši piemērotas atkārtotai izmantošanai augstās rūpnieciskās gatavības un demontāžas laikā parasti neliela nolietojuma dēļ."],
    read: ["2019. gada publikācija iesaka tēraudu atgūt grupās pa elementiem ar vienādu formu, izmēru un sākotnējo funkciju no vienas izcelsmes konstrukcijas, lai viena vai vairāku reprezentatīvu elementu pārbaude ļautu noteikt dažas visas grupas īpašības. Tās tvērums aptver tērauda konstrukcijas, kas uzceltas pēc 1970. gada, un izslēdz tēraudu no konstrukcijām, kas piedzīvojušas nogurumu, piemēram, tiltiem, būtiskas deformācijas, būtisku šķērsgriezuma zudumu korozijas dēļ vai ugunsgrēku. Vienīgā ieteiktā izmaiņa projektēšanā ir stabilitātes zuduma pārbaude ar daļējo koeficientu, kas vienāds ar 1,15 no parastā. Atgūtā tērauda krājuma pārdevējs materiāla īpašības deklarē pārdošanas brīdī. Institūta lapa kā piemēru min noliktavas un biroja ēku, kas 2015. gadā demontēta un pārvietota uz tirdzniecības un rūpniecības teritoriju Slough, un norāda, ka vienkāršu konstrukciju, piemēram, portālrāmju, atkārtota izmantošana ir samērā izplatīta lauksaimniecības un rūpniecības ēkās."],
    limits: ["Apspriedes ar tērauda būvniecības piegādes ķēdi sakārtoja atkārtotas izmantošanas šķēršļus pēc svarīguma dilstošā secībā: atgūto profilu pieejamība vajadzīgajā izmērā, apjomā un vietā; kvalitāte, izsekojamība un sertifikācija; papildu izmaksas; piegādes ķēdes integrācija; papildu laiks būvniecības grafikos. Institūts secina, ka pašreizējos Apvienotās Karalistes ekonomiskajos un tiesiskajos apstākļos plašas atkārtotas izmantošanas ekonomiskais pamatojums ir minimāls un ka vispārēja atkārtota izmantošana ir dzīvotspējīga tikai nelielos nišas tirgos un atsevišķos projektos. Eksportēto lūžņu daļu, 70 procentus, Institūta lapa norāda kā pašreizēju; lapā datuma trūkst, un tā atsaucas uz 2017. gada darbiem, tāpēc šodienas daļa var atšķirties. Cenu starpība 313 sterliņu mārciņas par tonnu attiecas uz Apvienoto Karalisti un laika posmu no 2000. līdz 2016. gadam. 2019. gada publikāciju finansēja Cleveland Steel and Tubes Ltd. Kopīgā pētniecības centra 2025. gada ziņojums minēts pēc tā publicētā kopsavilkuma."],
    sources: [
      {
        label: "Tērauda būvniecības institūts: REDUCE un PROGRESS, konstrukciju tērauda atkārtota izmantošana (Steel Construction Institute: REDUCE and PROGRESS, structural steel reuse)",
        url: src("structural-steel-reuse", 0),
      },
      {
        label: "Tērauda būvniecības institūts: Konstrukciju tērauda atkārtota izmantošana: novērtējums, pārbaudes un projektēšanas principi, SCI P427, PDF (Steel Construction Institute: Structural steel reuse: assessment, testing and design principles, SCI P427 (PDF))",
        url: src("structural-steel-reuse", 1),
      },
      {
        label: "Kopīgais pētniecības centrs, Eirokodi: vadlīnijas Eiropas noteikumu izveidei atgūtu tērauda elementu projektēšanai atkārtotai izmantošanai (Joint Research Centre, Eurocodes: Guidance on establishing European rules for the design of reclaimed steel components for reuse)",
        url: src("structural-steel-reuse", 2),
      },
    ],
  }
};
