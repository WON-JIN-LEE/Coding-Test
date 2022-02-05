# [leet-33] 회전 정렬된 배열 검색 [python]

## [문제](https://leetcode.com/problems/search-in-rotated-sorted-array/) 

## 의사코드
1. search함수 안에서 가장 작은 값을 찾아 pivot으로 지정한다.
2. pivot을 기점으로 앞의 요소들을 입력 리스트에 붙인다. 이진탐색 함수 bs에 이어 붙인 리스트와 시작점 pivot과 배열을 끝 인덱스를 넘기면서 호출한다.
3. target과 같은 요소가 있을 때까지 탐색범위를 좁히면서 이진탐색을 재귀적으로 진행한다.
4. 배열을 회전해서 뒤로 이어붙였기 때문에 해당 요소들의 원래 인덱스를 찾기 위해서 "인덱스 % len(nums)"처럼 나머지 값을 반환한다.

### py code
```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def bs(lst, start, end):
            if start > end:
                return -1

            mid = (start + end) // 2
            if lst[mid] < target:
                return bs(lst, mid + 1, end)
            elif lst[mid] > target:
                return bs(lst, start, mid - 1)
            else:
                return mid

        if not nums:
            return -1

        # pivot 값 찾기
        left = 0
        right = len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid

        added = nums + nums[:left]

        result = bs(added, left, len(added) - 1)
        return result if result == -1 else result % len(nums)
```

