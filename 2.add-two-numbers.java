/*
 * @lc app=leetcode id=2 lang=java
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.54%)
 * Total Accepted:    793K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode ptrS = dummy;
        ListNode ptr1 = l1;
        ListNode ptr2 = l2;
        int carry = 0;
        while (ptr1 != null || ptr2 != null) {
            int val = carry;
            if (ptr1 != null) val += ptr1.val;
            if (ptr2 != null) val += ptr2.val;

            if (val > 9) carry = 1;
            else carry = 0;

            ptrS.next = new ListNode( val % 10 );
            ptrS = ptrS.next;
            if (ptr1 != null) ptr1 = ptr1.next;
            if (ptr2 != null) ptr2 = ptr2.next;
        }

        if (carry > 0) ptrS.next = new ListNode( carry );
        return dummy.next;
    }
}
