//You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

//e.g. transposeTwoStrings(['Hello','World']);

//should return:
//H W  
//e o  
//l r  
//l l  
//o d

function transposeTwoStrings(strArr) {
    var result = '';
    var str1 = strArr[0];
    var str2 = strArr[1];
    for (var i = 0; i < strArr[0].length; i++) {
      result += `${str1.charAt(i)} ${str2.charAt(i)}\n`;
    }
    console.log(result);
    return result;
  }
  
  function assertEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
  
    if (actual === expected) {
      console.log(`Passed: ${expected} displayed correctly.`)
    }
    else {
      console.log(`FAILED: ${testName} Expected ${expected}, but got ${actual}.`)
    }
  }
  
  //TEST
  var testArr = ['Hello', 'World'];
  var testActual = transposeTwoStrings(testArr);
  var testExpected = 'H W\ne o\nl r\nl l\no d\n';
  assertEqual(testActual, testExpected, 'Both strings should display vertically')
  