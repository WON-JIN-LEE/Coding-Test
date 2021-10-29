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
1 5 2 1 4 3 4 5 2 1`.split("\n");


const answer = solution(input);
console.log(Math.max(...answer));

function solution(input) {
    const n = Number(input[0]);
    const arr = input[1]
        .split(' ')
        .map(v => Number(v));
    const upDP = new Array(n).fill(0);
    const downDP = new Array(n).fill(0);

    for (let i = 0; i <n; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                count = Math.max(count, upDP[j]);
            }
        }
        upDP[i] = count +1;
    }

    for (let i = n-1; i >= 0; i--) {
        let count = 0;
        for (let j = i+1; j < n; j++) {
            if (arr[i] > arr[j]) {
                count = Math.max(count, downDP[j]);
            }
        }
        downDP[i] = count + 1;
        
    }
    const result = upDP.map((v, idx) => v + downDP[idx]);
    
    return result;
}