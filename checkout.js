/*
Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.
Examples

checkout([
  { desc: "potato chips", prc: 2, qty: 2, taxable: false },
  { desc: "soda", prc: 3, qty: 2, taxable: false },
  { desc: "paper plates", prc: 5, qty: 1, taxable: true }
]) ➞ 15.3
*/

function checkout(arrOfItems) {
    //create total var
    let total = 0;
    //create taxRate var
    let taxRate = 0.06;
    //iterate arrOfItems
    for (var i = 0; i < arrOfItems.length; i++) {
      //create currentItem var
      let currentItem = arrOfItems[i];
      //create itemPrice variable
      let itemPrice = currentItem['prc'];
      //create itemTax var
      let itemTax = itemPrice * taxRate;
      //create itemQty var
      let itemQty = currentItem['qty'];
      //create taxable var
      let taxable = currentItem['taxable'];
      //if currentItem is taxable, apply tax to total
      if (taxable) {
        total += (itemPrice * itemQty) + itemTax;
      }
      //else do not apply tax and just apply total
      else {
        total += (itemPrice * itemQty);
      }
    }
    //return total
    return total;
  }
  
  console.log(checkout([
    { desc: "potato chips", prc: 2, qty: 2, taxable: false },
    { desc: "soda", prc: 3, qty: 2, taxable: false },
    { desc: "paper plates", prc: 5, qty: 1, taxable: true }
  ]));