import Route from '@ember/routing/route';
import { service } from '@ember/service';
import presentations from '../data/presentations';

export default class PresentationsRoute extends Route {
  @service programScheduleState;

  activate() {
    this.programScheduleState.lastProgramRoute = 'presentations';
  }

  model() {
    return presentations;
  }
}
