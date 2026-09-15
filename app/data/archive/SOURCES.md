# Archive data sources

Where each archived year's `<year>.json` program and talk data came from, preserved from the header comments of the original `program-YYYY.js` / `talks-YYYY.js` files (now retired -- see app/data/archive/index.js) during the migration to app/data/archive/<year>.json.

## 2026

### program-2026.js

```
Schedule from ESUG 2026, shown on the ESUG 2026 Archive's Conference
Program section. Source: https://esug.org/2026-Conference/agenda.html

Sessions without a `speaker` are breaks/social slots, rendered differently
in the UI (see app/components/program-schedule.gjs).
```

### talks-2026.js

```
Talk abstracts and speaker bios for the ESUG 2026 reference program,
sourced from the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2026-Conference/talks

Keyed by a slug derived from each talk's source filename. Linked from
app/data/program-2026.js sessions via their optional `talkId` field, and
looked up by app/routes/talk.js for the talk detail page.

Each paragraph is an array of "runs" -- plain text segments, or link
segments ({ text, url }) for the handful of inline links in the original
Pillar markup (e.g. project URLs in speaker bios).
```

## 2025

### program-2025.js

```
Schedule from ESUG 2025, shown on the ESUG 2025 Archive's Conference
Program page. Source: https://esug.org/2025-Conference/agenda.html

Sessions without a `speaker` are breaks/social slots, rendered differently
in the UI (see app/components/program-schedule.gjs). A handful of sessions
have a `speaker` but no `talkId` because neither a slide deck nor an
abstract could be found for them (see app/data/talks-2025.js).
```

### talks-2025.js

```
Talk titles, abstracts, speaker bios, and slide links for the ESUG 2025
Archive's Conference Program page.

Abstracts and bios are sourced from the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2025-Conference/talks
(light copy-edits only: obvious typos fixed, logistics notes to the
organizers dropped). Presenter names come from the schedule
(app/data/program-2025.js) rather than being duplicated here.

Presentation slide links point at the PDFs hosted in the ESUG 2025 slide
archive: https://archive.esug.org/ESUG2025 (day1-day4 folders). A few
talks have neither an abstract nor slides available, and are omitted
below (only a title is shown on their talk page).

Video IDs point at the ESUG 2025 YouTube playlist:
https://www.youtube.com/playlist?list=PLJ5nSnWzQXi94CahnvTIO0F69oOdGJ3Xb
A couple of talks (Druid, the Code in the Corridor music performance)
have no matching recording in the playlist.

Each paragraph is an array of "runs" -- plain text segments, or link
segments ({ text, url }) for inline links in the original Pillar markup.
```

## 2024

### program-2024.js

```
Schedule from ESUG 2024, shown on the ESUG 2024 Archive's Conference
Program page. Source: https://esug.org/2024-Conference/agenda.html

Sessions without a `speaker` are breaks/social slots, rendered differently
in the UI (see app/components/program-schedule.gjs). A handful of sessions
have a `speaker` but no `talkId` because neither a slide deck nor an
abstract could be found for them (see app/data/talks-2024.js).
```

### talks-2024.js

```
Talk titles, abstracts, speaker bios, and slide links for the ESUG 2024
Archive's Conference Program page.

Abstracts and bios are sourced from the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2024-Conference/talks
(light copy-edits only: obvious typos fixed). Presenter names come from
the schedule (app/data/program-2024.js) rather than being duplicated
here.

Presentation slide links point at the files hosted in the ESUG 2024 slide
archive: https://archive.esug.org/ESUG2024 (day1-day4 folders). A few
talks were given without slides, and a few have neither slides nor an
abstract available -- those are omitted below (only a title is shown on
their talk page).

Each paragraph is an array of "runs" -- plain text segments, or link
segments ({ text, url }) for inline links in the original Pillar markup.
```

## 2023

### program-2023.js

```
Schedule from ESUG 2023, shown on the ESUG 2023 Archive's Conference
Program page. Source: https://esug.org/2023-Conference/agenda.html

Sessions without a `speaker` are breaks/social slots, rendered differently
in the UI (see app/components/program-schedule.gjs). A handful of sessions
have a `speaker` but no `talkId` because neither a slide deck nor an
abstract could be found for them (see app/data/talks-2023.js).
```

