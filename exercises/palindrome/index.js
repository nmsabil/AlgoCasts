// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // const reverse = str.split(""); //making array of each character
  // const reversed = []; //initializing empty array
  // for (let i = reverse.length; i >= 0; i--) {
  //   //reversing array
  //   reversed.push(reverse[i]); //pushing reversed characters to array
  // }
  // return reversed.join("") === reverse.join(""); //joining the array to make a string and comparing if its equal to reversed drging
  // const reversed = str.split("").reverse().join("");
  // return str === reversed;
  const arr = str.split("");
  return arr.every((el, i) => el === str[str.length - i - 1]);
}

module.exports = palindrome;
