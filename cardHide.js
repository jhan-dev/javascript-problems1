/*
Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
Examples

cardHide("1234123456785678") ➞ "************5678"
cardHide("8754456321113213") ➞ "************3213"
cardHide("35123413355523") ➞ "**********5523"

Examples

    Ensure you return a string.
    The length of the string must remain the same as the input..
*/

function cardHide(creditCard) {
    //create result variable
    let result = '';
    //create last4 variable, w/ slice
    let last4 = creditCard.slice(-4);
    //iterate creditCard
    for (var i = 0; i < creditCard.length; i++) {
      let currentNum = creditCard[i];
      //if currentNum < last4, replace currentNum with *
      if (currentNum < creditCard.length-4) {
        result += '*';
      }
    }
    //return result + last4
    return result + last4;
  }
  console.log(cardHide("1234123456785678"));
  console.log(cardHide("8754456321113213"));
  console.log(cardHide("35123413355523"));