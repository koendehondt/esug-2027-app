import Route from '@ember/routing/route';
import talks2026 from '../data/talks-2026';
import program2026 from '../data/program-2026';
import talks2025 from '../data/talks-2025';
import program2025 from '../data/program-2025';
import talks2024 from '../data/talks-2024';
import program2024 from '../data/program-2024';
import talks2023 from '../data/talks-2023';
import program2023 from '../data/program-2023';
import talks2022 from '../data/talks-2022';
import program2022 from '../data/program-2022';

// This route is shared by every ESUG program (the 2027 preview and each
// past-conference archive), since talk ids are unique across years. The
// presenter's name lives on the schedule session, not in the talk file
// itself, so look it up there rather than duplicating it.
const talks = {
  ...talks2026,
  ...talks2025,
  ...talks2024,
  ...talks2023,
  ...talks2022,
};
const programs = [
  program2026,
  program2025,
  program2024,
  program2023,
  program2022,
];

function findPresenter(talkId) {
  for (const program of programs) {
    for (const day of program) {
      const session = day.sessions.find((s) => s.talkId === talkId);
      if (session) {
        return session.speaker;
      }
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
