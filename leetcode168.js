// leetcode 168. Excel Sheet Column Title

// let columnNumber = "AB";
// Input:
  columnNumber = 27;
// Output: "A"

var convertToTitle = function (columnNumber){
  let s = "";

  while(columnNumber > 0){
    let remainder = columnNumber % 26; // 1
    if(remainder == 0){
      s = "Z" + s;
      console.log("s1 => " , s);
      
    }else{
      s = String.fromCharCode(65 + remainder - 1) + s;
      console.log("s2 => " , s);
    }
    columnNumber = Math.floor(columnNumber / 26);
    console.log("columnNumber3 => " , columnNumber);
  }
  return s;

}

console.log(convertToTitle(columnNumber)); // A