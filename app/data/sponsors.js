// Data for the Sponsors page (app/templates/sponsors.gjs), grouped by
// sponsorship tier.
//
// Each sponsor is `{ name, logo, url }`:
// - `name` is used as the logo's alt text.
// - `logo` points at a file under public/images/sponsors/.
// - `url` (optional) is the sponsor's website; when present, the logo
//   links out to it in a new tab.
//
// All three tiers currently have sponsors; the page falls back to a
// "will be announced" notice for any tier whose array is empty.

export const platinumSponsors = [
  {
    name: 'GemTalk Systems',
    logo: '/images/sponsors/gemtalk.png',
    url: 'http://gemtalksystems.com/',
  },
  {
    name: 'Instantiations',
    logo: '/images/sponsors/instantiations.png',
    url: 'http://www.instantiations.com/',
  },
  {
    name: 'feenk',
    logo: '/images/sponsors/feenk.png',
    url: 'http://www.feenk.com/',
  },
];

export const goldSponsors = [
  {
    name: 'adesso',
    logo: '/images/sponsors/adesso.png',
    url: 'https://www.adesso.de/',
  },
  {
    name: 'OHRA',
    logo: '/images/sponsors/ohra.png',
    url: 'http://www.ohra.nl/',
  },
  {
    name: 'all: objects all: theTime',
    logo: '/images/sponsors/all-objects-all-the-time.png',
    url: 'https://all-objects-all-the-time.st/',
  },
];

export const silverSponsors = [
  {
    name: 'Lifeware',
    logo: '/images/sponsors/lifeware.png',
    url: 'https://www.lifeware.ch/',
  },
  {
    name: 'Smalltalk Consulting Ltd.',
    logo: '/images/sponsors/smalltalk-consulting.png',
    url: 'https://www.johnmcintosh.pro/',
  },
  {
    name: 'QqDataFruits',
    logo: '/images/sponsors/qqdatafruits.png',
    url: 'https://www.qqdatafruits.be/',
  },
];
