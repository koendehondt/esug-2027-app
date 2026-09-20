import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

// Shown on the About page: the version comes from package.json (bumped with
// `npm run version:bump`), the short commit hash from git (empty when git is
// not available, e.g. in a source archive).
const { version } = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
);

let commit = '';

try {
  commit = execSync('git rev-parse --short HEAD', {
    stdio: ['ignore', 'pipe', 'ignore'],
  })
    .toString()
    .trim();
} catch {
  // No git available: leave the commit hash out.
}

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(version),
    __APP_COMMIT__: JSON.stringify(commit),
  },
  plugins: [
    classicEmberSupport(),
    ember(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
  build: {
    // Embroider's classic-app compatibility mode (classicEmberSupport())
    // registers every module under app/ into a single entrypoint chunk for
    // runtime lookups, so dynamic import() of individual data modules
    // doesn't split them out -- the "chunks larger than 500 kB" warning is
    // expected here (all five years of conference talk/abstract data live
    // in this one chunk) rather than a sign of an accidental regression.
    // Raised past the current size so the warning still fires if the chunk
    // unexpectedly balloons further.
    chunkSizeWarningLimit: 700,
  },
});
