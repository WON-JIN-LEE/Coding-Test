from collections import defaultdict
import heapq
import sys
# input = sys.stdin.readline
sys.stdin = open( "C:\WonJin\projects\CodingTest\input3.txt", 'r')


INF = int(1e9)
N ,M = map(int, input().split())
dist = [[INF] * (N) for _ in range(N)]

for i in range(N):
    dist[i][i] = 0


for _ in range(M):
    row, col = map(int, input().split())
    dist[row-1][col-1] = 1
print(dist)
# 플로이드 워셜 알고리즘
for through_node in range(N):
    for row in range(N):
        for col in range(N):
            dist[row][col] = min(dist[row][col], dist[row][through_node] + dist[through_node][col])

# result = 0
# for row in range(N):
#     cnt=0
#     for col in range(N):
#         if dist[row][col] !=INF or dist[col][row] !=INF:
#             cnt+=1
#     if cnt == N:
#             result += 1
# print(result)

result = N
for row in range(N):
    for col in range(N):
        if dist[row][col] == INF and dist[col][row] == INF:
            result-=1
            break
print(result)
# assert permute1(nums=[1,2,3]) == [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]