/* global amplitude */
export default function trackEvent(eventName) {
  if (window.amplitude) amplitude.getInstance().logEvent(eventName, {});
  umami(eventName);
}
