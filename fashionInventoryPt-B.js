function calculateAveragePricePerDesigner(inventory) {
    // Part - B
      var avgObj = {
          designers: []
      };
      for (var i = 0; i < inventory.length; i++) {
          var brandObj = inventory[i];
          var shoeArr = brandObj.shoes;
          var priceObj = {
              name: brandObj.name,
              averagePrice: getAverage(shoeArr)
          };
      avgObj.designers.push(priceObj);
      }
      return avgObj;
  }
  
  // Create helper functions if needed
  function getSum(shoeArr) {
      var sum = 0;
      for (var i = 0; i < shoeArr.length; i++) {
          sum += shoeArr[i].price;
      }
      return sum;
  }
  
  function getAverage(shoeArr) {
      return getSum(shoeArr) / shoeArr.length;
  }
  
  function assertObjEqual(actual, expected, testName) {
      actual = JSON.stringify(actual);
      expected = JSON.stringify(expected);
      if (actual === expected) {
          console.log('passed');
      }
      else {
          console.log(`FAILED ${testName}. Expected ${expected}, but got ${actual}.`);
      }
  }
  
  //TEST SUM & AVG
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
  
  var testActual = calculateAveragePricePerDesigner(inventory);
  var testExpected = {
    'designers': [
      {
        'name': 'Brunello Cucinelli',
        'averagePrice': 1025
      },
      {
        'name': 'Gucci',
        'averagePrice': 850
      }
    ]
  };
  
  console.log(calculateAveragePricePerDesigner(inventory));
  assertObjEqual(testActual, testExpected, 'Should return correct output.');
  
  
  