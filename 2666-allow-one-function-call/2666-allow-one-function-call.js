/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function(fn) {
    let hasBeenCalled = false; // Track if the function has been called
    let result; // Store the result of the first call

    return function(...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true; // Mark the function as called
            result = fn.apply(this, args); // Call the original function
            return result; // Return the result of the first call
        }
        return undefined; // Return undefined for subsequent calls
    };
};


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
