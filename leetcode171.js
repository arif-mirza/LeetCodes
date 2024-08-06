// leetcode 171. Excel Sheet Column Number
let columnTitle = "A";

let titleToNumber = function (columnTitle){
  let sum = 0;
  let power = 0;
  let n = columnTitle.length; // 26

  for ( let i = n - 1; i >=0 ; i--){
    let tmp = columnTitle.charCodeAt(i) - 64;
    console.log("tmp => ",tmp); // 1, 26, 676, 17576,...
    sum = sum + Math.pow(26, power++) * tmp;
    console.log("sum =>",sum); // 1, 27, 677, 17577...
  }
  return sum;
}

console.log(titleToNumber(columnTitle)); // 1


// understanding

// tmp means the given numbers A-Z which is 1 - 26
// sum means sum = tmp * (26)power1 