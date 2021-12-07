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
const input = `4`.split("\n");
const MOD = 15746;
const dp = new Array(1000001);
dp[1] = 1;
dp[2] = 2;

console.log(solution(input));

function solution(input) {
    const N = +input[0];

    if (3 > N) return dp[N];
    for (let i = 3; i <= N; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
        dp[i] %= MOD;
    }
    return dp[N];
}