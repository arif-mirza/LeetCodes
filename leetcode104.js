// leetcode no.104 > Maximum depth of binary tree

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// var maxDepth = function (root) {
//   if (root === null) return 0;
//   const nodes = [];
//   nodes.push(root);

//   let levels = 0;

//   while (nodes.length > 0) {
//     levels++;

//     const size = nodes.length;

//     for (let i = 0; i < size.length; i++) {
//       const poppinsNodes = nodes.shift();
//       if (poppinsNodes.left !== null) nodes.push(poppinsNodes.left);
//       if (poppinsNodes.right !== null) nodes.push(poppinsNodes.right);
//     }
//   }
//   return levels;
// };

// alternative method

var maxDepth = function (root) {
  if (!root) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  console.log(Math.max(left, right) + 1);
  

  return Math.max(left, right) + 1;
};

