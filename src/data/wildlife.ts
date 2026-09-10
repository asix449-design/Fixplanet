import type { HubIconName } from './hub';

export const wildlifeStatusKeys = [
  'surviving',
  'endangered',
  'extinct',
] as const;

export type WildlifeStatus = (typeof wildlifeStatusKeys)[number];

export const wildlifeHubKeys = [
  ...wildlifeStatusKeys,
  'homo-sapiens',
] as const;

export type WildlifeHubKey = (typeof wildlifeHubKeys)[number];

/** Hub tiles with a Coming soon badge and no catalog shelf yet. */
export const wildlifeSoonKeys = ['insects', 'domesticates'] as const;

export type WildlifeSoonKey = (typeof wildlifeSoonKeys)[number];

export type WildlifeHubTileKey = WildlifeHubKey | WildlifeSoonKey;

export const wildlifeHub = [
  { key: 'surviving', icon: 'paw' },
  { key: 'endangered', icon: 'alert' },
  { key: 'extinct', icon: 'gone' },
  { key: 'homo-sapiens', icon: 'human' },
  { key: 'insects', icon: 'insect', soon: true },
  { key: 'domesticates', icon: 'horse', soon: true },
] as const satisfies ReadonlyArray<{
  key: WildlifeHubTileKey;
  icon: HubIconName;
  soon?: true;
}>;

