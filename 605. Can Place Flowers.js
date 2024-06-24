/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

var canPlaceFlowers = function (flowerbed, n) {
  // Loop through each position in the flowerbed
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the left side is empty or if it's the first position
    const left = i === 0 || flowerbed[i - 1] === 0;
    // Check if the right side is empty or if it's the last position
    const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

    // If both left and right are empty and the current position is also empty
    if (left && right && flowerbed[i] === 0) {
      // Place a flower at the current position
      flowerbed[i] = 1;
      // Decrease the number of flowers we need to place
      n--;
    }
  }
  // Return true if we have placed all required flowers, false otherwise
  return n <= 0;
};
