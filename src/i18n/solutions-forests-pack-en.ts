import type { ForestEncyclopediaCopy, FigureCreditPart } from '../data/solutions-forests';
import type { SolutionCopy } from '../data/solutions';

const cc = (href: string) => href;

function credit(lead: string, licence: string, href: string, tail = ''): FigureCreditPart[] {
  return [
    { text: lead },
    { text: licence, href },
    ...(tail ? [{ text: tail }] : []),
  ];
}

export const packSlugs = [
  'forest-certification',
  'redd-plus',
  'closer-to-nature-forestry',
  'enrichment-planting',
  'mass-timber',
] as const;

export type ForestPackSlug = (typeof packSlugs)[number];

export const grid: Record<ForestPackSlug, SolutionCopy> = {
  'forest-certification': {
    problemTitle: 'Wood and paper with no trusted trail back to the forest',
    fixTitle: 'Forest certification',
    problem: 'Wood and paper with no trusted trail back to the forest',
    fix: 'Independent auditors check how a forest is managed, and a label follows the wood through processing to the finished product. The Forest Stewardship Council (FSC) and the Programme for the Endorsement of Forest Certification (PEFC) are two international systems that do this, and each publishes its own count of certified forest.',
    imageAlt: 'Felled logs stacked in the hills near Trowupburn, Northumberland, England.',
    sourceLabel: 'FSC',
  },
  'redd-plus': {
    problemTitle: 'Carbon emissions from cleared and degraded forest',
    fixTitle: 'REDD+ payments',
    problem: 'Carbon emissions from cleared and degraded forest',
    fix: 'Under reducing emissions from deforestation and forest degradation (REDD+), a country is paid after it shows, with verified measurements, that its forests emitted less carbon. The World Bank\'s Forest Carbon Partnership Facility pays for such results. In 2024 its results-based payments rose from $53.2 million to $164.5 million.',
    imageAlt: 'Rainforest in Kinabalu Park, Borneo.',
    sourceLabel: 'FCPF',
  },
  'closer-to-nature-forestry': {
    problemTitle: 'Clear-cut forests that lose habitat variety',
    fixTitle: 'Closer-to-nature forestry',
    problem: 'Clear-cut forests that lose habitat variety',
    fix: 'Closer-to-nature forestry harvests timber while copying how forests renew themselves: mixed species and ages, small openings instead of large clear-cuts, and gentle harvesting that leaves habitats, soil and the forest microclimate in place. The European Commission published guidelines on it in 2023 for commercially used forests outside protected areas.',
    imageAlt: 'Beech selection forest in the Mühlhausen city forest, Thuringia, Germany, in spring.',
    sourceLabel: 'European Commission',
  },
  'enrichment-planting': {
    problemTitle: 'Logged forest where the wanted tree species regrow too little',
    fixTitle: 'Enrichment planting',
    problem: 'Logged forest where the wanted tree species regrow too little',
    fix: 'Enrichment planting places nursery-grown seedlings in gaps or planting lines inside an existing forest, where natural regeneration of the wanted species is too weak. The Food and Agriculture Organization of the United Nations notes that it has commonly been used to restore logged primary forest and to raise the wood value of secondary forest.',
    imageAlt: 'A forestry worker of the White Mountain Apache Tribe plants a ponderosa pine seedling with a hand tool in Arizona.',
    sourceLabel: 'FAO',
  },
  'mass-timber': {
    problemTitle: 'Building projects with few sources of engineered wood',
    fixTitle: 'Mass timber',
    problem: 'Building projects with few sources of engineered wood',
    fix: 'Mass timber builds floors, walls and roofs from thick engineered wood panels and beams, such as cross-laminated timber and glued laminated timber. The U.S. Department of Agriculture Forest Service calls these products a carbon-storing, renewable alternative to conventional building materials and supports manufacturers with grants.',
    imageAlt: 'Interior of a building constructed from cross-laminated timber panels.',
    sourceLabel: 'USDA Forest Service',
  },
};

const commonsTimber =
  'https://commons.wikimedia.org/wiki/File:Timber_Stack,_Sinkside_Hill_Near_Trowupburn_-_geograph.org.uk_-_6552952.jpg';
const commonsBorneo = 'https://commons.wikimedia.org/wiki/File:Borneo_rainforest.jpg';
const commonsPlenter = 'https://commons.wikimedia.org/wiki/File:Plenterwald_April_2004.jpg';
const commonsApache = 'https://commons.wikimedia.org/wiki/File:White_Mountain_Apache_Arizona-105.jpg';
const commonsClt = 'https://commons.wikimedia.org/wiki/File:Brettsperrholzkonstruktion.jpg';

