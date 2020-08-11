// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let s1Map = {};
//   let s2Map = {};

//   let s1 = stringA.toLowerCase().replace(/[^\w]/g, "").split("");
//   let s2 = stringB.toLowerCase().replace(/[^\w]/g, "").split("");

//   charMap(s1, s1Map);
//   charMap(s2, s2Map);

//   console.log(s1Map, s2Map);

//   if (Object.keys(s1Map).length !== Object.keys(s2Map).length) {
//     return false;
//   }

//   for (let char in s1Map) {
//     if (s1Map[char] !== s2Map[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function charMap(arr, which) {
//   for (let el of arr) {
//     if (!arr[el]) {
//       which[el] = 1;
//     } else {
//       which[el]++;
//     }
//   }
// }

function anagrams(stringA, stringB) {
  let st1 = cleanString(stringA);
  let st2 = cleanString(stringB);

  if (st1 !== st2) {
    return false;
  } else {
    return true;
  }
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
