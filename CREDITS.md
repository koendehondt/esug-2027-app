# Image credits

All home page tile background images are hosted locally under
`public/images/tiles/` (resized/compressed from their originals so the app
doesn't need network access to display them). Original sources:

| Tile                   | Original source                                                            |
| ---------------------- | -------------------------------------------------------------------------- |
| Venue                  | https://commons.wikimedia.org/wiki/File:VUB_campus_Etterbeek.JPG           |
| City Information       | https://commons.wikimedia.org/wiki/File:Atomium_Belgium_1.jpg              |
| Trip Information       | https://commons.wikimedia.org/wiki/File:Eurostar_at_Brussels_Midi-Zuid.jpg |
| Call for Presentations | AI-generated (ChatGPT), provided by Koen                                   |
| IWST / Workshop        | AI-generated (ChatGPT), provided by Koen                                   |
| Technology Award       | AI-generated (ChatGPT), provided by Koen                                   |
| Show Us Your Project   | AI-generated (ChatGPT), provided by Koen                                   |
| Registration           | AI-generated (ChatGPT), provided by Koen                                   |
| Conference Program     | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2026 Archive      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2025 Archive      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2024 Archive      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2023 Archive      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2022 Archive      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2019 Archive      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2018 Archive      | AI-generated, provided by Koen                                             |
| ESUG 2017 Archive      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2016 Archive      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2026 Program      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2025 Program      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2024 Program      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2023 Program      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2022 Program      | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2026 Photos       | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2025 Photos       | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2024 Photos       | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2023 Photos       | AI-generated (ChatGPT), provided by Koen                                   |
| ESUG 2022 Photos       | AI-generated (ChatGPT), provided by Koen                                   |
| Presentation Archive   | AI-generated, provided by Koen                                             |
| About ESUG             | Provided by Koen                                                           |
| Membership and Support | Provided by Koen                                                           |
| Become a Sponsor       | Provided by Koen                                                           |
| Sponsors               | Provided by Koen                                                           |

These are placeholders to get the layout right. Swap in real ESUG/VUB/Brussels
photography whenever you have it — replace the file under
`public/images/tiles/` and update the `image` field per tile in
`app/data/home-tiles.js` if the filename changes.

# Sponsor logo credits

Sponsor logos on the Sponsors page (`app/data/sponsors.js`) are hosted
locally under `public/images/sponsors/`, provided by Koen. The GemTalk
Systems (`gemtalk.png`), adesso (`adesso.png`), and Smalltalk Consulting
Ltd. (`smalltalk-consulting.png`) logos had their white background removed
(converted to transparent PNG) so they sit cleanly on the page; the rest
were already supplied with a transparent background.

| Sponsor                   | Tier     | Website                              |
| ------------------------- | -------- | ------------------------------------ |
| GemTalk Systems           | Platinum | https://gemtalksystems.com/          |
| Instantiations            | Platinum | https://www.instantiations.com/      |
| feenk                     | Platinum | https://feenk.com/                   |
| adesso                    | Gold     | https://www.adesso.de/               |
| OHRA                      | Gold     | https://www.ohra.nl/                 |
| all: objects all: theTime | Gold     | https://all-objects-all-the-time.st/ |
| Lifeware                  | Silver   | https://www.lifeware.ch/             |
| Smalltalk Consulting Ltd. | Silver   | https://www.smalltalkconsulting.com/ |
| QqDataFruits              | Silver   | https://www.qqdatafruits.be/         |

# Font credits

The "Baloo 2" font (weights 600 and 800) used for the tagline is hosted
locally under `public/fonts/`, sourced from the
[Fontsource](https://fontsource.org/fonts/baloo-2) npm package
(`@fontsource/baloo-2`), itself a mirror of Google Fonts. Licensed under the
[SIL Open Font License 1.1](https://openfontlicense.org/). Bundling it
avoids a network fetch (and the font-swap flash) when the app opens.

# Program content credits

The reference schedule on the Conference Program page
(`app/data/program-2026.js`) is the published agenda of ESUG 2026:
https://esug.org/2026-Conference/agenda.html

Talk abstracts and speaker bios linked from that schedule
(`app/data/talks-2026.js`) are sourced from the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2026-Conference/talks,
copyright their respective speakers.

Presentation slide links (`presentationUrl` on talks that have them) point at
the PDFs hosted in the ESUG 2026 slide archive:
https://archive.esug.org/ESUG2026/ (indexed via
https://archive.esug.org/ESUG2026/ESUG%202026%20-%20Slides.xlsx). Matched to
talks by conference day, speaker, and title, following the archive's own
`Readme.txt` naming convention. Not every talk has slides available (a few
were demos with no deck, or weren't found in the archive).

The ESUG 2025 Archive's Conference Program page
(`app/data/program-2025.js`) is the published agenda of ESUG 2025:
https://esug.org/2025-Conference/agenda.html. Presentation slide links
(`app/data/talks-2025.js`) point at the PDFs hosted in the ESUG 2025 slide
archive: https://archive.esug.org/ESUG2025/ (day1-day4 folders), matched to
talks by conference day, speaker, and title, following the archive's own
`Readme.txt` naming convention. Talk abstracts and speaker bios
(`app/data/talks-2025.js`) are sourced from the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2025-Conference/talks,
copyright their respective speakers. Not every talk has slides or an
abstract available.

The ESUG 2018 Archive's Conference Program page
(`app/data/program-2018.js`) is built from the conference's public Google
Calendar (Main Track `.ics` feed), provided directly by Koen as
`schedule.ics`, since ESUG 2018 predates the `agenda.html`/slide-archive
format used from 2022 onward. Unlike ESUG 2019's calendar, most ESUG 2018
calendar entries carry each talk's title, abstract, and bio directly in
the DESCRIPTION field, so that is the primary source for
`app/data/talks-2018.js` too; two talks ("GemStone Roadmap", "Pharo IoT")
had no DESCRIPTION at all, so their title and speakers were read off their
slide decks' title slides instead. Presentation slide links point at the
PDFs hosted in https://archive.esug.org/ESUG2018/ (day folders
01-Monday..05-Friday), matched to talks by day/position; a few talks were
demos with no deck, or never received their slides ("MISSING" in the
folder name). Video links point at the conference's YouTube playlist
(https://www.youtube.com/playlist?list=PLJ5nSnWzQXi9RhA8zyKw_qelUpVVlumV9),
matched to talks by title; 24 of the 49 catalogued talks were
recorded/uploaded. Thu 13 September ran two parallel tracks for its
late-morning block; since the shared `ProgramSchedule` component has no
track-column support, parallel sessions are listed sequentially with
`(Track A)` / `(Track B)` appended to the subject -- track assignment
follows the numbering used by the slide archive, which is otherwise
unlabelled by room. One talk ("Brick") was a real scheduled session but
no source (calendar, archive info.txt, or web search) could confirm its
speaker, so it is listed on the program without a speaker or talk page.
Not every talk has an abstract, slide link, or video available.

The ESUG 2017 Archive's Conference Program page
(`app/data/program-2017.js`) is built the same way, from the conference's
public Google Calendar (Main Track `.ics` feed,
`1b6gsg4lfp8nkuicn3clljjtn8@group.calendar.google.com` -- the same calendar
embedded, unmodified, by https://esug.org/2017-Conference/monday.html and
its Tue-Fri equivalents). Most calendar entries carry each talk's title,
abstract, and bio directly in the DESCRIPTION field, the primary source
for `app/data/talks-2017.js` too. No slide archive exists for ESUG 2017
(https://archive.esug.org/ESUG2017/ only holds the venue map). Instead, 9
of the 32 catalogued talks link directly to a matching deck on the `esug`
SlideShare account as their `presentationUrl` (Koen has a SlideShare
account and downloaded these PDFs himself; without one, SlideShare gates
downloads behind signup and what looks like a paid trial). Several other
otherwise-plausible SlideShare matches, by title and speaker, turned out
on inspection to be the same talk given at a different ESUG year (or, for
"Cargo", at Pharo Days rather than ESUG) and were discarded rather than
linked. Video links point at the conference's YouTube
playlist
(https://www.youtube.com/playlist?list=PLJ5nSnWzQXi_THfKwhzxFwbXy00YTi0uv),
matched to talks by title; 29 of the 32 catalogued talks were
recorded/uploaded. Five talks with a video ("Moose reloaded", "Cargo",
"Bloc new hands-on", "Dimensional Analysis", "Understanding the Pharo Dev
Process") had no DESCRIPTION at all and no source could confirm a
speaker, so each is listed on the program with its video but without a
speaker. "GemStone/64 company and business update" shares its calendar
DESCRIPTION with the following "GemStone/64 update and roadmap" session
(naming both Dan Ware's business update and Norm Green's product
roadmap), so it is listed with Dan Ware as speaker but no talk page of
its own. Two further playlist videos ("Iceberg", "PharoJS") could not be
matched to any calendar session at all -- with no source confirming
their day, time, or speaker, they are omitted from the program rather
than guessed. Not every talk has an abstract or video available.

The ESUG 2016 Archive's Conference Program page
(`app/data/program-2016.js`) is built from the conference's public Google
Calendar (Main Track `.ics` feed,
`8tt9grjos12ool4hqrpifjle9s@group.calendar.google.com`, linked directly by
Koen). Most calendar entries carry each talk's title, abstract, and bio
directly in the DESCRIPTION field, the primary source for
`app/data/talks-2016.js` too. Unlike ESUG 2017-2019, ESUG 2016 has its own
real slide-and-video archive at https://archive.esug.org/ESUG2016/ (day
folders, each with a further per-session time-slot subfolder), whose
Info.txt/Infos.txt files directly name each session's PDF and YouTube
link, so `presentationUrl` and `videoId` were sourced from there rather
than by matching a separate YouTube playlist. A few talks were demos with
no deck (or only a Prezi export), and a few sessions have no video because
none was uploaded. Two talks ("Pharo Update", "Pillar: one language for
all supports") had no DESCRIPTION naming a speaker and no other source
(SlideShare deck, YouTube upload) could confirm one, so each is listed on
the program with its slide link but without a speaker or talk page. The
"Welcome" session (Mon 22) does have a talk page (its own calendar entry
had no DESCRIPTION, but Koen identified its YouTube video and speaker,
Stéphane Ducasse, directly). Not every talk has an abstract, slide link,
or video available.

The ESUG 2019 Archive's Conference Program page
(`app/data/program-2019.js`) is built from the conference's public Google
Calendar (Main Track `.ics` feed, https://esug.org/2019-Conference/conf2019.html),
since ESUG 2019 predates the `agenda.html`/slide-archive format used from
2022 onward. Talk titles/abstracts/bios (`app/data/talks-2019.js`) are
sourced from the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2019-Conference/talks,
copyright their respective speakers. Presentation slide links point at the
PDFs hosted in https://archive.esug.org/ESUG2019/ (day folders, with a
`room-B/` subfolder for Wed 28's second track), matched to talks by
day/room position. Video links point at the conference's YouTube playlist
(https://www.youtube.com/playlist?list=PLJ5nSnWzQXi8DPNpy1jCkjE4yE0WUtDP2),
matched to talks by title; only 52 of the 61 catalogued talks were
recorded/uploaded -- none of Wed 28's Track B talks have a video. Wed 28
August ran two parallel tracks (Room A / Room B); one Track B slot ("Pharo
IoT: Present and Future") had no linked Pillar file, so its title,
speakers, and slide link were read off its slide deck instead, and it has
no abstract or bio. Not every talk has an abstract, slide link, or video
available.

The ESUG 2024 Archive's Conference Program page
(`app/data/program-2024.js`) is the published agenda of ESUG 2024:
https://esug.org/2024-Conference/agenda.html. Presentation slide links and
abstracts/bios (`app/data/talks-2024.js`) point at and are sourced from the
ESUG 2024 slide archive (https://archive.esug.org/ESUG2024/, day1-day4
folders) and the Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2024-Conference/talks,
copyright their respective speakers. A few talks were given without slides,
and not every talk has an abstract available.

The ESUG 2023 Archive's Conference Program page
(`app/data/program-2023.js`) is the published agenda of ESUG 2023 (a
five-day conference): https://esug.org/2023-Conference/agenda.html.
Presentation slide links and abstracts/bios (`app/data/talks-2023.js`)
point at and are sourced from the ESUG 2023 slide archive
(https://archive.esug.org/ESUG2023/, day1-day5 folders) and the Pillar talk
files at
https://github.com/ESUG/esug.github.io/tree/source/2023-Conference/talks,
copyright their respective speakers. A few talks were given without slides,
and not every talk has an abstract available.

The ESUG 2022 Archive's Conference Program page
(`app/data/program-2022.js`) is the published agenda of ESUG 2022 (a
five-day conference): https://esug.org/2022-Conference/agenda.html.
Presentation slide links and abstracts/bios (`app/data/talks-2022.js`)
point at and are sourced from the ESUG 2022 slide archive
(https://archive.esug.org/ESUG2022/, 01Monday-05Friday folders) and the
Pillar talk files at
https://github.com/ESUG/esug.github.io/tree/source/2022-Conference/talks,
copyright their respective speakers. A few talks were given without slides,
and not every talk has an abstract available.

# Presentations search page credits

The Presentations page (`app/data/presentations.js`) reuses the existing
`app/data/program-YYYY.js` schedules (2017-2019, 2022-2026) rather than sourcing
new content. Full calendar dates for each conference day (the schedules
only carry day-of-week/day-of-month labels) come from each year's official
"book the dates" announcement (2019: from its Google Calendar feed instead,
see above):

- 2019: https://esug.org/2019-Conference/conf2019.html (26-30 August 2019)
- 2018: from its Google Calendar feed, provided directly by Koen (10-14 September 2018)
- 2017: from its Google Calendar feed (4-8 September 2017)
- 2022: https://esug.org/2022-Conference/conf2022.html (22-26 August 2022)
- 2023: https://esug.org/2023-Conference/conf2023.html (28 August-1 September 2023)
- 2024: https://esug.org/2024-Conference/conf2024.html (8-11 July 2024)
- 2025: https://esug.org/2025-Conference/conf2025.html (1-4 July 2025)
- 2026: https://esug.org/2026-Conference/agenda.html (7-10 July 2026),
  matching `program-2026.js`'s own day labels
