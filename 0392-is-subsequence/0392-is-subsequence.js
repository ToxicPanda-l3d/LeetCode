/**
 * @param {string} s - The string to check as a subsequence
 * @param {string} t - The string to check against
 * @return {boolean} - True if s is a subsequence of t, otherwise false
 */
var isSubsequence = function(s, t) {
    // Initialize pointers for both strings
    let i = 0, j = 0;

    // Traverse both strings while there are characters left in t
    while (i < s.length && j < t.length) {
        // If characters match, move the pointer for s
        if (s[i] === t[j]) {
            i++;
        }
        // Always move the pointer for t
        j++;
    }

    // If all characters in s were found in t in order, return true
    return i === s.length;
};
