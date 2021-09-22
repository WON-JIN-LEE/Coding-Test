
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
    const fiveCount = fiveFun(n, m);
    const twoCount = twoFun(n, m);

    return console.log(Math.min(fiveCount, twoCount));
}

function fiveFun(n,m) {
    const fiveArr = new Array(3).fill(0);
    for (let i = 5; i <= n; i *= 5){
        fiveArr[0] += Math.floor(n / i);
    }
    for (let i = 5; i <= m; i *= 5){
        fiveArr[1] += Math.floor(m / i);
        
    }
    for (let i = 5; i <= n-m; i *= 5){
        fiveArr[2] += Math.floor((n-m) / i);
    }


    return fiveArr[0] - (fiveArr[1] + fiveArr[2]);
}

function twoFun(n,m) {
    const twoArr = new Array(3).fill(0);
        
    for (let i = 2; i <= n; i *= 2){
        twoArr[0] += Math.floor(n / i);
        
    }
    for (let i = 2; i <= m; i *= 2){
        twoArr[1] += Math.floor(m / i);
        
    }
    for (let i = 2; i <= n-m; i *= 2){
        twoArr[2] += Math.floor((n-m) / i);
        
    }
    return twoArr[0] - (twoArr[1] + twoArr[2]);

}


