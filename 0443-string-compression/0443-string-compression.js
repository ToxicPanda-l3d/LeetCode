/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;  // Read pointer
    let res = 0;  // Write pointer (new length of compressed array)

    while (i < chars.length) {
        let groupLength = 1;  // Start by assuming a group of one character
        
        // Count how many consecutive identical characters there are
        while (i + groupLength < chars.length && chars[i + groupLength] === chars[i]) {
            groupLength++;
        }
        
        // Write the character to the result position
        chars[res++] = chars[i];

        // If the group length is greater than 1, write the count as characters
        if (groupLength > 1) {
            let countStr = String(groupLength);  // Convert the group length to a string
            for (let c of countStr) {
                chars[res++] = c;  // Write each digit of the count
            }
        }
        
        i += groupLength;  // Move the read pointer to the next group of characters
    }
    
    return res;  // Return the new length of the compressed array
};
