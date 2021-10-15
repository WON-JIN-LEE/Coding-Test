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

const input = `6
20 1 15 8 4 10`.split("\n");

const N = input[0]*1;
let numArr = input[1].split(" ").map(Number);
numArr.sort((a, b) => a - b);

const visited = new Array(N+1).fill(false);
const result = [];
let answer = 0;

do {
    answer = Math.max(answer, getFormulaResult(numArr));
} while(NextPermutFun(numArr));

console.log(answer);

function NextPermutFun(input) {
const selectP = input;
    let i = selectP.length - 1;
    let j = i;

    while (i > 0 && selectP[i - 1] >= selectP[i]){ i--;}
    if (i <= 0) return false;
    
    while (selectP[j] <= selectP[i - 1]){ j--;}
    swap(selectP, i - 1, j);

    const tmp = selectP.splice(i).sort((a,b)=>a-b);
    numArr = [...selectP, ...tmp];

    return true;
}
function swap(arr, index, nextIndex) {
    const temp = arr[index];
    arr[index] = arr[nextIndex];
    arr[nextIndex] = temp;
}

function getFormulaResult(input) {
    let sum = 0;
    for (let i = 0; i < N-1; i++){
        sum += Math.abs(input[i]-input[i+1]);
    }
    return sum;
}