### talks-2023.js

```
Talk titles, abstracts, speaker bios, and slide links for the ESUG 2023
Archive's Conference Program page.

Abstracts and bios are sourced from the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2023-Conference/talks
(light copy-edits only: obvious typos fixed). Presenter names come from
the schedule (app/data/program-2023.js) rather than being duplicated
here.

Presentation slide links point at the files hosted in the ESUG 2023 slide
archive: https://archive.esug.org/ESUG2023 (day1-day5 folders). A few
talks were given without slides, and a few have neither slides nor an
abstract available -- those are omitted below (only a title is shown on
their talk page).

Each paragraph is an array of "runs" -- plain text segments, or link
segments ({ text, url }) for inline links in the original Pillar markup.
```

## 2022

### program-2022.js

```
Schedule from ESUG 2022, shown on the ESUG 2022 Archive's Conference
Program page. Source: https://esug.org/2022-Conference/agenda.html

Sessions without a `speaker` are breaks/social slots, rendered differently
in the UI (see app/components/program-schedule.gjs). A handful of sessions
have a `speaker` but no `talkId` because neither a slide deck nor an
abstract could be found for them (see app/data/talks-2022.js).
```

### talks-2022.js

```
Talk titles, abstracts, speaker bios, and slide links for the ESUG 2022
Archive's Conference Program page.

Abstracts and bios are sourced from the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2022-Conference/talks
(light copy-edits only: obvious typos fixed). Presenter names come from
the schedule (app/data/program-2022.js) rather than being duplicated
here.

Presentation slide links point at the files hosted in the ESUG 2022 slide
archive: https://archive.esug.org/ESUG2022 (01Monday-05Friday folders). A
few talks were given without slides, and a few have neither slides nor an
abstract available -- those are omitted below (only a title is shown on
their talk page).

Each paragraph is an array of "runs" -- plain text segments, or link
segments ({ text, url }) for inline links in the original Pillar markup.
```

## 2019

### program-2019.js

```
Schedule from ESUG 2019, shown on the ESUG 2019 Archive's Conference
Program page. Source: the conference's public Google Calendar (Main Track
.ics feed) -- ESUG 2019 predates the agenda-page format used from 2022
onward, so there is no https://esug.org/2019-Conference/agenda.html to
scrape. Session titles are the calendar's own (sometimes abbreviated)
labels; see app/data/talks-2019.js for each talk's full title/abstract.

Wed 28 (day-3) ran two parallel tracks (Room A / Room B) for most of the
day -- unlike every other archived year, which is single-track. Both
sessions are listed at their shared time slot, annotated '(Track A)' /
'(Track B)', since the shared ProgramSchedule component only renders one
flat list per day.

Sessions without a `speaker` are breaks/social slots, rendered differently
in the UI (see app/components/program-schedule.gjs). 'Pharo IoT: Present
and Future' (Wed 28, Track B) had no linked talk file in the calendar --
its `talkId`/`speaker` and app/data/talks-2019.js entry were filled in
later from its slide deck's title slide
(https://archive.esug.org/ESUG2019/03Wednesday/room-B/5-Pharo%20IoT.pdf),
which is also why it sits outside the day's normal numbering (319,
added after 301-318 were already assigned).
```

### talks-2019.js

```
Talk titles, abstracts, and speaker bios for the ESUG 2019 Archive's
Conference Program page.

ESUG 2019 predates the archive.esug.org agenda-page/slide-index and
YouTube-playlist organization used from 2022 onward, so `presentationUrl`
and `videoId` here were assembled by hand rather than scraped in bulk:

- `presentationUrl`: matched from https://archive.esug.org/ESUG2019/,
which does host per-day (and per-room, for Wed 28's two tracks) PDF
folders -- just not linked from an agenda.html page. Talks were matched
to PDFs by day/room position, spot-checked by fetching a sample of the
PDFs and confirming their title slides.
- `videoId`: matched from the conference's YouTube playlist
(youtube.com/playlist?list=PLJ5nSnWzQXi8DPNpy1jCkjE4yE0WUtDP2) by
matching each video's title against the talk it corresponds to (titles
sometimes differ slightly from the calendar/Pillar-file title -- e.g.
"Kutoa: Programming the Web in Smalltalk" for 109-daws, whose PDF is
literally named accordingly). Only 52 of the 61 catalogued talks have a
video: none of Wed 28's Room B (Track B) talks were recorded/uploaded,
and 403-hins-2019-polymath-updates has no video either.

Everything else (title/abstract/bio) is sourced from the Pillar talk
files at
https://github.com/ESUG/esug.github.io/tree/source/2019-Conference/talks
(light copy-edits only: obvious typos fixed). Presenter names come from
the schedule (app/data/program-2019.js) rather than being duplicated
here.

Each paragraph is an array of "runs" -- plain text segments, matching
the shape used by the other talks-YYYY.js files (no inline links were
carried over from the source Pillar markup for this year).
```

