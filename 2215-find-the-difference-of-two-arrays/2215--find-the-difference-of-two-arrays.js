var findDifference = function (nums1, nums2) {
    // Convert nums1 and nums2 to sets for unique values
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);

    // Remove common elements from each set
    nums1.forEach(num => s2.delete(num));
    nums2.forEach(num => s1.delete(num));

    // Convert sets to arrays and return as result
    return [Array.from(s1), Array.from(s2)];
};
