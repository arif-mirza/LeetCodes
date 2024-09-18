// 1672: Richest Customer Wealth

var maximumWealth = function(accounts) {
  let wealth = 0;

 for(let i =0 ; i <accounts.length; i++){
  let currWealth = accounts[i].reduce((acc, bank) => acc+ bank, 0);
  wealth = Math.max(wealth, currWealth)
 }
 return wealth;
}

// Example:

// Input: accounts = [[1,5,10],[2,5,2],[7,5,3],[1,5,5]]
// Output: 10
// Explanation: 
// The richest customer wealth is 10, obtained by summing all their bank accounts (1+5+10=16; 2+5+2=9; 7+5+3=15; 1+5+5=11).

