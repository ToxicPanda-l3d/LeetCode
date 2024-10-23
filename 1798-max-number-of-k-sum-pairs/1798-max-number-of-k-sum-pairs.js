var maxOperations = function(nums, k) {
    const cnt = new Map(); // Map to count occurrences of numbers
    let ans = 0; // Initialize answer to count valid pairs
    
    for (const num of nums) {
        const complement = k - num; // Calculate the complement
        // Check if the complement exists in the map and its count is greater than 0
        if (cnt.get(complement) > 0) {
            cnt.set(complement, cnt.get(complement) - 1); // Decrease count for the complement
            ans++; // Found a valid pair
        } else {
            // If the complement doesn't exist or is 0, store the current number
            cnt.set(num, (cnt.get(num) || 0) + 1); // Increment count for the current number
        }
    }
    return ans; // Return total number of valid pairs
};
