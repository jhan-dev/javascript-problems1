/*
An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
Examples

isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
Index 3 has an even number 8.
*/

function isSpecialArray(arr) {
    //iterate arr
    for (var i = 0; i < arr.length; i++) {
      let currentIndex = arr[i];
      //if currentIndex divisible NOT = to i divisible 
      if (currentIndex % 2 !== i % 2) {
        //return false
        return false;
      }
    }
    //return true
    return true;
  }
  //                 index:   0  1  2  3  4  5  6  7
  console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
  console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));
  console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));