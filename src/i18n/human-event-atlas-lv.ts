import type { HumanEventAtlasCopy } from './migration';

const coverageLv: HumanEventAtlasCopy['coverage'] = {
  schematic: 'Mācību shēma · datēta kustība, ne tautas skaitīšana',
  'farming-europe': 'Zemkopības izplatība Rietumeirāzijā — sprauga citiem holocēna centriem',
  'culture-horizon': 'Arheoloģiskās kultūras areāls — ne rasu un ne nacionālistiska karte',
  regional: 'Eiropa un Vidusjūra — sprauga pārējai pasaulei',
  seafaring: 'Austronēziešu jūrniecība — Klusais un Indijas okeāns, ne pasaules tautas skaitīšana',
  conquest: 'Kalifāta izplešanās 622–750 — iekarošana un apmešanās, ne pievēršanās tautas skaitīšana',
  'empire-extent': 'Impērijas robežas kā kara un bēgšanas tuvinājums — ne kas pārvietojās',
  'forced-trade': 'Piespiedu Atlantijas tirdzniecība — ne brīvprātīga emigrācija',
  'flow-snapshot': 'Viena gada plūsmas — ne gadsimts visiem, kas atstāja Eiropu',
};

export const lvHumanEventAtlas: HumanEventAtlasCopy = {
  title: 'Lielie migrācijas notikumi',
  lead:
    'Labi dokumentētu kustību laika skala — ne karte par visiem cilvēkiem ik pēc piecdesmit gadiem. Pleistocēna kartītes ir mācību bultas uz NASA Blue Marble. Vēlākās ir publicētas plates. Spragas ir marķētas. Mēs neizdomājam globālus iedzīvotāju horopletus.',
  honesty:
    'Notikumu kartītes, ne regulārs laika režģis. Katrai kustībai ir datēts diapazons, maršruts vai reģions, dzinējspēki tikai tur, kur to tur zinātne, un avots. Huņu spiediens paliek Lielajās migrācijās; tautu staigāšanas kartīte ved turp, nevis dublē plauktu.',
  aria: 'Lielo cilvēku migrācijas notikumu karte',
  scrubberAria: 'Pāriet uz migrācijas notikumu',
  eventLabel: 'Notikums',
  whenLabel: 'Kad',
  whereLabel: 'Kur',
  whyLabel: 'Kāpēc — dzinējspēki',
  uncertaintyLabel: 'Nenoteiktība',
  nearestNote: 'Tuvākā atklāti licencētā plate — ne precīza gada tautas skaitīšana.',
  forthcomingNote:
    'Atklāti licencētas maršruta plates vēl nav. Bultas ir mācību shēma, ne datēta iebrukuma karte.',
  sourceLabel: 'Avots',
  licenseLabel: 'Licence',
  vintageLabel: 'Datējums',
  schematicCredit:
    'Shēmas pamats: NASA Blue Marble Next Generation (2004. gada decembris, publiskais īpašums) — fiziskā Zeme, ne politiskā karte un ne iedzīvotāju rastrs.',
  greatMigrationsCta: 'Lielās migrācijas · huņņi →',
  greatMigrationsNote:
    'Nosauktas masu kustības rakstītajos avotos ir tajā plauktā. Šī plate ir reģionāla shēma 100.–500. g., ne otra huņu enciklopēdija.',
  coverage: coverageLv,
  events: {
    'out-of-africa': {
      label: 'No Āfrikas',
      title: 'No Āfrikas — klimata koridori',
      when: 'Ap 70 000–50 000 gadiem. Agrākās Levantes fosilijas fiksē klātbūtni bez noturīgas pasaules nomaiņas.',
      where: 'No Āfrikas uz Levanti un tālāk. Nīla, Sarkanās jūras krasti un Bab el-Mandeba ir apspriesti koridori — ne viena pierādīta šoseja.',
      why: 'Zaļās Sahāras un Levantes logi, tad sausie barjeri. Tas nav viens «pētniecības dzinulis».',
      uncertainty:
        'Ģenētika (Bergström et al. 2020) atbalsta vēlā pleistocēna ekspansiju, no kuras nāk lielākā daļa dzīvā neāfrikāņu izcelsmes. Precīzo ceļu nezīmējam kā faktu.',
      caption: 'Mācību bulta pret Dienvidrietumāziju. Datēta kustība, ne katras grupas GPS.',
      imageAlt: 'Shēmātiska bulta no Āfrikas pret Dienvidrietumāziju uz NASA Blue Marble',
    },
    sahul: {
      label: 'Sahula',
      title: 'Sahula — krasti, šelfi un ūdens spraugas',
      when: 'Ap 65 000–50 000 gadiem. Madjedbebe ir nosaukta agrīnā vieta; daļa apskatu sēž vēlāk šajā logā.',
      where: 'Austrālija, Jaungvineja un Tasmanija bija savienotas kā Sahula, kad jūras līmenis bija zemāks. Aizsniegšana joprojām nozīmēja ūdens šķērsojumus no Sundas.',
      why: 'Ledāju jūras līmeņa kritums atsedza šelfus un sašaurināja spraugas. Laivas vai plosti, ne bezledus iekšzemes koridors.',
      uncertainty:
        'Clarkson et al. 2017 Madjedbebe datē ap 65 000 gadiem; citi apskati vēlāk 65–50 tūkstošos. Jebkurā gadījumā tas ir desmitiem tūkstošu gadu pirms Amerikas.',
      caption: 'Mācību bulta pret Sahulu. Krasta un salu prasme, ne soļa gads.',
      imageAlt: 'Shēmātiska bulta no Sundas pret Sahulu uz NASA Blue Marble',
    },
    americas: {
      label: 'Amerika',
      title: 'Amerikas apdzīvošana — ledus, krasti, strīds',
      when: 'Darba logs ap 16 000–11 000 gadiem ieejai un izplešosai klātbūtnei. Vecāki apgalvojumi paliek strīdīgi.',
      where: 'Beringija, tad Amerika. Klusā okeāna piekrastes ceļš ir parastais darba modelis pēc Pedersen et al. 2016.',
      why: 'Zems jūras līmenis saistīja Sibīriju un Aļasku. Ledāju vaiņagi bloķēja iekšzemi līdz vēlāk.',
      uncertainty:
        'White Sands un citi vecāki apgalvojumi pastāv; šeit tos neuzskata par nostiprinātiem pirmās ierašanās datumiem. Tā nav puslodes tautas skaitīšana.',
      caption: 'Mācību bulta Amerikā. Ledus un krasti, ne GPS pa gadiem.',
      imageAlt: 'Shēmātiska bulta Amerikā uz NASA Blue Marble',
    },
    neolithic: {
      label: 'Zemkopība → Eiropa',
      title: 'Neolīta zemkopības ekspansijas — Anatolija pret Eiropu',
      when: 'Ap 9600–4000 p.m.ē. šajā platē: zemkopība no Dienvidrietumāzijas uz Eiropu.',
      where:
        'Dienvidrietumāzija (Auglīgais pusmēness un Anatolija) uz Balkāniem, Vidusjūras krastiem un Centrāleiropu. Citi holocēna centri — Ķīna, Jaungvineja, Amerika, Āfrika — ir šīs kartītes marķētā sprauga.',
      why: 'Kultūraugi un dzīvnieki ļāva blīvākām, nometnākām populācijām. Senā DNS (Lazaridis u. c.) atbalsta būtisku cilvēku kustību kopā ar zemkopību, ne tikai idejām.',
      uncertainty:
        'Gronenborn u. c. saspiestā Rietumeirāzijas karte. Datumi ir aptuveni. Tā nav pasaules zemkopības tautas skaitīšana un ne visu holocēna cilvēku horoplets.',
      caption: 'Zemkopības izplatības plate Rietumeirāzijā. Godīga sprauga: citi neatkarīgie centri šajā lapā nav.',
      imageAlt: 'Karte par zemkopības izplatību no Dienvidrietumāzijas uz Eiropu ap 9600–4000 p.m.ē. pēc Gronenborn un kolēģiem',
    },
    bantu: {
      label: 'Bantu',
      title: 'Bantu ekspansija — valodas, zemkopība un garš pulkstenis',
      when: 'No ap 4000–1000 p.m.ē. no Nigērijas–Kamerūnas apgabala, turpinoties pirmajā tūkstošgadē m.ē. uz austrumiem un dienvidiem Āfrikā.',
      where: 'Rietumcentrālā Āfrika, tad austrumi un dienvidi caur mežu un savannu. Šodienas bantu valodu zona ir iznākums, ne maršruta karte.',
      why: 'Zemkopība, dzelzs un iedzīvotāju pieaugums mainīgā klimatā. Grollemund et al. 2015 argumentē ceļu caur lietusmežu, ne tikai apkārt.',
      uncertainty:
        'Tūkstošgadu ilga kustību sērija, ne viens gājiens. Atklāti licencētas datētas maršruta plates nav; bultas ir mācību shēma pēc nosauktiem darbiem.',
      caption: 'Mācību bultas Āfrikā. Datētas maršruta plates vēl nav — tā nav visu cilvēku valodu horoplets.',
      imageAlt: 'Shēmātiskas bultas par bantu ekspansiju Āfrikā uz NASA Blue Marble',
    },
    austronesian: {
      label: 'Austronēzieši',
      title: 'Austronēziešu ekspansija — laivas, ne ledus',
      when: 'No ap 3000 p.m.ē. no Taivānas; Tālā Okeānija un Jaunzēlande daudz vēlāk (Jaunzēlande ap 700 gadiem).',
      where: 'Salu Dienvidaustrumāzija, Madagaskara, Klusais okeāns. Tikai Klusais un Indijas okeāns.',
      why: 'Jūrniecība pret jaunām salām, zemkopības paketes un vēlāki tālie braucieni. Madagaskara, Tālā Okeānija un Jaunzēlande ir holocēna stāsti.',
      uncertainty:
        'Bellwood / Benton hronoloģija Wikimedia pārzīmējumā. Mēs neizvietoam globālu 1500. vai 1800. g. iedzīvotāju rastru.',
      caption: 'Hronoloģiskā plate ar avotu. Jūrniecība, ne ledus koridors.',
      imageAlt: 'Austronēziešu izplatības hronoloģiskā karte pāri Klusajam okeānam',
    },
    steppe: {
      label: 'Stepes ganītāji',
      title: 'Rietumu stepes ganītāji — Jamnajas horizonts, ne nācija',
      when: 'Jamnajas arheoloģiskais horizonts ap 3300–2600 p.m.ē. Saistītas kustības uz Eiropu un Āziju 3.–2. tūkst. p.m.ē.',
      where:
        'Pontijas–Kaspijas stepes. Vēlāk radniecīga izcelsme parādās auklas keramikas un citās grupās. Šī plate ir kultūras areāls, ne visu indoeiropiešu valodu karte.',
      why: 'Ganīšana, rati un mobila ekonomika. Haak et al. 2015 apraksta būtisku migrāciju no stepes uz Eiropu. Valodas maiņa ir izsecināta, ne fotografēta.',
      uncertainty:
        'Tā ir arheoloģija un senā DNS, ne rasu karte un ne nacionālistisks izcelsmes mīts. Plate rāda kultūras horizontu. Vēlākās valodu izplatības ir marķēta sprauga — nezīmējam «tautu bultas» kā likteni.',
      caption: 'Jamnajas horizonts pēc Krakkos (CC BY-SA). Piesardzīga kartīte: kultūras areāls, ne «ārieši».',
      imageAlt: 'Jamnajas arheoloģiskās kultūras karte Pontijas–Kaspijas stepē, ne rasu karte',
    },
    'migration-period': {
      label: 'Tautu staigāšana',
      title: 'Vēlā antīkā tautu staigāšana — 100.–500. g. m.ē.',
      when: 'Ap 100.–500. g. m.ē. šajā mācību platē. Huņu spiediens uz vēlo romiešu pasauli ir nosaukts episodes šajā posmā.',
      where: 'Eiropa un Vidusjūra: goti, vandāļi, franki, huņņi un citi.',
      why: 'Spiediens uz robežām, vēlā romiešu pasaules politika un klimata stress dažās desmitgadēs. Huņu spiediens ir pirmā Lielo migrāciju kartīte.',
      uncertainty:
        'MapMaster shēma pēc nosauktiem atlantiem. Tikai Eiropa. Bultas ir lieli iebrukumi, ne katras grupas GPS.',
      caption: 'Reģionāla shēma. Saite uz Lielajām migrācijām huņu plauktam — šī lapa nedublē to kartīti.',
      imageAlt: 'Karte ar lieliem iebrukumiem Romas impērijā ap 100.–500. g. m.ē., Eiropa un Vidusjūra',
    },
    islamic: {
      label: 'Agrīnie kalifāti',
      title: 'Agrīnās islāma ekspansijas — iekarošana un apmešanās',
      when: 'Ap 622.–750. g. m.ē.: Muhameds, taisnīgie kalifi, tad omajādi.',
      where: 'No Arābijas uz Levanti, Ēģipti, Ziemeļāfriku, Ibēriju un Irānu. Garnizona pilsētas (amsar) bija apmešanās mezgli.',
      why: 'Karš, impērija, tirdzniecības ceļi un vēlāka pievēršanās. Arābu cilšu apmešanās ir reāla; lielāko daļu pavalstnieku neaizstāja no pussalas.',
      uncertainty:
        'Šī plate ir kalifāta izplešanās, ne musulmaņu tautas skaitīšana un ne katra pievērstā karte. Reliģiskā bēgšana un vēlākās turku kustības ir citi pulksteņi.',
      caption: 'Izplešanās plate 622–750, publiskais īpašums. Iekarošana un apmešanās — ne «visi kļuva par arābiem».',
      imageAlt: 'Kalifāta izplešanās karte no 622. līdz 750. g. pāri Ziemeļāfrikai, Tuvajiem Austrumiem un Ibērijai',
    },
    mongol: {
      label: 'Mongoļu laikmets',
      title: 'Mongoļu laikmeta pārvietošanās — impērija kā tuvinājums',
      when: 'Ap 1206.–1294. g. m.ē. vienotajai impērijai; vēlākie hanāti turpināja pārvietot cilvēkus.',
      where: 'No mongoļu plato caur Ķīnu, Centrālāziju, Irānu un uz Austrumeiropu. Bēgļus, gūstekņus un speciālistus pārvietoja; pilsētas iztukšoja un dažkārt apdzīvoja no jauna.',
      why: 'Iekarošana, nodevas un stepes impērijas politika. Bēgšana armiju priekšā ir dokumentēts dzinējspēks. Tirdzniecība pax Mongolica laikā ir vēlāks slānis, ne pirmais cēlonis.',
      uncertainty:
        'Plate ir lielākais teritoriālais tvērums, ne karte par tiem, kas bēga. Mēri šeit neuzskatām par pierādītu mongoļu «dzinējspēku». Tvērums ir Eirāzija; globālu horopletu neizdomājam.',
      caption: 'Impērijas tvērums (Ali Zifan). Godīga sprauga: tvērums nav pārvietoto tautas skaitīšana.',
      imageAlt: 'Mongoļu impērijas karte tās lielākajā tvērumā 13. gadsimtā',
    },
    'atlantic-slave': {
      label: 'Atlantijas vergu tirdzniecība',
      title: 'Atlantijas vergu tirdzniecība — piespiedu migrācija',
      when: 'Ap 1500. līdz 1860. gadiem. Virsotnes gadsimti atšķiras pēc galamērķa; juridiskā atcelšana uzreiz neizbeidza visu piespiešanu.',
      where:
        'Rietumāfrika un Rietumcentrālā Āfrika uz Karībām, Brazīliju un Ziemeļameriku. Iekšāfrikas un Indijas okeāna tirdzniecība ir saistīta, bet nav visas šīs plates stāsts.',
      why: 'Eiropas koloniālais pieprasījums pēc plantāciju darba, Āfrikas politiskā vardarbība un piedāvājums, tirdzniecības sistēma, kas cilvēkus veda kā kravu. Tā ir piespiedu migrācija, ne «emigrācija».',
      uncertainty:
        'Skaitļi no reisu ierakstiem (SlaveVoyages / Eltis & Richardson). Karte ir mācību plate pēc šī atlanta — ne katra kuģa GPS un ne dzīvo pēcnācēju horoplets.',
      caption: 'Piespiedu Atlantijas maršruti pēc Atlas of the Transatlantic Slave Trade. Godīgs ietvars: paverdzināšana, ne brīva izvēle.',
      imageAlt: 'Āfrikas un transatlantisko vergu tirdzniecības maršrutu karte pēc Eltis un Richardson',
    },
    'european-emigration': {
      label: 'Masu emigrācija',
      title: '19. gadsimta masu emigrācija — viena skaidra kartīte',
      when: 'Masu Atlantijas migrācijas laikmets ir apmēram 1840–1914. Mināra plate ir tikai 1858. gads.',
      where: 'Eiropa uz Ameriku, ar citām plūsmām uz Austrāliju un tālāk. Britānija, Īrija un vācu zemes dominē daudzās 1858. gada plūsmās šajā lapā.',
      why: 'Lēta zeme un algas aiz okeāna, bads (Īrija), 1848. gada politiskie satricinājumi un transporta izmaksu kritums. Kolonizācija un pirmiedzīvotāju zemes atņemšana ir tās pašas kuģu pieņemšanas puses cena.',
      uncertainty:
        'Minārs zīmēja vienu gadu. Hatton & Williamson apraksta garāko 19. — 20. gs. sākuma vilni. Tā nav tautas skaitīšana par katru aizbraukušo eiropieti un ne 20. gadsimta bēgļu karte.',
      caption: '1858. gada plūsmu karte, publiskais īpašums. Viens gads, ne gadsimta režģis — un ne «kur visi bija».',
      imageAlt: 'Mināra 1862. gada plūsmu karte par pasaules emigrantiem 1858. gadā',
    },
  },
};
