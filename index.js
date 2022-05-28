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
const input = `mirkovC4nizCC44
C4`.split("\n");




// const inp =["1101110000", "1100001000", "1000011000", "0000000000", "0000100100", "1110101111"];
const inp = ["111", "101", "111"];


function solution(maps) {
  maps = maps.map((str) => str.split(""));

  let answer = new Set();
  let rows = maps.length;
  let cols = maps[0].length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  const stack = [];
  let size = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === "1") {
        stack.push([i, j]);
        
        size = 0;

        while (stack.length) {
          const [x, y] = stack.pop();
          
          if (maps[x][y] !== `1`) continue;
          maps[x][y] = "0";
          size++;


          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (
              nx > -1 &&
              ny > -1 &&
              nx < rows &&
              ny < cols &&
              maps[nx][ny] === "1"
            ) {
              stack.push([nx, ny]);
              
            }

          }
        }
        answer.add(size);
      }
    }
  }

  return Array.from(answer).sort((a,b)=> a-b);
}
console.log(solution(inp));