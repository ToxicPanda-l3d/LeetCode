class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        # Find the maximum number of candies any kid has.
        maxCandies = max(candies)
        # Initialize an empty list to store the result (True/False for each kid).
        result = []
        
        # For each kid, check if their candies plus the extraCandies is greater than or equal to the maximum candies found.
        for i in range(len(candies)):            
            result.append(candies[i] + extraCandies >= maxCandies)
            
        # Return the final list of boolean values.
        return result
