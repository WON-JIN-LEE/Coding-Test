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
const input = `3
26 40 83
49 60 57
13 89 99`.split("\n");



const answer = solution(input);
console.log(answer);


function solution(input) {
    const N = input.shift();
    const arr = input.map(v => v.split(" ").map(Number));
    const dp = Array.from({length:N}, ()=> []);
    dp[0] = input[0].split(" ").map(Number);

    for (let i = 1; i < N; i++) {
        dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
        dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
    }
    
    return Math.min(...dp[N - 1]);
}