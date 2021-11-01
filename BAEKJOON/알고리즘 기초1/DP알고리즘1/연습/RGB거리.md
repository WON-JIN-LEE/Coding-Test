# RGB거리(1149번) [node.js, JavaScript] 

## 문제 설명
RGB거리에는 집이 N개 있다. 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.

집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다. 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.

- 1번 집의 색은 2번 집의 색과 같지 않아야 한다.
- N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
- i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.

## 입력
첫째 줄에 집의 수 N(2 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 각 집을 빨강, 초록, 파랑으로 칠하는 비용이 1번 집부터 한 줄에 하나씩 주어진다. 집을 칠하는 비용은 1,000보다 작거나 같은 자연수이다.

## 출력
첫째 줄에 모든 집을 칠하는 비용의 최솟값을 출력한다.

### 의사코드 
1. 각 집을 칠하는 비용들을 2차원 배열로 저장합니다.
2. 현재 집에서 RGB로 칠할 수 있는 모든 경우의 비용을 구합니다. 즉, 현재 집을 R로 칠했다면 이전 집은 GB중 최소 비용인 색으로 칠했다는 것을 뜻합니다.
3. 2번 집부터 마지막 집까지 순회하게되면 마지막 집의 RGB 값 중 최소값이 모든 집을 칠하는 비용이 됩니다.
### Code
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

const answer = solution(input);
console.log(answer);

function solution(input) {
    const N = input.shift();
    const arr = input.map(v => v.split(" ").map(Number));
    const dp = Array.from({length:N}, ()=> []);
    dp[0] = input[0].split(" ").map(Number);

    for (let i = 1; i < N; i++) {
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
    }
    return Math.min(...dp[N - 1]);
}
```