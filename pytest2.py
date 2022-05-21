from collections import defaultdict
import heapq
import sys
from typing import List
# input = sys.stdin.readline
sys.stdin = open( "C:\WonJin\projects\CodingTest\input2.txt", 'r')


INF = int(1e9)
V, E = map(int, input().split())
dist = [[INF] * (V) for _ in range(V)]


for _ in range(E):
    a, b, c = map(int, input().split())
    dist[a-1][b-1] = c

# 플로이드 워셜 알고리즘
for k in range(V):
    for a in range(V):
        for b in range(V):
            dist[a][b] = min(dist[a][b], dist[a][k] + dist[k][b])


min_cycle = INF
for i in range(V):
    min_cycle = min(min_cycle, dist[i][i])
if min_cycle == INF: #사이클이 없을 경우
    print(-1)
else:
    print(min_cycle)
# assert permute1(nums=[1,2,3]) == [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]