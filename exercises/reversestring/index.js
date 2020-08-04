// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

function reverse(str) {
  const arr = str.split("");
  let reverseArr = [];
  for (let i = arr.length; i > 0; i++) {
    reverseArr.push(arr[i]);
    debugger;
  }
  return reverseArr.join();
}

reverse("apple");
module.exports = reverse;

// function reverse(str) {
//   str.split("").reduce((rev, char) => char + rev, "");
// }
