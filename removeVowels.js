/*
Create a function that takes a string and returns a new string with all vowels removed.
Examples

removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

Notes

"y" is not considered a vowel.
*/

function removeVowels(sentence) {
    //create result var
    let result = '';
    //create arr of Vowels
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    //iterate sentence
    for (var i = 0; i < sentence.length; i++) {
      //create currentChar var
      let currentChar = sentence[i];
      //if vowels are NOT included in char
      if (!vowels.includes(currentChar)) {
        //update result with currentChar
        result += currentChar;
      }
    }
    //return result
    return result;
  }
  
  console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
  console.log(removeVowels("We're gonna build a wall!"));
  console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"));