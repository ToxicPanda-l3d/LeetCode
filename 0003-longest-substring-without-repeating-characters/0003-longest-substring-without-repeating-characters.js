/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Variable to store the maximum length of the substring found so far.
    let ans = 0;
    // Set to track the unique characters within the current window
    const ss = new Set(); 
    
    // Two pointers: 'i' (left pointer) and 'j' (right pointer) to create a sliding window.
    for (let i = 0, j = 0; j < s.length; ++j) {
        // While the current character at 's[j]' is already in the set,
        // remove characters from the left ('i' pointer) until the duplicate is removed.
        while (ss.has(s[j])) {
            ss.delete(s[i++]); // Remove the character at 's[i]' and increment 'i' to shrink the window.
        }
        
        // Add the current character 's[j]' to the set as it's now part of the current window.
        ss.add(s[j]);
        
        // Update the answer with the maximum length found so far.
        // The window size is the difference between 'j' and 'i' plus 1 (for the current character).
        ans = Math.max(ans, j - i + 1);
    }
    
    // Return the maximum length of substring without repeating characters.
    return ans;
};