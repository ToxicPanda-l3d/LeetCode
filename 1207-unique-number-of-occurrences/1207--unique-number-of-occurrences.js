var uniqueOccurrences = function(arr) {
    // Create a map to count occurrences of each number
    const cnt = new Map();
    
    // Populate the map with counts
    for (const x of arr) {
        cnt.set(x, (cnt.get(x) || 0) + 1);
    }
    
    // Check if all occurrence counts are unique
    return cnt.size === new Set(cnt.values()).size;
};
