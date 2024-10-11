class Solution {
    public boolean isPalindrome(int x) {
        // Check if the number is negative or if it ends with a 0 (but is not 0 itself)
        // Negative numbers and numbers ending with 0 (except 0) cannot be palindromes
        if (x < 0 || (x > 0 && x % 10 == 0)) {
            return false;
        }
        
        int y = 0; // This variable will hold the reversed number
        
        // Reverse half of the number
        while (x > y) { // Continue until the original number is greater than the reversed half
            y = y * 10 + x % 10; // Add the last digit of x to y
            x /= 10; // Remove the last digit from x
        }
        
        // Check if the original number is equal to the reversed number,
        // or if it is equal to the reversed number divided by 10 (in case of odd number of digits)
        return x == y || x == y / 10;
    }
}
