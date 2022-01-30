# [leet-147] 삽입 정렬 리스트 [python]

## [문제](https://leetcode.com/problems/insertion-sort-list/) 

## 의사코드
1. cur, parent를 더미 노드로 생성한다.
2. cur.next의 val이 head.val보다 작으면 cur을 다음 노드로 이동시킨다.
3. head가 가리키는 노드를 cur의 next에 넣고 cur.next를 head.next에 넣고, head에는 head.next 주소를 넣어서 head 노드 하나를 잘라서 cur에 붙이게 된다.
4. 매번 cur을 연결노드의 앞으로 옮기는 작업을 수행하면 불필요한 작업을 하기 때문에 cur.val이 비교할 head.val보다 클때만 cur에 0의 노드를 넣어 맨 앞으로 이동시킨다.

### py code
```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = parent = ListNode(0)
        while head:
            while cur.next and cur.next.val < head.val:
                cur = cur.next
                
            cur.next, head.next,head = head, cur.next, head.next
            
            # 필요한 경우에만 cur 포인터가 되돌아가도록 처리
            if head and cur.val> head.val:
                cur = parent
                
        return parent.next
```
