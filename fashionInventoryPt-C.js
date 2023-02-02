function listAllBlackShoes(inventory) {
    var flatList = '';
    for (var i = 0; i < inventory.length; i++) {
        var brandObj = inventory[i];
        for (var j = 0; j < brandObj.shoes.length; j++) {
            var shoeObj = brandObj.shoes[j];
            if (isBlackShoe(shoeObj)) {
                flatList += `${brandObj.name}, ${brandObj.shoes[j].name}, ${brandObj.shoes[j].price}`;
                if ((i === inventory.length - 1) && (j === brandObj.shoes.length - 1)) {
                    continue;
                }
                else {
                    flatList += '\n';
                }
            }
        }
    }
  return flatList;
}

//Create helper functions if needed
function isBlackShoe(shoeObj) {
    if (shoeObj.name.indexOf('black') > -1) {
        return true;
    }
    else {
        return false;
    }
}

function assertEqual (actual, expected, testName) {
    if (actual === expected) {
        console.log(`Passed! ${expected} is displaying correctly.`);
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

var testActual = listAllBlackShoes(inventory);
var testExpected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900';
assertEqual(testActual, testExpected, 'Should display all black shoes.');