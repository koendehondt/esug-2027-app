// The app version shown on the About page. `__APP_VERSION__` and
// `__APP_COMMIT__` are injected at build time by vite.config.mjs: the version
// comes from package.json (bump it with `npm run version:bump`), the commit
// is the short git hash the build was made from.

export const appVersion = __APP_COMMIT__
  ? `${__APP_VERSION__} (${__APP_COMMIT__})`
  : __APP_VERSION__;
