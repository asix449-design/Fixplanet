import type { WasteDetailCopy, WasteEncyclopediaSlug } from '../data/solutions-waste';
import type { SolutionCopy } from '../data/solutions';
import { detail as en } from './solutions-waste-en';

const src = (slug: WasteEncyclopediaSlug, index: number) => en[slug].sources[index].url;

const krefeld =
  'https://commons.wikimedia.org/wiki/File:Krefeld,_Germany_-_Bottle_reverse_vending_machine_in_Rewe.jpg';
const almeria =
  'https://commons.wikimedia.org/wiki/File:Contenedores_de_reciclaje_Almer%C3%ADa.jpg';
const tsukuba =
  'https://commons.wikimedia.org/wiki/File:Electronic_junk_separation_in_view_of_recycling_3.jpg';
const munich =
  'https://commons.wikimedia.org/wiki/File:Lithium-Ion_Battery_for_BMW_i3_-_Battery_Pack.JPG';
const produce = 'https://commons.wikimedia.org/wiki/File:Treasure_trove_of_wasted_food.JPG';
const ccBy = 'https://creativecommons.org/licenses/by/4.0/';
const ccBySa4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const ccBySa3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const cc0 = 'https://creativecommons.org/publicdomain/zero/1.0/';

export const grid: Record<WasteEncyclopediaSlug, SolutionCopy> = {
  'deposit-return-systems': {
    problemTitle: 'Tukšais dzērienu iepakojums nonāk atkritumos un jauktajos konteineros',
    fixTitle: 'Depozīta sistēmas',
    problem: 'Tukšais dzērienu iepakojums nonāk atkritumos un jauktajos konteineros',
    fix: 'Nelielu depozītu par pudeli vai bundžu atmaksā, kad tukšo iepakojumu nodod savākšanas punktā. Dažas sistēmas savāc vairāk nekā 90 procentus aptvertā iepakojuma, un atkritumu apsekojumos šādu pudeļu un bundžu uz zemes ir mazāk.',
    imageAlt: 'Depozīta pudeļu un bundžu pieņemšanas automāta ievades atvere lielveikalā Krēfeldē, Vācijā.',
    sourceLabel: 'Ekonomiskās sadarbības un attīstības organizācija, depozīta sistēmas',
  },
  'extended-producer-responsibility-packaging': {
    problemTitle: 'Iepakojuma atkritumu kļūst vairāk, un to savākšanas izmaksas sedz pašvaldības',
    fixTitle: 'Ražotāju paplašinātā atbildība par iepakojumu',
    problem: 'Iepakojuma atkritumu kļūst vairāk, un to savākšanas izmaksas sedz pašvaldības',
    fix: 'Ražotāju paplašinātā atbildība nozīmē, ka uzņēmumi, kas laiž tirgū iepakojumu, atbild par to arī pēc lietošanas: maksā par savākšanu un pārstrādi vai paši tās organizē. Eiropas Savienībā iepakojuma atkritumi 2022. gadā sasniedza 186,5 kg uz iedzīvotāju.',
    imageAlt:
      'Šķirotas savākšanas konteineri Almerijā, Spānijā: papīram un kartonam, stiklam, organiskajiem atkritumiem un iepakojumam, kā arī plastmasai un metālam.',
    sourceLabel: 'Eiropas Komisija, iepakojuma atkritumi',
  },
  'e-waste-recycling': {
    problemTitle: 'Izmestās elektronikas kļūst vairāk, nekā spēj pārstrādāt oficiālā sistēma',
    fixTitle: 'Elektronisko atkritumu savākšana un pārstrāde',
    problem: 'Izmestās elektronikas kļūst vairāk, nekā spēj pārstrādāt oficiālā sistēma',
    fix: 'Dokumentēta izmesto elektroierīču savākšana un pārstrāde atgūst varu, zeltu un citus metālus. 2022. gadā pasaulē radās 62 miljardi kg elektronisko atkritumu, un 22,3 procenti no tiem tika dokumentēti kā oficiāli savākti un pārstrādāti.',
    imageAlt:
      'Sasmalcinātas iespiedplates un elektroniskās sastāvdaļas, sašķirotas materiālu atgūšanai, eksponāts Cukubā, Japānā.',
    sourceLabel: 'Starptautiskā telekomunikāciju savienība, Globālais elektronisko atkritumu monitors 2024',
  },
  'lithium-ion-battery-recycling': {
    problemTitle:
      'Kritiskie minerāli ir akumulatoros, kas pārstrādātājiem lielā apjomā nonāks tikai aptuveni no 2035. gada',
    fixTitle: 'Litija jonu akumulatoru pārstrāde',
    problem:
      'Kritiskie minerāli ir akumulatoros, kas pārstrādātājiem lielā apjomā nonāks tikai aptuveni no 2035. gada',
    fix: 'Litija jonu akumulatoru pārstrāde atgūst litiju, niķeli, kobaltu un varu: vispirms no ražošanas atlikumiem, vēlāk no akumulatoriem, kas tiek izņemti no transportlīdzekļiem un uzglabāšanas sistēmām. Pēc Starptautiskās enerģētikas aģentūras datiem pārstrādes jaudas šobrīd pārsniedz pieejamo izejvielu.',
    imageAlt: 'Atvērts elektroauto litija jonu akumulators izstādē Minhenē, redzami moduļi un vadības elektronika.',
    sourceLabel: 'Starptautiskā enerģētikas aģentūra, elektrotransportlīdzekļu akumulatori',
  },
  'food-waste-reduction': {
    problemTitle: 'Ēdamu pārtiku izmet veikalos, virtuvēs un mājās',
    fixTitle: 'Pārtikas atkritumu samazināšana',
    problem: 'Ēdamu pārtiku izmet veikalos, virtuvēs un mājās',
    fix: 'Pārtikas atkritumu samazināšana atstāj ēdienu cilvēku pārtikas ķēdē un saudzē lauksaimniecības resursus, kas jau iztērēti tā ražošanai. 2022. gadā pasaule izmeta 1,05 miljardus tonnu pārtikas, tas ir 19 procentus no patērētājiem pieejamās pārtikas.',
    imageAlt: 'Svaigi dārzeņi un augļi, kas izmesti no hipermārketa pēc vienas vai divām dienām plauktos.',
    sourceLabel: 'Apvienoto Nāciju Organizācijas Vides programma, Pārtikas atkritumu indekss 2024',
  },
};

