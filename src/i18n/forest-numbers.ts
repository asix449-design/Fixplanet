import type { ForestNumberSlug } from '../data/forest-atlas';
import { cite, type PrimarySource } from '../data/sources';
import type { Locale } from './config';
import type { ForestAtlasCopy } from './forest-atlas';
import { forestNumberLeftovers } from './forest-numbers-leftovers';

const fraHub = 'https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/en';
const fraPdf = 'https://www.fao.org/3/cd6709en/cd6709en.pdf';
const fraNews =
  'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en';
const fraTerms =
  'https://openknowledge.fao.org/server/api/core/bitstreams/a6e225da-4a31-4e06-818d-ca3aeadfd635/content';
const tongass =
  'https://commons.wikimedia.org/wiki/File:Old_Growth_Tongass_NRT_Photo_12_(52502991629).jpg';
const bialowieza =
  'https://commons.wikimedia.org/wiki/File:Old-growth_Oak-Linden-Hornbeam_forest_-_Bialowieza_forest.tif';
const mato =
  'https://commons.wikimedia.org/wiki/File:Mato_Grosso_deforestation_(Pedro_Biondi)_12ago2007.jpg';
const rondonia =
  'https://commons.wikimedia.org/wiki/File:SOBREVVO_EM_RONDONIA_DIA_07-08-2020_(FOTO_BRUNO_KELLY)_(62)_(50224604772).jpg';
const manaus = 'https://commons.wikimedia.org/wiki/File:Amazon_Manaus_forest.jpg';
const gfr = 'https://gfr.wri.org/latest-analysis-deforestation-trends';
const wriRelease =
  'https://www.wri.org/news/release-tropical-rainforest-loss-drops-36-2025-fires-threaten-global-progress';
const gfr2024 = 'https://gfr.wri.org/global-tree-cover-loss-data-2024';
const gnw =
  'https://www.globalnaturewatch.org/blog/data-and-tools/2025-tree-cover-loss-data-explained/';
const glad = 'https://glad.umd.edu/dataset/primary-forest-humid-tropics';
const nature = 'https://www.nature.com/articles/nature14967';
const yale = 'https://elischolar.library.yale.edu/yale_fes_data/1/';
const sdata = 'https://www.nature.com/articles/sdata201669';
const by4 = 'https://creativecommons.org/licenses/by/4.0/';
const by3 = 'https://creativecommons.org/licenses/by/3.0/br/deed.en';
const by2 = 'https://creativecommons.org/licenses/by/2.0/';
const bySa = 'https://creativecommons.org/licenses/by-sa/2.5/';

function fraSources(labels: [string, string, string, string, string], photoUrl: string): PrimarySource[] {
  return [
    cite(labels[0], fraHub),
    cite(labels[1], fraPdf),
    cite(labels[2], fraNews),
    cite(labels[3], fraTerms),
    cite(labels[4], photoUrl),
  ];
}

const en = {
  'forest-remaining': {
    title: 'Forest remaining',
    meta: 'Global Forest Resources Assessment 2025 · 4.14 billion hectares · 32 percent of land',
    blurb:
      'The Food and Agriculture Organization of the United Nations reports that forests cover 4.14 billion hectares, 32 percent of the world land, based on reports from 236 countries and areas.',
    what: 'The Global Forest Resources Assessment 2025, published by the Food and Agriculture Organization of the United Nations, reports that the world has 4.14 billion hectares of forest. That is 32 percent of the global land area, or 0.5 hectares of forest per person, and it rests on reports from 236 countries and areas. The assessment defines forest as land spanning more than 0.5 hectares with trees higher than 5 metres and a canopy cover of more than 10 percent, or trees able to reach those thresholds in place. Land mainly used for farming or for towns and cities is left out of the definition.',
    why: 'The organization says that nearly half of the world forests are in the tropics and that more than half, 54 percent, are in five countries: the Russian Federation, Brazil, Canada, the United States of America and China. Of the world regions, Europe has the largest forest area, 25 percent of the world total. The assessment adds that the rate of deforestation slowed in every region over the last decade and that more than half of the world forests are covered by long-term management plans.',
    howToRead:
      'The total is a land-use figure compiled from official national reports under one shared definition, and land counts as forest because of how it is used. Areas that are temporarily without trees after clear-cutting or natural disasters, and are expected to regenerate within 5 years, are included. Of the total, 92 percent, or 3.83 billion hectares, is naturally regenerating forest and about 8 percent, or 312 million hectares, is planted forest. Primary forests make up at least 1.18 billion hectares of the naturally regenerating part.',
    limits:
      'The figure is a snapshot for 2025 from an assessment that appears every five years, and the 2025 edition was released on 21 October 2025. Values are generally rounded to three significant figures, so totals can differ slightly from the sum of their parts. Not all countries and areas reported on every parameter.',
    caption:
      'Old-growth forest on Prince of Wales Island in the Tongass National Forest, Alaska, with moss-covered trunks and fallen logs.',
    credit:
      'Photo: Nicholas Thomas, USDA Forest Service Alaska Region, via Wikimedia Commons, public domain (work of a U.S. federal government agency).',
    imageAlt:
      'Old-growth forest on Prince of Wales Island in the Tongass National Forest, Alaska, with moss-covered trunks and fallen logs.',
  },
  'primary-forest': {
    title: 'Primary forest',
    meta: 'Global Forest Resources Assessment 2025 · at least 1.18 billion hectares · 29 percent of forest',
    blurb:
      'The Food and Agriculture Organization of the United Nations reports at least 1.18 billion hectares of primary forest, 29 percent of all forest: naturally regenerating forest of native tree species with no clearly visible signs of human activity.',
    what: 'The Global Forest Resources Assessment 2025 of the Food and Agriculture Organization of the United Nations reports that primary forests cover at least 1.18 billion hectares, which is 29 percent of the total forest area. The assessment defines primary forest as naturally regenerating forest of native tree species with no clearly visible indications of human activities and with ecological processes that are largely undisturbed. The definition includes forests where Indigenous Peoples and local communities carry out traditional stewardship, and forests that show the effects of natural disturbances such as storms, drought, wildfire or insect outbreaks.',
    why: 'The assessment says that primary forests, especially primary tropical moist forests, are highly species-rich, diverse ecosystems and that their extent is an important environmental indicator. Primary forest accounts for 49 percent of the total forest area in South America, 38 percent in Africa, 37 percent in North and Central America, 32 percent in Europe, 21 percent in Oceania and 15 percent in Asia.',
    howToRead:
      'By region, Europe has the largest primary forest area, 311 million hectares, followed by South America with 299 million and North and Central America with 280 million. Africa has an estimated 163 million hectares, Asia 85.2 million and Oceania 38.3 million. The Europe figure includes the Russian Federation; without it, Europe has 4.32 million hectares. The area of primary forest worldwide decreased by 110 million hectares between 1990 and 2025. The average annual rate of net loss was 3.48 million hectares in 1990 to 2000, 3.92 million in 2000 to 2015 and 1.61 million in 2015 to 2025, less than half the rate of 2000 to 2015.',
    limits:
      'The 1.18 billion hectares is a minimum. In all, 168 countries and areas, representing 85 percent of the world forest area, reported primary forest for 2025, and among those reporting countries and areas primary forest is 33 percent of the forest area. The assessment names inconsistent interpretation and application of definitions as the biggest obstacle to reporting, which raises concerns about how well the data compare between countries. The data record the net change in area, so a decrease can come from deforestation or from conversion to other forest types such as naturally regenerating or planted forest.',
    caption:
      'Old-growth oak, linden and hornbeam forest in the Białowieża Forest, Podlaskie, Poland, with a large tree trunk carrying orange bracket fungi and moss at its base.',
    credit:
      'Photo: Bouke ten Cate, via Wikimedia Commons, licence Creative Commons Attribution 4.0.',
    licenseUrl: by4,
    imageAlt:
      'Old-growth oak, linden and hornbeam forest in the Białowieża Forest, Poland, with orange bracket fungi and moss at the base of a large trunk.',
  },
  'net-forest-loss': {
    title: 'Net forest-area loss',
    meta: 'Global Forest Resources Assessment 2025 · 4.12 million hectares a year · 2015 to 2025',
    blurb:
      'The Food and Agriculture Organization of the United Nations reports that the world forest area shrank by a net 4.12 million hectares a year in 2015 to 2025, down from 10.7 million hectares a year in 1990 to 2000.',
    what: 'The Global Forest Resources Assessment 2025 of the Food and Agriculture Organization of the United Nations reports that the annual rate of net forest loss fell from 10.7 million hectares in 1990 to 2000 to 4.12 million hectares in 2015 to 2025. Net change in forest area is the area deforested in a period minus the area of forest expansion. When deforestation is greater than expansion, there is a net loss. Deforestation means the conversion of forest to other land use, whether human-induced or not, including forest converted to agriculture, pasture, water reservoirs, mining and urban areas.',
    why: 'The assessment says the fall in net loss resulted from reduced deforestation in some countries and the expansion of forest area in others. Deforestation slowed to 10.9 million hectares a year in 2015 to 2025, down from 17.6 million in 1990 to 2000 and 13.6 million in 2000 to 2015. The organization describes 10.9 million hectares a year as still too high. An estimated 489 million hectares of forest were lost through deforestation between 1990 and 2025.',
    howToRead:
      'Net change and deforestation are related, and the assessment reports them as separate numbers. Forest expansion, through afforestation and natural expansion, fell from 9.88 million hectares a year in 2000 to 2015 to 6.78 million in 2015 to 2025. The net loss rate was 3.68 million hectares a year in 2000 to 2015 and rose to 4.12 million in 2015 to 2025 because the rate of forest gain fell. By country, the largest annual net loss in 2015 to 2025 was in Brazil, at 2.94 million hectares, and the largest net gain was in China, at 1.69 million hectares. Asia as a region gained 1.62 million hectares a year, and Europe gained 1.44 million.',
    limits:
      'The figures are decade averages compiled from country reports, and the assessment says estimates of forest-area change dynamics should be viewed with caution because many countries and areas do not collect data on deforestation, afforestation and natural forest expansion. The sum of deforestation and expansion can differ from net change because the first two include estimates made by the organization, while net change comes entirely from complete time series reported by countries and areas. Most deforestation, 88 percent between 1990 and 2025, occurred in the tropical domain.',
    caption:
      'Two patches of forest among cleared cotton fields in northwest Mato Grosso, Brazil, near the Xingu Indigenous Park, with a dirt road between them.',
    credit:
      'Photo: Pedro Biondi, Agência Brasil, via Wikimedia Commons, licence Creative Commons Attribution 3.0 Brazil.',
    licenseUrl: by3,
    imageAlt:
      'Two patches of forest among cleared cotton fields in northwest Mato Grosso, Brazil, with a dirt road between them.',
  },
  'tropical-primary-loss': {
    title: 'Tropical primary forest loss',
    meta: 'University of Maryland Global Land Analysis and Discovery laboratory and Global Forest Watch · 4.3 million hectares · 2025',
    blurb:
      'The World Resources Institute reports that the world lost 4.3 million hectares of tropical primary rainforest in 2025, 36 percent less than in the record year 2024.',
    what: 'New annual data from the Global Land Analysis and Discovery laboratory at the University of Maryland, available on Global Forest Watch, the platform of the World Resources Institute, show that the world lost 4.3 million hectares of tropical primary rainforest in 2025. The World Resources Institute describes this as an area roughly the size of Denmark, or 11 football (soccer) fields every minute. The laboratory tree cover loss data capture changes at approximately 30 by 30 metre resolution across all global land areas except Antarctica and other Arctic islands.',
    why: 'Loss of tropical primary rainforest fell by 36 percent from the record high of 2024, when the tropics lost 6.7 million hectares, driven largely by fires. Loss in 2025 is still 46 percent higher than a decade ago. The World Resources Institute says Brazil cut its loss of primary forest that was not burned by 41 percent compared with 2024, reaching its lowest level on record. Elizabeth Goldman, Co-Director of Global Forest Watch, said that part of the decline reflects a lull after an extreme fire year.',
    howToRead:
      'The World Resources Institute Global Forest Review focuses on primary forests in the humid tropics, which it describes as areas of mature rainforest that are especially important for biodiversity, carbon storage and regulating regional and local climate. It focuses on the tropics because that is where 94 percent of deforestation occurs. The figure of 4.3 million hectares covers humid tropical primary forest only. For all forests worldwide, tree cover loss in 2025 was 25.5 million hectares, and fires were responsible for 42 percent of it. Agricultural expansion remains the leading driver of tree cover loss overall.',
    limits:
      'The Global Forest Watch data explainer says that tree cover loss includes both loss widely considered to be deforestation, such as conversion of natural forest to agricultural land, and loss that is usually treated differently, such as timber harvesting in plantation forests or natural disturbances, which makes tree cover loss a wider measure than deforestation alone. The University of Maryland laboratory map of primary humid tropical forest was made for the year 2001 at 30-metre resolution from Landsat satellite imagery. The World Resources Institute expects El Niño conditions in 2026 to test whether countries are better prepared to prevent and respond to large-scale fires.',
    caption:
      'Aerial view of cleared land prepared for crops or cattle near Porto Velho, Rondônia, Brazil, with forest at the edge of the fields and along a stream.',
    credit:
      'Photo: Bruno Kelly, Amazônia Real, via Wikimedia Commons, licence Creative Commons Attribution 2.0.',
    licenseUrl: by2,
    imageAlt:
      'Aerial view of cleared land prepared for crops or cattle near Porto Velho, Rondônia, Brazil, with forest along the field edge and a stream.',
  },
  'trees-living': {
    title: 'Trees living',
    meta: 'Crowther and colleagues 2015 · about 3.04 trillion trees',
    blurb:
      'A 2015 study in the journal Nature combined 429,775 forest plot measurements with remote sensing and mapping layers and estimated that there are about 3.04 trillion trees on Earth.',
    what: 'In 2015 the journal Nature published a paper by T. W. Crowther and colleagues titled Mapping tree density at a global scale. It gives the first spatially continuous map of forest tree density at a global scale and estimates that the global number of trees is approximately 3.04 trillion, an order of magnitude higher than the previous estimate. Of these, approximately 1.30 trillion are in tropical and subtropical forests, 0.74 trillion in boreal regions and 0.66 trillion in temperate regions. The paper appeared on 2 September 2015, and the density map itself is available from Yale University EliScholar repository.',
    why: 'A count of trees is a different way of measuring forests from an area in hectares. The authors report that, based on their projected tree densities, over 15 billion trees are cut down each year and the global number of trees has fallen by approximately 46 percent since the start of human civilization. Their biome-level results show how much climate and topography control tree density at finer scales, and they also show the overwhelming effect of humans across most of the world.',
    howToRead:
      'The figures come from field measurements linked to a suite of remote sensing and mapping layers, from which regression models were built and applied to every map pixel. A companion paper in Scientific Data, published on 16 August 2016, describes the models. It reports 429,775 independent plot records that each had a location and a tree density in trees per hectare, and pixels of nominally 1 square kilometre. The authors defined trees as those larger than 10 centimetres in diameter at breast height, although minimum sizes for counting a tree vary by country and inventory purpose.',
    limits:
      'The 3.04 trillion figure is a modelled estimate from 2015, and the Scientific Data paper says the data offer precise estimates of the number of trees at global and biome scales and advises against using them for local-level estimation. The estimate for the biomes of mangroves and tropical and subtropical coniferous forests uses models from the most similar biomes, because too few plots were available. The density map is published by Yale under a Creative Commons Attribution-NoDerivatives 4.0 licence. The map is linked from the source list and is not reproduced here.',
    caption:
      'Forest canopy of the Amazon basin north of Manaus, Brazil, seen from the top of a 50 metre tower, where the top of the vegetation is typically 35 metres high.',
    credit:
      'Photo: Phil P Harris, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 2.5.',
    licenseUrl: bySa,
    imageAlt:
      'Forest canopy of the Amazon basin north of Manaus, Brazil, seen from the top of a 50 metre tower.',
  },
};

