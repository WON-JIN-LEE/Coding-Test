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
const input = `4 7
6 13
4 8
3 6
5 12`.split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const W = [0],
  V = [0];
const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }, () => 0)
);
input.forEach((v) => {
  let temp = v.split(" ").map(Number);
  W.push(temp[0]);
  V.push(temp[1]);
});

for (let i = 1; i <= N; i++) {
  for (let j = 0; j <= K; j++) {
    if (j + W[i] <= K && dp[i][j] !== 0) {
      dp[i][j + W[i]] = Math.max(dp[i - 1][j + W[i]], dp[i - 1][j] + V[i]);
    }
  }
}

console.log(dp[N][K]);
