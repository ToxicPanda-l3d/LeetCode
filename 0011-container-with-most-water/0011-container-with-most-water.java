class Solution {
    public int maxArea(int[] height) {
        // Initialize two pointers, i at the start and j at the end of the array
        int i = 0, j = height.length - 1;
        // Variable to store the maximum area found
        int ans = 0;
        
        // Loop until the two pointers meet
        while (i < j) {
            // Calculate the area by using the shorter height and the distance between the two pointers
            int t = Math.min(height[i], height[j]) * (j - i);
            // Update the maximum area found so far
            ans = Math.max(ans, t);
            
            // Move the pointer that has the shorter height to try to find a larger area
            if (height[i] < height[j]) {
                ++i; // Move the left pointer to the right
            } else {
                --j; // Move the right pointer to the left
            }
        }
        
        // Return the maximum area
        return ans;
    }
}
