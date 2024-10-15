
class Solution:
    def reverseVowels(self, s: str) -> str:
        # Define vowels and initialize two pointers i (start) and j (end)
        vowels = "aeiouAEIOU"
        i, j = 0, len(s) - 1
        # Convert string to list for easy swapping
        cs = list(s)
        
        # Loop until the two pointers meet
        while i < j:
            # Move the start pointer forward until a vowel is found
            while i < j and cs[i] not in vowels:
                i += 1
            # Move the end pointer backward until a vowel is found
            while i < j and cs[j] not in vowels:
                j -= 1
            # Swap the vowels at i and j
            if i < j:
                cs[i], cs[j] = cs[j], cs[i]
                i, j = i + 1, j - 1
        
        # Join the list back into a string and return the result
        return "".join(cs)
