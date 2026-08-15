import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProgramRoute extends Route {
  @service programScheduleState;

  activate() {
    this.programScheduleState.lastProgramRoute = 'program';
  }
}
