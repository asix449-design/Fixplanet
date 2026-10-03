import type { MaterialsDetailCopy, MaterialsEncyclopediaSlug } from '../data/solutions-materials';
import type { SolutionCopy } from '../data/solutions';


export const grid: Record<MaterialsEncyclopediaSlug, SolutionCopy> = {
  "wood-fibre-insulation": {
    "problemTitle": "Building envelopes that lose heat through walls, roofs and floors",
    "fixTitle": "Wood fibre insulation",
    "problem": "Building envelopes that lose heat through walls, roofs and floors",
    "fix": "Factory-made mats and boards of wood fibre for the thermal insulation of buildings. The European standard for factory-made wood fibre insulation covers rolls, batts, felts, boards and slabs.",
    "imageAlt": "Wood fibre insulation boards on a building facade under scaffolding in Lotschen, Blankenhain, Germany.",
    "sourceLabel": "Intertek, factory-made wood fibre insulation standard"
  },
  "cellulose-insulation": {
    "problemTitle": "Building insulation that can be made from recovered paper",
    "fixTitle": "Cellulose insulation",
    "problem": "Building insulation that can be made from recovered paper",
    "fix": "Loose-fill and spray-on insulation made from recovered paper fibre. The United States Environmental Protection Agency recommends 75 percent postconsumer paper for cellulose loose-fill and spray-on insulation, measured by the weight of the insulating core.",
    "imageAlt": "Sprayed paper-based cellulose insulation filling the cavities of a timber wall frame.",
    "sourceLabel": "United States Environmental Protection Agency, Comprehensive Procurement Guidelines for Construction Products"
  },
  "engineered-bamboo": {
    "problemTitle": "Bamboo structures that need shared test methods and a product specification",
    "fixTitle": "Engineered bamboo",
    "problem": "Bamboo structures that need shared test methods and a product specification",
    "fix": "Bamboo strips bonded into boards and structural members. In October 2024 the International Organization for Standardization released the first international product specification for structural glued laminated bamboo, after test methods for engineered bamboo were published in 2022.",
    "imageAlt": "Strand-woven bamboo flooring, made from reconstructed bamboo strands, an engineered bamboo product.",
    "sourceLabel": "International Bamboo and Rattan Organization, structural glued laminated bamboo"
  },
  "recycled-gypsum": {
    "problemTitle": "Plasterboard waste from construction and demolition that needs a route back into new boards",
    "fixTitle": "Recycled gypsum",
    "problem": "Plasterboard waste from construction and demolition that needs a route back into new boards",
    "fix": "Waste plasterboard processed into recycled gypsum for new plasterboard. The European Union project Gypsum to Gypsum produced plasterboard with up to 30 percent recycled gypsum, and the United Kingdom Environment Agency quality protocol sets when recycled gypsum stops being waste.",
    "imageAlt": "Stack of plasterboard sheets on a wooden pallet in a warehouse.",
    "sourceLabel": "Eurogypsum, Circularity"
  }
};

