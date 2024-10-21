class Solution {
    public boolean isSubsequence(String s, String t) {
        // Get the lengths of strings s and t
        int m = s.length(), n = t.length();
        
        // Initialize pointers for both strings
        int i = 0, j = 0;

        // Traverse both strings while there are characters left in t
        while (i < m && j < n) {
            // If characters match, move the pointer for s
            if (s.charAt(i) == t.charAt(j)) {
                ++i;
            }
            // Always move the pointer for t
            ++j;
        }
        
        // If all characters in s were found in t in order, return true
        return i == m;
    }
}
