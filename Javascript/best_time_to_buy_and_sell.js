/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
(i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let current_stock = null;
  let max_profit = 0;

  for (let ii = 0; ii < prices.length; ii++) {
    if (ii + 1 > prices.length - 1) {
      break;
    } else {
      if (prices[ii + 1] > prices[ii]) {
        max_profit += prices[ii + 1] - prices[ii];
      }
    }
  }
  console.log(max_profit);
};

let ex_1 = [7, 1, 5, 3, 6, 4];
let ex_2 = [1, 2, 3, 4, 5];
let ex_3 = [7, 6, 4, 3, 1];
let ex_4 = [6, 1, 3, 2, 4, 7];
let ex_5 = [2, 1, 2, 0, 1];

maxProfit(ex_3);
