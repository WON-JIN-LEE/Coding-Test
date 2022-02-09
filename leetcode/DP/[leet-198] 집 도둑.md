# [leet-198] 집 도둑 [python] 

## [문제](https://leetcode.com/problems/house-robber/)

### 의사코드 

### python Code

```py
class Solution:
    def rob(self, nums: List[int]) -> int:
        
        if not nums:return 0
        if len(nums) <=2:return max(nums)
        
        dp=nums
        dp[0], dp[1] = nums[0], max(dp[0], dp[1])
        for n in range(2,len(nums)):
            dp[n] = max(dp[n-2]+dp[n], dp[n-1])
        return max(nums)
```
