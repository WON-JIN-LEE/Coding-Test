# [leet-242] 유효한 애너그램  [python]

## [문제](https://leetcode.com/problems/valid-anagram/) 


### py code
- 정렬을 이용한 비교
- 문자열을 정렬한 후 비교한다.
```py
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s)==sorted(t)
```

### py code 02
- Counter을 이용한 비교
- 문자열 요소의 개수를 추출해서 개수가 다르면 False를 반환한다.
```py
from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s)==Counter(t)
```
