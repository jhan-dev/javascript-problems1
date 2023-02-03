// GroupBy:  
// Given an array of strings, write a function that returns an object that groups each of the input array's elements by the first character.
 
function groupBy(arr) {   //expected output: obj
    //create resultObj
    let result = {};
    //iterate arr
    for (var i = 0; i < arr.length; i++) {
      //create currentIndex var
      let currentIndex = arr[i];
      //create fChar var
      let fChar = currentIndex[0];
      //if fChar of currentIndex in resultObj is undefined, add to object IN arr
      if (result[fChar] === undefined) {
        result[fChar] = [currentIndex];
      }
      //else push currentIndex into val Arr in Obj
      else {
        result[fChar].push(currentIndex);
      }
    }
    //return result
    return result;
  } 
  
  console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'])); 
  // returns { 'a': ['apple'], 'c': ['cat', 'card'], 'b': ['boat', 'bond'] }
  
  /*
  function groupBy(arr) {
    
  }
  */