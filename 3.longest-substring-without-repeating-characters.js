/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (27.58%)
 * Total Accepted:    796.6K
 * Total Submissions: 2.9M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let visited = {};
  let max_len = 0;
  let cur_len = 0;
  let last_visited = 0;

  for (let i = 0; i < s.length; i++){
    let cur_char = s[i];
    if (visited[cur_char] == undefined || i - cur_len > visited[cur_char]) {
      cur_len++;
    } else {
      cur_len = i - visited[cur_char];
    }

    if (cur_len > max_len) {
      max_len = cur_len;
    }
    visited[cur_char] = i;
    last_visited = i;
  }
  return max_len;
}

var max = function(a,b) {
  if (a > b) return a;
  return b;
}
