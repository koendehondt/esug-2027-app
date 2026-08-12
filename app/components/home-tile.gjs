import { LinkTo } from '@ember/routing';
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

<template>
  {{#if @tile.active}}
    <LinkTo
      @route={{@tile.routeName}}
      class="home-tile home-tile-active"
      {{setBackgroundImage @tile.image}}
    >
      <TileBody @tile={{@tile}} />
    </LinkTo>
  {{else}}
    <div
      class="home-tile home-tile-inactive"
      {{setBackgroundImage @tile.image}}
    >
      <TileBody @tile={{@tile}} />
    </div>
  {{/if}}
</template>
