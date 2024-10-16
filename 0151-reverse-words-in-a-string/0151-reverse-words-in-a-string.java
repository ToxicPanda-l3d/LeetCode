class Solution {
    public String reverseWords(String s) {
        // Split the string by one or more spaces and store the words in a list
        List<String> words = Arrays.asList(s.trim().split("\\s+"));
        
        // Reverse the list of words
        Collections.reverse(words);
        
        // Join the reversed words with a single space and return the result
        return String.join(" ", words);
    }
}
