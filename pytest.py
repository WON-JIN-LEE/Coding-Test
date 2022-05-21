import sys

# input = sys.stdin.readline
sys.stdin = open( "C:\WonJin\projects\CodingTest\input.txt", 'r')


INF = int(1e9)
N = int(input())
M = int(input())
dist = [[INF] * (N) for _ in range(N)]

for i in range(N):
    dist[i][i] = 0

for _ in range(M):
    a, b, c = map(int, input().split())
    if c < dist[a-1][b-1]:
        dist[a-1][b-1] = c

# 플로이드 워셜 알고리즘
for k in range(N):
    for a in range(N):
        for b in range(N):
            dist[a][b] = min(dist[a][b], dist[a][k] + dist[k][b])

print(dist)
for row in dist:
    print(' '.join([str(ele) if ele != INF else '0' for ele in row]))