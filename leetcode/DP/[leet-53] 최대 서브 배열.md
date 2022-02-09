#  [leet-53] 최대 서브 배열 [python] 

## [문제](https://leetcode.com/problems/maximum-subarray/)

### 의사코드 

### python Code

```py
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [0]*n
        dp[0] = nums[0]
        
        for i in range(1, n):
            dp[i] = max(dp[i-1]+nums[i], nums[i])
        return max(dp)
```
