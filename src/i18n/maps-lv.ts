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
};
