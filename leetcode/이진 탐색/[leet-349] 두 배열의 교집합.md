# [leet-349] 두 배열의 교집합 [python]

## [문제](https://leetcode.com/problems/intersection-of-two-arrays/) 

## 의사코드
1. 중복을 제거하기 위해서 교집합을 담을 result를 집합으로 생성한다.
2. 배열 하나를 정렬시키고 다른 배열의 요소를 순회하면서 정렬된 배열에 해당 요소가 있는지 이진 탐색한다. 
3. idx가 정렬된 배열의 길이보다 작고, 요소가 같다면 result에 추가합니다.
### py code
```py
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # 교집합이 없을 경우
        if not nums1 or not nums2:
            return []

        result = set()
        nums2.sort()
        for n1 in nums1:
            idx = bisect.bisect_left(nums2, n1)
            if len(nums2) > idx and n1 == nums2[idx]:
                result.add(n1)

        return list(result)
```