export const iucnKeys = [
  'EX',
  'EW',
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
  /** Extra card label when IUCN CR still overstates a wild breeding population. */
  functionallyExtinct?: boolean;
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
 * 1. Add a row here (English slug, Latin name, status shelf, IUCN code, image credit).
 * 2. Add the same slug to en/ru/pl/lv in `src/i18n/wildlife.ts`.
 * 3. Drop a photo in `public/images/wildlife/{file}` (Wikimedia/PD preferred).
 * 4. `npm run build`.
 * Homo sapiens copy is not a species card — it lives on the `/wildlife/homo-sapiens`
 * shelf (species frame). The Late Pleistocene journey is told on `/migration/humans`.
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
    slug: 'northern-white-rhinoceros',
    scientificName: 'Ceratotherium simum cottoni',
    status: 'endangered',
    iucn: 'CR',
    functionallyExtinct: true,
    image: commons(
      'northern-white-rhinoceros.jpg',
      'Sheep81 / Wikimedia Commons (Angalifu, San Diego Zoo)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Northern_White_Rhinoceros_Angalifu.jpg',
    ),
  },
  {
    slug: 'javan-rhinoceros',
    scientificName: 'Rhinoceros sondaicus',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'javan-rhinoceros.jpg',
      'T. Dixon / Zoological Society of London (historical photograph, Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Rhinoceros_sondaicus_in_London_Zoo.jpg',
    ),
  },
  {
    slug: 'sumatran-rhinoceros',
    scientificName: 'Dicerorhinus sumatrensis',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'sumatran-rhinoceros.jpg',
      'Willem v Strien / Wikimedia Commons',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Sumatran_Rhinoceros_Way_Kambas_2008.jpg',
    ),
  },
  {
    slug: 'saola',
    scientificName: 'Pseudoryx nghetinhensis',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'saola.png',
      'Silviculture / Vietnamese Wikipedia (Wikimedia Commons)',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Pseudoryx_nghetinhensis.PNG',
    ),
  },
  {
    slug: 'yangtze-giant-softshell-turtle',
    scientificName: 'Rafetus swinhoei',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'yangtze-giant-softshell-turtle.jpg',
      'Phuongcacanh / Vietnamese Wikipedia (Wikimedia Commons)',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:R%C3%B9a_%C4%90%E1%BB%93ng_M%C3%B4.jpg',
    ),
  },
  {
    slug: 'kakapo',
    scientificName: 'Strigops habroptilus',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'kakapo.jpg',
      'Department of Conservation / Wikimedia Commons',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Kakapo_Sirocco_1.jpg',
    ),
  },
  {
    slug: 'axolotl',
    scientificName: 'Ambystoma mexicanum',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'axolotl.jpg',
      'Stan Shebs / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Ambystoma_mexicanum_1.jpg',
    ),
  },
  {
    slug: 'chinese-giant-salamander',
    scientificName: 'Andrias davidianus',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'chinese-giant-salamander.jpg',
      'Petr Hamerník / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Velemlok_%C4%8D%C3%ADnsk%C3%BD_zoo_praha_1.jpg',
    ),
  },
  {
    slug: 'addax',
    scientificName: 'Addax nasomaculatus',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'addax.jpg',
      'Dezidor / Wikimedia Commons',
      'CC BY 3.0',
      'https://commons.wikimedia.org/wiki/File:Addax_nasomaculatus.jpg',
    ),
  },
  {
    slug: 'cao-vit-gibbon',
    scientificName: 'Nomascus nasutus',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'cao-vit-gibbon.jpg',
      'Laura Flamme / MNHN holotype (Wikimedia Commons)',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:Nomascus_nasutus.jpg',
    ),
  },
  {
    slug: 'spixs-macaw',
    scientificName: 'Cyanopsitta spixii',
    status: 'extinct',
    iucn: 'EW',
    image: commons(
      'spixs-macaw.jpg',
      'Evan Centanni / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Spix%27s_Macaw_(Cyanopsitta_spixii)_at_Jurong_Bird_Park_in_Singapore.jpg',
    ),
  },
  {
    slug: 'devils-hole-pupfish',
    scientificName: 'Cyprinodon diabolis',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'devils-hole-pupfish.jpg',
      'Olin Feuerbacher / U.S. National Park Service (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Blue_Devils_Hole_pupfish_(NPS).jpg',
    ),
  },
  {
    slug: 'chinese-pangolin',
    scientificName: 'Manis pentadactyla',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'chinese-pangolin.jpg',
      'Claire H. / Wikimedia Commons',
      'CC BY-SA 2.0',
      'https://commons.wikimedia.org/wiki/File:Manis_pentadactyla.jpg',
    ),
  },
  {
    slug: 'sunda-pangolin',
    scientificName: 'Manis javanica',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'sunda-pangolin.jpg',
      'Ari hidayat99 / Wikimedia Commons',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Manis_javanica.jpg',
    ),
  },
  {
    slug: 'philippine-pangolin',
    scientificName: 'Manis culionensis',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'philippine-pangolin.jpg',
      'Rodine Teodoro / Philippine Postal Corporation (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Philippine_pangolin_2015_stamp_of_the_Philippines.jpg',
    ),
  },
  {
    slug: 'indian-pangolin',
    scientificName: 'Manis crassicaudata',
    status: 'endangered',
    iucn: 'EN',
    image: commons(
      'indian-pangolin.jpg',
      'Dushy Ranetunge / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Scaly_ant_eater_by_Dushy_Ranetunge_2.jpg',
    ),
  },
  {
    slug: 'sumatran-tiger',
    scientificName: 'Panthera tigris sumatrae',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'sumatran-tiger.jpg',
      'CrazyPhunk / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Panthera_tigris_sumatrae.jpg',
    ),
  },
  {
    slug: 'rices-whale',
    scientificName: 'Balaenoptera ricei',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'rices-whale.jpg',
      'NOAA (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Rice%27s_whale_close_to_surface.jpg',
    ),
  },
  {
    slug: 'north-atlantic-right-whale',
    scientificName: 'Eubalaena glacialis',
    status: 'endangered',
    iucn: 'CR',
    image: commons(
      'north-atlantic-right-whale.jpg',
      'NOAA (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Eubalaena_glacialis_with_calf.jpg',
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
  {
    slug: 'irish-elk',
    scientificName: 'Megaloceros giganteus',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'irish-elk.jpg',
      'Postdlf / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Irish_Elk.jpg',
    ),
  },
  {
    slug: 'smilodon',
    scientificName: 'Smilodon fatalis',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'smilodon.jpg',
      'John Cummings / Natural History Museum, London (Wikimedia Commons)',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Saber-toothed_cat_(Smilodon_fatalis)_reconstruction,_Natural_History_Museum,_London,_Mammals_Gallery.JPG',
    ),
  },
  {
    slug: 'megatherium',
    scientificName: 'Megatherium americanum',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'megatherium.jpg',
      'Ballista / Wikimedia Commons',
      'CC BY-SA 3.0',
      'https://commons.wikimedia.org/wiki/File:Megatherium_americanum_Skeleton_NHM.JPG',
    ),
  },
  {
    slug: 'thylacoleo',
    scientificName: 'Thylacoleo carnifex',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'thylacoleo.jpg',
      'David Hocking / Museums Victoria (Wikimedia Commons)',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:Thylacoleo_carnifex_skull.jpg',
    ),
  },
  {
    slug: 'diprotodon',
    scientificName: 'Diprotodon optatum',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'diprotodon.jpg',
      'Nobu Tamura / Wikimedia Commons',
      'CC BY 3.0',
      'https://commons.wikimedia.org/wiki/File:Diprotodon_optatum.jpg',
    ),
  },
  {
    slug: 'haast-eagle',
    scientificName: 'Hieraaetus moorei',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'haast-eagle.jpg',
      'John Megahan / Wikimedia Commons',
      'CC BY 2.5',
      'https://commons.wikimedia.org/wiki/File:Giant_Haasts_eagle_attacking_New_Zealand_moa.jpg',
    ),
  },
  {
    slug: 'elephant-bird',
    scientificName: 'Aepyornis maximus',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'elephant-bird.jpg',
      'Monnier (historical museum photograph, Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Aepyornis_maximus.jpg',
    ),
  },
  {
    slug: 'carolina-parakeet',
    scientificName: 'Conuropsis carolinensis',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'carolina-parakeet.jpg',
      'James St. John / Wikimedia Commons',
      'CC BY 2.0',
      'https://commons.wikimedia.org/wiki/File:Conuropsis_carolinensis_(Carolina_parakeet).jpg',
    ),
  },
  {
    slug: 'falkland-islands-wolf',
    scientificName: 'Dusicyon australis',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'falkland-islands-wolf.jpg',
      'Kane Fleury / MothmanNZ / Wikimedia Commons',
      'CC BY 4.0',
      'https://commons.wikimedia.org/wiki/File:Falkland_Island_wolf,_Dusicyon_australis_OMNZVT2369_!1pub_(cropped).jpg',
    ),
  },
  {
    slug: 'bluebuck',
    scientificName: 'Hippotragus leucophaeus',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'bluebuck.jpg',
      'Sandstein / Naturhistorisches Museum Wien (Wikimedia Commons)',
      'CC BY 3.0',
      'https://commons.wikimedia.org/wiki/File:Hippotragus_leucophaeus,_Naturhistorisches_Museum_Wien.jpg',
    ),
  },
  {
    slug: 'pyrenean-ibex',
    scientificName: 'Capra pyrenaica pyrenaica',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'pyrenean-ibex.jpg',
      'Roger Culos / MHNT (Wikimedia Commons)',
      'CC BY-SA 4.0',
      'https://commons.wikimedia.org/wiki/File:Capra_pyrenaica_pyrenaica_MHNT_ART_39.jpg',
    ),
  },
  {
    slug: 'japanese-sea-lion',
    scientificName: 'Zalophus japonicus',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'japanese-sea-lion.jpg',
      'Unknown photographer, Takeshima, June 1934 (Wikimedia Commons)',
      'Public domain',
      'https://commons.wikimedia.org/wiki/File:Sea_lion_in_Takeshima,_Japan_(June_1934).jpg',
    ),
  },
  {
    slug: 'kauai-oo',
    scientificName: 'Moho braccatus',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'kauai-oo.jpg',
      'Hiart / Bishop Museum, Honolulu (Wikimedia Commons)',
      'CC0',
      'https://commons.wikimedia.org/wiki/File:Moho_braccatus_Cassin,_Bishop_Museum,_Honolulu.JPG',
    ),
  },
  {
    slug: 'bramble-cay-melomys',
    scientificName: 'Melomys rubicola',
    status: 'extinct',
    iucn: 'EX',
    image: commons(
      'bramble-cay-melomys.jpg',
      'Ian Bell, Queensland Department of Environment and Heritage Protection (Wikimedia Commons)',
      'CC BY 3.0 AU',
      'https://commons.wikimedia.org/wiki/File:Bramble-cay-melomys.jpg',
    ),
  },
];

