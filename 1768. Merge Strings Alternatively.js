/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  // below code first determines how many times it's going to run by using math.max on word 1 and word 2. then, by running two, non-connected if statements at the same time, ensures that the letters are added in an alternating way because the statements will always work one after another.

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }

  // eventually the statement which adds the shorter word's letter will stop and the other one which is longer, will continue.

  return result;
};
