# Decision log

Decisions about what the app does and does not include, and why. Newest
entries go at the top.

## 2026-11-27: Archives of conferences before 2015 come from the esug.org Pier export

**Context:** The old esug.org was a Pier wiki. An export of it (pages, wiki source, uploaded files and edit history,
extracted from `esug.image`) has a page tree for every conference from 1993 to 2014, in a different format for almost
every year.

**Decision:** Archive pages for conferences before 2015 are built from that export, one year at a time, in the same
`<year>.json` format as 2015 onward. ESUG 2011 (Edinburgh) is the first, as a pilot. Its logo on the Past Conferences
page now links to its archive. The logos of the other years before 2015 stay plain images until their archives are in.

**Reason:** The export is the most complete source for these years. Building one year first lets the format be
checked before the other years are done.

## 2026-11-21: No general SlideShare link on conference pages

**Context:** Each esug.org conference page links to the ESUG SlideShare account's presentations. SlideShare cannot
filter an account's presentations by year, so such a link would show the slides of all years.

**Decision:** Conference pages do not link to the ESUG SlideShare account. Instead, each talk's own SlideShare
presentation is linked from the Presentation section of its talk page.

## 2026-11-21: No city pages for old conferences

**Context:** esug.org has a city page for each past conference, such as
Plovdiv and Gdańsk. A comparison of the app against esug.org listed them as
missing.

**Decision:** The app will not have city pages for old conferences.

## 2026-11-20: No links to esug.org

**Context:** Some links added from esug.org's conference pages, such as Camp
Smalltalk 2025, pointed to pages on esug.org.

**Decision:** The app does not link to pages on esug.org. Content from
esug.org is brought into the app, or the link is left out.

**Reason:** The app is also a website that will replace the current esug.org.

## 2026-11-20: Do not link the logos of ESUG 2014 and older conferences yet

**Context:** On the app's Past Conferences page, the logos of ESUG 2014
(Cambridge) and older conferences are plain images that link nowhere. esug.org
has a page for some of these years, such as `conf2014.html`.

**Decision:** These logos will not be linked for now.

**Reason:** We expect material from Marcus for these older conferences, so the
links will wait until that material is in.

## 2026-11-20: Leave out the "ESUG conferences across Europe 1993–2027" video

**Context:** The Conferences page on esug.org embeds a video,
[ESUG_conferences_across_Europe_1993_2027.mp4](https://archive.esug.org/Logos+Graphics/ESUG_conferences_across_Europe_1993_2027.mp4),
below its list of past conferences. A comparison of the app against esug.org
listed it as missing from the app's Past Conferences page.

**Decision:** The video will not be added to the app.

**Reason:** It was promotional material for announcing ESUG 2027 in Brussels,
not part of the conference archive.
