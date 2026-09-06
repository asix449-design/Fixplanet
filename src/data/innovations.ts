export const innovationAreaKeys = ['ecology', 'energy', 'ai'] as const;

export type InnovationArea = (typeof innovationAreaKeys)[number];

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
  sources: string;
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
 * 1. Add a row here (English slug, area, status, image credit).
 * 2. Add the same slug to en / ru / pl / lv in `src/i18n/innovations.ts`
 *    (and the locale files beside it).
 * 3. Drop a licensed or generated image in `public/images/innovations/{file}`.
 * 4. `npm run build`.
 *
 * Slugs stay English in every language. Do not invent breakthroughs.
 * Perpetual-motion / “free energy” devices belong only as myth-busted cards.
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
