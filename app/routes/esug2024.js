import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class Esug2024Route extends Route {
  @service programScheduleState;

  model() {
    return { backRoute: this.programScheduleState.archiveEntryRoute };
  }

  activate() {
    this.programScheduleState.lastProgramRoute = 'esug2024';
  }
}
