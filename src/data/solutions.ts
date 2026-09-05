export type Solution = {
  slug: string;
  tag: string;
  problemTitle: string;
  fixTitle: string;
  problem: string;
  fix: string;
  latest?: boolean;
};

export const solutions: Solution[] = [
  {
    slug: 'drip-irrigation',
    tag: 'Water',
    problemTitle: 'Freshwater scarcity',
    fixTitle: 'Drip irrigation',
    problem:
      'Dry regions lose most irrigation water to evaporation and runoff.',
    fix: 'Drip irrigation delivers water to the root — less waste, higher yield.',
    latest: true,
  },
  {
    slug: 'constructed-wetlands',
    tag: 'Water',
    problemTitle: 'River & coastal pollution',
    fixTitle: 'Constructed wetlands',
    problem: 'Nutrients and sewage feed toxic algae and kill fish.',
    fix: 'Constructed wetlands filter water as living treatment systems.',
    latest: true,
  },
  {
    slug: 'sustainable-forestry',
    tag: 'Forests',
    problemTitle: 'Deforestation',
    fixTitle: 'Sustainable forestry',
    problem: 'Slow-growing timber drives logging of old forests.',
    fix: 'Fast-growing plantation species and sustainable forestry for building wood — pressure off wild forests.',
    latest: true,
  },
  {
    slug: 'anaerobic-digesters',
    tag: 'Waste',
    problemTitle: 'Food waste & methane',
    fixTitle: 'Anaerobic digesters',
    problem:
      'Landfilled food waste releases methane, a potent greenhouse gas.',
    fix: 'Anaerobic digesters turn waste into biogas and soil fertilizer.',
  },
  {
    slug: 'cool-roofs',
    tag: 'Cities',
    problemTitle: 'Urban heat',
    fixTitle: 'Cool roofs',
    problem: 'Dark roofs and asphalt trap heat and spike energy use.',
    fix: 'Cool roofs and reflective coatings lower temperatures and cut AC demand.',
  },
  {
    slug: 'lower-clinker-cement',
    tag: 'Materials',
    problemTitle: 'Cement emissions',
    fixTitle: 'Lower-clinker cements',
    problem: 'Ordinary cement is a major source of global CO₂.',
    fix: 'Lower-clinker cements (e.g. calcined clay & limestone blends) cut emissions at scale.',
  },
  {
    slug: 'river-interceptors',
    tag: 'Oceans',
    problemTitle: 'Plastic leakage',
    fixTitle: 'River interceptor barriers',
    problem: 'Rivers carry most plastic to the sea.',
    fix: 'River interceptor barriers catch litter upstream — cheaper than ocean cleanup alone.',
  },
  {
    slug: 'solar-microgrids',
    tag: 'Energy',
    problemTitle: 'Unreliable dirty power',
    fixTitle: 'Solar microgrids',
    problem:
      'Fossil grids lock in emissions and leave remote places in the dark.',
    fix: 'Solar microgrids deliver clean, local power where big plants don’t reach.',
    latest: true,
  },
];

export const latestSolutions = solutions.filter((s) => s.latest);

export const solutionTags = [
  'All',
  ...Array.from(new Set(solutions.map((s) => s.tag))),
];
