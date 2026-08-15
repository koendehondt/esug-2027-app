import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class Esug2023ProgramRoute extends Route {
  @service programScheduleState;

  activate() {
    this.programScheduleState.lastProgramRoute = 'esug2023-program';
  }
}
