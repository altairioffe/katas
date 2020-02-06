
let prompt = require("prompt-sync")();

const secretNumber = Math.floor(Math.random() * 100)

function evaluate(input) {
  if (input > secretNumber) {
    return 'Too High'
  } else if (input < secretNumber) {
    return 'Too Low'
  } else if (input === secretNumber) {
    return 'You Guessed It !'
  }
}

console.log(evaluate(32))

