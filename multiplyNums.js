/*
Given a string of numbers separated by a comma and space, return the product of the numbers.
Examples

multiplyNums("2, 3") ➞ 6
multiplyNums("1, 2, 3, 4") ➞ 24
multiplyNums("54, 75, 453, 0") ➞ 0
multiplyNums("10, -2") ➞ -20
*/

function multiplyNums(nums) {
	//create result variable = 1
  let result = 1;
  //split comma in str
  nums = nums.split(', ');
  console.log(nums);
  //iterate str
  for (var i = 0; i < nums.length; i++) {
    //create num1 & num2 variables
    //convert num1 & num2 with Number()
    let num = Number(nums[i]);
    //multiply num1 & num2 and push product to result
    result *= num;
  }
  //return result
  return result;
}

console.log(multiplyNums("2, 3"));
console.log(multiplyNums("1, 2, 3, 4"));
console.log(multiplyNums("54, 75, 453, 0"));
console.log(multiplyNums("10, -2"));