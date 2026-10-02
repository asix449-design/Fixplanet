import type { MapCopy } from '../data/maps';
import { cite } from '../data/sources';
import { climateSwatches as sw } from './maps-climate-swatches';
import { realMapCredit } from './real-map-credits';

const heads = {
  what: 'Kas tas ir',
  why: 'Kāpēc tas ir svarīgi',
  how: 'Kā lasīt karti',
  limits: 'Ierobežojumi',
};

export const lv: Record<string, MapCopy> = {
  'surface-temperature-anomalies': {
    title: 'Virsmas temperatūras anomālijas',
    cardMeta:
      'Godarda Kosmosa pētījumu institūts · 2025. gads · salīdzinājumā ar laikposmu no 1951. līdz 1980. gadam',
    hook: 'Virsmas temperatūra visā pasaulē 2025. gadā kā starpība pret vidējo rādītāju no 1951. līdz 1980. gadam.',
    description:
      'Godarda Kosmosa pētījumu institūts, kas ir Nacionālās aeronautikas un kosmosa administrācijas daļa, publicē globālu virsmas temperatūras analīzi. Tā apvieno sauszemes meteoroloģisko staciju datus ar jūras virsmas temperatūras analīzi, un analīzē ir vairāk nekā 25 000 meteoroloģisko staciju. Rezultāti ir anomālijas Celsija grādos: cik siltāka vai vēsāka ir vieta nekā tās pašas vidējā temperatūra no 1951. līdz 1980. gadam. Mēneša vērtības sniedzas līdz 1880. gadam, un tabulas tiek atjauninātas katru mēnesi.',
    whyOnShelf:
      'Vidēji visā pasaulē 2023. gads bija par 1,17 °C siltāks nekā vidējais no 1951. līdz 1980. gadam, 2024. gads par 1,29 °C siltāks un 2025. gads par 1,19 °C siltāks. Kosmosa aģentūra apraksta 2025. gadu kā vienlīdzīgu ar 2023. gadu kļūdas robežās, un siltākais gads novērojumu vēsturē joprojām ir 2024. gads. 2025. gadā ziemeļu puslode bija par 1,49 °C siltāka, bet dienvidu puslode par 0,89 °C siltāka; josla no 64 grādiem ziemeļu platuma līdz polam bija par 2,99 °C siltāka.',
    howToRead:
      'Katrs kvadrāts 2 reiz 2 grādi rāda 2025. gada divpadsmit mēneša anomāliju vidējo. Oranžie un sarkanie toņi ir siltāki par 1951. līdz 1980. gada vidējo, gaiši zilais ir vēsāks, bet pelēkajiem kvadrātiem vērtības nav. Gandrīz visi kvadrāti ir siltāki, un visstiprākā sasilšana ir tālajos ziemeļos.',
    caveats:
      'Vērtības ir izlīdzinātas 1200 kilometru rādiusā, tāpēc vietas ar maz stacijām balstās uz attālām, bet virs okeāna izmantotas jūras virsmas temperatūras analīzes. Dažiem kvadrātiem vērtības nav. Attiecībā pret citu bāzes laikposmu, piemēram, pirmsindustriālo, skaitļi mainās.',
    licenseNote: realMapCredit('lv', 'surface-temperature-anomalies') ?? '',
    imageAlt:
      'Pasaules karte: virsmas temperatūras anomālija 2025. gadā 2 reiz 2 grādu režģī. Lielākā daļa zemeslodes ir oranža un sarkana, tālie ziemeļi ir vistumšāk sarkani, un daži kvadrāti ir pelēki.',
    caption:
      'Virsmas temperatūras anomālija 2025. gadā 2 reiz 2 grādu režģī pret vidējo no 1951. līdz 1980. gadam.',
    sectionHeads: heads,
    legend: [
      {
        title:
          'Toņi rāda 2025. gada anomāliju Celsija grādos pret laikposmu no 1951. līdz 1980. gadam.',
        items: [
          { swatch: sw.temp.below0, label: 'Gaiši zils, zem 0' },
          { swatch: sw.temp.to05, label: 'Bāls persiku, no 0 līdz 0,5' },
          { swatch: sw.temp.to1, label: 'Persiku, no 0,5 līdz 1' },
          { swatch: sw.temp.to15, label: 'Laša, no 1 līdz 1,5' },
          { swatch: sw.temp.to2, label: 'Koraļļu, no 1,5 līdz 2' },
          { swatch: sw.temp.to3, label: 'Sarkans, no 2 līdz 3' },
          { swatch: sw.temp.to4, label: 'Tumši sarkans, no 3 līdz 4' },
          { swatch: sw.temp.above4, label: 'Bordo, 4 un vairāk' },
          { swatch: sw.temp.none, label: 'Pelēks, vērtības nav' },
        ],
      },
    ],
    sources: [
      cite(
        'Godarda Kosmosa pētījumu institūts: virsmas temperatūras analīze (GISS Surface Temperature Analysis (GISTEMP v4))',
        'https://data.giss.nasa.gov/gistemp/',
      ),
      cite(
        'Godarda Kosmosa pētījumu institūts: datu lejupielāde (GISTEMP v4 Data Downloads)',
        'https://data.giss.nasa.gov/gistemp/data_v4.html',
      ),
      cite(
        'Godarda Kosmosa pētījumu institūts: globālie mēneša, sezonas un gada vidējie no 1880. gada līdz šodienai, tabula (Global-mean monthly, seasonal, and annual means, 1880 to present)',
        'https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv',
      ),
      cite(
        'Godarda Kosmosa pētījumu institūts: zonālie gada vidējie no 1880. gada līdz šodienai, tabula (Zonal annual means, 1880 to present)',
        'https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv',
      ),
      cite(
        'Nacionālās aeronautikas un kosmosa administrācijas zinātne: globālā temperatūra (NASA Science: Global Temperature)',
        'https://science.nasa.gov/earth/explore/earth-indicators/global-temperature/',
      ),
      cite(
        'Nacionālās okeānu un atmosfēras pārvaldes Fizikālo zinātņu laboratorija: virsmas temperatūras analīze, režģa dati (NOAA Physical Sciences Laboratory: GISS Surface Temperature Analysis (GISTEMP), gridded data)',
        'https://psl.noaa.gov/data/gridded/data.gistemp.html',
      ),
      cite(
        'Nacionālās aeronautikas un kosmosa administrācijas Earthdata: datu lietošanas un citēšanas vadlīnijas (NASA Earthdata: Data Use and Citation Guidance)',
        'https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance',
      ),
    ],
  },
  'land-precipitation': {
    title: 'Nokrišņi uz sauszemes',
    cardMeta: 'Globālais nokrišņu klimatoloģijas centrs · 2024. gads · gada summa',
    hook: 'Uz sauszemes 2024. gadā nokritušā lietus un sniega summa milimetros pēc lietusmēru staciju datiem 0,5 grāda režģī.',
    description:
      'Globālais nokrišņu klimatoloģijas centrs atbalsta klimata monitoringu un pētniecību. To uztur Vācijas laikapstākļu dienests (Deutscher Wetterdienst) Pasaules Meteoroloģijas organizācijas paspārnē. No sauszemes lietusmēru stacijām tas veido ikmēneša nokrišņus režģī; mēneša analīze tiek izdota režģos no 0,25 līdz 2,5 grādiem un aptver laikposmu no 1891. gada līdz mūsdienām. Karte izmanto 0,5 grāda režģi.',
    whyOnShelf:
      'Rinda sākas 1891. gadā, tāpēc produkts, pēc kura izveidota 2024. gada karte, ļauj salīdzināt datus vairāk nekā simt gadu garumā. Ražotājs iesaka mēneša analīzi hidrometeoroloģisko modeļu pārbaudei un ūdens aprites pētīšanai.',
    howToRead:
      'Katrs kvadrāts 0,5 reiz 0,5 grādi rāda 2024. gada nokrišņu summu milimetros, proti, divpadsmit mēneša vērtību summu. Viens milimetrs ir viens litrs ūdens uz katru kvadrātmetru. Bāli dzeltens nozīmē sausu, un zaļie toņi kļūst tumšāki, pieaugot gada summai. Lielākās summas ir mitrajos tropos, bet sausākie kvadrāti atrodas tuksnešos.',
    caveats:
      'Aptverta tikai sauszeme. Kvadrāts ir iekrāsots tikai tad, ja ir vērtības par visiem divpadsmit mēnešiem; viss pārējais, arī visa okeāna daļa, ir gaiši pelēkzils. Staciju skaits, uz kurām balstās mēneša vērtības, visā pasaulē svārstās no mazāk nekā 10 000 līdz vairāk nekā 52 000, tāpēc reti novērotos reģionos dati ir mazāk droši. Ražotājs iesaka ņemt vērā staciju skaitu uz kvadrātu un izmantot korekcijas sistemātiskām lietusmēru kļūdām. Produkts tiek atjaunināts neregulāros intervālos.',
    licenseNote: realMapCredit('lv', 'land-precipitation') ?? '',
    imageAlt:
      'Pasaules karte: nokrišņu summa uz sauszemes 2024. gadā. Mitrie tropi ir tumši zaļi, tuksneši bāli dzelteni, bet okeāns gaiši pelēkzils.',
    caption: 'Nokrišņu summa uz sauszemes 2024. gadā 0,5 grāda režģī pēc lietusmēru staciju datiem.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Toņi rāda 2024. gada nokrišņu summu milimetros.',
        items: [
          { swatch: sw.rain.under100, label: 'Bāli dzeltens, mazāk nekā 100' },
          { swatch: sw.rain.to250, label: 'Gaiši dzeltens, no 100 līdz 250' },
          { swatch: sw.rain.to500, label: 'Bāli zaļš, no 250 līdz 500' },
          { swatch: sw.rain.to1000, label: 'Gaiši zaļš, no 500 līdz 1 000' },
          { swatch: sw.rain.to1500, label: 'Zaļš, no 1 000 līdz 1 500' },
          { swatch: sw.rain.to2000, label: 'Vidēji zaļš, no 1 500 līdz 2 000' },
          { swatch: sw.rain.to3000, label: 'Tumši zaļš, no 2 000 līdz 3 000' },
          { swatch: sw.rain.above3000, label: 'Ļoti tumši zaļš, 3 000 un vairāk' },
          { swatch: sw.rain.none, label: 'Gaiši pelēkzils, vērtības nav' },
        ],
      },
    ],
    sources: [
      cite(
        'Vācijas laikapstākļu dienests (Deutscher Wetterdienst): Globālais nokrišņu klimatoloģijas centrs (Global Precipitation Climatology Centre (GPCC))',
        'https://www.dwd.de/EN/ourservices/gpcc/gpcc.html',
      ),
      cite(
        'Vācijas laikapstākļu dienests (Deutscher Wetterdienst): piekļuve produktiem (Product Access (GPCC))',
        'https://www.dwd.de/EN/ourservices/gpcc/editorial/userterms_gpcc.html',
      ),
      cite(
        'Vācijas laikapstākļu dienests (Deutscher Wetterdienst): centra produktu lejupielāde (Download GPCC Products)',
        'https://opendata.dwd.de/climate_environment/GPCC/html/download_gate.html',
      ),
      cite(
        'Rustemeier E., Finger P., Schirmeister Z., Ziese M. (2025): mēneša nokrišņu analīze, 2025. gada versija, 0,5 grāda režģis, digitālais objekta identifikators 10.5676/DWD_GPCC/MONTHLY_V2025_050 (GPCC Precipitation Analysis Monthly Version 2025 at 0.5 degree)',
        'https://doi.org/10.5676/DWD_GPCC/MONTHLY_V2025_050',
      ),
    ],
  },
  'drought-index': {
    title: 'Sausums',
    cardMeta: 'Spānijas Nacionālā pētniecības padome · 2024. gada decembris · 12 mēnešu skala',
    hook: 'Cik sausāki vai mitrāki nekā parasti uz sauszemes bija divpadsmit mēneši līdz 2024. gada decembrim, ņemot vērā nokrišņus un iztvaikošanu.',
    description:
      'Standartizēto nokrišņu un iztvaikošanas indeksu publicē Spānijas Nacionālā pētniecības padome (Consejo Superior de Investigaciones Científicas). Tas izmanto ikmēneša starpību starp nokrišņiem un potenciālo iztvaikošanu, proti, ūdeni, ko gaiss varētu paņemt no zemes un augiem. Šis vienkāršais klimatiskais ūdens bilances rādītājs tiek aprēķināts dažādās laika skalās. Globālajai datu bāzei ir 0,5 grāda režģis un ikmēneša vērtības no 1901. gada janvāra līdz 2024. gada decembrim, skalas no 1 līdz 48 mēnešiem, un tā aptver tikai sauszemi. Tā balstīta uz Austrumanglijas Universitātes Klimata pētījumu vienības ikmēneša klimata datiem.',
    whyOnShelf:
      'Tā kā indekss ņem vērā iztvaikošanu tāpat kā nokrišņus, tas reaģē gan uz karstumu, gan uz lietus trūkumu. Dažādās laika skalas der dažādām ūdens sistēmas daļām: no augsnes mitruma dažu mēnešu laikā līdz upēm un gruntsūdeņiem gada vai ilgākā laikā.',
    howToRead:
      'Katrs kvadrāts rāda 12 mēnešu vērtību 2024. gada decembrim, kas aptver laiku no 2024. gada janvāra līdz decembrim. Vērtība ir standartizēts rādītājs konkrētajai vietai. Nulle ir parasts gads, negatīvas vērtības ir sausākas nekā parasti un attēlotas brūnā krāsā, pozitīvas ir mitrākas nekā parasti un attēlotas tirkīzzaļā krāsā. Jo tumšāka krāsa, jo tālāk no parastā.',
    caveats:
      'Datu bāzes pašreizējā versija beidzas 2024. gada decembrī. Iekrāsota ir tikai sauszeme ar datiem, apmēram no 56 grādiem dienvidu platuma līdz 84 grādiem ziemeļu platuma; okeāns un pārējā zemeslodes daļa ir gaiši pelēkzila. Iztvaikošanas pieprasījums tiek aprēķināts no klimata datiem. Katra krāsa salīdzina vietu ar tās pašas vēsturi, tāpēc vienādas krāsas mitrā un sausā reģionā nozīmē dažādu ūdens daudzumu.',
    licenseNote: realMapCredit('lv', 'drought-index') ?? '',
    imageAlt:
      'Pasaules karte: 12 mēnešu sausuma indekss 2024. gada decembrim. Sauszeme, kas sausāka nekā parasti, ir brūna, mitrāka nekā parasti ir tirkīza, bet okeāns gaiši pelēkzils.',
    caption: 'Sausuma indekss 12 mēnešu skalā 2024. gada decembrim, 0,5 grāda režģis virs sauszemes.',
    sectionHeads: heads,
    legend: [
      {
        title: 'Toņi rāda 12 mēnešu indeksu 2024. gada decembrim.',
        items: [
          { swatch: sw.drought.belowM2, label: 'Tumši brūns, zem mīnus 2' },
          { swatch: sw.drought.toM15, label: 'Brūns, no mīnus 2 līdz mīnus 1,5' },
          { swatch: sw.drought.toM1, label: 'Gaiši brūns, no mīnus 1,5 līdz mīnus 1' },
          { swatch: sw.drought.toM05, label: 'Smilšu, no mīnus 1 līdz mīnus 0,5' },
          { swatch: sw.drought.near, label: 'Gandrīz balts, no mīnus 0,5 līdz 0,5' },
          { swatch: sw.drought.to1, label: 'Bāls tirkīzs, no 0,5 līdz 1' },
          { swatch: sw.drought.to15, label: 'Tirkīzs, no 1 līdz 1,5' },
          { swatch: sw.drought.to2, label: 'Tumšs tirkīzs, no 1,5 līdz 2' },
          { swatch: sw.drought.above2, label: 'Ļoti tumšs tirkīzs, virs 2' },
          { swatch: sw.drought.none, label: 'Gaiši pelēkzils, vērtības nav' },
        ],
      },
    ],
    sources: [
      cite(
        'Spānijas Nacionālā pētniecības padome: datu bāze, standartizētais nokrišņu un iztvaikošanas indekss (Data base, SPEI, The Standardised Precipitation-Evapotranspiration Index (SPEIbase))',
        'https://spei.csic.es/database.html',
      ),
      cite(
        'Spānijas Nacionālā pētniecības padome: informācija par standartizēto nokrišņu un iztvaikošanas indeksu (Information, SPEI, The Standardised Precipitation-Evapotranspiration Index)',
        'https://spei.csic.es/home.html',
      ),
      cite(
        'Vicente-Serrano S. M., Beguería S., López-Moreno J. I. (2010): daudzskalu globālā sausuma datu kopa (A Multiscalar Global Drought Dataset: The SPEIbase), Amerikas Meteoroloģijas biedrības biļetens',
        'https://doi.org/10.1175/2010BAMS2988.1',
      ),
      cite(
        'Open Data Commons: Atvērtā datu bāzu licence (Open Database License (ODbL) v1.0)',
        'https://opendatacommons.org/licenses/odbl/1-0/',
      ),
    ],
  },
  'outdoor-heat-stress': {
    title: 'Siltuma stress ārā',
    cardMeta:
      'Copernicus klimata pārmaiņu dienests · 2025. gads · salīdzinājumā ar laikposmu no 1991. līdz 2020. gadam',
    hook: 'Par cik dienām vairāk vai mazāk nekā parasti 2025. gadā bija spēcīgs siltuma stress ārā, uz sauszemes visā pasaulē, izņemot Antarktīdu.',
    description:
      'Copernicus klimata pārmaiņu dienests piedāvā termiskā komforta indeksu datu kopu, ko Eiropas Vidēja termiņa laika prognožu centrs aprēķinājis no sava atmosfēras reanalīzes; tā apvieno modeļa datus ar novērojumiem no visas pasaules pilnīgā un saskanīgā klimata aprakstā. Viens no tiem ir Universālais termiskā klimata indekss: sajūtamā temperatūra Celsija grādos, kas apvieno gaisa temperatūru, mitrumu, vēju un starojumu. Dati aptver zemeslodi, izņemot Antarktīdu, 0,25 grāda režģī, no 1940. gada janvāra līdz gandrīz pašreizējam brīdim. Diena ar vismaz spēcīgu siltuma stresu ir diena, kad sajūtamā temperatūra sasniedz 32 °C vai vairāk.',
    whyOnShelf:
      '2025. gadā 50% zemeslodes sauszemes, neskaitot Antarktīdu, bija vairāk dienu nekā vidēji ar vismaz spēcīgu siltuma stresu. ASV dienvidu daļās un Austrumāzijā šādu dienu bija līdz 45 vairāk nekā vidēji, bet Centrālāfrikā līdz aptuveni 110 dienām vairāk ar ļoti spēcīgu siltuma stresu, proti, sajūtamo temperatūru 38 °C vai vairāk. Lielākajā daļā Austrālijas un daļās Ziemeļāfrikas un Arābijas pussalas bija vairāk dienu ar ārkārtēju siltuma stresu nekā vidēji. Līdz trešdaļai zemeslodes, tostarp Āfrikas dienvidos un Dienvidāzijā, bija mazāk siltuma stresa dienu nekā vidēji.',
    howToRead:
      'Katra krāsa rāda, par cik dienām vairāk vai mazāk nekā 1991. līdz 2020. gada vidējā 2025. gadā bija vismaz spēcīgs siltuma stress. Brūns un oranžs nozīmē vairāk dienu, gandrīz balts tuvu vidējam, bet violets mazāk dienu. Jo spēcīgāka krāsa, jo lielāka starpība. Okeāns un Antarktīda atstāti tukši.',
    caveats:
      'Sajūtamā temperatūra aprēķināta no reanalīzes datiem 0,25 grāda režģī, un Antarktīda atrodas ārpus datu kopas. Karte rāda tikai dienu skaita izmaiņas salīdzinājumā ar vidējo no 1991. līdz 2020. gadam. Siltuma stresa kategorijas sākas ar 26 °C mērenam, 32 °C spēcīgam, 38 °C ļoti spēcīgam un 46 °C ārkārtējam. Lai lejupielādētu režģa datus, vajadzīgs bezmaksas Copernicus klimata datu krātuves konts.',
    licenseNote: realMapCredit('lv', 'outdoor-heat-stress') ?? '',
    imageAlt:
      'Pasaules karte: 2025. gada dienu ar spēcīgu siltuma stresu ārā skaita izmaiņas. Brūns un oranžs nozīmē vairāk dienu nekā vidēji, violets mazāk dienu, un Antarktīda ir tukša.',
    caption:
      'Dienu ar vismaz spēcīgu siltuma stresu ārā skaita izmaiņas 2025. gadā pret vidējo no 1991. līdz 2020. gadam. Attēls ir publicētā karte no ziņojuma „Pasaules klimata galvenie rādītāji 2025. gadā”, ar mainītām krāsām un karti pagrieztu tā, lai ziemeļi būtu augšā.',
    sectionHeads: heads,
    legend: [
      {
        title:
          'Krāsas rāda dienu ar vismaz spēcīgu siltuma stresu skaita izmaiņas 2025. gadā salīdzinājumā ar vidējo no 1991. līdz 2020. gadam.',
        items: [
          { swatch: sw.heat.fewer50, label: 'Tumši violets, vismaz par 50 dienām mazāk' },
          { swatch: sw.heat.fewer25, label: 'Violets, par 25 līdz 50 dienām mazāk' },
          { swatch: sw.heat.fewer10, label: 'Ceriņkrāsa, par 10 līdz 25 dienām mazāk' },
          { swatch: sw.heat.fewer1, label: 'Bāla ceriņkrāsa, par 1 līdz 10 dienām mazāk' },
          { swatch: sw.heat.nearFewer, label: 'Gandrīz balts, mazāk, bet ne vairāk kā par 1 dienu' },
          { swatch: sw.heat.nearMore, label: 'Krēmkrāsa, vairāk, bet ne vairāk kā par 1 dienu' },
          { swatch: sw.heat.more1, label: 'Gaiši oranžs, par 1 līdz 10 dienām vairāk' },
          { swatch: sw.heat.more10, label: 'Oranžs, par 10 līdz 25 dienām vairāk' },
          { swatch: sw.heat.more25, label: 'Brūns, par 25 līdz 50 dienām vairāk' },
          { swatch: sw.heat.more50, label: 'Tumši brūns, vismaz par 50 dienām vairāk' },
          { swatch: sw.heat.ocean, label: 'Pelēkzils, okeāns un Antarktīda, vērtības nav' },
        ],
      },
    ],
    sources: [
      cite(
        'Copernicus klimata pārmaiņu dienests: pasaules klimata galvenie rādītāji 2025. gadā (Global Climate Highlights 2025)',
        'https://climate.copernicus.eu/global-climate-highlights-2025',
      ),
      cite(
        'Copernicus klimata pārmaiņu dienests: pilns ziņojums (Global Climate Highlights 2025, full report, PDF)',
        'https://climate.copernicus.eu/sites/default/files/custom-uploads/GCH-2025/GCH2025-full-report.pdf',
      ),
      cite(
        'Copernicus klimata datu krātuve: termiskā komforta indeksi no reanalīzes (Thermal comfort indices derived from ERA5 reanalysis)',
        'https://cds.climate.copernicus.eu/datasets/derived-utci-historical?tab=overview',
      ),
      cite(
        'Copernicus klimata pārmaiņu dienests: Eiropas klimata stāvoklis 2025. gadā, termiskais stress (European State of the Climate 2025, Thermal stress)',
        'https://climate.copernicus.eu/esotc/2025/thermal-stress',
      ),
      cite(
        'Copernicus klimata datu krātuve: licence Copernicus produktu izmantošanai (Licence to use Copernicus Products)',
        'https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products',
      ),
    ],
  },
  'land-snow-cover': {
    title: 'Sniega sega uz sauszemes',
    cardMeta: 'Nacionālais sniega un ledus datu centrs · 2026. gada marts · 0,05 grāda',
    hook: 'Dienu daļa ar sniegu uz zemes visas pasaules sauszemē 2026. gada martā, kā to redz satelīta instruments.',
    description:
      'Nacionālais sniega un ledus datu centrs ASV izplata ikmēneša sniega segas produktu no vidējas izšķirtspējas spektroradiometra, kas ir instruments Nacionālās aeronautikas un kosmosa administrācijas Terra pavadonī. Tas dod vidējo mēneša sniega segu 0,05 grāda šūnās, apmēram 5 kilometri, globālā režģī, un ir atvasināts no dienas produkta. Mēneša vērtības sniedzas no 2000. gada 1. marta līdz mūsdienām.',
    whyOnShelf:
      'Sniega sega mainās līdz ar gadalaikiem un no gada uz gadu. Tā kā rinda sākas 2000. gada martā, vienu un to pašu mēnesi var salīdzināt vairāk nekā divdesmit piecu gadu garumā ar vienu instrumentu un vienu metodi.',
    howToRead:
      'Katra šūna rāda vidējo sniega segas procentu mēnesī, ņemot dienas, kad pavadonis skaidri redzēja virsmu. Jo tumšāks zilais, jo vairāk dienu zeme bija zem sniega: no mazāk nekā 10 procentiem bālākajā zilajā līdz 90 procentiem un vairāk tumšākajā. Siltā smilšu krāsa uz sauszemes nozīmē mazāk nekā 0,5 procenta sniega vai derīgu novērojumu trūkumu. Okeāns ir gaiši pelēkzils. Antarktīda ir ārpus kartes.',
    caveats:
      'Mākoņi un tumsa slēpj zemi no pavadoņa. Dienas bez skaidra skata netiek iekļautas mēneša vidējā, un polārajā naktī novērojumu nav, tāpēc ziemā tālie ziemeļi ir daļēji tukši. Produkts ļoti zemus vidējos rādītājus pielīdzina nullei. Sniega noteikšanas precizitāte publicētajos pētījumos ir no 88 līdz 93 procentiem, un neīsts sniegs ir novērots vietās bez sniega. Antarktīda produktā vizuālu iemeslu dēļ attēlota kā pilnībā sniega klāta, tāpēc kontinents ir izlaists. Lai lejupielādētu oriģinālos failus, vajadzīgs bezmaksas Earthdata Login konts.',
    licenseNote: realMapCredit('lv', 'land-snow-cover') ?? '',
    imageAlt:
      'Pasaules karte: vidējā sniega sega uz sauszemes 2026. gada martā. Ziemeļu sauszeme ir zila tur, kur sniegs bija bieži, sauszeme bez sniega ir smilšu krāsā, okeāns gaiši pelēkzils, un Antarktīda ir izlaista.',
    caption:
      'Vidējā sniega sega uz sauszemes 2026. gada martā 0,05 grāda režģī, no Terra pavadoņa. Antarktīda kartē ir izlaista.',
    sectionHeads: heads,
    legend: [
      {
        title:
          'Toņi rāda vidējo sniega segu 2026. gada martā procentos no dienām ar skaidru skatu.',
        items: [
          { swatch: sw.snow.under05, label: 'Smilšu, mazāk nekā 0,5' },
          { swatch: sw.snow.to10, label: 'Ļoti bāls zils, no 0,5 līdz 10' },
          { swatch: sw.snow.to25, label: 'Bāls zils, no 10 līdz 25' },
          { swatch: sw.snow.to50, label: 'Gaiši zils, no 25 līdz 50' },
          { swatch: sw.snow.to75, label: 'Vidēji zils, no 50 līdz 75' },
          { swatch: sw.snow.to90, label: 'Zils, no 75 līdz 90' },
          { swatch: sw.snow.to100, label: 'Tumši zils, no 90 līdz 100' },
          { swatch: sw.snow.ocean, label: 'Gaiši pelēkzils, okeāns' },
        ],
      },
    ],
    sources: [
      cite(
        'Nacionālais sniega un ledus datu centrs: Terra pavadoņa ikmēneša sniega sega, globāls režģis 0,05 grāda, 61. versija (MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61)',
        'https://nsidc.org/data/mod10cm/versions/61',
      ),
      cite(
        'Nacionālais sniega un ledus datu centrs: lietotāja rokasgrāmata (MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61, User Guide, PDF)',
        'https://nsidc.org/sites/default/files/mod10cm-v061-userguide_0.pdf',
      ),
      cite(
        'Hall, D. K. un Riggs, G. A. (2021): Terra pavadoņa ikmēneša sniega sega, globāls režģis 0,05 grāda, 61. versija (MODIS/Terra Snow Cover Monthly L3 Global 0.05Deg CMG, Version 61), Nacionālais sniega un ledus datu centrs, digitālais objekta identifikators 10.5067/MODIS/MOD10CM.061',
        'https://doi.org/10.5067/MODIS/MOD10CM.061',
      ),
      cite(
        'Nacionālās aeronautikas un kosmosa administrācijas Earthdata: datu lietošanas un citēšanas vadlīnijas (NASA Earthdata: Data Use and Citation Guidance)',
        'https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance',
      ),
    ],
  },
};
