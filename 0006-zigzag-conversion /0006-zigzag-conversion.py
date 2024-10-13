class Solution:
    def convert(self, s: str, numRows: int) -> str:
        # If there's only one row or the string length is less than or equal to numRows, return the original string.
        if numRows == 1 or numRows >= len(s):
            return s

        idx, d = 0, 1  # Initialize the current row index and direction flag.
        rows = [[] for _ in range(numRows)]  # Create a list of lists to hold characters for each row.

        # Loop through each character in the input string.
        for char in s:
            rows[idx].append(char)  # Append the character to the current row.
            # Toggle direction when reaching the first or last row.
            if idx == 0:
                d = 1  # Move down if at the top row.
            elif idx == numRows - 1:
                d = -1  # Move up if at the bottom row.
            idx += d  # Update the row index based on the current direction.

        # Convert each list of characters in rows to a string.
        for i in range(numRows):
            rows[i] = ''.join(rows[i])

        # Join all row strings together into a single string and return it.
        return ''.join(rows)
