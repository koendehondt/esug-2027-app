// Bumps the patch version (0.1.0 -> 0.1.1) in package.json and
// package-lock.json. Run with `npm run version:bump` before committing.
// The About page shows this version (see vite.config.mjs).
//
// It also updates the Android app in android/app/build.gradle: versionName
// becomes the new version and versionCode goes up by one. Google Play only
// accepts an upload whose versionCode is higher than every earlier one.
//
// It also updates the iOS app in ios/App/App.xcodeproj/project.pbxproj:
// MARKETING_VERSION (the Version in Xcode) becomes the new version and
// CURRENT_PROJECT_VERSION (the Build in Xcode) goes up by one. App Store
// Connect only accepts an upload whose build number is new for its version.

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

const buildGradlePath = new URL('../android/app/build.gradle', import.meta.url);
const buildGradle = readFileSync(buildGradlePath, 'utf8');
const versionCodeMatch = /versionCode (\d+)/.exec(buildGradle);

if (!versionCodeMatch) {
  throw new Error('No versionCode found in android/app/build.gradle');
}

const oldVersionCode = Number(versionCodeMatch[1]);
const newVersionCode = oldVersionCode + 1;

writeFileSync(
  buildGradlePath,
  buildGradle
    .replace(/versionCode \d+/, `versionCode ${newVersionCode}`)
    .replace(/versionName "[^"]*"/, `versionName "${newVersion}"`),
);

const pbxprojPath = new URL(
  '../ios/App/App.xcodeproj/project.pbxproj',
  import.meta.url,
);
const pbxproj = readFileSync(pbxprojPath, 'utf8');
const buildNumbers = [...pbxproj.matchAll(/CURRENT_PROJECT_VERSION = (\d+);/g)];

if (buildNumbers.length === 0) {
  throw new Error('No CURRENT_PROJECT_VERSION found in project.pbxproj');
}

// The Debug and Release configurations each have their own build number.
// Continue from the highest one, so both end up equal.
const oldBuildNumber = Math.max(
  ...buildNumbers.map((match) => Number(match[1])),
);
const newBuildNumber = oldBuildNumber + 1;

writeFileSync(
  pbxprojPath,
  pbxproj
    .replace(
      /CURRENT_PROJECT_VERSION = \d+;/g,
      `CURRENT_PROJECT_VERSION = ${newBuildNumber};`,
    )
    .replace(
      /MARKETING_VERSION = [^;]+;/g,
      `MARKETING_VERSION = ${newVersion};`,
    ),
);

console.log(`Version bumped: ${oldVersion} -> ${newVersion}`);
console.log(
  `Android versionCode bumped: ${oldVersionCode} -> ${newVersionCode}`,
);
console.log(`iOS build number bumped: ${oldBuildNumber} -> ${newBuildNumber}`);
