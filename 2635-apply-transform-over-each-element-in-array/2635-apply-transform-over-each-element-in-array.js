/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // return arr.map((v, i) => fn(v, i));
    const tempArray = [];
        for (let i = 0; i < arr.length; i++) {
        tempArray.push(fn(arr[i], i));
    }
    return tempArray;
};