## 2018

### program-2018.js

```
Schedule from ESUG 2018, shown on the ESUG 2018 Archive's Conference
Program page. Source: the conference's public Google Calendar (Main Track
.ics feed, provided directly by Koen as schedule.ics) -- ESUG 2018
predates the agenda-page format used from 2022 onward, so there is no
https://esug.org/2018-Conference/agenda.html to scrape. Unlike ESUG 2019's
calendar, most ESUG 2018 calendar entries carry the talk's full
title/abstract/bio directly in the DESCRIPTION field, so that is the
primary source for app/data/talks-2018.js too (see its header comment).

Thu 13 (day-4) ran two parallel tracks for its late-morning block
(11:00-13:00) -- unlike every other day, which is single-track. Both
sessions are listed at their shared time slot, annotated '(Track A)' /
'(Track B)', since the shared ProgramSchedule component only renders one
flat list per day. Track assignment follows the numbering used by the
official slide archive (https://archive.esug.org/ESUG2018/04-Thursday/),
which is otherwise unlabelled by room.

Mon 10 (day-1) had a similar parallel block from 16:45-18:45: a
hands-on "Tutorial: AI for Dummies" (Track A) ran alongside three
regular talk slots plus Teaching ICT Trends in Pharo (all Track B). The
tutorial has no matching slide deck in the official archive
(https://archive.esug.org/ESUG2018/01-Monday/) and wasn't in the
YouTube playlist either, so it carries no `presentationUrl`/`videoId`.

The calendar also included a couple of side-track sessions not part of
the main numbered program -- excluded here, matching how IWST (the
co-located International Workshop on Smalltalk Technologies) is
excluded from every other archived year: Registration, and IWST itself
(Tue 11, Thu 13, Fri 14).

Sessions without a `speaker` are breaks/social slots, rendered
differently in the UI (see app/components/program-schedule.gjs). 'Brick'
(Mon 10) was a real talk but its calendar entry and the archive's
info.txt both omit a speaker name, and no external source could confirm
one, so it is listed without a `speaker`/`talkId` rather than guessing.
```

### talks-2018.js

```
Talk titles, abstracts, and speaker bios for the ESUG 2018 Archive's
Conference Program page.

ESUG 2018 predates the archive.esug.org agenda-page/slide-index and
YouTube-playlist organization used from 2022 onward, so this data was
assembled by hand rather than scraped in bulk:

- title/abstractParagraphs/bioParagraphs: sourced directly from the
conference's public Google Calendar (Main Track .ics feed, provided
directly by Koen as schedule.ics), whose DESCRIPTION field carries each
talk's speaker(s), abstract, and bio inline (unlike ESUG 2019's
calendar, which only links out to GitHub Pillar files). Light copy-edits
only (obvious typos fixed, HTML stripped, labels like ""Abstract:""
removed), matching the convention used for other years. 'GemStone
Roadmap' and 'Pharo IoT' had no DESCRIPTION at all -- their title and
speakers were instead read off their slide decks' title slides.
- `presentationUrl`: matched from https://archive.esug.org/ESUG2018/
(day folders 01-Monday..05-Friday, numbered in schedule order), which
hosts per-talk folders with the deck (PDF) and an info.txt. Not every
talk has a PDF -- a few were demos ("DemoOnly.txt") or never received
their slides ("MISSING" in the folder name).
- `videoId`: matched from the conference's YouTube playlist
(youtube.com/playlist?list=PLJ5nSnWzQXi9RhA8zyKw_qelUpVVlumV9, 25
videos) by title (titles sometimes differ slightly from the calendar
title, e.g. "PharoThings: Playing with Sensors on Raspberry PI" for the
Pharo IoT talk). Only 24 of the 49 catalogued talks have a video; the
25th playlist entry is the Welcome session, which has no talkId.

Presenter names come from the schedule (app/data/program-2018.js) rather
than being duplicated here.

Each paragraph is an array of "runs" -- plain text segments, matching
the shape used by the other talks-YYYY.js files.
```

