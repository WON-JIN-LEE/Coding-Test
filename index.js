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
const input = `4 11
802
743
457
539`.split("\n");
const [K, N] = input.shift().split(" ");
const LAN_arr = input.map(Number);




function solution(N, arr) {
  let answer = 0;
  let lt = 1; rt = Math.max(...arr);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    let sum = 0;
    for (let x of arr) {
       sum += Math.floor(x/mid);
    }
    if (N <= sum) {
      answer = Math.max(answer, mid);
      lt = mid + 1;
    } else {
      rt = mid-1;
    }
  }
  return answer;
}

console.log(solution(N, LAN_arr));