/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * Given two strings s and t, determine if they are isomorphic.
 
 */

var isIsomorphic = function (s, t) {
  // for loop over s, and compare each letter's index to each other, if there's a discrepancy, return false, else return true (isomorphic)
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
      return false;
    }
  }
  return true;
};
