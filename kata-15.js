function generateBoard(y, x) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      ((y[0] === i && y[1] === j) || (x[0] === i && x[1] === j)) ? row.push(1) : row.push(0);
    }
    board.push(row);
  }
  return board;
}

function queenThreat() {
  if (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) {
    return true;
  } else if ((whiteQueen[0] === blackQueen[0]) || (whiteQueen[1] === blackQueen[1])) {
    return true;
  } else return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));