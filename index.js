// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//   input.push(x*1)
  
// }).on("close", function () {
//     solution(input);
//   process.exit();
// });
const input = `6 5
1 2
2 5
5 1
3 4
4 6`.split("\n");
const [N, M] = input.shift().split(" ").map(Number);
    const visited = new Array(N + 1).fill(false);
const edge = Array.from({length: N+1},()=>[]);

    for (let i = 0; i < M; i++) {
        const [from, to] = input[i].split(" ").map(Number);
        edge[from].push(to);
        edge[to].push(from);
}
    
    let count = 0;

for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
}
console.log(count);
    
function dfs(start) {
    if (visited[start]) return;
    visited[start] = true;
    for (let i = 0; i < edge[start].length; i++) {
        const next = edge[start][i];

        if (!visited[next]) {
            dfs(next);
        }
    }
};
