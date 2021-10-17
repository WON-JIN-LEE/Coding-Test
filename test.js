
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
const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.split("\n");
input.pop();
const output = [];
let result = "";

for (const str of input) {
    solution(str);
    result += `\n`;
}

console.log(result);

function solution (arr) {
    arr = arr.split(" ");
    const k = arr.shift();
    const numArr = arr.map(Number);
    const visitied = Array.from({ length: k }, ()=>false);


    dfs(0, 0, k, numArr,visitied);
    
}

function dfs(index, cnt, k,numArr,visitied) {
    if (cnt == 6) {
        result += `${output.join(" ")}\n`;
        return;
    }

    for (let i = index; i < k; i++){
        if (visitied[i] === true) continue;


        visitied[i]=true;
        output.push(numArr[i]);
        dfs(i+1,cnt+1,k,numArr,visitied);
        output.pop();
        visitied[i]=false;
    }
}

