class Solution:
    def reverse(self, x: int) -> int:
        # Convert the absolute value of x to a string, reverse it, and convert back to an integer
        rev = int(str(abs(x))[::-1])
        
        # Check if the original number x is negative and return the reversed value with the appropriate sign
        # Additionally, check if the reversed value fits within the 32-bit signed integer range
        return (-rev if x < 0 else rev) if rev.bit_length() < 32 else 0
