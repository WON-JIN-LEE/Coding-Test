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
const input = `3`.split("\n");
const N = Number(input[0]); // 원판의 갯수
const answer = [];

function Hanoi(num, from, to, other){
    if (num === 1) {
        answer.push(`${from} ${to}`);
        return;
    }else{
        // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동
        Hanoi(num - 1 , from, other, to);
        // 맨 아래 원반을 목적지로 이동시킴
        answer.push(`${from} ${to}`);
        //다른 곳으로 옮겼던 원반들을 그 위에 얹음
        Hanoi(num - 1, other, to, from);
    }
}

Hanoi(N, 1, 3, 2);

console.log(answer.length);
console.log(answer.join("\n"));
