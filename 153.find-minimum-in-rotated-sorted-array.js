/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (42.72%)
 * Total Accepted:    272.2K
 * Total Submissions: 637K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 *
 * Find the minimum element.
 *
 * You may assume no duplicate exists in the array.
 *
 * Example 1:
 *
 *
 * Input: [3,4,5,1,2]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

  // EDGE CASES
  if (nums.length === 0) return NaN;
  if (nums.length === 1) return nums[0];
  if (nums[nums.length - 1] < nums[nums.length - 2]) return nums[nums.length - 1];
  for(let i = 0; i < nums.length-1; i++) {
    if(nums[i] > nums[i+1]) return nums[i+1];
  }
  return nums[0];

};
