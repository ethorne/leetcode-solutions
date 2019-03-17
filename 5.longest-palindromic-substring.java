/*
 * @lc app=leetcode id=5 lang=java
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.52%)
 * Total Accepted:    477.3K
 * Total Submissions: 1.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 *
 */
class Solution {
    public String longestPalindrome(String s) {
        if (s.length() == 0) return "";
        if (s.length() == 1) return s;

        boolean soln[][]= new boolean[s.length()][s.length()];
        int start = 0;
        int max = 1;

        // initialize soln array with base cases
        for (int i = 0; i < s.length(); i++) {
            // all strings of length 1 are palindromes
            soln[i][i] = true;

            // check strings of length 2 for palindromes
            if (i+1 < s.length() && s.charAt(i) == s.charAt(i + 1)) {
                soln[i][i+1] = true;
                start = i;
                max = 2;
            }
        }

        for (int len = 3; len <= s.length(); len++) {
            for (int lo = 0; lo + len <= s.length(); lo++) {
                int hi = lo + len - 1;
                soln[lo][hi] = soln[lo+1][hi-1] && s.charAt(lo) == s.charAt(hi);
                if (soln[lo][hi] && hi-lo+1 >= max) {
                    max = hi-lo+1;
                    start = lo;
                }
            }
        }

        return s.substring(start, start + max);
    }
}
