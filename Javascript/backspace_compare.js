/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".

Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let stack_S = [];
  let stack_T = [];

  for (let ii = 0; ii < S.length; ii++) {
    if (S[ii] == "#") {
      stack_S.pop();
      continue;
    }
    stack_S.push(S[ii]);
  }

  for (let xx = 0; xx < T.length; xx++) {
    if (T[xx] == "#") {
      stack_T.pop();
      continue;
    }
    stack_T.push(T[xx]);
  }

  stack_S = stack_S.join("");
  stack_T = stack_T.join("");

  if (stack_S === stack_T) {
    return true;
  }

  return false;
};

let arr_1 = ["ab#c", "ad#c"];
let arr_2 = ["ab##", "c#d#"];

backspaceCompare(arr_1[0], arr_1[1]);
