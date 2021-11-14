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
const input = `100`.split("\n");

const N = +input[0];
let count = 0;

for (let i = 1; i <= N; i++){
    let numStr = String(i);
    if (i < 100) {
        count++;
    } else {
        if (Number(numStr[0]) - Number(numStr[1]) === Number(numStr[1]) - Number(numStr[2])) {
            count++;
        }
    }
}
 console.log(count)
