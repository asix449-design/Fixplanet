import type { RemittanceCopy } from './remittances';

export const plRemittances: RemittanceCopy = {
  layer: 'Przekazy pieniężne',
  title: 'Przekazy pieniężne',
  cards: {
    'remittances-global-flows': {
      tag: 'Przepływy · Kraje o niskim i średnim dochodzie · 2023 i szacunek na 2024',
      title: 'Przekazy pieniężne do krajów rozwijających się',
      hook: 'Kraje o niskim i średnim dochodzie otrzymały szacunkowo 656 mld USD przekazów odnotowanych w oficjalnych statystykach w 2023 r.; według zaktualizowanego szacunku autorów Banku Światowego w 2024 r. było to około 685 mld USD — nadal więcej niż łączna wartość bezpośrednich inwestycji zagranicznych i oficjalnej pomocy rozwojowej.',
      figure: '656',
      unit: 'mld USD, 2023',
      rows: [
        { label: '2023', figure: '656 mld USD (+0,7%)' },
        { label: 'Szacunek na 2024', figure: 'około 685 mld USD (+5,8%)' },
      ],
      sections: [
        {
          body: 'To roczny przepływ pieniędzy wysyłanych przez migrantów do krajów o niskim i średnim dochodzie. Według raportu Banku Światowego Migration and Development Brief 40 („Migracja i rozwój”, nr 40; czerwiec 2024) w 2023 r. było to 656 mld USD (+0,7%). Według aktualizacji na blogu Banku Światowego PeopleMove z 18 grudnia 2024 r. — około 685 mld USD w 2024 r. (+5,8%). Ze względu na kanały nieformalne rzeczywista suma jest większa.',
        },
      ],
      plate: 'Słupki to suma dla krajów o niskim i średnim dochodzie za lata 2017–2023 z raportu Migration and Development Brief 40 („Migracja i rozwój”, nr 40), w miliardach USD. Słupek za 2023 r. to 656. Szacunek na 2024 r. około 685 mld USD w tekście jest późniejszą aktualizacją i nie ma osobnego słupka.',
    },
    'remittances-top-recipients': {
      tag: 'Odbiorcy · szacunek na 2024',
      title: 'Dokąd trafiają przekazy',
      hook: 'Pięć krajów z największymi oczekiwanymi wpływami w 2024: Indie ~129 mld USD, Meksyk ~68 mld, Chiny ~48 mld, Filipiny ~40 mld, Pakistan ~33 mld.',
      figure: '138',
      unit: 'mld USD, Indie na mapie 2024',
      rows: [
        { label: 'Indie, szacunek na 2024', figure: '~129 mld USD' },
        { label: 'Meksyk, szacunek na 2024', figure: '~68 mld USD' },
        { label: 'Chiny, szacunek na 2024', figure: '~48 mld USD' },
        { label: 'Filipiny, szacunek na 2024', figure: '~40 mld USD' },
        { label: 'Pakistan, szacunek na 2024', figure: '~33 mld USD' },
      ],
      sections: [
        {
          body: 'Szacunki wolumenu na 2024 r. (blog Banku Światowego PeopleMove, 18 grudnia 2024 r.). W raporcie Brief 40 za 2023 r. jest tych samych pięć krajów w tej samej kolejności. Duże wpływy w dolarach i wysoki udział w PKB to dwie różne miary.',
        },
      ],
      plate: 'Mapa nie jest tą listą. Pokazuje przekazy osobiste otrzymane, w bieżących USD, z bazy Banku Światowego „Wskaźniki rozwoju świata” za 2024 r. — ostatni rok z szerokim zestawem gospodarek (160). Największe kwoty na mapie: Indie (około 138 mld USD), Meksyk (około 68 mld), Filipiny (około 40 mld), Francja (około 39 mld) i Pakistan (około 35 mld). Chiny — około 25 mld. Uwzględnione są też kraje o wysokim dochodzie. Ląd bez liczby za 2024 r. zostaje szary. Te sumy liczone są według zasad bilansu płatniczego i nie są szacunkami z listy powyżej.',
    },
    'remittances-gdp-share': {
      tag: 'Zależność · szacunek na 2024',
      title: 'Przekazy jako udział w PKB',
      hook: 'W mniejszych gospodarkach przekazy mogą przewyższać inne finansowanie: Tadżykistan ~45% PKB, Tonga ~38%, dalej Nikaragua, Liban i Samoa około 26–27% w szacunkach na 2024.',
      figure: '47',
      unit: 'procent PKB, Tadżykistan na mapie 2024',
      rows: [
        { label: 'Tadżykistan, szacunek na 2024', figure: '~45% PKB' },
        { label: 'Tonga, szacunek na 2024', figure: '~38% PKB' },
        { label: 'Nikaragua, Liban i Samoa, szacunki na 2024', figure: 'około 26–27% PKB' },
      ],
      sections: [
        {
          body: 'Udział w PKB i łączna kwota w USD odpowiadają na różne pytania. Indie mogą prowadzić pod względem kwoty w dolarach przy skromnym udziale w PKB; Tonga lub Tadżykistan mogą być poza top 5 pod względem dolarów i nadal należeć do gospodarek najbardziej zależnych od przekazów.',
        },
      ],
      plate: 'Mapa nie jest tą listą. Pokazuje przekazy osobiste otrzymane jako udział w PKB z bazy Banku Światowego „Wskaźniki rozwoju świata” za 2024 r. (160 gospodarek). Najwyższe udziały na mapie: Tadżykistan (około 47%), Tonga (około 39%), Nikaragua (około 27%), Nepal (około 26%) i Honduras (około 26%). Samoa — około 24%. Liban nie ma liczby za 2024 r., więc zostaje szary. Indie na tej mapie to około 3,7% PKB. Te udziały nie są szacunkami z listy powyżej.',
    },
    'remittances-sending-cost': {
      tag: 'Ceny · RPW',
      title: 'Koszt wysyłania pieniędzy do domu',
      hook: 'Wysyłka przekazu nadal kosztuje średnio na świecie około 6,4% kwoty — ponad dwa razy więcej niż wynoszący 3% cel w ramach Celów Zrównoważonego Rozwoju; serwis Banku Światowego Remittance Prices Worldwide („Ceny przekazów pieniężnych na świecie”, RPW), zaktualizowany 18 sierpnia 2025, podaje około 6,36%.',
      figure: '6,4',
      unit: 'procent, średnia światowa, koniec 2023',
      rows: [
        { label: 'Średnia światowa, IV kwartał 2023', figure: '6,4%' },
        { label: '„Ceny przekazów pieniężnych na świecie”, 18 sierpnia 2025', figure: 'około 6,36%' },
        { label: 'Cel Celów Zrównoważonego Rozwoju', figure: '3%' },
      ],
      sections: [
        {
          body: 'RPW śledzi cenę typowego małego przekazu (często 200 USD) w setkach korytarzy. Według raportu Brief 40 w IV kwartale 2023 r.: 6,4%. Serwis RPW, zaktualizowany 18 sierpnia 2025 r.: około 6,36% w 367 korytarzach. Kanały cyfrowe są zwykle tańsze; cel nr 10 Celów Zrównoważonego Rozwoju zakłada 3% do 2030 r.',
        },
      ],
      plate: 'Mapa nie jest tą średnią światową. Pokazuje średni koszt wysłania przekazu do danego kraju, jako procent kwoty, z bazy Banku Światowego „Wskaźniki rozwoju świata” za 2023 r. — ostatni rok tego szeregu (92 kraje z dodatnią liczbą). W tym szeregu nie ma sumy światowej. Wśród najwyższych kosztów na mapie są Kuba (około 20%), Angola (około 13%) i Sierra Leone (około 10%). Ląd bez dodatniej liczby za 2023 r. zostaje szary. Średnie światowe w tekście pochodzą z serwisu „Ceny przekazów pieniężnych na świecie” i z raportu Brief 40, a nie z tej mapy.',
    },
    'remittances-wdi-series': {
      tag: 'Dane · WDI',
      title: 'Przekazy osobiste w World Development Indicators',
      hook: 'Po zakończeniu serii raportów KNOMAD o migracji i rozwoju w 2024 r. Bank Światowy nadal publikuje w bazie World Development Indicators („Wskaźniki rozwoju świata”) krajowe szeregi czasowe przekazów osobistych — otrzymanych i wysłanych — w USD, a otrzymanych także jako udział w PKB.',
      figure: '857',
      unit: 'mld USD otrzymane, świat, 2024',
      rows: [
        { label: 'Otrzymane, świat, 2024', figure: 'około 857 mld USD' },
        { label: 'Wysłane, świat, 2024', figure: 'około 619 mld USD' },
        { label: 'Linia otrzymanych', figure: '1970–2024' },
        { label: 'Linia wysłanych', figure: '1966–2024' },
      ],
      sections: [
        {
          body: 'Trzy szeregi WDI — przekazy osobiste otrzymane (w bieżących USD), otrzymane (% PKB) i wysłane (w bieżących USD) — są aktualizowane także po zakończeniu serii Migration and Development Brief. Przekazy osobiste w WDI liczone są według zasad bilansu płatniczego, więc roczne sumy mogą różnić się od szacunku Banku Światowego dla przepływów do krajów o niskim i średnim dochodzie. Strony wskaźników w serwisie otwartych danych Banku Światowego oferują wykresy dla krajów, mapę świata i dane do pobrania.',
        },
      ],
      plate: 'Linie to sumy światowe przekazów osobistych z bazy Banku Światowego „Wskaźniki rozwoju świata”, w miliardach bieżących USD. Pomarańczowa linia to przekazy otrzymane, 1970–2024, na końcu około 857 mld USD. Niebieska linia to przekazy wysłane, 1966–2024, na końcu około 619 mld USD. 2024 jest ostatnim rokiem z szerokim zestawem gospodarek. Niepełny 2025 nie jest narysowany. Te sumy światowe nie są szacunkiem dla krajów o niskim i średnim dochodzie na karcie przepływów.',
    },
  },
};
