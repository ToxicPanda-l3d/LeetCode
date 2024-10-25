function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let cnt = 0;

    // Count vowels in the first substring of length k
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            cnt++;
        }
    }

    let ans = cnt;

    // Slide the window across the string
    for (let i = k; i < s.length; i++) {
        // Add new character to window
        if (vowels.has(s[i])) {
            cnt++;
        }
        // Remove character that goes out of window
        if (vowels.has(s[i - k])) {
            cnt--;
        }
        // Update the maximum count of vowels found
        ans = Math.max(ans, cnt);
    }

    return ans;
}
