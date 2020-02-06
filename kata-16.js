const blocksAway = function (directions) {
  let facing;
  let eastCounter = 0;
  let northCounter = 0;

  if (directions[0] === 'left') {
    facing = 'N';
    northCounter += directions[1]
  } else {
    facing = 'E';
    eastCounter += directions[1]
  }

  for (let i = 2; i < directions.length; i += 2) {
    switch (facing) {
      case 'N':
        if (directions[i] === 'left') {
          facing = 'W';
          eastCounter -= directions[i + 1];
        } else {
          facing = 'E';
          eastCounter += directions[i + 1];
        }
        break;
      case 'E':
        if (directions[i] === 'left') {
          facing = 'N';
          northCounter += directions[i + 1];
        } else {
          facing = 'S';
          northCounter -= directions[i + 1];
        }
        break;
      case 'S':
        if (directions[i] === 'left') {
          facing = 'E';
          eastCounter += directions[i + 1];
        } else {
          facing = 'W';
          eastCounter -= directions[i + 1];
        }
        break;
      case 'W':
        if (directions[i] === 'left') {
          facing = 'S';
          northCounter -= directions[i + 1];
        } else {
          facing = 'N';
          northCounter += directions[i + 1];
        }
        break;
    }
  }
  return [eastCounter, northCounter];
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));