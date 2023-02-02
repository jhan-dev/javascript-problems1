//Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

//Example:

//var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
//console.log(pair); // --> [4, 5]

function findPairForSum(numArr, targetSum) {
    var result = [];
    for (var i = 0; i < numArr.length; i++) {
      var num1 = numArr[i];
      for (var j = i + 1; j < numArr.length; j++) {
        var num2 = numArr[j];
        if (num1 + num2 === targetSum) {
          result.push(num1, num2);
        }
      }
    }
    console.log(result);
    return result;
  }
  
  function assertArrEqual(actual, expected, test) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    
    if (actual === expected) {
      console.log(`Passed: ${expected} is displayed correctly.`)
    }
    else {
      console.log(`FAILED: ${test} Expected ${expected} but got ${actual}.`);
    }
  }
  
  //TEST
  var testNumArr = [3, 34, 4, 12, 5, 2];
  var testTargetSum = 9;
  var testActual = findPairForSum(testNumArr, testTargetSum);
  var testExpected = [4, 5];
  assertArrEqual(testActual, testExpected, 'Should display correct pair of sum.');
  