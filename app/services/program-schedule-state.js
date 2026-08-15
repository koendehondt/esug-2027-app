import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

// Holds which day pill is selected on the Conference Program page, and
// which program page (the 2027 preview at "program", or the 2026 archive
// at "esug2026-program") was last visited. This lives in a service (rather
// than the component's own state) so it survives navigating away to a
// talk's detail page and back -- the component gets torn down and rebuilt
// on each visit, but the service is a singleton for the app's lifetime.
//
// `lastProgramRoute` lets the talk detail page's back link return to
// whichever program page the visitor actually came from, instead of
// always going to the 2027 preview.
export default class ProgramScheduleStateService extends Service {
  @tracked selectedDayIndex = 0;
  @tracked lastProgramRoute = 'program';
}
