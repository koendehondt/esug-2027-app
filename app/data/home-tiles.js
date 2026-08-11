// Data for the home page tiles.
//
// Flip `active` to `true` once a section has real content/dates, and update
// `date` with the real value. Everything here is a placeholder until the
// organizing committee confirms details.
//
// All `image` values point at files under public/images/tiles/ so the app
// works fully offline. See CREDITS.md for sources and licenses.

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
    date: 'Dates to be announced',
    active: false,
    routeName: 'call-for-presentations',
    image: '/images/tiles/call-for-presentations.jpg',
  },
  {
    id: 'workshop',
    title: 'International Workshop on Smalltalk Technologies',
    summary: 'IWST, co-located with the main conference.',
    date: 'Dates to be announced',
    active: false,
    routeName: 'workshop',
    image: '/images/tiles/workshop.jpg',
  },
  {
    id: 'award',
    title: 'Technology Award Competition',
    summary: "Compete for ESUG's Innovation Technology Award.",
    date: 'Dates to be announced',
    active: false,
    routeName: 'award',
    image: '/images/tiles/award.jpg',
  },
  {
    id: 'showcase',
    title: 'Show Us Your Project',
    summary: 'Present your Smalltalk project to the community.',
    date: 'Dates to be announced',
    active: false,
    routeName: 'showcase',
    image: '/images/tiles/showcase.jpg',
  },
  {
    id: 'registration',
    title: 'Conference Registration',
    summary: 'Register to attend ESUG 2027.',
    date: 'Opening date to be announced',
    active: false,
    routeName: 'registration',
    image: '/images/tiles/registration.jpg',
  },
];
