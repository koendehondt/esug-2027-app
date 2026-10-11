# esug-2027-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd esug-2027-app`
- `npm install`

## Running / Development

- `npm run start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `npm exec ember help generate` for more details

### Running Tests

- `npm run test`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `npm exec vite build --mode development` (development)
- `npm run build` (production)

### Deploying

Specify what it takes to deploy your app.

## Mobile apps (iOS and Android)

The web app is wrapped with [Capacitor](https://capacitorjs.com/) into native
iOS and Android apps (app ID `org.esug.app2027`). See
[MOBILE_SETUP.md](MOBILE_SETUP.md) for prerequisites and the day-to-day
workflow.

The native apps serve a bundled copy of `dist/`, not the live files in the
repository. Before every build for a device, simulator or tester, run:

```bash
npm run cap:sync
```

This builds the Ember app and copies it into `ios/` and `android/`. Web-only
changes (templates, CSS, JavaScript) need it too.

### Versions and build numbers

`npm run version:bump` bumps the patch version in `package.json` and copies
it to both native apps:

- Android (`android/app/build.gradle`): `versionName` becomes the new version
  and `versionCode` goes up by one. Google Play only accepts an upload whose
  `versionCode` is higher than every earlier one.
- iOS (`ios/App/App.xcodeproj/project.pbxproj`): `MARKETING_VERSION` (the
  **Version** in Xcode) becomes the new version and `CURRENT_PROJECT_VERSION`
  (the **Build** in Xcode) goes up by one. App Store Connect only accepts an
  upload whose build number is new for its version.

So run it before every upload to Google Play or App Store Connect.

### iOS: install on your own device

You need a Mac with Xcode and an Apple ID added to Xcode
(**Xcode → Settings → Accounts**).

1. Connect the iPhone or iPad with a cable (or pair it over Wi-Fi in
   **Window → Devices and Simulators**) and trust the Mac when the device
   asks.
2. Run `npm run cap:ios`. This syncs the app and opens the Xcode project.
3. Select the **App** target, open **Signing & Capabilities**, and keep
   **Automatically manage signing** on. Choose your team:
   - Members of the ESUG team in the Apple Developer Program can select that
     team and keep the bundle identifier `org.esug.app2027`.
   - With a free Apple ID (“Personal Team”), change the bundle identifier to
     something unique, e.g. `org.esug.app2027.<yourname>`, because
     `org.esug.app2027` is registered to the ESUG team. Do not commit that
     change. Apps signed with a free account stop launching after 7 days;
     run them again from Xcode to renew.
4. Pick your device as the run destination in the Xcode toolbar and press
   **Run** (⌘R).
5. The first time only, on the device:
   - turn on **Settings → Privacy & Security → Developer Mode** and restart
     the device when asked (iOS 16 and later);
   - with a free account, trust the developer under **Settings → General →
     VPN & Device Management**.

Alternatively, `npx cap run ios` builds and installs on a connected device or
simulator from the command line, once signing is set up in Xcode.

### iOS: release to test users with TestFlight

This needs the ESUG team's Apple Developer Program membership and access to
[App Store Connect](https://appstoreconnect.apple.com/) with the App Manager
or Admin role.

1. Run `npm run version:bump` and `npm run cap:sync`, then open Xcode with
   `npx cap open ios`. The bump sets a new version and build number (see
   [Versions and build numbers](#versions-and-build-numbers)).
2. Select **Any iOS Device (arm64)** as the run destination and choose
   **Product → Archive**.
3. When the Organizer opens, select the new archive and click **Distribute
   App → TestFlight & App Store** (or **App Store Connect → Upload** in older
   Xcode versions). Xcode signs and uploads the build.
4. Wait for App Store Connect to process the build (usually 5–30 minutes; you
   get an email). `ITSAppUsesNonExemptEncryption` is already set to `false` in
   `ios/App/App/Info.plist`, so there is no encryption questionnaire.
5. In App Store Connect, open the app and go to the **TestFlight** tab:
   - **Internal testing**: add up to 100 members of the App Store Connect team
     to an internal group. They can install the build right away, without
     review.
   - **External testing**: create a group, add testers by email address or
     enable a public link, and add the build to the group. The first build of
     a version goes through a short Beta App Review; fill in the
     **Test Information** (what to test, feedback email) first. Up to 10,000
     external testers.
6. Testers install the [TestFlight](https://apps.apple.com/app/testflight/id899247664)
   app, accept the invitation email or open the public link, and install the
   ESUG app from there. TestFlight installs updates when new builds are added
   to their group.

TestFlight builds expire after 90 days. Upload a new build before then to
keep testers running.

### Android: install on your own device

You need [Android Studio](https://developer.android.com/studio) with an
installed SDK.

1. On the device, enable **Developer options**: open **Settings → About
   phone** and tap **Build number** seven times. Then turn on **USB
   debugging** in **Settings → System → Developer options** (the exact place
   varies between manufacturers).
2. Connect the device with a cable and accept the “Allow USB debugging?”
   prompt. Wireless debugging (**Developer options → Wireless debugging**,
   Android 11 and later) also works; pair it from Android Studio's device
   manager.
3. Run `npm run cap:android`. This syncs the app and opens the project in
   Android Studio.
4. Wait for the Gradle sync to finish, select your device in the toolbar, and
   click **Run** (⇧F10 / ⌃R).

Alternatively, `npx cap run android` builds and installs a debug build on a
connected device or emulator from the command line. To pass a debug build to
someone without Android Studio, build an APK with
`cd android && ./gradlew assembleDebug` and send them
`android/app/build/outputs/apk/debug/app-debug.apk`; they need to allow
installing apps from unknown sources to open it.

### Android: release to test users with Google Play internal testing

Test users get the app through the **internal testing** track of the
[Google Play Console](https://play.google.com/console) app
`org.esug.app2027`. You need access to that app in the Play Console with
permission to release to testing tracks.

#### Upload key

Google Play signs the app for distribution (Play App Signing). You sign each
upload with an upload key in a Java keystore. Create one once:

```bash
keytool -genkeypair -v -keystore ~/keys/esug-upload.jks \
  -alias upload -keyalg RSA -keysize 2048 -validity 10000
