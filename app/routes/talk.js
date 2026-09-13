import Route from '@ember/routing/route';
import { allTalks } from '../data/archive';
import presentations from '../data/presentations';

// This route is shared by every ESUG program (the current edition's preview
// and each archived conference), since talk ids are unique across years.
// The presenter's name, year, and date/time live on the schedule session,
// not in the talk file itself, so look them up in the already-built
// presentations index (app/data/presentations.js) rather than duplicating
// that lookup here.
export default class TalkRoute extends Route {
  model(params) {
    const scheduled = presentations.find(
      (presentation) => presentation.talkId === params.talk_id,
    );

    return {
      id: params.talk_id,
      presenter: scheduled?.speaker,
      hasMultiplePresenters: Boolean(scheduled?.speaker?.includes(',')),
      year: scheduled?.year,
      date: scheduled?.date,
      time: scheduled?.time,
      ...allTalks[params.talk_id],
    };
  }
}
