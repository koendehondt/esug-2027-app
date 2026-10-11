import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { buildPresentations } from '../data/presentations';

// This route is shared by every ESUG program (the current edition's preview
// and each archived conference), since talk ids are unique across years.
// The presenter's name, year, and date/time live on the schedule session,
// not in the talk file itself, so look them up in the presentations index
// of the talk's year (app/data/presentations.js) rather than duplicating
// that lookup here.
export default class TalkRoute extends Route {
  @service archive;

  async model(params) {
    const entry = await this.archive.findTalkYear(params.talk_id);
    const scheduled = entry
      ? buildPresentations([entry]).find(
          (presentation) => presentation.talkId === params.talk_id,
        )
      : undefined;

    return {
      id: params.talk_id,
      presenter: scheduled?.speaker,
      hasMultiplePresenters: Boolean(scheduled?.speaker?.includes(',')),
      year: scheduled?.year,
      date: scheduled?.date,
      time: scheduled?.time,
      ...entry?.talks[params.talk_id],
    };
  }
}
