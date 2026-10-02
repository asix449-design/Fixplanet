import type { PrimarySource } from '../data/sources';
import type { Locale } from './config';

/** Public Oceans blue-ecosystem copy. Pasted from the pack's public section. */
export const oceanBlueSlugs = [
  'mangroves',
  'seagrass-meadows',
  'salt-marshes',
  'kelp-forests',
  'blue-carbon',
] as const;

export type OceanBlueSlug = (typeof oceanBlueSlugs)[number];

export type OceanBlueCopy = {
  title: string;
  meta: string;
  blurb: string;
  what: string;
  why: string;
  howToRead: string;
  limits: string;
  caption: string;
  credit: string;
  sources: PrimarySource[];
};

export const oceanBlueLede: Record<Locale, string> = {
  "en": "Mangroves, seagrass meadows, salt marshes and kelp forests are coastal ecosystems that shelter shores, support fish and store carbon. These pages show how much of each has been mapped and how it has changed, and a fifth page explains blue carbon, the carbon these habitats hold.",
  "ru": "Мангровые леса, луга морских трав, солёные марши и леса ламинариевых водорослей представляют собой прибрежные экосистемы, которые защищают берега, поддерживают рыбу и хранят углерод. Эти страницы показывают, какая часть каждой экосистемы нанесена на карту и как она менялась, а пятая страница объясняет голубой углерод, то есть углерод, который хранят эти экосистемы.",
  "pl": "Namorzyny, łąki trawy morskiej, słone bagna pływowe i lasy listownic to ekosystemy przybrzeżne, które chronią brzegi, wspierają ryby i magazynują węgiel. Te strony pokazują, jaka część każdego ekosystemu została zmapowana i jak się zmieniała, a piąta strona wyjaśnia błękitny węgiel, czyli węgiel zgromadzony w tych ekosystemach.",
  "lv": "Mangrovju meži, jūraszāļu pļavas, sāļie paisuma purvi un lamināriju meži ir piekrastes ekosistēmas, kas sargā krastus, atbalsta zivis un uzkrāj oglekli. Šīs lapas rāda, cik liela daļa no katras ir kartēta un kā tā mainījusies, bet piektā lapa skaidro zilo oglekli, ar to saprotot oglekli, ko šīs ekosistēmas glabā."
};

export const oceanBlueSectionLabels: Record<
  Locale,
  { what: string; why: string; how: string; limits: string }
> = {
  en: {
    what: 'What it is',
    why: 'Why it matters',
    how: 'How to read it',
    limits: 'Limits',
  },
  ru: {
    what: 'Что это',
    why: 'Почему это важно',
    how: 'Как это читать',
    limits: 'Ограничения',
  },
  pl: {
    what: 'Czym to jest',
    why: 'Dlaczego to ważne',
    how: 'Jak to czytać',
    limits: 'Ograniczenia',
  },
  lv: {
    what: 'Kas tas ir',
    why: 'Kāpēc tas ir svarīgi',
    how: 'Kā to lasīt',
    limits: 'Ierobežojumi',
  },
};

