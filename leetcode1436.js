// 1436. Destination City

var destCity = function (paths) {
  let source = new Set();

  for (let path of paths) {
    source.add(path[0]);
  }

  for (let path of paths) {
    if (!source.has(path[1])) return path[1];
  }

  return "";
};

// Test cases
Input: paths = [
  ["B", "C"],
  ["D", "B"],
  ["C", "A"],
];
Output: "A";
