
class Solution {
    public int reverse(int x) {
        int rev = 0; // Initialize reversed number
        while (x != 0) { // Loop until all digits are processed
            int pop = x % 10; // Get the last digit
            x /= 10; // Remove the last digit from x
            
            // Check for overflow before updating rev
            if (rev > Integer.MAX_VALUE / 10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) {
                return 0; // Overflow for positive numbers
            }
            if (rev < Integer.MIN_VALUE / 10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) {
                return 0; // Overflow for negative numbers
            }
            
            rev = rev * 10 + pop; // Update rev by adding the last digit
        }
        return rev; // Return the reversed integer
    }
}
