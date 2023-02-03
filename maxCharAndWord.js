function findMaxRepeatCountInWord(word) {
    var letters = word.split('');
    var counts = {};
    for (var i = 0; i < letters.length; i++) {
      if (counts[letters[i]] === undefined) {
        counts[letters[i]] = 1;
      }
      else {
        counts[letters[i]]++;
      }
    }
    var max = 0;
    for (var key in counts) {
      if (max < counts[key]) {
        max = counts[key];
      }
    }
    console.log(max);
    return max;
  }
  
  function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountWord = '';
    var words = text.split(' ');
    var counter = 0;
    for (var i = 0; i < words.length; i++) {
      var currentWord = findMaxRepeatCountInWord(words[i]);
      if (currentWord > counter) {
        counter = currentWord;
        maxRepeatCountWord = words[i];
      }
    }
    console.log(maxRepeatCountWord);
    return maxRepeatCountWord;
  }
  
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    }
    else {
      console.log('FAILED');
    }
  }
  
  
  //TEST findMaxRepeatCountInWord
  var test1 = 'bananas';
  var actualTest1 = findMaxRepeatCountInWord(test1);
  var expectedTest1 = 3;
  assertEqual(actualTest1, expectedTest1, 'Should display count of letter.');
  
  
  //TEST findFirstWordWithMostRepeatedChars
  var test2 = 'bananas are excellent';
  var actualTest2 = findFirstWordWithMostRepeatedChars(test2);
  var expectedTest2 = 'bananas';
  assertEqual(actualTest2, expectedTest2, 'Should display word with most repeats.');