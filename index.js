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
const input = `ACAYKP
CAPCAK`.split("\n");
const str1 = input[0].split("");
const str2 = input[1].split("");
const len = str1.length;
const len2 = str2.length;

// 0으로 초기화
const dp = Array.from(Array(1001), () => Array());
// 모든 행, 열 0으로 초기화
for (let i = 0; i <= len; i++) {
  for (let j = 0; j <= len2; j++) {
    dp[i][j] = 0;
  }
}

for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= len2; j++) {
    if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
  }
}

console.log(dp[len][len2]);
