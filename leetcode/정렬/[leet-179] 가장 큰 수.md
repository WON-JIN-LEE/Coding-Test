# [leet-179] 가장 큰 수 [python]

## [문제](https://leetcode.com/problems/largest-number/) 

## 의사코드
- functools : 유용한 함수를 담아둔 모듈
- cmp_to_key(func) :  구식 비교 함수를 키 함수로 변환한다. 비교 함수는 두 개의 인자를 받아들이고, 그들을 비교하여, 작으면 음수, 같으면 0, 크면 양수를 반환하는 콜러블입니다. 키 함수는 하나의 인자를 받아들이고 정렬 키로 사용할 다른 값을 반환하는 콜러블입니다.
- 키 함수: 키 함수 또는 콜레이션(collation) 함수는 정렬(sorting)이나 배열(ordering)에 사용되는 값을 돌려주는 콜러블입니다. 

1. 입력 배열을 문자열 리스트로 받는다. sorted로 정렬을한다.
2. 정렬을 시키는 기준을 x+y과 y+x 문자열을 숫자로 변환 후 비교해서 음수가 나오면 놔두고 양수이면 x,y 자리를 바꾼다.
3. result가 0이 아니라면 저장된 값을 반환한다.

### py code
```py
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        tmp = sorted([str(x) for x in nums], key=functools.cmp_to_key(lambda x,y: int(y+x)-int(x+y)))
        result=''.join(tmp).lstrip("0") # 입력값 ['0','0']인 경우를 예외처리함
        return result if result else "0"
```

### py code02
```py
class Solution:
    @staticmethod
    def to_swap(n1:int, n2:int) -> bool:
        return str(n1) + str(n2) < str(n2)+str(n1)
    
    def largestNumber(self, nums: List[int]) -> str:
        i=1
        while i<len(nums):
            j=i
            while j>0 and self.to_swap(nums[j-1], nums[j]):
                nums[j], nums[j-1] = nums[j-1], nums[j]
                j-=1
            i+=1
        
        return str(int(''.join(map(str, nums))))
```
