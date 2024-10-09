/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        // Handle empty functions array case
        if (functions.length === 0) {
            return resolve([]);
        }

        let count = 0; // Track completed promises
        const res = new Array(functions.length); // Result array

        for (let i = 0; i < functions.length; i++) {
            const fn = functions[i];
            fn()
                .then(val => {
                    res[i] = val; // Store resolved value
                    count++; // Increment count

                    // If all promises are resolved, resolve the main promise
                    if (count === functions.length) {
                        resolve(res);
                    }
                })
                .catch(err => {
                    reject(err); // Reject immediately on first error
                });
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */