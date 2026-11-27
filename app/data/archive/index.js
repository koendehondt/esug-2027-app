// Manifest of every archived ESUG conference: just enough per year to
// render the home page's archive tiles and the Past Conferences page
// without loading any year's full data.
//
// The full data for each year -- dayDates, program, talks, awards -- lives
// in public/data/archive/<year>.json and is fetched on demand by the
// `archive` service (app/services/archive.js), so it stays out of the
// JavaScript bundle. Each year's JSON repeats the summary fields below; the
// archive service's unit test checks the two stay in sync.
//
// To archive a new conference: add its `<year>.json` to public/data/archive/
// (see an existing year for the shape), then add its summary here, newest
// first.

// Newest first -- matches the order the home page and Past Conferences page
// display archived conferences in.
export const archiveYears = [
  {
    year: 2026,
    city: 'Plovdiv',
    country: 'Bulgaria',
    heroImage: '/images/tiles/esug2026.jpg',
    logoImage: '/images/conference-logos/esug-2026.png',
  },
  {
    year: 2025,
    city: 'Gdańsk',
    country: 'Poland',
    heroImage: '/images/tiles/esug2025.jpg',
    logoImage: '/images/conference-logos/esug-2025.png',
  },
  {
    year: 2024,
    city: 'Lille',
    country: 'France',
    heroImage: '/images/tiles/esug2024.jpg',
    logoImage: '/images/conference-logos/esug-2024.png',
  },
  {
    year: 2023,
    city: 'Lyon',
    country: 'France',
    heroImage: '/images/tiles/esug2023.jpg',
    logoImage: '/images/conference-logos/esug-2023.png',
  },
  {
    year: 2022,
    city: 'Novi Sad',
    country: 'Serbia',
    heroImage: '/images/tiles/esug2022.jpg',
    logoImage: '/images/conference-logos/esug-2022.png',
  },
  {
    year: 2019,
    city: 'Cologne',
    country: 'Germany',
    heroImage: '/images/tiles/esug2019.jpg',
    logoImage: '/images/conference-logos/esug-2019.png',
  },
  {
    year: 2018,
    city: 'Cagliari',
    country: 'Italy',
    heroImage: '/images/tiles/esug2018.jpg',
    logoImage: '/images/conference-logos/esug-2018.png',
  },
  {
    year: 2017,
    city: 'Maribor',
    country: 'Slovenia',
    heroImage: '/images/tiles/esug2017.jpg',
    logoImage: '/images/conference-logos/esug-2017.png',
  },
  {
    year: 2016,
    city: 'Prague',
    country: 'Czech Republic',
    heroImage: '/images/tiles/esug2016.jpg',
    logoImage: '/images/conference-logos/esug-2016.png',
  },
  {
    year: 2015,
    city: 'Brescia',
    country: 'Italy',
    heroImage: '/images/tiles/esug2015.jpg',
    logoImage: '/images/conference-logos/esug-2015.png',
  },
  {
    year: 2014,
    city: 'Cambridge',
    country: 'England',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2014.png',
  },
  {
    year: 2013,
    city: 'Annecy',
    country: 'France',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2013.png',
  },
  {
    year: 2012,
    city: 'Ghent',
    country: 'Belgium',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2012.png',
  },
  {
    year: 2011,
    city: 'Edinburgh',
    country: 'UK',
    heroImage: '/images/tiles/esug2011.jpg',
    logoImage: '/images/conference-logos/esug-2011.png',
  },
  {
    year: 2010,
    city: 'Barcelona',
    country: 'Spain',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2010.png',
  },
  {
    year: 2009,
    city: 'Brest',
    country: 'France',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2009.png',
  },
  {
    year: 2008,
    city: 'Amsterdam',
    country: 'The Netherlands',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2008.png',
  },
  {
    year: 2007,
    city: 'Lugano',
    country: 'Switzerland',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2007.png',
  },
  {
    year: 2006,
    city: 'Prague',
    country: 'Czech Republic',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2006.png',
  },
  {
    year: 2005,
    city: 'Brussels',
    country: 'Belgium',
    heroImage: '/images/tiles/past-conferences.jpg',
    logoImage: '/images/conference-logos/esug-2005.png',
  },
  {
    year: 2004,
    city: 'Köthen',
    country: 'Germany',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
  {
    year: 2000,
    city: 'Southampton',
    country: 'UK',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
  {
    year: 1999,
    city: 'Ghent',
    country: 'Belgium',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
  {
    year: 1998,
    city: 'Brescia',
    country: 'Italy',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
  {
    year: 1997,
    city: 'Sophia Antipolis',
    country: 'France',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
  {
    year: 1996,
    city: 'Lausanne',
    country: 'Switzerland',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
  {
    year: 1995,
    city: 'Utrecht',
    country: 'The Netherlands',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
  {
    year: 1994,
    city: 'Cork',
    country: 'Ireland',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
  {
    year: 1993,
    city: 'Brest',
    country: 'France',
    heroImage: '/images/tiles/past-conferences.jpg',
  },
];
