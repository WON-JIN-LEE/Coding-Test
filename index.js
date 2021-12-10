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
const input = `8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6`.split("\n");
const N = +input.shift();
const numbers = input.map(e => e.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
const dp = Array.from({ length: N }, () => 1);
console.log(numbers);


for (let i = 0; i < N; i++) { // A 1부터 10까지 순회하는 반복문
    let cnt = 0;

  for (let j = 0; j < i; j++) { // A 비교 지점부터 10까지 순회하는 반복문
        if (numbers[i][1] > numbers[j][1]) {
        cnt = Math.max(cnt, dp[j]);
        }
    }
        dp[i] += cnt;
}
console.log(dp)

console.log(N - Math.max(...dp))