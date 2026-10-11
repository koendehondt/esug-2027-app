import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PresentationsRoute extends Route {
  @service archive;
  @service programScheduleState;

  activate() {
    this.programScheduleState.lastProgramRoute = 'presentations';
    this.programScheduleState.lastProgramModels = [];
  }

  model() {
    return this.archive.presentations();
  }
}
