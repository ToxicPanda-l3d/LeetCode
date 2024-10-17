class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)  # Get the length of the input list
        ans = [0] * n  # Initialize the result list with zeroes
        
        # Initialize left and right products
        left = right = 1  # Both left and right products start from 1
        
        # First pass: calculate the left product for each element
        for i, x in enumerate(nums):  # Iterate over the list
            ans[i] = left  # Store the current left product in the result list
            left *= x  # Update the left product by multiplying with the current element
        
        # Second pass: calculate the right product for each element
        for i in range(n - 1, -1, -1):  # Iterate backward over the list
            ans[i] *= right  # Multiply the current result by the right product
            right *= nums[i]  # Update the right product by multiplying with the current element
        
        # Return the result list which contains the product of all elements except self
        return ans
