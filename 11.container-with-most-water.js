/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (43.58%)
 * Total Accepted:    344.5K
 * Total Submissions: 790.4K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 *
 *
 *
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 *
 *
 *
 * Example:
 *
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(lines) {
  let max = 0;
  for (let left = 0; left < lines.length-1; left++) {
    for (let right = left + 1; right < lines.length; right++) {
      let height = Math.min( lines[left], lines[right] );
      let width = right - left;
      let area = height * width;
      if (area > max) max = area;
    }
  }
  return max;
};
