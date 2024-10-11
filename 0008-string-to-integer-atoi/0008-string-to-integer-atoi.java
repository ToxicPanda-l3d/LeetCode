
class Solution {
    public int myAtoi(String s) {
        int n = s.length();  // Get the length of the input string
        int i = 0;  // Pointer to traverse the string
        int sign = 1;  // Variable to store the sign (positive by default)

        // Skip leading whitespaces
        while(i < n && s.charAt(i) == ' ') {
            i++;
        }

        // Check if we've reached the end of the string after skipping whitespaces
        if (i >= n) {
            return 0;  // Return 0 if no valid number is found
        }

        // Check for a sign character ('+' or '-')
        if (s.charAt(i) == '-') {
            sign = -1;  // Set the sign to negative if '-' is found
        }
        
        // Move the pointer forward if a sign is encountered
        if (s.charAt(i) == '+' || s.charAt(i) == '-') {
            i++;
        }

        // Return 0 if no valid digits are found after the sign
        if (i >= n) {
            return 0;
        }

        int num = 0;  // Variable to store the resulting integer
        
        // Traverse through the digits and construct the integer
        while (i < n && s.charAt(i) >= '0' && s.charAt(i) <= '9') {
            int x = s.charAt(i) - '0';  // Convert the character to a numerical digit

            // Check for overflow or underflow cases
            if (num > Integer.MAX_VALUE / 10 || (num == Integer.MAX_VALUE / 10 && x > Integer.MAX_VALUE % 10)) {
                if (sign == 1) {
                    return Integer.MAX_VALUE;  // Return the maximum integer value if overflow occurs
                } else {
                    return Integer.MIN_VALUE;  // Return the minimum integer value if underflow occurs
                }
            }

            num = num * 10 + x;  // Update the result by adding the digit
            i++;  // Move the pointer to the next character
        }

        // Return the final result after applying the sign
        return num * sign;
    }
}
