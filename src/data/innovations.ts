import type { HubIconName } from './hub';
import { cite, type PrimarySource } from './sources';

export type { PrimarySource } from './sources';

export const innovationAreaKeys = ['ecology', 'energy', 'ai'] as const;

export type InnovationArea = (typeof innovationAreaKeys)[number];

export const innovationHub = [
  { key: 'ecology', icon: 'leaf' },
  { key: 'energy', icon: 'bolt' },
  { key: 'ai', icon: 'circuit' },
] as const satisfies ReadonlyArray<{ key: InnovationArea; icon: HubIconName }>;

export const innovationStatusKeys = [
  'research',
  'pilot',
  'deployed',
  'myth-busted',
] as const;

export type InnovationStatus = (typeof innovationStatusKeys)[number];

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
};

export type InnovationMeta = {
  slug: string;
  area: InnovationArea;
  status: InnovationStatus;
  image: ImageCredit;
  /** Official project pages, papers, lab releases — not image credits. */
  sources: PrimarySource[];
};

export type InnovationCopy = {
  title: string;
  hook: string;
  imageAlt: string;
  what: string;
  problem: string;
  how: string;
  players: string;
  risks: string;
  sourcesNote: string;
};

export type Innovation = InnovationMeta & InnovationCopy;

function img(
  file: string,
  credit: string,
  license: string,
  sourceUrl: string,
): ImageCredit {
  return { file, credit, license, sourceUrl };
}

/**
 * Curated first catalog. To add a card:
 * 1. Add a row here (English slug, area, status, image credit, primary sources).
 * 2. Add the same slug to en / ru / pl / lv in `src/i18n/innovations.ts`
 *    (and the locale files beside it).
 * 3. Drop a licensed or generated image in `public/images/innovations/{file}`.
 * 4. `npm run build`.
 *
 * Slugs stay English in every language. Do not invent breakthroughs.
 * Perpetual-motion / “free energy” devices belong only as myth-busted cards.
 * Primary sources are official project pages, peer-reviewed papers, or lab
 * releases — not blogs. Image credits stay on `image`, separate from `sources`.
 */
