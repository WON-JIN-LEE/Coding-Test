#  [leet-70] 계단 오르기 [python] 

## [문제](https://leetcode.com/problems/climbing-stairs/)

### 의사코드 

### python Code

```py
class Solution:
    dp=collections.defaultdict(int)
    def climbStairs(self,n: int) -> int:
        if n<=2:
            return n
        
        if self.dp[n]:
            return self.dp[n]

        self.dp[n] = self.climbStairs(n-1) + self.climbStairs(n-2)
        return self.dp[n]
```
