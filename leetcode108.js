let nums = [-10, -3, 0, 5, 9];

var shortedArrayTOBST = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  function buildBST(nums, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode([mid]);
    node.left = buildBST(nums, start, mid - 1);
    node.right = buildBST(nums, mid + 1, end);
    return node;
  }

  return buildBST(nums, start, end);
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
