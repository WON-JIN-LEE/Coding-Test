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
const input = `10
1 100 2 50 60 3 5 6 7 8`.split("\n");


const answer = solution(input);
console.log(Math.max(...answer));

function solution(input) {
    const cases = Number(input[0]);
    const inputs = input[1].split(' ').map(v=>Number(v));
    const dp = [];

    for (let i = 0; i < cases; i++) {
        let max = 0;
        let maxIndex = -1;
        for (let j = 0; j < i; j++) {
            console.log(`${inputs[i]} > ${inputs[j]} && ${dp[j]} > ${max}`)
            if (inputs[i] > inputs[j] && dp[j] > max) {
                max = dp[j];
                maxIndex = j;
            }
        }
    if(maxIndex !== -1){
        dp[i] = dp[maxIndex] + inputs[i];
    }else{
        dp[i] = inputs[i];
        }
        console.log(dp)
    }

    return dp ;
}