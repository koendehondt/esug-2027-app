import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class Esug2025Route extends Route {
  @service programScheduleState;

  activate() {
    this.programScheduleState.lastProgramRoute = 'esug2025';
  }
}
