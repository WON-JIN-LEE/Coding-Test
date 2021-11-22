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
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5`.split("\n");
const N = +input.shift();
for (let i = 0; i < N; i++) {
    solution(input[i]);
}

function solution(input) {
    const [x1, y1, r1, x2, y2, r2] = input.split(" ").map(Number);
    let range = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if (range === 0) {
        if (r1 !== r2) console.log(0);
        else if (r1 === r2) console.log(-1);
    }
    else if (range < r1 + r2) {
        if (range + r1 < r2) console.log(0);
        else if (range + r2 < r1) console.log(0);
        else if (range + r2 === r1) console.log(1);
        else if (range + r1 === r2) console.log(1);
        else console.log(2);
    } else if (range === r1 + r2) {
        console.log(1);
    } else if (range > r1 + r2) {
        console.log(0);
    }
}