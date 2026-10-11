import Route from '@ember/routing/route';
import { service } from '@ember/service';

// Shared by every archived conference (ESUG 2015 through the most recently
// archived year) -- previously one hardcoded route per year (esug2015.js,
// esug2016.js, ...). See app/templates/archive.gjs and
// app/services/archive.js.
export default class ArchiveRoute extends Route {
  @service archive;
  @service programScheduleState;

  async model(params) {
    const year = Number(params.year);
    const entry = await this.archive.loadYear(year);

    return {
      year,
      ...entry,
      backRoute: this.programScheduleState.archiveEntryRoute,
    };
  }

  activate() {
    const year = Number(this.paramsFor('archive').year);
    this.programScheduleState.lastProgramRoute = 'archive';
    this.programScheduleState.lastProgramModels = [year];
  }
}
