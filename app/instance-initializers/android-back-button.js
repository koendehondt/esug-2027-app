import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

// Android's system back action -- the back button, or the edge-swipe back
// gesture when the phone uses gesture navigation; both arrive as the same
// `backButton` event -- follows the platform convention:
//
// - on the home page, send the app to the background (like any Android app's
//   root screen; reopening it returns to the same place);
// - elsewhere, go to the previously visited page. The Ember router uses real
//   history.pushState navigation (`location = 'history'`), so the WebView's
//   own history is the user's navigation history;
// - if there is no history (e.g. the app was restored straight onto a deeper
//   page), go to the home page instead of leaving the app.
//
// Registering a `backButton` listener replaces Capacitor's default handling,
// so this listener is the single source of truth. iOS has no back button
// (its swipe-back gesture is enabled natively in MainViewController.swift),
// and the web build relies on the browser's own back button.
export function initialize(appInstance) {
  if (Capacitor.getPlatform() !== 'android') {
    return;
  }

  const router = appInstance.lookup('service:router');

  App.addListener('backButton', ({ canGoBack }) => {
    if (router.currentRouteName === 'index') {
      App.minimizeApp();
    } else if (canGoBack) {
      window.history.back();
    } else {
      router.transitionTo('index');
    }
  });
}

export default { initialize };
