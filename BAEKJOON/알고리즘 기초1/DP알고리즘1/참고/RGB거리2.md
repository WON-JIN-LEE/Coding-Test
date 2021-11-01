# RGB거리2 (17404번) [node.js, JavaScript] 

## 문제 설명
RGB거리에는 집이 N개 있다. 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.

집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다. 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.

- 1번 집의 색은 2번, N번 집의 색과 같지 않아야 한다.
- N번 집의 색은 N-1번, 1번 집의 색과 같지 않아야 한다.
- i(2 ≤ i ≤ N-1)번 집의 색은 i-1, i+1번 집의 색과 같지 않아야 한다.

## 입력
첫째 줄에 집의 수 N(2 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 각 집을 빨강, 초록, 파랑으로 칠하는 비용이 1번 집부터 한 줄에 하나씩 주어진다. 집을 칠하는 비용은 1,000보다 작거나 같은 자연수이다.

## 출력
첫째 줄에 모든 집을 칠하는 비용의 최솟값을 출력한다.

### 의사코드 
- 0번째와 N-1번째 또한 같은 색이어서는 안된다는 부분을 처리할 수 있어야 한다. 
- 이를 처리하기 위한 가장 효율적인 방법은 0번째 집의 색을 미리 정해놓고 해당 색으로 마지막 집을 칠할 시 절대 최소의 비용이 나올 수 없도록 설정하는 것이다.

1. 0번째 집을 칠할 3가지 색중 하나를 선택해서 dp[0][j]에 해당 비용을 저장하고 나머지 색 비용은 사용하지 않은 의미로 infinity를 넣어줍니다.
2. 먼저 빨강으로 0번째 집을 칠한 경우에 N번째 집까지 칠했을때 비용들을 모두 구합니다.
3. 1번째 집과 N번째 집이 같은 색이면 안되기 때문에 첫 반복문 rgb와 j가 같은 경우 애초에 비교할 수 없도록 coutinue 했습니다.
4. 같지 않다면 빨간색을 칠했을 때 최소 비용을 result 변수에 저장됩니다. 색을 순회하는 rgb반복문의 반복이 끝나게되면 result 변수에는 1번과 N번의 색과 같지 않을 때 최소 비용이 저장되고, 이 값을 반환하고 출력합니다.
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

    let result = Infinity;

    for (let rgb = 0; rgb <= 2; rgb++) {
        for (let j = 0; j < 3; j++) {
            if (rgb === j) {
                dp[0][j] = arr[0][rgb];
            } else {
                dp[0][j] = Infinity;
            }
        }

         // 반복문을 통해 모든 집을 칠하는 경우를 구해나간다.
        for (let i = 1; i < N; i++) {
            dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
            dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
            dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
        }

        for (let j = 0; j < 3; j++) {
            if (rgb === j) continue;
            result = Math.min(result, dp[N - 1][j]);
        }
    }
    return result;
}
```

