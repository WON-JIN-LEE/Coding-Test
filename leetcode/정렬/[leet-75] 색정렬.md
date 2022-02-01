# [leet-75] 색정렬 [python]

## [문제](https://leetcode.com/problems/sort-colors/) 

## 의사코드
1. 퀵소트를 이용한다. 퀵소트 파티션방법으로는 마지막 요소를 피벗으로 잡고, 피벗보다 작은 요소들을 i인덱스 위치에 저장시킵니다.
2. 피벗보다 큰 값을 만나면 아무것도 하지않고 넘어가고 작은 값이 있다면 다시 i+1 값에 저장합니다.
3. 반복문 작업이 모두 끝나고 i의 인덱스는 피벗보다 작은 마지막 요소를 가리킨다. 그래서 i+1한 값에 피벗값을 스왑한다.
4. 이러면 피벗을 기준으로 왼쪽은 작은값들이 오른쪽은 큰값들이 자리하게된다. 
5. i를 1 증가하는 경우는 피벗보다 작은 수가 있을때 넣을 공간을 만들어주는 인덱스 만들어주는 것입니다.

### py code
```py
# 퀵 정렬을 이용한 풀이
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        def quicksort(lst, start, end):
            def partition(part, ps, pe):
                pivot = part[pe]
                i = ps - 1
                for j in range(ps, pe):
                    if part[j] <= pivot:
                        i += 1
                        part[i], part[j] = part[j], part[i]

                part[i + 1], part[pe] = part[pe], part[i + 1]
                return i + 1

            if start >= end:
                return None

            p = partition(lst, start, end)
            quicksort(lst, start, p - 1)
            quicksort(lst, p + 1, end)
            return lst
        
        quicksort(nums,0,len(nums)-1)
```

### py code 02
- 피벗 보다 작은 부분, 같은 부분, 큰 부분 이렇게 세 부분으로 분할하여 기존 퀵 정렬의 두 부분 분할에 비해 개선하는 방안을 제시하는 것이다.
```py
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        red, white, blue = 0,0,len(nums)

        while white < blue:
            if nums[white]<1:
                nums[red], nums[white] = nums[white], nums[red]
                white +=1
                red +=1
            elif nums[white]>1:
                blue -=1
                nums[white],nums[blue] = nums[blue], nums[white]
            else:
                white +=1
```
