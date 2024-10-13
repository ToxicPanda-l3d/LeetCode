class Solution {
    public String convert(String s, int numRows) {
        // If there's only one row, return the original string as no zigzag is needed.
        if (numRows == 1 || numRows >= s.length()) {
            return s;
        }

        // Array of StringBuilder to hold strings for each row.
        StringBuilder[] rows = new StringBuilder[numRows];
        for (int i = 0; i < numRows; i++) {
            rows[i] = new StringBuilder();
        }

        int i = 0;  // Current row index
        int k = 1;  // Direction flag (1 for down, -1 for up)

        // Loop through each character in the input string
        for (char c : s.toCharArray()) {
            rows[i].append(c); // Append character to the current row
            // Toggle direction when the first or last row is reached
            if (i == 0) {
                k = 1;  // Start moving down
            } else if (i == numRows - 1) {
                k = -1; // Start moving up
            }
            i += k; // Move to the next row based on direction
        }

        // Combine all the rows into one final result
        StringBuilder result = new StringBuilder();
        for (StringBuilder row : rows) {
            result.append(row); // Append each row's content to the final result
        }

        return result.toString();
    }
}
