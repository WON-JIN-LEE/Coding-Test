    const strToNumArr = (str) => str.split(" ").map(Number);
    let graph, visited, result;
    
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input=[];
rl.on("line", function (x) {
  input.push(x.trim())
  
}).on("close", function () {
    const [N, M, V] = strToNumArr(input.shift());
    graph = Array.from({ length: N + 1 }, () => []);
    visited = Array.from({ length: N + 1 }, () => false);

    solution(input,V);
  process.exit();
});
    
const insertEdge = (vFront, vBack) => {
    let index;
    for (index = 0; index < graph[vFront].length; index++){
        //중복된 정점 이면 추가하지 않는다. 
        if (graph[vFront][index] === vBack) {
            index = null;
            break;
        }
    }
    if (index !== null) {
        graph[vFront].push(vBack);
    }
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

const bfsFun = (value) => {
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

function solution(input, V) {
    
    input.forEach((str)=>{
        const [v1, v2] = strToNumArr(str);
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


