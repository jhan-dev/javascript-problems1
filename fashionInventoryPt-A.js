//...console output:
//Brunello Cucinelli, tasselled black low-top lace-up, 1000
//Brunello Cucinelli, tasselled green low-top lace-up, 1100
// and so on...

function renderInventory(inventory) {
    //Part - A
    var flatList = '';
    for (var i = 0; i < inventory.length; i++) {
      var brandObj = inventory[i];
      var brandName = brandObj['name'];
      for (var j = 0; j < brandObj.shoes.length; j++) {
        var brandDesc = brandObj.shoes[j].name;
        var brandPrice = brandObj.shoes[j].price;
        flatList += `${brandName}, ${brandDesc}, ${brandPrice}`;
        if (i === inventory.length - 1 && j === brandObj.shoes.length - 1) {
          flatList += '\n';
          continue;
        }
        else {
          flatList += '\n';
        }
      }
    }
    return flatList;
  }
  
  //Create helper functions if needed
  var currentInventory = [
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
  
  var actualTest = renderInventory(currentInventory);
  
  var expectedTest = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';
  
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log(`Passed: Correctly displaying\n${expected}.`);
    }
    else {
      console.log(`FAILED: ${testName} Expected ${expected} but got ${actual}.`);
    }
  }
  assertEqual(actualTest, expectedTest, 'Should display inventory correctly.');
  console.log('\n');