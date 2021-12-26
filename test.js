let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, K] = input.shift().split(" ").map(Number);

input = input.map((element) =>
  element
    .trim()
    .split(" ")
    .map((value) => Number(value))
);
const W = [0];
const V = [0];
for (let i = 0; i < N; i++) {
  W.push(input[i][0]);
  V.push(input[i][1]);
}

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }, () => 0)
);

for (let j = 1; j <= K; j++) {
  if (input[1][0] <= j) {
    dp[1][j] = input[1][1];
  } else {
    dp[1][j] = 0;
  }
}

for (let i = 2; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    if (j < W[i]) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - W[i]] + V[i]);
    }
  }
}
console.log(dp[N][K]);
