# [JavaScript] x만큼 간격이 있는 n개의 숫자

## 문제설명

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

### 제한 조건

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

### 입출력 예

| x   | n   | answer       |
| --- | --- | ------------ |
| 2   | 5   | [2,4,6,8,10] |
| 4   | 3   | [4,8,12]     |
| -4  | 2   | [-4, -8]     |

#### Point

- Code 01에서는 반복문에서 순차적으로 x를 더해서 증가된 숫자를 배열을 push하고 반복문이 끝나면 반환합니다.
- Code 02에서는 1,2,3 ~ n 까지 숫자를 요소로 갖는 배열을 선언하고, 각 요소에 x를 곱한 결과 값으로 만들어진 배열을 반환합니다.

#### Code 01

```javascript
function solution(x, n) {
  const answer = [];
  let numNext = x;
  for (let i = 0; i < n; i++) {
    answer.push(numNext);
    numNext += x;
  }
  return answer;
}
```

#### Code 02

```js
function solution(x, n) {
  const answer = Array.from({ length: n }, (_, i) => i + 1);
  return answer.map((ele) => ele * x);
}
```
