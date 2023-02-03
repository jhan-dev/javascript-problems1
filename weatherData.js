function findColdHot(arr) {
    // create an empty object
    var result = {};
    var coldestCity = arr[0];
    var hottestCity = arr[0];
    for (var i = 0; i < arr.length; i++) {
      var currentCity = arr[i];
      if (currentCity['temp in C'] < coldestCity['temp in C']) {
        coldestCity = currentCity;
      }
      else if (currentCity['temp in C'] > hottestCity['temp in C']) {
      hottestCity = currentCity;
      }
    }
    result['coldestCity'] = coldestCity.city;
    result['hottestCity'] = hottestCity.city;
    return result;
  }
  // tests
  var weatherData1 = [
    {city: 'Helsinki', 'temp in C': 12},
    {city: 'Berlin', 'temp in C': 10},
    {city: 'Oslo', 'temp in C': 4},
    {city: 'Nairobi', 'temp in C': 39},
    {city: 'Paris', 'temp in C': 6},
    {city: 'Istanbul', 'temp in C': 39},
    {city: 'Rome', 'temp in C': 25}
  ];
  var weatherData2 = [
    {city: 'Tokyo', 'temp in C': 10},
    {city: 'New Delhi', 'temp in C': 32},
    {city: 'San Fransico', 'temp in C': 24},
    {city: 'Las Vegas', 'temp in C': 39},
    {city: 'Sydney', 'temp in C': 15},
    {city: 'New York City', 'temp in C': 8},
    {city: 'London', 'temp in C': 16}
  ];
  
  var actual1 = findColdHot(weatherData1);
  var actual2 = findColdHot(weatherData2);
  var expected1 = {'coldestCity': 'Oslo', 'hottestCity': 'Nairobi'};
  var expected2 = {'coldestCity': 'New York City', 'hottestCity': 'Las Vegas'};
  console.log('Output should be: ', expected1);
  console.log('Your output is: ', actual1);
  console.log('\n');
  console.log('Output should be: ', expected2);
  console.log('Your output is: ', actual2);