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
6
10
13
9
8
1`.split("\n");


const answer = solution(input);
console.log(answer);


function solution(input) {
    const arr = input.map(Number)
    const n = arr[0];
    let result = '';

    const dp = new Array(n + 1).fill(0);
    dp[1] = arr[1];
    dp[2] = arr[1] + arr[2];
    dp[3] = Math.max(arr[1] + arr[2], arr[1] + arr[3], arr[2] + arr[3]);
    
    for (let i = 4; i <= n; i++) {
        dp[i] = Math.max(
            dp[i - 3] + arr[i - 1] + arr[i],
            dp[i - 2] + arr[i],
            dp[i -1],
        );
    }
    return dp[n];
}
