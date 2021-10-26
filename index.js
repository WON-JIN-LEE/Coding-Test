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
const input = `4`.split("\n");


const answer = solution(input);
console.log(answer);


function solution(input) {
    const MOD = 9901;
    const N = input.shift();
    const DP = [[1, 1, 1]];
    for (let i = 1; i < N; i++) {
        DP.push([0, 0, 0]);
        DP[i][0] = (DP[i - 1][0] + DP[i - 1][1] + DP[i - 1][2])%MOD;
        DP[i][1] = (DP[i - 1][0] + DP[i - 1][2])%MOD;
        DP[i][2] = (DP[i - 1][0] + DP[i - 1][1])%MOD;
    }
    return DP[N-1].reduce((acc, cur) => acc + cur, 0) %MOD;
}


