//***basic 4 ****
//should combine the second part of str1 from index on to the beginning of str2 up to and including the index


function combineStr(str1, str2, index) {
    var beginning = str1.slice(index);
    //console.log(index); //--> basic4a: 4  / basic4b: 3
    //console.log('Start: ', beginning);  //--> Start:  'med'  /  Start:  'geogr'
    var end = str2.slice(0, index+1);  //Slice() start is inclusive, end is exclusive
    //console.log('End: ', end);  //-->  End:  'icine'  /  End:  'aphy'
    return beginning + end;    
  }
  
  console.log('basic4a: ', combineStr('telemed', 'icinemedia', 4)); //==> 'medicine'
  console.log('basic4b: ', combineStr('sisgeogr', 'aphyhobb', 3 )); //=> 'geography'
  
  /*
  function combineStr(str1, str2, index) {
    var beginning = str1.slice(index);
    var end = str2.slice(1, index);
    return beginning + end;    
  }
                                       01234xx    01234
  console.log('basic4a: ', combineStr('telemed', 'icinemedia', 4)); //==> 'medicine'
  console.log('basic4b: ', combineStr('sisgeogr', 'aphyhobb', 3 )); //=> 'geography'
  */