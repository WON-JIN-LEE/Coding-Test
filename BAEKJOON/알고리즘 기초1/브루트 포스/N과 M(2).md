# N과 M(2) (15650번) [node.js, JavaScript] 

## 문제 설명
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

- 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
- 고른 수열은 오름차순이어야 한다.
- 
## 입력
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

## 출력
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.

### 의사코드 
- N과 M (1)는 재귀를 위한 for loop에서 index를 항상 맨 처음부터 다시 돌았다면 이 문제에서는 지난 숫자는 제외하고 for loop을 진행한다.
- dfs함수에 인덱스 매개변수를 추가했습니다.
  
### Code 
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 
   
const [N, M] = input[0].split(" ").map(Number);
    const visited = new Array(N+1).fill(false);
    const output = [];
    let result = '';
    dfs(1,1);
    console.log(result);
    
function dfs(index,cnt) {
    if (cnt > M) {
        result += `${output.join(" ")}\n`;
        return;
    }

    for (let i = index; i <=N; i++){
        if (visited[i] === true) continue;
        visited[i] = true;
        output.push(i);
        dfs(i, cnt + 1);
        output.pop();
        visited[i] = false;
    }
}
```