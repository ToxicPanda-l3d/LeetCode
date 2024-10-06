/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0, maxLen = 1;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // The length of the palindrome
    };

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(i, i);      // Odd-length palindromes
        let len2 = expandAroundCenter(i, i + 1);  // Even-length palindromes
        let len = Math.max(len1, len2);
        
        if (len > maxLen) {
            maxLen = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.slice(start, start + maxLen);
};
