# [leet-743] 네트워크 딜레이 타임 [python]

## [문제](https://leetcode.com/problems/network-delay-time/) 

## 의사코드
- 다익스트라 알고리즘 문제

### py code
```py
class Solution:
    def networkDelayTime(self ,times: List[List[int]], n: int, start: int) -> int:
        graph =defaultdict(list)

        for u,v,w in times:
            graph[u].append([v,w])

        q = [[0,start]]

        dist = defaultdict(int)

        while q:
            time, node = heapq.heappop(q)
            if node not in dist:
                dist[node] = time

                for v,w in graph[node]:
                    alt = time + w
                    heapq.heappush(q, [alt, v])

        if len(dist) == n:
            return max(dist.values())
        return -1
```
