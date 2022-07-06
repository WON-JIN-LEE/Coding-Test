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
const input = `15 12`.split("\n");
const [n, k] = input[0].split(' ').map(Number);
let arr = [];

for (let i = 2; i <= n; i++) arr.push(i);

let count = 0;
let answer = 0;
while (count < k) {
  let prime = arr[0];

  arr=arr.filter(v => {
    if(v % prime !==0) return true;
    
    count += 1;
    if (count === k) answer = v;
    return false;
  })
}

console.log(answer)