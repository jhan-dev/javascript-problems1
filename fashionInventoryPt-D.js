// create everything for this problem, functions, assertion function, and test cases
// call your function "generateLaceDetails", and let it take the inventory as its parameter

function getLacedShoes(inventory) {
    var result = [];
    for (var i = 0; i < inventory.length; i++) {
        var brandObj = inventory[i];
        for (var j = 0; j < brandObj.shoes.length; j++) {
            var currentShoe = brandObj.shoes[j];
            if (hasLace(currentShoe.name)) {
                var eachWordArr = currentShoe.name.split(' ');
                var laceObj = {
                    nameWords: eachWordArr,
                    targetWordIndex: getTargetWordIndex(eachWordArr)
                };
                result.push(laceObj);
            }
        }
    }
    return result;
}

function hasLace(shoeObj) {
    return shoeObj.indexOf('lace') > -1;
}

function getTargetWordIndex(eachWordArr) {
    for (var i = 0; i < eachWordArr.length; i++) {
        if (eachWordArr[i].indexOf('lace') > -1) {
            return i;
        }
    }
}

function assertEqualObj (actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
        console.log(`Passed! ${expected} is displayed correctly.`);
    }
    else {
        console.log(`FAILED! ${testName}. Expected ${expected}, but got ${actual}.`);
    }
}

//TEST
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var testActual = getLacedShoes(inventory);
var testExpected = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];

assertEqualObj(testActual, testExpected, 'Should render laced shoes only.');