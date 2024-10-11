
#Manacher's Algorithm
class Solution:
    def longestPalindrome(self, s: str) -> str:
        # If the string has length 1 or less, it's already the longest palindrome
        if len(s) <= 1:
            return s
        
        Max_Len = 1  # Initialize the maximum length of the palindrome found
        Max_Str = s[0]  # Initialize the longest palindrome as the first character
        
        # Transform the original string to handle even-length palindromes by adding '#' between characters
        # and at the beginning and end of the string. This helps avoid edge cases for even-length palindromes.
        s = '#' + '#'.join(s) + '#'
        
        dp = [0 for _ in range(len(s))]  # Initialize a DP array to store the radius of the palindrome at each index
        center = 0  # The center of the palindrome that is currently the farthest to the right
        right = 0  # The right boundary of the current palindrome
        
        # Loop through each character in the transformed string
        for i in range(len(s)):
            # If the current position i is within the right boundary of the palindrome
            # We can mirror the palindrome at the current center to minimize computation.
            if i < right:
                dp[i] = min(right - i, dp[2 * center - i])  # Mirror palindrome around the center
            
            # Try to expand the palindrome around the current center i as far as possible
            while i - dp[i] - 1 >= 0 and i + dp[i] + 1 < len(s) and s[i - dp[i] - 1] == s[i + dp[i] + 1]:
                dp[i] += 1
            
            # If the expanded palindrome goes beyond the current right boundary, update center and right
            if i + dp[i] > right:
                center = i
                right = i + dp[i]
            
            # Update the maximum length palindrome if a longer one is found
            if dp[i] > Max_Len:
                Max_Len = dp[i]
                # Extract the palindrome substring from the transformed string and remove the added '#' characters
                Max_Str = s[i - dp[i]:i + dp[i] + 1].replace('#', '')
        
        # Return the longest palindrome found
        return Max_Str
