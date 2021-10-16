
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
const input = `baekjoon online judge`.split("\n");
solution(input);

function solution(input) {
    
    const string = input[0];
    const len = string.length;
    let answer = '';
    const info = new Array(len).fill(0);

    let canReverse = true, firstFind = false;

    for (let i = 0; i < len; i++) {
        if (string[i] === "<") {
            canReverse = false;
        } else if (string[i] === ">") {
            canReverse = true;
        } else {
            if (canReverse && string[i] !== " ") {
                info[i] = 1;
            }
        }
    }

    const infoLen = info.length;
    for (let i = 0; i < infoLen;) {
        if (info[i] === 1) {
            if (!firstFind) {
                firstFind = true;
                start = i;
            }
            i++;

        } else {
            if (firstFind) {
                end = i;
                answer += string.slice(start, end).split('').reverse().join("");
                firstFind = false;
            }
            answer += string[i];
            i++;
        }
    }
    
    //info의 마지막 요소가 1로 끝나는 경우 예외처리
    if (firstFind) {
    end = infoLen;
    answer +=string.slice(start, end).split('').reverse().join("");
    firstFind = false;
    }
    
    console.log(answer);
}