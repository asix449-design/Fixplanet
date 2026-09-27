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
          heading: 'Czym jest ta liczba',
          body: 'Pieniądze wysyłane przez migrantów do domu, do krajów o niskim i średnim dochodzie, odnotowane w oficjalnych statystykach. Według raportu Banku Światowego Migration and Development Brief 40 („Migracja i rozwój”, nr 40; czerwiec 2024 r.) w 2023 r. było to około 656 mld USD (+0,7% po silnych latach odbicia po pandemii). Aktualizacja tego samego zespołu badawczego na blogu PeopleMove z 18 grudnia 2024 r. szacuje sumę za 2024 r. na około 685 mld USD (+5,8%). Ze względu na kanały nieformalne rzeczywista suma jest większa.',
        },
        {
          heading: 'Dlaczego to ważne',
          body: 'Dla wielu krajów te przepływy są największym stabilnym źródłem finansowania zewnętrznego — często większym niż bezpośrednie inwestycje zagraniczne czy pomoc. Wspierają konsumpcję gospodarstw domowych, edukację i zdrowie, a gdy inne przepływy kapitału się wahają, stanowią bufor dla rachunku obrotów bieżących.',
        },
        {
          heading: 'Jak to czytać',
          body: 'To szacunki pieniędzy wysłanych w każdym roku kalendarzowym. Wzrost w poszczególnych regionach jest nierówny; tabele regionalne, na których opiera się łączna liczba, publikują raport Brief 40 i aktualizacja z grudnia 2024 r.',
        },
      ],
      plate:
        'Wykres: przekazy pieniężne do krajów o niskim i średnim dochodzie, 2017–2023, Bank Światowy, „Migracja i rozwój”, nr 40 (Migration and Development Brief 40). Liczba to miliardy USD.',
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
          heading: 'Czym jest ta lista',
          body: 'Szacowane wpływy w 2024 r., w dolarach amerykańskich, do największych krajów odbiorców wśród gospodarek o niskim i średnim dochodzie, według aktualizacji Banku Światowego na blogu PeopleMove z 18 grudnia 2024 r. W rankingu raportu Brief 40 za 2023 r. było tych samych pięć krajów w tej samej kolejności (Indie 120 mld USD · Meksyk 66 mld USD · Chiny 50 mld USD · Filipiny 39 mld USD · Pakistan 27 mld USD).',
        },
        {
          heading: 'Dlaczego to ważne',
          body: 'Duże kwoty wpływów kształtują krajowe rynki walutowe i dochody gospodarstw domowych w największych układach kraj pochodzenia – kraj docelowy: zwłaszcza Indie – państwa Zatoki Perskiej i OECD, Meksyk – Stany Zjednoczone oraz długoletnie korytarze filipińskich pracowników za granicą.',
        },
        {
          heading: 'Jak to czytać',
          body: 'Ranking według kwoty w dolarach pokazuje, dokąd trafia najwięcej pieniędzy; zależność od przekazów mierzy się udziałem w PKB. Chiny mogą zajmować wysokie miejsce pod względem dolarów, choć przekazy stanowią niewielką część ich PKB; mała gospodarka wyspiarska może być daleko w dole listy i mimo to silnie zależeć od przekazów.',
        },
      ],
      plate:
        'Mapa: przekazy osobiste otrzymane, 2024, Bank Światowy, World Development Indicators („Wskaźniki rozwoju świata”). Liczby te są liczone według definicji bilansu płatniczego i różnią się od szacunków na liście.',
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
          heading: 'Czym jest ta lista',
          body: 'Szacowane wpływy z przekazów jako procent PKB dla krajów najbardziej od nich zależnych, według aktualizacji PeopleMove za 2024 r. Lista raportu Brief 40 za 2023 r. była podobna (Tonga 41% · Tadżykistan 39% · Liban 31% · Samoa 28% · Nikaragua 27%).',
        },
        {
          heading: 'Dlaczego to ważne',
          body: 'Tam, gdzie przekazy stanowią dwucyfrowy odsetek PKB, finansują deficyt na rachunku obrotów bieżących, konsumpcję gospodarstw domowych, a często także stabilność finansów publicznych — w większym stopniu niż bezpośrednie inwestycje zagraniczne czy pomoc. Wstrząsy na rynkach pracy krajów przyjmujących lub w korytarzach przekazów szybko przenoszą się wtedy na popyt wewnętrzny.',
        },
        {
          heading: 'Jak to czytać',
          body: 'Udział w PKB i łączna kwota w USD odpowiadają na różne pytania. Indie mogą prowadzić na świecie pod względem dolarów przy skromnym udziale w PKB; Tonga czy Tadżykistan mogą być poza pierwszą piątką pod względem kwoty w dolarach i nadal należeć do gospodarek na Ziemi najbardziej zależnych od przekazów.',
        },
      ],
      plate:
        'Mapa: przekazy osobiste otrzymane jako udział w PKB, 2024, Bank Światowy, World Development Indicators („Wskaźniki rozwoju świata”). Liczby te są liczone według definicji bilansu płatniczego i różnią się od szacunków na liście.',
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
          heading: 'Czym jest ta liczba',
          body: 'Baza danych Banku Światowego Remittance Prices Worldwide („Ceny przekazów pieniężnych na świecie”, RPW) śledzi koszt wysłania typowego małego przekazu (często przyjmuje się kwotę wzorcową 200 USD) w setkach korytarzy między krajami. Raport Brief 40 podał średnią światową 6,4% w IV kwartale 2023 r. (wobec 6,2% rok wcześniej). Serwis RPW, ostatnio zaktualizowany 18 sierpnia 2025 r., podaje średnią światową około 6,36% w 367 korytarzach (48 krajów wysyłających i 105 odbierających).',
        },
        {
          heading: 'Dlaczego to ważne',
          body: 'Każdy punkt procentowy opłaty zmniejsza kwotę, która trafia do rodzin. Kanały cyfrowe są zwykle tańsze od niecyfrowych; korytarze do Afryki Subsaharyjskiej często należały do najdroższych. Cel nr 10 Celów Zrównoważonego Rozwoju zakłada obniżenie średniej światowej do 3% do 2030 r.; obecne średnie pozostają wyraźnie powyżej tego poziomu.',
        },
        {
          heading: 'Jak to czytać',
          body: 'Średnia światowa ukrywa skrajności poszczególnych korytarzy: w niektórych przekaz kosztuje kilka razy więcej niż średnio. RPW mierzy cenę przekazu; w serwisie RPW można porównać koszty korytarz po korytarzu.',
        },
      ],
      plate:
        'Mapa: średni koszt wysłania przekazów pieniężnych do kraju, 2023, Bank Światowy, World Development Indicators („Wskaźniki rozwoju świata”). Liczby te różnią się od średnich światowych w tekście.',
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
          heading: 'Czym to jest',
          body: 'Trzy szeregi World Development Indicators („Wskaźniki rozwoju świata”): przekazy osobiste otrzymane (w bieżących USD), przekazy osobiste otrzymane (% PKB) i przekazy osobiste wysłane (w bieżących USD). Można je przeglądać kraj po kraju na stronach wskaźników w serwisie otwartych danych Banku Światowego oraz w bazie World Development Indicators na platformie DataBank; dane są aktualizowane także po zakończeniu serii Migration and Development Brief.',
        },
        {
          heading: 'Dlaczego to ważne',
          body: 'Czytelnicy, którzy obok najnowszej liczby światowej chcą mieć długie krajowe szeregi czasowe, potrzebują szeregu, który jest wciąż aktualizowany. WDI pozostaje standardową tabelą krajową Banku Światowego dla przekazów osobistych.',
        },
        {
          heading: 'Jak to czytać',
          body: 'Przekazy osobiste w WDI liczone są według zasad bilansu płatniczego, więc roczne sumy mogą różnić się od głównego szacunku Banku Światowego dla przepływów do krajów o niskim i średnim dochodzie. Strona każdego wskaźnika oferuje wykresy dla krajów, mapę świata i dane do pobrania.',
        },
      ],
      plate:
        'Wykres: sumy światowe przekazów osobistych otrzymanych, 1970–2024, i wysłanych, 1966–2024, Bank Światowy, World Development Indicators („Wskaźniki rozwoju świata”). Liczby te są liczone według definicji bilansu płatniczego.',
    },
  },
};
