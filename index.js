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
9 5 4 8`.split("\n");
solution(input);


function solution(input) {
    const len = input[0]*1;
    const arr = input[1].split(" ").map(Number);
    const stack = [];

    for (let i = 0; i < len; i++){
        while (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
            let tmp = stack.pop();
            arr[tmp] = arr[i];
            console.log(tmp);
        }

        stack.push(i);
            console.log("push : "+ i)

    }
    while(stack.length !== 0){
    arr[stack.pop()] = -1;
}
    console.log(arr.join(" ").trim());
}