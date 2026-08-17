import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
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
