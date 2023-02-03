// write both functions from scratch
// generateSampleView
function generateSampleView(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]['id'] % 2 === 1) {
        result.push(arr[i]['email']);
      }
      else {
        let address = ''
        let addressObj = arr[i]['address'];
        address += `${addressObj['street']}, ${addressObj['suite']}, ${addressObj['city']}, ${addressObj['zipcode']}`;
        result.push(address);
      }
    }
    return result;
  }
  // assertArraysEqual
  function assertArraysEqual(actual, expected, testName) {
    let sameLengths = actual.length === expected.length;
    let sameValues = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        sameValues = false;
      }
    }
    if (sameLengths && sameValues) {
      console.log('passed')
    }
    else {
      console.log(`failed ${testName}`)
    }
  }
  
  var users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ];
  var testExpected = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
  var testActual = generateSampleView(users);
  assertArraysEqual(testActual, testExpected, 'Should display correctly.');