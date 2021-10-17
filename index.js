
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
const input = `3
4 10 20 30 40
3 7 5 12
3 125 15 25`.split("\n");

const caseNum = input.shift();
let result = '';

for (let i = 0; i < caseNum;i++){
    solution(input[i]);
}
console.log(result.trim());

function solution(str) {
    const tmpArr = str.split(" ").map(Number);
    const len = tmpArr.shift();
    tmpArr.sort((a, b) => a - b);
    let answer = 0;
    
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            answer += gcd(tmpArr[i], tmpArr[j]);
        }
    }

    
    result += `${answer}\n`;
    return;
}

function gcd(min, max) {
  if (min % max) return gcd(max, min % max);
  else return max;
}