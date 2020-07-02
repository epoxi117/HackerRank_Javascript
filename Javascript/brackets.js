/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length <= 0) {
    return true;
  }

  let bracketList = {
    "(": "parentheses",
    "[": "square",
    ")": "parentheses",
    "]": "square",
  };

  let stringBrackets = s.split("");

  let stack = [];

  for (let ii = 0; ii < stringBrackets.length; ii++) {
    switch (stringBrackets[ii]) {
      case "(":
        stack.push(stringBrackets[ii]);
        break;
      case "[":
        stack.push(stringBrackets[ii]);
        break;
      case "{":
        stack.push(stringBrackets[ii]);
        break;
      default:
        let current = stack.pop();

        if (bracketList[current] !== bracketList[stringBrackets[ii]]) {
          console.log("false");
          return false;
        }

        break;
    }
  }
  if (stack.length > 0) {
    return false;
  }

  console.log("true");
  return true;
};

let test1 = "()[]{}";
let test2 = "([)]";

isValid(test1);
