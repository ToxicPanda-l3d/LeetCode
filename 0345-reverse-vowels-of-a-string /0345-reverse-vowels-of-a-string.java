class Solution {
    public String reverseVowels(String s) {
        // Create a boolean array to mark vowels (both uppercase and lowercase)
        boolean[] vowels = new boolean[128];
        for (char c : "aeiouAEIOU".toCharArray()) {
            vowels[c] = true;
        }

        // Convert input string to character array
        char[] cs = s.toCharArray();
        int i = 0, j = cs.length - 1;

        // Two-pointer approach to find and swap vowels
        while (i < j) {
            // Move 'i' forward until a vowel is found
            while (i < j && !vowels[cs[i]]) {
                ++i;
            }
            // Move 'j' backward until a vowel is found
            while (i < j && !vowels[cs[j]]) {
                --j;
            }
            // Swap vowels at indices i and j
            if (i < j) {
                char t = cs[i];
                cs[i] = cs[j];
                cs[j] = t;
                ++i;
                --j;
            }
        }
        // Return the modified string
        return String.valueOf(cs);
    }
}
