class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        # Initialize pointers for both strings
        i = j = 0
        
        # Traverse both strings while there are characters left in t
        while i < len(s) and j < len(t):
            # If characters match, move the pointer for s
            if s[i] == t[j]:
                i += 1
            # Always move the pointer for t
            j += 1
        
        # If all characters in s were found in t in order, return True
        return i == len(s)
