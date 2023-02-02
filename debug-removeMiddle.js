/*
Intermediate 2) 

Remove Middle Strings 
Input is a string of odd or even length. If it has 4 or more characters and is even, return a new string with the middle two characters removed.  Else, return 'invalid string'. Characters will never repeat.
*/

function removeMiddle(str) {
    if (str.length % 2 !== 0 || str.length < 4) {  //if str.length NOT even OR str.length is less than 4
      return 'invalid input'
    }
  //angels
    var first = (str.length)/2 - 1;
    var second = str.length/2;  //str.length was incorrectly spelled: 'str.lengh'
  
    var resStr = '';
  
    for  (var i = 0; i < str.length; i ++) {
      if (i !== first && i !== second) {
        console.log('str[i]', str[i], i)
        resStr += str[i];
      }
    }
    //console.log('Current Word:', str);
    //console.log('New Word:', resStr);
    return resStr;
  }
  
  console.log('intermediate 1a: ', removeMiddle('angels')); // ==> 'anls';
  console.log('intermediate 1b:', removeMiddle('hotel')); //==> 'invalid input'
  console.log('intermediate 1c: ', removeMiddle('at')); //  ==> 'invalid input'
  
  /*
  function removeMiddle(str) {
  
    if (!str.length % 2 || str.length < 4) {
      return 'invalid input'
    }
  //angels
    var first = (str.length)/2 - 1;
    var second = str.lengh/2;
  
    var resStr = '';
  
    for  (var i = 0; i < str.length; i ++) {
      if (i !== first && i !== second) {
        console.log('str[i]', str[i], i)
        resStr += str[i];
      }
    }
    return resStr;
  }
  */