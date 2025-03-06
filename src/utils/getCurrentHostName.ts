export default function getCurrentHostName() {
  return window.location.hostname.split(":")[0];
}
