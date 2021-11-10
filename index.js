// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input=[];
rl.on("line", function (x) {
    input.push(x);
  
}).on("close", function () {
    solution(input);
  process.exit();
});
const input = `5 8 20
5 8 17
0 0 0`.split("\n");

let result = '';
let start = 1;
for (let i = 0; i < input.length; i++){
    solution(input[i]);
    start += 1;
}
console.log(result.trimEnd());
function solution(inputs) {
     let count = 0; 
    let [L, P, V] = inputs.split(" ").map(Number);
    while (V > P) {
        V = V - P;
        count += L;
    }

    if (L > V) {
        count += V;
    } else { count += L; }

    result +=`Case ${start}: ${count}\n`;
    return;
}