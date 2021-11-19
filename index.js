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
1
3
2
3`.split("\n");

const T = +input.shift();

for (let i = 0; i < T;i++){
const a= input.shift();
    const b = input.shift();
    const apartment = [];

    for (let i = 0; i <= a; i++){
        apartment.push([1]);
        for (let j = 1; j < b; j++){
            if (i === 0) {
                apartment[i].push(j + 1);
            } else {
                apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
            }
        }
    }
    
    console.log(apartment[a][b - 1]);
}