/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false; // flag to check if the function has been called already
    let result;         // variable to store the result of the first function call
    
    return function(...args) {
        if (!called) {  // check if the function has not been called yet
            called = true;     // mark the function as called
            result = fn(...args);  // call the original function and store the result
            return result;  // return the result of the first function call
        }
        return undefined;   // for subsequent calls, return undefined
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
