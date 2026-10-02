import type { InnovationCopy } from '../data/innovations';
import { cite } from '../data/sources';

function card(
  fields: Omit<InnovationCopy, 'players' | 'sourcesNote' | 'shape'>,
): InnovationCopy {
  return { players: '', sourcesNote: '', shape: 'quad', ...fields };
}

const ccBySa25 = 'https://creativecommons.org/licenses/by-sa/2.5/';
const ccBySa30 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const ccBySa40 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const ccBy20 = 'https://creativecommons.org/licenses/by/2.0/';
const jelly = 'https://commons.wikimedia.org/wiki/File:Aequorea_victoria.jpg';
const quartz = 'https://commons.wikimedia.org/wiki/File:Quartz,_Tibet.jpg';
const atmosphere = 'https://commons.wikimedia.org/wiki/File:Top_of_Atmosphere.jpg';
const jet = 'https://commons.wikimedia.org/wiki/File:Joint_European_Torus_(6055833306).jpg';
const diiid = 'https://commons.wikimedia.org/wiki/File:2017_TOCAMAC_Fusion_Chamber_N0689.jpg';
const esmPaper = 'https://europepmc.org/article/MED/39818825';
const esmBlog = 'https://www.evolutionaryscale.ai/blog/esm3-release';
const esmCard = 'https://huggingface.co/biohub/esm3-sm-open-v1';
const nobel = 'https://www.nobelprize.org/prizes/chemistry/2008/press-release/';
const matterPaper = 'https://www.nature.com/articles/s41586-025-08628-5';
const matterBlog =
  'https://www.microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai/';
const matterCode = 'https://github.com/microsoft/mattergen';
const neuralPaper = 'https://www.nature.com/articles/s41586-024-07744-y';
const neuralBlog = 'https://research.google/blog/fast-accurate-climate-modeling-with-neuralgcm/';
const neuralCode = 'https://github.com/google-research/neuralgcm';
const toraxBlog = 'https://deepmind.google/blog/bringing-ai-to-the-next-generation-of-fusion-energy/';
const toraxNote =
  'https://deepmind.google/blog/accelerating-fusion-science-through-learned-plasma-control/';
const cfsAlliance =
  'https://blog.cfs.energy/with-ai-alliance-google-deepmind-and-cfs-take-fusion-to-the-next-level/';
const cfsPlasma =
  'https://blog.cfs.energy/why-cfs-is-confident-well-demonstrate-net-fusion-energy-q1/';
const toraxCode = 'https://github.com/google-deepmind/torax';
const tearingPaper = 'https://www.nature.com/articles/s41586-024-07024-9';

