/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (str) {
    // Trim leading whitespaces
    str = str.trim();
    const len = str.length;
    if (len === 0) return 0;

    let i = 0;
    let ans = 0;
    let isPositive = true;

    // Check for sign
    if (str[i] === '+' || str[i] === '-') {
        isPositive = str[i] === '+';
        i++;
    }

    // Convert the number
    while (i < len) {
        const digit = str.charCodeAt(i) - 48; // Convert character to digit
        if (digit < 0 || digit > 9) break; // Non-digit character found
        
        // Check for overflow/underflow
        if (ans > Math.floor((2147483647 - digit) / 10)) {
            return isPositive ? 2147483647 : -2147483648;
        }

        ans = ans * 10 + digit;
        i++;
    }

    return isPositive ? ans : -ans;
};
