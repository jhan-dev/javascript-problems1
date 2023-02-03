/*
2a) Given an object (obj), a key (key), and a number (n), find all elements at the key equal to the number, and return a new array of those elements. If the number is not present, return an empty array.
*/

function getElementsThatEqualNAtProperty(obj, key, n) {
    //create result variable
    let result = [];
    //iterate obj[key]
    for (var i = 0; i < obj[key].length; i++) {
      //if n === index i, add to result variable
      let currentIndex = obj[key][i];
      if (n === currentIndex) {
        result.push(currentIndex);
      }
    }
    //return result
    return result;
  }
  
  var obj = {
    key1: [10, 1000, 25, 68, 10, 1, 2],
    key2: [1,1,1,1,2,2,2, 5],
    key3: [20, 30, 50, 10],
  };
  
  console.log(getElementsThatEqualNAtProperty(obj, 'key1', 10)); // --> [10, 10]
  console.log(getElementsThatEqualNAtProperty(obj, 'key2', 2));  // --> [2, 2, 2]
  console.log(getElementsThatEqualNAtProperty(obj, 'key3', 5));  // --> []