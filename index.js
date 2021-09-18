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


// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 
const input = `55+50-40`.split("\n"); 
console.log(input);


function solution(arr) {
  const numbers = input[0].split("-").map((str) => // -를 기준으로 분리해서 분리한 문자열을 모두 탐색
    str.split("+")
       .map(Number)
       .reduce((s, v) => s + v, 0) // +를 기준으로 나눠서 모두 더해준다.
    ); // -를 기준으로 분리된 문자열의 갯수만큼 numbers 배열의 원소 개수가 된다.
    console.log(numbers);
  let answer = numbers.reduce((s, v,) => s - v, numbers[0]*2); // 첫번째 원소에서 나머지 모든 원소를 빼준다.
      console.log(answer);
}

solution(input);
