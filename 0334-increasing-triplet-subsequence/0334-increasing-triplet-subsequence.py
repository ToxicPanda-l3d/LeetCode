class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        mi = inf
        mid = inf
        
        for num in nums:
            if num > mid:
                # Found a number greater than mid, thus we have an increasing triplet
                return True
            elif num > mi:
                # Found a number greater than mi but less than or equal to mid
                mid = num
            else:
                # Update mi to the smallest number seen so far
                mi = num
        
        return False