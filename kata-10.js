let calculateChange = function(total, cash) {
  const cashMunny = {
    twenty: 2000,
    tenner: 1000,
    fiver: 500,
    toonie: 200,
    loonie: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  let totalChange = cash - total;
  let changeGiven = {};

  Object.entries(cashMunny).forEach(value => {
    let counter = 0;
    let unit = value[1];
    if (totalChange >= unit) {
      for (let i = 0; totalChange >= unit; i++) {
        counter++;
        totalChange -= unit;
      }
      changeGiven[`${value[0]}`] = counter;
    }
  });
  return changeGiven;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));