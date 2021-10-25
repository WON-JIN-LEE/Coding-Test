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
const input = `1249`.split("\n");


const answer = solution(input);
console.log(answer);

function solution(input) {
    let n = input[0] * 1;
    let divider = 2;
    let result = '';
    while(n !==1)
            if (n % divider === 0) {
                result += `${divider}\n`
                n /= divider;
            } else {
                divider += 1;
            }
    return result.trimEnd();
}


