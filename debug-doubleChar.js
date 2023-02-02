/****basic 5 ****
**note: this one has not been uncommented for you

Create a function that takes a string and returns a string in which each character is repeated once.

Examples
doubleChar("String") ➞ "SSttrriinngg"
doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
doubleChar("1234!_ ") ➞ "11223344!!__  "

Notes
All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
*/

function doubleChar(str) {
    //console.log('Input String: ', str);
    var answer = '';
    //console.log('Answer: ', answer);
    for(var i = 0; i < str.length; i ++){
      //console.log('Current Char: ', str[i]);
      //answer.push(str[i]);
      //answer.push(str[i]);
      answer += str[i]+str[i];
      //  answer.push(str[i]) is not working because answer is string, not array
    }
    return answer;
  }
  
  console.log(doubleChar("Hello World!")); //==> HHeelllloo  WWoorrlldd!!"
  
  /*function doubleChar(str) {
    var answer = '';
    for(var i = 0; i < str.length; i ++){
      answer.push(str[i]);
      answer.push(str[i]);
    }
    return answer;
  }
  
  // console.log(doubleChar("Hello World!")); //==> HHeelllloo  WWoorrlldd!!"
  */