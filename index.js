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
const input = `1000 70 170`.split("\n");
console.log(solution(input));

function solution(input) {
    const [A, B, C] = input[0].split(" ").map(Number);
    if (B >= C) return -1;
    let count = Math.floor(A/(C-B)) +1 ;
    return count;
}