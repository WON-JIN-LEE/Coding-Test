const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

const len = input[0];
const arr = [];
const stack = [];
let answer = "";

for (let i = 0; i < len; i++) {
    arr[i] = i + 1;
}
for (let j = 1; j <= len; j++) {
    //4
    let count = 1;
    while (count <= len && stack[stack.length - 1] != input[j]) {
        stack.push(arr.shift());
        answer += "+\n";
        count++;
    }
    if (stack[stack.length - 1] == input[j]) {
        stack.pop();
        answer += "-\n";
    } else {
        answer = "NO";
        break;
    }
}
console.log(answer);