
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



const input = `4 2`.split("\n");
    const [N, M] = input[0].split(" ").map(Number);
    const output = [];
    let result = '';
    dfs(1, 1);
    console.log(result);
    
function dfs(index, cnt) {
    if (cnt > M) {
        result += `${output.join(" ")}\n`;
        return;
    }

    for (let i = index; i <=N; i++){
        output.push(i);
        dfs(i,cnt + 1);
        output.pop();
    }
}