/*
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
[3, 6, 12, 36]
// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.
Examples

factorChain([1, 2, 4, 8, 16, 32]) ➞ true
factorChain([1, 1, 1, 1, 1, 1]) ➞ true
factorChain([2, 4, 6, 7, 12]) ➞ false
factorChain([10, 1]) ➞ false
*/

function factorChain(arr) {  //factor is a number divided evenly with no remainders
    //iterate arr excluding last index
    for (var i = 0; i < arr.length-1; i++) {
      //create num1 & num2 variables
      let num1 = arr[i];
      let num2 = arr[i+1];
      //if num2 remainder of num1 !== 0, return false
      if (num2 % num1 !== 0) {
        return false;
      }
    }
    //return true
    return true;
  }
  
  console.log(factorChain([1, 2, 4, 8, 16, 32]));
  console.log(factorChain([1, 1, 1, 1, 1, 1]));
  console.log(factorChain([2, 4, 6, 7, 12]));
  console.log(factorChain([10, 1]));