/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n, tempArray = [], currentDepth = 0) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && currentDepth < n) {
            // Recursively flatten the array if the current depth < n
            flat(arr[i], n, tempArray, currentDepth + 1);
        } else {
            // Push non-array elements or arrays at the max depth
            tempArray.push(arr[i]);
        }
    }
    return tempArray;
};
