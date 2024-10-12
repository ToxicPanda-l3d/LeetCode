class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        # Check if concatenating str1 + str2 is equal to str2 + str1, If they are not equal, it means the two strings don't share a common divisor
        if str1 + str2 != str2 + str1:
            return ''  # Return an empty string if no common pattern exists
        
        # Find the greatest common divisor (GCD) of the lengths of the two strings
        n = gcd(len(str1), len(str2))
        
        # Return the substring of str1 from the beginning to the length 'n',which represents the largest string that can divide both str1 and str2
        return str1[:n]
