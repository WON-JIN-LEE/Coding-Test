# [pro] 정수 삼각형 [python] 

## [문제](https://programmers.co.kr/learn/courses/30/lessons/43105)

### 의사코드 

### python Code 01
```py
def solution(triangle):
    n = len(triangle)
    dp=triangle
    
    for row in range(1, n):
        for col in range(row+1):
            if col == 0:
                dp[row][col] += dp[row-1][col]
            elif col == row:
                dp[row][col] += dp[row-1][col-1]
            else:
                dp[row][col] = dp[row][col] + max(dp[row-1][col-1],dp[row-1][col])
    answer = max(dp[n-1])
    return answer
```
