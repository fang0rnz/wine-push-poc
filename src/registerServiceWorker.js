/* eslint-disable no-console */

import { register } from 'register-service-worker';
async function requestNotificationPermission() {
  const permission = await window.Notification.requestPermission();
  console.log(permission);
  if (permission !== 'granted') {
    throw new Error('Permission not granted for Notification');
  }
  return permission;
}

if (true) {
  requestNotificationPermission().then(
    register(`${process.env.BASE_URL}custom-sw.js`, {
      async ready() {
        console.log(
          'App is being served from cache by a service worker.\n' +
            'For more details, visit https://goo.gl/AFskqB'
        );
      },
      registered() {
        console.log('Service worker has been registered.');
      },
      cached() {
        console.log('Content has been cached for offline use.');
      },
      updatefound() {
        console.log('New content is downloading.');
      },
      updated() {
        console.log('New content is available; please refresh.');
      },
      offline() {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      },
      error(error) {
        console.error('Error during service worker registration:', error);
      }
    })
  );
}
