/* 
Given an array nums, write a function to move
all 0's to the end of it while maintaining the relative order of the non-zero elements.
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
let example_1 = [0, 1, 0, 3, 12];
let example_2 = [0, 0, 0, 1, 2, 3];
let example_3 = [0, 1, 0, 5, 7, 8, 12];
let example_4 = [
  -959151711,
  0,
  623836953,
  209446690,
  0,
  -1950418142,
  1339915067,
  -1950418142,
  1339915067,
];

/**
 * @param {number[]} nums
 * @return {number} return the amount of zeroes in the array
 */
const getZeroCount = (nums) => {
  let zero_count = 0;
  for (let xx = 0; xx < nums.length; xx++) {
    if (nums[xx] === 0) {
      zero_count++;
    }
  }
  return zero_count;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zero_count = getZeroCount(nums);

  let swap_count = nums.length - zero_count;
  console.log(swap_count);

  while (swap_count != 0) {
    for (let ii = nums.length - 1; ii >= 1; ii--) {
      if (nums[ii - 1] == 0) {
        let temp = nums[ii];
        nums[ii] = nums[ii - 1];
        nums[ii - 1] = temp;
      }
    }

    swap_count--;
  }

  console.log(nums);
};

moveZeroes(example_4);
