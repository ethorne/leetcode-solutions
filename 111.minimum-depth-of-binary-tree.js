/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (35.07%)
 * Total Accepted:    285.1K
 * Total Submissions: 812.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *                    0 1 2  3     4    5 6
 *                    1 2 2  3     3    4 4
 * Given binary tree [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * return its minimum depth = 2.
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;

  let min = Number.MAX_VALUE;
  let s = [];
  let d = [];
  s.push(root);
  d.push(1);

  while (s.length > 0) {
    let i = s.pop();
    let dep = d.pop();
    if (!i.left && !i.right && dep < min) min = dep;

    if (!!i.left) {
      s.push(i.left);
      d.push(dep + 1);
    }
    if (!!i.right) {
      s.push(i.right);
      d.push(dep + 1);
    }
  }
  return min;
};
