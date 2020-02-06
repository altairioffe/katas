let camelCase = function(input) {
  let arr = input.split(' ');
  let result = [];
  result.push(arr[0][0] + arr[0].slice(1));
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return result.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));