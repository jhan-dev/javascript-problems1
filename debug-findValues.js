/*
****basic 8****

findValues

given an object and an array of all the object keys, return a string of every other value concatenated togther 
*/

var objOfStr = {
    key1: 'My ',
    key2: 'You ',
    key3: 'dog ',
    key4: 'are ',
    key5: 'loves ',
    key6: 'a ',
    key7: 'bones.',
    key8: 'wonderful person.',
  }
  
  var arrOfKeys1 = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8'];
  var arrOfKeys2 = ['key2', 'key1', 'key4', 'key3', 'key6', 'key5', 'key8', 'key7'];
  
  function findValues(obj, arr) {
    var str = '';
    for (var i = 0; i < arr.length; i ++) {
      if (i % 2 === 0) {  //conditional to check i index is even
        str += obj[arr[i]];  //str += into str to return every other value
      }
    }
    return str;
  }
  
  console.log('basic 8a: ', findValues(objOfStr, arrOfKeys1)); //==> 'My dog loves bones.'
  console.log('basic 8b: ', findValues(objOfStr, arrOfKeys2)); //==> 'You are a wonderful person.'
  console.log('basic 8: ', )
  
  /*
  function findValues(obj, arr) {
    var str = '';
    for (var i = 0; i < arr.length; i ++) {
      str + obj[arr[i]];
    }
    return str;
  }
  */