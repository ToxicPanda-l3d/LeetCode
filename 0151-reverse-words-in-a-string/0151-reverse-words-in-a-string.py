class Solution:
    def reverseWords(self, s: str) -> str:
        # Split the string into words, reverse the list of words, and join them with a space
        return " ".join(reversed(s.split()))
