class Solution {
    public boolean increasingTriplet(int[] nums) {
       int max1 = Integer.MAX_VALUE; // First number in the increasing triplet
       int max2 = Integer.MAX_VALUE; // Second number in the increasing triplet

       // Loop through each number in the array
       for(int n : nums) {
           // Update max1 if we find a smaller number (potential first element in the triplet)
           if(n <= max1) {
               max1 = n;
           } 
           // If n is larger than max1 but smaller than max2, it becomes the second number
           else if(n <= max2) {
               max2 = n;
           } 
           // If we find a number larger than both max1 and max2, we have a triplet
           else {
               return true; // Found an increasing triplet
           }
       }
       
       // If no such triplet is found, return false
       return false;
    }
}
