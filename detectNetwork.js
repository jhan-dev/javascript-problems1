/*
Problem 2
Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, based on the provided cardData, return the appropriate network string (or undefined if there's no match).

// example
var network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express'
*/

function detectNetwork(cardNum, cardData) {
  //create result ''
  let result = undefined;
  //console.log('Card Number:', cardNum);
  //if cardNum typeof = Num, convert to str
  if (typeof cardNum === 'number') {
    cardNum = cardNum.toString();
    //console.log('Num to String:', cardNum);
  }
  //iterate cardData arr
  for (var i = 0; i < cardData.length; i++) {
    //create currentBank var
    let currentBank = cardData[i];
    //create issuer, prefix, length vars
    let cardIssuer = currentBank['issuer/network'];
    let cardPrefix = currentBank['prefixes'];
    let cardLength = currentBank['lengths'];
    //console.log('Issuer Name:', cardIssuer);
    //if cardLength includes cardNum.length && cardPrefix includes cardNum[0]  
    if (cardLength.includes(cardNum.length) && cardPrefix.includes(cardNum[0])) {
      //result = cardIssuer, return result
      result = cardIssuer;
      return result;
    }
    //else if cardNum type of is Num converted toString() === cardNum.length
    else if (Number(cardLength.toString()) === cardNum.length) {
      //result = cardIssuer, return result
      result = cardIssuer;
      return result;
    }
  }
  //return result
  return result;
}

var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];

console.log(detectNetwork('343456789012345', cardData));  //American Express
console.log(detectNetwork(5138201849302932, cardData));  //MasterCard
console.log(detectNetwork('4948600129377', cardData));  //Visa