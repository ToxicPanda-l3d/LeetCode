class Solution {
    public int compress(char[] chars) {
        int k = 0, n = chars.length;  // k: write index, n: length of chars
        for (int i = 0, j = i + 1; i < n;) {
            // Find the end of the sequence of the same characters
            while (j < n && chars[j] == chars[i]) {
                ++j;
            }
            chars[k++] = chars[i];  // Write the character
            if (j - i > 1) {  // If there is more than one occurrence
                String cnt = String.valueOf(j - i);  // Convert count to string
                for (char c : cnt.toCharArray()) {
                    chars[k++] = c;  // Write each digit of the count
                }
            }
            i = j;  // Move to the next group of characters
        }
        return k;  // Return the length of the compressed array
    }
}
