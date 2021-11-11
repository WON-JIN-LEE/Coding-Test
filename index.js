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
20 10 35 30 7`.split("\n");
solution(input);
    
function solution(inputs) {
    const n = +inputs[0];
    const numbers = inputs[1].split(" ").map(Number);
    let max = numbers[0];
    let min = numbers[0];
    
    for (let i = 1; i < n;i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

    console.log(`${min} ${max}`);
}