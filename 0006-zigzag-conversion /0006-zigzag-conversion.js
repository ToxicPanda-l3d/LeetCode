/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // If numRows is less than 2, no zigzag conversion is needed; return the original string.
    if(numRows < 2){
        return s;
    }

    // Calculate the length of one full zigzag cycle.
    const divisor = (numRows - 1) * 2;
    // Initialize an array to hold the strings for each row.
    const rows = Array(numRows).fill("");

    // Loop through each character in the string.
    for(let dividend = 0; dividend < s.length; dividend++){
        // Determine the current position within the zigzag cycle.
        const mod =  dividend % divisor;
        // Calculate the row index based on the position within the cycle.
        const rowIndex = mod < numRows ? mod : divisor - mod;

        // Append the current character to the appropriate row.
        rows[rowIndex] += s[dividend];
    }

    // Join all rows together into a single string and return it.
    return rows.join('');
};
