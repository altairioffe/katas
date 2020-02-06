const urlDecode = function (text) {
  let obj = {};
  let objectPairs = [];
  let stringToPairs = text.split('&');

  for (let i = 0; i < stringToPairs.length; i++) {
    objectPairs.push((stringToPairs[i].split('=')));
  }
  for (let i = 0; i < objectPairs.length; i++) {
    for (let j = 0; j < objectPairs[i].length; j++) {
      objectPairs[i][j] = objectPairs[i][j].split('%20').join(' ');
    }
    obj[objectPairs[i][0]] = objectPairs[i][1];
  }
  return obj;
}
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);