export const detail: Record<WasteEncyclopediaSlug, WasteDetailCopy> = {
  'deposit-return-systems': {
    title: grid['deposit-return-systems'].fixTitle,
    hook: grid['deposit-return-systems'].fix,
    imageAlt: grid['deposit-return-systems'].imageAlt,
    caption: 'Depozīta pudeļu un bundžu pieņemšanas automāta ievades atvere lielveikalā Krēfeldē, Vācijā.',
    credit: `Foto: Alexis Jazz, caur Vikikrātuvi, apgriezts, licence Creative Commons Atsauce 4.0 (${ccBy}). Faila lapa: ${krefeld}`,
    what: [
      'Depozīta sistēmā pircējs, pērkot dzērienu, samaksā depozītu un saņem naudu atpakaļ, kad tukšo iepakojumu nodod savākšanas punktā. Ekonomiskās sadarbības un attīstības organizācija uzskata šādu sistēmu par vienu no ražotāju paplašinātās atbildības veidiem, ja ražotāji paši to finansē un vada. Savākšanas punktos strādā darbinieki, vai arī tur stāv automāti, kas tukšo iepakojumu pieņem automātiski.',
    ],
    why: [
      'Pēc Ekonomiskās sadarbības un attīstības organizācijas datiem dažās valstīs un reģionos ar depozīta sistēmu savāc vairāk nekā 90 procentus aptvertā iepakojuma, bet atkritumu apsekojumos depozīta iepakojuma skaits samazinājies par 40 līdz 90 procentiem. Vācijā, Lietuvā un Norvēģijā depozīta sistēma darbojas līdzās ražotāju pienākumam pieņemt iepakojumu atpakaļ. Eiropas Komisija min mērķi atsevišķi savākt 77 procentus vienreizlietojamo plastmasas pudeļu līdz 2025. gadam un 90 procentus līdz 2029. gadam.',
    ],
    read: [
      'Atgriešanas rādītājs rāda, kāda daļa pārdotā iepakojuma ar depozītu ir atgriezta, saņemot depozītu atpakaļ. Tajā pašā analīzē teikts, ka depozīta apmērs ietekmē pircēju vēlmi piedalīties un ir saistīts ar augstāku atgriešanas rādītāju, bet diagrammā tirgi ar augstāku minimālo depozītu uzrāda augstāku atgriešanas rādītāju. Neizmantotie depozīti var daļēji segt sistēmas darbības izmaksas, un analīze iesaka apsvērt savākšanas mērķus vai nodokli, kas piesaistīts savākšanas rādītājam, lai operatori tiektos uz augstu atgriešanas rādītāju un tikai daļēji paļautos uz neizmantotajiem depozītiem.',
    ],
    limits: [
      'Salīdzinājumā ar savākšanu pie mājām katra papildu iepakojuma vienības savākšana depozīta sistēmā parasti izmaksā vairāk, un ieņēmumi no materiāla pārdošanas vairumā gadījumu sedz tikai daļu izmaksu, tāpēc šādām sistēmām parasti vajag ražotāju maksājumus vai valsts atbalstu. Taras pieņemšanas automāti prasa lielus kapitālieguldījumus. Tur, kur jau darbojas iepakojuma savākšana pie mājām, depozīta sistēma šai shēmai atņem vērtīgu materiālu, tāpēc noteikumos jānosaka, kuri produkti pieder pie kuras shēmas, un katrai precei jāietilpst tikai vienā no tām.',
    ],
    sources: [
      {
        label:
          'Ekonomiskās sadarbības un attīstības organizācija: depozīta atmaksas sistēmas un to mijiedarbība ar papildu obligātajiem ražotāju paplašinātās atbildības pasākumiem (Organisation for Economic Co-operation and Development (OECD): Deposit-refund systems and the interplay with additional mandatory extended producer responsibility policies)',
        url: src('deposit-return-systems', 0),
      },
      {
        label:
          'Ekonomiskās sadarbības un attīstības organizācija: depozīta atmaksas sistēmas un to mijiedarbība ar papildu obligātajiem ražotāju paplašinātās atbildības pasākumiem, vides darba dokuments Nr. 208, PDF (Organisation for Economic Co-operation and Development (OECD): Deposit-refund systems and the interplay with additional mandatory extended producer responsibility policies, OECD Environment Working Papers No. 208 (PDF))',
        url: src('deposit-return-systems', 1),
      },
      {
        label: 'Eiropas Komisija: vienreizlietojamā plastmasa (European Commission: Single-use plastics)',
        url: src('deposit-return-systems', 2),
      },
    ],
  },
  'extended-producer-responsibility-packaging': {
    title: grid['extended-producer-responsibility-packaging'].fixTitle,
    hook: grid['extended-producer-responsibility-packaging'].fix,
    imageAlt: grid['extended-producer-responsibility-packaging'].imageAlt,
    caption:
      'Šķirotas savākšanas konteineri Almerijā, Spānijā: papīram un kartonam, stiklam, organiskajiem atkritumiem un iepakojumam, kā arī plastmasai un metālam.',
    credit: `Foto: Schumi4ever, caur Vikikrātuvi, licence Creative Commons Atsauce, tādi paši noteikumi 4.0 (${ccBySa4}). Faila lapa: ${almeria}`,
    what: [
      'Ražotāju paplašinātā atbildība ir politikas pieeja, kurā ražotāji atbild par saviem izstrādājumiem visā to dzīves ciklā, arī pēc tam, kad patērētāji tos izmet. Ekonomiskās sadarbības un attīstības organizācija to raksturo kā atbildības par produktiem pārnešanu no pašvaldībām un patērētājiem uz ražotājiem. Ražotājs šo pienākumu var pildīt, nodrošinot naudu, pārņemot no pašvaldībām savākšanas un šķirošanas organizēšanu, kā bieži notiek ar iepakojumu, vai darot abus. Visbiežāk ražotāji darbojas kopīgi ražotāju atbildības organizācijās.',
    ],
    why: [
      'Pēc Eiropas Komisijas datiem iepakojuma atkritumi Eiropas Savienībā 2022. gadā sasniedza rekordaugstus 186,5 kg uz iedzīvotāju, un iepakojums veido gandrīz pusi no visiem jūras atkritumiem. Regula par iepakojumu un iepakojuma atkritumiem, kas stājusies spēkā 2025. gada 11. februārī un tiek piemērota no 2026. gada 12. augusta, aizstāj 1994. gada direktīvu ar kopīgiem noteikumiem par dizainu, pārstrādāto materiālu saturu, atkritumu novēršanu, atkalizmantošanu, savākšanu un pārstrādi. Pārskats, ko Ekonomiskās sadarbības un attīstības organizācija apkopoja 2016. gadā, saskaitīja aptuveni 400 darbojošos ražotāju paplašinātās atbildības sistēmu: lielākā grupa ir elektronika (35 procenti), bet iepakojums un riepas katrs veido 17 procentus. Dažās valstīs, piemēram, Francijā, pierādījumi liecina, ka šādas sistēmas daļu atkritumu apsaimniekošanas finansiālā sloga ir pārnesušas no pašvaldībām un nodokļu maksātājiem uz ražotājiem.',
    ],
    read: [
      'Ražotāju paplašinātā atbildība var būt brīvprātīga vai likumā noteikta, un tā var balstīties uz pienākumu pieņemt produktus atpakaļ, depozīta atmaksas sistēmām vai iepriekš maksājamām atkritumu apsaimniekošanas nodevām. Pienākums pieņemt produktus atpakaļ ir visbiežāk lietotais instruments: uz to attiecas gandrīz trīs ceturtdaļas aptaujāto sistēmu. Šīs organizācijas 2001. gada pamatprincipi paredz, ka sistēmām jādod ražotājiem stimuli mainīt izstrādājumu dizainu.',
    ],
    limits: [
      'Šādu sistēmu ietekmi novērtēt ir grūti: trūkst datu, to ietekmi grūti nodalīt no citiem faktoriem, un pašas sistēmas ir pārāk dažādas, lai tās salīdzinātu. Organizācija norāda, ka dažās valstīs un nozarēs tās ir veicinājušas atkritumu novēršanu, piemēram, ekodizainu, taču reti ar to pietiek, lai to izraisītu pašas vien. Aptuveni 400 sistēmu skaits ņemts no pārskata, kas apkopots 2016. gadā.',
    ],
    sources: [
      {
        label: 'Eiropas Komisija: iepakojuma atkritumi (European Commission: Packaging waste)',
        url: src('extended-producer-responsibility-packaging', 0),
      },
      {
        label:
          'Ekonomiskās sadarbības un attīstības organizācija: ražotāju paplašinātā atbildība un ekonomiskie instrumenti (Organisation for Economic Co-operation and Development (OECD): Extended producer responsibility and economic instruments)',
        url: src('extended-producer-responsibility-packaging', 1),
      },
      {
        label:
          'Ekonomiskās sadarbības un attīstības organizācija: ražotāju paplašinātā atbildība, pamatfakti un galvenie principi, vides politikas dokuments Nr. 41 (2024) (Organisation for Economic Co-operation and Development (OECD): Extended Producer Responsibility: Basic facts and key principles, OECD Environment Policy Papers No. 41 (2024))',
        url: src('extended-producer-responsibility-packaging', 2),
      },
      {
        label:
          'Ekonomiskās sadarbības un attīstības organizācija: ražotāju paplašinātā atbildība, galvenie secinājumi (2016, PDF) (Organisation for Economic Co-operation and Development (OECD): Extended Producer Responsibility: Policy Highlights (2016, PDF))',
        url: src('extended-producer-responsibility-packaging', 3),
      },
    ],
  },
  'e-waste-recycling': {
    title: grid['e-waste-recycling'].fixTitle,
    hook: grid['e-waste-recycling'].fix,
    imageAlt: grid['e-waste-recycling'].imageAlt,
    caption:
      'Sasmalcinātas iespiedplates un elektroniskās sastāvdaļas, sašķirotas materiālu atgūšanai, eksponāts Cukubā, Japānā.',
    credit: `Foto: Syced, caur Vikikrātuvi, nodošana publiskajā domēnā Creative Commons Zero (${cc0}). Faila lapa: ${tsukuba}`,
    what: [
      'Elektroniskie atkritumi ir izmesti elektriskie un elektroniskie izstrādājumi, sākot no tālruņiem un klēpjdatoriem līdz lielām sadzīves ierīcēm. Monitors uzskata elektroniskos atkritumus par pārstrādātiem tikai tad, ja tie dokumentēti kā oficiāli savākti un pārstrādāti videi drošā veidā. Ziņojumu «Globālais elektronisko atkritumu monitors» sagatavo Starptautiskā telekomunikāciju savienība un Apvienoto Nāciju Organizācijas Mācību un pētījumu institūts, un tā 2024. gada izdevums aptver 2022. gadu.',
    ],
    why: [
      '2022. gadā pasaulē radās rekordliels elektronisko atkritumu apjoms: 62 miljardi kg jeb vidēji 7,8 kg uz cilvēku. Tikai 22,3 procenti (13,8 miljardi kg) tika dokumentēti kā oficiāli savākti un pārstrādāti. Kopš 2010. gada, kad radās 34 miljardi kg, šis apjoms aug vidēji par 2,3 miljardiem kg gadā, bet dokumentētā oficiālā savākšana un pārstrāde pieauga no 8 miljardiem kg vidēji par 0,5 miljardiem kg gadā. Tāpēc atkritumu rašanās pieaugums apsteidz oficiālās pārstrādes pieaugumu gandrīz 5 reizes. Metālu vērtība 2022. gada elektroniskajos atkritumos novērtēta 91 miljarda ASV dolāru apmērā, tostarp varš (19 miljardi), zelts (15 miljardi) un dzelzs (16 miljardi).',
    ],
    read: [
      'Skaitlis 22,3 procenti ietver tikai tos elektroniskos atkritumus, kas dokumentēti kā oficiāli savākti un pārstrādāti; pārējo, pēc Monitora aplēsēm, izmeta kopā ar sadzīves atkritumiem, savāca un pārstrādāja ārpus oficiālajām sistēmām vai apsaimniekoja galvenokārt neformālais sektors. Savākšanas un pārstrādes rādītāji parasti ir augstākie smagākām un apjomīgākām ierīcēm, piemēram, lielajām ierīcēm, siltuma apmaiņas iekārtām un ekrāniem, bet mazo ierīču, piemēram, rotaļlietu, mikroviļņu krāsniņu, putekļsūcēju un e-cigarešu, pārstrāde joprojām ir ļoti zema, pasaulē tikai 12 procentu apmērā. No reģioniem augstākā dokumentētā savākšana un pārstrāde ir Eiropā: 7,53 kg uz cilvēku.',
    ],
    limits: [
      'Nodaļā par Āziju Monitors norāda, ka neformālie darbinieki bieži strādā ar ierobežotiem resursiem un bez pienācīgiem aizsarglīdzekļiem, tāpēc saskaras ar bīstamām ķimikālijām, bet prasībām neatbilstoša elektronisko atkritumu apsaimniekošana katru gadu vidē izdala 58 tūkstošus kg dzīvsudraba un 45 miljonus kg plastmasas ar bromētiem liesmas slāpētājiem. Starptautiskie tirdzniecības kodi jaunas un lietotas ierīces apzīmē vienādi, kas paver ceļu nelikumīgu piegāžu kļūdainai klasifikācijai. Tā kā skaitlis 22,3 procenti ietver tikai dokumentētu oficiālu savākšanu un pārstrādi, plūsmas ārpus oficiālās sistēmas ir aplēses.',
    ],
    sources: [
      {
        label:
          'Starptautiskā telekomunikāciju savienība: Globālais elektronisko atkritumu monitors 2024 (International Telecommunication Union (ITU): The Global E-waste Monitor 2024)',
        url: src('e-waste-recycling', 0),
      },
      {
        label:
          'Starptautiskā telekomunikāciju savienība un Apvienoto Nāciju Organizācijas Mācību un pētījumu institūts: Globālais elektronisko atkritumu monitors 2024, PDF (International Telecommunication Union (ITU) and United Nations Institute for Training and Research (UNITAR): Global E-waste Monitor 2024 (PDF))',
        url: src('e-waste-recycling', 1),
      },
      {
        label:
          'Starptautiskā telekomunikāciju savienība: Globālais elektronisko atkritumu monitors 2024, publikācijas lapa (International Telecommunication Union (ITU): Global E-waste Monitor 2024 (publication page))',
        url: src('e-waste-recycling', 2),
      },
    ],
  },
  'lithium-ion-battery-recycling': {
    title: grid['lithium-ion-battery-recycling'].fixTitle,
    hook: grid['lithium-ion-battery-recycling'].fix,
    imageAlt: grid['lithium-ion-battery-recycling'].imageAlt,
    caption: 'Atvērts elektroauto litija jonu akumulators izstādē Minhenē, redzami moduļi un vadības elektronika.',
    credit: `Foto: RudolfSimon, caur Vikikrātuvi, licence Creative Commons Atsauce, tādi paši noteikumi 3.0 (${ccBySa3}). Faila lapa: ${munich}`,
    what: [
      'Litija jonu akumulatoru pārstrāde apstrādā lietotus elementus un blokus, lai atgūtu metālus jauniem akumulatoriem un citiem mērķiem. Šodien tā balstās galvenokārt uz ražošanas atlikumiem, kas rodas, ražojot elementus un komponentus. Elektrotransportlīdzekļu un enerģijas uzglabāšanas sistēmu akumulatori kļūs par galveno izejvielu tikai ap 2035. gadu, jo gandrīz visi pēdējos gados uzstādītie joprojām tiek lietoti, un tas rada aptuveni 15 gadu laika nobīdi.',
    ],
    why: [
      'Starptautiskā enerģētikas aģentūra ziņo, ka Ķīnā atrodas vairāk nekā 85 procenti pasaules pārstrādes jaudu, bet jaudas pasaulē kopumā lielā mērā pārsniedz pieejamo izejvielu. Ražošanas atlikumi 2030. gadā joprojām veido divas trešdaļas no pieejamās pārstrādes izejvielas. No 2035. gada elektrotransportlīdzekļu un uzglabāšanas sistēmu akumulatori, kas beiguši kalpot, kļūst par lielāko avotu un līdz 2050. gadam veido vairāk nekā 90 procentus pieejamās izejvielas. Scenārijā, kurā tiek sasniegti valstu klimata mērķi, plaša pārstrāde var samazināt litija un niķeļa pieprasījumu par 25 procentiem un kobalta pieprasījumu par 40 procentiem 2050. gadā. Eiropas Komisija norāda, ka pasaules pieprasījums pēc akumulatoriem līdz 2030. gadam pieaugs 14 reizes un Eiropas Savienībai var piederēt 17 procenti no tā.',
    ],
    read: [
      'Šie skaitļi apraksta materiāla plūsmas: šodien izejviela galvenokārt nāk no rūpnīcām ražošanas atlikumu veidā un tikai vēlāk nāks no akumulatoriem, kas beiguši kalpot. Eiropas Savienības Akumulatoru regula stājās spēkā 2023. gada 17. augustā un tiek piemērota no 2024. gada 18. februāra, bet atsevišķas prasības tiek ieviestas pakāpeniski līdz 2031. gadam; tās mērķis ir panākt, lai akumulatori būtu ilgtspējīgi visā to dzīves ciklā, no izejvielu iegūšanas līdz savākšanai un pārstrādei. Ķīmiskajiem sastāviem ar mazāku materiālu vērtību, piemēram, litija dzelzs fosfātam, var būt vajadzīgi citi biznesa modeļi un īpaši noteikumi, lai lietotos akumulatorus pareizi savāktu un apstrādātu. Modeļos ar samaksu par pakalpojumu pārstrādātājam maksā par pakalpojumu, bet pasūtītājs saglabā īpašumtiesības uz atgūtajiem materiāliem; īpaši efektīvi tas ir kopā ar pasākumiem, kas atbildību par akumulatoriem to kalpošanas beigās uzliek automobiļu vai akumulatoru ražotājiem.',
    ],
    limits: [
      'Starptautiskā enerģētikas aģentūra pārstrādes ieguldījumu akumulatoru nozares minerālu vajadzību apmierināšanā šodien dēvē par ierobežotu, un 2050. gada scenāriju skaitļi ir atkarīgi no pārstrādes iekārtu paplašināšanas un lietoto akumulatoru savākšanas rādītāju paaugstināšanas. Līdz 2025. gada augustam melnās masas, metālu bagātā pārstrādes pulvera, imports Ķīnā bija aizliegts; kopš tā laika augstas kvalitātes melnās masas imports ir atļauts, bet noteikumi citās valstīs var ierobežot šo plūsmu. Lietotiem elektroauto, pārvietojoties starp valstīm, vajadzīgas piemērotas dzīves cikla beigu stratēģijas.',
    ],
    sources: [
      {
        label:
          'Starptautiskā enerģētikas aģentūra: elektrotransportlīdzekļu akumulatori, «Globālais elektrotransportlīdzekļu pārskats 2026» (International Energy Agency (IEA): Electric vehicle batteries, Global EV Outlook 2026)',
        url: src('lithium-ion-battery-recycling', 0),
      },
      {
        label:
          'Starptautiskā enerģētikas aģentūra: kritisko minerālu pārstrāde, kopsavilkums (International Energy Agency (IEA): Recycling of Critical Minerals, executive summary)',
        url: src('lithium-ion-battery-recycling', 1),
      },
      {
        label:
          'Starptautiskā enerģētikas aģentūra: elektrotransportlīdzekļu akumulatoru piegādes ķēdes ilgtspēja (International Energy Agency (IEA): EV Battery Supply Chain Sustainability)',
        url: src('lithium-ion-battery-recycling', 2),
      },
      {
        label: 'Eiropas Komisija: akumulatori (European Commission: Batteries)',
        url: src('lithium-ion-battery-recycling', 3),
      },
    ],
  },
  'food-waste-reduction': {
    title: grid['food-waste-reduction'].fixTitle,
    hook: grid['food-waste-reduction'].fix,
    imageAlt: grid['food-waste-reduction'].imageAlt,
    caption: 'Svaigi dārzeņi un augļi, kas izmesti no hipermārketa pēc vienas vai divām dienām plauktos.',
    credit: `Foto: Foerster, caur Vikikrātuvi, nodošana publiskajā domēnā Creative Commons Zero (${cc0}). Faila lapa: ${produce}`,
    what: [
      'Pārtikas atkritumu samazināšana nozīmē, ka ēdama pārtika veikalos, restorānos un mājās tiek izmantota paredzētajā veidā, bet citiem lietojumiem nodod tikai neizbēgamās atliekas. Apvienoto Nāciju Organizācijas Vides programma savā Pārtikas atkritumu indeksā seko pārtikas atkritumiem mazumtirdzniecībā, ēdināšanā un mājsaimniecībās. Ilgtspējīgas attīstības mērķu uzdevums ir līdz 2030. gadam uz pusi samazināt pasaules pārtikas atkritumus uz vienu iedzīvotāju mazumtirdzniecības un patērētāju līmenī. Amerikas Savienoto Valstu Vides aizsardzības aģentūra savā izmesta ēdiena skalā sakārto iespējas: atkritumu novēršana, ēdiena nodošana vajadzīgajiem un tā pārstrāde jaunos produktos ir visvēlamākie, bet apglabāšana poligonos, sadedzināšana un novadīšana kanalizācijā ir vismazāk vēlamie.',
    ],
    why: [
      '2022. gadā pasaule izmeta aptuveni 1,05 miljardus tonnu pārtikas mazumtirdzniecībā, ēdināšanā un mājsaimniecībās, tas ir 19 procentus no patērētājiem pieejamās pārtikas. Mājsaimniecības izmeta 631 miljonu tonnu (60 procentus), ēdināšana 290 miljonus tonnu, mazumtirdzniecība 131 miljonu tonnu. Uz vienu cilvēku tas ir 132 kg gadā, no tiem 79 kg izmet mājsaimniecībās. Ja vismaz ceturtā daļa mājsaimniecību izmestās pārtikas bija ēdama, ko ziņojums dēvē par ļoti piesardzīgu vērtējumu, tas ir līdzvērtīgi 1 miljardam maltīšu, kas tiek izmestas katru dienu. Pārtikas atkritumi rada aptuveni no 8 līdz 10 procentiem pasaules siltumnīcefekta gāzu emisiju, ja ieskaita gan zudumus, gan atkritumus. Amerikas Savienotajās Valstīs no 30 līdz 40 procentiem pārtikas piedāvājuma paliek neapēsta, un valsts mērķis ir līdz 2030. gadam uz pusi samazināt pārtikas zudumus un atkritumus.',
    ],
    read: [
      'Izmesta ēdiena skala sakārto iespējas no vēlamākās līdz mazāk vēlamajai: novēršana, nodošana vajadzīgajiem un pārstrāde jaunos produktos atstāj ēdienu ēdienu, bet kompostēšana un anaerobā pārstrāde atgūst barības vielas un enerģiju no atliekām. Šajos 1,05 miljardos tonnu ietilpst arī neēdamās daļas, kas nāk līdzi pārtikai, bet uzskaitīta tikai mazumtirdzniecība, ēdināšana un mājsaimniecības. Šīs tonnas pievienojas aptuveni 13 procentiem pasaules pārtikas, kas tiek zaudēti piegādes ķēdē pirms mazumtirdzniecības.',
    ],
    limits: [
      'Mājsaimniecību dati ir uzlabojušies visvairāk: 194 datu punkti no 93 valstīm, un 85 procenti pasaules iedzīvotāju dzīvo valstī, kurā ir vismaz daži dati par mājsaimniecību pārtikas atkritumiem. Dati par mazumtirdzniecību un ēdināšanu mainījušies maz, bet precīzu valsts mēroga datu ārpus augsta ienākuma valstīm joprojām trūkst, tāpēc pasaules rādītājs paliek aplēse. Ilgtspējīgas attīstības mērķu uzdevums aptver mazumtirdzniecību un patērētājus, bet 13 procentus, kas tiek zaudēti agrāk piegādes ķēdē, uzskaita atsevišķi.',
    ],
    sources: [
      {
        label:
          'Apvienoto Nāciju Organizācijas Vides programma: Pārtikas atkritumu indeksa ziņojums 2024 (United Nations Environment Programme (UNEP): Food Waste Index Report 2024)',
        url: src('food-waste-reduction', 0),
      },
      {
        label:
          'Apvienoto Nāciju Organizācijas Vides programma: Pārtikas atkritumu indeksa ziņojums 2024, PDF (United Nations Environment Programme (UNEP): Food Waste Index Report 2024 (PDF))',
        url: src('food-waste-reduction', 1),
      },
      {
        label:
          'Apvienoto Nāciju Organizācijas Vides programma: Pārtikas atkritumu indeksa ziņojums 2024, galvenie secinājumi, PDF (United Nations Environment Programme (UNEP): Food Waste Index Report 2024, Key messages (PDF))',
        url: src('food-waste-reduction', 2),
      },
      {
        label:
          'Amerikas Savienoto Valstu Vides aizsardzības aģentūra: izmesta ēdiena skala (United States Environmental Protection Agency (EPA): Wasted Food Scale)',
        url: src('food-waste-reduction', 3),
      },
      {
        label:
          'Amerikas Savienoto Valstu Vides aizsardzības aģentūra: Amerikas Savienoto Valstu 2030. gada mērķis pārtikas zudumu un atkritumu samazināšanai (United States Environmental Protection Agency (EPA): United States 2030 Food Loss and Waste Reduction Goal)',
        url: src('food-waste-reduction', 4),
      },
    ],
  },
};
