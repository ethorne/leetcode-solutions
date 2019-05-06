/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (59.55%)
 * Total Accepted:    451.4K
 * Total Submissions: 754.2K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Example 1:
 *
 *
 * Input: [2,2,1]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

  let shownup={};

  for (let i in nums) {
    let num = nums[i];
    if (shownup[num] == undefined) shownup[num] = false
    else if (!shownup[num])  shownup[num] = true
  }

  for (let key in shownup) {
    if (!shownup[key]) return key;
  }
};
