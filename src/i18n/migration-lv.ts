import type { MigrationPage } from './migration';
import type { MigrationEntryCopy } from '../data/migration';

export const page: MigrationPage = {
  metaTitle: 'Migrācija — Fix Planet',
  metaDescription:
    'Kāpēc cilvēki, putni un citi dzīvnieki pārvietojas: leduslaikmeti un krasti, vēsturiskas masu kustības, lidojumu ceļi un žogi. Enciklopēdija ar avotiem par cilvēku izplatīšanos, lielajām migrācijām un dzīvajiem maršrutiem.',
  eyebrow: 'Enciklopēdija',
  title: 'Migrācija',
  hubLead: [
    'Migrācija ir kustība ar iemeslu. Ledāju vaiņagi atver un aizver sauszemes tiltus. Sezonas pārbīda lietu, zāli, kukaiņus un planktonu. Krasti, kalni un tuksneši ir barjeras, līdz nav. Cilvēki vēlāk virsū liek žogus, gaismu, tīklus, armijas un siltāku klimatu — virs šiem vecākiem pulksteņiem.',
    'Četri plaukti, tīši šķirti. Homo sapiens dziļā vēsture, izejot no Āfrikas, nav Atila. Vēsturiskās «lielās migrācijas» ir nosauktas masu kustības rakstītajos avotos. Putni un citi dzīvnieki joprojām iet sezonālus ceļus. Dzinējspēki ir katrā kartītē. Datumi ir diapazoni no nosauktiem avotiem, ne izdomātas trases.',
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
    humans: 'Vispirms laikmetu kartes: no Āfrikas, Sahula, Amerika, holocēns, senatne, tautu staigāšana. Datumu logi, ne ikgadēja tautas skaitīšana.',
    'great-migrations':
      'Vēsturiskas masu kustības rakstītajos avotos. Pirmā kartīte: huņu spiediens uz romiešu pasauli.',
    birds: 'Lidojumu ceļi, sezonas un sugas, kas joprojām šķērso puslodes pēc barības un vairošanās.',
    animals: 'Gnu, ziemeļbrieži, vaļi, sikspārņi — atlasītas zīdītāju migrācijas un to dzinējspēki.',
  },
  shelves: {
    humans: 'Cilvēki',
    'great-migrations': 'Lielās migrācijas',
    birds: 'Putni',
    animals: 'Dzīvnieki',
  },
  shelfLeads: {
    humans:
      'Vispirms kartes: lielie migrācijas laikmeti, tad maza figūra un enciklopēdija. Homo sapiens radās Āfrikā ap 300 000 gadiem. Koridori, krasti, ledus un barība ir katrā laikmetā. Megafaunas zudums minēts tikai tur, kur tas izskaidro maršrutu; Izmirušo katalogs paliek Savvaļā. Atila ir cits pulkstenis: Lielās migrācijas.',
    'great-migrations':
      'Nosauktas masu kustības vēsturiskajā laikā — ne izeja no Āfrikas. Pirmā kartīte ir huņu spiediens uz vēlo romiešu pasauli. Vēlāk var pievienot citas kartītes; tas nav mācību grāmata par katru Völkerwanderung tautu.',
    birds:
      'Sezonālā putnu migrācija ir barības un vairošanās mašīna. Lielākā daļa tālo sugu ligzdo augstākos platuma grādos garās dienas vasarā, tad lido pretī ziemas barībai. BirdLife un CMS apraksta lidojumu ceļu ģimenes — shēmātiskus koridorus, ne katra bara GPS trases.',
    animals:
      'Zīdītāju migrācijas ir mazāk, smagākas un vieglāk pārraut ar žogu. Lietus ved pie zāles; ledus un kukaiņi dzen ziemeļbriežus; vaļi seko krilam, un mazuļiem vajag siltus seklumus. Katra kartīte nosauc dzinējspēku un spiedienu.',
  },
  humans: {
    heroEyebrow: 'Mūsu suga',
    scientificName: 'Homo sapiens',
    imageAlt:
      'Neliels viduslaiku zemnieka zīmējums vienkāršā kapucē un ar auklas jostu — ne karalis un ne konkrētas personas portrets',
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
      'Vēsturiskas masu kustības rakstītajos avotos — huņņi un vēlākas kartītes — ir atsevišķā plauktā. Šī lapa ir vēlais pleistocēns un holocēns, ne Atila.',
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
    eraAtlas: {
      title: 'Migrācijas laikmeti',
      lead:
        'Lieli periodi, ne katrs gads. Pleistocēna soļi ir mācību shēma uz NASA Blue Marble. Vēlākie soļi ir publicētas plates. Mēs nezīmējam globālu iedzīvotāju koropletu 50. gadam m.ē. un nevienam citam patvaļīgam gadam.',
      honesty:
        'Ierašanās logi, ne soļu gadi. Holocēna zemkopība, politiskā lapa ap 1. gadu m.ē., tautu staigāšanas shēma un austronēziešu jūrniecība ir plates ar marķētām pārklājuma spraugām — tāda pati godīgums kā reliģiju atlasam. Huņu spiediens ir Lielajās migrācijās; šis skruberis tur norāda, nevis dublē plauktu.',
      aria: 'Lielo cilvēku migrāciju laikmetu karte',
      scrubberAria: 'Pāriet uz migrācijas laikmetu',
      eraLabel: 'Laikmets',
      whereLabel: 'Kur',
      whyLabel: 'Kāpēc — dzinējspēki',
      uncertaintyLabel: 'Nenoteiktība',
      nearestNote: 'Tuvākā atklāti licencētā plate — ne precīza gada tautas skaitīšana.',
      sourceLabel: 'Avots',
      licenseLabel: 'Licence',
      vintageLabel: 'Datējums',
      schematicCredit:
        'Shēmas pamats: NASA Blue Marble Next Generation (2004. gada decembris, publiskais īpašums) — fiziskā Zeme, ne politiskā karte un ne iedzīvotāju rastrs.',
      greatMigrationsCta: 'Lielās migrācijas · huņņi →',
      greatMigrationsNote:
        'Nosauktas masu kustības rakstītajos avotos ir tajā plauktā. Šī plate ir reģionāla shēma 100.–500. g., ne otra huņu enciklopēdija.',
      coverage: {
        schematic: 'Mācību shēma · datēti ierašanās logi',
        agriculture: 'Zemkopības centri un izplatība — ne visu cilvēku tautas skaitīšana',
        polities: 'Politiska rekonstrukcija ~1 m.ē. — ne iedzīvotāju koroplets',
        regional: 'Eiropa un Vidusjūra — sprauga pārējai pasaulei',
        seafaring: 'Austronēziešu jūrniecība — Klusais un Indijas okeāns, ne pasaules tautas skaitīšana',
      },
      eras: {
        origin: {
          label: 'Āfrika · izcelsme',
          title: 'Āfrika — izcelsme, ne uzgaidāmā zāle',
          where: 'Āfrika. Džebel Irhūda Marokā ir nosauktais fosiliju logs ap 315 000 gadiem.',
          why: 'Tā ir izcelsme, ne starta šāviens. Lielāko daļu šī laika suga dzīvoja vienā kontinentā.',
          uncertainty:
            'Agrākās Homo sugas jau bija atstājušas Āfriku. Levantes fosilijas (Skhul/Qafzeh) fiksē klātbūtni bez noturīgas vispasaules nomaiņas.',
          caption: 'Tikai spraudīte 1. Bultu vēl nav. Datums ~300 000 gadu ir sugas vieta, ne trase no Āfrikas.',
          imageAlt: 'NASA Blue Marble ar spraudīti Āfrikā, kas iezīmē Homo sapiens izcelsmi',
        },
        'out-of-africa': {
          label: 'No Āfrikas',
          title: 'No Āfrikas — klimata koridori',
          where: 'No Āfrikas uz Levanti un tālāk, ap 70 000–50 000 gadiem.',
          why: 'Zaļās Sahāras un Levantes logi, tad sausas barjeras. Nīla, Sarkanās jūras krasti un Bab el-Mandeb ir apspriesti koridori, ne viena pierādīta šoseja.',
          uncertainty:
            'Ģenētika (Bergström et al. 2020) atbalsta vēlā pleistocēna izplešanos, kas atstāja lielāko daļu dzīvā ārpusāfrikas senču fonda. Precīzais ceļš nav zīmēts kā fakts.',
          caption: 'Bulta no Āfrikas pret Levanti. Datēta loga shēma, ne katras grupas GPS.',
          imageAlt: 'Shēmātiska bulta no Āfrikas pret Dienvidrietumāziju uz NASA Blue Marble',
        },
        sahul: {
          label: 'Sahula',
          title: 'Sahula — krasti, šelfi un ūdens spraugas',
          where: 'Austrālija, Jaungvineja un Tasmanija bija savienotas kā Sahula, kad jūras līmenis bija zemāks.',
          why: 'Ledāja jūras līmeņa kritums atsedza Sundu un sašaurināja ūdens spraugas. Līdz Sahulai tik un tā vajadzēja laivas vai plostus, ne bezledus iekšzemes koridoru.',
          uncertainty:
            'Madjedbebe datē ap 65 000 gadiem (Clarkson et al. 2017); daži apskati sēž vēlāk 65–50 tūkstošu logā. Jebkurā gadījumā tas ir desmitiem tūkstošgadu pirms Amerikas.',
          caption: 'Bulta pret Sahulu. Krasta un salu prasme, ne soļa gads.',
          imageAlt: 'Shēmātiska bulta no Sundas pret Sahulu uz NASA Blue Marble',
        },
        eurasia: {
          label: 'Eirāzija',
          title: 'Eirāzija — aukstā steppe un aizkavētā Eiropa',
          where: 'Āzijas daļas pirms noturīgas klātbūtnes Eiropā ap 45 000–40 000 gadiem.',
          why: 'Mamutu steppes medību ainavas, upes un lēna augstāku platuma grādu atvēršanās, kad klimats ļāva.',
          uncertainty:
            'Tas nav tas pats pulkstenis kā Sahulai. Neandertālieši jau bija Eiropā; noturīga Homo sapiens klātbūtne ir parastais vēlākais logs.',
          caption: 'Bulta Eiropā. Datēta klātbūtne, ne apgalvojums, ka gāja tikai pa šo līniju.',
          imageAlt: 'Shēmātiska bulta Eiropā uz NASA Blue Marble',
        },
        americas: {
          label: 'Amerika',
          title: 'Amerika — ledus, krasti un joprojām atvērta debates',
          where: 'Beringija, tad Amerika. Darba logs šeit: ap 15 000–10 000 gadiem plašai klātbūtnei.',
          why: 'Zems jūras līmenis saistīja Sibīriju un Aļasku. Ledāju vaiņagi bloķēja iekšzemi. Klusā okeāna krasta ceļš ir parastais darba modelis pēc Pedersen et al. 2016.',
          uncertainty:
            'Vecākas pretenzijas (tostarp White Sands) pastāv un paliek strīdīgas; šeit tās neuzskata par nosēdinātiem pirmās ierašanās datumiem. Tā nav 50. gada m.ē. tautas skaitīšana.',
          caption: 'Bulta Amerikā. Ledus un krasti, ne GPS pa gadiem.',
          imageAlt: 'Shēmātiska bulta Amerikā uz NASA Blue Marble',
        },
        holocene: {
          label: 'Holocēns · zemkopība',
          title: 'Holocēns — neolīta izplešanās',
          where:
            'Neatkarīgi zemkopības centri (Auglīgais pusmēness, Ķīna, Jaungvineja, Amerika, Āfrika) un turpmākā izplatība.',
          why: 'Kultūraugi un dzīvnieki ļāva blīvākām, sēslākām populācijām. Valodu saimes bieži gāja ar zemkopību, bet ne kā viens pasaules vilnis.',
          uncertainty:
            'Diamond 2003 1. att. Ian Alexander zīmējumā. 2003. gada kopsavilkums: Amazone kā centrs ir izlaista; datumi ir aptuveni. Tā ir zemkopība, ne visu cilvēku karte.',
          caption: 'Publicēta zemkopības centru un izplatības shēma. Nav holocēna iedzīvotāju koroplets.',
          imageAlt: 'Pasaules karte ar neolīta zemkopības centriem un izplatības bultām pēc Diamond 2003',
        },
        antiquity: {
          label: 'Senatne ~1 m.ē.',
          title: 'Klasiskā senatne — politisks momentuzņēmums',
          where: 'Apdzīvotā Vecā pasaule rekonstrukcijā ap 1. gadu m.ē.',
          why: 'Impērijas, valstis un nosauktas tautas — tirdzniecība, mesli un armijas, ne ciemu skaitīšana.',
          uncertainty:
            'Robežu vēstures 1. gada m.ē. lapa: polisas, ne iedzīvotāju blīvums. Amerika un liela daļa Okeānijas šeit nav tautas skaitīšana. Mēs neizgudrojam globālu koropletu 50. gadam m.ē.',
          caption: 'Politiska rekonstrukcija ar avotu. Godīga sprauga: tas nav «visi 50. gadā m.ē.».',
          imageAlt: 'Pasaules politiskā karte, rekonstruēta 1. gadam m.ē., ne iedzīvotāju blīvuma karte',
        },
        'migration-period': {
          label: 'Tautu staigāšana',
          title: 'Tautu staigāšanas laikmets — 100.–500. g. m.ē.',
          where: 'Eiropa un Vidusjūra: goti, vandaļi, franki, huņņi un citi uz mācību plates.',
          why: 'Spiediens uz robežām, klimata stress dažās desmitgadēs un vēlās romiešu pasaules politika. Huņu spiediens uz Romu ir pirmā Lielo migrāciju kartīte.',
          uncertainty:
            'MapMaster shēma pēc nosauktiem atlantiem. Tikai Eiropa. Bultas ir lieli iebrukumi, ne katras grupas GPS. Datumi aptver gadsimtus.',
          caption:
            'Reģionāla shēma, 100.–500. g. Saite uz Lielajām migrācijām huņu plauktam — šī lapa nedublē to kartīti.',
          imageAlt: 'Karte ar lieliem iebrukumiem Romas impērijā ap 100.–500. g. m.ē., Eiropa un Vidusjūra',
        },
        'later-seafaring': {
          label: 'Vēlākā jūrniecība',
          title: 'Vēlāki laikmeti — laivas, ne ledus',
          where: 'Austronēziešu izplatība pāri Klusajam un Indijas okeānam; Tālā Okeānija un Jaunzēlande daudz vēlāk.',
          why: 'Jūrniecība pret jaunām salām. Jaunzēlandes pirmā apmešanās ir ap 700 gadiem parastajā arheoloģiskajā lasījumā.',
          uncertainty:
            'Bellwood / Benton hronoloģija Wikimedia zīmējumā. Tikai Klusais un Indijas okeāns. Mēs joprojām neuzņemam globālu 1500. vai 1800. gadu iedzīvotāju rastru.',
          caption:
            'Vēlākā laikmeta plate ar avotu. Madagaskara, Tālā Okeānija un Jaunzēlande ir holocēna stāsti, ne ledus koridors.',
          imageAlt: 'Austronēziešu izplatības hronoloģiskā karte pāri Klusajam okeānam',
        },
      },
    },
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
};

export const entries: Record<string, MigrationEntryCopy> = {
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
