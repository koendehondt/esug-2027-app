// Bumps the patch version (0.1.0 -> 0.1.1) in package.json and
// package-lock.json. Run with `npm run version:bump` before committing.
// The About page shows this version (see vite.config.mjs).

import { readFileSync, writeFileSync } from 'node:fs';

const bumpPatch = (version) => {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);

  if (!match) {
    throw new Error(`Unsupported version format: ${version}`);
  }

  return `${match[1]}.${match[2]}.${Number(match[3]) + 1}`;
};

const packageJsonPath = new URL('../package.json', import.meta.url);
const packageLockPath = new URL('../package-lock.json', import.meta.url);

const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const oldVersion = packageJson.version;
const newVersion = bumpPatch(oldVersion);

// Replace only the version fields, so the files' formatting stays untouched.
writeFileSync(
  packageJsonPath,
  readFileSync(packageJsonPath, 'utf8').replace(
    `"version": "${oldVersion}"`,
    `"version": "${newVersion}"`,
  ),
);

const packageLock = JSON.parse(readFileSync(packageLockPath, 'utf8'));
if (packageLock.version === oldVersion) {
  packageLock.version = newVersion;
  packageLock.packages[''].version = newVersion;
  writeFileSync(packageLockPath, `${JSON.stringify(packageLock, null, 2)}\n`);
}

console.log(`Version bumped: ${oldVersion} -> ${newVersion}`);
