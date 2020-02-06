const makeCase = function(string, rules) {
  let result = [];
  let style;
  let splitByWord = string.split(' ');
  let splitByLetter = string.split('');
  let arr = [];
  const caseArr = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  let rulesArr = [];
  rulesArr.push(rules);
  let ruled = rulesArr.flat();

  const runSwitch = function() {
    switch (style) {
      case 'camel':
        arr.push(splitByWord[0][0] + splitByWord[0].slice(1));
        for (let i = 1; i < splitByWord.length; i++) {
          arr.push(splitByWord[i][0].toUpperCase() + splitByWord[i].slice(1));
        }
        result = arr.join('');
        break;
      case 'pascal':
        for (let i = 0; i < splitByWord.length; i++) {
          arr.push(splitByWord[i][0].toUpperCase() + splitByWord[i].slice(1));
        }
        result = arr.join('');
        break;
      case 'snake':
        result = string.split(' ').join('_');
        break;
      case 'kebab':
        result = string.split(' ').join('-');
        break;
      case 'title':
        for (let i = 0; i < splitByWord.length; i++) {
          arr.push(splitByWord[i][0].toUpperCase() + splitByWord[i].slice(1));
        }
        result = arr.join(' ');
        break;
      case 'vowel':
        splitByLetter.forEach(x => x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' ? arr.push(x.toUpperCase()) : arr.push(x));
        result = arr.join('');
        break;
      case 'consonant':
        splitByLetter.forEach(x => !(x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') ? arr.push(x.toUpperCase()) : arr.push(x));
        result = arr.join('');
        break;
      case 'upper':
        result = string.toUpperCase();
        break;
      case 'lower':
        result = string.toLowerCase();
        break;
      default:
        console.log('WHAT HAVE YOU DONE');
    }
    return result;
  }

  ruled.sort(function(a, b) {
    return caseArr.indexOf(a) - caseArr.indexOf(b);
  });

  for (let i = 0; i < ruled.length; i++) {
    style = ruled[i];
    runSwitch();
    string = result;
  }
  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));