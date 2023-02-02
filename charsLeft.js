/*
1: strings
Create a function charsLeft where we return the characters leftover after finding a target string.
The target string will always have 1 character.

ex:
charsLeft('hello world', 'l') // => 'llo world';
*/

function charsLeft(str, target) {
    //create a result variable
    let result = '';
    //create targetMet variable
    let targetMet = false;
    //iterate string
    for (var i = 0; i < str.length; i++) {
      let currentChar = str[i];
      //if currentChar = target, push every char til length
      if (currentChar === target) {
        targetMet = true;
        result += currentChar;
      }
      else if (targetMet) {
        result += currentChar;
      }
    }
    //return result
    return result;
  }
  
  console.log('problem 1a:', charsLeft('hello world', 'l'));