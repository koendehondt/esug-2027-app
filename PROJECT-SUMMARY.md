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

Also: the "Rooms" list's IWST 2027 dates were corrected from "6 & 8 July 2027" to "6-8 July 2027" (planning change).

All changes verified with the standard build/lint pipeline; a few required reapplying Prettier's line-wrap reformatting by hand since `/tmp/esug-verify` isn't Read-accessible.

## Presentations search page

Added a home page tile ("Presentation Archive", in the "Past conferences" section, listed first — ahead of the yearly archive tiles) linking to a new `presentations` route: a searchable index of every ESUG presentation across the five archived conferences (2022-2026).

- `app/data/presentations.js` flattens `program-YYYY.js` (2022-2026) into one sorted-by-title array, deriving each presentation's full calendar date from a hardcoded year/day-index -> ISO-date table (sourced from each year's official "book the dates" page — see `CREDITS.md`), since the schedule data only carries day-of-week/day-of-month labels. Breaks/social sessions (no `speaker`) are excluded; sessions with a `speaker` but no `talkId` are included without a link to a talk page.
- `app/components/presentation-search.gjs` — a single search field (originally three separate filters -- title, speaker, year select -- replaced per user request). The query is split into words; a presentation matches if every word is found somewhere across its title, speaker(s), and year combined (each word can come from a different field), via one `.filter()` pass over one combined haystack per presentation so a presentation matching on more than one field never appears twice. Each result shows title (linked to the talk page when one exists) and speaker(s), with "**ESUG <year>** · <date> · <time>" on its own line underneath.
- `app/routes/presentations.js` sets `programScheduleState.lastProgramRoute = 'presentations'` on activate, so a talk reached from search gets a matching back-link and source note (added to `app/templates/talk.gjs`'s `SOURCE_NOTES`).
- The home tile and the page's own hero use `public/images/tiles/presentations.jpg`, an AI-generated image Koen provided (see `CREDITS.md`), resized to match the other tiles (1536x1024 JPEG).
- Verified with the standard build/lint pipeline (see above); also sanity-checked the data module directly with `node` (183 presentations across 5 years, sorted, dates matching known ESUG conference dates).

## iOS keyboard: gray line was a horizontal scrollbar (CSS bug)

On device, tapping the Presentation Archive's search field showed a stray gray horizontal line, plus assorted `RTIInputSystemClient`/`_UIButtonBarButton` console noise (see below).

Two wrong guesses first, both about the native keyboard: (1) assumed the line was the accessory bar itself and hid it via `@capacitor/keyboard`'s `setAccessoryBarVisible(false)` -- wrong, and it also broke keyboard dismissal (no more Done button), so fully reverted (dependency, package.json/lock, and the call in `app/routes/application.js`); (2) assumed it was the QuickType/predictive-text suggestion bar and added `autocorrect="off" autocapitalize="off" spellcheck="false"` to the search input(s) -- these attributes are harmless and were kept, but they weren't the actual fix either, since the line persisted.

**Actual root cause (found by the user directly on device)**: the search input's `font-size` was `0.95rem` (15.2px). iOS Safari/WKWebView auto-zooms the whole page when a focused input's font-size is under 16px, which pushed the page wider than the viewport -- the "gray line" was the resulting horizontal scrollbar, not a keyboard artifact at all. Fixed in `app/styles/app.css` by bumping `.presentation-search-field input, .presentation-search-field select` to `font-size: 1rem` (exactly the 16px no-zoom threshold). This is the only text input in the app; nothing else needed the same fix.

The `_UIButtonBarButton`/`_UIModernBarButton` "Unable to simultaneously satisfy constraints" Xcode console warnings are unrelated to this -- confirmed via Apple Developer Forum threads as a known, currently-unfixed **iOS 26 ("Liquid Glass") framework bug** in UIToolbar/button-bar internals (present since iOS 26 beta 1, acknowledged by Apple Developer Relations as OS-level, no app-side fix). Safe to ignore; AutoLayout self-recovers by breaking one of its own constraints, so there's no visible break, just console noise.

## Presentation Archive: scroll jumps to top while searching

Reported: sometimes, typing in the search box while scrolled down snaps the page back to the top.

Cause: narrowing/widening the live-filtered results list changes the page's height every keystroke, and the browser (WKWebView especially) can reset scroll to 0 mid-reflow even when the final, fully-updated page is tall enough to stay put -- a transient/intermediate height dip during the DOM update, not the final height.

Fix: in `app/components/presentation-search.gjs`'s `updateSearchQuery`, capture `window.scrollY` before updating `searchQuery` (which triggers the re-render), then reassert it with `window.scrollTo(0, scrollY)` inside `requestAnimationFrame` once the DOM has settled -- the same pattern `app/routes/application.js` already uses to restore scroll position across route transitions. If the filtered list is now genuinely too short to support the old position, the browser still naturally clamps to the real max scroll (not 0), so this only removes the _spurious_ full jump.

Not confirmed on-device (no iOS hardware/simulator available here) -- needs the usual `npm run cap:sync` + Xcode rebuild before it'll show up on the phone.

## Talk pages now show conference year/date/time

`app/routes/talk.js` was refactored to import the shared `app/data/presentations.js` module (instead of all five `program-YYYY.js` files plus a manual walk) and look up each talk's scheduling info by `talkId`. The resulting `year`/`date`/`time` are passed through to the model, and `app/templates/talk.gjs` renders them under the presenter name using the same "**ESUG <year>** &middot; <date> &middot; <time>" markup as the search results, for visual consistency.

## 2027 program preview no longer shows specific talks

The 2027 program preview page (`app/templates/program.gjs`) reused the 2026 program data to sketch out the shape of a typical ESUG day, but that meant it was displaying real 2026 talk titles and speakers under a "2027 preview" heading -- easy to misread as an actual 2027 announcement.

Fixed by deriving a `program2027Preview` constant from `program2026`: sessions with a `speaker` (an actual presentation, whether or not it has a `talkId`) are stripped down to a bare `{ time }`, so only the time slot remains visible; sessions without a `speaker` (Coffee Break, Lunch, the Awards competition, Show Us Your Project, and the Social event) are kept exactly as-is. The 4 day pills (from `ProgramSchedule`'s `@days`) are unaffected since the day/date structure itself wasn't touched. The intro copy was reworded to match ("here's the shape of a typical ESUG day"). The 2026 archive page (`esug2026-program.gjs`) is untouched and still shows the full 2026 program with every talk.

## 2027 program preview: added a closing lunch on Fri 9

The 2026 source agenda's last day ends at 12:00-12:30 with no lunch afterward (the real 2026 conference just didn't have one), but the 2027 preview should show a closing lunch on its last day. Rather than adding a fictitious session to `program-2026.js` (which must stay accurate to the real, sourced 2026 schedule), `app/templates/program.gjs` now appends a `{ time: '12:30 – 14:00', subject: 'Lunch' }` session specifically to the day labeled "Fri 9" when building `program2027Preview`.

## Past conference pages: removed "just getting started" notice and Photos tile

The 2022-2025 archive pages (`app/templates/esug20YY.gjs`) each had a "This archive is just getting started" `page-notice` paragraph left over from when those pages were first scaffolded. Removed it from 2022, 2023, 2024, and 2025 (these conferences are done, so the notice no longer applies) but left it on 2026, since that archive is still being filled in.

Also removed the "Photos" tile from the `exploreTiles` array on all five archive pages (2022-2026) -- it wasn't linked to a route (`active: false`, no `routeName`) and there's no photos feature yet. The tile images (`public/images/tiles/esug20YY-photos.jpg`) were left in place in case a Photos page gets built later.

## Removed the indirection to each past conference's program

Every archive page (`app/templates/esug20YY.gjs`, 2022-2026) used to have an "Explore" section with a single tile linking out to a separate `esug20YY-program` route/page. That indirection is gone: each archive page now embeds its `ProgramSchedule` directly, right where the tile used to be.

- "Explore" is now the program's own heading, e.g. "ESUG 2022 Conference Program", followed by the same intro line and day-pill schedule the old program page had.
- The five `esug20YY-program.js` routes and `esug20YY-program.gjs` templates were deleted; `router.js` no longer registers them.
- Each archive page now has its own `app/routes/esug20YY.js`, setting `programScheduleState.lastProgramRoute = 'esug20YY'` on activate (previously only the `-program` route did this) so a talk reached from an archive page's schedule still gets the right back-link and source note in `talk.gjs` (`SOURCE_NOTES` keys updated from `esug20YY-program` to `esug20YY`).
- `esug2026.gjs` keeps the day-label remapping that used to live in `esug2026-program.gjs` (program-2026.js's labels are the 2027 preview's dates, so the archive still remaps them to the real 7-10 July 2026 dates).
- `app/routes/application.js`'s scroll-restoration list now watches `esug2026` instead of `esug2026-program`.
- Comments in `presentations.js` and `program.gjs` that pointed at the now-deleted `esug2026-program.gjs` were updated to point at `esug2026.gjs`.
- The old per-year `-program.jpg` hero images and the `page-tile-grid`/`HomeTile` markup are unused now but weren't cleaned up, matching the "keep unused images for now" approach from the Photos tile removal.

## Simplified the "Conference Program" heading on archive pages

The heading above each embedded schedule on the archive pages (previously "ESUG <year> Conference Program", per the section above) was shortened to just "Conference Program" on all five archive pages -- the year is already in the page's own `<h1>` above it, so repeating it in the section heading was redundant.

## Dropped the "photos, and more" mention from archive intros

Each archive page's intro paragraph said the page would "grow into a collection of the ESUG <year> conference program with links to abstracts and presentations, photos, and more." Removed ", photos, and more" (there's no photos feature and nothing else planned), so it now reads "...with links to abstracts and presentations." Applied to all five archive pages (2022-2026).

