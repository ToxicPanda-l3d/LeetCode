/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Hash map to store the last index of each character
    let charIndexMap = {};
    
    // Initialize left pointer and result for max length
    let left = 0;
    let maxLength = 0;

    // Loop through the string with the right pointer
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the current character is already in the hash map, 
        // move the left pointer to the right of its last occurrence.
        if (charIndexMap[currentChar] >= left) {
            left = charIndexMap[currentChar] + 1;
        }

        // Update the last index of the current character
        charIndexMap[currentChar] = right;

        // Calculate the length of the current window
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength; // Return the maximum length found
};