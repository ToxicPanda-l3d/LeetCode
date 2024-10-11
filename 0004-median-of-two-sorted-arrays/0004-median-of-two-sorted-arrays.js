
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Ensure nums1 is the smaller array to optimize the binary search
    if (nums1.length > nums2.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }

    let m = nums1.length; // Length of the first array
    let n = nums2.length; // Length of the second array
    let left = 0; // Start index for binary search in nums1
    let right = m; // End index for binary search in nums1

    // Perform binary search on the smaller array
    while (left <= right) {
        // Calculate partition indices for both arrays
        let partitionA = Math.floor((left + right) / 2);
        let partitionB = Math.floor((m + n + 1) / 2 - partitionA);

        // Handle edge cases for left and right of partitionA
        let maxLeftA = (partitionA === 0) ? Number.MIN_SAFE_INTEGER : nums1[partitionA - 1];
        let minRightA = (partitionA === m) ? Number.MAX_SAFE_INTEGER : nums1[partitionA];

        // Handle edge cases for left and right of partitionB
        let maxLeftB = (partitionB === 0) ? Number.MIN_SAFE_INTEGER : nums2[partitionB - 1];
        let minRightB = (partitionB === n) ? Number.MAX_SAFE_INTEGER : nums2[partitionB];

        // Check if we have found the correct partition
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            // If the combined length of both arrays is even
            if ((m + n) % 2 === 0) {
                // Return the average of the two middle values
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2.0;
            } else {
                // Return the maximum of the left partition
                return Math.max(maxLeftA, maxLeftB);
            }
        } 
        // If maxLeftA is greater than minRightB, we need to move the partitionA to the left
        else if (maxLeftA > minRightB) {
            right = partitionA - 1;
        } 
        // If maxLeftB is greater than minRightA, we need to move the partitionA to the right
        else {
            left = partitionA + 1;
        }
    }

    // If we exit the loop without returning, it means the input arrays were not valid
    return 0.0;
};
