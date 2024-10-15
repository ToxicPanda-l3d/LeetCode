class Solution {
    private Boolean[][] f; // Memoization table to store results of subproblems
    private String s;
    private String p;
    private int m; // Length of string s
    private int n; // Length of pattern p

    public boolean isMatch(String s, String p) {
        m = s.length();
        n = p.length();
        f = new Boolean[m + 1][n + 1]; // Initialize memoization table
        this.s = s;
        this.p = p;
        return dfs(0, 0); // Start DFS from the beginning of both string and pattern
    }

    private boolean dfs(int i, int j) {
        if (j >= n) {
            return i == m; // If pattern is exhausted, check if string is also exhausted
        }
        if (f[i][j] != null) {
            return f[i][j]; // Return memoized result if already computed
        }
        boolean res = false;
        if (j + 1 < n && p.charAt(j + 1) == '*') {
            // Two possibilities: ignore the '*' or use it to match characters
            res = dfs(i, j + 2) 
                || (i < m && (s.charAt(i) == p.charAt(j) || p.charAt(j) == '.') && dfs(i + 1, j));
        } else {
            // Regular character match or '.' wildcard
            res = i < m && (s.charAt(i) == p.charAt(j) || p.charAt(j) == '.') && dfs(i + 1, j + 1);
        }
        return f[i][j] = res; // Store the result in the memoization table
    }
}

