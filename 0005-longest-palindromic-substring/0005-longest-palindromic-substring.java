//Expand around center
class Solution {
    // Helper function to expand around the center
    // This function will return the length of the palindrome expanded around the center
    private int expandAroundCenter(String s, int left, int right) {
        // Expand as long as the characters match and we are within bounds
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;   // Move left pointer outwards
            right++;  // Move right pointer outwards
        }
        // Return the length of the palindrome (right - left - 1)
        return right - left - 1;
    }

    public String longestPalindrome(String s) {
        // Base case: If the string is empty or has only one character, return the string itself
        if (s == null || s.length() < 2) {
            return s;
        }

        int start = 0, maxLen = 1; // Variables to track the start index and max length of the palindrome

        // Loop over the string to treat each character (and each pair of characters) as the center
        for (int i = 0; i < s.length(); i++) {
            // Expand around single character (odd-length palindrome)
            int len1 = expandAroundCenter(s, i, i);
            // Expand around two characters (even-length palindrome)
            int len2 = expandAroundCenter(s, i, i + 1);

            // Find the longer of the two palindromes
            int len = Math.max(len1, len2);

            // If the found palindrome is longer than the current max length
            if (len > maxLen) {
                // Update the start index and max length of the palindrome
                start = i - (len - 1) / 2;
                maxLen = len;
            }
        }

        // Return the longest palindrome substring
        return s.substring(start, start + maxLen);
    }
}
