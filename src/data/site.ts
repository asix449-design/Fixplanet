export const site = {
  name: 'Fix Planet',
  domain: 'fixplanet.org',
  url: 'https://fixplanet.org',
  twitter: 'https://x.com/asix_449',
  twitterHandle: '@asix_449',
  bookAmazon: 'https://amzn.eu/d/0dZtkBPQ',
};

/**
 * Live Stripe Payment Link for Fix Planet support. Header and footer still go
 * to /donate (disclaimer + context). The donate page and About CTA open this
 * URL in a new tab. Not a tax-deductible charity gift.
 */
export const donateCheckoutUrl =
  'https://buy.stripe.com/00w3cnbA548A5Za7PKffy00';

/**
 * Temporarily hide Book from header, home hub, and footer while New World is
 * being edited. `/book` routes and About copy stay live. Flip to true to restore.
 */
export const SHOW_BOOK_NAV = false;

const allNav = [
  { href: '/solutions', key: 'solutions' },
  { href: '/innovations', key: 'innovations' },
  { href: '/terraforming', key: 'terraforming' },
  { href: '/maps', key: 'maps' },
  { href: '/law', key: 'law' },
  { href: '/wildlife', key: 'wildlife' },
  { href: '/migration', key: 'migration' },
  { href: '/forests', key: 'forests' },
  { href: '/oceans', key: 'oceans' },
  { href: '/book', key: 'book' },
  { href: '/about', key: 'about' },
] as const;

export const nav = allNav.filter(
  (item) => SHOW_BOOK_NAV || item.key !== 'book',
);

export const features = [
  { href: '/solutions', key: 'solutions', icon: 'leaf' },
  { href: '/innovations', key: 'innovations', icon: 'circuit' },
  { href: '/maps', key: 'maps', icon: 'globe' },
  { href: '/wildlife', key: 'wildlife', icon: 'paw' },
] as const;

/** Founder-supplied Home tile art. Book stays unmapped while hidden from nav. */
export const homeTileArt = {
  solutions: '/images/home-tiles/solutions.jpg',
  innovations: '/images/home-tiles/innovations.jpg',
  terraforming: '/images/home-tiles/terraforming.jpg',
  maps: '/images/home-tiles/maps.jpg',
  law: '/images/home-tiles/law.jpg',
  wildlife: '/images/home-tiles/nature.jpg',
  migration: '/images/home-tiles/migration.jpg',
  forests: '/images/home-tiles/forests.jpg',
  oceans: '/images/home-tiles/oceans.jpg',
  about: '/images/home-tiles/about.jpg',
} as const;

/** Primary Home hub tiles — one entry per main nav destination. */
const allHomeHub = [
  { href: '/solutions', key: 'solutions', icon: 'leaf' },
  { href: '/innovations', key: 'innovations', icon: 'circuit' },
  { href: '/terraforming', key: 'terraforming', icon: 'terrain' },
  { href: '/maps', key: 'maps', icon: 'globe' },
  { href: '/law', key: 'law', icon: 'scales' },
  { href: '/wildlife', key: 'wildlife', icon: 'paw' },
  { href: '/migration', key: 'migration', icon: 'migrate' },
  { href: '/forests', key: 'forests', icon: 'trees' },
  { href: '/oceans', key: 'oceans', icon: 'wave' },
  { href: '/book', key: 'book', icon: 'book' },
  { href: '/about', key: 'about', icon: 'compass' },
] as const;

export const homeHub = allHomeHub.filter(
  (item) => SHOW_BOOK_NAV || item.key !== 'book',
);
