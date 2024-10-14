
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0; // Initialize the reversed number to 0
    
    // Loop until x becomes 0
    while (x !== 0) {
        let pop = x % 10; // Get the last digit (pop) of x
        x = (x - pop) / 10; // Remove the last digit from x
        
        // Check for overflow/underflow conditions for positive 32-bit integer
        if (
            rev > Math.pow(2, 31) / 10 || // Check if rev is greater than max safe value
            (rev == Math.pow(2, 31) / 10 && pop > 7) // Check if rev is at max and pop exceeds 7
        )
            return 0; // Return 0 if overflow occurs

        // Check for overflow/underflow conditions for negative 32-bit integer
        if (
            rev < Math.pow(-2, 31) / 10 || // Check if rev is less than min safe value
            (rev == Math.pow(-2, 31) / 10 && pop < -8) // Check if rev is at min and pop is less than -8
        )
            return 0; // Return 0 if underflow occurs
        
        rev = rev * 10 + pop; // Append the digit to the reversed number
    }
    
    return rev; // Return the reversed number
};
