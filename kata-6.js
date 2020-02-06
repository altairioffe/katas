let repeatNumbers = function(data) {
  let newArr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      newArr.push(data[i][0]);
    }
    if (data.length > 1 && i < data.length - 1) {
      newArr.push(', ');
    }
  };
  return newArr.join('');
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

