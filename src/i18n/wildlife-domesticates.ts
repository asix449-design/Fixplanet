import type { SpeciesCopy } from '../data/wildlife';

const goats = 'https://www.fao.org/livestock-systems/global-distributions/goats/en/';
const naderi = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2584717/';
const dadis = 'https://www.fao.org/dad-is/en/';
const ottoni = 'https://www.nature.com/articles/s41559-017-0139';
const driscoll = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5612713/';
const todd = 'https://epub.ub.uni-muenchen.de/110811/';
const wang = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7723042/';
const brooke = 'https://www.thebrooke.org/our-work/data-working-equids';
const ducks = 'https://www.fao.org/livestock-systems/global-distributions/ducks/en/';
const rabbitPdf = 'https://www.fao.org/4/t1690e/t1690e.pdf';

const faoPl = 'Organizacja Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa';
const faoLv = 'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācija';
const faoRu = 'Продовольственная и сельскохозяйственная организация ООН';
const dadisPl =
  'System Informacji o Różnorodności Zwierząt Domowych Organizacji Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa';
const dadisLv =
  'Apvienoto Nāciju Organizācijas Pārtikas un lauksaimniecības organizācijas Mājas dzīvnieku daudzveidības informācijas sistēma';
const dadisRu = 'Информационная система по разнообразию домашних животных ФАО';

export const domesticatesEn: Record<string, SpeciesCopy> = {
  goat: {
    commonName: 'Goat',
    tag: 'Livestock · small ruminant',
    hook: 'A browsing small ruminant kept mainly for meat, milk, hides and hair on smallholder farms, in pastoral herds and on specialised dairy farms.',
    imageAlt: 'A brown domestic goat with long, drooping ears.',
    caption: 'A brown domestic goat with long, drooping ears.',
    photoCredit: 'Photo: Mostafameraji, Wikimedia Commons',
    gridSource: { label: 'FAO Livestock Systems, Goats', url: goats },
    what: 'The domestic goat (Capra hircus; the Food and Agriculture Organization of the United Nations, FAO, writes Capra aegagrus hircus) is a small ruminant that people keep mainly for meat, milk, hides and hair. Goats are mainly browsers with an extremely varied plant diet, and this has let them adapt to many different environments.',
    range:
      'Goats are widely distributed and are raised in a wide range of farming systems around the world. Most live on smallholder mixed farms. Goats are also an important part of pastoralist herds, and high-value animals are kept for specialised dairy production in temperate regions. FAO publishes global maps of goats per square kilometre for 2010, 2015 and 2020.',
    story:
      "Goats were among the first hoofed animals that people domesticated. Archaeological evidence traces goat domestication back about 10,500 years, to the upper Euphrates valley in southeastern Anatolia. A study of 473 wild bezoar goats, the domestic goat's wild ancestor (Naderi and colleagues, Proceedings of the National Academy of Sciences, 2008), found that almost all domestic goats today probably come from a domestication centre in eastern Anatolia that may also have reached the northern and central Zagros mountains.",
    when: "A living domesticate raised worldwide. FAO's Domestic Animal Diversity Information System (DAD-IS) records livestock breeds and their risk of extinction; it covers around 8,800 breeds of 38 species.",
    humanRole:
      'People keep goats for milk, meat, hides and hair on family farms, in herds that move with pastoralists and on dairy farms.',
    sources: '',
    sourcesList: [
      {
        label:
          'Food and Agriculture Organization of the United Nations (FAO): Livestock Systems, Goats',
        url: goats,
      },
      {
        label:
          'Saeid Naderi et al.: The goat domestication process inferred from large-scale mitochondrial DNA analysis of wild and domestic individuals, Proceedings of the National Academy of Sciences, 2008 (full text in PubMed Central)',
        url: naderi,
      },
      {
        label: 'FAO: Domestic Animal Diversity Information System (DAD-IS)',
        url: dadis,
      },
    ],
  },
  cat: {
    commonName: 'Cat',
    tag: 'Companion · Near East',
    hook: 'A companion and pest hunter descended from the Near Eastern wildcat, whose bond with people began more than 9,000 years ago around the grain stores of the first farmers.',
    imageAlt: 'A young tabby cat in Portugal.',
    caption: 'A young tabby cat in Portugal.',
    photoCredit: 'Photo: Alvesgaspar, Wikimedia Commons',
    gridSource: { label: 'Ottoni et al., Nature Ecology & Evolution, 2017', url: ottoni },
    what: 'The domestic cat (Felis catus) lives in homes and on farms as a companion and as a guard against pests. It descends from the Near Eastern wildcat (Felis silvestris lybica).',
    range:
      "People have carried cats all over the world, and the domestic cat may be the world's most numerous pet. House cats, farm cats, pedigree breeds and free-roaming town cats all descend from the same Near Eastern ancestors.",
    story:
      'A genetic study of 979 domestic cats and wildcats (Driscoll and colleagues, Science, 2007) found that cats were domesticated in the Near East, probably as farming villages grew in the Fertile Crescent, and that they descend from at least five founders. Ancient DNA (Ottoni and colleagues, Nature Ecology & Evolution, 2017) shows that both Near Eastern and Egyptian wildcat populations contributed to the domestic cat: the spread began in the Neolithic in the Near East and gained pace in the Classical period, when Egyptian cats spread throughout the Old World along sea and land trade routes. One coat-colour variant became common only after the Middle Ages, which suggests that people began breeding cats for their looks later than most other domestic animals.',
    when: 'A living domesticate, kept as a companion animal worldwide.',
    humanRole:
      'Wildcats probably first settled near people by hunting the rodents that infested the grain stores of early farmers. People later carried cats on ships and along trade roads across the Old World.',
    sources: '',
    sourcesList: [
      {
        label:
          'Claudio Ottoni et al.: The palaeogenetics of cat dispersal in the ancient world, Nature Ecology & Evolution, 2017',
        url: ottoni,
      },
      {
        label:
          'Carlos A. Driscoll et al.: The Near Eastern Origin of Cat Domestication, Science, 2007 (full text in PubMed Central)',
        url: driscoll,
      },
    ],
  },
  donkey: {
    commonName: 'Donkey',
    tag: 'Working animal · Africa',
    hook: "A beast of burden domesticated in Africa around 5000 BCE; 99% of the world's donkeys live in low- and middle-income countries.",
    imageAlt: 'A donkey grazing at Clovelly, North Devon, England.',
    caption: 'A donkey grazing at Clovelly, North Devon, England.',
    photoCredit: 'Photo: Adrian Pingstone, Wikimedia Commons',
    gridSource: { label: 'Todd et al., Science, 2022', url: todd },
    what: 'The domestic donkey (Equus asinus) is a working animal that carries loads and people over long distances, especially across semi-arid and upland country. It remains a key support for many households in low- and middle-income countries.',
    range:
      "The charity Brooke, which works to improve the lives of working horses, donkeys and mules, estimates that there are about 116 million equines (donkeys, horses and mules) in the world, about 36 million of them in the 38 lowest-income countries, and that 99% of the world's donkeys live in low- and middle-income countries. Many countries lack accurate population data: of 36 countries whose latest censuses Brooke reviewed, 22 had not counted their equines in the previous 10 years.",
    story:
      'A study of the genomes of 207 modern and 31 ancient donkeys and 15 wild equines (Todd and colleagues, Science, 2022) supports a single domestication in Africa around 5000 BCE, followed by expansions across Africa and Eurasia. An earlier study of 126 domestic donkeys and seven wild asses (Wang and colleagues, Nature Communications, 2020) also points to Africa. It found low genetic variety on the Y chromosome, which probably reflects how people managed breeding, and showed that the undiluted black or chestnut coats of domestic donkeys were probably established during domestication.',
    when: 'A living domesticate and working animal. The Domestic Animal Diversity Information System (DAD-IS) of the Food and Agriculture Organization of the United Nations (FAO) records donkey breeds. Brooke asks governments to classify working donkeys, horses and mules as livestock so that national livestock censuses count them.',
    humanRole:
      'Donkeys have carried goods over long distances for thousands of years, and they still support the livelihoods of many communities.',
    sources: '',
    sourcesList: [
      {
        label:
          'Evelyn T. Todd et al.: The genomic history and global expansion of domestic donkeys, Science, 2022 (bibliographic record, LMU Munich; DOI: 10.1126/science.abo3503)',
        url: todd,
      },
      {
        label:
          'Changfa Wang et al.: Donkey genomes provide new insights into domestication and selection for coat color, Nature Communications, 2020 (full text in PubMed Central)',
        url: wang,
      },
      { label: 'Brooke: Data on working animals', url: brooke },
    ],
  },
  duck: {
    commonName: 'Duck',
    tag: 'Poultry · Southeast Asia',
    hook: 'Farm ducks, most of them descended from mallards first domesticated in Southeast Asia at least 4,000 years ago, raised for meat, eggs and feathers where water is plentiful.',
    imageAlt: 'Domestic ducks in the paddy fields near Ubud, Bali, Indonesia.',
    caption: 'Domestic ducks in the paddy fields near Ubud, Bali, Indonesia.',
    photoCredit: 'Photo: Jakub Hałun, Wikimedia Commons',
    gridSource: { label: 'FAO Livestock Systems, Ducks', url: ducks },
    what: 'Farm ducks are raised for meat, eggs and feathers. According to the Food and Agriculture Organization of the United Nations (FAO), most farmed ducks descend from the mallard (Anas platyrhynchos). Breeds vary greatly with place and with whether they were bred for meat, eggs, feathers or several purposes at once.',
    range:
      'Ducks are most numerous in areas with abundant water. FAO notes particularly large numbers in Bangladesh, China and Southeast Asia; ducks are also popular in Egypt, Nigeria and much of Europe, especially western France. FAO publishes global maps of ducks per square kilometre for 2010 and 2015.',
    story:
      'People first domesticated ducks from mallards in Southeast Asia at least 4,000 years ago. Today ducks are raised in many kinds of farming, from a few birds on a mixed farm to vast flocks taken by lorry to paddy fields to clear them after the rice harvest.',
    when: "A living domesticate. FAO's Domestic Animal Diversity Information System (DAD-IS) records duck breeds.",
    humanRole:
      'Farmers keep ducks on ponds and mixed farms, and in rice-growing regions flocks feed in the paddies after the harvest.',
    sources: '',
    sourcesList: [
      {
        label: 'Food and Agriculture Organization of the United Nations (FAO): Livestock Systems, Ducks',
        url: ducks,
      },
      {
        label: 'FAO: Domestic Animal Diversity Information System (DAD-IS)',
        url: dadis,
      },
    ],
  },
  rabbit: {
    commonName: 'Rabbit',
    tag: 'Small livestock · Europe',
    hook: 'Domesticated from the wild rabbit of southern Europe and North Africa by the late Middle Ages, and raised today for meat, fur and wool on farms and in backyards.',
    imageAlt: 'A black domestic rabbit on straw at the Hirschstetten flower gardens in Vienna, Austria.',
    caption: 'A black domestic rabbit on straw at the Hirschstetten flower gardens in Vienna, Austria.',
    photoCredit: 'Photo: Paul Korecky, Wikimedia Commons',
    gridSource: {
      label: 'FAO, The Rabbit: Husbandry, health and production (1997)',
      url: rabbitPdf,
    },
    what: 'The domestic rabbit (Oryctolagus cuniculus) is raised for meat, for skins used as fur and, in Angora rabbits, for wool. It descends from the wild rabbit of southern Europe and North Africa.',
    range:
      'Rabbit keeping in hutches spread across rural western Europe and into city suburbs, and European colonial expansion took rabbits to many countries where they had been unknown, such as Australia and New Zealand. Rabbits are now found in almost every climate. The rabbit manual of the Food and Agriculture Organization of the United Nations (FAO) describes backyard rabbitries as well suited to small farmers, with or without land of their own.',
    story:
      'According to the FAO manual The Rabbit: Husbandry, health and production (1997), Phoenicians who reached the coast of Spain about 1000 BCE are thought to have discovered the wild rabbit. The Roman writer Varro (116–27 BCE) suggested keeping rabbits in leporaria, stone-walled pens or parks shared with hares and other wild animals for hunting; rabbits were still not domesticated then. Several breeds were known in the sixteenth century, the first sign of controlled breeding, so domestication is traced to the late Middle Ages, probably mainly the work of monks.',
    when: "A living domesticate. FAO's Domestic Animal Diversity Information System (DAD-IS) records rabbit breeds.",
    humanRole:
      "Fibrous feed is an important part of a rabbit's diet, so rabbits do not compete directly with people for food, and in efficient systems they turn 20% of the protein they eat into edible meat. This makes them useful to rural families who need more animal protein.",
    sources: '',
    sourcesList: [
      {
        label:
          'Food and Agriculture Organization of the United Nations (FAO): The Rabbit: Husbandry, health and production (Animal Production and Health Series No. 21, new revised version, 1997), PDF',
        url: rabbitPdf,
      },
      {
        label: 'FAO: Domestic Animal Diversity Information System (DAD-IS)',
        url: dadis,
      },
    ],
  },
};

