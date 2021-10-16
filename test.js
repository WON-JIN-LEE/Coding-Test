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

const input = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`.split("\n");


const N = Number(input.shift());
    const arr = []; 
    const visitied = [];
    const output = [];
    let result = Infinity;

    let count = 0;
    for(let i = 0; i < input.length; i++){
        arr.push(input[i].split(' ').map(num => Number(num)));
    }

console.log(arr)

DFS(0);
    
console.log(result)

function DFS(cnt) {
    if(cnt === N) {
        let tmp = 0;
console.log(output)

        for (let i = 1; i < output.length; i++){
                tmp += arr[output[i-1]][output[i]]; 
            }
            
        if (arr[output[N - 1]][output[0]] !== 0) {
            console.log(arr[output[N - 1]][output[0]]);
                
                tmp += arr[output[N-1]][output[0]];
            } else {
                tmp = Infinity;
            }

            result = Math.min(result, tmp);
            return;
        }



    for (let i = 0; i < N; i++){
        if (visitied[i]) continue;
        if(output.length > 0 && arr[output[output.length - 1]][i] === 0) continue;
        visitied[i] = true;
        output.push(i);
        DFS(cnt + 1);
        output.pop();
        visitied[i] = false;
    }
}