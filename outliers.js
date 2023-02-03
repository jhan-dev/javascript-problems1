//Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

//The return value should be 1-indexed, not 0-indexed.

//Examples :
//detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
//detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

function detectOutlierValue(str) {
    var numbers = str.split(' ');
    var even = numbers.filter(num => num % 2 === 0);
    var odd = numbers.filter(num => num % 2 === 1);
    if(even.length > odd.length){
      return numbers.indexOf(odd[0]) + 1;
    } 
    else {
      return numbers.indexOf(even[0]) + 1;
    }
  }
  
  function assertEqualArr(actual, expected, test) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
      console.log(`Passed: ${expected} is the correct output.`)
    }
    else {
      console.log(`FAILED: ${test} Expected ${expected} but got ${actual}.`);
    }
  }
  
  //TEST
  var testString1 = '2 4 7 8 10';
  var testActual1 = detectOutlierValue(testString1);
  var testExpected1 = 3;
  assertEqualArr(testActual1, testExpected1, 'Should display outlier from numbers in string.');
  
  var testString2 = '1 10 1 1';
  var testActual2 = detectOutlierValue(testString2);
  var testExpected2 = 2;
  assertEqualArr(testActual2, testExpected2, 'Should display outlier from numbers in string.');