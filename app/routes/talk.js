import Route from '@ember/routing/route';
import talks2026 from '../data/talks-2026';
import talks2025 from '../data/talks-2025';
import talks2024 from '../data/talks-2024';
import talks2023 from '../data/talks-2023';
import talks2022 from '../data/talks-2022';
import talks2019 from '../data/talks-2019';
import talks2018 from '../data/talks-2018';
import talks2017 from '../data/talks-2017';
import talks2016 from '../data/talks-2016';
import talks2015 from '../data/talks-2015';
import presentations from '../data/presentations';

// This route is shared by every ESUG program (the 2027 preview and each
// past-conference archive), since talk ids are unique across years. The
// presenter's name, year, and date/time live on the schedule session, not
// in the talk file itself, so look them up in the already-built
// presentations index (app/data/presentations.js) rather than duplicating
// that lookup here.
const talks = {
  ...talks2026,
  ...talks2025,
  ...talks2024,
  ...talks2023,
  ...talks2022,
  ...talks2019,
  ...talks2018,
  ...talks2017,
  ...talks2016,
  ...talks2015,
};

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
      ...talks[params.talk_id],
    };
  }
}
