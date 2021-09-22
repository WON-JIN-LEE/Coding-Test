
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


const input = `10`.split("\n");
solution(input);

function solution(input) {
 
    const num = Number(input[0]);

    const DP = new Array(num + 1).fill(0);

    for (let i = 2; i <= num; i++) {
        DP[i] = DP[i - 1] + 1;

        if (i % 2 === 0) {
            DP[i] = Math.min(DP[i], DP[i / 2] + 1);
        }

        if (i % 3 === 0) {
            DP[i] = Math.min(DP[i], DP[i / 3] + 1);
        }
    }
    return console.log(DP[num])
}