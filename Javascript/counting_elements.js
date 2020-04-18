/*
Given an integer array arr, count element x such that x + 1 is also in arr.
If there're duplicates in arr, count them seperately.

EXAMPLE 1:
Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.


EXAMPLE 2:
Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

EXAMPLE 3:
Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

EXAMPLE 4:
Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.


CONSTRAINTS: 
1 <= arr.length <= 1000
0 <= arr[i] <= 1000

*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  let count_elements = {};
  let count_value = 0;

  for (let ii = 0; ii < arr.length; ii++) {
    if (!count_elements[arr[ii]]) {
      count_elements[arr[ii]] = 1;
    } else {
      count_elements[arr[ii]] += 1;
    }
  }

  let increment_value = null;
  for (let xx = 0; xx < arr.length; xx++) {
    increment_value = arr[xx] + 1;

    if (count_elements[increment_value]) {
      count_value++;
    }
  }

  return count_value;
};

let arr_1 = [1, 2, 3];
let arr_2 = [1, 1, 3, 3, 5, 5, 7, 7];
let arr_3 = [1, 3, 2, 3, 5, 0];
let arr_4 = [1, 1, 2, 2];

countElements(arr_4);
