# [leet-787] K경유지 내 가장 저렴한 항공권 [python]

## [문제](https://leetcode.com/problems/cheapest-flights-within-k-stops/) 

## 의사코드
- 다익스트라 알고리즘 문제

1. 최소 힙의 특성을 이용해 비용을 기준으로 힙을 정렬한다. 시작점 src에서 시작해 연결된 항공을 순회하면서 [비용과 도착점, 경유횟수]를 힙에 추가한다.
2. 목적지 dst에 도착하기 전에 이미 경유횟수가 0이되었다는 것은 현재 항공에 도착까지 경유를 K번하고 왔다는 것을 의미하기 때문이다.
3. 경유 횟수가 남았다면 현재 항공을 거쳐서 연결된 항공으로 갈 경우의 예상비용cost이 이전에 계산된 비용보다 비싸고, 이전 경우 횟수보다 더 많은 경유지점을 지나고 온 경우를 제외한다. 그외의 경로는 힙에 추가한다.
4. 힙에 추가된 경로는 비용이 가장 작은 경로를 우선적으로 순회한다. 순회중에 목적지 도착전에 K번 경유를 했다면 그 경로는 더 이상 계산하지 않는다. 힙에서 꺼낸 경로가 목적지와 같아면 그 비용을 반환하면서 종료된다.

if cost < weight[v][0] or k > weight[v][1]: 조건문 경우의 수
- cost비용이 더 적고, 경유할 수 있는 횟수가 적은 경우는 힙에 추가된다. 하지만 다음 반복 if k>0 에서 걸러진다.
- 비용이 더 많지만 횟수가 더 많은 경우는 다른 경유지를 지나면서 비용이 줄어들 수 있는 가능성이 있다. 힙에 추가한다.
- 비용이 더 적고 횟수도 많은 경우도 비용이 더 낮아질 수 있는 가능성이 있다. 추가한다.
- 비용도 많고, 횟수도 부족한 경우는 더 이상 낮아질 수 없기 때문에 제외시킨다. 

### py code
```py
class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, K: int) -> int:
        import heapq
        from collections import defaultdict
        graph = defaultdict(list)
        weight = [[sys.maxsize, K+1]] * n
        for u, v, w in flights:
            graph[u].append([v, w])

        Q = [[0, src, K+1]] # 비용, 시작노드, 경유지 수로 이루어진 Q 생성

        while Q:
            price, node, k = heapq.heappop(Q) # 초기값 (0, 시작노드, 0)
            if node == dst: # 도착지에 도착했을 때
                return price

            if k > 0: # dst에 도착하기 전에 이미 경유를 k번을 한 경로는 제외
                for v, w in graph[node]:
                    cost = price + w
                    # 현재 비용 alt가 이전비용보다 비싸고 이전 경유횟수보다 더 많이 경유지점을 지나고 온 경우를 제외
                    if cost < weight[v][0] or k > weight[v][1]:
                        weight[v] = [cost,k-1]
                        heapq.heappush(Q, [cost, v, k - 1])

        return -1 
```
