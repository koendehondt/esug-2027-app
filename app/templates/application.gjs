import { pageTitle } from 'ember-page-title';
import { concat } from '@ember/helper';
import currentEdition from '../data/current-edition';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import ChapterTabBar from '../components/chapter-tab-bar';

export default class ApplicationTemplate extends Component {
  @service chapters;

  <template>
    {{pageTitle (concat "ESUG " currentEdition.year)}}

    <main class={{if this.chapters.useChapters "app-content-with-tab-bar"}}>
      {{outlet}}
    </main>

    {{#if this.chapters.useChapters}}
      <ChapterTabBar />
    {{/if}}
  </template>
}
