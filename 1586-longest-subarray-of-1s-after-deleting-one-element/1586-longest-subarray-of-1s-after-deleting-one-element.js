var longestSubarray = function(nums) {
    let prevWindow = 0;
    let currWindow = 0;
    let max_length = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            max_length = Math.max(max_length, prevWindow + currWindow);
            prevWindow = currWindow;
            currWindow = 0;
        } else {
            currWindow++;
        }
    }

    if (currWindow === nums.length) {
        return currWindow - 1;
    }

    max_length = Math.max(max_length, prevWindow + currWindow);
    return max_length;
};