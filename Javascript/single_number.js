/**
 * @param {number[]} nums
 * @return {number}
 */

/*Input: [2,2,1]
Output: 1 */

var singleNumber = function(nums) {
  let hashMap = {};

  for (let ii = 0; ii < nums.length; ii++) {
    if (!hashMap[`${nums[ii]}`]) {
      hashMap[`${nums[ii]}`] = 1;
    } else {
      hashMap[`${nums[ii]}`] += 1;
    }
  }
  return findSingle(hashMap);
};

const findSingle = obj_list => {
  for (key in obj_list) {
    let curr_num = parseInt(obj_list[key]);
    if (curr_num == 1) {
      return key;
    }
  }
};

let nums = [2, 2, 1];
let nums_2 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
