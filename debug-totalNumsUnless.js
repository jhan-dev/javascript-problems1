/*
total Numbers Unless

Given a list of numbers and a 'rule', calculate all numbers that do not match the 'rule.'

There are three possible rules:
- 'Is negative'
- 'Is positive'
- 'Is greater than 5'
*/

function totalNumsUnless(arr, rule) {
    var total = 0; // 0
    for (var i = 0; i < arr.length; i++) { // 4
      var currElement = arr[i] //  -7
      if (rule === 'Is positive' && currElement > 0) {
       continue;
      }
      if (rule === 'Is Negative' && currElement < 0) {
        continue
      }
      if (rule === 'Is greater than 5' && currElement >= 5) {
        continue;
      }
      total += currElement;
    }
    return total;
  }
  
  var arrOfNums1 = [3, 5, 2, -7, 9, 1, 4, -3, 3, 10];
  var rule1 = 'Is positive';
  var rule2 = 'Is Negative';
  var rule3 = 'Is greater than 5';
  console.log(totalNumsUnless(arrOfNums1, rule1)); // => -10
  console.log(totalNumsUnless(arrOfNums1, rule2)); //=> 37
  console.log(totalNumsUnless(arrOfNums1, rule3)); //=> 3