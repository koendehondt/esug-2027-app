// Data for the home page tiles.
//
// Flip `active` to `true` once a section has real content/dates, and update
// `date` with the real value. Everything here is a placeholder until the
// organizing committee confirms details.
//
// All `image` values point at files under public/images/tiles/ so the app
// works fully offline. See CREDITS.md for sources and licenses.

// Tiles for the upcoming ESUG 2027 conference.
export default [
  {
    id: 'venue',
    title: 'Conference Venue',
    summary:
      'ESUG 2027 will be hosted at the Vrije Universiteit Brussel (VUB).',
    date: 'Venue confirmed',
    active: true,
    routeName: 'venue',
    image: '/images/tiles/venue.jpg',
  },
  {
    id: 'city',
    title: 'City Information',
    summary: 'Discover Brussels, the host city of ESUG 2027.',
    date: '',
    active: true,
    routeName: 'city',
    image: '/images/tiles/city.jpg',
  },
  {
    id: 'travel',
    title: 'Trip Information',
    summary: 'How to reach Brussels by air, rail, and road.',
    date: '',
    active: true,
    routeName: 'travel',
    image: '/images/tiles/travel.jpg',
  },
  {
    id: 'call-for-presentations',
    title: 'Call for Presentations',
    summary: 'Submit your talk proposal for ESUG 2027.',
    date: 'Places are limited. Submit on time.',
    active: false,
    badge: 'February 2027',
    routeName: 'call-for-presentations',
    image: '/images/tiles/call-for-presentations.jpg',
  },
  {
    id: 'registration',
    title: 'Conference Registration',
    summary: 'Register to attend ESUG 2027.',
    date: 'Early registration deadline: 1 April 2027',
    active: false,
    badge: 'March 2027',
    routeName: 'registration',
    image: '/images/tiles/registration.jpg',
  },
  {
    id: 'workshop',
    title: 'International Workshop on Smalltalk Technologies',
    summary: 'IWST, co-located with the main conference.',
    date: 'Early registration deadline: 1 April 2027',
    active: false,
    badge: 'March 2027',
    routeName: 'workshop',
    image: '/images/tiles/workshop.jpg',
  },
  {
    id: 'award',
    title: 'Technology Award Competition',
    summary: "Compete for ESUG's Innovation Technology Award.",
    date: 'Submission deadline: 2 July 2027',
    active: false,
    badge: 'June 2027',
    routeName: 'award',
    image: '/images/tiles/award.jpg',
  },
  {
    id: 'showcase',
    title: 'Show Us Your Project',
    summary: 'Present your Smalltalk project to the community.',
    date: '',
    active: false,
    badge: 'June 2027',
    routeName: 'showcase',
    image: '/images/tiles/showcase.jpg',
  },
  {
    id: 'program',
    title: 'Conference Program',
    summary: 'The conference at a glance.',
    date: '',
    active: false,
    badge: 'June 2027',
    routeName: 'program',
    image: '/images/tiles/program.jpg',
  },
];

// Tiles for past conferences, shown in their own "Past conferences" section
// on the home page, separate from the upcoming ESUG 2027 tiles above.
export const archiveTiles = [
  {
    id: 'esug2026-archive',
    title: 'ESUG 2026 Archive',
    summary: 'Looking back on a great conference in Plovdiv.',
    date: '',
    active: true,
    routeName: 'esug2026',
    image: '/images/tiles/esug2026.jpg',
  },
  {
    id: 'esug2025-archive',
    title: 'ESUG 2025 Archive',
    summary: 'Looking back on a great conference in Gdańsk.',
    date: '',
    active: true,
    routeName: 'esug2025',
    image: '/images/tiles/esug2025.jpg',
  },
  {
    id: 'esug2024-archive',
    title: 'ESUG 2024 Archive',
    summary: 'Looking back on a great conference in Lille.',
    date: '',
    active: true,
    routeName: 'esug2024',
    image: '/images/tiles/esug2024.jpg',
  },
  {
    id: 'esug2023-archive',
    title: 'ESUG 2023 Archive',
    summary: 'Looking back on a great conference in Lyon.',
    date: '',
    active: true,
    routeName: 'esug2023',
    image: '/images/tiles/esug2023.jpg',
  },
  {
    id: 'esug2022-archive',
    title: 'ESUG 2022 Archive',
    summary: 'Looking back on a great conference in Novi Sad.',
    date: '',
    active: true,
    routeName: 'esug2022',
    image: '/images/tiles/esug2022.jpg',
  },
];