export const detail: Record<ForestPackSlug, ForestEncyclopediaCopy> = {
  'forest-certification': {
    title: 'Forest certification',
    hook: 'Forest certification is a system in which independent auditors check forests and wood businesses against published standards.',
    imageAlt: grid['forest-certification'].imageAlt,
    caption: 'Felled logs stacked in the hills near Trowupburn, Northumberland, England.',
    figureCredit: credit(
      'Photo: Geoff Holland, geograph.org.uk, via Wikimedia Commons, ',
      'Creative Commons Attribution-ShareAlike 2.0 Generic licence',
      cc('https://creativecommons.org/licenses/by-sa/2.0/'),
      '.',
    ),
    what: [
      'Forest certification is a system in which independent auditors check forests and wood businesses against published standards. The Forest Stewardship Council (FSC) is an international non-profit organization that sets standards for responsible forest management and for forest-product supply chains. Its system has two linked kinds of certificate. A forest management certificate verifies that a forest is managed responsibly under the council\'s principles and criteria. A chain of custody certificate tracks certified material through every stage of processing, manufacturing and distribution. The Programme for the Endorsement of Forest Certification (PEFC) is a global alliance of national certification systems. It endorses systems that national organizations develop through processes involving many stakeholders and adapt to local priorities and conditions. It began in 1999, when small and family forest owners in Europe created a system to show their sustainable forest management, and it now has more than 80 members.',
    ],
    why: [
      'Without a checked trail, a claim of sustainable wood is only a printed statement. The FSC reports that over 160 million hectares of forest and more than 70,000 organizations are certified to its standards. The PEFC reports 297 million hectares of certified forest and 29,800 companies certified for chain of custody. Both sets of figures come from the organizations\' own websites. The FSC is governed by three chambers with equal voting rights, environmental, social and economic, and more than 1,200 members, from Indigenous Peoples to global companies, vote in them.',
    ],
    read: [
      'Independent third-party certification bodies carry out the audits. A company applies to a certification body, receives an on-site audit and, if it complies, is given a certificate valid for five years, with annual audits after that. Only certified holders may use the FSC label and make FSC claims about products, so that wood can be traced from forest to market. When you see a label, ask which system issued it and whether the certificate covers the forest, the chain of custody or both.',
    ],
    limits: [
      'The counts measure participation: hectares of certified forest and numbers of certified organizations. Each organization reports its own figures for its own system. A forest management certificate covers the audited forest, and a chain of custody certificate covers the handling of wood after it leaves the forest, so a label on a product reflects what its certificate covers. The FSC says it lists active investigations into organizations that may threaten the credibility of its system.',
    ],
    sources: [
      { label: 'Forest Stewardship Council: How the FSC System Works', url: 'https://fsc.org/en/how-the-fsc-system-works' },
      { label: 'Forest Stewardship Council: About us', url: 'https://fsc.org/en/about-us' },
      { label: 'Programme for the Endorsement of Forest Certification: What is PEFC?', url: 'https://pefc.org/discover-pefc/what-is-pefc' },
      { label: 'Wikimedia Commons: Timber Stack, Sinkside Hill Near Trowupburn (photo)', url: commonsTimber },
    ],
  },
  'redd-plus': {
    title: 'REDD+ payments',
    hook: 'Reducing emissions from deforestation and forest degradation (REDD+) covers activities in developing countries that cut emissions from deforestation and forest degradation, conserve forest carbon stocks, manage forests sustainably and enhance forest carbon stocks.',
    imageAlt: grid['redd-plus'].imageAlt,
    caption: 'Rainforest in Kinabalu Park, Borneo.',
    figureCredit: credit(
      'Photo: Dukeabruzzi, via Wikimedia Commons, ',
      'Creative Commons Attribution-ShareAlike 4.0 International licence',
      cc('https://creativecommons.org/licenses/by-sa/4.0/'),
      '.',
    ),
    what: [
      'Reducing emissions from deforestation and forest degradation (REDD+) covers activities in developing countries that cut emissions from deforestation and forest degradation, conserve forest carbon stocks, manage forests sustainably and enhance forest carbon stocks. The World Bank\'s Forest Carbon Partnership Facility (FCPF) is a global partnership of governments, businesses, civil society and Indigenous Peoples\' organizations focused on these activities. It works with 47 developing countries in Africa, Asia, and Latin America and the Caribbean, and with 17 donors whose contributions and commitments total $1.3 billion. The partnership runs two funds. The Readiness Fund operated from 2008 to 2022 with total funding of $472 million and helped countries prepare: designing national REDD+ strategies, developing reference emission levels, building systems to measure, report and verify emissions, and setting up national management arrangements with environmental and social safeguards. The Carbon Fund pilots results-based payments to countries that have advanced through readiness and achieved verifiable emission reductions in their forest and wider land-use sectors. Its current funding is $900 million.',
    ],
    why: [
      'Results-based payment ties money to measured outcomes: it is paid only after emission reductions have been achieved and verified. The FCPF reports that in 2024 it more than tripled its results-based payments, from $53.2 million in 2023 to $164.5 million, and that it was on track to pay for more than 35 million emission reductions, which it says is more than 10 percent of all emission reduction transactions in carbon markets worldwide in 2023. All 15 countries in the Carbon Fund have now reported emission reductions.',
    ],
    read: [
      'A payment is the last step of a sequence. First a country prepares strategies, reference emission levels and measurement systems. Then it reduces emissions from its forests and land use. Then the reductions are verified, and only then is payment made. Countries in the Carbon Fund are also putting in place benefit-sharing mechanisms so that proceeds reach people on the ground. In Mozambique, for example, the FCPF and a partner programme aim for women to make up at least 50 percent of the beneficiaries of the emission reductions programme.',
    ],
    limits: [
      'The payment and reduction figures are reported by the FCPF itself. The Readiness Fund operated until 2022, and the Carbon Fund has been extended to December 2028. The FCPF says it is crucial to keep momentum and the long-term sustainability of emission reductions programmes beyond the life of the facility, and it says that the World Bank has demonstrated the proof of concept for emission reductions, so an improved model now needs to be scaled up.',
    ],
    sources: [
      { label: 'Forest Carbon Partnership Facility: About the FCPF', url: 'https://www.forestcarbonpartnership.org/about' },
      { label: 'Forest Carbon Partnership Facility: Momentum in Forest Carbon Progress, 2024 and Beyond', url: 'https://www.forestcarbonpartnership.org/results-story/momentum-forest-carbon-progress-2024-and-beyond' },
      { label: 'Wikimedia Commons: Borneo rainforest (photo)', url: commonsBorneo },
    ],
  },
  'closer-to-nature-forestry': {
    title: 'Closer-to-nature forestry',
    hook: 'The European Union\'s forest strategy for 2030 defines closer-to-nature forest management as practices that ensure multifunctional forests by combining biodiversity goals, carbon stock preservation and timber revenues.',
    imageAlt: grid['closer-to-nature-forestry'].imageAlt,
    caption: 'Beech selection forest in the Mühlhausen city forest, Thuringia, Germany, in spring.',
    figureCredit: credit(
      'Photo: Michael Fiegle, via Wikimedia Commons, ',
      'Creative Commons Attribution-ShareAlike 3.0 Unported licence',
      cc('https://creativecommons.org/licenses/by-sa/3.0/'),
      '.',
    ),
    what: [
      'The European Union\'s forest strategy for 2030 defines closer-to-nature forest management as practices that ensure multifunctional forests by combining biodiversity goals, carbon stock preservation and timber revenues. On 27 July 2023 the European Commission published guidelines on the approach in a staff working document that it also sent to the Council of the European Union. The guidelines are for forests with a commercial use for timber and other forest products, outside designated protected areas. Their general principles are learning from and permitting natural processes to develop, maintaining the variety and complexity of forest structures, integrating forest functions at different scales, using a variety of silvicultural systems based on the natural disturbance patterns of the region, and low-impact harvesting that pays equal attention to what stays in the forest and what is removed.',
    ],
    why: [
      'The guidelines name two main objectives: increasing structural complexity and promoting natural forest dynamics. They describe forests made more diverse in height, diameter, age and species. Stands with a diversified species structure are more resistant and adaptable to climate change and disturbances, and if one species is hit by a pest, other species can still survive and bring an economic return. The guidelines say that clear-cuts reduce environmental complexity, alter natural ecosystem processes and diminish habitat variety. Interest in continuous-cover forestry, in which the forest keeps a tree canopy after harvesting, has been increasing in Denmark, Germany, Ireland and the Netherlands, and some member states have introduced related principles or mandatory legislation.',
    ],
    read: [
      'The harvesting technique the guidelines propose is partial harvesting: single-tree selection, group selection, or gap cuts of at most 0.2 to 0.5 hectares, which imitate natural disturbance instead of clear-cutting larger areas. Practice differs across Europe. The guidelines report that continuous-cover forestry is mostly used in western Europe, that the Pro Silva approach and others prevail in central and eastern Europe, and that in the north-east the idea of mimicking natural disturbances and keeping natural structures such as dead wood is prominent. In the Alps, clear-cuts larger than 0.5 hectares are rare and even prohibited in some countries because of the risk of soil erosion, landslides and avalanches. The European Forest Institute proposed a definition, seven guiding principles and a checklist for the concept in a 2022 report.',
    ],
    limits: [
      'The guidelines describe themselves as entirely voluntary and say they place no binding conditions on, for example, state aid or European Union funding for forest management. Their authors note that the main barrier reported by questionnaire respondents was economic: a perception that biodiversity-friendly practices reduce the return from forests, at least in the short term. Where natural disturbance regimes have been reduced or eliminated, the guidelines say small clear-cuts might be needed as part of restorative management to imitate natural disturbance temporarily.',
    ],
    sources: [
      { label: 'European Commission, Directorate-General for Environment: Guidelines on Closer-to-Nature Forest Management', url: 'https://environment.ec.europa.eu/publications/guidelines-closer-nature-forest-management_en' },
      { label: 'Council of the European Union: Commission staff working document, Guidelines on Closer-to-Nature Forest Management', url: 'https://data.consilium.europa.eu/doc/document/ST-12232-2023-INIT/en/pdf' },
      { label: 'European Forest Institute: Closer-to-Nature Forest Management (From Science to Policy 12)', url: 'https://efi.int/publication/closer-to-nature-forest-management' },
      { label: 'Wikimedia Commons: Plenterwald April 2004 (photo)', url: commonsPlenter },
    ],
  },
  'enrichment-planting': {
    title: 'Enrichment planting',
    hook: 'The Food and Agriculture Organization of the United Nations (FAO) describes enrichment planting as transplanting nursery-grown seedlings or wildlings, which are young trees taken from the forest floor, into natural forest openings, gaps created by tree felling, or lines or strips opened for the purpose.',
    imageAlt: grid['enrichment-planting'].imageAlt,
    caption: 'A forestry worker of the White Mountain Apache Tribe plants a ponderosa pine seedling with a hand tool in Arizona.',
    figureCredit: credit(
      'Photo: Beverly Moseley, U.S. Department of Agriculture Natural Resources Conservation Service, ',
      'public domain',
      commonsApache,
      ', via Wikimedia Commons.',
    ),
    what: [
      'The Food and Agriculture Organization of the United Nations (FAO) describes enrichment planting as transplanting nursery-grown seedlings or wildlings, which are young trees taken from the forest floor, into natural forest openings, gaps created by tree felling, or lines or strips opened for the purpose. It may be appropriate where natural regeneration of the desired species is insufficient or unevenly distributed, or to favour particular species, usually of high value, that regenerate poorly. The two most common options are line plantings and gap plantings. The choice depends mainly on the condition of the forest stand, and gap planting is generally recommended for overlogged forests, where planting lines are harder to open and maintain.',
    ],
    why: [
      'FAO notes that enrichment planting has commonly been used to restore logged primary forests and to raise the wood volume and economic value of secondary forests. Degraded primary forests are becoming a predominant forest type in many countries and are increasingly asked to perform the productive and environmental functions of primary forests.',
    ],
    read: [
      'FAO lists what success requires: adequate light, proper supervision, and follow-up maintenance, especially to manage light and reduce competition from other plants. The condition of the seedlings at planting is a major factor, and FAO calls it crucial to use high-quality planting stock. Suitable species are likely to produce high-value timber, grow rapidly, flower and fruit regularly, tolerate a wide range of conditions and moisture stress, and be free of significant pests. An FAO example from Malaysia shows the range of methods. In Sabah, experimental enrichment planting has covered 10,000 hectares of logged-over forest. It began with trees planted 3 metres apart in rows 10 metres apart, each row cut as a strip 2 metres wide, and weeding can continue for up to six years after planting. In Peninsular Malaysia, where more large canopy trees remain and shade slows seedling growth, a trial uses seedlings up to 2 metres tall planted in holes dug by a small tractor with an auger.',
    ],
    limits: [
      'FAO\'s companion publication on secondary forests states that the economic advantages of enrichment planting are still unclear, although some promising results are being obtained in experimental conditions. It also reports that no single prescription suits all situations. In Sabah the economics were helped by payments for the carbon sequestration taking place as the forest recovers, and the Peninsular Malaysia trials were still at an early stage.',
    ],
    sources: [
      { label: 'Food and Agriculture Organization of the United Nations: Silviculture in Natural Forests, module of the Sustainable Forest Management Toolbox', url: 'https://www.fao.org/sustainable-forest-management-toolbox/modules/silviculture-in-natural-forests/en' },
      { label: 'Food and Agriculture Organization of the United Nations: Silviculture in Natural Forests, Basic knowledge (PDF)', url: 'https://www.fao.org/sustainable-forest-management/toolbox/modules/silviculture-in-natural-forests/basic-knowledge/en/?type=111' },
      { label: 'Food and Agriculture Organization of the United Nations: Helping forests take cover, Secondary forest management: the unrecognised opportunities', url: 'https://www.fao.org/4/ae945e/ae945e0c.htm' },
      { label: 'Wikimedia Commons: White Mountain Apache Arizona-105 (photo)', url: commonsApache },
    ],
  },
  'mass-timber': {
    title: 'Mass timber',
    hook: 'Mass timber is a family of engineered wood products used for structural building parts.',
    imageAlt: grid['mass-timber'].imageAlt,
    caption: 'Interior of a building constructed from cross-laminated timber panels.',
    figureCredit: credit(
      'Photo: RoterRolf, via Wikimedia Commons, ',
      'CC0 1.0 Universal public domain dedication',
      cc('https://creativecommons.org/publicdomain/zero/1.0/'),
      '.',
    ),
    what: [
      'Mass timber is a family of engineered wood products used for structural building parts. Cross-laminated timber panels consist of several layers of lumber boards stacked crosswise, typically at 90 degrees, and glued together on their wide faces. A panel has at least three layers, usually an odd number, and three to seven layers is common. Glued laminated timber is an engineered, stress-rated product made of two or more layers of lumber glued together with the grain of all layers running parallel to the length. These definitions come from the U.S. Department of Agriculture Forest Service, in a chapter of its handbook on cross-laminated timber and in its Wood Handbook.',
    ],
    why: [
      'The U.S. Department of Agriculture Forest Service says that cross-laminated timber and glued laminated timber offer a carbon-storing, renewable alternative to conventional building materials, with strength, fire resistance and design flexibility. The Wood Handbook adds that cross-laminated timber panels are an alternative to some building applications that currently use concrete, masonry or steel. The agency says a gap in domestic manufacturing has slowed adoption, and that scaling up supply helps drive down costs for developers. Its Wood Innovation Grants Program, launched in 2015, lists mass timber among its national focus areas.',
    ],
    read: [
      'Brian Brashaw, Wood Innovations Assistant Director at the Forest Service, said in 2025 that since 2015 the United States has gained 13 new mass timber plants serving commercial, institutional and multifamily building markets. The figure is his statement in a Forest Service feature. The agency says its grants support manufacturers who source sustainable wood, reduce waste and create jobs in rural communities. When you meet a claim about a mass timber building, look for what the product is made of, where the wood was grown, and what the source says about carbon.',
    ],
    limits: [
      'The Forest Service sources used here describe the carbon-storing benefit in general terms and give no carbon figure for any single building. The Forest Service handbook on cross-laminated timber says these panels have a relatively high capacity to store moisture but relatively low vapor permeability, so panels exposed to excessive wetting during construction may absorb a large amount of moisture and dry slowly, and it recommends an additional air barrier. The count of 13 new plants covers the United States only.',
    ],
    sources: [
      { label: 'U.S. Department of Agriculture Forest Service: Scaling up mass timber: Closing gaps, fueling innovation', url: 'https://www.fs.usda.gov/about-agency/features/scaling-mass-timber-closing-gaps-fueling-innovation' },
      { label: 'U.S. Department of Agriculture Forest Service: Wood Innovations', url: 'https://www.fs.usda.gov/science-technology/energy-forest-products/wood-innovation' },
      { label: 'U.S. Department of Agriculture Forest Service Research and Development: Chapter 1, Introduction to cross-laminated timber, in the CLT Handbook (2013)', url: 'https://research.fs.usda.gov/treesearch/46203' },
      { label: 'U.S. Department of Agriculture Forest Service Research and Development: Chapter 12, Mechanical properties of wood-based composite materials, in the Wood Handbook (2021)', url: 'https://research.fs.usda.gov/treesearch/62260' },
      { label: 'Wikimedia Commons: Brettsperrholzkonstruktion (photo)', url: commonsClt },
    ],
  },
};
