# [leet-148] 리스트 정렬 [python]

## [문제](https://leetcode.com/problems/sort-list/) 

## 의사코드
1. 연결 노드를 파이썬 리스트로 변환 후 sort 실행한다.
2. 정렬된 리스트를 연결 리스트로 만들고 head 값 반환한다.


### py code
```py
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        p = head
        lst :List = []
        # 연결 리스트 -> 파이썬 리스트 변환
        while p:
            lst.append(p.val)
            p = p.next
            
        # 정렬
        lst.sort()
        
        # 파이썬 리스트 -> 연결 리스트 변환
        p=head 
        for i in lst:
            p.val = i
            p=p.next
        
        return head
```
