// leetcode no. 1496 path crossing

var isPathCrossing = function (path) {
  let set = new Set();

  let x = 0;
  let y = 0;

  for (const dir of path) {
    set.add(`${x}_${y}`);

    if (dir == "N") {
      y += 1;
    } else if (dir == "S") {
      y -= 1;
    } else if (dir == "W") {
      x -= 1;
    } else if (dir == "E") {
      x += 1;
    }
    if (set.has(`${x + 1}_${y}`)) return true;
  }
  return false;
};

console.log(isPathCrossing(["N", "E", "S", "W", "W"])); // true
