/*
 * @lc app=leetcode id=6 lang=java
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (30.60%)
 * Total Accepted:    289.2K
 * Total Submissions: 941.3K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 *
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 */

class Solution {
    public String convert(String s, int numRows) {
        // initialize
        int size = Math.min(numRows, s.length());
        if (size == 1) return s;

        StringBuilder soln[] = new StringBuilder[size];
        for (int i = 0; i<size; i++){ soln[i] = new StringBuilder(""); }

        int row = 0;
        int dir = 1;
        // i counts where we are in the whole string
        for (char c : s.toCharArray()) {

            soln[row].append(c);
            if (row == size - 1) dir = -1;
            else if (row == 0) dir = 1;
            row += dir;

        }

        // concatenate soln into one string
        StringBuilder ret = new StringBuilder("");
        for (StringBuilder sb : soln) { ret.append(sb.toString()); }
        return ret.toString();
    }
}