export const oceanBlueCopy: Record<Locale, Record<OceanBlueSlug, OceanBlueCopy>> = {
  "en": {
    "mangroves": {
      "title": "Mangroves",
      "meta": "Extent and change · 1985 to 2025",
      "blurb": "Where mangrove forests grow along tropical coasts and how their area has changed over four decades. Global Mangrove Watch reports a net gain of 47,707 hectares worldwide from 1985 to 2025, with large losses in some countries and gains in others.",
      "what": "Mangroves are forests of salt-tolerant trees that grow where tropical and subtropical coasts are flooded by the tide. Global Mangrove Watch is a partnership led by Aberystwyth University, solo Earth Observation, Wetlands International, The Nature Conservancy and the Japan Aerospace Exploration Agency. Its latest update gives a map of mangrove extent for each year from 1985 to 2025, 41 annual maps in all, made from optical satellite images and from long-wavelength radar images. The newest baseline maps show detail down to 10 metres, and the maps of loss and recovery show detail down to 30 metres.",
      "why": "Mangroves protect coastal communities from storm surges and sea level rise, support fish and livelihoods, shelter rich wildlife and, according to Wetlands International, store carbon at rates up to four times higher per hectare than forests on land. Global Mangrove Watch reports that 147,283 km² of mangroves remain, in 128 countries and territories. Between 1985 and 2025 the world gained a net 47,707 hectares of mangrove cover, which is 477 km². That total is a balance across countries. India gained 1,180 km² and Australia gained 1,396 km², while Indonesia, which has the largest mangrove area, lost a net 2,043 km² since 1985, and Myanmar lost 1,457 km².",
      "howToRead": "The map shows Southeast Asia and New Guinea, a region that includes Indonesia, using the earlier edition of the data for 1996 and 2020. Green marks mangrove present in both years, orange marks mangrove present in 1996 but gone by 2020, and blue marks mangrove absent in 1996 and present in 2020. Each map cell shows the share of its area covered by mangrove, so thin fringes look faint. The world figures in the text come from the latest update, which covers 1985 to 2025 and keeps gross loss and gross gain in separate layers, so clearing in one place can be seen apart from regrowth in another. The accuracy of the latest baseline maps is estimated at 93 percent.",
      "limits": "A net gain of 477 km² worldwide is small beside the 147,283 km² that remain, and it hides large local losses. Wetlands International says that gains lie mostly around rivers and deltas and may follow human activity upstream, such as mining and deforestation, which changes the flow of water and sediment. Another part of the gain comes from natural regrowth, planting and restoration. Maps of the 1980s and 1990s rest on fewer satellite images in some regions, so the early years are less certain. The two editions of the data give different results, so a figure is best quoted together with its edition.",
      "caption": "Mangrove extent in Southeast Asia and New Guinea in 1996 and 2020, from the 1996 to 2020 edition of Global Mangrove Watch. Green is mangrove in both years, orange is mangrove in 1996 only, and blue is mangrove in 2020 only. Each cell shows the share of its area covered by mangrove.",
      "credit": "Map by Fix Planet from Global Mangrove Watch data for 1996 and 2020 (Bunting and others, 2022), shared through the Esri Living Atlas. ©Global Mangrove Watch. Coastline: Natural Earth, public domain (https://www.naturalearthdata.com/about/terms-of-use/). Licence: Creative Commons Attribution 4.0 International, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "Global Mangrove Watch: platform for exploring the maps",
          "url": "https://www.globalmangrovewatch.org/"
        },
        {
          "label": "Wetlands International: Good news for mangroves globally masks big losses in some regions, according to updated Global Mangrove Watch (23 July 2026)",
          "url": "https://www.wetlands.org/good-news-for-mangroves-globally-masks-big-losses-in-some-regions-according-to-updated-global-mangrove-watch/"
        },
        {
          "label": "Japan Aerospace Exploration Agency, Earth Observation Research Center: Global Mangrove Watch dataset",
          "url": "https://www.eorc.jaxa.jp/ALOS/en/dataset/gmw_e.htm"
        },
        {
          "label": "Global Mangrove Alliance: Global Mangrove Watch 4.1 Launch",
          "url": "https://www.mangrovealliance.org/news/global-mangrove-watch-4-launch"
        },
        {
          "label": "Esri Living Atlas: Global Mangrove Watch Time Series (1996 to 2020 edition, source of the map)",
          "url": "https://www.arcgis.com/home/item.html?id=3a08770f1929427fb7d33d509d27969e"
        }
      ]
    },
    "seagrass-meadows": {
      "title": "Seagrass meadows",
      "meta": "Mapped area · 2020 global assessment",
      "blurb": "Where seagrass meadows have been mapped along the world’s coasts and how large the mapped area is. A 2020 global assessment found 160,387 km² mapped with moderate to high confidence, in 103 countries and territories.",
      "what": "Seagrasses are flowering plants that grow in shallow coastal seas and form underwater meadows. The most extensive collection of seagrass maps is held by the United Nations Environment Programme World Conservation Monitoring Centre. In 2020 McKenzie and colleagues merged those maps with other public maps into a country by country estimate of seagrass area, published in Environmental Research Letters. For the area estimates they used only mapped areas, and they used point records, such as herbarium specimens, only to show that seagrass is present.",
      "why": "According to the study, seagrass meadows are a major store of carbon and a habitat for fish, and hundreds of millions of people rely on them for food and livelihoods. Its estimate is 160,387 km² of seagrass mapped with moderate to high confidence in 103 countries and territories, plus another 106,175 km² with low confidence in 33 more countries, which together make 266,562 km². Australia has the largest compiled area, 83,013 km², which is over 31 percent of the known total. Earlier estimates in the literature ranged from 177,000 to 600,000 km².",
      "howToRead": "Each bar is the area mapped with moderate to high confidence in one of six seagrass regions, in the order of the study’s table: temperate North Atlantic 3,229 km², tropical Atlantic 44,222, Mediterranean 14,167, a second temperate northern region 1,866, tropical Indo-Pacific 87,791 and temperate southern oceans 9,112. The six bars add up to 160,387 km². Where several maps overlap, the overlap was counted once, and parts of maps deeper than 200 metres were removed.",
      "limits": "Mapped area is the area that someone has mapped, which is smaller than the area of seagrass that exists. The study names large coasts that remain poorly mapped, including insular Southeast Asia, the east coast of South America and the west coast of Africa, and it says the Philippines are suspected to hold vast meadows that are largely uncharted. The underlying maps date from 1930 to 2015 and range from expert sketches to field validated surveys, so quality differs from country to country. The numbers give one compiled picture and cannot show whether seagrass area has grown or shrunk.",
      "caption": "Seagrass area mapped with moderate to high confidence in six seagrass regions, from a 2020 global assessment. From left to right: temperate North Atlantic 3,229 km², tropical Atlantic 44,222, Mediterranean 14,167, a second temperate northern region 1,866, tropical Indo-Pacific 87,791 and temperate southern oceans 9,112. Gridlines mark every 20,000 km².",
      "credit": "Chart by Fix Planet from Table 1 of McKenzie and others, 2020, The global distribution of seagrass meadows, Environmental Research Letters 15, 074041. Licence: Creative Commons Attribution 4.0 International, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "McKenzie and others: The global distribution of seagrass meadows (Environmental Research Letters, 2020, open access PDF)",
          "url": "https://www.seagrasswatch.org/wp-content/uploads/Resources/Publications/2020/PDF/McKenzie-et-al_2020.pdf"
        },
        {
          "label": "United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Seagrasses (data record, 2021 edition)",
          "url": "https://resources.unep-wcmc.org/products/aaa46cd3d3d640b2916b8f0a0ffe07cb"
        }
      ]
    },
    "salt-marshes": {
      "title": "Salt marshes",
      "meta": "Recorded extent · 2017 global map",
      "blurb": "How much tidal salt marsh has been mapped worldwide. A 2017 global map records 5,495,089 hectares of salt marsh in 43 countries and territories, and notes occurrences in 99 countries.",
      "what": "Salt marshes are coastal wetlands on sheltered shores, where herbs, grasses and low shrubs that tolerate salt are flooded by the tides. They occur worldwide, mostly in middle and high latitudes, and the most extensive ones lie outside the tropics, notably around the North Atlantic. In 2017 Mcowen and colleagues published a global dataset of salt marsh occurrence and extent in the Biodiversity Data Journal, with the first global estimate of the known extent. It collects 350,985 individual occurrences, and the United Nations Environment Programme World Conservation Monitoring Centre curates and distributes it.",
      "why": "Salt marshes shelter fish, birds and many other animals, buffer shores against waves, erosion and storm surges, filter runoff and store carbon. The dataset records salt marsh in 99 countries. Its mapped outlines cover 5,495,089 hectares, which is 54,951 km², in 43 countries and territories. That total is at the low end of earlier estimates, which ranged from 2.2 to 40 million hectares, because the authors took a conservative approach to mapping.",
      "howToRead": "Each bar is the recorded extent, in hectares, of one of the ten largest entries in the paper’s table. From left to right: the United States mainland and Hawaii 1,723,410; Australia 1,325,854; the Russian Federation 700,719; China 549,506; mainland Europe, 20 countries together, 356,947; Mexico 272,527; Alaska 161,483; Argentina 118,870; Canada 111,274; and Great Britain 81,842. Gridlines mark every 500,000 hectares. The entries come from surveys made between 1973 and 2015, most of them after 2005, and overlapping outlines were merged before the areas were added.",
      "limits": "The total is a minimum. The authors name regions where salt marsh is known but lacks mapped outlines, including Canada, northern Russia, South America and Africa. They say the outlines cover many of the important areas in Europe, the United States and Australia, so bars for those places are more complete than bars for places with less mapping. The dataset records where and when mapping was done and cannot show change from year to year.",
      "caption": "Recorded salt marsh area in hectares for the ten largest entries in the table of a 2017 global map. From left to right: the United States mainland and Hawaii, Australia, the Russian Federation, China, mainland Europe, Mexico, Alaska, Argentina, Canada and Great Britain. Gridlines mark every 500,000 hectares.",
      "credit": "Chart by Fix Planet from Table 1 of Mcowen and others, 2017, A global map of saltmarshes, Biodiversity Data Journal 5, e11764. Licence: Creative Commons Attribution 4.0 International, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "Mcowen and others: A global map of saltmarshes (Biodiversity Data Journal, 2017)",
          "url": "https://bdj.pensoft.net/article/11764/"
        },
        {
          "label": "United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Saltmarshes (data record)",
          "url": "https://resources.unep-wcmc.org/products/addd1baa160c4d318b84c3b714d3e583"
        }
      ]
    },
    "kelp-forests": {
      "title": "Kelp forests",
      "meta": "Observed change · 1952 to 2015",
      "blurb": "How kelp forests have changed at 1,138 monitored sites between 1952 and 2015. A 2016 global synthesis found a small average decline, with falls in 38 percent of ecoregions with data, rises in 27 percent and no detectable change in 35 percent.",
      "what": "Kelps are large brown algae of the order Laminariales. They form underwater forests along the coasts of every continent except Antarctica and occur in 43 percent of the world’s marine ecoregions, which are regions of the ocean with distinct species and conditions. In 2016 Krumhansl and colleagues published a global synthesis of kelp change, assembled from records at 1,138 sites collected between 1952 and 2015.",
      "why": "Kelp forests support diverse and productive communities along temperate and Arctic coasts, and kelp responds quickly to its environment, so it works as an early sign of change. The synthesis found a small average decline, an instantaneous rate of change of 0.018 per year, which is a loss of about 1.8 percent a year, with regional differences far larger than that average. Among the ecoregions with enough data, 38 percent showed declines, 27 percent showed increases and 35 percent showed no detectable change.",
      "howToRead": "The 100 squares stand for the ecoregions with data. Reading from the top left, the 38 orange squares are ecoregions with declines, the 35 grey squares have no detectable change and the 27 green squares have increases. The yearly rates in ecoregions with declines ranged from 0.015 to 0.18, and in ecoregions with increases from 0.015 to 0.11.",
      "limits": "Time series exist only where researchers have monitored kelp, and the paper notes uncertainty in some regions because data coverage in space and time is poor. The 35 percent with no detectable change may include places where sparse data hide a trend. The paper links declines to warming water in places such as the Gulf of Maine and to the loss of sea urchin predators through fishing, and it links increases to successful local management in places such as the west coast of Vancouver Island and the Southern California Bight. The average hides this variety, so a local forest can follow a very different path.",
      "caption": "Shares of ecoregions with data, from a 2016 global synthesis of kelp change. In reading order from the top left, 38 orange squares show decline, 35 grey squares show no detectable change and 27 green squares show increase. Each square is one percent.",
      "credit": "Chart by Fix Planet from percentages reported by Krumhansl and others, 2016, Proceedings of the National Academy of Sciences 113 (48), pages 13785 to 13790, an article free to read through the journal’s open access option. Only the published percentages are used, and the article states no data licence: https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/",
      "sources": [
        {
          "label": "Krumhansl and others: Global patterns of kelp forest change over the past half-century (Proceedings of the National Academy of Sciences, 2016, full text)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/"
        }
      ]
    },
    "blue-carbon": {
      "title": "Blue carbon",
      "meta": "Carbon stocks · 2013 guidelines",
      "blurb": "How much carbon mangroves, tidal salt marshes and seagrass meadows hold. The Intergovernmental Panel on Climate Change quotes about 8 billion tonnes of carbon in mangroves, about 0.8 billion in tidal marshes and from 4.2 to 8.4 billion in seagrass meadows.",
      "what": "Blue carbon is the carbon captured by the world’s ocean and coastal ecosystems, held mostly in mangroves, tidal salt marshes and seagrass meadows. The 2013 Wetlands Supplement of the Intergovernmental Panel on Climate Change gives countries the methods to count emissions and removals from managed coastal wetlands in their greenhouse gas inventories. The International Blue Carbon Initiative, a team of 34 experts, wrote a manual with standard protocols for sampling, laboratory measurement and analysis of carbon stocks and emissions in these habitats.",
      "why": "Most of the carbon in these habitats lies in the soil, and the National Oceanic and Atmospheric Administration of the United States notes that carbon in coastal soil is often thousands of years old. The chapter on coastal wetlands in the Supplement quotes global stocks of about 8 billion tonnes of carbon in mangroves, about 0.8 billion tonnes in tidal marshes and from 4.2 to 8.4 billion tonnes in seagrass meadows. The chapter writes these as petagrams of carbon, and one petagram is one billion tonnes. When coastal habitats are damaged, carbon returns to the air, so protecting them keeps the stored carbon in place.",
      "howToRead": "The three bars are global stock estimates in billions of tonnes of carbon. From left to right: mangroves about 8, tidal marshes about 0.8, and seagrass meadows from 4.2 to 8.4, drawn as a floating bar that spans the range. Gridlines mark every 2 billion tonnes. A stock is carbon held at one time, which differs from the amount a habitat removes from the air each year. The three estimates come from three different studies, published in 2011 and 2012, so they are rough guides to scale. Countries can report with standard default values or, where they have better data, with their own measurements.",
      "limits": "The stock figures are estimates, and the seagrass range is wide, from 4.2 to 8.4 billion tonnes. They depend on how large each habitat is judged to be, and mapping is incomplete for all three. The chart shows stocks, so it says nothing about how fast each habitat adds carbon, which varies with place and condition. Default values give a national picture, while measurements on the ground can differ from them.",
      "caption": "Global carbon stocks in billions of tonnes: mangroves about 8, tidal salt marshes about 0.8 and seagrass meadows from 4.2 to 8.4, as quoted by the Intergovernmental Panel on Climate Change. Gridlines mark every 2 billion tonnes.",
      "credit": "Chart by Fix Planet from the global stock estimates quoted in chapter 4 of the 2013 Wetlands Supplement of the Intergovernmental Panel on Climate Change. Only the published numbers are used and no open licence applies to them. Copyright terms of the source: https://www.ipcc.ch/copyright/",
      "sources": [
        {
          "label": "Intergovernmental Panel on Climate Change, Task Force on National Greenhouse Gas Inventories: 2013 Supplement to the 2006 Guidelines for National Greenhouse Gas Inventories: Wetlands (publication page)",
          "url": "https://www.ipcc-nggip.iges.or.jp/public/wetlands/"
        },
        {
          "label": "Intergovernmental Panel on Climate Change: Wetlands Supplement, Chapter 4 Coastal Wetlands (PDF)",
          "url": "https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_separate_files/WS_Chp4_Coastal_Wetlands.pdf"
        },
        {
          "label": "International Blue Carbon Initiative: Coastal Blue Carbon, methods for assessing carbon stocks and emissions factors (manual page)",
          "url": "https://www.thebluecarboninitiative.org/manual"
        },
        {
          "label": "National Oceanic and Atmospheric Administration, National Ocean Service: What is Blue Carbon?",
          "url": "https://oceanservice.noaa.gov/facts/bluecarbon.html"
        }
      ]
    }
  },
  "ru": {
    "mangroves": {
      "title": "Мангровые леса",
      "meta": "Площадь и изменения · с 1985 по 2025 год",
      "blurb": "Где вдоль тропических берегов растут мангровые леса и как менялась их площадь за четыре десятилетия. Проект «Глобальный мониторинг мангровых лесов» сообщает о чистом приросте на 47 707 гектаров в мире с 1985 по 2025 год: в одних странах площадь выросла, в других сильно сократилась.",
      "what": "Мангровые леса представляют собой леса из солеустойчивых деревьев, которые растут там, где приливы затопляют тропические и субтропические берега. Проект «Глобальный мониторинг мангровых лесов» ведут совместно Университет Аберистуита, частная компания по наблюдению Земли, международная организация по водно-болотным угодьям, американская организация по охране природы и Японское агентство аэрокосмических исследований. Его последнее обновление даёт карту площади мангровых лесов за каждый год с 1985 по 2025, всего 41 ежегодную карту, составленную по оптическим снимкам со спутников и по снимкам радаров с длинной волной. Новейшие базовые карты показывают детали до 10 метров, а карты потерь и восстановления до 30 метров.",
      "why": "Мангровые леса защищают прибрежные сообщества от штормовых нагонов и подъёма уровня моря, поддерживают рыбный промысел и средства к существованию людей, служат домом для многих видов и, по данным международной организации по водно-болотным угодьям, накапливают углерод в расчёте на гектар до четырёх раз быстрее, чем леса на суше. По данным проекта, сохранилось 147 283 км² мангровых лесов в 128 странах и территориях. С 1985 по 2025 год мир получил чистый прирост мангровых лесов на 47 707 гектаров, то есть на 477 км². Эта величина складывается из итогов по странам. Индия прибавила 1 180 км², Австралия 1 396 км², а Индонезия, у которой самая большая площадь мангровых лесов, потеряла в итоге 2 043 км² с 1985 года, Мьянма 1 457 км².",
      "howToRead": "Карта показывает Юго-Восточную Азию и Новую Гвинею, регион с Индонезией; использованы данные более раннего издания проекта за 1996 и 2020 годы. Зелёным отмечены мангровые леса, которые были в оба года, оранжевым леса, которые были в 1996 году и исчезли к 2020 году, синим леса, которых не было в 1996 году и которые появились к 2020 году. Каждая ячейка показывает долю своей площади, занятую мангровыми лесами, поэтому узкие полосы выглядят бледно. Мировые цифры в тексте взяты из последнего обновления, которое охватывает период с 1985 по 2025 год и хранит валовые потери и валовой прирост в отдельных слоях, так что вырубку в одном месте видно отдельно от восстановления в другом. Точность новейших базовых карт оценивается в 93 процента.",
      "limits": "Чистый мировой прирост в 477 км² невелик рядом с 147 283 км², которые сохранились, и скрывает крупные местные потери. По словам международной организации по водно-болотным угодьям, прирост приходится в основном на устья рек и дельты и, возможно, связан с деятельностью человека выше по течению, например с добычей полезных ископаемых и вырубкой лесов, которая меняет сток воды и наносов. Другая часть прироста связана с естественным возобновлением, посадками и восстановлением. Карты 1980-х и 1990-х годов опираются в некоторых регионах на меньшее число спутниковых снимков, поэтому ранние годы менее надёжны. Два издания проекта дают разные результаты, поэтому цифру стоит приводить вместе с указанием издания.",
      "caption": "Площадь мангровых лесов в Юго-Восточной Азии и на Новой Гвинее в 1996 и 2020 годах по изданию проекта «Глобальный мониторинг мангровых лесов» за период с 1996 по 2020 год. Зелёный цвет означает мангровые леса в оба года, оранжевый только в 1996 году, синий только в 2020 году. Каждая ячейка показывает долю своей площади, занятую мангровыми лесами.",
      "credit": "Карта Fix Planet по данным проекта «Глобальный мониторинг мангровых лесов» за 1996 и 2020 годы (Bunting и др., 2022), предоставленным через Esri Living Atlas. ©Global Mangrove Watch. Береговая линия: Natural Earth, общественное достояние (https://www.naturalearthdata.com/about/terms-of-use/). Лицензия: Creative Commons «Атрибуция 4.0 Всемирная», https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "«Глобальный мониторинг мангровых лесов»: платформа для просмотра карт (Global Mangrove Watch: platform for exploring the maps)",
          "url": "https://www.globalmangrovewatch.org/"
        },
        {
          "label": "Международная организация по водно-болотным угодьям: «Хорошие новости о мангровых лесах в мире скрывают большие потери в некоторых регионах, показывает обновлённый проект» (23 июля 2026 года) (Wetlands International: Good news for mangroves globally masks big losses in some regions, according to updated Global Mangrove Watch (23 July 2026))",
          "url": "https://www.wetlands.org/good-news-for-mangroves-globally-masks-big-losses-in-some-regions-according-to-updated-global-mangrove-watch/"
        },
        {
          "label": "Японское агентство аэрокосмических исследований, Центр исследований Земли: набор данных «Глобального мониторинга мангровых лесов» (Japan Aerospace Exploration Agency, Earth Observation Research Center: Global Mangrove Watch dataset)",
          "url": "https://www.eorc.jaxa.jp/ALOS/en/dataset/gmw_e.htm"
        },
        {
          "label": "Глобальный альянс по мангровым лесам: запуск обновления «Глобального мониторинга мангровых лесов» (Global Mangrove Alliance: Global Mangrove Watch 4.1 Launch)",
          "url": "https://www.mangrovealliance.org/news/global-mangrove-watch-4-launch"
        },
        {
          "label": "Esri Living Atlas: временной ряд «Глобального мониторинга мангровых лесов» (издание за период с 1996 по 2020 год, источник карты) (Esri Living Atlas: Global Mangrove Watch Time Series (1996 to 2020 edition, source of the map))",
          "url": "https://www.arcgis.com/home/item.html?id=3a08770f1929427fb7d33d509d27969e"
        }
      ]
    },
    "seagrass-meadows": {
      "title": "Луга морских трав",
      "meta": "Картированная площадь · глобальная оценка 2020 года",
      "blurb": "Где вдоль берегов мира уже нанесены на карты луга морских трав и насколько велика картированная площадь. Глобальная оценка 2020 года нашла 160 387 км², картированных с умеренной или высокой достоверностью, в 103 странах и территориях.",
      "what": "Морские травы представляют собой цветковые растения, которые растут на мелководье у берегов и образуют подводные луга. Самое полное собрание карт морских трав хранит Всемирный центр мониторинга охраны природы Программы Организации Объединённых Наций по окружающей среде. В 2020 году группа исследователей объединила эти карты с другими открытыми картами в оценку площади морских трав по странам; работа вышла в журнале «Письма об экологических исследованиях». Для оценки площади использовали только картированные участки, а точечные записи, например гербарные образцы, служили лишь признаком присутствия морских трав.",
      "why": "По данным исследования, луга морских трав служат крупным хранилищем углерода и местом обитания рыб, а сотни миллионов людей зависят от них в питании и заработке. Оценка составляет 160 387 км² морских трав, картированных с умеренной или высокой достоверностью, в 103 странах и территориях, плюс ещё 106 175 км² с низкой достоверностью ещё в 33 странах, всего 266 562 км². Самая большая сводная площадь у Австралии, 83 013 км², это более 31 процента известной суммы. Прежние оценки в литературе колебались от 177 000 до 600 000 км².",
      "howToRead": "Каждый столбец показывает площадь, картированную с умеренной или высокой достоверностью, в одном из шести регионов морских трав, в порядке таблицы исследования: умеренный север Атлантики 3 229 км², тропическая Атлантика 44 222, Средиземное море 14 167, второй умеренный северный регион 1 866, тропическая часть Индо-Тихоокеанского региона 87 791 и умеренные южные океаны 9 112. Шесть столбцов в сумме дают 160 387 км². Там, где несколько карт накладывались друг на друга, наложение считали один раз, а части карт глубже 200 метров убрали.",
      "limits": "Картированная площадь означает площадь, которую кто-то нанёс на карту, и она меньше площади морских трав, которые существуют на деле. Исследование называет крупные побережья, которые остаются плохо картированными: острова Юго-Восточной Азии, восточное побережье Южной Америки и западное побережье Африки; о Филиппинах сказано, что там предположительно есть огромные луга, пока почти не нанесённые на карты. Исходные карты относятся к годам с 1930 по 2015 и варьируются от набросков экспертов до проверенных в поле съёмок, поэтому качество различается от страны к стране. Цифры дают одну сводную картину и не показывают, выросла или сократилась площадь морских трав.",
      "caption": "Площадь морских трав, картированная с умеренной или высокой достоверностью в шести регионах морских трав, по глобальной оценке 2020 года. Слева направо: умеренный север Атлантики 3 229 км², тропическая Атлантика 44 222, Средиземное море 14 167, второй умеренный северный регион 1 866, тропическая часть Индо-Тихоокеанского региона 87 791 и умеренные южные океаны 9 112. Линии сетки проведены через каждые 20 000 км².",
      "credit": "Диаграмма Fix Planet по таблице 1 из работы Маккензи и соавторов, 2020, «Глобальное распространение лугов морских трав», Environmental Research Letters 15, 074041. Лицензия: Creative Commons «Атрибуция 4.0 Всемирная», https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "Маккензи и соавторы: «Глобальное распространение лугов морских трав» («Письма об экологических исследованиях», 2020, PDF в открытом доступе) (McKenzie and others: The global distribution of seagrass meadows (Environmental Research Letters, 2020, open access PDF))",
          "url": "https://www.seagrasswatch.org/wp-content/uploads/Resources/Publications/2020/PDF/McKenzie-et-al_2020.pdf"
        },
        {
          "label": "Всемирный центр мониторинга охраны природы Программы Организации Объединённых Наций по окружающей среде: «Глобальное распространение морских трав» (запись набора данных, издание 2021 года) (United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Seagrasses (data record, 2021 edition))",
          "url": "https://resources.unep-wcmc.org/products/aaa46cd3d3d640b2916b8f0a0ffe07cb"
        }
      ]
    },
    "salt-marshes": {
      "title": "Солёные марши",
      "meta": "Зарегистрированная площадь · глобальная карта 2017 года",
      "blurb": "Сколько приливных солёных маршей нанесено на карту мира. Глобальная карта 2017 года фиксирует 5 495 089 гектаров солёных маршей в 43 странах и территориях и отмечает их присутствие в 99 странах.",
      "what": "Солёные марши представляют собой прибрежные водно-болотные угодья на защищённых берегах, где приливы заливают травы и невысокие кустарники, переносящие соль. Они встречаются по всему миру, в основном в средних и высоких широтах, а самые обширные лежат вне тропиков, в частности вокруг Северной Атлантики. В 2017 году группа исследователей опубликовала в журнале о данных по биоразнообразию глобальный набор данных о присутствии и площади солёных маршей с первой глобальной оценкой известной площади. В него собраны 350 985 отдельных записей, а курирует и распространяет его Всемирный центр мониторинга охраны природы Программы Организации Объединённых Наций по окружающей среде.",
      "why": "Солёные марши дают приют рыбе, птицам и многим другим животным, смягчают удары волн, эрозию и штормовые нагоны, очищают стоки и накапливают углерод. В наборе данных солёные марши отмечены в 99 странах. Нанесённые контуры охватывают 5 495 089 гектаров, то есть 54 951 км², в 43 странах и территориях. Эта сумма лежит у нижней границы прежних оценок, которые колебались от 2,2 до 40 миллионов гектаров, потому что авторы выбрали осторожный подход к картированию.",
      "howToRead": "Каждый столбец показывает зарегистрированную площадь в гектарах для одной из десяти самых крупных строк таблицы в статье. Слева направо: материковая часть Соединённых Штатов и Гавайи 1 723 410; Австралия 1 325 854; Российская Федерация 700 719; Китай 549 506; материковая Европа, 20 стран вместе, 356 947; Мексика 272 527; Аляска 161 483; Аргентина 118 870; Канада 111 274; Великобритания 81 842. Линии сетки проведены через каждые 500 000 гектаров. Строки опираются на съёмки с 1973 по 2015 год, большинство после 2005 года, а пересекающиеся контуры перед сложением площадей объединяли.",
      "limits": "Итог является минимумом. Авторы называют регионы, где солёные марши известны, но контуров на карте нет: Канада, север России, Южная Америка и Африка. По их словам, контуры охватывают многие важные районы Европы, Соединённых Штатов и Австралии, поэтому столбцы для этих мест полнее, чем столбцы для мест с меньшим картированием. Набор данных фиксирует, где и когда проводили картирование, и не показывает изменений от года к году.",
      "caption": "Зарегистрированная площадь солёных маршей в гектарах для десяти самых крупных строк таблицы глобальной карты 2017 года. Слева направо: материковая часть Соединённых Штатов и Гавайи, Австралия, Российская Федерация, Китай, материковая Европа, Мексика, Аляска, Аргентина, Канада и Великобритания. Линии сетки проведены через каждые 500 000 гектаров.",
      "credit": "Диаграмма Fix Planet по таблице 1 из работы Mcowen и соавторов, 2017, «Глобальная карта солёных маршей», Biodiversity Data Journal 5, e11764. Лицензия: Creative Commons «Атрибуция 4.0 Всемирная», https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "Mcowen и соавторы: «Глобальная карта солёных маршей» (журнал о данных по биоразнообразию, 2017) (Mcowen and others: A global map of saltmarshes (Biodiversity Data Journal, 2017))",
          "url": "https://bdj.pensoft.net/article/11764/"
        },
        {
          "label": "Всемирный центр мониторинга охраны природы Программы Организации Объединённых Наций по окружающей среде: «Глобальное распространение солёных маршей» (запись набора данных) (United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Saltmarshes (data record))",
          "url": "https://resources.unep-wcmc.org/products/addd1baa160c4d318b84c3b714d3e583"
        }
      ]
    },
    "kelp-forests": {
      "title": "Леса ламинариевых водорослей",
      "meta": "Наблюдаемые изменения · с 1952 по 2015 год",
      "blurb": "Как менялись леса ламинариевых водорослей (келпа) на 1 138 наблюдаемых участках с 1952 по 2015 год. Глобальный обзор 2016 года нашёл небольшое среднее сокращение: спад в 38 процентах экорегионов с данными, рост в 27 процентах и отсутствие заметных изменений в 35 процентах.",
      "what": "Ламинариевые, или келп, представляют собой крупные бурые водоросли. Они образуют подводные леса вдоль берегов всех континентов, кроме Антарктиды, и встречаются в 43 процентах морских экорегионов мира; так называют области океана с особым набором видов и условий. В 2016 году группа исследователей опубликовала глобальный обзор изменений келпа, собранный по записям с 1 138 участков за период с 1952 по 2015 год.",
      "why": "Леса ламинариевых водорослей поддерживают разнообразные и продуктивные сообщества вдоль берегов умеренных и арктических широт, а сами водоросли быстро реагируют на окружающую среду, поэтому служат ранним признаком перемен. Обзор нашёл небольшое среднее сокращение: мгновенная скорость изменения составила 0,018 в год, то есть потерю около 1,8 процента в год, при региональных различиях, намного превышающих это среднее. Среди экорегионов с достаточными данными в 38 процентах наблюдался спад, в 27 процентах рост, а в 35 процентах заметных изменений не обнаружили.",
      "howToRead": "Все 100 квадратов вместе обозначают экорегионы с данными. Если читать с левого верхнего угла, 38 оранжевых квадратов означают экорегионы со спадом, 35 серых квадратов экорегионы без заметных изменений, а 27 зелёных квадратов экорегионы с ростом. Годовые скорости в экорегионах со спадом колебались от 0,015 до 0,18, а в экорегионах с ростом от 0,015 до 0,11.",
      "limits": "Ряды наблюдений есть только там, где исследователи следили за келпом, а в работе отмечена неопределённость в некоторых регионах из-за слабого охвата данными по месту и по времени. Среди 35 процентов экорегионов без заметных изменений могут быть места, где скудные данные скрывают тенденцию. Авторы связывают спад с потеплением воды, например в заливе Мэн, и с утратой хищников, которые поедают морских ежей, из-за их промысла, а рост с успешным местным управлением, например у западного побережья острова Ванкувер и в Южно-Калифорнийской бухте. Среднее скрывает это разнообразие, поэтому отдельный лес может идти совсем другим путём.",
      "caption": "Доли экорегионов с данными по глобальному обзору изменений келпа 2016 года. Если читать с левого верхнего угла, 38 оранжевых квадратов означают спад, 35 серых квадратов отсутствие заметных изменений, 27 зелёных квадратов рост. Каждый квадрат равен одному проценту.",
      "credit": "Диаграмма Fix Planet по процентам из статьи Krumhansl и соавторов, 2016, Proceedings of the National Academy of Sciences 113 (48), страницы с 13785 по 13790; статья доступна для чтения через вариант открытого доступа журнала. Использованы только опубликованные проценты, лицензия на данные в статье не указана: https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/",
      "sources": [
        {
          "label": "Krumhansl и соавторы: «Глобальные закономерности изменений лесов келпа за последние полвека» (Proceedings of the National Academy of Sciences, 2016, полный текст) (Krumhansl and others: Global patterns of kelp forest change over the past half-century (Proceedings of the National Academy of Sciences, 2016, full text))",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/"
        }
      ]
    },
    "blue-carbon": {
      "title": "Голубой углерод",
      "meta": "Запасы углерода · руководство 2013 года",
      "blurb": "Сколько углерода хранят мангровые леса, приливные солёные марши и луга морских трав. Межправительственная группа экспертов по изменению климата приводит около 8 миллиардов тонн углерода в мангровых лесах, около 0,8 миллиарда в приливных маршах и от 4,2 до 8,4 миллиарда в лугах морских трав.",
      "what": "Голубой углерод представляет собой углерод, который захватывают океан и прибрежные экосистемы; больше всего его хранят мангровые леса, приливные солёные марши и луга морских трав. Дополнение 2013 года по водно-болотным угодьям, которое подготовила Межправительственная группа экспертов по изменению климата, даёт странам методы учёта выбросов и поглощения на управляемых прибрежных водно-болотных угодьях в кадастрах парниковых газов. Международная инициатива по голубому углероду, команда из 34 экспертов, написала руководство со стандартными протоколами отбора проб, лабораторных измерений и анализа запасов углерода и выбросов в этих экосистемах.",
      "why": "Основная часть углерода в этих экосистемах лежит в почве, а Национальное управление океанических и атмосферных исследований США отмечает, что углерод в прибрежной почве часто насчитывает тысячи лет. В главе о прибрежных водно-болотных угодьях этого Дополнения приведены мировые запасы: около 8 миллиардов тонн углерода в мангровых лесах, около 0,8 миллиарда тонн в приливных маршах и от 4,2 до 8,4 миллиарда тонн в лугах морских трав. В главе их записывают в петаграммах углерода, а один петаграмм равен одному миллиарду тонн. Когда прибрежные экосистемы повреждены, углерод возвращается в воздух, поэтому их защита сохраняет накопленный углерод на месте.",
      "howToRead": "Три столбца показывают мировые оценки запасов в миллиардах тонн углерода. Слева направо: мангровые леса около 8, приливные марши около 0,8, луга морских трав от 4,2 до 8,4; последний показан плавающим столбцом, который охватывает диапазон. Линии сетки проведены через каждые 2 миллиарда тонн. Запас означает углерод, накопленный в данный момент, и отличается от того, сколько экосистема забирает из воздуха за год. Три оценки взяты из трёх разных исследований 2011 и 2012 годов, поэтому они служат лишь ориентиром по масштабу. Страны могут вести отчётность по стандартным значениям или, если у них есть лучшие данные, по собственным измерениям.",
      "limits": "Цифры запасов являются оценками, а диапазон для морских трав широк: от 4,2 до 8,4 миллиарда тонн. Они зависят от того, насколько велика каждая экосистема по современным представлениям, а картирование неполно для всех трёх. Диаграмма показывает запасы, поэтому она ничего не говорит о том, как быстро каждая экосистема накапливает углерод; скорость зависит от места и состояния. Стандартные значения дают общую картину по стране, а измерения на местах могут отличаться от них.",
      "caption": "Мировые запасы углерода в миллиардах тонн: мангровые леса около 8, приливные солёные марши около 0,8 и луга морских трав от 4,2 до 8,4, как приводит Межправительственная группа экспертов по изменению климата. Линии сетки проведены через каждые 2 миллиарда тонн.",
      "credit": "Диаграмма Fix Planet по мировым оценкам запасов, которые приведены в главе 4 Дополнения 2013 года по водно-болотным угодьям Межправительственной группы экспертов по изменению климата. Использованы только опубликованные числа, открытая лицензия на них не распространяется. Условия авторского права источника: https://www.ipcc.ch/copyright/",
      "sources": [
        {
          "label": "Межправительственная группа экспертов по изменению климата, Целевая группа по национальным кадастрам парниковых газов: Дополнение 2013 года к Руководящим принципам 2006 года по национальным кадастрам парниковых газов: водно-болотные угодья (страница публикации) (Intergovernmental Panel on Climate Change, Task Force on National Greenhouse Gas Inventories: 2013 Supplement to the 2006 Guidelines for National Greenhouse Gas Inventories: Wetlands (publication page))",
          "url": "https://www.ipcc-nggip.iges.or.jp/public/wetlands/"
        },
        {
          "label": "Межправительственная группа экспертов по изменению климата: Дополнение по водно-болотным угодьям, глава 4 «Прибрежные водно-болотные угодья» (PDF) (Intergovernmental Panel on Climate Change: Wetlands Supplement, Chapter 4 Coastal Wetlands (PDF))",
          "url": "https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_separate_files/WS_Chp4_Coastal_Wetlands.pdf"
        },
        {
          "label": "Международная инициатива по голубому углероду: «Прибрежный голубой углерод», методы оценки запасов углерода и коэффициентов выбросов (страница руководства) (International Blue Carbon Initiative: Coastal Blue Carbon, methods for assessing carbon stocks and emissions factors (manual page))",
          "url": "https://www.thebluecarboninitiative.org/manual"
        },
        {
          "label": "Национальное управление океанических и атмосферных исследований США, Национальная океаническая служба: «Что такое голубой углерод?» (National Oceanic and Atmospheric Administration, National Ocean Service: What is Blue Carbon?)",
          "url": "https://oceanservice.noaa.gov/facts/bluecarbon.html"
        }
      ]
    }
  },
  "pl": {
    "mangroves": {
      "title": "Namorzyny",
      "meta": "Areał i zmiany · od 1985 do 2025",
      "blurb": "Gdzie wzdłuż tropikalnych wybrzeży rosną lasy namorzynowe i jak zmieniał się ich areał przez cztery dekady. Projekt „Globalny monitoring namorzynów” podaje, że od 1985 do 2025 roku świat zyskał netto 47 707 hektarów, przy czym w jednych krajach areał wzrósł, a w innych mocno się skurczył.",
      "what": "Namorzyny to lasy drzew tolerujących sól, które rosną tam, gdzie pływy zalewają tropikalne i subtropikalne wybrzeża. Projekt „Globalny monitoring namorzynów” prowadzą wspólnie Uniwersytet w Aberystwyth, firma zajmująca się obserwacją Ziemi, międzynarodowa organizacja ochrony mokradeł, amerykańska organizacja ochrony przyrody i Japońska Agencja Eksploracji Aerokosmicznej. Jego najnowsza aktualizacja daje mapę zasięgu namorzynów na każdy rok od 1985 do 2025, łącznie 41 rocznych map, wykonanych ze zdjęć optycznych z satelitów i ze zdjęć radarowych o długiej fali. Najnowsze mapy bazowe pokazują szczegóły do 10 metrów, a mapy strat i odbudowy do 30 metrów.",
      "why": "Namorzyny chronią społeczności przybrzeżne przed sztormowymi wezbraniami i wzrostem poziomu morza, wspierają rybołówstwo i źródła utrzymania ludzi, dają schronienie bogatej przyrodzie i według międzynarodowej organizacji ochrony mokradeł magazynują węgiel w przeliczeniu na hektar nawet czterokrotnie szybciej niż lasy na lądzie. Projekt podaje, że zachowało się 147 283 km² namorzynów w 128 krajach i terytoriach. Od 1985 do 2025 roku świat zyskał netto 47 707 hektarów namorzynów, czyli 477 km². Ta suma jest bilansem wyników poszczególnych krajów. Indie zyskały 1 180 km², Australia 1 396 km², a Indonezja, która ma największy areał namorzynów, straciła netto 2 043 km² od 1985 roku, Mjanma 1 457 km².",
      "howToRead": "Mapa pokazuje Azję Południowo-Wschodnią i Nową Gwineę, region z Indonezją; użyto danych wcześniejszej edycji projektu z lat 1996 i 2020. Kolor zielony oznacza namorzyny obecne w obu latach, pomarańczowy namorzyny, które były w 1996 roku, a zniknęły do 2020, niebieski namorzyny, których nie było w 1996 roku, a które są w 2020. Każda komórka pokazuje, jaką część jej powierzchni zajmują namorzyny, więc wąskie pasy wyglądają blado. Liczby ogólnoświatowe w tekście pochodzą z najnowszej aktualizacji, która obejmuje okres od 1985 do 2025 i trzyma straty brutto oraz przyrosty brutto w osobnych warstwach, dzięki czemu wyrąb w jednym miejscu widać oddzielnie od odrostu w innym. Dokładność najnowszych map bazowych szacuje się na 93 procent.",
      "limits": "Zysk netto 477 km² na świecie jest niewielki wobec 147 283 km², które pozostały, i ukrywa duże straty lokalne. Międzynarodowa organizacja ochrony mokradeł podaje, że przyrosty występują głównie wokół rzek i delt i mogą wynikać z działalności człowieka w górze rzeki, na przykład z górnictwa i wycinki lasów, które zmieniają przepływ wody i osadów. Inna część przyrostu pochodzi z naturalnego odrastania, nasadzeń i odbudowy. Mapy z lat 80. i 90. opierają się w niektórych regionach na mniejszej liczbie zdjęć satelitarnych, więc wczesne lata są mniej pewne. Dwie edycje danych dają różne wyniki, dlatego liczbę warto podawać razem z edycją.",
      "caption": "Zasięg namorzynów w Azji Południowo-Wschodniej i na Nowej Gwinei w latach 1996 i 2020 według edycji projektu „Globalny monitoring namorzynów” za okres od 1996 do 2020. Zielony oznacza namorzyny w obu latach, pomarańczowy tylko w 1996, niebieski tylko w 2020. Każda komórka pokazuje, jaką część jej powierzchni zajmują namorzyny.",
      "credit": "Mapa Fix Planet na podstawie danych projektu „Globalny monitoring namorzynów” z lat 1996 i 2020 (Bunting i in., 2022), udostępnionych przez Esri Living Atlas. ©Global Mangrove Watch. Linia brzegowa: Natural Earth, domena publiczna (https://www.naturalearthdata.com/about/terms-of-use/). Licencja: Creative Commons Uznanie autorstwa 4.0 Międzynarodowe, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "„Globalny monitoring namorzynów”: platforma do przeglądania map (Global Mangrove Watch: platform for exploring the maps)",
          "url": "https://www.globalmangrovewatch.org/"
        },
        {
          "label": "Wetlands International: „Dobre wieści o namorzynach na świecie ukrywają duże straty w niektórych regionach, wynika ze zaktualizowanego projektu” (23 lipca 2026) (Wetlands International: Good news for mangroves globally masks big losses in some regions, according to updated Global Mangrove Watch (23 July 2026))",
          "url": "https://www.wetlands.org/good-news-for-mangroves-globally-masks-big-losses-in-some-regions-according-to-updated-global-mangrove-watch/"
        },
        {
          "label": "Japońska Agencja Eksploracji Aerokosmicznej, Centrum Obserwacji Ziemi: zbiór danych „Globalnego monitoringu namorzynów” (Japan Aerospace Exploration Agency, Earth Observation Research Center: Global Mangrove Watch dataset)",
          "url": "https://www.eorc.jaxa.jp/ALOS/en/dataset/gmw_e.htm"
        },
        {
          "label": "Globalny Sojusz na rzecz Namorzynów: premiera aktualizacji „Globalnego monitoringu namorzynów” (Global Mangrove Alliance: Global Mangrove Watch 4.1 Launch)",
          "url": "https://www.mangrovealliance.org/news/global-mangrove-watch-4-launch"
        },
        {
          "label": "Esri Living Atlas: szereg czasowy „Globalnego monitoringu namorzynów” (edycja za okres od 1996 do 2020, źródło mapy) (Esri Living Atlas: Global Mangrove Watch Time Series (1996 to 2020 edition, source of the map))",
          "url": "https://www.arcgis.com/home/item.html?id=3a08770f1929427fb7d33d509d27969e"
        }
      ]
    },
    "seagrass-meadows": {
      "title": "Łąki trawy morskiej",
      "meta": "Zmapowany areał · globalna ocena z 2020 roku",
      "blurb": "Gdzie wzdłuż światowych wybrzeży zmapowano łąki trawy morskiej i jak duży jest zmapowany areał. Globalna ocena z 2020 roku wykazała 160 387 km² zmapowanych z umiarkowaną lub wysoką pewnością w 103 krajach i terytoriach.",
      "what": "Trawy morskie to rośliny kwiatowe, które rosną w płytkich morzach przybrzeżnych i tworzą podwodne łąki. Najobszerniejszy zbiór map traw morskich przechowuje Światowe Centrum Monitoringu Ochrony Przyrody Programu Narodów Zjednoczonych do spraw Ochrony Środowiska. W 2020 roku McKenzie i współautorzy połączyli te mapy z innymi publicznymi mapami w oszacowanie areału traw morskich w podziale na kraje; praca ukazała się w czasopiśmie „Environmental Research Letters”. Do oszacowań areału użyli tylko zmapowanych powierzchni, a rekordy punktowe, na przykład okazy zielnikowe, służyły jedynie jako dowód obecności traw morskich.",
      "why": "Według badania łąki trawy morskiej są ważnym magazynem węgla i siedliskiem ryb, a setki milionów ludzi polegają na nich w kwestii pożywienia i utrzymania. Oszacowanie wynosi 160 387 km² traw morskich zmapowanych z umiarkowaną lub wysoką pewnością w 103 krajach i terytoriach, a do tego jeszcze 106 175 km² z niską pewnością w kolejnych 33 krajach, razem 266 562 km². Największy zestawiony areał ma Australia, 83 013 km², czyli ponad 31 procent znanej sumy. Wcześniejsze szacunki w literaturze wahały się od 177 000 do 600 000 km².",
      "howToRead": "Każdy słupek to areał zmapowany z umiarkowaną lub wysoką pewnością w jednym z sześciu regionów traw morskich, w kolejności tabeli z badania: umiarkowany region północnego Atlantyku 3 229 km², tropikalny Atlantyk 44 222, Morze Śródziemne 14 167, drugi umiarkowany region północny 1 866, tropikalny Indo-Pacyfik 87 791 i umiarkowane oceany południowe 9 112. Sześć słupków daje w sumie 160 387 km². Tam, gdzie kilka map się nakładało, nakładkę liczono raz, a części map głębsze niż 200 metrów usunięto.",
      "limits": "Zmapowany areał to powierzchnia, którą ktoś naniósł na mapę, i jest mniejsza niż rzeczywisty areał traw morskich. Badanie wymienia duże wybrzeża, które pozostają słabo zmapowane: wyspiarską Azję Południowo-Wschodnią, wschodnie wybrzeże Ameryki Południowej i zachodnie wybrzeże Afryki; o Filipinach pisze, że prawdopodobnie kryją ogromne łąki, w dużej mierze jeszcze nienaniesione na mapy. Mapy źródłowe pochodzą z lat 1930 do 2015 i obejmują od szkiców ekspertów po badania zweryfikowane w terenie, więc jakość różni się między krajami. Liczby dają jeden zestawiony obraz i nie pokazują, czy areał traw morskich urósł, czy się skurczył.",
      "caption": "Areał traw morskich zmapowany z umiarkowaną lub wysoką pewnością w sześciu regionach traw morskich, według globalnej oceny z 2020 roku. Od lewej do prawej: umiarkowany region północnego Atlantyku 3 229 km², tropikalny Atlantyk 44 222, Morze Śródziemne 14 167, drugi umiarkowany region północny 1 866, tropikalny Indo-Pacyfik 87 791 i umiarkowane oceany południowe 9 112. Linie siatki oznaczają co 20 000 km².",
      "credit": "Wykres Fix Planet na podstawie tabeli 1 z pracy McKenzie i in., 2020, „The global distribution of seagrass meadows”, Environmental Research Letters 15, 074041. Licencja: Creative Commons Uznanie autorstwa 4.0 Międzynarodowe, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "McKenzie i in.: „Globalne rozmieszczenie łąk trawy morskiej” („Environmental Research Letters”, 2020, PDF w otwartym dostępie) (McKenzie and others: The global distribution of seagrass meadows (Environmental Research Letters, 2020, open access PDF))",
          "url": "https://www.seagrasswatch.org/wp-content/uploads/Resources/Publications/2020/PDF/McKenzie-et-al_2020.pdf"
        },
        {
          "label": "Światowe Centrum Monitoringu Ochrony Przyrody Programu Narodów Zjednoczonych do spraw Ochrony Środowiska: „Globalne rozmieszczenie traw morskich” (rekord zbioru danych, edycja z 2021 roku) (United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Seagrasses (data record, 2021 edition))",
          "url": "https://resources.unep-wcmc.org/products/aaa46cd3d3d640b2916b8f0a0ffe07cb"
        }
      ]
    },
    "salt-marshes": {
      "title": "Słone bagna pływowe",
      "meta": "Zarejestrowany areał · globalna mapa z 2017 roku",
      "blurb": "Ile słonych bagien pływowych zmapowano na świecie. Globalna mapa z 2017 roku rejestruje 5 495 089 hektarów słonych bagien w 43 krajach i terytoriach oraz odnotowuje ich występowanie w 99 krajach.",
      "what": "Słone bagna pływowe to nadbrzeżne mokradła na osłoniętych brzegach, gdzie pływy zalewają zioła, trawy i niskie krzewy znoszące sól. Występują na całym świecie, głównie w średnich i wysokich szerokościach geograficznych, a najobszerniejsze leżą poza tropikami, zwłaszcza wokół północnego Atlantyku. W 2017 roku Mcowen i współautorzy opublikowali w czasopiśmie „Biodiversity Data Journal” globalny zbiór danych o występowaniu i areale słonych bagien wraz z pierwszym globalnym szacunkiem znanego areału. Zebrano w nim 350 985 pojedynczych rekordów, a opiekuje się nim i udostępnia go Światowe Centrum Monitoringu Ochrony Przyrody Programu Narodów Zjednoczonych do spraw Ochrony Środowiska.",
      "why": "Słone bagna pływowe dają schronienie rybom, ptakom i wielu innym zwierzętom, łagodzą działanie fal, erozję i sztormowe wezbrania, filtrują spływy i magazynują węgiel. Zbiór danych rejestruje słone bagna w 99 krajach. Naniesione kontury obejmują 5 495 089 hektarów, czyli 54 951 km², w 43 krajach i terytoriach. Ta suma leży przy dolnej granicy wcześniejszych szacunków, które wahały się od 2,2 do 40 milionów hektarów, ponieważ autorzy przyjęli ostrożne podejście do mapowania.",
      "howToRead": "Każdy słupek to zarejestrowany areał w hektarach jednej z dziesięciu największych pozycji w tabeli z artykułu. Od lewej do prawej: kontynentalna część Stanów Zjednoczonych i Hawaje 1 723 410; Australia 1 325 854; Federacja Rosyjska 700 719; Chiny 549 506; kontynentalna Europa, 20 krajów razem, 356 947; Meksyk 272 527; Alaska 161 483; Argentyna 118 870; Kanada 111 274; Wielka Brytania 81 842. Linie siatki oznaczają co 500 000 hektarów. Pozycje pochodzą z badań z lat 1973 do 2015, większość po 2005 roku, a nakładające się kontury przed zsumowaniem powierzchni scalono.",
      "limits": "Suma jest minimum. Autorzy wskazują regiony, gdzie słone bagna są znane, ale brakuje naniesionych konturów: Kanadę, północną Rosję, Amerykę Południową i Afrykę. Według nich kontury obejmują wiele ważnych obszarów Europy, Stanów Zjednoczonych i Australii, więc słupki dla tych miejsc są pełniejsze niż dla miejsc słabiej zmapowanych. Zbiór danych rejestruje, gdzie i kiedy mapowano, i nie pokazuje zmian z roku na rok.",
      "caption": "Zarejestrowany areał słonych bagien w hektarach dla dziesięciu największych pozycji w tabeli globalnej mapy z 2017 roku. Od lewej do prawej: kontynentalna część Stanów Zjednoczonych i Hawaje, Australia, Federacja Rosyjska, Chiny, kontynentalna Europa, Meksyk, Alaska, Argentyna, Kanada i Wielka Brytania. Linie siatki oznaczają co 500 000 hektarów.",
      "credit": "Wykres Fix Planet na podstawie tabeli 1 z pracy Mcowen i in., 2017, „A global map of saltmarshes”, Biodiversity Data Journal 5, e11764. Licencja: Creative Commons Uznanie autorstwa 4.0 Międzynarodowe, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "Mcowen i in.: „Globalna mapa słonych bagien” („Biodiversity Data Journal”, 2017) (Mcowen and others: A global map of saltmarshes (Biodiversity Data Journal, 2017))",
          "url": "https://bdj.pensoft.net/article/11764/"
        },
        {
          "label": "Światowe Centrum Monitoringu Ochrony Przyrody Programu Narodów Zjednoczonych do spraw Ochrony Środowiska: „Globalne rozmieszczenie słonych bagien” (rekord zbioru danych) (United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Saltmarshes (data record))",
          "url": "https://resources.unep-wcmc.org/products/addd1baa160c4d318b84c3b714d3e583"
        }
      ]
    },
    "kelp-forests": {
      "title": "Lasy listownic",
      "meta": "Zaobserwowane zmiany · od 1952 do 2015",
      "blurb": "Jak zmieniały się lasy listownic (kelpów) w 1 138 monitorowanych miejscach od 1952 do 2015 roku. Globalna synteza z 2016 roku wykazała niewielki średni spadek: spadki w 38 procentach ekoregionów z danymi, wzrosty w 27 procentach i brak wykrywalnej zmiany w 35 procentach.",
      "what": "Listownice, czyli kelpy, to duże brunatnice z rzędu Laminariales. Tworzą podwodne lasy wzdłuż wybrzeży wszystkich kontynentów poza Antarktydą i występują w 43 procentach morskich ekoregionów świata; tak nazywa się obszary oceanu o odrębnym zestawie gatunków i warunków. W 2016 roku Krumhansl i współautorzy opublikowali globalną syntezę zmian kelpów, zebraną z zapisów z 1 138 miejsc z lat od 1952 do 2015.",
      "why": "Lasy listownic wspierają zróżnicowane i produktywne zbiorowiska wzdłuż wybrzeży stref umiarkowanych i arktycznych, a same glony szybko reagują na środowisko, więc służą jako wczesny sygnał zmian. Synteza wykazała niewielki średni spadek, chwilowe tempo zmiany 0,018 rocznie, czyli utratę około 1,8 procent rocznie, przy różnicach regionalnych znacznie większych niż ta średnia. Wśród ekoregionów z wystarczającymi danymi w 38 procentach widać spadki, w 27 procentach wzrosty, a w 35 procentach nie wykryto wyraźnej zmiany.",
      "howToRead": "Razem 100 kwadratów przedstawia ekoregiony z danymi. Czytając od lewego górnego rogu, 38 pomarańczowych kwadratów to ekoregiony ze spadkiem, 35 szarych kwadratów to ekoregiony bez wykrywalnej zmiany, a 27 zielonych kwadratów to ekoregiony ze wzrostem. Roczne tempa w ekoregionach ze spadkiem wahały się od 0,015 do 0,18, a w ekoregionach ze wzrostem od 0,015 do 0,11.",
      "limits": "Szeregi czasowe istnieją tylko tam, gdzie badacze monitorowali kelp, a praca zwraca uwagę na niepewność w niektórych regionach z powodu słabego pokrycia danymi w przestrzeni i w czasie. Wśród 35 procent ekoregionów bez wykrywalnej zmiany mogą być miejsca, gdzie skąpe dane ukrywają trend. Praca wiąże spadki z ocieplaniem się wody, na przykład w Zatoce Maine, i z utratą drapieżników żerujących na jeżowcach z powodu ich połowów, a wzrosty z udanym lokalnym zarządzaniem, na przykład przy zachodnim wybrzeżu wyspy Vancouver i w Zatoce Południowokalifornijskiej. Średnia ukrywa tę różnorodność, więc pojedynczy las może iść zupełnie inną drogą.",
      "caption": "Udziały ekoregionów z danymi w globalnej syntezie zmian kelpów z 2016 roku. Czytając od lewego górnego rogu, 38 pomarańczowych kwadratów oznacza spadek, 35 szarych kwadratów brak wykrywalnej zmiany, a 27 zielonych kwadratów wzrost. Każdy kwadrat to jeden procent.",
      "credit": "Wykres Fix Planet na podstawie procentów podanych przez Krumhansl i in., 2016, Proceedings of the National Academy of Sciences 113 (48), strony od 13785 do 13790; artykuł jest dostępny do czytania w ramach opcji otwartego dostępu czasopisma. Użyto tylko opublikowanych procentów, a artykuł nie podaje licencji na dane: https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/",
      "sources": [
        {
          "label": "Krumhansl i in.: „Globalne wzorce zmian lasów kelpowych w ostatnim półwieczu” („Proceedings of the National Academy of Sciences”, 2016, pełny tekst) (Krumhansl and others: Global patterns of kelp forest change over the past half-century (Proceedings of the National Academy of Sciences, 2016, full text))",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/"
        }
      ]
    },
    "blue-carbon": {
      "title": "Błękitny węgiel",
      "meta": "Zasoby węgla · wytyczne z 2013 roku",
      "blurb": "Ile węgla magazynują namorzyny, słone bagna pływowe i łąki trawy morskiej. Międzyrządowy Zespół do spraw Zmian Klimatu podaje około 8 miliardów ton węgla w namorzynach, około 0,8 miliarda w bagnach pływowych i od 4,2 do 8,4 miliarda w łąkach trawy morskiej.",
      "what": "Błękitny węgiel to węgiel wychwytywany przez ocean i ekosystemy przybrzeżne, magazynowany głównie w namorzynach, słonych bagnach pływowych i łąkach trawy morskiej. Suplement z 2013 roku dotyczący mokradeł, który opracował Międzyrządowy Zespół do spraw Zmian Klimatu, daje państwom metody liczenia emisji i pochłaniania na zarządzanych mokradłach przybrzeżnych w krajowych inwentaryzacjach gazów cieplarnianych. Międzynarodowa Inicjatywa Błękitnego Węgla, zespół 34 ekspertów, napisała podręcznik ze standardowymi protokołami poboru próbek, pomiarów laboratoryjnych i analizy zasobów węgla oraz emisji w tych ekosystemach.",
      "why": "Większość węgla w tych ekosystemach leży w glebie, a Narodowa Administracja Oceaniczna i Atmosferyczna Stanów Zjednoczonych zauważa, że węgiel w glebie przybrzeżnej ma często tysiące lat. Rozdział o mokradłach przybrzeżnych w tym Suplemencie podaje światowe zasoby: około 8 miliardów ton węgla w namorzynach, około 0,8 miliarda ton w bagnach pływowych i od 4,2 do 8,4 miliarda ton w łąkach trawy morskiej. Rozdział zapisuje je w petagramach węgla, a jeden petagram to miliard ton. Gdy ekosystemy przybrzeżne zostają uszkodzone, węgiel wraca do powietrza, więc ich ochrona zatrzymuje zmagazynowany węgiel na miejscu.",
      "howToRead": "Trzy słupki to światowe szacunki zasobów w miliardach ton węgla. Od lewej do prawej: namorzyny około 8, bagna pływowe około 0,8, łąki trawy morskiej od 4,2 do 8,4; ostatni pokazano jako unoszący się słupek obejmujący cały przedział. Linie siatki oznaczają co 2 miliardy ton. Zasób to węgiel zmagazynowany w danej chwili i różni się od tego, ile ekosystem pochłania z powietrza w ciągu roku. Trzy szacunki pochodzą z trzech różnych badań z lat 2011 i 2012, więc są jedynie orientacją co do skali. Państwa mogą raportować według standardowych wartości domyślnych albo, gdy mają lepsze dane, według własnych pomiarów.",
      "limits": "Liczby zasobów to szacunki, a przedział dla traw morskich jest szeroki: od 4,2 do 8,4 miliarda ton. Zależą od tego, jak duży jest każdy ekosystem według obecnej wiedzy, a mapowanie jest niepełne dla wszystkich trzech. Wykres pokazuje zasoby, więc nic nie mówi o tym, jak szybko każdy ekosystem gromadzi węgiel; tempo zależy od miejsca i kondycji. Wartości domyślne dają obraz krajowy, a pomiary w terenie mogą się od nich różnić.",
      "caption": "Światowe zasoby węgla w miliardach ton: namorzyny około 8, słone bagna pływowe około 0,8 i łąki trawy morskiej od 4,2 do 8,4, jak podaje Międzyrządowy Zespół do spraw Zmian Klimatu. Linie siatki oznaczają co 2 miliardy ton.",
      "credit": "Wykres Fix Planet na podstawie światowych szacunków zasobów podanych w rozdziale 4 Suplementu z 2013 roku dotyczącego mokradeł Międzyrządowego Zespołu do spraw Zmian Klimatu. Użyto tylko opublikowanych liczb i nie obejmuje ich otwarta licencja. Warunki praw autorskich źródła: https://www.ipcc.ch/copyright/",
      "sources": [
        {
          "label": "Międzyrządowy Zespół do spraw Zmian Klimatu, Grupa Zadaniowa ds. Krajowych Inwentaryzacji Gazów Cieplarnianych: Suplement z 2013 roku do Wytycznych z 2006 roku dla krajowych inwentaryzacji gazów cieplarnianych: mokradła (strona publikacji) (Intergovernmental Panel on Climate Change, Task Force on National Greenhouse Gas Inventories: 2013 Supplement to the 2006 Guidelines for National Greenhouse Gas Inventories: Wetlands (publication page))",
          "url": "https://www.ipcc-nggip.iges.or.jp/public/wetlands/"
        },
        {
          "label": "Międzyrządowy Zespół do spraw Zmian Klimatu: Suplement dotyczący mokradeł, rozdział 4 „Mokradła przybrzeżne” (PDF) (Intergovernmental Panel on Climate Change: Wetlands Supplement, Chapter 4 Coastal Wetlands (PDF))",
          "url": "https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_separate_files/WS_Chp4_Coastal_Wetlands.pdf"
        },
        {
          "label": "Międzynarodowa Inicjatywa Błękitnego Węgla: „Przybrzeżny błękitny węgiel”, metody oceny zasobów węgla i współczynników emisji (strona podręcznika) (International Blue Carbon Initiative: Coastal Blue Carbon, methods for assessing carbon stocks and emissions factors (manual page))",
          "url": "https://www.thebluecarboninitiative.org/manual"
        },
        {
          "label": "Narodowa Administracja Oceaniczna i Atmosferyczna Stanów Zjednoczonych, Narodowa Służba Oceaniczna: „Czym jest błękitny węgiel?” (National Oceanic and Atmospheric Administration, National Ocean Service: What is Blue Carbon?)",
          "url": "https://oceanservice.noaa.gov/facts/bluecarbon.html"
        }
      ]
    }
  },
  "lv": {
    "mangroves": {
      "title": "Mangrovju meži",
      "meta": "Platība un izmaiņas · no 1985. līdz 2025. gadam",
      "blurb": "Kur tropu krastos aug mangrovju meži un kā to platība mainījusies četrās desmitgadēs. Projekts «Globālā mangrovju novērošana» ziņo, ka no 1985. līdz 2025. gadam pasaule ieguvusi neto 47 707 hektārus, vienās valstīs platība pieaugusi, citās ievērojami samazinājusies.",
      "what": "Mangrovju meži ir sāltūrīgu koku meži, kas aug tur, kur paisums applūdina tropu un subtropu krastus. Projektu «Globālā mangrovju novērošana» kopīgi vada Aberistvitas Universitāte, Zemes novērošanas uzņēmums, starptautiska mitrāju aizsardzības organizācija, Amerikas Savienoto Valstu dabas aizsardzības organizācija un Japānas Aerokosmiskās izpētes aģentūra. Tā jaunākais atjauninājums dod mangrovju platības karti par katru gadu no 1985. līdz 2025. gadam, kopā 41 gada karti, kas veidota no optiskajiem satelītattēliem un garo viļņu radara attēliem. Jaunākās bāzes kartes rāda detaļas līdz 10 metriem, bet zaudējumu un atjaunošanās kartes līdz 30 metriem.",
      "why": "Mangrovju meži sargā piekrastes kopienas no vētras uzplūdiem un jūras līmeņa celšanās, atbalsta zvejniecību un iedzīvotāju iztiku, dod patvērumu bagātai dzīvajai dabai un, pēc starptautiskās mitrāju aizsardzības organizācijas datiem, uzkrāj oglekli uz hektāru līdz pat četras reizes ātrāk nekā meži uz sauszemes. Projekts ziņo, ka saglabājušies 147 283 km² mangrovju 128 valstīs un teritorijās. No 1985. līdz 2025. gadam pasaule ieguvusi neto 47 707 hektārus mangrovju, tas ir 477 km². Šī summa ir valstu rezultātu bilance. Indija ieguvusi 1 180 km², Austrālija 1 396 km², bet Indonēzija, kurai ir lielākā mangrovju platība, kopš 1985. gada zaudējusi neto 2 043 km², Mjanma 1 457 km².",
      "howToRead": "Karte rāda Dienvidaustrumāziju un Jaungvineju, reģionu ar Indonēziju; izmantoti projekta agrākā izdevuma dati par 1996. un 2020. gadu. Zaļā krāsa norāda mangrovju mežus, kas bija abos gados, oranžā tos, kas bija 1996. gadā un līdz 2020. gadam pazuda, zilā tos, kuru 1996. gadā nebija un kas ir 2020. gadā. Katra šūna rāda, kādu tās platības daļu aizņem mangrovju meži, tāpēc šauras joslas izskatās blāvas. Pasaules skaitļi tekstā ņemti no jaunākā atjauninājuma, kas aptver laiku no 1985. līdz 2025. gadam un glabā bruto zaudējumus un bruto pieaugumu atsevišķos slāņos, tāpēc izciršanu vienā vietā var redzēt atsevišķi no atjaunošanās citā. Jaunāko bāzes karšu precizitāte tiek lēsta 93 procentu apmērā.",
      "limits": "Neto pieaugums 477 km² pasaulē ir neliels līdzās 147 283 km², kas saglabājušies, un tas slēpj lielus vietējus zaudējumus. Starptautiskā mitrāju aizsardzības organizācija norāda, ka pieaugums galvenokārt atrodas ap upēm un deltām un var būt saistīts ar cilvēka darbību augšpus upes, piemēram, ieguvi un mežu izciršanu, kas maina ūdens un nogulumu plūsmu. Cita pieauguma daļa nāk no dabiskas atjaunošanās, stādījumiem un atjaunošanas. 20. gadsimta 80. un 90. gadu kartes dažos reģionos balstās uz mazāk satelītattēlu, tāpēc agrīnie gadi ir mazāk droši. Abi datu izdevumi dod atšķirīgus rezultātus, tāpēc skaitli vērts minēt kopā ar izdevumu.",
      "caption": "Mangrovju platība Dienvidaustrumāzijā un Jaungvinejā 1996. un 2020. gadā pēc projekta «Globālā mangrovju novērošana» izdevuma par laiku no 1996. līdz 2020. gadam. Zaļā krāsa ir mangrovju meži abos gados, oranžā tikai 1996. gadā, zilā tikai 2020. gadā. Katra šūna rāda, kādu tās platības daļu aizņem mangrovju meži.",
      "credit": "Karte, ko izveidoja Fix Planet pēc projekta «Globālā mangrovju novērošana» datiem par 1996. un 2020. gadu (Bunting u.c., 2022), kas pieejami caur Esri Living Atlas. ©Global Mangrove Watch. Krasta līnija: Natural Earth, sabiedrisks īpašums (https://www.naturalearthdata.com/about/terms-of-use/). Licence: Creative Commons „Autorības norāde 4.0 Starptautiskā”, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "«Globālā mangrovju novērošana»: platforma karšu aplūkošanai (Global Mangrove Watch: platform for exploring the maps)",
          "url": "https://www.globalmangrovewatch.org/"
        },
        {
          "label": "Starptautiskā mitrāju aizsardzības organizācija: «Labas ziņas par mangrovju mežiem pasaulē slēpj lielus zaudējumus dažos reģionos, liecina atjauninātais projekts» (2026. gada 23. jūlijs) (Wetlands International: Good news for mangroves globally masks big losses in some regions, according to updated Global Mangrove Watch (23 July 2026))",
          "url": "https://www.wetlands.org/good-news-for-mangroves-globally-masks-big-losses-in-some-regions-according-to-updated-global-mangrove-watch/"
        },
        {
          "label": "Japānas Aerokosmiskās izpētes aģentūra, Zemes novērošanas pētījumu centrs: «Globālās mangrovju novērošanas» datu kopa (Japan Aerospace Exploration Agency, Earth Observation Research Center: Global Mangrove Watch dataset)",
          "url": "https://www.eorc.jaxa.jp/ALOS/en/dataset/gmw_e.htm"
        },
        {
          "label": "Globālā mangrovju alianse: «Globālās mangrovju novērošanas» atjauninājuma atklāšana (Global Mangrove Alliance: Global Mangrove Watch 4.1 Launch)",
          "url": "https://www.mangrovealliance.org/news/global-mangrove-watch-4-launch"
        },
        {
          "label": "Esri Living Atlas: «Globālās mangrovju novērošanas» laikrinda (izdevums par laiku no 1996. līdz 2020. gadam, kartes avots) (Esri Living Atlas: Global Mangrove Watch Time Series (1996 to 2020 edition, source of the map))",
          "url": "https://www.arcgis.com/home/item.html?id=3a08770f1929427fb7d33d509d27969e"
        }
      ]
    },
    "seagrass-meadows": {
      "title": "Jūraszāļu pļavas",
      "meta": "Kartētā platība · globālais novērtējums 2020. gadā",
      "blurb": "Kur gar pasaules krastiem ir kartētas jūraszāļu pļavas un cik liela ir kartētā platība. Globālajā novērtējumā 2020. gadā atrasti 160 387 km², kas kartēti ar mērenu vai augstu ticamību 103 valstīs un teritorijās.",
      "what": "Jūraszāles ir ziedaugi, kas aug seklos piekrastes ūdeņos un veido zemūdens pļavas. Visplašāko jūraszāļu karšu krājumu glabā Apvienoto Nāciju Vides programmas Pasaules dabas aizsardzības monitoringa centrs. 2020. gadā McKenzie un līdzautori apvienoja šīs kartes ar citām publiskām kartēm jūraszāļu platības novērtējumā pa valstīm; darbs publicēts žurnālā «Environmental Research Letters». Platības novērtējumiem viņi izmantoja tikai kartētos laukumus, bet punktveida ierakstus, piemēram, herbārija paraugus, izmantoja tikai kā jūraszāļu klātbūtnes pierādījumu.",
      "why": "Pēc pētījuma datiem jūraszāļu pļavas ir liels oglekļa krājums un zivju dzīvotne, un simtiem miljonu cilvēku no tām ir atkarīgi pārtikā un iztikā. Novērtējums ir 160 387 km² jūraszāļu, kas kartēti ar mērenu vai augstu ticamību 103 valstīs un teritorijās, plus vēl 106 175 km² ar zemu ticamību vēl 33 valstīs, kopā 266 562 km². Lielākā apkopotā platība ir Austrālijai, 83 013 km², tas ir vairāk nekā 31 procents no zināmās summas. Agrākie novērtējumi literatūrā svārstījās no 177 000 līdz 600 000 km².",
      "howToRead": "Katra josla rāda platību, kas kartēta ar mērenu vai augstu ticamību vienā no sešiem jūraszāļu reģioniem, pētījuma tabulas secībā: mērenā Ziemeļatlantija 3 229 km², tropu Atlantija 44 222, Vidusjūra 14 167, otrs mērenais ziemeļu reģions 1 866, tropu Indijas un Klusā okeāna reģions 87 791 un mērenie dienvidu okeāni 9 112. Sešas joslas kopā dod 160 387 km². Kur vairākas kartes pārklājās, pārklājumu skaitīja vienu reizi, bet karšu daļas, kas dziļākas par 200 metriem, izņēma.",
      "limits": "Kartētā platība ir laukums, ko kāds ir uzzīmējis kartē, un tā ir mazāka par jūraszāļu platību, kas pastāv patiesībā. Pētījumā minēti lieli krasti, kas joprojām vāji kartēti: Dienvidaustrumāzijas salas, Dienvidamerikas austrumu krasts un Āfrikas rietumu krasts; par Filipīnām teikts, ka tur iespējams ir plašas pļavas, kas lielākoties vēl nav kartētas. Avotu kartes sniedzas no 1930. līdz 2015. gadam un ietver gan ekspertu skices, gan laukā pārbaudītas apsekošanas, tāpēc kvalitāte valstīs atšķiras. Skaitļi dod vienu apkopotu ainu un nerāda, vai jūraszāļu platība ir pieaugusi vai samazinājusies.",
      "caption": "Jūraszāļu platība, kas kartēta ar mērenu vai augstu ticamību sešos jūraszāļu reģionos, pēc 2020. gada globālā novērtējuma. No kreisās uz labo: mērenā Ziemeļatlantija 3 229 km², tropu Atlantija 44 222, Vidusjūra 14 167, otrs mērenais ziemeļu reģions 1 866, tropu Indijas un Klusā okeāna reģions 87 791 un mērenie dienvidu okeāni 9 112. Režģa līnijas atzīmē katrus 20 000 km².",
      "credit": "Diagramma, ko izveidoja Fix Planet pēc 1. tabulas McKenzie u.c. darbā, 2020, «The global distribution of seagrass meadows», Environmental Research Letters 15, 074041. Licence: Creative Commons „Autorības norāde 4.0 Starptautiskā”, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "McKenzie u.c.: «Jūraszāļu pļavu globālais izplatījums» («Environmental Research Letters», 2020, PDF atvērtā piekļuvē) (McKenzie and others: The global distribution of seagrass meadows (Environmental Research Letters, 2020, open access PDF))",
          "url": "https://www.seagrasswatch.org/wp-content/uploads/Resources/Publications/2020/PDF/McKenzie-et-al_2020.pdf"
        },
        {
          "label": "Apvienoto Nāciju Vides programmas Pasaules dabas aizsardzības monitoringa centrs: «Jūraszāļu globālais izplatījums» (datu kopas ieraksts, 2021. gada izdevums) (United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Seagrasses (data record, 2021 edition))",
          "url": "https://resources.unep-wcmc.org/products/aaa46cd3d3d640b2916b8f0a0ffe07cb"
        }
      ]
    },
    "salt-marshes": {
      "title": "Sāļie paisuma purvi",
      "meta": "Reģistrētā platība · globālā karte 2017. gadā",
      "blurb": "Cik daudz sāļo paisuma purvu ir kartēts pasaulē. Globālā karte 2017. gadā reģistrē 5 495 089 hektārus sāļo purvu 43 valstīs un teritorijās un atzīmē to sastopamību 99 valstīs.",
      "what": "Sāļie paisuma purvi ir piekrastes mitrāji aizsargātos krastos, kur paisums applūdina sāli panesošus zālaugus, stiebrzāles un zemus krūmus. Tie sastopami visā pasaulē, galvenokārt vidējos un augstos platuma grādos, un plašākie atrodas ārpus tropiem, īpaši ap Ziemeļatlantiju. 2017. gadā Mcowen un līdzautori žurnālā «Biodiversity Data Journal» publicēja globālu datu kopu par sāļo purvu sastopamību un platību ar pirmo globālo zināmās platības novērtējumu. Tajā apkopoti 350 985 atsevišķi ieraksti, un to kopj un izplata Apvienoto Nāciju Vides programmas Pasaules dabas aizsardzības monitoringa centrs.",
      "why": "Sāļie paisuma purvi dod patvērumu zivīm, putniem un daudziem citiem dzīvniekiem, mīkstina viļņu darbību, eroziju un vētras uzplūdus, filtrē notekas un uzkrāj oglekli. Datu kopā sāļie purvi reģistrēti 99 valstīs. Uzzīmētie kontūri aptver 5 495 089 hektārus, tas ir 54 951 km², 43 valstīs un teritorijās. Šī summa atrodas agrāko novērtējumu apakšējā malā, kas svārstījās no 2,2 līdz 40 miljoniem hektāru, jo autori izvēlējās piesardzīgu pieeju kartēšanā.",
      "howToRead": "Katra josla rāda reģistrēto platību hektāros vienam no desmit lielākajiem ierakstiem raksta tabulā. No kreisās uz labo: Amerikas Savienoto Valstu kontinentālā daļa un Havaju salas 1 723 410; Austrālija 1 325 854; Krievijas Federācija 700 719; Ķīna 549 506; kontinentālā Eiropa, 20 valstis kopā, 356 947; Meksika 272 527; Aļaska 161 483; Argentīna 118 870; Kanāda 111 274; Lielbritānija 81 842. Režģa līnijas atzīmē katrus 500 000 hektārus. Ieraksti balstās uz apsekojumiem no 1973. līdz 2015. gadam, lielākoties pēc 2005. gada, un pārklājošos kontūrus pirms platību saskaitīšanas apvienoja.",
      "limits": "Kopsumma ir minimums. Autori min reģionus, kur sāļie purvi ir zināmi, bet kontūru kartē trūkst: Kanādu, Krievijas ziemeļus, Dienvidameriku un Āfriku. Pēc viņu teiktā, kontūri aptver daudzas svarīgas vietas Eiropā, Amerikas Savienotajās Valstīs un Austrālijā, tāpēc joslas šīm vietām ir pilnīgākas nekā joslas vietām ar mazāku kartēšanu. Datu kopa reģistrē, kur un kad kartēts, un nerāda izmaiņas no gada uz gadu.",
      "caption": "Reģistrētā sāļo purvu platība hektāros desmit lielākajiem ierakstiem 2017. gada globālās kartes tabulā. No kreisās uz labo: Amerikas Savienoto Valstu kontinentālā daļa un Havaju salas, Austrālija, Krievijas Federācija, Ķīna, kontinentālā Eiropa, Meksika, Aļaska, Argentīna, Kanāda un Lielbritānija. Režģa līnijas atzīmē katrus 500 000 hektārus.",
      "credit": "Diagramma, ko izveidoja Fix Planet pēc 1. tabulas Mcowen u.c. darbā, 2017, «A global map of saltmarshes», Biodiversity Data Journal 5, e11764. Licence: Creative Commons „Autorības norāde 4.0 Starptautiskā”, https://creativecommons.org/licenses/by/4.0/",
      "sources": [
        {
          "label": "Mcowen u.c.: «Sāļo purvu globālā karte» («Biodiversity Data Journal», 2017) (Mcowen and others: A global map of saltmarshes (Biodiversity Data Journal, 2017))",
          "url": "https://bdj.pensoft.net/article/11764/"
        },
        {
          "label": "Apvienoto Nāciju Vides programmas Pasaules dabas aizsardzības monitoringa centrs: «Sāļo purvu globālais izplatījums» (datu kopas ieraksts) (United Nations Environment Programme World Conservation Monitoring Centre: Global Distribution of Saltmarshes (data record))",
          "url": "https://resources.unep-wcmc.org/products/addd1baa160c4d318b84c3b714d3e583"
        }
      ]
    },
    "kelp-forests": {
      "title": "Lamināriju meži",
      "meta": "Novērotās izmaiņas · no 1952. līdz 2015. gadam",
      "blurb": "Kā lamināriju (kelpu) meži mainījušies 1 138 uzraudzītās vietās no 1952. līdz 2015. gadam. Globālajā apkopojumā 2016. gadā atrasts neliels vidējs samazinājums: kritums 38 procentos ekoreģionu ar datiem, pieaugums 27 procentos un konstatējamu izmaiņu nav 35 procentos.",
      "what": "Laminārijas jeb kelpi ir lielas brūnaļģes no kārtas Laminariales. Tās veido zemūdens mežus gar visu kontinentu krastiem, izņemot Antarktīdu, un sastopamas 43 procentos pasaules jūras ekoreģionu; tā sauc okeāna apgabalus ar īpašu sugu un apstākļu kopumu. 2016. gadā Krumhansl un līdzautori publicēja globālu kelpu izmaiņu apkopojumu, kas veidots no ierakstiem 1 138 vietās no 1952. līdz 2015. gadam.",
      "why": "Lamināriju meži uztur daudzveidīgas un produktīvas kopienas mērenā un Arktikas joslas krastos, un paši aļģu meži ātri reaģē uz vidi, tāpēc kalpo kā agrīna pārmaiņu zīme. Apkopojums atrada nelielu vidējo samazinājumu, momentāno pārmaiņu ātrumu 0,018 gadā, tas ir aptuveni 1,8 procentu zudumu gadā, ar reģionālām atšķirībām, kas ir daudz lielākas par šo vidējo. Starp ekoreģioniem ar pietiekamiem datiem 38 procentos redzams kritums, 27 procentos pieaugums, bet 35 procentos izmaiņas netika konstatētas.",
      "howToRead": "Kopā 100 kvadrātu apzīmē ekoreģionus ar datiem. Lasot no augšējā kreisā stūra, 38 oranži kvadrāti ir ekoreģioni ar kritumu, 35 pelēki kvadrāti ir ekoreģioni bez konstatējamām izmaiņām, bet 27 zaļi kvadrāti ir ekoreģioni ar pieaugumu. Gada ātrumi ekoreģionos ar kritumu svārstījās no 0,015 līdz 0,18, bet ekoreģionos ar pieaugumu no 0,015 līdz 0,11.",
      "limits": "Novērojumu rindas ir tikai tur, kur pētnieki kelpu ir uzraudzījuši, un darbā norādīta nenoteiktība dažos reģionos, jo datu aptvērums telpā un laikā ir vājš. Starp 35 procentiem ekoreģionu bez konstatējamām izmaiņām var būt vietas, kur nepilnīgi dati slēpj tendenci. Darbs saista kritumu ar ūdens sasilšanu, piemēram, Meinas līcī, un ar jūras ežu plēsēju zudumu zvejas dēļ, bet pieaugumu ar sekmīgu vietējo pārvaldību, piemēram, pie Vankūveras salas rietumu krasta un Dienvidkalifornijas līcī. Vidējais slēpj šo dažādību, tāpēc atsevišķs mežs var iet pavisam citu ceļu.",
      "caption": "Ekoreģionu ar datiem daļas 2016. gada globālajā kelpu izmaiņu apkopojumā. Lasot no augšējā kreisā stūra, 38 oranži kvadrāti rāda kritumu, 35 pelēki kvadrāti bez konstatējamām izmaiņām, bet 27 zaļi kvadrāti pieaugumu. Katrs kvadrāts ir viens procents.",
      "credit": "Diagramma, ko izveidoja Fix Planet pēc procentiem, ko publicēja Krumhansl u.c., 2016, Proceedings of the National Academy of Sciences 113 (48), lappuses no 13785 līdz 13790; raksts ir brīvi lasāms žurnāla atvērtās piekļuves iespējas ietvaros. Izmantoti tikai publicētie procenti, un rakstā datu licence nav norādīta: https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/",
      "sources": [
        {
          "label": "Krumhansl u.c.: «Kelpu mežu izmaiņu globālās likumsakarības pēdējā pusgadsimtā» («Proceedings of the National Academy of Sciences», 2016, pilns teksts) (Krumhansl and others: Global patterns of kelp forest change over the past half-century (Proceedings of the National Academy of Sciences, 2016, full text))",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5137772/"
        }
      ]
    },
    "blue-carbon": {
      "title": "Zilais ogleklis",
      "meta": "Oglekļa krājumi · 2013. gada vadlīnijas",
      "blurb": "Cik daudz oglekļa uzkrāj mangrovju meži, sāļie paisuma purvi un jūraszāļu pļavas. Klimata pārmaiņu starpvaldību padome min aptuveni 8 miljardus tonnu oglekļa mangrovju mežos, aptuveni 0,8 miljardu paisuma purvos un no 4,2 līdz 8,4 miljardiem jūraszāļu pļavās.",
      "what": "Zilais ogleklis ir ogleklis, ko uztver okeāns un piekrastes ekosistēmas; visvairāk to glabā mangrovju meži, sāļie paisuma purvi un jūraszāļu pļavas. Klimata pārmaiņu starpvaldību padomes 2013. gada mitrāju papildinājums dod valstīm metodes, kā siltumnīcefekta gāzu inventarizācijās uzskaitīt emisijas un piesaisti pārvaldītos piekrastes mitrājos. Starptautiskā Zilā oglekļa iniciatīva, 34 ekspertu komanda, uzrakstīja rokasgrāmatu ar standarta protokoliem paraugu ņemšanai, laboratorijas mērījumiem un oglekļa krājumu un emisiju analīzei šajās ekosistēmās.",
      "why": "Lielākā daļa oglekļa šajās ekosistēmās atrodas augsnē, un Amerikas Savienoto Valstu Nacionālā okeānu un atmosfēras pārvalde norāda, ka ogleklis piekrastes augsnē bieži ir tūkstošiem gadu vecs. Papildinājuma nodaļā par piekrastes mitrājiem minēti pasaules krājumi: aptuveni 8 miljardi tonnu oglekļa mangrovju mežos, aptuveni 0,8 miljardu tonnu paisuma purvos un no 4,2 līdz 8,4 miljardiem tonnu jūraszāļu pļavās. Nodaļā tos raksta petagramos oglekļa, un viens petagrams ir viens miljards tonnu. Kad piekrastes ekosistēmas tiek bojātas, ogleklis atgriežas gaisā, tāpēc to aizsardzība saglabā uzkrāto oglekli uz vietas.",
      "howToRead": "Trīs joslas rāda pasaules krājumu novērtējumus miljardos tonnu oglekļa. No kreisās uz labo: mangrovju meži aptuveni 8, paisuma purvi aptuveni 0,8, jūraszāļu pļavas no 4,2 līdz 8,4; pēdējā parādīta kā peldoša josla, kas aptver visu diapazonu. Režģa līnijas atzīmē katrus 2 miljardus tonnu. Krājums ir ogleklis, kas uzkrāts konkrētā brīdī, un tas atšķiras no tā, cik ekosistēma gadā izņem no gaisa. Trīs novērtējumi nāk no trim dažādiem pētījumiem 2011. un 2012. gadā, tāpēc tie ir tikai aptuvens mēroga rādītājs. Valstis var ziņot pēc standarta noklusējuma vērtībām vai, ja ir labāki dati, pēc saviem mērījumiem.",
      "limits": "Krājumu skaitļi ir novērtējumi, un jūraszāļu diapazons ir plašs: no 4,2 līdz 8,4 miljardiem tonnu. Tie atkarīgi no tā, cik liela, pēc pašreizējām zināšanām, ir katra ekosistēma, un kartēšana ir nepilnīga visām trim. Diagramma rāda krājumus, tāpēc tā neko neteic par to, cik ātri katra ekosistēma uzkrāj oglekli; ātrums mainās atkarībā no vietas un stāvokļa. Noklusējuma vērtības dod valsts mēroga ainu, bet mērījumi uz vietas var no tām atšķirties.",
      "caption": "Pasaules oglekļa krājumi miljardos tonnu: mangrovju meži aptuveni 8, sāļie paisuma purvi aptuveni 0,8 un jūraszāļu pļavas no 4,2 līdz 8,4, kā min Klimata pārmaiņu starpvaldību padome. Režģa līnijas atzīmē katrus 2 miljardus tonnu.",
      "credit": "Diagramma, ko izveidoja Fix Planet pēc pasaules krājumu novērtējumiem, kas minēti Klimata pārmaiņu starpvaldību padomes 2013. gada mitrāju papildinājuma 4. nodaļā. Izmantoti tikai publicētie skaitļi, un uz tiem neattiecas atvērta licence. Avota autortiesību noteikumi: https://www.ipcc.ch/copyright/",
      "sources": [
        {
          "label": "Klimata pārmaiņu starpvaldību padome, Nacionālo siltumnīcefekta gāzu inventarizāciju darba grupa: 2013. gada papildinājums 2006. gada vadlīnijām nacionālajām siltumnīcefekta gāzu inventarizācijām: mitrāji (publikācijas lapa) (Intergovernmental Panel on Climate Change, Task Force on National Greenhouse Gas Inventories: 2013 Supplement to the 2006 Guidelines for National Greenhouse Gas Inventories: Wetlands (publication page))",
          "url": "https://www.ipcc-nggip.iges.or.jp/public/wetlands/"
        },
        {
          "label": "Klimata pārmaiņu starpvaldību padome: Mitrāju papildinājums, 4. nodaļa «Piekrastes mitrāji» (PDF) (Intergovernmental Panel on Climate Change: Wetlands Supplement, Chapter 4 Coastal Wetlands (PDF))",
          "url": "https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_separate_files/WS_Chp4_Coastal_Wetlands.pdf"
        },
        {
          "label": "Starptautiskā Zilā oglekļa iniciatīva: «Piekrastes zilais ogleklis», metodes oglekļa krājumu un emisiju faktoru novērtēšanai (rokasgrāmatas lapa) (International Blue Carbon Initiative: Coastal Blue Carbon, methods for assessing carbon stocks and emissions factors (manual page))",
          "url": "https://www.thebluecarboninitiative.org/manual"
        },
        {
          "label": "Amerikas Savienoto Valstu Nacionālā okeānu un atmosfēras pārvalde, Nacionālais okeānu dienests: «Kas ir zilais ogleklis?» (National Oceanic and Atmospheric Administration, National Ocean Service: What is Blue Carbon?)",
          "url": "https://oceanservice.noaa.gov/facts/bluecarbon.html"
        }
      ]
    }
  }
};
