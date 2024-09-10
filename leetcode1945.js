// 1945. Sum of Digits of String After Convert

Input: s = "iiii", k = 1
function getLucky(s, k) {
  // Step 1: Convert the string into an integer
  let numStr = '';
  for (let char of s) {
      numStr += (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
  }

  // Step 2: Transform the number k times
  let sumDigits = (str) => str.split('').reduce((sum, digit) => sum + parseInt(digit), 0);

  let result = numStr;
  for (let i = 0; i < k; i++) {
      result = sumDigits(result).toString();
  }

  return parseInt(result);
}


// result

console.log(getLucky("iiii", 1)); // return 9
console.log(getLucky("leetcode", 2)); // return 88
console.log(getLucky("wwww", 2)); // return 55

// explanation