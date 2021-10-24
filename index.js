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
const input = `ZZZZZ 36`.split("\n");


const answer = solution(input);
console.log(answer);

function solution(input) {
    const [N,B] = input[0].split(" ");
    const answer = parseInt(N, B).toString(10);
    return answer;
}

// const answer = solution(input);
// console.log(answer);

// function solution(input) {
//     const [N,B] = input[0].split(" ");
//     const answer = parseInt(N, 10).toString(B).toUpperCase();
    
//     return answer;
// }