## 2017

### program-2017.js

```
Schedule from ESUG 2017, shown on the ESUG 2017 Archive's Conference
Program page. Source: the conference's public Google Calendar (Main
Track .ics feed, calendar id
1b6gsg4lfp8nkuicn3clljjtn8@group.calendar.google.com) -- the same
calendar embedded by https://esug.org/2017-Conference/monday.html (and
tuesday/wednesday/thursday/friday.html), which carry no other content of
their own. ESUG 2017 predates the agenda-page format used from 2022
onward, so there is no https://esug.org/2017-Conference/agenda.html to
scrape either. Most calendar entries carry the talk's full
title/abstract/bio directly in the DESCRIPTION field, so that is the
primary source for app/data/talks-2017.js too (see its header comment).

Excluded from the main program, matching how IWST (the co-located
International Workshop on Smalltalk Technologies) and Registration are
excluded from every other archived year: Registration (Mon 4), IWST
itself (Tue 5, Thu 7), and Camp Smalltalk (Sun 3 September, the day
before the conference proper -- not one of the 4-8 September conference
days).

Sessions without a `speaker` are breaks/social slots, rendered
differently in the UI (see app/components/program-schedule.gjs). Five
real talks -- 'Moose reloaded' (Tue 5), 'Cargo' (Thu 7), 'Bloc new
hands-on' (Thu 7), 'Dimensional Analysis' (Fri 8) and 'Understanding the
Pharo Dev Process' (Fri 8) -- have a confirmed video (see
talks-2017.js) but no confirmed speaker in the calendar entry, the
ESUG 2017 YouTube playlist, or a web search, so they keep their
`talkId`/video but no `speaker`, rather than guessing. 'GemStone/64
company and business update' (Wed 6) shares its calendar DESCRIPTION
with the following 'GemStone/64 update and roadmap' session (one
entry names both Dan Ware's business update and Norm Green's product
roadmap); Dan Ware is listed as its speaker without a `talkId`, and the
shared abstract/bios and the one matching video live on the roadmap
talk.

The ESUG 2017 YouTube playlist
(youtube.com/playlist?list=PLJ5nSnWzQXi_THfKwhzxFwbXy00YTi0uv, 34
videos) also has two talks -- 'Iceberg' and 'PharoJS' -- that don't
appear in the calendar at all (the official day pages only embed the
same calendar, so there's no independent schedule to cross-check
against). With no source confirming which day/time they were given,
they are omitted here rather than guessing a slot.

No slide archive exists for ESUG 2017 (https://archive.esug.org/ESUG2017/
only has the venue map, unlike every later year), so no talk has a
`presentationUrl`.
```

### talks-2017.js

