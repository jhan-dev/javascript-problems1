/*
Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

To illustrate:

indexShuffle("abcd") ➞ "acbd"
// "ac" (even-indexed) + "bd" (odd-indexed)

Examples

indexShuffle("abcdefg") ➞ "acegbdf"

indexShuffle("holiday") ➞ "hldyoia"

indexShuffle("maybe") ➞ "myeab"

Notes

0 should be treated as an even number.
*/

function indexShuffle(word) {
    //create even var & odd var
    let even = '';
    let odd = '';
    //iterate str
    for (var i = 0; i < word.length; i++) {
      //create char var
      let char = word[i];
      //if indexOf char is even, add to result
      if (word.indexOf(char) % 2 === 0) {
        even += char;
      }
      //if indexOf char is odd, add to result
      else if (word.indexOf(char) % 2 === 1) {
        odd += char;
      }
    }
    //concat even & odd and return
    return even.concat(odd);
  }
  
  console.log(indexShuffle("abcdefg"));
  console.log(indexShuffle("holiday"));
  console.log(indexShuffle("maybe"));