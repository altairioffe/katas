const multiplicationTable = function(maxValue) {
  for (let i = 1; i <= maxValue; i++) {
    let arr = [];
    for (let j = 1; j <= maxValue; j++) {
      arr.push(i * j);
    }
    console.log(arr.join(' '));
  }
  return '';
};
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
