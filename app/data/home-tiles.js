// Data for the home page tiles.
//
// Flip `active` to `true` once a section has real content/dates, and update
// `date` with the real value. Everything here is a placeholder until the
// organizing committee confirms details.
//
// All `image` values point at files under public/images/tiles/ so the app
// works fully offline. See CREDITS.md for sources and licenses.

import { archiveYears } from './archive';
import currentEdition from './current-edition';

// Tiles for the upcoming conference edition (app/data/current-edition.js).
// Only the year/city/venue substitutions below are mechanical; `date` and
// `badge` are real per-edition facts (an actual deadline, an actual
// announcement month) that still need setting by hand each edition -- see
// current-edition.js's header comment.
export default [
  {
    id: 'venue',
    title: 'Conference Venue',
    summary: `ESUG ${currentEdition.year} will be hosted at ${currentEdition.venueName}.`,
    date: 'Venue confirmed',
    active: true,
    routeName: 'venue',
    image: '/images/tiles/venue.jpg',
  },
  {
    id: 'city',
    title: 'City Information',
    summary: `Discover ${currentEdition.city}, the host city of ESUG ${currentEdition.year}.`,
    date: '',
    active: true,
    routeName: 'city',
    image: '/images/tiles/city.jpg',
  },
  {
    id: 'travel',
    title: 'Trip Information',
    summary: `How to reach ${currentEdition.city} by air, rail, and road.`,
    date: '',
    active: true,
    routeName: 'travel',
    image: '/images/tiles/travel.jpg',
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    summary: `Where to stay during ESUG ${currentEdition.year}.`,
    date: '',
    active: false,
    routeName: 'accommodation',
    image: '/images/tiles/accommodation.jpg',
  },
  {
    id: 'call-for-presentations',
    title: 'Call for Presentations',
    summary: `Submit your talk proposal for ESUG ${currentEdition.year}.`,
    date: 'Places are limited. Submit on time.',
    active: false,
    badge: `February ${currentEdition.year}`,
    routeName: 'call-for-presentations',
    image: '/images/tiles/call-for-presentations.jpg',
  },
  {
    id: 'registration',
    title: 'Conference Registration',
    summary: `Register to attend ESUG ${currentEdition.year}.`,
    date: `Early registration deadline: 1 April ${currentEdition.year}`,
    active: false,
    badge: `March ${currentEdition.year}`,
    routeName: 'registration',
    image: '/images/tiles/registration.jpg',
  },
  {
    id: 'workshop',
    title: 'International Workshop on Smalltalk Technologies',
    summary: 'IWST, co-located with the main conference.',
    date: `Early registration deadline: 1 April ${currentEdition.year}`,
    active: false,
    badge: `March ${currentEdition.year}`,
    routeName: 'workshop',
    image: '/images/tiles/workshop.jpg',
  },
  {
    id: 'award',
    title: 'Technology Award Competition',
    summary: "Compete for ESUG's Innovation Technology Award.",
    date: `Submission deadline: 2 July ${currentEdition.year}`,
    active: false,
    badge: `June ${currentEdition.year}`,
    routeName: 'award',
    image: '/images/tiles/award.jpg',
  },
  {
    id: 'showcase',
    title: 'Show Us Your Project',
    summary: 'Present your Smalltalk project to the community.',
    date: '',
    active: false,
    badge: `June ${currentEdition.year}`,
    routeName: 'showcase',
    image: '/images/tiles/showcase.jpg',
  },
  {
    id: 'program',
    title: 'Conference Program',
    summary: 'The conference at a glance.',
    date: '',
    active: false,
    badge: `June ${currentEdition.year}`,
    routeName: 'program',
    image: '/images/tiles/program.jpg',
  },
];

// Tiles for the ESUG organisation itself, shown in their own "ESUG"
// section on the home page. Images to be provided separately.
export const esugTiles = [
  {
    id: 'about-esug',
    title: 'About ESUG',
    summary: 'Learn about the European Smalltalk User Group.',
    date: '',
    active: true,
    routeName: 'about-esug',
    image: '/images/tiles/about-esug.jpg',
  },
  {
    id: 'membership-support',
    title: 'Membership and Support',
    summary: 'Become a member of ESUG and see how to get support.',
    date: '',
    active: true,
    routeName: 'membership-support',
    image: '/images/tiles/membership-support.jpg',
  },
  {
    id: 'become-a-sponsor',
    title: 'Become a Sponsor',
    summary: 'Support ESUG as a sponsor.',
    date: '',
    active: true,
    routeName: 'become-a-sponsor',
    image: '/images/tiles/become-a-sponsor.jpg',
  },
  {
    id: 'sponsors',
    title: 'Sponsors',
    summary: 'The organisations supporting ESUG.',
    date: '',
    active: true,
    routeName: 'sponsors',
    image: '/images/tiles/sponsors.jpg',
  },
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct',
    summary: 'The expected behaviour for everyone in the ESUG community.',
    date: '',
    active: true,
    routeName: 'code-of-conduct',
    image: '/images/tiles/code-of-conduct.jpg',
  },
];

// Tiles for the "Conferences" section on the home page, shown before the
// "Conference Archives" section.
export const conferencesTiles = [
  {
    id: 'past-conferences',
    title: 'Past Conferences',
    summary: 'Every ESUG conference since 1993.',
    date: '',
    active: true,
    routeName: 'past-conferences',
    image: '/images/tiles/past-conferences.jpg',
  },
  {
    id: 'host-a-conference',
    title: 'Hosting a Conference',
    summary: 'What it takes to bring the ESUG conference to your city.',
    date: '',
    active: true,
    routeName: 'host-a-conference',
    image: '/images/tiles/host-a-conference.jpg',
  },
];

// Tiles for past conferences, shown in their own "Archives" section on
// the home page, separate from the upcoming edition's tiles above.
export const archiveTiles = [
  {
    id: 'presentations',
    title: 'Presentation Archive',
    summary:
      'Search every ESUG talk from the past ten conferences by title, speaker, or year.',
    date: '',
    active: true,
    routeName: 'presentations',
    image: '/images/tiles/presentations.jpg',
  },
  ...archiveYears.map((entry) => ({
    id: `esug${entry.year}-archive`,
    title: `ESUG ${entry.year} Archive`,
    summary: `Looking back on a great conference in ${entry.city}.`,
    date: '',
    active: true,
    routeName: 'archive',
    routeModels: [entry.year],
    image: entry.heroImage,
  })),
];

// Tiles for the "About this App" section at the bottom of the home page.
export const appTiles = [
  {
    id: 'about-this-app',
    title: 'About the ESUG App',
    summary: 'Everything you want to know.',
    date: '',
    active: true,
    routeName: 'about-this-app',
    image: '/images/tiles/about-this-app.jpg',
  },
];
