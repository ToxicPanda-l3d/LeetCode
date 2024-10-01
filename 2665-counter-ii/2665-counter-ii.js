/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init;
    // Return an object with three methods: increment, decrement, and reset.
    return {
        // increment: Increases the current value by 1 and returns the updated value.
        increment: () => ++currentValue,

        // decrement: Decreases the current value by 1 and returns the updated value.
        decrement: () => --currentValue,

        // reset: Resets the current value to the original 'init' value and returns it.
        reset: () => (currentValue = init),
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */