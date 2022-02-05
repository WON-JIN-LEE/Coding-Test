# [pro] 파일명 정렬 [python] 

## [문제](https://programmers.co.kr/learn/courses/30/lessons/17686)

### 의사코드 
- 입력 텍스트를 정규표현식으로 head, number, tail로 나누어 리스트로 만든다.
- head를 먼저 정렬하고 만약 head가 같아면 num를 비교 이것도 같다면, 들어온 순서대로 정렬한다.

### python Code 01
```py
from functools import cmp_to_key
import re

def fileSort(a,b):
    head_a = a['value'][0].lower()
    head_b = b['value'][0].lower()

    if head_a < head_b : 
        return -1
    if head_a > head_b : 
        return 1

    num_a = int(a['value'][1])
    num_b = int(b['value'][1])

    if num_a < num_b : 
        return -1
    if num_a > num_b : 
        return 1

    idx_a = a['index']
    idx_b = b['index']
    
    if idx_a < idx_b : 
        return -1
    else: 
        return 1
    
    
def make_str(x): 
    return ''.join(x['value'])

def solution(files):
    reg = re.compile('(\d+)', re.M)
    answer = [{'index':idx, 'value': re.split(reg, text) } for idx, text in enumerate(files)]
    answer.sort(key=cmp_to_key(fileSort))

    return list(map(make_str, answer))
```

### python Code 02
- 안정정렬이기에 가능한 풀이
- 안정 정렬(Stable Sort)란 중복된 값을 입력 순서와 동일하게 정렬합니다. 
- 중복된 값을 입력 순서와 동일하게 정렬이라는 말은 기존의 다른 요소로 정렬이 된 입력값을 정렬을 할 때 기존의 정렬 형태를 유지한 상태에서 정렬을 한다는 의미와 같습니다.
```py
import re
    
def make_str(x): 
    return ''.join(x['value'])

def solution(files):
    reg = re.compile('(\d+)', re.M)
    answer = [{'index':idx, 'value': re.split(reg, text) } for idx, text in enumerate(files)]
    answer.sort(key=lambda x:(x['value'][0].lower(), int(x['value'][1])))

    return list(map(make_str,answer))
```

### python Code 03
```py
import re

def solution(files):
    a = sorted(files, key=lambda file : int(re.findall('\d+', file)[0]))
    b = sorted(a, key=lambda file : re.split('\d+', file.lower())[0])
    return b
```
