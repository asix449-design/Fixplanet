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
    humans: 'Vispirms notikumu kartes: no Āfrikas, Sahula, zemkopība, bantu, austronēzieši, tautu staigāšana, vergu tirdzniecība. Nosauktas kustības, ne ikgadēja tautas skaitīšana.',
    'great-migrations':
      'Dzīvas masu kustības un leduslaikmeta areālu nobīdes: gnu, tauriņi, Arktikas putni, mamutu steppe, Beringija un holocēna atgriešanās.',
  },
  hubTitles: {
    humans: 'Cilvēku migrācijas',
    'great-migrations': 'Dzīvnieku migrācijas',
  },
  shelves: {
    humans: 'Cilvēki',
    'great-migrations': 'Lielās migrācijas',
  },
  shelfLeads: {
    humans:
      'Vispirms kartes: dokumentētu lielo cilvēku migrāciju notikumu skala, tad maza figūra un enciklopēdija. Homo sapiens radās Āfrikā ap 300 000 gadiem. Katrā kartītē ir kad, kur un kāpēc — klimats, ledus, zemkopība, karš, tirdzniecība, impērija, verdzība — tikai tur, kur to tur zinātne. Tā nav karte par visiem cilvēkiem ik pēc piecdesmit gadiem. Atila un tautu staigāšana paliek šeit; dzīvās kustības ir Lielajās migrācijās.',
    'great-migrations':
      'Dzīvas masu kustības un klimata laikmeta areālu nobīdes — ne izeja no Āfrikas un ne otra Atilas lapa. Tautu staigāšana paliek Cilvēkos. Kartītes nosauc dzinējspēku, sezonu vai dokumentētu nobīdi un avotu.',
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
    mapLinks: {
      title: 'Agrīno migrāciju kartes',
      lead:
        'Publiskas mācību kartes — atveramas to pašu vietnēs. Datumi paliek pie nosauktā avota. Tā nav katras grupas GPS.',
      openMap: 'Atvērt karti →',
      listedBy: 'Minēts',
      extraLabels: {
        'odyssey-exhibit': 'Ekspozīcijas lapa',
        'fossil-wikipedia': 'Vikipēdijas fosiliju saraksts',
        'era-australopithecus': 'Australopitēku laikmets',
        'era-erectus': 'Homo erectus laikmets',
        'era-sapiens': 'Homo sapiens laikmets',
      },
      cards: {
        'human-odyssey': {
          title: 'Human Odyssey Map',
          hook:
            'Kalifornijas Zinātņu akadēmijas interaktīvs: arheoloģisks, ģenētisks un klimata ieskicējums Homo sapiens izplatībai no Āfrikas, ar klimata laika skalu. Akadēmijas galddatora karte; viņi atzīmē, ka tā nav veidota tālruņiem.',
        },
        'early-fossils': {
          title: 'Agrīnās Homo sapiens fosiliju vietas',
          hook:
            'Globāli agrīno atradumu punkti pēc Vikipēdijas.',
        },
        'hominid-evolution': {
          title: 'Hominīdu evolūcijas kartes (~7 miljoni gadu)',
          hook:
            'Atlas of Human Evolution: trīs laikmetu kartes — australopitēki, Homo erectus un Homo sapiens — ar atlanta paša periodu etiķetēm.',
        },
      },
    },
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
};
