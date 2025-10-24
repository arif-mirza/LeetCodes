// video # 4 
// understnding the nesting loops and triangles patterns

// problem # 1
// A
// B B
// C C C
// D D D D


// #include <iostream>
// using namespace std;

// main() {
//   int n = 5;
//   for(let i = 0; i <= n; i++){
//     for(let j = 0; j < i; j++){
//       cout << ('A' + i);
//     }
//      cout << endl;
//   }

// }

// floyed triangle for number version
// #include <iostream>
// using namespace std;

// main(){
//   int n = 5;
//   let num = 1;
//   for(let i = 0; i < n; i++){
//     for(let j = i + 1; j > 0; j--){
//       cout << j << " "
//     }
//     cout << endl;
//   }
//   return 0;
// }

// floyed triangle for character version

// #include <iostream>
// using namespace std;

// main(){
//   int n = 5;
//   char ch = 'A';
//   for(int i = 0; i < n; i++){
//     for(int j = i + 1; j > 0; j--){
//       cout << ch << " ";
//       ch++;
//     }
//     cout << endl;
//   }
//   return 0;
// }

// inverted triangle pattern

// #include <iostream>
// using namespace std;

// main(){
//  int n = 4;
// int num = 1;
// for(int i = 0; i < n; i++){
//   // spaces

//   for(int j = 0; j < i; j++){
//     cout << " ";
//   }

//   // nums
//   for(int k = 0; k < n-i; k++){
//     cout << (i + 1);
//   }
//   cout << endl;
// }
// }


// #include <iostream>
// using namespace std;

// main(){
//   int tryNum = 0;
//   char C
//   // question
//   do
//   {
//   cout << "please enter a character between a-z";
//   cin >> c;

//   if(c == 'z'){
//     cout << "congratualtion yout guess is correct"
//     tryNum = 6;
//   }else{
//     tryNum++;
//   }
//   }while(tryNum <= 5)
// }

// // sample program table
// #include <iostream>
// using namespace
// main (
  
//    for(counter = 0; counter <=10; counter++){
//     cout << "2"<<"*" << counter << "=" << 2*counter<<\n;
//    }
// )

// video 8

// concepts 
// 1- min/max 2- pass by referece 3- liner search 4- reverse an array

#include <iostream>
#include <limits.h>
using namespace
main()
{
  // min/max
  // int smallest = INT_MAX;
  // int largest = INT_MIN;
  // int num[] = { 2,4,6,12,-43,70}
  // int size=6;

  // for(i=0;i<size;i++){
  //   smallest = min(num[i],smallest);
  //   largest = max(num[i],largest);
  // }
  // cout << "Smallest: " << smallest << endl;
  // cout << "Largest: " << largest << endl;
  // cout<<"index if smallest" << indexof(smallest)<<endl;
  // cout<<"index if largest" << indexof(largest)<<endl;
  // return 0;

  // linear search
  int linearSearch(int arr[], int size, int target){
    for(int i=0; i<size; i++){
      if(arr[i] == target){
        return i;
      }
    }
    return -1;
  }
  int arr[] = { 2,4,6,12,-43,70};
  int size = 7;
  int target = 12;
  cout << linearSearch(arr, size, target) << endl;
  return 0;


}