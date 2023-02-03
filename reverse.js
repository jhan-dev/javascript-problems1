/*
The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
Examples

reverse("Hello World") ➞ "DLROw OLLEh"
reverse("ReVeRsE") ➞ "eSrEvEr"
reverse("Radar") ➞ "RADAr"

Notes
There will be no punctuation in any of the test cases.
*/

function reverse(str) { 
    //create result var
    let result = [];
    //convert string into arr w/ split
    str = str.split('');
    //iterate arr
    for (var i = 0; i < str.length; i++) {
      let currentChar = str[i];
      //if currentChar is UpperCase, make LowerCase
      if (currentChar === currentChar.toUpperCase()) {
        currentChar = currentChar.toLowerCase();
        result.push(currentChar);
      }
      //else if currentChar is LowerCase, make UpperCase
      else if (currentChar === currentChar.toLowerCase()) {
        currentChar = currentChar.toUpperCase();
        result.push(currentChar);
      }
    }
    //reverse result, convert to str and return
    return result.reverse().join('');
  } 
  
  console.log(reverse("Hello World"));
  console.log(reverse("ReVeRsE"));
  console.log(reverse("Radar"));