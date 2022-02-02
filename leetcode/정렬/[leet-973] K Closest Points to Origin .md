# [leet-973] K Closest Points to Origin  [python]

## [문제](https://leetcode.com/problems/k-closest-points-to-origin/) 

## 의사코드
1. points를 순회하면서 point의 거리를 계산해서 dist에 저장한다. dist를 heapq와 dists에 추가한다.
2. k번째로 가까운 길이를 추출하기 위해서 k번 heapq.heappop를 수행한다. kth_dist의 마지막 요소가 k번째 가까운 길이가 된다.
3. dists의 요소 길이 dist가 kth_dist보다 작은 요소들을 담은 배열을 반환한다.

### py code
```py
class Solution:
    import heapq
    def cal_dist(self, point):
        return math.sqrt(point[0] * point[0] + point[1] * point[1])
    
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        dists = []
        heap = []
        for point in points:
            dist = self.cal_dist(point)
            heapq.heappush(heap, dist)
            dists.append(dist)

        kth_dist = [heapq.heappop(heap) for _ in range(k)][-1]
        return [points[idx] for idx, dist in enumerate(dists) if dist <= kth_dist]
```
