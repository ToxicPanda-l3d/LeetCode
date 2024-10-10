/**
 * @param {*} obj - The object to check.
 * @param {*} classFunction - The constructor function to check against.
 * @return {boolean} - Returns true if obj is an instance of classFunction; otherwise false.
 */
var checkIfInstanceOf = function(obj, classFunction) {
    // Check if obj is null, undefined, or if classFunction is not a function
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false; // Return false if any of these conditions are met
    }

    // Get the prototype of the object
    const objPrototype = Object.getPrototypeOf(obj); 

    // Compare the object's prototype with the constructor's prototype
    if (objPrototype === classFunction.prototype) {
        return true; // Return true if the prototypes match, indicating obj is an instance of classFunction
    }

    // Recursive call to check the next prototype in the chain
    // Continue traversing up the prototype chain
    return checkIfInstanceOf(objPrototype, classFunction); // Call the function recursively with the prototype
};
