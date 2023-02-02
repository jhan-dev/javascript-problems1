/*
Create a function that takes a string and returns the number (count) of vowels contained within it.
Examples

countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4

Notes

    a, e, i, o, u are considered vowels (not y).
    All test cases are one word and only contain letters.
*/

function countVowels(str) {
	let vowels = ['a', 'e', 'i' ,'o' ,'u'];
  let result = 0;
  str = str.toLowerCase();
  for (let char of str) {
    if (vowels.includes(char)) {
      result++;
    }
  }
  return result;
}

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));
console.log(countVowels("Prediction"));