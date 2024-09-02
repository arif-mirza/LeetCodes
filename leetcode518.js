// 518. Coin Change II

var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for(let coin of coins){
      for(let i = coin; i <= amount; i++ ){
          dp[i] += dp[i - coin]
      }
  }
  return dp[amount]
  
};