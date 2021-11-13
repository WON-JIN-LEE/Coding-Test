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
const input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split("\n");
let result = '';
let testLen = +input.shift();
for (let i = 0; i < testLen; i++) {
    solution(input[i]);
}

function solution(inputs) {
    const score = inputs.split(" ").map(Number);
    const N = score.shift();
    const avg = score.reduce((s, c) => s + c, 0)/N;
    let count =0;
    for (let i = 0; i < N; i++){
        if (avg < score[i]) { count++;}
    }

    let answer = (count / N * 100).toFixed(3);
    console.log(`${ answer }%`);
}