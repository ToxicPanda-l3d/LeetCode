class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Ensure nums1 is the smaller array for efficient binary search
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
            
        m, n = len(nums1), len(nums2)  # Lengths of both arrays
        low, high = 0, m  # Set binary search bounds

        # Perform binary search
        while low <= high:
            # Partitioning index for nums1
            partitionX = (low + high) // 2
            # Corresponding partition index for nums2
            partitionY = (m + n + 1) // 2 - partitionX
            
            # Max and min values for left and right partitions
            maxX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
            maxY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
            minX = float('inf') if partitionX == m else nums1[partitionX]
            minY = float('inf') if partitionY == n else nums2[partitionY]
            
            # Check if we have found the correct partitions
            if maxX <= minY and maxY <= minX:
                # Even total length: return average of max left and min right
                if (m + n) % 2 == 0:
                    return (max(maxX, maxY) + min(minX, minY)) / 2
                # Odd total length: return max of left partitions
                else:
                    return max(maxX, maxY)
            # Move towards the left partition of nums1
            elif maxX > minY:
                high = partitionX - 1
            # Move towards the right partition of nums1
            else:
                low = partitionX + 1
