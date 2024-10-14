class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        # If no flowers need to be planted, return True immediately
        if n == 0:
            return True
        
        # Loop through each plot in the flowerbed
        for i in range(len(flowerbed)):
            # Check if the current plot is empty (flowerbed[i] == 0)
            # and if the adjacent plots (if they exist) are also empty.
            if (flowerbed[i] == 0 and 
                (i == 0 or flowerbed[i - 1] == 0) and  # Either first plot or the previous plot is empty
                (i == len(flowerbed) - 1 or flowerbed[i + 1] == 0)):  # Either last plot or the next plot is empty
                
                # Plant a flower at the current plot
                flowerbed[i] = 1
                
                # Reduce the number of flowers that need to be planted
                n -= 1
                
                # If all required flowers have been planted, return True
                if n == 0:
                    return True
        
        # If the loop completes and we still need to plant more flowers, return False
        return False
