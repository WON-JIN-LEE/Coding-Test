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

const [len, max] = input[0].split(" ").map(Number);

const W = new Array(len + 1); // 무게
const V = new Array(len + 1); // 가치
const dp = new Array(max + 1).fill(0);

for (let i = 1; i <= len; i++) {
  const [w, v] = input[i].split(" ");
  W[i] = +w;
  V[i] = +v;
}

for (let i = 1; i <= len; i++) {
  for (let j = max; j - W[i] >= 0; j--) {
    console.log(j, dp[j], dp[j - W[i]] + V[i]);
    dp[j] = Math.max(dp[j], dp[j - W[i]] + V[i]);
    console.log(dp);
  }
}
console.log(dp[max]);
