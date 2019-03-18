/*
 * @lc app=leetcode id=14 lang=java
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.97%)
 * Total Accepted:    421.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";

        String pfx = strs[0];

        for (int i = 1; i < strs.length; i++) {
            // while the current prefix does not exist in strs[i]
            while (strs[i].indexOf(pfx) != 0) {
                // remove last character from pfx
                pfx = pfx.substring(0, pfx.length() - 1);
                if (pfx.length() == 0) return pfx;
            }
        }
        return pfx;
    }
}
