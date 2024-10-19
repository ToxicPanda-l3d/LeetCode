class Solution {
    public int compress(char[] chars) {
        int i = 0, res = 0;  
        while (i < chars.length) {
            int groupLength = 1;  // Start with one character in the group

            // Count consecutive characters that are the same
            while (i + groupLength < chars.length && chars[i + groupLength] == chars[i]) {
                groupLength++;  // Increment the group length if characters match
            }

            // Write the character at res
            chars[res++] = chars[i];

            // If there is more than one occurrence, write the count as well
            if (groupLength > 1) {
                for (char c : Integer.toString(groupLength).toCharArray()) {
                    chars[res++] = c;  // Write each digit of the count
                }
            }

            // Move i to the start of the next group of characters
            i += groupLength;
        }
        
        return res;  // Return the length of the compressed array
    }
}
