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
const input = `100 99 1000000000`.split("\n");

    let [A, B, V] = input[0].split(" ").map(Number);
    let start = 0;
    

    let day = Math.ceil((V-B)/(A-B));

    console.log(day);
