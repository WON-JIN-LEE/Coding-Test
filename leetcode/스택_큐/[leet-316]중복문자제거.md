# 중복문자 제거 [Python]

## 의사 코드
1. counter에는 각문자별로 카운팅되어있다. 스택의 마지막 요소의 개수가 0아 아니라면 해당 문자가 문자열에 더 포함되었다는 의미이다.
2. seen에는 집합 객체를 선언한다. char이 이미 처리된 문자는 스킵하기 위함이다.
3. while문 조건에서 stack에 요소가 있고 && 마지막요소보다 현재char이 작고 && 뒤에 붙일 문자가 남아 있다면 스택과 집합에서 제거합니다.  


### py code
```py
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        counter, seen, stack = collections.Counter(s), set(), []
        print(counter, seen, stack)
        for char in s:
            counter[char] -=1
            if char in seen:
                continue
            
            while stack and char < stack[-1] and counter[stack[-1]] > 0:
                seen.remove(stack.pop())
            
            stack.append(char)
            seen.add(char)
            print(stack) 
            print(seen) 
            
        return "".join(stack)    
```