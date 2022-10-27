import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/service-worker.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
