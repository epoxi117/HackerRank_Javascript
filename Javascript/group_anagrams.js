/*
Given an array of strings, group anagrams together.

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

All inputs will be in lowercase.
The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let grouped_anagrams = {};

  let result_array = [];
  let sorted_word = "";

  for (let ii = 0; ii < strs.length; ii++) {
    sorted_word = strs[ii].split("").sort().join("");
    grouped_anagrams[sorted_word] = [];
  }

  for (let kk = 0; kk < strs.length; kk++) {
    sorted_word = strs[kk].split("").sort().join("");
    grouped_anagrams[sorted_word].push(strs[kk]);
  }

  for (const key in grouped_anagrams) {
    result_array.push(grouped_anagrams[key]);
  }

  return result_array;
};

let arr_1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
let arr_2 = [
  "cab",
  "tin",
  "pew",
  "duh",
  "may",
  "ill",
  "buy",
  "bar",
  "max",
  "doc",
];

groupAnagrams(arr_2);
