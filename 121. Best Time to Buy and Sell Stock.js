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
  // initialize the maxProfit and minPrice
  let maxProfit = 0; // max profit is initialized zero because we don't know it yet.
  let minPrice = prices[0]; // minPrice is initialized as the first element in array because we will keep updating it if we see smaller number in the rest of the array.

  for (let i = 1; i < prices.length; i++) {
    //loop over the array starting from second element
    const currentPrice = prices[i]; // current price is whatever element we are at right now
    const currentProfit = currentPrice - minPrice; //current profit is our number - min price
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit; //if current profit is bigger than 0 initialized maxprofit, set maxProfit to our current profit
    }
    if (currentPrice < minPrice) {
      minPrice = currentPrice; //if our current number is smaller than minPrice, set minPrice to our number. since this runs last in stack, the next loop will correctly find the maximum amount of profit we can make
    }
  }
  return maxProfit;
};