```

Keep the keystore and its passwords outside the repository and back them up.
If the upload key is lost, a Play Console admin can request a reset, but that
takes a few days.

#### Build and upload

1. Run `npm run version:bump`. Google Play rejects an upload whose
   `versionCode` was used before.
2. Build a signed Android App Bundle (AAB). This also syncs the web app:

   ```bash
   npm run cap:sync
   npx cap build android \
     --androidreleasetype AAB \
     --keystorepath ~/keys/esug-upload.jks \
     --keystorealias upload \
     --keystorepass '<keystore password>' \
     --keystorealiaspass '<key password>'
   ```

   The signed bundle is written to
   `android/app/build/outputs/bundle/release/app-release-signed.aab`.
   Alternatively, in Android Studio choose **Build → Generate Signed App
   Bundle or APK → Android App Bundle**, and select the keystore there.

3. In the Play Console, open the app and go to **Test and release → Testing →
   Internal testing** and click **Create new release**. Upload the `.aab`,
   enter release notes, and click **Next → Save and publish**. Internal
   testing releases need no review and are usually available within minutes.

#### Testers

1. On the **Testers** tab of **Internal testing**, select the email list
   **ESUG app testers** (or create a list). Add testers by the email address
   of their Google account. Internal testing allows up to 100 testers.
2. Send testers the **opt-in link** shown on that tab. Each tester opens it
   on the web or on the device, accepts the invitation, and then installs the
   ESUG app from the Google Play Store app. Updates arrive through Google Play
   like any other app.

For a wider audience, promote a release to the **Closed testing** or **Open
testing** track. Those tracks go through Google Play's review.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [Vite](https://vite.dev)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
