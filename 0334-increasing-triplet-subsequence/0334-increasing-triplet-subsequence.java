class Solution {
    public boolean increasingTriplet(int[] nums) {
        int n = nums.length;
        // Arrays to store the left minimum and right maximum values for each index
        int[] lmi = new int[n]; // lmi stores the minimum value to the left of each index
        int[] rmx = new int[n]; // rmx stores the maximum value to the right of each index
        
        // Initialize boundary values for lmi and rmx
        lmi[0] = Integer.MAX_VALUE;    // No elements to the left of index 0, so set as max value
        rmx[n - 1] = Integer.MIN_VALUE; // No elements to the right of the last index, set as min value
        
        // Fill the lmi array: lmi[i] is the minimum of elements before index i
        for (int i = 1; i < n; ++i) {
            lmi[i] = Math.min(lmi[i - 1], nums[i - 1]);
        }
        
        // Fill the rmx array: rmx[i] is the maximum of elements after index i
        for (int i = n - 2; i >= 0; --i) {
            rmx[i] = Math.max(rmx[i + 1], nums[i + 1]);
        }
        
        // Check if there is an element nums[i] such that lmi[i] < nums[i] < rmx[i]
        // This would mean there's a valid increasing triplet
        for (int i = 0; i < n; ++i) {
            if (lmi[i] < nums[i] && nums[i] < rmx[i]) {
                return true; // Found a valid triplet
            }
        }
        
        // If no such triplet found, return false
        return false;
    }
}
