// The conference edition the app is currently promoting -- the "upcoming"
// tiles on the home page (app/data/home-tiles.js) and the header banner
// (app/templates/index.gjs) are generated from this one record rather
// than hardcoding the year/city/venue separately in each place that
// mentions them.
//
// When this edition ends and archives (see app/data/archive/index.js and
// PROJECT-SUMMARY.md's "Archiving a conference edition" notes), this
// record and the tiles it feeds get frozen into that year's
// app/data/archive/<year>.json, and this file is reset for the next
// edition.
export default {
  year: 2027,
  city: 'Brussels',
  country: 'Belgium',
  dates: '6-9 July 2027',
  venueName: 'the Vrije Universiteit Brussel (VUB)',
};
