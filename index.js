// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//     input.push(x);

// }).on("close", function () {
//     solution(input);
//   process.exit();
// });
const input = `6
10
20
15
25
10
20`.split("\n");
const N = +input.shift();
const arr = input.map(Number);
const dp = [];
dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1]+arr[2]);


solution(N, arr);

console.log(dp[N - 1]);


function solution(N,arr) {

    for (let i = 3; i < N; i++) {
        dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
    }
    return;
}