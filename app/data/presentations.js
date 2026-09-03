// Flattened, searchable index of every ESUG presentation with a scheduled
// session across the past five conferences (2022-2026), for the
// Presentations search page (app/templates/presentations.gjs).
//
// Built by walking each year's program-YYYY.js schedule (day -> sessions),
// which already carries the presentation title (`subject`), `speaker`, and
// `time` -- the same fields program-schedule.gjs renders, and the same
// title used in talks-YYYY.js, so there's no need to also import the
// talks-YYYY.js files here.
//
// Sessions without a `speaker` are breaks/social slots and are excluded --
// they aren't presentations. Sessions with a `speaker` but no `talkId`
// (see the talks-YYYY.js file comments for why) are included with their
// title, speaker, and date/time, just without a link to a talk page.
//
// `program-YYYY.js` files only carry day-of-week/day-of-month *labels*
// (e.g. "Tue 1"), not full calendar dates. So full dates are hardcoded
// below instead, matched by each day's position in the program array (not
// by parsing the label text) and sourced from each year's official "book
// the dates" page:
//   2022: https://esug.org/2022-Conference/conf2022.html (22-26 Aug 2022)
//   2023: https://esug.org/2023-Conference/conf2023.html (28 Aug-1 Sep 2023)
//   2024: https://esug.org/2024-Conference/conf2024.html (8-11 Jul 2024)
//   2025: https://esug.org/2025-Conference/conf2025.html (1-4 Jul 2025)
//   2026: https://esug.org/2026-Conference/agenda.html (7-10 Jul 2026,
//         matching program-2026.js's own day labels)

import program2022 from './program-2022';
import program2023 from './program-2023';
import program2024 from './program-2024';
import program2025 from './program-2025';
import program2026 from './program-2026';

const YEAR_PROGRAMS = {
  2022: program2022,
  2023: program2023,
  2024: program2024,
  2025: program2025,
  2026: program2026,
};

const YEAR_DAY_DATES = {
  2022: ['2022-08-22', '2022-08-23', '2022-08-24', '2022-08-25', '2022-08-26'],
  2023: ['2023-08-28', '2023-08-29', '2023-08-30', '2023-08-31', '2023-09-01'],
  2024: ['2024-07-08', '2024-07-09', '2024-07-10', '2024-07-11'],
  2025: ['2025-07-01', '2025-07-02', '2025-07-03', '2025-07-04'],
  2026: ['2026-07-07', '2026-07-08', '2026-07-09', '2026-07-10'],
};

const DATE_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatDate(isoDate) {
  return DATE_FORMATTER.format(new Date(`${isoDate}T00:00:00Z`));
}

// Sorting key that ignores special characters like parentheses, colons, and
// dashes, so e.g. "(Turbo)Phausto: news from the pit lane" sorts as if it
// were written "TurboPhausto news from the pit lane" -- alongside the other
// T titles -- instead of jumping to the front of the list because "(" sorts
// before every letter. Computed once per presentation and stored as its
// `sortKey` field (rather than recomputed on every comparison during
// sort); the original title is still displayed as-is.
function sortKey(title) {
  return title
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildPresentations() {
  const presentations = [];

  for (const [yearKey, program] of Object.entries(YEAR_PROGRAMS)) {
    const year = Number(yearKey);
    const dayDates = YEAR_DAY_DATES[year];

    program.forEach((day, dayIndex) => {
      const isoDate = dayDates[dayIndex];

      for (const session of day.sessions) {
        if (!session.speaker) {
          continue; // breaks / social slots, not presentations
        }

        presentations.push({
          talkId: session.talkId,
          title: session.subject,
          sortKey: sortKey(session.subject),
          speaker: session.speaker,
          year,
          date: formatDate(isoDate),
          time: session.time,
        });
      }
    });
  }

  presentations.sort((a, b) => a.sortKey.localeCompare(b.sortKey));

  return presentations;
}

export default buildPresentations();
