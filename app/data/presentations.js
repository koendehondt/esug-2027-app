// Flattened, searchable index of every ESUG presentation with a scheduled
// session across every archived conference (see app/data/archive/index.js),
// for the Presentations search page (app/templates/presentations.gjs).
//
// Built by walking each archived year's `program` (day -> sessions), which
// already carries the presentation title (`subject`), `speaker`, and
// `time` -- the same fields program-schedule.gjs renders, and the same
// title used in that year's `talks`, so there's no need to also read
// `talks` here.
//
// Sessions without a `speaker` are breaks/social slots and are excluded --
// they aren't presentations. Sessions with a `speaker` but no `talkId`
// are included with their title, speaker, and date/time, just without a
// link to a talk page.
//
// Each archived year's `program` only carries day-of-week/day-of-month
// *labels* (e.g. "Tue 1"), not full calendar dates, so each year's own
// `dayDates` (full ISO dates, matched by day position) is used instead --
// see app/data/archive/<year>.json and app/data/archive/SOURCES.md for
// where those dates came from.

import { archiveYears } from './archive';

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
// before every letter. It also drops a leading multi-part marker like
// "(1/2)" or "(2/2)" (used on talks split across two schedule slots, e.g.
// ESUG 2015's "(1/2) Reflectivity: Behavioral Reflection in Pharo") so
// those sort under the talk's actual title rather than jumping to the
// front under "1"/"2". Computed once per presentation and stored as its
// `sortKey` field (rather than recomputed on every comparison during
// sort); the original title is still displayed as-is.
//
// Two presentations can share the exact same title across different years
// (e.g. a recurring "Company Update" talk) -- see buildPresentations()
// below for how those ties are broken deterministically.
function sortKey(title) {
  return title
    .replace(/^\(\d+\/\d+\)\s*/, '')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildPresentations() {
  const presentations = [];

  for (const { year, program, dayDates } of archiveYears) {
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

  presentations.sort(
    (a, b) => a.sortKey.localeCompare(b.sortKey) || a.year - b.year,
  );

  return presentations;
}

export default buildPresentations();
