import Component from '@glimmer/component';
import { action } from '@ember/object';
import { LinkTo } from '@ember/routing';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';

const setBackgroundImage = modifier((element, [url]) => {
  if (url) {
    element.style.backgroundImage = `url("${url}")`;
  }
});

const TileBody = <template>
  <div class="home-tile-content">
    <h3 class="home-tile-title">{{@tile.title}}</h3>
    <p class="home-tile-summary">{{@tile.summary}}</p>
    {{#if @tile.date}}
      <p class="home-tile-date">{{@tile.date}}</p>
    {{/if}}
  </div>
  {{#unless @tile.active}}
    <span class="home-tile-badge">{{if
        @tile.badge
        @tile.badge
        "Coming soon"
      }}</span>
  {{/unless}}
</template>;

const TAP_COUNT_THRESHOLD = 5;
const TAP_RESET_MS = 1500;

export default class HomeTile extends Component {
  @service router;

  tapCount = 0;
  lastTapTime = 0;

  // Two hidden ways to preview an inactive tile's page early, ahead of its
  // official activation date: shift-click (desktop) or 5 quick taps
  // (touch/phone). Not a public affordance — for content authors only.
  @action
  handleInactiveClick(event) {
    const routeName = this.args.tile.routeName;
    if (!routeName) {
      return;
    }

    if (event.shiftKey) {
      event.preventDefault();
      this.router.transitionTo(routeName);
      return;
    }

    const now = Date.now();
    if (now - this.lastTapTime > TAP_RESET_MS) {
      this.tapCount = 0;
    }
    this.tapCount += 1;
    this.lastTapTime = now;

    if (this.tapCount >= TAP_COUNT_THRESHOLD) {
      this.tapCount = 0;
      event.preventDefault();
      this.router.transitionTo(routeName);
    }
  }

  <template>
    {{#if @tile.active}}
      <LinkTo
        @route={{@tile.routeName}}
        class="home-tile home-tile-active"
        {{setBackgroundImage @tile.image @tile.imagePosition}}
      >
        <TileBody @tile={{@tile}} />
      </LinkTo>
    {{else}}
      {{! template-lint-disable no-invalid-interactive }}
      {{! Not a general-purpose interactive element: shift-click / 5-tap is a
        hidden preview shortcut for content authors, not a public
        affordance, so this intentionally isn't exposed as a button/link to
        everyone. }}
      <div
        class="home-tile home-tile-inactive"
        {{setBackgroundImage @tile.image @tile.imagePosition}}
        {{on "click" this.handleInactiveClick}}
      >
        <TileBody @tile={{@tile}} />
      </div>
    {{/if}}
  </template>
}
