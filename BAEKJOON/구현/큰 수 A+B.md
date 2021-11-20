# 큰 수 A+B (10757번) [node.js, JavaScript] 

## 문제 설명
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

## 입력
첫째 줄에 A와 B가 주어진다. (0 < A,B < 10^10000)

## 출력
첫째 줄에 A+B를 출력한다.
### 의사코드 
1. 입력값이 자바스크립트 숫자형 데이터타입인 Number의 범위를 넘어가기 때문에 Number형으로 계산하게되면 뒤 숫자가 짤려 정확한 값을 계산할 수 없습니다.
2. 데이터타입 BigInt형을 사용해서 더한 후 문자열로 변경하여 출력합니다.

### Code
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

solution(input);
function solution(input) {
    const [A, B] = input[0].split(" ").map(v => BigInt(v));

    console.log(String(A + B));
}
```
