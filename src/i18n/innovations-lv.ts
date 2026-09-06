import type { InnovationCopy } from '../data/innovations';

export const lv: Record<string, InnovationCopy> = {
  'climeworks-dac': {
    title: 'Tiešā gaisa uztveršana — Climeworks',
    hook: 'Ventilatori un filtri izvelk CO₂ no apkārtējā gaisa. Stacijas pastāv; tonnas joprojām ir mazas.',
    imageAlt:
      'Hellisheiði ģeotermālā elektrostacija Islandē, enerģijas ainava ap Climeworks DAC un Carbfix uzglabāšanu',
    what: 'Tiešā gaisa uztveršana (DAC) laiž āra gaisu caur ķīmiskiem filtriem, tad filtrus silda, lai atbrīvotu koncentrētu CO₂ plūsmu. Climeworks, Šveices uzņēmums, 2021. gadā Islandē uzcēla Orca un blakus — Mammoth. Mammoth sāka uztvert CO₂ 2024. gada maijā. Projektētā jauda ir līdz apmēram 36 000 tonnām gadā, kad visi kolektoru konteineri ir vietā — noapaļošanas kļūda pret globālajām emisijām, un pirmajos gados rādītāji bija krietni zem šī skaitļa.',
    problem:
      'Daļa CO₂ tiks emitēta arī pēc tam, kad nogriezīsim to, ko varam: cements, tālo reisu degviela, atlikusī enerģija. Oglekļa izvilkšana, kas jau ir gaisā, ir viens veids, kā samazināt krājumu, bet tikai tad, ja enerģija ir tīra un CO₂ paliek uzglabāts.',
    how: 'Kolektori izmanto cietos amīnu filtrus un zemas temperatūras siltumu — Islandē ģeotermālo tvaiku no ON Power. Atbrīvoto CO₂ Carbfix izšķīdina un ievada bazaltā, kur tas mineralizējas. Ķēde ir īsta. Robeža ir izmaksas, enerģija un tas, cik ātri var būvēt moduļus, neizliekoties, ka daži tūkstoši tonnu ir klimata mērogs.',
    players:
      'Climeworks (Šveice) vada Orca un Mammoth Islandē kopā ar ON Power un Carbfix. ASV Enerģētikas departaments ir finansējis arī krietni lielākus DAC «hub» konceptus (tostarp Project Cypress ar Climeworks, Battelle un Heirloom); tie ir plāni, ne darbojošās megatonnu stacijas.',
    risks:
      'DAC ir enerģijas izsalkusi. Ja siltums un elektrība ir fosili, neto izņemšana sarūk vai izzūd. Kredītus var pārdot ātrāk, nekā tonnas tiek uzglabātas. Mammoth pirmais gads parādīja, ka «online» nav tas pats, kas projektētā jauda. Tā ir izmēģinājumu nozare, ne aizstājējs emisiju samazināšanai.',
    sources:
      'Climeworks, “Climeworks switches on world’s largest DAC plant,” 8 May 2024 (Mammoth palaišana; 36 000 t/gadā projektētā jauda; sākumā 12 no 72 konteineriem). Orca palaišana 2021. IEA Direct Air Capture uzskaite. ThinkGeoEnergy materiāli par ģeotermāli darbināto vietu.',
  },
  'northern-lights-ccs': {
    title: 'Northern Lights — punktveida avotu CCS',
    hook: 'CO₂ no rūpnīcām, kuģots un ievadīts zem Ziemeļjūras. Pirmie rūpnieciskie apjomi pārvietoti 2025. gadā.',
    imageAlt:
      'Ziemeļjūras jūras platforma — tāda industriāla jūras telpa, kādu izmanto CO₂ transporta un uzglabāšanas projekti',
    what: 'Oglekļa uztveršana un uzglabāšana (CCS) ņem CO₂ no skursteņa vai procesa, ne no plāna gaisa, tad ved to uz krātuvi. Northern Lights ir Norvēģijas Longship projekta transporta un uzglabāšanas posms: kuģi, krasta terminālis Øygarden un ievadīšana sālsūdens rezervuārā zem Ziemeļjūras.',
    problem:
      'Cements, atkritumu sadedzināšana un daļa ūdeņraža vai gāzes pārstrādes emitē CO₂, ko pie avota ir grūti likvidēt. Punktveida avotu CCS ir viens veids, kā turēt šīs tonnas ārpus gaisa — ja uztveršanas īpatsvars ir augsts un krātuve tur.',
    how: 'Uztvertais CO₂ tiek sašķidrināts, kuģots, saņemts un cauruļvadā vests jūrā ievadīšanai. 1. fāze ir projektēta 1,5 miljoniem tonnu gadā. Northern Lights ziņoja par pirmajiem rūpnieciskajiem apjomiem, kas transportēti un uzglabāti 2025. gada augustā, tostarp CO₂ no Heidelberg Materials Brevik cementa rūpnīcas. 2. fāze paredzēta, lai vēlāk desmitgadē celtu jaudu pret apmēram 5 miljoniem tonnu — plāns, ne šodienas fakts.',
    players:
      'Equinor, Shell un TotalEnergies kopuzņēmums ar Norvēģijas valsts atbalstu Longship ietvaros. Agrīnais emitētājs: Heidelberg Materials Brevik. Citi Eiropas rūpnieciskie klienti ir līgumos vai sarunās.',
    risks:
      'Uztveršana rūpnīcā ir grūtais, dārgais solis; uzglabāšana noder tikai tad, ja uztveršana tiešām darbojas. Noplūde, enerģijas sods un CCS lietošana fosilās ieguves pagarināšanai ir īstas debates. Miljons tonnu ir nopietna inženierija un joprojām mazs pret nacionālajiem inventarizācijas sarakstiem.',
    sources:
      'Northern Lights JV projekta lapas; Norvēģijas valdības Longship brīfingi; 2025. gada darbības sākuma ziņojumi (pirmā uzglabātā rūpnieciskā CO₂, August 2025); Heidelberg Materials Brevik CCS.',
  },
  'carbfix-mineralization': {
    title: 'Carbfix — CO₂ pārvēršana akmenī',
    hook: 'Izšķīdini CO₂ ūdenī, ievadi bazaltā, un ķīmija gados izdara to, kam nogulumieži tērē tūkstošgades.',
    imageAlt: 'Stabu bazalts Svartifoss, Islande — iežu ķīmija, ko Carbfix lieto oglekļa mineralizācijai',
    what: 'Carbfix ir islandiešu metode: CO₂ izšķīdina ūdenī un ievada reaktīvā bazalta iezī, kur tas veido stabilus karbonātu minerālus. Laukā iegūtie rezultāti no Hellisheiði rādīja, ka liela daļa ievadītā oglekļa mineralizējas gadu, ne ģeoloģisko laikmetu skalā.',
    problem:
      'Uzglabāšana ir uztveršanas otra puse. Tvertne vai izsīcis lauks principā var noplūst. Mineralizācija mērķē ieslēgt oglekli iezī, lai krātuve būtu akmens, ne spiediena pūslis.',
    how: 'CO₂ izšķīdina pirms ievadīšanas vai tās laikā, kas arī pazemina brīvas CO₂ spalvas risku. Islandē ūdens un iezis ir pieejami blakus ģeotermālajām stacijām. Tāda pati ģeoloģija nav visur; citas bazalta provinces (piemēram, ASV ziemeļrietumos vai Indijā) tiek pētītas, ne nakts laikā nokopētas.',
    players:
      'Carbfix (Reykjavík Energy / ON Power līnija) Hellisheiði; uzglabāšanas partneris Climeworks Orca un Mammoth. Matter, Oelkers, Gíslason un kolēģu pētījumi dokumentēja agrīnās ievadīšanas.',
    risks:
      'Vajag daudz ūdens un īsto iezi. Mērogošana ārpus Islandes ir tikpat ģeoloģijas problēma kā inženierijas. Tā uzglabā oglekli, kas jau uztverts — pati no sevis CO₂ no debesīm neizvelk.',
    sources:
      'Matter et al., Science, 2016 (rapid mineralization at Hellisheiði); Carbfix tehniskās lapas; Climeworks–Carbfix partnerības piezīmes.',
  },
  'precision-fermentation': {
    title: 'Precīzā fermentācija',
    hook: 'Mikroorganismi, ne govis, ražo daļu olbaltumvielu, ko ēdam — ja cukurs, enerģija un garša iztur.',
    imageAlt: 'Nerūsējošā tērauda laboratorijas bioreaktori, ko lieto rūpnieciskajai fermentācijai',
    what: 'Precīzā fermentācija ieprogrammē raugus vai baktērijas izdalīt konkrētu olbaltumvielu — piena sūkalas bez govs vai pilnvērtīgu pārtikas olbaltumvielu, kas aug uz ūdeņraža un CO₂. Perfect Day dzīvnieku nesaturošās sūkalas ir komerciālos produktos. Solar Foods Solein ir ūdeņradi oksidējoša mikrobu olbaltumviela, kas dažās valstīs sasniegusi agrīnu tirgus atļauju, ne lielveikalu mērogu.',
    problem:
      'Liellopi un vistas ir efektīvi salīdzinājumā ar pagātni un joprojām zemes-, ūdens- un metāna ietilpīgi. Olbaltumviela, kam nav vajadzīgs tīrums vai ganāmpulks, varētu samazināt šo nospiedumu — vai kļūt par vēl vienu rūpniecisku pārtiku ar savu rēķinu.',
    how: 'Tvertnei dod cukuru (vai ūdeņradi un gaisu, Solein gadījumā), minerālus un skābekli. Mikroorganismi ražo mērķa molekulu; buljonu attīra. Klimata ieguvums atkarīgs no izejvielas un tīkla. Cukurs no izcirstas zemes stāstu atceļ. Tīra enerģija un atkritumu cukuri to tur godīgu.',
    players:
      'Perfect Day (ASV) piena olbaltumvielām; Solar Foods (Somija) Solein; daudzi citi jaunuzņēmumi hēmā, kazeīnā un taukos. Regulatori (FDA GRAS, jaunās pārtikas noteikumi ES un Singapūrā) izlemj, ko drīkst pārdot.',
    risks:
      'Izmaksas, patērētāju pieņemšana un slēptā zeme cukura piegādē. Tas nav bada risinājums un nav katras saimniecības aizstājējs. Tas ir veids, kā dažas augstas ietekmes sastāvdaļas izgatavot bez dzīvnieka.',
    sources:
      'Perfect Day produktu un GRAS materiāli; Solar Foods / Solein regulatīvie paziņojumi; FAO un Poore & Nemecek 2018 lopkopības zemes un emisiju kontekstam (kārtas lielums, ne produkta apgalvojums).',
  },
  'coral-restoration': {
    title: 'Koraļļu atjaunošanas tehnoloģija',
    hook: 'Audzētavas, kāpuru sēšana un rifu rāmji var ataudzēt koraļļus līcī. Tie vieni paši nevar apsteigt karstu okeānu.',
    imageAlt: 'Veselīgs zarains koraļļu dārzs dzidrā ūdenī — dzīvais mērķis atjaunošanas aparatūrai',
    what: 'Atjaunošanas komplekti mēģina likt koraļļus atpakaļ uz bojātiem rifiem: sauszemes fermas (Coral Vita), kāpuru sēšana un nosēšanās flīzes (SECORE) un modulāri rāmji, piemēram, Mars atbalstītā rifu atjaunošana («reef stars»). Fragmenti aug ātrāk nekā savvaļas rekrūts; kāpuri var pārsēt plašāku laukumu, ja ūdens vēl ir dzīvojams.',
    problem:
      'Sasilšana un paskābināšanās ir balējušas rifus masveida notikumos (tostarp 2023.–2024. gadā globāli). Vietējie bojājumi — spridzināšanas zveja, nogulsnes, tūrisms — pievienojas karstumam. Miris rifs zaudē zvejniecību, krasta aizsardzību un lielu daļu jūras sugu, kam vajag struktūru.',
    how: 'Ūdenslīdēji vai laivas izstāda fragmentus vai nosēdušos kāpurus uz stabila substrāta. Daži projekti atlasa karstumizturīgas kolonijas. Veiksmi mēra izdzīvošanā un gadu augšanā, ne preses fotogrāfijās. Metode ir īsta; mērogs ir vietējs.',
    players:
      'SECORE International; Mars Sustainable Solutions (MARRS) Indonēzijā un citur; Coral Vita (sauszemes audzēšana, Bahamas); valdību un NVO audzētavas Karību jūrā, Klusajā okeānā un Koraļļu trīsstūrī. NOAA un ICRI publicē metodes un robežas.',
    risks:
      'Izstādījumi iet bojā nākamajā karstuma vilnī, ja ūdens paliek pārāk silts. Atjaunošana nav licence turpināt emitēt. Ģenētika, slimības un brīvprātīgo izdegšana ir parasti neveiksmes veidi. Katru «mēs atjaunojām rifu» apgalvojumu uztver kā vietu, ne biomu.',
    sources:
      'NOAA Coral Reef Conservation Program; SECORE metodes; Mars MARRS projektu apraksti; IPCC AR6 ocean and cryosphere / WGII rifu atzinumi; 2023.–2024. gada globālās balēšanas atjauninājumi no NOAA Coral Reef Watch.',
  },
  'nano-water-membranes': {
    title: 'Nanomateriālu membrānas',
    hook: 'Atoma biezuma loksnes un pielāgotas poras sola lētāku atsāļošanu un tīrāku atdalīšanu — pārsvarā joprojām laboratorijā.',
    imageAlt: 'Grafēnam līdzīga loksne, divdimensiju materiālu klase, ko pēta ūdens un gāzes membrānām',
    what: 'Nanotehnoloģija šeit nozīmē membrānas, kuru poras vai virsmas ķīmija ir projektēta nanometru skalā: grafēna oksīda lamināti, oglekļa nanocauruļu poras, plāno kārtiņu kompozīti ar nanodaļiņu pildvielām. Cerība ir lielāka plūsma un labāka sāls vai piesārņotāju aizture nekā šodienas polimēru reversās osmozes loksnēm.',
    problem:
      'Atsāļošana un notekūdeņu atkārtota lietošana jau darbojas, un tās ēd enerģiju un aizaugšanas ķimikālijas. Labāka membrāna samazinātu jaudu un tīrīšanu. To pašu rīkkopu pēta CO₂ atdalīšanai un elektrolīzeru un degvielas elementu slāņiem.',
    how: 'Pētnieki krauj pārslas vai izaudzē poras tā, lai ūdens (vai mērķa gāze) iet cauri, bet sāļi — nē. Laboratorijas paraugi bieži izskatās izcili. Moduļi, kas Sarkanajā jūrā vai pašvaldības notekūdeņos kalpo gadiem, ir retāki. Komerciālo RO joprojām dominē poliamīda plēves, ne brīnummateriāli.',
    players:
      'Mančestras Universitātes grafēna darbs; NREL un nacionālo laboratoriju membrānu programmas; uzņēmumi, kas ražo plāno kārtiņu nanokompozītu RO (pieticīga, īsta produktu klase). «Grafēns atsāļos pasauli» virsrakstus uztver kā cerību, ne inventāru.',
    risks:
      'Kvadrātcentimetra plēves mērogošana līdz kvadrātkilometra stacijai, plus hlors, bioplēve un izmaksas. Nanomateriālu drošībai dzeramā ūdens saskarē vajag regulējumu, ne saukļus.',
    sources:
      'Pārskati Nature Nanotechnology un Science par graphene-oxide un CNT membrānām; NREL membrānu pētījumu lapas; tipiskā komerciālā RO joprojām ir poliamīds (standarta ūdensnozares teksti).',
  },
  'carbios-enzymes': {
    title: 'Plastmasu šķeļošie fermenti — Carbios',
    hook: 'Ferments var izārdīt PET atpakaļ līdz monomēriem. Pilna mēroga rūpnīca joprojām ir finansējuma un inženierijas problēma.',
    imageAlt: 'Savāktas PET pudeles, izejviela, ko enzimātiskie reciklētāji grib depolimerizēt',
    what: '2016. gadā Yoshida un kolēģi aprakstīja baktēriju Ideonella sakaiensis, kas izdala PETase un var augt uz PET. Inženierētie fermenti tagad depolimerizē pudeles un poliestera tekstilu krietni ātrāk. Carbios, Francijas uzņēmums, ir vadījis demonstrācijas iekārtas un mēģina finansēt pirmo rūpniecisko rūpnīcu Longlaville (ap 50 000 tonnām sagatavota PET gadā). Līdz 2026. gadam finanšu slēgums vēl nebija izdarīts; ražošana bija apspriesta ap 2028. gadu, ja nauda pienāktu.',
    problem:
      'PET mehāniskā reciklēšana zaudē kvalitāti. Lielākā daļa poliestera tekstila vispār netiek reciklēta. Īsts cirkulārs monomērs ļautu pudelēm un krekliem atkal kļūt par pudelēm un krekliem — ja savākšana, šķirošana un enerģija saskaitās.',
    how: 'Sasmalcinātu PET sajauc ar inženierētu hidrolāzi zem maiga siltuma. Polimērs krīt atpakaļ līdz tereftalskābei un etilēnglikolam, ko var attīrīt un atkal polimerizēt. Tā ir ķīmija ar olbaltumvielu katalizatoru, ne komposta kaudze un ne burvju mikrobs, kas palaists okeānā.',
    players:
      'Carbios (Francija) un partneri (tostarp Āzijas licencēšanas sarunas). Akadēmiskā PETase inženierija turpinās daudzās laboratorijās pēc Yoshida et al. 2016. Savākšanas sistēmas paliek pašvaldību un zīmolu — sašaurinājums tikpat bieži kā ferments.',
    risks:
      'Izejvielai jābūt samērā tīram PET. Jauktā plastmasa joprojām uzvar ar to, ka to ir lēti aprakt vai sadedzināt. Rūpnīcu kavējumi ir parasti pirmā šāda veida reciklēšanai. Nesajauc demonstrācijas reaktoru ar atrisinātu atkritumu krīzi.',
    sources:
      'Yoshida et al., Science, 2016 (Ideonella sakaiensis PETase); Carbios rūpnīcas un finansējuma paziņojumi (Longlaville jauda ~50 kt/gadā; 2026. gada finansējuma atjauninājumi; agrākā H1 2028 ražošanas runa).',
  },
  'methane-feed-additive': {
    title: 'Metānu samazinošā liellopu barība (Bovaer)',
    hook: 'Karote 3-NOP barībā var samazināt piena fermu metānu par aptuveni trīsdesmit procentiem. Tas ir rīks, ne vegāniska govs.',
    imageAlt: 'Holšteinas slaucamās govis, dzīvnieki, kuru spurekļa metānu mērķē 3-NOP piedevas',
    what: '3-nitrooksipropanols (3-NOP), ko dsm-firmenich pārdod kā Bovaer un Ziemeļamerikā licencē ar Elanco, kavē spurekļa fermentu metāna veidošanas pēdējā solī. Recenzētie izmēģinājumi un uzņēmumu dosjē atbalsta aptuveni 30 procentu kritumu enterālajā metānā laktējošām slaucamajām govīm marķētajās devās. ES to atļāva 2022. gadā. 2024. gada maijā ASV FDA pabeidza izskatīšanu un ļāva mārketingu izpildes rīcības brīvības ietvaros.',
    problem:
      'Liellopi ir liels metāna avots — īslaicīgas, bet spēcīgas siltumnīcefekta gāzes. Barības piedevas, selekcija un labāka veselība var samazināt šo plūsmu, kamēr ganāmpulki vēl pastāv. Tie neizdzēš zemes lietojumu vai distāpekļa oksīdu.',
    how: 'Piedevu sajauc pilnajā maisītajā barībā gramu uz govi dienā skalā. Tā jābaro katru dienu. Efekta lielums atkarīgs no diētas. Tā nav vakcīna un nav dzīvnieka ģenētiska pārrakstīšana.',
    players:
      'dsm-firmenich (izstrādātājs); Elanco (Ziemeļamerikas komercializācija); piena kooperatīvi, kas testē oglekļa ieskaites maksājumus. Citi metāna rīki (asparagopsis jūraszāles, 3-NOP konkurenti) ir paralēlos izmēģinājumos.',
    risks:
      'Izmaksas pret piena cenu; sabiedrības neuzticība; un kārdinājums 30 procentu griezumu saukt par «klimatneitrālu liellopu gaļu». Noplūde, ja ganāmpulki aug. Jūraszāļu piedevām ir savi broma un piegādes jautājumi — šī kartīte ir par 3-NOP, ne katru barības apgalvojumu.',
    sources:
      'ES 3-NOP atļauja (2022); Elanco / FDA CVM izskatīšanas pabeigšana, 28 May 2024 (~30% metāna samazinājuma apgalvojums uzņēmumu un dosjē materiālos); dsm-firmenich Bovaer zinātnes lapas; recenzētās 3-NOP metaanalīzes.',
  },
  'iter-fusion': {
    title: 'ITER — magnētiskās ieslodzīšanas kodolsintēze',
    hook: 'Pasaules lielākais tokamaks tiek būvēts Francijā. Tas ir fizikas eksperiments, ne elektrostacija.',
    imageAlt: 'ITER būvlaukuma skats no gaisa Cadarache, Francijā, 2018. gadā',
    what: 'ITER ir tokamaks, ko būvē Cadarache, Francijā, un finansē Ķīna, ES, Indija, Japāna, Koreja, Krievija un Amerikas Savienotās Valstis. Mašīna ir projektēta, lai ražotu degošu deitērija–trītija plazmu un pētītu, vai kodolsintēzes ieguvums krietni virs viena ir iespējams reaktoram atbilstošā mērogā. Tā nepārdos elektrību.',
    problem:
      'Fosīlie kurināmie joprojām dominē siltumā un enerģijā. Kodolsintēze sola blīvu, zema oglekļa enerģiju bez skaldīšanas veida ilgmūžīgās izlietotās degvielas — ja stacija var darboties, vairot trītiju un izturēt neitronu bojājumus. Nekas no tā nav demonstrēts tīklā.',
    how: 'Supravadošie magnēti ieslēdz karstu plazmu riņķī. Sildīšanas sistēmas to stumj pret temperatūrām, kur D–T kodolsintēze ir ticama. 2016. gada grafiks reiz mērķēja uz pirmo plazmu 2025. gadā; vēlākie bāzes plāni šo datumu nobīdīja pēc ražošanas defektiem, COVID un izmaksu kāpuma. Publiskie brīfingi 2020. gadu vidū rāda pirmo plazmu vēlāk 2030. gados un deitēriju–trītiju vēl vēlāk. Jebkuru rindu par «neierobežotu komerciālo kodolsintēzi šajā desmitgadē» uztver kā mārketingu.',
    players:
      'ITER Organization un septiņi locekļi. Privātie tokamaku un stellaratoru uzņēmumi (Commonwealth Fusion, Tokamak Energy un citi) skrien ātrākā, riskantākā pulkstenī; tie nav ITER un nav tīklā strādājoši energouzņēmumi.',
    risks:
      'Izmaksas, trītija piegāde, materiāli zem 14 MeV neitroniem un grafiks. Veiksme ITER joprojām atstātu projektējamu demonstrācijas elektrostaciju. Neveiksme neizbeigtu privātos eksperimentus, bet aizvērtu publisku ceļu.',
    sources:
      'ITER Organization BUJ un Padomes bāzes piezīmes; U.S. Congressional Research Service, ITER overview (grafika un izmaksu vēsture); IEA fusion uzskaite. Necitē first-plasma-2025 kā aktuālu.',
  },
  'nif-inertial-fusion': {
    title: 'NIF — inerciālās kodolsintēzes aizdedze',
    hook: '2022. gada 5. decembrī lāzera šāviens deva vairāk kodolsintēzes enerģijas, nekā nogādāja mērķim. Ēka joprojām ņem tīkla mēroga jaudu.',
    imageAlt: 'National Ignition Facility mērķa kamera Lawrence Livermore National Laboratory',
    what: 'National Ignition Facility Lawrence Livermore National Laboratory izšauj 192 lāzera starus uz sīku kapsulu. 2022. gada 5. decembrī kapsula deva ap 3,15 MJ kodolsintēzes enerģijas pēc tam, kad mērķi sasniedza ap 2,05 MJ — pirmā kontrolētā aizdedze, saukta arī par zinātnisko līdzsvaru uz mērķa. Vēlāki šāvieni to atkārtoja un dažkārt pārsniedza. NIF darbs ir kodolieroču krājuma uzraudzība un zinātne, ne turbīna.',
    problem:
      'Inerciālā kodolsintēzes enerģija (IFE) ir otrs ceļš blakus tokamakiem: daudzas sīkas implozijas sekundē, nevis pastāvīga magnētiskā pudele. Aizdedze parādīja, ka fizika var darboties. Elektrostacijai vajadzētu lētus mērķus, augstu atkārtošanās ātrumu un kontaktligzdas efektivitāti, kādas NIF nav.',
    how: 'Lāzeri hohlraum iekšienē pārvēršas rentgenstaros; kapsula implodē; deitērijs–trītijs saplūst sekundes daļā. Paši lāzeri no ligzdas ņem krietni vairāk enerģijas nekā 2 MJ, kas sasniedz mērķi. Šī sprauga ir iemesls, kāpēc tā nav elektrostacija.',
    players:
      'LLNL / NNSA (NIF). Privāti IFE uzņēmumi (piemēram, Focused Energy, Xcimer, Marvel Fusion un citi) mēģina efektīvākus lāzerus vai citus dzinējus. DOE pēc aizdedzes atsāka koordinētu IFE programmu.',
    risks:
      'Mērķa ieguvuma sajaukšana ar stacijas ieguvumu. Ieroču laboratorijas prioritātes. Mērķu ražošana elektrostacijas tempos nav atrisināta. Godīga runa saka: «aizdedze notika» un «komerciālā IFE — nē».',
    sources:
      'LLNL / DOE ignition announcement, 13 December 2022 (šāviens 5 December 2022; 2,05 MJ iekšā, 3,15 MJ ārā); turpmākie LLNL šāviena atjauninājumi; DOE IFE programmas piezīmes.',
  },
  'fervo-geothermal': {
    title: 'Uzlabotā ģeotermija — Fervo',
    hook: 'Horizontālie urbumi un hidrauliskās plaisāšanas paņēmieni, lietoti uz karsta ieža, ne naftas, 2023. gadā Nevadas štatā deva elektrību.',
    imageAlt:
      'Ģeotermālā stacija The Geysers, Kalifornijā — darbojošs tvaika lauks, kādu uzlabotā ģeotermija grib kopēt jaunā iezī',
    what: 'Uzlabotās ģeotermālās sistēmas (EGS) urbj karstā iezī, kam nav dabiska hidrotermālā rezervuāra, tad izveido plūsmas ceļu un laiž cauri ūdeni. Fervo Energy Project Red Nevadā 2023. gadā ražoja bezoglekļa elektrību un piegādāja Google datu centra līgumam. Cape Station Jūtā ir lielāks turpinājums būvniecībā, ar vēlākiem elektroenerģijas pirkuma darījumiem (tostarp 2026. gada Google PPA, kas mērķēts uz darbību desmitgades beigās).',
    problem:
      'Parastā ģeotermija ir reta: vajag siltumu, ūdeni un caurlaidību vienā vietā. Lielākā daļa Zemes siltuma ir sausā iezī. EGS mēģina atslēgt šo siltumu, negaidot geizeru.',
    how: 'Naftas lauka stila horizontālā urbšana un stimulācija atver urbumu pāri. Ūdens cirkulē, uzņem siltumu un virza bināro vai zibens staciju virszemē. Izraisītā seismicitāte jāuzrauga. Tā nav «brīvā enerģija»; tā ir siltuma ieguve ar tēraudu un sūkņiem.',
    players:
      'Fervo Energy (ASV); Google kā agrīnais pircējs; citi EGS un progresīvās ģeotermijas uzņēmumi (Eavor slēgtās cilpas, valdības FORGE vieta Jūtā). Tradicionālā hidrotermija joprojām piegādā lielāko daļu ģeotermālo megavatu pasaulē.',
    risks:
      'Urbšanas izmaksas, zemestrīces, ūdens lietojums un parastie pirmā šāda veida kavējumi. Veiksmīgs izmēģinājums nav teravats. Ģeoloģija atšķiras; Nevadas urbums nav globāla veidne.',
    sources:
      'Fervo / Google Project Red paziņojumi (2023. gada elektrība); Fervo Cape Station materiāli; 26 August 2026 Fervo–Google PPA atklāšana par Cape jaudu (mērķis — komerciāla darbība no 2028. gada — līgums, ne elektroni).',
  },
  'long-duration-storage': {
    title: 'Ilgstošās uzkrāšanas baterijas',
    hook: 'Litijs nosedz vakara pīķi. Vairāku dienu uzkrāšana ir neatrisinātais vēja un saules tīkla gabals.',
    imageAlt: 'Konteinerizēti tīkla bateriju moduļi ASV enerģijas uzkrāšanas projektā',
    what: 'Ilgstošā enerģijas uzkrāšana (LDES) nozīmē stundas līdz dienas, ne četru stundu litija pakas, kas jau pelna. Form Energy dzelzs–gaisa baterija ir projektēta ap 100 stundām un ir komunālo izmēģinājumos (tostarp Great River Energy projektā, kas mērķēts uz darbību desmitgades vidū). Vanādija un citas plūsmas baterijas jau ir komerciālās nišās; Pullman, Vašingtonā, Turner projekts ir viena agrīna plūsmas bateriju stacija.',
    problem:
      'Kad vējš krīt uz trim dienām, četru stundu baterija ir spilvens, ne mugurkauls. Gāzes pīķa stacijas šo spraugu šodien aizpilda. Lēta vairāku dienu uzkrāšana ļautu tīkliem celt atjaunojamo daļu, neizliekoties, ka laikapstākļi ir neobligāti.',
    how: 'Dzelzs–gaisa elementi «rūsē» dzelzi, lai uzkrātu enerģiju, un atīrūsē, lai izlādētu — bagātīgi materiāli, zems enerģijas blīvums, lieli pagalmi. Plūsmas baterijas tur šķidros elektrolītus tvertnēs, ko var palielināt. Abas maina apjomu un hektārus pret ilgumu. Neviena nav fizikas brīnums.',
    players:
      'Form Energy; plūsmas bateriju piegādātāji (UniEnergy / pēcteču ķīmijas, Invinity un citi); saspiestais gaiss un termiskā uzkrāšana kā nebateriju radinieki. IEA un DOE LDES programmas seko laukam.',
    risks:
      'Cikla zudumi, izvietošana un tas, vai ūdeņradis vai vairāk pārvades ir lētāki. Neskaiti izsludinātās gigarūpnīcas kā piegādātas MWh. Litijs paliek darba zirgs īsajam ilgumam.',
    sources:
      'Form Energy tehnoloģijas un komunālo izmēģinājumu lapas; UniEnergy Turner projekts (Commons foto no īstas 1 MW / 4 MWh plūsmas sistēmas); IEA Grid-Scale Storage un LDES Council pārskati.',
  },
  'green-hydrogen': {
    title: 'Zaļais ūdeņradis',
    hook: 'Noderīgs tēraudam, amonjakam un kuģiem. Izšķērdīgs kā noklusējuma veids māju apkurei vai automašīnu pārvietošanai.',
    imageAlt: 'Liela kriogēnā ūdeņraža uzglabāšanas tvertne — tāda rūpnieciskā ūdeņraža aparatūra, kādu jau lieto palaišanas vietās',
    what: '«Zaļais» ūdeņradis ir H₂ no ūdens elektrolīzes, ko dzen zema oglekļa elektrība. Molekula ir īsta un jau lietota naftas pārstrādē un mēslojumā no fosilajiem ceļiem («pelēkais» ūdeņradis). Zaļā etiķete ir par enerģijas avotu, ne jaunu fiziku.',
    problem:
      'Dažām nozarēm vajag molekulu, ne tikai elektronu: amonjaks, tieši reducētais dzelzs un dažas tālo reisu degvielas. Ūdeņradis var uzkrāt enerģiju pāri sezonām. Tas ir slikts veids, kā darīt darbu, ko elektrība var izdarīt tieši.',
    how: 'Elektrolīzeri šķeļ ūdeni. Saspiešana, sašķidrināšana vai pārvēršana amonjakā tad tērē vēl enerģiju. IEA un akadēmiskie pārskati parasti atrod lielus zudumus ceļā no atjaunojamās elektrības līdz ūdeņraža automašīnai vai katlam — bieži krietni virs puses sākotnējās enerģijas. Tāpēc siltumsūkņi un baterijas šajos lietojumos uzvar ar fiziku, ne modi.',
    players:
      'IEA Hydrogen uzskaite; elektrolīzeru ražotāji (Nel, ITM, Thyssenkrupp Nucera un citi); rūpnieciskie pircēji tēraudā un amonjakā. Daudzas «ūdeņraža ielejas» joprojām ir atkarīgas no grantiem.',
    risks:
      'Noplūde (ūdeņradis ir netieša siltumnīcefekta gāze), sajaukšanas haips gāzes tīklos un netīras elektrības lietošana «zaļas» degvielas ražošanai. Skaiti tonnas, kas ražotas no papildu atjaunojamiem, ne preses relīzes.',
    sources:
      'IEA Global Hydrogen Review; IEA “The Future of Hydrogen”; tipiskās well-to-wheel zudumu diskusijas Royal Society un ICCT ūdeņraža brīfingos.',
  },
  'smr-nuclear': {
    title: 'Modulārā un progresīvā kodolenerģija',
    hook: 'Ķīnas HTR-PM iegāja komerciālā darbībā 2023. gada decembrī. Lielākā daļa Rietumu SMR logotipu nav ielējuši pirmo betonu.',
    imageAlt: 'Darbojoša atomelektrostacija — konteksts modulārajai skaldīšanai, ne konkrēta SMR fotogrāfija',
    what: 'Mazie modulārie reaktori (SMR) un daži IV paaudzes projekti mērķē uz rūpnīcā būvētiem moduļiem un, dažos gadījumos, jauniem dzesētājiem. Ķīnas HTR-PM Shidaowan — divi 250 MWt oļu slāņa moduļi, kas baro vienu ~210 MWe turbīnu — pabeidza demonstrācijas skrējienu un iegāja komerciālā darbībā 2023. gada decembrī, pirmais komerciālā mēroga modulārais augsttemperatūras gāzes reaktors. ASV NuScale Carbon Free Power Project Aidaho tika atcelts 2023. gada novembrī pēc izmaksu kāpuma, kaut gan konstrukcijai bija NRC apstiprinājums.',
    problem:
      'Skaldīšana jau piegādā blīvu zema oglekļa enerģiju. Jaunās būves Rietumos ir bijušas lēnas un dārgas. Mazāki reaktori sola mazāku kapitāla risku — cerību, kurai jāizdzīvo pirmā šāda veida izmaksas, kas bieži iet pretējā virzienā.',
    how: 'HTR-PM lieto hēlija dzesētu oļu degvielu un ir projektēts, lai pārbaudītos apstākļos apstātos bez aktīvās avārijas zonas dzesēšanas. Vieglo ūdens SMR ir būtībā mazāki PWR. Nekas no tā nav «neierobežota enerģija». Tā ir kodolinženierija ar citu moduļa izmēru.',
    players:
      'China National Nuclear / Tsinghua INET (HTR-PM); NuScale, GE Hitachi BWRX-300, Rolls-Royce SMR un citi licencēšanā. Polārie un rūpnieciskā siltuma lietotāji ir klienti slaidu komplektos.',
    risks:
      'Atkritumi, proliferācija, izmaksu pārtēriņš un «modulārs» kā sauklis stacijai, kas joprojām ir liels būvdarbu projekts. Viens ķīniešu demonstrējums nerada globālu floti. Nesaiņo SMR kopā ar kodolsintēzi vai krāpšanas baterijām.',
    sources:
      'World Nuclear Association un Modern Power Systems par HTR-PM komerciālo darbību (December 2023); NuScale / UAMPS atcelšana, November 2023; IAEA SMR buklets; NRC NuScale konstrukcijas sertifikācija.',
  },
  'space-solar-power': {
    title: 'Kosmiskā saules enerģija',
    hook: '2023. gada Caltech demonstrējums no orbītas pārraidīja enerģijas pilīti. Fizika darbojas; ekonomika ir jautājums.',
    imageAlt: 'Starptautiskās kosmosa stacijas saules masīvi — tuvākais darbojošais radinieks ierosinātajiem enerģijas satelītiem',
    what: 'Kosmiskā saules enerģija (SBSP) orbītā vāktu saules gaismu un sūtītu enerģiju uz Zemi kā mikroviļņus vai lāzerus. 2023. gada janvārī Caltech MAPLE eksperiments SSPD-1 misijā parādīja bezvadu enerģijas pārraidi no orbītas uz Zemi — milivatus, ne megavatus. ESA SOLARIS pētījums un JAXA mikroviļņu darbs ir publiskās pētījumu līnijas. Tā nav elektrostacija.',
    problem:
      'Nakts un laikapstākļi ierobežo sauszemes sauli. Orbīta Sauli redz lielāku laika daļu. Āķis ir palaišanas masa, montāža, stara drošība un katra kilograma izmaksas.',
    how: 'Liels fotoelektriskais vai koncentratora masīvs baro fāzētā režģa raidītāju. Rektēna uz zemes pārvērš staru elektrībā. Efektivitāte un zeme rektēnai ir parasta inženierija; lēta, bieža smagā palaišana vēl nav parasta.',
    players:
      'Caltech Space Solar Power Project (MAPLE / SSPD-1, 2023); ESA SOLARIS; JAXA ilggadējie mikroviļņu demonstrējumi; daži jaunuzņēmumi. NASA un IEA SBSP uztver kā izpētes, ne 2030. gada ķīli.',
    risks:
      'Izmaksas uz vatu, orbitālie atkritumi, stara vadība un zinātniskās fantastikas slaidi. Veiksmīgs milivatu demonstrējums nav teravatu nozare. Turi šo kartīti blakus kodolsintēzei: nopietns pētījums, ne mājas ģenerators.',
    sources:
      'Caltech MAPLE / SSPD-1 January 2023 paziņojums; ESA SOLARIS lapas; JAXA bezvadu enerģijas pētījumu kopsavilkumi.',
  },
  'nano-electrolyzer-catalysts': {
    title: 'Nanostrukturētie elektrolīzeru katalizatori',
    hook: 'Zaļo ūdeņradi ierobežo irīdijs un enerģija. Nanotehnoloģija mēģina lietot mazāk metāla, ne izgudrot brīvu degvielu.',
    imageAlt: 'PEM degvielas elementa / elektrolīzera steks — aparatūra, kuras katalizatora slāņus nanotehnoloģija mēģina retināt',
    what: 'Protona apmaiņas membrānas elektrolīzeri lieto platīna grupas metālus, īpaši reto irīdiju skābekļa pusē. Laboratorijas (NREL un daudzas universitātes) audzē nanodaļiņas, serdes–čaumalas kristālus un nanostrukturētus balstus, lai katrs metāla atoms darītu vairāk darba. Dažas zema irīdija vai dārgmetālu nesaturošas receptes darbojas vārglāzēs; retām ir gadu rūpnieciskās stundas.',
    problem:
      'Ja elektrolīze tīrīs tēraudu un amonjaku, stekiem jākļūst lētākiem un mazāk atkarīgiem no sīkā irīdija pasaules. Tā ir materiālu problēma, ne mūžīgā dzinēja problēma.',
    how: 'Liels virsmas laukums un īstā kristāla skaldne ceļ aktivitāti. Izturība skābē un augstā strāvā ir parastā neveiksme. Membrāna (Nafion klases ionomēri) un porainie transporta slāņi ir pārējā sendviča daļa.',
    players:
      'NREL ūdeņraža un degvielas elementu materiālu grupas; rūpnieciskie steku ražotāji IEA elektrolīzeru lapās; akadēmiskās grupas, kas publicē Nature Energy un Joule.',
    risks:
      'Laboratorijas strāvas blīvums, kas mirst 100 stundās. Patentu migla. Katalizatora raksta sajaukšana ar gigavatu rūpnīcu.',
    sources:
      'NREL elektrolīzeru materiālu lapas; IEA Electrolysers uzskaite; Ir-thrift PEM katalizatoru pārskati Nature Energy / Chemical Reviews (lauks, ne viens brīnumraksts).',
  },
  'perpetual-motion': {
    title: 'Mūžīgais dzinējs — kāpēc tas neizdodas',
    hook: 'Slēgta mašīna nevar darboties mūžīgi vai ražot «brīvu bezgalīgu enerģiju». Tā nav sazvērestība. Tā ir termodinamika.',
    imageAlt: 'Vēsturisks ūdens skrūves mūžīgā dzinēja shēmas gravējums — slēgts cikls, kas nevar barot pats sevi',
    what: 'Pirmā veida mūžīgie dzinēji apgalvo, ka ražo enerģiju no nekā (tie pārkāpj enerģijas nezūdamību). Otrā veida mašīnas apgalvo, ka siltumu pilnībā pārvērš darbā bez cita efekta (tās pārkāpj otro likumu). Virsvienības ģeneratori, magnētu motori un tiešsaistē pārdotie «brīvās enerģijas» komplekti ir šī saime. Neviens nav izturējis kompetentu, neatkarīgi atkārtotu pārbaudi.',
    problem:
      'Vēlēšanās ir saprotama: blīva, tīra, neierobežota enerģija. Krāpšana ir pārdot riteni, magnētu vai slepenu ķēdi kā šo vēlēšanos. Katrs nopietnais ceļš — kodolsintēze, skaldīšana, ģeotermija, ilgstošā uzkrāšana, kosmiskā saule — joprojām pakļaujas tiem pašiem likumiem.',
    how: 'Berze, elektriskā pretestība un starojums apēd katru īsto ciklu. Magnēti bez maksas negrūž rotoru pa slēgtu cilpu; lauks ir konservatīvs. Slēpta baterija vai mērījuma kļūda ir parastais «pierādījums». Ja ierīcei vajag slēptu barošanas vadu, tā nav brīnums.',
    players:
      'Nav atzītas laboratorijas. Patentu iestādes jau sen noraida mūžīgā dzinēja pieteikumus bez darbojoša modeļa. Īstajiem bagātīgās enerģijas pētījumiem skati pārējās kartītes šajā Enerģijas sadaļā: ITER, NIF, uzlabotā ģeotermija, ilgstošā uzkrāšana, ūdeņradis (ar norādītiem zudumiem), modulārā kodolenerģija un kosmiskā saule.',
    risks:
      'Zaudēta nauda, zaudēts laiks un politikas troksnis, kas noslīcina darbu, kas tiešām pastāv. Fix Planet neuzskaitīs «brīvās enerģijas» izgudrotāju kā risinājumu.',
    sources:
      'Standarta termodinamika (pirmais un otrais likums); U.S. USPTO mūžīgā dzinēja prakse; IEA lapas par kodolsintēzi, ģeotermiju, uzkrāšanu, ūdeņradi un kodolenerģiju kā īsto pētījumu kopu.',
  },
  'graphcast-ai-weather': {
    title: 'MI laikapstākļu modeļi — GraphCast',
    hook: 'Grafu neironu tīkls tagad konkurē ar klasiskajām vidēja termiņa prognozēm — un joprojām vajag satelītus.',
    imageAlt: 'GOES-16 pilna diska Zemes attēls — novērojumi, uz kuriem MI laikapstākļu modeļi mācās un darbojas',
    what: 'GraphCast (Google DeepMind, Nature, 2023) ir mašīnmācīšanās modelis, kas prognozē globālos laikapstākļus apmēram desmit dienas uz priekšu no atmosfēras grafa, apmācīts uz ECMWF reanalīzes. FourCastNet (NVIDIA) un Pangu-Weather (Huawei) ir radinieki. Meteoroloģijas dienesti tagad tādus modeļus dzen blakus fizikas kodiem, ne to vietā.',
    problem:
      'Laikapstākļi un sezonālais risks dzen saimniecības, tīklus un katastrofu reaģēšanu. Ātrākas, lētākas prognozes palīdz — īpaši tur, kur superdatori ir reti. Klimata pārmaiņām joprojām vajag lēnā okeāna un ledus fizikas modeļus; 10 dienu ML prognoze nav 2100. gada projekcija.',
    how: 'Modelis mācās attēlojumus no pagātnes stāvokļiem uz nākotnes stāvokļiem. Tas «nesaprot» šķidrumu dinamiku; tas to tuvina. Prasmi mēra pret ECMWF analīzi, ne pret preses demonstrējumu. Kad apmācības pasaule pārbīdās, modelis var kļūdīties jaunā veidā.',
    players:
      'Google DeepMind; ECMWF (dati un salīdzinājums); NVIDIA FourCastNet; Huawei Pangu-Weather; nacionālie laikapstākļu dienesti, kas testē ML kodolus.',
    risks:
      'Pārlieka uzticība, vāji ekstrēmi un novērojumu sistēmas (satelīti, radiosondes) izlaišana, kas jebkuru modeli tur godīgu. MI laikapstākļi ir infrastruktūra, ne tērzēšanas robots.',
    sources:
      'Lam et al., Nature, 14 November 2023 (GraphCast); Pathak et al., FourCastNet (2022); Bi et al., Pangu-Weather (2023); ECMWF ML partnerības piezīmes.',
  },
  'gnome-materials': {
    title: 'GNoME — MI materiāliem',
    hook: 'Modelis ierosināja simtiem tūkstošu iespējami stabilu kristālu. Ķīmijai tie joprojām jāizgatavo.',
    imageAlt: 'Kvarca kristāls — tāda sakārtota cietviela, ko materiālu modeļi mēģina izpētīt ātrāk par mēģinājumu un kļūdu',
    what: 'GNoME (Graph Networks for Materials Exploration) no DeepMind ar Berkeley līdzautoriem lietoja grafu tīklus un esošās materiālu datubāzes, lai prognozētu ļoti lielu kopu potenciāli stabilu neorganisko kristālu (2023). Dažas prognozes vēlāk tika sintezētas. Tas ir meklēšanas rīks, ne gatava baterija.',
    problem:
      'Labākus katalizatorus, elektrodus un membrānas bremzē tas, cik lēni cilvēki mēģina receptes. Ja klimata tehnoloģijai vajag jaunas cietvielas, ātrāka sijāšana ir svarīga — pēc tam, kad mitrā laboratorija tās apstiprina.',
    how: 'Modelis vērtē stabilitāti un, ar citiem rīkiem, īpašības. Augstas caurlaidības aprēķins un robotu laboratorijas var pārbaudīt šķēli. Lielākā daļa prognozēto kristālu būs nederīgi, nestabili gaisā vai jau zināmi ar citu vārdu. Meklēšanai tas ir parasti.',
    players:
      'Google DeepMind; Lawrence Berkeley National Laboratory / Materials Project; citas pamatmodeļu materiālu grupas (Microsoft, Meta, akadēmiskās laboratorijas).',
    risks:
      'Rakstu skaita uzpūšana, «MI atklāja supravadītāju» virsraksti un toksicitātes un mērogošanas izlaišana. Paredzēts Li-jonu katods nav gigarūpnīca.',
    sources:
      'Merchant et al., Nature, 2023 (GNoME); Materials Project dokumentācija; Nature news komentāri par to, cik struktūru bija jaunas pret jau datubāzēs esošajām.',
  },
  'ai-grid-optimization': {
    title: 'MI elektrotīklam',
    hook: 'Labākas vēja prognozes un dispečeru rīki noskuj rezerves. Tie neaizstāj transformatorus.',
    imageAlt: 'Augstsprieguma pārvades masti — fiziskais tīkls, uz kura sēž optimizācijas programmatūra',
    what: 'Tīkla operatori jau lieto optimizāciju. Mašīnmācīšanās pievieno ātrākas vēja, saules un pieprasījuma prognozes un dažkārt ierosina dispečerēšanu. DeepMind 2017.–2019. gada darbs ar National Grid ESO Britānijā ziņoja par uzlabotu vēja prognozes prasmi šajā sistēmā — noderīgs pieaugums, ne jauns tīkls. Citi ISO izmēģina līdzīgus rīkus.',
    problem:
      'Mainīgajiem atjaunojamiem vajag labāku prognozi un ātrāku vadību, vai arī mēs dedzinām vairāk gāzes «tikai gadījumam». Pārslodze un invertoru stabilitāte ir atsevišķas, grūtākas problēmas.',
    how: 'Modeļi uzņem laikapstākļus un SCADA līdzīgas vēstures un izdod ciešāku prognozi vai ieteikto uzdoto vērtību. Cilvēki un esošās enerģijas vadības sistēmas paliek cilpā. Tīkla sabrukums nav pieņemams apmācības skrējiens.',
    players:
      'National Grid ESO / DeepMind sadarbība (publiska 2017.–2019.); dažādi ASV ISO/RTO izmēģinājumi; atjaunojamo prognožu piegādātāji. ENTSO-E un IEA digitalizācijas ziņojumi apseko lauku.',
    risks:
      'Kiberdrošība, slēpta novirze, kad laikapstākļi ir jauni, un piegādātāji, kas apgalvo «MI tīklu». Invertoru un aizsardzības fizika joprojām valda.',
    sources:
      'DeepMind blogs un National Grid piezīmes par vēja prognožu sadarbību (2017.–2019.); IEA “Digitalisation and Energy”; ENTSO-E pētījumu ziņojumi.',
  },
  'alphafold-proteins': {
    title: 'AlphaFold — olbaltumvielas zinātnei',
    hook: 'Struktūras prognozēšana 2021. gadā kļuva par darbojošu rīku. Klimata fermenta projektēšana ir nākamais, lēnākais solis.',
    imageAlt: 'Olbaltumvielas lentes diagramma uz tumša lauka — struktūru klase, ko šie modeļi prognozē',
    what: 'AlphaFold 2 (DeepMind, Nature, 2021) prognozēja vienas ķēdes olbaltumvielu struktūras noderīgā precizitātē; AlphaFold Database nodeva simtiem miljonu prognožu publiskās rokās. AlphaFold 3 (2024) pievienoja vairāk kompleksu un biomolekulu. ESMFold (Meta) un RoseTTAFold / RFdiffusion (Baker lab) sēž tajā pašā rīkkopā. Tā ir ieviesta zinātnes programmatūra, ne tērzēšanas robots.',
    problem:
      'Fermenti, kas ēd plastmasu, tīrāk fiksē slāpekli vai uztver oglekli, ir olbaltumvielu projektēšanas problēmas. Locījuma zināšana nav tas pats, kas stabils, lēts, netoksisks rūpnieciskais ferments — bet tā noņem gadiem garu sašaurinājumu.',
    how: 'Modelis mācījās no Protein Data Bank un evolūcijas pāriem. Laboratorijas joprojām ekspresē, attīra un testē. RFdiffusion un radniecīgi rīki ģenerē jaunas pamatķēdes; mitrās laboratorijas neveiksme paliek parasta.',
    players:
      'Google DeepMind un EMBL-EBI (AF Database); Meta ESM; University of Washington Institute for Protein Design (Baker); rūpnieciskā biotehnoloģija, kas rīkus lieto fermentiem un zālēm.',
    risks:
      'Bioloģiskā drošība (tie paši rīki var skicēt kaitīgas olbaltumvielas — laboratorijas un žurnāli tagad apspriež sijāšanu). Pārapgalvojums, ka prognozēta PETase ir reciklēšanas rūpnīca. Fermentiera enerģija un ūdens joprojām skaitās.',
    sources:
      'Jumper et al., Nature, 2021 (AlphaFold 2); AlphaFold Database (EMBL-EBI); Abramson et al., Nature, 2024 (AlphaFold 3); Lin et al., Science, 2023 (ESMFold); Watson et al., Nature, 2023 (RFdiffusion).',
  },
  'amp-recycling-robots': {
    title: 'Reciklēšanas roboti — AMP',
    hook: 'Kameras un rokas jau lasa kartona kastes un pudeles īstās šķirošanas līnijās. Tie neizdomā tirgu ķīpai.',
    imageAlt: 'Rūpnieciska robota roka šķiro PET pudeli uz reciklēšanas konveijera',
    what: 'Materiālu atgūšanas iekārtas (MRF) jau sen lieto virpuļstrāvas un optiskos šķirotājus. AMP Robotics un līdzīgi uzņēmumi pievieno datorredzi un robotu rokas, kas lasa konkrētus priekšmetus cilvēka vai labākā ātrumā. Sistēmas ir uzstādītas darbojošās rūpnīcās Amerikas Savienotajās Valstīs un citās valstīs — ieviesta aparatūra, ne koncepta video.',
    problem:
      'Cilvēki uz līnijām ir dārgi un tiek ievainoti; piesārņojums sabojā ķīpas; pilsētas grib augstākus reciklēšanas rādītājus. Robots, kas nekad neapnīkst, var celt tīrību. Tas nevar radīt pieprasījumu jauktajai plastmasas plēvei.',
    how: 'Kamera klasificē objektus uz lentes; sūkšanas vai satvērēja roka paceļ mērķi slīdē. Modelis tiek pārtrenēts, kad iepakojums mainās. Caurlaidību mēra satvērienos minūtē, ne «MI».',
    players:
      'AMP Robotics; konkurenti Eiropā un Āzijā; tradicionālie optisko šķirotāju uzņēmumi (TOMRA un citi), kas tagad sūta savu ML. Atkritumu uzņēmumi un pašvaldības ir pircēji.',
    risks:
      'Ja iepirkuma rūpnīca aizveras, robots šķiro poligonam paredzētā bunkurā. Eksporta aizliegumi un lēta primārā plastmasa joprojām nosaka ekonomiku. Tā ir šķirošana, ne alķīmija.',
    sources:
      'AMP Robotics uzstādīšanas gadījumu lapas; nozares materiāli par MRF robotu ieviešanu; EPA un ES reciklēšanas rādītāju statistika kontekstam (šķirošana ≠ reciklēšana).',
  },
  'quantum-computing': {
    title: 'Kvantu skaitļošana — ķīmijas cerības',
    hook: 'Publiskās mašīnas no IBM, Google un IonQ turpina pievienot kubitus. Tās vēl nav projektējušas klimata katalizatoru.',
    imageAlt: 'IBM Q System One klases kvantu dators, kabeļu lustra virs atšķaidīšanas ledusskapja',
    what: 'Kvantu datori lieto superpozīciju un sapīšanos, lai pētītu dažas problēmas, kas uz parastajiem čipiem sliktāk mērogojas — teorijā molekulu elektronu struktūra ir viena. IBM ir publicējis daudzu simtu līdz tūkstoš kubitu supravadošos procesorus (tostarp Condor 2023. gadā) un mazākus, augstākas kvalitātes Heron čipus. Google Willow procesors (2024) ziņoja par kļūdu labošanas progresu. IonQ lieto slazdotos jonus. Tas viss ir pētījumu aparatūra NISQ līdz agrīnajam kļūdu izturīgajam laikmetam.',
    problem:
      'Mēslojums, baterijas un oglekļa ķīmija atomā ir kvantu mehāniska. Ja kļūdu izturīga mašīna varētu simulēt katalizatoru, kas vēl nepastāv, tas būtu svarīgi. Mums šīs mašīnas nav.',
    how: 'Supravadošie kubiti sēž atšķaidīšanas ledusskapī. Joni sēž elektromagnētiskos slazdos. Kļūdu rādītāji joprojām ir augsti; noderīgai ķīmiskajai precizitātei vajag kļūdu labošanu un rūpīgu problēmas attēlošanu. Preses tūres «kvantu priekšrocība» uz mākslīga uzdevuma nav amonjaka reaktors.',
    players:
      'IBM, Google Quantum AI, IonQ, Quantinuum, akadēmiskās grupas. Ķīmijas partneri (Boeing, Mercedes, nacionālās laboratorijas) dzen izpētes algoritmus. Publiskie atskaites punkti ir īsti; produktu apgalvojumiem jābūt datētiem un šauriem.',
    risks:
      'Haipa cikli, eksporta kontroles un vadības steka enerģijas patēriņš. Neraksti zinātnisko fantastiku par tūlītējiem klimata modeļiem. Klasiskā augstas veiktspējas skaitļošana joprojām dara klimata darbu.',
    sources:
      'IBM kvantu procesoru paziņojumi (Condor 2023; Heron); Google Willow, December 2024; IonQ publiskās slazoto jonu ceļa kartes; kvantu ķīmijas algoritmu pārskati (NISQ robežas).',
  },
  'climate-trace': {
    title: 'Climate TRACE — emisiju redzēšana',
    hook: 'Satelīti un mašīnmācīšanās tagad aplēš daudzas izplūdes neatkarīgi no tā, ko ziņo ministrija.',
    imageAlt: 'Naftas pārstrādes rūpnīca krēslā — tāda rūpnieciska vieta, ko emisiju inventarizācijas mēģina mērīt no kosmosa',
    what: 'Climate TRACE ir koalīcija, kas publicē globālu siltumnīcefekta gāzu emisiju inventarizāciju, būvētu no satelītiem, citas tālizpētes un mašīnmācīšanās, ne tikai no pašziņotajām kopsummām. Radniecīgas publiskās sistēmas ir GHGSat (komerciālas metāna spalvas) un Carbon Mapper (sabiedriskā labuma metāns un CO₂). Jēga ir neatkarīga redzēšana, ne jauna krāsns.',
    problem:
      'Inventarizācijas nesakrīt. Metāna noplūdes no naftas, gāzes un ogļu bieži ir augstākas par ziņotajām. Nevar pārvaldīt to, ko atsakies mērīt.',
    how: 'Modeļi mācās elektrostacijas, nobarojamās fermas vai lāpas izskatu un aplēš aktivitāti un emisijas faktorus, tad to saplūdina ar atmosfēras izguvēm, kur tās pastāv. Katram skaitlim ir nenoteiktība. Spilgts pikselis ir pavediens, ne tiesas spriedums.',
    players:
      'Climate TRACE koalīcija (nevalstiskās organizācijas, uzņēmumi, universitātes); GHGSat; Carbon Mapper (tostarp NASA/JPL partnerības); IMEO (UNEP) metāna zinātne. Nacionālās inventarizācijas paliek juridiskā bāze.',
    risks:
      'Viltus spalvas, politiskā pretreakcija un paneļa uztveršana kā izpilde. Satelīti dažas nozares redz labāk nekā citas (piena fermas dīķis ≠ pilsēta ar divtaktu motocikliem).',
    sources:
      'Climate TRACE metodoloģija un inventarizācijas laidieni; GHGSat un Carbon Mapper publiskās piezīmes; UNEP IMEO metāna ziņojumi.',
  },
  'prithvi-earth-ai': {
    title: 'Prithvi — Zemes pamatmodeļi',
    hook: 'NASA un IBM apmācīja atvērtu modeli uz gadiem Harmonized Landsat–Sentinel attēlu. Tas ir sākuma svars, ne orākuls.',
    imageAlt: 'Apollo 17 Blue Marble — planēta, ko Zemes novērojumu pamatmodeļi ir būvēti lasīt',
    what: 'Prithvi ir NASA un IBM atvērto ģeotelpisko pamatmodeļu saime, pirmoreiz izlaista 2023. gadā, apmācīta uz Harmonized Landsat and Sentinel-2 (HLS) laika rindām. Precizējumi mērķē plūdu kartēšanu, deguma rētas un ražas rīkus. Radniecīgi «MI zinātnei» steki ietver NVIDIA Earth-2 (simulācija un emulācija) — cits produkts, arī ne kristāla bumba.',
    problem:
      'Zemes sistēmu darbs slīkst pikseļos. Kopīgs iepriekš apmācīts modelis var samazināt plūdu kartes izmaksas valstī, kurai trūkst lielas marķētas kopas — ja kāds karti joprojām pārbauda.',
    how: 'Transformeris vai līdzīgs mugurkauls mācās vispārīgas telpas–laika iezīmes no satelītu kubiem. Lejupējās galvas ir mazi marķēti uzdevumi. Tas neaizstāj GCM gadsimta skalas klimatam; tas palīdz ar novērojumu uzdevumiem.',
    players:
      'NASA (HLS, IMPACT); IBM Research; Hugging Face / GitHub svari; lietotāji katastrofu un lauksaimniecības aģentūrās. Earth-2 ir NVIDIA atsevišķā emulācijas līnija.',
    risks:
      'Novirze tur, kur apmācības satelīti nekad neskatījās, militārs dubultais lietojums un piegādātāji, kas precizējumu ietin kā «klimata modeli». Lasi modeļa karti.',
    sources:
      'NASA–IBM Prithvi laidums (2023) un modeļu kartes; HLS dokumentācija; NVIDIA Earth-2 produktu piezīmes (emulācija, ne tie paši svari).',
  },
};