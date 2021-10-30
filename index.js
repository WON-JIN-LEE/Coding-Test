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
const input = `6`.split("\n");


const answer = solution(input);
console.log(answer);

function solution(input) {
    const n = input[0]*1;
    const dp = new Array(n+1).fill(0);
    dp[0] =0;
    dp[2] =3;

        for (let i = 4; i <= n; i += 2) {
            dp[i] = dp[i] + dp[i - 2] * 3;
            for (let j = i-4; j >= 2; j -= 2) {
                dp[i] += dp[j]*2
            }
            dp[i] = dp[i] +2;

        }
    console.log(dp);
}