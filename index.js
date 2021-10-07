
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



const input = `4 2
9 8 7 1`.split("\n");
const [N, M] = input[0].split(" ").map(Number);
const numArr = input[1].split(" ");
numArr.push(0);
numArr.sort((a, b) => a - b);

console.log(numArr);
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
        output.push(numArr[i]);
        dfs(cnt + 1);
        output.pop();
        visited[i] = false;
    }
}