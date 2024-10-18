class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        # Initialize two variables to track the smallest (mi) and the second smallest (mid) values
        mi, mid = float('inf'), float('inf')
        
        # Iterate through each number in the input list
        for num in nums:
            # If the current number is greater than the second smallest, we found an increasing triplet
            if num > mid:
                return True
            # If the current number is less than or equal to the smallest, update the smallest
            if num <= mi:
                mi = num
            # If the current number is between the smallest and the second smallest, update the second smallest
            else:
                mid = num
        
        # If no increasing triplet is found, return False
        return False
