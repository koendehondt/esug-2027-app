/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'org.esug.app2027',
  appName: 'ESUG 2027',
  webDir: 'dist',
  server: {
    // The native iOS WebView otherwise serves app content from
    // capacitor://localhost, a non-http(s) origin. Many web APIs require a
    // secure context (https or an equivalent), so presenting as
    // https://localhost avoids surprises there. Note this did NOT resolve
    // YouTube's embedded-player "Error 153" -- YouTube's embedder-identity
    // checks still reject it, likely because "localhost" isn't a real,
    // publicly resolvable domain. See app/templates/talk.gjs
    // (isNativePlatform) for how talk videos are handled instead: the
    // native app links out to YouTube rather than embedding inline.
    iosScheme: 'https',
  },
};

module.exports = config;
