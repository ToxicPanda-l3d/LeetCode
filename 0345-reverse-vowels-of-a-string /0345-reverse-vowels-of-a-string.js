
const reverseVowels = function(s) {
    // Extract all vowels (both lowercase and uppercase) from the string 's'
    // using a regular expression that matches 'a', 'e', 'i', 'o', 'u' (case insensitive).
    // The vowels are stored in an array called 'vow'.
    const vow = s.match(/[aeiou]/gi);

    // Replace each vowel in the original string with the last vowel from the 'vow' array.
    // The 'vow.pop()' removes and returns the last element from the array,
    // ensuring that vowels are replaced in reverse order.
    return s.replace(/[aeiou]/ig, el => vow.pop());
};
