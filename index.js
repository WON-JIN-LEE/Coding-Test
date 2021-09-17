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


const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); //입력메세지 받음
const input = `5
3 1 4 3 2`.split("\n"); //입력메세지 받음

function solution(arr) {
    let timeArr = arr[1].split(" ").sort((a,b)=>a-b).map(Number);
    console.log(timeArr);

    timeArr=timeArr.map((_, i, arr) => {
        let sum = 0;
        for (let x = 0; x <=i; x++) {
            sum += arr[x];
        }
        return sum;
    });

  const answer = timeArr.reduce((sum, cur) => sum + cur, 0);
    console.log(answer);
}

solution(input);
