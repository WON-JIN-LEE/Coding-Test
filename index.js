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
const input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`.split("\n");

const s = [];
let days = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

sol(11, 27);
sol(6, 22);
sol(1, 18);

function sol(month, day) {
  let result_m = month + 1;
  let result_d = 98 - (days[month] - day);

  while (1) {
    result_d -= days[result_m];

    result_m++;
    if (result_m > 12) {
      result_m %= 12;
    }

    if (result_d <= 31) {
      break;
    }
  }
  return;
}
