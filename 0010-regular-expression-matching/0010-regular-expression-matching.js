function isMatch(s, p) {
    const m = s.length;
    const n = p.length;

    // Create a 1D array for dynamic programming
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // Base case: empty string matches empty pattern

    // Initialize the dp array for patterns that can match an empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[j] = dp[j - 2]; // '*' can represent zero occurrences of the preceding character
        }
    }

    // Process each character in s
    for (let i = 1; i <= m; i++) {
        const prev = dp.slice(); // Copy the current state of dp
        dp[0] = false; // An empty pattern can't match a non-empty string

        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[j] = prev[j - 1]; // Direct match or '.'
            } else if (p[j - 1] === '*') {
                dp[j] = dp[j - 2] || (prev[j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            } else {
                dp[j] = false; // No match
            }
        }
    }

    return dp[n]; // Final match result
}