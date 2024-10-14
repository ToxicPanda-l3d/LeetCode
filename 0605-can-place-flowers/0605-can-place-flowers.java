class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int m = flowerbed.length;  // Get the length of the flowerbed array.
        
        // Iterate through each plot in the flowerbed.
        for (int i = 0; i < m; ++i) {
            // Check the left neighbor plot. If it's the first plot, treat the left neighbor as 0.
            int l = i == 0 ? 0 : flowerbed[i - 1];
            
            // Check the right neighbor plot. If it's the last plot, treat the right neighbor as 0.
            int r = i == m - 1 ? 0 : flowerbed[i + 1];
            
            // If the current plot and its neighbors (left and right) are all empty (0),
            // a flower can be planted at the current plot.
            if (l + flowerbed[i] + r == 0) {
                flowerbed[i] = 1;  // Plant a flower at the current plot.
                --n;  // Decrease the number of flowers that need to be planted.
            }
        }
        
        // After going through the entire flowerbed, if n <= 0, it means we were able to plant
        // all required flowers. Return true if successful, otherwise return false.
        return n <= 0;
    }
}
