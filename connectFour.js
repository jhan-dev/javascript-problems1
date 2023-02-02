// please complete the challenge according to the instructions
function checkWinner(arrOfSeven) {
    for (let i = 0; i < arrOfSeven.length; i++) {
      if (arrOfSeven[i] === 'black' && arrOfSeven[i+1] === 'black' && arrOfSeven[i+2] === 'black' && arrOfSeven[i+3] === 'black') {
        return 'Black Wins!';
      }
      else if (arrOfSeven[i] === 'red' && arrOfSeven[i+1] === 'red' && arrOfSeven[i+2] === 'red' && arrOfSeven[i+3] === 'red') {
        return 'Red Wins!';
      }
    }
    return 'Draw!';
  }
  
  let blackWinner = ['black', 'red', 'black', 'black', 'black', 'black', 'red'];
  console.log(checkWinner(blackWinner));
  
  let redWinner = [0,0,0, 'red', 'red', 'red', 'red'];
  console.log(checkWinner(redWinner));
  
  let draw = ['red', 'red', 'red', 'black', 'red', 'black', 0];
  console.log(checkWinner(draw));