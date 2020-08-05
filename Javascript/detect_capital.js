/**
 * @param {string} word
 * @return {boolean}
 */

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const compareFunction = (a, b) => {
  return a - b;
};

var detectCapitalUse = function (word) {
  if (word.length <= 0) {
    return false;
  }

  let lowercaseWord = word
    .toLowerCase()
    .split("")
    .map((letter) => {
      return letter.charCodeAt(0);
    })
    .reduce(reducer);
  var isValid = false;
  let isUniform = false;
  let wordValue = 0;

  isUniform = checkUniformity(word);
  if (isUniform) {
    console.log("isUniform");
    return true;
  }

  wordValue = word
    .split("")
    .map((letter) => {
      return letter.charCodeAt(0);
    })
    .reduce(reducer);

  console.log(word);
  console.log(`WordValue ${wordValue} , lowercaseThreshold ${lowercaseWord}`);

  //indicates there is a capital letter
  //need to check if the word's first letter is capital, or if the entire word is capitalized.
  if (wordValue < lowercaseWord) {
    if (word.charCodeAt(0) < 97) {
      isValid = true;
      for (let xx = 1; xx < word.length; xx++) {
        if (word.charCodeAt(xx) < 97) {
          isValid = false;
        }
      }
    }
  }
  console.log(isValid);
  return isValid;
};

var checkUniformity = function (word) {
  let uppercaseWord = false;

  word.charCodeAt(0) < 97 ? (uppercaseWord = true) : uppercaseWord;

  switch (uppercaseWord) {
    case true:
      for (let zz = 1; zz < word.length; zz++) {
        if (word.charCodeAt(zz) >= 97) {
          return false;
        }
      }
      break;
    case false:
      for (let aa = 1; aa < word.length; aa++) {
        if (word.charCodeAt(aa) < 97) {
          return false;
        }
      }
      break;
  }
  return true;
};

detectCapitalUse("");
detectCapitalUse("USA");
detectCapitalUse("FlaG");
detectCapitalUse("Halo");
detectCapitalUse("leetcode");
detectCapitalUse("ZIIQa");
