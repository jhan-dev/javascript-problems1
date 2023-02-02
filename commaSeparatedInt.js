/*You are going to create a function called "solution", which will take in an array of increasing integers, and return them in the format described below.

A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.

The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers.

For example, an input of [12, 13, 15, 16, 17] would return "12, 13, 15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format. Below is an example of your code running, assuming you have solved the problem correctly.*/

function solution(arr) {
    //check arr length for streak
    if (arr.length > 0 && arr.length < 3) {
      return arr.join(',');
    }
    //create result var
    let result = [];
    //create startPoint var
    let startPoint = 0;
    //create midPoint var
    let midPoint = 1;
    //create endPoint var
    let endPoint = 2;
    //iterate over array
    while (startPoint < arr.length) {
      //if endPoint - midPoint = 1 && midPoint - startpoint = 1
      if (arr[endPoint] - arr[midPoint] === 1 && arr[midPoint] - arr[startPoint] === 1) {
        //while endPoint - midPoint = 1
        while (arr[endPoint] - arr[midPoint] === 1) {
          //mid, end = end, end+1
          midPoint = endPoint;
          endPoint = endPoint + 1;
        }
      //save slice from start to end and add to result
      let streak = arr.slice(startPoint, endPoint);
      //create string format of slice and add to result
      result.push(`${streak[0]}-${streak[streak.length-1]}`);
      //start,mid,end = end,end+1,end+2
      startPoint = endPoint;
      midPoint = endPoint+1;
      endPoint = endPoint+2
    }
      //else
      else {
        //there is no streak
        //add value of startPoint to result
        result.push(arr[startPoint]);
        //start, mid, end = mid, end, end+1
        startPoint = midPoint;
        midPoint = endPoint;
        endPoint = endPoint+1
      }
    }
    //return result and join with comma
    return result.join(',');
  }
  
  let result1 = solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
  // returns "-6,-3-1,3-5,7-11,14,15,17-20"
  console.log(result1);
  
  let result2 = solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
  // returns "-4--1,2,3,5,6,12-15,17"
  console.log(result2);