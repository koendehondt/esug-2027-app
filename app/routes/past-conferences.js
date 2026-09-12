import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PastConferencesRoute extends Route {
  @service programScheduleState;

  activate() {
    this.programScheduleState.archiveEntryRoute = 'past-conferences';
  }
}
