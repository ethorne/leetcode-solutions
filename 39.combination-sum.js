/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (47.58%)
 * Total Accepted:    324.8K
 * Total Submissions: 681.5K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 *
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
 *
 * Note:
 *
 *
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 *
 *
 * Example 1:
 *
 *
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * Example 2:
 *
 *
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 *
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let ret = [];
  helper(candidates, 0, target, 0, [], ret);
  return ret;
};

var helper = function(candidates, start, target, sum, list, ret) {
  if(sum>target) return;

  if (sum===target){
    let tmp = list.slice(0);
    ret.push(tmp);
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    let ci = candidates[i];
    list.push(ci);
    helper(candidates, i, target, sum + ci, list, ret);
    list.slice(list.length - 1, 1);
  }
}
