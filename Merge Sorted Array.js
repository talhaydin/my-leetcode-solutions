/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // since m is the number of elements in nums1 array, i=m  and nums1[i] will always be last element of nums1 array, and since j = 0 and it keeps increasing until it reaches second array's max length, so all values will be appended. sort at final.
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
};
