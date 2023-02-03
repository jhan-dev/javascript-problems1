/*
Create a function that takes a string and replaces the vowels with another character.
    a = 1
    e = 2
    i = 3
    o = 4
    u = 5
Examples

replaceVowel("karachi") ➞ "k1r1ch3"
replaceVowel("chembur") ➞ "ch2mb5r"
replaceVowel("khandbari") ➞ "kh1ndb1r3"

Notes
The input will always be in lowercase.
*/

function replaceVowel(word) {
	//create empty result str
  let result = '';
  //create vowels obj
  let vowelsObj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  //iterate word
  for (var i = 0; i < word.length; i++) {
    //create currentChar variable
    let currentChar = word[i];
    //iterate through obj
    for (let vowel in vowelsObj) {
      //create vowelReplacement variable
      let replaceWith = vowelsObj[vowel];
      //if currentChar = vowel, convert current char to new value
      if (currentChar === vowel) {
        currentChar = replaceWith;
      }
    }
    //update result with current char
    result += currentChar;
  }
  //return result
  return result;
}

console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));