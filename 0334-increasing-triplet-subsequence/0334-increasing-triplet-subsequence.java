class Solution {
    public boolean increasingTriplet(int[] nums) {
        int n = nums.length; // Get the length of the input array
        if (n < 3) return false; // A triplet cannot exist if there are fewer than 3 numbers
        
        // Initialize two variables to track the first and second minimums
        int min1 = Integer.MAX_VALUE; // First minimum
        int min2 = Integer.MAX_VALUE; // Second minimum

        // Loop through each number in the array
        for (int num : nums) {
            if (num <= min1) {
                // Update min1 if the current number is smaller or equal
                min1 = num;
            } else if (num <= min2) {
                // Update min2 if the current number is greater than min1 but smaller or equal to min2
                min2 = num;
            } else {
                // If we find a number greater than both min1 and min2, we have an increasing triplet
                return true;
            }
        }
        
        // If no increasing triplet is found, return false
        return false;
    }
}

