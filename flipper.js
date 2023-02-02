//Flip every pair of characters in a string.

//Example:
//var input = 'check out how interesting this problem is, it\'s insanely interesting!';
//var output = flipPairs(input);
//console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
//WNINFPEVCG

function flipPairs(string) {
    var result = '';
    var string = string.split('');
    for (var i = 0; i < string.length; i+= 2) {
      var paired = string[i];
      string[i] = string[i+1];
      string[i+1] = paired;
      result = string.join('');
    }
    return result;
  }
  
  function assertEqual (actual, expected, testName) {
    if (actual === expected) {
      console.log(`Passed! ${expected} is correctly displayed.`);
    }
    else {
      console.log(`FAILED! ${testName}. Expected ${expected}, but got ${actual}.`);
    }
  }
  
  //TEST
  var string = 'check out how interesting this problem is, it\'s insanely interesting!';
  var testActual = flipPairs(string)
  var testExpected = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!'
  
  assertEqual(testActual, testExpected, 'Should flip the string in every pair.');