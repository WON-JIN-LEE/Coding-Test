// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input=[];
// rl.on("line", function (x) {
//     input.push(x);
  
// }).on("close", function () {
//     solution(input);
//   process.exit();
// });
const input = `0 3 5 4 6 9 2 7 8
7 8 2 1 0 5 6 0 9
0 6 0 2 7 8 1 3 5
3 2 1 0 4 6 8 9 7
8 0 4 9 1 3 5 0 6
5 9 6 8 2 0 4 1 3
9 1 7 6 5 2 0 8 0
6 0 3 7 0 1 9 5 2
2 5 8 3 9 4 7 6 0`.split("\n");

const SIZE = 9;
const boardMap = input.map(ele => ele.split(" ").map(Number));
const zeroArr = findZero(boardMap);
const N = +zeroArr.length;
let answer = Array.from({ length :9},()=>[]);

sudokuCheck(0);
function sudokuCheck(cnt) {
    //종료조건
    if (cnt === N) {
        console.log(boardMap.map(ele => ele.join(" ")).join("\n"));

        process.exit(0);
    }

    let [zeroX, zeroY] = zeroArr[cnt];

    for (let i = 1; i <= SIZE; i++) {
        if (isPossible(zeroX, zeroY, i)) {
            boardMap[zeroX][zeroY] = i;
            sudokuCheck(cnt + 1);
            boardMap[zeroX][zeroY] = 0;
        }
    }
}


function findZero(boradMap) {
  const zeros = [];
  for (let i = 0; i < SIZE; i++){
    for (let j = 0; j <SIZE; j++) {
      if (boradMap[i][j] === 0) zeros.push([i, j]);
    }
  }
  return zeros;
}

function isPossible(x, y, value) {
  //row check  
  for (let i = 0; i < SIZE; i++){
    if(boardMap[x][i] === value) return false; 
  }

  //col check  
  for (let i = 0; i < SIZE; i++){
    if(boardMap[i][y] === value) return false; 
  }

  // 3 x 3 check
  let threeX = Math.floor(x / 3) * 3;
  let threeY = Math.floor(y / 3) * 3;
  for (let i = threeX; i < threeX+3; i++) {
    for (let j = threeY; j < threeY+3; j++) {
      if (boardMap[i][j] === value) return false;
    }
  }
  return true;
}