# [leet-704] 이진 탐색 [python]

## [문제](https://leetcode.com/problems/binary-search/) 

## 의사코드
1. mid의 값을 구하고, mid인덱스에 있는 요소가 target보다 작을 때와 클때를 나누어 재귀적으로 다시 이진 탐색을 진행한다.
2. target와 같다면 해당 index를 반환한다.

### py code
```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def binary_search(start, end):
            if start > end:
                return -1

            mid = (start + end) // 2

            if nums[mid] < target:
                return binary_search(mid + 1, end)
            elif nums[mid] > target:
                return binary_search(start, mid - 1)
            else:
                return mid

        return binary_search(0, len(nums) - 1)
```

