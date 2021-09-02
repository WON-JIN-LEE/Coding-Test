let fs = require("fs");
let input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const count = Number(input[0]);
let stackNumber = 1;
const stack = [];
const result = [];

for (let i = 1; i <= count; i++) {
    let target = Number(input[i])

    if (stackNumber <= target) {
        while (stackNumber <= target) {
            stack.push(stackNumber);
            console.log("+");

            if (stackNumber === target) {
                stack.pop();
                console.log("-");
            }
            stackNumber++;
        }
    }else{
        if (stack[stack.length - 1] !== target) {
            console.log("NO");
            break;
        } else {
            stack.pop();
            console.log("-");
        }
    }
}
