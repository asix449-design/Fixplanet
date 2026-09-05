export const site = {
  name: 'Fix Planet',
  domain: 'fixplanet.org',
  url: 'https://fixplanet.org',
  twitter: 'https://x.com/asix_449',
  twitterHandle: '@asix_449',
  bookAmazon: 'https://amzn.eu/d/0dZtkBPQ',
};

export const nav = [
  { href: '/solutions', key: 'solutions' },
  { href: '/maps', key: 'maps' },
  { href: '/law', key: 'law' },
  { href: '/wildlife', key: 'wildlife' },
  { href: '/forests', key: 'forests' },
  { href: '/book', key: 'book' },
  { href: '/about', key: 'about' },
] as const;

export const features = [
  { href: '/solutions', key: 'solutions', icon: 'leaf' },
  { href: '/maps', key: 'maps', icon: 'globe' },
  { href: '/law', key: 'law', icon: 'scales' },
  { href: '/wildlife', key: 'wildlife', icon: 'paw' },
] as const;
