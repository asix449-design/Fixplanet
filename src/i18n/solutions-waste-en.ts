import type { WasteDetailCopy, WasteEncyclopediaSlug } from '../data/solutions-waste';
import type { SolutionCopy } from '../data/solutions';

const depositHtml =
  'https://www.oecd.org/en/publications/deposit-refund-systems-and-the-interplay-with-additional-mandatory-extended-producer-responsibility-policies_a80f4b26-en.html';
const depositPdf =
  'https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/12/deposit-refund-systems-and-the-interplay-with-additional-mandatory-extended-producer-responsibility-policies_c92a063b/a80f4b26-en.pdf';
const singleUse =
  'https://environment.ec.europa.eu/topics/plastics/single-use-plastics_en';
const packaging =
  'https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en';
const eprTopic =
  'https://www.oecd.org/en/topics/extended-producer-responsibility-and-economic-instruments.html';
const eprFacts =
  'https://www.oecd.org/en/publications/extended-producer-responsibility_67587b0b-en.html';
const eprHighlights =
  'https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/extended-producer-responsibility-and-economic-instruments/Extended-producer-responsibility-Policy-Highlights-2016-web.pdf';
const gemPage =
  'https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-waste-Monitor-2024.aspx';
const gemPdf = 'https://ewastemonitor.info/wp-content/uploads/2024/12/GEM_2024_EN_11_NOV-web.pdf';
const gemPub = 'https://www.itu.int/pub/D-GEN-E_WASTE.01-2024';
const ieaOutlook =
  'https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries';
const ieaMinerals =
  'https://www.iea.org/reports/recycling-of-critical-minerals/executive-summary';
const ieaSupply = 'https://www.iea.org/reports/ev-battery-supply-chain-sustainability';
const batteries = 'https://environment.ec.europa.eu/topics/waste-and-recycling/batteries_en';
const fwIndex = 'https://www.unep.org/resources/publication/food-waste-index-report-2024';
const fwPdf =
  'https://wedocs.unep.org/bitstream/handle/20.500.11822/45230/food_waste_index_report_2024.pdf?sequence=1&isAllowed=y';
const fwKey =
  'https://wedocs.unep.org/bitstream/handle/20.500.11822/45275/Food-Waste-Index-2024-key-messages.pdf?sequence=8&isAllowed=y';
const fwScale = 'https://www.epa.gov/sustainable-management-food/wasted-food-scale';
const fwGoal =
  'https://www.epa.gov/sustainable-management-food/united-states-2030-food-loss-and-waste-reduction-goal';

const krefeld =
  'https://commons.wikimedia.org/wiki/File:Krefeld,_Germany_-_Bottle_reverse_vending_machine_in_Rewe.jpg';
const almeria =
  'https://commons.wikimedia.org/wiki/File:Contenedores_de_reciclaje_Almer%C3%ADa.jpg';
const tsukuba =
  'https://commons.wikimedia.org/wiki/File:Electronic_junk_separation_in_view_of_recycling_3.jpg';
const munich =
  'https://commons.wikimedia.org/wiki/File:Lithium-Ion_Battery_for_BMW_i3_-_Battery_Pack.JPG';
const produce =
  'https://commons.wikimedia.org/wiki/File:Treasure_trove_of_wasted_food.JPG';
const ccBy = 'https://creativecommons.org/licenses/by/4.0/';
const ccBySa4 = 'https://creativecommons.org/licenses/by-sa/4.0/';
const ccBySa3 = 'https://creativecommons.org/licenses/by-sa/3.0/';
const cc0 = 'https://creativecommons.org/publicdomain/zero/1.0/';

