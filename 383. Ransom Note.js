/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.Each letter in magazine can only be used once in ransomNote.
 */

var canConstruct = function (ransomNote, magazine) {
  // first, map over the letters of magazine.
  // then, using those letters and replace method, assign ransomNote by changing it's letters every single time if it exists in ransomNote.
  // .replace() indirectly checks for the letter so there's no need to write a conditional statement or to use .includes() method etc. it just works
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }

  if (!ransomNote) return true;
  else return false;
};
