
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


const input = `20 2`.split("\n");

solution(input);

function solution(input) {
    const [n, k] = input[0]
        .split(" ")
        .map(Number);
    const DP = Array.from({length:k+1},()=> Array.from({length:n+1},()=> 0));

    for (let i = 0; i <= n; i++) {
        DP[1][i] = 1;
    }

    for (let i = 2; i <= k; i++) {
        for (let j = 0; j <= n; j++) {
            if (j === 0) {
                DP[i][j] = 1;
            } else {
                for (let x = 0; x <=j; x++) {
                    DP[i][j] = (DP[i][j] + DP[i - 1][x]) % 1000000000;
                }
            }
        }
    }

    return console.log(DP[k][n]);

}