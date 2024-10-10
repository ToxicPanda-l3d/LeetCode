/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // If obj is falsy or a non-object primitive, return it
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle arrays by filtering and compacting in one step
    if (Array.isArray(obj)) {
        const compactedArray = [];
        for (let i = 0; i < obj.length; i++) {
            const value = compactObject(obj[i]);
            if (value) {  // Push only truthy values
                compactedArray.push(value);
            }
        }
        return compactedArray;
    }

    // Handle objects by compacting their key-value pairs
    const compactedObject = {};
    for (const key in obj) {
        const value = compactObject(obj[key]);
        if (value) {  // Add only truthy values to the compacted object
            compactedObject[key] = value;
        }
    }

    return compactedObject;
};
