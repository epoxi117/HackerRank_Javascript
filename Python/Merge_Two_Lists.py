#link: https://leetcode.com/problems/merge-two-sorted-lists/submissions/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        #head keeps track of the beginning of linked list
        tempList = []
        
        while(l1 is not None):
            tempList.append(l1.val)
            l1 = l1.next
        
        while(l2 is not None):
            tempList.append(l2.val)
            l2 = l2.next
        
        tempList.sort()
        
        head = None
        
        for i in range(0,len(tempList)):
            node_to_add = ListNode(tempList[i])
            if(i <=0):
                newList = node_to_add
                head = newList
            else:
                newList.next = node_to_add
                newList = newList.next
            
        #Refer back to beginning of list
        newList = head
        
        # while(newList is not None):
        #     print(newList.val)
        #     newList = newList.next
            
        return head
        