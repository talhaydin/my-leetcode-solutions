/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k. */

var removeElement = function (nums, val) {
  let count = 0;
  // count will be the number of elements that is not val, which is to be removed.

  // for loop the array, if it's equal to val, do nothing. if it's not equal to val, push them into nums array, while also increasing count afterwards. in the end, non-val elements will be only elements of nums array.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    } else {
      console.log("its equal to val", nums[i]);
    }
  }
  return count;
};
