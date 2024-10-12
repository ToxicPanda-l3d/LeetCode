/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  // If str1 + str2 is not equal to str2 + str1, return empty string (no common divisor)
  if (str1 + str2 !== str2 + str1) return '';
  
  // Helper function to compute GCD using Euclidean algorithm
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));

  // Return the substring of str1 with length equal to the GCD of their lengths
  return str1.substring(0, gcd(str1.length, str2.length));
};
