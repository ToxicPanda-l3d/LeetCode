/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  // Find the maximum number of candies any kid has and return a boolean array indicating
  // if each kid can have the greatest number of candies with the extraCandies added.
  const max = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= max);
};
