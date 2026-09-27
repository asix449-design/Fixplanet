import type { RemittanceCopy } from './remittances';

export const lvRemittances: RemittanceCopy = {
  layer: 'Naudas pārvedumi',
  title: 'Naudas pārvedumi',
  cards: {
    'remittances-global-flows': {
      tag: 'Plūsmas · Zemu un vidēju ienākumu valstis · 2023 un 2024. gada novērtējums',
      title: 'Naudas pārvedumi uz jaunattīstības valstīm',
      hook: 'Zemu un vidēju ienākumu valstis 2023. gadā saņēma aptuveni 656 mljrd. USD oficiāli uzskaitītu pārvedumu; Pasaules Bankas autoru 2024. gada novērtējums ir ap 685 mljrd. USD — joprojām vairāk nekā ārvalstu tiešās investīcijas un oficiālā attīstības palīdzība kopā.',
      figure: '656',
      unit: 'mljrd. USD, 2023',
      rows: [
        { label: '2023', figure: '656 mljrd. USD (+0,7%)' },
        { label: '2024. gada novērtējums', figure: 'ap 685 mljrd. USD (+5,8%)' },
      ],
      sections: [
        {
          heading: 'Kas ir šis skaitlis',
          body: 'Oficiāli uzskaitītā nauda, ko migranti sūta mājās uz zemu un vidēju ienākumu valstīm. Pasaules Bankas ziņojumā „Migrācija un attīstība”, 40. izdevumā (2024. gada jūnijs) 2023. gada kopsumma ir aptuveni 656 mljrd. USD (+0,7% pēc spēcīgajiem pēcpandēmijas gadiem). Tās pašas pētnieku komandas atjauninājumā emuārā PeopleMove 2024. gada 18. decembrī 2024. gadam novērtēti aptuveni 685 mljrd. USD (+5,8%). Neformālo kanālu dēļ patiesā summa ir lielāka.',
        },
        {
          heading: 'Kāpēc tas ir svarīgi',
          body: 'Daudzām valstīm šīs plūsmas ir lielākais stabilais ārējā finansējuma avots — bieži lielāks par ārvalstu tiešajām investīcijām vai palīdzību. Tās uztur mājsaimniecību patēriņu, izglītību un veselību, un, kad citas kapitāla plūsmas svārstās, tās kalpo kā rezerve maksājumu bilances tekošajam kontam.',
        },
        {
          heading: 'Kā to lasīt',
          body: 'Tie ir novērtējumi par katrā kalendārajā gadā nosūtīto naudu. Pieaugums reģionos ir nevienmērīgs; reģionālās tabulas, uz kurām balstās kopsumma, publicētas Pasaules Bankas ziņojumā „Migrācija un attīstība”, 40. izdevumā, un 2024. gada decembra atjauninājumā.',
        },
      ],
      plate:
        'Grafiks: naudas pārvedumi uz zemu un vidēju ienākumu valstīm, 2017–2023, Pasaules Banka, „Migrācija un attīstība”, 40. izdevums. Skaitlis ir miljardi USD.',
    },
    'remittances-top-recipients': {
      tag: 'Saņēmēji · 2024. gada novērtējums',
      title: 'Kur nonāk pārvedumi',
      hook: 'Piecas valstis ar lielākajām gaidāmajām ieplūdēm 2024. gadā: Indija ~129 mljrd. USD, Meksika ~68, Ķīna ~48, Filipīnas ~40, Pakistāna ~33.',
      figure: '138',
      unit: 'mljrd. USD, Indija 2024. gada kartē',
      rows: [
        { label: 'Indija, 2024. gada novērtējums', figure: '~129 mljrd. USD' },
        { label: 'Meksika, 2024. gada novērtējums', figure: '~68 mljrd. USD' },
        { label: 'Ķīna, 2024. gada novērtējums', figure: '~48 mljrd. USD' },
        { label: 'Filipīnas, 2024. gada novērtējums', figure: '~40 mljrd. USD' },
        { label: 'Pakistāna, 2024. gada novērtējums', figure: '~33 mljrd. USD' },
      ],
      sections: [
        {
          heading: 'Kas ir šis saraksts',
          body: 'Novērtētās 2024. gada ieplūdes ASV dolāros lielākajās saņēmējvalstīs starp zemu un vidēju ienākumu ekonomikām, pēc Pasaules Bankas emuāra PeopleMove 2024. gada 18. decembra atjauninājuma. Pasaules Bankas ziņojuma „Migrācija un attīstība”, 40. izdevuma, 2023. gada reitingā bija tās pašas piecas valstis tajā pašā secībā (Indija 120 mljrd. USD · Meksika 66 mljrd. USD · Ķīna 50 mljrd. USD · Filipīnas 39 mljrd. USD · Pakistāna 27 mljrd. USD).',
        },
        {
          heading: 'Kāpēc tas ir svarīgi',
          body: 'Lielas saņemtās summas ietekmē valstu valūtas tirgus un mājsaimniecību ienākumus lielākajās izcelsmes un galamērķa valstu sistēmās — īpaši Indija – Persijas līča valstis un ESAO, Meksika – ASV un Filipīnu ilggadējie ārzemēs strādājošo koridori.',
        },
        {
          heading: 'Kā to lasīt',
          body: 'Reitings pēc summas dolāros rāda, kur nonāk visvairāk naudas; atkarību no pārvedumiem mēra kā IKP daļu. Ķīna var ieņemt augstu vietu dolāru ziņā, lai gan pārvedumi veido nelielu tās IKP daļu; neliela salu ekonomika var atrasties tālu saraksta lejasdaļā un tomēr būt ļoti atkarīga no pārvedumiem.',
        },
      ],
      plate:
        'Karte: saņemtie personīgie pārvedumi, 2024, Pasaules Banka, World Development Indicators („Pasaules attīstības rādītāji”). Šie skaitļi balstīti uz maksājumu bilances definīcijām un atšķiras no novērtējumiem sarakstā.',
    },
    'remittances-gdp-share': {
      tag: 'Atkarība · 2024. gada novērtējums',
      title: 'Pārvedumi kā IKP daļa',
      hook: 'Mazākās ekonomikās pārvedumi var pārsniegt citu finansējumu: Tadžikistāna ~45% no IKP, Tonga ~38%, tālāk Nikaragva, Libāna un Samoa ap 26–27% 2024. gada novērtējumā.',
      figure: '47',
      unit: 'procenti no IKP, Tadžikistāna 2024. gada kartē',
      rows: [
        { label: 'Tadžikistāna, 2024. gada novērtējums', figure: '~45% no IKP' },
        { label: 'Tonga, 2024. gada novērtējums', figure: '~38% no IKP' },
        { label: 'Nikaragva, Libāna un Samoa, 2024. gada novērtējums', figure: 'ap 26–27% no IKP' },
      ],
      sections: [
        {
          heading: 'Kas ir šis saraksts',
          body: 'Novērtētās pārvedumu ieplūdes procentos no IKP valstīm, kas no tiem visvairāk atkarīgas, pēc PeopleMove 2024. gada atjauninājuma. Pasaules Bankas ziņojuma „Migrācija un attīstība”, 40. izdevuma, 2023. gada saraksts bija līdzīgs (Tonga 41% · Tadžikistāna 39% · Libāna 31% · Samoa 28% · Nikaragva 27%).',
        },
        {
          heading: 'Kāpēc tas ir svarīgi',
          body: 'Kur pārvedumi veido divciparu IKP daļu, tie finansē tekošā konta deficītu, mājsaimniecību patēriņu un bieži arī fiskālo stabilitāti vairāk nekā ārvalstu tiešās investīcijas vai palīdzība. Tāpēc satricinājumi uzņēmējvalstu darba tirgos vai pārvedumu koridoros ātri atsaucas uz iekšzemes pieprasījumu.',
        },
        {
          heading: 'Kā to lasīt',
          body: 'IKP daļa un absolūtais apjoms ASV dolāros atbild uz dažādiem jautājumiem. Indija var būt pasaulē pirmā dolāru ziņā un tomēr uzrādīt nelielu IKP daļu; Tonga vai Tadžikistāna var atrasties ārpus pirmā piecinieka pēc summas dolāros un tomēr būt starp pasaules ekonomikām, kas visvairāk atkarīgas no pārvedumiem.',
        },
      ],
      plate:
        'Karte: saņemtie personīgie pārvedumi kā IKP daļa, 2024, Pasaules Banka, World Development Indicators („Pasaules attīstības rādītāji”). Šie skaitļi balstīti uz maksājumu bilances definīcijām un atšķiras no novērtējumiem sarakstā.',
    },
    'remittances-sending-cost': {
      tag: 'Cenas · RPW',
      title: 'Naudas nosūtīšanas izmaksas',
      hook: 'Pārvedumu nosūtīšana joprojām izmaksā vidēji ap 6,4% no summas — vairāk nekā divreiz virs 3% mērķa, kas noteikts ilgtspējīgas attīstības mērķos (IAM); Pasaules Bankas datubāze par naudas pārvedumu cenām, atjaunināta 2025. gada 18. augustā, rāda ap 6,36%.',
      figure: '6,4',
      unit: 'procenti, pasaules vidējais, 2023. gada beigas',
      rows: [
        { label: 'Pasaules vidējais, 2023. gada 4. ceturksnis', figure: '6,4%' },
        { label: '„Naudas pārvedumu cenas pasaulē”, 2025. gada 18. augusts', figure: 'ap 6,36%' },
        { label: 'Ilgtspējīgas attīstības mērķis', figure: '3%' },
      ],
      sections: [
        {
          heading: 'Kas ir šis skaitlis',
          body: 'Pasaules Bankas datubāze par naudas pārvedumu cenām izseko tipiska neliela pārveduma nosūtīšanas izmaksas (bieži par etalonu ņem 200 USD) simtiem koridoru starp valstīm. Pasaules Bankas ziņojums „Migrācija un attīstība”, 40. izdevums, norādīja pasaules vidējo 6,4% 2023. gada 4. ceturksnī (gadu iepriekš — 6,2%). Šī datubāze, pēdējo reizi atjaunināta 2025. gada 18. augustā, uzrāda pasaules vidējo ap 6,36% 367 koridoros (48 sūtītājvalstis un 105 saņēmējvalstis).',
        },
        {
          heading: 'Kāpēc tas ir svarīgi',
          body: 'Katrs komisijas procentpunkts samazina summu, kas nonāk līdz ģimenēm. Digitālie kanāli parasti ir lētāki par nedigitālajiem; koridori uz Subsahāras Āfriku bieži bijuši starp dārgākajiem. 10. ilgtspējīgas attīstības mērķa (IAM 10) uzdevums ir līdz 2030. gadam samazināt pasaules vidējo līdz 3%; pašreizējie vidējie rādītāji joprojām ir krietni virs šīs robežas.',
        },
        {
          heading: 'Kā to lasīt',
          body: 'Pasaules vidējais slēpj atsevišķu koridoru galējības: dažos no tiem pārvedums maksā vairākas reizes vairāk par vidējo. Šī datubāze mēra pārveduma cenu; tās vietnē lasītāji var salīdzināt izmaksas pa koridoriem.',
        },
      ],
      plate:
        'Karte: vidējās izmaksas, sūtot naudas pārvedumus uz valsti, 2023, Pasaules Banka, World Development Indicators („Pasaules attīstības rādītāji”). Šie skaitļi atšķiras no pasaules vidējiem tekstā.',
    },
    'remittances-wdi-series': {
      tag: 'Dati · WDI',
      title: 'Personīgie pārvedumi datubāzē World Development Indicators',
      hook: 'Pēc Pasaules Bankas globālās partnerības migrācijas un attīstības jomā ziņojumu sērijas beigām 2024. gadā Pasaules Banka joprojām publicē datubāzē World Development Indicators („Pasaules attīstības rādītāji”) valstu laika rindas par personīgajiem pārvedumiem — saņemtajiem un nosūtītajiem — USD, bet saņemtajiem arī kā IKP daļu.',
      figure: '857',
      unit: 'mljrd. USD saņemti, pasaule, 2024',
      rows: [
        { label: 'Saņemti, pasaule, 2024', figure: 'ap 857 mljrd. USD' },
        { label: 'Nosūtīti, pasaule, 2024', figure: 'ap 619 mljrd. USD' },
        { label: 'Saņemto līnija', figure: '1970–2024' },
        { label: 'Nosūtīto līnija', figure: '1966–2024' },
      ],
      sections: [
        {
          heading: 'Kas tas ir',
          body: 'Trīs World Development Indicators („Pasaules attīstības rādītāji”) rindas: saņemtie personīgie pārvedumi (faktiskajās cenās, USD), saņemtie personīgie pārvedumi (% no IKP) un nosūtītie personīgie pārvedumi (faktiskajās cenās, USD). Tās var aplūkot pa valstīm Pasaules Bankas atvērto datu rādītāju lapās un datubāzē World Development Indicators platformā DataBank; dati turpina atjaunoties arī pēc Migration and Development Brief sērijas beigām.',
        },
        {
          heading: 'Kāpēc tas ir svarīgi',
          body: 'Lasītājiem, kuri blakus jaunākajam pasaules kopskaitlim vēlas redzēt garas valstu laika rindas, vajadzīga rinda, kas turpina atjaunoties. WDI joprojām ir Pasaules Bankas standarta valstu tabula par personīgajiem pārvedumiem.',
        },
        {
          heading: 'Kā to lasīt',
          body: 'WDI personīgos pārvedumus uzskaita pēc maksājumu bilances noteikumiem, tāpēc gada summas var atšķirties no Pasaules Bankas galvenā novērtējuma par plūsmām uz zemu un vidēju ienākumu valstīm. Katra rādītāja lapā ir valstu grafiki, pasaules karte un lejupielādējami dati.',
        },
      ],
      plate:
        'Grafiks: personīgo pārvedumu pasaules kopsummas, saņemtie 1970–2024 un nosūtītie 1966–2024, Pasaules Banka, World Development Indicators („Pasaules attīstības rādītāji”). Šie skaitļi balstīti uz maksājumu bilances definīcijām.',
    },
  },
};
