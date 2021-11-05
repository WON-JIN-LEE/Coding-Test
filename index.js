// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//   input.push(x*1)
  
// }).on("close", function () {
//     solution(input);
//   process.exit();
// });
const input = `4
-+0++++--+`.split("\n");
let find = false;
    const N = +input[0];
const inputs = input[1];
    let map = Array.from({length:N},()=>new Array(N).fill(-1));
    
let idx = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            map[i][j] = inputs[idx];
            idx += 1;
        }
}
    
let v = [];
let result = [];


solve(0);
loop1:
console.log(result);

function solve(idx) {
    if (find) return;
    if (idx === N) {
        result.push(v.join(" "));
        find = true;
        return;
    }
     for (let i = -10; i <= 10; i++)
    {
        v.push(i);
        // idx 번째의 숫자가 모든 조건을 만족한다면 idx+1번째로 진행
        if (possible(idx)) solve(idx + 1);
        v.pop();
    }
}

function possible(idx) {
 let sum = 0;

    for (let i = idx; i >= 0; i--)
    {
        // V[idx] 부터 V[i] 까지의 합
        sum += v[i];

        // V[idx] 부터 V[i] 까지의 합은 map[i][idx] 의 부호를 만족해야 한다
        if (map[i][idx] == '+' && sum <= 0)	return false;
        if (map[i][idx] == '-' && sum >= 0)	return false;
        if (map[i][idx] == '0' && sum != 0)	return false;
    }
    return true;
}