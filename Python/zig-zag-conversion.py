#https://leetcode.com/problems/zigzag-conversion/

class Solution:
    def convert(self, s, numRows):

        output = [""] * numRows

        current_character = 0

        col_length = self.columnLength(s, numRows)

        # First column, you print on all rows
        # For the next print, you need to determine which column index to print on based on how many rows there are
        # Algorithm:
        # start a count from 0 that "walks" across the column index
        # Start a climb_count initialized at (NumRows -1)

        # curr_col refers to output string location
        curr_col = 0

        # For adding the diagonal letter climbing upwards
        climb_count = numRows - 2

        if col_length < 2:
            print(s)
            return s
        else:
            for column_index in range(0, col_length):
                # Resetting values for algorithm
                if (curr_col >= (numRows - 1)):
                    curr_col = 0
                    climb_count = numRows - 2

                # print("current_char:", current_character)

                if (curr_col ==0 or curr_col % (numRows - 1) == 0):
                    tempCharIndex = current_character

                    endRange = numRows

                    if ((tempCharIndex + numRows) > len(s)):
                        endRange = numRows - ((tempCharIndex + numRows) - len(s))

                    for x in range(0, endRange):
                        if (current_character >= len(s)):
                            break
                        else:
                            output[x] += s[tempCharIndex]
                            tempCharIndex += 1

                    current_character += numRows
                    curr_col += 1

                else:
                    output[climb_count] += s[current_character]

                    curr_col += 1
                    climb_count -= 1
                    current_character += 1

        print(output)

        return self.concatenated_Solution(output)

    def columnLength(self, stringLen, rowLen):
        size = len(stringLen)

        count = 0
        col_length = 0

        if rowLen < 2:
            return 0;

        else:
            while (size > 0):

                if (count >= rowLen):
                    count = 1

                if (count == 0 or count % (rowLen - 1) == 0):
                    size -= rowLen
                    count += 1
                    col_length += 1
                else:
                    size -= 1
                    count += 1
                    col_length += 1

        return col_length

    def concatenated_Solution(self, list):
        final_ans = ""
        for i in list:
            final_ans += i

        return final_ans


test = Solution()
test.convert("PAYPALISHIRING", 1)
