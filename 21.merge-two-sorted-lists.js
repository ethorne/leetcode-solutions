/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (46.55%)
 * Total Accepted:    548K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {

  let p1 = l1;
  let p2 = l2;
  let pr = new ListNode(0);
  let ret = pr;

  while (!!p1 && !!p2) {
    if (p1.val < p2.val) {
      pr.next = new ListNode(p1.val);
      p1 = p1.next;
    } else {
      pr.next = new ListNode(p2.val);
      p2 = p2.next;
    }
    pr = pr.next;
  }

  while (!!p1) {
    pr.next = new ListNode(p1.val);
    pr = pr.next;
    p1 = p1.next;
  }
  while (!!p2) {
    pr.next = new ListNode(p2.val);
    p2 = p2.next;
    pr = pr.next;
  }

  return ret.next;
};
