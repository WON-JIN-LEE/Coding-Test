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
const input = `4
aba
abab
abcabc
a`.split("\n");

const N = +input.shift();
let count = N;

for (let i = 0; i < N; i++) {
    solution(input[i]);
}
console.log(count);

function solution(input) {
    const obj = {};
    for (let i = 0; i < input.length; i++){
        if (!obj[input[i]]) {
            obj[input[i]]=true;
        } else if (input[i] !== input[i - 1]) {
            count--;
            return ;
        }
    }
    return ;
}