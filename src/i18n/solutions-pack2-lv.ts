import type { SolutionCopy } from '../data/solutions';

export const pack2Lv: Record<string, SolutionCopy> = {
  'green-roofs': {
    problemTitle: 'Kaili jumti, kas novelk siltumu un lietu',
    fixTitle: 'Zaļie jumti',
    problem:
      'Parasts jumts novelk lietu kanalizācijā un sakarst saulē. Blīvā pilsētā tas dod lieku noteci un karstumu, kad ielā vairs nav augsnes.',
    fix: 'Stādīts jumts tur substrātu un augus virs hidroizolācijas. GSA uzskaita vairāk nekā 80 federālas ēkas ar zaļajiem jumtiem — ap 2,2 miljoniem kvadrātpēdu — tostarp ASV Krasta apsardzes štābu Vašingtonā (557 000 kv. pēdas). GSA saka, ka stādīts jumts var kalpot divas–trīs reizes ilgāk par kailu membrānu, mazina siltuma salu un pievieno izolāciju. Joprojām vajag nestspēju, drenāžu un kopšanu. Seduma paklājs nav parks un neaizstāj ielas kokus vai kolektorus.',
    imageAlt: 'Skats no gaisa: stādīts jumts ar apļveida takām uz baltas ēkas starp Čikāgas debesskrāpjiem',
  },
  'rain-gardens-bioswales': {
    problemTitle: 'Ielas, kur lietus kļūst par netīru plūdu',
    fixTitle: 'Lietusdārzi un biosvāles',
    problem:
      'Kad zemes gabali un ceļi ir noslēgti, lietus sit pret cietām virsmām un skrien caurulēs, nesdams eļļu, nogulsnes un barības vielas. Kolektori pārplūst; strauti lec.',
    fix: 'EPA uzskata lietusdārzus un biosvāles par zaļās infrastruktūras veidiem. Lietusdārzs ir sekls, apstādīts iedobums, kas savāc noteci no jumtiem un ielām un filtrē to caur augsni, smiltīm vai granti. Biosvāle ir lineārs, apaudzis kanāls, kas palēnina un attīra ūdeni gaitā — noderīgs gar ceļiem. Tie nav dambji. Lielai vētrai joprojām vajag pārliešanu kolektorā. Bez projekta un kopšanas tie aizsērē vai noslīcina augus.',
    imageAlt: 'Ielas biosvāle un apmales paplašinājums ar izgriezumiem, kas uztver noteci pie novietotām automašīnām',
  },
  'cool-pavements': {
    problemTitle: 'Ielas, kas uzkrāj dienas siltumu',
    fixTitle: 'Vēsākie segumi',
    problem:
      'Tumšs asfalts uzsūc sauli un tad silda gaisu un lietusūdeni. EPA min Arizonas izmēģinājumu, kur parasts segums pusdienlaikā sasniedza 152 °F, bet vēsākas virsmas palika 10–16 °F zemākas.',
    fix: 'EPA ar “vēso segumu” apzīmē materiālus, kas atstaro vairāk saules, tur ūdeni iztvaikošanai vai citādi paliek vēsāki par parasto asfaltu. Ietilpst betons un asfalts, pārklājumi un zāles režģi. Oficiālas ASV marķēšanas nav, un komplekts ir mazāk nobriedis nekā vēsie jumti. Gaišāka iela neaizstāj koku ēnu un atšķiras no caurlaidīga seguma, ko klāj galvenokārt drenāžai.',
    imageAlt: 'Ceļu strādnieki ievieto enkura stieņus svaigi ielietā gaišā betona plātnē',
  },
  'district-cooling': {
    problemTitle: 'Katram tornim savi čilleri',
    fixTitle: 'Centrālā dzesēšana',
    problem:
      'Karstos, blīvos kvartālos katrai ēkai bieži ir sava saldēšanas stacija. Tas tērē platību, enerģiju un apkopi iekārtai, kas lielu dienas daļu stāv.',
    fix: 'Rajona dzesēšana gatavo auksto ūdeni centrālā stacijā un sūknē to uz daudzām ēkām. SP Group, Singapūras lielākais operators, vada Marina Bay — ko pati sauc par pasaulē lielāko pazemes dzesēšanas tīklu — bez piegādes pārtraukumiem kopš 2006. gada un 28 ēkām (plāns — 50 līdz 2030.). SP min arī rūpniecības objektus un Tengah, dzīvojamo ciematu ar jumta moduļu čilleriem. Klimata ieguvums atkarīgs no enerģijas un ūdens avota. Aukstā ūdens caurule neattaisno caurlaidīgas ēku čaulas.',
    imageAlt: 'KLCC District Cooling ēka Kualalumpurā naktī, aiz baltās zāles — Petronas torņi',
  },
  'building-renovation-epbd': {
    problemTitle: 'Ēkas, kas visu ziemu zaudē siltumu',
    fixTitle: 'Ēku energorenovācija',
    problem:
      'Eiropas Komisija raksta, ka aptuveni 75% ES ēku ir sliktā energoefektivitātē, bet gada renovācijas temps ir tikai ap 1%. Mājsaimniecības joprojām lielāko enerģijas daļu tērē apkurei, dzesēšanai un karstajam ūdenim.',
    fix: 'Energorenovācija ir izolācija, labāki logi, efektīva apkure vai dzesēšana, atjaunojamie avoti uz vietas un vadība. 2024. gada EPBD pārskatītā redakcija un renovācijas vilnis mērķē šo tempu dubultot. Komisija saka, ka ļoti sliktas ēkas dziļa renovācija var samazināt patēriņu līdz 80%. Sliktākajām nedzīvojamām ēkām ir pakāpeniski minimumi; mājokļiem jāsamazina vidējais patēriņš par 16% līdz 2030. gadam pret 2020. gadu. Pases un vienas pieturas aģentūras ir rīki, ne garantija. Putu slānis bez ventilācijas un siltuma avota, kas atbilst čaulai, ir pusdarbs.',
    imageAlt: 'Veikala fasāde, ietīta minerālvatē termiskās renovācijas laikā',
  },
  'recycled-aggregate-concrete': {
    problemTitle: 'Jauns akmens, kamēr nojaukšanas gružus ved uz izgāztuvi',
    fixTitle: 'Otrreizējais pildvielas materiāls',
    problem:
      'Būvniecības un nojaukšanas atkritumi — augsne, akmens, betons, ķieģelis, keramika — bieži ir Īrijas lielākā atkritumu plūsma. Karjera akmens joprojām pilda ceļus, kamēr gružus ved uz poligonu.',
    fix: 'Īrijas EPA 2023. gadā publicēja nacionālos end-of-waste kritērijus otrreizējām pildvielām. Tīrs šķelts materiāls var iziet no atkritumu režīma un kļūt par preci: vispārējā uzbērumā, ceļos, dzelzceļa balastā un citos nenesošos lietojumos. Publisks reģistrs uzskaita pilnvarotos ražotājus. Kritēriji nepārvērš katru jauktu kaudzi par konstruktīvo betonu. Piesārņojums paliek atkritumi. Gružu pārstrāde nav licence nojaukt ātrāk.',
    imageAlt: 'Atklātas šķelta otrreizējā pildvielas kaudzes materiālu laukumā',
  },
  'geopolymer-binders': {
    problemTitle: 'Saistvielas, kurām jācep kaļķakmens',
    fixTitle: 'Ģeopolimēri un sārmu aktivētas saistvielas',
    problem:
      'Parastajam portlandcementam vajag krāsni, kas kalcinē kaļķakmeni. Šī ķīmija izdala CO₂ vēl pirms degvielas. Pieprasījums pēc betona joprojām mērāms gigatonnās.',
    fix: '2024. gada perspektīva Journal of the American Ceramic Society uzskata ģeopolimērus un sārmu aktivētos materiālus par saistvielām no alumosilikātu prekursoriem — metakaolīns, pelni, sārņi — ar sārmu (retāk skābes) aktivatoru vietā portlandklinkeram. Inženieri bieži lieto nosaukumus vaļīgi. Autori raksta, ka dzīves cikls bieži ir labāks par portlandcementu, bet ne vienmēr — īpaši, ja dominē šķidrais stikls un termiskā cietināšana. Ogļu pelni un domnas sārņi kļūst retāki. Normas, izskalošanās un darba drošība ar stipriem sārmiem joprojām ierobežo ikdienas ieliešanu. Tas nav parastā cementa maiss “viens pret vienu”.',
    imageAlt: 'Divas bļodiņas ar domnas sārņiem: gaišs malta pulveris un rupjāki granulēti sārņi pie lineāla',
  },
  'recycled-aluminium': {
    problemTitle: 'Jauns metāls no rūdas, kad lūžņi jau ir',
    fixTitle: 'Otrreizējais alumīnijs',
    problem:
      'Primārais alumīnijs sākas ar boksītu un energoietilpīgu elektrolīzi. Lūžņus, ko var pārkausēt, joprojām ved uz izgāztuvi vai izved kā jauktus atkritumus.',
    fix: 'International Aluminium Institute raksta, ka alumīniju var pārstrādāt atkārtoti bez īpašību zuduma un ka ap 75% visa jebkad ražotā alumīnija joprojām ir lietošanā. IAI 2019. gada skaitļi: 186 GJ uz tonnu primārajai enerģijai pret 8,3 GJ otrreizējam metālam — ap 95% mazāk. Par 2022. gadu institūts dod 15,1 t CO₂e uz primārā metāla tonnu pret 0,52 otrreizējam (gate-to-gate). Tie ir nozares skaitļi. Pārstrādei joprojām vajag vākšanu, šķirošanu un krāsni. Papildu bundžas nav klimata stratēģija.',
    imageAlt: 'Sarkans konteiners, piepildīts ar lietotām bundžām, kas savāktas metāla pārstrādei',
  },
  'hempcrete-bio-insulation': {
    problemTitle: 'Siltumizolācija, kas sākas kā fosilā putu masa',
    fixTitle: 'Kaņepju šķiedras izolācija un hempkretē',
    problem:
      'Liela daļa ēku izolācijas ir minerālvate vai plastmasas putas. Tās strādā, bet sākas no izrakteņiem vai fosilām izejvielām un gandrīz neizmanto lauksaimniecības šķiedru.',
    fix: 'ISO 24260:2022 nosaka rūpnīcas kaņepju šķiedras paklājus un plātnes ēku siltumizolācijai — izstrādājumus ar vairāk nekā 50% kaņepju šķiedras pēc masas, ar citu dabīgo šķiedru vai bez tās un polimēra atlikumu. Hempkretē (kaņepes–kaļķis) ir radniecīgs, bet cits biokompozīts: spaļi plus kaļķa saistviela, nenesošs pildījums, ne betona karkasa aizstājējs. ISO dokuments ir izstrādājuma specifikācija, ne oglekļa vērtējums. Kaņepju izolācijai joprojām vajag sausas detaļas un konstrukciju, kas nes sienu.',
    imageAlt: 'Hempkretē sienas tuvplāns: gaiša kaļķa saistviela ap īsiem kaņepju spaļiem',
  },
  'cement-ccus': {
    problemTitle: 'Procesa CO₂, ko nevar nodzēst ar degvielas maiņu',
    fixTitle: 'CO₂ uztveršana cementa rūpnīcā (CCUS)',
    problem:
      'Heidelberg Materials atzīmē, ka ap divām trešdaļām cementa krāsns tiešā CO₂ nāk no kaļķakmens kalcinācijas. Tā ir ķīmija, ne tikai deglis. Maisījumi ar mazāku klinkera daļu palīdz; tie nenullē skursteni.',
    fix: 'Uztveršana, transports un uzglabāšana ir uzņēmuma deklarētais ceļš pārējam. Brevikā, Norvēģijā, Heidelberg 2025. gada jūnijā iedarbināja to, ko sauc par pirmo rūpniecisko CCS iekārtu pie cementa rūpnīcas. DREAM Rezzato–Mazzano rūpnīcā Itālijā ir plānots hibrīds uztveršanas projekts (oxyfuel plus amīni), izvēlēts ES Innovation Fund; galīgais investīciju lēmums joprojām atkarīgs no Itālijas CCS noteikumiem, stimuliem un Ravennas uzglabāšanas cauruļvada. Uztveršana nav attaisnojums liet vairāk betona. DREAM ir finansēts projekts, ne darbojošās Itālijas rūpnīca.',
    imageAlt: 'Izolēts gāzes vads un torņi Heidelberg Materials Brevikas cementa oglekļa uztveršanas iekārtā zem pelēkām debesīm',
  },
  'seagrass-restoration': {
    problemTitle: 'Pļavas, kas pazūd pēc aļģu ziedēšanas',
    fixTitle: 'Jūraszāļu atjaunošana',
    problem:
      'Jūraszāles tur nogulsnes, dod patvērumu mazuļiem un baro lamantīnus. NOAA raksta, ka aļģu ziedēšana iznīcināja gandrīz 75% jūraszāļu Floridas Indian River lagūnā no 2011. līdz 2020. gadam.',
    fix: 'NOAA finansē stādīšanu šajā lagūnā kopā ar Indian River apgabalu: ap 13 akriem Big Slough un 10 akriem Preacher’s Hole 2025. gadā, ar būriem pret laivām un dzeloņrajam līdz gadam. Darbinieki mērķē uz 80% ieaugšanu un atzīmē dabisku atjaunošanos daļā nestādīto vietu. Stādīšana ir lēna, atkarīga no dziļuma un iet bojā netīrā ūdenī. Tas nav atļauja turpināt barības vielu izgāšanu.',
    imageAlt: 'Strādnieki seklā Floridas lagūnā stāda jūraszāļu spraudeņus NASA Kennedy projektā',
  },
  'coral-restoration': {
    problemTitle: 'Rifi iet bojā ātrāk, nekā aug',
    fixTitle: 'Koraļļu atjaunošana',
    problem:
      'NOAA raksta, ka pasaule jau zaudējusi 30–50% koraļļu rifu karstuma, paskābināšanās, piesārņojuma, invazīvo sugu un fizisku bojājumu dēļ. Vietējais “dārzs” nepārraksta okeāna ķīmiju.',
    fix: 'Audzētavas audzē fragmentus un izstāda tos ar cementu, saitēm un naglām. NOAA ziņo par vairāk nekā 20 Karību audzētavām, kas gadā dod vairāk nekā 40 000 koraļļu. Mission: Iconic Reefs mērķē pacelt koraļļu segumu septiņās Florida Keys vietās no 2% līdz vidēji 25%. Ārkārtas brigādes piestiprina vētras lauztās kolonijas. Atjaunošana ir vietēja pauze. Tā neaizstāj emisiju, noteces un graujošās zvejas samazināšanu.',
    imageAlt: 'Staghorn koraļļu fragmenti uz NOAA atjaunošanas vietas zemūdens audzētavas “koka”',
  },
  'ghost-gear': {
    problemTitle: 'Tīkli, kas zvejo bez laivas',
    fixTitle: 'Pamesto zvejas rīku savākšana',
    problem:
      'Pamesti, pazaudēti un izmesti zvejas rīki (ALDFG) turpina ķert dzīvniekus un plēst dzīvotnes, kad kuģa vairs nav. Tā ir rīku problēma, ne tikai pudeļu.',
    fix: 'Global Ghost Gear Initiative ir starpnozaru alianse — industrija, valdības, NVO, pētnieki —, kas kartē, ziņo un finansē izcelšanu un novēršanu. North American Net Collection Initiative ir transrobežu projekts ASV rietumos, Meksikā un Kanādā. Tīra pludmale nav zvejniecības reforma. Marķēšana, izcelšanas noteikumi un ostu pieņemšana ir tikpat svarīgi kā niršana pēc tīkliem.',
    imageAlt: 'EPA nirējs Puget Sound paceļ no gultnes pamesta zvejas tīkla masu',
  },
  'kelp-farming': {
    problemTitle: 'Zaudēti kelpu meži un neregulēta raža',
    fixTitle: 'Kelpu meži un aļģu audzēšana',
    problem:
      'Kelpu meži — UNEP tos sauc par plašāko jūras veģetēto ekosistēmu — cieš no sasilšanas, karstuma viļņiem, sliktas ūdens kvalitātes un neregulētas ražas. Piekrastes zveja un krasts zaudē karkasu.',
    fix: 'UNEP 2023. gada kopsavilkums Into the Blue pārskata zinātni un pārvaldību: sargāt un atjaunot savvaļas mežus un uzskatīt ražu par darbību, kurai vajag krājumu novērtējumu un adaptīvus noteikumus. Aļģu un kelpu fermas ir radniecīga, augoša tās pašas aļģes izmantošana, ne savvaļas meža aizstājējs. Fermām vajag vietu, bioloģisko drošību un vietējās sugas. Kelpu aukla nav kompensācija par izcirstu rifu.',
    imageAlt: 'Satelīta skats uz taisnstūrveida aļģu fermu laukiem pie Dienvidkorejas salām',
  },
  'salt-marsh-restoration': {
    problemTitle: 'Pāraktas, apvaļotas un grimstošas sāls purvu pļavas',
    fixTitle: 'Sāls purvu atjaunošana',
    problem:
      'Atlantijas sāls purvi bremzē vētras, filtrē ūdeni un tur kūdru. Tos raka laukiem un odiem, un tagad tos pārklāj jūras līmeņa kāpums. Sāls purva zvirbulis ligzdo tikai šeit un zaudē vietu.',
    fix: 'U.S. Fish and Wildlife Service Salt Marsh Keystone iniciatīva (izsludināta 2024. gadā) koordinē atjaunošanu gar Atlantijas krastu, balstoties uz darbiem pēc viesuļvētras Sandija: runneļi stāvoša ūdens novadīšanai, veco grāvju nojaukšana un purvu izlīdzināšana. FWS raksta, ka veselīga purva kūdra var uzkrāt oglekli daudz ātrāk nekā sauszemes meži — “līdz 50 reizēm”, tā ir Dienesta formulējums. Runnelis ir vietēja hidroloģija, ne viļņlauzis, un tas neapsteigs jūras kāpumu, ja iekšzemi norobežo siena.',
    imageAlt: 'Ekskavators strādā paisuma kanālā Spartina pļavā Seatuck nacionālajā savvaļas dzīvnieku patvērumā',
  },
  'utility-scale-solar': {
    problemTitle: 'Dienas jaudu joprojām dedzina no kurināmā',
    fixTitle: 'Tīkla mēroga saules PV',
    problem:
      'Tīkli joprojām lielu daļu pusdienlaika un pēcpusdienas pieprasījuma sedz ar fosilajām stacijām. Jumti palīdz mājsaimniecībām; paši par sevi tie neaizstāj elektrostaciju.',
    fix: 'Tīkla fotovoltāžas stacijas ir moduļu lauki, kas baro apakšstaciju. IEA saules PV apskats uzskata PV par pamata ģenerācijas tehnoloģiju — no maziem masīviem līdz gigavatu stacijām. Tempu nosaka zeme, atļaujas un rindas uz pieslēgumu. Tuksneša masīvam joprojām vajag līniju, uzkrāšanu vai elastīgu rezervi un plānu zemei. Tas nav jumta mikrotīkls.',
    imageAlt: 'Satelīta skats uz Topaz Solar Farm: tumši taisnstūra masīvi Kalifornijas ielejā',
  },
  'offshore-wind': {
    problemTitle: 'Spēcīgs vējš virs ūdens, neizmantots',
    fixTitle: 'Jūras vējš',
    problem:
      'Sauszemes vēju ierobežo zeme, kaimiņi un vājāks piekrastes vējš. Labāks resurss bieži slēpjas virs jūras, tālāk no cilvēkiem un tuvāk daļai piekrastes pieprasījuma.',
    fix: 'IEA Offshore Wind Outlook 2019 nosauca tehnoloģiju par strauji nobriestošu. 2018. gadā tā deva tikai niecīgu daļu pasaules elektrības; IEA Stated Policies ceļš toreiz redzēja jaudas pieaugumu ap piecpadsmit reizēm līdz 2040. gadam un aptuveni 1 triljona dolāru ieguldījumu klasi — lielāku turbīnu un peldošu pamatu dēļ. Fermām joprojām vajag ostas, kuģus un sauszemes tīkla pastiprinājumus. Peldošās iekārtas ir jaunākas nekā Ziemeļjūras pāļi. Jūras vējš nav iemesls izlaist jau strādājošas sauszemes vietas.',
    imageAlt: 'Līkumota jūras vēja turbīnu rinda Middelgrundenā Eresundā, horizontā Kopenhāgena',
  },
  'grid-scale-batteries': {
    problemTitle: 'Lieka saule pusdienlaikā, trūkums pēc tumsas',
    fixTitle: 'Tīkla baterijas',
    problem:
      'Vēja un saules izstrāde neseko vakara pīķim. Bez uzkrāšanas vai elastīgām stacijām tīkli griež pusdienlaika jaudu un iedarbina gāzi pēc saulrieta.',
    fix: 'IEA darbs par tīkla uzkrāšanu uzskata tīkla baterijas par īslaicīgu elastību: tās pārbīda enerģiju stundās, dod ātru balansu un var atvieglot daļu tīkla pastiprinājumu. IEA Electricity 2026 ziņo par 63 GW tīkla bateriju pieaugumu 2024. gadā un 124 GW uzstādīto, un projektu izmaksas tajā gadā kritās ap 40% līdz ap 150 USD/kWh — tie ir IEA skaitļi. Baterijas nav sezonāla uzkrāšana. Ilgums, minerāli un pieslēgums joprojām saista. Šūnu konteiners nav sūknēšanas hidroakumulācijas ezers.',
    imageAlt: 'Skats no augšas uz Tehachapi Energy Storage Project: baltas bateriju zāles pie Kalifornijas apakšstacijas',
  },
  geothermal: {
    problemTitle: 'Siltums zem kājām, ko lieto tikai dažās valstīs',
    fixTitle: 'Ģeotermālais siltums un elektrība',
    problem:
      'Parastā ģeotermija joprojām ir niša. IEA saka, ka tā sedz mazāk par 1% pasaules enerģijas pieprasījuma un koncentrējas vietās ar vulkānisku vai lūzumu siltumu — ASV, Islande, Indonēzija, Turcija, Kenija un Itālija.',
    fix: 'IEA 2024. gada ziņojums The Future of Geothermal Energy un aģentūras ziņa atzīmē, ka horizontālā urbšana un plaisāšana no naftas un gāzes varētu atvērt dziļāku siltumu daudzās valstīs. IEA saka, ka nākamās paaudzes ģeotermija varētu segt 15% pasaules elektrības pieprasījuma pieauguma līdz 2050. gadam, ja izmaksas turpinās krist — līdz 800 GW šajā rāmī — un ka parastās stacijas jau dod bāzes jaudu un siltumtīklus tur, kur resurss ir viegls. Nākamās paaudzes projekti ir agri un kapitālietilpīgi. Tvaika lauks nav atļauja ignorēt izraisīto seismiskumu vai ūdens patēriņu.',
    imageAlt: 'Nesjavellir ģeotermālā stacija Islandē: tvaika caurules un zāles uz sūnu klāta lavas lauka pie ezera',
  },
  'pumped-hydro': {
    problemTitle: 'Nav kur likt lieko elektrību naktij',
    fixTitle: 'Sūknēšanas hidroakumulācija',
    problem:
      'Baterijas sedz stundas. Tīkliem ar daudz vēja un saules vajag arī garāku, lētāku tilpuma uzkrāšanu. Maz tehnoloģiju pārvieto tik daudz enerģijas.',
    fix: 'Sūknēšanas stacija paceļ ūdeni augšējā baseinā un laiž to lejā caur turbīnām, kad jaudas trūkst. IEA Hydropower Special Market Report sauc ūdenskrātuvju un sūknēšanas staciju elastību par nepārspētu un prognozē sūknēšanu kā 30% no tīrā hidropieauguma līdz 2030. gadam. IEA lēsa, ka esošās parastās ūdenskrātuves var uzkrāt ap 1500 TWh vienā ciklā — daudz vairāk enerģijas nekā šodienas sūknēšanas parks vai baterijas. Jaunām stacijām vajag divus baseinus, gadu atļaujas un tirgu, kas maksā par uzkrāšanu, ne tikai kilovatstundām. Sūknēšana nav jauna upe.',
    imageAlt: 'Bath County sūknēšanas stacijas ar kokiem apaugušais augšējais baseins kalnu bļodā',
  },
};
