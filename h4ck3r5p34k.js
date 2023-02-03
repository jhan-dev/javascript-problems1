/*
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
Examples

hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

Notes

In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.
*/

function hackerSpeak(str) {
    //  create result var
    let result = '';
    for (var i = 0; i < str.length; i++) {
      let char = str[i];
      if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 's') {
        result += char;
      }
      else if (char === 'a') {
        char = '4';
        result += char;
      }
      else if (char === 'e') {
        char = '3';
        result += char;
      }
      else if (char === 'i') {
        char = '1';
        result += char;
      }
      else if (char === 'o') {
        char = '0';
        result += char;
      }
      else if (char === 's') {
        char = '5';
        result += char;
      }
    }
    return result;
  }
  
  console.log(hackerSpeak("javascript is cool"));
  console.log(hackerSpeak("programming is fun"));
  console.log(hackerSpeak("become a coder"));