/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const m = s.length; // Length of the string
    const n = p.length; // Length of the pattern
    const f = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false)); // DP table
    f[0][0] = true; // Empty string and empty pattern match

    for (let i = 0; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (p[j - 1] === '*') {
                // '*' can represent zero occurrences of the preceding element
                f[i][j] = f[i][j - 2]; // Match zero occurrences
                if (i && (p[j - 2] === '.' || p[j - 2] === s[i - 1])) {
                    // Match one or more occurrences
                    f[i][j] |= f[i - 1][j]; 
                }
            } else if (i && (p[j - 1] === '.' || p[j - 1] === s[i - 1])) {
                // Characters match (or '.' wildcard) 
                f[i][j] = f[i - 1][j - 1]; // Move diagonally in the DP table
            }
        }
    }
    return f[m][n]; // Return the result for the full string and pattern
};
