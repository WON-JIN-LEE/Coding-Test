# N-Queen (9663번) [node.js, JavaScript] 

## 문제 설명
N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.

N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 N이 주어진다. (1 ≤ N < 15)

## 출력
첫째 줄에 퀸 N개를 서로 공격할 수 없게 놓는 경우의 수를 출력한다.

### 문제 설명
- 백트래킹 문제로 퀸의 움직임은 상하좌우, 대각선으로 이동이 가능합니다. 예를 들어 N = 4일때 첫번째 줄 y=0일때에 Q을 나둘수 있는 방법은 x가 0, 1, 2, 3일때 4가지 경우가 발생합니다.
- 아래로 내려갈수로 위에서 먼저 자리를 정한 Q의 y,x와 같지 않고, 대각선상에 위치하는지 따지면서 가지치기를 진행하면 됩니다.

### 의사코드 
1. 공격할 수 없는 경우의 수를 count변수로 세어줍니다.
2. 첫 줄에 Q이 위치할 수 있는 방법은 N가지입니다. 따라서 N번 go함수를 호출해줍니다.
3. go함수는 현재 깊이 y값과 x 좌표 값을 인자로 받습니다. go 호출할때 현재 Q이 놓여진 좌표를 vy[y]=y, vx[y]=x 이와 같이 저장합니다. 
4. 이전 Q의 좌표 vy, vx값과 같다면 같은 가로와 세로선상에 존재하게 되기 때문에 제외시킵니다. 대각선은 이전 Q의 vy, vx값과 현재 y,x의 차이값의 절대값이 같다면 대각선상에 위치하고 있기때문에 제외시킵니다.
5. 종료조건인 y가 N-1과 같아진다면 N개의 Q이 공격할 수 없는 자리를 찾은 경우를 의미하므로 count를 1증가하고 즉시 함수를 종료시킵니다.

### Code
```js
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

const N = +input[0];
const vx = new Array(N + 1);
const vy = new Array(N + 1);

let count =0;
for (let i = 0; i < N; i++) {
  go(0, i);
}

console.log(count);

function go(y, x) {
  
  //가지치기
  for (let i = 0; i < y; i++) {
    if (y === vy[i]) return 0;  // 가로겹침
    if (x === vx[i]) return 0; // 세로겹침
    if (Math.abs(x - vx[i]) === Math.abs(y - vy[i])) return 0; //대각선 겹침
  }
  
//종료조건
   if (y === N - 1) {
     count++;
     return;
   }

  vy[y] = y;
  vx[y] = x;

  for (let i = 0; i < N; i++) {
    go(y+1, i);
   }
   return 0;
 }
```