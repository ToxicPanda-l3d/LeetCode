class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        // Initialize variable to store the greatest number of candies among all the kids.
        int maxCandies = 0;  
        // Find the maximum number of candies each kid has.
        for (int candy : candies) {
            maxCandies = Math.max(candy, maxCandies);
        }
        // Create a list to store the result (true/false for each kid).
        List<Boolean> result = new ArrayList<>();
        
        // For each kid, check if their candies plus the extraCandies will be greater than or equal to the maximum candies found.
        for (int candy : candies) {
            result.add(candy + extraCandies >= maxCandies);
        }

        // Return the final list of boolean values.
        return result;
    }
}
