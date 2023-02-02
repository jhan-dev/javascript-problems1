/*
****basic 6 ****

//add the key and value to the object as a new property. If the key already exists, don't change the value.

//**note: this function has an assertObj function. It works fine. Below that, you will find actual and expected.
*/

var testObj1 = {
    a: 'bee',
    c: 'deli',
    f: 'guard',
  }
  var testObj2 = {
    a: 'bee',
    c: 'deli',
    f: 'guard',
  }
  
  function addProperty(obj, key, val) {
    for (var keys in obj) {// iterate obj to check keys
      console.log('objKey:',[keys]); //-->  Display objKey
      console.log('objProperty:', [obj[keys]])  //-->  Display objProperty
      if (obj[key] === undefined) {  // if obj does NOT have user key..
        obj[key] = val;  // Add new key & val to obj
      } 
    }
    return obj;
  }
  
  //assertObj: this works! Don't debug the assert function (all assert functions will work properly)
  
  function assertObj(actual, expected) {
    var length = Object.keys(actual).length === Object.keys(expected).length;
    if (length === false) {
      return 'failed';
    }
    for (var key in actual) {
      if (actual[key] !== expected[key]) {
        return 'failed'
      }
    }
    return 'passed';
  }
  
  var actual1 = addProperty(testObj1, 'm', 'night');
  var expected1 = { a: 'bee', c: 'deli', f: 'guard', m: 'night'};
  
  var actual2 = addProperty(testObj2, 'f', 'gorilla');
  var expected2 = { a: 'bee', c: 'deli', f: 'guard'};
  
  console.log('basic 6a: ', assertObj(actual1, expected1)); 
  console.log('basic6b:', assertObj(actual2, expected2));
  
  /*
  function addProperty(obj, key, val) {
    if (obj['key'] === undefined) {
      obj.key = val;
    } 
    return obj;
  }
  */