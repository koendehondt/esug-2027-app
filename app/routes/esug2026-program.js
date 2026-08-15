import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class Esug2026ProgramRoute extends Route {
  @service programScheduleState;

  activate() {
    this.programScheduleState.lastProgramRoute = 'esug2026-program';
  }
}
