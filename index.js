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
const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split("\n");
const [N, A, M, B] = input.map(str => str.split(" ").map(Number))
A.sort((a, b) => a - b);


const numberCountMap = new Map();
for (let num of A) {
  if (numberCountMap.has(num)) numberCountMap.set(num, numberCountMap.get(num) + 1);
  else numberCountMap.set(num, 1);
}

const answer = [];
for (let num of B) {
  let getCount = numberCountMap.get(num) || 0;
  answer.push(getCount)
}
console.log(answer.join(" "))

