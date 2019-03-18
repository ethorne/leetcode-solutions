/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.34%)
 * Total Accepted:    490.2K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort();
  let ret = [];
  for (let i = 0; i < nums.length-2; i++) {
    let fixed = nums[i];
    let lo = i + 1;
    let hi = nums.length-1;
    while (lo < hi) {
      let sum = nums[lo] + nums[hi] + nums[fixed];
      if (sum === 0) {
        ret.push(nums[lo], nums[hi], nums[fixed]);
        lo++;
      }
      else if (sum < 0) lo++;
      else if (sum > 0) hi--;
    }
  }
  return ret;
};

