import Route from '@ember/routing/route';
import talks from '../data/talks-2026';
import program2026 from '../data/program-2026';

// The presenter's name lives on the schedule session (app/data/program-2026.js),
// not in the talk file itself, so look it up there rather than duplicating it.
function findPresenter(talkId) {
  for (const day of program2026) {
    const session = day.sessions.find((s) => s.talkId === talkId);
    if (session) {
      return session.speaker;
    }
  }
  return undefined;
}

export default class TalkRoute extends Route {
  model(params) {
    const presenter = findPresenter(params.talk_id);

    return {
      id: params.talk_id,
      presenter,
      hasMultiplePresenters: Boolean(presenter?.includes(',')),
      ...talks[params.talk_id],
    };
  }
}
