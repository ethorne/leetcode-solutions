/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 *
 * https://leetcode.com/problems/string-to-integer-atoi/description/
 *
 * algorithms
 * Medium (14.57%)
 * Total Accepted:    348.8K
 * Total Submissions: 2.4M
 * Testcase Example:  '"42"'
 *
 * Implement atoi which converts a string to an integer.
 *
 * The function first discards as many whitespace characters as necessary until
 * the first non-whitespace character is found. Then, starting from this
 * character, takes an optional initial plus or minus sign followed by as many
 * numerical digits as possible, and interprets them as a numerical value.
 *
 * The string can contain additional characters after those that form the
 * integral number, which are ignored and have no effect on the behavior of
 * this function.
 *
 * If the first sequence of non-whitespace characters in str is not a valid
 * integral number, or if no such sequence exists because either str is empty
 * or it contains only whitespace characters, no conversion is performed.
 *
 * If no valid conversion could be performed, a zero value is returned.
 *
 * Note:
 *
 *
 * Only the space character ' ' is considered as whitespace character.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical
 * value is out of the range of representable values, INT_MAX (231 − 1) or
 * INT_MIN (−231) is returned.
 *
 *
 * Example 1:
 *
 *
 * Input: "42"
 * Output: 42
 *
 *
 * Example 2:
 *
 *
 * Input: "   -42"
 * Output: -42
 * Explanation: The first non-whitespace character is '-', which is the minus
 * sign.
 * Then take as many numerical digits as possible, which gets 42.
 *
 *
 * Example 3:
 *
 *
 * Input: "4193 with words"
 * Output: 4193
 * Explanation: Conversion stops at digit '3' as the next character is not a
 * numerical digit.
 *
 *
 * Example 4:
 *
 *
 * Input: "words and 987"
 * Output: 0
 * Explanation: The first non-whitespace character is 'w', which is not a
 * numerical
 * digit or a +/- sign. Therefore no valid conversion could be performed.
 *
 * Example 5:
 *
 *
 * Input: "-91283472332"
 * Output: -2147483648
 * Explanation: The number "-91283472332" is out of the range of a 32-bit
 * signed integer.
 * Thefore INT_MIN (−231) is returned.
 *
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let min = -2147483648;
  let max =  2147483647;
  let nums = [];
  let isNegative = null;
  let isFirstDigit = true;
  let encounteredDigits = false;

  let FAIL = 'fail_state';
  let STRIPWS = 'stripws_state';
  let GETNUM = 'getnum_state';
  let FINAL = 'final_state';
  let state = STRIPWS;
  // returns next state or -1 for invalid transition
  let stateTransitions = {
    'stripws_state': function(char) {
      if (/\s/.test(char)) return STRIPWS;
      if (/[+-]/.test(char)) {
        isNegative = /-/.test(char);
        return GETNUM;
      }
      if (/\d/.test(char)) {
        getNum(char)
        return GETNUM;
      }
      return FAIL;
    },
    'getnum_state': function(char) {
      if (/\d/.test(char)) {
        getNum(char);
        return GETNUM;
      }
      return FINAL;
    },
    'final_state': function(char) { return FINAL; }
  };

  let getNum = function(char){
    switch(char){
      case '0': nums.push(0); break;
      case '1': nums.push(1); break;
      case '2': nums.push(2); break;
      case '3': nums.push(3); break;
      case '4': nums.push(4); break;
      case '5': nums.push(5); break;
      case '6': nums.push(6); break;
      case '7': nums.push(7); break;
      case '8': nums.push(8); break;
      case '9': nums.push(9); break;
    }
  }

  for(let i = 0; i < str.length; i++) {
    state = stateTransitions[state](str[i]).toString();;
    if (state === FAIL) return 0;
    if (state === FINAL) break;
  }
  // remove leading 0's
  while(nums.length > 1 && nums[0] === 0) { nums = nums.slice(1); }

  // check for over/under flow
  let limit = max
  if (isNegative) limit = min;
  let trueLimit = limit;
  limit = Math.abs(limit);
  if (nums.length > 10) return trueLimit
  if (nums.length === 10) {
    for (let i=0, n = Math.pow(10, 9); i < nums.length && n >= 1; i++,n/=10){
      let limitDigit = ((limit - (limit % n)) / n) % 10;
      if (nums[i] > limitDigit) return trueLimit;
      if (nums[i] < limitDigit) break;
    }
  }

  let ret = 0;
  for (let i = 0; i < nums.length; i++) {
    ret += nums[i] * (Math.pow(10, nums.length - i - 1));
  }
  if (isNegative){
    ret *= -1;
  }
  return ret;
};