export const grid: Record<WasteEncyclopediaSlug, SolutionCopy> = {
  'deposit-return-systems': {
    problemTitle: 'Empty drinks packaging lost to litter and mixed bins',
    fixTitle: 'Deposit-return systems',
    problem: 'Empty drinks packaging lost to litter and mixed bins',
    fix: 'A small deposit on a bottle or can is refunded when the empty container comes back to a collection point. Some schemes collect more than 90 percent of the containers they cover, and litter surveys record fewer of those containers on the ground.',
    imageAlt:
      'The loading opening of a reverse vending machine for deposit bottles and cans in a supermarket in Krefeld, Germany.',
    sourceLabel: 'OECD, Deposit-refund systems',
  },
  'extended-producer-responsibility-packaging': {
    problemTitle: 'Packaging waste keeps growing while municipalities carry the cost of collecting it',
    fixTitle: 'Extended producer responsibility for packaging',
    problem: 'Packaging waste keeps growing while municipalities carry the cost of collecting it',
    fix: 'Extended producer responsibility makes the companies that put packaging on the market responsible for it after use, by paying for collection and recycling or by organising them. In the European Union, packaging waste reached 186.5 kg per person in 2022.',
    imageAlt:
      'Recycling containers in Almería, Spain, for paper and cardboard, glass, organic waste and packaging, and plastic and metal.',
    sourceLabel: 'European Commission, Packaging waste',
  },
  'e-waste-recycling': {
    problemTitle: 'Discarded electronics pile up faster than formal recycling grows',
    fixTitle: 'E-waste collection and recycling',
    problem: 'Discarded electronics pile up faster than formal recycling grows',
    fix: 'Documented collection and recycling of discarded electronics recovers copper, gold and other metals. In 2022 the world generated 62 billion kg of e-waste, and 22.3 percent of it was documented as formally collected and recycled.',
    imageAlt:
      'Shredded circuit boards and electronic components sorted for material recovery, shown as an exhibit in Tsukuba, Japan.',
    sourceLabel: 'ITU, The Global E-waste Monitor 2024',
  },
  'lithium-ion-battery-recycling': {
    problemTitle:
      'Critical minerals sit in batteries that will reach recyclers in volume only from about 2035',
    fixTitle: 'Lithium-ion battery recycling',
    problem:
      'Critical minerals sit in batteries that will reach recyclers in volume only from about 2035',
    fix: 'Recycling lithium-ion batteries recovers lithium, nickel, cobalt and copper, first from manufacturing scrap and later from packs that leave vehicles and storage systems. The International Energy Agency finds that recycling capacity today exceeds the feedstock available.',
    imageAlt:
      'An open lithium-ion battery pack for an electric car on show at a trade fair in Munich, with its modules and control electronics exposed.',
    sourceLabel: 'IEA, Electric vehicle batteries',
  },
  'food-waste-reduction': {
    problemTitle: 'Edible food is thrown away in shops, kitchens and homes',
    fixTitle: 'Food-waste reduction',
    problem: 'Edible food is thrown away in shops, kitchens and homes',
    fix: 'Cutting food waste keeps meals in the human food chain and saves the farm resources already spent on them. In 2022 the world wasted 1.05 billion tonnes of food, which is 19 percent of the food available to consumers.',
    imageAlt: 'Fresh vegetables and fruit discarded from a hypermarket after one or two days on the shelves.',
    sourceLabel: 'UNEP, Food Waste Index Report 2024',
  },
};

