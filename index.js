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

let queue = [];
let f = 0;
let a = [];
for (let i = 1; i <= input[0]; i++) {
  const [k, b] = input[i].split(" ");
  const length = queue.length;

  switch (k) {
    case "size":
      a.push(length - f);
      break;
    case "pop":
      if (f === length) {
        a.push("-1");
      } else {
        a.push(queue[f]);
        f++;
      }
      break;
    case "empty":
      a.push(f === length ? 1 : 0);
      break;
    case "back":
      if (f === length) {
        a.push("-1");
      } else {
        a.push(queue[length - 1]);
      }
      break;
    case "front":
      if (f === length) {
        a.push("-1");
      } else {
        a.push(queue[f]);
      }
      break;
    case "push":
      queue.push(b);
      break;
  }
}

console.log(a.join("\n"));
