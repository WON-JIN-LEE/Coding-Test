const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const lStack = input[0].split("");
const rStack = [];

const len = parseInt(input[1]);

for (let i = 2; i < 2 + len; i++) {
    const [cmd, value] = input[i].split(" ");

    if (cmd === "L" && lStack.length) rStack.push(lStack.pop());
    else if (cmd === "D" && rStack.length) lStack.push(rStack.pop());
    else if (cmd === "B" && lStack.length) lStack.pop();
    else if (cmd === "P") lStack.push(value);
}

const answer = lStack.join("") + rStack.reverse().join("");
console.log(answer);