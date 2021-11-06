# ABCDE (13023번) [node.js, JavaScript] 

## 문제 설명
BOJ 알고리즘 캠프에는 총 N명이 참가하고 있다. 사람들은 0번부터 N-1번으로 번호가 매겨져 있고, 일부 사람들은 친구이다.

오늘은 다음과 같은 친구 관계를 가진 사람 A, B, C, D, E가 존재하는지 구해보려고 한다.

A는 B와 친구다.
B는 C와 친구다.
C는 D와 친구다.
D는 E와 친구다.

위와 같은 친구 관계가 존재하는지 안하는지 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 사람의 수 N (5 ≤ N ≤ 2000)과 친구 관계의 수 M (1 ≤ M ≤ 2000)이 주어진다.

둘째 줄부터 M개의 줄에는 정수 a와 b가 주어지며, a와 b가 친구라는 뜻이다. (0 ≤ a, b ≤ N-1, a ≠ b) 같은 친구 관계가 두 번 이상 주어지는 경우는 없다.

## 출력
문제의 조건에 맞는 A, B, C, D, E가 존재하면 1을 없으면 0을 출력한다.

### 의사코드 
1. N개의 행을 가지며 행마다 빈 배열을 하나씩 가진다.
2. 인접리스트에 a->b, b->a 관계를 각각 넣어준다. 
3. dfs함수로 방문할 노드를 모두 호출한다. check변수로 방문, 미방문을 확인합니다. 
4. cnt가 4가 될때 result에 true를 넣어주고, 더이상 dfs함수를 재귀 호출하지 않아도되기 때문에 즉시 return합니다.
5. 노드를 방문할때는 현재 노드의 인접리스트인 addArr[L]에 있는 요소를 next에 저장하고, !check[next]으로 next 노드에 방문하지 않았다면, 방문하게됩니다.

### Code
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

const [N, M] = input[0].split(" ").map(Number);
const adjArr = Array.from({length: N}, () => Array(0));
const check = new Array(N).fill(0);
let result = false;

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);;
    adjArr[a].push(b);
    adjArr[b].push(a);
}

for (let j = 0; j < N; j++) {
    dfs(j, 0);
}

console.log(+result);

function dfs(L, cnt) {
        if (result) return; 
        check[L] = 1;

        if (cnt === 4) {
            result = true;
            return;
        }

    for (let i = 0; i < adjArr[L].length; i++) { 
        const next = adjArr[L][i]; 
        if (!check[next]) {
            dfs(next, cnt + 1);
        }
    }
    check[L] = 0; 
};

```
