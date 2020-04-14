/*
Given an integer array nums, 
find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

****If you have figured out the O(n) solution, 
    try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//sorts numerically
function sortHelper(a, b) {
  return a - b;
}

const subArray_values = (subArray_list) => {
  let subArray_results = [];
  let current_subArray_result = 0;

  for (let zz = 0; zz < subArray_list.length; zz++) {
    current_subArray_result = subArray_list[zz].reduce(reducer);

    subArray_results.push(current_subArray_result);
  }

  return subArray_results;
};

var maxSubArray_BruteForce = function (nums) {
  let array_len = nums.length;
  let subArray_len = 1;
  let maxNum = null;
  let subArray_total = "";
  let reducer = (accumulator, current_value) => accumulator + current_value;

  //decrement by 1 for each subArray_len increment
  let subArray_iterations = nums.length;

  while (subArray_len <= array_len) {
    for (let ii = 0; ii < subArray_iterations; ii++) {
      subArray_total = nums.slice(ii, subArray_len + ii).reduce(reducer);

      if (maxNum == null) {
        maxNum = subArray_total;
      } else if (subArray_total > maxNum) {
        maxNum = subArray_total;
      }
    }

    subArray_iterations--;
    subArray_len++;
  }
  return maxNum;
};

//Using Kadane's algorithm
var maxSubArray = function (nums) {
  let current_max = (global_max = nums[0]);

  for (let ii = 1; ii < nums.length; ii++) {
    current_max = Math.max(nums[ii], current_max + nums[ii]);

    if (current_max > global_max) {
      global_max = current_max;
    }
  }

  return global_max;
};

let arr_1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let arr_2 = [1, 2, 3, 2, 4];
let arr_3 = [2];
let arr_4 = [-2, 1];
let arr_5 = [-2, -1];
let arr_6 = [1, 2];
let arr_7 = [1, 2, -1, -2, 2, 1, -2, 1];
let arr_8 = [1, 2, 3, 4, 5, 6, 7];
let arr_9 = [-1, 0];

maxSubArray(arr_8);
