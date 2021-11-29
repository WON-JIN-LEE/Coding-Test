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
2 4 -10 4 -9`.split("\n");

console.log(solution(input));

function solution(input) {
  let [n, x] = input;
  x = x.split(" ").map(Number);
  const answer = [];
  const set = Array.from(new Set(x)).sort((a,b)=>a-b);
  const object = {};

  set.forEach((item, idx) => object[item] = idx);

  for (let i = 0; i < x.length; i++){
    answer.push(object[x[i]]);
  }

  return answer.join(" ");
}