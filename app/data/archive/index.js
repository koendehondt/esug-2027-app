// Aggregates every archived ESUG conference's data (app/data/archive/<year>.json)
// into ready-to-use collections, so nothing else in the app needs to import a
// growing list of per-year files directly.
//
// To archive a new conference: add its `<year>.json` file next to these
// (see an existing year for the shape -- year, city, country, heroImage,
// logoImage, dayDates, program, talks), then add it to `archiveYears` below,
// newest first.

import archive2026 from './2026.json';
import archive2025 from './2025.json';
import archive2024 from './2024.json';
import archive2023 from './2023.json';
import archive2022 from './2022.json';
import archive2019 from './2019.json';
import archive2018 from './2018.json';
import archive2017 from './2017.json';
import archive2016 from './2016.json';
import archive2015 from './2015.json';

// Newest first -- matches the order the home page and Past Conferences page
// display archived conferences in.
export const archiveYears = [
  archive2026,
  archive2025,
  archive2024,
  archive2023,
  archive2022,
  archive2019,
  archive2018,
  archive2017,
  archive2016,
  archive2015,
];

export const archiveByYear = Object.fromEntries(
  archiveYears.map((entry) => [entry.year, entry]),
);

// Every archived talk, keyed by talkId, merged across all years -- talk ids
// are unique across years, so this is safe. Used by the talk detail page,
// which is shared by every program (the current edition's preview and each
// archived year).
export const allTalks = Object.assign(
  {},
  ...archiveYears.map((entry) => entry.talks),
);
