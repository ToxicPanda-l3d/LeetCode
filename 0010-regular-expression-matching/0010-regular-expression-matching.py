class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        @cache
        def dfs(i, j):
            # If pattern is fully traversed, return True if the string is also fully traversed
            if j >= n:
                return i == m
            
            # If the next character in pattern is '*', handle zero or more occurrences
            if j + 1 < n and p[j + 1] == '*':
                return dfs(i, j + 2) or (
                    i < m and (s[i] == p[j] or p[j] == '.') and dfs(i + 1, j)
                )
            
            # Match current characters and move to the next
            return i < m and (s[i] == p[j] or p[j] == '.') and dfs(i + 1, j + 1)

        m, n = len(s), len(p)
        return dfs(0, 0)