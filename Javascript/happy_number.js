/* 
Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, 
replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let num_array = String(n).split("");
  let total = 0;
  let count = 0;

  //set loop limit to 100 before failing
  while (count < 100) {
    total = 0;
    for (let ii = 0; ii < num_array.length; ii++) {
      total += Math.pow(parseInt(num_array[ii]), 2);
    }
    console.log(total);
    console.log(num_array);
    num_array = String(total).split("");
    if (total <= 1) {
      return true;
    }
    count++;
  }
  return false;
};

let num_1 = 19;
let num_2 = 243;
let num_3 = 2; //fails

isHappy(243);
