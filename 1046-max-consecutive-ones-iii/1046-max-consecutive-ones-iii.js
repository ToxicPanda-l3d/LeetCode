var longestOnes = function(nums, k) {
    let l = 0, cnt = 0;
    
    for (let x of nums) {
        cnt += x ^ 1;
        if (cnt > k) {
            cnt -= nums[l++] ^ 1;
        }
    }
    
    return nums.length - l;
};
