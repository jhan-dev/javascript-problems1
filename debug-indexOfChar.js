/*
****basic 9****

indexes

Given an array of words and a letter, should return an array of the indexes where the char was found in each word. If the character doesn't exist in the word, should add 'none' to the array 

****notice: uncomment below te index function to test 
*/

var wordArr = [
    'aim',
    'tail',
    'series',
    'kitten',
    'fruit',
    'paper',
  ]
  
  function indexes(arr, char) {
    var indexOfChar = [];
    console.log('Looking for Char:', char);
    for (var i = 0; i < arr.length; i++) {
      var ind = arr[i].indexOf(char);  // moved var ind into For-loop
      console.log('Index of Char:', ind);
      if (ind !== -1) {
        indexOfChar.push(ind)  // indexOfChar was updated with var ind
      } else {
        indexOfChar.push('none');
      }
    }
    return indexOfChar;
  }
  
  actualInd1 = indexes(wordArr, 'a');
  expectedInd1 = [0, 1, 'none', 'none', 'none', 1];
  
  actualInd2 = indexes(wordArr, 'e');
  expectedInd2 = ['none', 'none', 1, 4, 'none', 3];
  
  console.log('basic 9a: ', assertArrEquals(actualInd1, expectedInd1));
  console.log('basic9b: ', assertArrEquals(actualInd2, expectedInd2));
  
  function assertArrEquals(actual, expected) {
    if (actual.length !== expected.length) {
      return 'failed';
    }
    for (var i = 0; i < actual.length; i ++) {
      if (actual[i] !== expected[i]) {
        return 'failed';
      }
    }
    return 'passed';
  }
  
  /*
  function indexes(arr, char) {
    var indexOfChar = [];
    var ind = arr[i].indexOf(char);
    for (var i = 0; i < arr; i ++) {
      if (ind !== -1) {
        indexOfChar.push(arr[i][ind])
      } else {
        indexOfChar.push('none');
      }
    }
    return indexOfChar;
  }
  */