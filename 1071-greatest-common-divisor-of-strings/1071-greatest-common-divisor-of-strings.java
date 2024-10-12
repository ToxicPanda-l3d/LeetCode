class Solution {

    // Helper method to compute the greatest common divisor (GCD) of two integers using recursion
    public int gcd(int x, int y) {
        // Base case: if the second number (y) is 0, return the first number (x) as the GCD
        if (y == 0) {
            return x;
        } else {
            // Recursive case: GCD of y and the remainder of x divided by y
            return gcd(y, x % y);
        }    
    }

    // Method to find the greatest common divisor (GCD) of two strings
    public String gcdOfStrings(String str1, String str2) {
        // Check if str1 + str2 equals str2 + str1
        // This ensures that both strings are made of the same repeating pattern
        if (!(str1 + str2).equals(str2 + str1)) {
            return ""; // Return an empty string if they don't have a common pattern
        }
        
        // Find the GCD of the lengths of the two strings
        int gcdLength = gcd(str1.length(), str2.length());
        
        // Return the substring of str1 from the start to the gcdLength
        // This is the largest substring that can divide both str1 and str2
        return str1.substring(0, gcdLength);
    }
}
