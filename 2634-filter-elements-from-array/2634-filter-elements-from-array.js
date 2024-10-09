/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function filter(arr, fn) {
    const filteredArr = []; // Initialize an empty array to store the filtered results
    for (let i = 0; i < arr.length; i++) { // Loop through each element in the array
        if (fn(arr[i], i)) { // Apply the filtering function to the element and its index
            filteredArr.push(arr[i]); // If true, add the element to filteredArr
        }
    }
    return filteredArr; // Return the filtered array
}