export const domesticatesRu: Record<string, SpeciesCopy> = {
  goat: {
    commonName: 'Коза',
    tag: 'Животноводство · мелкое жвачное',
    hook: 'Мелкое жвачное животное, которое кормится в основном ветками и листьями кустарников; коз держат ради мяса, молока, шкур и шерсти в мелких хозяйствах, пастушеских стадах и на специализированных молочных фермах.',
    imageAlt: 'Коричневая домашняя коза с длинными висячими ушами.',
    caption: 'Коричневая домашняя коза с длинными висячими ушами.',
    photoCredit: 'Фото: Mostafameraji, Викисклад (Wikimedia Commons), лицензия',
    gridSource: { label: `${faoRu}: системы животноводства, козы`, url: goats },
    what: `Домашняя коза (Capra hircus; ${faoRu}, ФАО, использует название Capra aegagrus hircus) представляет собой мелкое жвачное животное, которое люди держат главным образом ради мяса, молока, шкур и шерсти. Козы в основном объедают кустарники и едят очень разнообразные растения, и это позволило им приспособиться к самым разным условиям.`,
    range:
      'Козы широко распространены и разводятся в самых разных системах хозяйства по всему миру. Большинство живёт в мелких смешанных хозяйствах. Козы также составляют важную часть пастушеских стад, а в умеренном климате ценных животных держат для специализированного производства молока. ФАО публикует глобальные карты числа коз на квадратный километр за 2010, 2015 и 2020 годы.',
    story:
      'Козы были одними из первых копытных, которых одомашнил человек. По археологическим данным, одомашнивание коз началось примерно 10 500 лет назад в верховьях долины Евфрата на юго-востоке Анатолии. Исследование 473 диких безоаровых козлов, диких предков домашней козы (Надери и коллеги, журнал Proceedings of the National Academy of Sciences, 2008), показало, что почти все современные домашние козы, вероятно, происходят из центра одомашнивания на востоке Анатолии, который мог охватывать также северный и центральный Загрос.',
    when: `Живой домашний вид, который разводят по всему миру. ${dadisRu} учитывает породы скота и риск их исчезновения; в ней собраны данные примерно о 8800 породах 38 видов.`,
    humanRole:
      'Люди держат коз ради молока, мяса, шкур и шерсти в семейных хозяйствах, в стадах кочевых скотоводов и на молочных фермах.',
    sources: '',
    sourcesList: [
      {
        label: `${faoRu} (ФАО): системы животноводства, козы (Livestock Systems: Goats)`,
        url: goats,
      },
      {
        label:
          'Саид Надери и соавт.: процесс одомашнивания козы по данным масштабного анализа митохондриальной ДНК диких и домашних особей (The goat domestication process inferred from large-scale mitochondrial DNA analysis of wild and domestic individuals), журнал Proceedings of the National Academy of Sciences, 2008, полный текст в PubMed Central',
        url: naderi,
      },
      {
        label: `ФАО: ${dadisRu.replace(' ФАО', '')} (DAD-IS)`,
        url: dadis,
      },
    ],
  },
  cat: {
    commonName: 'Кошка',
    tag: 'Компаньон · Ближний Восток',
    hook: 'Домашний компаньон и охотник на вредителей, потомок ближневосточной дикой кошки; её связь с людьми началась более 9000 лет назад у зернохранилищ первых земледельцев.',
    imageAlt: 'Молодая полосатая кошка в Португалии.',
    caption: 'Молодая полосатая кошка в Португалии.',
    photoCredit: 'Фото: Alvesgaspar, Викисклад (Wikimedia Commons), лицензия',
    gridSource: {
      label: 'Оттони и соавт., журнал Nature Ecology & Evolution, 2017',
      url: ottoni,
    },
    what: 'Домашняя кошка (Felis catus) живёт в домах и на фермах как компаньон и защита от вредителей. Она происходит от ближневосточной дикой кошки (Felis silvestris lybica).',
    range:
      'Люди разнесли кошек по всему миру, и домашняя кошка, возможно, самый многочисленный домашний питомец на планете. Домашние, фермерские, породистые и свободно живущие городские кошки происходят от одних и тех же ближневосточных предков.',
    story:
      'Генетическое исследование 979 домашних и диких кошек (Дрисколл и коллеги, журнал Science, 2007) показало, что кошек одомашнили на Ближнем Востоке, вероятно, по мере роста земледельческих поселений в Плодородном полумесяце, и что они происходят как минимум от пяти предков-основателей. Древняя ДНК (Оттони и коллеги, журнал Nature Ecology & Evolution, 2017) показывает, что в генофонд домашней кошки внесли вклад и ближневосточные, и египетские популяции дикой кошки: расселение началось в неолите на Ближнем Востоке и ускорилось в классическую эпоху, когда египетские кошки распространились по всему Старому Свету морскими и сухопутными торговыми путями. Один из вариантов окраса стал частым лишь после Средневековья, и это говорит о том, что целенаправленно разводить кошек ради внешности начали позже, чем большинство других домашних животных.',
    when: 'Живой домашний вид; кошек держат как компаньонов по всему миру.',
    humanRole:
      'Дикие кошки, вероятно, впервые поселились рядом с людьми, охотясь на грызунов в зернохранилищах первых земледельцев. Позже люди возили кошек на кораблях и по торговым дорогам по всему Старому Свету.',
    sources: '',
    sourcesList: [
      {
        label:
          'Клаудио Оттони и соавт.: палеогенетика расселения кошки в древнем мире (The palaeogenetics of cat dispersal in the ancient world), журнал Nature Ecology & Evolution, 2017',
        url: ottoni,
      },
      {
        label:
          'Карлос А. Дрисколл и соавт.: ближневосточное происхождение одомашнивания кошки (The Near Eastern Origin of Cat Domestication), журнал Science, 2007, полный текст в PubMed Central',
        url: driscoll,
      },
    ],
  },
  donkey: {
    commonName: 'Осёл',
    tag: 'Рабочее животное · Африка',
    hook: 'Вьючное животное, одомашненное в Африке около 5000 года до н. э.; 99% ослов мира живут в странах с низким и средним уровнем дохода.',
    imageAlt: 'Осёл пасётся в Кловелли, графство Девон, Англия.',
    caption: 'Осёл пасётся в Кловелли, графство Девон, Англия.',
    photoCredit: 'Фото: Adrian Pingstone, Викисклад (Wikimedia Commons)',
    licenseLabel: 'общественное достояние',
    gridSource: { label: 'Тодд и соавт., журнал Science, 2022', url: todd },
    what: 'Домашний осёл (Equus asinus) является рабочим животным, которое перевозит грузы и людей на большие расстояния, особенно в полузасушливых и горных районах. Он по-прежнему служит важной опорой для многих семей в странах с низким и средним уровнем дохода.',
    range:
      'Благотворительная организация Brooke, которая помогает рабочим лошадям, ослам и мулам, оценивает мировое поголовье лошадиных (ослов, лошадей и мулов) примерно в 116 миллионов, из них около 36 миллионов в 38 странах с самым низким доходом, и сообщает, что 99% ослов мира живут в странах с низким и средним уровнем дохода. Во многих странах точных данных о поголовье мало: из 36 стран, последние переписи которых изучила Brooke, 22 не проводили учёт лошадиных в предыдущие 10 лет.',
    story:
      'Исследование геномов 207 современных и 31 древнего осла, а также 15 диких лошадиных (Тодд и коллеги, журнал Science, 2022) поддерживает единственное одомашнивание в Африке около 5000 года до н. э., за которым последовало расселение по Африке и Евразии. Более раннее исследование 126 домашних ослов и семи диких ослов (Ван и коллеги, журнал Nature Communications, 2020) тоже указывает на Африку. Оно выявило низкое генетическое разнообразие Y-хромосомы, что, вероятно, отражает управление размножением со стороны людей, и показало, что неосветлённый чёрный или каштановый окрас домашних ослов, вероятно, закрепился в ходе одомашнивания.',
    when: `Живой домашний вид и рабочее животное. Породы ослов учитывает ${dadisRu}. Brooke призывает правительства относить рабочих ослов, лошадей и мулов к сельскохозяйственным животным, чтобы их учитывали национальные переписи скота.`,
    humanRole:
      'Ослы тысячелетиями перевозили грузы на большие расстояния и до сих пор помогают многим общинам зарабатывать на жизнь.',
    sources: '',
    sourcesList: [
      {
        label:
          'Эвелин Т. Тодд и соавт.: геномная история и глобальное расселение домашних ослов (The genomic history and global expansion of domestic donkeys), журнал Science, 2022, библиографическая запись Мюнхенского университета (DOI: 10.1126/science.abo3503)',
        url: todd,
      },
      {
        label:
          'Чанфа Ван и соавт.: геномы ослов дают новое понимание одомашнивания и отбора по окрасу (Donkey genomes provide new insights into domestication and selection for coat color), журнал Nature Communications, 2020, полный текст в PubMed Central',
        url: wang,
      },
      {
        label:
          'Brooke, благотворительная организация: данные о рабочих животных (Data on working animals)',
        url: brooke,
      },
    ],
  },
  duck: {
    commonName: 'Утка',
    tag: 'Птицеводство · Юго-Восточная Азия',
    hook: 'Фермерские утки, большинство которых происходит от крякв, впервые одомашненных в Юго-Восточной Азии не менее 4000 лет назад; их разводят ради мяса, яиц и пера там, где много воды.',
    imageAlt: 'Домашние утки на рисовых полях близ Убуда, Бали, Индонезия.',
    caption: 'Домашние утки на рисовых полях близ Убуда, Бали, Индонезия.',
    photoCredit: 'Фото: Jakub Hałun, Викисклад (Wikimedia Commons), лицензия',
    gridSource: { label: `${faoRu}: системы животноводства, утки`, url: ducks },
    what: `Фермерских уток разводят ради мяса, яиц и пера. По данным ${faoRu} (ФАО), большинство разводимых уток происходит от кряквы (Anas platyrhynchos). Породы сильно различаются в зависимости от места и от того, выводили ли их для мяса, яиц, пера или сразу для нескольких целей.`,
    range:
      'Больше всего уток там, где много воды. ФАО отмечает особенно большое их число в Бангладеш, Китае и Юго-Восточной Азии; уток также охотно разводят в Египте, Нигерии и во многих странах Европы, особенно на западе Франции. ФАО публикует глобальные карты числа уток на квадратный километр за 2010 и 2015 годы.',
    story:
      'Люди впервые одомашнили уток, происходящих от кряквы, в Юго-Восточной Азии не менее 4000 лет назад. Сегодня их разводят в самых разных хозяйствах: от нескольких птиц на смешанной ферме до огромных стай, которых на грузовиках привозят на рисовые поля, чтобы птицы очищали их после уборки урожая.',
    when: `Живой домашний вид. Породы уток учитывает ${dadisRu}.`,
    humanRole:
      'Фермеры держат уток на прудах и в смешанных хозяйствах, а в районах выращивания риса стаи кормятся на полях после уборки урожая.',
    sources: '',
    sourcesList: [
      {
        label: `${faoRu} (ФАО): системы животноводства, утки (Livestock Systems: Ducks)`,
        url: ducks,
      },
      {
        label: `ФАО: ${dadisRu.replace(' ФАО', '')} (DAD-IS)`,
        url: dadis,
      },
    ],
  },
  rabbit: {
    commonName: 'Кролик',
    tag: 'Мелкий скот · Европа',
    hook: 'Одомашнен к позднему Средневековью от дикого кролика Южной Европы и Северной Африки; сегодня кроликов разводят ради мяса, меха и шерсти на фермах и приусадебных участках.',
    imageAlt: 'Чёрный домашний кролик на соломе в Цветочных садах Хиршштеттен в Вене, Австрия.',
    caption: 'Чёрный домашний кролик на соломе в Цветочных садах Хиршштеттен в Вене, Австрия.',
    photoCredit: 'Фото: Paul Korecky, Викисклад (Wikimedia Commons), лицензия',
    gridSource: {
      label: `${faoRu}: «Кролик: содержание, здоровье и производство», 1997`,
      url: rabbitPdf,
    },
    what: 'Домашнего кролика (Oryctolagus cuniculus) разводят ради мяса, шкурок для меха и, в случае ангорских кроликов, ради шерсти. Он происходит от дикого кролика Южной Европы и Северной Африки.',
    range: `Содержание кроликов в клетках распространилось по сельской Западной Европе и пригородам, а европейская колониальная экспансия привела кроликов во многие страны, где их раньше не знали, например в Австралию и Новую Зеландию. Сегодня кролики живут почти в любом климате. Руководство ${faoRu} (ФАО) по кролиководству называет приусадебное кролиководство хорошо подходящим для мелких фермеров, независимо от того, есть ли у них собственная земля.`,
    story:
      'Согласно руководству ФАО «Кролик: содержание, здоровье и производство» (1997), дикого кролика, как считается, открыли финикийцы, достигшие берегов Испании около 1000 года до н. э. Римский писатель Варрон (116–27 годы до н. э.) советовал держать кроликов в лепорариях, огороженных каменными стенами загонах или парках, вместе с зайцами и другими дикими животными для охоты; кролики тогда ещё оставались дикими. В шестнадцатом веке было известно уже несколько пород, и это первый признак контролируемого разведения, поэтому одомашнивание относят к позднему Средневековью; вероятно, в основном им занимались монахи.',
    when: `Живой домашний вид. Породы кроликов учитывает ${dadisRu}.`,
    humanRole:
      'Значительную часть рациона кролика составляет грубый корм, поэтому кролики не конкурируют напрямую с людьми за пищу, а в эффективных хозяйствах превращают 20% съеденного белка в съедобное мясо. Это делает их полезными для сельских семей, которым нужно больше животного белка.',
    sources: '',
    sourcesList: [
      {
        label: `${faoRu} (ФАО): «Кролик: содержание, здоровье и производство» (The Rabbit: Husbandry, health and production), серия по животноводству и здоровью животных № 21, новое переработанное издание, 1997, PDF`,
        url: rabbitPdf,
      },
      {
        label: `ФАО: ${dadisRu.replace(' ФАО', '')} (DAD-IS)`,
        url: dadis,
      },
    ],
  },
};

