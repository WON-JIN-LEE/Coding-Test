
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


const input = `25 12`.split("\n");
solution(input);


function solution(input) {
    const [n, m] = input[0].split(" ").map(Number);
    const five = new Array(3).fill(0);
    const two = new Array(3).fill(0);
        
        fiveCount(n, 0, five);
        fiveCount(m, 1, five);
        fiveCount(n - m, 2, five);

        twoCount(n, 0, two);
        twoCount(m, 1, two);
        twoCount(n - m, 2, two);

    return console.log(Math.min(five[0] - (five[1] + five[2]), two[0] - (two[1] + two[2])));
}

function fiveCount(num,index, arr) {
           for (let i = 5; i <= num; i *= 5){
        arr[index] += Math.floor(num / i);
    }
}

function twoCount(num,index, arr) {
           for (let i = 2; i <= num; i *= 2){
        arr[index] += Math.floor(num / i);
    }
}


