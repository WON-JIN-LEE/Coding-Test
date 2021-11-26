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
const input = `1
4000`.split("\n");
solution(input);
function solution(input) {
  const N = +input.shift();
  const arr = input.sort((a, b) => a - b).map(Number);


  //산술평균
  const avr = (arr.reduce((acc, cur) => acc + cur, 0) / N).toFixed(0);
  
  //중앙값
  const midNum = arr[Math.floor(N / 2)];

  //최빈값
    const numObj = {};
    for (let num of arr) {
      if (numObj[num]) {
        numObj[num] = numObj[num] + 1;
      } else {
        numObj[num] = 1;
      }
    }

let hitMaxNum = Math.max(...Object.values(numObj));
let hitMaxNumArr = [];
let hitMaxNumResult = 0;
for (let numKey in numObj) {
  if (numObj[numKey] === hitMaxNum) {
    hitMaxNumArr.push(numKey);
  }
  }
  if (hitMaxNumArr.length > 1) {
  hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
  hitMaxNumResult = hitMaxNumArr[1];
} else {
  hitMaxNumResult = hitMaxNumArr[0];
  }
  
  //범위값
 const maxSubMin = arr[arr.length - 1] - arr[0];
  
  console.log(avr);
  console.log(midNum);
  console.log(hitMaxNumResult);
  console.log(maxSubMin);
}