/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = -1; // Tracks position to place the next non-zero element
    for (let j = 0; j < nums.length; ++j) {
        if (nums[j]) { // When non-zero is found
            const t = nums[++i]; // Increment 'i' and swap
            nums[i] = nums[j];
            nums[j] = t;
        }
    }
};
