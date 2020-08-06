// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  charsList = {};
  max = 0;
  maxChar = "";

  for (let char of str) {
    if (charsList[char]) {
      charsList[char]++;
    } else {
      charsList[char] = 1;
    }
  }

  for (let char in charsList) {
    if (charsList[char] > max) {
      max = charsList[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
