class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Ensure nums1 is the smaller array to optimize binary search
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }

        int m = nums1.length; // Length of the first array
        int n = nums2.length; // Length of the second array
        int left = 0; // Start of the binary search on nums1
        int right = m; // End of the binary search on nums1

        // Perform binary search on the smaller array
        while (left <= right) {
            // Partition nums1 and nums2
            int partitionA = (left + right) / 2; // Current partition index for nums1
            int partitionB = (m + n + 1) / 2 - partitionA; // Corresponding partition index for nums2

            // Get max and min values around the partition for nums1
            int maxLeftA = (partitionA == 0) ? Integer.MIN_VALUE : nums1[partitionA - 1];
            int minRightA = (partitionA == m) ? Integer.MAX_VALUE : nums1[partitionA];

            // Get max and min values around the partition for nums2
            int maxLeftB = (partitionB == 0) ? Integer.MIN_VALUE : nums2[partitionB - 1];
            int minRightB = (partitionB == n) ? Integer.MAX_VALUE : nums2[partitionB];

            // Check if we have found the correct partitions
            if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
                // If the total length of both arrays is even
                if ((m + n) % 2 == 0) {
                    return (
                        (Math.max(maxLeftA, maxLeftB) + // Max of left side
                        Math.min(minRightA, minRightB)) / // Min of right side
                        2.0 // Average them for median
                    );
                } else {
                    // If the total length is odd, return the max of the left side
                    return Math.max(maxLeftA, maxLeftB);
                }
            } else if (maxLeftA > minRightB) {
                // Move towards the left in nums1
                right = partitionA - 1;
            } else {
                // Move towards the right in nums1
                left = partitionA + 1;
            }
        }
        // If we exit the loop without finding the median, return 0.0 (should not happen)
        return 0.0;
    }
}
