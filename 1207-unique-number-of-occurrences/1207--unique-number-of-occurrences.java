class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        // Count occurrences of each number
        Map<Integer, Integer> cnt = new HashMap<>();
        for (int x : arr) {
            cnt.merge(x, 1, Integer::sum);
        }
        
        // Check if all occurrence counts are unique
        return new HashSet<>(cnt.values()).size() == cnt.size();
    }
}
