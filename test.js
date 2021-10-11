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
3 4 1 2`.split("\n");

NextPermutFun(input);
function NextPermutFun(input) {
const selectP = input[1].split(" ").map(Number);
    let i = selectP.length - 1;
    let j = i;

    while (i > 0 && selectP[i - 1] >= selectP[i]) i--;

    if (i <= 0) return console.log(-1);
    
    while (selectP[j] <= selectP[i - 1]) j--;

    swap(selectP, i - 1, j);
    j = selectP.length - 1;
    const tmp = selectP.splice(i).sort((a,b)=>a-b);

    const answer = [...selectP, ...tmp];
    console.log(answer.join(" "));

    
    // while(i < j) {
    //     swap(selectP, i, j);
    //     i++;
    //     j--;
    //  console.log(selectP.join(" "));
    // }
    // return console.log(selectP.join(" "));

}
function swap(arr, index, nextIndex) {
    const temp = arr[index];
    arr[index] = arr[nextIndex];
    arr[nextIndex] = temp;
}