
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 


// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//   input.push(x)
  
// }).on("close", function () {
//     solution(input);
//   process.exit();
// });


const input = `5 5 3
5 4
5 2
1 2
3 4
3 1`.split("\n");
const strToNumArr = (str) => str.split(" ").map(Number);
const [N, M, V] = strToNumArr(input.shift());

const graph = Array.from({length : N+1}, ()=>[]);
const visited = Array.from({ length: N + 1 }, () => false);
let result;


// const insertEdge = (vFront, vBack) => {
//     let index;
//     for (index = 0; index < graph[vFront].length; index++){
//         if (graph[vFront][index] < vBack) {
//             continue;
//         }

//         //간선이 양방향이기 떄문에 중복을 피하기 위해서
//         //인접한 정점이 이미 배열에 존재하는 경우
//         if (graph[vFront][index] === vBack) {
//             index = null;
//         }
//         break;
//     }
//     if (index !== null) {
//         graph[vFront].splice(index, 0, vBack);
//     }
// };
    
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

solution(input);
function solution(input) {
    
     input.forEach((str)=>{
        const [v1, v2] = strToNumArr(str);
        insertEdge(v1, v2);
        insertEdge(v2, v1);
    });
    console.log(graph);

    graph.map(ele => ele.sort((a, b) => a - b));
    console.log(graph);

    result = []; //결과 변수 초기화
    dfsFun(V);
    console.log(result.join(" "));
    
    visited.fill(false);

    result = []; //결과 변수 초기화
    bfsFun(V);
    console.log(result.join(" "));

}


