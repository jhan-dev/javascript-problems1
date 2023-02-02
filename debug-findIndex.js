/*
****basic 7****

//findIndex
//should return the index of the array where the given key exists as a property
*/

var accessArr = [
    {key1: 'Hello'},
    {key2: 'Thoughts'},
    {weird: 'these clothes'},
    {time: 'get a watch'},
  ];
  
  function findIndex(arr, key){
    var index = 0;
    for (var i = 0; i < arr.length; i ++) {//  i=2, 2 < 4 Yes, 
      console.log('Count:', i);
      console.log('Arr:', arr[i]);
      if (arr[i][key]) {  //adjusted arr[i].key --> arr[i][key] to correct if statement condition
        break;
      }
    }
    index = i;  // moved out of For-loop, if-statement breaks preventing correct i++ to index
    return index;
  }
  
  console.log('basic 7: ', findIndex(accessArr, 'weird')); //==> 2
  
  
  /*
  function findIndex(arr, key){
    var index = 0;
    for (var i = 0; i < arr.length; i ++) {
      if (arr[i].key) {
        break;
      }
      index = i;
    }
    return index;
  }
  */