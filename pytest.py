
from collections import defaultdict
import sys
from typing import List
from unittest import result
# input = sys.stdin.readline
sys.stdin = open(
    "C:\WonJin\pythonalgorithm\hanghea-algorithm\wonjin\input.txt", 'r')



def subsets( nums: List[int]) -> List[List[int]]:
    result=[]

    def dfs(index, path):
        result.append(path)

        for i in range(index, len(nums)):
            dfs(i+1, path +[nums[i]])

    dfs(0,[])
    return result


subsets([1, 2, 3])
    # assert permute1(nums=[1,2,3]) == [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
