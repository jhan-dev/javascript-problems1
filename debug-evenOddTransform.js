/*
Intermediate 1) 

Odd Up, Even Down — N Times
Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

Adds two (+2) to each odd integer.
Subtracts two (-2) to each even integer.
Examples

evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]
Notes

*****info break: 
 '!' is called the 'bang operator' and works on booleans and truthy/falsy values.
if you don't know the concept, you can find information on MDN. It's very handy, and properly used makes your code look nifty. Plus, it'll get used often from here.
*/

function evenOddTransform(arr, n) {
    for (var y = 0; y < n; y ++) {  //Loop arr Nth number of times
      console.log('Nth Number of Times:', y);
        for (var i = 0; i < arr.length; i ++) {  //Iterate current Index of Arr
        console.log('Current Index Value:', arr[i]);
              if (arr[i] % 2 !== 1) {  //if current Index of Arr is NOT odd, -2 current Index
                  arr[i] = arr[i] - 2;
              } else {  //else +2 current Index
                  arr[i] = arr[i] + 2;
              }
          }
      }
      return arr;
  }
  
  console.log('evendOddTransform1: ', evenOddTransform([0, 0, 0], 10)); //==> [-20, -20, -20]
  console.log('evenOddTransform2: ', evenOddTransform([1, 2, 3], 1)); //==> [3, 0, 5]
  
  /*
  function evenOddTransform(arr, n) {
      for (var i = 0; i < arr; i ++) {
          for (var y = 0; y < n; y ++) {
              if (!(arr[i] % 2)) {
                  arr[i] - 2;
              } else {
                  arr[i] + 2;
              }
          }
      }
      return arr;
  }
  */