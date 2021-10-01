# DFS와 BFS (1260번) [node.js, JavaScript] 

## 문제 설명
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

## 입력
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

## 출력
첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

### 의사코드 
1. 삽입 요소를 배열에 추가해서 그래프를 생성해줍니다. 그래프 생성이 완료되면 정점의 인접한 요소들을 오름차순으로 정렬해줍니다.
2. DFS 깊이 우선 탐색 알고리즘에서는 접한 정점을 발견한 후, 해당 정점을 방문하지 않은 상태라면 그 정점을 바로 방문한다. 이를 반복하다 방문하지 않은 인접 정점이 더이상 없다면 마지막에 따라왔던 간선을 따라 뒤로 돌아가고 이를 반복한다. 
3. BFS 너비 우선 탐색 알고리즘에서는 현재 정점과 인접한 정점 중, 방문하지 않은 정점을 방문할 정점 배열에 저장한다. 그 후 배열에서 정점을 하나씩 뽑아 방문한다. 번호가 작은 정점부터 방문해야 하므로 방문할 정점 배열을 큐(queue)처럼 동작하게 한다.
### Code 
```js
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n"); 

const insertEdge = (vFront, vBack) => {
        graph[vFront].push(vBack);
};

const dfsFun = (value) => {
    if(visited[value]) {
        return;
    }

    visited[value] = true;
    result.push(value);
    graph[value].forEach((vertex) => {
        if (!visited[vertex]) {
            dfsFun(vertex);
        }
    });
};

const bfsFun = (value)=>{
    const willVisit = [value];
    let v;

    while (willVisit.length !== 0) {
        v = willVisit.shift();
        if (visited[v]) {
            continue;
        }
    
        visited[v] = true;
        result.push(v);

        graph[v].forEach((vertex) => {
            if (!visited[vertex])
                willVisit.push(vertex);
        });

    }
    
};

function solution(input,V) {
    
     input.forEach((str)=>{
        [v1, v2] = strToNumArr(str);
        insertEdge(v1, v2);
        insertEdge(v2, v1);
    });

    graph.map(ele => ele.sort((a, b) => a - b));

    result = []; //결과 변수 초기화
    dfsFun(V);
    console.log(result.join(" "));
    
    visited.fill(false);

    result = []; //결과 변수 초기화
    bfsFun(V);
    console.log(result.join(" "));

}

const strToNumArr = (str) => str.split(" ").map(Number);
const [N, M, V] = strToNumArr(input.shift());

const graph = Array.from({length : N+1}, ()=>[]);
const visited = Array.from({ length: N + 1 }, () => false);
let result;

solution(input,V);


```