import type { InnovationCopy } from '../data/innovations';
import { cite } from '../data/sources';

function card(
  fields: Omit<InnovationCopy, 'players' | 'sourcesNote' | 'shape'>,
): InnovationCopy {
  return { players: '', sourcesNote: '', shape: 'quad', ...fields };
}

const ccBySa25 = 'https://creativecommons.org/licenses/by-sa/2.5/';
const ccBySa30 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const ccBySa40 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const ccBy20 = 'https://creativecommons.org/licenses/by/2.0/';
const jelly = 'https://commons.wikimedia.org/wiki/File:Aequorea_victoria.jpg';
const quartz = 'https://commons.wikimedia.org/wiki/File:Quartz,_Tibet.jpg';
const atmosphere = 'https://commons.wikimedia.org/wiki/File:Top_of_Atmosphere.jpg';
const jet = 'https://commons.wikimedia.org/wiki/File:Joint_European_Torus_(6055833306).jpg';
const diiid = 'https://commons.wikimedia.org/wiki/File:2017_TOCAMAC_Fusion_Chamber_N0689.jpg';
const esmPaper = 'https://europepmc.org/article/MED/39818825';
const esmBlog = 'https://www.evolutionaryscale.ai/blog/esm3-release';
const esmCard = 'https://huggingface.co/biohub/esm3-sm-open-v1';
const nobel = 'https://www.nobelprize.org/prizes/chemistry/2008/press-release/';
const matterPaper = 'https://www.nature.com/articles/s41586-025-08628-5';
const matterBlog =
  'https://www.microsoft.com/en-us/research/blog/mattergen-a-new-paradigm-of-materials-design-with-generative-ai/';
const matterCode = 'https://github.com/microsoft/mattergen';
const neuralPaper = 'https://www.nature.com/articles/s41586-024-07744-y';
const neuralBlog = 'https://research.google/blog/fast-accurate-climate-modeling-with-neuralgcm/';
const neuralCode = 'https://github.com/google-research/neuralgcm';
const toraxBlog = 'https://deepmind.google/blog/bringing-ai-to-the-next-generation-of-fusion-energy/';
const toraxNote =
  'https://deepmind.google/blog/accelerating-fusion-science-through-learned-plasma-control/';
const cfsAlliance =
  'https://blog.cfs.energy/with-ai-alliance-google-deepmind-and-cfs-take-fusion-to-the-next-level/';
const cfsPlasma =
  'https://blog.cfs.energy/why-cfs-is-confident-well-demonstrate-net-fusion-energy-q1/';
const toraxCode = 'https://github.com/google-deepmind/torax';
const tearingPaper = 'https://www.nature.com/articles/s41586-024-07024-9';

