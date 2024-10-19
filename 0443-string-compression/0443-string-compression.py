class Solution:
    def compress(self, chars: List[str]) -> int:
        i = 0  # Pointer to read through the array
        res = 0  # Pointer to write the compressed result
        
        # Iterate through the entire chars array
        while i < len(chars):
            group_length = 1  # Start with a single character in the group

            # Count consecutive characters that are the same
            while (i + group_length < len(chars)
                   and chars[i + group_length] == chars[i]):
                group_length += 1  # Increment group length if characters are equal

            chars[res] = chars[i]  # Write the current character at the res pointer
            res += 1  # Move to the next position for writing

            # If the group length is greater than 1, write the count
            if group_length > 1:
                str_repr = str(group_length)  # Convert group length to string
                chars[res:res+len(str_repr)] = list(str_repr)  # Write count as individual digits
                res += len(str_repr)  # Update res to move past the written digits

            # Move i to the start of the next group
            i += group_length

        return res  # array
