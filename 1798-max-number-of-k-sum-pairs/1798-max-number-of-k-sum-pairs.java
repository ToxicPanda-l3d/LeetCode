class Solution {
    public int maxOperations(int[] nums, int k) {
        // Sort the array to use two pointers technique
        Arrays.sort(nums);
        
        int l = 0, r = nums.length - 1; // Initialize two pointers
        int ans = 0; // Variable to count valid pairs
        
        // Iterate while left pointer is less than right pointer
        while (l < r) {
            int s = nums[l] + nums[r]; // Calculate the sum of the two pointer elements
            
            if (s == k) { // If the sum equals k, it's a valid pair
                ++ans; // Increment the count of valid pairs
                ++l;   // Move the left pointer to the right
                --r;   // Move the right pointer to the left
            } else if (s > k) { // If the sum is greater than k, reduce the right pointer
                --r;
            } else { // If the sum is less than k, increase the left pointer
                ++l;
            }
        }
        
        return ans; // Return the total number of valid pairs
    }
}