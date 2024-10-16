// video # 4 
// understnding the nesting loops and triangles patterns

// problem # 1
// A
// B B
// C C C
// D D D D


#include <iostream>
using namespace std;

main() {
  int n = 5;
  for(let i = 0; i <= n; i++){
    for(let j = 0; j < i; j++){
      cout << ('A' + i);
    }
     cout << endl;
  }

}