//Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

//Note that this is intentionally very similar to the previous problem.

//Please focus on getting a working solution with the tools you know well.

//Practice the interactive/collaborative interview style that's described in the documentation.

//Example:
//var input = 'a short example';
//var output = flipEveryNChars(input, 5);
//console.log(output); // --> ohs axe trelpma

//Breaking this example down piece by piece:
//'a sho' -> 'ohs a'
//'rt ex' -> 'xe tr'
//'ample' -> 'elpma'

//-> 'ohs axe trelpma'

function flipEveryNChars(string, n) {
    var result = [];
    string = string.split('');
    for (var i = 0; i < string.length; i += n) {
      var flipped = string.slice(i, i + n);
      flipped = flipped.reverse();
      result.push(flipped.join(''));
    }
    return result.join('');
  }
  
  function assertEqual (actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    
    if (actual === expected) {
      console.log(`Passed: ${expected} is correctly displayed.`);
    }
    else {
      console.log(`FAILED: ${testName}. Expected ${expected}, but got ${actual}.`);
    }
  }
  
  //TEST
  var string = 'a short example';
  var testActual = flipEveryNChars(string, 5)
  var testExpected = 'ohs axe trelpma'
  
  assertEqual(testActual, testExpected, 'Should flip every Nth character');