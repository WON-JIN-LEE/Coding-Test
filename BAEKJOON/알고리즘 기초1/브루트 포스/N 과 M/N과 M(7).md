# N과 M(7) (15656번) [node.js, JavaScript] 

## 문제 설명
N개의 자연수와 자연수 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오. N개의 자연수는 모두 다른 수이다.

- N개의 자연수 중에서 M개를 고른 수열
- 같은 수를 여러 번 골라도 된다.

## 입력
첫째 줄에 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 7)

둘째 줄에 N개의 수가 주어진다. 입력으로 주어지는 수는 10,000보다 작거나 같은 자연수이다.

## 출력
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.

### 의사코드 
- 중복이 가능하기 때문에 N과 M(1) 코드에서 방문했던 숫자를 피하기 위한 visited 배열 제거했습니다.
### Code 
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

const [N, M] = input[0].split(" ").map(Number); // 첫째 출 입력 받음
const numArr = input[1].split(" "); // 둘째 줄 N개의 수를 받아 배열로 저장

//인덱스 번호를 자릿수와 맞추기 위해서 인덱스 0번에 0을 추가했습니다.
numArr.push(0);
numArr.sort((a, b) => a - b);

const output = [];
let result = '';

dfs(1);
console.log(result);


function dfs(cnt) {
    if (cnt > M) {
        result += `${output.join(" ")}\n`;
        return;
    }

    for (let i = 1; i <=N; i++){
        output.push(numArr[i]);
        dfs(cnt + 1);
        output.pop();
    }
}
```