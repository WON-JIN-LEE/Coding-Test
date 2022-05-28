
const inp =["1110000", "0001110", "0000001",'0000011'];
function solution(maps) {
  maps = maps.map((str) => str.split(""));

  let answer = new Set();
  let rows = maps.length;
  let cols = maps[0].length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  const stack = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === "1") {
        stack.push([i, j]);
        
        let temp = new Set();

        while (stack.length) {
          const [x, y] = stack.pop();

          maps[x][y] = "0";
          temp.add(`${x} ${y}`)


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
      answer.add(temp.size);
      }
    }
  }

  return Array.from(answer).sort((a,b)=> a-b);
}
console.log(solution(inp));