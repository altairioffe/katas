const squareCode = function(message) {
  let characters = message.split(' ').join('');
  let columns = Math.ceil(Math.sqrt(characters.length));
  let arr = [];

  for (let i = 0; i < columns; i++) {
    for (let j = i; j < characters.length; j += columns) {
      arr.push(characters[j]);
    }
    arr.push(' ');
  }
  return arr.join('');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));