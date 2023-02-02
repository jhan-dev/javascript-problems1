/*
Create a function that takes a string and censors words over four characters with *.

Examples
censor("The code is fourty") ➞ "The code is ******"
censor("Two plus three is five") ➞ "Two plus ***** is five"
censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"

Notes
    Don't censor words with exactly four characters.
    If all words have four characters or less, return the original string.
    The amount of * is the same as the length of the word.
*/

function censor(str) {	//censor words with more than 4 chars
    //create empty result array
    let result = [];
    //create empty censor variable
    let censor = '';
    //split string to words w/ split
    let words = str.split(' ');
    console.log('Array of Words: ', words);
    words.join('');
    //iterate words & create currentWord variable
    for (var i = 0; i < words.length; i++) {
      let currentWord = words[i];
      console.log('Current Word: ', currentWord)
      //if currentWord.length <= 4, push word to result
      if (currentWord.length <= 4) {
        result.push(currentWord);
      }
      //else censor currentWord & add to result
      else {
        //iterate chars of currentWord
        for (var j = 0; j < currentWord.length; j++) {
          //if censor.length < currentWord.length, convert char
          if (censor.length < currentWord.length) {
            censor += '*';
          }
        }
        //update result with censored word
        result.push(censor);
      }
    }
    //convert result array -> result string
    result = result.join(' ')
    //return result
    return result;
  }
  
  console.log('Test1:',censor("The code is fourty"));
  console.log('\n');
  console.log('Test2:',censor("Two plus three is five"));
  console.log('\n');
  console.log('Test3:',censor("aaaa aaaaa 1234 12345"));