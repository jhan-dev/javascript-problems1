/*
Abigail and Benson are playing Rock, Paper, Scissors.

Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

    R stands for Rock
    P stands for Paper
    S stands for Scissors

Examples
rockPaperScissor([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// Benson wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

rockPaperScissor([["R", "R"], ["S", "S"]]) ➞ "Tie"
rockPaperScissor([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"
*/

function rockPaperScissor(arr) {
    //create empty Ws for abi & ben
    let abiWs = 0;
    let benWs = 0;
    let numOfTies = 0;
    //iterate Arr
    for (var i = 0; i < arr.length; i++) {
      //create currentGame var
      let currentGame = arr[i];
      //create abigail & benson
      let abi = currentGame[0];
      let ben = currentGame[1];
      //if abi = R & ben = P, currentGame goes to ben
      if (abi === 'R' && ben === 'P') {
        benWs++;
      }
      //if abi = P & ben = S, currentGame goes to ben
      if (abi === 'P' && ben === 'S') {
        benWs++;
      }
      //if abi = S & ben = R, currentGame goes to ben
      if (abi === 'S' && ben === 'R') {
        benWs++;
      }
      //if ben = R & abi = P, currentGame goes to abi
      if (ben === 'R' && abi === 'P') {
        abiWs++;
      }
      //if ben = P & abi = S, currentGame goes to abi
      if (ben === 'P' && abi === 'S') {
        abiWs++;
      }
      //if ben = S & abi = R, currentGame goes to abi
      if (ben === 'S' && abi === 'R') {
        abiWs++;
      }
      //else abi & ben = R, P, or S, currentGame is Tie
      else if (abi === ben) {
        numOfTies++;
      }
      console.log('Wins for abi:', abiWs, 'Wins for ben:', benWs, 'Num of Ties:', numOfTies);
    }
    //if abi has 2/3 wins, return 'Abigail', if ben has 2/3 wins, return 'Benson'
    if (abiWs > benWs && numOfTies === 0) {
      return 'Abigail';
    }
    else if (abiWs < benWs && numOfTies === 0) {
      return 'Benson';
    }
    //else return 'Tie';
    else {
      return 'Tie';
    }
  }
  
  console.log(rockPaperScissor([["R", "P"], ["R", "S"], ["S", "P"]]));
  console.log(rockPaperScissor([["R", "R"], ["S", "S"]]));
  console.log(rockPaperScissor([["S", "R"], ["R", "S"], ["R", "R"]]));