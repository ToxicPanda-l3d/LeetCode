/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const ans = new Array(n); // Initialize result array
    
    // First pass: calculate the product of all elements to the left of each index
    for (let i = 0, left = 1; i < n; ++i) {
        ans[i] = left;  // Store current left product
        left *= nums[i];  // Update left product
    }
    
    // Second pass: calculate the product of all elements to the right and multiply with left
    for (let i = n - 1, right = 1; i >= 0; --i) {
        ans[i] *= right;  // Multiply current value by right product
        right *= nums[i];  // Update right product
    }
    
    return ans;  // Return the result array
};
