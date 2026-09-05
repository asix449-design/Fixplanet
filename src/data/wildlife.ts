export const wildlifeStatusKeys = [
  'surviving',
  'endangered',
  'extinct',
] as const;

export type WildlifeStatus = (typeof wildlifeStatusKeys)[number];

export const iucnKeys = [
  'EX',
  'CR',
  'CR_PE',
  'EN',
  'VU',
  'NT',
  'LC',
] as const;

export type IucnKey = (typeof iucnKeys)[number];

export type ImageCredit = {
  file: string;
  credit: string;
  license: string;
  sourceUrl: string;
};

export type SpeciesMeta = {
  slug: string;
  scientificName: string;
  status: WildlifeStatus;
  iucn: IucnKey;
  image: ImageCredit;
};

export type SpeciesCopy = {
  commonName: string;
  hook: string;
  imageAlt: string;
  what: string;
  range: string;
  story: string;
  when: string;
  humanRole: string;
  sources: string;
};

export type Species = SpeciesMeta & SpeciesCopy;

export const humanHeroImage: ImageCredit = {
  file: 'homo-sapiens.png',
  credit: 'Generated naturalistic figure for Fix Planet — not a portrait of a named person',
  license: 'Site asset',
  sourceUrl: '',
};

function commons(
  file: string,
  credit: string,
  license: string,
  sourceUrl: string,
): ImageCredit {
  return { file, credit, license, sourceUrl };
}

/**
 * Curated first list. To add a species:
 * 1. Add a row here (English slug, Latin name, tab, IUCN code, image credit).
 * 2. Add the same slug to en/ru/pl/lv in `src/i18n/wildlife.ts`.
 * 3. Drop a photo in `public/images/wildlife/{file}` (Wikimedia/PD preferred).
 * 4. `npm run build`.
 */