export const innovationMeta: InnovationMeta[] = [
  {
    slug: 'climeworks-dac',
    area: 'ecology',
    status: 'pilot',
    image: img(
      'climeworks-dac.jpg',
      'ThinkGeoEnergy',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:HellisheidiPowerStation01.jpg',
    ),
    sources: [
      cite('Climeworks — Mammoth plant', 'https://climeworks.com/plant-mammoth'),
      cite(
        'Climeworks — Mammoth start (8 May 2024)',
        'https://climeworks.com/press-release/climeworks-switches-on-worlds-largest-direct-air-capture-plant-mammoth',
      ),
      cite(
        'IEA — Direct Air Capture',
        'https://www.iea.org/energy-system/carbon-capture-utilisation-and-storage/direct-air-capture',
      ),
    ],
  },
  {
    slug: 'northern-lights-ccs',
    area: 'ecology',
    status: 'deployed',
    image: img(
      'northern-lights-ccs.jpg',
      'Stan Shebs',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:North_Sea_oil_platform.jpg',
    ),
    sources: [
      cite('Northern Lights — who we are', 'https://norlights.com/who-we-are/'),
      cite(
        'Equinor — first CO₂ volumes stored (25 Aug 2025)',
        'https://www.equinor.com/news/20250825-first-co2-volumes-stored-at-northern-lights',
      ),
      cite('CCS Norway — Longship', 'https://ccsnorway.com/'),
    ],
  },
  {
    slug: 'carbfix-mineralization',
    area: 'ecology',
    status: 'deployed',
    image: img(
      'carbfix-mineralization.jpg',
      'Martin Falbisoner',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Svartifoss_July_2014.JPG',
    ),
    sources: [
      cite('Carbfix', 'https://www.carbfix.com/'),
      cite(
        'Matter et al., Science, 2016',
        'https://www.science.org/doi/10.1126/science.aad8132',
      ),
    ],
  },
  {
    slug: 'precision-fermentation',
    area: 'ecology',
    status: 'pilot',
    image: img(
      'precision-fermentation.jpg',
      'Luis Fernando Flores LAB',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Bioreactor.jpg',
    ),
    sources: [
      cite('Perfect Day', 'https://perfectday.com/'),
      cite('Solar Foods', 'https://solarfoods.com/'),
      cite('Solein', 'https://www.solein.com/'),
    ],
  },
  {
    slug: 'coral-restoration',
    area: 'ecology',
    status: 'pilot',
    image: img(
      'coral-restoration.jpg',
      'Fix Planet generated documentary still — branching reef, not a named restoration project',
      'Site asset',
      '',
    ),
    sources: [
      cite('NOAA Coral Reef Conservation Program', 'https://coralreef.noaa.gov/'),
      cite('NOAA Coral Reef Watch', 'https://coralreefwatch.noaa.gov/'),
      cite('SECORE International', 'https://www.secore.org/'),
    ],
  },
  {
    slug: 'nano-water-membranes',
    area: 'ecology',
    status: 'research',
    image: img(
      'nano-water-membranes.jpg',
      'Tavo Romann',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Graphene.jpg',
    ),
    sources: [
      cite(
        'Nair et al., Nature, 2012 — graphene-oxide water permeation',
        'https://www.nature.com/articles/nature11704',
      ),
      cite(
        'Abraham et al., Nature Nanotechnology, 2017',
        'https://www.nature.com/articles/nnano.2017.21',
      ),
    ],
  },
  {
    slug: 'carbios-enzymes',
    area: 'ecology',
    status: 'pilot',
    image: img(
      'carbios-enzymes.jpg',
      'SusuGeo',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:PET_bottles.jpg',
    ),
    sources: [
      cite('Carbios', 'https://www.carbios.com/'),
      cite(
        'Yoshida et al., Science, 2016 — Ideonella sakaiensis PETase',
        'https://www.science.org/doi/10.1126/science.aad6359',
      ),
    ],
  },
  {
    slug: 'methane-feed-additive',
    area: 'ecology',
    status: 'deployed',
    image: img(
      'methane-feed-additive.jpg',
      'Wikimedia Commons',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Holstein_dairy_cows.jpg',
    ),
    sources: [
      cite(
        'dsm-firmenich — 20,000 cows, 18 months in the Netherlands',
        'https://www.dsm-firmenich.com/en/businesses/taste-texture-health/news-events/articles/dairy/20000-cows-18-months-what-large-scale-farm-data-tells-us-about-bovaer-in-the-netherlands.html',
      ),
      cite(
        'EUR-Lex — Regulation (EU) 2022/565 (3-NOP / Bovaer)',
        'https://eur-lex.europa.eu/eli/reg_impl/2022/565/oj',
      ),
      cite(
        'dsm-firmenich — Bovaer US FDA review (May 2024)',
        'https://our-company.dsm-firmenich.com/en/our-company/news/press-releases/2024/methane-reducing-feed-ingredient-bovaer-ready-for-us-market-launch.html',
      ),
    ],
  },
  {
    slug: 'deep-sky-alpha',
    area: 'ecology',
    status: 'pilot',
    image: img(
      'deep-sky-alpha.jpg',
      'Net Power Inc.',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:NET_Power_Plant.jpg',
    ),
    sources: [
      cite(
        'Reuters — Deep Sky delivers North America’s first DAC credits (29 June 2026)',
        'https://www.reuters.com/sustainability/climate-energy/canadian-company-delivers-north-americas-first-direct-air-capture-carbon-credits-2026-06-29/',
      ),
      cite('Deep Sky Alpha', 'https://www.deepskyclimate.com/alpha'),
    ],
  },
  {
    slug: 'avnos-project-brighton',
    area: 'ecology',
    status: 'pilot',
    image: img(
      'avnos-project-brighton.jpg',
      'National Institute for Occupational Safety and Health (NIOSH)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Water_treatment_plant.jpg',
    ),
    sources: [
      cite(
        'Interesting Engineering — U.S. plant captures 450 tons of airborne CO₂',
        'https://interestingengineering.com/energy/us-plant-captures-450-tons-of-airborne-co2',
      ),
      cite(
        'Avnos — Project Brighton enters operations',
        'https://avnos.com/avnos-largest-hybrid-direct-air-capture-deployment-enters-operations/',
      ),
    ],
  },
  {
    slug: 'yara-sluiskil-ccs',
    area: 'ecology',
    status: 'deployed',
    image: img(
      'yara-sluiskil-ccs.jpg',
      'Adriaan van Oost',
      'CC BY 3.0',
      'https://commons.wikimedia.org/wiki/File:TERNEUZEN_-_panoramio.jpg',
    ),
    sources: [
      cite(
        'CarbonCredits — Yara Sluiskil CCS inauguration (Sep 2026)',
        'https://carboncredits.com/yara-europe-largest-carbon-capture-facility-netherlands/',
      ),
      cite('Northern Lights — who we are', 'https://norlights.com/who-we-are/'),
    ],
  },
  {
    slug: 'samsara-eco',
    area: 'ecology',
    status: 'pilot',
    image: img(
      'samsara-eco.jpg',
      'Grendelkhan',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Bales_of_PET_bottles_closeup.jpg',
    ),
    sources: [
      cite(
        'PKN Packaging News — Samsara Eco opens first enzymatic recycling plant',
        'https://www.packagingnews.com.au/latest/samsara-eco-opens-first-enzymatic-recycling-plant',
      ),
      cite('Samsara Eco', 'https://www.samsaraeco.com/'),
    ],
  },
  {
    slug: 'iter-fusion',
    area: 'energy',
    status: 'research',
    image: img(
      'iter-fusion.jpg',
      'Oak Ridge National Laboratory',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:ITER_site_2018_aerial_view_(41809720041).jpg',
    ),
    sources: [
      cite('ITER Organization', 'https://www.iter.org/'),
      cite('ITER — FAQs', 'https://www.iter.org/faqs'),
    ],
  },
  {
    slug: 'nif-inertial-fusion',
    area: 'energy',
    status: 'research',
    image: img(
      'nif-inertial-fusion.jpg',
      'Lawrence Livermore National Security',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:National_Ignition_Facility%27s_target_chamber.jpg',
    ),
    sources: [
      cite(
        'LLNL — Achieving fusion ignition',
        'https://lasers.llnl.gov/science/achieving-fusion-ignition',
      ),
      cite(
        'U.S. DOE — NIF ignition announcement (13 Dec 2022)',
        'https://www.energy.gov/articles/doe-national-laboratory-makes-history-achieving-fusion-ignition',
      ),
    ],
  },
  {
    slug: 'fervo-geothermal',
    area: 'energy',
    status: 'pilot',
    image: img(
      'fervo-geothermal.jpg',
      'Stepheng3',
      'CC0',
      'https://commons.wikimedia.org/wiki/File:Sonoma_Plant_at_The_Geysers_4778.png',
    ),
    sources: [
      cite(
        'CNBC — Fervo Cape Station aims to power the data-center boom (5 Sep 2026)',
        'https://www.cnbc.com/2026/09/05/fervo-energys-enhanced-geothermal-project-aims-to-power-data-center-boom.html',
      ),
      cite('Fervo Energy', 'https://fervoenergy.com/'),
      cite(
        'Google — Project Red operational (28 Nov 2023)',
        'https://blog.google/outreach-initiatives/sustainability/google-fervo-geothermal-energy-partnership/',
      ),
    ],
  },
  {
    slug: 'long-duration-storage',
    area: 'energy',
    status: 'pilot',
    image: img(
      'long-duration-storage.jpg',
      'UniEnergy Technologies',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:1_MW_4_MWh_Turner_Energy_Storage_Project_in_Pullman,_WA.jpg',
    ),
    sources: [
      cite(
        'Utility Dive — Form Energy 300 MW / 30 GWh in Google–Xcel agreement',
        'https://www.utilitydive.com/news/worlds-largest-grid-battery-part-of-google-xcel-energy-agreement/813793/',
      ),
      cite('Form Energy', 'https://formenergy.com/'),
      cite(
        'Form Energy — iron-air chemistry',
        'https://formenergy.com/form-energy-unveils-chemistry-of-multi-day-storage-battery-technology/',
      ),
    ],
  },
  {
    slug: 'quaise-mmwave-drilling',
    area: 'energy',
    status: 'research',
    image: img(
      'quaise-mmwave-drilling.jpg',
      'Calistemon',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Drill_rig,_Pilbara,_August_2007.jpg',
    ),
    sources: [
      cite(
        'Energy Global — Quaise millimetre-wave drilling milestone (24 July 2025)',
        'https://www.energyglobal.com/other-renewables/24072025/quaise-energy-achieves-drilling-milestone-with-millimetre-wave-technology/',
      ),
      cite('Quaise Energy', 'https://www.quaise.energy/'),
    ],
  },
  {
    slug: 'cfs-sparc',
    area: 'energy',
    status: 'research',
    image: img(
      'cfs-sparc.jpg',
      'Johannes Reimer',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:ITER_Tokamak_mockup.jpg',
    ),
    sources: [
      cite(
        'CFS — SPARC progress and DOE milestone approvals',
        'https://blog.cfs.energy/sparc-progress-doe-milestone-approvals-reflect-cfs-power-plant-maturity/',
      ),
      cite('CFS — SPARC', 'https://cfs.energy/technology/sparc/'),
    ],
  },
  {
    slug: 'form-energy-ireland',
    area: 'energy',
    status: 'pilot',
    image: img(
      'form-energy-ireland.jpg',
      'Kecko',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Tesvolt_battery_energy_storage_system_Rheineck.jpg',
    ),
    sources: [
      cite(
        'Form Energy — first iron-air project in Ireland with FuturEnergy Ireland',
        'https://formenergy.com/form-energy-and-futurenergy-ireland-announce-agreement-to-deploy-first-iron-air-battery-storage-project-in-ireland/',
      ),
    ],
  },
  {
    slug: 'green-hydrogen',
    area: 'energy',
    status: 'pilot',
    image: img(
      'green-hydrogen.jpg',
      'TomFawls',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Liquid_hydrogen_storage_tank_at_Launch_Pad_39B.jpg',
    ),
    sources: [
      cite(
        'IEA — Hydrogen',
        'https://www.iea.org/energy-system/low-emission-fuels/hydrogen',
      ),
      cite(
        'IEA — Global Hydrogen Review 2024',
        'https://www.iea.org/reports/global-hydrogen-review-2024',
      ),
    ],
  },
  {
    slug: 'smr-nuclear',
    area: 'energy',
    status: 'pilot',
    image: img(
      'smr-nuclear.jpg',
      'Stefan Kühn',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Nuclear_Power_Plant_Cattenom.jpg',
    ),
    sources: [
      cite(
        'World Nuclear News — HTR-PM commercial operation (6 Dec 2023)',
        'https://world-nuclear-news.org/articles/chinese-htr-pm-demo-begins-commercial-operation',
      ),
      cite(
        'Tsinghua University — HTR-PM Demo',
        'https://www.tsinghua.edu.cn/en/info/1244/12578.htm',
      ),
      cite('IAEA — Small modular reactors', 'https://www.iaea.org/topics/small-modular-reactors'),
    ],
  },
  {
    slug: 'space-solar-power',
    area: 'energy',
    status: 'research',
    image: img(
      'space-solar-power.jpg',
      'NASA',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:ISS_solar_arrays.jpg',
    ),
    sources: [
      cite(
        'Caltech — SSPD-1 / MAPLE wireless power (2023)',
        'https://www.caltech.edu/about/news/in-a-first-caltechs-space-solar-power-demonstrator-wirelessly-transmits-power-in-space',
      ),
      cite(
        'ESA — SOLARIS',
        'https://www.esa.int/Enabling_Support/Space_Engineering_Technology/SOLARIS',
      ),
    ],
  },
  {
    slug: 'nano-electrolyzer-catalysts',
    area: 'energy',
    status: 'research',
    image: img(
      'nano-electrolyzer-catalysts.jpg',
      'Tiia Monto',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:PEM_fuel_cell.jpg',
    ),
    sources: [
      cite(
        'NREL — Hydrogen production and delivery',
        'https://www.nrel.gov/hydrogen/hydrogen-production-delivery.html',
      ),
      cite(
        'IEA — Electrolysers',
        'https://www.iea.org/energy-system/low-emission-fuels/electrolysers',
      ),
    ],
  },
  {
    slug: 'perpetual-motion',
    area: 'energy',
    status: 'myth-busted',
    image: img(
      'perpetual-motion.jpg',
      'George A. Bockler (historical engraving)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:WaterScrewPerpetualMotion.png',
    ),
    sources: [
      cite(
        'USPTO MPEP §2107 — utility / perpetual motion',
        'https://www.uspto.gov/web/offices/pac/mpep/s2107.html',
      ),
      cite('ITER Organization — real fusion research', 'https://www.iter.org/'),
    ],
  },
  {
    slug: 'graphcast-ai-weather',
    area: 'ai',
    status: 'deployed',
    image: img(
      'graphcast-ai-weather.jpg',
      'NOAA',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:GOES-16_ABI_Full_Disk_(32440453126).jpg',
    ),
    sources: [
      cite(
        'Lam et al., Science, 2023 — GraphCast',
        'https://www.science.org/doi/10.1126/science.adi2336',
      ),
      cite(
        'Google DeepMind — GraphCast',
        'https://deepmind.google/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/',
      ),
    ],
  },
  {
    slug: 'gnome-materials',
    area: 'ai',
    status: 'research',
    image: img(
      'gnome-materials.jpg',
      'Sanjay Acharya',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Quartz_crystal.jpg',
    ),
    sources: [
      cite(
        'Merchant et al., Nature, 2023 — GNoME',
        'https://www.nature.com/articles/s41586-023-06735-9',
      ),
      cite(
        'Google DeepMind — GNoME',
        'https://deepmind.google/blog/millions-of-new-materials-discovered-with-deep-learning/',
      ),
    ],
  },
  {
    slug: 'ai-grid-optimization',
    area: 'ai',
    status: 'pilot',
    image: img(
      'ai-grid-optimization.jpg',
      'Bidgee',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Electricity_pylons.jpg',
    ),
    sources: [
      cite(
        'Google DeepMind — wind-energy value (26 Feb 2019)',
        'https://deepmind.google/blog/machine-learning-can-boost-the-value-of-wind-energy/',
      ),
      cite(
        'IEA — Digitalisation and Energy',
        'https://www.iea.org/reports/digitalisation-and-energy',
      ),
    ],
  },
  {
    slug: 'alphafold-proteins',
    area: 'ai',
    status: 'deployed',
    image: img(
      'alphafold-proteins.jpg',
      'Fix Planet generated molecular ribbon — not a named AlphaFold prediction',
      'Site asset',
      '',
    ),
    sources: [
      cite('Google DeepMind — AlphaFold', 'https://deepmind.google/science/alphafold/'),
      cite(
        'Jumper et al., Nature, 2021 — AlphaFold 2',
        'https://www.nature.com/articles/s41586-021-03819-2',
      ),
      cite('AlphaFold Database — EMBL-EBI', 'https://alphafold.ebi.ac.uk/'),
    ],
  },
  {
    slug: 'amp-recycling-robots',
    area: 'ai',
    status: 'deployed',
    image: img(
      'amp-recycling-robots.jpg',
      'Fix Planet generated documentary still of a recycling robot on a conveyor — not an AMP Robotics press photo',
      'Site asset',
      '',
    ),
    sources: [
      cite('AMP Sortation', 'https://www.ampsortation.com/'),
    ],
  },
  {
    slug: 'quantum-computing',
    area: 'ai',
    status: 'research',
    image: img(
      'quantum-computing.jpg',
      'IBM Research',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:IBM_Q_system_(Fraunhofer_2).jpg',
    ),
    sources: [
      cite(
        'Google — Willow quantum chip (9 Dec 2024)',
        'https://blog.google/technology/research/google-willow-quantum-chip/',
      ),
      cite('IBM Quantum', 'https://www.ibm.com/quantum'),
    ],
  },
  {
    slug: 'climate-trace',
    area: 'ai',
    status: 'deployed',
    image: img(
      'climate-trace.jpg',
      'Trevor Harris',
      'CC BY-SA 2.0',
      'https://commons.wikimedia.org/wiki/File:Sunset_at_Coryton_Oil_Refinery_-_geograph.org.uk_-_1052273.jpg',
    ),
    sources: [
      cite(
        'Climate TRACE — v5.10 / first-half 2026 emissions (27 Aug 2026)',
        'https://climatetrace.org/news/climate-trace-data-show-marginal-increase-in-global-emissions-in-the-first-half-of-2026',
      ),
      cite('Climate TRACE — about the coalition', 'https://climatetrace.org/about'),
    ],
  },
  {
    slug: 'weathernext-3',
    area: 'ai',
    status: 'deployed',
    image: img(
      'weathernext-3.jpg',
      'NOAA Satellites',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:First_Full_Disk_Image_from_GOES-17_as_GOES_West_(40118037553).jpg',
    ),
    sources: [
      cite(
        'Google DeepMind — Introducing WeatherNext 3 (3 Sep 2026)',
        'https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/',
      ),
    ],
  },
  {
    slug: 'ecmwf-aifs',
    area: 'ai',
    status: 'deployed',
    image: img(
      'ecmwf-aifs.jpg',
      'James Hutchinson',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:European_Centre_for_Medium-Range_Weather_Forecasts.jpg',
    ),
    sources: [
      cite(
        'VAST Data — The weather model that taught itself physics (AIFS 1.1)',
        'https://www.vastdata.com/blog/the-weather-model-that-taught-itself-physics',
      ),
      cite(
        'Moldovan et al., GMD, 2026 — AIFS Single 1.1.0',
        'https://gmd.copernicus.org/articles/19/4703/2026/',
      ),
      cite(
        'ECMWF — AIFS version history',
        'https://confluence.ecmwf.int/spaces/UDOC/pages/599165907/AIFS+Version+History',
      ),
    ],
  },
  {
    slug: 'prithvi-earth-ai',
    area: 'ai',
    status: 'research',
    image: img(
      'prithvi-earth-ai.jpg',
      'Apollo 17 crew / NASA (AS17-148-22727)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:The_Blue_Marble.jpg',
    ),
    sources: [
      cite(
        'NASA Earthdata — Prithvi geospatial model (2023)',
        'https://www.earthdata.nasa.gov/news/nasa-ibm-openly-release-geospatial-ai-foundation-model-nasa-earth-observation-data',
      ),
      cite('IBM–NASA Prithvi models', 'https://huggingface.co/ibm-nasa-geospatial'),
    ],
  },
];

export function isInnovationArea(value: string | undefined): value is InnovationArea {
  return !!value && (innovationAreaKeys as readonly string[]).includes(value);
}

export function getInnovationMeta(slug: string): InnovationMeta | undefined {
  return innovationMeta.find((item) => item.slug === slug);
}

export function innovationImageSrc(image: ImageCredit): string {
  return `/images/innovations/${image.file}`;
}

export function innovationAreaPath(area: InnovationArea | 'all'): string {
  return area === 'all' ? '/innovations' : `/innovations/${area}`;
}

export function innovationPrimarySource(
  sources: PrimarySource[],
): PrimarySource | undefined {
  return sources[0];
}
