# [pro] 입국 심사 [python] 

## [문제](https://programmers.co.kr/learn/courses/30/lessons/43238)

### 의사코드 

### python Code 01
```py
def solution(n, times):
    answer = 0
    left = 1
    right = n * max(times)
    while True:
        if left > right:
            answer = left
            break
        
        mid = (left + right) // 2

        count = 0
        for time in times:
            count += mid // time
            # 심사 인원수를 넘으면 다음 단계
            if count >= n: break
        
        
        # n명또는 그 이상의 사람들을 심사 할 수 있는 경우
        # 한 심사관에게 주어진 시간을 줄여본다.
        if count >=n:
            right = mid - 1
        # 없는 경우
        elif count < n:
            left = mid + 1

    return answer
```