export const aiSciencePl: Record<string, InnovationCopy> = {
  'esm3-protein-model': card({
    title: 'Model językowy białek ESM3',
    hook: 'W styczniu 2025 roku czasopismo Science opublikowało artykuł o ESM3, modelu sztucznej inteligencji firmy EvolutionaryScale, który „czyta” i „pisze” białka. Poproszony o zaprojektowanie świecącego białka, model stworzył takie, które zgadza się z najbliższym naturalnym krewnym tylko w 58 procentach pozycji; autorzy porównują tę odległość do około 500 milionów lat ewolucji.',
    imageAlt:
      'Ilustracyjne zdjęcie stockowe meduzy Aequorea victoria, gatunku, u którego po raz pierwszy znaleziono zielone białko fluorescencyjne.',
    caption:
      'Ilustracyjne zdjęcie stockowe meduzy Aequorea victoria, gatunku, u którego po raz pierwszy znaleziono zielone białko fluorescencyjne.',
    figureCredit:
      'Zdjęcie: Mnolf, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa na tych samych warunkach 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Strona pliku: https://commons.wikimedia.org/wiki/File:Aequorea_victoria.jpg',
    licenseLabel: 'Creative Commons Uznanie autorstwa na tych samych warunkach 3.0',
    licenseUrl: ccBySa30,
    what: 'Białka to długie łańcuchy cegiełek zwanych aminokwasami, a kolejność tych cegiełek decyduje o kształcie białka i o tym, co potrafi robić. ESM3 jest modelem językowym dla białek: tak jak model tekstowy uczy się ze słów, tak ten uczy się z sekwencji, trójwymiarowych kształtów i znanych funkcji miliardów naturalnych białek. Można mu podać niepełny opis białka, na przykład fragment kształtu albo pożądaną funkcję, a on uzupełni resztę. Firma EvolutionaryScale, działająca jako spółka pożytku publicznego, zbudowała model i sprawdziła go na białkach fluorescencyjnych, dzięki którym świecą meduzy i koralowce. Wybrane projekty wykonano w laboratorium, a jedno jasne białko zgadzało się z najbliższym znanym białkiem fluorescencyjnym w 58 procentach pozycji. Mniejsza wersja modelu, z 1,4 miliarda parametrów (tak nazywa się regulowane liczby, których model uczy się podczas treningu), została udostępniona otwarcie i może z niej korzystać każdy chętny.',
    problem:
      'Białka fluorescencyjne to codzienne narzędzia laboratoryjne. Przyczepione do innego białka, pozwalają badaczom zobaczyć, dokąd ono wędruje wewnątrz żywej komórki, a za ich odkrycie i rozwój przyznano w 2008 roku Nagrodę Nobla z chemii. W przyrodzie występują tylko w kilku gałęziach drzewa życia, a większość znanych odmian odnaleziono, przeszukując naturę. Narzędzie sięgające daleko od wszystkich znanych białek mogłoby poszerzyć poszukiwania nowych narzędzi badawczych, leków i enzymów, a właśnie taki cel firma EvolutionaryScale podaje dla ESM3.',
    how: 'Zgodność sekwencji na poziomie 58 procent oznacza, że po zestawieniu nowego białka z najbliższym naturalnym białkiem fluorescencyjnym na 58 z każdych 100 pozycji w łańcuchu stoi ta sama cegiełka. Od najbliższego krewnego nowe białko różni się na 96 ze swoich 229 pozycji. Liczba 500 milionów lat to szacunek autorów: naturalne białka fluorescencyjne różniące się podobnie dzielą setki milionów lat ewolucji, więc taką odległość opisuje się jako równoważną temu przedziałowi czasu. Model zapisał sekwencję od razu, a przedział czasu jest sposobem wyrażenia odległości. Dla porównania, wcześniejsze poszukiwania w laboratorium i metodami uczenia maszynowego docierały do odmian różniących się najwyżej w 20 procentach pozycji. Według opisu firmy EvolutionaryScale eksperyment był niewielki: pierwsza runda 96 projektów i druga runda 96 projektów, zbudowana na najlepszym wyniku pierwszej.',
    risks:
      'Test laboratoryjny obejmuje jedną rodzinę białek, białka fluorescencyjne. W pierwszej rundzie najodleglejsze z białek, które zaświeciły, było około 50 razy ciemniejsze od naturalnych, a jego świecące centrum powstawało około tygodnia, podczas gdy naturalnym wystarcza mniej niż doba; kilka projektów o jasności zbliżonej do naturalnej dała dopiero druga runda. Inne przykłady z opisu, takie jak proponowany szkielet enzymu rozkładającego plastik, pozostają projektami komputerowymi. Liczba 500 milionów lat jest szacunkiem opartym na tym, jak szybko rozchodzą się naturalne białka fluorescencyjne. Otwarty model ma 1,4 miliarda parametrów, a większe modele tej rodziny są dostępne przez internetową usługę firmy.',
    sources: [
      cite(
        'Europejski PubMed Central: Symulowanie 500 milionów lat ewolucji za pomocą modelu językowego (Simulating 500 million years of evolution with a language model; Science, 16 January 2025)',
        esmPaper,
      ),
      cite(
        'EvolutionaryScale: ESM3, symulowanie 500 milionów lat ewolucji za pomocą modelu językowego, komunikat z aktualizacją ze stycznia 2025 (ESM3: Simulating 500 million years of evolution with a language model)',
        esmBlog,
      ),
      cite(
        'Hugging Face: otwarty model ESM3, karta modelu (ESM3 open model, model card)',
        esmCard,
      ),
      cite(
        'Nagroda Nobla: komunikat prasowy, Nagroda Nobla z chemii 2008 (Press release, The Nobel Prize in Chemistry 2008)',
        nobel,
      ),
      cite('Wikimedia Commons: Aequorea victoria, zdjęcie (Aequorea victoria, photo)', jelly),
    ],
  }),
  mattergen: card({
    title: 'Projektowanie materiałów z MatterGen',
    hook: '16 stycznia 2025 roku czasopismo Nature opublikowało artykuł o MatterGen, modelu sztucznej inteligencji firmy Microsoft, który proponuje nowe kryształy o zadanej właściwości, projektując je od podstaw. Jeden z zaproponowanych materiałów wykonano w laboratorium, a odporność na ściskanie, oszacowana na podstawie badań laboratoryjnych, mieściła się w granicach 20 procent od docelowych 200 gigapaskali.',
    imageAlt:
      'Ilustracyjne zdjęcie stockowe naturalnej druzy kwarcu z Tybetu jako codziennego przykładu kryształu.',
    caption:
      'Ilustracyjne zdjęcie stockowe naturalnej druzy kwarcu z Tybetu jako codziennego przykładu kryształu.',
    figureCredit:
      'Zdjęcie: JJ Harrison, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa na tych samych warunkach 2.5 (https://creativecommons.org/licenses/by-sa/2.5/). Strona pliku: https://commons.wikimedia.org/wiki/File:Quartz,_Tibet.jpg',
    licenseLabel: 'Creative Commons Uznanie autorstwa na tych samych warunkach 2.5',
    licenseUrl: ccBySa25,
    what: 'Od kryształów zależy wiele technologii: akumulatory, magnesy, katalizatory i materiały wychwytujące dwutlenek węgla. Znalezienie nowego kryształu o przydatnej właściwości zwykle oznaczało sprawdzanie znanych materiałów jeden po drugim. MatterGen, zbudowany w Microsoft Research, działa odwrotnie. To model dyfuzyjny, czyli z tej samej rodziny sztucznej inteligencji, której używają generatory obrazów: zaczyna od przypadkowego ułożenia atomów i krok po kroku doprowadza je do kryształu. Uczył się na około 608 000 stabilnych struktur krystalicznych z dwóch otwartych baz danych o materiałach, Materials Project i Alexandria. Po dodatkowym treningu można go poprosić o kryształ o określonym składzie chemicznym, symetrii lub właściwości, na przykład o odporności na ściskanie. Kod i dane treningowe są opublikowane otwarcie.',
    problem:
      'Przeszukiwanie znanych materiałów pozwala znaleźć tylko to, co już skatalogowano, i prędzej czy później kandydaci się kończą. Blog Microsoft Research podaje, że model generatywny nadal znajdował nowych kandydatów na materiały bardzo trudne do ściśnięcia, podczas gdy wyszukiwanie wśród znanych wyczerpało listę. Według artykułu w Nature, w porównaniu z wcześniejszymi modelami generatywnymi kryształy MatterGen są ponad dwa razy częściej nowe i stabilne, a ułożenie ich atomów jest ponad dziesięć razy bliższe najbliższemu stabilnemu stanowi o najniższej energii, co świadczy o większej bliskości do formy stabilnej.',
    how: 'Najważniejszą liczbę daje test laboratoryjny, bo wyniki obliczeń pozostają prognozami. Badacze poprosili MatterGen o materiał, który opiera się ściskaniu z siłą 200 gigapaskali (gigapaskal to jednostka ciśnienia). Tysiące projektów komputerowych odfiltrowano do 75, a do wykonania badacze wybrali cztery. Udał się jeden: związek tantalu, chromu i tlenu. Badanie próbki dało oszacowanie do 169 gigapaskali, co mieści się w granicach 20 procent od celu. Pozostałe wyniki artykułu, na przykład dotyczące stabilności, pochodzą z obliczeń, więc ten test laboratoryjny pokazuje, jak zachowuje się prawdziwa próbka.',
    risks:
      'Udało się wykonać tylko jeden z czterech wybranych projektów, a w prawdziwym materiale atomy tantalu i chromu były wymieszane przypadkowo, podczas gdy w projekcie komputerowym stały w uporządkowanym wzorze. Ocena opiera się głównie na obliczeniach, a autorzy piszą, że do zastosowań praktycznych potrzeba czegoś więcej niż te testy. Model częściej niż dane treningowe tworzy też kryształy o bardzo niskiej symetrii, zwłaszcza większe. Sami autorzy nazywają eksperyment dowodem koncepcji.',
    sources: [
      cite(
        'Nature: generatywny model do projektowania materiałów nieorganicznych, 16 stycznia 2025 (A generative model for inorganic materials design)',
        matterPaper,
      ),
      cite(
        'Microsoft Research: MatterGen, nowy sposób projektowania materiałów za pomocą generatywnej sztucznej inteligencji, 16 stycznia 2025 (MatterGen: A new paradigm of materials design with generative AI)',
        matterBlog,
      ),
      cite(
        'GitHub: microsoft/mattergen, kod i dane (microsoft/mattergen, code and data)',
        matterCode,
      ),
      cite('Wikimedia Commons: Quartz, Tibet, zdjęcie (Quartz, Tibet, photo)', quartz),
    ],
  }),
  neuralgcm: card({
    title: 'Hybrydowy model klimatu NeuralGCM',
    hook: '22 lipca 2024 roku czasopismo Nature opublikowało artykuł o NeuralGCM, modelu Google Research, który zachowuje fizykę wielkoskalowych ruchów powietrza, a chmury i inne drobne procesy opisuje siecią neuronową. Na 40 latach przeszłości jego błąd temperatury wyniósł 0,25 stopnia Celsjusza, wobec 0,75 w zwykłych modelach samej atmosfery, a liczył ponad 3500 razy szybciej niż szczegółowy model fizyczny.',
    imageAlt:
      'Ilustracyjne zdjęcie stockowe atmosfery Ziemi i sierpa Księżyca, wykonane z Międzynarodowej Stacji Kosmicznej w 2006 roku.',
    caption:
      'Ilustracyjne zdjęcie stockowe atmosfery Ziemi i sierpa Księżyca, wykonane z Międzynarodowej Stacji Kosmicznej w 2006 roku.',
    figureCredit:
      'Zdjęcie: Obserwatorium Ziemi Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej Stanów Zjednoczonych (załoga ekspedycji 13 na Międzynarodowej Stacji Kosmicznej), za pośrednictwem Wikimedia Commons, domena publiczna. Strona pliku: https://commons.wikimedia.org/wiki/File:Top_of_Atmosphere.jpg',
    licenseLabel: 'domena publiczna',
    licenseUrl: atmosphere,
    what: 'Model klimatu dzieli atmosferę na siatkę komórek i oblicza, jak powietrze, ciepło i wilgoć przemieszczają się między nimi. Ruchy wielkoskalowe podlegają dobrze znanym prawom fizyki, ale chmury i deszcz powstają w skalach znacznie mniejszych niż komórka, więc zwykłe modele wypełniają tę lukę uproszczonymi regułami. NeuralGCM, stworzony w Google Research wspólnie z Europejskim Centrum Prognoz Średnioterminowych, jest hybrydą. Zachowuje obliczenia fizyczne dla dużych ruchów, a uproszczone reguły zastępuje siecią neuronową, czyli programem komputerowym, który wychwytuje prawidłowości w danych; sieć uczono na zapisach pogody z kilkudziesięciu lat. Ponieważ obliczenia i sieć uczono razem jako jeden układ, pomaga to modelowi pozostać stabilnym przy pracy przez wiele lat. Jego kod i wytrenowane modele są opublikowane otwarcie.',
    problem:
      'Badania klimatu wymagają wielu długich symulacji, by zobaczyć, jak atmosfera może zareagować na zmiany, a każda symulacja szczegółowego modelu fizycznego potrzebuje superkomputera. Według Google Research rok atmosfery w NeuralGCM liczył się około 8 minut, a w bardzo szczegółowym modelu fizycznym amerykańskiej Narodowej Administracji Oceanicznej i Atmosferycznej około 20 dób, czyli NeuralGCM jest szybszy ponad 3500 razy. Ponieważ działa na jednej maszynie, więcej zespołów badawczych będzie mogło prowadzić własne eksperymenty. Artykuł w Nature podaje też, że zespołowe prognozy pogody NeuralGCM (zestawy prognoz z nieco różnych warunków początkowych) są porównywalne z prognozami samego Europejskiego Centrum na okres od 1 do 15 dni.',
    how: 'Porównanie 0,25 i 0,75 stopnia Celsjusza to sprawdzian na przeszłości. Model uruchomiono na 40 latach, od 1980 do 2020, podając mu prawdziwe temperatury powierzchni oceanu z tych lat, a temperaturę powietrza porównano ze standardowym zapisem minionej pogody. Według Google Research średni błąd wyniósł 0,25 stopnia Celsjusza dla NeuralGCM i 0,75 dla modeli samej atmosfery z międzynarodowego projektu porównywania modeli, czyli nowy model okazał się około trzykrotnie dokładniejszy. Określenie „sama atmosfera” znaczy, że ocean nie jest obliczany: jego temperatury podaje się z obserwacji, tak samo jak używa się modeli porównawczych. Porównanie szybkości dotyczy tego samego zadania, symulacji atmosfery na rok, przy ustawieniach wybranych przez badaczy dla każdego modelu.',
    risks:
      'NeuralGCM symuluje tylko atmosferę. Oceany, lód morski i obieg węgla pozostają poza modelem, a Google Research chce je dodać w przyszłości. W 40-letnim teście 22 z 37 uruchomień pozostało stabilnych przez wszystkie 40 lat i wyniki pochodzą z tych 22. Autorzy piszą, że model nie potrafi przenosić się na znacznie inny klimat przyszłości: gdy temperaturę powierzchni oceanu podniesiono o 1 i 2 stopnie, pokazał pewne realistyczne cechy ocieplenia, ale przy 4 stopniach jego odpowiedź rozchodziła się z oczekiwaniami i obliczenia dryfowały. W pośrednim porównaniu ze szczegółowym modelem fizycznym jego błąd opadów (liczony jako deszcz minus parowanie) jest nieco większy, a w krótkich prognozach zaniża najbardziej ekstremalne zjawiska w tropikach. Autorzy zauważają też, że ich porównanie ze szczegółowym modelem fizycznym nieco sprzyja NeuralGCM, bo dostrajano go do tego samego zapisu pogody, według którego go oceniano.',
    sources: [
      cite(
        'Nature: neuronowe modele cyrkulacji ogólnej dla pogody i klimatu, 22 lipca 2024 (Neural general circulation models for weather and climate)',
        neuralPaper,
      ),
      cite(
        'Google Research: szybkie i dokładne modelowanie klimatu z NeuralGCM, 22 lipca 2024 (Fast, accurate climate modeling with NeuralGCM)',
        neuralBlog,
      ),
      cite(
        'GitHub: neuralgcm/neuralgcm, kod i informacje o modelu (neuralgcm/neuralgcm, code and model information)',
        neuralCode,
      ),
      cite('Wikimedia Commons: Top of Atmosphere, zdjęcie (Top of Atmosphere, photo)', atmosphere),
    ],
  }),
  'torax-fusion-ai': card({
    title: 'TORAX: symulator plazmy fuzyjnej',
    hook: 'W maju 2024 roku Google DeepMind udostępniło TORAX, szybki symulator gorącego gazu wewnątrz maszyny fuzyjnej, na otwartej licencji. 16 października 2025 roku DeepMind i Commonwealth Fusion Systems ogłosiły partnerstwo, by wraz ze sztuczną inteligencją wykorzystać go do planowania pracy maszyny SPARC.',
    imageAlt:
      'Ilustracyjne zdjęcie stockowe wnętrza Joint European Torus, tokamaka w Anglii, czyli innej maszyny niż SPARC.',
    caption:
      'Ilustracyjne zdjęcie stockowe wnętrza Joint European Torus, tokamaka w Anglii, czyli innej maszyny niż SPARC.',
    figureCredit:
      'Zdjęcie: Kevan, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa 2.0 (https://creativecommons.org/licenses/by/2.0/). Strona pliku: https://commons.wikimedia.org/wiki/File:Joint_European_Torus_(6055833306).jpg',
    licenseLabel: 'Creative Commons Uznanie autorstwa 2.0',
    licenseUrl: ccBy20,
    what: 'Energetyka fuzyjna dąży do łączenia lekkich atomów w gazie rozgrzanym do ponad 100 milionów stopni Celsjusza, zwanym plazmą, którą pola magnetyczne utrzymują wewnątrz maszyny w kształcie obwarzanka, zwanej tokamakiem. Przed uruchomieniem takiej maszyny inżynierowie przewidują za pomocą symulacji komputerowych, jak przez plazmę przemieszczają się ciepło, prąd elektryczny i cząstki. TORAX jest symulatorem jądra plazmy, który Google DeepMind udostępniło na otwartej licencji w maju 2024 roku. Napisano go tak, że komputer może wyliczyć, jak mała zmiana dowolnego ustawienia wpłynie na wynik; dzięki temu nadaje się do automatycznego szukania dobrych ustawień i do trenowania sztucznej inteligencji. 16 października 2025 roku DeepMind i Commonwealth Fusion Systems, firma budująca w stanie Massachusetts tokamak SPARC, ogłosiły partnerstwo badawcze. Według Google DeepMind TORAX stał się już centralnym narzędziem codziennej pracy symulacyjnej Commonwealth Fusion Systems nad SPARC.',
    problem:
      'Tokamak ma wiele ustawień, takich jak prądy w magnesach, wtrysk paliwa i moc grzania, a znalezienie najlepszego zestawu ręcznie trwa długo. DeepMind i Commonwealth Fusion Systems opisują miliony wirtualnych eksperymentów w TORAX przed włączeniem SPARC, aby zespół mógł zacząć od obiecujących planów. SPARC chce być pierwszą maszyną fuzji magnetycznej, która uzyska z fuzji więcej energii, niż zużywa na jej podtrzymanie. Partnerzy badają też uczenie przez wzmacnianie, czyli sposób, w którym program komputerowy uczy się metodą prób i nagród, aby zarządzać ciepłem, które SPARC będzie wydzielać na swoje ściany. Ponieważ TORAX jest otwarty, inne zespoły fuzyjne mogą korzystać z tego samego narzędzia i je sprawdzać.',
    how: 'Cała ta praca dotyczy planowania i symulacji. Symulacja jest przewidywaniem, a jej wartość zależy od tego, jak dobrze zgadza się z prawdziwą maszyną. DeepMind podaje, że w trakcie prac będzie sprawdzać i kalibrować TORAX na dawnych danych z tokamaków i na bardziej szczegółowych symulacjach. Partnerstwo jest przedsięwzięciem badawczym, a sam SPARC nie wytworzył jeszcze plazmy: pod koniec sierpnia 2026 roku Commonwealth Fusion Systems napisało, że spodziewa się uruchomić SPARC w ciągu najbliższych miesięcy. Dwie daty łatwo pomylić: maj 2024 roku to udostępnienie symulatora, a 16 października 2025 roku to ogłoszenie partnerstwa.',
    risks:
      'TORAX opisuje jądro plazmy. Obejmuje przepływ ciepła i cząstek oraz prąd elektryczny, a dla części fizyki korzysta z prostszych modeli zastępczych; w opisie samego projektu napisano, że jeden z takich modeli obejmuje tylko ograniczone warunki. Nadal trzeba go sprawdzać doświadczeniami. SPARC nie wykazał jeszcze energii netto z fuzji, która jest jego celem. Prace nad sterowaniem są na wczesnym etapie: partnerzy piszą, że zaczynają od nauki rozprowadzania ciepła na ścianach maszyny, a szersze sterowanie w czasie rzeczywistym Google DeepMind opisuje jako możliwość na przyszłość. Wcześniejszy wynik DeepMind z 2022 roku pokazał, że uczenie przez wzmacnianie potrafi sterować magnesami tokamaka badawczego w Szwajcarii, ale była to inna maszyna i inne zadanie.',
    sources: [
      cite(
        'Google DeepMind: wprowadzanie sztucznej inteligencji do energetyki fuzyjnej następnej generacji, 16 października 2025 (Bringing AI to the next generation of fusion energy)',
        toraxBlog,
      ),
      cite(
        'Google DeepMind: przyspieszanie nauki o fuzji dzięki wyuczonemu sterowaniu plazmą, z notą o udostępnieniu TORAX w maju 2024 (Accelerating fusion science through learned plasma control)',
        toraxNote,
      ),
      cite(
        'Commonwealth Fusion Systems: sojusz w dziedzinie sztucznej inteligencji: Google DeepMind i Commonwealth Fusion Systems wynoszą fuzję na wyższy poziom, 16 października 2025 (With AI alliance, Google DeepMind and CFS take fusion to the next level)',
        cfsAlliance,
      ),
      cite(
        'Commonwealth Fusion Systems: dlaczego jesteśmy pewni, że pokażemy energię netto z fuzji, 28 sierpnia 2026 (Why CFS is confident we’ll demonstrate net fusion energy)',
        cfsPlasma,
      ),
      cite(
        'GitHub: google-deepmind/torax, kod i opis (google-deepmind/torax, code and description)',
        toraxCode,
      ),
      cite('Wikimedia Commons: Joint European Torus, zdjęcie (Joint European Torus, photo)', jet),
    ],
  }),
  'diiid-tearing-ai': card({
    title: 'Sztuczna inteligencja przeciw niestabilności tearing w DIII-D',
    hook: '21 lutego 2024 roku czasopismo Nature opublikowało eksperyment na tokamaku DIII-D w Kalifornii, w którym kontroler oparty na sztucznej inteligencji metodą prób i nagród nauczył się w czasie rzeczywistym zmieniać grzanie i kształt plazmy, utrzymując przewidywane ryzyko tearing, jednej z głównych przyczyn załamania plazmy, poniżej wybranej granicy.',
    imageAlt:
      'Ilustracyjne zdjęcie stockowe pracownika wewnątrz komory próżniowej DIII-D podczas przeglądu w 2017 roku. Zdjęcie wykonano na lata przed opisanym tu eksperymentem.',
    caption:
      'Ilustracyjne zdjęcie stockowe pracownika wewnątrz komory próżniowej DIII-D podczas przeglądu w 2017 roku. Zdjęcie wykonano na lata przed opisanym tu eksperymentem.',
    figureCredit:
      'Zdjęcie: Rswilcox, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa na tych samych warunkach 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Strona pliku: https://commons.wikimedia.org/wiki/File:2017_TOCAMAC_Fusion_Chamber_N0689.jpg',
    licenseLabel: 'Creative Commons Uznanie autorstwa na tych samych warunkach 4.0',
    licenseUrl: ccBySa40,
    what: 'Tokamak utrzymuje wewnątrz pola magnetycznego w kształcie obwarzanka niezwykle gorący gaz, zwany plazmą. Czasem linie pola magnetycznego wewnątrz plazmy rozrywają się i łączą na nowo, tworząc pierścieniowe pęcherze zwane wyspami magnetycznymi. Zjawisko to nazywa się niestabilnością typu tearing (z angielskiego „rozrywanie”) i jest główną przyczyną dysrupcji, nagłych załamań plazmy, które przerywają eksperyment i mogą uszkodzić ściany maszyny. Zespół z Uniwersytetu Princeton i Narodowego Ośrodka Badań Fuzyjnych DIII-D, placówki badawczej Departamentu Energii Stanów Zjednoczonych na terenie firmy General Atomics w San Diego, wytrenował kontroler metodą uczenia przez wzmacnianie: program uczy się, próbując działań i otrzymując nagrodę. Uczono go na komputerowym modelu, który z wyprzedzeniem 25 milisekund przewiduje ciśnienie plazmy i ocenę ryzyka tearing od 0 do 1. Kontroler nauczył się zmieniać dwie wielkości, moc grzania wiązkami neutralnymi i kształt plazmy, by utrzymywać wysokie ciśnienie, dopóki przewidywane ryzyko pozostaje poniżej wybranej granicy.',
    problem:
      'Elektrownia oparta na tokamaku potrzebuje wysokiego ciśnienia plazmy, by wytwarzać energię, i musi unikać dysrupcji, które mogą uszkodzić ściany. Wcześniejsze metody głównie próbowały tłumić tearing po jego powstaniu, co często następowało zbyt późno, więc tutaj celem było uniknięcie go od początku. Według artykułu w Nature kontroler utrzymywał przewidywane ryzyko poniżej granicy nawet w trudnych warunkach podobnych do planowanych w Międzynarodowym Eksperymentalnym Reaktorze Termojądrowym (ITER), wielkim międzynarodowym projekcie fuzyjnym budowanym we Francji, gdzie plazma obraca się tylko wolno, a tearing jest szczególnie trudny do uniknięcia. W jednym z przebiegów porównawczych zwykły kontroler utrzymywał zadane ciśnienie, rozpoczął się duży tearing i plazma się załamała.',
    how: 'Ocena ryzyka tearing jest przewidywaniem wytrenowanego modelu, od 0 (ryzyka się nie spodziewamy) do 1 (wysokie ryzyko), na 25 milisekund naprzód. Kontroler trenowano z trzema różnymi granicami: 0,2, 0,5 i 0,7. Im niższa granica, tym ostrożniejszy kontroler. Przy 0,5 i 0,7 plazma przetrwała do końca zaplanowanego czasu; przy najostrożniejszej granicy 0,2 plazma załamała się mniej więcej w 5,5 sekundzie. Ostrożny kontroler zmniejszył grzanie do z góry ustalonej dolnej granicy i nie mógł go zmniejszyć dalej, a takiej interakcji nie było w jego treningu. Zatem ostrzejsza granica nie zawsze była lepszym wyborem. Porównaj to ze zwykłym kontrolerem w tym samym eksperymencie: utrzymywał stały cel ciśnienia, po 2,6 sekundy rozpoczął się duży tearing i plazma załamała się 0,5 sekundy później.',
    risks:
      'Autorzy nazywają pracę dowodem koncepcji na wczesnym etapie dostrajania. Przetestowano ją na jednej maszynie z dwiema nastawami (moc grzania i kształt plazmy), a pozostałe parametry, w tym prąd plazmy, utrzymywano stałe, by warunki były bliskie planowanym dla ITER. Model przewidujący jest czarną skrzynką: potrafi powiedzieć, że tearing jest prawdopodobny, ale nie wyjaśni przyczyny. Autorzy zaznaczają, że kontroler trzeba będzie sprawdzić z większą liczbą nastaw, na przykład z grzaniem falami radiowymi, które ITER planuje stosować, oraz z bardziej ograniczonym zestawem czujników, jaki będzie w elektrowni. W jednym teście z dodanym grzaniem falami radiowymi plazma załamała się po niezaplanowanej utracie prądu plazmy, choć kontroler poradził sobie z krótkim skokiem ryzyka. Autorzy podają też, że zmiany kształtu plazmy były duże, i obliczeniami sprawdzili, że cewki ITER mogą je wytworzyć.',
    sources: [
      cite(
        'Nature: unikanie niestabilności tearing plazmy fuzyjnej za pomocą głębokiego uczenia przez wzmacnianie, 21 lutego 2024 (Avoiding fusion plasma tearing instability with deep reinforcement learning)',
        tearingPaper,
      ),
      cite(
        'Wikimedia Commons: 2017 TOCAMAC Fusion Chamber N0689, zdjęcie komory próżniowej DIII-D (2017 TOCAMAC Fusion Chamber N0689, photo of the DIII-D vacuum vessel)',
        diiid,
      ),
    ],
  }),
};
