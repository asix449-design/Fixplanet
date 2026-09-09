import type { MigrationPage } from './migration';
import type { MigrationEntryCopy } from '../data/migration';
import { lvHumanEventAtlas } from './human-event-atlas-lv';
import { lvToday } from './migration-today-lv';

export const page: MigrationPage = {
  metaTitle: 'Migrācija — Fix Planet',
  metaDescription:
    'Kāpēc cilvēki, putni un citi dzīvnieki pārvietojas: leduslaikmeti un krasti, vēsturiskas masu kustības, lidojumu ceļi un žogi. Enciklopēdija ar avotiem par cilvēku izplatīšanos, lielajām migrācijām un dzīvajiem maršrutiem.',
  eyebrow: 'Enciklopēdija',
  title: 'Migrācija',
  hubLead: [
    'Migrācija ir kustība ar iemeslu. Ledāju vaiņagi atver un aizver sauszemes tiltus. Sezonas pārbīda lietu, zāli, kukaiņus un planktonu. Krasti, kalni un tuksneši ir barjeras, līdz nav. Cilvēki vēlāk virsū liek žogus, gaismu, tīklus, armijas un siltāku klimatu — virs šiem vecākiem pulksteņiem.',
    'Šodien ir šajā lapā: šodienas starptautiskā karte — neto migrācija un migrantu krājums, tā arī parakstīti. Zemāk divi plaukti. Cilvēku migrācijas ir Homo sapiens dziļā vēsture un tautu staigāšana, tostarp Atila. Dzīvnieku migrācijas ir dzīvas masu kustības: gnu, tauriņu areālu nobīdes, Arktikas lidojumu ceļi. Datumi ir diapazoni no nosauktiem avotiem, ne izdomātas trases.',
  ],
  chooseShelf: 'Izvēlies plauktu',
  filterAria: 'Migrācijas sadaļas',
  back: '← Migrācija',
  cardCta: 'Lasīt kartīti →',
  primarySource: 'Avots',
  imageCredit: 'Attēls',
  sourcesLabel: 'Avoti',
  what: 'Kas tas ir',
  route: 'Maršruts',
  drivers: 'Kāpēc — dzinējspēki',
  timing: 'Kad',
  pressure: 'Kas mainās',
  wildlifeLink: 'Savvaļas sugas lapa →',
  tiles: {
    today:
      'Neto migrācija pēc ANO reģioniem 2023. gadam un kas jau kur dzīvo — krājums, ne šā gada ierašanās.',
    humans: 'Vispirms notikumu kartes: no Āfrikas, Sahula, zemkopība, bantu, austronēzieši, tautu staigāšana, vergu tirdzniecība. Nosauktas kustības, ne ikgadēja tautas skaitīšana.',
    'great-migrations':
      'Dzīvas masu kustības un leduslaikmeta areālu nobīdes: gnu, tauriņi, Arktikas putni, mamutu steppe, Beringija un holocēna atgriešanās.',
    birds: 'Lidojumu ceļi, sezonas un sugas, kas joprojām šķērso puslodes pēc barības un vairošanās.',
    animals: 'Gnu, ziemeļbrieži, vaļi, sikspārņi — atlasītas zīdītāju migrācijas un to dzinējspēki.',
  },
  hubTitles: {
    humans: 'Cilvēku migrācijas',
    'great-migrations': 'Dzīvnieku migrācijas',
  },
  shelves: {
    today: 'Šodien',
    humans: 'Cilvēki',
    'great-migrations': 'Lielās migrācijas',
    birds: 'Putni',
    animals: 'Dzīvnieki',
  },
  shelfLeads: {
    today:
      'Šodienas starptautiskās migrācijas karte. Uz plāksnītēm ir ANO galveno reģionu neto migrācija 2023. gadam (World Population Prospects 2024) — ne izdomātas ierašanās un izbraukšanas. Atsevišķi ieslēdzamas ir UNHCR nometnes un ES ārējo robežu konstatējumi (Frontex). Bieži dominē iekšreģionu kustība; Āfrika → Eiropa nav zīmēta kā pasaules galvenais stāsts.',
    humans:
      'Vispirms kartes: dokumentētu lielo cilvēku migrāciju notikumu skala, tad maza figūra un enciklopēdija. Homo sapiens radās Āfrikā ap 300 000 gadiem. Katrā kartītē ir kad, kur un kāpēc — klimats, ledus, zemkopība, karš, tirdzniecība, impērija, verdzība — tikai tur, kur to tur zinātne. Tā nav karte par visiem cilvēkiem ik pēc piecdesmit gadiem. Atila un tautu staigāšana paliek šeit; dzīvās kustības ir Lielajās migrācijās.',
    'great-migrations':
      'Dzīvas masu kustības un klimata laikmeta areālu nobīdes — ne izeja no Āfrikas un ne otra Atilas lapa. Tautu staigāšana paliek Cilvēkos. Kartītes nosauc dzinējspēku, sezonu vai dokumentētu nobīdi un avotu.',
    birds:
      'Sezonālā putnu migrācija ir barības un vairošanās mašīna. Lielākā daļa tālo sugu ligzdo augstākos platuma grādos garās dienas vasarā, tad lido pretī ziemas barībai. BirdLife un CMS apraksta lidojumu ceļu ģimenes — shēmātiskus koridorus, ne katra bara GPS trases.',
    animals:
      'Zīdītāju migrācijas ir mazāk, smagākas un vieglāk pārraut ar žogu. Lietus ved pie zāles; ledus un kukaiņi dzen ziemeļbriežus; vaļi seko krilam, un mazuļiem vajag siltus seklumus. Katra kartīte nosauc dzinējspēku un spiedienu.',
  },
  humans: {
    heroEyebrow: 'Mūsu suga',
    scientificName: 'Homo sapiens',
    imageAlt:
      'Neliels viduslaiku zemnieka zīmējums vienkāršā cepurē, brūnā tunikā, ar auklas jostu un kapli — ne karalis un ne konkrētas personas portrets',
    appearedLabel: 'Parādījās',
    appeared:
      'Ap 300 000 gadiem Āfrikā. Fosīlijas no Džebel Irhūdas Marokā datē ap 315 000 gadiem (Hublin et al. 2017). Ģenētika un fosiliju rinda Homo sapiens izcelsmi liek šajā kontinentā. Agrākās Homo sugas jau bija atstājušas Āfriku; šī lapa ir mūsu sugas vēlākā, globālā izplatīšanās.',
    populationLabel: 'Skaits šodien',
    population:
      'Ap 8,2 miljardiem cilvēku 2025. gadā (ANO, World Population Prospects 2024, vidējais variants). Šis skaitlis ir zemākā ceļojuma iznākums, ne cēlonis.',
    framing: [
      'Parastais zinātnes ietvars šajā vietnē: izcelsme Āfrikā ~300 tūkstošus gadu atpakaļ; Austrālija / Sahula ap 65–50 tūkstošiem; noturīga klātbūtne Eiropā ap 45–40 tūkstošiem; Amerika ap 15–10 tūkstošiem, ar vecākām pretendētām vietām joprojām debatētām. Tie ir ierašanās logi, ne soļu gadi.',
      'Dzinējspēki mainās pa soļiem. Mitras un sausas fāzes Ziemeļāfrikā un Levantē atvēra vai aizvēra tuksneša koridorus. Krītošs jūras līmenis ledāja maksimumos atsedza Sundu un sašaurināja ūdens spraugas līdz Sahulai. Ledāju vaiņagi bloķēja, tad vēlāk piedāvāja, iekšzemes ceļus Amerikā. Krasti, upes un medījums bija resursi. Vēlākām salām vajadzēja laivas.',
    ],
    wildlifePointer:
      'Savvaļa tur sugas ietvaru — izcelsmi, skaitļus un lielo zīdītāju ģintis, kas izzuda pēc pirmās ierašanās. Šis plaukts pieder dziļās vēstures ceļojumam.',
    wildlifeCta: 'Savvaļa · Homo sapiens →',
    greatMigrationsCta: 'Lielās migrācijas →',
    greatMigrationsNote:
      'Dzīvas masu kustības — gnu, tauriņi, Arktikas putni — ir atsevišķā plauktā. Tautu staigāšanas kartīte augstāk ir Atilas laikmeta kartīte; tur to nedublē.',
    mapTitle: 'Kur gājām un kad',
    mapAria: 'Homo sapiens izplatības pasaules karte ar datētiem ierašanās soļiem',
    mapLead:
      'Numurētie soļi ir publicēti ierašanās logi. Līnijas ir mācību shēma uz NASA Blue Marble — ne katras grupas rekonstrukcija un ne apgalvojums, ka cilvēki gāja tikai pa šīm bultām.',
    mapAfrica: 'Āfrika · izcelsme ~300 000 gadu',
    mapOut: 'No Āfrikas · ~70 000–50 000',
    mapAustralia: 'Austrālija / Sahula · ~65 000–50 000',
    mapEurasia: 'Eirāzija · ~45 000–40 000',
    mapAmericas: 'Amerika · ~15 000–10 000',
    mapIslands: 'Vēlāk salas · pēdējie daži tūkstoši gadu (Jaunzēlande ~700)',
    mapLegend: 'Numurēti ierašanās soļi',
    mapPinAfrica: '~300 000 gadu',
    mapPinOut: '~70–50 tūkstoši',
    mapPinAustralia: '~65–50 tūkstoši',
    mapPinEurasia: '~45–40 tūkstoši',
    mapPinAmericas: '~15–10 tūkstoši',
    mapPinIslands: 'salas · JZ ~700 gadi',
    mapSources:
      'Ierašanās diapazoni, ne precīzi gadi. Džebel Irhūda, Hublin et al. 2017; vēlā pleistocēna izplešanās, kas atstāja lielāko daļu dzīvā ārpusāfrikas senču fonda, Bergström et al. 2020; Madjedbebe, Clarkson et al. 2017 (daži pētnieki dod priekšroku vēlākam Sahulas datumam 65–50 tūkstošu logā). Bezledus koridora laiks, Pedersen et al. 2016. Ledāja klimats un jūras līmenis: IPCC AR6. Agrākās Levantes fosīlijas (Skhul/Qafzeh) fiksē klātbūtni bez noturīgas vispasaules nomaiņas.',
    mapBaseCredit:
      'Sauszemes pamats: NASA Blue Marble Next Generation (2004. gada decembris, sabiedriskais īpašums) — bez mākoņiem fiziskā Zeme, ne politiskā karte.',
    honesty:
      'Shēma ar datētiem logiem uz fiziskas Zemes attēla. Tā nav GPS trase, nav ģenētiskais koks un nav apgalvojums, ka klimats vien pārvietoja cilvēkus.',
    eventAtlas: lvHumanEventAtlas,
    sections: [
      {
        id: 'origin',
        title: 'Āfrika — izcelsme, ne izlidošanas zāle',
        body: 'Cilvēki radās Āfrikā. ~300 000 gadu datums ir izcelsme, ne starta šāviens ceļam uz Austrāliju. Lielāko daļu šī laika suga dzīvoja vienā kontinentā, ar impulsiem Levantē, kas nenodibināja vēlāko vispasaules ainu. Āfrikas lielie zīdītāji jau bija dzīvojuši līdzās hominīniem; tādēļ šī lapa Āfrikas megafaunas zudumu neuzskata par „pirmā kontakta” vilni tādā pašā nozīmē kā Sahulā vai Amerikā.',
      },
      {
        id: 'out-of-africa',
        title: 'No Āfrikas — klimata koridori',
        body: 'Vēlā pleistocēna izplešanās ap 70 000–50 000 gadiem ir tā, kas atstāja lielāko daļu senču fonda cilvēkiem, kuri šodien dzīvo ārpus Āfrikas (ģenētiskie kopsavilkumi, piemēram, Bergström et al. 2020). Dzinējspēki nebija viens „tieksme pētīt”. Zaļās Sahāras un Levantes logi, tad sausuma barjeras, stūrēja, kad tuksnesis bija ceļš un kad tas bija siena. Nīla, Sarkanās jūras krasti un Bāb el Mandebs ir atkārtoti apspriesti koridori; šī vietne neizvēlas vienu nepierādītu trasi un nezīmē to kā faktu.',
      },
      {
        id: 'sahul',
        title: 'Sahula — krasti, šelfi un ūdens spraugas',
        body: 'Austrālija, Jaungvineja un Tasmanija bija savienotas kā Sahula, kad jūras līmenis bija zemāks. Lai to sasniegtu, joprojām vajadzēja ūdens šķērsojumus no Sundas. Madjedbebe ziemeļu Austrālijā datēts ap 65 000 gadiem (Clarkson et al. 2017); citi pārskati liek datējumu vēlāk 65–50 tūkstošu logā. Jebkurā gadījumā tas ir desmitiem tūkstošu gadu pirms Amerikas. Dzinējspēku maisījums ir ledāja jūras līmeņa kritums, kas atsedz šelfus, piekrastes un salu šķērsošanas prasme, un tropu resursi — ne bezledus iekšzemes koridori.',
      },
      {
        id: 'eurasia',
        title: 'Eirāzija — aukstā stepe un aizkavētā Eiropa',
        body: 'Mūsdienu cilvēki bija Āzijas daļās, pirms bija daudzskaitlīgi Eiropā. Noturīgu Eiropas klātbūtni parasti liek ap 45 000–40 000 gadiem, pēc neandertāliešu populācijām. Dzinējspēkos ietilpst mamutu-stepes medību ainavu produktivitāte aukstajos posmos, upju sistēmas un lēnā augstāku platuma grādu atvēršanās, kad klimats ļāva. Tas nav tas pats pulkstenis kā Sahulai.',
      },
      {
        id: 'americas',
        title: 'Amerika — ledus, krasti un joprojām kustīga diskusija',
        body: 'Beringija saistīja Sibīriju un Aļasku, kad jūras līmenis bija zems. Laurentīdas un Kordiljēru ledāju vaiņagi tad bloķēja iekšzemi. Pedersen et al. 2016 argumentēja, ka bezledus koridors kļuva bioloģiski dzīvotspējīgs par vēlu pirmajiem cilvēkiem; tādēļ Klusā okeāna piekrastes ceļš ir parastais darba modelis ~16 000–14 000 gadu ieejai, ar Klovisu vēlāk. Šī enciklopēdija lieto vietnes 15–10 tūkstošu darba logu plašai klātbūtnei. Vecākas pretenzijas (tostarp White Sands, Ņūmeksika) pastāv un paliek apstrīdētas; šeit tās neuzskata par noslēgtiem pirmās ierašanās datumiem. Megafaunas sabrukums Amerikā ir ierašanās vilnis, ko katalogizē Savvaļa — noderīgs kā konteksts, kāpēc jauns plēsējs uz jauna kontinenta ir svarīgs, ne sugu saraksts, ko uzlīmēt šai kartei.',
      },
      {
        id: 'islands',
        title: 'Vēlākās salas — laivas, ne ledus',
        body: 'Madagaskara, Tālā Okeānija un Jaunzēlande ir holocēna stāsti. Jaunzēlandes pirmā apdzīvošana ir ap 700 gadiem (parastajā arheoloģiskajā lasījumā 14. gadsimta sākums). Dzinējspēks ir jūrasbraukšana pretī jaunai zemei un putniem, kas nekad nebija redzējuši cilvēkus — ne ledus koridors. Salu izzušanas pieder Savvaļas Izmirušo plauktam; tās ir migrācijas beigas, ne lidojumu ceļš.',
      },
    ],
  },
  birds: {
    flywaysTitle: 'Galvenās lidojumu ceļu ģimenes',
    flywaysAria: 'Pasaules karte ar galveno putnu lidojumu ceļu ģimeņu shēmu',
    flywaysLead:
      'BirdLife un Migrējošo sugu konvencija (CMS) apraksta vairākas lidojumu ceļu ģimenes, kas saista ligzdošanas un neligzdošanas vietas. Līnijas zemāk ir mācību shēma uz NASA Blue Marble — ne satelīta trases, ne katra suga un ne politiskās robežas.',
    flywaysHonesty:
      'Shēma. Īstie bari seko krastiem, mitrājiem un termikām šajās aploksnēs. Smailastes puņķa Aļaskas–Jaunzēlandes šķērsojums ir Klusā okeāna saīsinājums, ne Austrumāzijas–Australāzijas vidējais.',
    flywaysLegend: 'Nosauktās lidojumu ceļu ģimenes',
    flywayEastAtlantic: 'Austrumatlantijas',
    flywayMississippi: 'Misisipi / Amerika',
    flywayPacificAmericas: 'Klusā okeāna Amerika',
    flywayEaaf: 'Austrumāzijas–Australāzijas',
    flywayCentralAsian: 'Centrālāzijas',
    flywayAfricanEurasian: 'Austrumāfrikas–Rietumāzijas',
    flywaysSources:
      'BirdLife International lidojumu ceļu programma; CMS. Aplokšņu nosaukumi nedaudz atšķiras pēc autora (Boere & Stroud apkopojumi). Šī plate neizgudro septīto „pasaules lidojumu ceļu”.',
    flywaysBaseCredit:
      'Sauszemes pamats: NASA Blue Marble Next Generation (2004. gada decembris, sabiedriskais īpašums).',
  },
  today: lvToday,
};

