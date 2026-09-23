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
};
