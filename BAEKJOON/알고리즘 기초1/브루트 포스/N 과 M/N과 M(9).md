# N과 M(9) (15663번) [node.js, JavaScript] 

## 문제 설명
N개의 자연수와 자연수 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

- N개의 자연수 중에서 M개를 고른 수열
## 입력
첫째 줄에 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

둘째 줄에 N개의 수가 주어진다. 입력으로 주어지는 수는 10,000보다 작거나 같은 자연수이다.

## 출력
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.

### 의사코드 
- 중복된 수열을 제거하기 위해서 Set 객체에 만들어진 수열을 저장합니다.

### Code 
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

const [N, M] = input[0].split(" ").map(Number);
const numArr = input[1].split(" ");
numArr.push(0);
numArr.sort((a, b) => a - b);
const visited = new Array(N+1).fill(false);

const output = [];
const set = new Set();
dfs(1);

for (const value of set) {
console.log(value);
}

function dfs(cnt) {
    if (cnt > M) {
        set.add(`${output.join(" ")}`);
        return;
    }

    for (let i = 1; i <=N; i++){
        if (visited[i] === true) continue;
        visited[i] = true;
        output.push(numArr[i]);
        dfs(cnt + 1);
        output.pop();
        visited[i] = false;
    }
}
```