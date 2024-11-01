var closeStrings = function(word1, word2) {
    const cnt1 = Array(26).fill(0);
    const cnt2 = Array(26).fill(0);

    // Count the frequency of each character in word1
    for (const c of word1) {
        ++cnt1[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    // Count the frequency of each character in word2
    for (const c of word2) {
        ++cnt2[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    // Check if both words use the same set of characters
    for (let i = 0; i < 26; ++i) {
        if ((cnt1[i] === 0) !== (cnt2[i] === 0)) {
            return false;
        }
    }

    // Sort the frequency arrays and compare
    cnt1.sort((a, b) => a - b);
    cnt2.sort((a, b) => a - b);

    return cnt1.join('.') === cnt2.join('.');
};