export const detail: Record<WasteEncyclopediaSlug, WasteDetailCopy> = {
  'deposit-return-systems': {
    title: 'Deposit-return systems',
    hook: grid['deposit-return-systems'].fix,
    imageAlt: grid['deposit-return-systems'].imageAlt,
    caption:
      'The loading opening of a reverse vending machine for deposit bottles and cans in a supermarket in Krefeld, Germany.',
    credit: `Photo: Alexis Jazz, via Wikimedia Commons, cropped, licence Creative Commons Attribution 4.0 (${ccBy}). File page: ${krefeld}`,
    what: [
      'In a deposit-return system a customer pays a deposit when buying a drink and gets that money back when the empty container is returned to a collection point. The Organisation for Economic Co-operation and Development describes such a system as one form of extended producer responsibility when producers finance and operate it. Collection points are staffed or use reverse vending machines, which take the empty containers automatically.',
    ],
    why: [
      'According to the Organisation for Economic Co-operation and Development, some jurisdictions with a deposit-return system collect more than 90 percent of the targeted containers, and litter surveys show items under deposit reduced by 40 to 90 percent. Germany, Lithuania and Norway run a deposit-return system alongside a take-back requirement for packaging. The European Commission lists a separate collection target of 77 percent for single-use plastic bottles by 2025, rising to 90 percent by 2029.',
    ],
    read: [
      'The return rate is the share of deposit containers sold that come back for a refund. The same analysis says the size of the deposit drives consumers\' incentive to take part and correlates with higher return rates, and a chart shows markets with higher minimum deposits and higher return rates. Unredeemed deposits can partly offset the running costs, and the analysis suggests considering collection targets or a tax tied to the collection rate, so that operators aim for high return rates while relying only partly on unclaimed deposits.',
    ],
    limits: [
      'Compared with kerbside collection, the extra cost of collecting each additional container is usually higher in a deposit-return system, and revenue from selling the material in most cases covers only part of it, so such systems typically need producer fees or public support. Reverse vending machines require significant capital investment. Where a kerbside packaging scheme already exists, a deposit-return system takes valuable material away from it, so the rules need to define which products belong to which scheme, and each product should fall under only one of them.',
    ],
    sources: [
      {
        label:
          'Organisation for Economic Co-operation and Development (OECD): Deposit-refund systems and the interplay with additional mandatory extended producer responsibility policies',
        url: depositHtml,
      },
      {
        label:
          'Organisation for Economic Co-operation and Development (OECD): Deposit-refund systems and the interplay with additional mandatory extended producer responsibility policies, OECD Environment Working Papers No. 208 (PDF)',
        url: depositPdf,
      },
      {
        label: 'European Commission: Single-use plastics',
        url: singleUse,
      },
    ],
  },
  'extended-producer-responsibility-packaging': {
    title: 'Extended producer responsibility for packaging',
    hook: grid['extended-producer-responsibility-packaging'].fix,
    imageAlt: grid['extended-producer-responsibility-packaging'].imageAlt,
    caption:
      'Recycling containers in Almería, Spain, for paper and cardboard, glass, organic waste and packaging, and plastic and metal.',
    credit: `Photo: Schumi4ever, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 4.0 (${ccBySa4}). File page: ${almeria}`,
    what: [
      'Extended producer responsibility is a policy approach that makes producers responsible for their products along the entire lifecycle, including after consumers discard them. The Organisation for Economic Co-operation and Development describes it as shifting responsibility for products from municipalities and consumers to producers. A producer can meet the duty by providing the money, by taking over the organisation of collection and sorting from municipalities, as often happens with packaging, or by doing both. Most often producers act together through producer responsibility organisations.',
    ],
    why: [
      'According to the European Commission, packaging waste in the European Union reached a record 186.5 kg per person in 2022, and packaging accounts for nearly half of all marine litter. The Packaging and Packaging Waste Regulation, in force since 11 February 2025 and applying from 12 August 2026, replaces the 1994 packaging directive with common rules on design, recycled content, waste prevention, reuse, collection and recycling. A survey that the Organisation for Economic Co-operation and Development summarised in 2016 counted about 400 extended producer responsibility systems in operation, with electronics the largest group at 35 percent and packaging and tyres at 17 percent each. In some countries, such as France, the evidence shows that these systems shifted part of the financial burden of waste management from municipalities and taxpayers to producers.',
    ],
    read: [
      'Extended producer responsibility can be voluntary or required by law, and it can use take-back requirements, deposit-refund systems or advance disposal fees. Take-back requirements are the most commonly used instrument, accounting for nearly three quarters of the systems surveyed. The Organisation\'s 2001 guiding principles say that these systems should give producers incentives to change product designs.',
    ],
    limits: [
      'Assessing the impact of these systems is difficult: data are lacking, their effect is hard to separate from other factors, and the systems vary too much to compare. The Organisation notes that they have contributed to waste prevention, such as eco-design, in some countries and sectors, but that they are seldom sufficient to trigger it on their own. The count of about 400 systems comes from a survey summarised in 2016.',
    ],
    sources: [
      { label: 'European Commission: Packaging waste', url: packaging },
      {
        label:
          'Organisation for Economic Co-operation and Development (OECD): Extended producer responsibility and economic instruments',
        url: eprTopic,
      },
      {
        label:
          'Organisation for Economic Co-operation and Development (OECD): Extended Producer Responsibility: Basic facts and key principles, OECD Environment Policy Papers No. 41 (2024)',
        url: eprFacts,
      },
      {
        label:
          'Organisation for Economic Co-operation and Development (OECD): Extended Producer Responsibility: Policy Highlights (2016, PDF)',
        url: eprHighlights,
      },
    ],
  },
  'e-waste-recycling': {
    title: 'E-waste collection and recycling',
    hook: grid['e-waste-recycling'].fix,
    imageAlt: grid['e-waste-recycling'].imageAlt,
    caption:
      'Shredded circuit boards and electronic components sorted for material recovery, shown as an exhibit in Tsukuba, Japan.',
    credit: `Photo: Syced, via Wikimedia Commons, Creative Commons Zero public domain dedication (${cc0}). File page: ${tsukuba}`,
    what: [
      'E-waste is discarded electrical and electronic equipment, from phones and laptops to large appliances. The Monitor counts e-waste as recycled only when it is documented as formally collected and recycled in an environmentally sound manner. The Global E-waste Monitor is prepared by the International Telecommunication Union and the United Nations Institute for Training and Research, and its 2024 edition covers the year 2022.',
    ],
    why: [
      'In 2022 the world generated a record 62 billion kg of e-waste, an average of 7.8 kg per person. Only 22.3 percent of it (13.8 billion kg) was documented as formally collected and recycled. Since 2010, when 34 billion kg were generated, the amount has grown by an average of 2.3 billion kg a year, while the documented formal collection and recycling rose from 8 billion kg at an average of 0.5 billion kg a year. The rise in generation therefore outpaces the rise in formal recycling by a factor of almost 5. The metals in the e-waste of 2022 were worth an estimated 91 billion United States dollars, including copper (19 billion), gold (15 billion) and iron (16 billion).',
    ],
    read: [
      'The 22.3 percent counts only e-waste documented as formally collected and recycled; the Monitor estimates that the rest was disposed of with residual waste, collected and recycled outside formal systems, or handled mostly by the informal sector. Collection and recycling rates are typically highest for heavier and bulkier equipment, such as large equipment, temperature exchange equipment and screens, while recycling of small equipment such as toys, microwave ovens, vacuum cleaners and e-cigarettes remains very low, at only 12 percent globally. Among regions, Europe has the highest documented collection and recycling at 7.53 kg per person.',
    ],
    limits: [
      'The Monitor\'s chapter on Asia notes that informal workers often work with limited resources and inadequate protective equipment, which exposes them to hazardous chemicals, and non-compliant e-waste management releases 58 thousand kg of mercury and 45 million kg of plastics containing brominated flame retardants into the environment every year. International trade codes treat new and used equipment alike, which opens the door to misclassification of illegal shipments. Because the 22.3 percent counts only documented formal collection and recycling, the flows outside the formal system are estimates.',
    ],
    sources: [
      {
        label: 'International Telecommunication Union (ITU): The Global E-waste Monitor 2024',
        url: gemPage,
      },
      {
        label:
          'International Telecommunication Union (ITU) and United Nations Institute for Training and Research (UNITAR): Global E-waste Monitor 2024 (PDF)',
        url: gemPdf,
      },
      {
        label: 'International Telecommunication Union (ITU): Global E-waste Monitor 2024 (publication page)',
        url: gemPub,
      },
    ],
  },
  'lithium-ion-battery-recycling': {
    title: 'Lithium-ion battery recycling',
    hook: grid['lithium-ion-battery-recycling'].fix,
    imageAlt: grid['lithium-ion-battery-recycling'].imageAlt,
    caption:
      'An open lithium-ion battery pack for an electric car on show at a trade fair in Munich, with its modules and control electronics exposed.',
    credit: `Photo: RudolfSimon, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 3.0 (${ccBySa3}). File page: ${munich}`,
    what: [
      'Lithium-ion battery recycling processes used cells and packs to recover metals for new batteries and other uses. Today recycling relies mainly on production scrap generated while making battery cells and components. Batteries from electric vehicles and storage systems will take the lead only around 2035, because nearly all those deployed in recent years remain in use, which creates a time lag of roughly 15 years.',
    ],
    why: [
      'The International Energy Agency reports that China hosts over 85 percent of global recycling capacity, and that capacity globally is largely in excess of the feedstock available. Manufacturing scrap still accounts for two-thirds of available recycling feedstock in 2030. From 2035 onwards, end-of-life electric vehicle and storage batteries take over as the largest source and represent over 90 percent of available feedstock by 2050. In a scenario that meets national climate targets, scaled recycling can reduce lithium and nickel demand by 25 percent and cobalt demand by 40 percent in 2050. The European Commission says global demand for batteries is set to increase 14 times by 2030, and that the European Union could account for 17 percent of it.',
    ],
    read: [
      'These figures describe flows of material: today most feedstock is scrap from factories, and only later does it come from batteries that have reached the end of their life. The European Union\'s Batteries Regulation entered into force on 17 August 2023 and applies from 18 February 2024, with phased requirements rolling out through 2031; it aims to make batteries sustainable throughout their life cycle, from sourcing to collection and recycling. Chemistries with lower material value, such as lithium iron phosphate, may need different business models and dedicated regulations to ensure that used batteries are properly collected and processed. In toll-based models the recycler is paid for the service and the customer keeps ownership of the recovered materials, which can be particularly effective together with policies that make automakers or battery makers responsible for end-of-life batteries.',
    ],
    limits: [
      'The International Energy Agency calls the contribution of recycling to meeting battery mineral needs limited today, and the scenario figures for 2050 depend on scaling up recycling facilities and raising collection rates of end-of-life batteries. Until August 2025 imports of black mass, the metal-rich powder from battery recycling, were banned in China; since then high-grade black mass has been allowed, and regulations elsewhere may limit how much of it flows there. Second-hand electric vehicles need adequate end-of-life strategies as they move between countries.',
    ],
    sources: [
      {
        label: 'International Energy Agency (IEA): Electric vehicle batteries, Global EV Outlook 2026',
        url: ieaOutlook,
      },
      {
        label: 'International Energy Agency (IEA): Recycling of Critical Minerals, executive summary',
        url: ieaMinerals,
      },
      {
        label: 'International Energy Agency (IEA): EV Battery Supply Chain Sustainability',
        url: ieaSupply,
      },
      { label: 'European Commission: Batteries', url: batteries },
    ],
  },
  'food-waste-reduction': {
    title: 'Food-waste reduction',
    hook: grid['food-waste-reduction'].fix,
    imageAlt: grid['food-waste-reduction'].imageAlt,
    caption: 'Fresh vegetables and fruit discarded from a hypermarket after one or two days on the shelves.',
    credit: `Photo: Foerster, via Wikimedia Commons, Creative Commons Zero public domain dedication (${cc0}). File page: ${produce}`,
    what: [
      'Food-waste reduction means keeping edible food from being thrown away in shops, restaurants and homes, and sending only unavoidable scraps to other uses. The United Nations Environment Programme tracks food waste at retail, food service and household level in its Food Waste Index. The target of the Sustainable Development Goals is to halve per capita global food waste at the retail and consumer levels by 2030. The United States Environmental Protection Agency ranks the options on its Wasted Food Scale: preventing wasted food, donating it and upcycling it are the most preferred, and landfilling, incineration and sending food down the drain are the least preferred.',
    ],
    why: [
      'In 2022 the world wasted an estimated 1.05 billion tonnes of food at retail, food service and household level, which is 19 percent of the food available to consumers. Households wasted 631 million tonnes (60 percent), food service 290 million tonnes and retail 131 million tonnes. Per person this amounts to 132 kg a year, of which 79 kg is wasted in households. If even a quarter of household food waste was edible, which the report calls a very conservative assessment, that is the equivalent of 1 billion meals thrown away every day. Food waste generates an estimated 8 to 10 percent of global greenhouse gas emissions, counting both loss and waste. In the United States, 30 to 40 percent of the food supply goes uneaten, and the national goal is to cut food loss and waste in half by 2030.',
    ],
    read: [
      'The Wasted Food Scale arranges the options from most to least preferred: prevention, donation and upcycling keep food as food, while composting and anaerobic digestion recover nutrients and energy from leftover scraps. The 1.05 billion tonnes include the inedible parts that go with food, and cover only retail, food service and households. They come on top of the estimated 13 percent of the world\'s food lost in the supply chain before it reaches retail.',
    ],
    limits: [
      'Household data have improved the most: 194 data points from 93 countries, and 85 percent of the world\'s population lives in a country with at least some household data. Data for retail and food service have changed little, and accurate nationwide data outside high-income countries are still lacking, so the global figure is an estimate. The Sustainable Development Goal target covers retail and consumers, while the 13 percent lost earlier in the supply chain is tracked separately.',
    ],
    sources: [
      { label: 'United Nations Environment Programme (UNEP): Food Waste Index Report 2024', url: fwIndex },
      { label: 'United Nations Environment Programme (UNEP): Food Waste Index Report 2024 (PDF)', url: fwPdf },
      {
        label: 'United Nations Environment Programme (UNEP): Food Waste Index Report 2024, Key messages (PDF)',
        url: fwKey,
      },
      { label: 'United States Environmental Protection Agency (EPA): Wasted Food Scale', url: fwScale },
      {
        label:
          'United States Environmental Protection Agency (EPA): United States 2030 Food Loss and Waste Reduction Goal',
        url: fwGoal,
      },
    ],
  },
};
