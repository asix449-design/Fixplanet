export const site = {
  name: 'Fix Planet',
  domain: 'fixplanet.org',
  url: 'https://fixplanet.org',
  tagline: 'Problems. Fixes. Proof.',
  description:
    'A living atlas of technologies that repair the planet — clear problems, working solutions, real evidence.',
  location: 'England, UK',
  twitter: 'https://x.com/asix_449',
  twitterHandle: '@asix_449',
  bookAmazon: 'https://amzn.eu/d/0dZtkBPQ',
};

export const nav = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/maps', label: 'Maps' },
  { href: '/law', label: 'Law' },
  { href: '/wildlife', label: 'Wildlife' },
  { href: '/forests', label: 'Forests' },
  { href: '/book', label: 'Book' },
  { href: '/about', label: 'About' },
] as const;

export const features = [
  {
    href: '/solutions',
    title: 'Solutions that work',
    text: 'Proven technologies with real-world impact.',
    icon: 'leaf',
  },
  {
    href: '/maps',
    title: 'Mapped for action',
    text: 'Explore solutions and projects around the world.',
    icon: 'globe',
  },
  {
    href: '/law',
    title: 'Law for the future',
    text: 'Legal frameworks to protect people and planet.',
    icon: 'scales',
  },
  {
    href: '/wildlife',
    title: 'Wildlife matters',
    text: 'Protecting species and habitats is our shared duty.',
    icon: 'paw',
  },
] as const;
