/*For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters. */

var gcdOfStrings = function (str1, str2) {
  // Check if the concatenation of the strings in different orders is the same
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  // Find the minimum length of the two strings
  let minLength = Math.min(str1.length, str2.length);
  // Start with the longest possible divisor and check down to length 1
  for (let l = minLength; l > 0; l--) {
    // Check if the current length divides both strings' lengths
    if (str1.length % l === 0 && str2.length % l === 0) {
      // Return the substring of str1 up to this length as the potential GCD string
      return str1.substring(0, l);
    }
  }
};

console.log(gcdOfStrings("AAAAAA, AA"));
