//***basic 2 ****

//given a string, should return the rest of the string from the where the character is first found

function restOfStr(str, char) {
    var indexOf = char;
    //for loop needed to iterate str to detect char
    for (var i = 0; i < str.length; i++) {
      if (str[i] === indexOf) {
        //slice(start, end) Only uses numbers
        var restOfStr = str.slice(i, str.length);
      }
    }
    //console.log(restOfStr);
    return restOfStr;
  }
  
  var str1 = 'hello';
  var char1 = 'e';
  
  console.log('basic2: ', restOfStr(str1, char1)); //==> 'ello' 
  //'restOfChar' is not defined. 
  
  //adjusted console.log above to use correct function name 'restOfStr' instead of 'restOfChar'.