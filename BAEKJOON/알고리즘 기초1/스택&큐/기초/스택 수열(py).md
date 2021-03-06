# 스택 수열(1872번) [JavaScript, python]

## [문제](https://www.acmicpc.net/problem/1874)

### 의사코드 
- 요소가 추가될때는 '+'를 추가하고 제거될 떄는 '-'를 추가해줍니다.
1. 받아온 arr 배열을 순회하면서 요소인 cur ~ x까지 숫자를 stack에 추가합니다. 그리고 stack에 추가될 때마다 answer에는 '+'를 추가합니다.
2. stack의 맨위 요소가 x와 같을때 맨위 요소를 하나 제거하고 answer에는 '-'를 추가한다.
3. 수열이 만들어지지 않으면 NO를 반환한다.
4. 성공적으로 반복문이 모두 끝나면 answer에는 수열 요소가 들어있고, '\n'을 구분자로 하나의 문자열로 만들어 반환합니다.
   
### py code
```py
import sys
input = sys.stdin.readline

def stack_sequence(n, arr):
    stack = []
    answer = []
    cur = 1
    for x in arr:
        while x >= cur:
            stack.append(cur)
            answer.append('+')
            cur += 1

        if stack.pop() == x:
            answer.append('-')
        else:
            return 'NO'
    
    return '\n'.join(answer)


if __name__ == '__main__':
    n = int(input())
    numArr = [int(input()) for _ in range(n)]
    print(stack_sequence(n, numArr))
```