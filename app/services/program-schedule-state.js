import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

// Holds which day pill is selected on the Conference Program page. This
// lives in a service (rather than the component's own state) so it
// survives navigating away to a talk's detail page and back -- the
// component gets torn down and rebuilt on each visit, but the service is a
// singleton for the app's lifetime.
export default class ProgramScheduleStateService extends Service {
  @tracked selectedDayIndex = 0;
}
