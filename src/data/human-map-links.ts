import { cite, type PrimarySource } from './sources';

export const humanMapLinkIds = [
  'human-odyssey',
  'early-fossils',
  'hominid-evolution',
] as const;

export type HumanMapLinkId = (typeof humanMapLinkIds)[number];

export type HumanMapExtraId =
  | 'odyssey-exhibit'
  | 'fossil-wikipedia'
  | 'era-australopithecus'
  | 'era-erectus'
  | 'era-sapiens';

export type HumanMapLinkMeta = {
  id: HumanMapLinkId;
  href: string;
  extras: ReadonlyArray<{ id: HumanMapExtraId; href: string }>;
  source: PrimarySource;
};

/** Cartetika listed these maps — attribution only, not a primary paper. */
export const cartetikaRoundup = cite(
  'Cartetika — maps of early human migrations (roundup, not a primary paper)',
  'https://cartetika.ru/tpost/xbc3v1db01-karti-rannih-migratsii-lyudei',
);

/**
 * Public teaching maps for the Humans shelf. Link out only — no iframes.
 * Verify hosts before changing URLs. Do not invent arrival years here.
 */
export const humanMapLinkMeta: readonly HumanMapLinkMeta[] = [
  {
    id: 'human-odyssey',
    href: 'https://legacy.calacademy.org/human-odyssey/map/',
    extras: [
      {
        id: 'odyssey-exhibit',
        href: 'https://www.calacademy.org/exhibits/human-odyssey',
      },
    ],
    source: cite(
      'California Academy of Sciences — Human Odyssey',
      'https://www.calacademy.org/exhibits/human-odyssey',
    ),
  },
  {
    id: 'early-fossils',
    href: 'https://googlemapsmania.blogspot.com/2020/03/out-of-africa-story-of-human-migration.html',
    extras: [
      {
        id: 'fossil-wikipedia',
        href: 'https://en.wikipedia.org/wiki/List_of_human_evolution_fossils',
      },
    ],
    source: cite(
      'Wikipedia — List of human evolution fossils (durable catalog)',
      'https://en.wikipedia.org/wiki/List_of_human_evolution_fossils',
    ),
  },
  {
    id: 'hominid-evolution',
    href: 'http://atlasofhumanevolution.com/Maps.asp',
    extras: [
      {
        id: 'era-australopithecus',
        href: 'http://atlasofhumanevolution.com/australopithecus.asp',
      },
      {
        id: 'era-erectus',
        href: 'http://atlasofhumanevolution.com/HomoErectus.asp',
      },
      {
        id: 'era-sapiens',
        href: 'http://atlasofhumanevolution.com/HomoSapiens.asp',
      },
    ],
    source: cite(
      'Atlas of Human Evolution — interactive maps covering ~7 million years',
      'http://atlasofhumanevolution.com/Maps.asp',
    ),
  },
];