export const domesticatesPl: Record<string, SpeciesCopy> = {
  goat: {
    commonName: 'Koza',
    tag: 'Hodowla · mały przeżuwacz',
    hook: 'Mały przeżuwacz, który żywi się głównie pędami i liśćmi krzewów, hodowany dla mięsa, mleka, skór i włosia w małych gospodarstwach, stadach pasterskich i wyspecjalizowanych gospodarstwach mlecznych.',
    imageAlt: 'Brązowa koza domowa z długimi, zwisającymi uszami.',
    caption: 'Brązowa koza domowa z długimi, zwisającymi uszami.',
    photoCredit: 'Zdjęcie: Mostafameraji, Wikimedia Commons, licencja',
    gridSource: { label: `${faoPl}: systemy hodowli zwierząt, kozy`, url: goats },
    what: `Koza domowa (Capra hircus; ${faoPl} używa nazwy Capra aegagrus hircus) to mały przeżuwacz hodowany głównie dla mięsa, mleka, skór i włosia. Kozy żywią się przede wszystkim krzewami i mają bardzo urozmaiconą dietę roślinną, dzięki czemu przystosowały się do wielu różnych środowisk.`,
    range: `Kozy są szeroko rozpowszechnione i hodowane w bardzo różnych systemach gospodarowania na całym świecie. Większość żyje w małych gospodarstwach mieszanych. Kozy są też ważną częścią stad pasterskich, a w klimacie umiarkowanym cenne zwierzęta utrzymuje się w wyspecjalizowanej produkcji mleka. ${faoPl} publikuje globalne mapy liczby kóz na kilometr kwadratowy za lata 2010, 2015 i 2020.`,
    story:
      'Kozy należały do pierwszych zwierząt kopytnych udomowionych przez człowieka. Dane archeologiczne datują początki udomowienia kóz na około 10 500 lat temu, w górnej dolinie Eufratu w południowo-wschodniej Anatolii. Badanie 473 dzikich kóz bezoarowych, dzikich przodków kozy domowej (Naderi i współpracownicy, czasopismo Proceedings of the National Academy of Sciences, 2008), wykazało, że niemal wszystkie dzisiejsze kozy domowe pochodzą prawdopodobnie z ośrodka udomowienia we wschodniej Anatolii, który mógł obejmować także północny i środkowy Zagros.',
    when: `Żywy gatunek udomowiony, hodowany na całym świecie. ${dadisPl} gromadzi dane o rasach zwierząt gospodarskich i zagrożeniu ich wyginięciem; obejmuje około 8800 ras należących do 38 gatunków.`,
    humanRole:
      'Ludzie hodują kozy dla mleka, mięsa, skór i włosia w gospodarstwach rodzinnych, w stadach wędrownych pasterzy i w gospodarstwach mlecznych.',
    sources: '',
    sourcesList: [
      {
        label: `${faoPl} (FAO): systemy hodowli zwierząt, kozy (Livestock Systems: Goats)`,
        url: goats,
      },
      {
        label:
          'Saeid Naderi i in.: proces udomowienia kozy na podstawie szeroko zakrojonej analizy mitochondrialnego DNA osobników dzikich i domowych (The goat domestication process inferred from large-scale mitochondrial DNA analysis of wild and domestic individuals), czasopismo Proceedings of the National Academy of Sciences, 2008, pełny tekst w PubMed Central',
        url: naderi,
      },
      {
        label: `FAO: System Informacji o Różnorodności Zwierząt Domowych (DAD-IS)`,
        url: dadis,
      },
    ],
  },
  cat: {
    commonName: 'Kot',
    tag: 'Towarzysz · Bliski Wschód',
    hook: 'Domowy towarzysz i łowca szkodników, potomek bliskowschodniego żbika; jego związek z ludźmi zaczął się ponad 9000 lat temu przy spichrzach pierwszych rolników.',
    imageAlt: 'Młody pręgowany kot w Portugalii.',
    caption: 'Młody pręgowany kot w Portugalii.',
    photoCredit: 'Zdjęcie: Alvesgaspar, Wikimedia Commons, licencja',
    gridSource: {
      label: 'Ottoni i in., czasopismo Nature Ecology & Evolution, 2017',
      url: ottoni,
    },
    what: 'Kot domowy (Felis catus) żyje w domach i gospodarstwach jako towarzysz i obrońca przed szkodnikami. Pochodzi od bliskowschodniego żbika (Felis silvestris lybica).',
    range:
      'Ludzie rozwieźli koty po całym świecie, a kot domowy jest być może najliczniejszym zwierzęciem domowym na Ziemi. Koty domowe, gospodarskie, rasowe i wolno żyjące koty miejskie pochodzą od tych samych bliskowschodnich przodków.',
    story:
      'Badanie genetyczne 979 kotów domowych i żbików (Driscoll i współpracownicy, czasopismo Science, 2007) wykazało, że koty udomowiono na Bliskim Wschodzie, prawdopodobnie wraz z rozwojem osad rolniczych w Żyznym Półksiężycu, i że pochodzą od co najmniej pięciu założycieli. Starożytny materiał genetyczny (Ottoni i współpracownicy, czasopismo Nature Ecology & Evolution, 2017) pokazuje, że do puli genowej kota domowego przyczyniły się zarówno bliskowschodnie, jak i egipskie populacje żbika: rozprzestrzenianie zaczęło się w neolicie na Bliskim Wschodzie i przyspieszyło w okresie klasycznym, gdy koty egipskie rozeszły się po całym Starym Świecie morskimi i lądowymi szlakami handlowymi. Jeden z wariantów umaszczenia stał się częsty dopiero po średniowieczu, co sugeruje, że ludzie zaczęli celowo hodować koty ze względu na wygląd później niż większość innych zwierząt domowych.',
    when: 'Żywy gatunek udomowiony, trzymany jako towarzysz na całym świecie.',
    humanRole:
      'Żbiki prawdopodobnie zamieszkały w pobliżu ludzi, polując na gryzonie w spichrzach pierwszych rolników. Później ludzie wozili koty statkami i szlakami handlowymi po całym Starym Świecie.',
    sources: '',
    sourcesList: [
      {
        label:
          'Claudio Ottoni i in.: paleogenetyka rozprzestrzeniania się kota w świecie starożytnym (The palaeogenetics of cat dispersal in the ancient world), czasopismo Nature Ecology & Evolution, 2017',
        url: ottoni,
      },
      {
        label:
          'Carlos A. Driscoll i in.: bliskowschodnie pochodzenie udomowienia kota (The Near Eastern Origin of Cat Domestication), czasopismo Science, 2007, pełny tekst w PubMed Central',
        url: driscoll,
      },
    ],
  },
  donkey: {
    commonName: 'Osioł',
    tag: 'Zwierzę robocze · Afryka',
    hook: 'Zwierzę juczne udomowione w Afryce około 5000 r. p.n.e.; 99% osłów na świecie żyje w krajach o niskich i średnich dochodach.',
    imageAlt: 'Osioł pasący się w Clovelly w hrabstwie Devon w Anglii.',
    caption: 'Osioł pasący się w Clovelly w hrabstwie Devon w Anglii.',
    photoCredit: 'Zdjęcie: Adrian Pingstone, Wikimedia Commons',
    licenseLabel: 'domena publiczna',
    gridSource: { label: 'Todd i in., czasopismo Science, 2022', url: todd },
    what: 'Osioł domowy (Equus asinus) to zwierzę robocze, które przenosi ładunki i ludzi na duże odległości, zwłaszcza na terenach półsuchych i wyżynnych. Nadal jest ważnym wsparciem dla wielu rodzin w krajach o niskich i średnich dochodach.',
    range:
      'Organizacja charytatywna Brooke, która pomaga roboczym koniom, osłom i mułom, szacuje, że na świecie żyje około 116 milionów koniowatych (osłów, koni i mułów), w tym około 36 milionów w 38 krajach o najniższych dochodach, i podaje, że 99% osłów na świecie żyje w krajach o niskich i średnich dochodach. W wielu krajach brakuje dokładnych danych o liczebności: z 36 krajów, których ostatnie spisy przeanalizowała Brooke, 22 nie liczyły koniowatych w ciągu poprzednich 10 lat.',
    story:
      'Badanie genomów 207 współczesnych i 31 dawnych osłów oraz 15 dzikich koniowatych (Todd i współpracownicy, czasopismo Science, 2022) wskazuje na jedno udomowienie w Afryce około 5000 r. p.n.e., po którym osły rozprzestrzeniły się po Afryce i Eurazji. Wcześniejsze badanie 126 osłów domowych i siedmiu dzikich osłów (Wang i współpracownicy, czasopismo Nature Communications, 2020) również wskazuje na Afrykę. Wykazało ono małą zmienność genetyczną chromosomu Y, co prawdopodobnie odzwierciedla kierowanie rozrodem przez ludzi, a także to, że nierozjaśnione czarne lub kasztanowe umaszczenie osłów domowych utrwaliło się prawdopodobnie w trakcie udomowienia.',
    when: `Żywy gatunek udomowiony i zwierzę robocze. Rasy osłów rejestruje ${dadisPl}. Brooke apeluje do rządów, by zaliczały robocze osły, konie i muły do zwierząt gospodarskich, tak aby obejmowały je krajowe spisy inwentarza.`,
    humanRole:
      'Osły od tysięcy lat przenoszą towary na duże odległości i nadal pomagają wielu społecznościom zarabiać na życie.',
    sources: '',
    sourcesList: [
      {
        label:
          'Evelyn T. Todd i in.: genomowa historia i globalna ekspansja osłów domowych (The genomic history and global expansion of domestic donkeys), czasopismo Science, 2022, rekord bibliograficzny Uniwersytetu Ludwika i Maksymiliana w Monachium (DOI: 10.1126/science.abo3503)',
        url: todd,
      },
      {
        label:
          'Changfa Wang i in.: genomy osła dają nowy wgląd w udomowienie i selekcję umaszczenia (Donkey genomes provide new insights into domestication and selection for coat color), czasopismo Nature Communications, 2020, pełny tekst w PubMed Central',
        url: wang,
      },
      {
        label:
          'Brooke, organizacja charytatywna: dane o zwierzętach roboczych (Data on working animals)',
        url: brooke,
      },
    ],
  },
  duck: {
    commonName: 'Kaczka',
    tag: 'Drób · Azja Południowo-Wschodnia',
    hook: 'Kaczki hodowlane, w większości pochodzące od krzyżówek udomowionych po raz pierwszy w Azji Południowo-Wschodniej co najmniej 4000 lat temu, hodowane dla mięsa, jaj i pierza tam, gdzie jest dużo wody.',
    imageAlt: 'Kaczki domowe na polach ryżowych koło Ubud na Bali w Indonezji.',
    caption: 'Kaczki domowe na polach ryżowych koło Ubud na Bali w Indonezji.',
    photoCredit: 'Zdjęcie: Jakub Hałun, Wikimedia Commons, licencja',
    gridSource: { label: `${faoPl}: systemy hodowli zwierząt, kaczki`, url: ducks },
    what: `Kaczki hodowlane utrzymuje się dla mięsa, jaj i pierza. Według ${faoPl} większość kaczek hodowlanych pochodzi od krzyżówki (Anas platyrhynchos). Rasy bardzo różnią się w zależności od miejsca i od tego, czy wyhodowano je na mięso, jaja, pierze, czy do kilku celów naraz.`,
    range: `Najwięcej kaczek jest tam, gdzie wody jest pod dostatkiem. ${faoPl} odnotowuje szczególnie duże ich liczby w Bangladeszu, Chinach i Azji Południowo-Wschodniej; kaczki są też popularne w Egipcie, Nigerii i dużej części Europy, zwłaszcza w zachodniej Francji. ${faoPl} publikuje globalne mapy liczby kaczek na kilometr kwadratowy za lata 2010 i 2015.`,
    story:
      'Ludzie po raz pierwszy udomowili kaczki wywodzące się od krzyżówki w Azji Południowo-Wschodniej co najmniej 4000 lat temu. Dziś hoduje się je w bardzo różnych gospodarstwach: od kilku ptaków w gospodarstwie mieszanym po ogromne stada przewożone ciężarówkami na pola ryżowe, by oczyszczały je po zbiorach.',
    when: `Żywy gatunek udomowiony. Rasy kaczek rejestruje ${dadisPl}.`,
    humanRole:
      'Rolnicy trzymają kaczki na stawach i w gospodarstwach mieszanych, a w regionach uprawy ryżu stada żerują na polach po zbiorach.',
    sources: '',
    sourcesList: [
      {
        label: `${faoPl} (FAO): systemy hodowli zwierząt, kaczki (Livestock Systems: Ducks)`,
        url: ducks,
      },
      {
        label: 'FAO: System Informacji o Różnorodności Zwierząt Domowych (DAD-IS)',
        url: dadis,
      },
    ],
  },
  rabbit: {
    commonName: 'Królik',
    tag: 'Drobny inwentarz · Europa',
    hook: 'Udomowiony do późnego średniowiecza z dzikiego królika południowej Europy i Afryki Północnej; dziś hodowany dla mięsa, futra i wełny na fermach i w przydomowych hodowlach.',
    imageAlt: 'Czarny królik domowy na słomie w Ogrodach Kwiatowych Hirschstetten w Wiedniu w Austrii.',
    caption: 'Czarny królik domowy na słomie w Ogrodach Kwiatowych Hirschstetten w Wiedniu w Austrii.',
    photoCredit: 'Zdjęcie: Paul Korecky, Wikimedia Commons, licencja',
    gridSource: {
      label: `${faoPl}: „Królik: chów, zdrowie i produkcja”, 1997`,
      url: rabbitPdf,
    },
    what: 'Królik domowy (Oryctolagus cuniculus) jest hodowany dla mięsa, skórek na futra oraz, w przypadku królików angorskich, dla wełny. Pochodzi od dzikiego królika z południowej Europy i Afryki Północnej.',
    range: `Chów królików w klatkach rozpowszechnił się na wsi w całej Europie Zachodniej i na przedmieściach miast, a europejska ekspansja kolonialna zaniosła króliki do wielu krajów, gdzie wcześniej ich nie znano, na przykład do Australii i Nowej Zelandii. Dziś króliki żyją niemal w każdym klimacie. Podręcznik ${faoPl} o chowie królików opisuje przydomowe króliczarnie jako dobrze dopasowane do potrzeb drobnych rolników, bez względu na to, czy mają własną ziemię.`,
    story: `Według podręcznika ${faoPl} „Królik: chów, zdrowie i produkcja” (1997) dzikiego królika odkryli prawdopodobnie Fenicjanie, którzy dotarli do wybrzeży Hiszpanii około 1000 r. p.n.e. Rzymski pisarz Warron (116–27 p.n.e.) radził trzymać króliki w leporariach, otoczonych kamiennym murem zagrodach lub parkach, razem z zającami i innymi dzikimi zwierzętami do polowań; króliki były wtedy jeszcze dzikie. W szesnastym wieku znano już kilka ras, co jest pierwszym śladem kontrolowanej hodowli, dlatego udomowienie datuje się na późne średniowiecze; zajmowali się nim prawdopodobnie głównie mnisi.`,
    when: `Żywy gatunek udomowiony. Rasy królików rejestruje ${dadisPl}.`,
    humanRole:
      'Pasza objętościowa stanowi ważną część diety królika, więc króliki nie konkurują bezpośrednio z ludźmi o żywność, a w wydajnych systemach zamieniają 20% zjedzonego białka w jadalne mięso. Dzięki temu są przydatne dla rodzin wiejskich, którym potrzeba więcej białka zwierzęcego.',
    sources: '',
    sourcesList: [
      {
        label: `${faoPl} (FAO): „Królik: chów, zdrowie i produkcja” (The Rabbit: Husbandry, health and production), seria Produkcja i Zdrowie Zwierząt nr 21, nowe wydanie poprawione, 1997, PDF`,
        url: rabbitPdf,
      },
      {
        label: 'FAO: System Informacji o Różnorodności Zwierząt Domowych (DAD-IS)',
        url: dadis,
      },
    ],
  },
};

