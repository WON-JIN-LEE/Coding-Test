# [leet-912] 배열 정렬 [python]

## [문제](https://leetcode.com/problems/sort-an-array/) 

## 의사코드
- merge sort로 정렬한 코드
- 시간복잡도 : O(nlogn)

### py code
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
