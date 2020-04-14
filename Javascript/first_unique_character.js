/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let currentUniqueChar = "";
  let visited_characters = {};

  if (s.length <= 0) {
    return "";
  }

  for (let ii = 0; ii < s.length; ii++) {
    visited_characters[s[ii]] = 0;
  }

  console.log(Object.entries(visited_characters));

  for (let [key, value] of Object.entries(visited_characters)) {
    console.log(`${key}, ${value}`);
  }
};

testString1 = "loveleetcode";

firstUniqChar(testString1);
