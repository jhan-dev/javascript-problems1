/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function(nums, target) {
    let result = [];
    for (var i = 0; i < nums.length; i++) {
      let num1 = nums[i];
      for (var j = i+1; j < nums.length; j++) {
        let num2 = nums[j];
        if (num1 + num2 === target) {
          result.push(i, j);
          return result;
        }
      }
    }
    return result;
  }
  console.log(twoSum([2,7,11,15], 9));  //  Output: [0,1]  2+7 = 9
  console.log(twoSum([3,2,4], 6));  //  Output: [1,2]  2+4 = 6
  console.log(twoSum([3,3], 6));  //  Output: [0,1]  3+3 = 6
  console.log(twoSum([2,5,5,11], 10));  //  Output:  [1,2]   5+5 = 10