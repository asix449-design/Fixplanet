import type { MapCopy } from '../data/maps';

export const lv: Record<string, MapCopy> = {
  'armed-conflict-events': {
    title: 'Politiskās vardarbības notikumi',
    hook: 'Kur reģistrēti bruņoti sadursmes un protesti — ne spriedums par to, kam ir taisnība.',
    description:
      'ACLED apkopo ģeolocētus ziņojumus par kaujām, sprādzieniem, vardarbību pret civiliedzīvotājiem, nemieriem un protestiem. Publiskais panelis un Conflict Watchlist rāda nesenās ainavas. Šī kartīte ir ieeja dzīvajā datu kopā, ne katra punkta kopija.',
    howToRead:
      'Lasi kā reģistrētu notikumu karti. Blīvi saišķi nozīmē vairāk fiksētu incidentu, ne automātiski „sliktāko valsti” un ne morālu rangu. Laika logs ir svarīgs: pēdējais mēnesis nav pēdējā desmitgade.',
    caveats:
      'Pārklājums atkarīgs no vietējām ziņām, valodas un piekļuves. Daži kari ir par maz saskaitīti; daži protesti ir pārāk redzami. ACLED neizlemj, kura puse ir likumīga. Piespraude nav visu nāvju skaitīšana.',
    licenseNote:
      'ACLED datus var lietot ar atsauci pēc viņu noteikumiem; mēs neuzturam viņu notikumu datubāzi. Atver viņu karti. Nenokasiet un nepārpublicējiet viņu pilno plūsmu no šīs vietnes.',
    imageAlt:
      'Tumša pasaules karte ar sarkaniem un oranžiem punktiem zināmos konfliktu ziņošanas reģionos, marķēta kā Fix Planet pārskats',
  },
  'battle-related-deaths': {
    title: 'Kaujās bojāgājušie',
    hook: 'UCDP aplēses par cilvēkiem, kas nogalināti organizētā bruņotā konfliktā, salīdzinājumam laikā.',
    description:
      'Uppsala konfliktu datu programma reģistrē konfliktus ar valsts dalību, bez tās un vienpusēju vardarbību, tad aplēš ar kaujām saistītās nāves. Our World in Data publicē rindas kā grafikus un kartes ar dokumentāciju.',
    howToRead:
      'Valsts gads ir nāvju aplēse pēc UCDP definīcijām, ne „visi, ko karš skāris”. Salīdzini tendences, ne viena gada rangus. OWID lapa par karu un mieru ir saprotamā ieeja.',
    caveats:
      'Definīcijas izlaiž daudz civilā kaitējuma (pārvietošana, bads, slimības). Agrīnie gadi un slēgtas vides ir nenoteiktas. Skaitļus pārskata. Šī nav karte par to, kurš karu sāka.',
    licenseNote:
      'UCDP ļauj nekomerciālu lietojumu ar citātu. OWID grafiki parasti ir CC BY. Mēs dodam saiti, nevis pārzīmējam viņu horoplētu.',
    imageAlt:
      'Our World in Data karte par nāvēm bruņotos konfliktos: bāla zeme, Ukraina un vairākas Āfrikas un Āzijas valstis oranžā un sarkanā',
  },
  'global-peace-index': {
    title: 'Globālais miera indekss (GPI)',
    hook: 'Valstu miera rangs no Institute for Economics & Peace — saliktais rādītājs, ne ACLED notikumu punkti un ne verdikts «kuram taisnība».',
    description: 'GPI (IEP / Vision of Humanity) salīdzina valstis ar salikto miera indeksu.',
    whyOnShelf: 'Cits objekts nekā ACLED (notikumi) un UCDP (kaujas zaudējumi).',
    howToRead: 'Krāsa — ranga josla, ne tiesas spriedums. Atvērt GPI karti un ziņojumu.',
    caveats: 'Saliktais rādītājs, ne ACLED notikumu punkti un ne verdikts «kuram taisnība».',
    licenseNote: 'Priekšskatījums — Fix Planet pārskats, ne izdevēja oficiālā grafika.',
    imageAlt:
      'Fix Planet pārskats: zaļš — mierīgāka josla, sarkans — mazāk mierīga, pelēka zeme bez klases. Tā nav Vision of Humanity grafika un ne GPI balles.',
  },
  'fragile-states-index': {
    title: 'Trauslo valstu indekss (FSI)',
    hook: 'Valstu trausluma vērtējumi pēc spiediena un kohēzijas — trausluma risks, ne kaujas zaudējumi un ne miera rangs.',
    description: 'FSI (Fund for Peace) — salīdzinoša skala par spiedienu uz valsti un kohēziju.',
    whyOnShelf: 'Ne ACLED notikumu karte un ne GPI.',
    howToRead: 'Skatīt methodology un global data.',
    caveats: 'Augsts rezultāts ≠ spriedums un ≠ kara prognoze uz rītdienu.',
    licenseNote: 'Priekšskatījums — Fix Planet pārskats, ne izdevēja oficiālā grafika.',
    imageAlt:
      'Fix Planet pārskats: tumšāk — augstāks trauslums šajā shēmā, gaišāk — zemāks, vidējs tonis bez klases. Tā nav Fund for Peace karte un ne FSI balles.',
  },
  'military-expenditure-sipri': {
    title: 'Militārie izdevumi (SIPRI)',
    hook: 'Salīdzināmas valstu militāro izdevumu sērijas no SIPRI — budžeti un slodze, ne notikumu punkti un ne ieroču katalogs.',
    description: 'Milex (SIPRI) — izdevumi, ne «kurš sāka karu» un ne UCDP zaudējumu skaits.',
    whyOnShelf: 'Nejauc ar SIPRI ieroču piegāžu bāzi.',
    howToRead:
      'Interaktīvais milex.sipri.org pārbaudē neatbildēja — balstīties uz sipri.org/databases/milex un fact sheet.',
    caveats: 'Augsti tēriņi ≠ agresors.',
    licenseNote: 'Priekšskatījums — Fix Planet pārskats, ne izdevēja oficiālā grafika.',
    imageAlt:
      'Fix Planet pārskats: tumšāks zils — augstāks militāro izdevumu līmenis, gaišāka zeme bez klases. Tā nav SIPRI gadagrāmatas vāks un ne Milex skaitļi.',
  },
  'conflict-barometer-hiik': {
    title: 'Konfliktu barometrs (HIIK)',
    hook: 'Ikgadēja konfliktu intensitāte pa valstīm un reģioniem no HIIK — intensitātes klases, ne notikumu punkti un ne zaudējumu summas.',
    description: 'Conflict Barometer (HIIK) kodē politisko konfliktu intensitāti gada griezumā.',
    whyOnShelf: 'Cits objekts nekā ACLED un UCDP.',
    howToRead: 'Atvērt aktuālo PDF un HIIK kartes.',
    caveats: 'Intensitātes klase ≠ ANO rezolūcija. ANO miera uzturēšanas karte nav vajadzīga — HIIK atbild 200.',
    licenseNote: 'Priekšskatījums — Fix Planet pārskats, ne izdevēja oficiālā grafika.',
    imageAlt:
      'Fix Planet pārskats: dziļi sarkans — kara intensitātes orientācija, oranžs — cita vardarbība, pelēka zeme bez klases. Tā nav HIIK vāks un ne ACLED punkti.',
  },
  'language-families': {
    title: 'Pasaules valodu saimes',
    hook: 'Lingvistiska radniecīgu valodu karte — etnolingvistiskās ģeogrāfijas tuvinājums, ne tautu tautasskaitīšana.',
    description:
      'Maksa Planka evolūcijas antropoloģijas institūta Glottolog klasificē pasaules valodas un rāda tās kartē. WALS ir radniecīgs zinātnisks struktūru atlants. Abi ir par valodām, ne politisko etniskumu.',
    howToRead:
      'Krāsas un punkti apzīmē valodu saimes vai valodas, parasti atsauces vietā. Liels vienas krāsas laukums nenozīmē vienu „etnosu”, vienu viedokli vai vienu valsti. Daudzi cilvēki ir daudzvalodīgi; daudzas identitātes nav lingvistiskas.',
    caveats:
      'Etnolingvistiskās kartes ir strīdīgas. Koloniālās robežas, piespiedu asimilācija un pašidentifikācija šķērso valodu kokus. Šis ir zinātnisks runas kopienu uzmetums, nekad apgalvojums par asinīm, lojalitāti vai teritoriju.',
    licenseNote:
      'Glottolog saturs parasti ir CC BY. Interaktīvā karte ir viņu — atver to. Ethnologue komerciālo atlantu mēs neizvietojam.',
    imageAlt:
      'Krāsaina pasaules karte ar valodu saimēm: zilganzaļš indoeiropiešu, oranžs afroaziātu, zaļš nigēriešu-kongo, magenta sinotibetiešu, bordo austronēziešu',
  },
  'world-religions': {
    title: 'Reliģiskais sastāvs pa valstīm',
    hook: 'Pew aplēses, kā cilvēki nosauc savu reliģiju — piederība, ne dievbijība un ne „civilizāciju” karte.',
    description:
      'Pew Research Center publicē valstu reliģiskā sastāva aplēses (kristieši, musulmaņi, hinduisti, budisti, ebreji, tautas reliģijas, nepiesaistītie un citi), tostarp pārskatu 2010–2050. Tās ir aptauju un tautas skaitīšanu identifikācijas aplēses.',
    howToRead:
      'Valsts vairākuma etiķete ir statistiska aplēse. Minoritātes tur tik un tā dzīvo. „Nepiesaistītie” nav viena kultūra. Valstu robežas slikti tur ticību. Lieto Pew tabulas, ne saukli.',
    caveats:
      'Reliģiju kartes ir politiski jutīgas. Valstis dažkārt soda vai uzpūš piederību. Mājsaimniecību aptaujas palaid garām slēptu praksi. Nelasi to kā tikuma rangu vai konflikta prognozi. Pew kartogrāfiju mēs neizvietojam.',
    licenseNote:
      'Pew ļauj citēt secinājumus ar saiti. Viņu kartes un grafika paliek viņu. Atver avota pārskatu, nevis kopē noformējumu.',
    imageAlt:
      'Krāsaina karte ar vairākuma reliģiju reģioniem: violets kristietība, zaļš islāms, oranžs hinduisms, dzeltens budisms, pelēks nepiesaistītie',
  },
  'homicide-rates': {
    title: 'Tīšu slepkavību rādītāji',
    hook: 'UNODC salīdzināmi tīšu slepkavību rādītāji — viens vardarbības mērs, ne „visa noziedzība”.',
    description:
      'ANO Narkotiku un noziedzības birojs apkopo tīšu slepkavību statistiku no krimināltiesībām un veselības avotiem. Our World in Data pārvērš salīdzināmo rindu kartē un grafikā. Slepkavību definē vienotāk nekā laupīšanu vai „noziedzību” vispār.',
    howToRead:
      'Parastā vienība ir tīšas slepkavības uz 100 000 iedzīvotājiem gadā. Augsti rādītāji bieži sakrājas pilsētās vai koridoros, ne vienmērīgi visā valstī. Salīdzini tuvus gadus; uzskaite mainās.',
    caveats:
      'Nepietiekama reģistrācija, juridiskās definīcijas un iztrūkstoši gadi atšķiras. Konflikta nāves ir cita rinda (sk. UCDP). Nesastādi „bīstamāko valstu” sarakstu no sīktēla. Šeit nezīmējam avotiem neatbilstošu horoplētu.',
    licenseNote:
      'UNODC statistikas produktus parasti var lietot ar atsauci. OWID grafiki parasti ir CC BY. Atver viņu karti aktuālajam slānim.',
    imageAlt:
      'Our World in Data horoplēts par tīšām slepkavībām: dzeltenoranža zeme, tumšāks sarkans daļā Latīņamerikas un Dienvidāfrikas',
  },
  'organized-crime-index': {
    title: 'Globālais organizētās noziedzības indekss',
    hook: 'Valstu vērtējumi noziedzīgiem tirgiem, aktoriem un noturībai — ekspertu siltumkarte organizētajai noziedzībai, ne otrs tīšu slepkavību slānis.',
    description:
      'Globālā iniciatīva pret transnacionālo organizēto noziedzību (GI-TOC) vērtē 193 ANO dalībvalstis pēc noziedzības — tirgiem un aktoriem — un pēc noturības. Publiskais rīks ir ocindex.net. 2025. gada izdevums ir trešais; novērtējuma gads ir 2024. Šī kartīte ved uz šo ekspertu kompozītu, ne policijas reģistrētu rādītāju un ne otru UNODC slepkavību karti.',
    whyOnShelf:
      'Organizētās noziedzības noziedzība un noturība ir cits objekts nekā tīšu slepkavību rādītāji. Nesalieciet šo indeksu slepkavību kartītē un nelasiet tumšu valsti kā augstu slepkavību rādītāju.',
    howToRead:
      'Valsts vērtējums ir ekspertu kompozīts, ne policijas reģistrēts rādītājs un ne UNODC slepkavību skaitlis. Tirgi, aktori un noturība ir atsevišķi stabi. Aktuālo slāni atveriet oficiālajā siltumkartē ocindex.net.',
    caveats:
      'Tas ir ekspertu vērtējums, ne nodarījumu tautas skaitīšana. Definīcijas un pierādījumu blīvums atšķiras. Augsts tirgus vērtējums nav augsts slepkavību rādītājs.',
    licenseNote:
      'Foto: Philippe Alès, konteinerkuģis Havrā (CC BY-SA 3.0). Tā nav GI-TOC indeksa siltumkarte — tas slānis ir ocindex.net.',
    imageAlt:
      'Konteinerkuģis un celtņi Havrā. Šis ir foto, ne GI-TOC Globālā organizētās noziedzības indeksa siltumkarte.',
  },
  'corruption-perceptions-index': {
    title: 'Korupcijas uztveres indekss',
    hook: 'Uztvertā publiskā sektora korupcija (0–100) no ekspertu un uzņēmēju aptaujām — pārvaldības risks, ne ielu noziedzības apjoms un ne slepkavības.',
    description:
      'Transparency International Korupcijas uztveres indekss (CPI) 2025 kārto valstis pēc uztvertās publiskā sektora korupcijas. Skala no 0 (ļoti korumpēts) līdz 100 (ļoti tīrs) apvieno ekspertu un uzņēmēju aptaujas. Our World in Data publicē rindu kā atklātu karti. Tas ir pārvaldības riska kompozīts, ne kukuļlietu skaits un ne vardarbības rādītājs.',
    whyOnShelf:
      'Uztvertā publiskā sektora korupcija ir cits sabiedriskā kaitējuma signāls nekā UNODC tīšās slepkavības. Nekad nesakausējiet šo kartīti ar slepkavību slāni.',
    howToRead:
      'Vērtējums ir uztveres kompozīts, ne notiesājošu spriedumu skaits un ne ielu noziedzība. Gada etiķete ir CPI izdevuma gads (šeit 2025), ne obligāti katras aptaujas kalendārais gads. Augstāk nozīmē tīrāk. Salīdziniet tuvus izdevumus; viena–divu punktu maiņa bieži ir troksnis. Oficiālie vērtējumi ir Transparency International lapā; interaktīvā karte ir OWID.',
    caveats:
      'Trūkstoša valsts nav «tīra». Mājsaimniecību kukuļu pieredze ir cita rinda. Nelasiet sīktēlu kā «viskorumpētāko» sarakstu. Tas nav slepkavību horoplēts.',
    licenseNote:
      'Mēs izvietojam apgrieztu Wikimedia Commons CPI 2025 valstu horoplētu (Cnscrptr un ConnerMiner, CC BY-SA 4.0) pēc Transparency International CPI 2025 datiem. Our World in Data publicē CPI kā atklātu karti (CC BY). Izdevums ir transparency.org/en/cpi/2025.',
    imageAlt:
      'Pasaules horoplēts pēc Korupcijas uztveres indeksa 2025: vēsāks zaļš tur, kur uztvertā korupcija ir zemāka, siltāks sarkans tur, kur augstāka — ne slepkavību karte',
  },
  'trafficking-in-persons': {
    title: 'Cilvēku tirdzniecība',
    hook: 'Konstatētie cilvēku tirdzniecības upuri un modeļi no UNODC Globālā ziņojuma (GLOTIP) — izmantošana un piespiešana, ne slepkavību rādītājs un ne vien GI-TOC tirgu kompozīts.',
    description:
      'UNODC Globālais ziņojums par cilvēku tirdzniecību (GLOTIP) 2024 ir astotais izdevums saskaņā ar ANO Konvencijas pret transnacionālo organizēto noziedzību Protokolu par cilvēku tirdzniecību un 2010. gada Globālo rīcības plānu. Tas ziņo par konstatētajiem upuriem, izmantošanas formām un modeļiem. Šī kartīte ved uz šo konstatēšanas pārskatu, ne uz pilnu cilvēku tirdzniecības tautas skaitīšanu.',
    whyOnShelf:
      'Cilvēku tirdzniecība ir atsevišķa ICCS nodarījumu saime. Tā papildina OC indeksa cilvēku tirdzniecības tirgus vērtējumu ar UNODC statistiku par konstatētajiem upuriem. Tas nav slepkavību rādītājs un nav World Drug Report plūsmu karte.',
    howToRead:
      'Skaitļi ir konstatētie upuri — pārklājums atkarīgs no policijas, definīcijām un piekļuves. Zems skaits var nozīmēt mazāk konstatējumu, ne mazāk upuru. Izmantošanas formas (seksuāla izmantošana, piespiedu darbs un citas) nav slepkavību rādītājs. Tabulas ir GLOTIP un UNODC datu portālā.',
    caveats:
      'Konstatēšana nav tautas skaitīšana. Pārrobežu plūsmas ziņojumā ir konstatēti modeļi, ne pilns maršrutu inventārs.',
    licenseNote:
      'Foto: Vladimir Platonow / Agência Brasil (CC BY 3.0 BR). Kristus Pestītājs izgaismots zilā pret cilvēku tirdzniecību, 2014. gada 28. jūlijs. Tā nav UNODC GLOTIP figūra.',
    imageAlt:
      'Kristus Pestītājs Riodežaneiro, izgaismots zilā pret cilvēku tirdzniecību. Šis ir foto, ne UNODC GLOTIP ziņojuma figūra.',
  },
  'air-quality-pm25': {
    title: 'Sīko daļiņu gaisa piesārņojums (PM2.5)',
    hook: 'Ārtelpas sīkās daļiņas, kas kaitē plaušām un sirdij — no satelītiem, modeļiem un stacijām, ne „pēc smaržas”.',
    description:
      'PVO publicē gaisa kvalitātes vadlīnijas un iedarbības datubāzi. Our World in Data kartē iedzīvotāju svērto PM2.5. NASA instrumenti (MODIS, VIIRS un radniecīgi) vēro aerosolus, no kuriem šīs aplēses būvē. Kartīte ved uz šiem atklātajiem slāņiem.',
    howToRead:
      'Tumšākas vai augstākas vērtības parasti nozīmē lielāku gada vidējo PM2.5. Pilsētas var būt krietni sliktākas par valsts vidējo. Iekštelpu dūmi un ozons ir atsevišķas problēmas. PVO orientieris (5 µg/m³ gadā) ir veselības mērs, ne visur juridisks limits.',
    caveats:
      'Satelīta–modeļa maisījumi nogludina vietējos maksimumus. Zemestrādes stacijas ir nevienmērīgas. Putekļu vētras un ugunssezonas dod īsus lēcienus. Šajā lapā valstu rangu neizdomājam.',
    licenseNote:
      'NASA attēli ir sabiedriskais īpašums. PVO un OWID materiālus var citēt; OWID parasti CC BY. Interaktīvo slāni atver OWID gaisa piesārņojuma kartē.',
    imageAlt:
      'Our World in Data horoplēts par PM2.5: bālas valstis un tumši brūna josla pāri Ziemeļāfrikai, Tuvajiem Austrumiem, Dienvid- un Austrumāzijai',
  },
  'co2-emissions': {
    title: 'Teritoriālās CO₂ emisijas',
    hook: 'Oglekļa dioksīds no fosilā kurināmā un rūpniecības pēc ražotājvalsts — Global Carbon Project rinda.',
    description:
      'Global Carbon Project aplēš teritoriālo CO₂ no oglēm, naftas, gāzes un cementa. Our World in Data kartē kopsummas un rādītājus uz iedzīvotāju, kā arī apspriež patēriņa (ar tirdzniecības korekciju) uzskaiti.',
    howToRead:
      'Liela industriāla valsts dominēs „kopējo emisiju” kartē. Skats uz iedzīvotāju un patēriņu maina ainu. Bunkura degviela un zemes lietojuma maiņa bieži ir atsevišķas rindas.',
    caveats:
      'Teritoriālie inventāri neredz importā iegultās emisijas. Gada lēcieni var būt metodika vai recesija, ne tikums. Šī nav pilsētas smoga karte.',
    licenseNote:
      'GCP datus publicē atkārtotai lietošanai ar atsauci. OWID grafiki parasti ir CC BY. Mēs saistām uz viņu emisiju karti, nevis to pārzīmējam.',
    imageAlt:
      'Our World in Data horoplēts par teritoriālo CO₂: Ķīna un ASV tumšākajā sarkanajā, citas lielās ekonomikas vidēji sarkanā',
  },
  'consumption-co2-emissions': {
    title: 'Patēriņa CO₂ emisijas',
    cardMeta: 'Global Carbon Project · OWID · ar tirdzniecības korekciju',
    hook: 'Oglekļa dioksīds, attiecināts uz preču un pakalpojumu patēriņa valsti — teritoriālais uzskaitījums ar tirdzniecības korekciju, ne otra ražošanas karte.',
    description:
      'Patēriņa (trade-adjusted) CO₂ emisijas no GCP / OWID. Cits objekts nekā dzīvā teritoriālo emisiju karte.',
    whyOnShelf: 'Cits objekts nekā dzīvā teritoriālo emisiju karte. Ne otra ražošanas karte.',
    howToRead:
      'Augsts rezultāts ≠ morāls verdikts un ≠ PM2.5. Atvērt OWID karti; priekšskatījums — Fix Planet pārskats.',
    caveats: 'Augsts rezultāts ≠ morāls verdikts un ≠ PM2.5. Tā nav ražošanas karte un nav PM2.5 karte.',
    licenseNote:
      'Priekšskats ir Fix Planet pārskats, ne OWID oficiālā grafika. Atribūcija: Global Carbon Project / Our World in Data (CC BY). Atvērt OWID karti.',
    imageAlt:
      'Fix Planet pārskats: patēriņa CO₂ emisiju horoplēts, ne teritoriālā ražošanas karte un ne OWID eksports',
  },
  'nitrogen-dioxide-no2': {
    title: 'Slāpekļa dioksīds (NO₂)',
    cardMeta: 'Copernicus Sentinel-5P · TROPOMI · S5P-PAL',
    hook: 'Satelīta slāpekļa dioksīda kolonna virs pilsētām, rūpniecības un kuģniecības — degšanas piesārņojums, ne tas pats, kas PM2.5 masa.',
    description:
      'NO₂ no TROPOMI / Sentinel-5P S5P-PAL portālā (slīdošais vidējais). Cits objekts nekā dzīvā PM2.5 karte.',
    whyOnShelf: 'Cits objekts nekā dzīvā PM2.5 karte. Degšanas piesārņojums, ne daļiņu masa.',
    howToRead:
      'Mākoņi slēpj virsmu; spilgta kolonna ≠ gada limits. Atvērt tropospheric NO₂; priekšskatījums — Fix Planet pārskats.',
    caveats: 'Mākoņi slēpj virsmu. Spilgta kolonna ≠ gada limits. Tā nav PM2.5 karte.',
    licenseNote:
      'Priekšskats ir Fix Planet pārskats, ne ESA vai S5P-PAL mārketinga kadrs. Atribūcija: Copernicus Sentinel-5P / TROPOMI.',
    imageAlt:
      'Fix Planet pārskats: dzintara slāpekļa dioksīda kolonnas virs pilsētām, rūpniecības un kuģniecības — ne PM2.5 horoplēts un ne ESA kadrs',
  },
  'mismanaged-plastic-waste': {
    title: 'Nekontrolēti plastmasas atkritumi',
    cardMeta: 'OWID · Meijer et al. 2021',
    hook: 'Plastmasa, kas nav pārstrādāta, sadedzināta vai hermētiski apglabāta — noplūdes risks upēs un piekrastē, ne pludmales atkritumu foto.',
    description:
      'Mismanaged plastic waste pēc OWID (Meijer et al. 2021, teksts PMC). Cits objekts nekā CO₂ un PM2.5.',
    whyOnShelf: 'Cits objekts nekā CO₂ un PM2.5. Tie ir atkritumi, ne emisijas un ne daļiņu masa.',
    howToRead:
      'Liela masa bieži saistīta ar iedzīvotājiem un vāju infrastruktūru, ne ar «valsts raksturu». Atvērt OWID karti; priekšskatījums — Fix Planet pārskats.',
    caveats:
      'Liela masa bieži saistīta ar iedzīvotājiem un vāju infrastruktūru, ne ar «valsts raksturu». Ne pludmales atkritumu foto.',
    licenseNote:
      'Priekšskats ir Fix Planet pārskats, ne okeāna plastmasas foto un ne OWID oficiālais kadrs. Atribūcija: Our World in Data (CC BY) pēc Meijer et al. 2021; raksta teksts ir PMC.',
    imageAlt:
      'Fix Planet pārskats: nekontrolētu plastmasas atkritumu horoplēts, ne pludmales foto un ne OWID eksports',
  },
  'methane-emissions': {
    title: 'Metāna emisijas (CH₄)',
    cardMeta: 'EDGAR JRC · OWID · CH₄',
    hook: 'Valstu un režģa metāna kartes no fosilā kurināmā, lauksaimniecības un atkritumiem — cits siltumnīcefekta gāze nekā dzīvās CO₂ kartes.',
    description: 'CH₄ pēc EDGAR / OWID (+ IMEO izmērītiem strūklām). Ne CO₂ un ne PM2.5.',
    whyOnShelf:
      'Ne CO₂ un ne PM2.5. Cits siltumnīcefekta gāze nekā oglekļa dioksīda kartes. Tā nav Climate TRACE kartīte Innovations plauktā.',
    howToRead:
      'Inventārs ≠ satelīta spraudīte. Atvērt OWID karti un EDGAR_2025_GHG; priekšskatījums — Fix Planet pārskats.',
    caveats: 'Inventārs ≠ satelīta spraudīte. Ne teritoriālās un ne patēriņa CO₂.',
    licenseNote:
      'Priekšskats ir Fix Planet pārskats, ne lāpas foto un ne EDGAR vai OWID oficiālais kadrs. Atribūcija: EDGAR (JRC) / Our World in Data. IMEO Eye on Methane ir izmērītas strūklas, ne inventāra aizstājējs.',
    imageAlt: 'Fix Planet pārskats: metāna emisiju horoplēts, ne CO₂ karte un ne lāpas foto',
  },
  'oil-gas-reserves': {
    title: 'Nafta un gāze pasaulē',
    hook: 'ASV valdības skats uz naftu un gāzi — atradnes, rezerves un plūsmas, ne biržas ekrāns.',
    description:
      'ASV Enerģētikas informācijas administrācija publicē starptautisku statistiku, valstu analīzes un naftas un gāzes kartes. USGS pasaules naftas novērtējumi aplēš neatklātos tehniski iegūstamos resursus. Tas nav tirdzniecības terminālis.',
    howToRead:
      'Rezerves ir apjomi, ko uzskata par ekonomiskiem pie šodienas cenām un tehnoloģijas; resursi ir plašāki un mazāk droši. Iekrāsots baseins nav atļauja urbšanai. Cauruļvadi un SDG maina, kura gāzi kurš lieto.',
    caveats:
      'Nacionālie rezervju ziņojumi var būt politiski. EIA skaitļi tomēr ir starp caurspīdīgākajām atklātajām rindām. Šeit lauku pa laukam barelus neuzskaitām.',
    licenseNote:
      'EIA un USGS ASV valdības darbi parasti ir sabiedriskais īpašums. Aktuālās kartes un tabulas ir EIA starptautiskajās lapās.',
    imageAlt:
      'EIA karte ar novērtētiem slānekļa gāzes baseiniem: baltas un pelēkas valstis ar bordo un dzelteniem baseinu daudzstūriem',
  },
  'mineral-resources': {
    title: 'Derīgo izrakteņu atradnes',
    hook: 'USGS kartes par zināmajiem metāliem un rūpnieciskajiem minerāliem, tostarp zeltu — ne dārgumu karte.',
    description:
      'USGS Minerālresursu programma un MRDATA apkopo atradnes, izpausmes un ikgadējos kopsavilkumus (zelts, varš, dzelzs, litijs un citi). Mineral Commodity Summaries ir atklātais gada reģistrs par ieguvi un rezervēm.',
    howToRead:
      'Punkts ir zināma atradne vai rajons, ne raktuves, kurp braukt. „Rezerve” ir ekonomiska lielums; „resurss” — ģeoloģisks. Zelts bieži ir kopā ar citiem metāliem. Amatniecības vietas var trūkt.',
    caveats:
      'Pilnība atšķiras pa valstīm un slepenību. Tukšs laukums var nozīmēt „nav uzņēmuma”, ne „nav ieža”. Ieguves kaitējums ģeoloģijas slānī nav redzams.',
    licenseNote:
      'USGS informācija parasti ir sabiedriskais īpašums. Atver MRDATA un kopsavilkumus, nevis kopē maksas nozares atlantus.',
    imageAlt:
      'Bēša pasaules karte ar krāsainiem punktiem zināmos minerālu rajonos: zelts, varš, dzelzs, litijs un retzemju elementi',
  },
  'world-countries': {
    title: 'Pasaules valstis un robežas',
    hook: 'Sabiedriskā īpašuma politiskā pamatne: kurš administrē kuru daudzstūri, ar parastajām atrunām par strīdīgām robežām.',
    description:
      'Natural Earth publicē kultūras un fiziskos vektorus vairākos mērogos, tostarp admin-0 valstis. Kartogrāfi tos ņem skaidrās licences un vispārinājuma dēļ, kas der sīkmēroga pasaules kartēm.',
    howToRead:
      'Šis ir atsauces kontūrs, ne tiesa. Strīdīgie apgabali uzzīmēti vienā veidā, lai karti vispār varētu uzzīmēt. Tiesiskam prasījumam lasi līgumu vai tiesas lēmumu, ne 1:110 miljonu shapefile.',
    caveats:
      'Robežas pārvietojas, vārdi mainās, dažas līnijas ir vardarbīgi strīdīgas. Natural Earth dokumentē strīdīgo robežu izvēli. Tukša politiskā karte joprojām ir politisks akts.',
    licenseNote:
      'Natural Earth ir sabiedriskais īpašums. Priekšskata SVG ir Wikimedia sabiedriskā īpašuma BlankMap-World, līdzīgs sīkmēroga valstu kontūrs.',
    imageAlt: 'Sabiedriskā īpašuma kontūrkarte ar pasaules valstīm, krēmīga zeme uz gaiši zila, bez uzrakstiem',
  },
  'forest-cover-loss': {
    title: 'Koku seguma zudums',
    hook: 'Hansen / Global Forest Watch: kur izzudis vainags — izciršana, uguns un cirte, ne tikai „pirmatnējā meža iznīcināšana”.',
    description:
      'Hansens un kolēģi Merilendas universitātē kartē ikgadējo koku seguma zudumu no Landsat. Global Forest Watch (WRI) pasniedz slāni. NASA novērojumi stāv aiz tiem pašiem satelītiem. Zudums ir vainaga maiņa, ne automātiski primārā meža pārvēršana.',
    howToRead:
      'Rozā vai sarkanie pikseļi ir vainags, kas izzudis tajā gadā. Plantācijas, uguns un vējgāzes arī skaitās zudums. „Pieaugums” ir lēnāks un to vieglāk palaist garām. Pietuvini; valsts kopsumma slēpj pierobežu.',
    caveats:
      'Koku segums ≠ primārais mežs. Daļa zuduma ir likumīga cirte. Daļa neskarta meža jau ir degradēta. GFW dokumentē definīcijas. Mēs rādām fizisku Zemes priekšskatu, ne pārkrāsotu Hansena flīžu kopu.',
    licenseNote:
      'Hansen / GFW dati parasti pieejami ar CC BY 4.0 un atsauci. Interaktīvo zuduma slāni atver GFW kartē.',
    imageAlt:
      'Tumši zaļa pasaules karte ar magenta plankumiem zināmos koku seguma zuduma frontēs Amazones, Kongo, Dienvidaustrumāzijas un boreālajās joslās',
  },
  'protected-areas': {
    title: 'Aizsargājamās teritorijas',
    hook: 'WDPA / Protected Planet: parki, rezervāti un citi daudzstūri — pārklājums uz papīra, ne vienmēr aizsardzība uz zemes.',
    description:
      'Pasaules aizsargājamo teritoriju datubāze, ko uztur UNEP-WCMC un IUCN un rāda Protected Planet, ir globālais sauszemes un jūras aizsargājamo teritoriju saraksts. Tas ir standarta slānis, uz ko atsaucas valdības un pētnieki.',
    howToRead:
      'Zaļš daudzstūris ir ziņots statuss (IUCN kategorijas I–VI un citi pasākumi). Pārklāšanās, „papīra parki” un iztrūkstošas pirmiedzīvotāju teritorijas ir bieži. Aizsargātā platība nav tas pats, kas neskarta dzīvotne.',
    caveats:
      'Ziņošana atpaliek. Dažas valstis ieraksta gandrīz visu, citas — maz. Medības, ceļi un ieguve notiek arī līniju iekšpusē. Papildu slāņi (OECM, pirmiedzīvotāju zemes) ir nepilnīgi.',
    licenseNote:
      'WDPA ir īpaši noteikumi: var skatīt un citēt; pilnīga datubāzes izplatīšana ir ierobežota. Mēs saistām uz Protected Planet, nevis sūtām viņu daudzstūrus.',
    imageAlt:
      'Our World in Data zaļš horoplēts par katras valsts zemes daļu, kas ziņota kā aizsargājama',
  },
  'water-stress': {
    title: 'Ūdens stress',
    hook: 'WRI Aqueduct: kur pieprasījums pēc ūdens ir augsts pret pieejamo noteci — modelis, ne akas žurnāls.',
    description:
      'Pasaules resursu institūta Aqueduct ūdens riska atlants modelē bāzes ūdens stresu un radniecīgus riskus (izsīkums, plūdi, sausums) baseina mērogā. 4. versija (2023) ir aktuālais atklātais atlants.',
    howToRead:
      'Augsts stress nozīmē, ka ņemšana ir liela pret atjaunojamo noteci. Pilsētas var pievest ūdeni; tīrumi tik un tā izžūst. Klimata scenāriji atlantā ir projekcijas, ne laikapstākļu prognoze.',
    caveats:
      'Modeļi nogludina vietējās tiesības, nelegālās akas un sezonu pulsāciju. Upju politiskā kontrole nav tikai hidroloģija. Sarkans baseins nav kara pravietojums.',
    licenseNote:
      'Aqueduct dati parasti ir CC BY ar atsauci uz WRI. Interaktīvos baseinus atver Water Risk Atlas.',
    imageAlt:
      'Pasaules karte no tirkīza ūdeņiem bagātiem reģioniem līdz sarkanām sausuma joslām Ziemeļāfrikā, Tuvajos Austrumos un citās sausajās zemēs',
  },
  'population-density': {
    title: 'Iedzīvotāju blīvums',
    hook: 'Kur cilvēki dzīvo, uz režģa: NASA SEDAC GPW un WorldPop — modeļi pēc tautas skaitīšanām, ne katras ielas skaitīšana.',
    description:
      'Gridded Population of the World (SEDAC / CIESIN) un WorldPop izklāj tautas skaitīšanu skaitļus uz režģa ar satelītu kovariātēm. ANO iedzīvotāju perspektīvas dod nacionālos kopsummas, pie kurām režģus bieži pieskaņo. Nakts gaismas (sk. Zemi naktī) ir spožums, ne tautas skaitīšana.',
    howToRead:
      'Gaišas vai tumšas šūnas ir aplēse par cilvēkiem uz kvadrātkilometru. Lauku retums var slēpt lielus absolūtos skaitļus. Pilsētu centri piesātina jebkuru krāsu skalu.',
    caveats:
      'Tautas skaitīšanas ir nevienmērīgas un dažkārt vecas. Konfliktu zonas un neformālās apmetnes ir grūti saskaitīt. Režģis ir aplēse. Priekšskats ir NASA nakts gaismas: elektrificēta apdzīvotība, ne paši iedzīvotāji.',
    licenseNote:
      'SEDAC GPW ir akadēmiskas lietošanas noteikumi; WorldPop parasti CC BY. NASA nakts gaismu attēli ir sabiedriskais īpašums. Iedzīvotāju režģi atver SEDAC kartes skatītājā.',
    imageAlt:
      'Brūns horoplēts par iedzīvotāju blīvumu pēc valstīm un izraudzītiem reģioniem, tumšākais Dienvid- un Austrumāzijā un daļā Eiropas',
  },
  'earth-at-night': {
    title: 'Zeme naktī',
    hook: 'NASA Black Marble: pilsētu gaismas un lāpas no orbītas — elektrificētas apdzīvotības attēls.',
    description:
      '2012. gada VIIRS nakts gaismu plakanā karte saliek mākoņbrīvus Suomi NPP novērojumus. Vēlākie Black Marble produkti skatu precizē. Gaismas iezīmē pilsētas, ceļus un daļu rūpniecisko lāpu; tumša sauszeme tik un tā var būt apdzīvota.',
    howToRead:
      'Baltais ir gaisma uz augšu. Okeāni paliek melni. Salīdzini ar blīvuma kartīti: spožums seko elektrībai un bagātībai ne mazāk kā galvu skaitam. Lauku Āfrika un daļa Dienvidāzijas ir tumšākas par saviem iedzīvotājiem.',
    caveats:
      'LED ielu laternas, mēness gaismas algoritmi un gāzes lāpas maina ainu. Tumšs pikselis nav „tukšums”. 2012. gada mozaīka ir vintāža, ne šīsdienas Zeme.',
    licenseNote:
      'NASA Earth Observatory attēli ir sabiedriskais īpašums. Mēs izvietojam 2012. gada plakanās kartes JPEG. Vēlākie ikgadējie Black Marble ir NASA Visible Earth.',
    imageAlt:
      'NASA 2012. gada nakts gaismu karte: pilsētu gaismas uz tumšas sauszemes un melniem okeāniem, bez robežām un uzrakstiem',
  },
  'global-river-basins': {
    title: 'Globālie upju baseini',
    hook: 'Iekļauti apakšbaseinu daudzstūri visai planētai (Pfafstettera līmeņi) — hidrografiska pamatkarte, ne stresa indekss.',
    description:
      'HydroBASINS no HydroSHEDS ir globāls hierarchiski iekļautu sateces baseinu kopums, izvilkts no HydroSHEDS augstumu hidrografijas 15 loka sekundēs. Divpadsmit Pfafstettera līmeņi iet no kontinentu mēroga baseiniem līdz sīkiem apakšbaseiniem (ap miljonu daudzstūru vissīkākajā sadalījumā). Tas ir slānis «kas kur tek», ne pieprasījuma un piedāvājuma modelis. WRI Aqueduct (kartīte Ūdens stress) ir riska atlants. HydroSHEDS hubs ir hydrosheds.org.',
    howToRead:
      'Krāsains daudzstūris ir notece, ne valsts un ne sausuma balles. Iekļautie līmeņi ļauj tuvināt. Beznoteces baseini nesasniedz okeānu. Lejupielādes daudzstūri ir HydroBASINS. Priekšskats ir Commons pasaules sateces baseinu izlase, ne HydroBASINS shapefile.',
    caveats:
      'DEM atvasināti ūdensšķirtnes var palaist garām karstu, kanālus un cilvēku pārliešanu starp baseiniem. Antarktīda nav iekļauta. Nelasi sīktēlu kā ūdens tiesības, stresu vai konflikta prognozi.',
    licenseNote:
      'HydroBASINS izplata zinātnei, izglītībai un komercijai ar HydroSHEDS licenci (citējiet Lehner & Grill 2013). Priekšskats ir Babelia Hidromundi sateces baseinu izlase (CC BY-SA 4.0), ne HydroSHEDS produkta figūra.',
    imageAlt:
      'Pasaules karte ar izraudzītiem upju sateces baseiniem pasteļtoņu daudzstūros uz gaiši zila okeāna — hidrografiska bāze, ne ūdens stresa indekss',
  },
  'freshwater-aquastat': {
    title: 'Saldūdens resursi (AQUASTAT)',
    hook: 'Valstu atjaunojamais ūdens un izņemšana no FAO globālās ūdens informācijas sistēmas — statistika un valstu profili, ne viens stresa rastrs.',
    description:
      'FAO AQUASTAT vāc atjaunojamos ūdens resursus, izņemšanu un apūdeņošanas statistiku, plus valstu un baseinu profilus. Tā ir nacionālo ūdens rēķinu grāmata, ne baseina mēroga riska modelis un ne aku žurnāls. Nesajauc ar WRI Aqueduct (kartīte Ūdens stress) un ne ar gruntsūdens līmeņa karti. IGRAC ir cits produkts, ne šī kartīte.',
    howToRead:
      'Valsts vidējais slēpj pilsētas, kas ved ūdeni, un saimniecības, kas izžūst. Pārrobežu upes ir kopīgas; AQUASTAT raksta nacionālos rēķinus. Tabulas un profili ir AQUASTAT portālā. Priekšskats ir Our World in Data valstu karte par atjaunojamo saldūdeni uz cilvēku (AQUASTAT caur Pasaules Banku), ne Aqueduct baseini.',
    caveats:
      'Nacionālā statistika kavējas, definīcijas atšķiras. «Atjaunojams» nav tas pats, kas pieejams vai tīrs. Neizgudro slāpstošu valstu rangu no sīktēla.',
    licenseNote:
      'AQUASTAT ir FAO sistēma; citējiet FAO. Mēs izvietojam apgrieztu Our World in Data kartes eksportu (CC BY) par atjaunojamo saldūdeni uz iedzīvotāju, no AQUASTAT caur Pasaules Banku. Aktuālās tabulas ir FAO AQUASTAT.',
    imageAlt:
      'Our World in Data horoplēts par atjaunojamo saldūdeni uz cilvēku: blāvas sausās zemes un tumšāks tirkīzs ūdeņiem bagātām valstīm',
  },
  'exclusive-economic-zones': {
    title: 'Ekskluzīvās ekonomiskās zonas',
    hook: 'Jūras EEZ daudzstūri — kas piesaka kuru okeāna joslu. Papildina sauszemes robežas; ne otrs valstu slānis.',
    description:
      'Ekskluzīvā ekonomiskā zona parasti ir josla līdz 200 jūras jūdzēm no sākuma līnijas, kur valstij ir suverēnas tiesības uz resursiem ūdenī un gultnē. Marine Regions (Flandrijas jūras institūts) publicē globālu EEZ ģeodatubāzi — parasto publisko atsauci. Tā ir jūras jurisdikcija, ne otra Natural Earth admin-0 valstu karte. Marine Regions hubs ir marineregions.org.',
    howToRead:
      'Zila okeāna josla ir pretenzija vai līguma līnija, dažkārt ar pārklāšanos. Atklātā jūra ir tālāk. Strīdīgās EEZ zīmē vienā veidā, lai karti vispār varētu uzzīmēt. Aktuālie daudzstūri ir Marine Regions. Priekšskats ir Commons pasaules EEZ shēma, ne viņu datubāzes izgāšana.',
    caveats:
      'Līgumi, viduslīnijas un kopīgi režīmi mainās. Sīktēls nav UNCLOS tiesvedība. Zvejas un naftas tiesības nav suverenitāte pār katru ūdens staba lietošanu.',
    licenseNote:
      'Marine Regions EEZ dati parasti ir CC BY 4.0 (citējiet Flanders Marine Institute). Priekšskats ir B1mbo Commons pasaules EEZ / teritoriālo ūdeņu shēma (CC BY-SA 3.0 CL) pēc VLIZ jūras robežām.',
    imageAlt:
      'Pasaules kontūra ar tumši zilu jūras joslu ap krastiem un salām — ekskluzīvās ekonomiskās zonas, ne sauszemes robežas',
  },
  'living-languages-count': {
    title: 'Dzīvo valodu skaits',
    hook: 'Ethnologue publiskais ieskats, cik dzīvu valodu tie skaita — mēroga kartīte blakus Glottolog saimju kartei, ne otrs saimju atlants.',
    description:
      'Ethnologue (SIL International) publicē publisku ieskatu par dzīvo valodu skaitu savā sarakstā. Šis kopsumma kustas, kad mainās ISO 639-3 un kad valodas pārklasificē par dzīvām vai izmirušām. Šī kartīte ir par šī inventāra lielumu, ne par otru valodu saimju karti. Glottolog šajā plauktā paliek saimju klasifikācijas karte.',
    howToRead:
      'Dzīvais skaitlis ir Ethnologue ieskata lapā. Mēs šeit neliekam virsraksta skaitli, jo lapa ir uzskaites avots un skaitlis mainās. Priekšskats ir vecāks Ethnologue valodu daudzveidības indeksa horoplēts — tumšāks tur, kur daudzas valodas dala valsti — ne saimju koka atlants un ne tautu skaitīšana.',
    caveats:
      '«Valoda» ir zinātnisks un politisks lēmums. Koloniālās robežas griež runas kopienas. Nelasi toni kā etniskumu, lojalitāti vai teritoriju. Neklonē šo kartīti kā otru Glottolog.',
    licenseNote:
      'Ieskata teksts ir Ethnologue. Priekšskats ir Wikimedia Ethnologue 18 valodu daudzveidības indeksa karte (cmglee, CC BY-SA 3.0) — valstu daudzveidības horoplēts, ne Glottolog saimes un ne pašreizējā izdevuma Ethnologue grafika.',
    imageAlt:
      'Zaļš horoplēts par valodu daudzveidību pēc valstīm: tumšāks zaļš tur, kur daudzas valodas dala valsti, blāvāks tur, kur maz — ne valodu saimju atlants',
  },
  'disputed-breakaway-areas': {
    title: 'Strīdīgās un atdalījušās teritorijas',
    hook: 'Poligoni, ko Natural Earth atzīmē kā atdalījušās vai strīdīgas — kartogrāfa darba kopa strīdīgai sauszemei, nevis tiesas spriedums un ne otrs pasaules valstu slānis.',
    description:
      'Slānis Admin 0 – Breakaway, disputed areas. Tā pati public domain ģimene kā valstu kartīte, bet cits objekts: strīdīgi / īpaši poligoni, ne parastā admin-0 aizpilde. Nelasīt kā valsts atzīšanu. IEZ paliek jūra; šeit sauszeme.',
    howToRead: 'Nelasīt kā valsts atzīšanu. IEZ paliek jūra; šeit sauszeme.',
    caveats:
      'Natural Earth atzīmē šos poligonus kā atdalījušās vai strīdīgas, lai karti vispār varētu uzzīmēt. Tas ir kartogrāfisks kodējums, ne valsts atzīšana un ne tiesas spriedums. Nesajauc šo slāni ar valstu kartīti kā otru admin-0 aizpildi.',
    licenseNote:
      'Natural Earth ir sabiedriskais īpašums. Sīktēls pārkrāso tikai Admin 0 – Breakaway, disputed areas poligonus. Sīktēls ir kartogrāfija, ne tiesas spriedums.',
    imageAlt:
      'Pasaules karte ar krēmīgu sauszemi un gaiši zilu okeānu; koraļļu poligoni atzīmē tikai Natural Earth strīdīgās un atdalījušās teritorijas — ne otra valstu aizpilde un ne tiesas spriedums',
  },
  'states-provinces': {
    title: 'Štati un provinces',
    hook: 'Iekšējās pirmās kārtas vienības (štati, provinces, apgabali…) — administratīvās līnijas valstu iekšienē, ne otrs suverēno robežu atlants un ne IEZ.',
    description:
      'Slānis Admin 1. Papildina valstu kartīti: valsts iekšienē, ne suverenitāte un ne jūra. Vispārinājums maza mēroga kartēm; ne GADM. Natural Earth — tā pati licence kā dzīvajai valstu kartītei.',
    howToRead:
      'Vispārinājums maza mēroga kartēm; ne GADM. Natural Earth — tā pati licence kā dzīvajai valstu kartītei.',
    caveats:
      'Provinču nosaukumi un robežas mainās. Natural Earth vispārina pirmās kārtas vienības maza mēroga kartēm. Tas nav GADM un nav vietējo pašvaldību tautas skaitīšana.',
    licenseNote:
      'Natural Earth ir sabiedriskais īpašums. Sīktēls rāda Admin 1 štatu un provincu kontūras. Sīktēls ir kartogrāfija, ne tiesas spriedums.',
    imageAlt:
      'Pasaules karte ar pirmās kārtas iekšējām vienībām kā plānām kontūrām — štati, provinces, apgabali — ne valstu horoplēts un ne jūras joslas',
  },
  'land-boundary-lines': {
    title: 'Sauszemes robežlīnijas',
    hook: 'Starptautiskās sauszemes robežas kā līnijas — mala starp poligoniem, ne valstu aizpilde un ne jūras IEZ robežas.',
    description:
      'Lineārais robežu slānis pie admin-0. Papildina valstu aizpildi; ne IEZ un ne strīdīgie poligoni. Tās pašas atrunas par strīdīgiem posmiem — līnija mazā mērogā joprojām ir kartogrāfiska izvēle, ne ANO kadastrs.',
    howToRead:
      'Tās pašas atrunas par strīdīgiem posmiem — līnija mazā mērogā joprojām ir kartogrāfiska izvēle, ne ANO kadastrs.',
    caveats:
      'Daži sauszemes robežu posmi ir strīdīgi; Natural Earth dokumentē šo kodējumu. Līnija mazā mērogā joprojām ir kartogrāfiska izvēle, ne ANO kadastrs.',
    licenseNote:
      'Natural Earth ir sabiedriskais īpašums. Sīktēls ir Admin 0 sauszemes robežlīniju slānis. Sīktēls ir kartogrāfija, ne tiesas spriedums.',
    imageAlt:
      'Pasaules karte ar starptautiskām sauszemes robežām kā tumšām līnijām uz gaišas sauszemes — līniju ģeometrija, ne valstu aizpilde un ne jūras robežas',
  },
  'endangered-languages-unesco': {
    title: 'Apdraudētās valodas (UNESCO atlants)',
    hook: 'Valodas, ko UNESCO klasificēja kā apdraudētas vai izzūdošas — apdraudējuma atlants, ne tautu skaitīšana un ne otra ģimeņu karte.',
    description:
      'Moseley 2010 izdevums (~2500 valodas, apdraudējuma pakāpes pēc paaudžu pārmantošanas). Blakus Glottolog (radniecība) un Ethnologue (dzīvo skaits) — cits jautājums: ko UNESCO uzskatīja par apdraudētu. Nelasīt kā etnisko karti vai tiesas spriedumu.',
    whyOnShelf:
      'Blakus Glottolog (radniecība) un Ethnologue (dzīvo skaits) — cits jautājums: ko UNESCO uzskatīja par apdraudētu.',
    howToRead: 'Nelasīt kā etnisko karti vai tiesas spriedumu.',
    caveats: 'Valodas ≠ tautas ≠ valstis. Nelasīt kā etnisko karti vai tiesas spriedumu.',
    licenseNote:
      'UNESCO / Moseley (red.) 2010. Priekšskats ir atlanta apdraudējuma pakāpju shēma (ievainojama → izzudusi) uz sabiedriskā īpašuma pasaules kontūra — ne etnisks horoplēts un ne otrs Glottolog ģimeņu koks. Citējiet UNESDOC izdevumu.',
    imageAlt:
      'Shēmatiska pasaules karte ar UNESCO atlanta apdraudējuma pakāpju punktiem no ievainojamas (dzeltena) līdz izzudušai (melna) — ne tautu skaitīšana un ne valodu saimju karte',
  },
  'wals-language-structures': {
    title: 'Pasaules valodu struktūru atlants (WALS)',
    hook: 'Valodu strukturālās iezīmes — fonētika, vārdu kārtība, gramatika — no aprakstošām gramatikām. Tipoloģija, ne etniskums un ne ģimeņu koks.',
    description:
      'WALS Online datubāze (MPI EVA). Glottolog = radniecība; WALS = kuras strukturālās iezīmes kur sastopamas. Krāsa iezīmes kartē — kods izlasē, ne «tauta» un ne valsts.',
    whyOnShelf: 'Glottolog = radniecība; WALS = kuras strukturālās iezīmes kur sastopamas.',
    howToRead: 'Krāsa iezīmes kartē — kods izlasē, ne «tauta» un ne valsts.',
    caveats: 'Valodas ≠ tautas ≠ valstis. Krāsa — kods izlasē, ne «tauta» un ne valsts.',
    licenseNote:
      'WALS Online dati ir CC BY 4.0 (Dryer & Haspelmath / Maksa Planka evolūcijas antropoloģijas institūts). Priekšskats pārzīmē iezīmi 1A, līdzskaņu inventāra lielumu (Maddieson), no CLDF laidiena — strukturālās tipoloģijas karte, ne Glottolog saimes un ne UNESCO apdraudējuma punkti.',
    imageAlt:
      'WALS Online karte par līdzskaņu inventāra lielumu: krāsaini punkti valodu atsauces vietās no maza (zils) līdz lielam (sarkans) — tipoloģija, ne etniskums un ne ģimeņu koks',
  },
  'language-areas-asher-moseley': {
    title: 'Valodu areāli (Asher & Moseley)',
    hook: 'Atvērti areālu poligoni no Asher & Moseley atlanta, piesaistīti Glottocode — laukumi, ne Glottolog punkti, un joprojām ne tautu skaitīšana.',
    description: '~6992 poligoni; Glottolog punkti ≠ areāli. Lasīt kā atlanta vispārinājumu, ne suverenitāti un ne «asinis».',
    whyOnShelf: 'Glottolog punkti ≠ areāli.',
    howToRead: 'Lasīt kā atlanta vispārinājumu, ne suverenitāti un ne «asinis».',
    caveats: 'Valodas ≠ tautas ≠ valstis. Lasīt kā atlanta vispārinājumu, ne suverenitāti un ne «asinis».',
    licenseNote:
      'Areālu poligoni no Glottography/asher2007world (CC BY 4.0), digitalizēti no Asher & Moseley un piesaistīti Glottocode; citējiet Ranacher et al., Scientific Data 2025. Priekšskats ir laukumu izlase no tradicionālajām / kontakta laika lapām — ne Glottolog saimju horoplēts un ne tautu skaitīšana.',
    imageAlt:
      'Valodu areālu poligonu izlase, digitalizēta no Asher & Moseley atlanta un piesaistīta Glottocode — laukumi, ne Glottolog punkti un ne tautu skaitīšana',
  },
  'endangered-languages-project': {
    title: 'Endangered Languages Project katalogs',
    hook: 'Dzīvs katalogs un karte apdraudētajām valodām ar resursiem kopienām — cits skats uz apdraudējumu blakus UNESCO 2010 atlantam, ne otrs Glottolog.',
    description:
      'Nepeļņas ELP: katalogs, karte, vitalitāte, resursu bibliotēka. Nejauc ar UNESCO 2010 izdevumu un nelasīt kā etnisko/politisko karti.',
    whyOnShelf: 'Nejauc ar UNESCO 2010 izdevumu.',
    howToRead: 'Nejauc ar UNESCO 2010 izdevumu un nelasīt kā etnisko/politisko karti.',
    caveats: 'Valodas ≠ tautas ≠ valstis. Nelasīt kā etnisko/politisko karti.',
    licenseNote:
      'Endangered Languages Project. Priekšskats ir dzīva kataloga shēma — atšķirīga no UNESCO atlanta pakāpēm un Ethnologue EGIDS punktiem, un ne politiska karte.',
    imageAlt:
      'Shēmatiska apdraudēto valodu kataloga karte Endangered Languages Project krāsās — vitalitātes punkti, ne UNESCO 2010 atlants un ne otrs Glottolog',
  },
  'groundwater-whymap': {
    title: 'Pazemes ūdens resursi (WHYMAP)',
    hook: 'Globālas hidroģeoloģiskās vides un uztures potenciāls no WHYMAP — pazemes ūdeņu pamatkarte, ne Aqueduct stress un ne FAO valstu konti.',
    description:
      'Groundwater Resources of the World karte (BGR + UNESCO). Cits objekts nekā AQUASTAT un Aqueduct. Krāsas = vides tipi un uzture, ne valstu rangs.',
    whyOnShelf: 'Cits objekts nekā AQUASTAT un Aqueduct.',
    howToRead: 'Krāsas = vides tipi un uzture, ne valstu rangs.',
    caveats:
      'Krāsas = vides tipi un uzture, ne valstu rangs. Ne AQUASTAT un ne Aqueduct. Ne IGRAC GGIS.',
    licenseNote:
      'Priekšskats ir Fix Planet pārskats par WHYMAP hidroģeoloģisko vides saimēm (zili nogulumu baseini / zaļi sarežģīti / brūni vietēji-seklie), ne BGR oficiālā karte un ne Aqueduct stresa horoplēts. PDF un shapefile ir WHYMAP lapā. Citējiet BGR un UNESCO / WHYMAP.',
    imageAlt:
      'Pasaules karte ar ziliem nogulumu baseinu plankumiem, zaļām locījumu joslām un brūniem vietējiem seklajiem ūdensnesējiem — hidroģeoloģijas shēma, ne ūdens stress',
  },
  'global-lakes-hydrolakes': {
    title: 'Globālie ezeri (HydroLAKES)',
    hook: 'Krasta poligoni ~1,4 milj. ezeriem un ūdenskrātuvēm ≥10 ha — ezeru inventārs, ne baseini un ne stresa indekss.',
    description:
      'Tā pati HydroSHEDS saime kā HydroBASINS, bet objekts = ezera/ūdenskrātuves krasts. Ne mitrāju karte (GLWD) un ne ūdens kvalitāte.',
    whyOnShelf: 'Tā pati HydroSHEDS saime kā HydroBASINS, bet objekts = ezera/ūdenskrātuves krasts.',
    howToRead: 'Ne mitrāju karte (GLWD) un ne ūdens kvalitāte.',
    caveats:
      'Ne mitrāju karte (GLWD) un ne ūdens kvalitāte. Tilpums un dziļums lielākajai daļai ir modeļa aplēses.',
    licenseNote:
      'Priekšskats ir Fix Planet pārskats par zināmiem ezeru apvidiem, ne HydroSHEDS produkta figūra un ne otra baseinu aizpilde. Lejupielāde ir HydroLAKES lapā. Citējiet Messager et al. 2016.',
    imageAlt:
      'Pasaules karte ar tumši ziliem ezeru un ūdenskrātuvju punktiem zināmos ezeru apvidos — krastu inventārs, ne upju baseini',
  },
  'lakes-wetlands-glwd': {
    title: 'Ezeri un mitrāji (GLWD v2)',
    hook: 'Pasaules iekšzemes ūdeņi 33 ūdenstilpju un mitrāju klasēs — purvi, kūdrāji, periodiski ūdeņi u.c., ne otrs HydroLAKES krastu slānis.',
    description:
      'GLWD v2 (~15″, līdz ~18,2 milj. km²). HydroLAKES = krasti ≥10 ha; GLWD = plašākas mitrāju klases. Ne Ramsar saraksts un ne ūdens stress.',
    whyOnShelf: 'HydroLAKES = krasti ≥10 ha; GLWD = plašākas mitrāju klases.',
    howToRead: 'Ne Ramsar saraksts un ne ūdens stress.',
    caveats: 'Ne Ramsar saraksts un ne ūdens stress. HydroLAKES paliek krastu inventārs.',
    licenseNote:
      'Priekšskats ir Fix Planet pārskats par iekšzemes ūdeņu klasēm (atklāts ūdens, purvs, kūdra, periodisks ūdens), ne HydroSHEDS produkta figūra un ne otrs HydroLAKES krastu slānis. GLWD v2 ir CC BY 4.0 (citējiet Lehner et al. 2025). Produkta lapa ir HydroSHEDS.',
    imageAlt:
      'Pasaules karte ar tirkīza atklātu ūdeni, zaļiem purviem, brūnu kūdru un zeltainu periodisku ūdeni — mitrāju klases, ne ezeru krasti',
  },
  'flood-hazard-aqueduct': {
    title: 'Plūdu risks (Aqueduct Floods)',
    hook: 'Modelēts upju un piekrastes plūdu risks un ekspozīcija — applūšanas risks, ne tas pats bāzes ūdens stress kā Water stress kartītē.',
    description:
      'Atsevišķs WRI rīks no Water Risk Atlas. Bīstamības slāņi bieži bez esošās aizsardzības — ne prognoze «rīt applūdīs». Upe ≠ jūra.',
    whyOnShelf: 'Atsevišķs WRI rīks no Water Risk Atlas.',
    howToRead: 'Bīstamības slāņi bieži bez esošās aizsardzības — ne prognoze «rīt applūdīs». Upe ≠ jūra.',
    caveats:
      'Bīstamības slāņi bieži bez esošās aizsardzības — ne prognoze «rīt applūdīs». Upe ≠ jūra. Ne Aqueduct Water Risk Atlas bāzes ūdens stress.',
    licenseNote:
      'Priekšskats ir Fix Planet pārskats par upju un piekrastes applūšanas apvidiem, ne WRI Floods oficiālā grafika un ne otrs bāzes ūdens stresa horoplēts. Aqueduct dati parasti ir CC BY ar atsauci uz WRI. Interaktīvās kartes ir Aqueduct Floods rīkā.',
    imageAlt:
      'Pasaules karte ar vidēji ziliem upju plūdu koridoriem un spilgti ciāna piekrastes plankumiem — plūdu risks, ne bāzes ūdens stress',
  },
  'intact-forest-landscapes': {
    title: 'Neskartie meža ainavu kompleksi (IFL)',
    hook: 'Potapov / IFL Mapping Team poligoni (2000.–2025. atjauninājumi) — savvaļas meža mozaīkas veselums, nevis Hansen ikgadējie pikseļi un nevis parku robežas.',
    description:
      'Neskartie meža ainavu kompleksi (IFL) ir lielas meža un saistīto ekosistēmu mozaīkas bez attālināti konstatētas rūpnieciskas darbības. IFL komanda (UMD GLAD un partneri) publicē globālos apjomus 2000., 2013., 2016., 2020. un 2025. gadam ar CC BY 4.0. Metode: Potapov et al., Science Advances 2017; pašreizējam apjomam izmanto 2025. slāni. Tas nav FAO land use un nav WDPA.',
    howToRead:
      'Krāsains laukums ir IFL poligons kartes gadā — ne plantācija un ne parka robeža. Zudums starp gadiem ir fragmentācija vai rūpnieciska ielaušanās bijušajā IFL; tas var atšķirties no Hansen vainagu zuduma kopsummām.',
    caveats:
      'IFL ir minimāla izmēra savvaļas klase (apmēram 500 km² mozaīka bez konstatētas rūpnieciskas infrastruktūras), ne visi primārie meži un ne oglekļa krājums. Mežs var būt primārs un tomēr neiekļūt IFL, ja to sašķeļ ceļi vai izcirtumi. Robežas pārvietojas starp atjauninājumu gadiem. Sīku vai vainaga apakšēju izmantošanu satelīts var nepamanīt.',
    licenseNote:
      'GeoPackage ir intactforests.org. Tīmekļa skatītājs ir Greenpeace IFL karte. 2000.–2025. arhīvs ir Zenodo. Atvērtais metodes teksts ir Potapov et al. 2017 PMC. Priekšskats ir Fix Planet lielu savvaļas bloku shēma, ne IFL poligoni.',
    imageAlt:
      'Tumša pasaules karte ar spilgti zaļiem savvaļas meža blokiem Amazōnijā, Kongo baseinā, boreālajā Kanādā un Sibīrijā un Jaungvinejā — neskartas ainavas, ne ikgadējie vainagu zuduma pikseļi',
  },
  'mangrove-extent': {
    title: 'Mangrovju platība',
    hook: 'Global Mangrove Watch — ikgadējā mangrovju platība (v4.1 sērija līdz 2025) — paisuma mežs, nevis iekšzemes Hansen un nevis WDPA parki.',
    description:
      'Global Mangrove Watch (GMW) kartē aplēsto mangrovju mežu platību un tās izmaiņas. Versija 4.1 ir ikgadēja rinda no 1985. līdz 2025. gadam (JAXA Kyoto & Carbon, Aberystwyth University un partneri). Platforma rāda platību, neto izmaiņu un brīdinājumus; rastri un vektori ir Zenodo un JAXA. Tas nav koraļļi un nav aizsargājamās teritorijas.',
    howToRead:
      'Mangrovju pikselis ir GMW klasifikatora paisuma mežs tajā gadā — ne koraļļu rifs, ne sāls purva karte un ne aizsardzības statuss. Salīdzini gadus GMW ietvaros; nesajauc ar Hansen kopsummām.',
    caveats:
      'Mangrovju kartes vājāk darbojas dubļainās malās, akvakultūras dīķos un retā apmalē. Ikgadējā izmaiņa nav tas pats, kas likumīga meža izciršana. Ogleklis un sugas ir atsevišķi produkti tajā pašā platformā. Precizitāte atšķiras pa valstīm un duļķainību. Atjaunošanas stādījumi klasifikatorā var kavēties. Brīdinājumi ir atlase, tad vietējais attēls.',
    licenseNote:
      'GMW slāņus lieto nacionālie paneļi un piekrastes projekti. v4.1 steku ĢIS lejupielādei apraksta JAXA. Priekšskats ir Fix Planet zināmo mangrovju piekrastes shēma, ne GMW rastrs. Karte ir globalmangrovewatch.org.',
    imageAlt:
      'Pasaules karte ar tirkīza paisuma meža apmali gar tropu piekrastēm — mangrovju platība, ne iekšzemes vainagu zudums',
  },
  'primary-humid-tropical-forests': {
    title: 'Primārie mitrie tropu meži',
    hook: 'UMD GLAD 30 m karte — primāro mitro tropu mežu platība 2001. (Turubanova et al.) — primaritātes bāze, nevis Hansen ikgadējie zudumi un nevis IFL izmēra noteikumi.',
    description:
      '2001. bāzes slānis. UMD GLAD kartēja primāros mitros tropu mežus 30 m no Landsat: mežs, kas nebija pilnībā nocirsts ierakstā, ko izmantoja šai bāzei. Kontinentālie GeoTIFF un Earth Engine kolekcija ir publiski. Metode: Turubanova et al., Environmental Research Letters 2018 (DOI 10.1088/1748-9326/aacd1c). Tikai mitrie tropi.',
    howToRead:
      'Pikselis 1 ir primārais mitrais tropu mežs 2001. kartē; 0 ir cita zeme vai ūdens. Zudumus pēc 2001. parasti lasa ar Hansen / Global Forest Watch. 2001. slānis pats nav 2025. platības karte.',
    caveats:
      'Tikai mitrie tropi — ne boreālais primārais mežs un ne sausais mežs. Sekundārais mežs pēc nociršanas ir ārpus 2001. primārās klases. Klasifikācijas kļūdas ir malās un sarežģītās mozaīkās. Plantācijas, kas ierīkotas pirms bāzes loģikas, var jaukt vietējo lasījumu — lasi GLAD piezīmes.',
    licenseNote:
      'Slāņi ir GLAD datu kopas lapā un Google Earth Engine katalogā. Priekšskats ir Fix Planet mitro tropu joslas shēma, ne 30 m GeoTIFF. Citē Turubanova et al. 2018 un UMD GLAD.',
    imageAlt:
      'Pasaules karte ar piesātināti zaļu primāro mitro tropu mežu joslu Amazōnijā, Kongo un Dienvidaustrumāzijā 2001. bāzē — ne boreālais mežs un ne ikgadējais vainagu zudums',
  },
  'forest-landscape-integrity': {
    title: 'Meža ainavu integritātes indekss (FLII)',
    hook: 'Grantham et al. nepārtrauktais mežu integritātes vērtējums (~2019) — antropogēna modificēšana un savienojamība, nevis tikai Hansen un nevis WDPA pārklājums.',
    description:
      'Meža ainavu integritātes indekss (FLII) apvieno meža platību, kartētus cilvēka spiedienus, izsecinātus saistītos spiedienus un savienojamības zudumu nepārtrauktā 0–10 vērtējumā pasaules mežiem (Grantham et al., Nature Communications 2020). Aptuveni 40% atlikušo mežu iekrita autoru ilustratīvajā augstas integritātes joslā; tikai daļa no tās ir aizsargājamās teritorijās.',
    howToRead:
      'Augsts vērtējums nozīmē mazāku modelētu antropogēnu modificēšanu ainavas mērogā — ne „neskarts uz visiem laikiem” un ne oglekļa blīvumu. Zems vērtējums joprojām var būt zem vainaga. FLII nav IFL un nav vainagu zuduma datums. Zema / vidēja / augsta griezumi ir ilustrācija; produkts ir nepārtrauktais vērtējums.',
    caveats:
      'FLII ir modelēts indekss ap 300 m, aptuveni 2019. gada sākumā, ne 2025. gada ikgadējs atjauninājums oriģinālajā rakstā. Tas neaizstāj lauka ekoloģiju un nav pirmiedzīvotāju zemju karte. Vietējie svari var atšķirties no globālā noklusējuma. Medības un pameža degradāciju daļēji izsecina no pieejamības.',
    licenseNote:
      'Raksts ir Nature Communications. Rastri ir Forest Landscape Integrity lejupielādes lapā. Priekšskats ir Fix Planet integritātes joslu shēma, ne autoru rastrs. Citē Grantham et al. 2020.',
    imageAlt:
      'Pasaules karte ar meža integritātes skalu: tumši zaļi attāli masīvi, zelta vidus un oranžs stipri pārveidots mežs — ne vainagu zuduma datums',
  },
};