export const detail: Record<MaterialsEncyclopediaSlug, MaterialsDetailCopy> = {
  "wood-fibre-insulation": {
    "title": "Wood fibre insulation",
    "hook": "Factory-made mats and boards of wood fibre for the thermal insulation of buildings. The European standard for factory-made wood fibre insulation covers rolls, batts, felts, boards and slabs.",
    "imageAlt": "Wood fibre insulation boards on a building facade under scaffolding in Lotschen, Blankenhain, Germany.",
    "caption": "Wood fibre insulation boards on a building facade under scaffolding in Lotschen, Blankenhain, Germany.",
    "credit": "Photo: Kai Kemmann, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). File page: https://commons.wikimedia.org/wiki/File:Fassadend%C3%A4mmung_mit_Pavatex-Holzfaserd%C3%A4mmplatten,_Sockelplatten_zur_Befestigung_von_Balkonen,_Am_Bach_23,_Lotschen,_99444_Blankenhain,_Th%C3%BCringen.jpg",
    "what": [
      "Wood fibre insulation is a factory-made product formed from wood fibre into flexible rolls, batts and felts or into rigid boards and slabs, used for the thermal insulation of buildings. The European standard for factory-made wood fibre insulation sets the requirements for these products, including those with facings or coatings. Some of the products are also used in prefabricated insulation systems and composite panels."
    ],
    "why": [
      "That standard is a harmonised standard under the European Construction Products Regulation, and products follow it to carry the European conformity mark. It describes the product characteristics and includes procedures for testing, evaluation of conformity, marking and labelling, so wood fibre insulation from different makers is described and tested in a common way."
    ],
    "read": [
      "Products with a declared thermal resistance lower than 0.20 m²·K/W or a declared thermal conductivity greater than 0.070 W/(m·K) at 10 °C fall outside the standard. Insulation formed in place on site and insulation for building equipment and industrial installations are also outside its scope."
    ],
    "limits": [
      "The standard describes product characteristics and test procedures. The classes and levels required for a particular use are set in building regulations and in other standards. The performance of prefabricated insulation systems and composite panels that contain these products is outside the scope of the standard. Market share, price and carbon footprint of wood fibre insulation remain unquantified in the sources cited here."
    ],
    "sources": [
      {
        "label": "Intertek: EN 13171: Thermal insulation products for buildings - Factory made wood fibre (WF) products - Specification",
        "url": "https://www.intertek.com/building/standards/en-13171/"
      },
      {
        "label": "Genorma: EN 13171:2012+A1:2015 Thermal insulation products for buildings - Factory made wood fibre (WF) products - Specification",
        "url": "https://genorma.com/en/standards/en-13171-2012-a1-2015"
      }
    ]
  },
  "cellulose-insulation": {
    "title": "Cellulose insulation",
    "hook": "Loose-fill and spray-on insulation made from recovered paper fibre. The United States Environmental Protection Agency recommends 75 percent postconsumer paper for cellulose loose-fill and spray-on insulation, measured by the weight of the insulating core.",
    "imageAlt": "Sprayed paper-based cellulose insulation filling the cavities of a timber wall frame.",
    "caption": "Sprayed paper-based cellulose insulation filling the cavities of a timber wall frame.",
    "credit": "Photo: Riisipuuro, via Wikimedia Commons, cropped, licence Creative Commons Attribution-ShareAlike 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). File page: https://commons.wikimedia.org/wiki/File:Paper_insulation.jpg",
    "what": [
      "Cellulose insulation is a fibrous insulation applied as loose fill or as a spray-on product, and it can be made from old newspaper. The United States Environmental Protection Agency lists cellulose loose-fill and spray-on insulation among the building insulation products that can be made from recovered materials."
    ],
    "why": [
      "The Comprehensive Procurement Guidelines program of the United States Environmental Protection Agency designates products that are or can be made with recovered materials, to promote the use of materials recovered from municipal solid waste. Once a product is designated, procuring agencies are required to buy it with the highest recovered material content level practicable. For cellulose loose-fill and spray-on insulation the agency recommends 75 percent postconsumer paper, which is also 75 percent total recovered materials content."
    ],
    "read": [
      "The recommended levels for building insulation are based on weight. Volume is left out of the calculation, and the insulating core is the only part counted. A figure of 75 percent therefore describes the share of the core's weight that is postconsumer paper."
    ],
    "limits": [
      "The 75 percent level is a recommendation for purchases by procuring agencies of the United States government. It describes the recovered content of the product. Thermal performance, settling, moisture behaviour and fire behaviour of cellulose insulation lie outside the cited sources, and so do its market share and price."
    ],
    "sources": [
      {
        "label": "United States Environmental Protection Agency: Comprehensive Procurement Guidelines for Construction Products",
        "url": "https://www.epa.gov/smm/comprehensive-procurement-guidelines-construction-products"
      },
      {
        "label": "United States Environmental Protection Agency: Comprehensive Procurement Guideline (CPG) Program",
        "url": "https://www.epa.gov/smm/comprehensive-procurement-guideline-cpg-program"
      }
    ]
  },
  "engineered-bamboo": {
    "title": "Engineered bamboo",
    "hook": "Bamboo strips bonded into boards and structural members. In October 2024 the International Organization for Standardization released the first international product specification for structural glued laminated bamboo, after test methods for engineered bamboo were published in 2022.",
    "imageAlt": "Strand-woven bamboo flooring, made from reconstructed bamboo strands, an engineered bamboo product.",
    "caption": "Strand-woven bamboo flooring, made from reconstructed bamboo strands, an engineered bamboo product.",
    "credit": "Photo: Pazzo4562, via Wikimedia Commons, licence Creative Commons Attribution-ShareAlike 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). File page: https://commons.wikimedia.org/wiki/File:Strand-woven_Bamboo_Flooring.jpg",
    "what": [
      "Engineered bamboo is made by bonding bamboo into boards and structural members. Glued laminated bamboo and bamboo scrimber are two of its forms, and glued laminated bamboo is one of the most widely used engineered bamboo products worldwide. Bamboo has been used in construction for centuries in Asia, Latin America and Africa, and engineered bamboo products began to be used as structural components in buildings in the 1990s."
    ],
    "why": [
      "Shared international standards give designers, manufacturers and regulators a common reference. On 22 June 2022 the International Organization for Standardization published a standard with test methods for the physical and mechanical properties of engineered bamboo products, developed by the Bamboo Construction Task Force of the International Bamboo and Rattan Organization. On 28 October 2024 it released the first international standard for structural glued laminated bamboo, a product specification proposed by the International Bamboo and Rattan Organization. By December 2024 the working group on structural uses of bamboo had published six international standards on bamboo structures, three for round bamboo and three for engineered bamboo products."
    ],
    "read": [
      "Two documents are involved. The 2022 standard gives test methods for determining physical and mechanical properties, defines dimensions, moisture content and density, and applies to prismatic shapes of glued laminated bamboo and bamboo scrimber. The 2024 standard is the product specification for structural glued laminated bamboo."
    ],
    "limits": [
      "The standards of 2022 and 2024 cover test methods for engineered bamboo products and a product specification for glued laminated bamboo. As of December 2024 two further international standards for engineered bamboo were under development. Market volume, cost and carbon balance of engineered bamboo remain unquantified in the sources cited here."
    ],
    "sources": [
      {
        "label": "International Bamboo and Rattan Organization: Defining the future of structural glued laminated bamboo, on ISO 7567:2024 Bamboo structures, Glued laminated bamboo, Product specification",
        "url": "https://www.inbar.int/defining-the-future-of-structural-glued-laminated-bamboo/"
      },
      {
        "label": "International Bamboo and Rattan Organization: First international standard on engineered bamboo for structural use published, on ISO 23478:2022 Bamboo structures, Engineered bamboo products, Test methods for determination of physical and mechanical properties",
        "url": "https://www.inbar.int/first-international-standard-on-engineered-bamboo/"
      }
    ]
  },
  "recycled-gypsum": {
    "title": "Recycled gypsum",
    "hook": "Waste plasterboard processed into recycled gypsum for new plasterboard. The European Union project Gypsum to Gypsum produced plasterboard with up to 30 percent recycled gypsum, and the United Kingdom Environment Agency quality protocol sets when recycled gypsum stops being waste.",
    "imageAlt": "Stack of plasterboard sheets on a wooden pallet in a warehouse.",
    "caption": "Stack of plasterboard sheets on a wooden pallet in a warehouse.",
    "credit": "Photo: RossKur, via Wikimedia Commons, cropped, licence Creative Commons Attribution 4.0 (https://creativecommons.org/licenses/by/4.0/). File page: https://commons.wikimedia.org/wiki/File:Stapel_Gipskartonplatten.jpg",
    "what": [
      "Recycled gypsum is powder reprocessed from waste plasterboard and used again to make new gypsum products such as plasterboard. Gypsum waste comes from production, construction and demolition, including renovation. The Gypsum to Gypsum project, supported by the European Union programme for the environment and climate action and coordinated by Eurogypsum, the European association of the gypsum industry, tested the full loop: dismantling and collection of plasterboard on sites, recycling of the waste, and reincorporation of the recycled gypsum at plasterboard factories."
    ],
    "why": [
      "Eurogypsum describes gypsum as an eternally recyclable mineral and reports that the project demonstrated plasterboard with 30 percent content of gypsum waste from production, construction and demolition. The project report states that the participating manufacturers produced plasterboard with 20 to 30 percent recycled gypsum (average 25 percent) and reached the 30 percent target in two of the five factories. The results were achieved with the existing processes of the participating factories."
    ],
    "read": [
      "In England, Wales and Northern Ireland the quality protocol of the United Kingdom Environment Agency for recycled gypsum from waste plasterboard sets three conditions for the material to stop being waste: the waste was stored and processed to the publicly available specification of the British Standards Institution for recycled gypsum from waste plasterboard; the gypsum is ready to use as a raw material for gypsum-based construction products such as plasterboard and coving, or for making cement; and it meets any extra specification requested by the customer."
    ],
    "limits": [
      "The project report states that raising recycled content from 30 to 50 percent would demand investments in equipment. Gypsum adheres to plaster, paint and screed, which makes demolition waste the most complex of the three waste streams. A small percentage of gypsum waste is recycled in Europe, and the report names demolition as the main barrier, because dismantling is the step that allows gypsum waste to be recovered. Eurogypsum states that the volume of suitable gypsum waste is expected to fall short of the growing needs for buildings and renovation in the short to medium term, so recycling and extraction of primary raw material are equally necessary, and synthetic gypsum from coal-fired power stations is declining."
    ],
    "sources": [
      {
        "label": "Eurogypsum: Circularity",
        "url": "https://eurogypsum.org/circularity-2923/"
      },
      {
        "label": "European Commission LIFE Public Database: GtoG: From Production to Recycling, a Circular Economy for the European Gypsum Industry with the Demolition and Recycling Industry (LIFE11 ENV/BE/001039)",
        "url": "https://webgate.ec.europa.eu/life/publicWebsite/project/LIFE11-ENV-BE-001039/gtog-from-production-to-recycling-a-circular-economy-for-the-european-gypsum-industry-with-the-demolition-and-recycling-industry"
      },
      {
        "label": "Environment Agency, GOV.UK: Recycled gypsum from waste plasterboard: quality protocol",
        "url": "https://www.gov.uk/government/publications/recycled-gypsum-from-waste-plasterboard-quality-protocol/recycled-gypsum-from-waste-plasterboard-quality-protocol"
      }
    ]
  }
};
