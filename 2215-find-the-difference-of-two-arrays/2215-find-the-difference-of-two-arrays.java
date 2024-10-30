class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        // Convert nums1 and nums2 arrays into sets for unique elements
        Set<Integer> s1 = convert(nums1);
        Set<Integer> s2 = convert(nums2);

        // Lists to store unique elements from each set
        List<Integer> l1 = new ArrayList<>();
        List<Integer> l2 = new ArrayList<>();

        // Find elements unique to s1
        for (int v : s1) {
            if (!s2.contains(v)) {
                l1.add(v);
            }
        }

        // Find elements unique to s2
        for (int v : s2) {
            if (!s1.contains(v)) {
                l2.add(v);
            }
        }

        // Return the lists of unique elements from nums1 and nums2
        return List.of(l1, l2);
    }

    // Helper method to convert an array to a set of unique elements
    private Set<Integer> convert(int[] nums) {
        Set<Integer> s = new HashSet<>();
        for (int v : nums) {
            s.add(v);
        }
        return s;
    }
}
