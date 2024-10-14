/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let current = 0; // 'current' keeps track of consecutive empty spots (0's).
    const size = flowerbed.length; // Get the size of the flowerbed array.

    // Loop through the entire flowerbed array.
    for (var i = 0; i <= size; i++) {
        // Check if current plot is within bounds and is empty (0).
        if (i < size && flowerbed[i] == 0) {
            current++; // Increment 'current' as it's an empty spot.
            
            // Special case: If it's the first plot, increment 'current' for boundary condition.
            if (i == 0) current++; 
            
            // Special case: If it's the last plot, increment 'current' for boundary condition.
            if (i == size - 1) current++;
        } else {
            // When encountering a planted spot (1) or end of array, calculate how many flowers can be placed
            // in the empty stretch by using the formula (current - 1) / 2.
            n -= Math.trunc((current - 1) / 2);
            
            // If the required number of flowers have been planted, return true.
            if (n <= 0) return true;

            // Reset 'current' for the next stretch of empty spots.
            current = 0;
        }
    }
    // If after the entire loop, we still haven't planted enough flowers, return false.
    return false;
};
