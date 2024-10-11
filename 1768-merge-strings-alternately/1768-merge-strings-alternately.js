/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const ans = [];  // Create an empty array to store the merged characters
    const m = word1.length, n = word2.length;  // Get the lengths of both words
    
    for (let i = 0; i < m || i < n; ++i) {  // Loop while either string has characters left
        if (i < m) {  // If there are still characters in word1, add them
            ans.push(word1[i]);
        }
        if (i < n) {  // If there are still characters in word2, add them
            ans.push(word2[i]);
        }
    }

    return ans.join('');  // Join the array into a string and return it
};
