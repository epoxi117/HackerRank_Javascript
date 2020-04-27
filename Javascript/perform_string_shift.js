/*
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift). 
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations.

 

Example 1:

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
Example 2:

Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:  
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 

Constraints:

1 <= s.length <= 100
s only contains lower case English letters.
1 <= shift.length <= 100
shift[i].length == 2
0 <= shift[i][0] <= 1
0 <= shift[i][1] <= 100

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  //0 for beginning of string, 1 for end of string
  let shift_direction = 0;
  let current_iteration = 0;
  let shift_count = 0;
  let temp = "";
  s = s.split("");

  for (
    let current_iteration = 0;
    current_iteration < shift.length;
    current_iteration++
  ) {
    switch (shift[current_iteration][0]) {
      case 0:
        shift_count = shift[current_iteration][1];
        while (shift_count > 0) {
          temp = s.shift();
          s.push(temp);
          shift_count--;
        }
        break;
      case 1:
        shift_count = shift[current_iteration][1];
        while (shift_count > 0) {
          temp = s.pop();
          s.unshift(temp);
          shift_count--;
        }
        break;
    }
  }

  console.log("String", s);
  return s.join("");
};

let example = [
  [1, 89],
  [1, 38],
  [1, 50],
  [1, 77],
  [1, 50],
  [0, 16],
  [0, 99],
  [1, 73],
  [0, 13],
  [0, 82],
  [1, 63],
  [0, 42],
  [1, 32],
  [0, 56],
  [0, 15],
  [1, 12],
  [0, 80],
  [0, 20],
  [1, 84],
  [1, 81],
  [0, 39],
  [0, 93],
  [0, 42],
  [1, 76],
  [0, 66],
  [0, 46],
  [1, 55],
  [1, 42],
  [0, 35],
  [1, 41],
  [1, 60],
  [1, 18],
  [0, 82],
  [0, 14],
  [1, 34],
  [0, 57],
  [1, 30],
  [0, 55],
  [1, 93],
  [0, 20],
  [0, 18],
  [0, 88],
  [0, 50],
  [0, 2],
  [0, 68],
  [1, 74],
  [1, 91],
  [1, 35],
  [0, 1],
  [1, 60],
  [0, 14],
  [1, 57],
  [0, 7],
  [1, 26],
  [0, 44],
  [1, 7],
  [0, 16],
  [1, 6],
  [0, 39],
  [1, 10],
  [1, 74],
  [1, 62],
  [0, 37],
  [1, 98],
  [1, 2],
  [0, 26],
  [1, 55],
  [0, 92],
  [1, 90],
  [1, 30],
  [0, 28],
  [0, 90],
  [0, 75],
  [1, 54],
  [0, 33],
  [0, 73],
  [1, 55],
  [1, 26],
  [1, 17],
  [1, 46],
  [1, 4],
  [1, 83],
  [1, 80],
  [1, 38],
  [0, 56],
  [1, 59],
  [0, 82],
  [0, 73],
  [1, 1],
  [0, 81],
  [0, 61],
  [0, 48],
  [0, 29],
  [1, 74],
  [1, 77],
  [0, 81],
  [1, 48],
  [1, 16],
  [0, 17],
  [0, 61],
];

stringShift(
  "egoriknbzytgkaqfaoovpkdldqibsytdxysqyfitxulwpcvblzhmsfxsinyxwyyucmywsncjhtocmzvtfznlyegaprpxfqnhevzc",
  example
);
