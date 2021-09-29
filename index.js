
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


const input = `2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1`.split("\n");

const testCase = input.shift();
const testArr = [];

//테스트 케이스 입력받기
for (let i = 0; i < testCase; i++) {
    const caseLen = input.shift();
    testArr[i] = input
        .splice(0, caseLen)
        .map(ele => ele.split(" ").map(Number));
    testArr[i].sort((a, b) => a[0] - b[0]);

}

const answer = testArr.map(arr => solution(arr));
answer.forEach(element => console.log(element));

function solution(input) {
    const arrLen = input.length;
    let tmp = input[0][1];
    let passNum = 1;

    for (let i = 1; i < arrLen; i++) {
        if (tmp > input[i][1]) {
            passNum += 1;
            tmp = input[i][1];
        }
    }
    return passNum;
}