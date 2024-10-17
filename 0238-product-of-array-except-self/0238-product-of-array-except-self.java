class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;  // Get the length of the input array
        int[] ans = new int[n];  // Initialize the result array to store the final answer
        
        // First pass: Calculate the left product for each element
        // 'left' holds the product of all elements to the left of the current element
        for (int i = 0, left = 1; i < n; ++i) {
            ans[i] = left;  // Store the current left product in the result array
            left *= nums[i];  // Update the left product by multiplying with the current element
        }
        
        // Second pass: Calculate the right product for each element
        // 'right' holds the product of all elements to the right of the current element
        for (int i = n - 1, right = 1; i >= 0; --i) {
            ans[i] *= right;  // Multiply the stored left product with the right product
            right *= nums[i];  // Update the right product by multiplying with the current element
        }
        
        // Return the result array which contains the product of all elements except self
        return ans;
    }
}
