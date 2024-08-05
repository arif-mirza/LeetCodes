// leedcode number 88;


nums1 = [1,2,3,0,0,0];
m = 3;
nums2 = [2,5,6];
n = 3;

var merge = function ( nums1, n, nums2,m){
  let p1 = m-1, p2 = n -1, i = m+n-1;

  while( p2 >= 0){
    if ( p1 >= 0 && nums1[p1] > nums2[p2]){
      nums1[i] = nums2[p2];
      i--;
      p2--;
    }else{
      nums1[i] = nums1[p1];
      i--;
      p1--;
    }
  }
}
console.log(merge);
