/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    // Initialize a flag to keep track of whether the function has been called
    let called = false;
    
    // Return a new function that will be called in place of the original function
    return function(...args) {
        // If the function has already been called, return undefined
        if (called) return undefined;
        
        // Mark the function as called so it won't run again
        called = true;
        
        // Call the original function with the arguments and return the result
        return fn(...args);
    };
};


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
