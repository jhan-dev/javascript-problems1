//***basic 3 ****
//should replace the first letter of str with char

function replaceChar(str, char) {
    var res = char;
    res += str.substring(1);
    return res;
  }
  
  var testStr = 'jellow';
  var testChar = 'm';
  
  console.log('basic3: ', replaceChar(testStr, testChar)); // ==> 'mellow'