export function isWildlifeStatus(value: string | undefined): value is WildlifeStatus {
  return !!value && (wildlifeStatusKeys as readonly string[]).includes(value);
}

export function isWildlifeHubKey(value: string | undefined): value is WildlifeHubKey {
  return !!value && (wildlifeHubKeys as readonly string[]).includes(value);
}

export function isWildlifeSoonKey(value: string | undefined): value is WildlifeSoonKey {
  return !!value && (wildlifeSoonKeys as readonly string[]).includes(value);
}

export function getSpeciesMeta(slug: string): SpeciesMeta | undefined {
  return speciesMeta.find((item) => item.slug === slug);
}

export function wildlifeImageSrc(image: ImageCredit): string {
  return `/images/wildlife/${image.file}`;
}

/** Hub-only hero. Species shelves keep the blurred section backdrop. */
export const wildlifeHubBackdrop = {
  file: 'wildlife-hub-bg.jpg',
  credit: 'Founder-supplied deer drinking from a river at sunset',
  license: 'Site asset',
  width: 864,
  height: 1152,
} as const;

export const wildlifeHubSrc = `/images/wildlife/${wildlifeHubBackdrop.file}`;
export const wildlifeSectionSrc = '/images/wildlife/wildlife-section-bg.jpg';

export function wildlifeHubPath(key: WildlifeHubKey): string {
  return `/wildlife/${key}`;
}

/** Live shelf path, or undefined for Coming soon hub tiles with no catalog yet. */
export function wildlifeHubTilePath(
  item: (typeof wildlifeHub)[number],
): string | undefined {
  if ('soon' in item && item.soon) return undefined;
  return isWildlifeHubKey(item.key) ? wildlifeHubPath(item.key) : undefined;
}

export function wildlifeStatusPath(status: WildlifeStatus): string {
  return wildlifeHubPath(status);
}
