
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
9 7 9 1`.split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numArr = input[1].split(" ");
numArr.push(0);
numArr.sort((a, b) => a - b);

const output = [];
const set = new Set();
let result = "";
dfs(1,1);

for (const value of set) {
    result += `${value}\n`;
}
console.log(result);

function dfs(index, cnt) {
    if (cnt > M) {
        set.add(`${output.join(" ")}`);
        return;
    }

    for (let i = index; i <=N; i++){
        output.push(numArr[i-1]);
        dfs(i, cnt + 1);
        output.pop();
    }
}