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
const input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`.split("\n");
solution(input);

function solution(input) {
  const N = +input.shift();
  const arr = input;
  const answer = [];
  arr.sort(compare);
  arr.forEach(ele => {
    if (!answer.includes(ele)) answer.push(ele);
  });
  console.log(answer.join("\n"));
}

function compare(a,b) {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
}
