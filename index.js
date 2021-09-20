
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


const input = `3 16`.split("\n"); 
  solution(input);

function solution(arr) {
    const [M, N] = arr[0].split(" ").map(Number);
    const answer = [];

    for (let i = M; i <= N; i++){
        if (isPrime(i)) {
            answer.push(i);
        }
    }

    answer.forEach(ele => console.log(ele));
}


function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}