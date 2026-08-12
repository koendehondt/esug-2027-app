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
| IWST / Workshop        | https://commons.wikimedia.org/wiki/File:Laptop_coding_programs_(Unsplash).jpg          |
| Technology Award       | https://commons.wikimedia.org/wiki/File:Gold_Trophy.jpg                                |
| Show Us Your Project   | https://commons.wikimedia.org/wiki/File:Wikimedia_Hackathon_2024_20240505_RSKY_105.jpg |
| Registration           | AI-generated (ChatGPT), provided by Koen                                               |

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
