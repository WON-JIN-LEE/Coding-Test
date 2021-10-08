
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

const input = `120`.split("\n");

solution(input);

function solution(input) {
const N = input[0]*1;
    let sum = 0;
    for (let i = 1; i <= N; i *= 10){
        sum += N - i + 1;
    }

    return console.log(sum);
}