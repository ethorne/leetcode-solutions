/*
 * @lc app=leetcode id=322 lang=java
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (29.02%)
 * Total Accepted:    164K
 * Total Submissions: 564.2K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 *
 * Example 1:
 *
 *
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 *
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 *
 */
class Solution {
    public int coinChange(int[] coins, int amount) {
        int soln[] = new int[amount + 1];
        soln[0] = 0;
        for (int i = 1; i <= amount; i++) { soln[i] = amount+1; }

        for (int amt = 1; amt <= amount; amt++) {
            for (int coin : coins) {
                // coin is greater than amt -- cannot help
                if (coin > amt) continue;
                // best possible solution, no need to check otherwise
                if (coin == amt) {
                    soln[amt] = 1;
                    break;
                }
                if (soln[amt-coin] == 0) {
                    if(amt % coin != 0) continue; // this is NOT a solution
                    soln[amt] = (int) (amt / coin); // this is a solution
                } else {
                    // previous solution cached and okay to use
                    soln[amt] = Math.min(soln[amt], soln[amt-coin]+1);
                }
            }
        }
        for (int i = 0; i <= amount; i++) {
            System.out.print(soln[i]);
            System.out.print(", ");
        }
        int ret = soln[amount];
        if (ret == amount+1) return -1;
        return ret;
    }
}
