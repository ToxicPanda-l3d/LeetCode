/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // Initialize two pointers, one at the start (i) and one at the end (j)
    let i = 0;
    let j = height.length - 1;
    
    // Variable to store the maximum area
    let ans = 0;
    
    // Loop until the two pointers meet
    while (i < j) {
        // Calculate the current area using the shorter height and distance between the two pointers
        const t = Math.min(height[i], height[j]) * (j - i);
        
        // Update the maximum area if the current area is larger
        ans = Math.max(ans, t);
        
        // Move the pointer with the shorter height inward
        if (height[i] < height[j]) {
            ++i; // Move left pointer right
        } else {
            --j; // Move right pointer left
        }
    }
    
    // Return the maximum area found
    return ans;
};
