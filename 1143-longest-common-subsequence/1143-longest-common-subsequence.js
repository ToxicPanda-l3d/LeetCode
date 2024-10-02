/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // Get the lengths of both input strings
    const m = text1.length;
    const n = text2.length;

    // Create a 2D array (m+1 x n+1) initialized to 0
    // This array `f` will store the lengths of LCS (Longest Common Subsequence) at each point
    const f = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Iterate through each character of both strings (1-based index)
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            // If the characters at the current position match, 
            // the LCS length at (i, j) is 1 more than the LCS length at (i-1, j-1)
            if (text1[i - 1] == text2[j - 1]) {
                f[i][j] = f[i - 1][j - 1] + 1;
            } else {
                // Otherwise, take the maximum LCS length from either the previous row or column
                // This means either ignoring a character from `text1` or `text2`
                f[i][j] = Math.max(f[i - 1][j], f[i][j - 1]);
            }
        }
    }

    // The LCS length of the two entire strings will be stored at the bottom-right corner of the matrix
    return f[m][n];
};
