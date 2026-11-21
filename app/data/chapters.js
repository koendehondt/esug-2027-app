// The "chapters" of the app: the top-level parts the bottom tab bar switches
// between. Each chapter is one of the former home page sections.
//
// The first chapter (ESUG 2027) is the home page itself (the `index` route);
// the others are shown by the `chapter` route at /chapters/:chapter_id.
//
// `icon` names an SVG icon in app/components/chapter-tab-bar.gjs.

import currentEditionTiles, { appTiles, archiveTiles, esugTiles, generalArchiveTiles } from './home-tiles';
import currentEdition from './current-edition';

const chapters = [
  {
    id: 'current-edition',
    title: `ESUG ${currentEdition.year}`,
    tabLabel: `ESUG ${currentEdition.year}`,
    icon: 'calendar',
    tiles: currentEditionTiles,
  },
  {
    id: 'esug',
    title: 'ESUG',
    tabLabel: 'ESUG',
    icon: 'people',
    tiles: esugTiles,
  },
  {
    id: 'resources',
    title: 'Resources',
    tabLabel: 'Resources',
    icon: 'book',
    tiles: generalArchiveTiles,
  },
  {
    id: 'archives',
    title: 'Conference Archives',
    tabLabel: 'Archives',
    icon: 'archive',
    tiles: archiveTiles,
  },
  {
    id: 'app',
    title: 'About this App',
    tabLabel: 'About',
    icon: 'info',
    tiles: appTiles,
  },
];

export default chapters;

export const homeChapter = chapters[0];

export function chapterById(id) {
  return chapters.find((chapter) => chapter.id === id);
}

// Route name + models that show a chapter.
export function chapterRoute(chapter) {
  return chapter === homeChapter ? { routeName: 'index', models: [] } : { routeName: 'chapter', models: [chapter.id] };
}

// The chapter a page belongs to, found through the tile that links to it.
// Pages without a tile of their own (a talk, a promotion sub-page, ...)
// return undefined: they stay in whichever chapter the visitor was in.
export function chapterForRoute(routeName) {
  return chapters.find((chapter) => chapter.tiles.some((tile) => tile.routeName === routeName));
}
