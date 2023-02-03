/*
Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
Examples

indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)
*/

function indexMultiplier(arr) {
    //if array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }
    //create result variable
    let result = 0;
    //iterate array
    for (var i = 0; i < arr.length; i++) {
      //create multiplier variable of index of i
      let currentNum = arr[i];
      //index of i * i += result
      result += currentNum * i;
    }
    //return result
    return result;
  }
  console.log(indexMultiplier([1, 2, 3, 4, 5]));
  console.log(indexMultiplier([-3, 0, 8, -6]));