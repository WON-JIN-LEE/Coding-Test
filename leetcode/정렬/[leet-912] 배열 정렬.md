# [leet-912] 배열 정렬 [python]

## [문제](https://leetcode.com/problems/sort-an-array/) 

## 의사코드
- merge sort로 정렬한 코드
- 시간복잡도 : O(nlogn)

### py code
- merge sort로 정렬
```py
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def merge(arr1, arr2):
            result = []
            i = j = 0
            while i < len(arr1) and j < len(arr2):
                if arr1[i] < arr2[j]:
                    result.append(arr1[i])
                    i += 1
                else:
                    result.append(arr2[j])
                    j += 1

            while i < len(arr1):
                result.append(arr1[i])
                i += 1

            while j < len(arr2):
                result.append(arr2[j])
                j += 1

            return result

        # 배열 쪼개기
        def mergesort(lst):
            if len(lst) <=1:
                return lst

            mid = len(lst)//2
            L=lst[:mid]
            R=lst[mid:]
            L_sort=mergesort(L)
            R_sort=mergesort(R)
            return merge(L_sort,R_sort)

        return mergesort(nums)
```

### py code 02
- heap min sort로 정렬
```py
  
class BinaryMinHeap:
    def __init__(self):
        # 계산 편의를 위해 0이 아닌 1번째 인덱스부터 사용한다.
        self.items = [None]

    def __len__(self):
        # len() 연산을 가능하게 하는 매직 메서드 덮어쓰기(Override).
        return len(self.items) - 1

    def _percolate_up(self):
        # percolate: 스며들다.
        cur = len(self)
        # left 라면 2*cur, right 라면 2*cur + 1 이므로 parent 는 항상 cur // 2
        parent = cur // 2

        while parent > 0:
            if self.items[cur] < self.items[parent]:
                self.items[cur], self.items[parent] = self.items[parent], self.items[cur]

            cur = parent
            parent = cur // 2

    def _percolate_down(self, cur):
        smallest = cur
        left = 2 * cur
        right = 2 * cur + 1

        if left <= len(self) and self.items[left] < self.items[smallest]:
            smallest = left

        if right <= len(self) and self.items[right] < self.items[smallest]:
            smallest = right

        if smallest != cur:
            self.items[cur], self.items[smallest] = self.items[smallest], self.items[cur]
            self._percolate_down(smallest)

    def insert(self, k):
        self.items.append(k)
        self._percolate_up()

    def extract(self):
        if len(self) < 1:
            return None

        root = self.items[1]
        self.items[1] = self.items[-1]
        self.items.pop()
        self._percolate_down(1)

        return root
    
    
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def sorted_by_heap(lst):
            maxheap = BinaryMinHeap()
            for elem in lst:
                maxheap.insert(elem)

            desc = [maxheap.extract() for _ in range(len(lst))]
            return list(desc)
    
        return sorted_by_heap(nums)
```
