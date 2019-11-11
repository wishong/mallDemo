export function debounce(fn, ms = 300) {
  let timeout = null;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.call(this, ...args);
    }, ms);
  };
}