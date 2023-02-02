// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
    // split sentence into words
    // iterate words and collect the palindromes
    // sort the list of palindromes by word length
    // return the largest item in the sorted list
    
    var words = sentence.split(' ');
    var palindromes = [];
    for (var i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            palindromes.push(words[i]);
        }
    }
    var sortedPalindromes = palindromes.sort(sortAscendingByLength);
    var longestPalindrome = sortedPalindromes.pop();
    return longestPalindrome;
  }
  
  function reverseString(string) {
      var splitString = string.split('');
      var reversedSplitString = splitString.reverse();
      var reversedString = reversedSplitString.join('');
      return reversedString;
  }
  
  function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    word = word.toLowerCase();
    return word === reverseString(word);
  }
  
  function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
      return 1;
    } 
    else if (a.length < b.length) {
      return -1;
    }
    return 0;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
  
  function assertArraysEqual(actual, expected, testName) {
    var areEqualLength = actual.length === expected.length;
    var areEqualItems = true;
    for (var i = 0; i < expected.length; i++) {
      if (expected[i] !== actual[i]) {
        areEqualItems = false;
        break;
      }
    }
    if (areEqualLength && areEqualItems) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
  
  // TESTS FOR SORT ASCENDING BY LENGTH
  var unsortedStringsArray = ['little', 'small', 'a', 'base', 'trapeze'];
  var actualSorted = unsortedStringsArray.sort(sortAscendingByLength);
  var expectedSorted = ['a', 'base', 'small', 'little', 'trapeze'];
  
  assertArraysEqual(actualSorted, expectedSorted, 'should sort an array of strings into ascending order by length');
  
  // TESTS FOR REVERSE STRING
  var inputString = 'medicine';
  var actualReversed = reverseString(inputString);
  var expectedReverse = 'enicidem';
  
  assertEqual(actualReversed, expectedReverse, 'should return an input string reversed');
  
  // TESTS FOR IS PALINDROME
  var palindrome = 'racecar';
  var actualResult = isPalindrome(palindrome);
  var expectedResult = true;
  
  assertEqual(actualResult, expectedResult, 'should return true for a valid palindrome');
  
  // TESTS FOR FIND LONGEST PALINDROME
  var sentence = 'alula ana hannah madam minim';
  var actualLongest = findLongestPalindrome(sentence);
  var expectedLongest = 'hannah';
  
  assertEqual(actualLongest, expectedLongest, 'should return the longest palindrome in an input sentence');