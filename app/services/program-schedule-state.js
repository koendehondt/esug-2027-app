import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

// Holds which day pill is selected on the Conference Program page, and
// which program page (the current edition's preview at "program", or an
// archived conference's page, "archive") was last visited. This lives in
// a service (rather than the component's own state) so it survives
// navigating away to a talk's detail page and back -- the component gets
// torn down and rebuilt on each visit, but the service is a singleton for
// the app's lifetime.
//
// `lastProgramRoute` (plus `lastProgramModels`, its route's dynamic
// segment values, if any -- e.g. `[2026]` for the archive route, `[]` for
// the program/presentations routes) lets the talk detail page's back link
// return to whichever program page the visitor actually came from,
// instead of always going to the current edition's preview.
//
// `archiveEntryRoute` does the same job for the archive page's back link:
// an archived conference can be reached either from the home page's tiles
// or from the Past Conferences page, so its own back link needs to return
// to whichever of those the visitor actually came from rather than always
// going home. The "index" and "past-conferences" routes each set this in
// their own `activate()` hook; the archive route reads it in `model()`
// (before overwriting `lastProgramRoute`/`lastProgramModels` with its own
// values) so its template can link back to the right place.
export default class ProgramScheduleStateService extends Service {
  @tracked selectedDayIndex = 0;
  @tracked lastProgramRoute = 'program';
  @tracked lastProgramModels = [];
  @tracked archiveEntryRoute = 'index';
}