```
Talk titles, abstracts, and speaker bios for the ESUG 2017 Archive's
Conference Program page.

ESUG 2017 predates the archive.esug.org agenda-page/slide-index and
YouTube-playlist organization used from 2022 onward, so this data was
assembled by hand rather than scraped in bulk:

- title/abstractParagraphs/bioParagraphs: sourced directly from the
conference's public Google Calendar (Main Track .ics feed, calendar id
1b6gsg4lfp8nkuicn3clljjtn8@group.calendar.google.com -- the same
calendar embedded by https://esug.org/2017-Conference/monday.html and
its Tue-Fri equivalents), whose DESCRIPTION field carries each talk's
speaker(s), abstract, and bio inline (matching the ESUG 2018 calendar,
not ESUG 2019's, which only links out to GitHub Pillar files). Light
copy-edits only (obvious typos fixed, HTML stripped, labels like
"Abstract:"/"Bio:"/"First Name:" removed), matching the convention used
for other years. Five talks -- 'Moose reloaded', 'Cargo', 'Bloc new
hands-on', 'Dimensional Analysis' and 'Understanding the Pharo Dev
Process' -- had no DESCRIPTION at all; they keep their confirmed
`videoId` but no abstract/bio (see program-2017.js's header comment for
why they also carry no speaker).
- `videoId`: matched from the conference's YouTube playlist
(youtube.com/playlist?list=PLJ5nSnWzQXi_THfKwhzxFwbXy00YTi0uv, 34
videos) by title (read via the built-in Browser pane's JS execution
against each `a[aria-label]` playlist-row link, since titles sometimes
differ slightly from the calendar title, e.g. "An Introduction to the
Cargo Package Manager" for 'Cargo'). 29 of the 32 talks below have a
video; the rest ('When Smalltalk images get large', 'Calypso
underhood', 'ReStore for Dolphin -- Improved Query Block Analyser')
were never uploaded. Two further playlist videos ('Iceberg',
'PharoJS') couldn't be matched to any calendar session at all -- see
program-2017.js's header comment.
- `presentationUrl`: no slide archive exists for ESUG 2017 on
archive.esug.org, so these link directly to the matching deck on the
'esug' SlideShare account (a real PDF/PPTX file, since Koen has a
SlideShare account and downloaded these himself once signed in --
downloading is otherwise gated behind account signup and what looks
like a paid Scribd trial). Candidates were found by web-searching each
talk's title/speaker (SlideShare's own in-site search does not
reliably index decks this old), but the 'esug' account turned out to
have re-uploaded similarly- or identically-titled decks from *other*
ESUG years under the same slug pattern (confirmed by reading each
deck's own title slide, which usually names its conference/year) --
five otherwise-plausible title/speaker matches were discarded once
opened because the deck itself said ESUG 2015, 2016, 2019 or 2022, or
(for 'Cargo') "Pharo Days 2017" rather than ESUG 2017: 'Running Pharo
on the GemStone VM', 'GemStone/64 update and roadmap', 'VA Smalltalk
Product Update and Roadmap', 'Bloc new hands-on', and 'Cargo'. Only 9
of the 32 talks below have a confirmed `presentationUrl`; each was
verified against its own title slide (explicit "ESUG 2017"/date, or a
filename Koen's download produced that itself contains "esug2017")
before being kept, and the two Calypso talks additionally have
slideshow IDs in the same narrow numeric range as the other 2017
decks, consistent with a single post-conference upload batch.

Presenter names come from the schedule (app/data/program-2017.js) rather
than being duplicated here.

Each paragraph is an array of "runs" -- plain text segments, matching
the shape used by the other talks-YYYY.js files.
```

## 2016

### program-2016.js

```
Schedule from ESUG 2016, shown on the ESUG 2016 Archive's Conference
Program page. Source: the conference's public Google Calendar (Main
Track .ics feed, calendar id 8tt9grjos12ool4hqrpifjle9s@group.calendar.google.com
-- the same calendar Koen linked directly). ESUG 2016 predates the
agenda-page format used from 2022 onward, so there is no
https://esug.org/2016-Conference/agenda.html to scrape either. Most
calendar entries carry the talk's full title/abstract/bio directly in
the DESCRIPTION field, so that is the primary source for
app/data/talks-2016.js too (see its header comment).

Excluded from the main program, matching how IWST (the co-located
International Workshop on Smalltalk Technologies) and Registration are
excluded from every other archived year: Registration (Sun 21 and Mon
22), IWST itself (Tue 23, Wed 24, Thu 25), and Camp Smalltalk (Sun 21
August, the day before the conference proper).

Sessions without a `speaker` are breaks/social slots, rendered
differently in the UI (see app/components/program-schedule.gjs). Two
talks -- 'Pharo Update' (Wed 24) and 'Pillar: one language for all
supports' (Fri 26) -- keep their `talkId` but no `speaker`: the calendar
carries no DESCRIPTION naming a presenter for either, the ESUG 2016
slide archive's own Info.txt files don't name one either, and no other
source (the SlideShare deck's own slides, the YouTube upload) confirms
one, so none is guessed. 'Pharo Update' is a general Pharo-consortium
community update rather than a single-speaker talk (its deck's closing
slide reads "Pharo Pro | Talk to us :) | Esteban and me are here to talk
to you", implying a co-presenter alongside Esteban Lorenzano, but that
co-presenter isn't named anywhere).

Unlike ESUG 2017-2019, ESUG 2016 *does* have a real slide archive at
https://archive.esug.org/ESUG2016/ (day folders with a further
time-slot subfolder per session), each with an Info.txt/Infos.txt
naming the SlideShare deck, PDF, and YouTube link -- see
talks-2016.js's header comment for how those were used.

'Welcome' (Mon 22) has its own talk page (`101-duca-welcome`) even
though its calendar entry carries no DESCRIPTION -- Koen identified its
YouTube video (https://youtu.be/4GxBJeAAYh0) and speaker (Stéphane
Ducasse) directly, and its slide-archive folder has a matching PDF.
```

