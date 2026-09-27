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
          body: 'Tā ir gada naudas plūsma, ko migranti sūta mājās uz zemu un vidēju ienākumu valstīm. Pasaules Bankas ziņojumā Migration and Development Brief 40 („Migrācija un attīstība”, 40. izdevums; 2024. gada jūnijs): 656 mljrd. USD 2023. gadā (+0,7%). Pasaules Bankas emuāra PeopleMove atjauninājumā 2024. gada 18. decembrī: ap 685 mljrd. USD 2024. gadā (+5,8%). Neformālo kanālu dēļ patiesā summa ir lielāka.',
        },
      ],
      plate: 'Stabiņi ir zemu un vidēju ienākumu valstu kopsumma 2017.–2023. gadam no ziņojuma Migration and Development Brief 40 („Migrācija un attīstība”, 40. izdevums), miljardos USD. 2023. gada stabiņš ir 656. Tekstā minētais 2024. gada novērtējums ap 685 mljrd. USD ir vēlāks atjauninājums, un atsevišķa stabiņa tam nav.',
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
          body: '2024. gada apjoma novērtējums (Pasaules Bankas emuārs PeopleMove, 2024. gada 18. decembris). Ziņojumā Brief 40 par 2023. gadu — tās pašas piecas valstis tajā pašā secībā. Liela summa dolāros un liela IKP daļa ir divi dažādi rādītāji.',
        },
      ],
      plate: 'Karte nav šis saraksts. Tā rāda saņemtos personīgos pārvedumus faktiskajās cenās, USD, no Pasaules Bankas datubāzes „Pasaules attīstības rādītāji” 2024. gadā — pēdējais gads ar plašu ekonomiku kopu (160). Lielākās summas kartē: Indija (ap 138 mljrd. USD), Meksika (ap 68), Filipīnas (ap 40), Francija (ap 39) un Pakistāna (ap 35). Ķīna — ap 25. Iekļautas arī augstu ienākumu valstis. Zeme bez 2024. gada skaitļa paliek pelēka. Šīs summas uzskaita pēc maksājumu bilances noteikumiem, un tās nav saraksta novērtējumi.',
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
          body: 'IKP daļa un absolūtais apjoms dolāros atbild uz dažādiem jautājumiem. Indija var būt pirmā dolāru ziņā ar nelielu IKP daļu; Tonga vai Tadžikistāna var būt ārpus dolāru top 5 un tomēr būt starp ekonomikām, kas visvairāk atkarīgas no pārvedumiem.',
        },
      ],
      plate: 'Karte nav šis saraksts. Tā rāda saņemtos personīgos pārvedumus kā IKP daļu no Pasaules Bankas datubāzes „Pasaules attīstības rādītāji” 2024. gadā (160 ekonomikas). Augstākās daļas kartē: Tadžikistāna (ap 47%), Tonga (ap 39%), Nikaragva (ap 27%), Nepāla (ap 26%) un Hondurasa (ap 26%). Samoa — ap 24%. Libānai nav 2024. gada skaitļa, tāpēc tā paliek pelēka. Indija šajā kartē ir ap 3,7% no IKP. Šīs daļas nav saraksta novērtējumi.',
    },
    'remittances-sending-cost': {
      tag: 'Cenas · RPW',
      title: 'Naudas nosūtīšanas izmaksas',
      hook: 'Pārvedumu nosūtīšana joprojām izmaksā vidēji ap 6,4% no summas — vairāk nekā divreiz virs 3% mērķa, kas noteikts ilgtspējīgas attīstības mērķos (IAM); Pasaules Bankas vietne Remittance Prices Worldwide („Naudas pārvedumu cenas pasaulē”, RPW), atjaunināta 2025. gada 18. augustā, rāda ap 6,36%.',
      figure: '6,4',
      unit: 'procenti, pasaules vidējais, 2023. gada beigas',
      rows: [
        { label: 'Pasaules vidējais, 2023. gada 4. ceturksnis', figure: '6,4%' },
        { label: '„Naudas pārvedumu cenas pasaulē”, 2025. gada 18. augusts', figure: 'ap 6,36%' },
        { label: 'Ilgtspējīgas attīstības mērķis', figure: '3%' },
      ],
      sections: [
        {
          body: 'RPW izseko tipiska neliela pārveduma (bieži 200 USD) cenu simtiem koridoru. Pēc ziņojuma Brief 40 datiem 2023. gada 4. ceturksnī — 6,4%. RPW vietne, atjaunināta 2025. gada 18. augustā: ap 6,36% 367 koridoros. Digitālie kanāli parasti ir lētāki; 10. ilgtspējīgas attīstības mērķis paredz 3% līdz 2030. gadam.',
        },
      ],
      plate: 'Karte nav šis pasaules vidējais. Tā rāda vidējās izmaksas, sūtot pārvedumu uz katru valsti, procentos no summas, no Pasaules Bankas datubāzes „Pasaules attīstības rādītāji” 2023. gadā — pēdējais gads šajā rindā (92 valstis ar pozitīvu skaitli). Šajā rindā nav pasaules kopsummas. Augstāko izmaksu starpā kartē ir Kuba (ap 20%), Angola (ap 13%) un Sjerraleone (ap 10%). Zeme bez pozitīva 2023. gada skaitļa paliek pelēka. Teksta pasaules vidējie ir no vietnes „Naudas pārvedumu cenas pasaulē” un no ziņojuma Brief 40, nevis no šīs kartes.',
    },
    'remittances-wdi-series': {
      tag: 'Dati · WDI',
      title: 'Personīgie pārvedumi datubāzē World Development Indicators',
      hook: 'Pēc KNOMAD ziņojumu sērijas par migrāciju un attīstību beigām 2024. gadā Pasaules Banka joprojām publicē datubāzē World Development Indicators („Pasaules attīstības rādītāji”) valstu laika rindas par personīgajiem pārvedumiem — saņemtajiem un nosūtītajiem — USD, bet saņemtajiem arī kā IKP daļu.',
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
          body: 'Trīs WDI rindas — saņemtie personīgie pārvedumi (faktiskajās cenās, USD), saņemtie (% no IKP) un nosūtītie (faktiskajās cenās, USD) — turpina atjaunoties arī pēc Migration and Development Brief sērijas beigām. WDI personīgos pārvedumus uzskaita pēc maksājumu bilances noteikumiem, tāpēc gada summas var atšķirties no Pasaules Bankas novērtējuma par plūsmām uz zemu un vidēju ienākumu valstīm. Pasaules Bankas atvērto datu rādītāju lapās pieejami valstu grafiki, pasaules karte un lejupielādējami dati.',
        },
      ],
      plate: 'Līnijas ir personīgo pārvedumu pasaules kopsummas no Pasaules Bankas datubāzes „Pasaules attīstības rādītāji”, miljardos faktisko USD. Oranžā līnija ir saņemtie pārvedumi, 1970–2024, beigās ap 857 mljrd. USD. Zilā līnija ir nosūtītie, 1966–2024, beigās ap 619 mljrd. USD. 2024. gads ir pēdējais ar plašu ekonomiku kopu. Nepilns 2025. gads nav uzzīmēts. Šīs pasaules kopsummas nav zemu un vidēju ienākumu valstu novērtējums plūsmu kartītē.',
    },
  },
};
