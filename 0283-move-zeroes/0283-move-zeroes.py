class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        # Initialize 'i' to -1, this will keep track of the last non-zero element.
        i = -1
        
        # Loop through the list using 'j' as the index and 'x' as the element.
        for j, x in enumerate(nums):
            # If the current element 'x' is non-zero, we need to move it.
            if x:
                # Increment 'i' to point to the next position where a non-zero element should be placed.
                i += 1
                # Swap the current non-zero element 'nums[j]' with the element at index 'i'.
                nums[i], nums[j] = nums[j], nums[i]
