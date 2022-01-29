# [leet-347]상위 K 빈도 요소 [python]
## [문제](https://leetcode.com/problems/top-k-frequent-elements/)

### 의사코드
- 상위k번 이상 등장하는 요소를 추출하라는 의미는 입력된 숫자들의 빈도수로 정렬을 시킨다. 그러면 k가 3이라고 했을때 정렬된 리스트에서 1,2,3을 구하는 문제이다.
-  힙 자료구조를 이용해서 빈도 수를 키로 heap에 추가한다. heappop하게되면 상위의 요소를 제거하기 때문에 k번 반복해서 제거한다. 
1. Counter로 nums배열에서 요소하나를 키로하고 키와 같은 개수를 가진 딕셔너리를 만든다.
2. 파이썬의 heapq 모듈은 최소 힙으로 구현되어 있기 때문에 최대 힙 구현을 위해서는 트릭이 필요하다. 힙에 추가할 떄 (-item, item) -를 붙여주면 최대 힙으로 구현할 수 있다.

### py code
```py
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqs = collections.Counter(nums)

        freqs_heap = []
            # 힙에 음수로 삽입
        for f in freqs:
            print((-freqs[f], f))
            heapq.heappush(freqs_heap, (-freqs[f], f))

        print(freqs_heap)
        topk = list()

        # k번 만큼 추출, 민 힙 이므로 가장 작은 음수 순으로 추출
        for i in range(k):
            topk.append(heapq.heappop(freqs_heap)[1])

        return topk

```

### py code02
```py
# Counter의 monst_common() 이용
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        print()

        return list(zip(*collections.Counter(nums).most_common(k)))[0]

```