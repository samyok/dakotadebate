/* global umami */
export default function trackEvent(eventName) {
  // if (window.amplitude) amplitude.getInstance().logEvent(eventName, {});
  umami(eventName);
  return fetch(`/api/e?e=${eventName}`);
}
