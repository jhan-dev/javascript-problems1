//Is one string a rotated version of another?

//For example:
//String 1: 'hello world'
//String 2: 'orldhello w'

//Extra hint: (click the drop down to ROT7 to see hint)

//If you double the string, you'll be to trivially find another string inside it using regular String methods.

//Doubled string: 'hello worldhello world'
//Search w/in it: '       orldhello w    '

function rotateThis(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    str2 = str2 + str2;
    console.log(str2);
    return str2.search(str1) !== false;
  }
  
  function assertEqual(actual, expected, test) {
    if (actual === expected) {
      console.log(`Passed: ${expected} is the correct output.`);
    }
    else {
      console.log(`FAILED: ${test} Expected ${expected} but got ${actual}.`);
    }
  }
  
  //TEST
  var testStr1 = 'hello world';
  var testStr2 = 'orldhello w';
  var testActual = rotateThis(testStr1, testStr2);
  var testExpected = true;
  assertEqual(testActual, testExpected, 'Should return true if string is rotated.');
  