export const domesticatesLv: Record<string, SpeciesCopy> = {
  goat: {
    commonName: 'Kaza',
    tag: 'Lopkopība · sīkais atgremotājs',
    hook: 'Sīkais atgremotājs, kas barojas galvenokārt ar krūmu zariem un lapām; kazas tur gaļai, pienam, ādām un vilnai sīksaimniecībās, ganu ganāmpulkos un specializētās piena fermās.',
    imageAlt: 'Brūna mājas kaza ar garām, nokarenām ausīm.',
    caption: 'Brūna mājas kaza ar garām, nokarenām ausīm.',
    photoCredit: 'Foto: Mostafameraji, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: { label: `${faoLv}: lopkopības sistēmas, kazas`, url: goats },
    what: `Mājas kaza (Capra hircus; ${faoLv} lieto nosaukumu Capra aegagrus hircus) ir sīkais atgremotājs, ko cilvēki tur galvenokārt gaļai, pienam, ādām un vilnai. Kazas galvenokārt ēd krūmus un ļoti dažādus augus, un tas ļāvis tām pielāgoties daudzām atšķirīgām vidēm.`,
    range: `Kazas ir plaši izplatītas, un tās audzē ļoti dažādās saimniekošanas sistēmās visā pasaulē. Lielākā daļa dzīvo jauktās sīksaimniecībās. Kazas ir arī svarīga ganu ganāmpulku daļa, un mērenajā joslā vērtīgus dzīvniekus tur specializētai piena ražošanai. ${faoLv} publicē pasaules kartes ar kazu skaitu uz kvadrātkilometru 2010., 2015. un 2020. gadā.`,
    story:
      'Kazas bija starp pirmajiem nagaiņiem, ko pieradināja cilvēki. Arheoloģiskie dati kazu pieradināšanas sākumu datē aptuveni pirms 10 500 gadiem Eifratas augštecē Anatolijas dienvidaustrumos. Pētījums par 473 savvaļas bezoāra kazām, mājas kazas savvaļas senčiem (Naderi un kolēģi, žurnāls Proceedings of the National Academy of Sciences, 2008), atklāja, ka gandrīz visas mūsdienu mājas kazas, visticamāk, cēlušās no pieradināšanas centra Anatolijas austrumos, kas, iespējams, aptvēra arī Zagrosa kalnu ziemeļu un centrālo daļu.',
    when: `Dzīvs mājas dzīvnieks, ko audzē visā pasaulē. ${dadisLv} uzskaita mājlopu šķirnes un to izmiršanas risku; tajā ir dati par aptuveni 8800 šķirnēm no 38 sugām.`,
    humanRole:
      'Cilvēki tur kazas pienam, gaļai, ādām un vilnai ģimenes saimniecībās, klejojošu lopkopju ganāmpulkos un piena fermās.',
    sources: '',
    sourcesList: [
      {
        label: `${faoLv} (FAO): lopkopības sistēmas, kazas (Livestock Systems: Goats)`,
        url: goats,
      },
      {
        label:
          'Saīds Naderi u.c.: kazu pieradināšanas process pēc plaša savvaļas un mājas dzīvnieku mitohondriālās DNS pētījuma (The goat domestication process inferred from large-scale mitochondrial DNA analysis of wild and domestic individuals), žurnāls Proceedings of the National Academy of Sciences, 2008, pilns teksts PubMed Central',
        url: naderi,
      },
      {
        label: 'FAO: Mājas dzīvnieku daudzveidības informācijas sistēma (DAD-IS)',
        url: dadis,
      },
    ],
  },
  cat: {
    commonName: 'Kaķis',
    tag: 'Pavadonis · Tuvie Austrumi',
    hook: 'Mājas pavadonis un kaitēkļu ķērājs, Tuvo Austrumu meža kaķa pēcnācējs; tā saikne ar cilvēkiem sākās pirms vairāk nekā 9000 gadiem pie pirmo zemkopju graudu krātuvēm.',
    imageAlt: 'Jauns svītrains kaķis Portugālē.',
    caption: 'Jauns svītrains kaķis Portugālē.',
    photoCredit: 'Foto: Alvesgaspar, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: {
      label: 'Ottoni u.c., žurnāls Nature Ecology & Evolution, 2017',
      url: ottoni,
    },
    what: 'Mājas kaķis (Felis catus) dzīvo mājās un saimniecībās kā pavadonis un kaitēkļu apkarotājs. Tas cēlies no Tuvo Austrumu meža kaķa (Felis silvestris lybica).',
    range:
      'Cilvēki kaķus aizveduši uz visu pasauli, un mājas kaķis, iespējams, ir daudzskaitlīgākais mājdzīvnieks pasaulē. Mājas kaķi, saimniecību kaķi, šķirnes kaķi un brīvi dzīvojoši pilsētu kaķi cēlušies no tiem pašiem Tuvo Austrumu senčiem.',
    story:
      'Ģenētisks pētījums par 979 mājas kaķiem un meža kaķiem (Driskols un kolēģi, žurnāls Science, 2007) atklāja, ka kaķi pieradināti Tuvajos Austrumos, visticamāk, līdz ar zemkopju ciemu attīstību Auglīgajā pusmēnesī, un ka tie cēlušies vismaz no pieciem dibinātājiem. Senais ģenētiskais materiāls (Ottoni un kolēģi, žurnāls Nature Ecology & Evolution, 2017) rāda, ka mājas kaķa genofondu veidojušas gan Tuvo Austrumu, gan Ēģiptes meža kaķu populācijas: izplatīšanās sākās neolītā Tuvajos Austrumos un paātrinājās klasiskajā laikmetā, kad Ēģiptes kaķi pa jūras un sauszemes tirdzniecības ceļiem izplatījās visā Vecajā pasaulē. Viens kažoka krāsas variants kļuva biežs tikai pēc viduslaikiem, un tas liecina, ka cilvēki mērķtiecīgi selekcionēt kaķus pēc izskata sāka vēlāk nekā lielāko daļu citu mājdzīvnieku.',
    when: 'Dzīvs mājas dzīvnieks, ko visā pasaulē tur kā pavadoni.',
    humanRole:
      'Meža kaķi, visticamāk, sāka dzīvot cilvēku tuvumā, medīdami grauzējus pirmo zemkopju graudu krātuvēs. Vēlāk cilvēki veda kaķus ar kuģiem un pa tirdzniecības ceļiem pa visu Veco pasauli.',
    sources: '',
    sourcesList: [
      {
        label:
          'Klaudio Ottoni u.c.: kaķu izplatīšanās paleoģenētika senajā pasaulē (The palaeogenetics of cat dispersal in the ancient world), žurnāls Nature Ecology & Evolution, 2017',
        url: ottoni,
      },
      {
        label:
          'Karloss A. Driskols u.c.: kaķu pieradināšanas Tuvo Austrumu izcelsme (The Near Eastern Origin of Cat Domestication), žurnāls Science, 2007, pilns teksts PubMed Central',
        url: driscoll,
      },
    ],
  },
  donkey: {
    commonName: 'Ēzelis',
    tag: 'Darba dzīvnieks · Āfrika',
    hook: 'Nastu nesējs, kas pieradināts Āfrikā ap 5000. gadu p.m.ē.; 99% pasaules ēzeļu dzīvo valstīs ar zemiem un vidējiem ienākumiem.',
    imageAlt: 'Ēzelis ganās Klovelijā, Devonas grāfistē, Anglijā.',
    caption: 'Ēzelis ganās Klovelijā, Devonas grāfistē, Anglijā.',
    photoCredit: 'Foto: Adrian Pingstone, Vikikrātuve (Wikimedia Commons)',
    licenseLabel: 'sabiedriskais īpašums',
    gridSource: { label: 'Toda u.c., žurnāls Science, 2022', url: todd },
    what: 'Mājas ēzelis (Equus asinus) ir darba dzīvnieks, kas lielos attālumos nes kravas un cilvēkus, īpaši pussausos un kalnainos apvidos. Tas joprojām ir svarīgs atbalsts daudzām ģimenēm valstīs ar zemiem un vidējiem ienākumiem.',
    range:
      'Labdarības organizācija Brooke, kas palīdz darba zirgiem, ēzeļiem un mūļiem, lēš, ka pasaulē ir aptuveni 116 miljoni zirgu dzimtas dzīvnieku (ēzeļu, zirgu un mūļu), no tiem aptuveni 36 miljoni 38 valstīs ar zemākajiem ienākumiem, un norāda, ka 99% pasaules ēzeļu dzīvo valstīs ar zemiem un vidējiem ienākumiem. Daudzās valstīs trūkst precīzu datu par dzīvnieku skaitu: no 36 valstīm, kuru pēdējās skaitīšanas Brooke izvērtēja, 22 iepriekšējos 10 gados zirgu dzimtas dzīvniekus nebija skaitījušas.',
    story:
      'Pētījums par 207 mūsdienu un 31 senā ēzeļa, kā arī 15 savvaļas zirgu dzimtas dzīvnieku genomiem (Toda un kolēģi, žurnāls Science, 2022) atbalsta vienu pieradināšanu Āfrikā ap 5000. gadu p.m.ē., pēc kuras ēzeļi izplatījās Āfrikā un Eirāzijā. Agrāks pētījums par 126 mājas ēzeļiem un septiņiem savvaļas ēzeļiem (Vans un kolēģi, žurnāls Nature Communications, 2020) arī norāda uz Āfriku. Tas atklāja zemu Y hromosomas ģenētisko daudzveidību, kas, visticamāk, atspoguļo cilvēku vadītu vairošanu, un parādīja, ka mājas ēzeļu neatšķaidītā melnā vai kaštanbrūnā krāsa, visticamāk, nostiprinājās pieradināšanas laikā.',
    when: `Dzīvs mājas dzīvnieks un darba dzīvnieks. Ēzeļu šķirnes uzskaita ${dadisLv}. Brooke aicina valdības darba ēzeļus, zirgus un mūļus klasificēt kā mājlopus, lai tos uzskaitītu valstu lopu skaitīšanā.`,
    humanRole:
      'Ēzeļi tūkstošiem gadu nesuši preces lielos attālumos un joprojām palīdz daudzām kopienām nopelnīt iztiku.',
    sources: '',
    sourcesList: [
      {
        label:
          'Evelina T. Toda u.c.: mājas ēzeļu genomiskā vēsture un globālā izplatība (The genomic history and global expansion of domestic donkeys), žurnāls Science, 2022, Minhenes Universitātes bibliogrāfiskais ieraksts (DOI: 10.1126/science.abo3503)',
        url: todd,
      },
      {
        label:
          'Čanfa Vans u.c.: ēzeļu genomi dod jaunu ieskatu pieradināšanā un selekcijā pēc kažoka krāsas (Donkey genomes provide new insights into domestication and selection for coat color), žurnāls Nature Communications, 2020, pilns teksts PubMed Central',
        url: wang,
      },
      {
        label: 'Brooke, labdarības organizācija: dati par darba dzīvniekiem (Data on working animals)',
        url: brooke,
      },
    ],
  },
  duck: {
    commonName: 'Pīle',
    tag: 'Putnkopība · Dienvidaustrumāzija',
    hook: 'Mājas pīles, kuru lielākā daļa cēlusies no meža pīlēm, ko pirmoreiz pieradināja Dienvidaustrumāzijā vismaz pirms 4000 gadiem; tās audzē gaļai, olām un spalvām vietās, kur ir daudz ūdens.',
    imageAlt: 'Mājas pīles rīsu laukos pie Ubudas Bali salā, Indonēzijā.',
    caption: 'Mājas pīles rīsu laukos pie Ubudas Bali salā, Indonēzijā.',
    photoCredit: 'Foto: Jakub Hałun, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: { label: `${faoLv}: lopkopības sistēmas, pīles`, url: ducks },
    what: `Mājas pīles audzē gaļai, olām un spalvām. Saskaņā ar ${faoLv} datiem lielākā daļa audzēto pīļu cēlusies no meža pīles (Anas platyrhynchos). Šķirnes ļoti atšķiras atkarībā no vietas un no tā, vai tās izveidotas gaļai, olām, spalvām vai vairākiem mērķiem vienlaikus.`,
    range: `Visvairāk pīļu ir tur, kur ir daudz ūdens. ${faoLv} norāda, ka īpaši daudz to ir Bangladešā, Ķīnā un Dienvidaustrumāzijā; pīles ir iecienītas arī Ēģiptē, Nigērijā un lielā daļā Eiropas, īpaši Francijas rietumos. ${faoLv} publicē pasaules kartes ar pīļu skaitu uz kvadrātkilometru 2010. un 2015. gadā.`,
    story:
      'Cilvēki pirmoreiz pieradināja no meža pīles cēlušās pīles Dienvidaustrumāzijā vismaz pirms 4000 gadiem. Mūsdienās tās audzē ļoti dažādās saimniecībās: no dažiem putniem jauktā saimniecībā līdz milzīgiem bariem, ko ar kravas automašīnām ved uz rīsu laukiem, lai putni pēc ražas novākšanas laukus iztīrītu.',
    when: `Dzīvs mājas dzīvnieks. Pīļu šķirnes uzskaita ${dadisLv}.`,
    humanRole:
      'Zemnieki tur pīles dīķos un jauktās saimniecībās, bet rīsa audzēšanas apvidos bari barojas laukos pēc ražas novākšanas.',
    sources: '',
    sourcesList: [
      {
        label: `${faoLv} (FAO): lopkopības sistēmas, pīles (Livestock Systems: Ducks)`,
        url: ducks,
      },
      {
        label: 'FAO: Mājas dzīvnieku daudzveidības informācijas sistēma (DAD-IS)',
        url: dadis,
      },
    ],
  },
  rabbit: {
    commonName: 'Trusis',
    tag: 'Sīklopi · Eiropa',
    hook: 'Pieradināts līdz vēlajiem viduslaikiem no Dienvideiropas un Ziemeļāfrikas savvaļas truša; mūsdienās trušus audzē gaļai, kažokādām un vilnai fermās un piemājas saimniecībās.',
    imageAlt: 'Melns mājas trusis uz salmiem Hiršštetenes ziedu dārzos Vīnē, Austrijā.',
    caption: 'Melns mājas trusis uz salmiem Hiršštetenes ziedu dārzos Vīnē, Austrijā.',
    photoCredit: 'Foto: Paul Korecky, Vikikrātuve (Wikimedia Commons), licence',
    gridSource: {
      label: `${faoLv}: “Trusis: turēšana, veselība un ražošana”, 1997`,
      url: rabbitPdf,
    },
    what: 'Mājas trusi (Oryctolagus cuniculus) audzē gaļai, ādiņām kažokādām un, angoras trušu gadījumā, vilnai. Tas cēlies no Dienvideiropas un Ziemeļāfrikas savvaļas truša.',
    range: `Trušu turēšana būros izplatījās visos Rietumeiropas laukos un pilsētu priekšpilsētās, un Eiropas koloniālā ekspansija aizveda trušus uz daudzām valstīm, kur tie iepriekš bija nezināmi, piemēram, uz Austrāliju un Jaunzēlandi. Mūsdienās truši sastopami gandrīz jebkurā klimatā. ${faoLv} rokasgrāmata par truškopību raksturo piemājas trušu audzētavas kā labi piemērotas sīkzemniekiem neatkarīgi no tā, vai viņiem pieder zeme.`,
    story: `Saskaņā ar ${faoLv} rokasgrāmatu “Trusis: turēšana, veselība un ražošana” (1997) savvaļas trusi, domājams, atklāja feniķieši, kas ap 1000. gadu p.m.ē. sasniedza Spānijas krastus. Romiešu rakstnieks Varons (116.–27. g. p.m.ē.) ieteica turēt trušus leporārijos, ar akmens mūri ieskautos aplokos vai parkos, kopā ar zaķiem un citiem savvaļas dzīvniekiem medībām; truši toreiz vēl bija savvaļas dzīvnieki. Sešpadsmitajā gadsimtā jau bija zināmas vairākas šķirnes, un tā ir pirmā kontrolētas selekcijas pazīme, tāpēc pieradināšanu attiecina uz vēlajiem viduslaikiem; visticamāk, to galvenokārt paveica mūki.`,
    when: `Dzīvs mājas dzīvnieks. Trušu šķirnes uzskaita ${dadisLv}.`,
    humanRole:
      'Rupjā barība ir svarīga truša barības daļa, tāpēc truši tieši nekonkurē ar cilvēkiem par pārtiku, un efektīvās sistēmās tie 20% apēsto olbaltumvielu pārvērš ēdamā gaļā. Tāpēc tie noder lauku ģimenēm, kurām vajag vairāk dzīvnieku olbaltumvielu.',
    sources: '',
    sourcesList: [
      {
        label: `${faoLv} (FAO): “Trusis: turēšana, veselība un ražošana” (The Rabbit: Husbandry, health and production), sērija “Dzīvnieku ražošana un veselība” Nr. 21, jaunā pārskatītā versija, 1997, PDF`,
        url: rabbitPdf,
      },
      {
        label: 'FAO: Mājas dzīvnieku daudzveidības informācijas sistēma (DAD-IS)',
        url: dadis,
      },
    ],
  },
};
