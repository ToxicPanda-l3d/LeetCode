class Solution {
    public String reverseWords(String s) {
        String[] words = s.trim().split("\\s+");  // Split by one or more spaces
        StringBuilder result = new StringBuilder();
        
        // Append words in reverse order
        for (int i = words.length - 1; i >= 0; i--) {
            result.append(words[i]);
            if (i > 0) {
                result.append(" ");  // Add space between words
            }
        }
        return result.toString();
    }
}
