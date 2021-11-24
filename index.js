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
55 185
58 183
88 186
60 175
46 155`.split("\n");


  const N = +input.shift();
const arr = input.map(ele => ele.split(" "));
const answer = [];

for (let i = 0; i < N; i++){
  const [x, y] = arr[i];
  let count = 1;
  for (let j = 0; j < N; j++) {
    if (x < arr[j][0] && y < arr[j][1]) count++;
  }
  answer.push(count);
}
console.log(answer.join(" "));
