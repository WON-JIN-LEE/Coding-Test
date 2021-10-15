
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

const input = `6
20 1 15 8 4 10`.split("\n");

const N = input[0]*1;
const numArr = input[1].split(" ").map(Number);
numArr.push(0);
numArr.sort((a, b) => a - b);

const visited = new Array(N+1).fill(false);
const output = [];
const result = [];

dfs(1);

const tmp = result.map((val) => {
    let tmp = val.split(" ").map(Number);
    let sum = 0;
    
    for (let i = 0; i < N-1; i++){
    sum += Math.abs(tmp[i]-tmp[i+1]);
    }
    return sum;
});
console.log(Math.max(...tmp));

function dfs(cnt) {
    if (cnt > N) {

        result.push(output.join(" "));
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