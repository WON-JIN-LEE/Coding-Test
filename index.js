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
const N = +input[0];
const vx = new Array(N + 1).fill();
const vy = new Array(N + 1).fill();

let count = 0;
for (let i = 0; i < N; i++) {
  go(0, i);
  
}
console.log(count);

function go(y, x) {
  
  //가지치기
  for (let i = 0; i < y; i++) {
    if (y == vy[i]) return 0;  // 가로겹침
    if (x == vx[i]) return 0; // 세로겹침
    if (Math.abs(x - vx[i]) == Math.abs(y - vy[i])) return 0; //대각선 겹침
  }
  
//종료조건
   if (y == N - 1) {
     count++;
     return;
   }

  vy[y] = y;
  vx[y] = x;
  for (let i = 0; i < N; i++) {
    go(y+1, i);
   }
   return 0;
 }