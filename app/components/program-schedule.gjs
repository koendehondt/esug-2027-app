import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';

export default class ProgramSchedule extends Component {
  @service programScheduleState;

  get selectedDay() {
    return this.args.days[this.programScheduleState.selectedDayIndex];
  }

  isSelected = (index) => index === this.programScheduleState.selectedDayIndex;

  @action
  selectDay(index) {
    this.programScheduleState.selectedDayIndex = index;
  }

  <template>
    <div class="program-day-pills">
      {{#each @days as |day index|}}
        <button
          type="button"
          class="program-day-pill
            {{if (this.isSelected index) 'program-day-pill-active'}}"
          {{on "click" (fn this.selectDay index)}}
        >
          {{day.label}}
        </button>
      {{/each}}
    </div>

    <ol class="program-session-list">
      {{#each this.selectedDay.sessions as |session|}}
        <li
          class="program-session
            {{unless session.speaker 'program-session-break'}}"
        >
          <span class="program-session-time">{{session.time}}</span>
          <span class="program-session-body">
            {{#if session.talkId}}
              <LinkTo
                @route="talk"
                @model={{session.talkId}}
                class="program-session-subject program-session-subject-link"
              >{{session.subject}}</LinkTo>
            {{else}}
              <span class="program-session-subject">{{session.subject}}</span>
            {{/if}}
            {{#if session.speaker}}
              <span class="program-session-speaker">{{session.speaker}}</span>
            {{/if}}
          </span>
        </li>
      {{/each}}
    </ol>
  </template>
}
