class Solution:
    def longestSubarray(self, nums):
        ans = 0
        cnt = 0
        l = 0
        
        for r in range(len(nums)):
            # Increase count if the current element is 0
            cnt += nums[r] ^ 1
            
            # If more than one zero, move the left pointer
            while cnt > 1:
                cnt -= nums[l] ^ 1
                l += 1
            
            # Calculate the length of the current valid subarray
            ans = max(ans, r - l)
        
        return ans
