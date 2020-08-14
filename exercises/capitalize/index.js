// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(" ");
  let capArr = [];

  for (let i = 0; i < arr.length; i++) {
    let last = arr[i].slice(1);
    let temp = arr[i][0].toUpperCase();
    capArr.push(`${temp}${last}`);
  }
  return capArr.join(" ");
}

module.exports = capitalize;
