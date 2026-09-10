import type { InnovationCopy } from '../data/innovations';

export const packLv: Record<string, InnovationCopy> = {
  'methane-feed-additive': {
    title: 'Bovaer fermās (3-NOP)',
    hook: 'Astoņpadsmit mēneši 162 Nīderlandes fermās — ap 20 000 govju — joprojām rāda metānu aptuveni par 30 procentiem zemāk, ar to pašu pienu un ganāmpulka ritmu.',
    imageAlt: 'Holšteinas piena govis, kuru spurekļa metānu mērķē 3-NOP piedevas',
    what: '3-nitrooksipropanols (3-NOP), ko dsm-firmenich pārdod kā Bovaer, bremzē spurekļa enzīmu pēdējā metāna veidošanas solī. ES to atļāva 2022. gadā; ASV FDA pārskatu beidza 2024. gada maijā. dsm-firmenich piezīme par Nīderlandes fermu datiem (162 fermas, ap 20 000 govju, 18 mēneši no 2022. gada jūlija, ar FrieslandCampina un Agrifirm) saka, ka fermas apstiprina 30% metāna griezumu bez trieciena pienam, veselībai vai auglībai. Šie 30% ir uzņēmuma un dosjē skaitlis, ne neatkarīga nacionālā piena emisiju inventarizācija.',
    problem:
      'Liellopi ir liels metāna avots — īslaicīgas, bet stipras siltumnīcas gāzes. Barības piedevas var nogriezt šo plūsmu, kamēr ganāmpulki vēl ir. Tās nenodzēš zemes lietojumu un slāpekļa oksīdu.',
    how: 'Piedevu maisa minerālu maisījumā vai pilnajā barības rācijā gramos uz govi dienā. Jābaro katru dienu. Efekta lielums atkarīgs no diētas. Tā nav vakcīna un nav dzīvnieka ģenētiska pārrakstīšana.',
    players:
      'dsm-firmenich; FrieslandCampina un Agrifirm Nīderlandes pārbaudē; Elanco Ziemeļamerikā. Uzņēmums raksta, ka 2026. gada piezīmes laikā Bovaer saņēma vairāk nekā 500 000 govju 25 valstīs. Citi metāna rīki (aļģe asparagopsis, 3-NOP konkurenti) iet paralēli.',
    risks:
      'Cena pret piena cenu; sabiedrības neuzticība; kārdinājums 30% griezumu saukt par «klimatneitrālu liellopu gaļu». Noplūde, ja ganāmpulki aug. Šī kartīte ir par 3-NOP lietošanu fermā, ne par katru barības apgalvojumu.',
    sourcesNote:
      'dsm-firmenich Nīderlandes fermu piezīme (20 000 govju / 18 mēneši); ES 2022/565; FDA 2024. gada maijs. Ap 30% ir dosjē skaitlis.',
  },
  'fervo-geothermal': {
    title: 'Cape Station — Fervo EGS',
    hook: 'Jūtas urbumi naftas stilā, mērķēti uz pirmajiem komerciālajiem ASV pastiprinātās ģeotermijas megavatiem — 2026. gada grafiks, vēl ne valsts šablons.',
    imageAlt:
      'The Geysers ģeotermālā stacija Kalifornijā — strādājošs tvaika lauks tādas klases, kādu pastiprinātā ģeotermija grib kopēt jaunā iezī',
    what: 'Pastiprinātās ģeotermālās sistēmas (EGS) urbj karstā iezī bez dabīga hidrotermāla rezervuāra, izveido plūsmas ceļu un dzen cauri ūdeni. Fervo Energy Project Red Nevādā 2023. gadā deva elektrību Google līgumam. Cape Station pie Milfordas Jūtā — blakus DOE FORGE laukumam — ir lielāks turpinājums. CNBC 2026. gada 5. septembra ziņa rakstīja, ka projekts gāja uz jaudas došanu tīklam nākamajā mēnesī un būtu pirmā komerciālā EGS stacija ASV. Tas ir pieteikts grafiks, ne atdota kilovatstunda, kamēr stacija īsti nestrādā.',
    problem:
      'Parastā ģeotermija ir reta: vajag siltumu, ūdeni un caurlaidību vienā vietā. Lielākā daļa Zemes siltuma ir sausā iezī. EGS mēģina to atvērt, negaidot geizeru. Datu centru pircēji grib stingrus, zema oglekļa megavatus.',
    how: 'Fervo urbj pāri urbumu dziļāk par divām jūdzēm, ar horizontāli vairāk par jūdzi, plēš granītu un dzen tehnisko ūdeni, kas uzkarsēts virs 400 °F, caur siltummaiņu. Sālījumu atdzesē un iepumpē atpakaļ minūtēs. Tā ir siltuma ieguve ar tēraudu un sūkņiem, ne «brīva enerģija».',
    players:
      'Fervo Energy; Google un citi ofteikeri (Southern California Edison, Shell Energy, NV Energy). CNBC rakstīja par ap 1 GW kontraktētas jaudas pēc Google PPA 2026. gadā un maija IPO. Lielāko daļu ģeotermālo megavatu pasaulē joprojām dod parastā hidroterma.',
    risks:
      'Urbšanas cena, izraisīta seismika, ūdens un pirmā savā veidā kavējumi. Jūtas grafiks nav teravats. Ģeoloģija atšķiras; urbums Nevādā vai Jūtā nav pasaules šablons.',
    sourcesNote:
      'CNBC par Cape Station (2026. g. 5. sept.) — pirmās komerciālās ASV EGS grafiks, ne apstiprināts datums tīklā. Project Red elektrība 2023. gadā ir agrāks fakts.',
  },
  'long-duration-storage': {
    title: 'Form Energy dzelzs–gaiss — Google / Xcel',
    hook: '300 MW / 30 GWh dzelzs–gaisa pieteikums Minesotai: izsludināts kā lielākā baterija gigavatstundās — joprojām plāns, ne rūsējošu šūnu pagalms.',
    imageAlt: 'Konteineru tīkla bateriju moduļi pie ASV enerģijas krātuves',
    what: 'Form Energy dzelzs–gaisa baterija ir projektēta ap 100 stundām. 2026. gada februārī Google un Xcel Energy teica, ka grasās būvēt Form piegādi 300 MW / 30 GWh Xcel Augšvidusrietumu tīklā paketē ar 1,4 GW vēja un 200 MW saules Minesotas datu centram. Xcel to nosauca par lielāko izsludināto bateriju projektu pēc ietilpības gigavatstundās. Form vadītājs Utility Dive teica, ka pirmos moduļus gaida līdz 2028. gada beigām. Tā ir vienošanās un plānots tarifa pieteikums, ne uzstādīti megavati.',
    problem:
      'Kad vējš krīt vairākas ziemas dienas, četru stundu litija paka ir spilvens, ne mugurkauls. Lēta daudzdienu krātuve ļautu tīkliem celt AER daļu, neizliekoties, ka laiks ir neobligāts.',
    how: 'Dzelzs–gaisa šūnas «rūsē» dzelzi, lai uzkrātu enerģiju, un «atrūsē» to izlādē — parasti materiāli, zema enerģijas blīvums, lieli pagalmi. Ne ķīmija, ne preses renderis nav fizikas brīnums. Litijs paliek īsā ilguma darba zirgs.',
    players:
      'Form Energy; Google; Xcel Energy. Radniecīgi Form projekti ir 10 MW / 1 GWh bloks Xcel Sherco laukumā un mazāks Great River Energy izmēģinājums. Atsevišķā Īrijas kartīte sedz pirmo izsludināto ārzemju 10 MW / 1 GWh projektu.',
    risks:
      'Cikla zudumi, vieta, regulatora izskatīšana un tas, vai lētāks ir ūdeņradis vai vairāk pārvades. Neskaiti izsludinātās 30 GWh par atdotām megavatstundām.',
    sourcesNote:
      'Utility Dive par Google–Xcel 300 MW / 30 GWh vienošanos (2026. g. febr.). Izsludinātā ietilpība nav atdotas MWh.',
  },
  'alphafold-proteins': {
    title: 'AlphaFold 3 lietošanā',
    hook: '2024. gada olbaltumvielu un to partneru modelis tagad ir ikdienas laboratorijas programmatūra — to lieto miljoniem pētnieku, tas nav gatavs klimata enzīms.',
    imageAlt: 'Olbaltumvielas lentes diagramma uz tumša lauka — struktūru klase, ko šie modeļi paredz',
    what: 'AlphaFold 2 (DeepMind, Nature, 2021) paredzēja vienas ķēdes locījumus ar derīgu precizitāti; atklātā AlphaFold datubāze deva simtiem miljonu struktūru. AlphaFold 3 un AlphaFold Server startēja 2024. gada 8. maijā, lai paredzētu olbaltumvielas kopā ar citām biomolekulām. DeepMind AlphaFold lapa raksta, ka līdz 2025. gada novembrim rīkus lietoja vairāk nekā 3 miljoni pētnieku vairāk nekā 190 valstīs. Hasabiss un Džampers par šo darbu saņēma 2024. gada Nobela prēmiju ķīmijā. Tā ir ieviesta zinātnes programmatūra, ne čatbots un ne rūpnīca.',
    problem:
      'Enzīmi, kas ēd plastmasu, tīrāk fiksē slāpekli vai ķer oglekli, ir olbaltumvielu dizaina uzdevumi. Zināt locījumu vai kompleksu nav tas pats, kas lēts, stabils rūpniecisks enzīms — bet tas noņem gadiem garu šaurumu.',
    how: 'Modelis mācījās no Protein Data Bank un radniecīgiem datiem. Laboratorijas joprojām ekspresē, tīra un pārbauda. Dizaina rīki zīmē jaunus karkasus; mitrās laboratorijas izgāšanās paliek parasta.',
    players:
      'Google DeepMind, Isomorphic Labs un EMBL-EBI; Meta ESM un Beikera laboratorija sēž tajā pašā rīku kastē; rūpnieciskā biotehnoloģija lieto steku enzīmiem un zālēm.',
    risks:
      'Biobdrošība (tie paši rīki var ieskicēt kaitīgas olbaltumvielas). Pārapgalvojums, ka paredzēta PETase jau ir pārstrādes rūpnīca. Fermentera enerģija un ūdens joprojām skaitās.',
    sourcesNote:
      'DeepMind AlphaFold lapa (AF3 / Server 2024. g. 8. maijs; 2025. g. novembra lietošanas skaitļi ir DeepMind). Paredzēts locījums nav rūpniecisks enzīms.',
  },
  'climate-trace': {
    title: 'Climate TRACE v5.10',
    hook: '2026. gada augusta inventarizācija lika pirmā pusgada globālās siltumnīcas gāzes par 0,2 procentiem virs 2025. — satelītu un modeļa novērtējums, ne tiesas spriedums.',
    imageAlt: 'Naftas pārstrādes rūpnīca krēslā — rūpniecisko vietu klase, ko emisiju inventarizācijas mēģina mērīt no kosmosa',
    what: 'Climate TRACE ir koalīcija, kas publicē globālu siltumnīcas gāzu inventarizāciju no satelītiem, sensoriem un mašīnmācīšanās, ne tikai no pašziņojumiem. Laidienā v5.10.0 (2026. g. 27. augusts) pievienoti 2026. gada jūnija mēneša dati un jauns tīra augsnes organiskā oglekļa apakšsektors. Iepriekšējais 2026. gada pirmā pusgada novērtējums ir 29,7 miljardi tonnu CO₂e, par 0,2% (56,4 miljoni tonnu) virs 2025. gada pirmā pusgada. Lielāko kāpumu deva autotransports; enerģētika un ražošana TRACE grāmatās nedaudz kritās. COP30 Brazīlijā (2025. g. novembris) koalīcija laidusi Solutions karti, kas rēķina, cik katrs uzskaitītais avots varētu nogriezt ar nobriedušām, komerciālām darbībām — kaimiņš šīs vietnes Solutions atkritumu plauktam un AMP kartītei, ne aizstājējs nevienam no tiem.',
    problem:
      'Inventarizācijas nesakrīt. Metāna noplūdes no naftas, gāzes un oglekļa bieži ir augstākas par ziņotajām. Nevar pārvaldīt to, ko atsakās mērīt.',
    how: 'Modeļi mācās spēkstacijas, feedlota vai lāpas izskatu un rēķina aktivitāti un emisiju faktorus, tad saplūdina ar atmosfēras retrīvaliem, kur tie ir. Katram skaitlim ir nenoteiktība. Spilgts pikselis ir pavediens, ne tiesas spriedums. Vēstures pārskatīšana ir gaidāma, kad maina metodes.',
    players:
      'Climate TRACE koalīcija (About lapā: laboratorijas, NVO un starp nosauktajiem Al Gors); radniecīgas atklātās sistēmas ir GHGSat un Carbon Mapper. Nacionālās inventarizācijas paliek juridiskā bāze.',
    risks:
      'Viltus spalvas, politisks prettrieciens un paneļa uzskatīšana par piespiedu izpildi. Satelīti dažus sektorus redz labāk nekā citus. v5.10 ir viens mēneša vintāža.',
    sourcesNote:
      'Climate TRACE v5.10 ziņa (2026. g. 27. aug.); About lapa par COP30 Solutions rīku (2025. g. nov.). Spilgts pikselis ir pavediens, ne tiesas spriedums.',
  },
  'deep-sky-alpha': {
    title: 'Deep Sky Alpha — DAC kredīti',
    hook: '2026. gada jūnijā Kanādas centrs izsniedza Ziemeļamerikas pirmos verificētos tiešās gaisa uztveršanas kredītus — 14 tonnas glabātuvē, ne megatonnu rūpnīca.',
    imageAlt:
      'Rūpnieciska oglekļa uztveršanas spēkstacija — šīs klases iekārtas, ne Deep Sky Alpha preses foto Albertā',
    what: 'Deep Sky Alpha Inisfailā, Albertā, ir vairāku piegādātāju tiešās gaisa uztveršanas testa centrs. Reuters 2026. gada 29. jūnijā rakstīja, ka Deep Sky bija pirmais Ziemeļamerikas uzņēmums, kas izsniedza verificētus DAC izņemšanas kredītus Microsoft un Royal Bank of Canada no oglekļa, kas maijā iepumpēts pazemē. Pirmā iepumpēšana bija 14 tonnas; Isometric verificēja kredītus. Albertas izmēģinājums ir paredzēts ap 3000 tonnām CO₂ gadā un būvēts tā, lai vairākas DAC firmas varētu stāvēt blakus. Deep Sky pašu lapa apraksta piecu akru laukumu industriālajā parkā. Climeworks Islandē paliek otra firma, kas tiešām ir laidusi DAC kredītus.',
    problem:
      'Daļa CO₂ paliks arī pēc tam, kad nogriezīsim, ko varam. Vilkt oglekli, kas jau ir gaisā, ir viens veids, kā samazināt krājumu — tikai ja enerģija ir tīra un CO₂ paliek glabātuvē. Kvalitatīvu izņemšanas kredītu ir maz; daudzi līgumi nav atdevuši tonnas.',
    how: 'Ventilatori un kontaktori dzen apkārtējo gaisu caur uztveršanu; CO₂ saspiež un ved ģeoloģiskai glabāšanai (Deep Sky glabā ziemeļos no Edmontonas, ne zem Inisfailas). Kredīts ir verificēta tonna, ne šildiņš.',
    players:
      'Deep Sky (Kanāda); agrīnie kredītu pircēji Microsoft un RBC; tālākos ofteiķos Reuters nosauca TD Bank, Lufthansa un ENGIE. Alpha laukumos var stāvēt vairāki DAC tehnoloģiju piegādātāji.',
    risks:
      'DAC ir enerģijas izsalkusi un dārga. Četrpadsmit tonnas un 3000 tonnu šildiņš ir noapaļošanas kļūda blakus nacionālajām inventarizācijām. Kredītus var pārdot ātrāk, nekā tonnas nonāk akmenī. Tas ir izmēģinājuma centrs, ne emisiju griešanas aizstājējs.',
    sourcesNote:
      'Reuters 2026. g. 29. jūn. (pirmā iepumpēšana 14 t; šildiņš ~3000 t/gadā; Microsoft un RBC). Šildiņš nav atdotas tonnas.',
  },
  'avnos-project-brighton': {
    title: 'Avnos Project Brighton — DAC + ūdens',
    hook: 'Ņūdžersijas hibrīdā DAC iekārta 2026. gadā sāka darbu: līdz 450 tonnām CO₂ gadā un solīts ūdens blakusprodukts — demo, ne klimata mērogs.',
    imageAlt:
      'Iekštelpu ūdens attīrīšanas tvertnes un caurules — ūdens saimniecības klase blakus Avnos hibrīdam DAC, ne Project Brighton preses foto',
    what: 'Avnos hibrīdā tiešā gaisa uztveršana (HDAC) ir domāta, lai ņemtu CO₂ no gaisa un dotu tīru ūdeni bez ārēja siltuma avota. Project Brighton Bridžvoterā, Ņūdžersijā, ir uzņēmuma lielākā strādājošā iekārta. 2026. gada 1. septembrī Avnos teica, ka Brighton ir sācis darbu: līdz 450 tonnām atmosfēras CO₂ gadā un ap 475 000 galonu tīra ūdens gadā, ar ASV Jūras spēku pētniecības biroja finansējumu, lai atbalstītu darbu pie DAC iegūta ilgtspējīga aviācijas degvielas. Tie ir projektēšanas skaitļi, ne gada uzskaitītas tonnas.',
    problem:
      'Parastais DAC ir izsalcis pēc siltuma un dažkārt pēc ūdens. Process, kas vēl dara ūdeni, nozīmētu sausās vietās — ja enerģijas rēķins un tīrais ogleklis sakrīt.',
    how: 'Avnos apraksta standartizētus HDAC moduļus, kas kondensē mitrumu, uztverot CO₂. Brighton stāv blakus uzņēmuma Technology Development Center, lai savāktu lauka datus pirms lielākiem moduļiem (nākamais nosauktais solis ir Project Cedar, ne šī kartīte).',
    players:
      'Avnos; ASV Jūras spēku pētniecības birojs (līgums N00014-23-C-1011 uz meitas IWVC). Flotes interese ir izejviela degvielas pētījumiem, ne pilsētas ūdensvads.',
    risks:
      'Četri simti piecdesmit tonnas ir demonstrācija. «Bez ārēja siltuma» joprojām vajag elektrību. Ūdens iznākums ir uzņēmuma skaitlis. Neuzskati Bridžvoteras laukumu par nacionālu izņemšanas ķīli.',
    sourcesNote:
      'Interesting Engineering par 450 t / 475 000 gal projektēšanu; Avnos 2026. g. 1. sept. darbības piezīme. Projektētā jauda nav gada uzskaitītas tonnas.',
  },
  'yara-sluiskil-ccs': {
    title: 'Yara Sluiskil CCS',
    hook: 'Eiropas lielākā rūpnieciskā uztveršanas zāle, atvērta 2026. gada septembrī: līdz 800 000 tonnām gadā no amonjaka, kuģiem uz Norvēģiju — avota CCS, ne gaisa izņemšana.',
    imageAlt:
      'Gentes–Ternēzenes kanāls Ternēzenē, rūpnieciskais ūdensceļš blakus Yara Sluiskil — ne 2026. gada uztveršanas zāles preses foto',
    what: 'Yara amonjaka un mēslojuma rūpnīca Sluiskilā Nīderlandē 2026. gada 7. septembrī atklāja uztveršanas un sašķidrināšanas iekārtu. Atklāšanas ziņās laukums ir projektēts uztvert līdz 800 000 tonnām procesa CO₂ gadā no amonjaka ražošanas un vest to uz Northern Lights glabāšanai zem Ziemeļjūras — Eiropas lielākā komerciālā CCS iekārta un agrīna pārrobežu uztveršanas–transporta–glabāšanas ķēde. 15 gados projektam jānogādā ap 12 miljoniem tonnu, ja tas strādā kā projektēts. Tā ir avota CCS: tā nelaiž rūpniecisko CO₂ gaisā. Tā neizvelk CO₂, kas jau samaisīts atmosfērā, un tā nav brīvprātīgu izņemšanas kredītu rūpnīca. Naudas jēga ir izvairīties no ES ETS kvotām.',
    problem:
      'Amonjaks mēslojumam joprojām dara procesa CO₂, ko viena elektrība nenodzēš. Cementam un sadedzināšanai ir tā pati atlikušo tonnu klase. Uztveršana der tikai tad, ja kuģis un glabātuve arī strādā.',
    how: 'CO₂ uztver no amonjaka procesa, saspiež un sašķidrina Sluiskilā, tad iekrauj Northern Lights kuģos (ap 7200 tonnām katrs; līdz diviem piekrautiem kuģiem nedēļā agrākajās Yara shēmās) uz Eigardenu un iepumpēšanu ap 2600 metriem zem Norvēģijas šelfa. Northern Lights 1. kārta ir 1,5 miljoni tonnu glabāšanas gadā.',
    players:
      'Yara International; Northern Lights (Equinor, Shell, TotalEnergies) un Norvēģijas Longship. Kaimiņu kartīte: Northern Lights transports un glabāšana. Yara 2026. gada kapitāla dienas skaitļi liek tīro ieguldījumu ap 200 miljoniem dolāru.',
    risks:
      'Uztveršanas koeficientam, kuģošanai un glabāšanai jāstrādā kopā. CCS lietošana, lai stieptu fosilo amonjaku, ir īsta debates. 800 000 tonnas ir nopietna inženierija un joprojām maz blakus ES rūpniecībai. Neieraksti šo tonnu kā DAC kredītu.',
    sourcesNote:
      'CarbonCredits atklāšanas piezīme (2026. g. sept.): līdz 800 000 t/gadā, atklāšana 7. septembrī, Northern Lights kuģi. Projektētā jauda nav gada noglabātas tonnas.',
  },
  'samsara-eco': {
    title: 'Samsara Eco — enzīmu pārstrāde',
    hook: 'Austrālijas pirmā enzīmu pārstrādes rūpnīca ir atvērta Jaundienvidvelsā. Bezgalīgām cilpām joprojām vajag vākšanu, noietu un otru, lielāku rūpnīcu.',
    imageAlt: 'Saspiedušu PET pudeļu ķīpas — poliestera izejviela, ko enzīmu pārstrādātāji grib atpogāt',
    what: 'Samsara Eco atvēra pirmo enzīmu pārstrādes rūpnīcu Džerabomberā, Jaundienvidvelsā. Uzņēmuma EosEco process ar projektētiem enzīmiem sadala plastmasas atpakaļ monomēros, lai tās varētu pārtaisīt par pirmreizējam identisku neilona 6,6 un poliesteru. PKN Packaging News raksta par četriem gadiem no galda līdz šai pirmajai rūpnīcai, plānu 20 000 tonnu komerciālai neilona rūpnīcai Āzijā līdz 2028. gadam un vairāk nekā 150 miljoniem AUD piesaistītiem. 2024. gadā uzņēmums ar lululemon taisīja apģērbu, ko sauc par pirmo enzīmiski pārstrādāto neilona 6,6 izstrādājumu. Tas ir cits uzņēmums un plašāks izejvielas apgalvojums nekā Carbios PET darbs Francijā — ne otra vārds tai pašai rūpnīcai.',
    problem:
      'Pasaule pārstrādā tikai ap 10% plastmasu, un krāsainie, daudzslāņu un jauktie iepakojumi ir grūtais atlikums. Mehāniskā pārstrāde zaudē kvalitāti. Īsta monomēru cilpa palīdzētu — ja vākšana un enerģija sakrīt.',
    how: 'Enzīmi depolimerizē mērķa plastmasas maigos apstākļos. Uzņēmums saka, ka process ir būvēts grūtiem plūsmām, tostarp daudzslāņu iepakojumam, un ka iznākums ieiet esošajās polimēru ķēdēs. Tā ir ķīmija ar olbaltumvielu katalizatoru, ne mikrobs, kas palaists okeānā.',
    players:
      'Samsara Eco (Austrālija; ANU līnija, starp agrīnajiem atbalstītājiem Main Sequence un Woolworths); zīmolu partneri, tostarp lululemon; Deakin University pārstrādes centrs un The LYCRA Company vietējā R&D. Pašvaldības vākšana paliek cilpas otra puse.',
    risks:
      'Pirmā rūpnīca nav atrisināta atkritumu krīze. Jaukto plastmasu joprojām lētāk aprakt vai sadedzināt. 20 000 tonnu Āzijas rūpnīca ir plāns 2028. gadam. Nesajauc Džerabomberas atklāšanu ar cirkulāru iepakojumu lielveikala mērogā.',
    sourcesNote:
      'PKN Packaging News par Džerabomberas atklāšanu un 20 000 t plānu Āzijā. Pirmā rūpnīca nav lielveikala mēroga cirkularitāte.',
  },
  'quaise-mmwave-drilling': {
    title: 'Quaise — milimetru viļņu urbšana',
    hook: 'Girotrons Centrālajā Teksasā 2025. gadā urba 100 metrus granīta — metodes lauka rekords un joprojām tālu no spēkstacijas.',
    imageAlt:
      'Sauszemes urbšanas iekārta uz sarkanas zemes — virszemes komplekts ap dziļiem caurumiem, ne Quaise Teksasas girotrona foto',
    what: 'Quaise Energy mēģina sasniegt pārkarsētu iezi (ap 400 °C) ar milimetru viļņu enerģiju no girotrona, iztvaicējot granītu bez urbja urbuma dibenā. Energy Global rakstīja, ka 2025. gadā uzņēmums urba 100 metrus lauka laukumā Centrālajā Teksasā — rekords milimetru viļņu urbšanai. Pirms 2025. gada MIT līnijas sistēma laboratorijā taisīja tikai centimetru caurumus. Simts metri ir daļa no dziļuma, kāds vajadzīgs komerciālai pārkarsētai stacijai. Quaise sola jaudīgāku girotronu un skicē Rietumu ASV izmēģinājuma staciju jau 2028. gadā.',
    problem:
      'Parastie urbi slikti dzīvo cietā, karstā pamatiezī. Ja to nevar lēti urbt, pārkarsētā ģeotermija paliek neizmantota siltuma karte.',
    how: 'Virszemes girotrons sūta milimetru viļņus urbumā; iezis iztvaiko. Quaise stāstā dibenā nav dzelzs. Ātrums, cauruma kvalitāte un vadība kilometru dziļumā ir neatrisināta inženierija.',
    players:
      'Quaise Energy; MIT milimetru viļņu pētījumu līnija. Tā nav Fervo naftas stila EGS un nav energouzņēmums.',
    risks:
      'Simts metru granīta urbums nav turbīna. Cena, uzticamība un 2028. gada slīdēšana ir parasti pirmā savā veidā riski. Slaidus «ģeotermija jebkur» lasi kā pētījuma mērķi.',
    sourcesNote:
      'Energy Global 2025. g. 24. jūl.: 100 m Teksasas lauka urbums; laboratorijā bija centimetri. Metodes rekords nav spēkstacija.',
  },
  'cfs-sparc': {
    title: 'CFS SPARC — tokamaks ar Q>1',
    hook: 'Kompakts tokamaks Masačūsetsā ir samontēts ap 80%. Q>1 ir 2027. gada mērķis — fizikas slieksnis, ne spēkstacija.',
    imageAlt:
      'ITER klases tokamaka maketa griezums — mašīnu saime, kurai pieder SPARC, ne Devensas zāles foto',
    what: 'Commonwealth Fusion Systems montē SPARC, augsta lauka tokamaku Devensā, Masačūsetsā, lai parādītu tīro kodolsintēzes enerģiju (Q>1: sintēzes jauda lielāka par plazmas sildīšanas jaudu). CFS 2026. gada augusta piezīme teica, ka SPARC ir gandrīz 80% gatavs, magnēti iet iekšā, palīgsistēmas jau strādā. Uzņēmuma SPARC lapa joprojām mērķē Q>1 2027. gadā. SPARC nepārdos elektrību. Nākamā stacija ARC ir tīkla projekts; CFS DOE recenzentiem teikusi par ap 400 MW neto elektrības 2030. gadu sākumā. Tie ir uzņēmuma mērķi.',
    problem:
      'Sintēze sola blīvu, zema oglekļa siltumu, ja stacija var strādāt, vairot tritiju un dzīvot zem neitroniem. Ne privāts, ne publisks tokamaks vēl nav licis komerciālu jaudu tīklā.',
    how: 'Augstas temperatūras supravadītāju magnēti dara mazāku tokamaku nekā ITER. Q>1 ir plazmas ieguvums, ne rozetes stacijas lietderība: magnēti, krioģenika un turbīna ir atsevišķi. Jaukt SPARC ar energouzņēmumu ir parasta kļūda.',
    players:
      'CFS; DOE Milestone-Based Fusion Development programma; MIT līnija. Kaimiņu kartītes: ITER (publiskā zinātne) un NIF (inerciālā aizdedze). Privātā sintēze nav ITER un nav strādājošs energouzņēmums.',
    risks:
      'Grafiks, tritijs, materiāli un cena. Apgalvojums par 80% montāžu nav pirmā plazma. Q>1 2027. gadā ir mērķis. Pat veiksme atstās būvēt ARC.',
    sourcesNote:
      'CFS SPARC gaitas blogs (~80% samontēts) un SPARC lapa (Q>1 mērķis 2027). Plazmas ieguvums nav spēkstacija.',
  },
  'form-energy-ireland': {
    title: 'Form Energy Īrija — dzelzs–gaiss',
    hook: '10 MW / 1 GWh dzelzs–gaisa projekts Īrijas ziemeļrietumos, saskaņots 2026. gadā, mērķēts uz 2029. — pirmais Form pagalms, kas izsludināts ārpus Amerikas Savienotajām Valstīm.',
    imageAlt:
      'Konteineru bateriju skapji pie tīkla krātuves — garā ilguma krātuves pagalma klase, ne Donegolas laukuma foto',
    what: '2026. gada 17. martā Form Energy un FuturEnergy Ireland paziņoja vienošanos izvietot 10 MW / 1000 MWh (1 GWh) dzelzs–gaisa sistēmu Īrijas ziemeļrietumos — Form pirmo izsludināto starptautisko projektu, ko gaida tīklā 2029. gadā. Ziņās laukumu sauc Ballynahone Energy Storage Donegolas grāfistē. Simts stundas pie 10 MW ir 1 GWh aritmētika. Tā ir kontraktēta demonstrācija, ne strādājoša īru baterija.',
    problem:
      'Īrijas tīkls ar lielu vēju nomet jaudu, kad sala to nevar paņemt vai izvest, un tad dedzina kaut ko citu, kad vējš krīt dienām. Daudzdienu krātuve ir nosauktais robs.',
    how: 'Tā pati dzelzs–gaisa ķīmija kā Form projektiem ASV: atgriezeniska dzelzs rūsēšana, parasti materiāli, liela platība. Pirms jebkura elektrona vēl stāv plānošana un pieslēgums tīklam.',
    players:
      'Form Energy; FuturEnergy Ireland. Kaimiņu kartīte: daudz lielākais Google–Xcel 300 MW / 30 GWh ASV pieteikums.',
    risks:
      'Plānošanas pārsūdzības, pieslēgums un tas, vai 2029. gads turas. Desmit megavati nepārrakstīs salas tīklu. Neskaiti vienošanos par atdotām megavatstundām.',
    sourcesNote:
      'Form Energy 2026. g. 17. marta Īrijas piezīme: 10 MW / 1 GWh, tīklu gaida 2029. gadā. Vienošanās nav strādājoša baterija.',
  },
  'weathernext-3': {
    title: 'Google WeatherNext 3',
    hook: '2026. gada septembra globālais laikapstākļu modelis, kas ņem dzīvus satelītus un atsvaidzina katru stundu — joprojām ne tava nacionālā brīdinājumu dienests.',
    imageAlt: 'GOES-17 pilnais Zemes disks — satelītu novērojumu klase, uz kuras WeatherNext 3 mācās un strādā',
    what: '2026. gada 3. septembrī Google DeepMind un Google Research iepazīstināja ar WeatherNext 3, savu jaunāko globālo MI laikapstākļu modeli. Sistēma ņem dzīvas ģeostacionāro satelītu mozaīkas un staciju novērojumus; Google saka, ka dod stundas prognozes ap 5 km dažiem piezemes laukiem (10 km citiem piezemes, 25 km daudziem atmosfēras) — apmēram piecas reizes asāk nekā WeatherNext 2 25 km / sešu stundu režģis. Google to liek Search, Gemini, Maps, Maps Platform, Earth Engine un Cloud. Neatkarīgos dzīvos rangos citē Brightband. Oficiālie bīstamo laikapstākļu brīdinājumi joprojām pieder nacionālajiem meteoroloģijas dienestiem.',
    problem:
      'Ātrie vietējie laikapstākļi — lietus joslas, krasta un kalnu kontrasti, vējš turbīnas augstumā — ir tas, ko jūt fermas, tīkli un cilvēki. Vecāki MI laikapstākļu modeļi, kas mācīti tikai uz atpalikušām fizikas analīzēm, šīs detaļas izsmērēja.',
    how: 'Functional Generative Network režģa transformators ņem stundas satelītu mozaīkas plus analīzi un dod laukus, ciklonu trases un staciju vērtības. Google publicē arī 100 metru vēju un starojumu vēja un saules operatoriem. Nokrišņu prasmes apgalvojumi (CRPS pret IMERG, MRMS un mērītājiem) ir Google izvērtējuma skaitļi.',
    players:
      'Google DeepMind un Google Research. Kaimiņu kartīte: GraphCast (Science, 2023), agrākais DeepMind globālais modelis. Nacionālie dienesti paliek brīdinājumu iestādes.',
    risks:
      'Pārlieka uzticība, vāji ekstrēmi un novērojumu sistēmas izlaišana. Maps prognoze nav ciklona brīdinājums. Vieta līderu tabulā nav prasme tavā ielejā sliktā dienā.',
    sourcesNote:
      'Google DeepMind WeatherNext 3 ieraksts (2026. g. 3. sept.). Brīdinājumiem — nacionālie meteoroloģijas dienesti.',
  },
  'ecmwf-aifs': {
    title: 'ECMWF AIFS 1.1',
    hook: 'Eiropas operatīvā MI prognoze, 2025. gada augustā atjaunināta ar fizikas robežām, lai lietus neietu mīnusā — blakus fizikas modelim, ne tā vietā.',
    imageAlt:
      'Eiropas vidēja termiņa laikapstākļu prognožu centra ēka Rīdingā — AIFS mājas, ne prognozes kartes ekrānuzņēmums',
    what: 'ECMWF Artificial Intelligence Forecasting System (AIFS) ir iemācīta globālā prognoze, kas iet ekspluatācijā blakus fizikas IFS. AIFS Single 1.1.0 sāka darbu 2025. gada 27. augustā. 2026. gada Geoscientific Model Development raksts apraksta ierobežojošo slāni, kas tur fizikas robežas (lietus nav negatīvs, saskanīgi mākoņi un nokrišņi) un ziņo ap 4–6% labāku prasmi augšējā atmosfērā un pie zemes, ar lielāko ieguvumu nokrišņos — līdz 12% un ap dienas priekšrocību kategoriskā mērā. ECMWF vēlāk 1.1 nomainīja ar AIFS v2 2026. gada maijā; šī kartīte tur 1.1 līniju, ko lūdza dibinātājs, ar vintāžas etiķeti. AIFS ir operatīva programmatūra, ne demo.',
    problem:
      'Fizikas modeļi ir precīzi un dārgi. Ātrs iemācīts modelis aizpilda robu, ja paliek fizikāli pie skaidra prāta un tiek vērtēts pret tiem pašiem novērojumiem.',
    how: 'Grafu neironu tīkla kodētājs, transformera procesors un dekodētājs, mācīti uz ERA5 un ECMWF analīzēm, soļo atmosfēru sešu stundu lēcienos. Četri skrējieni dienā. Desmit dienu lauki minūtēs uz GPU ir operatīvais arguments; VAST Data eseja, ko norādīja dibinātājs, ir šīs pārbīdes sekundārs stāsts. Juridiskais un zinātniskais ieraksts ir GMD raksts un ECMWF versiju vēsture.',
    players:
      'ECMWF; EuroHPC mācību mašīnas (Leonardo, MareNostrum 5). Kaimiņu kartītes: GraphCast un WeatherNext 3. IFS ansambļi joprojām tur izkliedi un garo saiti.',
    risks:
      'Iemācīti modeļi var izdomāt pieklājīgus ekstrēmus vai lauzt saglabāšanu bez važām — tāpēc 1.1 pievienoja robežas. GPU nedeterminisms nozīmē, ka oficiālo skrējienu mājās pa bitiem neatkārtosi. Laikapstākļu MI joprojām vajag satelītus.',
    sourcesNote:
      'Dibinātāja saite: VAST Data eseja par AIFS 1.1. Prasmes skaitļi pēc Moldovan et al., GMD, 2026. ECMWF 1.1 nomainīja ar v2 2026. gada maijā.',
  },
};
