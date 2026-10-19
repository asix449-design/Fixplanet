import type { Locale } from './config';

export type PrivacyPart = string | { text: string; href: string };

export type PrivacySection = {
  heading: string;
  paragraphs: PrivacyPart[][];
};

export type PrivacyPage = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  sections: PrivacySection[];
};

const pages: Record<Locale, PrivacyPage> = {
  "en": {
    "metaTitle": "Privacy: Fix Planet",
    "metaDescription": "Fix Planet has no accounts, forms, comments or newsletter. It sets no advertising or tracking cookies. To show you the pages, some services see your device's IP address: Cloudflare, which hosts the site, Google, which supplies the fonts, and on map pages the map and data services listed below. Content from other services, such as videos, loads only after you press its button.",
    "title": "Privacy",
    "updated": "Last updated: 11 October 2026",
    "sections": [
      {
        "heading": "Who runs this site",
        "paragraphs": [
          [
            "Fix Planet is run by Aigars Abramovics, who is based in England. He decides how this site handles personal data and is responsible for it under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. You can write to him at ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            "."
          ]
        ]
      },
      {
        "heading": "In short",
        "paragraphs": [
          [
            "Fix Planet has no accounts, forms, comments or newsletter. It sets no advertising or tracking cookies. To show you the pages, some services see your device's IP address: Cloudflare, which hosts the site, Google, which supplies the fonts, and on map pages the map and data services listed below. Content from other services, such as videos, loads only after you press its button."
          ]
        ]
      },
      {
        "heading": "Hosting and security",
        "paragraphs": [
          [
            "The site is hosted on Cloudflare's network. When your browser asks for a page, Cloudflare processes the details that every web request carries: your device's IP address, the page address, the time and technical details such as your browser type. Cloudflare uses them to deliver the page and to protect the site against attacks and abuse, and it may keep them in its logs. If a page fails to load, your browser may also send Cloudflare a short error report. Cloudflare acts on the site's behalf for this. The details are in the ",
            {
              "text": "Cloudflare privacy policy",
              "href": "https://www.cloudflare.com/privacypolicy/"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Visit statistics",
        "paragraphs": [
          [
            "The site counts visits with Cloudflare's visit statistics service. A small script from Cloudflare records which page you open and how quickly it loads. Cloudflare states that this service uses no cookies and no local storage in your browser and does not fingerprint visitors (",
            {
              "text": "about Cloudflare's visit statistics",
              "href": "https://www.cloudflare.com/web-analytics/"
            },
            "). The site's author sees totals only and cannot pick out a single reader in them."
          ]
        ]
      },
      {
        "heading": "What the site does not collect",
        "paragraphs": [
          [
            "The site has no registration, user accounts, comments, contact form or newsletter, and it asks for no personal details. It shows no advertising and uses no Google analytics or similar tracking tools, and the site sells no data."
          ]
        ]
      },
      {
        "heading": "Your language choice",
        "paragraphs": [
          [
            "When you open a page in Russian, Polish or Latvian, your browser stores that language in its local storage under the name fp-locale, so the home page opens in the same language next time. When you pick a language with the language switcher, the site also sets a cookie with the same name, which lasts one year. Both hold only the language code and are used for nothing else. You can delete them in your browser settings."
          ]
        ]
      },
      {
        "heading": "Fonts",
        "paragraphs": [
          [
            "The site's fonts come from Google's font service. To show them, your browser contacts Google's font servers, which receive your device's IP address, the address of the requested font, details of your browser and the address of this site. Google states that its font service sets no cookies and does not use this information to build profiles or for advertising. The details are in the ",
            {
              "text": "Google privacy policy",
              "href": "https://policies.google.com/privacy"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Maps and live data",
        "paragraphs": [
          [
            "The globes on the Maps and Migration pages load map tiles from OpenFreeMap, and from Carto if OpenFreeMap does not answer in time. The natural hazards globe in the Maps section also loads current data straight from public sources: the United States Geological Survey, the Global Disaster Alert and Coordination System, the United States National Aeronautics and Space Administration and the United States National Oceanic and Atmospheric Administration, and, when you switch on the drought layer, the Emergency Management Service of the Copernicus programme. Each of these services receives your device's IP address and sees that the request came from this site. OpenFreeMap states that it uses no cookies."
          ]
        ]
      },
      {
        "heading": "Videos",
        "paragraphs": [
          [
            "Some migration pages offer short videos from YouTube. A video loads only after you press its play button, and the site uses YouTube's privacy enhanced mode. Once you press play, YouTube, which belongs to Google, receives your device's IP address and may store information on your device under the ",
            {
              "text": "Google privacy policy",
              "href": "https://policies.google.com/privacy"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Support payments",
        "paragraphs": [
          [
            "The Donate page opens a payment page from Stripe in a new tab. Stripe handles the payment and your card details under its own ",
            {
              "text": "privacy policy",
              "href": "https://stripe.com/privacy"
            },
            ", and the site never sees your full card number. The author receives from Stripe the payment details that Stripe shares with the people it takes payments for, such as the amount and the contact details you enter, and keeps them as long as the law requires for records."
          ]
        ]
      },
      {
        "heading": "Email",
        "paragraphs": [
          [
            "If you write to ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            ", the author receives your address and your message through Gmail, Google's email service, and uses them only to reply. Messages are deleted when they are no longer needed."
          ]
        ]
      },
      {
        "heading": "Links to other sites",
        "paragraphs": [
          [
            "The site links to many outside sources and to the author's profile on X. Those sites have their own privacy rules, which apply once you open them."
          ]
        ]
      },
      {
        "heading": "Legal basis",
        "paragraphs": [
          [
            "Under the UK General Data Protection Regulation, the site relies on legitimate interests to deliver and protect the site, count visits in total, show fonts and maps, and answer your messages. Content from other services that you load with a button loads with your consent, and pressing the button is that consent. Payment details are processed to carry out the payment you asked for and to keep the records the law requires."
          ]
        ]
      },
      {
        "heading": "Your rights",
        "paragraphs": [
          [
            "You can ask for a copy of the personal data the author holds about you, ask for it to be corrected or deleted, and object to its use. Write to ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            ". Most of the data described above is held by Cloudflare, Google and the other services, and the author does not use it to find out who you are; for that data you can also contact those services directly. If you are unhappy with how your data is handled, you can complain to the Information Commissioner's Office, the UK regulator for data protection: ",
            {
              "text": "make a complaint",
              "href": "https://ico.org.uk/make-a-complaint/"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Changes",
        "paragraphs": [
          [
            "If this page changes, the date at the top changes too."
          ]
        ]
      }
    ]
  },
  "ru": {
    "metaTitle": "Конфиденциальность: Fix Planet",
    "metaDescription": "На Fix Planet нет учётных записей, форм, комментариев и рассылки. Сайт не ставит рекламных и отслеживающих файлов куки. Чтобы показать страницы, некоторые службы видят сетевой адрес вашего устройства: Cloudflare, где размещён сайт, Google, который отдаёт шрифты, а на страницах с картами ещё картографические службы и источники данных, перечисленные ниже. Материалы других сервисов, например видео, загружаются только после нажатия на их кнопку.",
    "title": "Конфиденциальность",
    "updated": "Последнее обновление: 11 октября 2026 года",
    "sections": [
      {
        "heading": "Кто ведёт сайт",
        "paragraphs": [
          [
            "Fix Planet ведёт Aigars Abramovics, его база находится в Англии. Он решает, как сайт обращается с персональными данными, и отвечает за это по общему регламенту по защите данных Великобритании и британскому Закону о защите данных 2018 года. Написать ему можно по адресу ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Коротко",
        "paragraphs": [
          [
            "На Fix Planet нет учётных записей, форм, комментариев и рассылки. Сайт не ставит рекламных и отслеживающих файлов куки. Чтобы показать страницы, некоторые службы видят сетевой адрес вашего устройства: Cloudflare, где размещён сайт, Google, который отдаёт шрифты, а на страницах с картами ещё картографические службы и источники данных, перечисленные ниже. Материалы других сервисов, например видео, загружаются только после нажатия на их кнопку."
          ]
        ]
      },
      {
        "heading": "Размещение и защита",
        "paragraphs": [
          [
            "Сайт размещён в сети Cloudflare. Когда браузер запрашивает страницу, Cloudflare обрабатывает сведения, которые есть в каждом запросе: сетевой адрес вашего устройства, адрес страницы, время и технические данные, например тип браузера. Cloudflare использует их, чтобы доставить страницу и защитить сайт от атак и злоупотреблений, и может хранить их в своих журналах. Если страница не загрузилась, браузер может также отправить в Cloudflare короткий отчёт об ошибке. Здесь Cloudflare действует по поручению сайта. Подробности в ",
            {
              "text": "политике конфиденциальности Cloudflare",
              "href": "https://www.cloudflare.com/privacypolicy/"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Статистика посещений",
        "paragraphs": [
          [
            "Сайт считает посещения с помощью сервиса статистики Cloudflare. Небольшой скрипт Cloudflare отмечает, какую страницу вы открыли и как быстро она загрузилась. Cloudflare заявляет, что этот сервис не использует файлы куки и локальное хранилище браузера и не составляет цифровых отпечатков посетителей (",
            {
              "text": "о сервисе статистики Cloudflare",
              "href": "https://www.cloudflare.com/web-analytics/"
            },
            "). Автор сайта видит только общие цифры и не может выделить в них отдельного читателя."
          ]
        ]
      },
      {
        "heading": "Чего сайт не собирает",
        "paragraphs": [
          [
            "На сайте нет регистрации, учётных записей, комментариев, формы обратной связи и рассылки, и он не просит личных данных. На нём нет рекламы, аналитики Google и похожих средств слежения, и сайт не продаёт никаких данных."
          ]
        ]
      },
      {
        "heading": "Выбор языка",
        "paragraphs": [
          [
            "Когда вы открываете страницу на русском, польском или латышском, браузер сохраняет этот язык в своём локальном хранилище под именем fp-locale, чтобы главная страница в следующий раз открылась на том же языке. Когда вы выбираете язык переключателем, сайт ещё ставит файл куки с тем же именем на один год. В обоих хранится только код языка, и ни для чего другого они не используются. Удалить их можно в настройках браузера."
          ]
        ]
      },
      {
        "heading": "Шрифты",
        "paragraphs": [
          [
            "Шрифты сайта загружаются из шрифтового сервиса Google. Для этого браузер обращается к серверам шрифтов Google, и они получают сетевой адрес вашего устройства, адрес запрошенного шрифта, сведения о браузере и адрес этого сайта. Google заявляет, что его шрифтовой сервис не ставит файлов куки и не использует эти сведения для профилей пользователей и рекламы. Подробности в ",
            {
              "text": "политике конфиденциальности Google",
              "href": "https://policies.google.com/privacy"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Карты и свежие данные",
        "paragraphs": [
          [
            "Глобусы на страницах «Карты» и «Миграция» загружают фрагменты карты из OpenFreeMap, а если OpenFreeMap не отвечает вовремя, то из Carto. Глобус природных угроз в разделе «Карты» ещё загружает свежие данные прямо из открытых источников: Геологической службы Соединённых Штатов, Глобальной системы оповещения и координации при бедствиях, Национального управления по аэронавтике и исследованию космического пространства Соединённых Штатов и Национального управления океанических и атмосферных исследований Соединённых Штатов, а при включении слоя засухи ещё из Службы управления чрезвычайными ситуациями программы «Коперник». Каждая из этих служб получает сетевой адрес вашего устройства и видит, что запрос пришёл с этого сайта. OpenFreeMap заявляет, что не использует файлы куки."
          ]
        ]
      },
      {
        "heading": "Видео",
        "paragraphs": [
          [
            "На некоторых страницах о миграции есть короткие видео с YouTube. Видео загружается только после нажатия на кнопку воспроизведения, и сайт использует режим повышенной конфиденциальности YouTube. После нажатия YouTube, который принадлежит Google, получает сетевой адрес вашего устройства и может сохранять сведения на вашем устройстве по ",
            {
              "text": "политике конфиденциальности Google",
              "href": "https://policies.google.com/privacy"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Поддержка проекта",
        "paragraphs": [
          [
            "Страница «Поддержать» открывает платёжную страницу Stripe в новой вкладке. Платёж и данные карты обрабатывает Stripe по своей ",
            {
              "text": "политике конфиденциальности",
              "href": "https://stripe.com/privacy"
            },
            ", и полный номер карты сайт никогда не видит. Автор получает от Stripe те сведения о платеже, которыми Stripe делится с получателями платежей, например сумму и контактные данные, которые вы вводите, и хранит их столько, сколько требует закон для учёта."
          ]
        ]
      },
      {
        "heading": "Электронная почта",
        "paragraphs": [
          [
            "Если вы пишете на ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            ", автор получает ваш адрес и письмо через Gmail, почтовую службу Google, и использует их только для ответа. Письма удаляются, когда они больше не нужны."
          ]
        ]
      },
      {
        "heading": "Ссылки на другие сайты",
        "paragraphs": [
          [
            "Сайт ссылается на множество внешних источников и на страницу автора в X. У этих сайтов свои правила конфиденциальности, и они действуют, когда вы их открываете."
          ]
        ]
      },
      {
        "heading": "Правовые основания",
        "paragraphs": [
          [
            "По общему регламенту по защите данных Великобритании сайт опирается на законный интерес, чтобы доставлять и защищать сайт, считать посещения в целом, показывать шрифты и карты и отвечать на письма. Материалы других сервисов, которые вы загружаете кнопкой, загружаются с вашего согласия, и нажатие кнопки и есть это согласие. Данные о платеже обрабатываются, чтобы провести платёж, о котором вы попросили, и вести учёт, которого требует закон."
          ]
        ]
      },
      {
        "heading": "Ваши права",
        "paragraphs": [
          [
            "Вы можете запросить копию персональных данных, которые есть у автора о вас, попросить исправить или удалить их и возразить против их использования. Пишите на ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            ". Большая часть описанных выше данных хранится у Cloudflare, Google и других служб, и автор не использует их, чтобы узнать, кто вы; по этим данным можно обратиться и прямо в эти службы. Если вас не устраивает, как обращаются с вашими данными, вы можете подать жалобу в Управление Уполномоченного по информации, британский орган по защите данных: ",
            {
              "text": "подать жалобу",
              "href": "https://ico.org.uk/make-a-complaint/"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Изменения",
        "paragraphs": [
          [
            "Если эта страница изменится, изменится и дата в её начале."
          ]
        ]
      }
    ]
  },
  "pl": {
    "metaTitle": "Prywatność: Fix Planet",
    "metaDescription": "Fix Planet nie ma kont, formularzy, komentarzy ani biuletynu. Strona nie zapisuje reklamowych ani śledzących ciasteczek. Aby pokazać strony, niektóre usługi widzą adres sieciowy Twojego urządzenia: Cloudflare, na którego serwerach działa strona, Google, który dostarcza czcionki, a na stronach z mapami także wymienione niżej usługi map i źródła danych. Treści z innych serwisów, na przykład filmy, wczytują się dopiero po naciśnięciu ich przycisku.",
    "title": "Prywatność",
    "updated": "Ostatnia aktualizacja: 11 października 2026",
    "sections": [
      {
        "heading": "Kto prowadzi tę stronę",
        "paragraphs": [
          [
            "Fix Planet prowadzi Aigars Abramovics, który działa w Anglii. To on decyduje, jak strona obchodzi się z danymi osobowymi, i odpowiada za to na podstawie brytyjskiego ogólnego rozporządzenia o ochronie danych oraz brytyjskiej ustawy o ochronie danych z 2018 roku. Można do niego napisać na adres ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            "."
          ]
        ]
      },
      {
        "heading": "W skrócie",
        "paragraphs": [
          [
            "Fix Planet nie ma kont, formularzy, komentarzy ani biuletynu. Strona nie zapisuje reklamowych ani śledzących ciasteczek. Aby pokazać strony, niektóre usługi widzą adres sieciowy Twojego urządzenia: Cloudflare, na którego serwerach działa strona, Google, który dostarcza czcionki, a na stronach z mapami także wymienione niżej usługi map i źródła danych. Treści z innych serwisów, na przykład filmy, wczytują się dopiero po naciśnięciu ich przycisku."
          ]
        ]
      },
      {
        "heading": "Utrzymanie strony i bezpieczeństwo",
        "paragraphs": [
          [
            "Strona działa w sieci Cloudflare. Gdy przeglądarka prosi o stronę, Cloudflare przetwarza dane, które niesie każde zapytanie: adres sieciowy Twojego urządzenia, adres strony, czas oraz dane techniczne, na przykład rodzaj przeglądarki. Cloudflare używa ich, aby dostarczyć stronę i chronić ją przed atakami i nadużyciami, i może przechowywać je w swoich dziennikach. Jeśli strona się nie wczyta, przeglądarka może też wysłać do Cloudflare krótki raport o błędzie. Cloudflare działa tu w imieniu strony. Szczegóły są w ",
            {
              "text": "polityce prywatności Cloudflare",
              "href": "https://www.cloudflare.com/privacypolicy/"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Statystyki odwiedzin",
        "paragraphs": [
          [
            "Strona liczy odwiedziny za pomocą usługi statystyk Cloudflare. Mały skrypt Cloudflare zapisuje, którą stronę otwierasz i jak szybko się wczytuje. Cloudflare deklaruje, że ta usługa nie używa ciasteczek ani pamięci lokalnej przeglądarki i nie tworzy cyfrowych odcisków odwiedzających (",
            {
              "text": "o usłudze statystyk Cloudflare",
              "href": "https://www.cloudflare.com/web-analytics/"
            },
            "). Autor strony widzi tylko łączne liczby i nie może wyróżnić w nich pojedynczego czytelnika."
          ]
        ]
      },
      {
        "heading": "Czego strona nie zbiera",
        "paragraphs": [
          [
            "Strona nie ma rejestracji, kont użytkowników, komentarzy, formularza kontaktowego ani biuletynu i nie prosi o dane osobowe. Nie ma na niej reklam, analityki Google ani podobnych narzędzi śledzących, i strona nie sprzedaje żadnych danych."
          ]
        ]
      },
      {
        "heading": "Wybór języka",
        "paragraphs": [
          [
            "Gdy otwierasz stronę po rosyjsku, polsku lub łotewsku, przeglądarka zapisuje ten język w swojej pamięci lokalnej pod nazwą fp-locale, aby strona główna następnym razem otworzyła się w tym samym języku. Gdy wybierasz język przełącznikiem, strona zapisuje też ciasteczko o tej samej nazwie na jeden rok. Oba przechowują tylko kod języka i nie służą do niczego innego. Możesz je usunąć w ustawieniach przeglądarki."
          ]
        ]
      },
      {
        "heading": "Czcionki",
        "paragraphs": [
          [
            "Czcionki strony pochodzą z usługi czcionek Google. Aby je pokazać, przeglądarka łączy się z serwerami czcionek Google, które otrzymują adres sieciowy Twojego urządzenia, adres pobieranej czcionki, dane przeglądarki i adres tej strony. Google deklaruje, że jego usługa czcionek nie zapisuje ciasteczek i nie używa tych danych do tworzenia profili ani do reklam. Szczegóły są w ",
            {
              "text": "polityce prywatności Google",
              "href": "https://policies.google.com/privacy"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Mapy i bieżące dane",
        "paragraphs": [
          [
            "Globusy na stronach „Mapy” i „Migracja” wczytują fragmenty map z OpenFreeMap, a gdy OpenFreeMap nie odpowie na czas, z Carto. Globus zagrożeń naturalnych w dziale „Mapy” wczytuje też bieżące dane prosto z publicznych źródeł: Służby Geologicznej Stanów Zjednoczonych, Globalnego Systemu Ostrzegania i Koordynacji w razie Klęsk, amerykańskiej Narodowej Agencji Aeronautyki i Przestrzeni Kosmicznej oraz amerykańskiej Narodowej Administracji Oceanicznej i Atmosferycznej, a po włączeniu warstwy suszy także z Usługi Zarządzania Kryzysowego programu Copernicus. Każda z tych usług otrzymuje adres sieciowy Twojego urządzenia i widzi, że zapytanie przyszło z tej strony. OpenFreeMap deklaruje, że nie używa ciasteczek."
          ]
        ]
      },
      {
        "heading": "Filmy",
        "paragraphs": [
          [
            "Na niektórych stronach o migracji są krótkie filmy z YouTube. Film wczytuje się dopiero po naciśnięciu przycisku odtwarzania, a strona używa trybu rozszerzonej prywatności YouTube. Po naciśnięciu YouTube, który należy do Google, otrzymuje adres sieciowy Twojego urządzenia i może zapisywać dane na Twoim urządzeniu zgodnie z ",
            {
              "text": "polityką prywatności Google",
              "href": "https://policies.google.com/privacy"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Wsparcie projektu",
        "paragraphs": [
          [
            "Strona „Wesprzyj” otwiera w nowej karcie stronę płatności Stripe. Płatność i dane karty obsługuje Stripe zgodnie ze swoją ",
            {
              "text": "polityką prywatności",
              "href": "https://stripe.com/privacy"
            },
            ", a pełnego numeru karty strona nigdy nie widzi. Autor otrzymuje od Stripe te dane o płatności, które Stripe udostępnia odbiorcom płatności, na przykład kwotę i podane przez Ciebie dane kontaktowe, i przechowuje je tak długo, jak wymaga tego prawo dotyczące dokumentacji."
          ]
        ]
      },
      {
        "heading": "Poczta elektroniczna",
        "paragraphs": [
          [
            "Jeśli piszesz na ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            ", autor otrzymuje Twój adres i wiadomość przez Gmail, usługę pocztową Google, i używa ich tylko do odpowiedzi. Wiadomości są usuwane, gdy przestają być potrzebne."
          ]
        ]
      },
      {
        "heading": "Odnośniki do innych stron",
        "paragraphs": [
          [
            "Strona odsyła do wielu zewnętrznych źródeł i do profilu autora w serwisie X. Te strony mają własne zasady prywatności, które obowiązują, gdy je otworzysz."
          ]
        ]
      },
      {
        "heading": "Podstawy prawne",
        "paragraphs": [
          [
            "Na podstawie brytyjskiego ogólnego rozporządzenia o ochronie danych strona opiera się na prawnie uzasadnionym interesie, aby dostarczać i chronić stronę, liczyć odwiedziny łącznie, pokazywać czcionki i mapy oraz odpowiadać na wiadomości. Treści z innych serwisów, które wczytujesz przyciskiem, wczytują się za Twoją zgodą, a naciśnięcie przycisku jest tą zgodą. Dane o płatności są przetwarzane, aby zrealizować płatność, o którą prosisz, i prowadzić dokumentację wymaganą przez prawo."
          ]
        ]
      },
      {
        "heading": "Twoje prawa",
        "paragraphs": [
          [
            "Możesz poprosić o kopię danych osobowych, które autor ma na Twój temat, poprosić o ich poprawienie lub usunięcie oraz sprzeciwić się ich wykorzystaniu. Napisz na ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            ". Większość opisanych wyżej danych przechowują Cloudflare, Google i inne usługi, a autor nie używa ich do ustalania, kim jesteś; w sprawie tych danych możesz też zwrócić się bezpośrednio do tych usług. Jeśli nie odpowiada Ci sposób obchodzenia się z Twoimi danymi, możesz złożyć skargę do Biura Komisarza do spraw Informacji, brytyjskiego organu ochrony danych: ",
            {
              "text": "złóż skargę",
              "href": "https://ico.org.uk/make-a-complaint/"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Zmiany",
        "paragraphs": [
          [
            "Jeśli ta strona się zmieni, zmieni się też data na jej początku."
          ]
        ]
      }
    ]
  },
  "lv": {
    "metaTitle": "Privātums: Fix Planet",
    "metaDescription": "Fix Planet nav kontu, veidlapu, komentāru un jaunumu vēstules. Vietne neizmanto reklāmas vai izsekošanas sīkdatnes. Lai parādītu lapas, dažiem pakalpojumiem ir redzama jūsu ierīces tīkla adrese: Cloudflare, kura tīklā vietne izvietota, Google, kas piegādā fontus, un lapās ar kartēm arī tālāk minētie karšu pakalpojumi un datu avoti. Citu pakalpojumu saturs, piemēram, video, ielādējas tikai pēc tā pogas nospiešanas.",
    "title": "Privātums",
    "updated": "Pēdējo reizi atjaunināts: 2026. gada 11. oktobrī",
    "sections": [
      {
        "heading": "Kas uztur šo vietni",
        "paragraphs": [
          [
            "Fix Planet uztur Aigars Abramovics, kura bāze ir Anglijā. Viņš nosaka, kā vietne apietas ar personas datiem, un par to atbild saskaņā ar Apvienotās Karalistes Vispārīgo datu aizsardzības regulu un Apvienotās Karalistes 2018. gada Datu aizsardzības likumu. Viņam var rakstīt uz adresi ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Īsumā",
        "paragraphs": [
          [
            "Fix Planet nav kontu, veidlapu, komentāru un jaunumu vēstules. Vietne neizmanto reklāmas vai izsekošanas sīkdatnes. Lai parādītu lapas, dažiem pakalpojumiem ir redzama jūsu ierīces tīkla adrese: Cloudflare, kura tīklā vietne izvietota, Google, kas piegādā fontus, un lapās ar kartēm arī tālāk minētie karšu pakalpojumi un datu avoti. Citu pakalpojumu saturs, piemēram, video, ielādējas tikai pēc tā pogas nospiešanas."
          ]
        ]
      },
      {
        "heading": "Izvietošana un drošība",
        "paragraphs": [
          [
            "Vietne darbojas Cloudflare tīklā. Kad pārlūks pieprasa lapu, Cloudflare apstrādā ziņas, kas ir katrā pieprasījumā: jūsu ierīces tīkla adresi, lapas adresi, laiku un tehniskas ziņas, piemēram, pārlūka veidu. Cloudflare tās izmanto, lai piegādātu lapu un aizsargātu vietni pret uzbrukumiem un ļaunprātīgu izmantošanu, un var tās glabāt savos žurnālos. Ja lapa neielādējas, pārlūks var arī nosūtīt Cloudflare īsu kļūdas ziņojumu. Šeit Cloudflare darbojas vietnes uzdevumā. Sīkāk ",
            {
              "text": "Cloudflare privātuma politikā",
              "href": "https://www.cloudflare.com/privacypolicy/"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Apmeklējumu statistika",
        "paragraphs": [
          [
            "Vietne skaita apmeklējumus ar Cloudflare statistikas pakalpojumu. Neliels Cloudflare skripts atzīmē, kuru lapu atverat un cik ātri tā ielādējas. Cloudflare apgalvo, ka šis pakalpojums neizmanto sīkdatnes un pārlūka vietējo krātuvi un neveido apmeklētāju digitālos nospiedumus (",
            {
              "text": "par Cloudflare statistikas pakalpojumu",
              "href": "https://www.cloudflare.com/web-analytics/"
            },
            "). Vietnes autors redz tikai kopējos skaitļus un nevar tajos izšķirt atsevišķu lasītāju."
          ]
        ]
      },
      {
        "heading": "Ko vietne nevāc",
        "paragraphs": [
          [
            "Vietnē nav reģistrācijas, lietotāju kontu, komentāru, saziņas veidlapas un jaunumu vēstules, un tā neprasa personas datus. Tajā nav reklāmu, Google analītikas un līdzīgu izsekošanas rīku, un vietne nepārdod nekādus datus."
          ]
        ]
      },
      {
        "heading": "Valodas izvēle",
        "paragraphs": [
          [
            "Kad atverat lapu krievu, poļu vai latviešu valodā, pārlūks saglabā šo valodu savā vietējā krātuvē ar nosaukumu fp-locale, lai sākumlapa nākamreiz atvērtos tajā pašā valodā. Kad izvēlaties valodu ar valodu pārslēdzēju, vietne saglabā arī sīkdatni ar tādu pašu nosaukumu uz vienu gadu. Abās glabājas tikai valodas kods, un tās netiek izmantotas nekam citam. Tās var izdzēst pārlūka iestatījumos."
          ]
        ]
      },
      {
        "heading": "Fonti",
        "paragraphs": [
          [
            "Vietnes fonti nāk no Google fontu pakalpojuma. Lai tos parādītu, pārlūks sazinās ar Google fontu serveriem, kas saņem jūsu ierīces tīkla adresi, pieprasītā fonta adresi, ziņas par pārlūku un šīs vietnes adresi. Google apgalvo, ka tā fontu pakalpojums nesaglabā sīkdatnes un neizmanto šīs ziņas profilu veidošanai vai reklāmai. Sīkāk ",
            {
              "text": "Google privātuma politikā",
              "href": "https://policies.google.com/privacy"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Kartes un jaunākie dati",
        "paragraphs": [
          [
            "Globusi lapās “Kartes” un “Migrācija” ielādē karšu fragmentus no OpenFreeMap, bet, ja OpenFreeMap laikus neatbild, no Carto. Dabas apdraudējumu globuss sadaļā “Kartes” arī ielādē jaunākos datus tieši no publiskiem avotiem: Amerikas Savienoto Valstu Ģeoloģiskā dienesta, Globālās katastrofu brīdināšanas un koordinācijas sistēmas, Amerikas Savienoto Valstu Nacionālās aeronautikas un kosmosa pārvaldes un Amerikas Savienoto Valstu Nacionālās okeānu un atmosfēras pārvaldes, bet, ieslēdzot sausuma slāni, arī no programmas Copernicus Ārkārtas situāciju pārvaldības dienesta. Katrs no šiem pakalpojumiem saņem jūsu ierīces tīkla adresi un redz, ka pieprasījums nāk no šīs vietnes. OpenFreeMap apgalvo, ka neizmanto sīkdatnes."
          ]
        ]
      },
      {
        "heading": "Video",
        "paragraphs": [
          [
            "Dažās lapās par migrāciju ir īsi video no YouTube. Video ielādējas tikai pēc atskaņošanas pogas nospiešanas, un vietne izmanto YouTube uzlabotās privātuma aizsardzības režīmu. Pēc nospiešanas YouTube, kas pieder Google, saņem jūsu ierīces tīkla adresi un var saglabāt ziņas jūsu ierīcē saskaņā ar ",
            {
              "text": "Google privātuma politiku",
              "href": "https://policies.google.com/privacy"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Projekta atbalsts",
        "paragraphs": [
          [
            "Lapa “Atbalstīt” jaunā cilnē atver Stripe maksājumu lapu. Maksājumu un kartes datus apstrādā Stripe saskaņā ar savu ",
            {
              "text": "privātuma politiku",
              "href": "https://stripe.com/privacy"
            },
            ", un pilnu kartes numuru vietne nekad neredz. Autors no Stripe saņem tās ziņas par maksājumu, ar kurām Stripe dalās ar maksājumu saņēmējiem, piemēram, summu un jūsu ievadītos kontaktdatus, un glabā tās tik ilgi, cik to prasa likums par uzskaiti."
          ]
        ]
      },
      {
        "heading": "Elektroniskais pasts",
        "paragraphs": [
          [
            "Ja rakstāt uz ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            ", autors saņem jūsu adresi un vēstuli caur Gmail, Google pasta pakalpojumu, un izmanto tās tikai atbildei. Vēstules tiek dzēstas, kad tās vairs nav vajadzīgas."
          ]
        ]
      },
      {
        "heading": "Saites uz citām vietnēm",
        "paragraphs": [
          [
            "Vietnē ir saites uz daudziem ārējiem avotiem un uz autora profilu vietnē X. Šīm vietnēm ir savi privātuma noteikumi, kas sāk darboties, kad tās atverat."
          ]
        ]
      },
      {
        "heading": "Juridiskais pamats",
        "paragraphs": [
          [
            "Saskaņā ar Apvienotās Karalistes Vispārīgo datu aizsardzības regulu vietne balstās uz leģitīmajām interesēm, lai piegādātu un aizsargātu vietni, skaitītu apmeklējumus kopumā, rādītu fontus un kartes un atbildētu uz vēstulēm. Citu pakalpojumu saturs, ko ielādējat ar pogu, ielādējas ar jūsu piekrišanu, un pogas nospiešana ir šī piekrišana. Maksājuma dati tiek apstrādāti, lai veiktu jūsu pieprasīto maksājumu un kārtotu likumā prasīto uzskaiti."
          ]
        ]
      },
      {
        "heading": "Jūsu tiesības",
        "paragraphs": [
          [
            "Varat pieprasīt kopiju no personas datiem, kas autoram ir par jums, lūgt tos labot vai dzēst un iebilst pret to izmantošanu. Rakstiet uz ",
            {
              "text": "asix449@gmail.com",
              "href": "mailto:asix449@gmail.com"
            },
            ". Lielāko daļu iepriekš aprakstīto datu glabā Cloudflare, Google un citi pakalpojumi, un autors tos neizmanto, lai noskaidrotu, kas jūs esat; par šiem datiem varat vērsties arī tieši pie šiem pakalpojumiem. Ja neesat apmierināts ar to, kā tiek apstrādāti jūsu dati, varat iesniegt sūdzību Informācijas komisāra birojā, Apvienotās Karalistes datu aizsardzības uzraudzības iestādē: ",
            {
              "text": "iesniegt sūdzību",
              "href": "https://ico.org.uk/make-a-complaint/"
            },
            "."
          ]
        ]
      },
      {
        "heading": "Izmaiņas",
        "paragraphs": [
          [
            "Ja šī lapa mainīsies, mainīsies arī datums tās sākumā."
          ]
        ]
      }
    ]
  }
};

export function getPrivacyPage(locale: Locale): PrivacyPage {
  return pages[locale];
}
