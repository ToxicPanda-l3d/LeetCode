class Solution:
    def myAtoi(self, s: str) -> int:
        # Initialize index, sign, and result variables
        i, sign, result = 0, 1, 0
        n = len(s)

        # Step 1: Ignore leading whitespace
        while i < n and s[i] == ' ':
            i += 1
        
        # Step 2: Determine the sign
        if i < n and (s[i] == '+' or s[i] == '-'):
            sign = -1 if s[i] == '-' else 1
            i += 1

        # Step 3: Convert digits and build the result
        while i < n and s[i].isdigit():
            digit = int(s[i])
            # Check for overflow before multiplying and adding
            if result > (2**31 - 1) // 10 or (result == (2**31 - 1) // 10 and digit > 7):
                return 2**31 - 1 if sign == 1 else -2**31
            result = result * 10 + digit
            i += 1

        # Return the final result with sign
        return sign * result
