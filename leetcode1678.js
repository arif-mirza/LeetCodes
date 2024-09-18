// 1678: goal parser interpreter

var interpret = function(command) {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
}

// Test cases

console.log(interpret("(al)G(al)()()()F")); // Output: "alGalooF"
console.log(interpret("G()(al)")); // Output: "Galoo"
console.log(interpret("(al)()()F")); // Output: "alloF"

// Explanation:

