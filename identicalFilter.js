/*
Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
Examples

identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
➞ ["aaaaaa", "d", "eeee"]

identicalFilter(["88", "999", "22", "545", "133"]) 
➞ ["88", "999", "22"]

identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
➞ []

Notes

    A string with a single character is trivially counted as a string with repeating identical characters.
    If there are no strings with repeating identical characters, return an empty array (see example #3).
*/

function identicalFilter(arr) {
    //create result variable
    let result = [];
    //create isRepeating variable
    let isRepeating = false;
    //iterate arr
    for (var i = 0; i < arr.length; i++) {
      //create currentWord variable
      let currentWord = arr[i];
      //iterate currentWord
      for (var j = 0; j < currentWord.length; j++) {
        //create fChar & currentChar variables
        let fChar = currentWord[0];
        let currentChar = currentWord[j];
        //if currentChar === fChar, isRepeating = true
        if (currentChar === fChar) {
          isRepeating = true;
        }
        //else isRepeating = false, break
        else {
          isRepeating = false;
          break;
        }
      }
      //if currentWord is repeating char, push currentWord to result
      if (isRepeating) {
        result.push(currentWord);
      }
    }
    //return result
    return result;
  }
  console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
  console.log(identicalFilter(["88", "999", "22", "545", "133"]));
  console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));