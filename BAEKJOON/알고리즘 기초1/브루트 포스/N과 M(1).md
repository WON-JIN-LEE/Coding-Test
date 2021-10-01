# N과 M(1) (15649번) [node.js, JavaScript] 

## 문제 설명
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
## 입력
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)
## 출력
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.
### 의사코드 
- DFS를 이용해 풀어낼 수 있다.
1. N개의 배열을 생성하고 false로 초기화한다.
2. dfs함수에 인자로 첫번째 자릿수를 넘겨줍니다. 
3. 인자cnt가 M보다 커지면 M자리수를 넘어간다는 의미로 output배열에 저장된 4자리 요소를 문자열로 만들어 result에 연결하고 return으로 dfs를 빠져나옵니다.
4. 1 ~ N 까지 사용하려는 요소에 true를 넣고 output배열에 추가합니다. dfs함수 수행이 끝나면 output배열에서 제거하고 사용중이지 않다는 표시로 visited[i]에 다시 false로 재할당합니다.
### Code 
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 
   
const [N, M] = input[0].split(" ").map(Number);
    const visited = new Array(N+1).fill(false);
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
        if (visited[i] === true) continue;
        visited[i] = true;
        output.push(i);
        dfs(cnt + 1);
        output.pop();
        visited[i] = false;
    }
}
```