export const speciesMeta: SpeciesMeta[] = [
  {
    slug: 'gray-wolf',
    scientificName: 'Canis lupus',
    status: 'surviving',
    iucn: 'LC',
    image: commons(
      'gray-wolf.jpg',
      'Brendan J. O’Reilly / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Gray_Wolf.jpg',
    ),
  },
  {
    slug: 'brown-bear',
    scientificName: 'Ursus arctos',
    status: 'surviving',
    iucn: 'LC',
    image: commons(
      'brown-bear.jpg',
      'Malene Thyssen / Wikimedia Commons',
      'CC BY 2.5',
      'https://commons.wikimedia.org/wiki/File:Brown_bear_(Ursus_arctos_arctos)_running.jpg',
    ),
  },
  {
    slug: 'american-bison',
    scientificName: 'Bison bison',
    status: 'surviving',
    iucn: 'NT',
    image: commons(
      'american-bison.jpg',
      'Jack Dykinga / USDA (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:American_bison_k5680-1.jpg',
    ),
  },
  {
    slug: 'african-savanna-elephant',
    scientificName: 'Loxodonta africana',
    status: 'surviving',
    iucn: 'EN',
    image: commons(
      'african-savanna-elephant.jpg',
      'Muhammad Mahdi Karim / Wikimedia Commons',
      'GFDL 1.2',
      'https://commons.wikimedia.org/wiki/File:African_Bush_Elephant.jpg',
    ),
  },
  {
    slug: 'lion',
    scientificName: 'Panthera leo',
    status: 'surviving',
    iucn: 'VU',
    image: commons(
      'lion.jpg',
      'Kevin Pluck / Wikimedia Commons',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Lion_waiting_in_Namibia.jpg',
    ),
  },
  {
    slug: 'red-deer',
    scientificName: 'Cervus elaphus',
    status: 'surviving',
    iucn: 'LC',
    image: commons(
      'red-deer.jpg',
      'Luc Viatour / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Cervus_elaphus_Luc_Viatour_1.jpg',
    ),
  },
  {
    slug: 'wild-boar',
    scientificName: 'Sus scrofa',
    status: 'surviving',
    iucn: 'LC',
    image: commons(
      'wild-boar.jpg',
      'Joshua Lutz / Wikimedia Commons',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Sus_scrofa_scrofa.jpg',
    ),
  },
  {
    slug: 'european-beaver',
    scientificName: 'Castor fiber',
    status: 'surviving',
    iucn: 'LC',
    image: commons(
      'european-beaver.jpg',
      'Bouke ten Cate / Wikimedia Commons',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:Bever_-_Eurasian_beaver_-_Castor_fiber_6.jpg',
    ),
  },
  {
    slug: 'humpback-whale',
    scientificName: 'Megaptera novaeangliae',
    status: 'surviving',
    iucn: 'LC',
    image: commons(
      'humpback-whale.jpg',
      'Whit Welles / Wikimedia Commons',
      'CC BY 3.0',
      'https://commons.wikimedia.org/wiki/File:Humpback_stellwagen_edit.jpg',
    ),
  },
  {
    slug: 'vaquita',
    scientificName: 'Phocoena sinus',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'vaquita.jpg',
      'Paula Olson / NOAA (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Vaquita4_Olson_NOAA.jpg',
    ),
  },
  {
    slug: 'amur-tiger',
    scientificName: 'Panthera tigris altaica',
    status: 'endangered',
    iucn: 'EN',
    image: commons(
      'amur-tiger.jpg',
      'Brocken Inaglory / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Siberian_Tiger_sf.jpg',
    ),
  },
  {
    slug: 'sumatran-orangutan',
    scientificName: 'Pongo abelii',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'sumatran-orangutan.jpg',
      'Calistemon / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Sumatran_Orangutan_(Pongo_abelii)_at_Perth_Zoo,_October_2024_18.jpg',
    ),
  },
  {
    slug: 'black-rhino',
    scientificName: 'Diceros bicornis',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'black-rhino.jpg',
      'Jonathunder / Wikimedia Commons',
      'GFDL 1.2',
      'https://commons.wikimedia.org/wiki/File:Diceros_bicornis.jpg',
    ),
  },
  {
    slug: 'african-forest-elephant',
    scientificName: 'Loxodonta cyclotis',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'african-forest-elephant.jpg',
      'Christian Vigna / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:African_Forest_Elephant.jpg',
    ),
  },
  {
    slug: 'mountain-gorilla',
    scientificName: 'Gorilla beringei beringei',
    status: 'endangered',
    iucn: 'EN',
    image: commons(
      'mountain-gorilla.jpg',
      'Charles J. Sharp / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Mountain_gorilla_(Gorilla_beringei_beringei)_female_2.jpg',
    ),
  },
  {
    slug: 'amur-leopard',
    scientificName: 'Panthera pardus orientalis',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'amur-leopard.jpg',
      'Derek Ramsey / Wikimedia Commons',
      'CC BY-SA 2.5',
      'https://commons.wikimedia.org/wiki/File:Amur_Leopard_Panthera_pardus_orientalis_Facing_Forward_1761px.jpg',
    ),
  },
  {
    slug: 'hawksbill-turtle',
    scientificName: 'Eretmochelys imbricata',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'hawksbill-turtle.jpg',
      'U.S. Fish and Wildlife Service (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Hawksbill_sea_turtle_swimming.jpg',
    ),
  },
  {
    slug: 'woolly-mammoth',
    scientificName: 'Mammuthus primigenius',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'woolly-mammoth.jpg',
      'Flying Puffin / Wikimedia Commons',
      'CC BY-SA 2.0',
      'https://commons.wikimedia.org/wiki/File:Woolly_mammoth.jpg',
    ),
  },
  {
    slug: 'dodo',
    scientificName: 'Raphus cucullatus',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'dodo.jpg',
      'BazzaDaRambler / Wikimedia Commons',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Oxford_Dodo_display.jpg',
    ),
  },
  {
    slug: 'passenger-pigeon',
    scientificName: 'Ectopistes migratorius',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'passenger-pigeon.jpg',
      'James St. John / Wikimedia Commons',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Ectopistes_migratorius_(passenger_pigeon).jpg',
    ),
  },
  {
    slug: 'thylacine',
    scientificName: 'Thylacinus cynocephalus',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'thylacine.jpg',
      'E.J. Keller (historical photograph, Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Thylacinus.jpg',
    ),
  },
  {
    slug: 'stellers-sea-cow',
    scientificName: 'Hydrodamalis gigas',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'stellers-sea-cow.jpg',
      'Historical natural-history plate / Wikimedia Commons',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Extanstellersseacowea.jpg',
    ),
  },
  {
    slug: 'aurochs',
    scientificName: 'Bos primigenius',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'aurochs.jpg',
      'Jaap Rouwenhorst / DFoidl / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Aurochs_reconstruction.jpg',
    ),
  },
  {
    slug: 'great-auk',
    scientificName: 'Pinguinus impennis',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'great-auk.jpg',
      'J. G. Wood (public-domain engraving, Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Pinguinus_impennis.jpg',
    ),
  },
  {
    slug: 'caribbean-monk-seal',
    scientificName: 'Neomonachus tropicalis',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'caribbean-monk-seal.jpg',
      'Historical engraving / Wikimedia Commons',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Monachus_tropicalis.jpg',
    ),
  },
  {
    slug: 'quagga',
    scientificName: 'Equus quagga quagga',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'quagga.jpg',
      'Frederick York, c. 1870 (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Quagga_photo.jpg',
    ),
  },
  {
    slug: 'western-black-rhinoceros',
    scientificName: 'Diceros bicornis longipes',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'western-black-rhinoceros.jpg',
      'Senckenberg Museum (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Diceros_bicornis_longipes.jpg',
    ),
  },
  {
    slug: 'baiji',
    scientificName: 'Lipotes vexillifer',
    status: 'extinct',
    iucn: 'CR_PE',
    image: commons(
      'baiji.png',
      'Alessio Marrucci / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Lipotes_vexillifer.png',
    ),
  },
  {
    slug: 'moa',
    scientificName: 'Dinornis robustus',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'moa.jpg',
      'Daniel Louis Mundy, 1867 (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Dinornis_robustus.jpg',
    ),
  },
];

export function isWildlifeStatus(value: string | undefined): value is WildlifeStatus {
  return !!value && (wildlifeStatusKeys as readonly string[]).includes(value);
}

export function getSpeciesMeta(slug: string): SpeciesMeta | undefined {
  return speciesMeta.find((item) => item.slug === slug);
}

export function wildlifeImageSrc(image: ImageCredit): string {
  return `/images/wildlife/${image.file}`;
}

export function wildlifeStatusPath(status: WildlifeStatus): string {
  return status === 'surviving' ? '/wildlife' : `/wildlife/${status}`;
}
