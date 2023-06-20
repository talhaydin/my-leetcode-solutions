/**
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices == null || prices.length <= 1) return 0; //empty array
  let minBuy = prices[0]; //initialize min price to buy
  let profit = 0; // max profit initialized to zero
  for (let i = 1; i < prices.length; i++) {
    //checks whole array
    minBuy = Math.min(minBuy, prices[i]); //get min price
    console.log(minBuy);
    profit = Math.max(profit, prices[i] - minBuy); //get profit
    console.log("profit" + profit);
  }
  return profit; //return max profit
};
