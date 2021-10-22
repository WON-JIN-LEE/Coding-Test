// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//   input.push(x)
  
// }).on("close", function () {
//     solution(input);
//   process.exit();
// });
const input = `One is 1`.split("\n");


const answer = solution(input);
console.log(answer);
function solution(input) {
    const string = input[0]
    const len = string.length;
    let result = '';

    for (let i = 0; i < len; i++) {

        if (string[i] >= "A" && string[i] <= "Z") {
            result += ROT13(string[i], "Z");
        } else if (string[i] >= "a" && string[i] <= "z") {
            result += ROT13(string[i], "z");
        } else {
            result += string[i];
        }

    }

    return result;
}
function ROT13(char, limt) {
    if (char.charCodeAt(0) + 13 > limt.charCodeAt(0)) {
        return String.fromCharCode(char.charCodeAt(0) + 13 - 26);
    } else 
        return String.fromCharCode(char.charCodeAt(0) + 13);
    }
