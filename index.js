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
const input = `6
1 2 3 4 5 6
2 1 1 1`.split("\n");
const N = +input[0];
const numbers = input[1].split(" ").map(Number);
const operator = input[2].split(" ").map(Number);

const operObj = {
    0: (oper1, oper2) => oper1 + oper2,
    1: (oper1, oper2) => oper1 - oper2,
    2: (oper1, oper2) => oper1 * oper2,
    3: (oper1, oper2) => {
      if (oper1 < 0) {
        return -Math.floor(-oper1 / oper2);
      }
      return Math.floor(oper1 / oper2);
    }, 
  };


const tmp = [];
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
dfs(0);
console.log(`${max}\n${min}`);

function dfs(cnt) {
  if (cnt === N - 1) {
    
    let sum = numbers[0];
    tmp.forEach((ele, i) => {
      let num = numbers[i + 1];
      sum = operObj[ele](sum, num);
    });

    if (sum > max) max = sum;
    if (sum < min) min = sum;
    return;
  }

  for (let i = 0; i < 4; i++){
    if (operator[i] === 0) continue;
    operator[i] -= 1;
    tmp.push(i);
    dfs(cnt + 1);
    tmp.pop();
    operator[i] += 1;
  }
}