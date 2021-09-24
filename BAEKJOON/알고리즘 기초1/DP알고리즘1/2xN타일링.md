# 2xN타일링 (11726번) [node.js, JavaScript] 

## 문제 설명
2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

## 출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

### 의사코드 
- 이 문제는 피보나치 수열을 사용하여 풀 수 있는 문제였다.
- 2x1개를 채우는데는 1개, 2x2을 채우는데는 2개, 2x3을 채우는데는 3개, 2x4를 채우는데는 5개, 2x5를 채우는데는 8개 이런식으로, 1, 2, 3, 5, 8, 13... 과 같이 피보나치 패턴으로 구해진다는 것을 알 수 있다.

### Code 
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

solution(input);

function solution(input) {
 
    const num = Number(input[0]);

    const DP =[0,1,2];
    if (num > 2) {
        for (let i = 3; i <= num; i++){
            DP[i] = (DP[i - 1] + DP[i - 2])%10007;
        }
    }
    return console.log(DP[num])
}
```