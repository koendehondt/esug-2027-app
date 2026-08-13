# Image credits

All home page tile background images are hosted locally under
`public/images/tiles/` (resized/compressed from their originals so the app
doesn't need network access to display them). Original sources:

| Tile                   | Original source                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------- |
| Venue                  | https://commons.wikimedia.org/wiki/File:VUB_campus_Etterbeek.JPG                       |
| City Information       | https://commons.wikimedia.org/wiki/File:Atomium_Belgium_1.jpg                          |
| Trip Information       | https://commons.wikimedia.org/wiki/File:Eurostar_at_Brussels_Midi-Zuid.jpg             |
| Call for Presentations | AI-generated (ChatGPT), provided by Koen                                               |
| IWST / Workshop        | AI-generated (ChatGPT), provided by Koen                                               |
| Technology Award       | AI-generated (ChatGPT), provided by Koen                                               |
| Show Us Your Project   | AI-generated (ChatGPT), provided by Koen                                               |
| Registration           | AI-generated (ChatGPT), provided by Koen                                               |
| Conference Program     | AI-generated (ChatGPT), provided by Koen                                               |

These are placeholders to get the layout right. Swap in real ESUG/VUB/Brussels
photography whenever you have it — replace the file under
`public/images/tiles/` and update the `image` field per tile in
`app/data/home-tiles.js` if the filename changes.

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
