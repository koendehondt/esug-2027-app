# ESUG 2027 App — Project Summary

Ember.js app (with Capacitor for iOS/Android) for the ESUG 2027 conference. Built iteratively in Cowork sessions. This file summarizes work completed so far, for context in a new chat.

## Stack & scaffolding
- Ember.js app, `webDir: dist`, Capacitor wraps it for iOS/Android (`org.esug.app2027`, "ESUG 2027").
- Build/lint verification pipeline used after every change:
  ```
  rm -rf /tmp/esug-verify
  rsync -a --exclude 'node_modules' --exclude 'dist' --exclude 'ios' --exclude 'android' --exclude '.git' <project>/ /tmp/esug-verify/
  cd /tmp/esug-verify
  # strip @capacitor/assets from devDependencies (not needed for build/lint)
  npm install --silent
  npx prettier --check <changed files>   # --write + manually reapply if it reformats
  npm run build
  npm run lint
  ```

## Home page
- `home-tiles` data module + `HomeTile` component + home template, styled.
- Tiles for Venue, City, Travel, CFP, Workshop, Award, Showcase, Registration — each with a sourced background image in `public/images/tiles`.

## App icon
- Flattened ESUG logo → iOS AppIcon asset set generated, wired into `resources/` with a package.json script for future regeneration.

## Conference program data (2022–2026)
For each year, fetched the agenda/PDFs/talk listings and built:
- `app/data/program-YYYY.js` — schedule structure
- `app/data/talks-YYYY.js` — talk details (title, abstract, bio, room, etc.)
- `esugYYYY-program` route + template wired to real schedule data
- `CREDITS.md` updated per year
- Verified build/lint each time

2026 also got `presentationUrl` fields matched from a slides spreadsheet, with a "Presentation" section added to the talk page.

2025 talks additionally got full abstracts/bios.

## Talk videos (YouTube)
For 2025, 2024, 2023, and 2022, the user uploaded playlist HTML pages (`yt-lockup-view-model` entries). Parsed with BeautifulSoup + regex to extract video IDs and playlist order, matched them to talks in `talks-YYYY.js` (mostly positional, with title cross-checks, especially for 2022 where order didn't match schedule), and added a `videoId` field to each matched talk.

- 2025: 35/37 matched (missing: `107-palu-druid`, `212-cipr-code-in-the-corridor`)
- 2024: 39/39 matched
- 2023: 37/39 matched (missing: `107-bitt-agile-dials`, `303-denk-opal-compiler-and-blocks`)
- 2022: 29/30 matched (missing: `303-labs-moose-modular-analyses`)
- 2026: not started — videos not yet available.

### Video embedding + iOS Error 153
Added a "Video" section to `app/templates/talk.gjs`: inline YouTube iframe embed by default. On iOS, the embed failed with "Error 153" — root cause: Capacitor's WKWebView serves local content via `WKURLSchemeHandler`, not real HTTP, which breaks YouTube's embed referer/identity checks. Tried several fixes (JS proxy page, static per-video pages, domain swap, `iosScheme: 'https'` in `capacitor.config.js`) — none resolved it, since the issue is architectural, not a config tweak. `allowsInlineMediaPlayback` was investigated and confirmed irrelevant (it's a different iOS setting, already enabled by default by Capacitor, unrelated to Error 153).

**Final resolution (user-chosen)**: keep true inline embed on web (works fine there); on native app, detect via `Capacitor.isNativePlatform()` and instead render a tappable YouTube thumbnail (`img.youtube.com/vi/<id>/hqdefault.jpg`) that links out to `youtube.com/watch?v=<id>` in Safari. Implemented in `talk.gjs` with supporting CSS in `app/styles/app.css`. Verified.

## App Store Connect export compliance
User asked about the France distribution / encryption questionnaire. Added to `ios/App/App/Info.plist`:
```xml
<key>ITSAppUsesNonExemptEncryption</key>
<false/>
```
This lets future submissions skip the encryption questionnaire (app uses no non-exempt encryption beyond standard HTTPS/TLS). Explained the France-specific ANSSI export-control angle vs. standard EAR rules.

## Venue page (`app/templates/venue.gjs`)
Iteratively built up the "Reaching the VUB campus" section through many small user-directed edits. Current structure, in order:
1. Google Maps link paragraph
2. Campus map link paragraph (VUB campus-map page)
3. "Guide to reaching the campus" link paragraph (VUB directions page)
4. **By metro, bus and tram** — STIB/MIVB app links paragraph; metro line 5 paragraph (Petillion/Hankar/Delta, ~20 min)
5. **By train** — NMBS/SNCB app links paragraph; "ten-minute walk from Etterbeek station" paragraph
6. **By car** — entrance 6 or 8, paid parking, VUB parking-info link ("Enter the VUB campus via entrance 6 or 8...")

All changes verified with the standard build/lint pipeline; a few required reapplying Prettier's line-wrap reformatting by hand since `/tmp/esug-verify` isn't Read-accessible.

## Current state
All of the above is built, verified (build + lint passing), and saved in the project folder. No open/pending tasks. Natural next steps if picked back up: ESUG 2026 videos (once available), further venue/content copy edits, or other conference pages.