## Archive intros trimmed to a single sentence

Removed "Over time, this page will grow into a collection of the ESUG <year> conference program with links to abstracts and presentations." from all five archive pages' intro paragraphs -- the program is already embedded on the page (per the "removed the indirection" change above), so there's nothing left to "grow into." Each intro is now just "Looking back on a great conference in <city>."

## Decoupled the 2027 preview from the 2026 program data

The 2027 Conference Program preview used to be computed from `program-2026.js` at runtime: it stripped out every session with a `speaker`, kept the breaks/lunch/awards/social sessions, and relied on `program-2026.js`'s day labels already being set to the _2027_ calendar dates (Tue 6 - Fri 9 July 2027) purely so this preview could reuse them directly -- which in turn forced the ESUG 2026 archive page to remap those labels back to the _real_ 2026 dates (Tue 7 - Fri 10 July 2026) just to display its own program correctly. Two files fighting over one set of day labels, just to keep the preview in sync.

Decoupled:

- **`app/data/program-2026.js`** now carries its own real 2026 day labels directly (Tue 7 - Fri 10 July 2026) -- no more borrowed 2027 dates. Header comment updated to match (it's no longer described as dual-purpose).
- **`app/templates/esug2026.gjs`** dropped the `ARCHIVE_DAY_LABELS`/remapping code entirely and now uses `program2026` directly, exactly like the other four archive pages.
- **`app/data/program-2027-preview.js`** (new) is a standalone data file for the 2027 preview: the same day _shape_ as before (4 days, Tue 6 - Fri 9 July 2027, with Coffee Break/Lunch/Awards competition/Show Us Your Project/Social event sessions and bare `{ time }` placeholders where talks will go), but hardcoded rather than derived from any other year's data. Its header comment documents exactly how to plug in a real session later (add `subject`, `talkId`, `speaker` to a slot).
- **`app/templates/program.gjs`** now imports `program2027Preview` straight from that new file -- no more `.map()`/stripping logic, and no more `program-2026.js` import at all.
- Updated stale comments and citations that pointed at the old coupling: `presentations.js`'s and `CREDITS.md`'s notes on where the real 2026 dates come from now point at `program-2026.js`'s own day labels instead of the (now-removed) remapping code.

Net effect: when the real 2027 schedule is ready, it's a matter of editing `program-2027-preview.js` directly (or swapping it for a proper `program-2027.js` once talks exist) -- no more risk of an edit to the 2026 archive's schedule silently changing the 2027 preview, or vice versa.

## Talk pages: "Submitted after the call for participation" note

Added an italic note under the "Abstract" heading on every talk page: "Submitted after the call for participation." (`app/templates/talk.gjs`, right before the abstract paragraphs).

Styling was refined in a follow-up: the note is smaller than body text (`font-size: 0.85rem`, new `.talk-abstract-note` class) and the visual gap between the "Abstract" heading and the note is now carried by the note's own `margin-bottom` rather than the heading's default bottom margin -- the heading got a second class, `.talk-abstract-heading`, with `margin-bottom: 0`, so it hugs the note directly above it, and the note has `margin-top: 0` / `margin-bottom: 1rem` to space itself from the abstract text that follows. Both classes are scoped to just this one heading/note pair (via distinct classes, not a shared selector), so no other `.talk-section-heading` section (About the speaker, Presentation, Video) is affected.

## Presentation Archive: removed the visible "Search" label

The "Search" text above the search input on the Presentation Archive page was redundant with the input's own placeholder ("Search by title, speaker, or year..."). Removed it visually, but kept the `<label>` and its text in the DOM -- just visually hidden (the standard screen-reader-only technique: `position: absolute`, 1x1px, clipped, no visible box) rather than deleted outright, so the input keeps a real accessible name for screen readers instead of relying on a placeholder alone. `.presentation-search-label` in `app/styles/app.css` carries the new hidden styling; `presentation-search.gjs` itself didn't need to change.

## Presentation Archive: sort ignores special characters

Reported: "(Turbo)Phausto: news from the pit lane" was sorting to the very top of the results list, ahead of every other title, because a leading "(" sorts before all letters in a plain string comparison.

Fixed in `app/data/presentations.js` with a new `sortKey()` helper used only for ordering (the displayed title is untouched): it strips everything that isn't a letter, digit, or whitespace (parentheses, colons, dashes, etc.), collapses the resulting whitespace, and sorts on that. So "(Turbo)Phausto..." now sorts as "TurboPhausto..." and lands alphabetically among the other T titles, right where it belongs.

Follow-up: rather than calling `sortKey()` inside the sort comparator (which would recompute it repeatedly during the sort), each presentation now stores its own precomputed `sortKey` field alongside `title`, computed once while the array is built, and the comparator just compares that field directly.

## Current state

All of the above is built, verified (build + lint passing), and saved in the project folder. Open: confirm the scroll-jump fix on device after `npm run cap:sync` + Xcode rebuild. Natural next steps: plug in the real ESUG 2027 schedule into `program-2027-preview.js` once available, ESUG 2026 videos (once available), further venue/content copy edits, or other conference pages.
