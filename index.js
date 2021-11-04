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
const input = `9
> < < < > > > < <`.split("\n");
const N = +input.shift();
const inequality = input[0].split(" ");
const visited = new Array(10).fill(false);
  let max = String(Number.MIN_SAFE_INTEGER); 
  let min = String(Number.MAX_SAFE_INTEGER);

for (let i = 0; i < 10; i++) {
    visited[i] = true;
    dfs(0, i, `${i}`);
    visited[i] = false;
}
console.log(`${max}\n${min}`);
function dfs(L, prev, result) {
    if (L == N) {
        max = result > max ? result : max;
        min = result < min ? result : min;
        
        return;
    }
    if (inequality[L] === "<") {
        for (let i = prev + 1; i < 10; i++) {
            if (visited[i] === true) continue;
            visited[i] = true;
            dfs(L + 1, i, result + i);
            visited[i] = false;
        }
    } else {
        for (let i = prev - 1; i > -1; i--) {
            if (visited[i] === true) continue;
            visited[i] = true;
            dfs(L + 1, i, result + i);
            visited[i] = false;
        }
    }
    return ;
}