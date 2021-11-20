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
const input = `3
8
10
16`.split("\n");

solution(input);
function solution(input) {
    const N = +input.shift();
    let result = '';
    const answer = [0,0];
    for (let i = 0; i < N; i++){
        let min = Infinity;

        for (let j = 4; j <= input[i]; j++) {
        
            if (isPrime(j) && isPrime(input[i] - j)) {
                if (Math.abs(input[i] - 2 * j) < min) {
                    answer.pop();
                    answer.pop();
                    answer.push(j);
                    answer.push(input[i] - j);
                    min = Math.abs(input[i] - 2 * j);
                } 
            };
        }
        answer.sort((a, b) => a - b);
console.log(answer.join(" "));

    }
}
    
function isPrime(n) {
  if (n <= 1) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}