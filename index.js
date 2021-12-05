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
const input = `2
6
22`.split("\n");

var cnt = input[0];
var inputlist = input.slice(1);
 
const countFibonacci = n => {
  const returnObj = {
    zeroCount: [1, 0],
    oneCount: [0,1]
  }
 
  if (n <= 1) {
    return returnObj  
  }
 
  for (let i = 2; i < n+1; i++) {
    returnObj.zeroCount.push(returnObj.zeroCount[i-1] + returnObj.zeroCount[i-2]);
    returnObj.oneCount.push(returnObj.oneCount[i-1] + returnObj.oneCount[i-2]);
  }
 
  return returnObj;
};
 
// 미리 40까지의 list를 생성
const cache = countFibonacci(Math.max(...inputlist));
console.log(cache);
for(let i = 0; i < cnt; i++) {
  num = inputlist[i];
  console.log(`${cache.zeroCount[num]} ${cache.oneCount[num]}`);
}