const ru = {
  'forest-remaining': {
    title: 'Лес, который остался',
    meta: 'Глобальная оценка лесных ресурсов 2025 года · 4,14 миллиарда гектаров · 32 процента суши',
    blurb:
      'Продовольственная и сельскохозяйственная организация Объединённых Наций сообщает, что леса покрывают 4,14 миллиарда гектаров, то есть 32 процента суши мира, по докладам 236 стран и территорий.',
    sourceLabel:
      'Продовольственная и сельскохозяйственная организация ООН, Глобальная оценка лесных ресурсов 2025',
    what: 'Глобальная оценка лесных ресурсов 2025 года, опубликованная Продовольственной и сельскохозяйственной организацией Объединённых Наций, сообщает, что в мире 4,14 миллиарда гектаров леса. Это 32 процента площади суши, или 0,5 гектара леса на одного человека, и цифра опирается на доклады 236 стран и территорий. Оценка определяет лес как участок площадью более 0,5 гектара с деревьями выше 5 метров и сомкнутостью крон более 10 процентов либо с деревьями, способными достичь этих порогов на месте. Земли, главным образом занятые сельским хозяйством или городской застройкой, из определения исключены.',
    why: 'Организация сообщает, что почти половина лесов мира находится в тропиках, а более половины, 54 процента, приходится на пять стран: Российскую Федерацию, Бразилию, Канаду, Соединённые Штаты Америки и Китай. Среди регионов мира самая большая лесная площадь в Европе, 25 процентов мирового итога. Оценка добавляет, что за последнее десятилетие темп обезлесения снизился во всех регионах, а более половины лесов мира охвачено долгосрочными планами управления.',
    howToRead:
      'Итог является показателем землепользования, собранным из официальных национальных докладов по единому определению; участок считается лесом по тому, как он используется. Участки, временно лишённые деревьев после сплошной рубки или стихийных бедствий и, как ожидается, восстанавливающиеся в течение 5 лет, тоже учтены. Из общей площади 92 процента, или 3,83 миллиарда гектаров, занимают естественно возобновляющиеся леса и около 8 процентов, или 312 миллионов гектаров, составляют посаженные леса. Первичные леса составляют по меньшей мере 1,18 миллиарда гектаров естественно возобновляющейся части.',
    limits:
      'Цифра является снимком на 2025 год из оценки, которая выходит раз в пять лет; издание 2025 года вышло 21 октября 2025 года. Значения, как правило, округлены до трёх значащих цифр, поэтому итоги могут немного отличаться от суммы частей. Не все страны и территории сообщили данные по каждому показателю.',
    caption:
      'Старовозрастный лес на острове Принс-оф-Уэльс в национальном лесу Тонгасс на Аляске, с покрытыми мхом стволами и поваленными брёвнами.',
    credit:
      'Фото: Николас Томас, Лесная служба Министерства сельского хозяйства США, отделение на Аляске, через Викисклад, общественное достояние (работа федерального ведомства США).',
    imageAlt:
      'Старовозрастный лес на острове Принс-оф-Уэльс в национальном лесу Тонгасс на Аляске, с покрытыми мхом стволами и поваленными брёвнами.',
    sources: fraSources(
      [
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов 2025 года, страница оценки (Global Forest Resources Assessment 2025)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов 2025 года, основной доклад (Global Forest Resources Assessment 2025, main report)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Мировое обезлесение замедляется, но леса остаются под давлением, показывает доклад организации, 21 октября 2025 года (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов, термины и определения 2025 года, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Викисклад: Old Growth Tongass NRT Photo 12 (фото)',
      ],
      tongass,
    ),
  },
  'primary-forest': {
    title: 'Первичные леса',
    meta: 'Глобальная оценка лесных ресурсов 2025 года · не менее 1,18 миллиарда гектаров · 29 процентов лесов',
    blurb:
      'Продовольственная и сельскохозяйственная организация Объединённых Наций сообщает о не менее чем 1,18 миллиарда гектаров первичных лесов, то есть 29 процентах всех лесов: естественно возобновляющихся лесов из местных пород деревьев без явно видимых следов деятельности человека.',
    sourceLabel: 'Глобальная оценка лесных ресурсов 2025, первичные леса',
    what: 'Глобальная оценка лесных ресурсов 2025 года Продовольственной и сельскохозяйственной организации Объединённых Наций сообщает, что первичные леса занимают по меньшей мере 1,18 миллиарда гектаров, то есть 29 процентов общей лесной площади. Оценка определяет первичный лес как естественно возобновляющийся лес из местных пород деревьев без явно видимых признаков деятельности человека и с экологическими процессами, которые в основном остаются ненарушенными. В определение входят леса, где коренные народы и местные общины ведут традиционное природопользование, и леса, несущие следы природных нарушений, таких как бури, засуха, лесные пожары или вспышки численности насекомых.',
    why: 'Оценка сообщает, что первичные леса, особенно первичные тропические влажные леса, представляют собой исключительно богатые видами и разнообразные экосистемы и что их площадь служит важным показателем состояния окружающей среды. На первичный лес приходится 49 процентов общей лесной площади в Южной Америке, 38 процентов в Африке, 37 процентов в Северной и Центральной Америке, 32 процента в Европе, 21 процент в Океании и 15 процентов в Азии.',
    howToRead:
      'По регионам наибольшая площадь первичных лесов в Европе, 311 миллионов гектаров, затем идут Южная Америка с 299 миллионами и Северная и Центральная Америка с 280 миллионами. В Африке, по оценке, 163 миллиона гектаров, в Азии 85,2 миллиона и в Океании 38,3 миллиона. Цифра по Европе включает Российскую Федерацию; без неё в Европе 4,32 миллиона гектаров. Площадь первичных лесов в мире сократилась на 110 миллионов гектаров между 1990 и 2025 годами. Среднегодовой темп чистой потери составлял 3,48 миллиона гектаров в период с 1990 по 2000 год, 3,92 миллиона в период с 2000 по 2015 год и 1,61 миллиона в период с 2015 по 2025 год, то есть меньше половины темпа периода с 2000 по 2015 год.',
    limits:
      'Цифра 1,18 миллиарда гектаров является минимумом. Всего 168 стран и территорий, представляющих 85 процентов лесной площади мира, сообщили данные о первичных лесах на 2025 год, а среди этих стран и территорий первичный лес составляет 33 процента лесной площади. Оценка называет главным препятствием для отчётности разное толкование и применение определений, что вызывает сомнения в сопоставимости данных между странами. Данные фиксируют чистое изменение площади, поэтому сокращение может происходить из-за обезлесения или из-за перевода в другие типы лесов, например в естественно возобновляющиеся или посаженные.',
    caption:
      'Старовозрастный дубово-липово-грабовый лес в Беловежской пуще, Подляское воеводство, Польша: крупный ствол дерева с оранжевыми трутовиками и мхом у основания.',
    credit:
      'Фото: Bouke ten Cate, через Викисклад, лицензия Creative Commons «Атрибуция 4.0».',
    licenseUrl: by4,
    imageAlt:
      'Старовозрастный дубово-липово-грабовый лес в Беловежской пуще, Польша: крупный ствол с оранжевыми трутовиками и мхом у основания.',
    sources: fraSources(
      [
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов 2025 года, страница оценки (Global Forest Resources Assessment 2025)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов 2025 года, основной доклад (Global Forest Resources Assessment 2025, main report)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Мировое обезлесение замедляется, но леса остаются под давлением, показывает доклад организации, 21 октября 2025 года (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов, термины и определения 2025 года, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Викисклад: Old-growth Oak-Linden-Hornbeam forest - Bialowieza forest (фото)',
      ],
      bialowieza,
    ),
  },
  'net-forest-loss': {
    title: 'Чистая потеря площади леса',
    meta: 'Глобальная оценка лесных ресурсов 2025 года · 4,12 миллиона гектаров в год · с 2015 по 2025 год',
    blurb:
      'Продовольственная и сельскохозяйственная организация Объединённых Наций сообщает, что площадь лесов мира сокращалась на 4,12 миллиона гектаров в год в чистом выражении с 2015 по 2025 год, тогда как с 1990 по 2000 год сокращение составляло 10,7 миллиона гектаров в год.',
    sourceLabel:
      'Продовольственная и сельскохозяйственная организация ООН, пресс-релиз об оценке лесов 2025',
    what: 'Глобальная оценка лесных ресурсов 2025 года Продовольственной и сельскохозяйственной организации Объединённых Наций сообщает, что годовой темп чистой потери лесов снизился с 10,7 миллиона гектаров в период с 1990 по 2000 год до 4,12 миллиона гектаров в период с 2015 по 2025 год. Чистое изменение площади леса равно площади, обезлесенной за период, за вычетом площади расширения лесов. Когда обезлесение превышает расширение, возникает чистая потеря. Обезлесение означает перевод леса в другое землепользование, вызванный человеком или нет, включая перевод леса в сельскохозяйственные земли, пастбища, водохранилища, горнодобывающие территории и городские земли.',
    why: 'Оценка сообщает, что снижение чистой потери стало результатом сокращения обезлесения в одних странах и расширения лесной площади в других. Обезлесение замедлилось до 10,9 миллиона гектаров в год в период с 2015 по 2025 год по сравнению с 17,6 миллиона в период с 1990 по 2000 год и 13,6 миллиона в период с 2000 по 2015 год. Организация называет 10,9 миллиона гектаров в год всё ещё слишком высоким показателем. По оценке, 489 миллионов гектаров леса были потеряны из-за обезлесения между 1990 и 2025 годами.',
    howToRead:
      'Чистое изменение и обезлесение связаны между собой, и оценка приводит их как отдельные числа. Расширение лесов за счёт облесения и естественного расширения сократилось с 9,88 миллиона гектаров в год в период с 2000 по 2015 год до 6,78 миллиона в период с 2015 по 2025 год. Темп чистой потери составлял 3,68 миллиона гектаров в год в период с 2000 по 2015 год и вырос до 4,12 миллиона в период с 2015 по 2025 год, потому что снизился темп прироста лесов. По странам самая большая годовая чистая потеря в период с 2015 по 2025 год была в Бразилии, 2,94 миллиона гектаров, а самый большой чистый прирост был в Китае, 1,69 миллиона гектаров. Азия как регион прирастала на 1,62 миллиона гектаров в год, а Европа на 1,44 миллиона.',
    limits:
      'Цифры являются средними за десятилетие, собранные из докладов стран, и оценка предупреждает, что оценки динамики изменения лесной площади следует рассматривать с осторожностью, поскольку многие страны и территории не собирают данные об обезлесении, облесении и естественном расширении лесов. Сумма обезлесения и расширения может отличаться от чистого изменения, потому что первые два показателя включают оценки самой организации, а чистое изменение целиком получено из полных временных рядов, предоставленных странами и территориями. Большая часть обезлесения, 88 процентов между 1990 и 2025 годами, пришлась на тропическую зону.',
    caption:
      'Два участка леса среди расчищенных хлопковых полей на северо-западе штата Мату-Гросу, Бразилия, вблизи Индейского парка Шингу, с грунтовой дорогой между ними.',
    credit:
      'Фото: Педро Бионди, Agência Brasil, через Викисклад, лицензия Creative Commons «Атрибуция 3.0 Бразилия».',
    licenseUrl: by3,
    imageAlt:
      'Два участка леса среди расчищенных хлопковых полей на северо-западе штата Мату-Гросу, Бразилия, с грунтовой дорогой между ними.',
    sources: fraSources(
      [
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов 2025 года, страница оценки (Global Forest Resources Assessment 2025)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов 2025 года, основной доклад (Global Forest Resources Assessment 2025, main report)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Мировое обезлесение замедляется, но леса остаются под давлением, показывает доклад организации, 21 октября 2025 года (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Продовольственная и сельскохозяйственная организация Объединённых Наций: Глобальная оценка лесных ресурсов, термины и определения 2025 года, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Викисклад: Mato Grosso deforestation (Pedro Biondi) 12ago2007 (фото)',
      ],
      mato,
    ),
  },
  'tropical-primary-loss': {
    title: 'Потеря тропических первичных лесов',
    meta: 'Лаборатория глобального анализа и открытий Мэрилендского университета и Global Forest Watch · 4,3 миллиона гектаров · 2025 год',
    blurb:
      'Институт мировых ресурсов сообщает, что в 2025 году мир потерял 4,3 миллиона гектаров тропических первичных дождевых лесов, на 36 процентов меньше, чем в рекордном 2024 году.',
    sourceLabel:
      'Институт мировых ресурсов, анализ Global Forest Review о потере тропических лесов в 2025 году',
    what: 'Новые ежегодные данные Лаборатории глобального анализа и открытий Мэрилендского университета, доступные на платформе Института мировых ресурсов Global Forest Watch, показывают, что в 2025 году мир потерял 4,3 миллиона гектаров тропических первичных дождевых лесов. Институт мировых ресурсов описывает это как площадь примерно с Данию, или 11 футбольных полей каждую минуту. Данные лаборатории о потере древесного покрова фиксируют изменения примерно с разрешением 30 на 30 метров по всей суше мира, кроме Антарктиды и других арктических островов.',
    why: 'Потеря тропических первичных дождевых лесов сократилась на 36 процентов по сравнению с рекордным 2024 годом, когда тропики потеряли 6,7 миллиона гектаров, в основном из-за пожаров. Потери 2025 года всё ещё на 46 процентов выше, чем десять лет назад. Институт мировых ресурсов сообщает, что Бразилия сократила потерю первичного леса, не связанную с пожарами, на 41 процент по сравнению с 2024 годом и достигла самого низкого уровня за всю историю наблюдений. Элизабет Голдман, сопредседатель Global Forest Watch, сказала, что часть снижения отражает затишье после года экстремальных пожаров.',
    howToRead:
      'Обзор мировых лесов Института мировых ресурсов сосредоточен на первичных лесах влажных тропиков, которые институт описывает как участки зрелых дождевых лесов, особенно важные для биоразнообразия, накопления углерода и регулирования регионального и местного климата. Внимание к тропикам объясняется тем, что именно там происходит 94 процента обезлесения. Цифра 4,3 миллиона гектаров охватывает только первичные леса влажных тропиков. По всем лесам мира потеря древесного покрова в 2025 году составила 25,5 миллиона гектаров, и 42 процента её вызвали пожары. Расширение сельского хозяйства остаётся главной причиной потери древесного покрова в целом.',
    limits:
      'Пояснение к данным Global Forest Watch сообщает, что потеря древесного покрова включает и потери, которые обычно считают обезлесением, например превращение природного леса в сельскохозяйственные земли, и потери, которые обычно относят к другим категориям, например заготовку древесины в лесных плантациях или природные нарушения, поэтому потеря древесного покрова является более широким показателем, чем одно обезлесение. Карта первичных влажных тропических лесов лаборатории Мэрилендского университета составлена на 2001 год с разрешением 30 метров по спутниковым снимкам Landsat. Институт мировых ресурсов ожидает, что условия Эль-Ниньо в 2026 году проверят, лучше ли страны готовы предотвращать крупные пожары и реагировать на них.',
    caption:
      'Вид с воздуха на расчищенную землю, подготовленную под посевы или пастбища, близ Порту-Велью, штат Рондония, Бразилия, с лесом на краю полей и вдоль ручья.',
    credit:
      'Фото: Бруну Келли, Amazônia Real, через Викисклад, лицензия Creative Commons «Атрибуция 2.0».',
    licenseUrl: by2,
    imageAlt:
      'Вид с воздуха на расчищенную землю близ Порту-Велью, штат Рондония, Бразилия, с лесом на краю полей и вдоль ручья.',
    sources: [
      cite(
        'Институт мировых ресурсов, Обзор мировых лесов: Потеря тропических дождевых лесов замедлилась в 2025 году, но пожары остаются растущей угрозой для лесов мира, 2026 (Tropical Rainforest Loss Slowed in 2025, but Fire is a Growing Threat to Forests Worldwide)',
        gfr,
      ),
      cite(
        'Институт мировых ресурсов: Пресс-релиз: потеря тропических дождевых лесов снизилась на 36 процентов в 2025 году, но пожары угрожают глобальному прогрессу, 29 апреля 2026 года (RELEASE: Tropical Rainforest Loss Drops 36% in 2025, but Fires Threaten Global Progress)',
        wriRelease,
      ),
      cite(
        'Институт мировых ресурсов, Обзор мировых лесов: Сколько леса было потеряно в 2024 году? 2025 (How much forest was lost in 2024?)',
        gfr2024,
      ),
      cite(
        'Global Nature Watch: Данные Global Forest Watch о потере древесного покрова за 2025 год с пояснениями, 2026 (Global Forest Watch 2025 Tree Cover Loss Data Explained)',
        gnw,
      ),
      cite(
        'Мэрилендский университет, Лаборатория глобального анализа и открытий: Первичные влажные тропические леса, страница набора данных (Primary Humid Tropical Forests)',
        glad,
      ),
      cite(
        'Викисклад: SOBREVVO EM RONDONIA DIA 07-08-2020 (FOTO BRUNO KELLY) (62) (фото)',
        rondonia,
      ),
    ],
  },
  'trees-living': {
    title: 'Живые деревья',
    meta: 'Кроутер и соавторы, 2015 год · около 3,04 триллиона деревьев',
    blurb:
      'Исследование 2015 года в журнале Nature объединило 429 775 измерений на лесных пробных площадях со слоями дистанционного зондирования и картографии и оценило число деревьев на Земле примерно в 3,04 триллиона.',
    sourceLabel: 'Nature, «Картирование плотности деревьев в глобальном масштабе» (2015)',
    what: 'В 2015 году журнал Nature опубликовал статью Т. У. Кроутера и соавторов «Картографирование плотности деревьев в глобальном масштабе». В ней дана первая пространственно непрерывная карта плотности лесных деревьев в глобальном масштабе, и число деревьев в мире оценено примерно в 3,04 триллиона, что на порядок больше прежней оценки. Из них примерно 1,30 триллиона находятся в тропических и субтропических лесах, 0,74 триллиона в бореальных районах и 0,66 триллиона в умеренных. Статья вышла 2 сентября 2015 года, а сама карта плотности доступна в хранилище EliScholar Йельского университета.',
    why: 'Подсчёт деревьев является иным способом измерять леса, чем площадь в гектарах. Авторы сообщают, что, судя по рассчитанным плотностям деревьев, ежегодно вырубают более 15 миллиардов деревьев, а общее число деревьев в мире сократилось примерно на 46 процентов с начала человеческой цивилизации. Их результаты по биомам показывают, насколько климат и рельеф определяют плотность деревьев в более мелких масштабах, а также подавляющее влияние человека на большей части мира.',
    howToRead:
      'Цифры получены по полевым измерениям, связанным с набором слоёв дистанционного зондирования и картографии; по ним построены регрессионные модели, применённые к каждому пикселю карты. Сопутствующая статья в журнале Scientific Data, опубликованная 16 августа 2016 года, описывает модели. В ней указано 429 775 независимых записей о пробных площадях, в каждой из которых были местоположение и плотность деревьев в деревьях на гектар, а пиксели номинально равны 1 квадратному километру. Авторы определили деревья как растения толще 10 сантиметров в диаметре на высоте груди, хотя минимальные размеры, с которых дерево учитывается, различаются по странам и целям инвентаризации.',
    limits:
      'Цифра 3,04 триллиона является модельной оценкой 2015 года, а статья в Scientific Data сообщает, что данные дают точные оценки числа деревьев в глобальном масштабе и в масштабе биомов, и не рекомендует использовать их для оценок на местном уровне. Оценка для биомов мангровых лесов и тропических и субтропических хвойных лесов использует модели наиболее схожих биомов, поскольку пробных площадей было слишком мало. Карта плотности опубликована Йельским университетом по лицензии Creative Commons «Атрибуция, без производных 4.0». Ссылка на карту есть в списке источников; сама карта здесь не воспроизводится.',
    caption:
      'Полог леса бассейна Амазонки к северу от Манауса, Бразилия, вид с вершины вышки высотой 50 метров; верх растительности обычно находится на высоте 35 метров.',
    credit:
      'Фото: Phil P Harris, через Викисклад, лицензия Creative Commons «Атрибуция, на тех же условиях 2.5».',
    licenseUrl: bySa,
    imageAlt:
      'Полог леса бассейна Амазонки к северу от Манауса, Бразилия, вид с вершины вышки высотой 50 метров.',
    sources: [
      cite(
        'Nature: Картографирование плотности деревьев в глобальном масштабе, Т. У. Кроутер и другие, 2 сентября 2015 года (Mapping tree density at a global scale)',
        nature,
      ),
      cite(
        'Хранилище EliScholar Йельского университета: Глобальная карта плотности деревьев, набор данных, 2015 (Global tree density map)',
        yale,
      ),
      cite(
        'Scientific Data: Пространственно-явные модели глобальной плотности деревьев, Х. Б. Глик и другие, 16 августа 2016 года (Spatially-explicit models of global tree density)',
        sdata,
      ),
      cite('Викисклад: Amazon Manaus forest (фото)', manaus),
    ],
  },
};

const pl = {
  'forest-remaining': {
    title: 'Las, który został',
    meta: 'Globalna Ocena Zasobów Leśnych 2025 · 4,14 miliarda hektarów · 32 procent lądu',
    blurb:
      'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa podaje, że lasy pokrywają 4,14 miliarda hektarów, czyli 32 procent lądów świata, na podstawie raportów 236 krajów i obszarów.',
    sourceLabel:
      'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, Globalna Ocena Zasobów Leśnych 2025',
    what: 'Globalna Ocena Zasobów Leśnych 2025, opublikowana przez Organizację Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, podaje, że świat ma 4,14 miliarda hektarów lasu. To 32 procent powierzchni lądów, czyli 0,5 hektara lasu na osobę, a liczba opiera się na raportach 236 krajów i obszarów. Ocena określa las jako teren o powierzchni ponad 0,5 hektara z drzewami wyższymi niż 5 metrów i zwarciem koron powyżej 10 procent albo z drzewami zdolnymi osiągnąć te progi na miejscu. Tereny użytkowane głównie rolniczo lub jako miasta są z definicji wyłączone.',
    why: 'Organizacja podaje, że blisko połowa lasów świata leży w strefie tropikalnej, a ponad połowa, 54 procent, przypada na pięć krajów: Federację Rosyjską, Brazylię, Kanadę, Stany Zjednoczone Ameryki i Chiny. Spośród regionów świata największą powierzchnię lasów ma Europa, 25 procent światowej sumy. Ocena dodaje, że w ostatniej dekadzie tempo wylesiania spadło we wszystkich regionach, a ponad połowa lasów świata objęta jest długoterminowymi planami zarządzania.',
    howToRead:
      'Suma jest wskaźnikiem użytkowania gruntów, zebranym z oficjalnych raportów krajowych według jednej wspólnej definicji; teren liczy się jako las ze względu na sposób użytkowania. Uwzględniono też tereny czasowo bez drzew po zrębie zupełnym lub klęskach żywiołowych, na których spodziewane jest odnowienie w ciągu 5 lat. Z całej powierzchni 92 procent, czyli 3,83 miliarda hektarów, to lasy odnawiające się naturalnie, a około 8 procent, czyli 312 milionów hektarów, to lasy sadzone. Lasy pierwotne stanowią co najmniej 1,18 miliarda hektarów części odnawiającej się naturalnie.',
    limits:
      'Liczba jest migawką na rok 2025 z oceny, która ukazuje się co pięć lat; wydanie 2025 opublikowano 21 października 2025. Wartości są zwykle zaokrąglane do trzech cyfr znaczących, więc sumy mogą nieznacznie różnić się od sumy części. Nie wszystkie kraje i obszary zgłosiły dane dla każdego parametru.',
    caption:
      'Las pierwotny na wyspie Prince of Wales w Lesie Narodowym Tongass na Alasce, z porośniętymi mchem pniami i powalonymi kłodami.',
    credit:
      'Zdjęcie: Nicholas Thomas, Służba Leśna Departamentu Rolnictwa USA, region Alaska, za pośrednictwem Wikimedia Commons, domena publiczna (dzieło federalnej agencji USA).',
    imageAlt:
      'Las pierwotny na wyspie Prince of Wales w Lesie Narodowym Tongass na Alasce, z porośniętymi mchem pniami i powalonymi kłodami.',
    sources: fraSources(
      [
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych 2025, strona oceny (Global Forest Resources Assessment 2025)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych 2025, raport główny (Global Forest Resources Assessment 2025, main report)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Światowe wylesianie zwalnia, ale lasy pozostają pod presją, wynika z raportu organizacji, 21 października 2025 (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych, terminy i definicje 2025, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Wikimedia Commons: Old Growth Tongass NRT Photo 12 (zdjęcie)',
      ],
      tongass,
    ),
  },
  'primary-forest': {
    title: 'Lasy pierwotne',
    meta: 'Globalna Ocena Zasobów Leśnych 2025 · co najmniej 1,18 miliarda hektarów · 29 procent lasów',
    blurb:
      'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa podaje co najmniej 1,18 miliarda hektarów lasów pierwotnych, czyli 29 procent wszystkich lasów: naturalnie odnawiających się lasów rodzimych gatunków drzew bez wyraźnie widocznych śladów działalności człowieka.',
    sourceLabel: 'Globalna Ocena Zasobów Leśnych 2025, lasy pierwotne',
    what: 'Globalna Ocena Zasobów Leśnych 2025 Organizacji Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa podaje, że lasy pierwotne zajmują co najmniej 1,18 miliarda hektarów, czyli 29 procent całkowitej powierzchni leśnej. Ocena definiuje las pierwotny jako naturalnie odnawiający się las rodzimych gatunków drzew bez wyraźnie widocznych oznak działalności człowieka i z procesami ekologicznymi, które w większości pozostają niezakłócone. Definicja obejmuje lasy, w których ludy tubylcze i społeczności lokalne prowadzą tradycyjną gospodarkę, oraz lasy noszące ślady naturalnych zaburzeń, takich jak burze, susza, pożary lasów lub gradacje owadów.',
    why: 'Ocena podaje, że lasy pierwotne, zwłaszcza pierwotne tropikalne lasy wilgotne, to niezwykle bogate w gatunki i zróżnicowane ekosystemy, a ich powierzchnia jest ważnym wskaźnikiem stanu środowiska. Las pierwotny stanowi 49 procent całkowitej powierzchni leśnej w Ameryce Południowej, 38 procent w Afryce, 37 procent w Ameryce Północnej i Środkowej, 32 procent w Europie, 21 procent w Oceanii i 15 procent w Azji.',
    howToRead:
      'Według regionów największą powierzchnię lasów pierwotnych ma Europa, 311 milionów hektarów, a następnie Ameryka Południowa z 299 milionami oraz Ameryka Północna i Środkowa z 280 milionami. Afryka ma szacunkowo 163 miliony hektarów, Azja 85,2 miliona, a Oceania 38,3 miliona. Liczba dla Europy obejmuje Federację Rosyjską; bez niej Europa ma 4,32 miliona hektarów. Powierzchnia lasów pierwotnych na świecie zmniejszyła się o 110 milionów hektarów między 1990 a 2025 rokiem. Średnie roczne tempo utraty netto wynosiło 3,48 miliona hektarów w latach 1990 do 2000, 3,92 miliona w latach 2000 do 2015 i 1,61 miliona w latach 2015 do 2025, czyli mniej niż połowę tempa z lat 2000 do 2015.',
    limits:
      'Liczba 1,18 miliarda hektarów to minimum. W sumie 168 krajów i obszarów, reprezentujących 85 procent powierzchni leśnej świata, zgłosiło dane o lasach pierwotnych za 2025 rok, a wśród tych krajów i obszarów las pierwotny to 33 procent powierzchni leśnej. Ocena wskazuje niespójną interpretację i stosowanie definicji jako największą przeszkodę w raportowaniu, co budzi wątpliwości co do porównywalności danych między krajami. Dane rejestrują zmianę netto powierzchni, więc spadek może wynikać z wylesiania albo z przekształcenia w inne typy lasu, na przykład odnawiające się naturalnie lub sadzone.',
    caption:
      'Pierwotny las dębowo-lipowo-grabowy w Puszczy Białowieskiej, województwo podlaskie, Polska: duży pień drzewa z pomarańczowymi żagwiami i mchem u podstawy.',
    credit:
      'Zdjęcie: Bouke ten Cate, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa 4.0.',
    licenseUrl: by4,
    imageAlt:
      'Pierwotny las dębowo-lipowo-grabowy w Puszczy Białowieskiej, Polska: duży pień z pomarańczowymi żagwiami i mchem u podstawy.',
    sources: fraSources(
      [
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych 2025, strona oceny (Global Forest Resources Assessment 2025)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych 2025, raport główny (Global Forest Resources Assessment 2025, main report)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Światowe wylesianie zwalnia, ale lasy pozostają pod presją, wynika z raportu organizacji, 21 października 2025 (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych, terminy i definicje 2025, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Wikimedia Commons: Old-growth Oak-Linden-Hornbeam forest - Bialowieza forest (zdjęcie)',
      ],
      bialowieza,
    ),
  },
  'net-forest-loss': {
    title: 'Strata netto powierzchni lasu',
    meta: 'Globalna Ocena Zasobów Leśnych 2025 · 4,12 miliona hektarów rocznie · lata 2015 do 2025',
    blurb:
      'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa podaje, że powierzchnia lasów świata kurczyła się netto o 4,12 miliona hektarów rocznie w latach 2015 do 2025, wobec 10,7 miliona hektarów rocznie w latach 1990 do 2000.',
    sourceLabel:
      'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa, komunikat o ocenie lasów 2025',
    what: 'Globalna Ocena Zasobów Leśnych 2025 Organizacji Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa podaje, że roczne tempo utraty netto lasów spadło z 10,7 miliona hektarów w latach 1990 do 2000 do 4,12 miliona hektarów w latach 2015 do 2025. Zmiana netto powierzchni lasu to powierzchnia wylesiona w danym okresie minus powierzchnia ekspansji lasu. Gdy wylesianie przewyższa ekspansję, powstaje strata netto. Wylesianie oznacza przekształcenie lasu w inny sposób użytkowania gruntów, wywołane przez człowieka lub nie, w tym przekształcenie lasu w grunty rolne, pastwiska, zbiorniki wodne, tereny górnicze i obszary miejskie.',
    why: 'Ocena podaje, że spadek straty netto wynikał ze zmniejszonego wylesiania w niektórych krajach i z ekspansji powierzchni leśnej w innych. Wylesianie zwolniło do 10,9 miliona hektarów rocznie w latach 2015 do 2025, z 17,6 miliona w latach 1990 do 2000 i 13,6 miliona w latach 2000 do 2015. Organizacja określa 10,9 miliona hektarów rocznie jako wciąż zbyt dużo. Szacuje się, że 489 milionów hektarów lasu utracono wskutek wylesiania między 1990 a 2025 rokiem.',
    howToRead:
      'Zmiana netto i wylesianie są ze sobą powiązane, a ocena podaje je jako osobne liczby. Ekspansja lasów przez zalesianie i naturalne rozszerzanie się spadła z 9,88 miliona hektarów rocznie w latach 2000 do 2015 do 6,78 miliona w latach 2015 do 2025. Tempo straty netto wynosiło 3,68 miliona hektarów rocznie w latach 2000 do 2015 i wzrosło do 4,12 miliona w latach 2015 do 2025, ponieważ spadło tempo przyrostu lasów. Według krajów największa roczna strata netto w latach 2015 do 2025 wystąpiła w Brazylii, 2,94 miliona hektarów, a największy przyrost netto w Chinach, 1,69 miliona hektarów. Azja jako region zyskiwała 1,62 miliona hektarów rocznie, a Europa 1,44 miliona.',
    limits:
      'Liczby to średnie dekadowe zebrane z raportów krajowych, a ocena ostrzega, że szacunki dynamiki zmian powierzchni leśnej należy traktować z ostrożnością, ponieważ wiele krajów i obszarów nie zbiera danych o wylesianiu, zalesianiu i naturalnej ekspansji lasu. Suma wylesiania i ekspansji może różnić się od zmiany netto, ponieważ dwie pierwsze wielkości obejmują szacunki wykonane przez samą organizację, a zmiana netto pochodzi w całości z pełnych szeregów czasowych zgłoszonych przez kraje i obszary. Większość wylesiania, 88 procent między 1990 a 2025 rokiem, przypadła na strefę tropikalną.',
    caption:
      'Dwa płaty lasu wśród wykarczowanych pól bawełny na północnym zachodzie stanu Mato Grosso w Brazylii, w pobliżu Parku Indiańskiego Xingu, z drogą gruntową między nimi.',
    credit:
      'Zdjęcie: Pedro Biondi, Agência Brasil, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa 3.0 Brazylia.',
    licenseUrl: by3,
    imageAlt:
      'Dwa płaty lasu wśród wykarczowanych pól bawełny w stanie Mato Grosso w Brazylii, z drogą gruntową między nimi.',
    sources: fraSources(
      [
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych 2025, strona oceny (Global Forest Resources Assessment 2025)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych 2025, raport główny (Global Forest Resources Assessment 2025, main report)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Światowe wylesianie zwalnia, ale lasy pozostają pod presją, wynika z raportu organizacji, 21 października 2025 (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa: Globalna Ocena Zasobów Leśnych, terminy i definicje 2025, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Wikimedia Commons: Mato Grosso deforestation (Pedro Biondi) 12ago2007 (zdjęcie)',
      ],
      mato,
    ),
  },
  'tropical-primary-loss': {
    title: 'Utrata tropikalnych lasów pierwotnych',
    meta: 'Laboratorium Globalnej Analizy i Odkryć Uniwersytetu Maryland i Global Forest Watch · 4,3 miliona hektarów · rok 2025',
    blurb:
      'Instytut Zasobów Światowych podaje, że w 2025 roku świat utracił 4,3 miliona hektarów tropikalnych lasów deszczowych pierwotnych, o 36 procent mniej niż w rekordowym 2024 roku.',
    sourceLabel:
      'Instytut Zasobów Światowych, analiza Global Forest Review o utracie lasów tropikalnych w 2025 roku',
    what: 'Nowe roczne dane Laboratorium Globalnej Analizy i Odkryć Uniwersytetu Maryland, dostępne na platformie Instytutu Zasobów Światowych Global Forest Watch, pokazują, że w 2025 roku świat utracił 4,3 miliona hektarów tropikalnych lasów deszczowych pierwotnych. Instytut Zasobów Światowych opisuje to jako obszar mniej więcej wielkości Danii, czyli 11 boisk piłkarskich na minutę. Dane laboratorium o utracie pokrywy drzew rejestrują zmiany w rozdzielczości około 30 na 30 metrów na całym lądzie świata poza Antarktydą i innymi wyspami arktycznymi.',
    why: 'Utrata tropikalnych lasów deszczowych pierwotnych spadła o 36 procent w porównaniu z rekordowym 2024 rokiem, gdy tropiki straciły 6,7 miliona hektarów, głównie z powodu pożarów. Strata w 2025 roku jest wciąż o 46 procent wyższa niż dekadę wcześniej. Instytut Zasobów Światowych podaje, że Brazylia zmniejszyła utratę lasu pierwotnego niezwiązaną z pożarami o 41 procent w porównaniu z 2024 rokiem, osiągając najniższy poziom w historii pomiarów. Elizabeth Goldman, współdyrektorka Global Forest Watch, powiedziała, że część spadku odzwierciedla wytchnienie po roku ekstremalnych pożarów.',
    howToRead:
      'Przegląd Lasów Świata Instytutu Zasobów Światowych koncentruje się na lasach pierwotnych wilgotnych tropików, które instytut opisuje jako obszary dojrzałych lasów deszczowych, szczególnie ważne dla różnorodności biologicznej, magazynowania węgla i regulowania klimatu regionalnego i lokalnego. Skupia się na tropikach, bo tam zachodzi 94 procent wylesiania. Liczba 4,3 miliona hektarów obejmuje wyłącznie pierwotne lasy wilgotnych tropików. Dla wszystkich lasów świata utrata pokrywy drzew w 2025 roku wyniosła 25,5 miliona hektarów, a pożary odpowiadały za 42 procent tej wielkości. Ekspansja rolnictwa pozostaje głównym czynnikiem utraty pokrywy drzew ogółem.',
    limits:
      'Objaśnienie danych Global Forest Watch podaje, że utrata pokrywy drzew obejmuje zarówno straty powszechnie uznawane za wylesianie, na przykład przekształcenie lasu naturalnego w grunty rolne, jak i straty zwykle traktowane inaczej, na przykład pozyskanie drewna na plantacjach leśnych lub naturalne zaburzenia, co czyni utratę pokrywy drzew szerszą miarą niż samo wylesianie. Mapa pierwotnych wilgotnych lasów tropikalnych Laboratorium Uniwersytetu Maryland powstała dla roku 2001 w rozdzielczości 30 metrów na podstawie zdjęć satelitarnych Landsat. Instytut Zasobów Światowych spodziewa się, że warunki El Niño w 2026 roku sprawdzą, czy kraje są lepiej przygotowane do zapobiegania wielkim pożarom i reagowania na nie.',
    caption:
      'Widok z lotu ptaka na wykarczowaną ziemię przygotowaną pod uprawy lub pastwiska w pobliżu Porto Velho w stanie Rondônia w Brazylii, z lasem na skraju pól i wzdłuż strumienia.',
    credit:
      'Zdjęcie: Bruno Kelly, Amazônia Real, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa 2.0.',
    licenseUrl: by2,
    imageAlt:
      'Widok z lotu ptaka na wykarczowaną ziemię w pobliżu Porto Velho w stanie Rondônia w Brazylii, z lasem na skraju pól i wzdłuż strumienia.',
    sources: [
      cite(
        'Instytut Zasobów Światowych, Przegląd Lasów Świata: Utrata tropikalnych lasów deszczowych spowolniła w 2025 roku, ale pożary są rosnącym zagrożeniem dla lasów świata, 2026 (Tropical Rainforest Loss Slowed in 2025, but Fire is a Growing Threat to Forests Worldwide)',
        gfr,
      ),
      cite(
        'Instytut Zasobów Światowych: Komunikat prasowy: utrata tropikalnych lasów deszczowych spadła o 36 procent w 2025 roku, ale pożary zagrażają globalnemu postępowi, 29 kwietnia 2026 (RELEASE: Tropical Rainforest Loss Drops 36% in 2025, but Fires Threaten Global Progress)',
        wriRelease,
      ),
      cite(
        'Instytut Zasobów Światowych, Przegląd Lasów Świata: Ile lasu utracono w 2024 roku? 2025 (How much forest was lost in 2024?)',
        gfr2024,
      ),
      cite(
        'Global Nature Watch: Dane Global Forest Watch o utracie pokrywy drzew za 2025 rok z objaśnieniami, 2026 (Global Forest Watch 2025 Tree Cover Loss Data Explained)',
        gnw,
      ),
      cite(
        'Uniwersytet Maryland, Laboratorium Globalnej Analizy i Odkryć: Pierwotne wilgotne lasy tropikalne, strona zbioru danych (Primary Humid Tropical Forests)',
        glad,
      ),
      cite(
        'Wikimedia Commons: SOBREVVO EM RONDONIA DIA 07-08-2020 (FOTO BRUNO KELLY) (62) (zdjęcie)',
        rondonia,
      ),
    ],
  },
  'trees-living': {
    title: 'Żyjące drzewa',
    meta: 'Crowther i współpracownicy 2015 · około 3,04 biliona drzew',
    blurb:
      'Badanie z 2015 roku w czasopiśmie Nature połączyło 429 775 pomiarów z powierzchni próbnych w lasach z warstwami teledetekcyjnymi i kartograficznymi i oszacowało, że na Ziemi jest około 3,04 biliona drzew.',
    sourceLabel: 'Nature, „Mapowanie gęstości drzew w skali globalnej” (2015)',
    what: 'W 2015 roku czasopismo Nature opublikowało artykuł T. W. Crowthera i współpracowników „Mapowanie gęstości drzew w skali globalnej”. Przedstawia on pierwszą ciągłą przestrzennie mapę gęstości drzew leśnych w skali globalnej i szacuje, że światowa liczba drzew wynosi około 3,04 biliona, czyli o rząd wielkości więcej niż poprzednie oszacowanie. Z tego około 1,30 biliona znajduje się w lasach tropikalnych i podzwrotnikowych, 0,74 biliona w regionach borealnych, a 0,66 biliona w strefie umiarkowanej. Artykuł ukazał się 2 września 2015 roku, a sama mapa gęstości jest dostępna w repozytorium EliScholar Uniwersytetu Yale.',
    why: 'Liczba drzew to inny sposób mierzenia lasów niż powierzchnia w hektarach. Autorzy podają, że na podstawie ich prognozowanych gęstości drzew rocznie wycina się ponad 15 miliardów drzew, a światowa liczba drzew spadła o około 46 procent od początku ludzkiej cywilizacji. Ich wyniki na poziomie biomów pokazują, jak bardzo klimat i ukształtowanie terenu wpływają na gęstość drzew w drobniejszych skalach, a także przytłaczający wpływ człowieka na większości świata.',
    howToRead:
      'Liczby pochodzą z pomiarów terenowych powiązanych z zestawem warstw teledetekcyjnych i kartograficznych, na podstawie których zbudowano modele regresji zastosowane do każdego piksela mapy. Artykuł towarzyszący w czasopiśmie Scientific Data, opublikowany 16 sierpnia 2016 roku, opisuje te modele. Podaje 429 775 niezależnych rekordów z powierzchni próbnych, z których każdy miał położenie i gęstość drzew w drzewach na hektar, a piksele mają nominalnie 1 kilometr kwadratowy. Autorzy określili drzewa jako rośliny grubsze niż 10 centymetrów w średnicy na wysokości piersi, choć minimalne rozmiary, od których drzewo się liczy, różnią się w zależności od kraju i celu inwentaryzacji.',
    limits:
      'Liczba 3,04 biliona to modelowe oszacowanie z 2015 roku, a artykuł w Scientific Data podaje, że dane dają dokładne oszacowania liczby drzew w skali globalnej i skali biomów, i odradza używanie ich do oszacowań na poziomie lokalnym. Oszacowanie dla biomów lasów namorzynowych oraz tropikalnych i podzwrotnikowych lasów iglastych korzysta z modeli najbardziej podobnych biomów, ponieważ dostępnych było zbyt mało powierzchni próbnych. Mapa gęstości jest opublikowana przez Yale na licencji Creative Commons Uznanie autorstwa Bez utworów zależnych 4.0. Odnośnik do mapy jest na liście źródeł; sama mapa nie jest tu reprodukowana.',
    caption:
      'Korona lasu w dorzeczu Amazonki na północ od Manaus w Brazylii, widziana ze szczytu wieży o wysokości 50 metrów; wierzch roślinności ma zwykle 35 metrów wysokości.',
    credit:
      'Zdjęcie: Phil P Harris, za pośrednictwem Wikimedia Commons, licencja Creative Commons Uznanie autorstwa Na tych samych warunkach 2.5.',
    licenseUrl: bySa,
    imageAlt:
      'Korona lasu w dorzeczu Amazonki na północ od Manaus w Brazylii, widziana ze szczytu wieży o wysokości 50 metrów.',
    sources: [
      cite(
        'Nature: Mapowanie gęstości drzew w skali globalnej, T. W. Crowther i inni, 2 września 2015 (Mapping tree density at a global scale)',
        nature,
      ),
      cite(
        'Repozytorium EliScholar Uniwersytetu Yale: Globalna mapa gęstości drzew, zbiór danych, 2015 (Global tree density map)',
        yale,
      ),
      cite(
        'Scientific Data: Przestrzennie jawne modele globalnej gęstości drzew, H. B. Glick i inni, 16 sierpnia 2016 (Spatially-explicit models of global tree density)',
        sdata,
      ),
      cite('Wikimedia Commons: Amazon Manaus forest (zdjęcie)', manaus),
    ],
  },
};

const lv = {
  'forest-remaining': {
    title: 'Mežs, kas palicis',
    meta: 'Globālais meža resursu novērtējums 2025 · 4,14 miljardi hektāru · 32 procenti sauszemes',
    blurb:
      'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija ziņo, ka meži aizņem 4,14 miljardus hektāru jeb 32 procentus pasaules sauszemes, pamatojoties uz 236 valstu un teritoriju ziņojumiem.',
    sourceLabel:
      'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, Globālais meža resursu novērtējums 2025',
    what: 'Globālais meža resursu novērtējums 2025, ko publicējusi Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, ziņo, ka pasaulē ir 4,14 miljardi hektāru meža. Tie ir 32 procenti sauszemes platības jeb 0,5 hektāri meža uz cilvēku, un skaitlis balstās uz 236 valstu un teritoriju ziņojumiem. Novērtējums definē mežu kā zemi, kuras platība pārsniedz 0,5 hektārus, ar kokiem, kas augstāki par 5 metriem, un vainagu klājumu virs 10 procentiem, vai ar kokiem, kas uz vietas spēj sasniegt šos slieksņus. Zeme, ko galvenokārt izmanto lauksaimniecībai vai pilsētām, no definīcijas ir izslēgta.',
    why: 'Organizācija ziņo, ka gandrīz puse pasaules mežu atrodas tropos un vairāk nekā puse, 54 procenti, ir piecās valstīs: Krievijas Federācijā, Brazīlijā, Kanādā, Amerikas Savienotajās Valstīs un Ķīnā. No pasaules reģioniem lielākā meža platība ir Eiropā, 25 procenti no pasaules kopsummas. Novērtējums piebilst, ka pēdējā desmitgadē mežu izciršanas temps ir samazinājies visos reģionos un ka vairāk nekā pusi pasaules mežu aptver ilgtermiņa apsaimniekošanas plāni.',
    howToRead:
      'Kopsumma ir zemes izmantošanas rādītājs, kas apkopots no oficiāliem valstu ziņojumiem pēc vienotas definīcijas; zeme tiek uzskatīta par mežu pēc tā, kā to izmanto. Uzskaitītas arī platības, kas pēc kailcirtes vai dabas katastrofām uz laiku palikušas bez kokiem un kurās mežs, kā gaidāms, atjaunosies 5 gadu laikā. No kopējās platības 92 procenti jeb 3,83 miljardi hektāru ir dabiski atjaunojušies meži un apmēram 8 procenti jeb 312 miljoni hektāru ir stādīti meži. Primārie meži veido vismaz 1,18 miljardus hektāru no dabiski atjaunojošās daļas.',
    limits:
      'Skaitlis ir 2025. gada momentuzņēmums no novērtējuma, kas iznāk reizi piecos gados; 2025. gada izdevums publicēts 2025. gada 21. oktobrī. Vērtības parasti noapaļotas līdz trim nozīmīgiem cipariem, tāpēc kopsummas var nedaudz atšķirties no daļu summas. Ne visas valstis un teritorijas sniedza datus par katru rādītāju.',
    caption:
      'Vecs mežs Prinsa Velsas salā Tongass nacionālajā mežā Aļaskā ar sūnām apaugušiem stumbriem un nogāztiem baļķiem.',
    credit:
      'Foto: Nicholas Thomas, ASV Lauksaimniecības departamenta Meža dienests, Aļaskas reģions, ar Wikimedia Commons starpniecību, publiskais domēns (ASV federālās aģentūras darbs).',
    imageAlt:
      'Vecs mežs Prinsa Velsas salā Tongass nacionālajā mežā Aļaskā ar sūnām apaugušiem stumbriem un nogāztiem baļķiem.',
    sources: fraSources(
      [
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums 2025, novērtējuma lapa (Global Forest Resources Assessment 2025)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums 2025, galvenais ziņojums (Global Forest Resources Assessment 2025, main report)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Pasaules mežu izciršana palēninās, bet meži paliek zem spiediena, liecina organizācijas ziņojums, 2025. gada 21. oktobris (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums, 2025. gada termini un definīcijas, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Vikikrātuve: Old Growth Tongass NRT Photo 12 (foto)',
      ],
      tongass,
    ),
  },
  'primary-forest': {
    title: 'Primārie meži',
    meta: 'Globālais meža resursu novērtējums 2025 · vismaz 1,18 miljardi hektāru · 29 procenti mežu',
    blurb:
      'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija ziņo par vismaz 1,18 miljardiem hektāru primāro mežu, tas ir 29 procentiem visu mežu: dabiski atjaunojošiem vietējo koku sugu mežiem bez skaidri redzamām cilvēka darbības pazīmēm.',
    sourceLabel: 'Globālais meža resursu novērtējums 2025, primārie meži',
    what: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācijas Globālais meža resursu novērtējums 2025 ziņo, ka primārie meži aizņem vismaz 1,18 miljardus hektāru, tas ir 29 procentus no kopējās meža platības. Novērtējums definē primāro mežu kā dabiski atjaunojošos vietējo koku sugu mežu bez skaidri redzamām cilvēka darbības pazīmēm un ar ekoloģiskiem procesiem, kas pārsvarā palikuši netraucēti. Definīcijā ietverti meži, kuros pamatiedzīvotāji un vietējās kopienas veic tradicionālu apsaimniekošanu, un meži, kuros redzama dabisku traucējumu ietekme, piemēram, vētras, sausums, meža ugunsgrēki vai kukaiņu savairošanās.',
    why: 'Novērtējums ziņo, ka primārie meži, īpaši primārie tropu mitrie meži, ir ļoti sugām bagātas, daudzveidīgas ekosistēmas un ka to platība ir svarīgs vides rādītājs. Primārais mežs veido 49 procentus no kopējās meža platības Dienvidamerikā, 38 procentus Āfrikā, 37 procentus Ziemeļamerikā un Centrālamerikā, 32 procentus Eiropā, 21 procentu Okeānijā un 15 procentus Āzijā.',
    howToRead:
      'Pa reģioniem lielākā primāro mežu platība ir Eiropā, 311 miljoni hektāru, tai seko Dienvidamerika ar 299 miljoniem un Ziemeļamerika un Centrālamerika ar 280 miljoniem. Āfrikā pēc aplēsēm ir 163 miljoni hektāru, Āzijā 85,2 miljoni un Okeānijā 38,3 miljoni. Eiropas skaitlis ietver Krievijas Federāciju; bez tās Eiropā ir 4,32 miljoni hektāru. Primāro mežu platība pasaulē no 1990. līdz 2025. gadam samazinājās par 110 miljoniem hektāru. Vidējais gada neto zuduma temps bija 3,48 miljoni hektāru 1990. līdz 2000. gadā, 3,92 miljoni 2000. līdz 2015. gadā un 1,61 miljons 2015. līdz 2025. gadā, tas ir mazāk nekā puse no 2000. līdz 2015. gada tempa.',
    limits:
      'Skaitlis 1,18 miljardi hektāru ir minimums. Kopumā 168 valstis un teritorijas, kas pārstāv 85 procentus pasaules meža platības, ziņoja par primārajiem mežiem 2025. gadam, un starp šīm valstīm un teritorijām primārais mežs ir 33 procenti meža platības. Novērtējums kā lielāko šķērsli ziņošanai min definīciju nevienādu interpretāciju un piemērošanu, kas rada šaubas par datu salīdzināmību starp valstīm. Dati fiksē platības neto izmaiņas, tāpēc samazinājums var rasties mežu izciršanas dēļ vai pārveidošanas dēļ citos meža tipos, piemēram, dabiski atjaunojošos vai stādītos mežos.',
    caption:
      'Vecs ozolu, liepu un skābaržu mežs Belovežas pirmatnējā mežā Podlasjes vojevodistē Polijā: liels koka stumbrs ar oranžām sēnēm un sūnām pie pamatnes.',
    credit:
      'Foto: Bouke ten Cate, ar Wikimedia Commons starpniecību, licence Creative Commons «Attiecinājums 4.0».',
    licenseUrl: by4,
    imageAlt:
      'Vecs ozolu, liepu un skābaržu mežs Belovežas pirmatnējā mežā Polijā: liels koka stumbrs ar oranžām sēnēm un sūnām pie pamatnes.',
    sources: fraSources(
      [
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums 2025, novērtējuma lapa (Global Forest Resources Assessment 2025)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums 2025, galvenais ziņojums (Global Forest Resources Assessment 2025, main report)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Pasaules mežu izciršana palēninās, bet meži paliek zem spiediena, liecina organizācijas ziņojums, 2025. gada 21. oktobris (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums, 2025. gada termini un definīcijas, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Vikikrātuve: Old-growth Oak-Linden-Hornbeam forest - Bialowieza forest (foto)',
      ],
      bialowieza,
    ),
  },
  'net-forest-loss': {
    title: 'Neto meža platības zudums',
    meta: 'Globālais meža resursu novērtējums 2025 · 4,12 miljoni hektāru gadā · 2015. līdz 2025. gads',
    blurb:
      'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija ziņo, ka pasaules meža platība 2015. līdz 2025. gadā samazinājās neto par 4,12 miljoniem hektāru gadā, salīdzinot ar 10,7 miljoniem hektāru gadā 1990. līdz 2000. gadā.',
    sourceLabel:
      'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija, ziņu izlaidums par meža novērtējumu 2025',
    what: 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācijas Globālais meža resursu novērtējums 2025 ziņo, ka ikgadējais neto meža zuduma temps samazinājās no 10,7 miljoniem hektāru 1990. līdz 2000. gadā līdz 4,12 miljoniem hektāru 2015. līdz 2025. gadā. Neto meža platības izmaiņas ir periodā izcirstā platība mīnus meža paplašināšanās platība. Ja izciršana pārsniedz paplašināšanos, rodas neto zudums. Izciršana nozīmē meža pārveidi citā zemes izmantošanā neatkarīgi no tā, vai to izraisījis cilvēks, ieskaitot meža pārveidi lauksaimniecības zemēs, ganībās, ūdenskrātuvēs, ieguves teritorijās un pilsētu zemēs.',
    why: 'Novērtējums ziņo, ka neto zuduma samazinājums radās, mazinoties mežu izciršanai dažās valstīs un paplašinoties meža platībai citās. Mežu izciršana palēninājās līdz 10,9 miljoniem hektāru gadā 2015. līdz 2025. gadā, salīdzinot ar 17,6 miljoniem 1990. līdz 2000. gadā un 13,6 miljoniem 2000. līdz 2015. gadā. Organizācija 10,9 miljonus hektāru gadā raksturo kā joprojām pārāk daudz. Pēc aplēsēm, 489 miljoni hektāru meža zaudēti mežu izciršanas dēļ no 1990. līdz 2025. gadam.',
    howToRead:
      'Neto izmaiņas un mežu izciršana ir saistītas, un novērtējums tās sniedz kā atsevišķus skaitļus. Mežu paplašināšanās, apmežojot un dabiski paplašinoties, samazinājās no 9,88 miljoniem hektāru gadā 2000. līdz 2015. gadā līdz 6,78 miljoniem 2015. līdz 2025. gadā. Neto zuduma temps bija 3,68 miljoni hektāru gadā 2000. līdz 2015. gadā un pieauga līdz 4,12 miljoniem 2015. līdz 2025. gadā, jo samazinājās meža pieauguma temps. Pa valstīm lielākais gada neto zudums 2015. līdz 2025. gadā bija Brazīlijā, 2,94 miljoni hektāru, bet lielākais neto pieaugums Ķīnā, 1,69 miljoni hektāru. Āzija kā reģions ieguva 1,62 miljonus hektāru gadā, bet Eiropa 1,44 miljonus.',
    limits:
      'Skaitļi ir desmitgades vidējie rādītāji, kas apkopoti no valstu ziņojumiem, un novērtējums brīdina, ka meža platības izmaiņu dinamikas aplēses jāvērtē piesardzīgi, jo daudzas valstis un teritorijas nevāc datus par mežu izciršanu, apmežošanu un dabisko meža paplašināšanos. Izciršanas un paplašināšanās summa var atšķirties no neto izmaiņām, jo pirmās divas ietver pašas organizācijas veiktas aplēses, bet neto izmaiņas pilnībā iegūtas no valstu un teritoriju sniegtajām pilnajām laika rindām. Lielākā daļa mežu izciršanas, 88 procenti no 1990. līdz 2025. gadam, notika tropiskajā zonā.',
    caption:
      'Divi meža puduri starp izcirstiem kokvilnas laukiem Mato Grosu štata ziemeļrietumos Brazīlijā, netālu no Šingu pamatiedzīvotāju parka, ar grants ceļu starp tiem.',
    credit:
      'Foto: Pedro Biondi, Agência Brasil, ar Wikimedia Commons starpniecību, licence Creative Commons «Attiecinājums 3.0 Brazīlija».',
    licenseUrl: by3,
    imageAlt:
      'Divi meža puduri starp izcirstiem kokvilnas laukiem Mato Grosu štatā Brazīlijā, ar grants ceļu starp tiem.',
    sources: fraSources(
      [
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums 2025, novērtējuma lapa (Global Forest Resources Assessment 2025)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums 2025, galvenais ziņojums (Global Forest Resources Assessment 2025, main report)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Pasaules mežu izciršana palēninās, bet meži paliek zem spiediena, liecina organizācijas ziņojums, 2025. gada 21. oktobris (Global deforestation slows, but forests remain under pressure, FAO report shows)',
        'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija: Globālais meža resursu novērtējums, 2025. gada termini un definīcijas, 2023 (Global Forest Resources Assessment, FRA 2025 Terms and Definitions)',
        'Vikikrātuve: Mato Grosso deforestation (Pedro Biondi) 12ago2007 (foto)',
      ],
      mato,
    ),
  },
  'tropical-primary-loss': {
    title: 'Tropu primāro mežu zudums',
    meta: 'Merilendas universitātes Globālās zemes analīzes un atklājumu laboratorija un Global Forest Watch · 4,3 miljoni hektāru · 2025. gads',
    blurb:
      'Pasaules resursu institūts ziņo, ka 2025. gadā pasaule zaudēja 4,3 miljonus hektāru tropu primāro lietusmežu, par 36 procentiem mazāk nekā rekordgadā 2024.',
    sourceLabel:
      'Pasaules resursu institūts, Global Forest Review analīze par tropu mežu zudumu 2025. gadā',
    what: 'Jaunie ikgadējie dati no Merilendas universitātes Globālās zemes analīzes un atklājumu laboratorijas, kas pieejami Pasaules resursu institūta platformā Global Forest Watch, rāda, ka 2025. gadā pasaule zaudēja 4,3 miljonus hektāru tropu primāro lietusmežu. Pasaules resursu institūts to raksturo kā platību aptuveni Dānijas lielumā jeb 11 futbola laukumus katru minūti. Laboratorijas dati par koku seguma zudumu fiksē izmaiņas ar aptuveni 30 reiz 30 metru izšķirtspēju visā pasaules sauszemē, izņemot Antarktīdu un citas Arktikas salas.',
    why: 'Tropu primāro lietusmežu zudums samazinājās par 36 procentiem salīdzinājumā ar rekordgadu 2024, kad tropi zaudēja 6,7 miljonus hektāru, galvenokārt ugunsgrēku dēļ. Zudums 2025. gadā joprojām ir par 46 procentiem lielāks nekā pirms desmit gadiem. Pasaules resursu institūts ziņo, ka Brazīlija samazināja ar ugunsgrēkiem nesaistīto primārā meža zudumu par 41 procentu salīdzinājumā ar 2024. gadu, sasniedzot zemāko līmeni vēsturē. Elizabete Goldmena, Global Forest Watch līdzdirektore, teica, ka daļa no samazinājuma atspoguļo atelpu pēc ārkārtēju ugunsgrēku gada.',
    howToRead:
      'Pasaules resursu institūta Pasaules mežu pārskats pievēršas mitro tropu primārajiem mežiem, ko institūts raksturo kā nobriedušu lietusmežu teritorijas, kas ir īpaši svarīgas bioloģiskajai daudzveidībai, oglekļa uzkrāšanai un reģionālā un vietējā klimata regulēšanai. Uzmanība tropiem ir tāpēc, ka tur notiek 94 procenti mežu izciršanas. Skaitlis 4,3 miljoni hektāru aptver tikai mitro tropu primāros mežus. Visiem pasaules mežiem koku seguma zudums 2025. gadā bija 25,5 miljoni hektāru, un ugunsgrēki izraisīja 42 procentus no tā. Lauksaimniecības paplašināšanās joprojām ir galvenais koku seguma zuduma virzītājs kopumā.',
    limits:
      'Global Forest Watch datu skaidrojumā teikts, ka koku seguma zudums ietver gan zaudējumus, ko plaši uzskata par mežu izciršanu, piemēram, dabiska meža pārvēršanu lauksaimniecības zemē, gan zaudējumus, ko parasti vērtē citādi, piemēram, koksnes ieguvi mežu plantācijās vai dabiskus traucējumus, tāpēc koku seguma zudums ir plašāks rādītājs nekā vien mežu izciršana. Merilendas universitātes laboratorijas mitro tropu primāro mežu karte izveidota 2001. gadam ar 30 metru izšķirtspēju no Landsat satelītattēliem. Pasaules resursu institūts sagaida, ka El Ninjo apstākļi 2026. gadā pārbaudīs, vai valstis ir labāk sagatavotas novērst lielus ugunsgrēkus un uz tiem reaģēt.',
    caption:
      'Skats no gaisa uz attīrītu zemi, kas sagatavota kultūrām vai ganībām pie Portuveļas Rondonijas štatā Brazīlijā, ar mežu lauku malā un gar strautu.',
    credit:
      'Foto: Bruno Kelly, Amazônia Real, ar Wikimedia Commons starpniecību, licence Creative Commons «Attiecinājums 2.0».',
    licenseUrl: by2,
    imageAlt:
      'Skats no gaisa uz attīrītu zemi pie Portuveļas Rondonijas štatā Brazīlijā, ar mežu lauku malā un gar strautu.',
    sources: [
      cite(
        'Pasaules resursu institūts, Pasaules mežu pārskats: Tropu lietusmežu zudums 2025. gadā palēninājās, bet ugunsgrēki ir augoši draudi pasaules mežiem, 2026 (Tropical Rainforest Loss Slowed in 2025, but Fire is a Growing Threat to Forests Worldwide)',
        gfr,
      ),
      cite(
        'Pasaules resursu institūts: Paziņojums presei: tropu lietusmežu zudums 2025. gadā samazinājās par 36 procentiem, bet ugunsgrēki apdraud globālo progresu, 2026. gada 29. aprīlis (RELEASE: Tropical Rainforest Loss Drops 36% in 2025, but Fires Threaten Global Progress)',
        wriRelease,
      ),
      cite(
        'Pasaules resursu institūts, Pasaules mežu pārskats: Cik daudz meža zaudēts 2024. gadā? 2025 (How much forest was lost in 2024?)',
        gfr2024,
      ),
      cite(
        'Global Nature Watch: Global Forest Watch 2025. gada koku seguma zuduma dati ar paskaidrojumiem, 2026 (Global Forest Watch 2025 Tree Cover Loss Data Explained)',
        gnw,
      ),
      cite(
        'Merilendas universitāte, Globālās zemes analīzes un atklājumu laboratorija: Primārie mitro tropu meži, datu kopas lapa (Primary Humid Tropical Forests)',
        glad,
      ),
      cite(
        'Vikikrātuve: SOBREVVO EM RONDONIA DIA 07-08-2020 (FOTO BRUNO KELLY) (62) (foto)',
        rondonia,
      ),
    ],
  },
  'trees-living': {
    title: 'Dzīvie koki',
    meta: 'Krauters un līdzautori 2015 · apmēram 3,04 triljoni koku',
    blurb:
      '2015. gada pētījums žurnālā Nature apvienoja 429 775 mērījumus meža parauglaukumos ar attālās izpētes un kartēšanas slāņiem un novērtēja, ka uz Zemes ir apmēram 3,04 triljoni koku.',
    sourceLabel: 'Nature, «Koku blīvuma kartēšana globālā mērogā» (2015)',
    what: '2015. gadā žurnāls Nature publicēja T. W. Krautera un līdzautoru rakstu «Koku blīvuma kartēšana globālā mērogā». Tajā sniegta pirmā telpiski nepārtrauktā meža koku blīvuma karte globālā mērogā un novērtēts, ka koku skaits pasaulē ir aptuveni 3,04 triljoni, kas ir par kārtu vairāk nekā iepriekšējais novērtējums. No tiem aptuveni 1,30 triljoni ir tropu un subtropu mežos, 0,74 triljoni boreālajos reģionos un 0,66 triljoni mērenajā joslā. Raksts parādījās 2015. gada 2. septembrī, un pati blīvuma karte ir pieejama Jeilas Universitātes repozitorijā EliScholar.',
    why: 'Koku skaits ir cits veids, kā mērīt mežus, nekā platība hektāros. Autori ziņo, ka, pamatojoties uz viņu prognozētajiem koku blīvumiem, katru gadu nocērt vairāk nekā 15 miljardus koku, bet koku skaits pasaulē kopš cilvēku civilizācijas sākuma ir samazinājies aptuveni par 46 procentiem. Viņu rezultāti pa biomiem parāda, cik lielā mērā klimats un reljefs nosaka koku blīvumu smalkākos mērogos, kā arī cilvēka pārliecinošo ietekmi lielākajā daļā pasaules.',
    howToRead:
      'Skaitļi iegūti no lauka mērījumiem, kas saistīti ar attālās izpētes un kartēšanas slāņu kopumu, uz kuriem izveidoti regresijas modeļi, piemēroti katram kartes pikselim. Pavadošais raksts žurnālā Scientific Data, publicēts 2016. gada 16. augustā, apraksta modeļus. Tajā minēti 429 775 neatkarīgi ieraksti par parauglaukumiem, katram no tiem bija atrašanās vieta un koku blīvums kokos uz hektāru, un pikseļi nomināli ir 1 kvadrātkilometrs. Autori definēja kokus kā augus, kuru diametrs krūšu augstumā pārsniedz 10 centimetrus, lai gan minimālie izmēri, no kuriem koku skaita, atšķiras pēc valsts un inventarizācijas mērķa.',
    limits:
      'Skaitlis 3,04 triljoni ir modelēts novērtējums no 2015. gada, un Scientific Data raksts norāda, ka dati sniedz precīzus koku skaita novērtējumus globālā un biomu mērogā, un iesaka tos neizmantot vietēja līmeņa novērtējumiem. Novērtējums mangrovju un tropu un subtropu skujkoku mežu biomiem izmanto vistuvāko biomu modeļus, jo parauglaukumu bija par maz. Blīvuma karti Jeilas Universitāte ir publicējusi ar Creative Commons «Attiecinājums bez atvasinājumiem 4.0» licenci. Saite uz karti ir avotu sarakstā; pati karte šeit nav reproducēta.',
    caption:
      'Amazones baseina meža vainagu klājs uz ziemeļiem no Manausas Brazīlijā, skatoties no 50 metru augsta torņa augšas; veģetācijas virsma parasti ir 35 metru augstumā.',
    credit:
      'Foto: Phil P Harris, ar Wikimedia Commons starpniecību, licence Creative Commons «Attiecinājums un līdzīga izplatīšana 2.5».',
    licenseUrl: bySa,
    imageAlt:
      'Amazones baseina meža vainagu klājs uz ziemeļiem no Manausas Brazīlijā, skatoties no 50 metru augsta torņa augšas.',
    sources: [
      cite(
        'Nature: Koku blīvuma kartēšana globālā mērogā, T. W. Crowther un citi, 2015. gada 2. septembris (Mapping tree density at a global scale)',
        nature,
      ),
      cite(
        'Jeilas Universitātes repozitorijs EliScholar: Globālā koku blīvuma karte, datu kopa, 2015 (Global tree density map)',
        yale,
      ),
      cite(
        'Scientific Data: Telpiski izteikti globālā koku blīvuma modeļi, H. B. Glick un citi, 2016. gada 16. augusts (Spatially-explicit models of global tree density)',
        sdata,
      ),
      cite('Vikikrātuve: Amazon Manaus forest (foto)', manaus),
    ],
  },
};

export const forestNumberCopy: Record<Locale, Record<ForestNumberSlug, ForestAtlasCopy>> = {
  en: { ...en, ...forestNumberLeftovers.en },
  ru: { ...ru, ...forestNumberLeftovers.ru },
  pl: { ...pl, ...forestNumberLeftovers.pl },
  lv: { ...lv, ...forestNumberLeftovers.lv },
};
