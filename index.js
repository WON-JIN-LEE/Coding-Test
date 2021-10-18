
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
const input = `-13`.split("\n");
    console.log(input[0]);

solution(input[0])

function solution(str) {
    let N = str*1 ;
    let res = '';

    if (!N) console.log('0');
    while (N) {
        if (N % (-2)) {
            res = '1' + res;
            N = Math.floor(N / -2) + 1;
        } else {
            res = '0' + res;
            N = Math.floor(N / -2);
        }
    }

    console.log(res);
}