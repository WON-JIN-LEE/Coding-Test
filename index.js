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
const input =
  `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`.split("\n");
input.pop();

const answer = [];
const open = ["(", "["];
const close = [")", "]"];
for (let i = 0; i < input.length; i++) {
  let isBool = false;
  const stack = [];
  let str = input[i];

  for (let j = 0; j < str.length; j++) {
    if (open.includes(str[j])) stack.push(str[j]);
    else if (close.includes(str[j])) {
      if (stack.pop() !== open[close.indexOf(str[j])]) {
        answer.push("no");
        isBool = true;
        break;
      }
    }
  }

  if (!isBool)
    if (stack.length === 0) answer.push("yes");
    else answer.push("no");
}
console.log(answer.join("\n"));
