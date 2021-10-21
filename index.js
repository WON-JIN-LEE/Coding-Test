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
const input = `5
ABC*+DE/-
1
2
3
4
5`.split("\n");
solution(input);
function solution(input) {
    const str = input[1].split("");
   const numArr = input.slice(2).map(Number);
    const stack = [];


    str.forEach(char => {
        if ('A' <= char && char <= 'Z') {
            const index = char.charCodeAt(0) - 'A'.charCodeAt(0);
            stack.push(numArr[index]);

        } else {
             const a = parseFloat(stack.pop());
            const b =  parseFloat(stack.pop());
            stack.push(getResult(a, b, char));
        }
    })

    console.log(stack.pop());

    
}

function getResult(a, b, char) {
    let res;

    switch (char) {
        case "+":
            res = (b + a).toFixed(2);
            break;
        case "-":
            res = (b - a).toFixed(2);
            break;
        case "*":
            res = (b * a).toFixed(2);
            break;
        case "/":
            res = (b / a).toFixed(2);
            break;
    }
    return res;
}
