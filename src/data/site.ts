export const site = {
  name: 'Fix Planet',
  domain: 'fixplanet.org',
  url: 'https://fixplanet.org',
  twitter: 'https://x.com/asix_449',
  twitterHandle: '@asix_449',
  bookAmazon: 'https://amzn.eu/d/0dZtkBPQ',
};

/**
 * TODO: set this to the live Stripe / PayPal / Link checkout URL when payments open.
 * Keep empty until then. The header Donate button always goes to /donate — never invent
 * API keys or a fake card form.
 */
export const donateCheckoutUrl = '';

export const nav = [
  { href: '/solutions', key: 'solutions' },
  { href: '/innovations', key: 'innovations' },
  { href: '/maps', key: 'maps' },
  { href: '/law', key: 'law' },
  { href: '/wildlife', key: 'wildlife' },
  { href: '/forests', key: 'forests' },
  { href: '/book', key: 'book' },
  { href: '/about', key: 'about' },
] as const;

export const features = [
  { href: '/solutions', key: 'solutions', icon: 'leaf' },
  { href: '/innovations', key: 'innovations', icon: 'circuit' },
  { href: '/maps', key: 'maps', icon: 'globe' },
  { href: '/wildlife', key: 'wildlife', icon: 'paw' },
] as const;

/** Primary Home hub tiles — one entry per main nav destination. */
export const homeHub = [
  { href: '/solutions', key: 'solutions', icon: 'leaf' },
  { href: '/innovations', key: 'innovations', icon: 'circuit' },
  { href: '/maps', key: 'maps', icon: 'globe' },
  { href: '/law', key: 'law', icon: 'scales' },
  { href: '/wildlife', key: 'wildlife', icon: 'paw' },
  { href: '/forests', key: 'forests', icon: 'trees' },
  { href: '/book', key: 'book', icon: 'book' },
  { href: '/about', key: 'about', icon: 'compass' },
] as const;
