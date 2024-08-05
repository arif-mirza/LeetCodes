let strs = ["flower", "flow", "flight"];

let longestCommonPrefix = function (strs) {
  strs.sort();
  let str1 = strs[0];
  let str2 = strs[strs.length - 1];

  let index = 0;

  while (index < str1.length) {
    if (str1.charAt(index) === str2.charAt(index)) {
      index++;
    } else {
      break;
    }
  }
  return index == 0 ? "" : str1.substring(0, index);
};

console.log(longestCommonPrefix(strs));
