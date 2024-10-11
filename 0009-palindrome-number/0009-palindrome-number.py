class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Check if x is negative or if it ends with a zero (and is not zero itself).
        # Negative numbers and numbers ending with zero (except zero) cannot be palindromes.
        if x < 0 or (x and x % 10 == 0):
            return False
        
        y = 0  # Initialize y to store the reversed number.
        
        # Reverse the number while x is greater than y.
        while y < x:
            # Add the last digit of x to y, shifting y left by one digit.
            y = y * 10 + x % 10
            # Remove the last digit from x by integer division by 10.
            x //= 10
        
        # Check if x is equal to y (for even-length numbers) or y // 10 (for odd-length numbers).
        return x in (y, y // 10)
