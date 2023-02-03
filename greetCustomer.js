var customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3,
    },
    'Carrie': {
      visits: 4
    }
  };
  
  function greetCustomer(firstName) {
    // your code here
    
    var case1 = 'Welcome! Is this your first time?'
    var case2 = `Welcome back, ${firstName}! We're glad you liked us the first time!`
    var case3 = `Welcome back, ${firstName}! So glad to see you again!`
    var visitObj = customerData[firstName];
    
    if (visitObj === undefined) {
        return case1;
    }
    if (visitObj.visits === 1) {
        return case2;
    }
    if (visitObj.visits > 1) {
        return case3;
    }
  }