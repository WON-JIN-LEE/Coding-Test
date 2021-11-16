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
const input = `734 893`.split("\n");
const [A, B] = input[0].split(" ");
const reverNum = (str) => +str.split("").reverse().join("");
const reA = reverNum(A);
const reB = reverNum(B);
    
console.log(reA > reB ? reA : reB);

console.log('122222213' > '0')