export const aiScienceLv: Record<string, InnovationCopy> = {
  'esm3-protein-model': card({
    title: 'Olbaltumvielu valodas modelis ESM3',
    hook: '2025. gada janvārī žurnāls Science publicēja rakstu par ESM3, uzņēmuma EvolutionaryScale mākslīgā intelekta modeli, kas «lasa» un «raksta» olbaltumvielas. Modelim lūdza izveidot spīdošu olbaltumvielu, un tas piedāvāja tādu, kas ar tuvāko dabisko radinieku sakrīt tikai 58 procentos pozīciju; autori šo atstarpi salīdzina ar aptuveni 500 miljoniem gadu evolūcijas.',
    imageAlt:
      'Ilustratīva krājuma fotogrāfija ar kristāla medūzu (Aequorea victoria), sugu, kurā pirmo reizi atrada zaļo fluorescējošo olbaltumvielu.',
    caption:
      'Ilustratīva krājuma fotogrāfija ar kristāla medūzu (Aequorea victoria), sugu, kurā pirmo reizi atrada zaļo fluorescējošo olbaltumvielu.',
    figureCredit:
      'Foto: Mnolf, caur Vikikrātuvi, licence Creative Commons Atsauce, tādi paši noteikumi 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Faila lapa: https://commons.wikimedia.org/wiki/File:Aequorea_victoria.jpg',
    licenseLabel: 'Creative Commons Atsauce, tādi paši noteikumi 3.0',
    licenseUrl: ccBySa30,
    what: 'Olbaltumvielas ir garas ķēdes, kas sastāv no aminoskābju «būvelementiem», un šo elementu secība nosaka olbaltumvielas formu un to, ko tā spēj darīt. ESM3 ir olbaltumvielu valodas modelis: tāpat kā teksta modelis mācās no vārdiem, tas mācās no miljardiem dabisko olbaltumvielu secībām, trīsdimensiju formām un zināmajām funkcijām. Tam var dot nepilnu olbaltumvielas aprakstu, piemēram, formas daļu vai vajadzīgo funkciju, un tas pabeidz pārējo. Uzņēmums EvolutionaryScale, kas darbojas kā sabiedriskā labuma sabiedrība, izveidoja modeli un pārbaudīja to uz fluorescējošām olbaltumvielām, kuru dēļ spīd medūzas un koraļļi. Atlasītie varianti tika izgatavoti laboratorijā, un viena spilgta olbaltumviela sakrita ar tuvāko zināmo fluorescējošo olbaltumvielu 58 procentos pozīciju. Mazāka modeļa versija ar 1,4 miljardiem parametru (tā sauc regulējamos skaitļus, ko modelis apgūst treniņa laikā) ir atklāti publicēta, un to var izmantot ikviens.',
    problem:
      'Fluorescējošās olbaltumvielas ir ikdienas laboratorijas rīki. Piestiprinot tās citai olbaltumvielai, pētnieki var redzēt, kur šī olbaltumviela pārvietojas dzīvā šūnā, un par to atklāšanu un attīstību 2008. gadā piešķīra Nobela prēmiju ķīmijā. Dabā tās sastopamas tikai dažos dzīvības koka zaros, un lielāko daļu zināmo variantu atrada, pētot dabu. Rīks, kas veido olbaltumvielas tālu no visām zināmajām, varētu paplašināt jaunu pētniecības rīku, zāļu un enzīmu meklēšanu, un tieši šādu mērķi EvolutionaryScale nosauc ESM3.',
    how: 'Secības identitāte 58 procenti nozīmē: ja jauno olbaltumvielu salīdzina ar tuvāko dabisko fluorescējošo olbaltumvielu, 58 pozīcijās no katrām 100 ķēdē atrodas viens un tas pats elements. No tuvākā radinieka jaunā olbaltumviela atšķiras 96 no savām 229 pozīcijām. Skaitlis 500 miljoni gadu ir autoru vērtējums: dabiskās fluorescējošās olbaltumvielas ar līdzīgu atšķirību šķir simtiem miljonu gadu evolūcijas, tāpēc šo atstarpi apraksta kā līdzvērtīgu šim laika posmam. Modelis secību uzrakstīja uzreiz, un laika posms ir veids, kā izteikt attālumu. Salīdzinājumam: agrākā meklēšana laboratorijā un ar mašīnmācīšanos sasniedza variantus, kas atšķiras līdz 20 procentiem pozīciju. Pēc EvolutionaryScale apraksta eksperiments bija neliels: pirmais cikls ar 96 variantiem un otrais cikls ar 96 variantiem, kas balstījās uz pirmā cikla labāko rezultātu.',
    risks:
      'Laboratorijas pārbaude aptver vienu olbaltumvielu saimi, fluorescējošās olbaltumvielas. Pirmajā ciklā tālākā no spīdošajām olbaltumvielām bija apmēram 50 reižu blāvāka par dabiskajām, un tās spīdošajam centram veidoties vajadzēja apmēram nedēļu, kamēr dabiskajām pietiek ar mazāk nekā diennakti; vairākus variantus ar dabiskajām tuvu spilgtumu deva tikai otrais cikls. Citi apraksta piemēri, piemēram, ieteiktais karkass enzīmam, kas noārda plastmasu, ir datorprojekti. Skaitlis 500 miljoni gadu ir vērtējums, kas balstīts uz to, cik ātri dabiskās fluorescējošās olbaltumvielas attālinās cita no citas. Atklātajam modelim ir 1,4 miljardi parametru, un lielāki saimes modeļi ir pieejami caur uzņēmuma tiešsaistes pakalpojumu.',
    sources: [
      cite(
        'Eiropas PubMed Central: 500 miljonu gadu evolūcijas simulēšana ar valodas modeli (Simulating 500 million years of evolution with a language model; Science, 16 January 2025)',
        esmPaper,
      ),
      cite(
        'EvolutionaryScale: ESM3, 500 miljonu gadu evolūcijas simulēšana ar valodas modeli, paziņojums ar 2025. gada janvāra papildinājumu (ESM3: Simulating 500 million years of evolution with a language model)',
        esmBlog,
      ),
      cite(
        'Hugging Face: atvērtais ESM3 modelis, modeļa kartīte (ESM3 open model, model card)',
        esmCard,
      ),
      cite(
        'Nobela prēmija: preses relīze, 2008. gada Nobela prēmija ķīmijā (Press release, The Nobel Prize in Chemistry 2008)',
        nobel,
      ),
      cite('Vikikrātuve: Aequorea victoria, foto (Aequorea victoria, photo)', jelly),
    ],
  }),
  mattergen: card({
    title: 'Materiālu projektēšana ar MatterGen',
    hook: '2025. gada 16. janvārī žurnāls Nature publicēja rakstu par MatterGen, uzņēmuma Microsoft mākslīgā intelekta modeli, kas piedāvā jaunus kristālus ar izvēlētu īpašību, veidojot tos no nulles. Vienu no piedāvātajiem materiāliem izgatavoja laboratorijā, un pretestība saspiešanai, kas novērtēta pēc laboratorijas testiem, bija 20 procentu robežās no mērķa 200 gigapaskāliem.',
    imageAlt:
      'Ilustratīva krājuma fotogrāfija ar dabiska kvarca kristālu druzu no Tibetas kā ikdienišķu kristāla piemēru.',
    caption:
      'Ilustratīva krājuma fotogrāfija ar dabiska kvarca kristālu druzu no Tibetas kā ikdienišķu kristāla piemēru.',
    figureCredit:
      'Foto: JJ Harrison, caur Vikikrātuvi, licence Creative Commons Atsauce, tādi paši noteikumi 2.5 (https://creativecommons.org/licenses/by-sa/2.5/). Faila lapa: https://commons.wikimedia.org/wiki/File:Quartz,_Tibet.jpg',
    licenseLabel: 'Creative Commons Atsauce, tādi paši noteikumi 2.5',
    licenseUrl: ccBySa25,
    what: 'No kristāliem ir atkarīgas daudzas tehnoloģijas: akumulatori, magnēti, katalizatori un materiāli, kas uztver oglekļa dioksīdu. Jauna kristāla ar noderīgu īpašību atrašana parasti nozīmēja zināmu materiālu pārbaudi cita pēc citas. MatterGen, ko izveidoja Microsoft Research, darbojas pretēji. Tas ir difūzijas modelis, tātad tā pati mākslīgā intelekta saime, ko izmanto attēlu ģeneratori: tas sāk ar nejaušu atomu izkārtojumu un soli pa solim pārveido to par kristālu. Tas mācījās no aptuveni 608 000 stabilu kristālu struktūru no divām atvērtām materiālu datubāzēm, Materials Project un Alexandria. Pēc papildu apmācības no tā var pieprasīt kristālu ar noteiktu ķīmisko sastāvu, simetriju vai īpašību, piemēram, ar noteiktu pretestību saspiešanai. Kods un apmācības dati ir publicēti atklāti.',
    problem:
      'Zināmo materiālu pārmeklēšana ļauj atrast tikai to, kas jau ir katalogos, un agri vai vēlu kandidāti beidzas. Microsoft Research blogā teikts, ka ģeneratīvais modelis turpināja atrast jaunus ļoti grūti saspiežamu materiālu kandidātus, kamēr meklēšana starp zināmajiem izsmēla sarakstu. Pēc Nature raksta datiem, salīdzinājumā ar agrākajiem ģeneratīvajiem modeļiem MatterGen kristāli vairāk nekā divreiz biežāk ir jauni un stabili, un to atomu izkārtojums ir vairāk nekā desmit reižu tuvāks tuvākajam stabilajam zemākās enerģijas stāvoklim, kas liecina par lielāku tuvumu stabilai formai.',
    how: 'Galveno skaitli dod laboratorijas pārbaude, jo aprēķinu rezultāti ir tikai prognozes. Pētnieki lūdza MatterGen piedāvāt materiālu, kas pretojas saspiešanai ar spēku 200 gigapaskāli (gigapaskāls ir spiediena mērvienība). Tūkstošiem datorprojektu atfiltrēja līdz 75, un izgatavošanai pētnieki izvēlējās četrus. Izdevās viens: tantala, hroma un skābekļa savienojums. Parauga pārbaude deva novērtējumu līdz 169 gigapaskāliem, kas ietilpst 20 procentu robežās no mērķa. Pārējie raksta rezultāti, piemēram, par stabilitāti, iegūti ar aprēķiniem, tāpēc šī laboratorijas pārbaude parāda, kā uzvedas īsts paraugs.',
    risks:
      'Izdevās izgatavot tikai vienu no četriem izvēlētajiem projektiem, un īstajā materiālā tantala un hroma atomi bija sajaukti nejauši, kamēr datorprojektā tie stāvēja sakārtoti. Novērtējums galvenokārt balstīts uz aprēķiniem, un autori raksta, ka praktiskam lietojumam vajag vairāk nekā šīs pārbaudes. Modelis arī biežāk nekā apmācības dati rada kristālus ar ļoti zemu simetriju, jo īpaši lielākus. Paši autori eksperimentu sauc par principa pierādījumu.',
    sources: [
      cite(
        'Nature: ģeneratīvs modelis neorganisko materiālu projektēšanai, 2025. gada 16. janvāris (A generative model for inorganic materials design)',
        matterPaper,
      ),
      cite(
        'Microsoft Research: MatterGen, jauns materiālu projektēšanas paņēmiens ar ģeneratīvo mākslīgo intelektu, 2025. gada 16. janvāris (MatterGen: A new paradigm of materials design with generative AI)',
        matterBlog,
      ),
      cite(
        'GitHub: microsoft/mattergen, kods un dati (microsoft/mattergen, code and data)',
        matterCode,
      ),
      cite('Vikikrātuve: Quartz, Tibet, foto (Quartz, Tibet, photo)', quartz),
    ],
  }),
  neuralgcm: card({
    title: 'Hibrīdais klimata modelis NeuralGCM',
    hook: '2024. gada 22. jūlijā žurnāls Nature publicēja rakstu par NeuralGCM, Google Research modeli, kas saglabā liela mēroga gaisa kustības fiziku, bet mākoņus un citus sīkus procesus apraksta ar neironu tīklu. Uz pagātnes 40 gadiem tā temperatūras kļūda bija 0,25 Celsija grādi pret 0,75 parastajiem tikai atmosfēras modeļiem, un tas rēķināja vairāk nekā 3500 reižu ātrāk nekā detalizēts fizikāls modelis.',
    imageAlt:
      'Ilustratīva krājuma fotogrāfija ar Zemes atmosfēru un Mēness sirpi, uzņemta no Starptautiskās kosmosa stacijas 2006. gadā.',
    caption:
      'Ilustratīva krājuma fotogrāfija ar Zemes atmosfēru un Mēness sirpi, uzņemta no Starptautiskās kosmosa stacijas 2006. gadā.',
    figureCredit:
      'Foto: Amerikas Savienoto Valstu Nacionālās aeronautikas un kosmosa pārvaldes Zemes observatorija (Starptautiskās kosmosa stacijas 13. ekspedīcijas apkalpe), caur Vikikrātuvi, publiskais domēns. Faila lapa: https://commons.wikimedia.org/wiki/File:Top_of_Atmosphere.jpg',
    licenseLabel: 'publiskais domēns',
    licenseUrl: atmosphere,
    what: 'Klimata modelis sadala atmosfēru šūnu režģī un aprēķina, kā starp tām pārvietojas gaiss, siltums un mitrums. Liela mēroga kustības pakļaujas labi zināmiem fizikas likumiem, bet mākoņi un lietus veidojas daudz sīkākā mērogā nekā šūna, tāpēc parastie modeļi šo robu aizpilda ar vienkāršotiem noteikumiem. NeuralGCM, ko izveidoja Google Research kopā ar Eiropas Vidēja termiņa laika prognožu centru, ir hibrīds. Tas saglabā fizikālo aprēķinu lielajām kustībām, bet vienkāršotos noteikumus aizstāj ar neironu tīklu, tas ir, datorprogrammu, kas atrod likumsakarības datos; tīklu apmācīja ar vairāku desmitgažu laika apstākļu ierakstiem. Tā kā aprēķins un tīkls tika apmācīti kopā kā viena sistēma, tas palīdz modelim palikt stabilam, strādājot daudzus gadus. Tā kods un apmācītie modeļi ir publicēti atklāti.',
    problem:
      'Klimata pētījumiem vajag daudz ilgu simulāciju, lai redzētu, kā atmosfēra varētu reaģēt uz pārmaiņām, un katrai detalizēta fizikāla modeļa simulācijai vajadzīgs superdators. Pēc Google Research datiem, atmosfēras gads ar NeuralGCM tika aprēķināts apmēram 8 minūtēs, bet ar ļoti detalizētu fizikālu modeli no Amerikas Savienoto Valstu Nacionālās okeānu un atmosfēras pārvaldes apmēram 20 diennaktīs, tātad NeuralGCM ir ātrāks vairāk nekā 3500 reižu. Tā kā tas strādā uz vienas mašīnas, vairāk pētnieku grupu varēs veikt savus eksperimentus. Nature rakstā arī ziņots, ka NeuralGCM ansambļa laika prognozes (prognožu kopas no mazliet atšķirīgiem sākuma apstākļiem) ir salīdzināmas ar paša Eiropas centra prognozēm uz laiku no 1 līdz 15 dienām.',
    how: 'Salīdzinājums 0,25 pret 0,75 Celsija grādiem ir pārbaude uz pagātnes. Modeli palaida 40 gadiem, no 1980. līdz 2020. gadam, dodot tam šo gadu īstās okeāna virsmas temperatūras, un gaisa temperatūru salīdzināja ar standarta pagājušo laika apstākļu ierakstu. Pēc Google Research datiem, vidējā kļūda bija 0,25 Celsija grādi NeuralGCM un 0,75 tikai atmosfēras modeļiem no starptautiska modeļu salīdzināšanas projekta, tātad jaunais modelis izrādījās apmēram trīsreiz tuvāks patiesībai. Vārdi «tikai atmosfēra» nozīmē, ka okeāns netiek rēķināts: tā temperatūras ievada no novērojumiem, un salīdzināmos modeļus lieto tāpat. Ātruma salīdzinājums attiecas uz vienu un to pašu uzdevumu, atmosfēras simulāciju gadam, ar iestatījumiem, ko pētnieki izvēlējās katram modelim.',
    risks:
      'NeuralGCM simulē tikai atmosfēru. Okeāni, jūras ledus un oglekļa aprite paliek ārpus modeļa, un Google Research cer tos pievienot vēlāk. 40 gadu pārbaudē 22 no 37 palaišanām visus 40 gadus palika stabilas, un rezultāti iegūti no šīm 22. Autori raksta, ka modelis neprot pārnest uz būtiski atšķirīgu nākotnes klimatu: kad okeāna virsmas temperatūru paaugstināja par 1 un 2 grādiem, tas parādīja dažas reālistiskas sasilšanas pazīmes, bet pie 4 grādiem tā atbilde atšķīrās no gaidītās un aprēķins novirzījās. Netiešā salīdzinājumā ar detalizēto fizikālo modeli tā nokrišņu kļūda (rēķināta kā lietus mīnus iztvaikošana) ir mazliet lielāka, un īsās prognozēs tas par zemu novērtē visekstrēmākos notikumus tropos. Autori arī norāda, ka viņu salīdzinājums ar detalizēto fizikālo modeli mazliet dod priekšroku NeuralGCM, jo to noskaņoja uz to pašu laika apstākļu ierakstu, pēc kura to vērtēja.',
    sources: [
      cite(
        'Nature: neironu vispārējās cirkulācijas modeļi laikapstākļiem un klimatam, 2024. gada 22. jūlijs (Neural general circulation models for weather and climate)',
        neuralPaper,
      ),
      cite(
        'Google Research: ātra un precīza klimata modelēšana ar NeuralGCM, 2024. gada 22. jūlijs (Fast, accurate climate modeling with NeuralGCM)',
        neuralBlog,
      ),
      cite(
        'GitHub: neuralgcm/neuralgcm, kods un informācija par modeli (neuralgcm/neuralgcm, code and model information)',
        neuralCode,
      ),
      cite('Vikikrātuve: Top of Atmosphere, foto (Top of Atmosphere, photo)', atmosphere),
    ],
  }),
  'torax-fusion-ai': card({
    title: 'TORAX: kodolsintēzes plazmas simulators',
    hook: '2024. gada maijā Google DeepMind izlaida TORAX, ātru atvērtā koda simulatoru karstajai gāzei kodolsintēzes iekārtā. 2025. gada 16. oktobrī DeepMind un Commonwealth Fusion Systems paziņoja par partnerību, lai kopā ar mākslīgo intelektu izmantotu to iekārtas SPARC darbības plānošanai.',
    imageAlt:
      'Ilustratīva krājuma fotogrāfija ar tokamaka Joint European Torus Anglijā iekšieni, kas ir cita iekārta nekā SPARC.',
    caption:
      'Ilustratīva krājuma fotogrāfija ar tokamaka Joint European Torus Anglijā iekšieni, kas ir cita iekārta nekā SPARC.',
    figureCredit:
      'Foto: Kevan, caur Vikikrātuvi, licence Creative Commons Atsauce 2.0 (https://creativecommons.org/licenses/by/2.0/). Faila lapa: https://commons.wikimedia.org/wiki/File:Joint_European_Torus_(6055833306).jpg',
    licenseLabel: 'Creative Commons Atsauce 2.0',
    licenseUrl: ccBy20,
    what: 'Kodolsintēzes enerģētika tiecas savienot vieglos atomus gāzē, kas sakarsēta virs 100 miljoniem Celsija grādu un ko sauc par plazmu; to magnētiskie lauki notur gredzenveida iekārtā, ko dēvē par tokamaku. Pirms šādas iekārtas darbināšanas inženieri ar datorsimulācijām prognozē, kā pa plazmu pārvietojas siltums, elektriskā strāva un daļiņas. TORAX ir plazmas kodola simulators, ko Google DeepMind 2024. gada maijā izlaida kā atvērtā koda programmu. Tas uzrakstīts tā, lai dators varētu aprēķināt, kā neliela jebkura iestatījuma maiņa ietekmēs rezultātu; tāpēc to var izmantot automātiskai labu iestatījumu meklēšanai un mākslīgā intelekta apmācībai. 2025. gada 16. oktobrī DeepMind un Commonwealth Fusion Systems, uzņēmums, kas Masačūsetsā būvē tokamaku SPARC, paziņoja par pētniecības partnerību. Pēc Google DeepMind teiktā, TORAX jau ir kļuvis par centrālo rīku Commonwealth Fusion Systems ikdienas simulāciju darbā pie SPARC.',
    problem:
      'Tokamakam ir daudz iestatījumu, piemēram, strāvas magnētos, degvielas padeve un sildīšanas jauda, un labāko kombināciju atrast ar roku ir lēni. DeepMind un Commonwealth Fusion Systems apraksta miljonus virtuālu eksperimentu TORAX pirms SPARC ieslēgšanas, lai komanda varētu sākt ar daudzsološiem plāniem. SPARC mērķis ir kļūt par pirmo magnētiskās kodolsintēzes iekārtu, kas iegūst no sintēzes vairāk enerģijas, nekā patērē tās uzturēšanai. Partneri pēta arī pastiprinājuma mācīšanos, tas ir, veidu, kā datorprogramma mācās ar mēģinājumiem un atlīdzību, lai pārvaldītu siltumu, ko SPARC izdalīs uz savām sienām. Tā kā TORAX ir atvērts, citas kodolsintēzes komandas var lietot to pašu rīku un to pārbaudīt.',
    how: 'Viss šis darbs attiecas uz plānošanu un simulāciju. Simulācija ir prognoze, un tās vērtība ir atkarīga no tā, cik cieši tā sakrīt ar īstu iekārtu. DeepMind norāda, ka darba gaitā pārbaudīs un kalibrēs TORAX pēc agrākiem tokamaku datiem un detalizētākām simulācijām. Partnerība ir pētniecības pasākums, un pati SPARC vēl nav ieguvusi plazmu: 2026. gada augusta beigās Commonwealth Fusion Systems rakstīja, ka cer SPARC darbību sākt tuvāko mēnešu laikā. Divus datumus viegli sajaukt: 2024. gada maijs ir simulatora izlaišana, bet 2025. gada 16. oktobris ir partnerības paziņojums.',
    risks:
      'TORAX apraksta plazmas kodolu. Tas aptver siltuma un daļiņu pārnesi un elektrisko strāvu, bet dažai fizikai izmanto vienkāršākus aizstājējmodeļus; paša projekta aprakstā teikts, ka viens no šādiem modeļiem aptver tikai ierobežotus apstākļus. Tas joprojām jāpārbauda ar eksperimentiem. SPARC vēl nav pierādījusi tīru kodolsintēzes enerģiju, kas ir tās mērķis. Darbs pie vadības ir agrīnā posmā: partneri raksta, ka sāk ar mācīšanos sadalīt siltumu uz iekārtas sienām, bet plašāku vadību reāllaikā Google DeepMind apraksta kā iespēju nākotnē. Agrāks DeepMind rezultāts no 2022. gada parādīja, ka pastiprinājuma mācīšanās spēj vadīt pētniecības tokamaka magnētus Šveicē, taču tā bija cita iekārta un cits uzdevums.',
    sources: [
      cite(
        'Google DeepMind: mākslīgā intelekta ieviešana nākamās paaudzes kodolsintēzes enerģētikā, 2025. gada 16. oktobris (Bringing AI to the next generation of fusion energy)',
        toraxBlog,
      ),
      cite(
        'Google DeepMind: kodolsintēzes zinātnes paātrināšana ar apgūtu plazmas vadību, ar piezīmi par TORAX izlaišanu 2024. gada maijā (Accelerating fusion science through learned plasma control)',
        toraxNote,
      ),
      cite(
        'Commonwealth Fusion Systems: aliansē mākslīgā intelekta jomā Google DeepMind un Commonwealth Fusion Systems ceļ kodolsintēzi nākamajā līmenī, 2025. gada 16. oktobris (With AI alliance, Google DeepMind and CFS take fusion to the next level)',
        cfsAlliance,
      ),
      cite(
        'Commonwealth Fusion Systems: kāpēc esam pārliecināti, ka pierādīsim tīru kodolsintēzes enerģiju, 2026. gada 28. augusts (Why CFS is confident we’ll demonstrate net fusion energy)',
        cfsPlasma,
      ),
      cite(
        'GitHub: google-deepmind/torax, kods un apraksts (google-deepmind/torax, code and description)',
        toraxCode,
      ),
      cite('Vikikrātuve: Joint European Torus, foto (Joint European Torus, photo)', jet),
    ],
  }),
  'diiid-tearing-ai': card({
    title: 'Mākslīgais intelekts pret tearing nestabilitāti DIII-D',
    hook: '2024. gada 21. februārī žurnāls Nature publicēja eksperimentu uz tokamaka DIII-D Kalifornijā, kurā uz mākslīgā intelekta balstīts vadības algoritms ar mēģinājumiem un atlīdzību iemācījās reāllaikā mainīt sildīšanu un plazmas formu, noturot prognozēto tearing risku, vienu no galvenajiem plazmas sabrukuma cēloņiem, zem izvēlētās robežas.',
    imageAlt:
      'Ilustratīva krājuma fotogrāfija ar darbinieku DIII-D vakuuma kamerā tehniskās apkopes laikā 2017. gadā. Attēls uzņemts vairākus gadus pirms šeit aprakstītā eksperimenta.',
    caption:
      'Ilustratīva krājuma fotogrāfija ar darbinieku DIII-D vakuuma kamerā tehniskās apkopes laikā 2017. gadā. Attēls uzņemts vairākus gadus pirms šeit aprakstītā eksperimenta.',
    figureCredit:
      'Foto: Rswilcox, caur Vikikrātuvi, licence Creative Commons Atsauce, tādi paši noteikumi 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Faila lapa: https://commons.wikimedia.org/wiki/File:2017_TOCAMAC_Fusion_Chamber_N0689.jpg',
    licenseLabel: 'Creative Commons Atsauce, tādi paši noteikumi 4.0',
    licenseUrl: ccBySa40,
    what: 'Tokamaks notur gredzenveida magnētiskajā laukā ārkārtīgi karstu gāzi, ko sauc par plazmu. Dažkārt magnētiskā lauka līnijas plazmā pārtrūkst un savienojas no jauna, veidojot gredzenveida pūslīšus, ko sauc par magnētiskajām salām. To dēvē par tearing nestabilitāti (angļu valodā «tearing» nozīmē «plīšana»), un tā ir galvenais plazmas sabrukumu cēlonis; šie pēkšņie sabrukumi pārtrauc eksperimentu un var sabojāt iekārtas sienas. Komanda no Prinstonas Universitātes un Nacionālā kodolsintēzes pētījumu centra DIII-D, Amerikas Savienoto Valstu Enerģētikas departamenta pētniecības objekta uzņēmuma General Atomics teritorijā Sandjego, apmācīja vadības algoritmu ar pastiprinājuma mācīšanos: programma mācās, izmēģinot darbības un saņemot atlīdzību. To apmācīja uz datormodeļa, kas 25 milisekundes uz priekšu paredz plazmas spiedienu un tearing riska novērtējumu no 0 līdz 1. Vadības algoritms iemācījās mainīt divus lielumus, sildīšanas jaudu ar neitrālajiem stariem un plazmas formu, lai spiediens paliktu augsts, kamēr prognozētais risks nepārsniedz izvēlēto robežu.',
    problem:
      'Uz tokamaka balstītai spēkstacijai vajag augstu plazmas spiedienu, lai ražotu enerģiju, un tai jāizvairās no plazmas sabrukumiem, kas var sabojāt sienas. Agrākās metodes galvenokārt mēģināja nomākt tearing pēc tā rašanās, un tas bieži notika par vēlu, tāpēc šeit mērķis bija no tā izvairīties jau no paša sākuma. Pēc Nature raksta datiem, vadības algoritms noturēja prognozēto risku zem robežas pat sarežģītos apstākļos, kādi plānoti Starptautiskajā eksperimentālajā kodolsintēzes reaktorā (ITER), lielajā starptautiskajā kodolsintēzes projektā, ko būvē Francijā, kur plazma griežas tikai lēni un tearing ir īpaši grūti novēršams. Vienā salīdzinošā palaišanā parasts vadības algoritms turēja noteiktu spiedienu, sākās liels tearing un plazma sabruka.',
    how: 'Tearing riska novērtējums ir apmācīta modeļa prognoze, no 0 (risks nav gaidāms) līdz 1 (augsts risks), 25 milisekundes uz priekšu. Vadības algoritmu apmācīja ar trim dažādām robežām: 0,2, 0,5 un 0,7. Jo zemāka robeža, jo piesardzīgāks algoritms. Ar 0,5 un 0,7 plazma noturējās līdz plānotā laika beigām; ar vispiesardzīgāko robežu 0,2 plazma sabruka aptuveni 5,5. sekundē. Piesardzīgais algoritms bija samazinājis sildīšanu līdz iepriekš noteiktai apakšējai robežai un nevarēja to samazināt tālāk, un šādas mijiedarbības tā apmācībā nebija. Tātad stingrāka robeža ne vienmēr bija labākā izvēle. Salīdziniet to ar parasto vadības algoritmu tajā pašā eksperimentā: tas turēja nemainīgu spiediena mērķi, pēc 2,6 sekundēm sākās liels tearing un plazma sabruka 0,5 sekundes vēlāk.',
    risks:
      'Autori darbu sauc par principa pierādījumu agrīnā noskaņošanas posmā. To pārbaudīja uz vienas iekārtas ar diviem vadāmajiem lielumiem (sildīšanas jauda un plazmas forma), bet pārējos lielumus, tostarp plazmas strāvu, turēja nemainīgus, lai apstākļi būtu tuvu ITER plānotajiem. Prognozēšanas modelis ir melnā kaste: tas var pateikt, ka tearing ir iespējams, bet nevar izskaidrot cēloni. Autori norāda, ka algoritmu vajadzēs pārbaudīt ar vairāk vadāmajiem lielumiem, piemēram, ar radioviļņu sildīšanu, ko ITER plāno izmantot, un ar ierobežotāku sensoru komplektu, kāds būs spēkstacijā. Vienā pārbaudē ar pievienotu radioviļņu sildīšanu plazma sabruka pēc neplānota plazmas strāvas zuduma, lai gan algoritms tika galā ar īsu riska lēcienu. Autori ziņo arī, ka plazmas formas izmaiņas bija lielas, un ar aprēķiniem pārbaudīja, ka ITER spoles tās var radīt.',
    sources: [
      cite(
        'Nature: fuzijas plazmas tearing nestabilitātes novēršana ar dziļo pastiprinājuma mācīšanos, 2024. gada 21. februāris (Avoiding fusion plasma tearing instability with deep reinforcement learning)',
        tearingPaper,
      ),
      cite(
        'Vikikrātuve: 2017 TOCAMAC Fusion Chamber N0689, DIII-D vakuuma kameras foto (2017 TOCAMAC Fusion Chamber N0689, photo of the DIII-D vacuum vessel)',
        diiid,
      ),
    ],
  }),
};
