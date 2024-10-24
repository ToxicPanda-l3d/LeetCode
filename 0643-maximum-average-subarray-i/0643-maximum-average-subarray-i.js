/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let ans = 0;
    let s = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        s += nums[i];
    }

    ans = s;

    // Iterate through the array to find the maximum sum of any k-length subarray
    for (let i = k; i < nums.length; i++) {
        s += nums[i] - nums[i - k]; // Slide the window
        ans = Math.max(ans, s); // Update maximum sum
    }

    // Return the maximum average
    return ans / k;
};