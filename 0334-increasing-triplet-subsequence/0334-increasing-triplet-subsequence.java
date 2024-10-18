class Solution {
    public boolean increasingTriplet(int[] nums) {
        int max1 = Integer.MAX_VALUE;  // The smallest number in the triplet
        int max2 = Integer.MAX_VALUE;  // The second smallest number in the triplet

        // Iterate through the array
        for (int n : nums) {
            if (n <= max1) {
                // n is smaller than or equal to max1, update max1
                max1 = n;
            } else if (n <= max2) {
                // n is greater than max1 but smaller than or equal to max2, update max2
                max2 = n;
            } else {
                // n is greater than both max1 and max2, a triplet is found
                return true;  // Early exit
            }
        }

        // If no increasing triplet is found
        return false;
    }
}
