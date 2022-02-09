import collections
import sys
from typing import List
# input = sys.stdin.readline
sys.stdin = open( "C:\WonJin\projects\CodingTest\input.txt", 'r')
def rob(nums: List[int]) -> int:
    dp=nums
    dp[0], dp[1] = nums[0], max(dp[0], dp[1])
    for n in range(2,len(nums)):
        dp[n] = max(dp[n-2]+dp[n], dp[n-1])
    return max(nums)
print((rob(nums = [2,7,9,3,1])))


# def findCheapestPrice( n: int, flights: List[List[int]], src: int, dst: int, K: int) -> int:
#     import heapq
#     from collections import defaultdict
#     graph = defaultdict(list)
#     weight = [[sys.maxsize, K+1]] * n
#     print(weight)
#     for u, v, w in flights:
#         graph[u].append([v, w])

#     Q = [[0, src, K+1]] # 비용, 시작노드, 경유지 수로 이루어진 Q 생성

#     while Q:
#         price, node, k = heapq.heappop(Q) # 초기값 (0, 시작노드, 0)
#         if node == dst: # 도착지에 도착했을 때
#             return price
        
#         if weight[node] < price:
#             continue

#         if k > 0: # dst에 도착하기 전에 이미 경유를 k번을 한 경로는 제외
#             for v, w in graph[node]:
#                 cost = price + w
#                 # 현재 비용 alt가 이전비용보다 비싸고 이전 경유횟수보다 더 많이 경유지점을 지나고 온 경우를 제외
#                 if cost < weight[v][0] or k > weight[v][1]:
#                     weight[v] = [cost,k-1]
#                     heapq.heappush(Q, [cost, v, k - 1])
#         print(weight)
#     return -1 


# findCheapestPrice(n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, K = 0)
# result = findCheapestPrice(5, [[0, 1, 5], [1, 2, 5], [0, 3, 2], [3, 1, 2], [1, 4, 1], [4, 2, 1]], 0, 2, 2)
# print(result)