### talks-2016.js

```
Talk titles, abstracts, and speaker bios for the ESUG 2016 Archive's
Conference Program page.

ESUG 2016 predates the archive.esug.org agenda-page organization used
from 2022 onward, so this data was assembled from two sources:

- title/abstractParagraphs/bioParagraphs: sourced directly from the
conference's public Google Calendar (Main Track .ics feed, calendar id
8tt9grjos12ool4hqrpifjle9s@group.calendar.google.com, linked directly
by Koen), whose DESCRIPTION field carries each talk's speaker(s),
abstract, and bio inline (matching the ESUG 2017/2018 calendars).
Light copy-edits only (obvious typos fixed, per-field labels like
"First Name:"/"Last Name:"/"Email:"/"Title:"/"Type:" removed, a
stray "Add Comment" calendar-UI artifact and one speaker's trailing
email-signature block dropped). 'Pharo Update' had no DESCRIPTION at
all; 'Pillar: one language for all supports' had an abstract but no
speaker/bio -- see program-2016.js's header comment for why both keep
their `talkId` but no `speaker`.
- `videoId`/`presentationUrl`: unlike ESUG 2017-2019, ESUG 2016 has a
real slide-and-video archive at https://archive.esug.org/ESUG2016/
(day folders 01-Monday..05-Friday, each with a further
"<time> <topic>" subfolder per session). Each subfolder's
Info.txt/Infos.txt names the session's SlideShare deck, PDF filename,
and YouTube link directly, which is what `presentationUrl` (the PDF,
linked via archive.esug.org rather than SlideShare) and `videoId` are
sourced from -- no title-matching against a YouTube playlist was
needed, unlike every other archived year. A handful of talks were
demos or otherwise had no slide deck (only a Prezi export, or a
"DEMO-NoSlides.txt" placeholder) and so have no `presentationUrl`;
a handful of others (mostly Wed 24 and Fri 26 morning sessions) have
no `videoId` because the session folder held no video file and no
Info.txt YouTube link either.
- '101-duca-welcome' (Welcome) is the exception: its calendar entry has
no DESCRIPTION, so its `videoId` and speaker came directly from Koen
rather than from the calendar or an Info.txt file; its `presentationUrl`
still points at the matching PDF in the slide archive.

Presenter names come from the schedule (app/data/program-2016.js) rather
than being duplicated here.

Each paragraph is an array of "runs" -- plain text segments, matching
the shape used by the other talks-YYYY.js files.
```

## 2015

### program-2015.js

