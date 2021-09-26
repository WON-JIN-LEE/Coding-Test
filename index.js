
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


const input = `6
30 20 10 30 20 50`.split("\n");

solution(input);

function solution(input) {
    const num = Number(input[0]);
    const arr = input[1].split(" ").map(Number);
    const DP = Array.from({ length: num + 1 }, () => 0);

    const answer = new Set();

    for (let i = 1; i < num; i++) {
        DP[i] = [1, [arr[i]]];
        
        let currentElement = arr[i];
        let cnt = 0;

        for (let j = 0; j < i; j++) {
            if (currentElement > arr[j]) {
                cnt = Math.max(cnt, DP[j]);
                answer.add(currentElement);
            }
        }
        DP[i] += cnt;
    }
    console.log(DP);
}