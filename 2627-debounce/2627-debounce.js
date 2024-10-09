/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

var debounce = function(fn, t = 1000) {
    let timer;
    return function(...args) {
        // Clear the existing timer to cancel previous calls
        clearTimeout(timer);
        // Set a new timer to call the function after t milliseconds
        timer = setTimeout(() => fn(...args), t);
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