```
Schedule from ESUG 2015, shown on the ESUG 2015 Archive's Conference
Program page. Source: the conference's public Google Calendar (Main
Track .ics feed, calendar id
qajq51tk7t22h6u87dp01b6ncc@group.calendar.google.com, linked directly by
Koen) -- ESUG 2015 predates the agenda-page format used from 2022
onward, same as ESUG 2016-2019. Most calendar entries carry the talk's
full title/abstract/bio directly in the DESCRIPTION field, so that is
the primary source for app/data/talks-2015.js too (see its header
comment).

Excluded from the main program, matching how every other archived year
excludes its equivalents: Registration (Mon 13), IWST (Tue 14 and Wed
15), and Camp Roassal/CampSmalltalk (Sun 12 July, the day before the
conference proper).

The calendar's own DTSTART/DTEND times don't match the archive's slide
folder names (e.g. the archive names a "1030-1100 Gemstone" folder for
a session the calendar schedules 11:00-12:00) -- the calendar times were
used throughout since they are internally consistent (no two sessions
overlap) once converted from UTC to Europe/Paris (UTC+2 in July), while
the archive's own folder-name times aren't. The archive was still used
as one of two sources for `presentationUrl`/`videoId` (see
talks-2015.js), just matched to a session by title rather than by its
folder's day/time.

Sessions without a `speaker` are breaks/social slots, rendered
differently in the UI (see app/components/program-schedule.gjs). Talk
ids only need to be unique within a year's own program.js/talks.js
pair -- `app/routes/talk.js` merges every year's talks into one flat
object keyed by id, so an id reused across two years silently
overwrites one with the other. 'Welcome' is Stéphane Ducasse for
several archived years, so the plain '101-duca-welcome' scheme used by
program-2016.js/program-2025.js would collide here -- this year's
Welcome is disambiguated as `101-duca-welcome-2015`.
Thu 16 July ran two parallel tracks for its afternoon session (a
90-minute PetitParser tutorial in Track A opposite three back-to-back
half-hour talks in Track B, then two more half-hour talks in parallel
at 16:00) -- since the shared `ProgramSchedule` component has no
track-column support, parallel sessions are listed sequentially with
'(Track A)' / '(Track B)' appended to the subject.

One calendar entry (Thu 16, 9:15am) is titled 'Garage RDBMS' but its
DESCRIPTION carries the title/abstract of a different talk ('The Pharo
Evolution' / DBXTalk relational persistence) under Esteban Lorenzano's
name -- reproduced here as-is (the calendar's own inconsistency, not
fixed) since the SUMMARY is what was actually printed on the schedule.
```

### talks-2015.js

```
Talk titles, abstracts, and speaker bios for the ESUG 2015 Archive's
Conference Program page.

ESUG 2015 predates the archive.esug.org agenda-page organization used
from 2022 onward, so this data was assembled the same way as ESUG
2016-2018:

- title/abstractParagraphs/bioParagraphs: sourced directly from the
conference's public Google Calendar (Main Track .ics feed, calendar id
qajq51tk7t22h6u87dp01b6ncc@group.calendar.google.com, linked directly
by Koen), whose DESCRIPTION field carries each talk's speaker(s),
abstract, and bio inline. Light copy-edits only (obvious typos fixed,
per-field labels like "First Name:"/"Last Name:"/"Email:"/"Title:"/
"Type:" removed, a stray unrelated sentence about veganism dropped
from the end of Leandro Caniglia's bio, trademark symbols dropped).
'Welcome' and 'Smalltalk/X: Test Automation' had no DESCRIPTION at all
-- see program-2015.js's header comment and below for how their
speakers were confirmed instead.
- `videoId`: matched from the conference's YouTube playlist
(youtube.com/playlist?list=PLJ5nSnWzQXi9rnk77bTf-juPt5I6-ered, 81
entries) by title, since most sessions were split across 2-3 videos
there -- the first part is used throughout. 'Welcome''s speaker
(Stéphane Ducasse) and 'Smalltalk/X: Test Automation''s speaker (Claus
Gittinger) were both read directly off their video's own title/
description, since neither has a calendar DESCRIPTION.
- `presentationUrl`: ESUG 2015 *does* have a real slide archive at
https://archive.esug.org/ESUG2015/ (day folders, each with a further
"<time> <topic>" subfolder per session, same layout as ESUG 2016),
but only 14 of the 33 catalogued talks have a subfolder there at all
(archive.esug.org/ESUG2015/MISSING.txt lists several more as known-
missing recordings/slides) -- matched to a talk by title, not by the
subfolder's day/time (see program-2015.js's header comment for why).

Presenter names come from the schedule (app/data/program-2015.js)
rather than being duplicated here.

Each paragraph is an array of "runs" -- plain text segments, matching
the shape used by the other talks-YYYY.js files (no inline links were
carried over from the source calendar text for this year).
```
