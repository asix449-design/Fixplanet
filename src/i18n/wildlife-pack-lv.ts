import type { SpeciesCopy } from '../data/wildlife';
import { domesticatesLv } from './wildlife-domesticates';

export const packLv: Record<string, SpeciesCopy> = {
  'european-bison': {
    commonName: 'Eiropas bizons (zubr)',
    hook: 'Iznīcināts savvaļā 20. gadsimta sākumā, pēc tam atjaunots — brīvi dzīvojošie ganāmpulki pieauga no aptuveni 1800 dzīvniekiem 2003. gadā līdz 6244 47 apakšpopulācijās līdz 2019. gadam; IUCN pārcēla no Vulnerable uz Near Threatened.',
    imageAlt: 'Eiropas bizona bullis stāv rudens mežā',
    what: 'Eiropas lielākais sauszemes zīdītājs — savvaļas radinieks Amerikas bizonam, cita suga. Līnijas glābtas zoodārzos, pēc tam izlaistas mežos no 1950. gadiem.',
    range:
      'Eiropa. Līdz 2019. gadam brīvi dzīvojošie dzīvnieki atkal bija mežos, 47 apakšpopulācijās. Tikai aptuveni astoņi ganāmpulki ir pietiekami lieli ilgtermiņa ģenētiskai dzīvotspējai; vairums ganāmpulku paliek mazi un pārsvarā izolēti.',
    story:
      'Tā ir pārvaldīta atgriešanās pēc tam, kad cilvēki iztukšoja areālu: vairošana nebrīvē, reintrodukcijas un pastāvīga ganāmpulku pārvaldība. Joprojām atkarīgs no aizsardzības (mazi, izolēti ganāmpulki), ne neapdraudēts bums kā mežacūkai — bet atkal ainavā.',
    when: 'IUCN (2020. gada novērtējums): brīvi dzīvojošā populācija ~1800 (2003) → 6244 (2019) 47 ganāmpulkos. Statuss: Near Threatened, pārcelts no Vulnerable. Vēlāka Oryx piezīme minēja aptuveni 6800 brīvi dzīvojošus līdz 2020. gadam, kamēr plānošana turpinājās.',
    humanRole:
      'Cilvēki nošāva pēdējos savvaļas dzīvniekus. Vairošana nebrīvē, izlaišana mežos no 1950. gadiem un pastāvīga ganāmpulku pārvaldība atgrieza brīvi dzīvojošos ganāmpulkus.',
    sources:
      'IUCN Sarkanais saraksts (Bison bonasus, Near Threatened, 2020); IUCN ziņa, 2020. gada 10. dec.; Oryx piezīme par areāla mēroga rīcības plānu.',
  },
  'north-american-beaver': {
    commonName: 'Ziemeļamerikas bebrs',
    hook: 'Ap 1900. gadu gandrīz izdzēsts lielā daļā areāla filca cepurēm; regulēta medniecība un reintrodukcijas atjaunoja kontinentālu atslēgas sugu — IUCN: Least Concern, mūsdienu novērtējumi bieži ~10–15 milj.',
    imageAlt: 'Ziemeļamerikas bebrs sēž uz baļķa dīķa malā',
    what: 'Jaunās pasaules dambju būvētājs — tā pati ģimene kā dzīvais Eiropas bebrs, cita suga. Pārveido upītes par mitrājiem, kas tur ūdeni, uzkrāj oglekli dīķos un baro citu dzīvnieku.',
    range:
      'Atkal kontinentāla atslēgas suga tur, kur palikusi dzīvotne, pēc gandrīz pilnīgas izdzēšanas lielā daļā areāla. Nejauc ar Castor fiber.',
    story:
      'Cilvēki medībās to noveda līdz vietējai izzušanai kažokādas dēļ, pēc tam atveda atpakaļ. Kur daudz — konflikts ar lauksaimniecību un ceļu caurtekām. Klasisks izdzīvojušo stāsts „vēl šeit, tad bums”, ne Endangered retums.',
    when: 'Ap 1900. gadu bebri bija gandrīz pazuduši no daudzām sākotnējām dzīvotnēm. USDA Forest Service 2. reģiona novērtējums: ieguves noteikumi, mitrāju aizsardzība, pārvietošana un dabiska izplatīšanās atjaunoja populācijas tur, kur dzīvotne palika. Mūsdienu kopsummas bieži vērtē desmitos miljonu (bieži ~10–15 milj.). Stanford kopsavilkums par nesenu kartēšanu min kritumu no aptuveniem pirmskoloniālajiem minējumiem 60–400 milj. līdz aptuveni 10–15 milj. šodien — vēsturisko griestu uzskatīt par nenoteiktu; virziens (sabrukums → atkal miljoni) ir stingrs. IUCN: Least Concern.',
    humanRole:
      'Kažokādu tirdzniecība filca cepurēm to gandrīz izdzēsa. Regulēta medniecība un gadsimta vidus reintrodukcijas to atjaunoja.',
    sources:
      'IUCN Sarkanais saraksts (Castor canadensis, Least Concern); Animal Diversity Web; USDA Forest Service 2. reģiona novērtējums; Stanford Report, 2025. gada 11. aug.; Communications Earth & Environment (doi:10.1038/s43247-025-02572-y).',
  },
  'bald-eagle': {
    commonName: 'Baltgalvas ērglis',
    hook: '1963. gadā ASV apakšējos 48 štatos palika 417 zināmu ligzdošanas pāru; pēc DDT aizlieguma un ESA darba USFWS saskaitīja aptuveni 316\u202f700 indivīdu un 71\u202f467 aizņemtas ligzdas 2018.–2019. gadā.',
    imageAlt: 'Pieaudzis baltgalvas ērglis lidojumā virs ūdens: balta galva un aste',
    what: 'Ziemeļamerikas zivju ērglis un ASV nacionālais simbols — vienīgais ērglis, kas dzimts tikai šim kontinentam. Pieaugušajiem ir balta galva un aste; jaunāki putni gadiem paliek raibi brūni.',
    range:
      'Ziemeļamerika. Galvenie atjaunošanas skaitļi ir apakšējo 48 štatu stāsts. Aļasku ESA tāpat neiekļāva.',
    story:
      'Šaušana un DDT plānināja olu čaumalas, līdz putns gandrīz pazuda no ASV blakus štatiem. Likuma aizsardzība, darbs pie ligzdām un DDT aizliegums ASV 1972. gadā apgrieza krahu. Noņemts no ESA 2007. gadā; joprojām aizsargāts ar Baltgalvas un zelta ērgļa aizsardzības likumu un gājputnu līguma likumu.',
    when: 'USFWS: 417 zināmi ligzdošanas pāri apakšējos 48 štatos 1963. gadā → 9789 pāri 2007. gada izņemšanā no saraksta → aptuveni 316\u202f700 indivīdu un 71\u202f467 aizņemtas ligzdas (2018.–2019. gada dati). IUCN: Least Concern.',
    humanRole:
      'Šaušana un DDT izraisīja krahu. 1972. gada DDT aizliegums, ESA darbs un ligzdu aizsardzība to apgrieza.',
    sources:
      'USFWS sugas lapa; USFWS Bald Eagle Population Size: 2020 Update; izņemšanas noteikums, Federal Register, 2007.',
  },
  'white-rhinoceros': {
    commonName: 'Baltais degunradzis',
    hook: 'Dienvidu baltos degunradžus pirms gadsimta novadīja līdz vienam patvērumam Dienvidāfrikā; IUCN/TRAFFIC 2024. gada beigās novērtē Āfrikas baltos aptuveni 15\u202f752 — Near Threatened, joprojām galvenais dzīvais krājums.',
    imageAlt: 'Dienvidu baltais degunradzis ar mazuli ganībās; redzama platā kvadrātveida lūpa',
    what: 'Platiņā degunradža zālēdājs savannā. Divas pasugas: dienvidu (atjaunošana) un ziemeļu (funkcionāli izmirusi savvaļā — jau Endangered plauktā). Gandrīz visi dzīvie baltie degunradži ir dienvidu pasuga (C. s. simum).',
    range:
      'Āfrikas savanna. Dienvidu baltos pirms gadsimta novadīja līdz vienam patvērumam Dienvidāfrikā. Ziemeļu pasuga nav šīs kartītes varonis.',
    story:
      'Aizsardzība un pārvietošana no Hluhluwe–iMfolozi atjaunoja dienvidu skaitu no niecīga atlikuma līdz desmitiem tūkstošu. Tā ir izdzīvojušo atgriešanās. Tas nav tas pats stāsts kā kritiski apdraudētajiem melnajam, Javas vai Sumatras degunradzim, un tā nav ziemeļu baltā atlieka.',
    when: 'IUCN paziņojums presei (2025. gada 7. aug., atsaukdamies uz AfRSG/TRAFFIC CITES ziņojumu): 15\u202f752 baltie degunradži Āfrikā 2024. gada beigās (mīnus 11,2% pret 2023 — sausums, uzskaite un pārvaldības satricinājumi pēc agrākiem pieaugumiem). IRF kopsavilkumi joprojām tur garo loku: „mazāk nekā 100 1900. gadu sākumā → desmitiem tūkstošu”. IUCN Sarkanais saraksts: Near Threatened.',
    humanRole:
      'Medības noveda dienvidu pasugu līdz vienam patvērumam. Aizsardzība un pārvietošana atjaunoja dzīvo krājumu.',
    sources:
      'IUCN Sarkanais saraksts (Ceratotherium simum, Near Threatened); IUCN paziņojums presei, 2025. gada 7. aug.; International Rhino Foundation; AfRSG priekšsēdētāja ziņojums Pachyderm; Dienvidāfrikas bioloģiskās daudzveidības pārvaldības plāns.',
  },
  'arabian-oryx': {
    commonName: 'Arābijas orikss',
    hook: '1970. gadu sākumā atzīts par izzudušu savvaļā, pēc tam atgriezts no zoodārziem; līdz IUCN 2016. gada novērtējumam savvaļā atkal aptuveni 1220 (850 pieaugušie) — pirmā suga, kas atgriezās no Extinct in the Wild uz Vulnerable.',
    imageAlt: 'Arābijas orikss tuksneša krūmājā Uruk Bani Maaridas rezervātā Saūda Arābijā',
    what: 'Balta tuksneša antilope ar gariem, gandrīz taisniem ragiem — mazākais Oryx, dzimts Arābijas pussalas tuksnešiem un stepēm.',
    range:
      'Arābijas pussalas tuksneši un stepes. Izlaišanas no 1980. gada atgrieza dzīvniekus Omānā, Saūda Arābijā, Izraēlā, AAE, Jordānijā un radniecīgās vietās.',
    story:
      'Motorizēta medniecība iztukšoja ganāmpulkus. Vairošana nebrīvē un izlaišanas no 1980. gada atgrieza dzīvniekus no zoodārziem. Joprojām apdraudēta (dzīvotne, nelikumīgas medības, mazi savvaļas kopējie) — bet dokumentēta atgriešanās no Extinct in the Wild, ne CR bez atjaunošanas ceļa.',
    when: '1970. gadu sākumā atzīts par izzudušu savvaļā. IUCN SSC Antelope Specialist Group faktu lapa (2016. gada novērtējums): aptuveni 1220 savvaļā (850 pieaugušie) un 6000–7000 nebrīvē. Statuss: Vulnerable — pirmā suga, kas atgriezās no Extinct in the Wild uz Vulnerable. IUCN ziņa (2011) fiksēja soli uz leju no augstākas apdraudējuma kategorijas. Royal Society Open Science (2021) aplūko Omānas reintrodukcijas ģenētiku.',
    humanRole:
      'Motorizēta medniecība iztukšoja pēdējos savvaļas ganāmpulkus. Vairošana nebrīvē un izlaišanas no 1980. gada sugu atgrieza.',
    sources:
      'IUCN Sarkanais saraksts (Oryx leucoryx, Vulnerable); IUCN, „A grain of hope in the desert” (2011); IUCN SSC Antelope Specialist Group faktu lapa; Royal Society Open Science, 2021.',
  },
  'lord-howe-island-stick-insect': {
    commonName: 'Lordhauas kociņš',
    hook: 'Uzskatīts par izmirstu Lordhauā pēc žurkām 1918. gadā — sīka savvaļas populācija turas Bolla piramīdā.',
    imageAlt: 'Tumšs, smags Lordhauas kociņš uz atvērtas plaukstas',
    what: 'Lordhauas kociņš (Dryococelus australis), saukts arī par koku omāru, ir liels, nelidojošs kociņš, kas kādreiz bija parasts Lordhauas salā. IUCN to vērtē kā kritiski apdraudētu pēc D kritērija — ļoti maza savvaļas populācija.',
    range:
      'Lordhauas sala, līdz melnās žurkas ienāca ar SS Makambo vraku 1918. gadā. Savvaļas atlikums dzīvo Bolla piramīdā, klinšu stabu ap 23 km uz dienvidaustrumiem. Ir arī apdrošināšanas kolonijas nebrīvē.',
    story:
      'Pēc 1918. gada kukainis izzuda no Lordhauas un tika ierakstīts kā izmirsts. 2001. gadā kāpēji atrada dažus dzīvniekus zem viena krūma Bolla piramīdā. Pēc tam sākās audzēšana nebrīvē. Savvaļas skaits joprojām ir sīks; cēlonis bija žurkas, ne klimats.',
    when: 'Kritiski apdraudēts tagad (IUCN CR D). Izmirsts pašā Lordhauā; dzīvo Bolla piramīdā un nebrīvē.',
    humanRole:
      'Nejaušs žurku iebrukums izdzēsa salas populāciju. Vēlāk cilvēki atrada atlikumu un tur nebrīves krājumu.',
    sources: 'IUCN Sarkanais saraksts (Dryococelus australis, CR D).',
  },
  'queen-alexandras-birdwing': {
    commonName: 'Aleksandras karalienes putnspārnis',
    hook: 'Pasaulē lielākais tauriņš — Papua-Jaungvinejas endēms eļļas palmu, ciršanas un tirdzniecības spiedienā.',
    imageAlt:
      'Izplests Aleksandras karalienes putnspārņa tēviņš, zaļi-melni spārni — Dabas vēstures muzeja eksemplārs',
    what: 'Aleksandras karalienes putnspārnis (Ornithoptera alexandrae) ir pasaulē lielākais tauriņš. Mātītes spārnu platums var pārsniegt 25 cm. Endēms nelielai Papua-Jaungvinejas daļai. IUCN: apdraudēts.',
    range:
      'Līdzenumu lietusmežs Oro provincē Papua-Jaungvinejā, kur joprojām aug kāpura barības augs (cirkene Pararistolochia). Citas valsts nav.',
    story:
      'Eļļas palmu plantācijas, ciršana un vākšana tirdzniecībai sagrieza mežu, kas tam vajadzīgs. Suga ir likumiski aizsargāta; ilgstošais spiediens ir meža pārvēršana. Liels spārnu platums nedod lielu areālu.',
    when: 'Apdraudēts tagad. Endēms, un mežs joprojām zūd.',
    humanRole: 'Līdzenumu meža pārvēršana un slavenā tauriņa kolekcionāru tirgus.',
    sources: 'IUCN Sarkanais saraksts (Ornithoptera alexandrae, EN).',
  },
  monarch: {
    commonName: 'Monarhs',
    hook: '2023. gadā IUCN pārcēla migrējošo pasugu no apdraudētas uz ievainojamu — modeļa maiņa, ne atveseļošanās.',
    imageAlt: 'Monarhs ar oranži-melniem spārniem uz zieda',
    what: 'Monarhs (Danaus plexippus) ir tauriņš, kas saistīts ar asklēpiju. Ziemeļamerikas migrējošā pasuga plexippus ir slavenais daudzpaaudžu migrants. Novērtējumā 2023-1 IUCN šo pasugu pārcēla no Endangered uz Vulnerable. Pārbīde ir novērtējuma modeļa maiņa, ne pierādījums, ka migrācija ir atveseļojusies. ASV Zivju un savvaļas dienesta iekļaušanas process joprojām iet.',
    range:
      'Migrējošā pasuga vairojas lielā daļā Ziemeļamerikas un ziemo Meksikā un Kalifornijā. Citas, galvenokārt nemigrējošas, populācijas dzīvo salās un Amerikas tropos. Šī kartīte ir par migrentu.',
    story:
      'Ziemošanas kopas Meksikā un Kalifornijā sašaurinājās 20. gadsimta beigās un 21. sākumā, kad zuda asklēpija un ziemas mežs un ekstrēmi laikapstākļi sita naktsvietas. IUCN statusa pazemināšana 2023. gadā neapgalvoja, ka ceļš ir vesels. Tā mainīja, kā skaita mazu, svārstīgu skaitu. USFWS savu lēmumu vēl nav beidzis.',
    when: 'Migrējošā pasuga: IUCN Vulnerable (2023-1), iepriekš Endangered. USFWS iekļaušana joprojām atvērta.',
    humanRole:
      'Dzīvotņu zudums, pesticīdi un mainīts klimats migrācijā, kas jau bija atkarīga no dažiem ziemas birzīm.',
    sources:
      'IUCN Sarkanais saraksts (Danaus plexippus plexippus, VU 2023-1; sugas lapa); USFWS monarha lapa.',
  },
  'franklins-bumble-bee': {
    commonName: 'Franklina kamene',
    hook: 'Kamene ar sīku Oregonas–Kalifornijas areālu, kas sabruka 1990.–2000. gados.',
    imageAlt: 'Franklina kamene uz zieda, dzeltenmelna — USDA foto',
    what: 'Franklina kamene (Bombus franklini) ir kamene ar vienu no mazākajiem areāliem ģintī Bombus — sloksne dienvidu Oregonā un ziemeļu Kalifornijā. IUCN: kritiski apdraudēta. Uzskaites no 1990. gadiem līdz 2000. gadiem dokumentēja sabrukumu.',
    range:
      'Īss Klamatas–Siskijū posms, vēsturiski no dienvidu Oregonas uz ziemeļu Kaliforniju. Tā nekad nebija kontinenta bite.',
    story:
      'Speciālistiem tā bija vietēji pazīstama, tad ap desmit gadiem kļuva izzūdoši reta. Parastie aizdomās turamie ir slimību pārnese no turētām bitēm, dzīvotņu zudums un mazais areāls; pēdējo plaši pieņemto novērojumu ir maz. Areāls vienmēr bija īsa Oregonas–Kalifornijas sloksne — ne aizstājēja visām krītošajām Bombus.',
    when: 'Kritiski apdraudēta tagad. Areāls vienmēr bija sīks; skaits sabruka nesen.',
    humanRole:
      'Mazs endēms areāls plus tas, ko pievienoja cilvēki — patogēni, saimniecības un mainīta ainava.',
    sources: 'IUCN Sarkanais saraksts (Bombus franklini, CR).',
  },
  'american-burying-beetle': {
    commonName: 'Amerikas kapsētājvabole',
    hook: 'Maitas speciālists ar ASV atlieku populācijām, iekļauts Endangered Species Act sarakstā.',
    imageAlt: 'Amerikas kapsētājvabole, oranžmelna, uz gaišas zemes',
    what: 'Amerikas kapsētājvabole (Nicrophorus americanus) ir maitas speciālists: pieaugušie aprok sīkus mugurkaulnieku liemeņus kā barību kāpuriem. Tā ir ASV Endangered Species Act sarakstā. Atlieku populācijas turas dažos štatos. Šī kartīte neizgudro globālu IUCN vērtējumu — pakā nav IUCN sluga.',
    range:
      'Kādreiz liela daļa austrumu un vidējo ASV. Šodien izklaidus atliekas (tostarp Lielajos līdzenumos un Jaunanglijā) un reintrodukcijas vietas. Tā nav Eirāzijas kapsētājvabole.',
    story:
      'Kad mežus un prērijas pārvērta un maitas kļuva mazāk vai toksiskas, vabole izzuda no lielākās daļas kādreizējās kartes. ESA iekļaušana, audzēšana un izlaišana uzturēja dažas populācijas uzskaites grāmatās. Atjaunošanās ir vietēja, ne atgriezts kontinents.',
    when: 'Federālais saraksts ASV. Tikai atlieku un pārvaldītas populācijas.',
    humanRole: 'Zemes pārvēršana un retināts maitas krājums; vēlāk likums un izlaišanas uzturēja atlikumu.',
    sources: 'ASV Zivju un savvaļas dienesta sugas lapa (Nicrophorus americanus).',
  },
  'hines-emerald': {
    commonName: 'Haina smaragdspāre',
    hook: 'Kaļķaino avoksnāju spāre ASV Vidējos Rietumos — federāli iekļauta, atkarīga no gruntsūdeņiem.',
    imageAlt: 'Haina smaragdspāre ar metāliski zaļu krūti, sēž',
    what: 'Haina smaragdspāre (Somatochlora hineana) ir kaļķaino fen spāre — gruntsūdeņu baroti mitrāji uz kaļķakmens vai dolomīta — ASV Vidējos Rietumos. Tā ir federāli iekļauta Endangered Species Act. Pakā nav globāla IUCN sluga; kartīte to neizgudro.',
    range:
      'Izklaidus fen Vidējos Rietumos, vēsturiski daļas Ilinoisas, Viskonsinas, Mičiganas, Misūri un kaimiņu štatu. Kāpuriem vajag šo avoksnāju vēso, minerālbagāto ūdeni.',
    story:
      'Fen nosusināja, raka karjeros vai nogrieza no gruntsūdeņiem. Spāre, kas neizmanto saimniecības dīķi, izzūd kopā ar fen. Iekļaušana un avoksnāju aizsardzība ir atlikušie rīki. Tā nav katra apgabala dīķa spāre.',
    when: 'Federālais saraksts ASV. Piesaistīta retam mitrāja veidam.',
    humanRole: 'Kaļķaino fen nosusināšana, karjeri un apbūve — vienīgā sugas dzīvotne.',
    sources: 'ASV Zivju un savvaļas dienesta sugas lapa (Somatochlora hineana).',
  },
  'rusty-patched-bumble-bee': {
    commonName: 'Rūsganā plankuma kamene',
    hook: 'Kādreiz parasta ASV austrumos un Kanādas dienvidos; pēc strauja sabrukuma 2000. gadu sākumā iekļauta Endangered Species Act 2017. gadā, un jaunākie atradumi aptver tikai aptuveni 13 ASV štatus un vienu Kanādas provinci.',
    imageAlt: 'Rūsganā plankuma kamene uz violetas bergamotes, ar rūsganu plankumu uz vēdera',
    what: 'Viena no aptuveni 21 ASV austrumu kameņu sugām — putekšņus uzkrājoša sociāla bite, kuras darba bitēm uz vēdera ir raksturīgs rūsganais plankums (no tā nosaukums). Tā ir Bombus affinis, ne Franklina kamene (Bombus franklini).',
    range:
      'Vēsturiskais areāls no Džordžijas ziemeļos līdz dienvidu Kvebekai un Ontārio un rietumos uz Dakotām. Kopš aptuveni 2000. gada ASV Zivju un savvaļas dienesta pārskats to apstiprina daudz mazākā skaitā vienību: aptuveni 13 ASV štatos un vienā Kanādas provincē.',
    story:
      'Patogēni, pesticīdi, dzīvotņu zudums, konkurence ar turētām bitēm un klimata stress sakrājās areāla sabrukumā. Franklina kamene ir cita suga ar sīku Oregonas–Kalifornijas areālu. Šī kamene kādreiz bija parasta kontinenta austrumu pusē.',
    when: 'ASV Zivju un savvaļas dienests: federāli Endangered (2017); atjaunošanas plāns pabeigts 2021. gadā. Jaunākie atradumi aptver aptuveni 13 ASV štatus un vienu Kanādas provinci.',
    humanRole:
      'Pesticīdi, patogēni no turētām bitēm, zaudētas dzīvotnes un mainīts klimats samazināja kādreiz parasto austrumu kameni līdz daļai no kartes. 2017. gada Endangered Species Act iekļaušana un 2021. gada atjaunošanas plāns ir federālā atbilde.',
    sources: 'ASV Zivju un savvaļas dienests — rūsganā plankuma kamene (Bombus affinis).',
  },
  'european-stag-beetle': {
    commonName: 'Briežvabole',
    hook: 'Eiropas lielākā vabole un Dzīvotņu direktīvas karogs pūstošai platlapju koksnei — IUCN 2023. gada Eiropas / EU27 novērtējums to vērtē kā Near Threatened, jo vairošanās vietas turpina sarukt, pat ja pilsoņu zinātnes atradumu kļūst vairāk.',
    imageAlt: 'Briežvaboles tēviņš ar lielām ragu žokļu daļām uz zaļas lapas',
    what: 'Liela briežvabole (Lucanus cervus), kuras kāpuri gadus pavada mitrā, trūdošā platlapju koksnē — celmos, apraktās saknēs, vecos kokos. Tēviņiem ir slavenie „ragi”; mātītēm to nav. Tā ir mirušās koksnes speciāliste, ne maitas vabole.',
    range:
      'Eiropa. Vairošanai vajag nepārtrauktu mitru, trūdošu platlapju koksni. Pieaugušie klejo, tāpēc novērojums nav tas pats, kas vairošanās celms.',
    story:
      'Pieaugoši pilsoņu zinātnes atradumi nenozīmē vairāk vairošanās vietu — daudzi novērojumi ir klejotāji. Sarkanais saraksts par īsto signālu uzskata turpinātu mirušās koksnes nepārtrauktības zudumu. Dzīvotņu direktīvas 17. panta ziņojumi secīgos ciklos rādījuši nelabvēlīgu stāvokli ievērojamā daļā dalībvalstu.',
    when: 'IUCN Eiropa / EU27 (2023): Near Threatened pēc B2b(ii,iii). Kāpuru attīstība parasti ilgst 4–5 gadus, tāpēc robs mirušajā koksnē kož ilgāk nekā desmitgadi.',
    humanRole:
      'Cilvēki izvāc celmus, nozāģē vecos platlapjus un pārrauj trūdošās koksnes nepārtrauktību, kas kāpuriem vajadzīga. Vabole ir Dzīvotņu direktīvas karogs šai koksnei.',
    sources:
      'IUCN Sarkanais saraksts (Lucanus cervus, Eiropa / EU27, Near Threatened, 2023); EUNIS; JNCC, Apvienotās Karalistes Dzīvotņu direktīvas 17. pants, S1083 (2019).',
  },
  'hermit-beetle': {
    commonName: 'Eremītvabole',
    hook: 'Skarabejs, kas gandrīz visu mūžu dzīvo vecu dobumainu koku trūdē Eiropā — IUCN (2023) to vērtē kā Near Threatened, jo vecie koki joprojām zūd un nākamā dobumu paaudze atpaliek par gadu desmitiem.',
    imageAlt: 'Tumši brūna eremītvabole uz veca koka raupjās mizas',
    what: 'Obligāta saproksilā skarabeju vabole (Osmoderma eremita) dobumainos platlapju kokos. Pieaugušie reti lido tālu; populācijas paaudzēm sēž vienā kokā vai sīkā koku grupā.',
    range:
      'Eiropa un EU27. Izplatības apmērs ir liels, bet vairošanās vietu aizņemtā platība lēsta tikai aptuveni 2000–2500 km², un šīs vietas ir stipri sadrumstalotas.',
    story:
      'Briežvaboles kāpuriem vajag mitras mirušās koksnes apjomu. Eremītvabolei vajag dobumu ar trūdi, un nākamā dobumu paaudze atpaliek par gadu desmitiem no kokiem, ko zaudē tagad. Tā kā pieaugušie reti lido tālu, robs starp vecajiem kokiem var izolēt populāciju paaudzēm.',
    when: 'IUCN (2023): Near Threatened, B2ab(ii,iii,v). Vecie dobumainie koki nepārtraukti samazinās, un dobumu atjaunošanās ilgst ilgi.',
    humanRole:
      'Veco dobumaino koku nociršana un nākamās dobumu paaudzes trūkums atņem vienīgās vietas, kur šī vabole var vairoties.',
    sources: 'IUCN Sarkanais saraksts (Osmoderma eremita, Near Threatened, 2023).',
  },
  'salt-creek-tiger-beetle': {
    commonName: 'Solnāja smilšvabole',
    hook: 'Smilšvabole, endēma Austrumnebraskas sāļajiem līdzenumiem — pēc mitrāju nosusināšanas ap Linkolnu intensīvas uzskaites kopš 1991. gada skaitījušas tikai 153 pieaugušos (2005) un maksimumu 777 (2002), visus saujiņā atlieku vietu.',
    imageAlt: 'Solnāja smilšvabole, metāliski zaļi bronzas krāsā, uz gaišām sāļām dūņām',
    what: 'Maza, ātra plēsīga vabole kailās sāļās dūņās gar Salt Creek un Little Salt Creek. Kāpuri rok alas sāls garozā; pieaugušie medī atklātos līdzenumos. Taksonomija dažkārt lieto Ellipsoptera nevadica lincolniana; ASV Zivju un savvaļas dienesta lapa joprojām ved ar Cicindela nevadica lincolniana.',
    range:
      'Austrumnebraskas sāļie mitrāji, atlieku sālslīdzenumos gar Salt Creek un Little Salt Creek uz ziemeļiem no Linkolnas. Tā nav maitas vabole un nav plaši izplatīta smilšvabole.',
    story:
      'Dambji, gultnes regulēšana un Linkolnas augšana izdzēsa lielāko daļu sāļā mitrāja, atstājot vienu trauslu metapopulāciju. Nebraska Game and Parks uzskaišu kopsavilkums: sešas populācijas 1991. gadā, un trīs no tām vēlāk zaudētas. Katrs nesenais skaits nāk no saujiņas atlieku vietu.',
    when: 'Endangered ASV Endangered Species Act. Intensīvas uzskaites kopš 1991. gada ietver maksimumu 777 pieaugušos (2002), minimumu 153 (2005) un 374 saskaitītus 2012. gadā. Dienesta sugas lapa un parakstītais atjaunošanas plāns dokumentē iekļaušanu un atjaunošanas aprises.',
    humanRole:
      'Nosusināšana, dambji, gultnes regulēšana un pilsētas augšana ap Linkolnu atņēma lielāko daļu sāļo līdzenumu, kur vabole medī un rok alas.',
    sources:
      'ASV Zivju un savvaļas dienesta sugas lapa; Nebraska Game and Parks; USFWS solnāja smilšvaboles atjaunošanas plāns; Nebraskas–Linkolnas universitātes vizuālie populācijas novērtējumi.',
  },
  wetapunga: {
    commonName: 'Vetapunga',
    hook: 'Jaunzēlandes lielākā veta — kādreiz sarukusi līdz Hauturu-o-Toi / Little Barrier, tad audzēta un pārvietota: Auckland Zoo un partneri izlaiduši vairāk nekā 5000 dzīvnieku plēsēju brīvās salās, un NZTCS sugu vērtē kā Nationally Increasing (joprojām Threatened / atkarīga no aizsardzības).',
    imageAlt: 'Vetapunga, liela nelidojoša veta, uz zaļas lapas',
    what: 'Deinacrida heteracantha — milzu nelidojošs taisnspārnis, wētāpunga. Pieaugušās mātītes vidēji sver aptuveni 40 g; smagākā reģistrētā grūsna mātīte sasniegusi aptuveni 71 g. Naktī ēd lapas un pārnēsā arī sēklas barības vielām bagātos ekskrementos.',
    range:
      'Kādreiz sarukusi līdz Hauturu-o-Toi / Little Barrier salai. Nebrīvē audzēti dzīvnieki tagad dzīvo arī citās plēsēju brīvās salās, tostarp Motuora, Tiritiri Matangi un vietās Bay of Islands.',
    story:
      'Pēc Klusā okeāna žurku izskaušanas no Little Barrier Dabas aizsardzības departaments un Auckland Zoo izveidoja nebrīves līnijas un pārvietoja dzīvniekus uz Motuora, Tiritiri Matangi, Bay of Islands vietām un citām kaitēkļu brīvām salām. Tā ir pārvaldīta atgriešanās, kas joprojām ir piesaistīta plēsēju brīvai dzīvotnei.',
    when: 'Jaunzēlandes apdraudējuma klasifikācijas sistēma (NZTCS): Nationally Increasing, joprojām zem Threatened lietussarga un joprojām atkarīga no aizsardzības. Populācija 1000–5000 pieaugušo kārtā, vairākās plēsēju brīvās salās; novērtējums lasa tendenci kā pieaugumu vairāk nekā par 10 procentiem, un piezīmes min arī vairāk nekā 30 procentus. Auckland Zoo (2020): vairāk nekā 5000 izlaisti; Bay of Islands izlaišana atvēra salas 6–8 to salu kopā.',
    humanRole:
      'Ievazāti plēsēji samazināja vetu līdz vienai salai. Žurku izskaušana, audzēšana nebrīvē un salu izlaišanas, ko veica Dabas aizsardzības departaments un Auckland Zoo, dzīvniekus atgrieza — tikai tur, kur plēsēji paliek ārpusē.',
    sources:
      'NZTCS novērtējums (Deinacrida heteracantha); DOC Vetapunga lapa un milzu vetu pārvietošanas vadlīnijas; Auckland Zoo, 2020.',
  },
  cattle: {
    commonName: 'Liellopi',
    hook: 'Pasaules galvenie gaļas un piena liellopi: taurīnie un zebu, ko cilvēki tur piena, gaļas, ādu un vilkšanas dēļ.',
    imageAlt: 'Herefordas liellopi ganībās',
    photoCredit:
      'Foto: Keith Weller, Amerikas Savienoto Valstu Lauksaimniecības departaments, Vikikrātuve (Wikimedia Commons)',
    licenseLabel: 'sabiedriskais īpašums',
    gridSource: {
      label:
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, liellopi',
      url: 'https://www.fao.org/livestock-systems/global-distributions/cattle/en/',
    },
    what: 'Liellopi ir pieradināti liellopi, ko tur piena, gaļas, ādu un vilkšanas dēļ. Dzīvie liellopi pieder taurīnajai (Bos taurus) un zebu (Bos indicus) līnijām. Cilvēki tos izveidoja no tauta holocēnā.',
    range:
      'Visos apdzīvotajos kontinentos. Blīvums seko ganībām, barībai un piena tirgiem. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija kartē liellopu globālo izplatību kā mājlopus.',
    story:
      'Cilvēki pieradināja liellopus no tauta holocēnā un veda ganāmpulkus līdz ar tīrumiem un tirdzniecību. Šodien tas ir pārvaldīta pārtikas sistēma: šķirnes, nobarošanas laukumi un ganu ganāmpulki.',
    when: 'Dzīvs pieradinājums, ko cilvēki uztur visā pasaulē.',
    humanRole: 'Mēs izveidojām dzīvnieku, izplatījām to un vedam ganāmpulkus, kas baro lielu daļu pasaules.',
    sources: '',
    sourcesList: [
      {
        label:
          'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, liellopi (Livestock Systems: Cattle)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/cattle/en/',
      },
    ],
  },
  chicken: {
    commonName: 'Vista',
    hook: 'Visvairāk sastopamais mājlops: bankivas džungļu vista, kas kļuvusi par fermu pamatputnu pasaulē.',
    imageAlt: 'Mājas vista stāv sausā zālē',
    photoCredit: 'Foto: Susulyka, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: {
      label:
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, vistas',
      url: 'https://www.fao.org/livestock-systems/global-distributions/chickens/en/',
    },
    what: 'Vista (Gallus gallus domesticus) ir bankivas džungļu vistas pieradinātā forma. Tā ir visvairāk sastopamais mājlops: dzīvu vistu ir vairāk nekā jebkura cita fermas putna vai zīdītāja. Cilvēki šo putnu tur gaļai un olām.',
    range:
      'Sētas, šķūņi un rūpniecības mājas visos apdzīvotajos kontinentos. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija kartē vistu globālo izplatību kā mājlopus.',
    story:
      'Pieradināšana Āzijā deva putnu, ko var vest. Rūpnieciskā selekcija pēc tam izveidoja gaļas un olu līnijas ar īsu, blīvu mūžu. Ciematu bari paliek līdzās rūpniecības mājām.',
    when: 'Dzīvs pieradinājums un visvairāk sastopamais fermas dzīvnieks.',
    humanRole: 'Mēs selekcionējām, izmitinājām un skaitām tās kā gaļas un olu pārtikas sistēmu.',
    sources: '',
    sourcesList: [
      {
        label:
          'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, vistas (Livestock Systems: Chickens)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/chickens/en/',
      },
    ],
  },
  sheep: {
    commonName: 'Aita',
    hook: 'Aitas ir ganību dzīvnieki, ko audzē galvenokārt vilnai, gaļai, pienam un ādām, un to šķirnes ir pielāgotas vietām no aukstajām, mitrajām Ziemeļeiropas augstienēm līdz sausajiem Āfrikas, Āzijas un Australāzijas apgabaliem.',
    imageAlt: 'Mājas aita zālē, pret kameru',
    photoCredit: 'Foto: T.Voekler, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: {
      label:
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, aitas',
      url: 'https://www.fao.org/livestock-systems/global-distributions/sheep/en/',
    },
    what: 'Aita (Ovis aries) ir pieradināts sīkais atgremotājs, ko tur vilnas, gaļas un piena dēļ.',
    range:
      'Ganības no sausas stepes līdz mitriem mērenajiem pauguriem un barības sistēmas blakus. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija kartē aitu globālo izplatību kā mājlopus.',
    story:
      'Cilvēki pieradināja aitu neolīta Tuvajos Austrumos un veda to pāri kontinentiem. Šķirnes tagad der vilnai, pienam vai gaļai.',
    when: 'Dzīvs pieradinājums, ko audzē vilnai, gaļai un pienam.',
    humanRole: 'Mēs selekcionējām un pārvietojām tās kā šķiedru un ēdienu; ainava, ko tās nogana, ir mūsu.',
    sources: '',
    sourcesList: [
      {
        label:
          'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, aitas (Livestock Systems: Sheep)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/sheep/en/',
      },
    ],
  },
  pig: {
    commonName: 'Cūka',
    hook: 'Mājas cūka, Sus domesticus, ko audzē gaļai fermās no ciematu kūtiņām līdz rūpniecības mājām.',
    imageAlt: 'Mājas cūka fermas pagalmā, rozā un smaga',
    photoCredit: 'Foto: Gzen92, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: {
      label:
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, cūkas',
      url: 'https://www.fao.org/livestock-systems/global-distributions/pigs/en/',
    },
    what: 'Cūka (Sus domesticus) ir mājas cūka, ko tur gaļas dēļ. Cilvēki to pieradināja no mežacūkas vairāk nekā vienreiz, un šodien lielākā daļa gaļas cūku ir komerciālas līnijas. Ciematu cūkas un vietējās šķirnes paliek. Izlaistie un aizbēgušie dzīvnieki ir izveidojuši savvaļas populācijas daudzās valstīs.',
    range:
      'Fermās visā pasaulē, no ciematu kūtiņām līdz rūpniecības mājām. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija kartē cūku globālo izplatību kā mājlopus.',
    story:
      'Cūkas pieradināja no mežacūkas vairāk nekā vienreiz. Šodien lielākā daļa gaļas cūku ir komerciālas līnijas. Ciematu cūkas un vietējās šķirnes paliek, un izlaistie vai aizbēgušie dzīvnieki ir izveidojuši savvaļas populācijas daudzās valstīs.',
    when: 'Dzīvs pieradinājums, ko audzē gaļai.',
    humanRole:
      'Mēs tās turam kā ēdienu, un izlaistie vai aizbēgušie dzīvnieki ir izveidojuši savvaļas populācijas daudzās valstīs.',
    sources: '',
    sourcesList: [
      {
        label:
          'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, cūkas (Livestock Systems: Pigs)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/pigs/en/',
      },
    ],
  },
  'water-buffalo': {
    commonName: 'Ūdensbifelis',
    hook: 'Ap 15 procentiem pasaules piena — un Indijā un Pakistānā bifeļu piena ir vairāk nekā govs piena.',
    imageAlt: 'Mājas ūdensbifeļa bullis pie Mehsānas, Gudžarātā, Indijā',
    photoCredit: 'Foto: Yann Forget, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: {
      label: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: bifeļu piens',
      url: 'https://www.fao.org/dairy-production-products/dairy/buffaloes/en',
    },
    what: 'Ūdensbifelis (Bubalus bubalis) ir pieradinātais Āzijas bifelis, ko tur piena, gaļas un vilkšanas dēļ. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija rēķina bifeļus ap 15 procentiem pasaules piena; Indijā un Pakistānā bifeļu piena ir vairāk nekā govs piena.',
    range:
      'Dienvidu un Dienvidaustrumu Āzija tur lielāko daļu ganāmpulka; mazākas populācijas ir Vidusjūrā, Kaukāzā, Dienvidamerikā un tālāk. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija kartē bifeļus kā mājlopus.',
    story:
      'Cilvēki pieradināja Āzijas bifeli un uzcēla ap to rīsa un piena sistēmas. Upju un purvu tipi atšķiras ar pienu, vilkšanu un mitrājiem, kuros tie dzīvo.',
    when: 'Dzīvs pieradinājums un nozīmīga piena suga Dienvidāzijā.',
    humanRole:
      'Mēs turam bifeļus kā piena un darba dzīvniekus Dienvidāzijā un mazākos ganāmpulkos citur.',
    sources: '',
    sourcesList: [
      {
        label:
          'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: bifeļu piens (Buffalo milk)',
        url: 'https://www.fao.org/dairy-production-products/dairy/buffaloes/en',
      },
      {
        label:
          'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, bifeļi (Livestock Systems: Buffaloes)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/buffaloes/en/',
      },
    ],
  },
  horse: {
    commonName: 'Zirgs',
    hook: 'Mājas zirgi izplatījās no Rietumeirāzijas stepēm ap 2200.–2000. gadu p.m.ē., kā 2021. gadā žurnālā Nature parādīja Librado un kolēģi.',
    imageAlt: 'Balts Kamargas zirgs zālē',
    photoCredit: 'Foto: TwoWings, Vikikrātuve (Wikimedia Commons)',
    licenseLabel: 'sabiedriskais īpašums',
    gridSource: {
      label:
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, zirgi',
      url: 'https://www.fao.org/livestock-systems/global-distributions/horses/en/',
    },
    what: 'Zirgs (Equus ferus caballus) ir mājas zirgs, uz kura jā, ko iejūdz un ko tur. Librado un kolēģu darbs ar seno ģenētisko materiālu (žurnāls Nature, 2021) liek mūsdienu mājas līnijas rašanos un izplatību Rietumeirāzijas stepēs, ar paplašināšanos ap 2200.–2000. gadu p.m.ē. Botajas zirgi Kazahstānā pieder citai līnijai.',
    range:
      'Tos tur visā pasaulē. Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija kartē zirgus kā mājlopus. Darba, sporta un savvaļā palaistie bari dzīvo visos apdzīvotajos kontinentos.',
    story:
      'Mūsdienu mājas līnija nomainīja agrākās līnijas, izplatoties kopā ar cilvēkiem. Šis datums ir 2021. gada pētījuma ģenētisks rezultāts. Darba, sporta un savvaļā palaistie bari nāk no šīs turētās līnijas.',
    when: 'Dzīvs pieradinājums. Mūsdienu līnija: Rietumeirāzijas stepes, ap 2200.–2000. gadu p.m.ē. (Librado u.c., 2021).',
    humanRole:
      'Mēs selekcionējām un pārvietojām tos kā transportu un darbu. Dzīvās līnijas datums nāk no 2021. gada ģenētiskā pētījuma.',
    sources: '',
    sourcesList: [
      {
        label:
          'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: lopkopības sistēmas, zirgi (Livestock Systems: Horses)',
        url: 'https://www.fao.org/livestock-systems/global-distributions/horses/en/',
      },
      {
        label:
          'Librado u.c., žurnāls Nature, 2021 — Rietumeirāzijas steppju mājas zirgi (The origins and spread of domestic horses from the Western Eurasian steppes; doi:10.1038/s41586-021-04018-9)',
        url: 'https://doi.org/10.1038/s41586-021-04018-9',
      },
    ],
  },
  dog: {
    commonName: 'Suns',
    hook: 'Pirmais pieradinātais dzīvnieks, jau ģenētiski atšķirīgs no šodienas vilkiem, ar vismaz piecām līnijām ap 11 tūkstošiem gadu.',
    imageAlt: 'Divi melni labradoru retrīveri ar siksnām sausā zālē',
    photoCredit: 'Foto: Marco Ponepal, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: {
      label:
        'Bergström u.c., Science, 2020 — aizvēsturisko suņu izcelsme, pilns teksts PubMed Central',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7116352/',
    },
    what: 'Suns (Canis familiaris) ir pirmais dzīvnieks, ko cilvēki pieradināja. Bergström un kolēģi (žurnāls Science, 2020) rāda, ka suņi jau bija ģenētiski atšķirīgi no šodienas vilkiem un ka ap 11 tūkstošiem gadu pastāvēja vismaz piecas suņu līnijas.',
    range: 'Tur, kur dzīvo cilvēki. Ciematu suņi, darba līnijas un šķirnes ir viena mājas suga.',
    story:
      'Suņi iegāja cilvēku nometnēs vēlajā pleistocēnā. Agrīnajā holocēnā tie jau bija līniju kopa, ģenētiski atšķirīga no šodienas vilkiem. Vēlākā selekcija izveidoja mūsdienu tipus.',
    when: 'Vecākais pieradinājums. Atšķirīgs no šodienas vilkiem holocēnā; vismaz piecas līnijas ap 11 tūkstošiem gadu (Bergström u.c., 2020).',
    humanRole: 'Mēs izveidojām pirmo turēto dzīvnieku: pavadoni, mednieku un sargu.',
    sources: '',
    sourcesList: [
      {
        label:
          'Bergström u.c.: aizvēsturisko suņu izcelsme (Origins and genetic legacy of prehistoric dogs), žurnāls Science, 2020, pilns teksts PubMed Central',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7116352/',
      },
      {
        label: 'Bergström u.c., žurnāls Science, 2020 (doi:10.1126/science.aba9572)',
        url: 'https://doi.org/10.1126/science.aba9572',
      },
    ],
  },
  camelids: {
    commonName: 'Kamieļi',
    hook: 'Cilvēki tur dromedārus, divkupru kamieļus, lamas un alpakas transportam, šķiedrai, pienam un gaļai, un Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija 2024. gadu nosauca par Starptautisko kamieļu gadu.',
    imageAlt: 'Dromedārs profilā',
    photoCredit: 'Foto: Hans Hillewaert, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: {
      label:
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Starptautiskais kamieļu gads, 2024',
      url: 'https://www.fao.org/camelids-2024/en',
    },
    what: 'Kamieļi, ko tur cilvēki, ir dromedārs un divkupru kamielis (Camelus), lama (Lama glama) un alpaka (Vicugna pacos). Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija 2024. gadu nosauca par Starptautisko kamieļu gadu.',
    range:
      'Kamieļi dzīvo sausajā Āzijā un Āfrikā, un tagad arī Austrālijā. Lamas un alpakas dzīvo Andos, un izveduma ganāmpulki ir arī citur.',
    story:
      'Cilvēki pieradināja Vecās pasaules kamieļus un Andu kamieļus kā nastu, šķiedras, piena un gaļas dzīvniekus sausās un augstās zemēs. 2024. gada Starptautiskais kamieļu gads lūdza valdības šos ganāmpulkus uzskatīt par pārtikas un kultūras sistēmu.',
    when: 'Dzīvi pieradinājumi. Starptautiskais kamieļu gads bija 2024. gadā.',
    humanRole: 'Mēs turam kamieļus, lamas un alpakas kā darba un šķiedras dzīvniekus sausās un kalnu zemēs.',
    sources: '',
    sourcesList: [
      {
        label:
          'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Starptautiskais kamieļu gads, 2024 (International Year of Camelids 2024)',
        url: 'https://www.fao.org/camelids-2024/en',
      },
    ],
  },
  ...domesticatesLv,
};