export const entries: Record<string, MigrationEntryCopy> = {
  'mammoth-steppe-collapse': {
    title: 'Mamutu stepes sabrukums',
    hook: 'Ne bēgšana uz ziemeļiem Arktikā: auksta sausa steppe no Eiropas līdz Aļaskai nomainījās ar mežu, mitrājiem un tundru — un vairāku milžu pēdējie areāli sašaurinājās uz austrumiem.',
    imageAlt:
      'Auksta sausa steppe krēslā ar tālu mamutu un zirgu — zudušās mamutu stepes zīme, ne nosaukta kaulu vieta',
    what: 'Apmēram no 20 000 līdz 8 000 gadiem mamutu steppe — Guthrie nosaukums aukstajai, sausajai, augstražīgajai zāles joslai no Rietumeiropas caur Sibīriju līdz Aļaskai — nomainījās ar mitrāku meža, purvu un tundras mozaīku. Zirgi, stepes bizoni, vilnainie degunradži un mamuti ne tikai izmira uz vietas. Datētie pēdējie ieraksti rāda areālu sašaurināšanos un nobīdi. Ziemeļeirāzijā pēdējās sauszemes kabatas ir iekšējos austrumos — Rietumsibīrija, Aizurālija, tad salu refūgiji —, ne vienkāršs gājiens «uz ziemeļiem Arktikā». Šī ir areāla nobīdes kartīte. Sugu lapas ir Savvaļas izmirušo plauktā.',
    route:
      'Pleistocēna apvalks gāja no rietumiem uz austrumiem, ne polāra šoseja. Kad Eiropa apmežojās, datētie pēdējie milzu brieži (Megaloceros) agrāk izzūd rietumos un turas Rietumsibīrijā ap 7700 gadiem (Stuart, Kosintsev, Higham un Lister 2004). Mamuti izzūd no lielākās daļas kontinenta pie pleistocēna–holocēna robežas, tad dzīvo Vrangelas salā ap 4000 gadiem — vienlaikus ar agrīnajām bronzas valstīm, ne pēdējo ledus impulsu (Vartanyan, Garutt un Sher 1993). Altaja–Sajanu un Kazahstānas stepju–kalnu joslas ir tuvākas pleistocēna sajaukumam nekā Rietumeiropa; tā ir biogeogrāfiska atlieka, ne katra bara GPS uz austrumiem.',
    drivers:
      'Klimats un veģetācija ir nosauktie pirmās kārtas dzinējspēki: sasilšana, mitrākas augsnes, pārpurvošanās un slēgts mežs noņem sauso zāli, kas vajadzīga stepes ģildei (Guthrie 2001; Stuart et al. 2004 kontrasts). Cilvēku medības ir reālas tur, kur datumi un arheoloģija pārklājas; tas nav viena cēloņa sauklis. Salu izolācija (Vrangelis) ir vēlāks, mazāks pulkstenis.',
    timing:
      'Pēdējais ledāja maksimums ap 26–19 tūkstošiem gadu; galvenā veģetācijas maiņa nākamajos gadu tūkstošos. Milzu briedis: ~7700 gadi Rietumsibīrijā. Vrangelas mamuti: līdz ~4000 gadiem. Aļaskas nogulumu DNS (Haile et al. 2009) dod mamutu un zirgu ap 10 500 gadiem — vēlāk nekā kauli. Vēlākie Arktikas kaulu pārskati šo «spoku» areālu apstrīd. Lapa marķē strīdu, neizvēlas saukli.',
    pressure:
      'Steppe kā holarktisks bioms ir zudusi. Palikuši fragmenti un analoģijas. Nelasiet mūsdienu ziemeļbriežu baru kā izdzīvojušu mamutu stepi. Sugu saraksti ir Savvaļā; šai kartītei pieder kustība.',
    sourcesNote:
      'Guthrie 2001 par biomu. Stuart et al. 2004 par holocēna milzu briedi Sibīrijā un kontrastu ar Vrangelu. Vartanyan et al. 1993 par Vrangelu. Haile et al. 2009 par Aļaskas sedaDNS, ar atzīmi, ka vēlākie kaulu pārskati to apstrīd.',
  },
  'beringian-land-bridge': {
    title: 'Beringijas sauszemes tilts',
    hook: 'Kad jūra nokrita, Sibīrija un Aļaska bija viena līdzenums. Zirgi to šķērsoja abos virzienos. Ne katrs milzis varēja.',
    imageAlt:
      'Vējains Beringijas līdzenums ar tāliem zirgiem un aukstu dūmaku — tilta zīme, ne datēta pāreja',
    what: 'Ledāja zemā jūras līmenī Beringijas tilts savienoja Sibīrijas ziemeļaustrumus ar Aļasku kā nepārtrauktu, bieži mitru un skarbu līdzenumu — maksimumā simtiem kilometru, dažās rekonstrukcijās tuvu 1600 km. Tas ir filtrs, ne brīva šoseja. Senie zirgu genomi rāda atkārtotu apmaiņu abos virzienos. Urālu–Arktikas līnija iegāja Ziemeļamerikā vairākas reizes ap 50 000–19 000 gadiem; agrāki impulsa no austrumiem uz rietumiem atstāja pēdas Eirāzijā (Vershinina, Librado u. c., Science 2025; Vershinina et al. 2021). Bizoni vēlāk gāja bezledus koridorā abos virzienos, kad tas atvērās. Vilnainais degunradzis Amerikā nenonāca. Amerikas kamielis un īsvaigu lācis Āzijā nenonāca. Neesamība arī ir liecība.',
    route:
      'Rietumi–austrumi un austrumi–rietumi pāri atsegtajam šelfam, tad — kad Laurentiā un Kordiljeru vaiņagi sāka šķirties — pa Rietumkanādas bezledus koridoru. Heintzman et al. (2016) datē pirmos dienvidu bizonus koridorā ap 13 400 gadiem un ziemeļu ap 13 000. Zirgi, kas vēlāk iegāja koridorā, tālu neizpletās; 2025. gada darbs atbrīvoto zemi lasa kā pārāk mitru krioskērai steppei. Klusā okeāna piekrastes ceļi zirgu genomos ir atsevišķs, agrāks stāsts, ne otrs tilts.',
    drivers:
      'Jūras līmenis un ledus. Kad okeāns ir zems, šelfs ir sauszeme; kad vaiņagi aizslēdz ūdeni, tilts pastāv. Biotops uz tilta — mitrums, zāle, kalni — noteica, kurš var dzīvot pietiekami ilgi, lai šķērsotu. Tā nav «no Āfrikas» bulta, uzlīmēta dzīvniekiem.',
    timing:
      'Pēdējā ilgā atvērtā fāze ietver intervalu ~50–19 tūkstoši gadu zirgu klīnam 2025. gada genomos. Bezledus koridors ir vēlā pleistocēna durvis (slēgts pēc ~23 000 līdz ~13 400). Holocēna applūšana beidz tiltu kā sauszemi.',
    pressure:
      'Tilts ir zem ūdens. Mācība ir caurlaidība: dažas sugas gāja daudzas reizes, citas nekad. Neizdomājiet katras pārejas tautas skaitīšanu un neuzskatiet Beringiju par tukšu ceļu.',
    sourcesNote:
      'Science 2025 zirgu genomi — divvirzienu vēlā pleistocēna satiksme un Urālu līnija. Vershinina et al. 2021 — agrāki impulsi un filtrs. Heintzman et al. 2016 — bizoni koridorā. Degunradža / kamieļa / īsvaigu lāča neesamība ir standarta holarktiskais ieraksts.',
  },
  'postglacial-colonization': {
    title: 'Pēc ledus — Eiropa un Ziemeļamerika',
    hook: 'Kad ledus atvēra zemi, koki, brieži, lāči un vilki iegāja — no dienvidu refūgijiem, un ziemeļos no Beringijas.',
    imageAlt:
      'Agrā holocēna meža mala ar staltbriedi pie koku līnijas — atgriešanās pēc ledus zīme, ne nosaukts putekšņu urbums',
    what: 'Pēc pēdējā ledāja maksimuma (~26–19 tūkstoši gadu) milzīgas Eiropas un Ziemeļamerikas platības atkal kļuva apdzīvojamas. Tā ir vislabāk dokumentētā holocēna «lielā migrācija» biotai — ne viena suga un ne viens gads. Hjūita ģenētiskās kartes (1999, 2000) ir Eiropas ietvars: mērenās sugas gaidīja Ibērijā, Itālijā, Balkānos un dažās ziemeļu kabatās (Karpati u. c.), tad izpletās. Dažādas sugas lietoja dažādus pussalas — viņa sienāža, eža un lāča paradigmas. Ziemeļamerikai ir savi dienvidu / austrumu / Beringijas avoti. Divi publicēti koku ātrumi ir nosauktajiem Ziemeļamerikas austrumu skuju kokiem (Payette et al. 2022). Tie nav sauklis katram kokam.',
    route:
      'Staltbriedis un stirna: dienvidu refūgiji aukstuma virsotnē (LGM un agrā vēlā leduslaikmeta daļa), tad pēkšņs areāls Centrāleiropā Grenlandes interstadiāla 1 / Bēlinga–Allerēda sākumā (~14,7 tūkstoši gadu) un ziemeļu Eiropas zemienēs agrā holocēnā (Sommer & Zachos 2009). Brūnais lācis, ezis un meža pele seko Hjūita šuvju joslām, kur sastapās izplešošies genomi. Pelēkais vilks ir cita ģeometrija: Loog et al. (2020) modelē dzīvo mitohondriālo daudzveidību kā ekspansiju no Beringijas — vai tuvās Ziemeļaustrumāzijas — pēdējā ledāja maksimuma beigās, ne kā vienkāršu Ibērijas pastaigu. Ziemeļamerikā bezledus koridors (Heintzman et al. 2016) ir vēlas durvis, ne pirmais cilvēku ceļš. Koki vilka faunu. Payette et al. (2022) pēc datētiem makrofosiliem dod melnajai eglei vidēji 25 km gadsimtā no Bēlinga–Allerēda ledus malas un Benska priedei 19 km gadsimtā no neaizledotajiem Ziemeļamerikas austrumiem līdz subarktiskajai robežai, kur šis gājiens apstājās ap 3000 gadiem. Fennoskandijas augu ekosistēmas salikās gadu tūkstošiem; Alsos et al. (2022) atrod pazīmju un funkcionālās daudzveidības stabilizāciju ap 8000 gadiem, pat kad sugas vēl ieradās.',
    drivers:
      'Vispirms klimats: ledus atkāpšanās, garākas sezonas, augsnes, kas tur kokus. Tad biotops. Briedis neieņems līdzenumu, kas vēl ir ledus vai vēl sausa steppe. Cilvēki ieiet jau kustīgā laukā; viņi nav nosauktais pirmās holocēna meža līnijas cēlonis.',
    timing:
      'LGM ~26–19 ka; Bēlings–Allerēds ~14,7 ka; agrā holocēna ziemeļu Eiropas aizpildīšana. Viena Arktikas Norvēģijas ala — Nygrotta (Boilard et al. 2024) — jau dod saldūdens zivis, brūno lāci, norvēģu lemmingu un balto zaķi slānī ap 9500 gadiem: kolonizācija tūlīt aiz vietējā ledus. Ap 5800 gadiem vēlākais slānis tajā pašā alā fiksē aukstumam piemērotu sugu aiziešanu no šī griezuma. Tie ir datēti horizoni vienā alā, ne Eiropas tautas skaitīšana.',
    pressure:
      'Holocēna mežs pats tagad ir cirsts, sildīts un nožogots. Šī kartīte ir migrācija pēc ledus. Vēlākā cilvēku ainavas maiņa pieder citiem plauktiem. Nesalieciet pleistocēna Cilvēkus (no Āfrikas) šajā biotas atgriešanā.',
    sourcesNote:
      'Hewitt 1999 un 2000 par refūgijiem un šuvju joslām. Sommer & Zachos 2009 par briežu pulksteni. Loog et al. 2020 par vilka ekspansiju. Payette et al. 2022 par diviem nosauktiem Ziemeļamerikas koku ātrumiem. Alsos et al. 2022 par Fennoskandijas pazīmju stabilitāti no ~8 ka. Boilard et al. 2024 par Nygrottu. Heintzman et al. 2016 par Ziemeļamerikas koridora pulksteni.',
  },
  'butterfly-range-shifts': {
    title: 'Tauriņu areālu nobīdes',
    hook: 'Ne viena pāreja: daudzas sugas ir pārbīdījušās pret poliem vai augšup pa nogāzi, kad klimats silst, — un dažas joprojām lido pāri kontinentiem.',
    imageAlt: 'Dadžu raibenis uz savvaļas zieda — tāls migrants kā klimata laikmeta tauriņu kustības zīme',
    what: '«Masu» šeit nav Serengeti cilpa. Tie ir divi fakti ar avotiem. Pirmkārt, tauriņu sabiedrības ir pārbīdījušas ligzdošanas areālus pret poliem un augšup pa nogāzi: Edītes raibenis Ziemeļamerikas rietumos (Parmesan 1996) un globāls nospiedums daudziem taksoniem (Parmesan & Yohe 2003). Otrkārt, dažas sugas veic īstas tālas sezonālas migrācijas. Dadžu raibenis (Vanessa cardui) ir vislabāk dokumentēts: vairāku paaudžu loki starp tropisko Āfriku un Eiropu (Stefanescu et al. 2013). Šī kartīte neizdomā vienu pasaules tauriņu šoseju.',
    route:
      'Areālu nobīdes ir vietējas vai reģionālas: kolonijas izdziest siltajā vai sausajā malā un parādās tālāk ziemeļos vai augstāk. Dadžu raibeņi iet sezonālā lokā, kas var saistīt Sahelu un Magribu ar Eiropu un atpakaļ — paaudžu ķēde, ne viens kukainis visā kartē. Monarhs Amerikā ir cita sistēma; to šeit nelīmē kā to pašu stāstu.',
    drivers:
      'Areālu nobīdēm dzinējspēks ir klimats: sasilšana un izžūšana, kas bojā bijušo ligzdošanas vietu un padara lietojamas jaunas. Dadžu raibeņiem — sezonāli saimniekaugu un nektāra viļņi. Ne viens, ne otrs nav leduslaikmeta koridors cilvēku nozīmē.',
    timing:
      'Areālu nobīdes raksti runā par desmitgadēm, ne migrācijas kalendāru. Dadžu raibeņu viļņi ir sezonāli un mainās pa gadiem; «iebrukuma gadi» Eiropā ir dokumentēti maksimumi, ne stingrs grafiks.',
    pressure:
      'Klimats turpina kustināt apvalku. Biotopu zudums (pļavas, saimniekaugi) var pārraut nobīdi, kas kartē izskatās viegla. Kukaiņu skaita kritums ir atsevišķs, platāks spiediens; kartīte neizdomā globālu tauriņu tautas skaitīšanu.',
    sourcesNote:
      'Parmesan 1996 un Parmesan & Yohe 2003 ir nosauktie areālu nobīdes raksti. Stefanescu et al. 2013 ir dadžu raibeņa loks. «Masu» ir marķēts ar šīm divām nozīmēm, ne kā gnu analogs.',
  },
  'arctic-migratory-birds': {
    title: 'Arktikas gājputni',
    hook: 'Zīriņi, lielie piekūni, tārtiņveidīgie, zosis: Arktikas vasara ir barības impulss, un ziema ir citur.',
    imageAlt: 'Polārie zīriņi virs auksta ziemeļu krasta — zīme augsto platuma grādu putnu migrācijai, ne nosaukta kolonija',
    what: 'Šī ir klases kartīte, ne otra polārā zīriņa enciklopēdija un ne trešā «ceļu pēc ledus» lapa. Daudzi putni, kas ligzdo Arktikas un subarktiskajā tundrā, aiziet, kad gaisma un kukaiņi beidzas. Polārie zīriņi iet no pola līdz polam (Egevang et al. 2010). Lielie piekūni seko medījumam gar krastiem un lidojumu ceļiem. Tārtiņveidīgie apstājas dažos dūņu līdzenumos. Zosis seko zālei un atkusnim. BirdLife un CMS apraksta lidojumu ceļu ģimenes; CAFF ir reģionālais kopsavilkums. Sezonālā migrācija jau bija leduslaikmetā (modeļi uz desmitiem tūkstošu gadu). Pēc ledus mainījās ģeogrāfija: ligzdošana saspiesties uz dienvidiem, īpaši Ziemeļamerikā zem Laurentiā vaiņaga, tad holocēns atkal atvēra Arktikas vasaru. Thorup et al. (PNAS, 2021) hindkastē sarkanmuguras čakstes afro-palearktisko cilpu 120 000 gadu: sezonālā migrācija, visticamāk, turējās leduslaikmetā, bieži Āfrikas iekšienē; piemērotā Eiropas vasaras dzīvotne pēc LGM atkal izpletās. Tas ir modelēts klases piemērs, ne otra putnu ceļu enciklopēdija.',
    route:
      'Ligzdošana garajā Arktikas dienā; ziemošanas vietas mērenajos vai tropiskajos mitrājos, krastos vai — zīriņiem — pie Antarktīdas pakledus. Austrumatlantijas, Austrumāzijas–Australāzijas, Misisipi un Klusā okeāna Amerikas ceļi nes Arktikas ligzdotājus. Gu et al. (Nature, 2021) izsekoja Eirāzijas Arktikas lielos piekūnus piecos mūsdienu ceļos un saista tos ar ligzdošanas vietu nobīdi no LGM uz holocēnu. Thorupa čakstes modelis ir afro-palearktiskais pretstats: cilpa pārdzīvoja apledojumu, pārbīdot ligzdošanas platumu, neizgudrojot migrāciju no jauna. Līnijas ir apvalki, ne katra bara GPS. Kuitalas Aļaska–Jaunzēlande ir Klusā okeāna saīsinājums, ne vidējais.',
    drivers:
      'Sezonālā produkcija. Augsto platuma grādu vasaras dod garu dienu un kukaiņu, zivju un jaunas zāles uzliesmojumu. Polārās ziemas — nē. Vējš un krasti vada lēto ceļu. Tas ir barības un vairošanās pulkstenis, ne bēgļu stāsts.',
    timing:
      'Uz ziemeļiem ziemeļu pavasarī, uz dienvidiem pēc ligzdošanas. Dažām populācijām ierašanās ir pārbīdījusies agrāk, kad pavasari silst, — fenoloģija, ne jauns lidojumu ceļš. Rekordu kilometri ir nosaukti izsekošanas raksti.',
    pressure:
      'Klimats kustinā ledus malu, atkušņa datumus un medījumu. Dzeltenās jūras un citu pieturvietu nosusināšana noņem degvielas stacijas. Medības, traucējums un zveja pievieno vietējus zudumus. CAFF un BirdLife Arktikas migrantus uzskata par kopīgu lidojumu ceļu uzdevumu, ne vienas sugas muzeju. Polārā zīriņa lapa paliek vecajā dziļajā adresē, ja vajag tikai 70 000 km rakstu.',
    sourcesNote:
      'Egevang et al. 2010 par zīriņiem; Gu et al. 2021 par lielā piekūna ceļu salikšanu pēc ledus; Thorup et al. 2021 par čakstes cilpu 120 000 gadu; BirdLife; CAFF; CMS. Kartīte neizdomā visu Arktikas migrantu skaitīšanu un neatver otru putnu ceļu enciklopēdiju.',
  },
  'hunnic-invasion': {
    title: 'Huņu spiediens uz Romu',
    hook: 'Ne izeja no Āfrikas: 4.–5. gadsimta stepes spēks, kura spiediens palīdzēja grūst gotus un citas tautas uz romiešu robežām.',
    imageAlt:
      'Muzeja kopija huņu bronzas katla tipam, 4.–5. gadsimts, fotografēta Kazaņā — replika, ne oriģināls kapa atradums',
    what: 'Huņņi bija jāšus, daudz etniska stepes grupa, ko romiešu autori skaidri apraksta 370. gados m.ē. uz ziemeļiem no Melnās jūras. Dziļākā izcelsme nav noskaidrota. Saikne ar Ķīnas pierobežas sjunnu ir veca hipotēze, ne pierādījums. Ammians Marcellīns ir pilnākais tuvlaicīgais stāsts par triecienu, kas dzina gotus pie Donavas; Jordāns, rakstīdams sestajā gadsimtā, ir vēlāks un mitiskāks — tradīcija, ne tautas skaitīšana. Šī kartīte nav Atilas portrets kā rases liktenis. Tā ir nosaukta kustība vēlās antikas avotos.',
    route:
      'Romiešu ģeogrāfija 370. gadiem liek huņu darbību austrumos un ziemeļos no Melnās jūras, tad spiedienu uz alaniem un gotiem uz rietumiem pret Donavu. 376. gadā tervingi un greutungi lūdza pāriet impērijā. Pašas huņu grupas tad vēl nebija galvenais spēks uz Donavas; Heather lasījums Ammianā: kaskāde bija īsta, bet tas nav viens huņu gājiens uz Itāliju 376. gadā. 430.–450. gados huņu polītija zem Rua, tad Atilas, balstījās Karpatu ieplakā, laupīja abas impērijas puses, cīnījās Katalaunijas laukos 451., iegāja Itālijā 452. un saira pēc Atilas nāves 453.',
    drivers:
      'Karaspēka un politiskais spiediens ir dzinējspēks, ko avoti nosauc 376. gadam: goti pie upes huņu dēļ (Ammians; secība ir katrā nopietnā sekundārajā stāstā). Kaskādes pārvietošanās — alani, goti, vēlāk grupas, kas saistītas ar Reinas šķērsošanu 406. gadā — ir mehānisms, ne nacionālistisks «iebrukums civilizācijā». Klimats ir vēlāks, šaurāks arguments. Hakenbeck un Büntgen (2022) ar koku gredzenu hidroklīmatu ierosina, ka stipri sausuma posmi Karpatu ieplakā 430.–450. gados izjauca iztiku un varēja pastiprināt huņu reidus kā buferi. Tas ir par Atilas laikmeta reidiem, ne pierādīts 370. gadu parādīšanās cēlonis, un ne vēlās antikas mazais leduslaikmets no 536. gada, kas ir pēc Atilas. Sausumu turiet kā hipotēzi ar nenoteiktību, ne kā saukli.',
    timing:
      'Skaidra romiešu ziņa: 370. gadi. Gotu Donavas šķērsošana: 376. Adrianoples kauja: 378. Atilas augstākais punkts: 440. gadi–452. Nāve: 453. Vācu historiogrāfiskā birka Völkerwanderung («tautu staigāšanas periods») ir 19. gadsimta rāmis šiem gadsimtiem. Tā ir plaukta vārds vecās mācību grāmatās, ne rases stāsts un ne Homo sapiens izcelsmes datums.',
    pressure:
      'Rietumu impērijas vara nesagremoja 376. gada pāreju; Adrianoples kauja un vēlākie pilsoņu kari nozīmēja ne mazāk kā jebkura stepes «orda». Vēlākais Eiropas nacionālisms Atilu pārstrādāja par rīksti vai senčiem. Šī enciklopēdija nedara ne vienu, ne otru. Huņu polītija saira pēc 453.; pēcteču grupas pie Donavas ir cita kartīte, ja šis plaukts augs. Nesaliekiet šo kustību pleistocēna Cilvēku plauktā.',
    sourcesNote:
      'Ammians 31 ir galvenais stāsts par 376. gadu. Heather 1995 ir standarta politiski militārais lasījums. Hakenbeck & Büntgen 2022 ir klimata raksts par 430.–450. gadu reidiem — tā arī marķēts. Fotogrāfija ir 2006. gada muzeja katla kopija, ne izrakts oriģināls.',
  },
  'arctic-tern': {
    title: 'Polārais zīriņš',
    hook: 'Garākais regulārais ceļojums uz Zemes: no polārās vasaras uz polāro vasaru, sekojot gaismai un barībai.',
    imageAlt: 'Polārais zīriņš planē uz vietas virs tundras Amsterdamøya, Svalbārā',
    what: 'Polārais zīriņš ligzdo Arktikā un subarktiskajā joslā un pretējo sezonu pavada Antarktikas ūdeņos. Tas ir mazs zīriņš, IUCN vismazāk apdraudēts, slavens tāpēc, ka ģeolokatori parādīja turp un atpakaļ ceļojumu ap 70 000 kilometru kārtā — ne tāpēc, ka būtu rets.',
    route:
      'Grenlandes un citi Ziemeļatlantijas ligzdotāji, ko izsekoja Egevang et al. (2010), atstāja ligzdošanas kolonijas, apstājās Ziemeļatlantijā, šķērsoja uz Rietumāfrikas krastu vai turpināja un sasniedza Antarktikas pakledu, pirms atgriezās. Klusā okeāna populācijas iet paralēlu pola–pola ainu. Ceļš ir barības plankumu figūra, ne taisns meridiāns.',
    drivers:
      'Dzinējspēks ir sezonālā produkcija. Augsto platuma grādu vasaras dod garas dienas un bagātīgas sīkzivis un bezmugurkaulniekus; polārās ziemas — nē. Sekot vasarai apkārt zemeslodei ir barības stratēģija. Vējš un okeāna frontes stūrē lēto maršrutu. Tā nav bēgšana no leduslaikmetiem cilvēku nozīmē — tas ir ikgadējs fotoperioda un barības pulkstenis.',
    timing:
      'Ligzdošana ziemeļu vasarā; Antarktikas ūdeņi dienvidu vasarā. Egevang et al. lēsa ap 70 900 km Grenlandes putniem. Vēlāka citu populāciju izsekošana ir devusi vēl garākas kopsummas. „Garāko migrāciju” uzskati par ļoti garu pelāģisko cilpu klasi, ne par vienu svētu skaitli.',
    pressure:
      'Klimats pārbīda ledus malu un upura laiku. Piekrastes apbūve un traucējums kolonijās, un zveja, kas izņem barības zivis, sver vairāk nekā žogs. Suga joprojām ir plaši izplatīta. Ceļojums nav muzeja eksponāts.',
    sourcesNote:
      'Attālums no Egevang et al., PNAS, 2010. IUCN vismazāk apdraudēts. Vēlākās publikācijas dažas trases pagarinā; tās neizgudro citu sugas stāstu.',
  },
  'bar-tailed-godwit': {
    title: 'Smailastes puņķis',
    hook: 'No Aļaskas uz Jaunzēlandi bez nosēšanās: zarnas sarukušas degvielai, un Dzeltenajai jūrai joprojām jābūt vietā atpakaļceļā.',
    imageAlt: 'Smailastes puņķis stāv seklā ūdenī',
    what: 'Smailastes puņķis ir liels bridējputns. Pasuga baueri ligzdo Aļaskā un ziemo Jaunzēlandē un Austrālijas austrumos. IUCN sugu liek tuvu apdraudējumam, jo vairākas populācijas krīt, it īpaši tur, kur Austrumāzijas dūņainie līdzenumi ir aizbērti.',
    route:
      'Gill et al. (2009) un Battley et al. (2012) dokumentēja dienvidu virziena bezpieturas lidojumus no Aļaskas uz Jaunzēlandi — Battley putni vidēji 11 680 km 9,4 dienās, bez barošanās. Ziemeļu virzienā daudzi putni pietur Dzeltenajā jūrā. Tas ir cits, no pieturas atkarīgs posms, ne vēl viens bezpieturas okeāna šķērsojums.',
    drivers:
      'Ligzdošana ir saskaņota ar īso Arktikas kukaiņu un tundras barības vasaru. Ziemošanas vietas dienvidos dod litorāles barību, kad Aļaska ir sasalusi. Bezpieturas dienvidu posms ir iespējams, jo putniem sarūk gremošanas orgāni un tie uzkrāj taukus — fizioloģiska likme uz skaidru Kluso okeānu. Atgriešanās atkarīga no neskartiem Dzeltenās jūras paisuma līdzenumiem: barība, ne griba.',
    timing:
      'Dienvidu virzienā ziemeļu rudenī; ziemeļu virzienā ziemeļu pavasarī, ar Dzeltenās jūras pieturu baueri. Virsrakstu „garākais bezpieturas” skaitļus uzskati par izsekotiem īpatņiem nosauktās publikācijās, ne par sugas vidējo katru gadu.',
    pressure:
      'Dzeltenās jūras dūņaino līdzenumu aizbēršana (Saemangeum un citi) izņēma pieturas dzīvotni. Tas ir cilvēka barjera lidojumu ceļa nozīmē: putni joprojām var lidot, bet degvielas noliktava ir mazāka. Medības un traucējums pievieno vietējus zudumus. Klimats pārbīda Arktikas ligzdošanas logus pretī atkušņa laikam.',
    sourcesNote:
      'Gill 2009 un Battley 2012 ir šeit citētās galvenās izsekošanas publikācijas. IUCN tuvu apdraudējumam sugai kopumā.',
  },
  'barn-swallow': {
    title: 'Lauku bezdelīga',
    hook: 'Parastais brīnums: mazs kukaiņēdājs, kas joprojām saista Palearktikas vasaras ar Āfrikas ziemām.',
    imageAlt: 'Lauku bezdelīga sēž uz sausa stublāja',
    what: 'Lauku bezdelīga ir viena no visplašāk izplatītajām bezdelīgām, IUCN vismazāk apdraudēta. Eiropas un ziemeļu Āzijas putni ir tālie migranti; dažas tropu populācijas pārvietojas mazāk. Šeit tā ir kā pazīstamais lidojumu ceļa putns, ne ekstrēmā distances rekords.',
    route:
      'Rietumu Palearktikas ligzdotāji piltuvē iet caur Vidusjūru un Sahāru pretī dienvidu Āfrikas neligzdošanas vietām; austrumu putni lieto Āzijas maršrutus. Sahāra ir karstuma un tukšuma barjera, ko šķērso pēc grafika, ne siena, kas ceļojumu beidz. Tās pašas sugas Amerikas populācijām ir sava ziemeļu–dienvidu sistēma.',
    drivers:
      'Gaisa kukaiņi sasniedz maksimumu ar mērenajām vasarām. Āfrikas neligzdošanas vietas tur kukaiņus pieejamus, kad Eiropa ir auksta. Ligzdošana kūtīs un uz tiltiem ir cilvēka būvēta prēmija, ne sākotnējais dzinējspēks — alas un klintis nāca pirmās. Laikapstākļi šķērsošanas dienās nogalina vairāk putnu nekā „instinkta” trūkums.',
    timing:
      'Ziemeļos ziemeļu pavasarī, dienvidos rudenī. Ierašanās datumi daļā Eiropas ir pārbīdījušies agrāk, kad pavasari siltāki — fenoloģijas maiņa, ne jauns lidojumu ceļš.',
    pressure:
      'Lauksaimniecības intensifikācija samazina kukaiņu barību. Sausums Āfrikas neligzdošanas vietās un vētras Sahāras šķērsojumos pievieno mirstību. Suga paliek parasta; parasts nav tas pats, kas nesaskaitāms uz visiem laikiem.',
    sourcesNote:
      'IUCN vismazāk apdraudēta; BirdLife faktu lapa areālam un lidojumu ceļa ģimenei. Šī kartīte neizgudro vienu GPS trasi „bezdelīgai”.',
  },
  'white-stork': {
    title: 'Baltais stārķis',
    hook: 'Planējošs migrants, kas Vidusjūru uzskata par problēmu: ūdenim nav termiku, tādēļ putni iet apkārt.',
    imageAlt: 'Baltais stārķis lidojumā ar GPS raidītāju',
    what: 'Baltais stārķis ir liels planējošs bridējputns mitrājos un tīrumos, IUCN vismazāk apdraudēts pēc 20. gadsimta sabrukuma un vēlākas atjaunošanās daļā Eiropas. Tas ir Āfrikas–Eirāzijas lidojumu ceļa sistēmas karogputns.',
    route:
      'Lielākā daļa rietumu putnu šķērso Gibraltāra šaurumā; austrumu putni lieto Bosforu un Levanti — divi šauri sauszemes tilti ap jūru, kas nedod paceļošos gaisu. Tad tie seko Āfrikas Riftam un savannām. Augoša daļa rietumu stārķu tagad ziemo Dienvideiropā uz izgāztuvēm. Tā ir saīsināta migrācija, ne jauna suga.',
    drivers:
      'Stārķiem vajag termikas, tādēļ tie ir sauszemes tilta migranti. Ligzdošana ir saskaņota ar Eiropas pavasariem un abinieku, kukaiņu un sīko mugurkaulnieku uzplūdu. Neligzdošanas barība Āfrikā ir sezonāli mitrāji un zālājs. Atkritumu izgāztuves vēlāk kļuva par enerģijas subsīdiju, kas ļauj dažiem putniem izlaist Sahāru.',
    timing:
      'Dienvidos pēc ziemeļu ligzdošanas sezonas; ziemeļos pavasarī. Jaunieši var ņemt citus maršrutus nekā pieaugušie. Raidītāji (kā fotogrāfijā) ir tas, kā to zina — ne folklora par zīdaiņiem.',
    pressure:
      'Elektrolīnijas, mitrāju nosusināšana un sausums pa Āfrikas maršrutu. Ziemošana uz Ibērijas izgāztuvēm ir īsts uzvedības pavērsiens ar jauktām sekām (vieglas kalorijas, netīras). Suga Eiropā atjaunojās aizsardzībā un ligzdu platformās; tā ir pārvaldība, ne garantija Āfrikas posmiem.',
    sourcesNote:
      'IUCN vismazāk apdraudēts; BirdLife faktu lapa. AEWA sedz daudzus mitrājus, ko šie putni lieto. Izgāztuvju ziemošana ir ziņota izsekošanas literatūrā; tā nav izdomāta šeit.',
  },
  'amur-falcon': {
    title: 'Amūras piekūns',
    hook: 'Mazs piekūns no Krievijas Tālajiem Austrumiem, kas šķērso Indiju un Arābu jūru, lai ziemeļu ziemu pavadītu dienvidu Āfrikā.',
    imageAlt: 'Amūras piekūns lidojumā pret gaišām debesīm',
    what: 'Amūras piekūns ligzdo Austrumāzijā (Krievijas Tālie Austrumi, ziemeļu Ķīna, kaimiņu reģioni) un ziemo dienvidu Āfrikā. IUCN vismazāk apdraudēts. Starp plēsīgajiem putniem tas ir viens no garākajiem regulārajiem migrantiem.',
    route:
      'Putni atstāj Austrumāziju, pietur ziemeļaustrumu Indijā (Nāgalenda kļuva slavenā gan ar slaktiņu, gan ar aizsardzības pavērsienu), tad šķērso Indijas okeānu / Arābu jūru pretī Austrumāfrikai un dienvidu Āfrikai. Okeāna šķērsojums ir īsta ūdens barjera, ne planējošs sauszemes tilta lēciens kā stārķa Gibraltārs.',
    drivers:
      'Ligzdošana seko Austrumāzijas vasaras kukaiņu impulsam (it īpaši lidojošās termītes un citi baru kukaiņi). Āfrikas neligzdošanas vietas dod otru tās pašas upura klases vasaru. Maršruts ir barības koridors ar bīstamu jūru vidū, ne klimata bēgļu stāsts.',
    timing:
      'Dienvidu virzienā ziemeļu rudenī, ar koncentrētu caurceļu caur ziemeļaustrumu Indiju; ziemeļu virzienā ziemeļu pavasarī. Datumi ir sezonāli logi, ne viena kalendāra diena.',
    pressure:
      'Nāgalendas raža no nakšņojošiem putniem bija pietiekami liela, lai kļūtu par starptautisku ziņu; vietējā aizsardzība tad tās pašas kolonijas pārvērta vērošanas ekonomikā. Tas ir cilvēka spiediens, apgriezts vienā sašaurinājumā, ne globāls „viss kārtībā”. Dzīvotņu maiņa un pesticīdi abos lidojumu ceļa galos paliek parasti draudi.',
    sourcesNote:
      'IUCN vismazāk apdraudēts; CMS piezīmes par Nāgalendas pavērsienu. Šī kartīte neizgudro kilometru rekordu; „starp garākajām plēsīgo putnu migrācijām” ir godīgā klase.',
  },
  'bar-headed-goose': {
    title: 'Indijas zoss',
    hook: 'Zoss, kas šķērso Himalajus, jo ligzdošanas ezeri ir ziemeļos no sienas, un ziemošanas mitrāji — dienvidos no tās.',
    imageAlt: 'Indijas zoss stāv seklā ūdenī',
    what: 'Indijas zoss ligzdo augstos Centrālāzijas plato un ziemo Dienvidāzijā. IUCN vismazāk apdraudēta. Hawkes et al. (2011) parādīja putnus, kas lido pāri Himalaju grēdām, ne tikai vījas caur zemākajām ielejām.',
    route:
      'Himalaju ziemeļos ligzdošanas sezonā (Tibetas plato un kaimiņu ezeri); dienvidos uz Indijas subkontinentu ziemā. Kalnu grēda ir barjera. Putni iet pāri tai pēc grafika, lietojot vējus un fizioloģiju, kas ir noskaņota plānam gaisam — ne tuneli caur grēdu.',
    drivers:
      'Ligzdošana plēsējiem nabadzīgos, barības bagātos plato mitrājos vasarā; ziemas barība Indijas līdzenumos, kad plato sasalst. Himalaji ir ģeogrāfija, ne sezona. Skābeklis un vējš ir tūlītējie fiziskie dzinējspēki, kā, ne kāpēc, tie šķērso.',
    timing:
      'Dienvidu virzienā rudenī, ziemeļu virzienā pavasarī, saskaņoti ar atkusni un sasalšanu uz plato. Precīzi grēdas šķērsošanas augstumi atšķiras pēc īpatņa un laikapstākļiem; PNAS darbs ir nosauktais avots, ne folklora „pāri Everestam katru reizi”.',
    pressure:
      'Mitrāju zudums ziemošanas vietās, medības un elektroinfrastruktūra. Klimata maiņa pārbīda sniegu un ezeru ledu ligzdošanas plato. Suga nav globāli reta; šķērsojums joprojām atkarīgs no mitrājiem abās sienas pusēs.',
    sourcesNote:
      'Hawkes et al., PNAS, 2011, ir šeit citētā fizioloģijas un lidojuma publikācija. IUCN vismazāk apdraudēta.',
  },
  wildebeest: {
    title: 'Zilā gnu',
    hook: 'Lietus raksta karti: vairāk nekā miljons dzīvnieku joprojām seko jaunai zālei ap Serengeti–Mara.',
    imageAlt: 'Zilās gnu teļš stāv pie mātes atklātā zālājā',
    what: 'Zilā gnu ir ganīšanās antilope Āfrikas austrumu un dienvidu savannās, IUCN vismazāk apdraudēta. Serengeti–Mara populācija ir slavenā migrējošā; citas populācijas pārvietojas mazāk vai nemaz. UNESCO Serengeti nacionālo parku iekļauj daļēji šīs sezonālās kustības dēļ.',
    route:
      'Parastajā gadā lielais Serengeti bars teļojas dienvidu īsās zāles līdzenumos mitrajā sezonā, tad iet rietumos un ziemeļos, kad šie līdzenumi žūst, šķērso Kenijas Masaī Marā sausajā sezonā un atgriežas dienvidos, kad lietus atsākas. Upju šķērsojumi Marā ir sašaurinājums šajā cilpā, ne atsevišķa migrācija.',
    drivers:
      'Holdo, Holt & Fryxell (2009) un vecākais Sinclair–Mduma Serengeti darbs cilpu uzskata par nokrišņu, zāles slāpekļa un ganītāju blīvuma saisti. Dzīvnieki seko jaunai, barojošai zālei un virsmas ūdenim. Plēsēji seko ganītājiem. Tas ir resursu pulkstenis, ne leduslaikmeta koridors.',
    timing:
      'Teļošanās dienvidu līdzenumos mitrajā sezonā (daudzos gados aptuveni janvāris–marts); sausās sezonas klātbūtne ziemeļos (gada vidū). Precīzas nedēļas pārbīdās ar lietu. Tūristu „Lielās migrācijas” kalendārus uzskati par tuvinājumiem.',
    pressure:
      'Žogi, saimniecības un ceļi var pārraut cilpu, kas darbojas tikai tad, ja līdzenumi paliek savienoti. Sausuma gadi jau nogalina teļus. Serengeti–Mara sistēma joprojām ir liela; tā pati suga citur ir samazināta līdz nometnieku fragmentiem. Šis pretstats ir aizsardzības punkts.',
    sourcesNote:
      'UNESCO Serengeti iekļaušana; Holdo et al. 2009 nokrišņu–zāles mehānismam; IUCN vismazāk apdraudēta sugai. Bara lielums šajā ekosistēmā ir miljons un vairāk kārtā un ir skaitīts, ne minēts šeit kā sauklis.',
  },
  caribou: {
    title: 'Ziemeļbriedis',
    hook: 'Tā pati suga: tundras bari, kas joprojām iet simtiem kilometru starp teļošanās vietām un ziemas mežiem.',
    imageAlt: 'Ziemeļbriedis iet pa kailu ziemeļu zemi',
    what: 'Rangifer tarandus Ziemeļamerikā sauc caribou, Eirāzijā — reindeer; latviski abi ir ziemeļbriedis. IUCN sugu liek ievainojamu, jo daudzi savvaļas bari ir krituši, pat kamēr daži mājas ziemeļbrieži paliek daudzskaitlīgi. Fotogrāfija ir Fennoskandijas dzīvnieks; ekoloģija zemāk sedz savvaļas migrējošos barus, tostarp Aļaskas–Jukonas Porcupine baru.',
    route:
      'Tundrā teļojošie bari iet ziemeļos vai uz pussalām kukaiņu atvieglojumam un barojošai jaunai barībai vasarā, tad dienvidos vai boreālajā mežā un taigā ziemas ķērpjiem un pajumtei. Joly et al. (2019) dokumentēja dažas no garākajām sauszemes migrācijām kontinentā. Maršruti ir tradicionāli un arī plastiski, kad ledus, sniegs vai apbūve tos bloķē.',
    drivers:
      'Teļošanās vietas izvēlas pēc barības un, bieži, mazāk plēsēju. Vasaras kukaiņi (ādas dunduri, odi) var dzīt dzīvniekus uz vējainiem krastiem. Ziemas barība ir ķērpis zem sniega — klimata un sniega garozas problēma tikpat, cik distances problēma. Tas ir sezonāls Arktikas pulkstenis, ar ledu un sniegu kā barjerām.',
    timing:
      'Ziemeļu virzienā pretī teļošanai pavasarī; vasaras kustības kukaiņiem un barībai; dienvidu virzienā rudenī. Ledusceļu un migrācijas laiks var sadurties ar industrijas kalendāriem.',
    pressure:
      'Rūpnieciskās pēdas, ceļi un piedāvātā naftas ieguve teļošanās vietās (Arktikas patvēruma piekrastes līdzenums ir ASV politiskais uzliesmojuma punkts Porcupine baram). Klimats maina sniega garozu, apledošanas epizodes un kukaiņu sezonas. IUCN ievainojams ir sugas līmeņa brīdinājums; daži bari ir stabili vai atjaunojas, citi — nē.',
    sourcesNote:
      'IUCN ievainojams; Joly et al. 2019 tālajām kustībām; USFWS Porcupine bara lapas. Mājas ziemeļbriežu ganīšana ir paralēls cilvēka stāsts, ne aizstāts šeit savvaļas migrācijai.',
  },
  'humpback-whale': {
    title: 'Kuprainais valis',
    hook: 'Baroties aukstumā, teļot siltumā: pola–tropu ceļojums katrā okeāna baseinā, kuram vēl ir upuris.',
    imageAlt: 'Kuprainais valis nirst, redzamas melnbaltās astes lāpstiņas',
    what: 'Kuprainais valis ir garspuru baleenvalis. IUCN 2018. gadā piešķīra vismazāk apdraudētā statusu pēc atjaunošanās vairākos okeāna baseinos. Daži krājumi paliek mazi. Savvaļa tur sugas kartīti; šī lapa ir migrācija.',
    route:
      'Katrā okeānā daudzas populācijas barojas augstos platuma grādos vasarā un peld uz tropiskām vai subtropiskām vairošanās vietām ziemā — piemēram, Ziemeļklusā okeāna barošanās lauki uz Havajām vai Meksiku, vai Dienvidu okeāna barošanās uz Lielo Barjerrifu un citiem tropu krastiem. Ne katrs īpatnis migrē katru gadu. Ekvatora šķērsojumi atšķiras pēc populācijas; nezīmē vienu globālu sacīkšu trasi.',
    drivers:
      'Polārās un subpolārās vasaras ražo blīvu krilu un sīkzivis. Mazuļiem ir mazāk tauku, un tie iegūst no siltākiem, klusākiem ūdeņiem ar mazāk plēsējiem. Pārošanās ir piesaistīta šīm vairošanās vietām. Dzinējspēks ir barības/vairošanās sadalījums pa platuma grādiem, ne termiku lidojumu ceļš.',
    timing:
      'Barošanās augsto platuma grādu vasarā; vairošanās zemo platuma grādu ziemā tajā puslodē. Dienvidu un ziemeļu puslodes populācijas ir pretējos kalendāros.',
    pressure:
      'Sapīšanās zvejas rīkos, kuģu triecieni, troksnis un mainīga krila karte, kad okeāni silst. Komerciālā vaļu medīšana vairs nav galvenais globālais dzinējspēks; atjaunošanās ir īsta vairākos krājumos un nepilnīga citos. Skat. Savvaļu aizsardzības ietvaram.',
    sourcesNote:
      'IUCN 2018 vismazāk apdraudēts; NOAA Fisheries sugas profils ASV krājumiem un barošanās/vairošanās ainai. Šis nav katra baseina dzīvnieku skaitījums.',
  },
  'gray-whale': {
    title: 'Pelēkais valis',
    hook: 'Starp garākajiem zīdītāju ceļojumiem, kas vēl notiek: Arktikas barošanās uz Meksikas lagūnām, pa vienu apdzīvotu krastu.',
    imageAlt: 'Pelēkais valis izceļ galvu virs ūdens',
    what: 'Pelēkais valis ir Ziemeļklusā okeāna baleenvalis. Austrumu Ziemeļklusā okeāna krājums ir tas, kura migrāciju vēro no Amerikas rietumu krasta; rietumu krājums ir daudz mazāks un IUCN tā populācijas vērtējumā apdraudēts. Suga kopumā ir vismazāk apdraudēta.',
    route:
      'Austrumu Klusā okeāna vaļi barojas Beringa un Čukču jūrā vasarā, tad seko Ziemeļamerikas krastam uz ziemošanas lagūnām Kalifornijas pussalā (Baja California). NOAA apraksta turp un atpakaļ ceļojumu 15 000–20 000 km kārtā. Maršruts iet gar krastu, tādēļ cilvēki to redz — un tādēļ kuģi un tīkli stāv uz tās pašas līnijas.',
    drivers:
      'Arktikas bentiskie amfipodi un cits jūras dibena upuris ir vasaras resurss. Mazuļi piedzimst siltās, seklās lagūnās. Ledus sega vēsturiski noteica, kad ziemeļi atvērās. Tas ir barības/vairošanās platuma sadalījums ar piekrastes ierobežojumu, ne atklāta okeāna klejojums kā dažiem kuprainā vaļa posmiem.',
    timing:
      'Dienvidu virzienā ziemeļu rudenī un ziemā; ziemeļu virzienā pavasarī, govis ar mazuļiem vēlāk nekā pirmais vilnis. Ledus un upuris Arktikā var aizkavēt vai izsalkināt gadu — neparasti mirstības notikumi ir dokumentēti, kad šī sistēma sabrūk.',
    pressure:
      'Kuģu triecieni un sapīšanās uz aizņemta krasta; traucējums lagūnās; Arktikas sasilšana, kas pārkārto upuri un ledu. Austrumu krājums atjaunojās pēc vaļu medībām; šī atjaunošanās nav vairogs pret barības tīkla pārbīdi Beringa jūrā.',
    sourcesNote:
      'NOAA Fisheries pelēkā vaļa profils Austrumu Ziemeļklusā okeāna maršrutam un distances klasei; IUCN statusam, tostarp rietumu krājuma atsevišķajām briesmām.',
  },
  'mexican-free-tailed-bat': {
    title: 'Meksikas brīvastes sikspārnis',
    hook: 'Desmitiem miljonu krēslā atstāj Teksasas alas pēc kukaiņiem — un daudzi no tiem pašiem dzīvniekiem sezonāli ceļo arī pretī Meksikai.',
    imageAlt: 'Meksikas brīvastes sikspārņu stabs izplūst no Bracken alas krēslā',
    what: 'Tadarida brasiliensis ir mazs, ātrs kukaiņēdājs sikspārnis Amerikā, IUCN vismazāk apdraudēts. Bracken ala Teksasā tur lielāko zināmo koloniju — ap 15 miljonu dzīvnieku sezonā, pārvalda Bat Conservation International. Fotogrāfija ir vakara izlidošana, dienas pulss; migrācija ir sezonālā pārbīde daudzām (ne visām) mērenajām kolonijām.',
    route:
      'Dažas populācijas paliek uz vietas. Daudzas mērenās Ziemeļamerikas kolonijas ziemai iet pretī Meksikai un dienvidu ASV. Lidojumu ceļš ir plats nakts debesis, ne piekrastes dūņains līdzenums. Vairošanās kolonijas ASV dienvidu–centrālajā daļā vasarā koncentrē mātītes.',
    drivers:
      'Gaisa kukaiņi. Vasaras vairošanās kolonijas sēž tur, kur naktis dod pietiekami naktstauriņu un vaboļu, lai izaudzinātu mazuļus. Ziemas kukaiņu minimumi daļu sikspārņu dzen dienvidos. Ikdienas stabs pie Bracken ir vietēja kukaiņu raža virs tīrumiem — vertikāls ceļojums virs sezonālā.',
    timing:
      'Vakara izlidošana ir nakts pēc nakts sezonā. Sezonālā kustība ir starp vasaras vairošanās kolonijām un ziemošanas vietām, saskaņota ar kukaiņu fenoloģiju. Ne katrs īpatnis migrē.',
    pressure:
      'Alu traucējums, pesticīdi, kas izņem upuri, un turbīnas nakts lidojumu ceļos. Baltā deguna sindroms ir bijis katastrofa citiem Ziemeļamerikas sikspārņiem; šīs sugas stāsts joprojām galvenokārt ir dzīvotne, kukaiņi un sadursme. Guano vēsturiski padarīja alas par rūpniecisku resursu; aizsardzība to apgrieza pie Bracken.',
    sourcesNote:
      'IUCN vismazāk apdraudēts; Bat Conservation International par Bracken alu. Kolonijas lielums ir kārtas lieluma pārvaldīts vērtējums, ne cenzs katram sikspārnim Amerikā.',
  },
  'straw-coloured-fruit-bat': {
    title: 'Salmu krāsas augļsikspārnis',
    hook: 'Āfrikas masu augļsikspārņu sapulce: miljoni saplūst sīkā Zambijas purva mežā, kad koki nes augļus.',
    imageAlt: 'Salmu krāsas augļsikspārnis karājas pie zara',
    what: 'Eidolon helvum ir liels Āfrikas augļsikspārnis, IUCN tuvu apdraudējumam. Kasanka nacionālais parks Zambijā katru dienvidu puslodes pavasari uzņem vienu no blīvākajām zīdītāju sapulcēm uz Zemes — vairāku miljonu sikspārņu kārtā dažos hektāros mushitu purva meža —, tad dzīvnieki izklīst.',
    route:
      'Richter & Cumming (2008) ar satelītu iezīmēja sikspārņus un parādīja tālās kustības pāri Centrālāfrikai, ne vienu divu punktu ceļojumu. Kasanka ir sezonāls mezgls, kur augļojoši koki koncentrē dzīvniekus, kas citādi klejo pa lietusmeža un savannas mozaīkām. Uzskati to par sapulci uz resursa impulsa, ar gariem pārejas posmiem starp kolonijām.',
    drivers:
      'Augļi. Kokiem augļi nāk telpā un laikā; sikspārņi seko šai fenoloģijai. Kasankas purva mežs dod īsu, blīvu ražu. Tā ir resursu izsekošanas migrācija, tuvāka gnu-un-zālei nekā Arktikas fotoperiodam. Ūdens un koloniju koki ir vietējie ierobežojumi.',
    timing:
      'Maksimums Kasankā parasti ir oktobris–decembris. Pārējo gadu tie paši dzīvnieki ir citur plašā Āfrikas areālā. Nesasaldē sugu kā „Kasankas sikspārni”.',
    pressure:
      'Medības krūmmuļai, koku zudums kolonijās un tuvu apdraudējumam statuss, kas jau atzīmē kritumu areāla daļās. Kasankas skats no slēpņa var izskatīties bezgalīgs un joprojām sēdēt krītošā reģionālā populācijā. Dzīvotne ārpus parka ir pārējais maršruts.',
    sourcesNote:
      'Richter & Cumming 2008 satelīta trasēm; IUCN tuvu apdraudējumam. Kasankas skaitļi ir slaveni un joprojām ir blīvas kolonijas vērtējumi, ne kontinenta cenzs.',
  },
};
